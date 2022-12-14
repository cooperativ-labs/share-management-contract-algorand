'reach 0.1';
const Params = Object({
    companyName: Bytes(128),
    bT: Token,
    lockSale: Bool,
    managerAddr: Address,
    authorizedST: UInt256,
});

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true, connectors: [ALGO] });

    const currSwap = Struct([['qty', UInt], ['price', UInt], ['sold', UInt], ['status', Bytes(5)], ['cumProceeds', UInt], ['shareIssuanceType', Bool]]);


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
        initSwap: Fun([UInt, UInt, Bool], Bool),
        cancelSwap: Fun([], Bool),
        approveSwap: Fun([Address], Bool),
        completeSwap: Fun([Address, UInt], Bool), //any approved buyer can complete the swap
        claimSwapProceeds: Fun([], Bool),

    });

    const Views = View({
        totSTBTD: Tuple(UInt256, UInt256, UInt256),
        saleLocked: Bool,
        claimSTBT: Fun([Address], Tuple(UInt256, UInt256)),
        totSTBTDRec: Fun([Address], Tuple(UInt256, UInt256, UInt256)),
        wlMember: Fun([Address], Bool),
        vHash: Tuple(Bytes(96), UInt, UInt),
        vcVersion: Tuple(Bytes(4), Bytes(36)),
        vBtBal: Tuple(UInt256, Token),
        vCcCm: Tuple(Address, Address),
        vOptedIn: Fun([Address], Bool),
        vCurrSwap: Fun([Address], currSwap),
    });

    init();

    Creator.only(() => {
        const { companyName, lockSale, managerAddr, bT, authorizedST } = declassify(interact.getParams('I have deployed'));
    });

    Creator.publish(companyName, lockSale, managerAddr, bT, authorizedST);

    Creator.interact.iDeployed('I HAVE DEPLOYED');

    const end = UInt.max;
    const unwInt = (m) => fromSome(m, UInt256(0));
    const unwBool = (m) => fromSome(m, false);
    const unwSwapDetails2 = (m) => fromSome(m, Array.replicate(4, 0)); //[qty, price, cumProceeds, sold]
    const unwBytes5 = (m) => fromSome(m, '-----');
    const claimST = new Map(UInt256); //share tokens waiting to be claimed by each investor
    const claimBT = new Map(UInt256); //backing tokens waiting to be claimed by each investor
    //const totRecST = new Map(UInt256); //total received share token by each investor (NOT USED)
    const totAllST = new Map(UInt256); //total allocated share token for each investor
    const totRecBT = new Map(UInt256); //total received backing token by each investor
    const iDistrNum = new Map(UInt256); //each investor's claimed distribution number
    const swapDetails2 = new Map(Array(UInt, 4)); //each investor's swap details [qty, price, cumProceeds, shareIssuanceType]
    const swapStatus = new Map(Bytes(5)); //each investor's swap status
    const shareIssuanceType = new Map(Bool); //each investor's share issuance type
    const optedIn = new Map(Bool); //each investor's opted in status
    const wl = new Set(); //whitelist

    const state = parallelReduce({
        wlIndex: 0,
        cv: ['2.02', 'cooperativIdcooperativIdcooperativId'],
        currDistr: UInt256(0),
        totST: UInt256(0),
        totBT: UInt256(0),
        saleLocked: lockSale,
        ctcMan: managerAddr,
        distrNum: UInt256(0),
        distrIndex: 0,
        docHash: ['ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur', 0, 0,],
    })
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
            Views.vCurrSwap.set((addr) => {
                const arr = unwSwapDetails2(swapDetails2[addr]);
                const swapStatusV = unwBytes5(swapStatus[addr]);
                const SIT = unwBool(shareIssuanceType[addr]);
                return currSwap.fromObject({ price: arr[1], qty: arr[0], sold: arr[3], status: swapStatusV, cumProceeds: arr[2], shareIssuanceType: SIT });
            });
        })
        .api(
            User.initSwap,
            // Assumes
            ((qty, price, SIT) => {
                assume((SIT == true && (this == Creator || this == state.ctcMan)) || SIT == false, 'if you are not creator or manager, the swap cannot be share issuance type');
                assume((wl.member(this) && SIT == false) || SIT == true, 'you must be a whitelist member');
                assume(qty > 0, 'you must sell at least 1 share token');
                assume(price > 0, 'price must be greater than 0');
                assume(unwBytes5(swapStatus[this]) == '-----' || unwBytes5(swapStatus[this]) == 'compl', 'there must be no pending swap');
            }),
            // Payments
            ((_, _, _) => [0, [0, bT]]),
            // Consensus
            ((qty, price, SIT, res) => {
                require((SIT == true && (this == Creator || this == state.ctcMan)) || SIT == false, 'if you are not creator or manager, the swap cannot be share issuance type');
                require((wl.member(this) && SIT == false) || SIT == true, 'you must be a whitelist member');
                require(qty > 0, 'you must sell at least 1 share token');
                require(price > 0, 'price must be greater than 0');
                require(unwBytes5(swapStatus[this]) == '-----' || unwBytes5(swapStatus[this]) == 'compl', 'there must be no pending swap');

                if ((this == Creator || this == state.ctcMan) && SIT == true) {
                    swapStatus[this] = 'apprv'
                } else {
                    swapStatus[this] = 'initd'
                }
                shareIssuanceType[this] = SIT;
                const arr = unwSwapDetails2(swapDetails2[this]);
                const arr1 = arr.set(0, qty);
                const arr2 = arr1.set(1, price);
                const arr3 = arr2.set(3, 0);
                swapDetails2[this] = arr3;
                //const obj = { price: arr2[0], qty: arr2[1], status: unwBytes5(swapStatus[this]), cumProceeds: arr2[2], shareIssuanceType: unwBool(shareIssuanceType[this]) };
                res(true);
                return state;
            })
        )
        .api(
            User.cancelSwap,
            // Assumes
            (() => {
                assume(unwBytes5(swapStatus[this]) != '-----' && unwBytes5(swapStatus[this]) != 'compl', 'there must be a pending swap');
            }
            ),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                require(unwBytes5(swapStatus[this]) != '-----' && unwBytes5(swapStatus[this]) != 'compl', 'there must be a pending swap');
                swapStatus[this] = '-----';
                const arr = unwSwapDetails2(swapDetails2[this]);
                const arr1 = arr.set(0, 0);
                const arr2 = arr1.set(1, 0);
                const arr3 = arr2.set(3, 0);
                swapDetails2[this] = arr2;
                //const obj = { price: arr2[0], qty: arr2[1], status: unwBytes5(swapStatus[this]), cumProceeds: arr2[2], shareIssuanceType: unwBool(shareIssuanceType[this]) };
                res(true);
                return state;
            })
        )
        .api(
            User.approveSwap,
            // Assumes
            ((seller) => {
                assume(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                assume(unwBytes5(swapStatus[seller]) == 'initd', 'you can onlyapprove an unapproved pending/initiated swap');
            }
            ),
            // Payments
            ((_) => [0, [0, bT]]),
            // Consensus
            ((seller, res) => {
                require(this == Creator || this == state.ctcMan, 'you must be creator or manager');
                require(unwBytes5(swapStatus[seller]) == 'initd', 'you can onlyapprove an unapproved pending/initiated swap');
                swapStatus[seller] = 'apprv';
                const arr2 = unwSwapDetails2(swapDetails2[seller]);
                //const obj = { price: arr2[0], qty: arr2[1], status: unwBytes5(swapStatus[seller]), cumProceeds: arr2[2], shareIssuanceType: unwBool(shareIssuanceType[seller]) };
                res(true);
                return state;
            })
        )
        .api(
            User.completeSwap,
            // Assumes
            ((seller, amt) => {
                assume(this != seller, 'you cannot complete/buy your own swap');
                assume(amt > 0, 'you must buy at least 1 share token');
                assume(amt <= unwSwapDetails2(swapDetails2[seller])[0], 'you cannot buy more than the quantity offered for sale');
                assume(wl.member(this), 'you must be a whitelist member to complete or buy swap');
                assume(unwBytes5(swapStatus[seller]) == 'apprv' || unwBytes5(swapStatus[seller]) == 'partl', 'you can only buy an approved or partially completed swap');
            }
            ),
            // Payments
            ((seller, amt) => [0, [amt * unwSwapDetails2(swapDetails2[seller])[1], bT]]),
            // Consensus
            ((seller, amt, res) => {
                require(this != seller, 'you cannot complete/buy your own swap');
                require(amt > 0, 'you must buy at least 1 share token');
                require(amt <= unwSwapDetails2(swapDetails2[seller])[0], 'you cannot buy more than the quantity offered for sale');
                require(wl.member(this), 'you must be a whitelist member to complete or buy swap');
                require(unwBytes5(swapStatus[seller]) == 'apprv' || unwBytes5(swapStatus[seller]) == 'partl', 'you can only buy an approved or partially completed swap');
                const arr = unwSwapDetails2(swapDetails2[seller]);
                //Increase buyer's share tokens by qty
                claimST[this] = unwInt(claimST[this]) + UInt256(amt);
                //increase total allocated share token for investor
                totAllST[this] = unwInt(totAllST[this]) + UInt256(amt);
                //set cumulative proceeds for seller
                const arr1 = arr.set(2, arr[2] + amt * arr[1]);
                //set the amount sold by seller
                const arr2 = arr1.set(3, arr1[3] + amt);
                //set the amount remaining for sale by seller
                const arr3 = arr2.set(0, arr2[0] - amt);
                //set swap details and swap status to completed
                swapDetails2[seller] = arr3;
                if (arr3[0] == 0) {
                    swapStatus[seller] = 'compl';
                } else {
                    swapStatus[seller] = 'partl';
                }
                //const obj = { price: arr1[0], qty: arr1[1], status: unwBytes5(swapStatus[seller]), cumProceeds: arr1[2], shareIssuanceType: unwBool(shareIssuanceType[seller]) };
                res(true);
                if (unwBool(shareIssuanceType[seller]) == false) {
                    //Reduce seller's share tokens by qty
                    claimST[seller] = unwInt(claimST[seller]) - UInt256(amt);
                    totAllST[seller] = unwInt(totAllST[seller]) - UInt256(amt);
                    return state;
                } else {
                    const newTotST = state.totST + UInt256(amt);
                    const newState = Object.set(state, 'totST', newTotST);
                    return newState;
                }
            })
        )
        .api(
            User.claimSwapProceeds,
            // Assumes
            (() => {
                assume(unwSwapDetails2(swapDetails2[this])[2] > 0, 'you must have swap proceeds to claim');
                assume(balance(bT) >= unwSwapDetails2(swapDetails2[this])[2], 'weirdly insufficienct balance of BT');
            }
            ),
            // Payments
            (() => [0, [0, bT]]),
            // Consensus
            ((res) => {
                require(unwSwapDetails2(swapDetails2[this])[2] > 0, 'you must have swap proceeds to claim');
                const arr = unwSwapDetails2(swapDetails2[this]);
                require(balance(bT) >= arr[2], 'weirdly insufficienct balance of BT');
                transfer([0, [arr[2], bT]]).to(this);
                const arr1 = arr.set(2, 0);
                swapDetails2[this] = arr1;
                //const obj = { price: arr1[0], qty: arr1[1], status: unwBytes5(swapStatus[this]), cumProceeds: arr1[2], shareIssuanceType: unwBool(shareIssuanceType[this]) };
                res(true);
                return state;
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
                return newState;
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
                res(true);
                return state;
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
                return state;
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
                res(true);
                return Object_set(state, 'totST', newTotST);
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
                optedIn[this] = true;
                res(true);
                return state;
            })
        ).api(
            User.addCoopId,
            // Assumes
            ((id) => {
            }),
            // Payments
            ((id) => [0, [0, bT]]),
            // Consensus
            ((coopId, res) => {
                const newState = Object.set(state, 'cv', [state.cv[0], coopId]);
                res(true);
                return newState;
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
                return newState3;
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
                return state;
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
                return Object.set(state, 'ctcMan', newCtcMan);
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return state;
        });

    commit();
    exit();
});
