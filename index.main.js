// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc5 = stdlib.T_Tuple([ctc3, ctc4]);
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Tuple([ctc7, ctc6, ctc6]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    ctcMan: ctc0,
    currDistr: ctc2,
    cv: ctc5,
    distrIndex: ctc6,
    distrNum: ctc2,
    docHash: ctc8,
    saleLocked: ctc9,
    totBT: ctc2,
    totST: ctc2,
    wlIndex: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc6, ctc9]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc18 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['status', ctc17], ['cumProceeds', ctc6], ['shareIssuanceType', ctc9]]);
  const ctc19 = stdlib.T_Null;
  const ctc20 = stdlib.T_Data({
    None: ctc19,
    Some: ctc2
    });
  const ctc21 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc22 = stdlib.T_Data({
    None: ctc19,
    Some: ctc21
    });
  const ctc23 = stdlib.T_Data({
    None: ctc19,
    Some: ctc17
    });
  const ctc24 = stdlib.T_Data({
    None: ctc19,
    Some: ctc9
    });
  const ctc25 = stdlib.T_Data({
    None: ctc19,
    Some: ctc19
    });
  const map0_ctc = ctc20;
  
  const map1_ctc = ctc20;
  
  const map2_ctc = ctc20;
  
  const map3_ctc = ctc20;
  
  const map4_ctc = ctc20;
  
  const map5_ctc = ctc22;
  
  const map6_ctc = ctc23;
  
  const map7_ctc = ctc24;
  
  const map8_ctc = ctc24;
  
  const map9_ctc = ctc25;
  
  
  const _claimSTBT = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async (_v2376 ) => {
          const v2376 = stdlib.protect(ctc0, _v2376, null);
        
        const v2377 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2376), null);
        const v2378 = stdlib.fromSome(v2377, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2379 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2376), null);
        const v2380 = stdlib.fromSome(v2379, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2381 = [v2378, v2380];
        
        return v2381;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _saleLocked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async () => {
        
        
        return v2375;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTD = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async () => {
        
        const v2374 = [v2371, v2372, v2373];
        
        return v2374;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTDRec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async (_v2383 ) => {
          const v2383 = stdlib.protect(ctc0, _v2383, null);
        
        const v2384 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2383), null);
        const v2385 = stdlib.fromSome(v2384, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2386 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2383), null);
        const v2387 = stdlib.fromSome(v2386, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2388 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v2383), null);
        const v2389 = stdlib.fromSome(v2388, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2390 = [v2385, v2387, v2389];
        
        return v2390;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vBtBal = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async () => {
        
        const v2408 = [v2407, v2316];
        
        return v2408;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCcCm = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async () => {
        
        const v2410 = [v2312, v2409];
        
        return v2410;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCurrSwap = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async (_v2414 ) => {
          const v2414 = stdlib.protect(ctc0, _v2414, null);
        
        const v2415 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v2414), null);
        const v2417 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2419 = stdlib.fromSome(v2415, v2417);
        const v2420 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v2414), null);
        const v2421 = '-----';
        const v2422 = stdlib.fromSome(v2420, v2421);
        const v2423 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v2414), null);
        const v2424 = stdlib.fromSome(v2423, false);
        const v2425 = v2419[stdlib.checkedBigNumberify('./index.rsh:110:56:array ref', stdlib.UInt_max, '1')];
        const v2426 = v2419[stdlib.checkedBigNumberify('./index.rsh:110:69:array ref', stdlib.UInt_max, '0')];
        const v2427 = v2419[stdlib.checkedBigNumberify('./index.rsh:110:111:array ref', stdlib.UInt_max, '2')];
        const v2428 = {
          cumProceeds: v2427,
          price: v2425,
          qty: v2426,
          shareIssuanceType: v2424,
          status: v2422
          };
        
        return v2428;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vHash = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async () => {
        
        
        return v2396;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async (_v2411 ) => {
          const v2411 = stdlib.protect(ctc0, _v2411, null);
        
        const v2412 = stdlib.protect(map8_ctc, await viewlib.viewMapRef(8, v2411), null);
        const v2413 = stdlib.fromSome(v2412, false);
        
        return v2413;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vcVersion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async () => {
        
        const v2404 = [v2401, v2403];
        
        return v2404;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wlMember = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = svs;
      return (await ((async (_v2392 ) => {
          const v2392 = stdlib.protect(ctc0, _v2392, null);
        
        const v2393 = stdlib.protect(map9_ctc, await viewlib.viewMapRef(9, v2392), null);
        const v2394 = {
          None: 0,
          Some: 1
          }[v2393[0]];
        const v2395 = stdlib.eq(v2394, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2395;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      claimSTBT: {
        decode: _claimSTBT,
        dom: [ctc0],
        rng: ctc13
        },
      saleLocked: {
        decode: _saleLocked,
        dom: [],
        rng: ctc9
        },
      totSTBTD: {
        decode: _totSTBTD,
        dom: [],
        rng: ctc14
        },
      totSTBTDRec: {
        decode: _totSTBTDRec,
        dom: [ctc0],
        rng: ctc14
        },
      vBtBal: {
        decode: _vBtBal,
        dom: [],
        rng: ctc15
        },
      vCcCm: {
        decode: _vCcCm,
        dom: [],
        rng: ctc16
        },
      vCurrSwap: {
        decode: _vCurrSwap,
        dom: [ctc0],
        rng: ctc18
        },
      vHash: {
        decode: _vHash,
        dom: [],
        rng: ctc8
        },
      vOptedIn: {
        decode: _vOptedIn,
        dom: [ctc0],
        rng: ctc9
        },
      vcVersion: {
        decode: _vcVersion,
        dom: [],
        rng: ctc5
        },
      wlMember: {
        decode: _wlMember,
        dom: [ctc0],
        rng: ctc9
        }
      },
    views: {
      3: [ctc0, ctc1, ctc10, ctc12, ctc2, ctc2, ctc2, ctc9, ctc8, ctc6, ctc3, ctc4, ctc11, ctc6, ctc2, ctc0]
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc7, ctc9, ctc9, ctc10]);
  return {
    mapDataTy: ctc11
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Object({
    authorizedST: ctc1,
    bT: ctc11,
    companyName: ctc12,
    lockSale: ctc8,
    managerAddr: ctc13
    });
  const ctc15 = stdlib.T_Tuple([ctc13, ctc13, ctc1]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Tuple([ctc13]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Tuple([ctc1]);
  const ctc21 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc22 = stdlib.T_Tuple([ctc21]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc24 = stdlib.T_Data({
    aST0_318: ctc15,
    addCoopId0_318: ctc17,
    addWL0_318: ctc18,
    approveSwap0_318: ctc18,
    cBT0_318: ctc19,
    cCM0_318: ctc18,
    cancelSwap0_318: ctc19,
    claimSwapProceeds0_318: ctc19,
    completeSwap0_318: ctc18,
    dBT0_318: ctc20,
    docHash0_318: ctc22,
    initSwap0_318: ctc23,
    optIn0_318: ctc19,
    remWL0_318: ctc18
    });
  const ctc25 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc26 = stdlib.T_Tuple([ctc25, ctc16]);
  const ctc27 = stdlib.T_Tuple([ctc21, ctc3, ctc3]);
  const ctc28 = stdlib.T_Object({
    ctcMan: ctc13,
    currDistr: ctc1,
    cv: ctc26,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc27,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc29 = stdlib.T_Array(ctc23, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: false,
    ty: map9_ctc
    });
  
  
  const v2293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2294 = [v2293];
  const v2300 = 'I have deployed';
  const v2301 = stdlib.protect(ctc14, await interact.getParams(v2300), {
    at: './index.rsh:56:103:application',
    fs: ['at ./index.rsh:55:17:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2302 = v2301.authorizedST;
  const v2303 = v2301.bT;
  const v2304 = v2301.companyName;
  const v2305 = v2301.lockSale;
  const v2306 = v2301.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2304, v2305, v2306, v2303, v2302],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12, ctc8, ctc13, ctc11, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:13:decimal', stdlib.UInt_max, '0'), []],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2313, v2314, v2315, v2316, v2317], secs: v2319, time: v2318, didSend: v42, from: v2312 } = txn1;
      
      const v2320 = v2294[stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0')];
      const v2321 = stdlib.Array_set(v2320, '0', stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'));
      const v2322 = stdlib.Array_set(v2294, stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'), v2321);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2316
        });
      ;
      
      const v2326 = '2.01';
      const v2327 = 'cooperativIdcooperativIdcooperativId';
      const v2328 = [v2326, v2327];
      const v2329 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v2330 = [v2329, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2331 = {
        ctcMan: v2315,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v2328,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v2330,
        saleLocked: v2314,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2332 = v2331;
      const v2333 = v2318;
      const v2335 = v2322;
      
      if (await (async () => {
        
        return true;})()) {
        const v2371 = v2332.totST;
        const v2372 = v2332.totBT;
        const v2373 = v2332.distrNum;
        const v2375 = v2332.saleLocked;
        const v2396 = v2332.docHash;
        const v2398 = v2396[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v2400 = v2332.cv;
        const v2401 = v2400[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v2403 = v2400[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v2405 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2406 = v2405[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2407 = stdlib.cast("UInt", "UInt256", v2406, false, true);
        const v2409 = v2332.ctcMan;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2316
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
    tys: [ctc12, ctc8, ctc13, ctc11, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2313, v2314, v2315, v2316, v2317], secs: v2319, time: v2318, didSend: v42, from: v2312 } = txn1;
  const v2320 = v2294[stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0')];
  const v2321 = stdlib.Array_set(v2320, '0', stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'));
  const v2322 = stdlib.Array_set(v2294, stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'), v2321);
  ;
  ;
  const v2325 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v2325), {
    at: './index.rsh:61:31:application',
    fs: ['at ./index.rsh:61:31:application call to [unknown function] (defined at: ./index.rsh:61:31:function exp)', 'at ./index.rsh:61:31:application call to "liftedInteract" (defined at: ./index.rsh:61:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v2326 = '2.01';
  const v2327 = 'cooperativIdcooperativIdcooperativId';
  const v2328 = [v2326, v2327];
  const v2329 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v2330 = [v2329, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2331 = {
    ctcMan: v2315,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v2328,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v2330,
    saleLocked: v2314,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2332 = v2331;
  let v2333 = v2318;
  let v2335 = v2322;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const v2371 = v2332.totST;
    const v2372 = v2332.totBT;
    const v2373 = v2332.distrNum;
    const v2375 = v2332.saleLocked;
    const v2396 = v2332.docHash;
    const v2398 = v2396[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
    const v2400 = v2332.cv;
    const v2401 = v2400[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
    const v2403 = v2400[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
    const v2405 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2406 = v2405[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2407 = stdlib.cast("UInt", "UInt256", v2406, false, true);
    const v2409 = v2332.ctcMan;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc24],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409],
        evt_cnt: 0,
        funcNum: 3,
        lct: v2333,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:429:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
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
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v10346, time: v10345, didSend: v1949, from: v10344 } = txn4;
          
          ;
          const cv2332 = v2332;
          const cv2333 = v10345;
          const cv2335 = v2335;
          
          await (async () => {
            const v2332 = cv2332;
            const v2333 = cv2333;
            const v2335 = cv2335;
            
            if (await (async () => {
              
              return true;})()) {
              const v2371 = v2332.totST;
              const v2372 = v2332.totBT;
              const v2373 = v2332.distrNum;
              const v2375 = v2332.saleLocked;
              const v2396 = v2332.docHash;
              const v2398 = v2396[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v2400 = v2332.cv;
              const v2401 = v2400[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v2403 = v2400[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v2405 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2406 = v2405[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2407 = stdlib.cast("UInt", "UInt256", v2406, false, true);
              const v2409 = v2332.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2316
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
        tys: [ctc13, ctc11, ctc28, ctc29, ctc1, ctc1, ctc1, ctc8, ctc27, ctc3, ctc25, ctc16, ctc23, ctc3, ctc1, ctc13],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v10346, time: v10345, didSend: v1949, from: v10344 } = txn4;
      ;
      const v10347 = stdlib.addressEq(v2312, v10344);
      stdlib.assert(v10347, {
        at: './index.rsh:429:21:dot',
        fs: ['at ./index.rsh:428:40:application call to [unknown function] (defined at: ./index.rsh:428:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv2332 = v2332;
      const cv2333 = v10345;
      const cv2335 = v2335;
      
      v2332 = cv2332;
      v2333 = cv2333;
      v2335 = cv2335;
      
      txn2 = txn4;
      continue;
      }
    else {
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn3;
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3056 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '0')];
          const v3057 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '1')];
          const v3058 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '2')];
          const v3059 = stdlib.addressEq(v3056, v2312);
          const v3061 = stdlib.addressEq(v3056, v2409);
          const v3062 = v3059 ? true : v3061;
          stdlib.assert(v3062, {
            at: './index.rsh:321:24:application',
            fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3063 = stdlib.gt256(v3058, stdlib.checkedBigNumberify('./index.rsh:322:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3063, {
            at: './index.rsh:322:24:application',
            fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v3057, null);
          const v3065 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3057), null);
          const v3066 = stdlib.fromSome(v3065, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3067 = stdlib.safeAdd256(v3066, v3058);
          await stdlib.mapSet(map0, v3057, v3067);
          const v3068 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3057), null);
          const v3069 = stdlib.fromSome(v3068, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3070 = stdlib.safeAdd256(v3069, v3058);
          await stdlib.mapSet(map2, v3057, v3070);
          const v3072 = stdlib.safeAdd256(v2371, v3058);
          const v3073 = true;
          await txn3.getOutput('aST', 'v3073', ctc8, v3073);
          const v3082 = {
            ...v2332, 'totST': v3072};
          const cv2332 = v3082;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3615 = v3441[stdlib.checkedBigNumberify('./index.rsh:345:14:spread', stdlib.UInt_max, '0')];
          const v3618 = [v2401, v3615];
          const v3619 = {
            ...v2332, 'cv': v3618};
          const v3620 = true;
          await txn3.getOutput('addCoopId', 'v3620', ctc8, v3620);
          const cv2332 = v3619;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v4159 = v3972[stdlib.checkedBigNumberify('./index.rsh:273:13:spread', stdlib.UInt_max, '0')];
          const v4160 = stdlib.addressEq(v2906, v2312);
          const v4162 = stdlib.addressEq(v2906, v2409);
          const v4163 = v4160 ? true : v4162;
          stdlib.assert(v4163, {
            at: './index.rsh:284:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v4159, null);
          const v4165 = true;
          await txn3.getOutput('addWL', 'v4165', ctc8, v4165);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v4704 = v4503[stdlib.checkedBigNumberify('./index.rsh:167:13:spread', stdlib.UInt_max, '0')];
          const v4705 = stdlib.addressEq(v2906, v2312);
          const v4707 = stdlib.addressEq(v2906, v2409);
          const v4708 = v4705 ? true : v4707;
          stdlib.assert(v4708, {
            at: './index.rsh:179:24:application',
            fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v4709 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v4704), null);
          const v4710 = '-----';
          const v4711 = stdlib.fromSome(v4709, v4710);
          const v4712 = 'initd';
          const v4713 = stdlib.digest([ctc6], [v4711]);
          const v4715 = stdlib.digest([ctc6], [v4712]);
          const v4716 = stdlib.digestEq(v4713, v4715);
          stdlib.assert(v4716, {
            at: './index.rsh:180:24:application',
            fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
            msg: 'you can onlyapprove an unapproved pending/initiated swap',
            who: 'Creator'
            });
          const v4717 = 'apprv';
          await stdlib.mapSet(map6, v4704, v4717);
          const v4723 = true;
          await txn3.getOutput('approveSwap', 'v4723', ctc8, v4723);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5262 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
          const v5263 = {
            None: 0,
            Some: 1
            }[v5262[0]];
          const v5264 = stdlib.eq(v5263, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v5264, {
            at: './index.rsh:397:24:application',
            fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v5268 = stdlib.gt256(v2407, stdlib.checkedBigNumberify('./index.rsh:398:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5268, {
            at: './index.rsh:398:24:application',
            fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v5270 = stdlib.gt256(v2371, stdlib.checkedBigNumberify('./index.rsh:399:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5270, {
            at: './index.rsh:399:24:application',
            fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v5272 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2906), null);
          const v5273 = stdlib.fromSome(v5272, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5274 = stdlib.ge256(v2371, v5273);
          stdlib.assert(v5274, {
            at: './index.rsh:400:24:application',
            fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v5277 = stdlib.gt256(v5273, stdlib.checkedBigNumberify('./index.rsh:401:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5277, {
            at: './index.rsh:401:24:application',
            fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v5280 = v2332.currDistr;
          const v5281 = stdlib.safeMul256(v5273, v5280);
          const v5283 = stdlib.safeDiv256(v5281, v2371);
          const v5284 = stdlib.cast("UInt256", "UInt", v5283, false, true);
          const v5287 = stdlib.le(v5284, v2406);
          stdlib.assert(v5287, {
            at: './index.rsh:403:24:application',
            fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v5294 = stdlib.sub(v2406, v5284);
          const v5296 = stdlib.Array_set(v2405, '0', v5294);
          const v5297 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:404:50:application', stdlib.UInt_max, '0'), v5296);
          ;
          const v5298 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2906), null);
          const v5299 = stdlib.fromSome(v5298, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5300 = stdlib.safeAdd256(v5299, v5283);
          await stdlib.mapSet(map3, v2906, v5300);
          const v5301 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v2906), null);
          const v5302 = stdlib.fromSome(v5301, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5303 = stdlib.safeAdd256(v5302, stdlib.checkedBigNumberify('./index.rsh:406:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map4, v2906, v5303);
          await txn3.getOutput('cBT', 'v5283', ctc1, v5283);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v5297;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5841 = v5565[stdlib.checkedBigNumberify('./index.rsh:411:13:spread', stdlib.UInt_max, '0')];
          const v5842 = stdlib.addressEq(v2906, v2312);
          const v5844 = stdlib.addressEq(v2906, v2409);
          const v5845 = v5842 ? true : v5844;
          stdlib.assert(v5845, {
            at: './index.rsh:422:24:application',
            fs: ['at ./index.rsh:421:13:application call to [unknown function] (defined at: ./index.rsh:421:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v5846 = true;
          await txn3.getOutput('cCM', 'v5846', ctc8, v5846);
          const v5853 = {
            ...v2332, 'ctcMan': v5841};
          const cv2332 = v5853;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6386 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
          const v6387 = {
            None: 0,
            Some: 1
            }[v6386[0]];
          const v6388 = stdlib.eq(v6387, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v6388, {
            at: './index.rsh:155:24:application',
            fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
            msg: 'you must be a whitelist member',
            who: 'Creator'
            });
          const v6389 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2906), null);
          const v6390 = '-----';
          const v6391 = stdlib.fromSome(v6389, v6390);
          const v6393 = stdlib.digest([ctc6], [v6391]);
          const v6395 = stdlib.digest([ctc6], [v6390]);
          const v6396 = stdlib.digestEq(v6393, v6395);
          const v6401 = 'compl';
          const v6404 = stdlib.digest([ctc6], [v6401]);
          const v6405 = stdlib.digestEq(v6393, v6404);
          const v6406 = v6405 ? false : true;
          const v6407 = v6396 ? false : v6406;
          stdlib.assert(v6407, {
            at: './index.rsh:156:24:application',
            fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
            msg: 'there must be a pending swap',
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2906, v6390);
          const v6409 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2906), null);
          const v6411 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6413 = stdlib.fromSome(v6409, v6411);
          const v6414 = stdlib.Array_set(v6413, stdlib.checkedBigNumberify('./index.rsh:159:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:159:41:decimal', stdlib.UInt_max, '0'));
          const v6415 = stdlib.Array_set(v6414, stdlib.checkedBigNumberify('./index.rsh:160:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:160:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v2906, v6415);
          const v6416 = true;
          await txn3.getOutput('cancelSwap', 'v6416', ctc8, v6416);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6954 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
          const v6955 = {
            None: 0,
            Some: 1
            }[v6954[0]];
          const v6956 = stdlib.eq(v6955, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v6956, {
            at: './index.rsh:240:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: 'you must be a whitelist member to claim swap proceeds',
            who: 'Creator'
            });
          const v6957 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2906), null);
          const v6959 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6961 = stdlib.fromSome(v6957, v6959);
          const v6962 = v6961[stdlib.checkedBigNumberify('./index.rsh:241:60:array ref', stdlib.UInt_max, '2')];
          const v6963 = stdlib.gt(v6962, stdlib.checkedBigNumberify('./index.rsh:241:66:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6963, {
            at: './index.rsh:241:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: 'you must have swap proceeds to claim',
            who: 'Creator'
            });
          const v6972 = stdlib.ge(v2406, v6962);
          stdlib.assert(v6972, {
            at: './index.rsh:243:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v6979 = stdlib.sub(v2406, v6962);
          const v6981 = stdlib.Array_set(v2405, '0', v6979);
          const v6982 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:244:47:application', stdlib.UInt_max, '0'), v6981);
          ;
          const v6983 = stdlib.Array_set(v6961, stdlib.checkedBigNumberify('./index.rsh:245:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v2906, v6983);
          const v6984 = true;
          await txn3.getOutput('claimSwapProceeds', 'v6984', ctc8, v6984);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v6982;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          undefined /* setApiDetails */;
          const v7226 = v7158[stdlib.checkedBigNumberify('./index.rsh:188:13:spread', stdlib.UInt_max, '0')];
          const v7227 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7226), null);
          const v7229 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7231 = stdlib.fromSome(v7227, v7229);
          const v7232 = v7231[stdlib.checkedBigNumberify('./index.rsh:197:68:array ref', stdlib.UInt_max, '0')];
          const v7238 = v7231[stdlib.checkedBigNumberify('./index.rsh:197:111:array ref', stdlib.UInt_max, '1')];
          const v7239 = stdlib.safeMul(v7232, v7238);
          ;
          const v7299 = stdlib.add(v2406, v7239);
          const v7301 = stdlib.Array_set(v2405, '0', v7299);
          const v7302 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v7301);
          ;
          const v7523 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
          const v7524 = {
            None: 0,
            Some: 1
            }[v7523[0]];
          const v7525 = stdlib.eq(v7524, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v7525, {
            at: './index.rsh:200:24:application',
            fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)'],
            msg: 'you must be a whitelist member to complete or buy swap',
            who: 'Creator'
            });
          const v7526 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7226), null);
          const v7527 = '-----';
          const v7528 = stdlib.fromSome(v7526, v7527);
          const v7529 = 'apprv';
          const v7530 = stdlib.digest([ctc6], [v7528]);
          const v7532 = stdlib.digest([ctc6], [v7529]);
          const v7533 = stdlib.digestEq(v7530, v7532);
          stdlib.assert(v7533, {
            at: './index.rsh:201:24:application',
            fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)'],
            msg: 'you can only buy an approved swap',
            who: 'Creator'
            });
          const v7540 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2906), null);
          const v7541 = stdlib.fromSome(v7540, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7542 = stdlib.cast("UInt", "UInt256", v7232, false, true);
          const v7543 = stdlib.safeAdd256(v7541, v7542);
          await stdlib.mapSet(map0, v2906, v7543);
          const v7544 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2906), null);
          const v7545 = stdlib.fromSome(v7544, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7547 = stdlib.safeAdd256(v7545, v7542);
          await stdlib.mapSet(map2, v2906, v7547);
          const v7548 = v7231[stdlib.checkedBigNumberify('./index.rsh:209:44:array ref', stdlib.UInt_max, '2')];
          const v7552 = stdlib.safeAdd(v7548, v7239);
          const v7553 = stdlib.Array_set(v7231, stdlib.checkedBigNumberify('./index.rsh:209:38:decimal', stdlib.UInt_max, '2'), v7552);
          await stdlib.mapSet(map5, v7226, v7553);
          const v7554 = 'compl';
          await stdlib.mapSet(map6, v7226, v7554);
          const v7555 = true;
          await txn3.getOutput('completeSwap', 'v7555', ctc8, v7555);
          const v7562 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7226), null);
          const v7563 = stdlib.fromSome(v7562, false);
          if (v7563) {
            const v7572 = stdlib.safeAdd256(v2371, v7542);
            const v7573 = {
              ...v2332, 'totST': v7572};
            await stdlib.mapSet(map7, v7226, false);
            const cv2332 = v7573;
            const cv2333 = v2908;
            const cv2335 = v7302;
            
            v2332 = cv2332;
            v2333 = cv2333;
            v2335 = cv2335;
            
            txn2 = txn3;
            continue;}
          else {
            const v7565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7226), null);
            const v7566 = stdlib.fromSome(v7565, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v7568 = stdlib.safeSub256(v7566, v7542);
            await stdlib.mapSet(map0, v7226, v7568);
            const cv2332 = v2332;
            const cv2333 = v2908;
            const cv2335 = v7302;
            
            v2332 = cv2332;
            v2333 = cv2333;
            v2335 = cv2335;
            
            txn2 = txn3;
            continue;}
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          undefined /* setApiDetails */;
          const v7778 = v7689[stdlib.checkedBigNumberify('./index.rsh:359:13:spread', stdlib.UInt_max, '0')];
          const v7779 = stdlib.cast("UInt256", "UInt", v7778, false, true);
          ;
          const v7830 = stdlib.add(v2406, v7779);
          const v7832 = stdlib.Array_set(v2405, '0', v7830);
          const v7833 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v7832);
          ;
          const v8108 = stdlib.addressEq(v2906, v2312);
          const v8110 = stdlib.addressEq(v2906, v2409);
          const v8111 = v8108 ? true : v8110;
          stdlib.assert(v8111, {
            at: './index.rsh:370:24:application',
            fs: ['at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v8113 = stdlib.gt(v7779, stdlib.checkedBigNumberify('./index.rsh:371:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8113, {
            at: './index.rsh:371:24:application',
            fs: ['at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v8115 = stdlib.safeAdd256(v2372, v7778);
          const v8116 = {
            ...v2332, 'totBT': v8115};
          const v8118 = stdlib.safeAdd256(v2373, stdlib.checkedBigNumberify('./index.rsh:374:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8119 = {
            ...v8116, 'distrNum': v8118};
          const v8120 = {
            ...v8119, 'currDistr': v7778};
          const v8121 = true;
          await txn3.getOutput('dBT', 'v8121', ctc8, v8121);
          const cv2332 = v8120;
          const cv2333 = v2908;
          const cv2335 = v7833;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v8660 = v8220[stdlib.checkedBigNumberify('./index.rsh:252:13:spread', stdlib.UInt_max, '0')];
          const v8663 = stdlib.eq(v2398, stdlib.checkedBigNumberify('./index.rsh:266:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8663, {
            at: './index.rsh:266:24:application',
            fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v8664 = stdlib.addressEq(v2906, v2312);
          const v8666 = stdlib.addressEq(v2906, v2409);
          const v8667 = v8664 ? true : v8666;
          stdlib.assert(v8667, {
            at: './index.rsh:267:24:application',
            fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v8668 = stdlib.safeAdd(v2398, stdlib.checkedBigNumberify('./index.rsh:268:76:decimal', stdlib.UInt_max, '1'));
          const v8670 = [v8660, v8668, v2908];
          const v8671 = {
            ...v2332, 'docHash': v8670};
          const v8672 = true;
          await txn3.getOutput('docHash', 'v8672', ctc8, v8672);
          const cv2332 = v8671;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v9211 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v9212 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v9213 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
          const v9215 = stdlib.addressEq(v2906, v2312);
          const v9217 = stdlib.addressEq(v2906, v2409);
          const v9218 = v9215 ? true : v9217;
          const v9219 = v9213 ? v9218 : false;
          const v9220 = v9213 ? false : true;
          const v9221 = v9219 ? true : v9220;
          stdlib.assert(v9221, {
            at: './index.rsh:127:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'if you are not creator or manager, the swap cannot be share issuance type',
            who: 'Creator'
            });
          const v9222 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
          const v9223 = {
            None: 0,
            Some: 1
            }[v9222[0]];
          const v9224 = stdlib.eq(v9223, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v9224, {
            at: './index.rsh:128:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'you must be a whitelist member',
            who: 'Creator'
            });
          const v9225 = stdlib.gt(v9211, stdlib.checkedBigNumberify('./index.rsh:129:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9225, {
            at: './index.rsh:129:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v9226 = stdlib.gt(v9212, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9226, {
            at: './index.rsh:130:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v9227 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2906), null);
          const v9228 = '-----';
          const v9229 = stdlib.fromSome(v9227, v9228);
          const v9231 = stdlib.digest([ctc6], [v9229]);
          const v9233 = stdlib.digest([ctc6], [v9228]);
          const v9234 = stdlib.digestEq(v9231, v9233);
          const v9238 = 'compl';
          const v9241 = stdlib.digest([ctc6], [v9238]);
          const v9242 = stdlib.digestEq(v9231, v9241);
          const v9243 = v9234 ? true : v9242;
          stdlib.assert(v9243, {
            at: './index.rsh:131:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'there must be no pending swap',
            who: 'Creator'
            });
          const v9244 = 'initd';
          await stdlib.mapSet(map6, v2906, v9244);
          await stdlib.mapSet(map7, v2906, v9213);
          const v9245 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2906), null);
          const v9247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v9249 = stdlib.fromSome(v9245, v9247);
          const v9250 = stdlib.Array_set(v9249, stdlib.checkedBigNumberify('./index.rsh:135:38:decimal', stdlib.UInt_max, '0'), v9211);
          const v9251 = stdlib.Array_set(v9250, stdlib.checkedBigNumberify('./index.rsh:136:39:decimal', stdlib.UInt_max, '1'), v9212);
          await stdlib.mapSet(map5, v2906, v9251);
          const v9252 = true;
          await txn3.getOutput('initSwap', 'v9252', ctc8, v9252);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          await stdlib.mapSet(map8, v2906, true);
          const v9793 = true;
          await txn3.getOutput('optIn', 'v9793', ctc8, v9793);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v10331 = v9813[stdlib.checkedBigNumberify('./index.rsh:291:13:spread', stdlib.UInt_max, '0')];
          const v10332 = stdlib.addressEq(v2906, v2312);
          const v10334 = stdlib.addressEq(v2906, v2409);
          const v10335 = v10332 ? true : v10334;
          stdlib.assert(v10335, {
            at: './index.rsh:302:24:application',
            fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v10331, undefined /* Nothing */);
          const v10337 = true;
          await txn3.getOutput('remWL', 'v10337', ctc8, v10337);
          const cv2332 = v2332;
          const cv2333 = v2908;
          const cv2335 = v2335;
          
          v2332 = cv2332;
          v2333 = cv2333;
          v2335 = cv2335;
          
          txn2 = txn3;
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc14]);
  const ctc23 = stdlib.T_Tuple([ctc11]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc21,
    addCoopId0_318: ctc22,
    addWL0_318: ctc23,
    approveSwap0_318: ctc23,
    cBT0_318: ctc24,
    cCM0_318: ctc23,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc23,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc23
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2633 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_318" (defined at: ./index.rsh:309:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v2634 = v2633[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2636 = v2633[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2641 = stdlib.addressEq(v2634, v2312);
  const v2643 = stdlib.addressEq(v2634, v2409);
  const v2644 = v2641 ? true : v2643;
  stdlib.assert(v2644, {
    at: './index.rsh:313:23:application',
    fs: ['at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:29:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_318" (defined at: ./index.rsh:309:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v2645 = stdlib.gt256(v2636, stdlib.checkedBigNumberify('./index.rsh:314:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2645, {
    at: './index.rsh:314:23:application',
    fs: ['at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:29:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_318" (defined at: ./index.rsh:309:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v2651 = ['aST0_318', v2633];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2651],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:318:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:318:34:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          ;
          const v3057 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '1')];
          const v3058 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 9, v3057, null);
          const v3065 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3057), null);
          const v3066 = stdlib.fromSome(v3065, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3067 = stdlib.safeAdd256(v3066, v3058);
          await stdlib.simMapSet(sim_r, 0, v3057, v3067);
          const v3068 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3057), null);
          const v3069 = stdlib.fromSome(v3068, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3070 = stdlib.safeAdd256(v3069, v3058);
          await stdlib.simMapSet(sim_r, 2, v3057, v3070);
          const v3072 = stdlib.safeAdd256(v2371, v3058);
          const v3073 = true;
          const v3074 = await txn1.getOutput('aST', 'v3073', ctc8, v3073);
          
          const v3082 = {
            ...v2332, 'totST': v3072};
          const v14889 = v3082;
          const v14891 = v2335;
          const v14892 = v3082.totST;
          const v14893 = v3082.totBT;
          const v14894 = v3082.distrNum;
          const v14895 = v3082.saleLocked;
          const v14896 = v3082.docHash;
          const v14897 = v14896[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v14898 = v3082.cv;
          const v14899 = v14898[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v14900 = v14898[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v14901 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v14902 = v14901[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v14903 = stdlib.cast("UInt", "UInt256", v14902, false, true);
          const v14904 = v3082.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3056 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '0')];
      const v3057 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '1')];
      const v3058 = v2910[stdlib.checkedBigNumberify('./index.rsh:309:13:spread', stdlib.UInt_max, '2')];
      const v3059 = stdlib.addressEq(v3056, v2312);
      const v3061 = stdlib.addressEq(v3056, v2409);
      const v3062 = v3059 ? true : v3061;
      stdlib.assert(v3062, {
        at: './index.rsh:321:24:application',
        fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3063 = stdlib.gt256(v3058, stdlib.checkedBigNumberify('./index.rsh:322:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3063, {
        at: './index.rsh:322:24:application',
        fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map9, v3057, null);
      const v3065 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3057), null);
      const v3066 = stdlib.fromSome(v3065, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3067 = stdlib.safeAdd256(v3066, v3058);
      await stdlib.mapSet(map0, v3057, v3067);
      const v3068 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3057), null);
      const v3069 = stdlib.fromSome(v3068, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3070 = stdlib.safeAdd256(v3069, v3058);
      await stdlib.mapSet(map2, v3057, v3070);
      const v3072 = stdlib.safeAdd256(v2371, v3058);
      const v3073 = true;
      const v3074 = await txn1.getOutput('aST', 'v3073', ctc8, v3073);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v2910, v3074), {
          at: './index.rsh:310:13:application',
          fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:328:20:application call to "res" (defined at: ./index.rsh:320:13:function exp)', 'at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3082 = {
        ...v2332, 'totST': v3072};
      const v14889 = v3082;
      const v14891 = v2335;
      const v14892 = v3082.totST;
      const v14893 = v3082.totBT;
      const v14894 = v3082.distrNum;
      const v14895 = v3082.saleLocked;
      const v14896 = v3082.docHash;
      const v14897 = v14896[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v14898 = v3082.cv;
      const v14899 = v14898[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v14900 = v14898[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v14901 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v14902 = v14901[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v14903 = stdlib.cast("UInt", "UInt256", v14902, false, true);
      const v14904 = v3082.ctcMan;
      return;
      
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _addCoopId3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addCoopId3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addCoopId3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc14]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc11]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc21,
    addWL0_318: ctc23,
    approveSwap0_318: ctc23,
    cBT0_318: ctc24,
    cCM0_318: ctc23,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc23,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc23
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2663 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:348:13:application call to [unknown function] (defined at: ./index.rsh:348:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddCoopId0_318" (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v2670 = ['addCoopId0_318', v2663];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2670],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:351:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:351:27:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          ;
          const v3615 = v3441[stdlib.checkedBigNumberify('./index.rsh:345:14:spread', stdlib.UInt_max, '0')];
          const v3618 = [v2401, v3615];
          const v3619 = {
            ...v2332, 'cv': v3618};
          const v3620 = true;
          const v3621 = await txn1.getOutput('addCoopId', 'v3620', ctc8, v3620);
          
          const v15337 = v3619;
          const v15339 = v2335;
          const v15340 = v3619.totST;
          const v15341 = v3619.totBT;
          const v15342 = v3619.distrNum;
          const v15343 = v3619.saleLocked;
          const v15344 = v3619.docHash;
          const v15345 = v15344[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v15346 = v3619.cv;
          const v15347 = v15346[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v15348 = v15346[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v15349 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v15350 = v15349[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v15351 = stdlib.cast("UInt", "UInt256", v15350, false, true);
          const v15352 = v3619.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3615 = v3441[stdlib.checkedBigNumberify('./index.rsh:345:14:spread', stdlib.UInt_max, '0')];
      const v3618 = [v2401, v3615];
      const v3619 = {
        ...v2332, 'cv': v3618};
      const v3620 = true;
      const v3621 = await txn1.getOutput('addCoopId', 'v3620', ctc8, v3620);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v3441, v3621), {
          at: './index.rsh:346:13:application',
          fs: ['at ./index.rsh:346:13:application call to [unknown function] (defined at: ./index.rsh:346:13:function exp)', 'at ./index.rsh:355:20:application call to "res" (defined at: ./index.rsh:353:13:function exp)', 'at ./index.rsh:353:13:application call to [unknown function] (defined at: ./index.rsh:353:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v15337 = v3619;
      const v15339 = v2335;
      const v15340 = v3619.totST;
      const v15341 = v3619.totBT;
      const v15342 = v3619.distrNum;
      const v15343 = v3619.saleLocked;
      const v15344 = v3619.docHash;
      const v15345 = v15344[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v15346 = v3619.cv;
      const v15347 = v15346[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v15348 = v15346[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v15349 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v15350 = v15349[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v15351 = stdlib.cast("UInt", "UInt256", v15350, false, true);
      const v15352 = v3619.ctcMan;
      return;
      
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc21,
    approveSwap0_318: ctc21,
    cBT0_318: ctc24,
    cCM0_318: ctc21,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc21,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc21
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2601 = ctc.selfAddress();
  const v2603 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddWL0_318" (defined at: ./index.rsh:273:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v2607 = stdlib.addressEq(v2601, v2312);
  const v2609 = stdlib.addressEq(v2601, v2409);
  const v2610 = v2607 ? true : v2609;
  stdlib.assert(v2610, {
    at: './index.rsh:277:23:application',
    fs: ['at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:18:function exp)', 'at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddWL0_318" (defined at: ./index.rsh:273:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v2614 = ['addWL0_318', v2603];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2614],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:281:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:281:26:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          ;
          const v4159 = v3972[stdlib.checkedBigNumberify('./index.rsh:273:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v4159, null);
          const v4165 = true;
          const v4166 = await txn1.getOutput('addWL', 'v4165', ctc8, v4165);
          
          const v15785 = v2332;
          const v15787 = v2335;
          const v15788 = v2332.totST;
          const v15789 = v2332.totBT;
          const v15790 = v2332.distrNum;
          const v15791 = v2332.saleLocked;
          const v15792 = v2332.docHash;
          const v15793 = v15792[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v15794 = v2332.cv;
          const v15795 = v15794[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v15796 = v15794[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v15797 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v15798 = v15797[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v15799 = stdlib.cast("UInt", "UInt256", v15798, false, true);
          const v15800 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4159 = v3972[stdlib.checkedBigNumberify('./index.rsh:273:13:spread', stdlib.UInt_max, '0')];
      const v4160 = stdlib.addressEq(v2906, v2312);
      const v4162 = stdlib.addressEq(v2906, v2409);
      const v4163 = v4160 ? true : v4162;
      stdlib.assert(v4163, {
        at: './index.rsh:284:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map9, v4159, null);
      const v4165 = true;
      const v4166 = await txn1.getOutput('addWL', 'v4165', ctc8, v4165);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v3972, v4166), {
          at: './index.rsh:274:13:application',
          fs: ['at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:287:20:application call to "res" (defined at: ./index.rsh:283:13:function exp)', 'at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v15785 = v2332;
      const v15787 = v2335;
      const v15788 = v2332.totST;
      const v15789 = v2332.totBT;
      const v15790 = v2332.distrNum;
      const v15791 = v2332.saleLocked;
      const v15792 = v2332.docHash;
      const v15793 = v15792[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v15794 = v2332.cv;
      const v15795 = v15794[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v15796 = v15794[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v15797 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v15798 = v15797[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v15799 = stdlib.cast("UInt", "UInt256", v15798, false, true);
      const v15800 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _approveSwap3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approveSwap3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approveSwap3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc21,
    approveSwap0_318: ctc21,
    cBT0_318: ctc24,
    cCM0_318: ctc21,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc21,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc21
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2511 = ctc.selfAddress();
  const v2513 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_318" (defined at: ./index.rsh:167:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'approveSwap'
    });
  const v2514 = v2513[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2517 = stdlib.addressEq(v2511, v2312);
  const v2519 = stdlib.addressEq(v2511, v2409);
  const v2520 = v2517 ? true : v2519;
  stdlib.assert(v2520, {
    at: './index.rsh:171:23:application',
    fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:23:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_318" (defined at: ./index.rsh:167:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'approveSwap'
    });
  const v2521 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2514), null);
  const v2522 = '-----';
  const v2523 = stdlib.fromSome(v2521, v2522);
  const v2524 = 'initd';
  const v2525 = stdlib.digest([ctc6], [v2523]);
  const v2527 = stdlib.digest([ctc6], [v2524]);
  const v2528 = stdlib.digestEq(v2525, v2527);
  stdlib.assert(v2528, {
    at: './index.rsh:172:23:application',
    fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:23:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_318" (defined at: ./index.rsh:167:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you can onlyapprove an unapproved pending/initiated swap',
    who: 'approveSwap'
    });
  const v2532 = ['approveSwap0_318', v2513];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2532],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:176:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:176:26:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approveSwap"
            });
          ;
          ;
          const v4704 = v4503[stdlib.checkedBigNumberify('./index.rsh:167:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v4704), null);
          const v4717 = 'apprv';
          await stdlib.simMapSet(sim_r, 6, v4704, v4717);
          const v4723 = true;
          const v4724 = await txn1.getOutput('approveSwap', 'v4723', ctc8, v4723);
          
          const v16233 = v2332;
          const v16235 = v2335;
          const v16236 = v2332.totST;
          const v16237 = v2332.totBT;
          const v16238 = v2332.distrNum;
          const v16239 = v2332.saleLocked;
          const v16240 = v2332.docHash;
          const v16241 = v16240[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v16242 = v2332.cv;
          const v16243 = v16242[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v16244 = v16242[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v16245 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16246 = v16245[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16247 = stdlib.cast("UInt", "UInt256", v16246, false, true);
          const v16248 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4704 = v4503[stdlib.checkedBigNumberify('./index.rsh:167:13:spread', stdlib.UInt_max, '0')];
      const v4705 = stdlib.addressEq(v2906, v2312);
      const v4707 = stdlib.addressEq(v2906, v2409);
      const v4708 = v4705 ? true : v4707;
      stdlib.assert(v4708, {
        at: './index.rsh:179:24:application',
        fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'approveSwap'
        });
      const v4709 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v4704), null);
      const v4710 = '-----';
      const v4711 = stdlib.fromSome(v4709, v4710);
      const v4712 = 'initd';
      const v4713 = stdlib.digest([ctc6], [v4711]);
      const v4715 = stdlib.digest([ctc6], [v4712]);
      const v4716 = stdlib.digestEq(v4713, v4715);
      stdlib.assert(v4716, {
        at: './index.rsh:180:24:application',
        fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
        msg: 'you can onlyapprove an unapproved pending/initiated swap',
        who: 'approveSwap'
        });
      const v4717 = 'apprv';
      await stdlib.mapSet(map6, v4704, v4717);
      const v4723 = true;
      const v4724 = await txn1.getOutput('approveSwap', 'v4723', ctc8, v4723);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v4503, v4724), {
          at: './index.rsh:168:13:application',
          fs: ['at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)', 'at ./index.rsh:184:20:application call to "res" (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
          msg: 'out',
          who: 'approveSwap'
          });
        }
      else {
        }
      
      const v16233 = v2332;
      const v16235 = v2335;
      const v16236 = v2332.totST;
      const v16237 = v2332.totBT;
      const v16238 = v2332.distrNum;
      const v16239 = v2332.saleLocked;
      const v16240 = v2332.docHash;
      const v16241 = v16240[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v16242 = v2332.cv;
      const v16243 = v16242[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v16244 = v16242[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v16245 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16246 = v16245[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16247 = stdlib.cast("UInt", "UInt256", v16246, false, true);
      const v16248 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc24,
    approveSwap0_318: ctc24,
    cBT0_318: ctc21,
    cCM0_318: ctc24,
    cancelSwap0_318: ctc21,
    claimSwapProceeds0_318: ctc21,
    completeSwap0_318: ctc24,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc21,
    remWL0_318: ctc24
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2689 = ctc.selfAddress();
  const v2691 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v2693 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2689), null);
  const v2694 = {
    None: 0,
    Some: 1
    }[v2693[0]];
  const v2695 = stdlib.eq(v2694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2695, {
    at: './index.rsh:385:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:17:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v2699 = stdlib.gt256(v2407, stdlib.checkedBigNumberify('./index.rsh:386:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2699, {
    at: './index.rsh:386:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:17:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v2701 = stdlib.gt256(v2371, stdlib.checkedBigNumberify('./index.rsh:387:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2701, {
    at: './index.rsh:387:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:17:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v2703 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2689), null);
  const v2704 = stdlib.fromSome(v2703, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2705 = stdlib.ge256(v2371, v2704);
  stdlib.assert(v2705, {
    at: './index.rsh:388:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:17:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v2708 = stdlib.gt256(v2704, stdlib.checkedBigNumberify('./index.rsh:389:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2708, {
    at: './index.rsh:389:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:17:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v2711 = v2332.currDistr;
  const v2712 = stdlib.safeMul256(v2704, v2711);
  const v2714 = stdlib.safeDiv256(v2712, v2371);
  const v2715 = stdlib.cast("UInt256", "UInt", v2714, false, true);
  const v2718 = stdlib.le(v2715, v2406);
  stdlib.assert(v2718, {
    at: './index.rsh:391:23:application',
    fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:17:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_318" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v2721 = ['cBT0_318', v2691];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2721],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:394:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:394:25:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v2906), null);
          const v5272 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2906), null);
          const v5273 = stdlib.fromSome(v5272, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5280 = v2332.currDistr;
          const v5281 = stdlib.safeMul256(v5273, v5280);
          const v5283 = stdlib.safeDiv256(v5281, v2371);
          const v5284 = stdlib.cast("UInt256", "UInt", v5283, false, true);
          const v5294 = stdlib.sub(v2406, v5284);
          const v5296 = stdlib.Array_set(v2405, '0', v5294);
          const v5297 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:404:50:application', stdlib.UInt_max, '0'), v5296);
          sim_r.txns.push({
            kind: 'from',
            to: v2906,
            tok: v2316
            });
          const v5298 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2906), null);
          const v5299 = stdlib.fromSome(v5298, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5300 = stdlib.safeAdd256(v5299, v5283);
          await stdlib.simMapSet(sim_r, 3, v2906, v5300);
          const v5301 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v2906), null);
          const v5302 = stdlib.fromSome(v5301, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5303 = stdlib.safeAdd256(v5302, stdlib.checkedBigNumberify('./index.rsh:406:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 4, v2906, v5303);
          const v5304 = await txn1.getOutput('cBT', 'v5283', ctc1, v5283);
          
          const v16681 = v2332;
          const v16683 = v5297;
          const v16684 = v2332.totST;
          const v16685 = v2332.totBT;
          const v16686 = v2332.distrNum;
          const v16687 = v2332.saleLocked;
          const v16688 = v2332.docHash;
          const v16689 = v16688[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v16690 = v2332.cv;
          const v16691 = v16690[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v16692 = v16690[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v16693 = v5297[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16694 = v16693[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16695 = stdlib.cast("UInt", "UInt256", v16694, false, true);
          const v16696 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5262 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
      const v5263 = {
        None: 0,
        Some: 1
        }[v5262[0]];
      const v5264 = stdlib.eq(v5263, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5264, {
        at: './index.rsh:397:24:application',
        fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v5268 = stdlib.gt256(v2407, stdlib.checkedBigNumberify('./index.rsh:398:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5268, {
        at: './index.rsh:398:24:application',
        fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v5270 = stdlib.gt256(v2371, stdlib.checkedBigNumberify('./index.rsh:399:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5270, {
        at: './index.rsh:399:24:application',
        fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v5272 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2906), null);
      const v5273 = stdlib.fromSome(v5272, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5274 = stdlib.ge256(v2371, v5273);
      stdlib.assert(v5274, {
        at: './index.rsh:400:24:application',
        fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v5277 = stdlib.gt256(v5273, stdlib.checkedBigNumberify('./index.rsh:401:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5277, {
        at: './index.rsh:401:24:application',
        fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v5280 = v2332.currDistr;
      const v5281 = stdlib.safeMul256(v5273, v5280);
      const v5283 = stdlib.safeDiv256(v5281, v2371);
      const v5284 = stdlib.cast("UInt256", "UInt", v5283, false, true);
      const v5287 = stdlib.le(v5284, v2406);
      stdlib.assert(v5287, {
        at: './index.rsh:403:24:application',
        fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v5294 = stdlib.sub(v2406, v5284);
      const v5296 = stdlib.Array_set(v2405, '0', v5294);
      const v5297 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:404:50:application', stdlib.UInt_max, '0'), v5296);
      ;
      const v5298 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2906), null);
      const v5299 = stdlib.fromSome(v5298, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5300 = stdlib.safeAdd256(v5299, v5283);
      await stdlib.mapSet(map3, v2906, v5300);
      const v5301 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v2906), null);
      const v5302 = stdlib.fromSome(v5301, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5303 = stdlib.safeAdd256(v5302, stdlib.checkedBigNumberify('./index.rsh:406:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map4, v2906, v5303);
      const v5304 = await txn1.getOutput('cBT', 'v5283', ctc1, v5283);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v5034, v5304), {
          at: './index.rsh:382:13:application',
          fs: ['at ./index.rsh:382:13:application call to [unknown function] (defined at: ./index.rsh:382:13:function exp)', 'at ./index.rsh:407:20:application call to "res" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v16681 = v2332;
      const v16683 = v5297;
      const v16684 = v2332.totST;
      const v16685 = v2332.totBT;
      const v16686 = v2332.distrNum;
      const v16687 = v2332.saleLocked;
      const v16688 = v2332.docHash;
      const v16689 = v16688[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v16690 = v2332.cv;
      const v16691 = v16690[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v16692 = v16690[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v16693 = v5297[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16694 = v16693[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16695 = stdlib.cast("UInt", "UInt256", v16694, false, true);
      const v16696 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc21,
    approveSwap0_318: ctc21,
    cBT0_318: ctc24,
    cCM0_318: ctc21,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc21,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc21
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2723 = ctc.selfAddress();
  const v2725 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)', 'at ./index.rsh:80:33:application call to "runcCM0_318" (defined at: ./index.rsh:411:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v2729 = stdlib.addressEq(v2723, v2312);
  const v2731 = stdlib.addressEq(v2723, v2409);
  const v2732 = v2729 ? true : v2731;
  stdlib.assert(v2732, {
    at: './index.rsh:415:23:application',
    fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:21:function exp)', 'at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)', 'at ./index.rsh:80:33:application call to "runcCM0_318" (defined at: ./index.rsh:411:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v2736 = ['cCM0_318', v2725];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2736],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:419:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:419:26:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          ;
          const v5841 = v5565[stdlib.checkedBigNumberify('./index.rsh:411:13:spread', stdlib.UInt_max, '0')];
          const v5846 = true;
          const v5847 = await txn1.getOutput('cCM', 'v5846', ctc8, v5846);
          
          const v5853 = {
            ...v2332, 'ctcMan': v5841};
          const v17129 = v5853;
          const v17131 = v2335;
          const v17132 = v5853.totST;
          const v17133 = v5853.totBT;
          const v17134 = v5853.distrNum;
          const v17135 = v5853.saleLocked;
          const v17136 = v5853.docHash;
          const v17137 = v17136[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17138 = v5853.cv;
          const v17139 = v17138[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17140 = v17138[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17141 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17142 = v17141[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17143 = stdlib.cast("UInt", "UInt256", v17142, false, true);
          const v17144 = v5853.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5841 = v5565[stdlib.checkedBigNumberify('./index.rsh:411:13:spread', stdlib.UInt_max, '0')];
      const v5842 = stdlib.addressEq(v2906, v2312);
      const v5844 = stdlib.addressEq(v2906, v2409);
      const v5845 = v5842 ? true : v5844;
      stdlib.assert(v5845, {
        at: './index.rsh:422:24:application',
        fs: ['at ./index.rsh:421:13:application call to [unknown function] (defined at: ./index.rsh:421:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v5846 = true;
      const v5847 = await txn1.getOutput('cCM', 'v5846', ctc8, v5846);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v5565, v5847), {
          at: './index.rsh:412:13:application',
          fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)', 'at ./index.rsh:424:20:application call to "res" (defined at: ./index.rsh:421:13:function exp)', 'at ./index.rsh:421:13:application call to [unknown function] (defined at: ./index.rsh:421:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v5853 = {
        ...v2332, 'ctcMan': v5841};
      const v17129 = v5853;
      const v17131 = v2335;
      const v17132 = v5853.totST;
      const v17133 = v5853.totBT;
      const v17134 = v5853.distrNum;
      const v17135 = v5853.saleLocked;
      const v17136 = v5853.docHash;
      const v17137 = v17136[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17138 = v5853.cv;
      const v17139 = v17138[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17140 = v17138[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17141 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17142 = v17141[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17143 = stdlib.cast("UInt", "UInt256", v17142, false, true);
      const v17144 = v5853.ctcMan;
      return;
      
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cancelSwap3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cancelSwap3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cancelSwap3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc24,
    approveSwap0_318: ctc24,
    cBT0_318: ctc21,
    cCM0_318: ctc24,
    cancelSwap0_318: ctc21,
    claimSwapProceeds0_318: ctc21,
    completeSwap0_318: ctc24,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc21,
    remWL0_318: ctc24
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2481 = ctc.selfAddress();
  const v2483 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_318" (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cancelSwap'
    });
  const v2485 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2481), null);
  const v2486 = {
    None: 0,
    Some: 1
    }[v2485[0]];
  const v2487 = stdlib.eq(v2486, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2487, {
    at: './index.rsh:147:23:application',
    fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:17:function exp)', 'at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_318" (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member',
    who: 'cancelSwap'
    });
  const v2488 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2481), null);
  const v2489 = '-----';
  const v2490 = stdlib.fromSome(v2488, v2489);
  const v2492 = stdlib.digest([ctc6], [v2490]);
  const v2494 = stdlib.digest([ctc6], [v2489]);
  const v2495 = stdlib.digestEq(v2492, v2494);
  const v2500 = 'compl';
  const v2503 = stdlib.digest([ctc6], [v2500]);
  const v2504 = stdlib.digestEq(v2492, v2503);
  const v2505 = v2504 ? false : true;
  const v2506 = v2495 ? false : v2505;
  stdlib.assert(v2506, {
    at: './index.rsh:148:23:application',
    fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:17:function exp)', 'at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_318" (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'there must be a pending swap',
    who: 'cancelSwap'
    });
  const v2509 = ['cancelSwap0_318', v2483];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2509],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:152:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:152:25:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cancelSwap"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v2906), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v2906), null);
          const v6390 = '-----';
          await stdlib.simMapSet(sim_r, 6, v2906, v6390);
          const v6409 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v2906), null);
          const v6411 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6413 = stdlib.fromSome(v6409, v6411);
          const v6414 = stdlib.Array_set(v6413, stdlib.checkedBigNumberify('./index.rsh:159:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:159:41:decimal', stdlib.UInt_max, '0'));
          const v6415 = stdlib.Array_set(v6414, stdlib.checkedBigNumberify('./index.rsh:160:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:160:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v2906, v6415);
          const v6416 = true;
          const v6417 = await txn1.getOutput('cancelSwap', 'v6416', ctc8, v6416);
          
          const v17577 = v2332;
          const v17579 = v2335;
          const v17580 = v2332.totST;
          const v17581 = v2332.totBT;
          const v17582 = v2332.distrNum;
          const v17583 = v2332.saleLocked;
          const v17584 = v2332.docHash;
          const v17585 = v17584[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17586 = v2332.cv;
          const v17587 = v17586[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17588 = v17586[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17589 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17590 = v17589[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17591 = stdlib.cast("UInt", "UInt256", v17590, false, true);
          const v17592 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6386 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
      const v6387 = {
        None: 0,
        Some: 1
        }[v6386[0]];
      const v6388 = stdlib.eq(v6387, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6388, {
        at: './index.rsh:155:24:application',
        fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
        msg: 'you must be a whitelist member',
        who: 'cancelSwap'
        });
      const v6389 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2906), null);
      const v6390 = '-----';
      const v6391 = stdlib.fromSome(v6389, v6390);
      const v6393 = stdlib.digest([ctc6], [v6391]);
      const v6395 = stdlib.digest([ctc6], [v6390]);
      const v6396 = stdlib.digestEq(v6393, v6395);
      const v6401 = 'compl';
      const v6404 = stdlib.digest([ctc6], [v6401]);
      const v6405 = stdlib.digestEq(v6393, v6404);
      const v6406 = v6405 ? false : true;
      const v6407 = v6396 ? false : v6406;
      stdlib.assert(v6407, {
        at: './index.rsh:156:24:application',
        fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
        msg: 'there must be a pending swap',
        who: 'cancelSwap'
        });
      await stdlib.mapSet(map6, v2906, v6390);
      const v6409 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2906), null);
      const v6411 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6413 = stdlib.fromSome(v6409, v6411);
      const v6414 = stdlib.Array_set(v6413, stdlib.checkedBigNumberify('./index.rsh:159:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:159:41:decimal', stdlib.UInt_max, '0'));
      const v6415 = stdlib.Array_set(v6414, stdlib.checkedBigNumberify('./index.rsh:160:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:160:42:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v2906, v6415);
      const v6416 = true;
      const v6417 = await txn1.getOutput('cancelSwap', 'v6416', ctc8, v6416);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v6096, v6417), {
          at: './index.rsh:144:13:application',
          fs: ['at ./index.rsh:144:13:application call to [unknown function] (defined at: ./index.rsh:144:13:function exp)', 'at ./index.rsh:163:20:application call to "res" (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
          msg: 'out',
          who: 'cancelSwap'
          });
        }
      else {
        }
      
      const v17577 = v2332;
      const v17579 = v2335;
      const v17580 = v2332.totST;
      const v17581 = v2332.totBT;
      const v17582 = v2332.distrNum;
      const v17583 = v2332.saleLocked;
      const v17584 = v2332.docHash;
      const v17585 = v17584[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17586 = v2332.cv;
      const v17587 = v17586[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17588 = v17586[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17589 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17590 = v17589[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17591 = stdlib.cast("UInt", "UInt256", v17590, false, true);
      const v17592 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimSwapProceeds3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimSwapProceeds3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimSwapProceeds3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc24,
    approveSwap0_318: ctc24,
    cBT0_318: ctc21,
    cCM0_318: ctc24,
    cancelSwap0_318: ctc21,
    claimSwapProceeds0_318: ctc21,
    completeSwap0_318: ctc24,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc21,
    remWL0_318: ctc24
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2556 = ctc.selfAddress();
  const v2558 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_318" (defined at: ./index.rsh:227:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'claimSwapProceeds'
    });
  const v2560 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2556), null);
  const v2561 = {
    None: 0,
    Some: 1
    }[v2560[0]];
  const v2562 = stdlib.eq(v2561, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2562, {
    at: './index.rsh:231:23:application',
    fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:17:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_318" (defined at: ./index.rsh:227:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to claim swap proceeds',
    who: 'claimSwapProceeds'
    });
  const v2563 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2556), null);
  const v2565 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2567 = stdlib.fromSome(v2563, v2565);
  const v2568 = v2567[stdlib.checkedBigNumberify('./index.rsh:232:59:array ref', stdlib.UInt_max, '2')];
  const v2569 = stdlib.gt(v2568, stdlib.checkedBigNumberify('./index.rsh:232:65:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2569, {
    at: './index.rsh:232:23:application',
    fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:17:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_318" (defined at: ./index.rsh:227:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must have swap proceeds to claim',
    who: 'claimSwapProceeds'
    });
  const v2578 = stdlib.ge(v2406, v2568);
  stdlib.assert(v2578, {
    at: './index.rsh:233:23:application',
    fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:17:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_318" (defined at: ./index.rsh:227:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimSwapProceeds'
    });
  const v2581 = ['claimSwapProceeds0_318', v2558];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2581],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:237:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:237:25:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimSwapProceeds"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v2906), null);
          const v6957 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v2906), null);
          const v6959 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6961 = stdlib.fromSome(v6957, v6959);
          const v6962 = v6961[stdlib.checkedBigNumberify('./index.rsh:241:60:array ref', stdlib.UInt_max, '2')];
          const v6979 = stdlib.sub(v2406, v6962);
          const v6981 = stdlib.Array_set(v2405, '0', v6979);
          const v6982 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:244:47:application', stdlib.UInt_max, '0'), v6981);
          sim_r.txns.push({
            kind: 'from',
            to: v2906,
            tok: v2316
            });
          const v6983 = stdlib.Array_set(v6961, stdlib.checkedBigNumberify('./index.rsh:245:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v2906, v6983);
          const v6984 = true;
          const v6985 = await txn1.getOutput('claimSwapProceeds', 'v6984', ctc8, v6984);
          
          const v18025 = v2332;
          const v18027 = v6982;
          const v18028 = v2332.totST;
          const v18029 = v2332.totBT;
          const v18030 = v2332.distrNum;
          const v18031 = v2332.saleLocked;
          const v18032 = v2332.docHash;
          const v18033 = v18032[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18034 = v2332.cv;
          const v18035 = v18034[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18036 = v18034[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18037 = v6982[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18038 = v18037[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18039 = stdlib.cast("UInt", "UInt256", v18038, false, true);
          const v18040 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6954 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
      const v6955 = {
        None: 0,
        Some: 1
        }[v6954[0]];
      const v6956 = stdlib.eq(v6955, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6956, {
        at: './index.rsh:240:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: 'you must be a whitelist member to claim swap proceeds',
        who: 'claimSwapProceeds'
        });
      const v6957 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2906), null);
      const v6959 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6961 = stdlib.fromSome(v6957, v6959);
      const v6962 = v6961[stdlib.checkedBigNumberify('./index.rsh:241:60:array ref', stdlib.UInt_max, '2')];
      const v6963 = stdlib.gt(v6962, stdlib.checkedBigNumberify('./index.rsh:241:66:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6963, {
        at: './index.rsh:241:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: 'you must have swap proceeds to claim',
        who: 'claimSwapProceeds'
        });
      const v6972 = stdlib.ge(v2406, v6962);
      stdlib.assert(v6972, {
        at: './index.rsh:243:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimSwapProceeds'
        });
      const v6979 = stdlib.sub(v2406, v6962);
      const v6981 = stdlib.Array_set(v2405, '0', v6979);
      const v6982 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:244:47:application', stdlib.UInt_max, '0'), v6981);
      ;
      const v6983 = stdlib.Array_set(v6961, stdlib.checkedBigNumberify('./index.rsh:245:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:245:41:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v2906, v6983);
      const v6984 = true;
      const v6985 = await txn1.getOutput('claimSwapProceeds', 'v6984', ctc8, v6984);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v6627, v6985), {
          at: './index.rsh:228:13:application',
          fs: ['at ./index.rsh:228:13:application call to [unknown function] (defined at: ./index.rsh:228:13:function exp)', 'at ./index.rsh:248:20:application call to "res" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
          msg: 'out',
          who: 'claimSwapProceeds'
          });
        }
      else {
        }
      
      const v18025 = v2332;
      const v18027 = v6982;
      const v18028 = v2332.totST;
      const v18029 = v2332.totBT;
      const v18030 = v2332.distrNum;
      const v18031 = v2332.saleLocked;
      const v18032 = v2332.docHash;
      const v18033 = v18032[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18034 = v2332.cv;
      const v18035 = v18034[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18036 = v18034[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18037 = v6982[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18038 = v18037[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18039 = stdlib.cast("UInt", "UInt256", v18038, false, true);
      const v18040 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _completeSwap3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _completeSwap3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _completeSwap3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc21,
    approveSwap0_318: ctc21,
    cBT0_318: ctc24,
    cCM0_318: ctc21,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc21,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc21
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2534 = ctc.selfAddress();
  const v2536 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_318" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'completeSwap'
    });
  const v2537 = v2536[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2540 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2534), null);
  const v2541 = {
    None: 0,
    Some: 1
    }[v2540[0]];
  const v2542 = stdlib.eq(v2541, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2542, {
    at: './index.rsh:192:23:application',
    fs: ['at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:23:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_318" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to complete or buy swap',
    who: 'completeSwap'
    });
  const v2543 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2537), null);
  const v2544 = '-----';
  const v2545 = stdlib.fromSome(v2543, v2544);
  const v2546 = 'apprv';
  const v2547 = stdlib.digest([ctc6], [v2545]);
  const v2549 = stdlib.digest([ctc6], [v2546]);
  const v2550 = stdlib.digestEq(v2547, v2549);
  stdlib.assert(v2550, {
    at: './index.rsh:193:23:application',
    fs: ['at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:23:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_318" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you can only complete an approved swap',
    who: 'completeSwap'
    });
  const v2554 = ['completeSwap0_318', v2536];
  
  const v2827 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2537), null);
  const v2829 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2831 = stdlib.fromSome(v2827, v2829);
  const v2832 = v2831[stdlib.checkedBigNumberify('./index.rsh:197:68:array ref', stdlib.UInt_max, '0')];
  const v2838 = v2831[stdlib.checkedBigNumberify('./index.rsh:197:111:array ref', stdlib.UInt_max, '1')];
  const v2839 = stdlib.safeMul(v2832, v2838);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2554],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:197:27:decimal', stdlib.UInt_max, '0'), [[v2839, v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "completeSwap"
            });
          const v7226 = v7158[stdlib.checkedBigNumberify('./index.rsh:188:13:spread', stdlib.UInt_max, '0')];
          const v7227 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v7226), null);
          const v7229 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7231 = stdlib.fromSome(v7227, v7229);
          const v7232 = v7231[stdlib.checkedBigNumberify('./index.rsh:197:68:array ref', stdlib.UInt_max, '0')];
          const v7238 = v7231[stdlib.checkedBigNumberify('./index.rsh:197:111:array ref', stdlib.UInt_max, '1')];
          const v7239 = stdlib.safeMul(v7232, v7238);
          ;
          const v7299 = stdlib.add(v2406, v7239);
          const v7301 = stdlib.Array_set(v2405, '0', v7299);
          const v7302 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v7301);
          sim_r.txns.push({
            amt: v7239,
            kind: 'to',
            tok: v2316
            });
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v2906), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v7226), null);
          const v7540 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2906), null);
          const v7541 = stdlib.fromSome(v7540, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7542 = stdlib.cast("UInt", "UInt256", v7232, false, true);
          const v7543 = stdlib.safeAdd256(v7541, v7542);
          await stdlib.simMapSet(sim_r, 0, v2906, v7543);
          const v7544 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2906), null);
          const v7545 = stdlib.fromSome(v7544, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7547 = stdlib.safeAdd256(v7545, v7542);
          await stdlib.simMapSet(sim_r, 2, v2906, v7547);
          const v7548 = v7231[stdlib.checkedBigNumberify('./index.rsh:209:44:array ref', stdlib.UInt_max, '2')];
          const v7552 = stdlib.safeAdd(v7548, v7239);
          const v7553 = stdlib.Array_set(v7231, stdlib.checkedBigNumberify('./index.rsh:209:38:decimal', stdlib.UInt_max, '2'), v7552);
          await stdlib.simMapSet(sim_r, 5, v7226, v7553);
          const v7554 = 'compl';
          await stdlib.simMapSet(sim_r, 6, v7226, v7554);
          const v7555 = true;
          const v7556 = await txn1.getOutput('completeSwap', 'v7555', ctc8, v7555);
          
          const v7562 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7226), null);
          const v7563 = stdlib.fromSome(v7562, false);
          if (v7563) {
            const v7572 = stdlib.safeAdd256(v2371, v7542);
            const v7573 = {
              ...v2332, 'totST': v7572};
            await stdlib.simMapSet(sim_r, 7, v7226, false);
            const v18473 = v7573;
            const v18475 = v7302;
            const v18476 = v7573.totST;
            const v18477 = v7573.totBT;
            const v18478 = v7573.distrNum;
            const v18479 = v7573.saleLocked;
            const v18480 = v7573.docHash;
            const v18481 = v18480[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
            const v18482 = v7573.cv;
            const v18483 = v18482[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
            const v18484 = v18482[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
            const v18485 = v7302[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v18486 = v18485[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v18487 = stdlib.cast("UInt", "UInt256", v18486, false, true);
            const v18488 = v7573.ctcMan;
            sim_r.isHalt = false;
            }
          else {
            const v7565 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7226), null);
            const v7566 = stdlib.fromSome(v7565, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v7568 = stdlib.safeSub256(v7566, v7542);
            await stdlib.simMapSet(sim_r, 0, v7226, v7568);
            const v18501 = v2332;
            const v18503 = v7302;
            const v18504 = v2332.totST;
            const v18505 = v2332.totBT;
            const v18506 = v2332.distrNum;
            const v18507 = v2332.saleLocked;
            const v18508 = v2332.docHash;
            const v18509 = v18508[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
            const v18510 = v2332.cv;
            const v18511 = v18510[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
            const v18512 = v18510[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
            const v18513 = v7302[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v18514 = v18513[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v18515 = stdlib.cast("UInt", "UInt256", v18514, false, true);
            const v18516 = v2332.ctcMan;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      undefined /* setApiDetails */;
      const v7226 = v7158[stdlib.checkedBigNumberify('./index.rsh:188:13:spread', stdlib.UInt_max, '0')];
      const v7227 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7226), null);
      const v7229 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7231 = stdlib.fromSome(v7227, v7229);
      const v7232 = v7231[stdlib.checkedBigNumberify('./index.rsh:197:68:array ref', stdlib.UInt_max, '0')];
      const v7238 = v7231[stdlib.checkedBigNumberify('./index.rsh:197:111:array ref', stdlib.UInt_max, '1')];
      const v7239 = stdlib.safeMul(v7232, v7238);
      ;
      const v7299 = stdlib.add(v2406, v7239);
      const v7301 = stdlib.Array_set(v2405, '0', v7299);
      const v7302 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v7301);
      ;
      const v7523 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
      const v7524 = {
        None: 0,
        Some: 1
        }[v7523[0]];
      const v7525 = stdlib.eq(v7524, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7525, {
        at: './index.rsh:200:24:application',
        fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)'],
        msg: 'you must be a whitelist member to complete or buy swap',
        who: 'completeSwap'
        });
      const v7526 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7226), null);
      const v7527 = '-----';
      const v7528 = stdlib.fromSome(v7526, v7527);
      const v7529 = 'apprv';
      const v7530 = stdlib.digest([ctc6], [v7528]);
      const v7532 = stdlib.digest([ctc6], [v7529]);
      const v7533 = stdlib.digestEq(v7530, v7532);
      stdlib.assert(v7533, {
        at: './index.rsh:201:24:application',
        fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)'],
        msg: 'you can only buy an approved swap',
        who: 'completeSwap'
        });
      const v7540 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2906), null);
      const v7541 = stdlib.fromSome(v7540, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7542 = stdlib.cast("UInt", "UInt256", v7232, false, true);
      const v7543 = stdlib.safeAdd256(v7541, v7542);
      await stdlib.mapSet(map0, v2906, v7543);
      const v7544 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2906), null);
      const v7545 = stdlib.fromSome(v7544, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7547 = stdlib.safeAdd256(v7545, v7542);
      await stdlib.mapSet(map2, v2906, v7547);
      const v7548 = v7231[stdlib.checkedBigNumberify('./index.rsh:209:44:array ref', stdlib.UInt_max, '2')];
      const v7552 = stdlib.safeAdd(v7548, v7239);
      const v7553 = stdlib.Array_set(v7231, stdlib.checkedBigNumberify('./index.rsh:209:38:decimal', stdlib.UInt_max, '2'), v7552);
      await stdlib.mapSet(map5, v7226, v7553);
      const v7554 = 'compl';
      await stdlib.mapSet(map6, v7226, v7554);
      const v7555 = true;
      const v7556 = await txn1.getOutput('completeSwap', 'v7555', ctc8, v7555);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v7158, v7556), {
          at: './index.rsh:189:13:application',
          fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:214:20:application call to "res" (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)'],
          msg: 'out',
          who: 'completeSwap'
          });
        }
      else {
        }
      
      const v7562 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7226), null);
      const v7563 = stdlib.fromSome(v7562, false);
      if (v7563) {
        const v7572 = stdlib.safeAdd256(v2371, v7542);
        const v7573 = {
          ...v2332, 'totST': v7572};
        await stdlib.mapSet(map7, v7226, false);
        const v18473 = v7573;
        const v18475 = v7302;
        const v18476 = v7573.totST;
        const v18477 = v7573.totBT;
        const v18478 = v7573.distrNum;
        const v18479 = v7573.saleLocked;
        const v18480 = v7573.docHash;
        const v18481 = v18480[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v18482 = v7573.cv;
        const v18483 = v18482[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v18484 = v18482[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v18485 = v7302[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v18486 = v18485[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v18487 = stdlib.cast("UInt", "UInt256", v18486, false, true);
        const v18488 = v7573.ctcMan;
        return;
        }
      else {
        const v7565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7226), null);
        const v7566 = stdlib.fromSome(v7565, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v7568 = stdlib.safeSub256(v7566, v7542);
        await stdlib.mapSet(map0, v7226, v7568);
        const v18501 = v2332;
        const v18503 = v7302;
        const v18504 = v2332.totST;
        const v18505 = v2332.totBT;
        const v18506 = v2332.distrNum;
        const v18507 = v2332.saleLocked;
        const v18508 = v2332.docHash;
        const v18509 = v18508[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v18510 = v2332.cv;
        const v18511 = v18510[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v18512 = v18510[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v18513 = v7302[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v18514 = v18513[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v18515 = stdlib.cast("UInt", "UInt256", v18514, false, true);
        const v18516 = v2332.ctcMan;
        return;
        }
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc24,
    approveSwap0_318: ctc24,
    cBT0_318: ctc25,
    cCM0_318: ctc24,
    cancelSwap0_318: ctc25,
    claimSwapProceeds0_318: ctc25,
    completeSwap0_318: ctc24,
    dBT0_318: ctc21,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc25,
    remWL0_318: ctc24
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2672 = ctc.selfAddress();
  const v2674 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_318" (defined at: ./index.rsh:359:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v2675 = v2674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2678 = stdlib.addressEq(v2672, v2312);
  const v2680 = stdlib.addressEq(v2672, v2409);
  const v2681 = v2678 ? true : v2680;
  stdlib.assert(v2681, {
    at: './index.rsh:363:23:application',
    fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:20:function exp)', 'at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_318" (defined at: ./index.rsh:359:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v2682 = stdlib.cast("UInt256", "UInt", v2675, false, true);
  const v2683 = stdlib.gt(v2682, stdlib.checkedBigNumberify('./index.rsh:364:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2683, {
    at: './index.rsh:364:23:application',
    fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:20:function exp)', 'at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_318" (defined at: ./index.rsh:359:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v2687 = ['dBT0_318', v2674];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2687],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:367:24:decimal', stdlib.UInt_max, '0'), [[v2682, v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v7778 = v7689[stdlib.checkedBigNumberify('./index.rsh:359:13:spread', stdlib.UInt_max, '0')];
          const v7779 = stdlib.cast("UInt256", "UInt", v7778, false, true);
          ;
          const v7830 = stdlib.add(v2406, v7779);
          const v7832 = stdlib.Array_set(v2405, '0', v7830);
          const v7833 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v7832);
          sim_r.txns.push({
            amt: v7779,
            kind: 'to',
            tok: v2316
            });
          const v8115 = stdlib.safeAdd256(v2372, v7778);
          const v8116 = {
            ...v2332, 'totBT': v8115};
          const v8118 = stdlib.safeAdd256(v2373, stdlib.checkedBigNumberify('./index.rsh:374:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8119 = {
            ...v8116, 'distrNum': v8118};
          const v8120 = {
            ...v8119, 'currDistr': v7778};
          const v8121 = true;
          const v8122 = await txn1.getOutput('dBT', 'v8121', ctc8, v8121);
          
          const v18949 = v8120;
          const v18951 = v7833;
          const v18952 = v8120.totST;
          const v18953 = v8120.totBT;
          const v18954 = v8120.distrNum;
          const v18955 = v8120.saleLocked;
          const v18956 = v8120.docHash;
          const v18957 = v18956[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18958 = v8120.cv;
          const v18959 = v18958[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18960 = v18958[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18961 = v7833[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18962 = v18961[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18963 = stdlib.cast("UInt", "UInt256", v18962, false, true);
          const v18964 = v8120.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      undefined /* setApiDetails */;
      const v7778 = v7689[stdlib.checkedBigNumberify('./index.rsh:359:13:spread', stdlib.UInt_max, '0')];
      const v7779 = stdlib.cast("UInt256", "UInt", v7778, false, true);
      ;
      const v7830 = stdlib.add(v2406, v7779);
      const v7832 = stdlib.Array_set(v2405, '0', v7830);
      const v7833 = stdlib.Array_set(v2335, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v7832);
      ;
      const v8108 = stdlib.addressEq(v2906, v2312);
      const v8110 = stdlib.addressEq(v2906, v2409);
      const v8111 = v8108 ? true : v8110;
      stdlib.assert(v8111, {
        at: './index.rsh:370:24:application',
        fs: ['at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v8113 = stdlib.gt(v7779, stdlib.checkedBigNumberify('./index.rsh:371:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8113, {
        at: './index.rsh:371:24:application',
        fs: ['at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v8115 = stdlib.safeAdd256(v2372, v7778);
      const v8116 = {
        ...v2332, 'totBT': v8115};
      const v8118 = stdlib.safeAdd256(v2373, stdlib.checkedBigNumberify('./index.rsh:374:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v8119 = {
        ...v8116, 'distrNum': v8118};
      const v8120 = {
        ...v8119, 'currDistr': v7778};
      const v8121 = true;
      const v8122 = await txn1.getOutput('dBT', 'v8121', ctc8, v8121);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v7689, v8122), {
          at: './index.rsh:360:13:application',
          fs: ['at ./index.rsh:360:13:application call to [unknown function] (defined at: ./index.rsh:360:13:function exp)', 'at ./index.rsh:377:20:application call to "res" (defined at: ./index.rsh:369:13:function exp)', 'at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v18949 = v8120;
      const v18951 = v7833;
      const v18952 = v8120.totST;
      const v18953 = v8120.totBT;
      const v18954 = v8120.distrNum;
      const v18955 = v8120.saleLocked;
      const v18956 = v8120.docHash;
      const v18957 = v18956[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18958 = v8120.cv;
      const v18959 = v18958[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18960 = v18958[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18961 = v7833[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18962 = v18961[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18963 = stdlib.cast("UInt", "UInt256", v18962, false, true);
      const v18964 = v8120.ctcMan;
      return;
      
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc16]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc24,
    approveSwap0_318: ctc24,
    cBT0_318: ctc25,
    cCM0_318: ctc24,
    cancelSwap0_318: ctc25,
    claimSwapProceeds0_318: ctc25,
    completeSwap0_318: ctc24,
    dBT0_318: ctc26,
    docHash0_318: ctc21,
    initSwap0_318: ctc19,
    optIn0_318: ctc25,
    remWL0_318: ctc24
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2583 = ctc.selfAddress();
  const v2585 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_318" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v2591 = stdlib.eq(v2398, stdlib.checkedBigNumberify('./index.rsh:257:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2591, {
    at: './index.rsh:257:23:application',
    fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:18:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_318" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v2592 = stdlib.addressEq(v2583, v2312);
  const v2594 = stdlib.addressEq(v2583, v2409);
  const v2595 = v2592 ? true : v2594;
  stdlib.assert(v2595, {
    at: './index.rsh:258:23:application',
    fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:18:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_318" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v2599 = ['docHash0_318', v2585];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2599],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:262:26:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          ;
          const v8660 = v8220[stdlib.checkedBigNumberify('./index.rsh:252:13:spread', stdlib.UInt_max, '0')];
          const v8668 = stdlib.safeAdd(v2398, stdlib.checkedBigNumberify('./index.rsh:268:76:decimal', stdlib.UInt_max, '1'));
          const v8670 = [v8660, v8668, v2908];
          const v8671 = {
            ...v2332, 'docHash': v8670};
          const v8672 = true;
          const v8673 = await txn1.getOutput('docHash', 'v8672', ctc8, v8672);
          
          const v19397 = v8671;
          const v19399 = v2335;
          const v19400 = v8671.totST;
          const v19401 = v8671.totBT;
          const v19402 = v8671.distrNum;
          const v19403 = v8671.saleLocked;
          const v19404 = v8671.docHash;
          const v19405 = v19404[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19406 = v8671.cv;
          const v19407 = v19406[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19408 = v19406[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19409 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19410 = v19409[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19411 = stdlib.cast("UInt", "UInt256", v19410, false, true);
          const v19412 = v8671.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v8660 = v8220[stdlib.checkedBigNumberify('./index.rsh:252:13:spread', stdlib.UInt_max, '0')];
      const v8663 = stdlib.eq(v2398, stdlib.checkedBigNumberify('./index.rsh:266:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8663, {
        at: './index.rsh:266:24:application',
        fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v8664 = stdlib.addressEq(v2906, v2312);
      const v8666 = stdlib.addressEq(v2906, v2409);
      const v8667 = v8664 ? true : v8666;
      stdlib.assert(v8667, {
        at: './index.rsh:267:24:application',
        fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v8668 = stdlib.safeAdd(v2398, stdlib.checkedBigNumberify('./index.rsh:268:76:decimal', stdlib.UInt_max, '1'));
      const v8670 = [v8660, v8668, v2908];
      const v8671 = {
        ...v2332, 'docHash': v8670};
      const v8672 = true;
      const v8673 = await txn1.getOutput('docHash', 'v8672', ctc8, v8672);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v8220, v8673), {
          at: './index.rsh:253:13:application',
          fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:269:20:application call to "res" (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v19397 = v8671;
      const v19399 = v2335;
      const v19400 = v8671.totST;
      const v19401 = v8671.totBT;
      const v19402 = v8671.distrNum;
      const v19403 = v8671.saleLocked;
      const v19404 = v8671.docHash;
      const v19405 = v19404[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19406 = v8671.cv;
      const v19407 = v19406[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19408 = v19406[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19409 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19410 = v19409[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19411 = stdlib.cast("UInt", "UInt256", v19410, false, true);
      const v19412 = v8671.ctcMan;
      return;
      
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      return;
      break;
      }
    }
  
  
  };
export async function _initSwap3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _initSwap3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _initSwap3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc14]);
  const ctc23 = stdlib.T_Tuple([ctc11]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc21,
    addCoopId0_318: ctc22,
    addWL0_318: ctc23,
    approveSwap0_318: ctc23,
    cBT0_318: ctc24,
    cCM0_318: ctc23,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc23,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc23
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2434 = ctc.selfAddress();
  const v2436 = stdlib.protect(ctc19, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_318" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'initSwap'
    });
  const v2437 = v2436[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2438 = v2436[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2439 = v2436[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2445 = stdlib.addressEq(v2434, v2312);
  const v2447 = stdlib.addressEq(v2434, v2409);
  const v2448 = v2445 ? true : v2447;
  const v2449 = v2439 ? v2448 : false;
  const v2450 = v2439 ? false : true;
  const v2451 = v2449 ? true : v2450;
  stdlib.assert(v2451, {
    at: './index.rsh:117:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_318" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'if you are not creator or manager, the swap cannot be share issuance type',
    who: 'initSwap'
    });
  const v2452 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2434), null);
  const v2453 = {
    None: 0,
    Some: 1
    }[v2452[0]];
  const v2454 = stdlib.eq(v2453, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2454, {
    at: './index.rsh:118:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_318" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member',
    who: 'initSwap'
    });
  const v2455 = stdlib.gt(v2437, stdlib.checkedBigNumberify('./index.rsh:119:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2455, {
    at: './index.rsh:119:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_318" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'initSwap'
    });
  const v2456 = stdlib.gt(v2438, stdlib.checkedBigNumberify('./index.rsh:120:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2456, {
    at: './index.rsh:120:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_318" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'price must be greater than 0',
    who: 'initSwap'
    });
  const v2457 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2434), null);
  const v2458 = '-----';
  const v2459 = stdlib.fromSome(v2457, v2458);
  const v2461 = stdlib.digest([ctc6], [v2459]);
  const v2463 = stdlib.digest([ctc6], [v2458]);
  const v2464 = stdlib.digestEq(v2461, v2463);
  const v2468 = 'compl';
  const v2471 = stdlib.digest([ctc6], [v2468]);
  const v2472 = stdlib.digestEq(v2461, v2471);
  const v2473 = v2464 ? true : v2472;
  stdlib.assert(v2473, {
    at: './index.rsh:121:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_318" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'there must be no pending swap',
    who: 'initSwap'
    });
  const v2479 = ['initSwap0_318', v2436];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2479],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:124:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:124:32:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "initSwap"
            });
          ;
          ;
          const v9211 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v9212 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v9213 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v2906), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v2906), null);
          const v9244 = 'initd';
          await stdlib.simMapSet(sim_r, 6, v2906, v9244);
          await stdlib.simMapSet(sim_r, 7, v2906, v9213);
          const v9245 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v2906), null);
          const v9247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v9249 = stdlib.fromSome(v9245, v9247);
          const v9250 = stdlib.Array_set(v9249, stdlib.checkedBigNumberify('./index.rsh:135:38:decimal', stdlib.UInt_max, '0'), v9211);
          const v9251 = stdlib.Array_set(v9250, stdlib.checkedBigNumberify('./index.rsh:136:39:decimal', stdlib.UInt_max, '1'), v9212);
          await stdlib.simMapSet(sim_r, 5, v2906, v9251);
          const v9252 = true;
          const v9253 = await txn1.getOutput('initSwap', 'v9252', ctc8, v9252);
          
          const v19845 = v2332;
          const v19847 = v2335;
          const v19848 = v2332.totST;
          const v19849 = v2332.totBT;
          const v19850 = v2332.distrNum;
          const v19851 = v2332.saleLocked;
          const v19852 = v2332.docHash;
          const v19853 = v19852[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19854 = v2332.cv;
          const v19855 = v19854[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19856 = v19854[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19857 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19858 = v19857[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19859 = stdlib.cast("UInt", "UInt256", v19858, false, true);
          const v19860 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v9211 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
      const v9212 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
      const v9213 = v8751[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
      const v9215 = stdlib.addressEq(v2906, v2312);
      const v9217 = stdlib.addressEq(v2906, v2409);
      const v9218 = v9215 ? true : v9217;
      const v9219 = v9213 ? v9218 : false;
      const v9220 = v9213 ? false : true;
      const v9221 = v9219 ? true : v9220;
      stdlib.assert(v9221, {
        at: './index.rsh:127:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'if you are not creator or manager, the swap cannot be share issuance type',
        who: 'initSwap'
        });
      const v9222 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2906), null);
      const v9223 = {
        None: 0,
        Some: 1
        }[v9222[0]];
      const v9224 = stdlib.eq(v9223, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v9224, {
        at: './index.rsh:128:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'you must be a whitelist member',
        who: 'initSwap'
        });
      const v9225 = stdlib.gt(v9211, stdlib.checkedBigNumberify('./index.rsh:129:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9225, {
        at: './index.rsh:129:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'initSwap'
        });
      const v9226 = stdlib.gt(v9212, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9226, {
        at: './index.rsh:130:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'initSwap'
        });
      const v9227 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2906), null);
      const v9228 = '-----';
      const v9229 = stdlib.fromSome(v9227, v9228);
      const v9231 = stdlib.digest([ctc6], [v9229]);
      const v9233 = stdlib.digest([ctc6], [v9228]);
      const v9234 = stdlib.digestEq(v9231, v9233);
      const v9238 = 'compl';
      const v9241 = stdlib.digest([ctc6], [v9238]);
      const v9242 = stdlib.digestEq(v9231, v9241);
      const v9243 = v9234 ? true : v9242;
      stdlib.assert(v9243, {
        at: './index.rsh:131:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'there must be no pending swap',
        who: 'initSwap'
        });
      const v9244 = 'initd';
      await stdlib.mapSet(map6, v2906, v9244);
      await stdlib.mapSet(map7, v2906, v9213);
      const v9245 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2906), null);
      const v9247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v9249 = stdlib.fromSome(v9245, v9247);
      const v9250 = stdlib.Array_set(v9249, stdlib.checkedBigNumberify('./index.rsh:135:38:decimal', stdlib.UInt_max, '0'), v9211);
      const v9251 = stdlib.Array_set(v9250, stdlib.checkedBigNumberify('./index.rsh:136:39:decimal', stdlib.UInt_max, '1'), v9212);
      await stdlib.mapSet(map5, v2906, v9251);
      const v9252 = true;
      const v9253 = await txn1.getOutput('initSwap', 'v9252', ctc8, v9252);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v8751, v9253), {
          at: './index.rsh:114:13:application',
          fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:139:20:application call to "res" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
          msg: 'out',
          who: 'initSwap'
          });
        }
      else {
        }
      
      const v19845 = v2332;
      const v19847 = v2335;
      const v19848 = v2332.totST;
      const v19849 = v2332.totBT;
      const v19850 = v2332.distrNum;
      const v19851 = v2332.saleLocked;
      const v19852 = v2332.docHash;
      const v19853 = v19852[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19854 = v2332.cv;
      const v19855 = v19854[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19856 = v19854[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19857 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19858 = v19857[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19859 = stdlib.cast("UInt", "UInt256", v19858, false, true);
      const v19860 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc24,
    approveSwap0_318: ctc24,
    cBT0_318: ctc21,
    cCM0_318: ctc24,
    cancelSwap0_318: ctc21,
    claimSwapProceeds0_318: ctc21,
    completeSwap0_318: ctc24,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc21,
    remWL0_318: ctc24
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2655 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:335:13:application call to [unknown function] (defined at: ./index.rsh:335:13:function exp)', 'at ./index.rsh:80:33:application call to "runoptIn0_318" (defined at: ./index.rsh:332:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v2659 = ['optIn0_318', v2655];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2659],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:338:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:338:25:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 8, v2906, true);
          const v9793 = true;
          const v9794 = await txn1.getOutput('optIn', 'v9793', ctc8, v9793);
          
          const v20293 = v2332;
          const v20295 = v2335;
          const v20296 = v2332.totST;
          const v20297 = v2332.totBT;
          const v20298 = v2332.distrNum;
          const v20299 = v2332.saleLocked;
          const v20300 = v2332.docHash;
          const v20301 = v20300[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20302 = v2332.cv;
          const v20303 = v20302[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20304 = v20302[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20305 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20306 = v20305[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20307 = stdlib.cast("UInt", "UInt256", v20306, false, true);
          const v20308 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map8, v2906, true);
      const v9793 = true;
      const v9794 = await txn1.getOutput('optIn', 'v9793', ctc8, v9793);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v9282, v9794), {
          at: './index.rsh:333:13:application',
          fs: ['at ./index.rsh:333:13:application call to [unknown function] (defined at: ./index.rsh:333:13:function exp)', 'at ./index.rsh:342:20:application call to "res" (defined at: ./index.rsh:340:13:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v20293 = v2332;
      const v20295 = v2335;
      const v20296 = v2332.totST;
      const v20297 = v2332.totBT;
      const v20298 = v2332.distrNum;
      const v20299 = v2332.saleLocked;
      const v20300 = v2332.docHash;
      const v20301 = v20300[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v20302 = v2332.cv;
      const v20303 = v20302[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v20304 = v20302[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v20305 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20306 = v20305[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20307 = stdlib.cast("UInt", "UInt256", v20306, false, true);
      const v20308 = v2332.ctcMan;
      return;
      
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc13, ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16, ctc3, ctc3]);
  const ctc18 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc15,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc17,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc21 = stdlib.T_Tuple([ctc11]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc16]);
  const ctc27 = stdlib.T_Data({
    aST0_318: ctc22,
    addCoopId0_318: ctc23,
    addWL0_318: ctc21,
    approveSwap0_318: ctc21,
    cBT0_318: ctc24,
    cCM0_318: ctc21,
    cancelSwap0_318: ctc24,
    claimSwapProceeds0_318: ctc24,
    completeSwap0_318: ctc21,
    dBT0_318: ctc25,
    docHash0_318: ctc26,
    initSwap0_318: ctc19,
    optIn0_318: ctc24,
    remWL0_318: ctc21
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
  
  const map5_ctc = ctc5;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc7;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc9;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc9;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2616 = ctc.selfAddress();
  const v2618 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:294:13:application call to [unknown function] (defined at: ./index.rsh:294:13:function exp)', 'at ./index.rsh:80:33:application call to "runremWL0_318" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v2622 = stdlib.addressEq(v2616, v2312);
  const v2624 = stdlib.addressEq(v2616, v2409);
  const v2625 = v2622 ? true : v2624;
  stdlib.assert(v2625, {
    at: './index.rsh:295:23:application',
    fs: ['at ./index.rsh:294:13:application call to [unknown function] (defined at: ./index.rsh:294:18:function exp)', 'at ./index.rsh:294:13:application call to [unknown function] (defined at: ./index.rsh:294:13:function exp)', 'at ./index.rsh:80:33:application call to "runremWL0_318" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v2629 = ['remWL0_318', v2618];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2312, v2316, v2332, v2335, v2371, v2372, v2373, v2375, v2396, v2398, v2401, v2403, v2405, v2406, v2407, v2409, v2629],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc27],
    pay: [stdlib.checkedBigNumberify('./index.rsh:299:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:299:26:decimal', stdlib.UInt_max, '0'), v2316]]],
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
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
      
      switch (v2907[0]) {
        case 'aST0_318': {
          const v2910 = v2907[1];
          
          break;
          }
        case 'addCoopId0_318': {
          const v3441 = v2907[1];
          
          break;
          }
        case 'addWL0_318': {
          const v3972 = v2907[1];
          
          break;
          }
        case 'approveSwap0_318': {
          const v4503 = v2907[1];
          
          break;
          }
        case 'cBT0_318': {
          const v5034 = v2907[1];
          
          break;
          }
        case 'cCM0_318': {
          const v5565 = v2907[1];
          
          break;
          }
        case 'cancelSwap0_318': {
          const v6096 = v2907[1];
          
          break;
          }
        case 'claimSwapProceeds0_318': {
          const v6627 = v2907[1];
          
          break;
          }
        case 'completeSwap0_318': {
          const v7158 = v2907[1];
          
          break;
          }
        case 'dBT0_318': {
          const v7689 = v2907[1];
          
          break;
          }
        case 'docHash0_318': {
          const v8220 = v2907[1];
          
          break;
          }
        case 'initSwap0_318': {
          const v8751 = v2907[1];
          
          break;
          }
        case 'optIn0_318': {
          const v9282 = v2907[1];
          
          break;
          }
        case 'remWL0_318': {
          const v9813 = v2907[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          ;
          const v10331 = v9813[stdlib.checkedBigNumberify('./index.rsh:291:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v10331, undefined /* Nothing */);
          const v10337 = true;
          const v10338 = await txn1.getOutput('remWL', 'v10337', ctc8, v10337);
          
          const v20741 = v2332;
          const v20743 = v2335;
          const v20744 = v2332.totST;
          const v20745 = v2332.totBT;
          const v20746 = v2332.distrNum;
          const v20747 = v2332.saleLocked;
          const v20748 = v2332.docHash;
          const v20749 = v20748[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20750 = v2332.cv;
          const v20751 = v20750[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20752 = v20750[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20753 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20754 = v20753[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20755 = stdlib.cast("UInt", "UInt256", v20754, false, true);
          const v20756 = v2332.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc27],
    waitIfNotPresent: false
    }));
  const {data: [v2907], secs: v2909, time: v2908, didSend: v1453, from: v2906 } = txn1;
  switch (v2907[0]) {
    case 'aST0_318': {
      const v2910 = v2907[1];
      return;
      break;
      }
    case 'addCoopId0_318': {
      const v3441 = v2907[1];
      return;
      break;
      }
    case 'addWL0_318': {
      const v3972 = v2907[1];
      return;
      break;
      }
    case 'approveSwap0_318': {
      const v4503 = v2907[1];
      return;
      break;
      }
    case 'cBT0_318': {
      const v5034 = v2907[1];
      return;
      break;
      }
    case 'cCM0_318': {
      const v5565 = v2907[1];
      return;
      break;
      }
    case 'cancelSwap0_318': {
      const v6096 = v2907[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_318': {
      const v6627 = v2907[1];
      return;
      break;
      }
    case 'completeSwap0_318': {
      const v7158 = v2907[1];
      return;
      break;
      }
    case 'dBT0_318': {
      const v7689 = v2907[1];
      return;
      break;
      }
    case 'docHash0_318': {
      const v8220 = v2907[1];
      return;
      break;
      }
    case 'initSwap0_318': {
      const v8751 = v2907[1];
      return;
      break;
      }
    case 'optIn0_318': {
      const v9282 = v2907[1];
      return;
      break;
      }
    case 'remWL0_318': {
      const v9813 = v2907[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v10331 = v9813[stdlib.checkedBigNumberify('./index.rsh:291:13:spread', stdlib.UInt_max, '0')];
      const v10332 = stdlib.addressEq(v2906, v2312);
      const v10334 = stdlib.addressEq(v2906, v2409);
      const v10335 = v10332 ? true : v10334;
      stdlib.assert(v10335, {
        at: './index.rsh:302:24:application',
        fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map9, v10331, undefined /* Nothing */);
      const v10337 = true;
      const v10338 = await txn1.getOutput('remWL', 'v10337', ctc8, v10337);
      if (v1453) {
        stdlib.protect(ctc0, await interact.out(v9813, v10338), {
          at: './index.rsh:292:13:application',
          fs: ['at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:13:function exp)', 'at ./index.rsh:305:20:application call to "res" (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v20741 = v2332;
      const v20743 = v2335;
      const v20744 = v2332.totST;
      const v20745 = v2332.totBT;
      const v20746 = v2332.distrNum;
      const v20747 = v2332.saleLocked;
      const v20748 = v2332.docHash;
      const v20749 = v20748[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v20750 = v2332.cv;
      const v20751 = v20750[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v20752 = v20750[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v20753 = v2335[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20754 = v20753[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20755 = stdlib.cast("UInt", "UInt256", v20754, false, true);
      const v20756 = v2332.ctcMan;
      return;
      
      break;
      }
    }
  
  
  };
export async function aST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _aST3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function addCoopId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addCoopId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addCoopId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _addCoopId3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function addWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _addWL3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function approveSwap(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approveSwap expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approveSwap expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _approveSwap3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function cBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _cBT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function cCM(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cCM expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cCM expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _cCM3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function cancelSwap(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cancelSwap expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cancelSwap expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _cancelSwap3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimSwapProceeds(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimSwapProceeds expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimSwapProceeds expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _claimSwapProceeds3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function completeSwap(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for completeSwap expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for completeSwap expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _completeSwap3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function dBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for dBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for dBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _dBT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function docHash(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for docHash expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for docHash expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _docHash3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function initSwap(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for initSwap expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for initSwap expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _initSwap3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _optIn3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function remWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for remWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for remWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _remWL3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `approveSwap(address)byte`, `cBT()uint256`, `cCM(address)byte`, `cancelSwap()byte`, `claimSwapProceeds()byte`, `completeSwap(address)byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `initSwap(uint64,uint64,byte)byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSwap(address)(uint64,uint64,byte[5],uint64,byte)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`],
    sigs: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `approveSwap(address)byte`, `cBT()uint256`, `cCM(address)byte`, `cancelSwap()byte`, `claimSTBT(address)(uint256,uint256)`, `claimSwapProceeds()byte`, `completeSwap(address)byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `initSwap(uint64,uint64,byte)byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSwap(address)(uint64,uint64,byte[5],uint64,byte)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`]
    },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 2,
  LocalNumUint: 0,
  appApproval: `ByA2AAEDIAgYQARgEQYQAqECBckBvK3Hqwjg5cOwDOO5zasO7PeX8Q6fk4HRD9iOmeAOsILfsAyamI65DJwF3dHhmAnugq6fCqG32tcKggOiA8ID1J2TzAjx4ZPhCMn8mLwF/eappQfdlpaDCIrSwpsIvAXr9o37BZec/dQGnPiDiALY2/yZA/mEipEF2wSXxMGvAb2x4dkB////////////ASjJAvECBw2BAn8mCwEBAQABAwECAQQBBQAFLS0tLS0BByCf0CYEl4tw6mkMuSyiIXqYTjqXWt+37US2HyWYEUp9PyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASI1ADEYQRFeJwZkSSJbNQFJIQRbNQIhC1s1CDEZIxJBABwxACEPr0sBKUsCVwB/ZksBKEsCV39KZkhIQhERNhoAF0lBBDoiNQQjNQZJIRAMQAJDSSERDEABM0khEgxAAHNJIRMMQAAxSSEUDEAAFCEUEkQ2GgE1/yo0/1AhBq9QQgRyIRMSRDYaATX/gAEINP9QIQavUEIEXEkhFQxAABYhFRJENhoBNf+AAQ00/1AhBq9QQgQ/IRISRDYaATYaAlA2GgNQNf+AAQs0/1CBT69QQgQhSSEWDEAAXkkhFwxAAC4hFxJENAEkEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDIRglWDQDVyAIUDUHQhBOIRYSRDQBJBJEKWQoZFArZFAqZFAnBGRQJwVkUEk1A4HiAyNYNQdCECUhERJENAEkEkQ2GgE1/zIDNP+IEDpXQiFJNf5XASA0/iJVTTIDNP+IECVXYyFJNf5XASA0/iJVTVAyAzT/iBAPV4QhSTX+VwEgNP4iVU1QNQdCD9FJIRkMQAB4SSEaDEAAUkkhGwxAADYhGxJENAEkEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDIRwlWDQDIR0lWFA0AyEeJVhQNQdCD4YhGhJEJwY1/4ABBjT/UCEIr1BCAwghGRJENAEkEkQ2GgGID4xXyAEiVSMSFlEHCDUHQg9SSSEfDEAAb0khIAxAAD4hIBJENAEkEkQ2GgE1/zIDNP+ID1lXACFJNf5XASA0/iJVTTIDNP+ID0RXISFJNf5XASA0/iJVTVA1B0IPBiEfEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQOB4wOBcFg1B0IO3CEQEkQ2GgE1/ys0/1AhBq9QQgJfSSEhDEAAyUkhIgxAAGZJISMMQAAxSSEkDEAAFiEkEkQ2GgE1/4ABCTT/UCEGr1BCAi0hIxJENhoBNf8oNP9QgTyvUEICGSEiEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQNXACA0AyElJVhQNQdCDlRJISYMQABDSSEnDEAAKCEnEkQ0ASQSRCI2GgGIDmBXxgJJNf9XAQEXNP8iVU0WUQcINQdCDh4hJhJEJwY1/ycINP9QIQivUEIBoSEhEkQ2GgE1/4ABCjT/UEIBj0khKAxAAGpJISkMQABOSSEqDEAAFSEqEkQnBjX/gAEMNP9QIQivUEIBZSEpEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQMhKyEHWDQDgd8EgSRYUDUHQg2cISgSRDYaATX/JwU0/1AhBq9QQgEeSSEsDEAAhkkhLQxAAGshLRJENAEkEkQ2GgE1/yEFrzT/iA2NV6UZSTX9VwEYNP0iVU1JNf5XAAg0/lcICFAnBzT/iA1sV74GSTX9VwEFNP0iVU1QNP5XEAhQIjT/iA1RV8QCSTX9VwEBFzT9IlVNFlEHCFA1B0INDiEsEkQnBjX/JwQ0/1AhCK9QQgCRgfX635IBEkQ2GgE2GgJQNhoDUDX/KTT/UEIAdTYaAhc1BDYaAzYaARdJIQwMQAopSSQMQABaJBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQK2RQKmRQJwRkUCcFZFBJNQNXACA1/4AEp2XEtLAyBiEuD0Q0/zEAEkQ0/zQDJVs0AyEvITBYMgY0AyExIQlYQgsuSCQ0ARJENARJIhJMNAISEUQpZChkUCtkUCpkUCcEZFAnBWRQSTUDSUpKSklXACA1/yVbNf4hLyEwWDX9ITEhCVg1/CEcJVg1+4HTBFs1+oGDBSEJWDX5gZQFWzX4ISUlWDX3STUFNfaABOO40ZU09lCwMgYhLgxENPYiVUkhMgxABSxJgQoMQAH4SYEMDEAAlUkhMwxAAFAhMxJENPZXASA19TEANP8SMQA09xIRRDT1SYgL3ylcyEsBKUsCVwB/ZksBKEsCV39KZkhIgAkAAAAAAAAoYQGwKDUHNP80/jT9MgY0/EIKRkgxADEAiAukgAIBAVzGSwEpSwJXAH9mSwEoSwJXf0pmSEiACQAAAAAAACZBAbAoNQc0/zT+NP0yBjT8QgoISYELDEABEkg09lcBETX1NPUiWzX0NPUhBFs18zT1VxABF0k18jEANP8SMQA09xIREDTyFBFEMQCICzNXyAEiVSMSRDT0Ig1ENPMiDUQnB0k18TEAiAsXV74GSTXvVwEFNO8iVU0BSTXwNPEBEjTwJwkSEUQxADEAiArzgAYBaW5pdGRcvksBKUsCVwB/ZksBKEsCV39KZkhIMQAxAIgKzig08hZRBwhQXMRLASlLAlcAf2ZLAShLAld/SmZISDEAMQCICqkoIQWvMQCICqBXpRlJNe9XARg07yJVTTT0FlwANPMWXAhQXKVLASlLAlcAf2ZLAShLAld/SmZISIAJAAAAAAAAJCQBsCg1BzT/NP40/TIGNPxCCO9INPZXAWA19TT6IhJEMQA0/xIxADT3EhFEgAkAAAAAAAAh4AGwKDUHNP80/jT9NPU0+iMIFlAyBhZQXJAyBjT8QgisSSEEDEACjUmBCQxAAHlINPZXASA19TT1STX0SZMhBg5EIQVbNfM08zT+iAoUMQA0/xIxADT3EhFENPMiDUSACQAAAAAAAB+5AbAoNQc0/zT+NP0hNDQDIR0lWDT0oIgKAF00AyEeJVgnCqCICfNccDT0XCAyBjT8NPk0+DTzCBZcAFwAQgglSDT2VwEgNfWxIrIBIQqyEDQIshizNPU19CEFrzT0iAlqV6UZSTXyVwEYNPIiVU1JNfMiW0k18jTzIQRbCzXxNPw0+TT4NPEIFlwAXAA18DTxNP6ICWQxAIgJMFfIASJVIxJEJwc09IgJIVe+Bkk171cBBTTvIlVNAYAgc01Vgx2FHebe9jpoxdjMiJk+rqCTCMGDIdksbrT86gASRCEFrzTyFlA17zEAMQCICN4oMgMxAIgI1lcAIUk17lcBIDTuIlVNNO+giAkRUFwASwEpSwJXAH9mSwEoSwJXf0pmSEgxADEAiAikKDIDMQCICJxXQiFJNe5XASA07iJVTTTvoIgI11BcQksBKUsCVwB/ZksBKEsCV39KZkhINPRJiAhrKDTzSSELWzTxCBZcEFBcpUsBKUsCVwB/ZksBKEsCV39KZkhINPRJiAhBgAYBY29tcGxcvksBKUsCVwB/ZksBKEsCV39KZkhIgAkAAAAAAAAdgwGwKDUHIjT0iAgOV8QCSTXuVwEBFzTuIlVNQQA4NPRJiAf2gAIBAFzESwEpSwJXAH9mSwEoSwJXf0pmSEg0/zT+NP0hDTT7NO+giAgbXTIGNPBCBl409EmIB74oMgM09IgHtlcAIUk17lcBIDTuIlVNNO+hiAfxUFwASwEpSwJXAH9mSwEoSwJXf0pmSEg0/zT+NP0yBjTwQgYYSDEAiAd4V8gBIlUjEkQhBa8xAIgHaFelGUk19FcBGDT0IlVNSTX1IQtbSTX0Ig1ENPg09A9EsSKyATT0shIhB7IQMQCyFDT+shGzMQAxAIgHLCg09SEEr1wQUFylSwEpSwJXAH9mSwEoSwJXf0pmSEiACQAAAAAAABtIAbAoNQc0/zT+NP0yBjT8NPk0+DT0CRZcAFwAQgV/SSQMQAKlSSEODEAA7EkhCgxAALFIMQCIBstXyAEiVSMSRCcHSTX1MQCIBrlXvgZJNfNXAQU08yJVTQFJNfQ09QETNPQnCRMQRDEAMQCIBpUoNPVQXL5LASlLAlcAf2ZLAShLAld/SmZISDEAMQCIBnQoIQWvMQCIBmtXpRlJNfNXARg08yJVTSEEr1wAIQSvXAhQXKVLASlLAlcAf2ZLAShLAld/SmZISIAJAAAAAAAAGRABsCg1BzT/NP40/TIGNPxCBLpINPZXASA19TEANP8SMQA09xIRRIAJAAAAAAAAFtYBsCg1BzT/NP40/TT1XAAyBjT8QgSGSSEHDEABGUgxAIgF31fIASJVIxJENAMhGCVYMgOlRDT7MgOlRDIDMQCIBcBXQiFJNfRXASA09CJVTTX1NPs09adENPUyA6VENPU0/VcgIKOIBeg0+6KIBeJJNfRJkyEGDkQhBVtJNfM0+A5EsSKyATTzshIhB7IQMQCyFDT+shGzMQAxAIgFZCgyAzEAiAVcV2MhSTXyVwEgNPIiVU009KCIBZdQXGNLASlLAlcAf2ZLAShLAld/SmZISDEAMQCIBSooMgMxAIgFIleEIUk18lcBIDTyIlVNJwqgiAVdUFyESwEpSwJXAH9mSwEoSwJXf0pmSEiACAAAAAAAABSjNPRQsDT0NQc0/zT+NP0yBjT8NPk0+DTzCRZcAFwAQgNmSDT2VwEgNfU09TX0MQA0/xIxADT3EhFEJwc09IgErVe+Bkk181cBBTTzIlVNAYAglU8rZRR0whK9qAH3FHdYYnk+yw5QM1ptS9PxYUnUmAkSRDT0SYgEdIAGAWFwcHJ2XL5LASlLAlcAf2ZLAShLAld/SmZISIAJAAAAAAAAEnMBsCg1BzT/NP40/TIGNPxCAtRJIwxAAIRJIQwMQABNSDT2VwEgNfUxADT/EjEANPcSEUQ09UmIBBMoXMhLASlLAlcAf2ZLAShLAld/SmZISIAJAAAAAAAAEEUBsCg1BzT/NP40/TIGNPxCAnpINPZXASQ19YAJAAAAAAAADiQBsCg1BzT/NP40/TQDISshB1g09VBcQDIGNPxCAkpINPZXAWA19TT1VwAgNfQ09VcgIDXzNPVXQCA18jT0NP8SNPQ09xIRRDTyMgOlRDTzSYgDeyhcyEsBKUsCVwB/ZksBKEsCV39KZkhINPNJiANeKDIDNPOIA1ZXACFJNfFXASA08SJVTTTyoIgDkVBcAEsBKUsCVwB/ZksBKEsCV39KZkhINPNJiAMlKDIDNPOIAx1XQiFJNfFXASA08SJVTTTyoIgDWFBcQksBKUsCVwB/ZksBKEsCV39KZkhIgAkAAAAAAAAMAQGwKDUHNP80/jT9IQ00+zTyoIgDIl0yBjT8QgFlIhJEgcCaDIgC2LEisgEhCrIQIrIYgAYHMQAyCRKyHicIsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSklXAIA1/1eAARc1/leBIDX9gaEBWzX8V6kgNfuABJow+R00/1A0/hZRBwhQNP1QNPwWUDT7ULAhCa81+oGgjQaIAmKxIrIBIrISIQeyEDIKshQ0/LIRszEANPw0/TIDUIAoMi4wMWNvb3BlcmF0aXZJZGNvb3BlcmF0aXZJZGNvb3BlcmF0aXZJZFAhBK9QMgNQgHBhamRuYWVpbmF3aW5kaWFlbmd0bmlmcmp3cml0bmlxd3JuaXJlZmluZGluaWdhamRuYWVpbmF3aWRpYWVuZ3RuaWl0bmlxd3JuaXJlZmluZGluaWdmdWFlYmZ1YmF3dXIAAAAAAAAAAAAAAAAAAAAAUDT+FlEHCFAyA1AyA1AhBK9QMgY0+klXABEhBK9cAFwAQgAANf81/jX9Nfw1+zT9IQ0lWDX6NP0hNCVYNfk0/VdwIDX4NP2BgAIjWBc19zT9V5BwSTX2IQhbNfU0/VdAKEk19FcABDXzNPRXBCQ18jT/VwARSTXxIls18CEFrzTwFlA17zT9VwAgNe40+zT8FlA0/VA0/1A0+lA0+VA0+FA09xZRBwhQNPZQNPUWUDTzUDTyUDTxUDTwFlA071A07lApSwFXAH9nKEsBV39/ZytLAVf+f2cqSwGB/QIhNVhnJwRLAYH8AyE1WGcnBUsBgfsEgWFYZ0gkNQEyBjUCQgAtMRkhDhJEsSKyASEKshA0CLIYIQ6yGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBjQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhMjE1EkQiMTYSRCEMMTcSRCI1ASI1AiI1CEL/pUkxGGFAAAVIIQ+viUkpYksBKGJQTEiJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBxJEOBFPAhJEOBISRIlJFSVMCa9MUIk=`,
  appClear: `Bw==`,
  companionInfo: {
    api_completeSwap: 1
    },
  extraPages: 2,
  mapDataKeys: 2,
  mapDataSize: 201,
  stateKeys: 6,
  stateSize: 732,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:433:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:80:33:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Creator": Creator,
  "aST": aST,
  "addCoopId": addCoopId,
  "addWL": addWL,
  "approveSwap": approveSwap,
  "cBT": cBT,
  "cCM": cCM,
  "cancelSwap": cancelSwap,
  "claimSwapProceeds": claimSwapProceeds,
  "completeSwap": completeSwap,
  "dBT": dBT,
  "docHash": docHash,
  "initSwap": initSwap,
  "optIn": optIn,
  "remWL": remWL
  };
export const _APIs = {
  aST: aST,
  addCoopId: addCoopId,
  addWL: addWL,
  approveSwap: approveSwap,
  cBT: cBT,
  cCM: cCM,
  cancelSwap: cancelSwap,
  claimSwapProceeds: claimSwapProceeds,
  completeSwap: completeSwap,
  dBT: dBT,
  docHash: docHash,
  initSwap: initSwap,
  optIn: optIn,
  remWL: remWL
  };
