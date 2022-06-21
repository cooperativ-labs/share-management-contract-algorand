// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc6, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Data({
    None: ctc12,
    Some: ctc3
    });
  const ctc14 = stdlib.T_Data({
    None: ctc12,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  const map1_ctc = ctc13;
  
  const map2_ctc = ctc13;
  
  const map3_ctc = ctc13;
  
  const map4_ctc = ctc13;
  
  const map5_ctc = ctc13;
  
  const map6_ctc = ctc14;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async (_v1344 ) => {
                const v1344 = stdlib.protect(ctc0, _v1344, null);
              
              const v1345 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1344), null);
              const v1346 = stdlib.fromSome(v1345, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1347 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1344), null);
              const v1348 = stdlib.fromSome(v1347, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1349 = [v1346, v1348];
              
              return v1349;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async () => {
              
              
              return v1328;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async () => {
              
              const v1343 = [v1330, v1329, v1326];
              
              return v1343;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async (_v1351 ) => {
                const v1351 = stdlib.protect(ctc0, _v1351, null);
              
              const v1352 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1351), null);
              const v1353 = stdlib.fromSome(v1352, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1354 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1351), null);
              const v1355 = stdlib.fromSome(v1354, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1356 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1351), null);
              const v1357 = stdlib.fromSome(v1356, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1358 = [v1353, v1355, v1357];
              
              return v1358;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async () => {
              
              
              return v1367;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async () => {
              
              const v1368 = [v1305, v1324];
              
              return v1368;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async () => {
              
              
              return v1327;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async () => {
              
              
              return v1325;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = svs;
            return (await ((async (_v1360 ) => {
                const v1360 = stdlib.protect(ctc0, _v1360, null);
              
              const v1361 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1360), null);
              let v1362;
              switch (v1361[0]) {
                case 'None': {
                  const v1363 = v1361[1];
                  v1362 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1364 = v1361[1];
                  v1362 = true;
                  
                  break;
                  }
                }
              
              return v1362;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc5, ctc3, ctc3, ctc8, ctc7, ctc6, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Object({
    authorizedST: ctc1,
    bT: ctc4,
    companyName: ctc5,
    lockSale: ctc6,
    managerAddr: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Data({
    aBT0_183: ctc9,
    aST0_183: ctc10,
    addWL0_183: ctc9,
    cBT0_183: ctc11,
    cCM0_183: ctc9,
    cST0_183: ctc11,
    dBT0_183: ctc12,
    docHash0_183: ctc14,
    optIn0_183: ctc11,
    remWL0_183: ctc9
    });
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc17 = stdlib.T_UInt;
  const ctc18 = stdlib.T_Tuple([ctc17, ctc17, ctc6]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  
  const v1287 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1288 = [v1287];
  const v1294 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:85:103:application',
    fs: ['at ./index.rsh:84:17:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1295 = v1294.authorizedST;
  const v1296 = v1294.bT;
  const v1297 = v1294.companyName;
  const v1298 = v1294.lockSale;
  const v1299 = v1294.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1297, v1298, v1299, v1296, v1295],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1306, v1307, v1308, v1309, v1310], secs: v1312, time: v1311, didSend: v41, from: v1305 } = txn1;
      
      const v1313 = v1288[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0')];
      const v1315 = v1313[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '1')];
      const v1316 = v1313[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '2')];
      const v1317 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1315, v1316];
      const v1318 = stdlib.Array_set(v1288, stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0'), v1317);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1309
        });
      ;
      
      const v1322 = '1.00';
      const v1323 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v1324 = v1308;
      const v1325 = v1322;
      const v1326 = stdlib.checkedBigNumberify('./index.rsh:109:150:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1327 = v1323;
      const v1328 = v1307;
      const v1329 = stdlib.checkedBigNumberify('./index.rsh:109:115:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1330 = stdlib.checkedBigNumberify('./index.rsh:109:103:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1331 = v1311;
      const v1333 = v1318;
      
      if (await (async () => {
        
        return true;})()) {
        const v1365 = v1333[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
        const v1366 = v1365[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
        const v1367 = stdlib.cast(false, true, v1366);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1309
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1306, v1307, v1308, v1309, v1310], secs: v1312, time: v1311, didSend: v41, from: v1305 } = txn1;
  const v1313 = v1288[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0')];
  const v1315 = v1313[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '1')];
  const v1316 = v1313[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '2')];
  const v1317 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1315, v1316];
  const v1318 = stdlib.Array_set(v1288, stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0'), v1317);
  ;
  ;
  const v1321 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1321), {
    at: './index.rsh:91:31:application',
    fs: ['at ./index.rsh:91:31:application call to [unknown function] (defined at: ./index.rsh:91:31:function exp)', 'at ./index.rsh:91:31:application call to "liftedInteract" (defined at: ./index.rsh:91:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v1322 = '1.00';
  const v1323 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  let v1324 = v1308;
  let v1325 = v1322;
  let v1326 = stdlib.checkedBigNumberify('./index.rsh:109:150:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1327 = v1323;
  let v1328 = v1307;
  let v1329 = stdlib.checkedBigNumberify('./index.rsh:109:115:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1330 = stdlib.checkedBigNumberify('./index.rsh:109:103:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1331 = v1311;
  let v1333 = v1318;
  
  while (await (async () => {
    
    return true;})()) {
    const v1365 = v1333[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
    const v1366 = v1365[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
    const v1367 = stdlib.cast(false, true, v1366);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1331,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:326:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          
          const {data: [], secs: v4623, time: v4622, didSend: v1043, from: v4621 } = txn3;
          
          ;
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v4622;
          const cv1333 = v1333;
          
          await (async () => {
            const v1324 = cv1324;
            const v1325 = cv1325;
            const v1326 = cv1326;
            const v1327 = cv1327;
            const v1328 = cv1328;
            const v1329 = cv1329;
            const v1330 = cv1330;
            const v1331 = cv1331;
            const v1333 = cv1333;
            
            if (await (async () => {
              
              return true;})()) {
              const v1365 = v1333[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
              const v1366 = v1365[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
              const v1367 = stdlib.cast(false, true, v1366);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1309
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc4, ctc7, ctc16, ctc1, ctc13, ctc6, ctc1, ctc1, ctc19, ctc18, ctc17, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4623, time: v4622, didSend: v1043, from: v4621 } = txn3;
      ;
      const v4624 = stdlib.addressEq(v1305, v4621);
      stdlib.assert(v4624, {
        at: './index.rsh:326:21:dot',
        fs: ['at ./index.rsh:325:40:application call to [unknown function] (defined at: ./index.rsh:325:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1324 = v1324;
      const cv1325 = v1325;
      const cv1326 = v1326;
      const cv1327 = v1327;
      const cv1328 = v1328;
      const cv1329 = v1329;
      const cv1330 = v1330;
      const cv1331 = v4622;
      const cv1333 = v1333;
      
      v1324 = cv1324;
      v1325 = cv1325;
      v1326 = cv1326;
      v1327 = cv1327;
      v1328 = cv1328;
      v1329 = cv1329;
      v1330 = cv1330;
      v1331 = cv1331;
      v1333 = cv1333;
      
      continue;
      }
    else {
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn2;
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v1739 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v1740 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v1741 = [v1366, v1739, v1740];
          const v1742 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v1741);
          ;
          const v1744 = v1641[stdlib.checkedBigNumberify('./index.rsh:284:13:spread', stdlib.UInt_max, '0')];
          const v1745 = stdlib.addressEq(v1637, v1305);
          const v1746 = stdlib.addressEq(v1637, v1324);
          const v1747 = v1745 ? true : v1746;
          stdlib.assert(v1747, {
            at: './index.rsh:297:24:application',
            fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1748 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1744), null);
          const v1749 = stdlib.fromSome(v1748, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1750 = stdlib.gt256(v1749, stdlib.checkedBigNumberify('./index.rsh:299:79:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v1750, {
            at: './index.rsh:299:24:application',
            fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1751 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1637), null);
          const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1753 = stdlib.div256(v1752, v1330);
          const v1754 = v1742[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1755 = v1754[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1756 = stdlib.cast(false, true, v1755);
          const v1757 = stdlib.mul256(v1753, v1756);
          const v1758 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1744), null);
          const v1759 = stdlib.fromSome(v1758, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1760 = stdlib.add256(v1759, v1757);
          await stdlib.mapSet(map1, v1744, v1760);
          const v1761 = true;
          await txn2.getOutput('aBT', 'v1761', ctc6, v1761);
          const v1768 = stdlib.add256(v1330, v1757);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1768;
          const cv1331 = v1639;
          const cv1333 = v1742;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v2037 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2038 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2039 = [v1366, v2037, v2038];
          const v2040 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2039);
          ;
          const v2069 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '0')];
          const v2070 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '1')];
          const v2071 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '2')];
          const v2072 = stdlib.addressEq(v2069, v1305);
          const v2073 = stdlib.addressEq(v2069, v1324);
          const v2074 = v2072 ? true : v2073;
          stdlib.assert(v2074, {
            at: './index.rsh:191:24:application',
            fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2075 = stdlib.gt256(v2071, stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v2075, {
            at: './index.rsh:192:24:application',
            fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2070, null);
          const v2077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2070), null);
          const v2078 = stdlib.fromSome(v2077, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2079 = stdlib.add256(v2078, v2071);
          await stdlib.mapSet(map0, v2070, v2079);
          const v2080 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2070), null);
          const v2081 = stdlib.fromSome(v2080, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2082 = stdlib.add256(v2081, v2071);
          await stdlib.mapSet(map3, v2070, v2082);
          const v2083 = true;
          await txn2.getOutput('aST', 'v2083', ctc6, v2083);
          const v2092 = stdlib.add256(v1330, v2071);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v2092;
          const cv1331 = v1639;
          const cv1333 = v2040;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v2335 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2336 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2337 = [v1366, v2335, v2336];
          const v2338 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2337);
          ;
          const v2393 = v2237[stdlib.checkedBigNumberify('./index.rsh:142:13:spread', stdlib.UInt_max, '0')];
          const v2394 = stdlib.addressEq(v1637, v1305);
          const v2395 = stdlib.addressEq(v1637, v1324);
          const v2396 = v2394 ? true : v2395;
          stdlib.assert(v2396, {
            at: './index.rsh:153:24:application',
            fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2393, null);
          const v2398 = true;
          await txn2.getOutput('addWL', 'v2398', ctc6, v2398);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v2338;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v2633 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2634 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2635 = [v1366, v2633, v2634];
          const v2636 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2635);
          ;
          const v2705 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1637), null);
          let v2706;
          switch (v2705[0]) {
            case 'None': {
              const v2707 = v2705[1];
              v2706 = false;
              
              break;
              }
            case 'Some': {
              const v2708 = v2705[1];
              v2706 = true;
              
              break;
              }
            }
          stdlib.assert(v2706, {
            at: './index.rsh:272:24:application',
            fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2709 = v2636[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2710 = v2709[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2711 = stdlib.gt(v2710, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '0'));
          const v2712 = stdlib.gt256(v1330, stdlib.checkedBigNumberify('./index.rsh:273:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2713 = v2711 ? v2712 : false;
          const v2714 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1637), null);
          const v2715 = stdlib.fromSome(v2714, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2716 = stdlib.ge256(v1330, v2715);
          const v2717 = v2713 ? v2716 : false;
          stdlib.assert(v2717, {
            at: './index.rsh:273:24:application',
            fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2722 = stdlib.cast(false, true, v2710);
          const v2723 = stdlib.mul256(v2715, v2722);
          const v2724 = stdlib.div256(v2723, v1330);
          const v2725 = stdlib.cast(true, false, v2724);
          const v2731 = stdlib.sub(v2710, v2725);
          const v2734 = v2709[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '1')];
          const v2735 = v2709[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '2')];
          const v2736 = [v2731, v2734, v2735];
          const v2737 = stdlib.Array_set(v2636, stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '0'), v2736);
          ;
          const v2738 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1637), null);
          const v2739 = stdlib.fromSome(v2738, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2740 = stdlib.add256(v2739, v2724);
          await stdlib.mapSet(map4, v1637, v2740);
          const v2741 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1637), null);
          const v2742 = stdlib.fromSome(v2741, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2743 = stdlib.add256(v2742, stdlib.checkedBigNumberify('./index.rsh:278:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v1637, v2743);
          await txn2.getOutput('cBT', 'v2724', ctc1, v2724);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v2737;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v2931 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2932 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2933 = [v1366, v2931, v2932];
          const v2934 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2933);
          ;
          const v3049 = v2833[stdlib.checkedBigNumberify('./index.rsh:308:13:spread', stdlib.UInt_max, '0')];
          const v3050 = stdlib.addressEq(v1637, v1305);
          const v3051 = stdlib.addressEq(v1637, v1324);
          const v3052 = v3050 ? true : v3051;
          stdlib.assert(v3052, {
            at: './index.rsh:319:24:application',
            fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3053 = true;
          await txn2.getOutput('cCM', 'v3053', ctc6, v3053);
          const cv1324 = v3049;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v2934;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v3229 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3230 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3231 = [v1366, v3229, v3230];
          const v3232 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3231);
          ;
          const v3360 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1637), null);
          const v3361 = stdlib.fromSome(v3360, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3362 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1637), null);
          let v3363;
          switch (v3362[0]) {
            case 'None': {
              const v3364 = v3362[1];
              v3363 = false;
              
              break;
              }
            case 'Some': {
              const v3365 = v3362[1];
              v3363 = true;
              
              break;
              }
            }
          stdlib.assert(v3363, {
            at: './index.rsh:217:24:application',
            fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3366 = stdlib.gt256(v3361, stdlib.checkedBigNumberify('./index.rsh:218:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3366, {
            at: './index.rsh:218:24:application',
            fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3367 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1637), null);
          const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3369 = stdlib.add256(v3368, v3361);
          await stdlib.mapSet(map2, v1637, v3369);
          await stdlib.mapSet(map0, v1637, stdlib.checkedBigNumberify('./index.rsh:222:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3370 = true;
          await txn2.getOutput('cST', 'v3370', ctc6, v3370);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v3232;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          undefined /* setApiDetails */;
          const v3482 = v3429[stdlib.checkedBigNumberify('./index.rsh:242:13:spread', stdlib.UInt_max, '0')];
          const v3483 = stdlib.cast(true, false, v3482);
          ;
          const v3524 = stdlib.add(v1366, v3483);
          const v3527 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3528 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3529 = [v3524, v3527, v3528];
          const v3530 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3529);
          ;
          const v3677 = stdlib.addressEq(v1637, v1305);
          const v3678 = stdlib.addressEq(v1637, v1324);
          const v3679 = v3677 ? true : v3678;
          stdlib.assert(v3679, {
            at: './index.rsh:254:24:application',
            fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3681 = stdlib.gt(v3483, stdlib.checkedBigNumberify('./index.rsh:255:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3681, {
            at: './index.rsh:255:24:application',
            fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3682 = true;
          await txn2.getOutput('dBT', 'v3682', ctc6, v3682);
          const v3689 = stdlib.add256(v1329, v3482);
          const v3690 = stdlib.add256(v1326, stdlib.checkedBigNumberify('./index.rsh:258:88:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v3690;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v3689;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v3530;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v3825 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3826 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3827 = [v1366, v3825, v3826];
          const v3828 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3827);
          ;
          const v3991 = v3727[stdlib.checkedBigNumberify('./index.rsh:125:13:spread', stdlib.UInt_max, '0')];
          const v3992 = stdlib.addressEq(v1637, v1305);
          const v3993 = stdlib.addressEq(v1637, v1324);
          const v3994 = v3992 ? true : v3993;
          stdlib.assert(v3994, {
            at: './index.rsh:136:24:application',
            fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3995 = true;
          await txn2.getOutput('docHash', 'v3995', ctc6, v3995);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v3991;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v3828;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v4123 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4124 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4125 = [v1366, v4123, v4124];
          const v4126 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4125);
          ;
          const v4302 = true;
          await txn2.getOutput('optIn', 'v4302', ctc6, v4302);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v4126;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          undefined /* setApiDetails */;
          ;
          const v4421 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4422 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4423 = [v1366, v4421, v4422];
          const v4424 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4423);
          ;
          const v4608 = v4323[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
          const v4609 = stdlib.addressEq(v1637, v1305);
          const v4610 = stdlib.addressEq(v1637, v1324);
          const v4611 = v4609 ? true : v4610;
          stdlib.assert(v4611, {
            at: './index.rsh:171:24:application',
            fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v4608, undefined /* Nothing */);
          const v4613 = true;
          await txn2.getOutput('remWL', 'v4613', ctc6, v4613);
          const cv1324 = v1324;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1639;
          const cv1333 = v4424;
          
          v1324 = cv1324;
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1333 = cv1333;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _aBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aBT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1496 = ctc.selfAddress();
  const v1498 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:13:function exp)', 'at ./index.rsh:109:85:application call to "runaBT0_183" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1499 = v1498[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1502 = stdlib.addressEq(v1496, v1305);
  const v1503 = stdlib.addressEq(v1496, v1324);
  const v1504 = v1502 ? true : v1503;
  stdlib.assert(v1504, {
    at: './index.rsh:288:23:application',
    fs: ['at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:18:function exp)', 'at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:13:function exp)', 'at ./index.rsh:109:85:application call to "runaBT0_183" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1505 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1499), null);
  const v1506 = stdlib.fromSome(v1505, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1507 = stdlib.gt256(v1506, stdlib.checkedBigNumberify('./index.rsh:291:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1507, {
    at: './index.rsh:291:23:application',
    fs: ['at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:18:function exp)', 'at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:13:function exp)', 'at ./index.rsh:109:85:application call to "runaBT0_183" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1511 = ['aBT0_183', v1498];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1511],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:294:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:294:26:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1739 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v1740 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v1741 = [v1366, v1739, v1740];
          const v1742 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v1741);
          ;
          const v1744 = v1641[stdlib.checkedBigNumberify('./index.rsh:284:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1744), null);
          const v1751 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1637), null);
          const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1753 = stdlib.div256(v1752, v1330);
          const v1754 = v1742[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1755 = v1754[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1756 = stdlib.cast(false, true, v1755);
          const v1757 = stdlib.mul256(v1753, v1756);
          const v1758 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1744), null);
          const v1759 = stdlib.fromSome(v1758, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1760 = stdlib.add256(v1759, v1757);
          await stdlib.simMapSet(sim_r, 1, v1744, v1760);
          const v1761 = true;
          const v1762 = await txn1.getOutput('aBT', 'v1761', ctc8, v1761);
          
          const v1768 = stdlib.add256(v1330, v1757);
          const v8099 = v1324;
          const v8100 = v1325;
          const v8101 = v1326;
          const v8102 = v1327;
          const v8103 = v1328;
          const v8104 = v1329;
          const v8105 = v1768;
          const v8107 = v1742;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v1739 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v1740 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v1741 = [v1366, v1739, v1740];
      const v1742 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v1741);
      ;
      const v1744 = v1641[stdlib.checkedBigNumberify('./index.rsh:284:13:spread', stdlib.UInt_max, '0')];
      const v1745 = stdlib.addressEq(v1637, v1305);
      const v1746 = stdlib.addressEq(v1637, v1324);
      const v1747 = v1745 ? true : v1746;
      stdlib.assert(v1747, {
        at: './index.rsh:297:24:application',
        fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1748 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1744), null);
      const v1749 = stdlib.fromSome(v1748, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1750 = stdlib.gt256(v1749, stdlib.checkedBigNumberify('./index.rsh:299:79:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v1750, {
        at: './index.rsh:299:24:application',
        fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1751 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1637), null);
      const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1753 = stdlib.div256(v1752, v1330);
      const v1754 = v1742[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
      const v1755 = v1754[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
      const v1756 = stdlib.cast(false, true, v1755);
      const v1757 = stdlib.mul256(v1753, v1756);
      const v1758 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1744), null);
      const v1759 = stdlib.fromSome(v1758, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1760 = stdlib.add256(v1759, v1757);
      await stdlib.mapSet(map1, v1744, v1760);
      const v1761 = true;
      const v1762 = await txn1.getOutput('aBT', 'v1761', ctc8, v1761);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v1641, v1762), {
          at: './index.rsh:285:13:application',
          fs: ['at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)', 'at ./index.rsh:304:20:application call to "res" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v1768 = stdlib.add256(v1330, v1757);
      const v8099 = v1324;
      const v8100 = v1325;
      const v8101 = v1326;
      const v8102 = v1327;
      const v8103 = v1328;
      const v8104 = v1329;
      const v8105 = v1768;
      const v8107 = v1742;
      return;
      
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _aST3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aST3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aST3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc12,
    addWL0_183: ctc13,
    cBT0_183: ctc14,
    cCM0_183: ctc13,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1417 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:109:85:application call to "runaST0_183" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1418 = v1417[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1420 = v1417[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1425 = stdlib.addressEq(v1418, v1305);
  const v1426 = stdlib.addressEq(v1418, v1324);
  const v1427 = v1425 ? true : v1426;
  stdlib.assert(v1427, {
    at: './index.rsh:183:23:application',
    fs: ['at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:29:function exp)', 'at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:109:85:application call to "runaST0_183" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1428 = stdlib.gt256(v1420, stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1428, {
    at: './index.rsh:184:23:application',
    fs: ['at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:29:function exp)', 'at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:109:85:application call to "runaST0_183" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1434 = ['aST0_183', v1417];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1434],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:188:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:188:34:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v2037 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2038 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2039 = [v1366, v2037, v2038];
          const v2040 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2039);
          ;
          const v2070 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '1')];
          const v2071 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v2070, null);
          const v2077 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2070), null);
          const v2078 = stdlib.fromSome(v2077, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2079 = stdlib.add256(v2078, v2071);
          await stdlib.simMapSet(sim_r, 0, v2070, v2079);
          const v2080 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2070), null);
          const v2081 = stdlib.fromSome(v2080, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2082 = stdlib.add256(v2081, v2071);
          await stdlib.simMapSet(sim_r, 3, v2070, v2082);
          const v2083 = true;
          const v2084 = await txn1.getOutput('aST', 'v2083', ctc8, v2083);
          
          const v2092 = stdlib.add256(v1330, v2071);
          const v8264 = v1324;
          const v8265 = v1325;
          const v8266 = v1326;
          const v8267 = v1327;
          const v8268 = v1328;
          const v8269 = v1329;
          const v8270 = v2092;
          const v8272 = v2040;
          const v8273 = v2040[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8274 = v8273[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8275 = stdlib.cast(false, true, v8274);
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v2037 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2038 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2039 = [v1366, v2037, v2038];
      const v2040 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2039);
      ;
      const v2069 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '0')];
      const v2070 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '1')];
      const v2071 = v1939[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '2')];
      const v2072 = stdlib.addressEq(v2069, v1305);
      const v2073 = stdlib.addressEq(v2069, v1324);
      const v2074 = v2072 ? true : v2073;
      stdlib.assert(v2074, {
        at: './index.rsh:191:24:application',
        fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2075 = stdlib.gt256(v2071, stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2075, {
        at: './index.rsh:192:24:application',
        fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2070, null);
      const v2077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2070), null);
      const v2078 = stdlib.fromSome(v2077, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2079 = stdlib.add256(v2078, v2071);
      await stdlib.mapSet(map0, v2070, v2079);
      const v2080 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2070), null);
      const v2081 = stdlib.fromSome(v2080, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2082 = stdlib.add256(v2081, v2071);
      await stdlib.mapSet(map3, v2070, v2082);
      const v2083 = true;
      const v2084 = await txn1.getOutput('aST', 'v2083', ctc8, v2083);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v1939, v2084), {
          at: './index.rsh:180:13:application',
          fs: ['at ./index.rsh:180:13:application call to [unknown function] (defined at: ./index.rsh:180:13:function exp)', 'at ./index.rsh:199:20:application call to "res" (defined at: ./index.rsh:190:13:function exp)', 'at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2092 = stdlib.add256(v1330, v2071);
      const v8264 = v1324;
      const v8265 = v1325;
      const v8266 = v1326;
      const v8267 = v1327;
      const v8268 = v1328;
      const v8269 = v1329;
      const v8270 = v2092;
      const v8272 = v2040;
      const v8273 = v2040[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8274 = v8273[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8275 = stdlib.cast(false, true, v8274);
      return;
      
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _addWL3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addWL3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addWL3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1387 = ctc.selfAddress();
  const v1389 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:109:85:application call to "runaddWL0_183" (defined at: ./index.rsh:142:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1393 = stdlib.addressEq(v1387, v1305);
  const v1394 = stdlib.addressEq(v1387, v1324);
  const v1395 = v1393 ? true : v1394;
  stdlib.assert(v1395, {
    at: './index.rsh:146:23:application',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:18:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:109:85:application call to "runaddWL0_183" (defined at: ./index.rsh:142:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1399 = ['addWL0_183', v1389];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1399],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:150:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:150:26:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2335 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2336 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2337 = [v1366, v2335, v2336];
          const v2338 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2337);
          ;
          const v2393 = v2237[stdlib.checkedBigNumberify('./index.rsh:142:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2393, null);
          const v2398 = true;
          const v2399 = await txn1.getOutput('addWL', 'v2398', ctc8, v2398);
          
          const v8429 = v1324;
          const v8430 = v1325;
          const v8431 = v1326;
          const v8432 = v1327;
          const v8433 = v1328;
          const v8434 = v1329;
          const v8435 = v1330;
          const v8437 = v2338;
          const v8438 = v2338[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8439 = v8438[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8440 = stdlib.cast(false, true, v8439);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v2335 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2336 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2337 = [v1366, v2335, v2336];
      const v2338 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2337);
      ;
      const v2393 = v2237[stdlib.checkedBigNumberify('./index.rsh:142:13:spread', stdlib.UInt_max, '0')];
      const v2394 = stdlib.addressEq(v1637, v1305);
      const v2395 = stdlib.addressEq(v1637, v1324);
      const v2396 = v2394 ? true : v2395;
      stdlib.assert(v2396, {
        at: './index.rsh:153:24:application',
        fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2393, null);
      const v2398 = true;
      const v2399 = await txn1.getOutput('addWL', 'v2398', ctc8, v2398);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v2237, v2399), {
          at: './index.rsh:143:13:application',
          fs: ['at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:156:20:application call to "res" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v8429 = v1324;
      const v8430 = v1325;
      const v8431 = v1326;
      const v8432 = v1327;
      const v8433 = v1328;
      const v8434 = v1329;
      const v8435 = v1330;
      const v8437 = v2338;
      const v8438 = v2338[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8439 = v8438[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8440 = stdlib.cast(false, true, v8439);
      return;
      
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cBT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc12,
    cCM0_183: ctc13,
    cST0_183: ctc12,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc12,
    remWL0_183: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1475 = ctc.selfAddress();
  const v1477 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:109:85:application call to "runcBT0_183" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1479 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1475), null);
  let v1480;
  switch (v1479[0]) {
    case 'None': {
      const v1481 = v1479[1];
      v1480 = false;
      
      break;
      }
    case 'Some': {
      const v1482 = v1479[1];
      v1480 = true;
      
      break;
      }
    }
  stdlib.assert(v1480, {
    at: './index.rsh:265:23:application',
    fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:17:function exp)', 'at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:109:85:application call to "runcBT0_183" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1485 = stdlib.gt(v1366, stdlib.checkedBigNumberify('./index.rsh:266:38:decimal', stdlib.UInt_max, '0'));
  const v1486 = stdlib.gt256(v1330, stdlib.checkedBigNumberify('./index.rsh:266:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1487 = v1485 ? v1486 : false;
  const v1488 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1475), null);
  const v1489 = stdlib.fromSome(v1488, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1490 = stdlib.ge256(v1330, v1489);
  const v1491 = v1487 ? v1490 : false;
  stdlib.assert(v1491, {
    at: './index.rsh:266:23:application',
    fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:17:function exp)', 'at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:109:85:application call to "runcBT0_183" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1494 = ['cBT0_183', v1477];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1494],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:269:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:269:25:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2633 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2634 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2635 = [v1366, v2633, v2634];
          const v2636 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2635);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1637), null);
          const v2709 = v2636[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2710 = v2709[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2714 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1637), null);
          const v2715 = stdlib.fromSome(v2714, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2722 = stdlib.cast(false, true, v2710);
          const v2723 = stdlib.mul256(v2715, v2722);
          const v2724 = stdlib.div256(v2723, v1330);
          const v2725 = stdlib.cast(true, false, v2724);
          const v2731 = stdlib.sub(v2710, v2725);
          const v2734 = v2709[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '1')];
          const v2735 = v2709[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '2')];
          const v2736 = [v2731, v2734, v2735];
          const v2737 = stdlib.Array_set(v2636, stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '0'), v2736);
          sim_r.txns.push({
            amt: v2725,
            kind: 'from',
            to: v1637,
            tok: v1309
            });
          const v2738 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1637), null);
          const v2739 = stdlib.fromSome(v2738, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2740 = stdlib.add256(v2739, v2724);
          await stdlib.simMapSet(sim_r, 4, v1637, v2740);
          const v2741 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1637), null);
          const v2742 = stdlib.fromSome(v2741, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2743 = stdlib.add256(v2742, stdlib.checkedBigNumberify('./index.rsh:278:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v1637, v2743);
          const v2744 = await txn1.getOutput('cBT', 'v2724', ctc1, v2724);
          
          const v8594 = v1324;
          const v8595 = v1325;
          const v8596 = v1326;
          const v8597 = v1327;
          const v8598 = v1328;
          const v8599 = v1329;
          const v8600 = v1330;
          const v8602 = v2737;
          const v8603 = v2737[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8604 = v8603[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8605 = stdlib.cast(false, true, v8604);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v2633 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2634 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2635 = [v1366, v2633, v2634];
      const v2636 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2635);
      ;
      const v2705 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1637), null);
      let v2706;
      switch (v2705[0]) {
        case 'None': {
          const v2707 = v2705[1];
          v2706 = false;
          
          break;
          }
        case 'Some': {
          const v2708 = v2705[1];
          v2706 = true;
          
          break;
          }
        }
      stdlib.assert(v2706, {
        at: './index.rsh:272:24:application',
        fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2709 = v2636[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
      const v2710 = v2709[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
      const v2711 = stdlib.gt(v2710, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '0'));
      const v2712 = stdlib.gt256(v1330, stdlib.checkedBigNumberify('./index.rsh:273:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2713 = v2711 ? v2712 : false;
      const v2714 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1637), null);
      const v2715 = stdlib.fromSome(v2714, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2716 = stdlib.ge256(v1330, v2715);
      const v2717 = v2713 ? v2716 : false;
      stdlib.assert(v2717, {
        at: './index.rsh:273:24:application',
        fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2722 = stdlib.cast(false, true, v2710);
      const v2723 = stdlib.mul256(v2715, v2722);
      const v2724 = stdlib.div256(v2723, v1330);
      const v2725 = stdlib.cast(true, false, v2724);
      const v2731 = stdlib.sub(v2710, v2725);
      const v2734 = v2709[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '1')];
      const v2735 = v2709[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '2')];
      const v2736 = [v2731, v2734, v2735];
      const v2737 = stdlib.Array_set(v2636, stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '0'), v2736);
      ;
      const v2738 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1637), null);
      const v2739 = stdlib.fromSome(v2738, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2740 = stdlib.add256(v2739, v2724);
      await stdlib.mapSet(map4, v1637, v2740);
      const v2741 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1637), null);
      const v2742 = stdlib.fromSome(v2741, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2743 = stdlib.add256(v2742, stdlib.checkedBigNumberify('./index.rsh:278:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v1637, v2743);
      const v2744 = await txn1.getOutput('cBT', 'v2724', ctc1, v2724);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v2535, v2744), {
          at: './index.rsh:262:13:application',
          fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)', 'at ./index.rsh:279:20:application call to "res" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v8594 = v1324;
      const v8595 = v1325;
      const v8596 = v1326;
      const v8597 = v1327;
      const v8598 = v1328;
      const v8599 = v1329;
      const v8600 = v1330;
      const v8602 = v2737;
      const v8603 = v2737[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8604 = v8603[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8605 = stdlib.cast(false, true, v8604);
      return;
      
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cCM3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cCM3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cCM3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1513 = ctc.selfAddress();
  const v1515 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:13:function exp)', 'at ./index.rsh:109:85:application call to "runcCM0_183" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1519 = stdlib.addressEq(v1513, v1305);
  const v1520 = stdlib.addressEq(v1513, v1324);
  const v1521 = v1519 ? true : v1520;
  stdlib.assert(v1521, {
    at: './index.rsh:312:23:application',
    fs: ['at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:21:function exp)', 'at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:13:function exp)', 'at ./index.rsh:109:85:application call to "runcCM0_183" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1525 = ['cCM0_183', v1515];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1525],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:316:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v2931 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2932 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2933 = [v1366, v2931, v2932];
          const v2934 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2933);
          ;
          const v3049 = v2833[stdlib.checkedBigNumberify('./index.rsh:308:13:spread', stdlib.UInt_max, '0')];
          const v3053 = true;
          const v3054 = await txn1.getOutput('cCM', 'v3053', ctc8, v3053);
          
          const v8759 = v3049;
          const v8760 = v1325;
          const v8761 = v1326;
          const v8762 = v1327;
          const v8763 = v1328;
          const v8764 = v1329;
          const v8765 = v1330;
          const v8767 = v2934;
          const v8768 = v2934[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8769 = v8768[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8770 = stdlib.cast(false, true, v8769);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v2931 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2932 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2933 = [v1366, v2931, v2932];
      const v2934 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2933);
      ;
      const v3049 = v2833[stdlib.checkedBigNumberify('./index.rsh:308:13:spread', stdlib.UInt_max, '0')];
      const v3050 = stdlib.addressEq(v1637, v1305);
      const v3051 = stdlib.addressEq(v1637, v1324);
      const v3052 = v3050 ? true : v3051;
      stdlib.assert(v3052, {
        at: './index.rsh:319:24:application',
        fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v3053 = true;
      const v3054 = await txn1.getOutput('cCM', 'v3053', ctc8, v3053);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v2833, v3054), {
          at: './index.rsh:309:13:application',
          fs: ['at ./index.rsh:309:13:application call to [unknown function] (defined at: ./index.rsh:309:13:function exp)', 'at ./index.rsh:321:20:application call to "res" (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v8759 = v3049;
      const v8760 = v1325;
      const v8761 = v1326;
      const v8762 = v1327;
      const v8763 = v1328;
      const v8764 = v1329;
      const v8765 = v1330;
      const v8767 = v2934;
      const v8768 = v2934[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8769 = v8768[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8770 = stdlib.cast(false, true, v8769);
      return;
      
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cST3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cST3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cST3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc12,
    cCM0_183: ctc13,
    cST0_183: ctc12,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc12,
    remWL0_183: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1436 = ctc.selfAddress();
  const v1438 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:109:85:application call to "runcST0_183" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1440 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1436), null);
  const v1441 = stdlib.fromSome(v1440, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1442 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1436), null);
  let v1443;
  switch (v1442[0]) {
    case 'None': {
      const v1444 = v1442[1];
      v1443 = false;
      
      break;
      }
    case 'Some': {
      const v1445 = v1442[1];
      v1443 = true;
      
      break;
      }
    }
  stdlib.assert(v1443, {
    at: './index.rsh:209:23:application',
    fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:109:85:application call to "runcST0_183" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1446 = stdlib.gt256(v1441, stdlib.checkedBigNumberify('./index.rsh:210:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1446, {
    at: './index.rsh:210:23:application',
    fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:109:85:application call to "runcST0_183" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1449 = ['cST0_183', v1438];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1449],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:213:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:213:25:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v3229 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3230 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3231 = [v1366, v3229, v3230];
          const v3232 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3231);
          ;
          const v3360 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1637), null);
          const v3361 = stdlib.fromSome(v3360, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1637), null);
          const v3367 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1637), null);
          const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3369 = stdlib.add256(v3368, v3361);
          await stdlib.simMapSet(sim_r, 2, v1637, v3369);
          await stdlib.simMapSet(sim_r, 0, v1637, stdlib.checkedBigNumberify('./index.rsh:222:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3370 = true;
          const v3371 = await txn1.getOutput('cST', 'v3370', ctc8, v3370);
          
          const v8924 = v1324;
          const v8925 = v1325;
          const v8926 = v1326;
          const v8927 = v1327;
          const v8928 = v1328;
          const v8929 = v1329;
          const v8930 = v1330;
          const v8932 = v3232;
          const v8933 = v3232[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8934 = v8933[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8935 = stdlib.cast(false, true, v8934);
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v3229 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v3230 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v3231 = [v1366, v3229, v3230];
      const v3232 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3231);
      ;
      const v3360 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1637), null);
      const v3361 = stdlib.fromSome(v3360, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3362 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1637), null);
      let v3363;
      switch (v3362[0]) {
        case 'None': {
          const v3364 = v3362[1];
          v3363 = false;
          
          break;
          }
        case 'Some': {
          const v3365 = v3362[1];
          v3363 = true;
          
          break;
          }
        }
      stdlib.assert(v3363, {
        at: './index.rsh:217:24:application',
        fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3366 = stdlib.gt256(v3361, stdlib.checkedBigNumberify('./index.rsh:218:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3366, {
        at: './index.rsh:218:24:application',
        fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3367 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1637), null);
      const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3369 = stdlib.add256(v3368, v3361);
      await stdlib.mapSet(map2, v1637, v3369);
      await stdlib.mapSet(map0, v1637, stdlib.checkedBigNumberify('./index.rsh:222:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3370 = true;
      const v3371 = await txn1.getOutput('cST', 'v3370', ctc8, v3370);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v3131, v3371), {
          at: './index.rsh:205:13:application',
          fs: ['at ./index.rsh:205:13:application call to [unknown function] (defined at: ./index.rsh:205:13:function exp)', 'at ./index.rsh:223:20:application call to "res" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v8924 = v1324;
      const v8925 = v1325;
      const v8926 = v1326;
      const v8927 = v1327;
      const v8928 = v1328;
      const v8929 = v1329;
      const v8930 = v1330;
      const v8932 = v3232;
      const v8933 = v3232[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8934 = v8933[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8935 = stdlib.cast(false, true, v8934);
      return;
      
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _dBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _dBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _dBT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc15,
    cCM0_183: ctc13,
    cST0_183: ctc15,
    dBT0_183: ctc12,
    docHash0_183: ctc16,
    optIn0_183: ctc15,
    remWL0_183: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1459 = ctc.selfAddress();
  const v1461 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:109:85:application call to "rundBT0_183" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1462 = v1461[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1465 = stdlib.addressEq(v1459, v1305);
  const v1466 = stdlib.addressEq(v1459, v1324);
  const v1467 = v1465 ? true : v1466;
  stdlib.assert(v1467, {
    at: './index.rsh:246:23:application',
    fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:20:function exp)', 'at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:109:85:application call to "rundBT0_183" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1468 = stdlib.cast(true, false, v1462);
  const v1469 = stdlib.gt(v1468, stdlib.checkedBigNumberify('./index.rsh:247:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1469, {
    at: './index.rsh:247:23:application',
    fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:20:function exp)', 'at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:109:85:application call to "rundBT0_183" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1473 = ['dBT0_183', v1461];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1473],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:251:24:decimal', stdlib.UInt_max, '0'), [[v1468, v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3482 = v3429[stdlib.checkedBigNumberify('./index.rsh:242:13:spread', stdlib.UInt_max, '0')];
          const v3483 = stdlib.cast(true, false, v3482);
          ;
          const v3524 = stdlib.add(v1366, v3483);
          const v3527 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3528 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3529 = [v3524, v3527, v3528];
          const v3530 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3529);
          sim_r.txns.push({
            amt: v3483,
            kind: 'to',
            tok: v1309
            });
          const v3682 = true;
          const v3683 = await txn1.getOutput('dBT', 'v3682', ctc8, v3682);
          
          const v3689 = stdlib.add256(v1329, v3482);
          const v3690 = stdlib.add256(v1326, stdlib.checkedBigNumberify('./index.rsh:258:88:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v9089 = v1324;
          const v9090 = v1325;
          const v9091 = v3690;
          const v9092 = v1327;
          const v9093 = v1328;
          const v9094 = v3689;
          const v9095 = v1330;
          const v9097 = v3530;
          const v9098 = v3530[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9099 = v9098[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9100 = stdlib.cast(false, true, v9099);
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      undefined /* setApiDetails */;
      const v3482 = v3429[stdlib.checkedBigNumberify('./index.rsh:242:13:spread', stdlib.UInt_max, '0')];
      const v3483 = stdlib.cast(true, false, v3482);
      ;
      const v3524 = stdlib.add(v1366, v3483);
      const v3527 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v3528 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v3529 = [v3524, v3527, v3528];
      const v3530 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3529);
      ;
      const v3677 = stdlib.addressEq(v1637, v1305);
      const v3678 = stdlib.addressEq(v1637, v1324);
      const v3679 = v3677 ? true : v3678;
      stdlib.assert(v3679, {
        at: './index.rsh:254:24:application',
        fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3681 = stdlib.gt(v3483, stdlib.checkedBigNumberify('./index.rsh:255:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3681, {
        at: './index.rsh:255:24:application',
        fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3682 = true;
      const v3683 = await txn1.getOutput('dBT', 'v3682', ctc8, v3682);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v3429, v3683), {
          at: './index.rsh:243:13:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:257:20:application call to "res" (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v3689 = stdlib.add256(v1329, v3482);
      const v3690 = stdlib.add256(v1326, stdlib.checkedBigNumberify('./index.rsh:258:88:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v9089 = v1324;
      const v9090 = v1325;
      const v9091 = v3690;
      const v9092 = v1327;
      const v9093 = v1328;
      const v9094 = v3689;
      const v9095 = v1330;
      const v9097 = v3530;
      const v9098 = v3530[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9099 = v9098[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9100 = stdlib.cast(false, true, v9099);
      return;
      
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _docHash3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _docHash3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _docHash3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc15,
    cCM0_183: ctc13,
    cST0_183: ctc15,
    dBT0_183: ctc16,
    docHash0_183: ctc12,
    optIn0_183: ctc15,
    remWL0_183: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1373 = ctc.selfAddress();
  const v1375 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)', 'at ./index.rsh:109:85:application call to "rundocHash0_183" (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v1379 = stdlib.addressEq(v1373, v1305);
  const v1380 = stdlib.addressEq(v1373, v1324);
  const v1381 = v1379 ? true : v1380;
  stdlib.assert(v1381, {
    at: './index.rsh:129:23:application',
    fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:18:function exp)', 'at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)', 'at ./index.rsh:109:85:application call to "rundocHash0_183" (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'docHash'
    });
  const v1385 = ['docHash0_183', v1375];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1385],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:133:26:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v3825 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3826 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3827 = [v1366, v3825, v3826];
          const v3828 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3827);
          ;
          const v3991 = v3727[stdlib.checkedBigNumberify('./index.rsh:125:13:spread', stdlib.UInt_max, '0')];
          const v3995 = true;
          const v3996 = await txn1.getOutput('docHash', 'v3995', ctc8, v3995);
          
          const v9254 = v1324;
          const v9255 = v1325;
          const v9256 = v1326;
          const v9257 = v3991;
          const v9258 = v1328;
          const v9259 = v1329;
          const v9260 = v1330;
          const v9262 = v3828;
          const v9263 = v3828[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9264 = v9263[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9265 = stdlib.cast(false, true, v9264);
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v3825 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v3826 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v3827 = [v1366, v3825, v3826];
      const v3828 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3827);
      ;
      const v3991 = v3727[stdlib.checkedBigNumberify('./index.rsh:125:13:spread', stdlib.UInt_max, '0')];
      const v3992 = stdlib.addressEq(v1637, v1305);
      const v3993 = stdlib.addressEq(v1637, v1324);
      const v3994 = v3992 ? true : v3993;
      stdlib.assert(v3994, {
        at: './index.rsh:136:24:application',
        fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
        msg: null,
        who: 'docHash'
        });
      const v3995 = true;
      const v3996 = await txn1.getOutput('docHash', 'v3995', ctc8, v3995);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v3727, v3996), {
          at: './index.rsh:126:13:application',
          fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:138:20:application call to "res" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v9254 = v1324;
      const v9255 = v1325;
      const v9256 = v1326;
      const v9257 = v3991;
      const v9258 = v1328;
      const v9259 = v1329;
      const v9260 = v1330;
      const v9262 = v3828;
      const v9263 = v3828[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9264 = v9263[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9265 = stdlib.cast(false, true, v9264);
      return;
      
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc12,
    cCM0_183: ctc13,
    cST0_183: ctc12,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc12,
    remWL0_183: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1453 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:109:85:application call to "runoptIn0_183" (defined at: ./index.rsh:228:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v1457 = ['optIn0_183', v1453];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1457],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:235:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:235:25:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v4123 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4124 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4125 = [v1366, v4123, v4124];
          const v4126 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4125);
          ;
          const v4302 = true;
          const v4303 = await txn1.getOutput('optIn', 'v4302', ctc8, v4302);
          
          const v9419 = v1324;
          const v9420 = v1325;
          const v9421 = v1326;
          const v9422 = v1327;
          const v9423 = v1328;
          const v9424 = v1329;
          const v9425 = v1330;
          const v9427 = v4126;
          const v9428 = v4126[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9429 = v9428[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9430 = stdlib.cast(false, true, v9429);
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v4123 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v4124 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v4125 = [v1366, v4123, v4124];
      const v4126 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4125);
      ;
      const v4302 = true;
      const v4303 = await txn1.getOutput('optIn', 'v4302', ctc8, v4302);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v4025, v4303), {
          at: './index.rsh:229:13:application',
          fs: ['at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:238:20:application call to "res" (defined at: ./index.rsh:237:13:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v9419 = v1324;
      const v9420 = v1325;
      const v9421 = v1326;
      const v9422 = v1327;
      const v9423 = v1328;
      const v9424 = v1329;
      const v9425 = v1330;
      const v9427 = v4126;
      const v9428 = v4126[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9429 = v9428[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9430 = stdlib.cast(false, true, v9429);
      return;
      
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      return;
      break;
      }
    }
  
  
  };
export async function _remWL3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _remWL3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _remWL3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1401 = ctc.selfAddress();
  const v1403 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:109:85:application call to "runremWL0_183" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1407 = stdlib.addressEq(v1401, v1305);
  const v1408 = stdlib.addressEq(v1401, v1324);
  const v1409 = v1407 ? true : v1408;
  stdlib.assert(v1409, {
    at: './index.rsh:164:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:18:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:109:85:application call to "runremWL0_183" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1413 = ['remWL0_183', v1403];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1309, v1324, v1325, v1326, v1327, v1328, v1329, v1330, v1333, v1365, v1366, v1367, v1413],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:168:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:168:26:decimal', stdlib.UInt_max, '0'), v1309]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
      
      switch (v1638[0]) {
        case 'aBT0_183': {
          const v1641 = v1638[1];
          
          break;
          }
        case 'aST0_183': {
          const v1939 = v1638[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2237 = v1638[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2535 = v1638[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2833 = v1638[1];
          
          break;
          }
        case 'cST0_183': {
          const v3131 = v1638[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3429 = v1638[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3727 = v1638[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4025 = v1638[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4323 = v1638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v4421 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4422 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4423 = [v1366, v4421, v4422];
          const v4424 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4423);
          ;
          const v4608 = v4323[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v4608, undefined /* Nothing */);
          const v4613 = true;
          const v4614 = await txn1.getOutput('remWL', 'v4613', ctc8, v4613);
          
          const v9584 = v1324;
          const v9585 = v1325;
          const v9586 = v1326;
          const v9587 = v1327;
          const v9588 = v1328;
          const v9589 = v1329;
          const v9590 = v1330;
          const v9592 = v4424;
          const v9593 = v4424[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9594 = v9593[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9595 = stdlib.cast(false, true, v9594);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v803, from: v1637 } = txn1;
  switch (v1638[0]) {
    case 'aBT0_183': {
      const v1641 = v1638[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1939 = v1638[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2237 = v1638[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2535 = v1638[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2833 = v1638[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3131 = v1638[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3429 = v1638[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3727 = v1638[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4025 = v1638[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4323 = v1638[1];
      undefined /* setApiDetails */;
      ;
      const v4421 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v4422 = v1365[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v4423 = [v1366, v4421, v4422];
      const v4424 = stdlib.Array_set(v1333, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4423);
      ;
      const v4608 = v4323[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
      const v4609 = stdlib.addressEq(v1637, v1305);
      const v4610 = stdlib.addressEq(v1637, v1324);
      const v4611 = v4609 ? true : v4610;
      stdlib.assert(v4611, {
        at: './index.rsh:171:24:application',
        fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v4608, undefined /* Nothing */);
      const v4613 = true;
      const v4614 = await txn1.getOutput('remWL', 'v4613', ctc8, v4613);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v4323, v4614), {
          at: './index.rsh:161:13:application',
          fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:174:20:application call to "res" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v9584 = v1324;
      const v9585 = v1325;
      const v9586 = v1326;
      const v9587 = v1327;
      const v9588 = v1328;
      const v9589 = v1329;
      const v9590 = v1330;
      const v9592 = v4424;
      const v9593 = v4424[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9594 = v9593[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9595 = stdlib.cast(false, true, v9594);
      return;
      
      break;
      }
    }
  
  
  };
export async function aBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _aBT3(ctcTop, interact);}
  };
export async function aST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _aST3(ctcTop, interact);}
  };
export async function addWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _addWL3(ctcTop, interact);}
  };
export async function cBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cBT3(ctcTop, interact);}
  };
export async function cCM(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cCM expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cCM expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cCM3(ctcTop, interact);}
  };
export async function cST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cST3(ctcTop, interact);}
  };
export async function dBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for dBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for dBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _dBT3(ctcTop, interact);}
  };
export async function docHash(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for docHash expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for docHash expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _docHash3(ctcTop, interact);}
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _optIn3(ctcTop, interact);}
  };
export async function remWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for remWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for remWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _remWL3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`aBT(address)byte`, `aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()uint256`, `cCM(address)byte`, `cST()byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`],
    sigs: [`aBT(address)byte`, `aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()uint256`, `cCM(address)byte`, `cST()byte`, `claimSTBT(address)(uint256,uint256)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`]
    },
  appApproval: `BiAlAAMBCEAYIBEEYMYBxwGK0sKbCKG32tcK4OXDsAywgt+wDNiOmeAOv8rY8Arx4ZPhCN3R4ZgJ+dmevAm8rcerCJz4g4gC+YSKkQXJ/Ji8Bf3mqaUHoeDs5wSXxMGvAbCd490B9frfkgEC////////////AY0CBQkQoI0GJgUBAQEAAQIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIjUAMRhBDI4rZEkiWzUBJVs1AjEZJBJBABwxACELr0sBKUsCVwB/ZksBKEsCV39IZkhIQgxJNhoAF0lBAtciNQQkNQZJIQwMQAHBSSENDEAA5kkhDgxAAJRJIQ8MQAA5SSEQDEAAFiEQEkQ2GgE1/4ABCTT/UCEEr1BCAyAhDxJENAEjEkQpZChkUCpkUEk1A1fMATUHQgv1IQ4SRDQBIxJENhoBNf8yAzT/iAvxV0IhSTX+VwEgNP4iVU0yAzT/iAvcV4QhSTX+VwEgNP4iVU1QMgM0/4gLxlelIUk1/lcBIDT+IlVNUDUHQguhSSERDEAAHCEREkQ0ASMSRClkKGRQKmRQSTUDV0gENQdCC34hDRJENAEjEkQpZChkUCpkUEk1A1ftIDQDV80gUDQDV0wgUDUHQgtWSSESDEAAnEkhEwxAAFdJIRQMQAAfIRQSRDQBIxJEKWQoZFAqZFBJNQOBtwIhBlg1B0ILIiETEkQ0ASMSRDYaAYgLJFfGAUk1/iJVQAAGIjX/QgAGJDX/QgAANP8WUQcINQdCCvEhEhJENAEjEkQ2GgE1/zIDNP+ICu1XACFJNf5XASA0/iJVTTIDNP+ICthXISFJNf5XASA0/iJVTVA1B0IKs0khFQxAABQhFRJENhoBNf8qNP9QIQSvUEIBpyEMEkQ2GgE1/4ABBjT/UCEEr1BCAZFJIRYMQACWSSEXDEAAVkkhGAxAADtJIRkMQAAiIRkSRDQBIxJEKWQoZFAqZFBJNQNXACA0A1coIFA1B0IKRCEYEkQ2GgE1/4ABBzT/UEIBQSEXEkQrNf+AAQg0/1AhCa9QQgEtSSEaDEAAHCEaEkQ0ASMSRClkKGRQKmRQSTUDV2xgNQdCCfshFhJENhoBNf+AAQQ0/1AhBK9QQgD0SSEbDEAAL0khHAxAABQhHBJEKzX/gAEFNP9QIQmvUEIA0iEbEkQrNf+AAQM0/1AhCa9QQgC+SSEdDEAAGCEdEkQ2GgE2GgJQNhoDUDX/KDT/UEIAn4Hf9oYLEkQ2GgE1/yk0/1AhBK9QQgCINhoCFzUENhoDNhoBF0khHgxAB6VJIwxAAG0jEkQjNAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNXACA1/4AEp2XEtLAyBiEfD0Q0/zEAEkQ0/zQDIQZbNANXKCA0A1dIBDQDV0wgNANXbGA0A1fMARc0A1fNIDQDV+0gMgY0AyEgIQdYQggzSCM0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lKSkpKSlcAIDX/IQZbNf5XKCA1/VdIBDX8V0wgNftXbGA1+lfMARc1+VfNIDX4V+0gNfchICEHWDX2gZ4CIQdYNfWBrwJbNfRJNQU184AE47jRlTTzULAyBiEfDEQ08yJVSSEhDEAChEmBBwxAAPdJJQxAAKhJISIMQABrISISRDTzVwEgNfIxADT/EjEANP0SEUQ08kmICE0iIQpMVksBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAASBQGwKDUHNP80/jT9NPw0+zT6NPk0+DT3MgY09BY09VcICFA09VcQAVBCBy9IgAkAAAAAAAAQzgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3MgY09BY09VcICFA09VcQAVBCBvlINPNXAWA18jEANP8SMQA0/RIRRIAJAAAAAAAAD5sBsCg1BzT/NP40/TT8NPs08jT5NPg09zIGNPQWNPVXCAhQNPVXEAFQQgawSYEGDEAAgEg081cBIDXyNPJJNfFJSiEjWyISRCVbIhJEIlsiEkQhBVs18DTwNP6IB30xADT/EjEANP0SEUQ08CINRIAJAAAAAAAADmIBsCg1BzT/NP40/TT8NPsnBKCIB200+jT5NPg08aCIB2E09zIGNPQ08AgWNPVXCAhQNPVXEAFQQgYpSDIDMQCIBvFXACFJNfFXASA08SJVTTXyMQCIBtxXxgFJNfAiVUAABiI18UIABiQ18UIAADTxRDTyMgOlRDEAMQCIBrUoMgMxAIgGrVdCIUk18FcBIDTwIlVNNPKgiAboUDXwSVcAQjTwUExXY2RQSwEpSwJXAH9mSwEoSwJXf0hmSEgxADEAiAZvgCEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA18FchpjTwTFBLASlLAlcAf2ZLAShLAld/SGZISIAJAAAAAAAADSoBsCg1BzT/NP40/TT8NPs0+jT5NPg09zIGNPQWNPVXCAhQNPVXEAFQQgUqSSEeDEACLEkjDEABvkkhCAxAAElINPNXASA18jEANP8SMQA0/RIRRIAJAAAAAAAAC+0BsCg1BzT/NP408jT8NPs0+jT5NPg09zIGNPQWNPVXCAhQNPVXEAFQQgTNSDT0FjT1VwgIUDT1VxABUDXyMQCIBYZXxgFJNfAiVUAABiI18UIABiQ18UIAADTxRDTyVwARSTXwIls17zIDMQCIBVlXYyFJNe1XASA07SJVTTXuNO8iDTT3MgOlEDT3NO6nEEQ07iEFrzTvFlCjiAV6NPeiiAV0STXtSUohI1siEkQlWyISRCJbIhJEIQVbNeyxIrIBNOyyEiEIshAxALIUNP6yEbMxADEAiATvKDIDMQCIBOdXhCFJNetXASA06yJVTTTtoIgFIlA160lXAIQ061BMV6UiUEsBKUsCVwB/ZksBKEsCV39IZkhIMQAxAIgEqSgyAzEAiAShV6UhSTXrVwEgNOsiVU0nBKCIBNxQNetJVwClNOtQTFfGAVBLASlLAlcAf2ZLAShLAld/SGZISIAIAAAAAAAACqQ07VCwNO01BzT/NP40/TT8NPs0+jT5NPg09zIGNO807AkWNPBXCAhQNPBXEAFQQgNfSDTzVwEgNfIxADT/EjEANP0SEUQ08kmIBBUkIQpMVksBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAAJXgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3MgY09BY09VcICFA09VcQAVBCAvdJJAxAAQ5INPNXAWA18jTyVwAgNfE08lcgIDXwNPJXQCA17zTxNP8SNPE0/RIRRDTvMgOlRDTwSYgDjCQhCkxWSwEpSwJXAH9mSwEoSwJXf0hmSEg08EmIA20oMgM08IgDZVcAIUk17lcBIDTuIlVNNO+giAOgUDXuVyGmNO5MUEsBKUsCVwB/ZksBKEsCV39IZkhINPBJiAMtKDIDNPCIAyVXYyFJNe5XASA07iJVTTTvoIgDYFA17klXAGM07lBMV4RDUEsBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAAIIwGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NO+giAMWMgY09BY09VcICFA09VcQAVBCAeNINPNXASA18jT0FjT1VwgIUDT1VxABUDXxNPI18DEANP8SMQA0/RIRRDIDNPCIAoNXYyFJNe9XASA07yJVTTIDpUQyAzEAiAJqV2MhSTXuVwEgNO4iVU0096KIAqUhBa808VcAEVcACFCjiAKVNe808EmIAj4oMgM08IgCNlchIUk17lcBIDTuIlVNNO+giAJxUDXuSVcAITTuUExXQoVQSwEpSwJXAH9mSwEoSwJXf0hmSEiACQAAAAAAAAbhAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc076CIAicyBjTxQgEBIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfxXqSA1+4AEmjD5HTT/UDT+FlEHCFA0/VA0/BZQNPtQsCEkiAGUIQevSTX6VwARNfkhJIgBhLEisgEishIhCLIQMgqyFDT8shGzMQA0/DT9gAQxLjAwMgOAYGFqZG5hZWluYXdpbmRpYWVuZ3RuaWZyandyaXRuaXF3cm5pcmVmaW5kaW5pZ2FqZG5hZWluYXdpZGlhZW5ndG5paXRuaXF3cm5pcmVmaW5kaW5pZ2Z1YWViZnViYXd1cjT+MgMyAzIGJa80+VcICFA0+VcQAVBCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP9XABFJNfQiWzXzIQWvNPMWUDXyNPU09hZQNPdQNPhQNPlQNPpQNPsWUQcIUDT8UDT9UDT/UDT0UDTzFlA08lApSwFXAH9nKEsBV39/ZypLAVf+WWdIIzUBMgY1AkIAHDEZISESRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghC6+JSSliSwEoYlBMSIk0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECEIEkQ4EU8CEkQ4EhJEiUkVIQZMCa9MUIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 2,
  mapDataSize: 199,
  stateKeys: 3,
  stateSize: 343,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T13",
                "name": "v1306",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1307",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1308",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1309",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1310",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T13",
                "name": "v1306",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1307",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1308",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1309",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1310",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_aBT0_183",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_aST0_183",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_addWL0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_183",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_cCM0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_183",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_dBT0_183",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_docHash0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_183",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_remWL0_183",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1638",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1761",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2083",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2398",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v2724",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3053",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3370",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3682",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3995",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4302",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4613",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap4Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap5Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap6Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_aBT0_183",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_aST0_183",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_addWL0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_183",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_cCM0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_183",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_dBT0_183",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_docHash0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_183",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_remWL0_183",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1638",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "aBT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "aST",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "addWL",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cBT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "cCM",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cST",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v9599",
        "type": "address"
      }
    ],
    "name": "claimSTBT",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "dBT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T4",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "docHash",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "optIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "remWL",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "saleLocked",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totSTBTD",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v9603",
        "type": "address"
      }
    ],
    "name": "totSTBTDRec",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vBtBal",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vCcCm",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vHash",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vcVersion",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v9609",
        "type": "address"
      }
    ],
    "name": "wlMember",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200547a3803806200547a83398101604081905262000026916200077e565b600080554360035562000038620003df565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b92919062000857565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415601062000214565b6060810151630312e30360e41b90526080810180517f616a646e6165696e6177696e646961656e67746e6966726a777269746e697177905280517f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e602090910152517f6969746e697177726e69726566696e64696e69676675616562667562617775726040909101526200016162000470565b80513390526020808401805160609081015184516001600160a01b0391821690850152825160409081015185870180519190931690528683015182518601528151600090820181905260808089015184519095019490945293518501518251901515930192909252805160a001839052805160c001839052514360e0909101529184015191840151620001f69291906200023e565b602082015161010001526200020b81620002c1565b50505062000ad0565b816200023a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002486200049b565b60005b60018110156200029e578481600181106200026a576200026a620008ea565b6020020151828260018110620002845762000284620008ea565b602002015280620002958162000900565b9150506200024b565b5081818460018110620002b557620002b5620008ea565b60200201529392505050565b6040805160208082019092526000815290820151610100015151518152620002e8620004e8565b8251516001600160a01b03908116825283516020908101518216818401528085018051519092166040808501919091528251820151606080860191909152835182015160808087019190915284519091015160a080870191909152845190910151151560c08087019190915284519091015160e086015283510151610100808601919091528351810151610120860152835181015151610140860152925190920151515161016084015283516101808401526003600055436001559051620003b39183910162000971565b60405160208183030381529060405260029080519060200190620003d992919062000599565b50505050565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101620004136200049b565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160808101825260009181018281526060820192909252908152602081016200046b62000628565b60405180602001604052806001905b620004d1604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004aa5790505090565b604080516101a0810182526000808252602080830182905282840182905283519081019093528252906060820190815260006020808301829052604080516060810182528381529182018390528181019290925291019081526020016000151581526020016000815260200160008152602001620005656200049b565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b828054620005a79062000a93565b90600052602060002090601f016020900481019282620005cb576000855562000616565b82601f10620005e657805160ff191683800117855562000616565b8280016001018555821562000616579182015b8281111562000616578251825591602001919060010190620005f9565b5062000624929150620006a0565b5090565b60408051610120810182526000808252825160208181019094529081529091820190815260006020808301829052604080516060810182528381529182018390528181019290925291019081526020016000151581526020016000815260200160008152602001600081526020016200046b6200049b565b5b80821115620006245760008155600101620006a1565b604080519081016001600160401b0381118282101715620006e857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620006e857634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620006e857634e487b7160e01b600052604160045260246000fd5b805180151581146200076157600080fd5b919050565b80516001600160a01b03811681146200076157600080fd5b60008183036101208112156200079357600080fd5b6200079d620006b7565b83518152601f198201915061010080831215620007b957600080fd5b620007c3620006ee565b6080841215620007d257600080fd5b620007dc6200071f565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200081460a0870162000750565b60208201526200082760c0870162000766565b60408201526200083a60e0870162000766565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620008d66101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200092357634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b6001811015620003d9576200095a84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200092e565b81516001600160a01b03168152610260810160208301516200099e60208401826001600160a01b03169052565b506040830151620009ba60408401826001600160a01b03169052565b506060830151620009d86060840182516001600160e01b0319169052565b506080830151608083015260a083015162000a0a60a08401828051825260208082015190830152604090810151910152565b5060c083015161010062000a218185018315159052565b60e085015161012085810191909152908501516101408086019190915290850151915061016062000a55818601846200092a565b9085015180516101c086015260208101516101e086015260400151151561020085015284015161022084015250610180909201516102409091015290565b600181811c9082168062000aa857607f821691505b6020821081141562000aca57634e487b7160e01b600052602260045260246000fd5b50919050565b61499a8062000ae06000396000f3fe6080604052600436106101c45760003560e01c806359cac3a4116100f6578063a153a9bd1161008f578063cadc2e7a11610061578063cadc2e7a146104fa578063d1ad1a371461051a578063dc01fb9d1461052f578063e9b451af1461054f57005b8063a153a9bd14610484578063ab53f2c614610497578063abe9f98d146104ba578063acf0cc22146104da57005b806373b4522c116100c857806373b4522c1461042957806374fcef121461043c578063817d57f31461044f578063832307571461046f57005b806359cac3a4146103cb5780635b48684e146104065780635d3320a01461040e5780637333bd091461042157005b80631fa8b02f116101685780633bc5b7bf1161013a5780633bc5b7bf1461036e5780634acdd6cc1461038e57806354f2991c14610396578063573fa8a1146103a957005b80631fa8b02f146102be5780632080ea1c146103005780632152dd461461032d5780632f42e5091461035b57005b806312822a75116101a157806312822a751461025e5780631956a232146102735780631e3f5f07146102965780631e93b0f1146102a957005b8063046989b6146101cd57806306dc92ff1461020e578063125f48e41461023b57005b366101cb57005b005b3480156101d957600080fd5b506101e2610562565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561021a57600080fd5b5061022e610229366004613e4a565b61067c565b6040516102059190613e8d565b61024e610249366004613e4a565b6106a8565b6040519015158152602001610205565b34801561026a57600080fd5b5061024e610709565b34801561027f57600080fd5b506102886107cc565b604051908152602001610205565b61024e6102a4366004613ebd565b610890565b3480156102b557600080fd5b50600354610288565b3480156102ca57600080fd5b506102de6102d9366004613e4a565b610906565b6040805182518152602080840151908201529181015190820152606001610205565b34801561030c57600080fd5b5061032061031b366004613e4a565b610acb565b6040516102059190613efe565b34801561033957600080fd5b50610342610af1565b60405190516001600160e01b0319168152602001610205565b61024e610369366004613e4a565b610bc1565b34801561037a57600080fd5b5061022e610389366004613e4a565b610c1e565b61024e610c44565b61024e6103a4366004614037565b610c91565b3480156103b557600080fd5b506103be610cea565b6040516102059190614053565b3480156103d757600080fd5b506103eb6103e6366004613e4a565b610dc6565b60408051825181526020928301519281019290925201610205565b61024e610f32565b6101cb61041c366004614074565b610f81565b610288610fa5565b6101cb61043736600461408d565b610ff2565b61024e61044a366004613e4a565b611012565b34801561045b57600080fd5b5061022e61046a366004613e4a565b611073565b34801561047b57600080fd5b50600154610288565b61024e610492366004613e4a565b611099565b3480156104a357600080fd5b506104ac6110fc565b6040516102059291906140cb565b3480156104c657600080fd5b5061024e6104d5366004613e4a565b611199565b3480156104e657600080fd5b5061022e6104f5366004613e4a565b6112c0565b34801561050657600080fd5b5061022e610515366004613e4a565b6112e6565b34801561052657600080fd5b506102de61130c565b34801561053b57600080fd5b5061022e61054a366004613e4a565b611436565b61024e61055d366004614105565b61145c565b60408051808201909152600080825260208201526003600054141561066d576000600280546105909061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546105bc9061411e565b80156106095780601f106105de57610100808354040283529160200191610609565b820191906000526020600020905b8154815290600101906020018083116105ec57829003601f168201915b5050505050806020019051810190610621919061428c565b9050610643604080516060810182526000602082018181529282015290815290565b815181516001600160a01b0391821690526040909201518151921660209092019190915251919050565b6106796000600c6114b4565b90565b60408051606081018252600080825260208201819052918101919091526106a2826114da565b92915050565b60006106b26137db565b6106ba61382f565b6106c2613849565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526106fd82846115ac565b50506040015192915050565b6000600360005414156107c0576000600280546107259061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546107519061411e565b801561079e5780601f106107735761010080835404028352916020019161079e565b820191906000526020600020905b81548152906001019060200180831161078157829003601f168201915b50505050508060200190518101906107b6919061428c565b60c0015192915050565b610679600060086114b4565b600060036000541415610884576000600280546107e89061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546108149061411e565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b5050505050806020019051810190610879919061428c565b610180015192915050565b6106796000600b6114b4565b600061089a6137db565b6108a261382f565b6108aa613849565b604080516060810182526001600160a01b038981168252881660208201528082018790529082015260018181905250604080516020808201909252828152908301526108f682846115ac565b50506020015190505b9392505050565b61092a60405180606001604052806000815260200160008152602001600081525090565b60036000541415610aba576000600280546109449061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546109709061411e565b80156109bd5780601f10610992576101008083540402835291602001916109bd565b820191906000526020600020905b8154815290600101906020018083116109a057829003601f168201915b50505050508060200190518101906109d5919061428c565b90506109fe60408051608081018252600060208201818152928201819052606082015290815290565b6001610a0985612eb4565b516001811115610a1b57610a1b613e67565b14610a27576000610a35565b610a3084612eb4565b604001515b8151526001610a4385612f41565b516001811115610a5557610a55613e67565b14610a61576000610a6f565b610a6a84612f41565b604001515b8151602001526001610a8085612fce565b516001811115610a9257610a92613e67565b14610a9e576000610aac565b610aa784612fce565b604001515b815160400152519392505050565b610ac66000600a6114b4565b919050565b60408051606081018252600080825260208201819052918101919091526106a28261305b565b60408051602081019091526000815260036000541415610bb557600060028054610b1a9061411e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b469061411e565b8015610b935780601f10610b6857610100808354040283529160200191610b93565b820191906000526020600020905b815481529060010190602001808311610b7657829003601f168201915b5050505050806020019051810190610bab919061428c565b6060015192915050565b6106796000600e6114b4565b6000610bcb6137db565b610bd361382f565b610bdb613849565b60408051602080820183526001600160a01b038816825283810191909152600083528151808201909252828252830152610c1582846115ac565b50505192915050565b60408051606081018252600080825260208201819052918101919091526106a282613124565b6000610c4e6137db565b610c5661382f565b610c5e613849565b600060c08201526005815260408051602080820190925282815290830152610c8682846115ac565b505060a00151919050565b6000610c9b6137db565b610ca361382f565b610cab613849565b6040805160208082018352878252610100840191909152600783528151808201909252828252830152610cde82846115ac565b505060e0015192915050565b60408051606081018252600080825260208201819052918101829052905460031415610dba57600060028054610d1f9061411e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4b9061411e565b8015610d985780601f10610d6d57610100808354040283529160200191610d98565b820191906000526020600020905b815481529060010190602001808311610d7b57829003601f168201915b5050505050806020019051810190610db0919061428c565b60a0015192915050565b6106796000600d6114b4565b604080518082019091526000808252602082015260036000541415610f2657600060028054610df49061411e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e209061411e565b8015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050806020019051810190610e85919061428c565b9050610ea7604080516060810182526000602082018181529282015290815290565b6001610eb285613124565b516001811115610ec457610ec4613e67565b14610ed0576000610ede565b610ed984613124565b604001515b8151526001610eec856131b1565b516001811115610efe57610efe613e67565b14610f0a576000610f18565b610f13846131b1565b604001515b815160200152519392505050565b610ac6600060076114b4565b6000610f3c6137db565b610f4461382f565b610f4c613849565b60006101208201526008815260408051602080820190925282815290830152610f7582846115ac565b50506101000151919050565b610f896137db565b610fa1610f9b3684900384018461444a565b826115ac565b5050565b6000610faf6137db565b610fb761382f565b610fbf613849565b600060808201526003815260408051602080820190925282815290830152610fe782846115ac565b505060600151919050565b610ffa6137db565b610fa161100c36849003840184614567565b8261323e565b600061101c6137db565b61102461382f565b61102c613849565b60408051602080820183526001600160a01b038816825260a084019190915260048352815180820190925282825283015261106782846115ac565b50506080015192915050565b60408051606081018252600080825260208201819052918101919091526106a282612eb4565b60006110a36137db565b6110ab61382f565b6110b3613849565b60408051602080820183526001600160a01b03881682526101408401919091526009835281518082019092528282528301526110ef82846115ac565b5050610120015192915050565b6000606060005460028080546111119061411e565b80601f016020809104026020016040519081016040528092919081815260200182805461113d9061411e565b801561118a5780601f1061115f5761010080835404028352916020019161118a565b820191906000526020600020905b81548152906001019060200180831161116d57829003601f168201915b50505050509050915091509091565b6000600360005414156112b4576000600280546111b59061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546111e19061411e565b801561122e5780601f106112035761010080835404028352916020019161122e565b820191906000526020600020905b81548152906001019060200180831161121157829003601f168201915b5050505050806020019051810190611246919061428c565b60408051602081019091526000815290915060006112638561305b565b51600181111561127557611275613e67565b141561128457600081526112ac565b600161128f8561305b565b5160018111156112a1576112a1613e67565b14156112ac57600181525b519392505050565b610ac66000600f6114b4565b60408051606081018252600080825260208201819052918101919091526106a282612f41565b60408051606081018252600080825260208201819052918101919091526106a2826131b1565b61133060405180606001604052806000815260200160008152602001600081525090565b6003600054141561142a5760006002805461134a9061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546113769061411e565b80156113c35780601f10611398576101008083540402835291602001916113c3565b820191906000526020600020905b8154815290600101906020018083116113a657829003601f168201915b50505050508060200190518101906113db919061428c565b905061140460408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260e082015181516020015260809091015181516040015251919050565b610679600060096114b4565b60408051606081018252600080825260208201819052918101919091526106a282612fce565b60006114666137db565b61146e61382f565b611476613849565b604080516020808201835287825260e08401919091526006835281518082019092528282528301526114a882846115ac565b505060c0015192915050565b81610fa15760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561152657611526613e67565b141561159d576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561156757611567613e67565b600181111561157857611578613e67565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6115bc60036000541460336114b4565b81516115d79015806115d057508251600154145b60346114b4565b6000808055600280546115e99061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546116159061411e565b80156116625780601f1061163757610100808354040283529160200191611662565b820191906000526020600020905b81548152906001019060200180831161164557829003601f168201915b505050505080602001905181019061167a919061428c565b905061168461393e565b611693600019431060356114b4565b7fdeaa705abe1dc21ef36d9a05f3ddb8af96e27744aa5579dec36389567311d4b733856040516116c49291906145f0565b60405180910390a160006020850151515160098111156116e6576116e6613e67565b14156119e2576020808501515101518152611703341560116114b4565b610160820151602080830180519290925261014084018051820151835190920191909152516040908101518251901515910152610120830151905161174b919060009061343b565b816040018190525061176d61176633846020015160006134af565b60126114b4565b81516117aa906001600160a01b031633146117a05782604001516001600160a01b0316336001600160a01b0316146117a3565b60015b60136114b4565b6117f4600060018351516117bd906114da565b5160018111156117cf576117cf613e67565b146117db5760006117ec565b8251516117e7906114da565b604001515b1160146114b4565b60408101515151610100830151600161180c336114da565b51600181111561181e5761181e613e67565b1461182a576000611838565b611833336114da565b604001515b6118429190614741565b61184c9190614763565b606082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061188c906131b1565b51600181111561189e5761189e613e67565b146118aa5760006118bb565b8151516118b6906131b1565b604001515b6118c59190614782565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527ff1ed53c0c4971b322cf10b769ce11b88c4feebae1a7bde16f710dd73d7d4af80910160405180910390a160018352611928613bdd565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845184015260c0870151845190151592019190915260e0860151925101919091528201516101008401516119b19190614782565b60208201805160c0019190915280514360e0909101526040830151905161010001526119dc816134c5565b50612eae565b60016020850151515160098111156119fc576119fc613e67565b1415611d5b57602084015151604001516080820152611a1d341560156114b4565b61016082015160a0820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151611a6d90611a6690339060006134af565b60166114b4565b8151608082015151611abb916001600160a01b03918216911614611ab15782604001516001600160a01b03168260800151600001516001600160a01b031614611ab4565b60015b60176114b4565b611ad160008260800151604001511160186114b4565b6080810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff00001916905586518601519094168352600485529181902080549093168217909255925190810151910151909190611b4c90613124565b516001811115611b5e57611b5e613e67565b14611b6a576000611b80565b611b7b826080015160200151613124565b604001515b611b8a9190614782565b6080820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff191685179055915191820151910151909190611be8906114da565b516001811115611bfa57611bfa613e67565b14611c06576000611c1c565b611c178260800151602001516114da565b604001515b611c269190614782565b60808201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527f814dd77eb970e2eac7cb3f1bfa33f1513e66f2d591e5817e3a7ca5b9c7549034910160405180910390a160016020840152611c90613bdd565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845183015260a08088015185519094019390935260c087015184519015159082015260e08701519351909201929092528301510151610100840151611d1b9190614782565b60208201805160c00191909152514360e09091015261012083015160a0830151611d48919060009061343b565b602082015161010001526119dc816134c5565b6002602085015151516009811115611d7557611d75613e67565b1415611f51576020840151516060015160c0820152611d96341560196114b4565b61016082015160e0820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151611de690611ddf90339060006134af565b601a6114b4565b8151611e23906001600160a01b03163314611e195782604001516001600160a01b0316336001600160a01b031614611e1c565b60015b601b6114b4565b60c081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527f46279ef5a6f2ee981e253f673a932bfae53b36623af1d9ffd7907e15e2ebba50910160405180910390a160016040840152611ea9613bdd565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e0808701518451909301929092526101008601518351909101529051439082015261012084015190830151611d48919060009061343b565b6003602085015151516009811115611f6b57611f6b613e67565b141561234057611f7d3415601c6114b4565b6101608201516101008201805191909152610140830180516020908101518351909101525160409081015182519015159101526101208301519051611fc5919060009061343b565b816101200181905250611fe8611fe133846020015160006134af565b601d6114b4565b6000611ff33361305b565b51600181111561200557612005613e67565b1415612018576000610140820152612044565b60016120233361305b565b51600181111561203557612035613e67565b14156120445760016101408201525b612054816101400151601e6114b4565b600161205f336114da565b51600181111561207157612071613e67565b1461207d57600061208b565b612086336114da565b604001515b61016082015261012081015151516120d3906120a85760006120b2565b6000836101000151115b6120bd5760006120cc565b81610160015183610100015110155b601f6114b4565b61010082015161012082015151516101608301516120f19190614763565b6120fb9190614741565b61018082018190526101a08201819052610120820151515161211d919061479a565b6101c082018051919091526101208201805151602090810151835182015290515160409081015192519215159201919091528201516101a0820151612164919033906135d7565b336000818152600860205260409020805460ff191660019081179091556101808301519161219190612f41565b5160018111156121a3576121a3613e67565b146121af5760006121bd565b6121b833612f41565b604001515b6121c79190614782565b33600081815260086020908152604080832060019081019590955560099091529020805460ff19168317905581906121fe90612fce565b51600181111561221057612210613e67565b1461221c57600061222a565b61222533612fce565b604001515b6122349190614782565b336000908152600960209081526040918290206001019290925561018083015190519081527fb4bee2c12ef4c6102eb6bfbdefce3f08a5c64e9fc0046dd09ae8b97ceea34ee6910160405180910390a16101808101516060840152612297613bdd565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e0808701518451909301929092526101008601518351909101529051439101526101208201516101c0830151611d48919060009061343b565b600460208501515151600981111561235a5761235a613e67565b14156124f5576020808501515160a001516101e083015261237d903415906114b4565b6101608201516102008201805191909152610140830180516020908101518351820152905160409081015192519215159201919091528201516123ce906123c790339060006134af565b60216114b4565b815161240b906001600160a01b031633146124015782604001516001600160a01b0316336001600160a01b031614612404565b60015b60226114b4565b604051600181527f966361fbcc7ed5b506e1de51f447c97fcf74e18de11821d034ec7b6d51592c599060200160405180910390a16001608084015261244e613bdd565b825181516001600160a01b0391821690526020808501518351908316908201526101e084015151818401805191909316905260608086015183519092019190915260808086015183516040015260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610200830151611d48919060009061343b565b600560208501515151600981111561250f5761250f613e67565b14156127ab57612521341560236114b4565b6101608201516102208201805191909152610140830180516020908101518351820152905160409081015192519215159201919091528201516125729061256b90339060006134af565b60246114b4565b600161257d33613124565b51600181111561258f5761258f613e67565b1461259b5760006125a9565b6125a433613124565b604001515b61024082015260006125ba3361305b565b5160018111156125cc576125cc613e67565b14156125df57600061026082015261260b565b60016125ea3361305b565b5160018111156125fc576125fc613e67565b141561260b5760016102608201525b61261b81610260015160256114b4565b61262e60008261024001511160266114b4565b336000818152600660205260409020805460ff191660019081179091556102408301519161265b90612eb4565b51600181111561266d5761266d613e67565b14612679576000612687565b61268233612eb4565b604001515b6126919190614782565b33600090815260066020908152604080832060019081019490945560048252808320805460ff19168517815584019290925590519182527f62bbbd560f8f3de66fcc9bb25208837e5676560fb04d7db5f41f6f183f17da5e910160405180910390a1600160a0840152612702613bdd565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610220830151611d48919060009061343b565b60066020850151515160098111156127c5576127c5613e67565b14156129ab5760208401515160e001516102808201819052516102a08201526127f0341560276114b4565b806102a001518261016001516128069190614782565b6102c08201805191909152610140830180516020908101518351820152905160409081015192519215159201919091528201516102a08201516128569161284f913391906134af565b60286114b4565b8151612893906001600160a01b031633146128895782604001516001600160a01b0316336001600160a01b03161461288c565b60015b60296114b4565b6128a66000826102a0015111602a6114b4565b604051600181527f4c4d1818044ca593d042cd90b126626f8a0fee8de4eec0925725b3302ff4e7929060200160405180910390a1600160c08401526128e9613bdd565b825181516001600160a01b03918216905260208085015183519083169082015260408501518184018051919093169052606085015191510152608083015161293390600190614782565b6020820180516040019190915260a084015181516060015260c084015190519015156080909101526102808201515160e08401516129719190614782565b60208201805160a00191909152610100840151815160c00152514360e0909101526101208301516102c0830151611d48919060009061343b565b60076020850151515160098111156129c5576129c5613e67565b1415612b635760208401515161010001516102e08201526129e83415602b6114b4565b610160820151610300820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612a3990612a3290339060006134af565b602c6114b4565b8151612a76906001600160a01b03163314612a6c5782604001516001600160a01b0316336001600160a01b031614612a6f565b60015b602d6114b4565b604051600181527f48b2d891decf4802fe8bbe2975a941dce404a679947722dd1fcac238a998c24f9060200160405180910390a1600160e0840152612ab9613bdd565b825181516001600160a01b03918216905260208085015183519083169082015260408086015182850180519190941690526060808701518451909301929092526080808701518451909201919091526102e08501515183519092019190915260c080860151835190151592019190915260e080860151835160a00152610100860151835190920191909152905143910152610120830151610300830151611d48919060009061343b565b6008602085015151516009811115612b7d57612b7d613e67565b1415612ccd57612b8f3415602e6114b4565b610160820151610320820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612be090612bd990339060006134af565b602f6114b4565b604051600181527faeef27ca63a11d2873cf3820618b1e11f7092706cf250b0f83cc8fdedb48a5bc9060200160405180910390a16001610100840152612c24613bdd565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610320830151611d48919060009061343b565b6009602085015151516009811115612ce757612ce7613e67565b1415612eae576020840151516101400151610340820152612d0a341560306114b4565b610160820151610360820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612d5b90612d5490339060006134af565b60316114b4565b8151612d98906001600160a01b03163314612d8e5782604001516001600160a01b0316336001600160a01b031614612d91565b60015b60326114b4565b610340810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527f314f7db1c2d41696fcdb63828b8c9b3dfd36f2038c45feea18d8ef7be920d42c910160405180910390a16001610120840152612e05613bdd565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610360830151611d48919060009061343b565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612f0057612f00613e67565b141561159d576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561156757611567613e67565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612f8d57612f8d613e67565b141561159d576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561156757611567613e67565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111561301a5761301a613e67565b141561159d576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561156757611567613e67565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff1660018111156130a7576130a7613e67565b141561159d576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff1660018111156130e8576130e8613e67565b60018111156130f9576130f9613e67565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561317057613170613e67565b141561159d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561156757611567613e67565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156131fd576131fd613e67565b141561159d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561156757611567613e67565b61324e60036000541460386114b4565b815161326990158061326257508251600154145b60396114b4565b60008080556002805461327b9061411e565b80601f01602080910402602001604051908101604052809291908181526020018280546132a79061411e565b80156132f45780601f106132c9576101008083540402835291602001916132f4565b820191906000526020600020905b8154815290600101906020018083116132d757829003601f168201915b505050505080602001905181019061330c919061428c565b905061331e600019431015603a6114b4565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1613371341560366114b4565b8051613389906001600160a01b0316331460376114b4565b613391613bdd565b815181516001600160a01b039182169052602080840151835190831690820152604080850151828501805191909416905260608086015184519093019290925260808086015184519092019190915260a08086015184519093019290925260c080860151845190151592019190915260e0808601518451909301929092526101008086015184519092019190915282514392019190915261012084015191510152612eae816134c5565b613443613c06565b60005b600181101561348f5784816001811061346157613461614715565b602002015182826001811061347857613478614715565b602002015280613487816147b1565b915050613446565b50818184600181106134a3576134a3614715565b60200201529392505050565b60006134bd838530856135f0565b949350505050565b60408051602080820190925260008152908201516101000151515181526134ea613c51565b8251516001600160a01b03908116825283516020908101518216818401528085018051519092166040808501919091528251820151606080860191909152835182015160808087019190915284519091015160a080870191909152845190910151151560c08087019190915284519091015160e0860152835101516101008086019190915283518101516101208601528351810151516101408601529251909201515151610160840152835161018084015260036000554360015590516135b391839101614810565b60405160208183030381529060405260029080519060200190612eae929190613cfb565b6135e28383836136ca565b6135eb57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916136579161492b565b60006040518083038185875af1925050503d8060008114613694576040519150601f19603f3d011682016040523d82523d6000602084013e613699565b606091505b50915091506136aa8282600161379b565b50808060200190518101906136bf9190614947565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916137299161492b565b60006040518083038185875af1925050503d8060008114613766576040519150601f19603f3d011682016040523d82523d6000602084013e61376b565b606091505b509150915061377c8282600261379b565b50808060200190518101906137919190614947565b9695505050505050565b606083156137aa5750816108ff565b8251156137ba5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016114d1565b905290565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b6040518060400160405280600081526020016137d6613d7f565b604080516101608101909152806000815260200161387260408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526020016138ac60408051602081019091526000815290565b8152600060208201526040016138cd60408051602081019091526000815290565b81526020016000151581526020016138f16040518060200160405280600081525090565b815260200161391d60408051608081018252600060208201818152928201819052606082015290815290565b8152600060208201526040016137d660408051602081019091526000815290565b604080516103a08101825260006103808201818152825282516060810184528181526020808201839052818501929092529082015290810161397e613c06565b8152602001600081526020016139ad604080516060810182526000808252602082018190529181019190915290565b815260408051606081018252600080825260208281018290529282015291019081526020016139e760408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613a34613c06565b8152602001600015158152602001600081526020016000815260200160008152602001613a7d604051806060016040528060008152602001600081526020016000151581525090565b8152602001613a9760408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600015158152602001613b026040518060200160405280600081525090565b815260200160008152602001613b34604051806060016040528060008152602001600081526020016000151581525090565b8152602001613b6060408051608081018252600060208201818152928201819052606082015290815290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613bba60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160808101825260009181018281526060820192909252908152602081016137d6613d92565b60405180602001604052806001905b613c3b604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613c155790505090565b604080516101a08101825260008082526020808301829052828401829052835180820185528281526060808501919091526080840183905284519081018552828152908101829052928301529060a082019081526020016000151581526020016000815260200160008152602001613cc7613c06565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b828054613d079061411e565b90600052602060002090601f016020900481019282613d295760008555613d6f565b82601f10613d4257805160ff1916838001178555613d6f565b82800160010185558215613d6f579182015b82811115613d6f578251825591602001919060010190613d54565b50613d7b929150613e1d565b5090565b60405180602001604052806137d6613849565b60405180610120016040528060006001600160a01b03168152602001613dc360408051602081019091526000815290565b815260200160008152602001613df2604080516060810182526000808252602082018190529181019190915290565b81526020016000151581526020016000815260200160008152602001600081526020016137d6613c06565b5b80821115613d7b5760008155600101613e1e565b6001600160a01b0381168114613e4757600080fd5b50565b600060208284031215613e5c57600080fd5b81356108ff81613e32565b634e487b7160e01b600052602160045260246000fd5b60028110613e4757613e47613e67565b81516060820190613e9d81613e7d565b808352506020830151151560208301526040830151604083015292915050565b600080600060608486031215613ed257600080fd5b8335613edd81613e32565b92506020840135613eed81613e32565b929592945050506040919091013590565b81516060820190613f0e81613e7d565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715613f6957613f69613f30565b60405290565b6040516020810167ffffffffffffffff81118282101715613f6957613f69613f30565b6040516101a0810167ffffffffffffffff81118282101715613f6957613f69613f30565b6040805190810167ffffffffffffffff81118282101715613f6957613f69613f30565b604051610160810167ffffffffffffffff81118282101715613f6957613f69613f30565b60006060828403121561400f57600080fd5b614017613f46565b905081358152602082013560208201526040820135604082015292915050565b60006060828403121561404957600080fd5b6108ff8383613ffd565b815181526020808301519082015260408083015190820152606081016106a2565b6000610200828403121561408757600080fd5b50919050565b60006040828403121561408757600080fd5b60005b838110156140ba5781810151838201526020016140a2565b83811115612eae5750506000910152565b82815260406020820152600082518060408401526140f081606085016020870161409f565b601f01601f1916919091016060019392505050565b60006020828403121561411757600080fd5b5035919050565b600181811c9082168061413257607f821691505b6020821081141561408757634e487b7160e01b600052602260045260246000fd5b8051610ac681613e32565b60006020828403121561417057600080fd5b614178613f6f565b82519091506001600160e01b03198116811461419357600080fd5b815292915050565b6000606082840312156141ad57600080fd5b6141b5613f46565b905081518152602082015160208201526040820151604082015292915050565b8015158114613e4757600080fd5b8051610ac6816141d5565b60006060828403121561420057600080fd5b614208613f46565b905081518152602082015160208201526040820151614226816141d5565b604082015292915050565b600082601f83011261424257600080fd5b61424a613f6f565b8060608085018681111561425d57600080fd5b855b818110156142805761427188826141ee565b8552602090940193820161425f565b50919695505050505050565b6000610260828403121561429f57600080fd5b6142a7613f92565b6142b083614153565b81526142be60208401614153565b60208201526142cf60408401614153565b60408201526142e1846060850161415e565b6060820152608083015160808201526142fd8460a0850161419b565b60a08201526101006143108185016141e3565b60c08301526101208085015160e08401526101408086015183850152610160925061433d87848801614231565b8285015261434f876101c088016141ee565b9084015250610220840151908201526102409092015161018083015250919050565b8035600a8110610ac657600080fd5b60006020828403121561439257600080fd5b61439a613f6f565b9050813561419381613e32565b6000606082840312156143b957600080fd5b6143c1613f46565b905081356143ce81613e32565b815260208201356143de81613e32565b806020830152506040820135604082015292915050565b8035610ac6816141d5565b60006020828403121561441257600080fd5b61441a613f6f565b9135825250919050565b60006060828403121561443657600080fd5b61443e613f6f565b90506141938383613ffd565b600081830361020081121561445e57600080fd5b614466613fb6565b833581526101e080601f198401121561447e57600080fd5b614486613f6f565b9250614490613fd9565b61449c60208701614371565b81526144ab8760408801614380565b60208201526144bd87606088016143a7565b60408201526144cf8760c08801614380565b60608201526144e060e087016143f5565b60808201526101006144f488828901614380565b60a08301526101206145078189016143f5565b60c084015261014061451b8a828b01614400565b60e085015261452e8a6101608b01614424565b8385015261453f6101c08a016143f5565b8285015261454f8a868b01614380565b90840152505083525060208101919091529392505050565b60006040828403121561457957600080fd5b6040516040810181811067ffffffffffffffff8211171561459c5761459c613f30565b6040528235815260208301356145b1816141d5565b60208201529392505050565b600a81106145cd576145cd613e67565b9052565b610fa18282518051825260208082015190830152604090810151910152565b60006102208201905060018060a01b03841682528251602083015260208301515161461f6040840182516145bd565b602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e085015250608081015161010061468d8186018315159052565b60a083015191506101206146ac81870184516001600160a01b03169052565b60c084015192506101406146c38188018515159052565b60e0850151516101608801528285015193506146e36101808801856145d1565b9084015115156101e08701529092015180516001600160a01b0316610200860152915061470d9050565b509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008261475e57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561477d5761477d61472b565b500290565b600082198211156147955761479561472b565b500190565b6000828210156147ac576147ac61472b565b500390565b60006000198214156147c5576147c561472b565b5060010190565b8060005b6001811015612eae576147fa84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016147d0565b81516001600160a01b031681526102608101602083015161483c60208401826001600160a01b03169052565b50604083015161485760408401826001600160a01b03169052565b5060608301516148746060840182516001600160e01b0319169052565b506080830151608083015260a08301516148a560a08401828051825260208082015190830152604090810151910152565b5060c08301516101006148bb8185018315159052565b60e08501516101208581019190915290850151610140808601919091529085015191506101606148ed818601846147cc565b9085015180516101c086015260208101516101e086015260400151151561020085015284015161022084015250610180909201516102409091015290565b6000825161493d81846020870161409f565b9190910192915050565b60006020828403121561495957600080fd5b81516108ff816141d556fea26469706673582212208d34c26fa9650932fe6caa8919226ae1956edc63ff082259de125ff353613a6764736f6c634300080c0033`,
  BytecodeLen: 21626,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    vBtBal: `vBtBal`,
    vCcCm: `vCcCm`,
    vHash: `vHash`,
    vcVersion: `vcVersion`,
    wlMember: `wlMember`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:330:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:109:85:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "aBT": aBT,
  "aST": aST,
  "addWL": addWL,
  "cBT": cBT,
  "cCM": cCM,
  "cST": cST,
  "dBT": dBT,
  "docHash": docHash,
  "optIn": optIn,
  "remWL": remWL
  };
export const _APIs = {
  aBT: aBT,
  aST: aST,
  addWL: addWL,
  cBT: cBT,
  cCM: cCM,
  cST: cST,
  dBT: dBT,
  docHash: docHash,
  optIn: optIn,
  remWL: remWL
  };
