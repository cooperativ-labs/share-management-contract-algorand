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
  const ctc18 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc17], ['cumProceeds', ctc6], ['shareIssuanceType', ctc9]]);
  const ctc19 = stdlib.T_Null;
  const ctc20 = stdlib.T_Data({
    None: ctc19,
    Some: ctc2
    });
  const ctc21 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async (_v2479 ) => {
          const v2479 = stdlib.protect(ctc0, _v2479, null);
        
        const v2480 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2479), null);
        const v2481 = stdlib.fromSome(v2480, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2482 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2479), null);
        const v2483 = stdlib.fromSome(v2482, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2484 = [v2481, v2483];
        
        return v2484;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _saleLocked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async () => {
        
        
        return v2478;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTD = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async () => {
        
        const v2477 = [v2474, v2475, v2476];
        
        return v2477;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTDRec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async (_v2486 ) => {
          const v2486 = stdlib.protect(ctc0, _v2486, null);
        
        const v2487 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2486), null);
        const v2488 = stdlib.fromSome(v2487, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2489 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2486), null);
        const v2490 = stdlib.fromSome(v2489, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2491 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v2486), null);
        const v2492 = stdlib.fromSome(v2491, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2493 = [v2488, v2490, v2492];
        
        return v2493;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vBtBal = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async () => {
        
        const v2511 = [v2510, v2419];
        
        return v2511;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCcCm = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async () => {
        
        const v2513 = [v2415, v2512];
        
        return v2513;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCurrSwap = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async (_v2517 ) => {
          const v2517 = stdlib.protect(ctc0, _v2517, null);
        
        const v2518 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v2517), null);
        const v2520 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2522 = stdlib.fromSome(v2518, v2520);
        const v2523 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v2517), null);
        const v2524 = '-----';
        const v2525 = stdlib.fromSome(v2523, v2524);
        const v2526 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v2517), null);
        const v2527 = stdlib.fromSome(v2526, false);
        const v2528 = v2522[stdlib.checkedBigNumberify('./fullsale.rsh:110:56:array ref', stdlib.UInt_max, '1')];
        const v2529 = v2522[stdlib.checkedBigNumberify('./fullsale.rsh:110:69:array ref', stdlib.UInt_max, '0')];
        const v2530 = v2522[stdlib.checkedBigNumberify('./fullsale.rsh:110:83:array ref', stdlib.UInt_max, '3')];
        const v2531 = v2522[stdlib.checkedBigNumberify('./fullsale.rsh:110:125:array ref', stdlib.UInt_max, '2')];
        const v2532 = {
          cumProceeds: v2531,
          price: v2528,
          qty: v2529,
          shareIssuanceType: v2527,
          sold: v2530,
          status: v2525
          };
        
        return v2532;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vHash = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async () => {
        
        
        return v2499;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async (_v2514 ) => {
          const v2514 = stdlib.protect(ctc0, _v2514, null);
        
        const v2515 = stdlib.protect(map8_ctc, await viewlib.viewMapRef(8, v2514), null);
        const v2516 = stdlib.fromSome(v2515, false);
        
        return v2516;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vcVersion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async () => {
        
        const v2507 = [v2504, v2506];
        
        return v2507;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wlMember = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = svs;
      return (await ((async (_v2495 ) => {
          const v2495 = stdlib.protect(ctc0, _v2495, null);
        
        const v2496 = stdlib.protect(map9_ctc, await viewlib.viewMapRef(9, v2495), null);
        const v2497 = {
          None: 0,
          Some: 1
          }[v2496[0]];
        const v2498 = stdlib.eq(v2497, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2498;}))(...args));
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc20 = stdlib.T_Tuple([ctc13, ctc3]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc23 = stdlib.T_Tuple([ctc22]);
  const ctc24 = stdlib.T_Tuple([ctc3, ctc3, ctc8]);
  const ctc25 = stdlib.T_Data({
    aST0_324: ctc15,
    addCoopId0_324: ctc17,
    addWL0_324: ctc18,
    approveSwap0_324: ctc18,
    cBT0_324: ctc19,
    cCM0_324: ctc18,
    cancelSwap0_324: ctc19,
    claimSwapProceeds0_324: ctc19,
    completeSwap0_324: ctc20,
    dBT0_324: ctc21,
    docHash0_324: ctc23,
    initSwap0_324: ctc24,
    optIn0_324: ctc19,
    remWL0_324: ctc18
    });
  const ctc26 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc27 = stdlib.T_Tuple([ctc26, ctc16]);
  const ctc28 = stdlib.T_Tuple([ctc22, ctc3, ctc3]);
  const ctc29 = stdlib.T_Object({
    ctcMan: ctc13,
    currDistr: ctc1,
    cv: ctc27,
    distrIndex: ctc3,
    distrNum: ctc1,
    docHash: ctc28,
    saleLocked: ctc8,
    totBT: ctc1,
    totST: ctc1,
    wlIndex: ctc3
    });
  const ctc30 = stdlib.T_Array(ctc24, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v2396 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2397 = [v2396];
  const v2403 = 'I have deployed';
  const v2404 = stdlib.protect(ctc14, await interact.getParams(v2403), {
    at: './fullsale.rsh:56:103:application',
    fs: ['at ./fullsale.rsh:55:17:application call to [unknown function] (defined at: ./fullsale.rsh:55:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2405 = v2404.authorizedST;
  const v2406 = v2404.bT;
  const v2407 = v2404.companyName;
  const v2408 = v2404.lockSale;
  const v2409 = v2404.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2407, v2408, v2409, v2406, v2405],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12, ctc8, ctc13, ctc11, ctc1],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:59:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v2416, v2417, v2418, v2419, v2420], secs: v2422, time: v2421, didSend: v42, from: v2415 } = txn1;
      
      const v2423 = v2397[stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0')];
      const v2424 = stdlib.Array_set(v2423, '0', stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0'));
      const v2425 = stdlib.Array_set(v2397, stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0'), v2424);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2419
        });
      ;
      
      const v2429 = '2.02';
      const v2430 = 'cooperativIdcooperativIdcooperativId';
      const v2431 = [v2429, v2430];
      const v2432 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v2433 = [v2432, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2434 = {
        ctcMan: v2418,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v2431,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v2433,
        saleLocked: v2417,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2435 = v2434;
      const v2436 = v2421;
      const v2438 = v2425;
      
      if (await (async () => {
        
        return true;})()) {
        const v2474 = v2435.totST;
        const v2475 = v2435.totBT;
        const v2476 = v2435.distrNum;
        const v2478 = v2435.saleLocked;
        const v2499 = v2435.docHash;
        const v2501 = v2499[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v2503 = v2435.cv;
        const v2504 = v2503[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v2506 = v2503[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v2508 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2509 = v2508[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2510 = stdlib.cast("UInt", "UInt256", v2509, false, true);
        const v2512 = v2435.ctcMan;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2419
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
  const {data: [v2416, v2417, v2418, v2419, v2420], secs: v2422, time: v2421, didSend: v42, from: v2415 } = txn1;
  const v2423 = v2397[stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0')];
  const v2424 = stdlib.Array_set(v2423, '0', stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0'));
  const v2425 = stdlib.Array_set(v2397, stdlib.checkedBigNumberify('./fullsale.rsh:59:13:dot', stdlib.UInt_max, '0'), v2424);
  ;
  ;
  const v2428 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v2428), {
    at: './fullsale.rsh:61:31:application',
    fs: ['at ./fullsale.rsh:61:31:application call to [unknown function] (defined at: ./fullsale.rsh:61:31:function exp)', 'at ./fullsale.rsh:61:31:application call to "liftedInteract" (defined at: ./fullsale.rsh:61:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v2429 = '2.02';
  const v2430 = 'cooperativIdcooperativIdcooperativId';
  const v2431 = [v2429, v2430];
  const v2432 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v2433 = [v2432, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2434 = {
    ctcMan: v2418,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v2431,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v2433,
    saleLocked: v2417,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2435 = v2434;
  let v2436 = v2421;
  let v2438 = v2425;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const v2474 = v2435.totST;
    const v2475 = v2435.totBT;
    const v2476 = v2435.distrNum;
    const v2478 = v2435.saleLocked;
    const v2499 = v2435.docHash;
    const v2501 = v2499[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
    const v2503 = v2435.cv;
    const v2504 = v2503[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
    const v2506 = v2503[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
    const v2508 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2509 = v2508[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2510 = stdlib.cast("UInt", "UInt256", v2509, false, true);
    const v2512 = v2435.ctcMan;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc25],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512],
        evt_cnt: 0,
        funcNum: 3,
        lct: v2436,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./fullsale.rsh:440:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v11141, time: v11140, didSend: v2050, from: v11139 } = txn4;
          
          ;
          const cv2435 = v2435;
          const cv2436 = v11140;
          const cv2438 = v2438;
          
          await (async () => {
            const v2435 = cv2435;
            const v2436 = cv2436;
            const v2438 = cv2438;
            
            if (await (async () => {
              
              return true;})()) {
              const v2474 = v2435.totST;
              const v2475 = v2435.totBT;
              const v2476 = v2435.distrNum;
              const v2478 = v2435.saleLocked;
              const v2499 = v2435.docHash;
              const v2501 = v2499[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v2503 = v2435.cv;
              const v2504 = v2503[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v2506 = v2503[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v2508 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2509 = v2508[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2510 = stdlib.cast("UInt", "UInt256", v2509, false, true);
              const v2512 = v2435.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2419
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
        tys: [ctc13, ctc11, ctc29, ctc30, ctc1, ctc1, ctc1, ctc8, ctc28, ctc3, ctc26, ctc16, ctc24, ctc3, ctc1, ctc13],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v11141, time: v11140, didSend: v2050, from: v11139 } = txn4;
      ;
      const v11142 = stdlib.addressEq(v2415, v11139);
      stdlib.assert(v11142, {
        at: './fullsale.rsh:440:21:dot',
        fs: ['at ./fullsale.rsh:439:40:application call to [unknown function] (defined at: ./fullsale.rsh:439:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv2435 = v2435;
      const cv2436 = v11140;
      const cv2438 = v2438;
      
      v2435 = cv2435;
      v2436 = cv2436;
      v2438 = cv2438;
      
      txn2 = txn4;
      continue;
      }
    else {
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn3;
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3174 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '0')];
          const v3175 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '1')];
          const v3176 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '2')];
          const v3177 = stdlib.addressEq(v3174, v2415);
          const v3179 = stdlib.addressEq(v3174, v2512);
          const v3180 = v3177 ? true : v3179;
          stdlib.assert(v3180, {
            at: './fullsale.rsh:332:24:application',
            fs: ['at ./fullsale.rsh:331:13:application call to [unknown function] (defined at: ./fullsale.rsh:331:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3181 = stdlib.gt256(v3176, stdlib.checkedBigNumberify('./fullsale.rsh:333:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3181, {
            at: './fullsale.rsh:333:24:application',
            fs: ['at ./fullsale.rsh:331:13:application call to [unknown function] (defined at: ./fullsale.rsh:331:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v3175, null);
          const v3183 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3175), null);
          const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3185 = stdlib.safeAdd256(v3184, v3176);
          await stdlib.mapSet(map0, v3175, v3185);
          const v3186 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3175), null);
          const v3187 = stdlib.fromSome(v3186, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3188 = stdlib.safeAdd256(v3187, v3176);
          await stdlib.mapSet(map2, v3175, v3188);
          const v3190 = stdlib.safeAdd256(v2474, v3176);
          const v3191 = true;
          await txn3.getOutput('aST', 'v3191', ctc8, v3191);
          const v3200 = {
            ...v2435, 'totST': v3190};
          const cv2435 = v3200;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3781 = v3612[stdlib.checkedBigNumberify('./fullsale.rsh:356:14:spread', stdlib.UInt_max, '0')];
          const v3784 = [v2504, v3781];
          const v3785 = {
            ...v2435, 'cv': v3784};
          const v3786 = true;
          await txn3.getOutput('addCoopId', 'v3786', ctc8, v3786);
          const cv2435 = v3785;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v4373 = v4191[stdlib.checkedBigNumberify('./fullsale.rsh:284:13:spread', stdlib.UInt_max, '0')];
          const v4374 = stdlib.addressEq(v3029, v2415);
          const v4376 = stdlib.addressEq(v3029, v2512);
          const v4377 = v4374 ? true : v4376;
          stdlib.assert(v4377, {
            at: './fullsale.rsh:295:24:application',
            fs: ['at ./fullsale.rsh:294:13:application call to [unknown function] (defined at: ./fullsale.rsh:294:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v4373, null);
          const v4379 = true;
          await txn3.getOutput('addWL', 'v4379', ctc8, v4379);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v4966 = v4770[stdlib.checkedBigNumberify('./fullsale.rsh:169:13:spread', stdlib.UInt_max, '0')];
          const v4967 = stdlib.addressEq(v3029, v2415);
          const v4969 = stdlib.addressEq(v3029, v2512);
          const v4970 = v4967 ? true : v4969;
          stdlib.assert(v4970, {
            at: './fullsale.rsh:181:24:application',
            fs: ['at ./fullsale.rsh:180:13:application call to [unknown function] (defined at: ./fullsale.rsh:180:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v4971 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v4966), null);
          const v4972 = '-----';
          const v4973 = stdlib.fromSome(v4971, v4972);
          const v4974 = 'initd';
          const v4975 = stdlib.digest([ctc6], [v4973]);
          const v4977 = stdlib.digest([ctc6], [v4974]);
          const v4978 = stdlib.digestEq(v4975, v4977);
          stdlib.assert(v4978, {
            at: './fullsale.rsh:182:24:application',
            fs: ['at ./fullsale.rsh:180:13:application call to [unknown function] (defined at: ./fullsale.rsh:180:13:function exp)'],
            msg: 'you can onlyapprove an unapproved pending/initiated swap',
            who: 'Creator'
            });
          const v4979 = 'apprv';
          await stdlib.mapSet(map6, v4966, v4979);
          const v4985 = true;
          await txn3.getOutput('approveSwap', 'v4985', ctc8, v4985);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5572 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
          const v5573 = {
            None: 0,
            Some: 1
            }[v5572[0]];
          const v5574 = stdlib.eq(v5573, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v5574, {
            at: './fullsale.rsh:408:24:application',
            fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v5578 = stdlib.gt256(v2510, stdlib.checkedBigNumberify('./fullsale.rsh:409:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5578, {
            at: './fullsale.rsh:409:24:application',
            fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v5580 = stdlib.gt256(v2474, stdlib.checkedBigNumberify('./fullsale.rsh:410:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5580, {
            at: './fullsale.rsh:410:24:application',
            fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v5582 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3029), null);
          const v5583 = stdlib.fromSome(v5582, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5584 = stdlib.ge256(v2474, v5583);
          stdlib.assert(v5584, {
            at: './fullsale.rsh:411:24:application',
            fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v5587 = stdlib.gt256(v5583, stdlib.checkedBigNumberify('./fullsale.rsh:412:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5587, {
            at: './fullsale.rsh:412:24:application',
            fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v5590 = v2435.currDistr;
          const v5591 = stdlib.safeMul256(v5583, v5590);
          const v5593 = stdlib.safeDiv256(v5591, v2474);
          const v5594 = stdlib.cast("UInt256", "UInt", v5593, false, true);
          const v5597 = stdlib.le(v5594, v2509);
          stdlib.assert(v5597, {
            at: './fullsale.rsh:414:24:application',
            fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v5604 = stdlib.sub(v2509, v5594);
          const v5606 = stdlib.Array_set(v2508, '0', v5604);
          const v5607 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:415:50:application', stdlib.UInt_max, '0'), v5606);
          ;
          const v5608 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3029), null);
          const v5609 = stdlib.fromSome(v5608, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5610 = stdlib.safeAdd256(v5609, v5593);
          await stdlib.mapSet(map3, v3029, v5610);
          const v5611 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3029), null);
          const v5612 = stdlib.fromSome(v5611, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5613 = stdlib.safeAdd256(v5612, stdlib.checkedBigNumberify('./fullsale.rsh:417:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map4, v3029, v5613);
          await txn3.getOutput('cBT', 'v5593', ctc1, v5593);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v5607;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6199 = v5928[stdlib.checkedBigNumberify('./fullsale.rsh:422:13:spread', stdlib.UInt_max, '0')];
          const v6200 = stdlib.addressEq(v3029, v2415);
          const v6202 = stdlib.addressEq(v3029, v2512);
          const v6203 = v6200 ? true : v6202;
          stdlib.assert(v6203, {
            at: './fullsale.rsh:433:24:application',
            fs: ['at ./fullsale.rsh:432:13:application call to [unknown function] (defined at: ./fullsale.rsh:432:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v6204 = true;
          await txn3.getOutput('cCM', 'v6204', ctc8, v6204);
          const v6211 = {
            ...v2435, 'ctcMan': v6199};
          const cv2435 = v6211;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6792 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
          const v6793 = {
            None: 0,
            Some: 1
            }[v6792[0]];
          const v6794 = stdlib.eq(v6793, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v6794, {
            at: './fullsale.rsh:156:24:application',
            fs: ['at ./fullsale.rsh:155:13:application call to [unknown function] (defined at: ./fullsale.rsh:155:13:function exp)'],
            msg: 'you must be a whitelist member',
            who: 'Creator'
            });
          const v6795 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3029), null);
          const v6796 = '-----';
          const v6797 = stdlib.fromSome(v6795, v6796);
          const v6799 = stdlib.digest([ctc6], [v6797]);
          const v6801 = stdlib.digest([ctc6], [v6796]);
          const v6802 = stdlib.digestEq(v6799, v6801);
          const v6807 = 'compl';
          const v6810 = stdlib.digest([ctc6], [v6807]);
          const v6811 = stdlib.digestEq(v6799, v6810);
          const v6812 = v6811 ? false : true;
          const v6813 = v6802 ? false : v6812;
          stdlib.assert(v6813, {
            at: './fullsale.rsh:157:24:application',
            fs: ['at ./fullsale.rsh:155:13:application call to [unknown function] (defined at: ./fullsale.rsh:155:13:function exp)'],
            msg: 'there must be a pending swap',
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v3029, v6796);
          const v6815 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3029), null);
          const v6817 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6819 = stdlib.fromSome(v6815, v6817);
          const v6820 = stdlib.Array_set(v6819, stdlib.checkedBigNumberify('./fullsale.rsh:160:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./fullsale.rsh:160:41:decimal', stdlib.UInt_max, '0'));
          const v6821 = stdlib.Array_set(v6820, stdlib.checkedBigNumberify('./fullsale.rsh:161:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./fullsale.rsh:161:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3029, v6821);
          const v6823 = true;
          await txn3.getOutput('cancelSwap', 'v6823', ctc8, v6823);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v7409 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
          const v7410 = {
            None: 0,
            Some: 1
            }[v7409[0]];
          const v7411 = stdlib.eq(v7410, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v7411, {
            at: './fullsale.rsh:251:24:application',
            fs: ['at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
            msg: 'you must be a whitelist member to claim swap proceeds',
            who: 'Creator'
            });
          const v7412 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3029), null);
          const v7414 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7416 = stdlib.fromSome(v7412, v7414);
          const v7417 = v7416[stdlib.checkedBigNumberify('./fullsale.rsh:252:60:array ref', stdlib.UInt_max, '2')];
          const v7418 = stdlib.gt(v7417, stdlib.checkedBigNumberify('./fullsale.rsh:252:66:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v7418, {
            at: './fullsale.rsh:252:24:application',
            fs: ['at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
            msg: 'you must have swap proceeds to claim',
            who: 'Creator'
            });
          const v7427 = stdlib.ge(v2509, v7417);
          stdlib.assert(v7427, {
            at: './fullsale.rsh:254:24:application',
            fs: ['at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v7434 = stdlib.sub(v2509, v7417);
          const v7436 = stdlib.Array_set(v2508, '0', v7434);
          const v7437 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:255:47:application', stdlib.UInt_max, '0'), v7436);
          ;
          const v7438 = stdlib.Array_set(v7416, stdlib.checkedBigNumberify('./fullsale.rsh:256:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./fullsale.rsh:256:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3029, v7438);
          const v7439 = true;
          await txn3.getOutput('claimSwapProceeds', 'v7439', ctc8, v7439);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v7437;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          undefined /* setApiDetails */;
          const v7733 = v7665[stdlib.checkedBigNumberify('./fullsale.rsh:190:13:spread', stdlib.UInt_max, '0')];
          const v7734 = v7665[stdlib.checkedBigNumberify('./fullsale.rsh:190:13:spread', stdlib.UInt_max, '1')];
          const v7735 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7733), null);
          const v7737 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7739 = stdlib.fromSome(v7735, v7737);
          const v7740 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:201:79:array ref', stdlib.UInt_max, '1')];
          const v7741 = stdlib.safeMul(v7734, v7740);
          ;
          const v7801 = stdlib.add(v2509, v7741);
          const v7803 = stdlib.Array_set(v2508, '0', v7801);
          const v7804 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:80:33:dot', stdlib.UInt_max, '0'), v7803);
          ;
          const v8027 = stdlib.gt(v7734, stdlib.checkedBigNumberify('./fullsale.rsh:204:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8027, {
            at: './fullsale.rsh:204:24:application',
            fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
            msg: 'you must buy at least 1 share token',
            who: 'Creator'
            });
          const v8033 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:205:69:array ref', stdlib.UInt_max, '0')];
          const v8034 = stdlib.le(v7734, v8033);
          stdlib.assert(v8034, {
            at: './fullsale.rsh:205:24:application',
            fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
            msg: 'you cannot buy more than the quantity offered for sale',
            who: 'Creator'
            });
          const v8035 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
          const v8036 = {
            None: 0,
            Some: 1
            }[v8035[0]];
          const v8037 = stdlib.eq(v8036, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v8037, {
            at: './fullsale.rsh:206:24:application',
            fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
            msg: 'you must be a whitelist member to complete or buy swap',
            who: 'Creator'
            });
          const v8038 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7733), null);
          const v8039 = '-----';
          const v8040 = stdlib.fromSome(v8038, v8039);
          const v8041 = 'apprv';
          const v8042 = stdlib.digest([ctc6], [v8040]);
          const v8044 = stdlib.digest([ctc6], [v8041]);
          const v8045 = stdlib.digestEq(v8042, v8044);
          const v8049 = 'partl';
          const v8052 = stdlib.digest([ctc6], [v8049]);
          const v8053 = stdlib.digestEq(v8042, v8052);
          const v8054 = v8045 ? true : v8053;
          stdlib.assert(v8054, {
            at: './fullsale.rsh:207:24:application',
            fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
            msg: 'you can only buy an approved or partially completed swap',
            who: 'Creator'
            });
          const v8060 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3029), null);
          const v8061 = stdlib.fromSome(v8060, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8062 = stdlib.cast("UInt", "UInt256", v7734, false, true);
          const v8063 = stdlib.safeAdd256(v8061, v8062);
          await stdlib.mapSet(map0, v3029, v8063);
          const v8064 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3029), null);
          const v8065 = stdlib.fromSome(v8064, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8067 = stdlib.safeAdd256(v8065, v8062);
          await stdlib.mapSet(map2, v3029, v8067);
          const v8068 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:214:44:array ref', stdlib.UInt_max, '2')];
          const v8071 = stdlib.safeAdd(v8068, v7741);
          const v8072 = stdlib.Array_set(v7739, stdlib.checkedBigNumberify('./fullsale.rsh:214:38:decimal', stdlib.UInt_max, '2'), v8071);
          const v8073 = v8072[stdlib.checkedBigNumberify('./fullsale.rsh:215:46:array ref', stdlib.UInt_max, '3')];
          const v8074 = stdlib.safeAdd(v8073, v7734);
          const v8075 = stdlib.Array_set(v8072, stdlib.checkedBigNumberify('./fullsale.rsh:215:39:decimal', stdlib.UInt_max, '3'), v8074);
          const v8076 = v8075[stdlib.checkedBigNumberify('./fullsale.rsh:216:46:array ref', stdlib.UInt_max, '0')];
          const v8077 = stdlib.safeSub(v8076, v7734);
          const v8078 = stdlib.Array_set(v8075, stdlib.checkedBigNumberify('./fullsale.rsh:216:39:decimal', stdlib.UInt_max, '0'), v8077);
          await stdlib.mapSet(map5, v7733, v8078);
          const v8079 = v8078[stdlib.checkedBigNumberify('./fullsale.rsh:219:25:array ref', stdlib.UInt_max, '0')];
          const v8080 = stdlib.eq(v8079, stdlib.checkedBigNumberify('./fullsale.rsh:219:32:decimal', stdlib.UInt_max, '0'));
          if (v8080) {
            const v8081 = 'compl';
            await stdlib.mapSet(map6, v7733, v8081);
            const v8082 = true;
            await txn3.getOutput('completeSwap', 'v8082', ctc8, v8082);
            const v8090 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7733), null);
            const v8091 = stdlib.fromSome(v8090, false);
            if (v8091) {
              const v8100 = stdlib.safeAdd256(v2474, v8062);
              const v8101 = {
                ...v2435, 'totST': v8100};
              await stdlib.mapSet(map7, v7733, false);
              const cv2435 = v8101;
              const cv2436 = v3031;
              const cv2438 = v7804;
              
              v2435 = cv2435;
              v2436 = cv2436;
              v2438 = cv2438;
              
              txn2 = txn3;
              continue;}
            else {
              const v8093 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7733), null);
              const v8094 = stdlib.fromSome(v8093, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8096 = stdlib.safeSub256(v8094, v8062);
              await stdlib.mapSet(map0, v7733, v8096);
              const cv2435 = v2435;
              const cv2436 = v3031;
              const cv2438 = v7804;
              
              v2435 = cv2435;
              v2436 = cv2436;
              v2438 = cv2438;
              
              txn2 = txn3;
              continue;}}
          else {
            await stdlib.mapSet(map6, v7733, v8049);
            const v8104 = true;
            await txn3.getOutput('completeSwap', 'v8104', ctc8, v8104);
            const v8112 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7733), null);
            const v8113 = stdlib.fromSome(v8112, false);
            if (v8113) {
              const v8122 = stdlib.safeAdd256(v2474, v8062);
              const v8123 = {
                ...v2435, 'totST': v8122};
              await stdlib.mapSet(map7, v7733, false);
              const cv2435 = v8123;
              const cv2436 = v3031;
              const cv2438 = v7804;
              
              v2435 = cv2435;
              v2436 = cv2436;
              v2438 = cv2438;
              
              txn2 = txn3;
              continue;}
            else {
              const v8115 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7733), null);
              const v8116 = stdlib.fromSome(v8115, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8118 = stdlib.safeSub256(v8116, v8062);
              await stdlib.mapSet(map0, v7733, v8118);
              const cv2435 = v2435;
              const cv2436 = v3031;
              const cv2438 = v7804;
              
              v2435 = cv2435;
              v2436 = cv2436;
              v2438 = cv2438;
              
              txn2 = txn3;
              continue;}}
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          undefined /* setApiDetails */;
          const v8328 = v8244[stdlib.checkedBigNumberify('./fullsale.rsh:370:13:spread', stdlib.UInt_max, '0')];
          const v8329 = stdlib.cast("UInt256", "UInt", v8328, false, true);
          ;
          const v8380 = stdlib.add(v2509, v8329);
          const v8382 = stdlib.Array_set(v2508, '0', v8380);
          const v8383 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:80:33:dot', stdlib.UInt_max, '0'), v8382);
          ;
          const v8706 = stdlib.addressEq(v3029, v2415);
          const v8708 = stdlib.addressEq(v3029, v2512);
          const v8709 = v8706 ? true : v8708;
          stdlib.assert(v8709, {
            at: './fullsale.rsh:381:24:application',
            fs: ['at ./fullsale.rsh:380:13:application call to [unknown function] (defined at: ./fullsale.rsh:380:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v8711 = stdlib.gt(v8329, stdlib.checkedBigNumberify('./fullsale.rsh:382:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8711, {
            at: './fullsale.rsh:382:24:application',
            fs: ['at ./fullsale.rsh:380:13:application call to [unknown function] (defined at: ./fullsale.rsh:380:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v8713 = stdlib.safeAdd256(v2475, v8328);
          const v8714 = {
            ...v2435, 'totBT': v8713};
          const v8716 = stdlib.safeAdd256(v2476, stdlib.checkedBigNumberify('./fullsale.rsh:385:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8717 = {
            ...v8714, 'distrNum': v8716};
          const v8718 = {
            ...v8717, 'currDistr': v8328};
          const v8719 = true;
          await txn3.getOutput('dBT', 'v8719', ctc8, v8719);
          const cv2435 = v8718;
          const cv2436 = v3031;
          const cv2438 = v8383;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v9306 = v8823[stdlib.checkedBigNumberify('./fullsale.rsh:263:13:spread', stdlib.UInt_max, '0')];
          const v9309 = stdlib.eq(v2501, stdlib.checkedBigNumberify('./fullsale.rsh:277:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9309, {
            at: './fullsale.rsh:277:24:application',
            fs: ['at ./fullsale.rsh:275:13:application call to [unknown function] (defined at: ./fullsale.rsh:275:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v9310 = stdlib.addressEq(v3029, v2415);
          const v9312 = stdlib.addressEq(v3029, v2512);
          const v9313 = v9310 ? true : v9312;
          stdlib.assert(v9313, {
            at: './fullsale.rsh:278:24:application',
            fs: ['at ./fullsale.rsh:275:13:application call to [unknown function] (defined at: ./fullsale.rsh:275:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v9314 = stdlib.safeAdd(v2501, stdlib.checkedBigNumberify('./fullsale.rsh:279:76:decimal', stdlib.UInt_max, '1'));
          const v9316 = [v9306, v9314, v3031];
          const v9317 = {
            ...v2435, 'docHash': v9316};
          const v9318 = true;
          await txn3.getOutput('docHash', 'v9318', ctc8, v9318);
          const cv2435 = v9317;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v9905 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v9906 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v9907 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '2')];
          const v9909 = stdlib.addressEq(v3029, v2415);
          const v9911 = stdlib.addressEq(v3029, v2512);
          const v9912 = v9909 ? true : v9911;
          const v9913 = v9907 ? v9912 : false;
          const v9914 = v9907 ? false : true;
          const v9915 = v9913 ? true : v9914;
          stdlib.assert(v9915, {
            at: './fullsale.rsh:127:24:application',
            fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
            msg: 'if you are not creator or manager, the swap cannot be share issuance type',
            who: 'Creator'
            });
          const v9916 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
          const v9917 = {
            None: 0,
            Some: 1
            }[v9916[0]];
          const v9918 = stdlib.eq(v9917, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v9920 = v9918 ? v9914 : false;
          const v9922 = v9920 ? true : v9907;
          stdlib.assert(v9922, {
            at: './fullsale.rsh:128:24:application',
            fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
            msg: 'you must be a whitelist member',
            who: 'Creator'
            });
          const v9923 = stdlib.gt(v9905, stdlib.checkedBigNumberify('./fullsale.rsh:129:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9923, {
            at: './fullsale.rsh:129:24:application',
            fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v9924 = stdlib.gt(v9906, stdlib.checkedBigNumberify('./fullsale.rsh:130:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9924, {
            at: './fullsale.rsh:130:24:application',
            fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v9925 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3029), null);
          const v9926 = '-----';
          const v9927 = stdlib.fromSome(v9925, v9926);
          const v9929 = stdlib.digest([ctc6], [v9927]);
          const v9931 = stdlib.digest([ctc6], [v9926]);
          const v9932 = stdlib.digestEq(v9929, v9931);
          const v9936 = 'compl';
          const v9939 = stdlib.digest([ctc6], [v9936]);
          const v9940 = stdlib.digestEq(v9929, v9939);
          const v9941 = v9932 ? true : v9940;
          stdlib.assert(v9941, {
            at: './fullsale.rsh:131:24:application',
            fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
            msg: 'there must be no pending swap',
            who: 'Creator'
            });
          const v9942 = 'initd';
          await stdlib.mapSet(map6, v3029, v9942);
          await stdlib.mapSet(map7, v3029, v9907);
          const v9943 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3029), null);
          const v9945 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v9947 = stdlib.fromSome(v9943, v9945);
          const v9948 = stdlib.Array_set(v9947, stdlib.checkedBigNumberify('./fullsale.rsh:135:38:decimal', stdlib.UInt_max, '0'), v9905);
          const v9949 = stdlib.Array_set(v9948, stdlib.checkedBigNumberify('./fullsale.rsh:136:39:decimal', stdlib.UInt_max, '1'), v9906);
          const v9950 = stdlib.Array_set(v9949, stdlib.checkedBigNumberify('./fullsale.rsh:137:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./fullsale.rsh:137:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3029, v9950);
          const v9951 = true;
          await txn3.getOutput('initSwap', 'v9951', ctc8, v9951);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          await stdlib.mapSet(map8, v3029, true);
          const v10540 = true;
          await txn3.getOutput('optIn', 'v10540', ctc8, v10540);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v11126 = v10560[stdlib.checkedBigNumberify('./fullsale.rsh:302:13:spread', stdlib.UInt_max, '0')];
          const v11127 = stdlib.addressEq(v3029, v2415);
          const v11129 = stdlib.addressEq(v3029, v2512);
          const v11130 = v11127 ? true : v11129;
          stdlib.assert(v11130, {
            at: './fullsale.rsh:313:24:application',
            fs: ['at ./fullsale.rsh:312:13:application call to [unknown function] (defined at: ./fullsale.rsh:312:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v11126, undefined /* Nothing */);
          const v11132 = true;
          await txn3.getOutput('remWL', 'v11132', ctc8, v11132);
          const cv2435 = v2435;
          const cv2436 = v3031;
          const cv2438 = v2438;
          
          v2435 = cv2435;
          v2436 = cv2436;
          v2438 = cv2438;
          
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc21,
    addCoopId0_324: ctc22,
    addWL0_324: ctc23,
    approveSwap0_324: ctc23,
    cBT0_324: ctc24,
    cCM0_324: ctc23,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc23
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2761 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:323:13:application call to [unknown function] (defined at: ./fullsale.rsh:323:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runaST0_324" (defined at: ./fullsale.rsh:320:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v2762 = v2761[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2764 = v2761[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2769 = stdlib.addressEq(v2762, v2415);
  const v2771 = stdlib.addressEq(v2762, v2512);
  const v2772 = v2769 ? true : v2771;
  stdlib.assert(v2772, {
    at: './fullsale.rsh:324:23:application',
    fs: ['at ./fullsale.rsh:323:13:application call to [unknown function] (defined at: ./fullsale.rsh:323:29:function exp)', 'at ./fullsale.rsh:323:13:application call to [unknown function] (defined at: ./fullsale.rsh:323:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runaST0_324" (defined at: ./fullsale.rsh:320:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v2773 = stdlib.gt256(v2764, stdlib.checkedBigNumberify('./fullsale.rsh:325:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2773, {
    at: './fullsale.rsh:325:23:application',
    fs: ['at ./fullsale.rsh:323:13:application call to [unknown function] (defined at: ./fullsale.rsh:323:29:function exp)', 'at ./fullsale.rsh:323:13:application call to [unknown function] (defined at: ./fullsale.rsh:323:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runaST0_324" (defined at: ./fullsale.rsh:320:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v2779 = ['aST0_324', v2761];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2779],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:329:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:329:34:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          ;
          const v3175 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '1')];
          const v3176 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 9, v3175, null);
          const v3183 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3175), null);
          const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3185 = stdlib.safeAdd256(v3184, v3176);
          await stdlib.simMapSet(sim_r, 0, v3175, v3185);
          const v3186 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3175), null);
          const v3187 = stdlib.fromSome(v3186, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3188 = stdlib.safeAdd256(v3187, v3176);
          await stdlib.simMapSet(sim_r, 2, v3175, v3188);
          const v3190 = stdlib.safeAdd256(v2474, v3176);
          const v3191 = true;
          const v3192 = await txn1.getOutput('aST', 'v3191', ctc8, v3191);
          
          const v3200 = {
            ...v2435, 'totST': v3190};
          const v16105 = v3200;
          const v16107 = v2438;
          const v16108 = v3200.totST;
          const v16109 = v3200.totBT;
          const v16110 = v3200.distrNum;
          const v16111 = v3200.saleLocked;
          const v16112 = v3200.docHash;
          const v16113 = v16112[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v16114 = v3200.cv;
          const v16115 = v16114[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v16116 = v16114[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v16117 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16118 = v16117[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16119 = stdlib.cast("UInt", "UInt256", v16118, false, true);
          const v16120 = v3200.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3174 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '0')];
      const v3175 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '1')];
      const v3176 = v3033[stdlib.checkedBigNumberify('./fullsale.rsh:320:13:spread', stdlib.UInt_max, '2')];
      const v3177 = stdlib.addressEq(v3174, v2415);
      const v3179 = stdlib.addressEq(v3174, v2512);
      const v3180 = v3177 ? true : v3179;
      stdlib.assert(v3180, {
        at: './fullsale.rsh:332:24:application',
        fs: ['at ./fullsale.rsh:331:13:application call to [unknown function] (defined at: ./fullsale.rsh:331:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3181 = stdlib.gt256(v3176, stdlib.checkedBigNumberify('./fullsale.rsh:333:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3181, {
        at: './fullsale.rsh:333:24:application',
        fs: ['at ./fullsale.rsh:331:13:application call to [unknown function] (defined at: ./fullsale.rsh:331:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map9, v3175, null);
      const v3183 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3175), null);
      const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3185 = stdlib.safeAdd256(v3184, v3176);
      await stdlib.mapSet(map0, v3175, v3185);
      const v3186 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3175), null);
      const v3187 = stdlib.fromSome(v3186, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3188 = stdlib.safeAdd256(v3187, v3176);
      await stdlib.mapSet(map2, v3175, v3188);
      const v3190 = stdlib.safeAdd256(v2474, v3176);
      const v3191 = true;
      const v3192 = await txn1.getOutput('aST', 'v3191', ctc8, v3191);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v3033, v3192), {
          at: './fullsale.rsh:321:13:application',
          fs: ['at ./fullsale.rsh:321:13:application call to [unknown function] (defined at: ./fullsale.rsh:321:13:function exp)', 'at ./fullsale.rsh:339:20:application call to "res" (defined at: ./fullsale.rsh:331:13:function exp)', 'at ./fullsale.rsh:331:13:application call to [unknown function] (defined at: ./fullsale.rsh:331:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3200 = {
        ...v2435, 'totST': v3190};
      const v16105 = v3200;
      const v16107 = v2438;
      const v16108 = v3200.totST;
      const v16109 = v3200.totBT;
      const v16110 = v3200.distrNum;
      const v16111 = v3200.saleLocked;
      const v16112 = v3200.docHash;
      const v16113 = v16112[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v16114 = v3200.cv;
      const v16115 = v16114[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v16116 = v16114[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v16117 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16118 = v16117[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16119 = stdlib.cast("UInt", "UInt256", v16118, false, true);
      const v16120 = v3200.ctcMan;
      return;
      
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc21,
    addWL0_324: ctc23,
    approveSwap0_324: ctc23,
    cBT0_324: ctc24,
    cCM0_324: ctc23,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc23
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2791 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:359:13:application call to [unknown function] (defined at: ./fullsale.rsh:359:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runaddCoopId0_324" (defined at: ./fullsale.rsh:356:14:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v2798 = ['addCoopId0_324', v2791];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2798],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:362:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:362:27:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          ;
          const v3781 = v3612[stdlib.checkedBigNumberify('./fullsale.rsh:356:14:spread', stdlib.UInt_max, '0')];
          const v3784 = [v2504, v3781];
          const v3785 = {
            ...v2435, 'cv': v3784};
          const v3786 = true;
          const v3787 = await txn1.getOutput('addCoopId', 'v3786', ctc8, v3786);
          
          const v16609 = v3785;
          const v16611 = v2438;
          const v16612 = v3785.totST;
          const v16613 = v3785.totBT;
          const v16614 = v3785.distrNum;
          const v16615 = v3785.saleLocked;
          const v16616 = v3785.docHash;
          const v16617 = v16616[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v16618 = v3785.cv;
          const v16619 = v16618[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v16620 = v16618[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v16621 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16622 = v16621[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16623 = stdlib.cast("UInt", "UInt256", v16622, false, true);
          const v16624 = v3785.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3781 = v3612[stdlib.checkedBigNumberify('./fullsale.rsh:356:14:spread', stdlib.UInt_max, '0')];
      const v3784 = [v2504, v3781];
      const v3785 = {
        ...v2435, 'cv': v3784};
      const v3786 = true;
      const v3787 = await txn1.getOutput('addCoopId', 'v3786', ctc8, v3786);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v3612, v3787), {
          at: './fullsale.rsh:357:13:application',
          fs: ['at ./fullsale.rsh:357:13:application call to [unknown function] (defined at: ./fullsale.rsh:357:13:function exp)', 'at ./fullsale.rsh:366:20:application call to "res" (defined at: ./fullsale.rsh:364:13:function exp)', 'at ./fullsale.rsh:364:13:application call to [unknown function] (defined at: ./fullsale.rsh:364:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v16609 = v3785;
      const v16611 = v2438;
      const v16612 = v3785.totST;
      const v16613 = v3785.totBT;
      const v16614 = v3785.distrNum;
      const v16615 = v3785.saleLocked;
      const v16616 = v3785.docHash;
      const v16617 = v16616[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v16618 = v3785.cv;
      const v16619 = v16618[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v16620 = v16618[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v16621 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16622 = v16621[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16623 = stdlib.cast("UInt", "UInt256", v16622, false, true);
      const v16624 = v3785.ctcMan;
      return;
      
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc21,
    approveSwap0_324: ctc21,
    cBT0_324: ctc24,
    cCM0_324: ctc21,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc21
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2729 = ctc.selfAddress();
  const v2731 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:287:13:application call to [unknown function] (defined at: ./fullsale.rsh:287:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runaddWL0_324" (defined at: ./fullsale.rsh:284:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v2735 = stdlib.addressEq(v2729, v2415);
  const v2737 = stdlib.addressEq(v2729, v2512);
  const v2738 = v2735 ? true : v2737;
  stdlib.assert(v2738, {
    at: './fullsale.rsh:288:23:application',
    fs: ['at ./fullsale.rsh:287:13:application call to [unknown function] (defined at: ./fullsale.rsh:287:18:function exp)', 'at ./fullsale.rsh:287:13:application call to [unknown function] (defined at: ./fullsale.rsh:287:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runaddWL0_324" (defined at: ./fullsale.rsh:284:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v2742 = ['addWL0_324', v2731];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2742],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:292:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:292:26:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          ;
          const v4373 = v4191[stdlib.checkedBigNumberify('./fullsale.rsh:284:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v4373, null);
          const v4379 = true;
          const v4380 = await txn1.getOutput('addWL', 'v4379', ctc8, v4379);
          
          const v17113 = v2435;
          const v17115 = v2438;
          const v17116 = v2435.totST;
          const v17117 = v2435.totBT;
          const v17118 = v2435.distrNum;
          const v17119 = v2435.saleLocked;
          const v17120 = v2435.docHash;
          const v17121 = v17120[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17122 = v2435.cv;
          const v17123 = v17122[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17124 = v17122[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17125 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17126 = v17125[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17127 = stdlib.cast("UInt", "UInt256", v17126, false, true);
          const v17128 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4373 = v4191[stdlib.checkedBigNumberify('./fullsale.rsh:284:13:spread', stdlib.UInt_max, '0')];
      const v4374 = stdlib.addressEq(v3029, v2415);
      const v4376 = stdlib.addressEq(v3029, v2512);
      const v4377 = v4374 ? true : v4376;
      stdlib.assert(v4377, {
        at: './fullsale.rsh:295:24:application',
        fs: ['at ./fullsale.rsh:294:13:application call to [unknown function] (defined at: ./fullsale.rsh:294:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map9, v4373, null);
      const v4379 = true;
      const v4380 = await txn1.getOutput('addWL', 'v4379', ctc8, v4379);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v4191, v4380), {
          at: './fullsale.rsh:285:13:application',
          fs: ['at ./fullsale.rsh:285:13:application call to [unknown function] (defined at: ./fullsale.rsh:285:13:function exp)', 'at ./fullsale.rsh:298:20:application call to "res" (defined at: ./fullsale.rsh:294:13:function exp)', 'at ./fullsale.rsh:294:13:application call to [unknown function] (defined at: ./fullsale.rsh:294:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v17113 = v2435;
      const v17115 = v2438;
      const v17116 = v2435.totST;
      const v17117 = v2435.totBT;
      const v17118 = v2435.distrNum;
      const v17119 = v2435.saleLocked;
      const v17120 = v2435.docHash;
      const v17121 = v17120[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17122 = v2435.cv;
      const v17123 = v17122[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17124 = v17122[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17125 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17126 = v17125[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17127 = stdlib.cast("UInt", "UInt256", v17126, false, true);
      const v17128 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc21,
    approveSwap0_324: ctc21,
    cBT0_324: ctc24,
    cCM0_324: ctc21,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc21
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2619 = ctc.selfAddress();
  const v2621 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:172:13:application call to [unknown function] (defined at: ./fullsale.rsh:172:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./fullsale.rsh:169:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'approveSwap'
    });
  const v2622 = v2621[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2625 = stdlib.addressEq(v2619, v2415);
  const v2627 = stdlib.addressEq(v2619, v2512);
  const v2628 = v2625 ? true : v2627;
  stdlib.assert(v2628, {
    at: './fullsale.rsh:173:23:application',
    fs: ['at ./fullsale.rsh:172:13:application call to [unknown function] (defined at: ./fullsale.rsh:172:23:function exp)', 'at ./fullsale.rsh:172:13:application call to [unknown function] (defined at: ./fullsale.rsh:172:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./fullsale.rsh:169:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'approveSwap'
    });
  const v2629 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2622), null);
  const v2630 = '-----';
  const v2631 = stdlib.fromSome(v2629, v2630);
  const v2632 = 'initd';
  const v2633 = stdlib.digest([ctc6], [v2631]);
  const v2635 = stdlib.digest([ctc6], [v2632]);
  const v2636 = stdlib.digestEq(v2633, v2635);
  stdlib.assert(v2636, {
    at: './fullsale.rsh:174:23:application',
    fs: ['at ./fullsale.rsh:172:13:application call to [unknown function] (defined at: ./fullsale.rsh:172:23:function exp)', 'at ./fullsale.rsh:172:13:application call to [unknown function] (defined at: ./fullsale.rsh:172:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./fullsale.rsh:169:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you can onlyapprove an unapproved pending/initiated swap',
    who: 'approveSwap'
    });
  const v2640 = ['approveSwap0_324', v2621];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2640],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:178:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:178:26:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approveSwap"
            });
          ;
          ;
          const v4966 = v4770[stdlib.checkedBigNumberify('./fullsale.rsh:169:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v4966), null);
          const v4979 = 'apprv';
          await stdlib.simMapSet(sim_r, 6, v4966, v4979);
          const v4985 = true;
          const v4986 = await txn1.getOutput('approveSwap', 'v4985', ctc8, v4985);
          
          const v17617 = v2435;
          const v17619 = v2438;
          const v17620 = v2435.totST;
          const v17621 = v2435.totBT;
          const v17622 = v2435.distrNum;
          const v17623 = v2435.saleLocked;
          const v17624 = v2435.docHash;
          const v17625 = v17624[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17626 = v2435.cv;
          const v17627 = v17626[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17628 = v17626[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17629 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17630 = v17629[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17631 = stdlib.cast("UInt", "UInt256", v17630, false, true);
          const v17632 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4966 = v4770[stdlib.checkedBigNumberify('./fullsale.rsh:169:13:spread', stdlib.UInt_max, '0')];
      const v4967 = stdlib.addressEq(v3029, v2415);
      const v4969 = stdlib.addressEq(v3029, v2512);
      const v4970 = v4967 ? true : v4969;
      stdlib.assert(v4970, {
        at: './fullsale.rsh:181:24:application',
        fs: ['at ./fullsale.rsh:180:13:application call to [unknown function] (defined at: ./fullsale.rsh:180:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'approveSwap'
        });
      const v4971 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v4966), null);
      const v4972 = '-----';
      const v4973 = stdlib.fromSome(v4971, v4972);
      const v4974 = 'initd';
      const v4975 = stdlib.digest([ctc6], [v4973]);
      const v4977 = stdlib.digest([ctc6], [v4974]);
      const v4978 = stdlib.digestEq(v4975, v4977);
      stdlib.assert(v4978, {
        at: './fullsale.rsh:182:24:application',
        fs: ['at ./fullsale.rsh:180:13:application call to [unknown function] (defined at: ./fullsale.rsh:180:13:function exp)'],
        msg: 'you can onlyapprove an unapproved pending/initiated swap',
        who: 'approveSwap'
        });
      const v4979 = 'apprv';
      await stdlib.mapSet(map6, v4966, v4979);
      const v4985 = true;
      const v4986 = await txn1.getOutput('approveSwap', 'v4985', ctc8, v4985);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v4770, v4986), {
          at: './fullsale.rsh:170:13:application',
          fs: ['at ./fullsale.rsh:170:13:application call to [unknown function] (defined at: ./fullsale.rsh:170:13:function exp)', 'at ./fullsale.rsh:186:20:application call to "res" (defined at: ./fullsale.rsh:180:13:function exp)', 'at ./fullsale.rsh:180:13:application call to [unknown function] (defined at: ./fullsale.rsh:180:13:function exp)'],
          msg: 'out',
          who: 'approveSwap'
          });
        }
      else {
        }
      
      const v17617 = v2435;
      const v17619 = v2438;
      const v17620 = v2435.totST;
      const v17621 = v2435.totBT;
      const v17622 = v2435.distrNum;
      const v17623 = v2435.saleLocked;
      const v17624 = v2435.docHash;
      const v17625 = v17624[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17626 = v2435.cv;
      const v17627 = v17626[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17628 = v17626[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17629 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17630 = v17629[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17631 = stdlib.cast("UInt", "UInt256", v17630, false, true);
      const v17632 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc21,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc21,
    claimSwapProceeds0_324: ctc21,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc21,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2817 = ctc.selfAddress();
  const v2819 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v2821 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2817), null);
  const v2822 = {
    None: 0,
    Some: 1
    }[v2821[0]];
  const v2823 = stdlib.eq(v2822, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2823, {
    at: './fullsale.rsh:396:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:17:function exp)', 'at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v2827 = stdlib.gt256(v2510, stdlib.checkedBigNumberify('./fullsale.rsh:397:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2827, {
    at: './fullsale.rsh:397:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:17:function exp)', 'at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v2829 = stdlib.gt256(v2474, stdlib.checkedBigNumberify('./fullsale.rsh:398:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2829, {
    at: './fullsale.rsh:398:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:17:function exp)', 'at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v2831 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2817), null);
  const v2832 = stdlib.fromSome(v2831, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2833 = stdlib.ge256(v2474, v2832);
  stdlib.assert(v2833, {
    at: './fullsale.rsh:399:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:17:function exp)', 'at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v2836 = stdlib.gt256(v2832, stdlib.checkedBigNumberify('./fullsale.rsh:400:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2836, {
    at: './fullsale.rsh:400:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:17:function exp)', 'at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v2839 = v2435.currDistr;
  const v2840 = stdlib.safeMul256(v2832, v2839);
  const v2842 = stdlib.safeDiv256(v2840, v2474);
  const v2843 = stdlib.cast("UInt256", "UInt", v2842, false, true);
  const v2846 = stdlib.le(v2843, v2509);
  stdlib.assert(v2846, {
    at: './fullsale.rsh:402:23:application',
    fs: ['at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:17:function exp)', 'at ./fullsale.rsh:395:13:application call to [unknown function] (defined at: ./fullsale.rsh:395:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcBT0_324" (defined at: ./fullsale.rsh:392:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v2849 = ['cBT0_324', v2819];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2849],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:405:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:405:25:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3029), null);
          const v5582 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3029), null);
          const v5583 = stdlib.fromSome(v5582, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5590 = v2435.currDistr;
          const v5591 = stdlib.safeMul256(v5583, v5590);
          const v5593 = stdlib.safeDiv256(v5591, v2474);
          const v5594 = stdlib.cast("UInt256", "UInt", v5593, false, true);
          const v5604 = stdlib.sub(v2509, v5594);
          const v5606 = stdlib.Array_set(v2508, '0', v5604);
          const v5607 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:415:50:application', stdlib.UInt_max, '0'), v5606);
          sim_r.txns.push({
            kind: 'from',
            to: v3029,
            tok: v2419
            });
          const v5608 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3029), null);
          const v5609 = stdlib.fromSome(v5608, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5610 = stdlib.safeAdd256(v5609, v5593);
          await stdlib.simMapSet(sim_r, 3, v3029, v5610);
          const v5611 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v3029), null);
          const v5612 = stdlib.fromSome(v5611, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5613 = stdlib.safeAdd256(v5612, stdlib.checkedBigNumberify('./fullsale.rsh:417:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 4, v3029, v5613);
          const v5614 = await txn1.getOutput('cBT', 'v5593', ctc1, v5593);
          
          const v18121 = v2435;
          const v18123 = v5607;
          const v18124 = v2435.totST;
          const v18125 = v2435.totBT;
          const v18126 = v2435.distrNum;
          const v18127 = v2435.saleLocked;
          const v18128 = v2435.docHash;
          const v18129 = v18128[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18130 = v2435.cv;
          const v18131 = v18130[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18132 = v18130[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18133 = v5607[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18134 = v18133[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18135 = stdlib.cast("UInt", "UInt256", v18134, false, true);
          const v18136 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5572 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
      const v5573 = {
        None: 0,
        Some: 1
        }[v5572[0]];
      const v5574 = stdlib.eq(v5573, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5574, {
        at: './fullsale.rsh:408:24:application',
        fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v5578 = stdlib.gt256(v2510, stdlib.checkedBigNumberify('./fullsale.rsh:409:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5578, {
        at: './fullsale.rsh:409:24:application',
        fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v5580 = stdlib.gt256(v2474, stdlib.checkedBigNumberify('./fullsale.rsh:410:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5580, {
        at: './fullsale.rsh:410:24:application',
        fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v5582 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3029), null);
      const v5583 = stdlib.fromSome(v5582, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5584 = stdlib.ge256(v2474, v5583);
      stdlib.assert(v5584, {
        at: './fullsale.rsh:411:24:application',
        fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v5587 = stdlib.gt256(v5583, stdlib.checkedBigNumberify('./fullsale.rsh:412:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5587, {
        at: './fullsale.rsh:412:24:application',
        fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v5590 = v2435.currDistr;
      const v5591 = stdlib.safeMul256(v5583, v5590);
      const v5593 = stdlib.safeDiv256(v5591, v2474);
      const v5594 = stdlib.cast("UInt256", "UInt", v5593, false, true);
      const v5597 = stdlib.le(v5594, v2509);
      stdlib.assert(v5597, {
        at: './fullsale.rsh:414:24:application',
        fs: ['at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v5604 = stdlib.sub(v2509, v5594);
      const v5606 = stdlib.Array_set(v2508, '0', v5604);
      const v5607 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:415:50:application', stdlib.UInt_max, '0'), v5606);
      ;
      const v5608 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3029), null);
      const v5609 = stdlib.fromSome(v5608, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5610 = stdlib.safeAdd256(v5609, v5593);
      await stdlib.mapSet(map3, v3029, v5610);
      const v5611 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3029), null);
      const v5612 = stdlib.fromSome(v5611, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5613 = stdlib.safeAdd256(v5612, stdlib.checkedBigNumberify('./fullsale.rsh:417:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map4, v3029, v5613);
      const v5614 = await txn1.getOutput('cBT', 'v5593', ctc1, v5593);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v5349, v5614), {
          at: './fullsale.rsh:393:13:application',
          fs: ['at ./fullsale.rsh:393:13:application call to [unknown function] (defined at: ./fullsale.rsh:393:13:function exp)', 'at ./fullsale.rsh:418:20:application call to "res" (defined at: ./fullsale.rsh:407:13:function exp)', 'at ./fullsale.rsh:407:13:application call to [unknown function] (defined at: ./fullsale.rsh:407:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v18121 = v2435;
      const v18123 = v5607;
      const v18124 = v2435.totST;
      const v18125 = v2435.totBT;
      const v18126 = v2435.distrNum;
      const v18127 = v2435.saleLocked;
      const v18128 = v2435.docHash;
      const v18129 = v18128[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18130 = v2435.cv;
      const v18131 = v18130[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18132 = v18130[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18133 = v5607[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18134 = v18133[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18135 = stdlib.cast("UInt", "UInt256", v18134, false, true);
      const v18136 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc21,
    approveSwap0_324: ctc21,
    cBT0_324: ctc24,
    cCM0_324: ctc21,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc21
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2851 = ctc.selfAddress();
  const v2853 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:425:13:application call to [unknown function] (defined at: ./fullsale.rsh:425:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcCM0_324" (defined at: ./fullsale.rsh:422:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v2857 = stdlib.addressEq(v2851, v2415);
  const v2859 = stdlib.addressEq(v2851, v2512);
  const v2860 = v2857 ? true : v2859;
  stdlib.assert(v2860, {
    at: './fullsale.rsh:426:23:application',
    fs: ['at ./fullsale.rsh:425:13:application call to [unknown function] (defined at: ./fullsale.rsh:425:21:function exp)', 'at ./fullsale.rsh:425:13:application call to [unknown function] (defined at: ./fullsale.rsh:425:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcCM0_324" (defined at: ./fullsale.rsh:422:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v2864 = ['cCM0_324', v2853];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2864],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:430:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:430:26:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          ;
          const v6199 = v5928[stdlib.checkedBigNumberify('./fullsale.rsh:422:13:spread', stdlib.UInt_max, '0')];
          const v6204 = true;
          const v6205 = await txn1.getOutput('cCM', 'v6204', ctc8, v6204);
          
          const v6211 = {
            ...v2435, 'ctcMan': v6199};
          const v18625 = v6211;
          const v18627 = v2438;
          const v18628 = v6211.totST;
          const v18629 = v6211.totBT;
          const v18630 = v6211.distrNum;
          const v18631 = v6211.saleLocked;
          const v18632 = v6211.docHash;
          const v18633 = v18632[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18634 = v6211.cv;
          const v18635 = v18634[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18636 = v18634[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18637 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18638 = v18637[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18639 = stdlib.cast("UInt", "UInt256", v18638, false, true);
          const v18640 = v6211.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6199 = v5928[stdlib.checkedBigNumberify('./fullsale.rsh:422:13:spread', stdlib.UInt_max, '0')];
      const v6200 = stdlib.addressEq(v3029, v2415);
      const v6202 = stdlib.addressEq(v3029, v2512);
      const v6203 = v6200 ? true : v6202;
      stdlib.assert(v6203, {
        at: './fullsale.rsh:433:24:application',
        fs: ['at ./fullsale.rsh:432:13:application call to [unknown function] (defined at: ./fullsale.rsh:432:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v6204 = true;
      const v6205 = await txn1.getOutput('cCM', 'v6204', ctc8, v6204);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v5928, v6205), {
          at: './fullsale.rsh:423:13:application',
          fs: ['at ./fullsale.rsh:423:13:application call to [unknown function] (defined at: ./fullsale.rsh:423:13:function exp)', 'at ./fullsale.rsh:435:20:application call to "res" (defined at: ./fullsale.rsh:432:13:function exp)', 'at ./fullsale.rsh:432:13:application call to [unknown function] (defined at: ./fullsale.rsh:432:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6211 = {
        ...v2435, 'ctcMan': v6199};
      const v18625 = v6211;
      const v18627 = v2438;
      const v18628 = v6211.totST;
      const v18629 = v6211.totBT;
      const v18630 = v6211.distrNum;
      const v18631 = v6211.saleLocked;
      const v18632 = v6211.docHash;
      const v18633 = v18632[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18634 = v6211.cv;
      const v18635 = v18634[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18636 = v18634[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18637 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18638 = v18637[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18639 = stdlib.cast("UInt", "UInt256", v18638, false, true);
      const v18640 = v6211.ctcMan;
      return;
      
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc21,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc21,
    claimSwapProceeds0_324: ctc21,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc21,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2589 = ctc.selfAddress();
  const v2591 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:147:13:application call to [unknown function] (defined at: ./fullsale.rsh:147:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./fullsale.rsh:144:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cancelSwap'
    });
  const v2593 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2589), null);
  const v2594 = {
    None: 0,
    Some: 1
    }[v2593[0]];
  const v2595 = stdlib.eq(v2594, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2595, {
    at: './fullsale.rsh:148:23:application',
    fs: ['at ./fullsale.rsh:147:13:application call to [unknown function] (defined at: ./fullsale.rsh:147:17:function exp)', 'at ./fullsale.rsh:147:13:application call to [unknown function] (defined at: ./fullsale.rsh:147:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./fullsale.rsh:144:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member',
    who: 'cancelSwap'
    });
  const v2596 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2589), null);
  const v2597 = '-----';
  const v2598 = stdlib.fromSome(v2596, v2597);
  const v2600 = stdlib.digest([ctc6], [v2598]);
  const v2602 = stdlib.digest([ctc6], [v2597]);
  const v2603 = stdlib.digestEq(v2600, v2602);
  const v2608 = 'compl';
  const v2611 = stdlib.digest([ctc6], [v2608]);
  const v2612 = stdlib.digestEq(v2600, v2611);
  const v2613 = v2612 ? false : true;
  const v2614 = v2603 ? false : v2613;
  stdlib.assert(v2614, {
    at: './fullsale.rsh:149:23:application',
    fs: ['at ./fullsale.rsh:147:13:application call to [unknown function] (defined at: ./fullsale.rsh:147:17:function exp)', 'at ./fullsale.rsh:147:13:application call to [unknown function] (defined at: ./fullsale.rsh:147:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./fullsale.rsh:144:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'there must be a pending swap',
    who: 'cancelSwap'
    });
  const v2617 = ['cancelSwap0_324', v2591];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2617],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:153:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:153:25:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cancelSwap"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3029), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v3029), null);
          const v6796 = '-----';
          await stdlib.simMapSet(sim_r, 6, v3029, v6796);
          const v6815 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3029), null);
          const v6817 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6819 = stdlib.fromSome(v6815, v6817);
          const v6820 = stdlib.Array_set(v6819, stdlib.checkedBigNumberify('./fullsale.rsh:160:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./fullsale.rsh:160:41:decimal', stdlib.UInt_max, '0'));
          const v6821 = stdlib.Array_set(v6820, stdlib.checkedBigNumberify('./fullsale.rsh:161:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./fullsale.rsh:161:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3029, v6821);
          const v6823 = true;
          const v6824 = await txn1.getOutput('cancelSwap', 'v6823', ctc8, v6823);
          
          const v19129 = v2435;
          const v19131 = v2438;
          const v19132 = v2435.totST;
          const v19133 = v2435.totBT;
          const v19134 = v2435.distrNum;
          const v19135 = v2435.saleLocked;
          const v19136 = v2435.docHash;
          const v19137 = v19136[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19138 = v2435.cv;
          const v19139 = v19138[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19140 = v19138[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19141 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19142 = v19141[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19143 = stdlib.cast("UInt", "UInt256", v19142, false, true);
          const v19144 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6792 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
      const v6793 = {
        None: 0,
        Some: 1
        }[v6792[0]];
      const v6794 = stdlib.eq(v6793, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6794, {
        at: './fullsale.rsh:156:24:application',
        fs: ['at ./fullsale.rsh:155:13:application call to [unknown function] (defined at: ./fullsale.rsh:155:13:function exp)'],
        msg: 'you must be a whitelist member',
        who: 'cancelSwap'
        });
      const v6795 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3029), null);
      const v6796 = '-----';
      const v6797 = stdlib.fromSome(v6795, v6796);
      const v6799 = stdlib.digest([ctc6], [v6797]);
      const v6801 = stdlib.digest([ctc6], [v6796]);
      const v6802 = stdlib.digestEq(v6799, v6801);
      const v6807 = 'compl';
      const v6810 = stdlib.digest([ctc6], [v6807]);
      const v6811 = stdlib.digestEq(v6799, v6810);
      const v6812 = v6811 ? false : true;
      const v6813 = v6802 ? false : v6812;
      stdlib.assert(v6813, {
        at: './fullsale.rsh:157:24:application',
        fs: ['at ./fullsale.rsh:155:13:application call to [unknown function] (defined at: ./fullsale.rsh:155:13:function exp)'],
        msg: 'there must be a pending swap',
        who: 'cancelSwap'
        });
      await stdlib.mapSet(map6, v3029, v6796);
      const v6815 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3029), null);
      const v6817 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6819 = stdlib.fromSome(v6815, v6817);
      const v6820 = stdlib.Array_set(v6819, stdlib.checkedBigNumberify('./fullsale.rsh:160:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./fullsale.rsh:160:41:decimal', stdlib.UInt_max, '0'));
      const v6821 = stdlib.Array_set(v6820, stdlib.checkedBigNumberify('./fullsale.rsh:161:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./fullsale.rsh:161:42:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3029, v6821);
      const v6823 = true;
      const v6824 = await txn1.getOutput('cancelSwap', 'v6823', ctc8, v6823);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v6507, v6824), {
          at: './fullsale.rsh:145:13:application',
          fs: ['at ./fullsale.rsh:145:13:application call to [unknown function] (defined at: ./fullsale.rsh:145:13:function exp)', 'at ./fullsale.rsh:165:20:application call to "res" (defined at: ./fullsale.rsh:155:13:function exp)', 'at ./fullsale.rsh:155:13:application call to [unknown function] (defined at: ./fullsale.rsh:155:13:function exp)'],
          msg: 'out',
          who: 'cancelSwap'
          });
        }
      else {
        }
      
      const v19129 = v2435;
      const v19131 = v2438;
      const v19132 = v2435.totST;
      const v19133 = v2435.totBT;
      const v19134 = v2435.distrNum;
      const v19135 = v2435.saleLocked;
      const v19136 = v2435.docHash;
      const v19137 = v19136[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19138 = v2435.cv;
      const v19139 = v19138[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19140 = v19138[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19141 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19142 = v19141[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19143 = stdlib.cast("UInt", "UInt256", v19142, false, true);
      const v19144 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc21,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc21,
    claimSwapProceeds0_324: ctc21,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc21,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2684 = ctc.selfAddress();
  const v2686 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./fullsale.rsh:238:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'claimSwapProceeds'
    });
  const v2688 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2684), null);
  const v2689 = {
    None: 0,
    Some: 1
    }[v2688[0]];
  const v2690 = stdlib.eq(v2689, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2690, {
    at: './fullsale.rsh:242:23:application',
    fs: ['at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:17:function exp)', 'at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./fullsale.rsh:238:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to claim swap proceeds',
    who: 'claimSwapProceeds'
    });
  const v2691 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2684), null);
  const v2693 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2695 = stdlib.fromSome(v2691, v2693);
  const v2696 = v2695[stdlib.checkedBigNumberify('./fullsale.rsh:243:59:array ref', stdlib.UInt_max, '2')];
  const v2697 = stdlib.gt(v2696, stdlib.checkedBigNumberify('./fullsale.rsh:243:65:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2697, {
    at: './fullsale.rsh:243:23:application',
    fs: ['at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:17:function exp)', 'at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./fullsale.rsh:238:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must have swap proceeds to claim',
    who: 'claimSwapProceeds'
    });
  const v2706 = stdlib.ge(v2509, v2696);
  stdlib.assert(v2706, {
    at: './fullsale.rsh:244:23:application',
    fs: ['at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:17:function exp)', 'at ./fullsale.rsh:241:13:application call to [unknown function] (defined at: ./fullsale.rsh:241:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./fullsale.rsh:238:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimSwapProceeds'
    });
  const v2709 = ['claimSwapProceeds0_324', v2686];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2709],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:248:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:248:25:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimSwapProceeds"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3029), null);
          const v7412 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3029), null);
          const v7414 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7416 = stdlib.fromSome(v7412, v7414);
          const v7417 = v7416[stdlib.checkedBigNumberify('./fullsale.rsh:252:60:array ref', stdlib.UInt_max, '2')];
          const v7434 = stdlib.sub(v2509, v7417);
          const v7436 = stdlib.Array_set(v2508, '0', v7434);
          const v7437 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:255:47:application', stdlib.UInt_max, '0'), v7436);
          sim_r.txns.push({
            kind: 'from',
            to: v3029,
            tok: v2419
            });
          const v7438 = stdlib.Array_set(v7416, stdlib.checkedBigNumberify('./fullsale.rsh:256:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./fullsale.rsh:256:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3029, v7438);
          const v7439 = true;
          const v7440 = await txn1.getOutput('claimSwapProceeds', 'v7439', ctc8, v7439);
          
          const v19633 = v2435;
          const v19635 = v7437;
          const v19636 = v2435.totST;
          const v19637 = v2435.totBT;
          const v19638 = v2435.distrNum;
          const v19639 = v2435.saleLocked;
          const v19640 = v2435.docHash;
          const v19641 = v19640[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19642 = v2435.cv;
          const v19643 = v19642[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19644 = v19642[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19645 = v7437[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19646 = v19645[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19647 = stdlib.cast("UInt", "UInt256", v19646, false, true);
          const v19648 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v7409 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
      const v7410 = {
        None: 0,
        Some: 1
        }[v7409[0]];
      const v7411 = stdlib.eq(v7410, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7411, {
        at: './fullsale.rsh:251:24:application',
        fs: ['at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
        msg: 'you must be a whitelist member to claim swap proceeds',
        who: 'claimSwapProceeds'
        });
      const v7412 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3029), null);
      const v7414 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7416 = stdlib.fromSome(v7412, v7414);
      const v7417 = v7416[stdlib.checkedBigNumberify('./fullsale.rsh:252:60:array ref', stdlib.UInt_max, '2')];
      const v7418 = stdlib.gt(v7417, stdlib.checkedBigNumberify('./fullsale.rsh:252:66:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7418, {
        at: './fullsale.rsh:252:24:application',
        fs: ['at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
        msg: 'you must have swap proceeds to claim',
        who: 'claimSwapProceeds'
        });
      const v7427 = stdlib.ge(v2509, v7417);
      stdlib.assert(v7427, {
        at: './fullsale.rsh:254:24:application',
        fs: ['at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimSwapProceeds'
        });
      const v7434 = stdlib.sub(v2509, v7417);
      const v7436 = stdlib.Array_set(v2508, '0', v7434);
      const v7437 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:255:47:application', stdlib.UInt_max, '0'), v7436);
      ;
      const v7438 = stdlib.Array_set(v7416, stdlib.checkedBigNumberify('./fullsale.rsh:256:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./fullsale.rsh:256:41:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3029, v7438);
      const v7439 = true;
      const v7440 = await txn1.getOutput('claimSwapProceeds', 'v7439', ctc8, v7439);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v7086, v7440), {
          at: './fullsale.rsh:239:13:application',
          fs: ['at ./fullsale.rsh:239:13:application call to [unknown function] (defined at: ./fullsale.rsh:239:13:function exp)', 'at ./fullsale.rsh:259:20:application call to "res" (defined at: ./fullsale.rsh:250:13:function exp)', 'at ./fullsale.rsh:250:13:application call to [unknown function] (defined at: ./fullsale.rsh:250:13:function exp)'],
          msg: 'out',
          who: 'claimSwapProceeds'
          });
        }
      else {
        }
      
      const v19633 = v2435;
      const v19635 = v7437;
      const v19636 = v2435.totST;
      const v19637 = v2435.totBT;
      const v19638 = v2435.distrNum;
      const v19639 = v2435.saleLocked;
      const v19640 = v2435.docHash;
      const v19641 = v19640[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19642 = v2435.cv;
      const v19643 = v19642[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19644 = v19642[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19645 = v7437[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19646 = v19645[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19647 = stdlib.cast("UInt", "UInt256", v19646, false, true);
      const v19648 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc21 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc22 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc23 = stdlib.T_Tuple([ctc14]);
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc25,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc25,
    claimSwapProceeds0_324: ctc25,
    completeSwap0_324: ctc21,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc25,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2642 = ctc.selfAddress();
  const v2644 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./fullsale.rsh:190:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'completeSwap'
    });
  const v2645 = v2644[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2646 = v2644[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2650 = stdlib.gt(v2646, stdlib.checkedBigNumberify('./fullsale.rsh:194:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2650, {
    at: './fullsale.rsh:194:23:application',
    fs: ['at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:28:function exp)', 'at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./fullsale.rsh:190:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must buy at least 1 share token',
    who: 'completeSwap'
    });
  const v2651 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2645), null);
  const v2653 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2655 = stdlib.fromSome(v2651, v2653);
  const v2656 = v2655[stdlib.checkedBigNumberify('./fullsale.rsh:195:68:array ref', stdlib.UInt_max, '0')];
  const v2657 = stdlib.le(v2646, v2656);
  stdlib.assert(v2657, {
    at: './fullsale.rsh:195:23:application',
    fs: ['at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:28:function exp)', 'at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./fullsale.rsh:190:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you cannot buy more than the quantity offered for sale',
    who: 'completeSwap'
    });
  const v2658 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2642), null);
  const v2659 = {
    None: 0,
    Some: 1
    }[v2658[0]];
  const v2660 = stdlib.eq(v2659, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2660, {
    at: './fullsale.rsh:196:23:application',
    fs: ['at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:28:function exp)', 'at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./fullsale.rsh:190:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to complete or buy swap',
    who: 'completeSwap'
    });
  const v2661 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2645), null);
  const v2662 = '-----';
  const v2663 = stdlib.fromSome(v2661, v2662);
  const v2664 = 'apprv';
  const v2665 = stdlib.digest([ctc6], [v2663]);
  const v2667 = stdlib.digest([ctc6], [v2664]);
  const v2668 = stdlib.digestEq(v2665, v2667);
  const v2672 = 'partl';
  const v2675 = stdlib.digest([ctc6], [v2672]);
  const v2676 = stdlib.digestEq(v2665, v2675);
  const v2677 = v2668 ? true : v2676;
  stdlib.assert(v2677, {
    at: './fullsale.rsh:197:23:application',
    fs: ['at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:28:function exp)', 'at ./fullsale.rsh:193:13:application call to [unknown function] (defined at: ./fullsale.rsh:193:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./fullsale.rsh:190:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you can only buy an approved or partially completed swap',
    who: 'completeSwap'
    });
  const v2682 = ['completeSwap0_324', v2644];
  
  const v2961 = v2655[stdlib.checkedBigNumberify('./fullsale.rsh:201:79:array ref', stdlib.UInt_max, '1')];
  const v2962 = stdlib.safeMul(v2646, v2961);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2682],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:201:32:decimal', stdlib.UInt_max, '0'), [[v2962, v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "completeSwap"
            });
          const v7733 = v7665[stdlib.checkedBigNumberify('./fullsale.rsh:190:13:spread', stdlib.UInt_max, '0')];
          const v7734 = v7665[stdlib.checkedBigNumberify('./fullsale.rsh:190:13:spread', stdlib.UInt_max, '1')];
          const v7735 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v7733), null);
          const v7737 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7739 = stdlib.fromSome(v7735, v7737);
          const v7740 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:201:79:array ref', stdlib.UInt_max, '1')];
          const v7741 = stdlib.safeMul(v7734, v7740);
          ;
          const v7801 = stdlib.add(v2509, v7741);
          const v7803 = stdlib.Array_set(v2508, '0', v7801);
          const v7804 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:80:33:dot', stdlib.UInt_max, '0'), v7803);
          sim_r.txns.push({
            amt: v7741,
            kind: 'to',
            tok: v2419
            });
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3029), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v7733), null);
          const v8049 = 'partl';
          const v8060 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3029), null);
          const v8061 = stdlib.fromSome(v8060, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8062 = stdlib.cast("UInt", "UInt256", v7734, false, true);
          const v8063 = stdlib.safeAdd256(v8061, v8062);
          await stdlib.simMapSet(sim_r, 0, v3029, v8063);
          const v8064 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3029), null);
          const v8065 = stdlib.fromSome(v8064, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8067 = stdlib.safeAdd256(v8065, v8062);
          await stdlib.simMapSet(sim_r, 2, v3029, v8067);
          const v8068 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:214:44:array ref', stdlib.UInt_max, '2')];
          const v8071 = stdlib.safeAdd(v8068, v7741);
          const v8072 = stdlib.Array_set(v7739, stdlib.checkedBigNumberify('./fullsale.rsh:214:38:decimal', stdlib.UInt_max, '2'), v8071);
          const v8073 = v8072[stdlib.checkedBigNumberify('./fullsale.rsh:215:46:array ref', stdlib.UInt_max, '3')];
          const v8074 = stdlib.safeAdd(v8073, v7734);
          const v8075 = stdlib.Array_set(v8072, stdlib.checkedBigNumberify('./fullsale.rsh:215:39:decimal', stdlib.UInt_max, '3'), v8074);
          const v8076 = v8075[stdlib.checkedBigNumberify('./fullsale.rsh:216:46:array ref', stdlib.UInt_max, '0')];
          const v8077 = stdlib.safeSub(v8076, v7734);
          const v8078 = stdlib.Array_set(v8075, stdlib.checkedBigNumberify('./fullsale.rsh:216:39:decimal', stdlib.UInt_max, '0'), v8077);
          await stdlib.simMapSet(sim_r, 5, v7733, v8078);
          const v8079 = v8078[stdlib.checkedBigNumberify('./fullsale.rsh:219:25:array ref', stdlib.UInt_max, '0')];
          const v8080 = stdlib.eq(v8079, stdlib.checkedBigNumberify('./fullsale.rsh:219:32:decimal', stdlib.UInt_max, '0'));
          if (v8080) {
            const v8081 = 'compl';
            await stdlib.simMapSet(sim_r, 6, v7733, v8081);
            const v8082 = true;
            const v8083 = await txn1.getOutput('completeSwap', 'v8082', ctc8, v8082);
            
            const v8090 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7733), null);
            const v8091 = stdlib.fromSome(v8090, false);
            if (v8091) {
              const v8100 = stdlib.safeAdd256(v2474, v8062);
              const v8101 = {
                ...v2435, 'totST': v8100};
              await stdlib.simMapSet(sim_r, 7, v7733, false);
              const v20137 = v8101;
              const v20139 = v7804;
              const v20140 = v8101.totST;
              const v20141 = v8101.totBT;
              const v20142 = v8101.distrNum;
              const v20143 = v8101.saleLocked;
              const v20144 = v8101.docHash;
              const v20145 = v20144[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v20146 = v8101.cv;
              const v20147 = v20146[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v20148 = v20146[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v20149 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20150 = v20149[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20151 = stdlib.cast("UInt", "UInt256", v20150, false, true);
              const v20152 = v8101.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              const v8093 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7733), null);
              const v8094 = stdlib.fromSome(v8093, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8096 = stdlib.safeSub256(v8094, v8062);
              await stdlib.simMapSet(sim_r, 0, v7733, v8096);
              const v20165 = v2435;
              const v20167 = v7804;
              const v20168 = v2435.totST;
              const v20169 = v2435.totBT;
              const v20170 = v2435.distrNum;
              const v20171 = v2435.saleLocked;
              const v20172 = v2435.docHash;
              const v20173 = v20172[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v20174 = v2435.cv;
              const v20175 = v20174[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v20176 = v20174[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v20177 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20178 = v20177[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20179 = stdlib.cast("UInt", "UInt256", v20178, false, true);
              const v20180 = v2435.ctcMan;
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 6, v7733, v8049);
            const v8104 = true;
            const v8105 = await txn1.getOutput('completeSwap', 'v8104', ctc8, v8104);
            
            const v8112 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7733), null);
            const v8113 = stdlib.fromSome(v8112, false);
            if (v8113) {
              const v8122 = stdlib.safeAdd256(v2474, v8062);
              const v8123 = {
                ...v2435, 'totST': v8122};
              await stdlib.simMapSet(sim_r, 7, v7733, false);
              const v20193 = v8123;
              const v20195 = v7804;
              const v20196 = v8123.totST;
              const v20197 = v8123.totBT;
              const v20198 = v8123.distrNum;
              const v20199 = v8123.saleLocked;
              const v20200 = v8123.docHash;
              const v20201 = v20200[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v20202 = v8123.cv;
              const v20203 = v20202[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v20204 = v20202[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v20205 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20206 = v20205[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20207 = stdlib.cast("UInt", "UInt256", v20206, false, true);
              const v20208 = v8123.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              const v8115 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7733), null);
              const v8116 = stdlib.fromSome(v8115, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8118 = stdlib.safeSub256(v8116, v8062);
              await stdlib.simMapSet(sim_r, 0, v7733, v8118);
              const v20221 = v2435;
              const v20223 = v7804;
              const v20224 = v2435.totST;
              const v20225 = v2435.totBT;
              const v20226 = v2435.distrNum;
              const v20227 = v2435.saleLocked;
              const v20228 = v2435.docHash;
              const v20229 = v20228[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v20230 = v2435.cv;
              const v20231 = v20230[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v20232 = v20230[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v20233 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20234 = v20233[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v20235 = stdlib.cast("UInt", "UInt256", v20234, false, true);
              const v20236 = v2435.ctcMan;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      undefined /* setApiDetails */;
      const v7733 = v7665[stdlib.checkedBigNumberify('./fullsale.rsh:190:13:spread', stdlib.UInt_max, '0')];
      const v7734 = v7665[stdlib.checkedBigNumberify('./fullsale.rsh:190:13:spread', stdlib.UInt_max, '1')];
      const v7735 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7733), null);
      const v7737 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7739 = stdlib.fromSome(v7735, v7737);
      const v7740 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:201:79:array ref', stdlib.UInt_max, '1')];
      const v7741 = stdlib.safeMul(v7734, v7740);
      ;
      const v7801 = stdlib.add(v2509, v7741);
      const v7803 = stdlib.Array_set(v2508, '0', v7801);
      const v7804 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:80:33:dot', stdlib.UInt_max, '0'), v7803);
      ;
      const v8027 = stdlib.gt(v7734, stdlib.checkedBigNumberify('./fullsale.rsh:204:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8027, {
        at: './fullsale.rsh:204:24:application',
        fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
        msg: 'you must buy at least 1 share token',
        who: 'completeSwap'
        });
      const v8033 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:205:69:array ref', stdlib.UInt_max, '0')];
      const v8034 = stdlib.le(v7734, v8033);
      stdlib.assert(v8034, {
        at: './fullsale.rsh:205:24:application',
        fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
        msg: 'you cannot buy more than the quantity offered for sale',
        who: 'completeSwap'
        });
      const v8035 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
      const v8036 = {
        None: 0,
        Some: 1
        }[v8035[0]];
      const v8037 = stdlib.eq(v8036, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v8037, {
        at: './fullsale.rsh:206:24:application',
        fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
        msg: 'you must be a whitelist member to complete or buy swap',
        who: 'completeSwap'
        });
      const v8038 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7733), null);
      const v8039 = '-----';
      const v8040 = stdlib.fromSome(v8038, v8039);
      const v8041 = 'apprv';
      const v8042 = stdlib.digest([ctc6], [v8040]);
      const v8044 = stdlib.digest([ctc6], [v8041]);
      const v8045 = stdlib.digestEq(v8042, v8044);
      const v8049 = 'partl';
      const v8052 = stdlib.digest([ctc6], [v8049]);
      const v8053 = stdlib.digestEq(v8042, v8052);
      const v8054 = v8045 ? true : v8053;
      stdlib.assert(v8054, {
        at: './fullsale.rsh:207:24:application',
        fs: ['at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
        msg: 'you can only buy an approved or partially completed swap',
        who: 'completeSwap'
        });
      const v8060 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3029), null);
      const v8061 = stdlib.fromSome(v8060, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8062 = stdlib.cast("UInt", "UInt256", v7734, false, true);
      const v8063 = stdlib.safeAdd256(v8061, v8062);
      await stdlib.mapSet(map0, v3029, v8063);
      const v8064 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3029), null);
      const v8065 = stdlib.fromSome(v8064, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8067 = stdlib.safeAdd256(v8065, v8062);
      await stdlib.mapSet(map2, v3029, v8067);
      const v8068 = v7739[stdlib.checkedBigNumberify('./fullsale.rsh:214:44:array ref', stdlib.UInt_max, '2')];
      const v8071 = stdlib.safeAdd(v8068, v7741);
      const v8072 = stdlib.Array_set(v7739, stdlib.checkedBigNumberify('./fullsale.rsh:214:38:decimal', stdlib.UInt_max, '2'), v8071);
      const v8073 = v8072[stdlib.checkedBigNumberify('./fullsale.rsh:215:46:array ref', stdlib.UInt_max, '3')];
      const v8074 = stdlib.safeAdd(v8073, v7734);
      const v8075 = stdlib.Array_set(v8072, stdlib.checkedBigNumberify('./fullsale.rsh:215:39:decimal', stdlib.UInt_max, '3'), v8074);
      const v8076 = v8075[stdlib.checkedBigNumberify('./fullsale.rsh:216:46:array ref', stdlib.UInt_max, '0')];
      const v8077 = stdlib.safeSub(v8076, v7734);
      const v8078 = stdlib.Array_set(v8075, stdlib.checkedBigNumberify('./fullsale.rsh:216:39:decimal', stdlib.UInt_max, '0'), v8077);
      await stdlib.mapSet(map5, v7733, v8078);
      const v8079 = v8078[stdlib.checkedBigNumberify('./fullsale.rsh:219:25:array ref', stdlib.UInt_max, '0')];
      const v8080 = stdlib.eq(v8079, stdlib.checkedBigNumberify('./fullsale.rsh:219:32:decimal', stdlib.UInt_max, '0'));
      if (v8080) {
        const v8081 = 'compl';
        await stdlib.mapSet(map6, v7733, v8081);
        const v8082 = true;
        const v8083 = await txn1.getOutput('completeSwap', 'v8082', ctc8, v8082);
        if (v1506) {
          stdlib.protect(ctc0, await interact.out(v7665, v8083), {
            at: './fullsale.rsh:191:13:application',
            fs: ['at ./fullsale.rsh:191:13:application call to [unknown function] (defined at: ./fullsale.rsh:191:13:function exp)', 'at ./fullsale.rsh:225:20:application call to "res" (defined at: ./fullsale.rsh:203:13:function exp)', 'at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
            msg: 'out',
            who: 'completeSwap'
            });
          }
        else {
          }
        
        const v8090 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7733), null);
        const v8091 = stdlib.fromSome(v8090, false);
        if (v8091) {
          const v8100 = stdlib.safeAdd256(v2474, v8062);
          const v8101 = {
            ...v2435, 'totST': v8100};
          await stdlib.mapSet(map7, v7733, false);
          const v20137 = v8101;
          const v20139 = v7804;
          const v20140 = v8101.totST;
          const v20141 = v8101.totBT;
          const v20142 = v8101.distrNum;
          const v20143 = v8101.saleLocked;
          const v20144 = v8101.docHash;
          const v20145 = v20144[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20146 = v8101.cv;
          const v20147 = v20146[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20148 = v20146[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20149 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20150 = v20149[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20151 = stdlib.cast("UInt", "UInt256", v20150, false, true);
          const v20152 = v8101.ctcMan;
          return;
          }
        else {
          const v8093 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7733), null);
          const v8094 = stdlib.fromSome(v8093, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8096 = stdlib.safeSub256(v8094, v8062);
          await stdlib.mapSet(map0, v7733, v8096);
          const v20165 = v2435;
          const v20167 = v7804;
          const v20168 = v2435.totST;
          const v20169 = v2435.totBT;
          const v20170 = v2435.distrNum;
          const v20171 = v2435.saleLocked;
          const v20172 = v2435.docHash;
          const v20173 = v20172[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20174 = v2435.cv;
          const v20175 = v20174[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20176 = v20174[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20177 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20178 = v20177[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20179 = stdlib.cast("UInt", "UInt256", v20178, false, true);
          const v20180 = v2435.ctcMan;
          return;
          }}
      else {
        await stdlib.mapSet(map6, v7733, v8049);
        const v8104 = true;
        const v8105 = await txn1.getOutput('completeSwap', 'v8104', ctc8, v8104);
        if (v1506) {
          stdlib.protect(ctc0, await interact.out(v7665, v8105), {
            at: './fullsale.rsh:191:13:application',
            fs: ['at ./fullsale.rsh:191:13:application call to [unknown function] (defined at: ./fullsale.rsh:191:13:function exp)', 'at ./fullsale.rsh:225:20:application call to "res" (defined at: ./fullsale.rsh:203:13:function exp)', 'at ./fullsale.rsh:203:13:application call to [unknown function] (defined at: ./fullsale.rsh:203:13:function exp)'],
            msg: 'out',
            who: 'completeSwap'
            });
          }
        else {
          }
        
        const v8112 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7733), null);
        const v8113 = stdlib.fromSome(v8112, false);
        if (v8113) {
          const v8122 = stdlib.safeAdd256(v2474, v8062);
          const v8123 = {
            ...v2435, 'totST': v8122};
          await stdlib.mapSet(map7, v7733, false);
          const v20193 = v8123;
          const v20195 = v7804;
          const v20196 = v8123.totST;
          const v20197 = v8123.totBT;
          const v20198 = v8123.distrNum;
          const v20199 = v8123.saleLocked;
          const v20200 = v8123.docHash;
          const v20201 = v20200[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20202 = v8123.cv;
          const v20203 = v20202[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20204 = v20202[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20205 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20206 = v20205[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20207 = stdlib.cast("UInt", "UInt256", v20206, false, true);
          const v20208 = v8123.ctcMan;
          return;
          }
        else {
          const v8115 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7733), null);
          const v8116 = stdlib.fromSome(v8115, stdlib.checkedBigNumberify('./fullsale.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8118 = stdlib.safeSub256(v8116, v8062);
          await stdlib.mapSet(map0, v7733, v8118);
          const v20221 = v2435;
          const v20223 = v7804;
          const v20224 = v2435.totST;
          const v20225 = v2435.totBT;
          const v20226 = v2435.distrNum;
          const v20227 = v2435.saleLocked;
          const v20228 = v2435.docHash;
          const v20229 = v20228[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20230 = v2435.cv;
          const v20231 = v20230[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20232 = v20230[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20233 = v7804[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20234 = v20233[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20235 = stdlib.cast("UInt", "UInt256", v20234, false, true);
          const v20236 = v2435.ctcMan;
          return;
          }}
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc26 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc25,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc25,
    claimSwapProceeds0_324: ctc25,
    completeSwap0_324: ctc26,
    dBT0_324: ctc21,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc25,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2800 = ctc.selfAddress();
  const v2802 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:373:13:application call to [unknown function] (defined at: ./fullsale.rsh:373:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "rundBT0_324" (defined at: ./fullsale.rsh:370:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v2803 = v2802[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2806 = stdlib.addressEq(v2800, v2415);
  const v2808 = stdlib.addressEq(v2800, v2512);
  const v2809 = v2806 ? true : v2808;
  stdlib.assert(v2809, {
    at: './fullsale.rsh:374:23:application',
    fs: ['at ./fullsale.rsh:373:13:application call to [unknown function] (defined at: ./fullsale.rsh:373:20:function exp)', 'at ./fullsale.rsh:373:13:application call to [unknown function] (defined at: ./fullsale.rsh:373:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "rundBT0_324" (defined at: ./fullsale.rsh:370:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v2810 = stdlib.cast("UInt256", "UInt", v2803, false, true);
  const v2811 = stdlib.gt(v2810, stdlib.checkedBigNumberify('./fullsale.rsh:375:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2811, {
    at: './fullsale.rsh:375:23:application',
    fs: ['at ./fullsale.rsh:373:13:application call to [unknown function] (defined at: ./fullsale.rsh:373:20:function exp)', 'at ./fullsale.rsh:373:13:application call to [unknown function] (defined at: ./fullsale.rsh:373:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "rundBT0_324" (defined at: ./fullsale.rsh:370:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v2815 = ['dBT0_324', v2802];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2815],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:378:24:decimal', stdlib.UInt_max, '0'), [[v2810, v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v8328 = v8244[stdlib.checkedBigNumberify('./fullsale.rsh:370:13:spread', stdlib.UInt_max, '0')];
          const v8329 = stdlib.cast("UInt256", "UInt", v8328, false, true);
          ;
          const v8380 = stdlib.add(v2509, v8329);
          const v8382 = stdlib.Array_set(v2508, '0', v8380);
          const v8383 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:80:33:dot', stdlib.UInt_max, '0'), v8382);
          sim_r.txns.push({
            amt: v8329,
            kind: 'to',
            tok: v2419
            });
          const v8713 = stdlib.safeAdd256(v2475, v8328);
          const v8714 = {
            ...v2435, 'totBT': v8713};
          const v8716 = stdlib.safeAdd256(v2476, stdlib.checkedBigNumberify('./fullsale.rsh:385:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8717 = {
            ...v8714, 'distrNum': v8716};
          const v8718 = {
            ...v8717, 'currDistr': v8328};
          const v8719 = true;
          const v8720 = await txn1.getOutput('dBT', 'v8719', ctc8, v8719);
          
          const v20725 = v8718;
          const v20727 = v8383;
          const v20728 = v8718.totST;
          const v20729 = v8718.totBT;
          const v20730 = v8718.distrNum;
          const v20731 = v8718.saleLocked;
          const v20732 = v8718.docHash;
          const v20733 = v20732[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20734 = v8718.cv;
          const v20735 = v20734[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20736 = v20734[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20737 = v8383[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20738 = v20737[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20739 = stdlib.cast("UInt", "UInt256", v20738, false, true);
          const v20740 = v8718.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      undefined /* setApiDetails */;
      const v8328 = v8244[stdlib.checkedBigNumberify('./fullsale.rsh:370:13:spread', stdlib.UInt_max, '0')];
      const v8329 = stdlib.cast("UInt256", "UInt", v8328, false, true);
      ;
      const v8380 = stdlib.add(v2509, v8329);
      const v8382 = stdlib.Array_set(v2508, '0', v8380);
      const v8383 = stdlib.Array_set(v2438, stdlib.checkedBigNumberify('./fullsale.rsh:80:33:dot', stdlib.UInt_max, '0'), v8382);
      ;
      const v8706 = stdlib.addressEq(v3029, v2415);
      const v8708 = stdlib.addressEq(v3029, v2512);
      const v8709 = v8706 ? true : v8708;
      stdlib.assert(v8709, {
        at: './fullsale.rsh:381:24:application',
        fs: ['at ./fullsale.rsh:380:13:application call to [unknown function] (defined at: ./fullsale.rsh:380:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v8711 = stdlib.gt(v8329, stdlib.checkedBigNumberify('./fullsale.rsh:382:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8711, {
        at: './fullsale.rsh:382:24:application',
        fs: ['at ./fullsale.rsh:380:13:application call to [unknown function] (defined at: ./fullsale.rsh:380:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v8713 = stdlib.safeAdd256(v2475, v8328);
      const v8714 = {
        ...v2435, 'totBT': v8713};
      const v8716 = stdlib.safeAdd256(v2476, stdlib.checkedBigNumberify('./fullsale.rsh:385:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v8717 = {
        ...v8714, 'distrNum': v8716};
      const v8718 = {
        ...v8717, 'currDistr': v8328};
      const v8719 = true;
      const v8720 = await txn1.getOutput('dBT', 'v8719', ctc8, v8719);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v8244, v8720), {
          at: './fullsale.rsh:371:13:application',
          fs: ['at ./fullsale.rsh:371:13:application call to [unknown function] (defined at: ./fullsale.rsh:371:13:function exp)', 'at ./fullsale.rsh:388:20:application call to "res" (defined at: ./fullsale.rsh:380:13:function exp)', 'at ./fullsale.rsh:380:13:application call to [unknown function] (defined at: ./fullsale.rsh:380:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v20725 = v8718;
      const v20727 = v8383;
      const v20728 = v8718.totST;
      const v20729 = v8718.totBT;
      const v20730 = v8718.distrNum;
      const v20731 = v8718.saleLocked;
      const v20732 = v8718.docHash;
      const v20733 = v20732[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v20734 = v8718.cv;
      const v20735 = v20734[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v20736 = v20734[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v20737 = v8383[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20738 = v20737[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20739 = stdlib.cast("UInt", "UInt256", v20738, false, true);
      const v20740 = v8718.ctcMan;
      return;
      
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc26 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc27 = stdlib.T_Tuple([ctc1]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc25,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc25,
    claimSwapProceeds0_324: ctc25,
    completeSwap0_324: ctc26,
    dBT0_324: ctc27,
    docHash0_324: ctc21,
    initSwap0_324: ctc19,
    optIn0_324: ctc25,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2711 = ctc.selfAddress();
  const v2713 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:266:13:application call to [unknown function] (defined at: ./fullsale.rsh:266:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "rundocHash0_324" (defined at: ./fullsale.rsh:263:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v2719 = stdlib.eq(v2501, stdlib.checkedBigNumberify('./fullsale.rsh:268:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2719, {
    at: './fullsale.rsh:268:23:application',
    fs: ['at ./fullsale.rsh:266:13:application call to [unknown function] (defined at: ./fullsale.rsh:266:18:function exp)', 'at ./fullsale.rsh:266:13:application call to [unknown function] (defined at: ./fullsale.rsh:266:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "rundocHash0_324" (defined at: ./fullsale.rsh:263:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v2720 = stdlib.addressEq(v2711, v2415);
  const v2722 = stdlib.addressEq(v2711, v2512);
  const v2723 = v2720 ? true : v2722;
  stdlib.assert(v2723, {
    at: './fullsale.rsh:269:23:application',
    fs: ['at ./fullsale.rsh:266:13:application call to [unknown function] (defined at: ./fullsale.rsh:266:18:function exp)', 'at ./fullsale.rsh:266:13:application call to [unknown function] (defined at: ./fullsale.rsh:266:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "rundocHash0_324" (defined at: ./fullsale.rsh:263:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v2727 = ['docHash0_324', v2713];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2727],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:273:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:273:26:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          ;
          const v9306 = v8823[stdlib.checkedBigNumberify('./fullsale.rsh:263:13:spread', stdlib.UInt_max, '0')];
          const v9314 = stdlib.safeAdd(v2501, stdlib.checkedBigNumberify('./fullsale.rsh:279:76:decimal', stdlib.UInt_max, '1'));
          const v9316 = [v9306, v9314, v3031];
          const v9317 = {
            ...v2435, 'docHash': v9316};
          const v9318 = true;
          const v9319 = await txn1.getOutput('docHash', 'v9318', ctc8, v9318);
          
          const v21229 = v9317;
          const v21231 = v2438;
          const v21232 = v9317.totST;
          const v21233 = v9317.totBT;
          const v21234 = v9317.distrNum;
          const v21235 = v9317.saleLocked;
          const v21236 = v9317.docHash;
          const v21237 = v21236[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21238 = v9317.cv;
          const v21239 = v21238[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21240 = v21238[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21241 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21242 = v21241[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21243 = stdlib.cast("UInt", "UInt256", v21242, false, true);
          const v21244 = v9317.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v9306 = v8823[stdlib.checkedBigNumberify('./fullsale.rsh:263:13:spread', stdlib.UInt_max, '0')];
      const v9309 = stdlib.eq(v2501, stdlib.checkedBigNumberify('./fullsale.rsh:277:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9309, {
        at: './fullsale.rsh:277:24:application',
        fs: ['at ./fullsale.rsh:275:13:application call to [unknown function] (defined at: ./fullsale.rsh:275:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v9310 = stdlib.addressEq(v3029, v2415);
      const v9312 = stdlib.addressEq(v3029, v2512);
      const v9313 = v9310 ? true : v9312;
      stdlib.assert(v9313, {
        at: './fullsale.rsh:278:24:application',
        fs: ['at ./fullsale.rsh:275:13:application call to [unknown function] (defined at: ./fullsale.rsh:275:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v9314 = stdlib.safeAdd(v2501, stdlib.checkedBigNumberify('./fullsale.rsh:279:76:decimal', stdlib.UInt_max, '1'));
      const v9316 = [v9306, v9314, v3031];
      const v9317 = {
        ...v2435, 'docHash': v9316};
      const v9318 = true;
      const v9319 = await txn1.getOutput('docHash', 'v9318', ctc8, v9318);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v8823, v9319), {
          at: './fullsale.rsh:264:13:application',
          fs: ['at ./fullsale.rsh:264:13:application call to [unknown function] (defined at: ./fullsale.rsh:264:13:function exp)', 'at ./fullsale.rsh:280:20:application call to "res" (defined at: ./fullsale.rsh:275:13:function exp)', 'at ./fullsale.rsh:275:13:application call to [unknown function] (defined at: ./fullsale.rsh:275:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v21229 = v9317;
      const v21231 = v2438;
      const v21232 = v9317.totST;
      const v21233 = v9317.totBT;
      const v21234 = v9317.distrNum;
      const v21235 = v9317.saleLocked;
      const v21236 = v9317.docHash;
      const v21237 = v21236[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v21238 = v9317.cv;
      const v21239 = v21238[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v21240 = v21238[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v21241 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21242 = v21241[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21243 = stdlib.cast("UInt", "UInt256", v21242, false, true);
      const v21244 = v9317.ctcMan;
      return;
      
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc21,
    addCoopId0_324: ctc22,
    addWL0_324: ctc23,
    approveSwap0_324: ctc23,
    cBT0_324: ctc24,
    cCM0_324: ctc23,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc23
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2538 = ctc.selfAddress();
  const v2540 = stdlib.protect(ctc19, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./fullsale.rsh:113:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'initSwap'
    });
  const v2541 = v2540[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2542 = v2540[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2543 = v2540[stdlib.checkedBigNumberify('./fullsale.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2549 = stdlib.addressEq(v2538, v2415);
  const v2551 = stdlib.addressEq(v2538, v2512);
  const v2552 = v2549 ? true : v2551;
  const v2553 = v2543 ? v2552 : false;
  const v2554 = v2543 ? false : true;
  const v2555 = v2553 ? true : v2554;
  stdlib.assert(v2555, {
    at: './fullsale.rsh:117:23:application',
    fs: ['at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:32:function exp)', 'at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./fullsale.rsh:113:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'if you are not creator or manager, the swap cannot be share issuance type',
    who: 'initSwap'
    });
  const v2556 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2538), null);
  const v2557 = {
    None: 0,
    Some: 1
    }[v2556[0]];
  const v2558 = stdlib.eq(v2557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2560 = v2558 ? v2554 : false;
  const v2562 = v2560 ? true : v2543;
  stdlib.assert(v2562, {
    at: './fullsale.rsh:118:23:application',
    fs: ['at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:32:function exp)', 'at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./fullsale.rsh:113:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member',
    who: 'initSwap'
    });
  const v2563 = stdlib.gt(v2541, stdlib.checkedBigNumberify('./fullsale.rsh:119:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2563, {
    at: './fullsale.rsh:119:23:application',
    fs: ['at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:32:function exp)', 'at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./fullsale.rsh:113:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'initSwap'
    });
  const v2564 = stdlib.gt(v2542, stdlib.checkedBigNumberify('./fullsale.rsh:120:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2564, {
    at: './fullsale.rsh:120:23:application',
    fs: ['at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:32:function exp)', 'at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./fullsale.rsh:113:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'price must be greater than 0',
    who: 'initSwap'
    });
  const v2565 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2538), null);
  const v2566 = '-----';
  const v2567 = stdlib.fromSome(v2565, v2566);
  const v2569 = stdlib.digest([ctc6], [v2567]);
  const v2571 = stdlib.digest([ctc6], [v2566]);
  const v2572 = stdlib.digestEq(v2569, v2571);
  const v2576 = 'compl';
  const v2579 = stdlib.digest([ctc6], [v2576]);
  const v2580 = stdlib.digestEq(v2569, v2579);
  const v2581 = v2572 ? true : v2580;
  stdlib.assert(v2581, {
    at: './fullsale.rsh:121:23:application',
    fs: ['at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:32:function exp)', 'at ./fullsale.rsh:116:13:application call to [unknown function] (defined at: ./fullsale.rsh:116:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./fullsale.rsh:113:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'there must be no pending swap',
    who: 'initSwap'
    });
  const v2587 = ['initSwap0_324', v2540];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2587],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:124:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:124:32:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "initSwap"
            });
          ;
          ;
          const v9905 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v9906 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v9907 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '2')];
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3029), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v3029), null);
          const v9942 = 'initd';
          await stdlib.simMapSet(sim_r, 6, v3029, v9942);
          await stdlib.simMapSet(sim_r, 7, v3029, v9907);
          const v9943 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3029), null);
          const v9945 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v9947 = stdlib.fromSome(v9943, v9945);
          const v9948 = stdlib.Array_set(v9947, stdlib.checkedBigNumberify('./fullsale.rsh:135:38:decimal', stdlib.UInt_max, '0'), v9905);
          const v9949 = stdlib.Array_set(v9948, stdlib.checkedBigNumberify('./fullsale.rsh:136:39:decimal', stdlib.UInt_max, '1'), v9906);
          const v9950 = stdlib.Array_set(v9949, stdlib.checkedBigNumberify('./fullsale.rsh:137:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./fullsale.rsh:137:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3029, v9950);
          const v9951 = true;
          const v9952 = await txn1.getOutput('initSwap', 'v9951', ctc8, v9951);
          
          const v21733 = v2435;
          const v21735 = v2438;
          const v21736 = v2435.totST;
          const v21737 = v2435.totBT;
          const v21738 = v2435.distrNum;
          const v21739 = v2435.saleLocked;
          const v21740 = v2435.docHash;
          const v21741 = v21740[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21742 = v2435.cv;
          const v21743 = v21742[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21744 = v21742[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21745 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21746 = v21745[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21747 = stdlib.cast("UInt", "UInt256", v21746, false, true);
          const v21748 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v9905 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '0')];
      const v9906 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '1')];
      const v9907 = v9402[stdlib.checkedBigNumberify('./fullsale.rsh:113:13:spread', stdlib.UInt_max, '2')];
      const v9909 = stdlib.addressEq(v3029, v2415);
      const v9911 = stdlib.addressEq(v3029, v2512);
      const v9912 = v9909 ? true : v9911;
      const v9913 = v9907 ? v9912 : false;
      const v9914 = v9907 ? false : true;
      const v9915 = v9913 ? true : v9914;
      stdlib.assert(v9915, {
        at: './fullsale.rsh:127:24:application',
        fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
        msg: 'if you are not creator or manager, the swap cannot be share issuance type',
        who: 'initSwap'
        });
      const v9916 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3029), null);
      const v9917 = {
        None: 0,
        Some: 1
        }[v9916[0]];
      const v9918 = stdlib.eq(v9917, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v9920 = v9918 ? v9914 : false;
      const v9922 = v9920 ? true : v9907;
      stdlib.assert(v9922, {
        at: './fullsale.rsh:128:24:application',
        fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
        msg: 'you must be a whitelist member',
        who: 'initSwap'
        });
      const v9923 = stdlib.gt(v9905, stdlib.checkedBigNumberify('./fullsale.rsh:129:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9923, {
        at: './fullsale.rsh:129:24:application',
        fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'initSwap'
        });
      const v9924 = stdlib.gt(v9906, stdlib.checkedBigNumberify('./fullsale.rsh:130:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9924, {
        at: './fullsale.rsh:130:24:application',
        fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'initSwap'
        });
      const v9925 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3029), null);
      const v9926 = '-----';
      const v9927 = stdlib.fromSome(v9925, v9926);
      const v9929 = stdlib.digest([ctc6], [v9927]);
      const v9931 = stdlib.digest([ctc6], [v9926]);
      const v9932 = stdlib.digestEq(v9929, v9931);
      const v9936 = 'compl';
      const v9939 = stdlib.digest([ctc6], [v9936]);
      const v9940 = stdlib.digestEq(v9929, v9939);
      const v9941 = v9932 ? true : v9940;
      stdlib.assert(v9941, {
        at: './fullsale.rsh:131:24:application',
        fs: ['at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
        msg: 'there must be no pending swap',
        who: 'initSwap'
        });
      const v9942 = 'initd';
      await stdlib.mapSet(map6, v3029, v9942);
      await stdlib.mapSet(map7, v3029, v9907);
      const v9943 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3029), null);
      const v9945 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v9947 = stdlib.fromSome(v9943, v9945);
      const v9948 = stdlib.Array_set(v9947, stdlib.checkedBigNumberify('./fullsale.rsh:135:38:decimal', stdlib.UInt_max, '0'), v9905);
      const v9949 = stdlib.Array_set(v9948, stdlib.checkedBigNumberify('./fullsale.rsh:136:39:decimal', stdlib.UInt_max, '1'), v9906);
      const v9950 = stdlib.Array_set(v9949, stdlib.checkedBigNumberify('./fullsale.rsh:137:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./fullsale.rsh:137:42:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3029, v9950);
      const v9951 = true;
      const v9952 = await txn1.getOutput('initSwap', 'v9951', ctc8, v9951);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v9402, v9952), {
          at: './fullsale.rsh:114:13:application',
          fs: ['at ./fullsale.rsh:114:13:application call to [unknown function] (defined at: ./fullsale.rsh:114:13:function exp)', 'at ./fullsale.rsh:140:20:application call to "res" (defined at: ./fullsale.rsh:126:13:function exp)', 'at ./fullsale.rsh:126:13:application call to [unknown function] (defined at: ./fullsale.rsh:126:13:function exp)'],
          msg: 'out',
          who: 'initSwap'
          });
        }
      else {
        }
      
      const v21733 = v2435;
      const v21735 = v2438;
      const v21736 = v2435.totST;
      const v21737 = v2435.totBT;
      const v21738 = v2435.distrNum;
      const v21739 = v2435.saleLocked;
      const v21740 = v2435.docHash;
      const v21741 = v21740[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v21742 = v2435.cv;
      const v21743 = v21742[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v21744 = v21742[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v21745 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21746 = v21745[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21747 = stdlib.cast("UInt", "UInt256", v21746, false, true);
      const v21748 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc24,
    approveSwap0_324: ctc24,
    cBT0_324: ctc21,
    cCM0_324: ctc24,
    cancelSwap0_324: ctc21,
    claimSwapProceeds0_324: ctc21,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc21,
    remWL0_324: ctc24
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2783 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:346:13:application call to [unknown function] (defined at: ./fullsale.rsh:346:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runoptIn0_324" (defined at: ./fullsale.rsh:343:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v2787 = ['optIn0_324', v2783];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2787],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:349:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:349:25:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 8, v3029, true);
          const v10540 = true;
          const v10541 = await txn1.getOutput('optIn', 'v10540', ctc8, v10540);
          
          const v22237 = v2435;
          const v22239 = v2438;
          const v22240 = v2435.totST;
          const v22241 = v2435.totBT;
          const v22242 = v2435.distrNum;
          const v22243 = v2435.saleLocked;
          const v22244 = v2435.docHash;
          const v22245 = v22244[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v22246 = v2435.cv;
          const v22247 = v22246[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v22248 = v22246[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v22249 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22250 = v22249[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22251 = stdlib.cast("UInt", "UInt256", v22250, false, true);
          const v22252 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map8, v3029, true);
      const v10540 = true;
      const v10541 = await txn1.getOutput('optIn', 'v10540', ctc8, v10540);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v9981, v10541), {
          at: './fullsale.rsh:344:13:application',
          fs: ['at ./fullsale.rsh:344:13:application call to [unknown function] (defined at: ./fullsale.rsh:344:13:function exp)', 'at ./fullsale.rsh:353:20:application call to "res" (defined at: ./fullsale.rsh:351:13:function exp)', 'at ./fullsale.rsh:351:13:application call to [unknown function] (defined at: ./fullsale.rsh:351:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v22237 = v2435;
      const v22239 = v2438;
      const v22240 = v2435.totST;
      const v22241 = v2435.totBT;
      const v22242 = v2435.distrNum;
      const v22243 = v2435.saleLocked;
      const v22244 = v2435.docHash;
      const v22245 = v22244[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v22246 = v2435.cv;
      const v22247 = v22246[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v22248 = v22246[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v22249 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22250 = v22249[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22251 = stdlib.cast("UInt", "UInt256", v22250, false, true);
      const v22252 = v2435.ctcMan;
      return;
      
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
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
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc16]);
  const ctc28 = stdlib.T_Data({
    aST0_324: ctc22,
    addCoopId0_324: ctc23,
    addWL0_324: ctc21,
    approveSwap0_324: ctc21,
    cBT0_324: ctc24,
    cCM0_324: ctc21,
    cancelSwap0_324: ctc24,
    claimSwapProceeds0_324: ctc24,
    completeSwap0_324: ctc25,
    dBT0_324: ctc26,
    docHash0_324: ctc27,
    initSwap0_324: ctc19,
    optIn0_324: ctc24,
    remWL0_324: ctc21
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
  
  
  const [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2744 = ctc.selfAddress();
  const v2746 = stdlib.protect(ctc21, await interact.in(), {
    at: './fullsale.rsh:1:23:application',
    fs: ['at ./fullsale.rsh:305:13:application call to [unknown function] (defined at: ./fullsale.rsh:305:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runremWL0_324" (defined at: ./fullsale.rsh:302:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v2750 = stdlib.addressEq(v2744, v2415);
  const v2752 = stdlib.addressEq(v2744, v2512);
  const v2753 = v2750 ? true : v2752;
  stdlib.assert(v2753, {
    at: './fullsale.rsh:306:23:application',
    fs: ['at ./fullsale.rsh:305:13:application call to [unknown function] (defined at: ./fullsale.rsh:305:18:function exp)', 'at ./fullsale.rsh:305:13:application call to [unknown function] (defined at: ./fullsale.rsh:305:13:function exp)', 'at ./fullsale.rsh:80:33:application call to "runremWL0_324" (defined at: ./fullsale.rsh:302:13:function exp)', 'at ./fullsale.rsh:80:33:application call to [unknown function] (defined at: ./fullsale.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v2757 = ['remWL0_324', v2746];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2415, v2419, v2435, v2438, v2474, v2475, v2476, v2478, v2499, v2501, v2504, v2506, v2508, v2509, v2510, v2512, v2757],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./fullsale.rsh:310:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./fullsale.rsh:310:26:decimal', stdlib.UInt_max, '0'), v2419]]],
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
      
      const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
      
      switch (v3030[0]) {
        case 'aST0_324': {
          const v3033 = v3030[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3612 = v3030[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4191 = v3030[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4770 = v3030[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5349 = v3030[1];
          
          break;
          }
        case 'cCM0_324': {
          const v5928 = v3030[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6507 = v3030[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7086 = v3030[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7665 = v3030[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8244 = v3030[1];
          
          break;
          }
        case 'docHash0_324': {
          const v8823 = v3030[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9402 = v3030[1];
          
          break;
          }
        case 'optIn0_324': {
          const v9981 = v3030[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10560 = v3030[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          ;
          const v11126 = v10560[stdlib.checkedBigNumberify('./fullsale.rsh:302:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v11126, undefined /* Nothing */);
          const v11132 = true;
          const v11133 = await txn1.getOutput('remWL', 'v11132', ctc8, v11132);
          
          const v22741 = v2435;
          const v22743 = v2438;
          const v22744 = v2435.totST;
          const v22745 = v2435.totBT;
          const v22746 = v2435.distrNum;
          const v22747 = v2435.saleLocked;
          const v22748 = v2435.docHash;
          const v22749 = v22748[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v22750 = v2435.cv;
          const v22751 = v22750[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v22752 = v22750[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v22753 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22754 = v22753[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22755 = stdlib.cast("UInt", "UInt256", v22754, false, true);
          const v22756 = v2435.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11, ctc28],
    waitIfNotPresent: false
    }));
  const {data: [v3030], secs: v3032, time: v3031, didSend: v1506, from: v3029 } = txn1;
  switch (v3030[0]) {
    case 'aST0_324': {
      const v3033 = v3030[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3612 = v3030[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4191 = v3030[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4770 = v3030[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5349 = v3030[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v5928 = v3030[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6507 = v3030[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7086 = v3030[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7665 = v3030[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8244 = v3030[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v8823 = v3030[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9402 = v3030[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v9981 = v3030[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10560 = v3030[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v11126 = v10560[stdlib.checkedBigNumberify('./fullsale.rsh:302:13:spread', stdlib.UInt_max, '0')];
      const v11127 = stdlib.addressEq(v3029, v2415);
      const v11129 = stdlib.addressEq(v3029, v2512);
      const v11130 = v11127 ? true : v11129;
      stdlib.assert(v11130, {
        at: './fullsale.rsh:313:24:application',
        fs: ['at ./fullsale.rsh:312:13:application call to [unknown function] (defined at: ./fullsale.rsh:312:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map9, v11126, undefined /* Nothing */);
      const v11132 = true;
      const v11133 = await txn1.getOutput('remWL', 'v11132', ctc8, v11132);
      if (v1506) {
        stdlib.protect(ctc0, await interact.out(v10560, v11133), {
          at: './fullsale.rsh:303:13:application',
          fs: ['at ./fullsale.rsh:303:13:application call to [unknown function] (defined at: ./fullsale.rsh:303:13:function exp)', 'at ./fullsale.rsh:316:20:application call to "res" (defined at: ./fullsale.rsh:312:13:function exp)', 'at ./fullsale.rsh:312:13:application call to [unknown function] (defined at: ./fullsale.rsh:312:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v22741 = v2435;
      const v22743 = v2438;
      const v22744 = v2435.totST;
      const v22745 = v2435.totBT;
      const v22746 = v2435.distrNum;
      const v22747 = v2435.saleLocked;
      const v22748 = v2435.docHash;
      const v22749 = v22748[stdlib.checkedBigNumberify('./fullsale.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v22750 = v2435.cv;
      const v22751 = v22750[stdlib.checkedBigNumberify('./fullsale.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v22752 = v22750[stdlib.checkedBigNumberify('./fullsale.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v22753 = v2438[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22754 = v22753[stdlib.checkedBigNumberify('./fullsale.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22755 = stdlib.cast("UInt", "UInt256", v22754, false, true);
      const v22756 = v2435.ctcMan;
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
    impure: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `approveSwap(address)byte`, `cBT()uint256`, `cCM(address)byte`, `cancelSwap()byte`, `claimSwapProceeds()byte`, `completeSwap(address,uint64)byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `initSwap(uint64,uint64,byte)byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSwap(address)(uint64,uint64,uint64,byte[5],uint64,byte)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`],
    sigs: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `approveSwap(address)byte`, `cBT()uint256`, `cCM(address)byte`, `cancelSwap()byte`, `claimSTBT(address)(uint256,uint256)`, `claimSwapProceeds()byte`, `completeSwap(address,uint64)byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `initSwap(uint64,uint64,byte)byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSwap(address)(uint64,uint64,uint64,byte[5],uint64,byte)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`]
    },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 2,
  LocalNumUint: 0,
  appApproval: `ByA2AAEDIAhABGAYEQahAhACBdEB1J2TzAjg5cOwDOO5zasO2I6Z4A6fk4HRD+LOidYOsILfsAyamI65DJwF7oKunwqht9rXCqKmnpsMggOiA8ID8eGT4Qjd0eGYCev2jfsF3ZaWgwiK0sKbCLytx6sIl5z91Ab95qmlB7wF2Nv8mQP5hIqRBcn8mLwF2wSXxMGvAZz4g4gC////////////ASjJAvECBw2BAn8mDAEBAQABAwECAQQBBQAFLS0tLS0BByCf0CYEl4tw6mkMuSyiIXqYTjqXWt+37US2HyWYEUp9PyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIBACI1ADEYQRJ/JwZkSSJbNQFJIQRbNQIhDFs1CDEZIxJBABwxACEPr0sBKUsCVwB/ZksBKEsCV39SZkhIQhIyNhoAF0lBBEMiNQQjNQZJIRAMQAKjSSERDEABN0khEgxAAHdJIRMMQAAxSSEUDEAAFCEUEkQ2GgE1/yo0/1AhBa9QQgR7IRMSRDYaATX/gAENNP9QIQWvUEIEZUkhFQxAABohFRJENhoBNhoCUDX/gAEINP9QgTivUEIERCESEkQ2GgE2GgJQNhoDUDX/gAELNP9QgU+vUEIEJkkhFgxAAF5JIRcMQAAuIRcSRDQBJBJEKWQoZFArZFAqZFAnBGRQJwVkUEk1AyEYJVg0A1cgCFA1B0IRayEWEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQOB4gMjWDUHQhFCIRESRDQBJBJENhoBNf8yAzT/iBFXV0IhSTX+VwEgNP4iVU0yAzT/iBFCV2MhSTX+VwEgNP4iVU1QMgM0/4gRLFeEIUk1/lcBIDT+IlVNUDUHQhDuSSEZDEAAyUkhGgxAAK1JIRsMQABwIRsSRDQBJBJENhoBNf8yAzT/iBDuV6UhSTX9VwEgNP0iVU1JNf5XAAg0/lcICFA0/lcYCFAnBzT/iBDHV8YGSTX9VwEFNP0iVU1QNP5XEAhQIjT/iBCsV8wCSTX9VwEBFzT9IlVNFlEHCFA1B0IQaSEaEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQMhHCVYNAMhHSVYUDQDIR4lWFA1B0IQMyEZEkQnBjX/gAEGNP9QIQevUEICnUkhHwxAAGRJISAMQAAfISASRDQBJBJENhoBiBArV9ABIlUjEhZRBwg1B0IP8SEfEkQ0ASQSRDYaATX/MgM0/4gQBlcAIUk1/lcBIDT+IlVNMgM0/4gP8VchIUk1/lcBIDT+IlVNUDUHQg+zIRASRDQBJBJEKWQoZFArZFAqZFAnBGRQJwVkUEk1A4HjA4FwWDUHQg+JSSEhDEAAy0khIgxAAExJISMMQAAxSSEkDEAAFCEkEkQ2GgE1/ys0/1AhBa9QQgHYISMSRDYaATX/gAEJNP9QIQWvUEIBwiEiEkQ2GgE1/yg0/1CBPK9QQgGuSSElDEAAXUkhJgxAAC4hJhJENAEkEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDVwAgNAMhJyVYUDUHQg7zISUSRDQBJBJEIjYaAYgPDVfOAkk1/1cBARc0/yJVTRZRBwg1B0IOyyEhEkQnBjX/Jwg0/1AhB69QQgE2SSEoDEAAZ0khKQxAAC5JISoMQAASISoSRDYaATX/gAEKNP9QQgEPISkSRCcGNf+AAQw0/1AhB69QQgD6ISgSRDQBJBJEKWQoZFArZFAqZFAnBGRQJwVkUEk1AyErIQZYNAOB3wSBJFhQNQdCDklJISwMQAAwSSEtDEAAFSEtEkQ2GgE1/ycFNP9QIQWvUEIApSEsEkQnBjX/JwQ0/1AhB69QQgCRgfX635IBEkQ2GgE2GgJQNhoDUDX/KTT/UEIAdTYaAhc1BDYaAzYaARdJIQ0MQAtBSSQMQABaJBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQK2RQKmRQJwRkUCcFZFBJNQNXACA1/4AEp2XEtLAyBiEuD0Q0/zEAEkQ0/zQDJVs0AyEvITBYMgY0AyExIQlYQgxGSCQ0ARJENARJIhJMNAISEUQpZChkUCtkUCpkUCcEZFAnBWRQSTUDSUpKSklXACA1/yVbNf4hLyEwWDX9ITEhCVg1/CEcJVg1+4HTBFs1+oGDBSEJWDX5gZQFWzX4ISclWDX3STUFNfaABOO40ZU09lCwMgYhLgxENPYiVUkhMgxABkVJgQoMQAIGSYEMDEAAlUkhMwxAAFAhMxJENPZXASA19TEANP8SMQA09xIRRDT1SYgM9ylc0EsBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAArfAGwKDUHNP80/jT9MgY0/EILXkgxADEAiAy8gAIBAVzOSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAACksAbAoNQc0/zT+NP0yBjT8QgsgSYELDEABIEg09lcBETX1NPUiWzX0NPUhBFs18zT1VxABF0k18hQ18TTyMQA0/xIxADT3EhEQNPERRDEAiAxHV9ABIlUjEjTxEDTyEUQ09CINRDTzIg1EJwdJNfAxAIgMJVfGBkk17lcBBTTuIlVNAUk17zTwARI07ycJEhFEMQAxAIgMAYAGAWluaXRkXMZLASlLAlcAf2ZLAShLAld/UmZISDEAMQCIC9woNPIWUQcIUFzMSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAu3KDIDMQCIC69XpSFJNe5XASA07iJVTTT0FlwANPMWXAghBK9cGFBcpUsBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAAm3wGwKDUHNP80/jT9MgY0/EIJ+Ug09lcBYDX1NPoiEkQxADT/EjEANPcSEUSACQAAAAAAACRmAbAoNQc0/zT+NP009TT6IwgWUDIGFlBckDIGNPxCCbZJIQQMQAOZSYEJDEAAeUg09lcBIDX1NPVJNfRJkyEFDkQhCFs18zTzNP6ICx4xADT/EjEANPcSEUQ08yINRIAJAAAAAAAAIg8BsCg1BzT/NP40/SE0NAMhHSVYNPSgiAsKXTQDIR4lWCcKoIgK/VxwNPRcIDIGNPw0+TT4NPMIFlwAXABCCS9INPZXASg19bEisgEhCrIQNAiyGLM09VcAIDX0NPUlWzXzMgM09IgKbFelIUk18VcBIDTxIlVNNfI08zTyIQRbCzXxNPw0+TT4NPEIFlwAXAA18DTxNP6ICmo08yINRDTzNPIiWw5EMQCICilX0AEiVSMSRCcHNPSIChpXxgZJNe5XAQU07iJVTQE174AFcGFydGw17jTvgCBzTVWDHYUd5t72OmjF2MyImT6uoJMIwYMh2SxutPzqABI07zTuARIRRCEIrzTzFlA17TEAMQCICcMoMgMxAIgJu1cAIUk17FcBIDTsIlVNNO2giAn2UFwASwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAmJKDIDMQCICYFXQiFJNexXASA07CJVTTTtoIgJvFBcQksBKUsCVwB/ZksBKEsCV39SZkhINPJJIQxbNPEIFlwQSTXsSSEIWzTzCBZcGEk160kiWzTzCRZcADXqNPRJiAkpKDTqUFylSwEpSwJXAH9mSwEoSwJXf1JmSEg06iJbIhJBAMc09EmICQCABgFjb21wbFzGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAAB+SAbAoNQciNPSICM1XzAJJNelXAQEXNOkiVU1BADY09EmICLUnC1zMSwEpSwJXAH9mSwEoSwJXf1JmSEg0/zT+NP0hCzT7NO2giAjcXTIGNPBCBx809EmICH8oMgM09IgId1cAIUk16VcBIDTpIlVNNO2hiAiyUFwASwEpSwJXAH9mSwEoSwJXf1JmSEg0/zT+NP0yBjTwQgbZNPRJiAg5KDTuUFzGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAAB+oAbAoNQciNPSICApXzAJJNelXAQEXNOkiVU1BADY09EmIB/InC1zMSwEpSwJXAH9mSwEoSwJXf1JmSEg0/zT+NP0hCzT7NO2giAgZXTIGNPBCBlw09EmIB7woMgM09IgHtFcAIUk16VcBIDTpIlVNNO2hiAfvUFwASwEpSwJXAH9mSwEoSwJXf1JmSEg0/zT+NP0yBjTwQgYWSDEAiAd2V9ABIlUjEkQyAzEAiAdnV6UhSTX0VwEgNPQiVU1JNfUhDFtJNfQiDUQ0+DT0D0SxIrIBNPSyEiEGshAxALIUNP6yEbMxADEAiAcrKDT1IQSvXBBQXKVLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAAHQ8BsCg1BzT/NP40/TIGNPw0+TT4NPQJFlwAXABCBX5JJAxAAqRJIQ4MQADrSSEKDEAAsEgxAIgGylfQASJVIxJEJwdJNfUxAIgGuFfGBkk181cBBTTzIlVNAUk19DT1ARM09CcJExBEMQAxAIgGlCg09VBcxksBKUsCVwB/ZksBKEsCV39SZkhIMQAxAIgGcygyAzEAiAZrV6UhSTXzVwEgNPMiVU0hBK9cACEEr1wIUFylSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABqnAbAoNQc0/zT+NP0yBjT8QgS6SDT2VwEgNfUxADT/EjEANPcSEUSACQAAAAAAABg8AbAoNQc0/zT+NP009VwAMgY0/EIEhkkhBgxAARlIMQCIBd9X0AEiVSMSRDQDIRglWDIDpUQ0+zIDpUQyAzEAiAXAV0IhSTX0VwEgNPQiVU019TT7NPWnRDT1MgOlRDT1NP1XICCjiAXoNPuiiAXiSTX0SZMhBQ5EIQhbSTXzNPgORLEisgE087ISIQayEDEAshQ0/rIRszEAMQCIBWQoMgMxAIgFXFdjIUk18lcBIDTyIlVNNPSgiAWXUFxjSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAUqKDIDMQCIBSJXhCFJNfJXASA08iJVTScKoIgFXVBchEsBKUsCVwB/ZksBKEsCV39SZkhIgAgAAAAAAAAV2TT0ULA09DUHNP80/jT9MgY0/DT5NPg08wkWXABcAEIDZkg09lcBIDX1NPU19DEANP8SMQA09xIRRCcHNPSIBK1XxgZJNfNXAQU08yJVTQGAIJVPK2UUdMISvagB9xR3WGJ5PssOUDNabUvT8WFJ1JgJEkQ09EmIBHSABgFhcHBydlzGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABN5AbAoNQc0/zT+NP0yBjT8QgLUSSMMQACESSENDEAATUg09lcBIDX1MQA0/xIxADT3EhFENPVJiAQTKFzQSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABEbAbAoNQc0/zT+NP0yBjT8QgJ6SDT2VwEkNfWACQAAAAAAAA7KAbAoNQc0/zT+NP00AyErIQZYNPVQXEAyBjT8QgJKSDT2VwFgNfU09VcAIDX0NPVXICA18zT1V0AgNfI09DT/EjT0NPcSEUQ08jIDpUQ080mIA3soXNBLASlLAlcAf2ZLAShLAld/UmZISDTzSYgDXigyAzTziANWVwAhSTXxVwEgNPEiVU008qCIA5FQXABLASlLAlcAf2ZLAShLAld/UmZISDTzSYgDJSgyAzTziAMdV0IhSTXxVwEgNPEiVU008qCIA1hQXEJLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAADHcBsCg1BzT/NP40/SELNPs08qCIAyJdMgY0/EIBZSISRIHAmgyIAtixIrIBIQqyECKyGIAGBzEAMgkSsh4nCLIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/FepIDX7gASaMPkdNP9QNP4WUQcIUDT9UDT8FlA0+1CwIQmvNfqBoI0GiAJisSKyASKyEiEGshAyCrIUNPyyEbMxADT8NP0yA1CAKDIuMDJjb29wZXJhdGl2SWRjb29wZXJhdGl2SWRjb29wZXJhdGl2SWRQIQSvUDIDUIBwYWpkbmFlaW5hd2luZGlhZW5ndG5pZnJqd3JpdG5pcXdybmlyZWZpbmRpbmlnYWpkbmFlaW5hd2lkaWFlbmd0bmlpdG5pcXdybmlyZWZpbmRpbmlnZnVhZWJmdWJhd3VyAAAAAAAAAAAAAAAAAAAAAFA0/hZRBwhQMgNQMgNQIQSvUDIGNPpJVwARIQSvXABcAEIAADX/Nf41/TX8Nfs0/SELJVg1+jT9ITQlWDX5NP1XcCA1+DT9gYACI1gXNfc0/VeQcEk19iEHWzX1NP1XQChJNfRXAAQ18zT0VwQkNfI0/1cAEUk18SJbNfAhCK808BZQNe80/VcAIDXuNPs0/BZQNP1QNP9QNPpQNPlQNPhQNPcWUQcIUDT2UDT1FlA081A08lA08VA08BZQNO9QNO5QKUsBVwB/ZyhLAVd/f2crSwFX/n9nKksBgf0CITVYZycESwGB/AMhNVhnJwVLAYH7BIFhWGdIJDUBMgY1AkIALTEZIQ4SRLEisgEhCrIQNAiyGCEOshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwY0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEITIxNRJEIjE2EkQhDTE3EkQiNQEiNQIiNQhC/6VJMRhhQAAFSCEPr4lJKWJLAShiUExIiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQYSRDgRTwISRDgSEkSJSRUlTAmvTFCJ`,
  appClear: `Bw==`,
  companionInfo: {
    api_completeSwap: 1
    },
  extraPages: 2,
  mapDataKeys: 2,
  mapDataSize: 209,
  stateKeys: 6,
  stateSize: 732,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './fullsale.rsh:444:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './fullsale.rsh:80:33:after expr stmt semicolon',
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
