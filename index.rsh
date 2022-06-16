'reach 0.1';

const Params = Object({
    companyName: Bytes(128),
    bT: Token,
    lockSale: Bool,
    managerAddr: Address,
    authorizedST: UInt,
});

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Creator = Participant('Creator', {
        getParams: Fun([], Params),
        iDeployed: Fun([Bytes(15)], Null),
    })

    const User = API({
        addWL: Fun([Address], Bool),
        remWL: Fun([Address], Bool),
        aST: Fun([Address, Address, UInt], Bool),
        cST: Fun([], Bool),
        dBT: Fun([UInt], Bool),
        aBT: Fun([Address], Bool),
        cBT: Fun([], Bool),
        cCM: Fun([Address], Bool),
        optIn: Fun([], Bool),
        docHash: Fun([Bytes(96)], Bool),
    });

    const Views = View({
        totSTBTD: Tuple(UInt, UInt, UInt),
        saleLocked: Bool,
        claimSTBT: Fun([Address], Tuple(UInt, UInt)),
        totSTBTDRec: Fun([Address], Tuple(UInt, UInt, UInt)),
        wlMember: Fun([Address], Bool),
        vHash: Bytes(96),
    });

    init();

    Creator.only(() => {
        const { companyName, lockSale, managerAddr, bT, authorizedST } = declassify(interact.getParams());

    });

    Creator.publish(companyName, lockSale, managerAddr, bT, authorizedST);

    Creator.interact.iDeployed('I have deployed');

    const end = UInt.max;

    const unwInt = (m) => fromSome(m, 0);

    //maps
    const claimST = new Map(UInt);
    const claimBT = new Map(UInt);
    const totRecST = new Map(UInt);
    const totAllST = new Map(UInt);
    const totRecBT = new Map(UInt);
    const iDistrNum = new Map(UInt);
    const wl = new Set(); //whitelist

    //[totSTeverAllocated, totBTeverAllocated, contractManager, distributionNumber, docHash]
    const [totST, totBT, saleLocked, ctcMan, distrNum, docHash] = parallelReduce([0, 0, lockSale, managerAddr, 0, 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur'])
        .invariant(balance() == 0)
        .while(true)
        .paySpec([bT])
        .define(() => {
            Views.totSTBTD.set([totST, totBT, distrNum]);
            Views.saleLocked.set(saleLocked);
            Views.claimSTBT.set((addr) => [unwInt(claimST[addr]), unwInt(claimBT[addr])]);
            Views.totSTBTDRec.set((addr) => [unwInt(totRecST[addr]), unwInt(totRecBT[addr]), unwInt(iDistrNum[addr])]);
            Views.wlMember.set((addr) => wl.member(addr));
            Views.vHash.set(docHash);
        })
        .api(
            User.docHash,
            // Assumes
            ((_) => {
                assume(this == Creator || this == ctcMan);

            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((hash, res) => {
                require(this == Creator || this == ctcMan);
                const nHash = hash;
                res(true);
                return [totST, totBT, saleLocked, ctcMan, distrNum, nHash];
            })
        )
        .api(
            User.addWL,
            // Assumes
            ((i) => {
                assume(this == Creator || this == ctcMan);
                assume(typeOf(i) == Address)
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((i, res) => {
                require(this == Creator || this == ctcMan);
                require(typeOf(i) == Address)
                wl.insert(i);
                res(true);
                return [totST, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        .api(
            User.remWL,
            // Assumes
            ((i) => {
                assume(this == Creator || this == ctcMan);
                assume(typeOf(i) == Address)
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((i, res) => {
                require(this == Creator || this == ctcMan);
                require(typeOf(i) == Address)
                wl.remove(i);
                res(true);
                return [totST, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        //Allocate share tokens to approved addresses
        .api(
            User.aST,
            // Assumes
            ((user, i, amt) => {
                assume(user == Creator || user == ctcMan);
                assume(amt > 0);
                assume(typeOf(i) == Address)
            }),
            // Payments
            ((_, _, amt) => [0, [0, bT]]),
            // Consensus
            ((user, i, amt, res) => {
                require(user == Creator || user == ctcMan);
                require(amt > 0);
                require(typeOf(i) == Address);
                wl.insert(i);
                claimST[i] = unwInt(claimST[i]) + amt;
                totAllST[i] = unwInt(totAllST[i]) + amt;
                res(true);
                return [totST + amt, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        // Let investors claim their allocated share tokens
        .api(
            User.cST,
            // Assumes
            (() => {
                const has = unwInt(claimST[this]);
                assume(wl.member(this));
                assume(has > 0);
            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                const has = unwInt(claimST[this]);
                require(wl.member(this));
                require(has > 0);
                totRecST[this] = unwInt(totRecST[this]) + has;
                claimST[this] = 0;
                res(true);
                return [totST, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        // Let investors optin first
        .api(
            User.optIn,
            // Assumes
            (() => {

            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                res(true);
                return [totST, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        .api(
            User.dBT,
            // Assumes
            ((amt) => {
                assume(this == Creator || this == ctcMan);
                assume(amt > 0);
                //assume(saleLocked);
            }),
            // Payments
            ((amt) => [0, [amt, bT]]),
            // Consensus
            ((amt, res) => {
                require(this == Creator || this == ctcMan);
                require(amt > 0);
                //require(saleLocked);
                res(true);
                return [totST, totBT + amt, saleLocked, ctcMan, distrNum + 1, docHash];
            })
        )
        .api(
            User.cBT,
            // Assumes
            (() => {
                assume(wl.member(this));
                assume(balance(bT) > 0 && totST > 0 && totST >= unwInt(totAllST[this]));
            }),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                require(wl.member(this));
                require(balance(bT) > 0 && totST > 0 && totST >= unwInt(totAllST[this]));
                const has = unwInt(totAllST[this]) * balance(bT) / totST; //find how much investor has to claim
                //transfer all the amount waiting to be claimed to the receiving investor
                transfer([0, [has, bT]]).to(this);
                totRecBT[this] = unwInt(totRecBT[this]) + has;
                iDistrNum[this] = distrNum;
                res(true);
                return [totST, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        //Allocate backing tokens to approved addresses
        .api(
            User.aBT,
            // Assumes
            ((i) => {
                assume(this == Creator || this == ctcMan);
                assume(typeOf(i) == Address);
                //assume(saleLocked)
                assume(unwInt(totAllST[i]) > 0);
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((i, res) => {
                require(this == Creator || this == ctcMan);
                //require(saleLocked);
                require(typeOf(i) == Address && unwInt(totAllST[i]) > 0);
                const amt = unwInt(totAllST[this]) * balance(bT) / totST;

                claimBT[i] = unwInt(claimBT[i]) + amt;

                res(true);
                return [totST + amt, totBT, saleLocked, ctcMan, distrNum, docHash];
            })
        )
        .api(
            User.cCM,
            // Assumes
            ((addr) => {
                assume(this == Creator || this == ctcMan);
                assume(typeOf(addr) == Address);
            }),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((newCtcMan, res) => {
                require(this == Creator || this == ctcMan);
                require(typeOf(newCtcMan) == Address);
                res(true);
                return [totST, totBT, saleLocked, newCtcMan, distrNum, docHash];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [totST, totBT, saleLocked, ctcMan, distrNum, docHash];
        });

    commit();
    exit();
});