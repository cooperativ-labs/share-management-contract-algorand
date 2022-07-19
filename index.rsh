'reach 0.1';
const Params = Object({
    companyName: Bytes(128),
    bT: Token,
    lockSale: Bool,
    managerAddr: Address,
    authorizedST: UInt256,
});

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });

    const currSale = Struct([['qty', UInt], ['price', UInt], ['sold', UInt], ['status', Bytes(5)], ['cumProceeds', UInt]]);

    
    const Creator = Participant('Creator', {
        getParams: Fun([Bytes(15)], Params),
        iDeployed: Fun([Bytes(15)], Null),
    })

    const User = API({
        addWL: Fun([Address], Bool),
        remWL: Fun([Address], Bool),
        aST: Fun([Address, Address, UInt256], Bool),
        dBT: Fun([UInt256], Bool),
        cBT: Fun([], UInt256),
        cCM: Fun([Address], Bool),
        optIn: Fun([], Bool),
        docHash: Fun([Bytes(96)], Bool),
        addCoopId: Fun([Bytes(36)], Bool),
        createOS: Fun([UInt, UInt], currSale),
        buyOS: Fun([UInt], currSale),
        endOS: Fun([], Bool),
        claimOSpr: Fun([], Bool),

    });

    const Views = View({
        totSTBTD: Tuple(UInt256, UInt256, UInt256),
        saleLocked: Bool,
        claimSTBT: Fun([Address], Tuple(UInt256, UInt256)),
        totSTBTDRec: Fun([Address], Tuple(UInt256, UInt256, UInt256)),
        wlMember: Fun([Address], Bool),
        wlMembers: Array(Address, 25),
        vHash: Tuple(Bytes(96), UInt, UInt),
        vcVersion: Tuple(Bytes(4),Bytes(36)),
        vBtBal: Tuple(UInt256,Token),
        vCcCm: Tuple(Address, Address),
        vOptedIn: Fun([Address], Bool),
        vCurrSale: currSale,
       
    });

    init();

    Creator.only(() => {
        const { companyName, lockSale, managerAddr, bT, authorizedST } = declassify(interact.getParams('I have deployed'));
    });

    Creator.publish(companyName, lockSale, managerAddr, bT, authorizedST);

    Creator.interact.iDeployed('I HAVE DEPLOYED');

    const end = UInt.max;
    const unwInt = (m) => fromSome(m, UInt256(0));
    const unwInt64 = (m) => fromSome(m, 0);
    const unwWlMap = (m) => fromSome(m, Creator);
    const unwUintArrMap = (m) => fromSome(m, Array.replicate(100, 0));
    const unwBool = (m) => fromSome(m, false);
    const claimST = new Map(UInt256); //share tokens waiting to be claimed by each investor
    const claimBT = new Map(UInt256); //backing tokens waiting to be claimed by each investor
    const totRecST = new Map(UInt256); //total received share token by each investor (NOT USED)
    const totAllST = new Map(UInt256); //total allocated share token for each investor
    const totRecBT = new Map(UInt256); //total received backing token by each investor
    const iDistrNum = new Map(UInt256); //each investor's claimed distribution number
    const optedIn = new Map(Bool); //each investor's opted in status
    const wl = new Set(); //whitelist
    const iStHis = new Map(Array(UInt, 100));

    const [state] = parallelReduce([{
        saleDetails: {qty: 0, price: 0, sold: 0, status: 'ended', cumProceeds: 0},
        wlArr: Array.replicate(25, Creator),
        wlIndex: 0,
        cv: ['1.04', 'cooperativIdcooperativIdcooperativId'],
        currDistr: UInt256(0),
        totST: UInt256(0),
        totBT: UInt256(0),
        saleLocked: lockSale,
        ctcMan: managerAddr,
        distrHis: Array.replicate(100, [0, 0]), //[totST,distrAmount] 
        distrNum: UInt256(0),
        distrIndex: 0,
        docHash: ['ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur', 0, 0, ],
    }])
        .invariant(balance() == 0)
        .while(true)
        .paySpec([bT])
        .define(() => {
            Views.totSTBTD.set([state.totST, state.totBT, state.distrNum]);
            Views.saleLocked.set(state.saleLocked);
            Views.claimSTBT.set((addr) => [unwInt(claimST[addr]), unwInt(claimBT[addr])]);
            Views.totSTBTDRec.set((addr) => [unwInt(totAllST[addr]), unwInt(totRecBT[addr]), unwInt(iDistrNum[addr])]);
            Views.wlMember.set((addr) => wl.member(addr));
            Views.vHash.set(state.docHash);
            Views.vcVersion.set([state.cv[0], state.cv[1]]);
            Views.vBtBal.set([UInt256(balance(bT)), bT]);
            Views.vCcCm.set([Creator, state.ctcMan]);
            Views.vOptedIn.set((addr) => unwBool(optedIn[addr]));
            Views.vCurrSale.set(currSale.fromObject(state.saleDetails));
        })
        .api(
            User.createOS,
            // Assumes
            ((qty, price) => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(qty > 0, 'you must sell at least 1 share token');
                assume(price > 0, 'price must be greater than 0');
                assume(state.saleDetails.status != 'activ', 'sale must not be active');
            }),
            // Payments
            ((x,y) => [0, [0, bT]]),
            // Consensus
            ((qty, price, res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(qty > 0, 'you must sell at least 1 share token');
                require(price > 0, 'price must be greater than 0');
                const newSD = Object.set(state.saleDetails, 'status', 'activ');
                const newSD2 = Object.set(newSD, 'price', price);
                const newSD3 = Object.set(newSD2, 'qty', qty);
                const newState = Object.set(state, 'saleDetails', newSD3);
                res(currSale.fromObject(newState.saleDetails));
                return [newState];
            })
        ).api(
            User.endOS,
            // Assumes
            (() => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(state.saleDetails.status == 'activ', 'sale must be active');
            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(state.saleDetails.status == 'activ', 'sale must be active');
                const newSD = Object.set(state.saleDetails, 'status', 'ended');
                const newSD2 = Object.set(newSD, 'sold', 0);
                const newSD3 = Object.set(newSD2, 'qty', 0);
                const newState = Object.set(state, 'saleDetails', newSD3);
                res(true);
                return [newState];
            })
        )
        .api(
            User.buyOS,
            // Assumes
            ((qty) => {
                assume(qty > 0, 'you must buy at least 1 share token');
                assume(state.saleDetails.status == 'activ', 'no sale is active');
                assume(state.saleDetails.qty >= qty, 'do not try to buy more than available');
                assume(wl.member(this), 'you must be whitelisted to buy');
            }),
            // Payments
            ((qty) => [0, [state.saleDetails.price * qty, bT]]),
            // Consensus
            ((amt, res) => {
                const price = state.saleDetails.price;
                require(amt > 0, 'you must sell at least 1 share token');
                require(state.saleDetails.status == 'activ', 'no sale is active');
                require(state.saleDetails.qty >= amt, 'do not try to buy more than available');
                require(wl.member(this), 'you must be whitelisted to buy');
                // increase allocation for buying investor
                claimST[this] = unwInt(claimST[this]) + UInt256(amt);
                //increase total allocated share token for each investor
                totAllST[this] = unwInt(totAllST[this]) +  UInt256(amt);
                const newTotST = state.totST +  UInt256(amt);
                const iStArr = unwUintArrMap(iStHis[this]);
                const ind = unwInt64(iStArr.indexOf(0));
                iStHis[this] = iStArr.set(ind, amt); //set the last element==0 to amt in iStArr
                const newSD2 = Object.set(state.saleDetails, 'qty', state.saleDetails.qty - amt);
                const newSD3 = Object.set(newSD2, 'sold', state.saleDetails.sold + amt);
                const newSD4 = Object.set(newSD3, 'cumProceeds', state.saleDetails.cumProceeds + (amt * price));
                const newSD5 = Object.set(state, 'saleDetails', newSD4);
                const newState = Object.set(newSD5, 'totST', newTotST);
                res(currSale.fromObject(newState.saleDetails));
                return [newState];
            })
        ).api(
            User.claimOSpr,
            // Assumes
            (() => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(state.saleDetails.cumProceeds > 0, 'available proceeds must be greater than 0');
                assume(balance(bT) >= state.saleDetails.cumProceeds, 'weirdly insufficienct balance of BT');
            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(state.saleDetails.cumProceeds > 0, 'available proceeds must be greater than 0');
                require(balance(bT) >= state.saleDetails.cumProceeds, 'weirdly insufficienct balance of BT');
                transfer([0, [state.saleDetails.cumProceeds, bT]]).to(this);
                const newSD = Object.set(state.saleDetails, 'cumProceeds', 0);
                const newState = Object.set(state, 'saleDetails', newSD);
                res(true);
                return [newState];
            })
        )
        .api(
            User.docHash,
            // Assumes
            ((_) => {
                const num = state.docHash[1];
                assume(num == 0, 'hash is immutable');
                assume(this == Creator || this == state.ctcMan, 'only creator or contract manager can change hash');

            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((hash, res) => {
                const num = state.docHash[1];
                require(num == 0, 'hash is immutable');
                require(this == Creator || this == state.ctcMan, 'only creator or contract manager can change hash');
                const newState = Object.set(state, 'docHash', [hash, num + 1, thisConsensusTime()]);
                res(true);
                return [newState];
            })
        )
        .api(
            User.addWL,
            // Assumes
            ((i) => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(typeOf(i) == Address);
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((i, res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(typeOf(i) == Address)
                wl.insert(i);
                const newState = Object.set(state, 'wlIndex', state.wlIndex >= 24 ? 0 : state.wlIndex + 1)
                const a = state.wlArr;
                const ind = (state.wlIndex >= 24) ? 0 : state.wlIndex + 1
                const wlArray = a.set(ind, i);
                const newState2 = Object.set(newState, 'wlArr', wlArray);
                res(true);
                return [newState2];
            })
        )
        .api(
            User.remWL,
            // Assumes
            ((i) => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(typeOf(i) == Address)
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((i, res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(typeOf(i) == Address)
                wl.remove(i);
                res(true);
                return [state];
            })
        )
        .api(
            User.aST,
            // Assumes
            ((user, i, amt) => {
                assume(user == Creator || user == state.ctcMan, 'you must be creator or manager');
                assume(amt > UInt256(0));
                assume(typeOf(i) == Address)
            }),
            // Payments
            ((_, _, amt) => [0, [0, bT]]),
            // Consensus
            ((user, i, amt, res) => {
                require(user == Creator || user == state.ctcMan, 'you must be creator or manager');
                require(amt > UInt256(0));
                require(typeOf(i) == Address);
                wl.insert(i);
                claimST[i] = unwInt(claimST[i]) + amt;
                totAllST[i] = unwInt(totAllST[i]) + amt;
                const newTotST = state.totST + amt;
                const iStArr = unwUintArrMap(iStHis[i]);
                const ind = unwInt64(iStArr.indexOf(0));
                iStHis[i] = iStArr.set(ind, UInt(amt)); //set the last element==0 to amt in iStArr
                res(true);
                return [Object_set(state, 'totST', newTotST)];
            })
        )
        .api(
            User.optIn,
            // Assumes
            (() => {
            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                optedIn[this] = true ;
                res(true);
                return [state];
            })
        ).api(
            User.addCoopId,
            // Assumes
            ((id) => {
            }),
            // Payments
            ((id) => [0, [0, bT]]),
            // Consensus
            ((coopId,res) => {
                const newState = Object.set(state, 'cv', [state.cv[0], coopId]);
                res(true);
                return [newState];
            })
        )
        .api(
            User.dBT,
            // Assumes
            ((amt) => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(UInt(amt) > 0);
            }),
            // Payments
            ((amt) => [0, [UInt(amt), bT]]),
            // Consensus
            ((amt, res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(UInt(amt) > 0);
                const newTotBT = state.totBT + amt;
                const newState1 = Object_set(state, 'totBT', newTotBT);
                const newDistrNum = state.distrNum + UInt256(1);
                const newState2 = Object_set(newState1, 'distrNum', newDistrNum);
                const newState3 = Object_set(newState2, 'currDistr', amt);
                res(true);
                return [newState3];
            })
        )
        .api(
            User.cBT,
            // Assumes
            (() => {
                assume(wl.member(this));
                assume(UInt256(balance(bT)) > UInt256(0), 'well, balance(bT) is 0');
                assume(state.totST > UInt256(0), 'totST is 0. This means there should be no distributions yet');
                assume(state.totST >= unwInt(totAllST[this]), 'weirdly, totST is less than totAllST[this]');
                assume((unwInt(totAllST[this]) > UInt256(0)), 'totAllST[this] is 0. This means you should not rec distr');
                const has = (unwInt(totAllST[this]) * state.currDistr) / state.totST; 
                assume(UInt(has) <= (balance(bT)), 'weirdly, trying to withdraw more than available balance');
            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                require(wl.member(this));
                require(UInt256(balance(bT)) > UInt256(0), 'well, balance(bT) is 0');
                require(state.totST > UInt256(0), 'totST is 0. This means there should be no distributions yet');
                require(state.totST >= unwInt(totAllST[this]), 'weirdly, totST is less than totAllST[this]');
                require((unwInt(totAllST[this]) > UInt256(0)), 'totAllST[this] is 0. This means you should not rec distr');
                const has = (unwInt(totAllST[this]) * state.currDistr) / state.totST; 
                require(UInt(has) <= (balance(bT)), 'weirdly, trying to withdraw more than available balance');
                transfer([0, [UInt(has), bT]]).to(this);
                totRecBT[this] = unwInt(totRecBT[this]) + has;
                iDistrNum[this] = unwInt(iDistrNum[this]) + UInt256(1); 
                res(has);
                return [state];
            })
        )
        .api(
            User.cCM,
            // Assumes
            ((addr) => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(typeOf(addr) == Address);
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((newCtcMan, res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(typeOf(newCtcMan) == Address);
                res(true);
                return [Object.set(state, 'ctcMan', newCtcMan)];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [state];
        });

    commit();
    exit();
});
