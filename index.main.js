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
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async (_v2485 ) => {
          const v2485 = stdlib.protect(ctc0, _v2485, null);
        
        const v2486 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2485), null);
        const v2487 = stdlib.fromSome(v2486, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2488 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2485), null);
        const v2489 = stdlib.fromSome(v2488, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2490 = [v2487, v2489];
        
        return v2490;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _saleLocked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async () => {
        
        
        return v2484;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTD = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async () => {
        
        const v2483 = [v2480, v2481, v2482];
        
        return v2483;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTDRec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async (_v2492 ) => {
          const v2492 = stdlib.protect(ctc0, _v2492, null);
        
        const v2493 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2492), null);
        const v2494 = stdlib.fromSome(v2493, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2495 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2492), null);
        const v2496 = stdlib.fromSome(v2495, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2497 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v2492), null);
        const v2498 = stdlib.fromSome(v2497, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2499 = [v2494, v2496, v2498];
        
        return v2499;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vBtBal = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async () => {
        
        const v2517 = [v2516, v2425];
        
        return v2517;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCcCm = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async () => {
        
        const v2519 = [v2421, v2518];
        
        return v2519;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCurrSwap = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async (_v2523 ) => {
          const v2523 = stdlib.protect(ctc0, _v2523, null);
        
        const v2524 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v2523), null);
        const v2526 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2528 = stdlib.fromSome(v2524, v2526);
        const v2529 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v2523), null);
        const v2530 = '-----';
        const v2531 = stdlib.fromSome(v2529, v2530);
        const v2532 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v2523), null);
        const v2533 = stdlib.fromSome(v2532, false);
        const v2534 = v2528[stdlib.checkedBigNumberify('./index.rsh:110:56:array ref', stdlib.UInt_max, '1')];
        const v2535 = v2528[stdlib.checkedBigNumberify('./index.rsh:110:69:array ref', stdlib.UInt_max, '0')];
        const v2536 = v2528[stdlib.checkedBigNumberify('./index.rsh:110:83:array ref', stdlib.UInt_max, '3')];
        const v2537 = v2528[stdlib.checkedBigNumberify('./index.rsh:110:125:array ref', stdlib.UInt_max, '2')];
        const v2538 = {
          cumProceeds: v2537,
          price: v2534,
          qty: v2535,
          shareIssuanceType: v2533,
          sold: v2536,
          status: v2531
          };
        
        return v2538;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vHash = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async () => {
        
        
        return v2505;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async (_v2520 ) => {
          const v2520 = stdlib.protect(ctc0, _v2520, null);
        
        const v2521 = stdlib.protect(map8_ctc, await viewlib.viewMapRef(8, v2520), null);
        const v2522 = stdlib.fromSome(v2521, false);
        
        return v2522;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vcVersion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async () => {
        
        const v2513 = [v2510, v2512];
        
        return v2513;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wlMember = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = svs;
      return (await ((async (_v2501 ) => {
          const v2501 = stdlib.protect(ctc0, _v2501, null);
        
        const v2502 = stdlib.protect(map9_ctc, await viewlib.viewMapRef(9, v2501), null);
        const v2503 = {
          None: 0,
          Some: 1
          }[v2502[0]];
        const v2504 = stdlib.eq(v2503, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2504;}))(...args));
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
  
  
  const v2402 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2403 = [v2402];
  const v2409 = 'I have deployed';
  const v2410 = stdlib.protect(ctc14, await interact.getParams(v2409), {
    at: './index.rsh:56:103:application',
    fs: ['at ./index.rsh:55:17:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2411 = v2410.authorizedST;
  const v2412 = v2410.bT;
  const v2413 = v2410.companyName;
  const v2414 = v2410.lockSale;
  const v2415 = v2410.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2413, v2414, v2415, v2412, v2411],
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
      
      const {data: [v2422, v2423, v2424, v2425, v2426], secs: v2428, time: v2427, didSend: v42, from: v2421 } = txn1;
      
      const v2429 = v2403[stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0')];
      const v2430 = stdlib.Array_set(v2429, '0', stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'));
      const v2431 = stdlib.Array_set(v2403, stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'), v2430);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2425
        });
      ;
      
      const v2435 = '2.02';
      const v2436 = 'cooperativIdcooperativIdcooperativId';
      const v2437 = [v2435, v2436];
      const v2438 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v2439 = [v2438, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2440 = {
        ctcMan: v2424,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v2437,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v2439,
        saleLocked: v2423,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2441 = v2440;
      const v2442 = v2427;
      const v2444 = v2431;
      
      if (await (async () => {
        
        return true;})()) {
        const v2480 = v2441.totST;
        const v2481 = v2441.totBT;
        const v2482 = v2441.distrNum;
        const v2484 = v2441.saleLocked;
        const v2505 = v2441.docHash;
        const v2507 = v2505[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v2509 = v2441.cv;
        const v2510 = v2509[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v2512 = v2509[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v2514 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2515 = v2514[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2516 = stdlib.cast("UInt", "UInt256", v2515, false, true);
        const v2518 = v2441.ctcMan;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2425
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
  const {data: [v2422, v2423, v2424, v2425, v2426], secs: v2428, time: v2427, didSend: v42, from: v2421 } = txn1;
  const v2429 = v2403[stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0')];
  const v2430 = stdlib.Array_set(v2429, '0', stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'));
  const v2431 = stdlib.Array_set(v2403, stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'), v2430);
  ;
  ;
  const v2434 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v2434), {
    at: './index.rsh:61:31:application',
    fs: ['at ./index.rsh:61:31:application call to [unknown function] (defined at: ./index.rsh:61:31:function exp)', 'at ./index.rsh:61:31:application call to "liftedInteract" (defined at: ./index.rsh:61:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v2435 = '2.02';
  const v2436 = 'cooperativIdcooperativIdcooperativId';
  const v2437 = [v2435, v2436];
  const v2438 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v2439 = [v2438, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2440 = {
    ctcMan: v2424,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v2437,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v2439,
    saleLocked: v2423,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2441 = v2440;
  let v2442 = v2427;
  let v2444 = v2431;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const v2480 = v2441.totST;
    const v2481 = v2441.totBT;
    const v2482 = v2441.distrNum;
    const v2484 = v2441.saleLocked;
    const v2505 = v2441.docHash;
    const v2507 = v2505[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
    const v2509 = v2441.cv;
    const v2510 = v2509[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
    const v2512 = v2509[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
    const v2514 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2515 = v2514[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2516 = stdlib.cast("UInt", "UInt256", v2515, false, true);
    const v2518 = v2441.ctcMan;
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
        args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518],
        evt_cnt: 0,
        funcNum: 3,
        lct: v2442,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:445:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v11580, time: v11579, didSend: v2056, from: v11578 } = txn4;
          
          ;
          const cv2441 = v2441;
          const cv2442 = v11579;
          const cv2444 = v2444;
          
          await (async () => {
            const v2441 = cv2441;
            const v2442 = cv2442;
            const v2444 = cv2444;
            
            if (await (async () => {
              
              return true;})()) {
              const v2480 = v2441.totST;
              const v2481 = v2441.totBT;
              const v2482 = v2441.distrNum;
              const v2484 = v2441.saleLocked;
              const v2505 = v2441.docHash;
              const v2507 = v2505[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v2509 = v2441.cv;
              const v2510 = v2509[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v2512 = v2509[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v2514 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2515 = v2514[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2516 = stdlib.cast("UInt", "UInt256", v2515, false, true);
              const v2518 = v2441.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2425
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
      const {data: [], secs: v11580, time: v11579, didSend: v2056, from: v11578 } = txn4;
      ;
      const v11581 = stdlib.addressEq(v2421, v11578);
      stdlib.assert(v11581, {
        at: './index.rsh:445:21:dot',
        fs: ['at ./index.rsh:444:40:application call to [unknown function] (defined at: ./index.rsh:444:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv2441 = v2441;
      const cv2442 = v11579;
      const cv2444 = v2444;
      
      v2441 = cv2441;
      v2442 = cv2442;
      v2444 = cv2444;
      
      txn2 = txn4;
      continue;
      }
    else {
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn3;
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3179 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '0')];
          const v3180 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '1')];
          const v3181 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '2')];
          const v3182 = stdlib.addressEq(v3179, v2421);
          const v3184 = stdlib.addressEq(v3179, v2518);
          const v3185 = v3182 ? true : v3184;
          stdlib.assert(v3185, {
            at: './index.rsh:337:24:application',
            fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3186 = stdlib.gt256(v3181, stdlib.checkedBigNumberify('./index.rsh:338:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3186, {
            at: './index.rsh:338:24:application',
            fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v3180, null);
          const v3188 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3180), null);
          const v3189 = stdlib.fromSome(v3188, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3190 = stdlib.safeAdd256(v3189, v3181);
          await stdlib.mapSet(map0, v3180, v3190);
          const v3191 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3180), null);
          const v3192 = stdlib.fromSome(v3191, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3193 = stdlib.safeAdd256(v3192, v3181);
          await stdlib.mapSet(map2, v3180, v3193);
          const v3195 = stdlib.safeAdd256(v2480, v3181);
          const v3196 = true;
          await txn3.getOutput('aST', 'v3196', ctc8, v3196);
          const v3205 = {
            ...v2441, 'totST': v3195};
          const cv2441 = v3205;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3817 = v3648[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
          const v3820 = [v2510, v3817];
          const v3821 = {
            ...v2441, 'cv': v3820};
          const v3822 = true;
          await txn3.getOutput('addCoopId', 'v3822', ctc8, v3822);
          const cv2441 = v3821;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v4440 = v4258[stdlib.checkedBigNumberify('./index.rsh:289:13:spread', stdlib.UInt_max, '0')];
          const v4441 = stdlib.addressEq(v3034, v2421);
          const v4443 = stdlib.addressEq(v3034, v2518);
          const v4444 = v4441 ? true : v4443;
          stdlib.assert(v4444, {
            at: './index.rsh:300:24:application',
            fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v4440, null);
          const v4446 = true;
          await txn3.getOutput('addWL', 'v4446', ctc8, v4446);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5064 = v4868[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
          const v5065 = stdlib.addressEq(v3034, v2421);
          const v5067 = stdlib.addressEq(v3034, v2518);
          const v5068 = v5065 ? true : v5067;
          stdlib.assert(v5068, {
            at: './index.rsh:184:24:application',
            fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v5069 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v5064), null);
          const v5070 = '-----';
          const v5071 = stdlib.fromSome(v5069, v5070);
          const v5072 = 'initd';
          const v5073 = stdlib.digest([ctc6], [v5071]);
          const v5075 = stdlib.digest([ctc6], [v5072]);
          const v5076 = stdlib.digestEq(v5073, v5075);
          stdlib.assert(v5076, {
            at: './index.rsh:185:24:application',
            fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
            msg: 'you can onlyapprove an unapproved pending/initiated swap',
            who: 'Creator'
            });
          const v5077 = 'apprv';
          await stdlib.mapSet(map6, v5064, v5077);
          const v5083 = true;
          await txn3.getOutput('approveSwap', 'v5083', ctc8, v5083);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5701 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
          const v5702 = {
            None: 0,
            Some: 1
            }[v5701[0]];
          const v5703 = stdlib.eq(v5702, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v5703, {
            at: './index.rsh:413:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v5707 = stdlib.gt256(v2516, stdlib.checkedBigNumberify('./index.rsh:414:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5707, {
            at: './index.rsh:414:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v5709 = stdlib.gt256(v2480, stdlib.checkedBigNumberify('./index.rsh:415:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5709, {
            at: './index.rsh:415:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v5711 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3034), null);
          const v5712 = stdlib.fromSome(v5711, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5713 = stdlib.ge256(v2480, v5712);
          stdlib.assert(v5713, {
            at: './index.rsh:416:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v5716 = stdlib.gt256(v5712, stdlib.checkedBigNumberify('./index.rsh:417:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5716, {
            at: './index.rsh:417:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v5719 = v2441.currDistr;
          const v5720 = stdlib.safeMul256(v5712, v5719);
          const v5722 = stdlib.safeDiv256(v5720, v2480);
          const v5723 = stdlib.cast("UInt256", "UInt", v5722, false, true);
          const v5726 = stdlib.le(v5723, v2515);
          stdlib.assert(v5726, {
            at: './index.rsh:419:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v5733 = stdlib.sub(v2515, v5723);
          const v5735 = stdlib.Array_set(v2514, '0', v5733);
          const v5736 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v5735);
          ;
          const v5737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3034), null);
          const v5738 = stdlib.fromSome(v5737, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5739 = stdlib.safeAdd256(v5738, v5722);
          await stdlib.mapSet(map3, v3034, v5739);
          const v5740 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3034), null);
          const v5741 = stdlib.fromSome(v5740, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5742 = stdlib.safeAdd256(v5741, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map4, v3034, v5742);
          await txn3.getOutput('cBT', 'v5722', ctc1, v5722);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v5736;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6359 = v6088[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
          const v6360 = stdlib.addressEq(v3034, v2421);
          const v6362 = stdlib.addressEq(v3034, v2518);
          const v6363 = v6360 ? true : v6362;
          stdlib.assert(v6363, {
            at: './index.rsh:438:24:application',
            fs: ['at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v6364 = true;
          await txn3.getOutput('cCM', 'v6364', ctc8, v6364);
          const v6371 = {
            ...v2441, 'ctcMan': v6359};
          const cv2441 = v6371;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6983 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3034), null);
          const v6984 = '-----';
          const v6985 = stdlib.fromSome(v6983, v6984);
          const v6987 = stdlib.digest([ctc6], [v6985]);
          const v6989 = stdlib.digest([ctc6], [v6984]);
          const v6990 = stdlib.digestEq(v6987, v6989);
          const v6995 = 'compl';
          const v6998 = stdlib.digest([ctc6], [v6995]);
          const v6999 = stdlib.digestEq(v6987, v6998);
          const v7000 = v6999 ? false : true;
          const v7001 = v6990 ? false : v7000;
          stdlib.assert(v7001, {
            at: './index.rsh:160:24:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: 'there must be a pending swap',
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v3034, v6984);
          const v7003 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
          const v7005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7007 = stdlib.fromSome(v7003, v7005);
          const v7008 = stdlib.Array_set(v7007, stdlib.checkedBigNumberify('./index.rsh:163:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:163:41:decimal', stdlib.UInt_max, '0'));
          const v7009 = stdlib.Array_set(v7008, stdlib.checkedBigNumberify('./index.rsh:164:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:164:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3034, v7009);
          const v7011 = true;
          await txn3.getOutput('cancelSwap', 'v7011', ctc8, v7011);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v7628 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
          const v7629 = {
            None: 0,
            Some: 1
            }[v7628[0]];
          const v7630 = stdlib.eq(v7629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v7630, {
            at: './index.rsh:256:24:application',
            fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
            msg: 'you must be a whitelist member to claim swap proceeds',
            who: 'Creator'
            });
          const v7631 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
          const v7633 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7635 = stdlib.fromSome(v7631, v7633);
          const v7636 = v7635[stdlib.checkedBigNumberify('./index.rsh:257:60:array ref', stdlib.UInt_max, '2')];
          const v7637 = stdlib.gt(v7636, stdlib.checkedBigNumberify('./index.rsh:257:66:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v7637, {
            at: './index.rsh:257:24:application',
            fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
            msg: 'you must have swap proceeds to claim',
            who: 'Creator'
            });
          const v7646 = stdlib.ge(v2515, v7636);
          stdlib.assert(v7646, {
            at: './index.rsh:259:24:application',
            fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v7653 = stdlib.sub(v2515, v7636);
          const v7655 = stdlib.Array_set(v2514, '0', v7653);
          const v7656 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:260:47:application', stdlib.UInt_max, '0'), v7655);
          ;
          const v7657 = stdlib.Array_set(v7635, stdlib.checkedBigNumberify('./index.rsh:261:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:261:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3034, v7657);
          const v7658 = true;
          await txn3.getOutput('claimSwapProceeds', 'v7658', ctc8, v7658);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v7656;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          undefined /* setApiDetails */;
          const v7986 = v7918[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
          const v7987 = v7918[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '1')];
          const v7988 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7986), null);
          const v7990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7992 = stdlib.fromSome(v7988, v7990);
          const v7993 = v7992[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
          const v7994 = stdlib.safeMul(v7987, v7993);
          ;
          const v8054 = stdlib.add(v2515, v7994);
          const v8056 = stdlib.Array_set(v2514, '0', v8054);
          const v8057 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8056);
          ;
          const v8277 = stdlib.addressEq(v3034, v7986);
          const v8278 = v8277 ? false : true;
          stdlib.assert(v8278, {
            at: './index.rsh:208:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you cannot complete/buy your own swap',
            who: 'Creator'
            });
          const v8279 = stdlib.gt(v7987, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8279, {
            at: './index.rsh:209:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you must buy at least 1 share token',
            who: 'Creator'
            });
          const v8285 = v7992[stdlib.checkedBigNumberify('./index.rsh:210:69:array ref', stdlib.UInt_max, '0')];
          const v8286 = stdlib.le(v7987, v8285);
          stdlib.assert(v8286, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you cannot buy more than the quantity offered for sale',
            who: 'Creator'
            });
          const v8287 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
          const v8288 = {
            None: 0,
            Some: 1
            }[v8287[0]];
          const v8289 = stdlib.eq(v8288, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v8289, {
            at: './index.rsh:211:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you must be a whitelist member to complete or buy swap',
            who: 'Creator'
            });
          const v8290 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7986), null);
          const v8291 = '-----';
          const v8292 = stdlib.fromSome(v8290, v8291);
          const v8293 = 'apprv';
          const v8294 = stdlib.digest([ctc6], [v8292]);
          const v8296 = stdlib.digest([ctc6], [v8293]);
          const v8297 = stdlib.digestEq(v8294, v8296);
          const v8301 = 'partl';
          const v8304 = stdlib.digest([ctc6], [v8301]);
          const v8305 = stdlib.digestEq(v8294, v8304);
          const v8306 = v8297 ? true : v8305;
          stdlib.assert(v8306, {
            at: './index.rsh:212:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you can only buy an approved or partially completed swap',
            who: 'Creator'
            });
          const v8312 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3034), null);
          const v8313 = stdlib.fromSome(v8312, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8314 = stdlib.cast("UInt", "UInt256", v7987, false, true);
          const v8315 = stdlib.safeAdd256(v8313, v8314);
          await stdlib.mapSet(map0, v3034, v8315);
          const v8316 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3034), null);
          const v8317 = stdlib.fromSome(v8316, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8319 = stdlib.safeAdd256(v8317, v8314);
          await stdlib.mapSet(map2, v3034, v8319);
          const v8320 = v7992[stdlib.checkedBigNumberify('./index.rsh:219:44:array ref', stdlib.UInt_max, '2')];
          const v8323 = stdlib.safeAdd(v8320, v7994);
          const v8324 = stdlib.Array_set(v7992, stdlib.checkedBigNumberify('./index.rsh:219:38:decimal', stdlib.UInt_max, '2'), v8323);
          const v8325 = v8324[stdlib.checkedBigNumberify('./index.rsh:220:46:array ref', stdlib.UInt_max, '3')];
          const v8326 = stdlib.safeAdd(v8325, v7987);
          const v8327 = stdlib.Array_set(v8324, stdlib.checkedBigNumberify('./index.rsh:220:39:decimal', stdlib.UInt_max, '3'), v8326);
          const v8328 = v8327[stdlib.checkedBigNumberify('./index.rsh:221:46:array ref', stdlib.UInt_max, '0')];
          const v8329 = stdlib.safeSub(v8328, v7987);
          const v8330 = stdlib.Array_set(v8327, stdlib.checkedBigNumberify('./index.rsh:221:39:decimal', stdlib.UInt_max, '0'), v8329);
          await stdlib.mapSet(map5, v7986, v8330);
          const v8331 = v8330[stdlib.checkedBigNumberify('./index.rsh:224:25:array ref', stdlib.UInt_max, '0')];
          const v8332 = stdlib.eq(v8331, stdlib.checkedBigNumberify('./index.rsh:224:32:decimal', stdlib.UInt_max, '0'));
          if (v8332) {
            const v8333 = 'compl';
            await stdlib.mapSet(map6, v7986, v8333);
            const v8334 = true;
            await txn3.getOutput('completeSwap', 'v8334', ctc8, v8334);
            const v8342 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7986), null);
            const v8343 = stdlib.fromSome(v8342, false);
            if (v8343) {
              const v8356 = stdlib.safeAdd256(v2480, v8314);
              const v8357 = {
                ...v2441, 'totST': v8356};
              const cv2441 = v8357;
              const cv2442 = v3036;
              const cv2444 = v8057;
              
              v2441 = cv2441;
              v2442 = cv2442;
              v2444 = cv2444;
              
              txn2 = txn3;
              continue;}
            else {
              const v8345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7986), null);
              const v8346 = stdlib.fromSome(v8345, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8348 = stdlib.safeSub256(v8346, v8314);
              await stdlib.mapSet(map0, v7986, v8348);
              const v8349 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7986), null);
              const v8350 = stdlib.fromSome(v8349, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8352 = stdlib.safeSub256(v8350, v8314);
              await stdlib.mapSet(map2, v7986, v8352);
              const cv2441 = v2441;
              const cv2442 = v3036;
              const cv2444 = v8057;
              
              v2441 = cv2441;
              v2442 = cv2442;
              v2444 = cv2444;
              
              txn2 = txn3;
              continue;}}
          else {
            await stdlib.mapSet(map6, v7986, v8301);
            const v8360 = true;
            await txn3.getOutput('completeSwap', 'v8360', ctc8, v8360);
            const v8368 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7986), null);
            const v8369 = stdlib.fromSome(v8368, false);
            if (v8369) {
              const v8382 = stdlib.safeAdd256(v2480, v8314);
              const v8383 = {
                ...v2441, 'totST': v8382};
              const cv2441 = v8383;
              const cv2442 = v3036;
              const cv2444 = v8057;
              
              v2441 = cv2441;
              v2442 = cv2442;
              v2444 = cv2444;
              
              txn2 = txn3;
              continue;}
            else {
              const v8371 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7986), null);
              const v8372 = stdlib.fromSome(v8371, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8374 = stdlib.safeSub256(v8372, v8314);
              await stdlib.mapSet(map0, v7986, v8374);
              const v8375 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7986), null);
              const v8376 = stdlib.fromSome(v8375, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8378 = stdlib.safeSub256(v8376, v8314);
              await stdlib.mapSet(map2, v7986, v8378);
              const cv2441 = v2441;
              const cv2442 = v3036;
              const cv2444 = v8057;
              
              v2441 = cv2441;
              v2442 = cv2442;
              v2444 = cv2444;
              
              txn2 = txn3;
              continue;}}
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          undefined /* setApiDetails */;
          const v8612 = v8528[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
          const v8613 = stdlib.cast("UInt256", "UInt", v8612, false, true);
          ;
          const v8664 = stdlib.add(v2515, v8613);
          const v8666 = stdlib.Array_set(v2514, '0', v8664);
          const v8667 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8666);
          ;
          const v8997 = stdlib.addressEq(v3034, v2421);
          const v8999 = stdlib.addressEq(v3034, v2518);
          const v9000 = v8997 ? true : v8999;
          stdlib.assert(v9000, {
            at: './index.rsh:386:24:application',
            fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v9002 = stdlib.gt(v8613, stdlib.checkedBigNumberify('./index.rsh:387:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9002, {
            at: './index.rsh:387:24:application',
            fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v9004 = stdlib.safeAdd256(v2481, v8612);
          const v9005 = {
            ...v2441, 'totBT': v9004};
          const v9007 = stdlib.safeAdd256(v2482, stdlib.checkedBigNumberify('./index.rsh:390:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v9008 = {
            ...v9005, 'distrNum': v9007};
          const v9009 = {
            ...v9008, 'currDistr': v8612};
          const v9010 = true;
          await txn3.getOutput('dBT', 'v9010', ctc8, v9010);
          const cv2441 = v9009;
          const cv2442 = v3036;
          const cv2444 = v8667;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v9628 = v9138[stdlib.checkedBigNumberify('./index.rsh:268:13:spread', stdlib.UInt_max, '0')];
          const v9631 = stdlib.eq(v2507, stdlib.checkedBigNumberify('./index.rsh:282:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9631, {
            at: './index.rsh:282:24:application',
            fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v9632 = stdlib.addressEq(v3034, v2421);
          const v9634 = stdlib.addressEq(v3034, v2518);
          const v9635 = v9632 ? true : v9634;
          stdlib.assert(v9635, {
            at: './index.rsh:283:24:application',
            fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v9636 = stdlib.safeAdd(v2507, stdlib.checkedBigNumberify('./index.rsh:284:76:decimal', stdlib.UInt_max, '1'));
          const v9638 = [v9628, v9636, v3036];
          const v9639 = {
            ...v2441, 'docHash': v9638};
          const v9640 = true;
          await txn3.getOutput('docHash', 'v9640', ctc8, v9640);
          const cv2441 = v9639;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v10258 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v10259 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v10260 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
          const v10262 = stdlib.addressEq(v3034, v2421);
          const v10264 = stdlib.addressEq(v3034, v2518);
          const v10265 = v10262 ? true : v10264;
          const v10266 = v10260 ? v10265 : false;
          const v10267 = v10260 ? false : true;
          const v10268 = v10266 ? true : v10267;
          stdlib.assert(v10268, {
            at: './index.rsh:127:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'if you are not creator or manager, the swap cannot be share issuance type',
            who: 'Creator'
            });
          const v10269 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
          const v10270 = {
            None: 0,
            Some: 1
            }[v10269[0]];
          const v10271 = stdlib.eq(v10270, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v10273 = v10271 ? v10267 : false;
          const v10275 = v10273 ? true : v10260;
          stdlib.assert(v10275, {
            at: './index.rsh:128:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'you must be a whitelist member',
            who: 'Creator'
            });
          const v10276 = stdlib.gt(v10258, stdlib.checkedBigNumberify('./index.rsh:129:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10276, {
            at: './index.rsh:129:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v10277 = stdlib.gt(v10259, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10277, {
            at: './index.rsh:130:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v10278 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3034), null);
          const v10279 = '-----';
          const v10280 = stdlib.fromSome(v10278, v10279);
          const v10282 = stdlib.digest([ctc6], [v10280]);
          const v10284 = stdlib.digest([ctc6], [v10279]);
          const v10285 = stdlib.digestEq(v10282, v10284);
          const v10289 = 'compl';
          const v10292 = stdlib.digest([ctc6], [v10289]);
          const v10293 = stdlib.digestEq(v10282, v10292);
          const v10294 = v10285 ? true : v10293;
          stdlib.assert(v10294, {
            at: './index.rsh:131:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'there must be no pending swap',
            who: 'Creator'
            });
          const v10300 = v10265 ? v10260 : false;
          if (v10300) {
            const v10301 = 'apprv';
            await stdlib.mapSet(map6, v3034, v10301);
            await stdlib.mapSet(map7, v3034, true);
            const v10302 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
            const v10304 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10306 = stdlib.fromSome(v10302, v10304);
            const v10307 = stdlib.Array_set(v10306, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10258);
            const v10308 = stdlib.Array_set(v10307, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10259);
            const v10309 = stdlib.Array_set(v10308, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map5, v3034, v10309);
            const v10310 = true;
            await txn3.getOutput('initSwap', 'v10310', ctc8, v10310);
            const cv2441 = v2441;
            const cv2442 = v3036;
            const cv2444 = v2444;
            
            v2441 = cv2441;
            v2442 = cv2442;
            v2444 = cv2444;
            
            txn2 = txn3;
            continue;}
          else {
            const v10319 = 'initd';
            await stdlib.mapSet(map6, v3034, v10319);
            await stdlib.mapSet(map7, v3034, v10260);
            const v10320 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
            const v10322 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10324 = stdlib.fromSome(v10320, v10322);
            const v10325 = stdlib.Array_set(v10324, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10258);
            const v10326 = stdlib.Array_set(v10325, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10259);
            const v10327 = stdlib.Array_set(v10326, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map5, v3034, v10327);
            const v10328 = true;
            await txn3.getOutput('initSwap', 'v10328', ctc8, v10328);
            const cv2441 = v2441;
            const cv2442 = v3036;
            const cv2444 = v2444;
            
            v2441 = cv2441;
            v2442 = cv2442;
            v2444 = cv2444;
            
            txn2 = txn3;
            continue;}
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          await stdlib.mapSet(map8, v3034, true);
          const v10948 = true;
          await txn3.getOutput('optIn', 'v10948', ctc8, v10948);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v11565 = v10968[stdlib.checkedBigNumberify('./index.rsh:307:13:spread', stdlib.UInt_max, '0')];
          const v11566 = stdlib.addressEq(v3034, v2421);
          const v11568 = stdlib.addressEq(v3034, v2518);
          const v11569 = v11566 ? true : v11568;
          stdlib.assert(v11569, {
            at: './index.rsh:318:24:application',
            fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v11565, undefined /* Nothing */);
          const v11571 = true;
          await txn3.getOutput('remWL', 'v11571', ctc8, v11571);
          const cv2441 = v2441;
          const cv2442 = v3036;
          const cv2444 = v2444;
          
          v2441 = cv2441;
          v2442 = cv2442;
          v2444 = cv2444;
          
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2766 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_324" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v2767 = v2766[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2769 = v2766[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2774 = stdlib.addressEq(v2767, v2421);
  const v2776 = stdlib.addressEq(v2767, v2518);
  const v2777 = v2774 ? true : v2776;
  stdlib.assert(v2777, {
    at: './index.rsh:329:23:application',
    fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:29:function exp)', 'at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_324" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v2778 = stdlib.gt256(v2769, stdlib.checkedBigNumberify('./index.rsh:330:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2778, {
    at: './index.rsh:330:23:application',
    fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:29:function exp)', 'at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_324" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v2784 = ['aST0_324', v2766];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2784],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:334:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:334:34:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          ;
          const v3180 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '1')];
          const v3181 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 9, v3180, null);
          const v3188 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3180), null);
          const v3189 = stdlib.fromSome(v3188, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3190 = stdlib.safeAdd256(v3189, v3181);
          await stdlib.simMapSet(sim_r, 0, v3180, v3190);
          const v3191 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3180), null);
          const v3192 = stdlib.fromSome(v3191, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3193 = stdlib.safeAdd256(v3192, v3181);
          await stdlib.simMapSet(sim_r, 2, v3180, v3193);
          const v3195 = stdlib.safeAdd256(v2480, v3181);
          const v3196 = true;
          const v3197 = await txn1.getOutput('aST', 'v3196', ctc8, v3196);
          
          const v3205 = {
            ...v2441, 'totST': v3195};
          const v16796 = v3205;
          const v16798 = v2444;
          const v16799 = v3205.totST;
          const v16800 = v3205.totBT;
          const v16801 = v3205.distrNum;
          const v16802 = v3205.saleLocked;
          const v16803 = v3205.docHash;
          const v16804 = v16803[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v16805 = v3205.cv;
          const v16806 = v16805[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v16807 = v16805[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v16808 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16809 = v16808[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16810 = stdlib.cast("UInt", "UInt256", v16809, false, true);
          const v16811 = v3205.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3179 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '0')];
      const v3180 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '1')];
      const v3181 = v3038[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '2')];
      const v3182 = stdlib.addressEq(v3179, v2421);
      const v3184 = stdlib.addressEq(v3179, v2518);
      const v3185 = v3182 ? true : v3184;
      stdlib.assert(v3185, {
        at: './index.rsh:337:24:application',
        fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3186 = stdlib.gt256(v3181, stdlib.checkedBigNumberify('./index.rsh:338:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3186, {
        at: './index.rsh:338:24:application',
        fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map9, v3180, null);
      const v3188 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3180), null);
      const v3189 = stdlib.fromSome(v3188, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3190 = stdlib.safeAdd256(v3189, v3181);
      await stdlib.mapSet(map0, v3180, v3190);
      const v3191 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3180), null);
      const v3192 = stdlib.fromSome(v3191, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3193 = stdlib.safeAdd256(v3192, v3181);
      await stdlib.mapSet(map2, v3180, v3193);
      const v3195 = stdlib.safeAdd256(v2480, v3181);
      const v3196 = true;
      const v3197 = await txn1.getOutput('aST', 'v3196', ctc8, v3196);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v3038, v3197), {
          at: './index.rsh:326:13:application',
          fs: ['at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)', 'at ./index.rsh:344:20:application call to "res" (defined at: ./index.rsh:336:13:function exp)', 'at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3205 = {
        ...v2441, 'totST': v3195};
      const v16796 = v3205;
      const v16798 = v2444;
      const v16799 = v3205.totST;
      const v16800 = v3205.totBT;
      const v16801 = v3205.distrNum;
      const v16802 = v3205.saleLocked;
      const v16803 = v3205.docHash;
      const v16804 = v16803[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v16805 = v3205.cv;
      const v16806 = v16805[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v16807 = v16805[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v16808 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16809 = v16808[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16810 = stdlib.cast("UInt", "UInt256", v16809, false, true);
      const v16811 = v3205.ctcMan;
      return;
      
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2796 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:364:13:application call to [unknown function] (defined at: ./index.rsh:364:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddCoopId0_324" (defined at: ./index.rsh:361:14:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v2803 = ['addCoopId0_324', v2796];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2803],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:367:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:367:27:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          ;
          const v3817 = v3648[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
          const v3820 = [v2510, v3817];
          const v3821 = {
            ...v2441, 'cv': v3820};
          const v3822 = true;
          const v3823 = await txn1.getOutput('addCoopId', 'v3822', ctc8, v3822);
          
          const v17328 = v3821;
          const v17330 = v2444;
          const v17331 = v3821.totST;
          const v17332 = v3821.totBT;
          const v17333 = v3821.distrNum;
          const v17334 = v3821.saleLocked;
          const v17335 = v3821.docHash;
          const v17336 = v17335[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17337 = v3821.cv;
          const v17338 = v17337[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17339 = v17337[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17340 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17341 = v17340[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17342 = stdlib.cast("UInt", "UInt256", v17341, false, true);
          const v17343 = v3821.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3817 = v3648[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
      const v3820 = [v2510, v3817];
      const v3821 = {
        ...v2441, 'cv': v3820};
      const v3822 = true;
      const v3823 = await txn1.getOutput('addCoopId', 'v3822', ctc8, v3822);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v3648, v3823), {
          at: './index.rsh:362:13:application',
          fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:371:20:application call to "res" (defined at: ./index.rsh:369:13:function exp)', 'at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v17328 = v3821;
      const v17330 = v2444;
      const v17331 = v3821.totST;
      const v17332 = v3821.totBT;
      const v17333 = v3821.distrNum;
      const v17334 = v3821.saleLocked;
      const v17335 = v3821.docHash;
      const v17336 = v17335[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17337 = v3821.cv;
      const v17338 = v17337[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17339 = v17337[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17340 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17341 = v17340[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17342 = stdlib.cast("UInt", "UInt256", v17341, false, true);
      const v17343 = v3821.ctcMan;
      return;
      
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2734 = ctc.selfAddress();
  const v2736 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddWL0_324" (defined at: ./index.rsh:289:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v2740 = stdlib.addressEq(v2734, v2421);
  const v2742 = stdlib.addressEq(v2734, v2518);
  const v2743 = v2740 ? true : v2742;
  stdlib.assert(v2743, {
    at: './index.rsh:293:23:application',
    fs: ['at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)', 'at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddWL0_324" (defined at: ./index.rsh:289:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v2747 = ['addWL0_324', v2736];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2747],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:297:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:297:26:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          ;
          const v4440 = v4258[stdlib.checkedBigNumberify('./index.rsh:289:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v4440, null);
          const v4446 = true;
          const v4447 = await txn1.getOutput('addWL', 'v4446', ctc8, v4446);
          
          const v17860 = v2441;
          const v17862 = v2444;
          const v17863 = v2441.totST;
          const v17864 = v2441.totBT;
          const v17865 = v2441.distrNum;
          const v17866 = v2441.saleLocked;
          const v17867 = v2441.docHash;
          const v17868 = v17867[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17869 = v2441.cv;
          const v17870 = v17869[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17871 = v17869[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17872 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17873 = v17872[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17874 = stdlib.cast("UInt", "UInt256", v17873, false, true);
          const v17875 = v2441.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4440 = v4258[stdlib.checkedBigNumberify('./index.rsh:289:13:spread', stdlib.UInt_max, '0')];
      const v4441 = stdlib.addressEq(v3034, v2421);
      const v4443 = stdlib.addressEq(v3034, v2518);
      const v4444 = v4441 ? true : v4443;
      stdlib.assert(v4444, {
        at: './index.rsh:300:24:application',
        fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map9, v4440, null);
      const v4446 = true;
      const v4447 = await txn1.getOutput('addWL', 'v4446', ctc8, v4446);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v4258, v4447), {
          at: './index.rsh:290:13:application',
          fs: ['at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)', 'at ./index.rsh:303:20:application call to "res" (defined at: ./index.rsh:299:13:function exp)', 'at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v17860 = v2441;
      const v17862 = v2444;
      const v17863 = v2441.totST;
      const v17864 = v2441.totBT;
      const v17865 = v2441.distrNum;
      const v17866 = v2441.saleLocked;
      const v17867 = v2441.docHash;
      const v17868 = v17867[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17869 = v2441.cv;
      const v17870 = v17869[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17871 = v17869[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17872 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17873 = v17872[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17874 = stdlib.cast("UInt", "UInt256", v17873, false, true);
      const v17875 = v2441.ctcMan;
      return;
      
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2622 = ctc.selfAddress();
  const v2624 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'approveSwap'
    });
  const v2625 = v2624[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2628 = stdlib.addressEq(v2622, v2421);
  const v2630 = stdlib.addressEq(v2622, v2518);
  const v2631 = v2628 ? true : v2630;
  stdlib.assert(v2631, {
    at: './index.rsh:176:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:23:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'approveSwap'
    });
  const v2632 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2625), null);
  const v2633 = '-----';
  const v2634 = stdlib.fromSome(v2632, v2633);
  const v2635 = 'initd';
  const v2636 = stdlib.digest([ctc6], [v2634]);
  const v2638 = stdlib.digest([ctc6], [v2635]);
  const v2639 = stdlib.digestEq(v2636, v2638);
  stdlib.assert(v2639, {
    at: './index.rsh:177:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:23:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you can onlyapprove an unapproved pending/initiated swap',
    who: 'approveSwap'
    });
  const v2643 = ['approveSwap0_324', v2624];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2643],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:181:26:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approveSwap"
            });
          ;
          ;
          const v5064 = v4868[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v5064), null);
          const v5077 = 'apprv';
          await stdlib.simMapSet(sim_r, 6, v5064, v5077);
          const v5083 = true;
          const v5084 = await txn1.getOutput('approveSwap', 'v5083', ctc8, v5083);
          
          const v18392 = v2441;
          const v18394 = v2444;
          const v18395 = v2441.totST;
          const v18396 = v2441.totBT;
          const v18397 = v2441.distrNum;
          const v18398 = v2441.saleLocked;
          const v18399 = v2441.docHash;
          const v18400 = v18399[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18401 = v2441.cv;
          const v18402 = v18401[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18403 = v18401[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18404 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18405 = v18404[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18406 = stdlib.cast("UInt", "UInt256", v18405, false, true);
          const v18407 = v2441.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5064 = v4868[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
      const v5065 = stdlib.addressEq(v3034, v2421);
      const v5067 = stdlib.addressEq(v3034, v2518);
      const v5068 = v5065 ? true : v5067;
      stdlib.assert(v5068, {
        at: './index.rsh:184:24:application',
        fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'approveSwap'
        });
      const v5069 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v5064), null);
      const v5070 = '-----';
      const v5071 = stdlib.fromSome(v5069, v5070);
      const v5072 = 'initd';
      const v5073 = stdlib.digest([ctc6], [v5071]);
      const v5075 = stdlib.digest([ctc6], [v5072]);
      const v5076 = stdlib.digestEq(v5073, v5075);
      stdlib.assert(v5076, {
        at: './index.rsh:185:24:application',
        fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
        msg: 'you can onlyapprove an unapproved pending/initiated swap',
        who: 'approveSwap'
        });
      const v5077 = 'apprv';
      await stdlib.mapSet(map6, v5064, v5077);
      const v5083 = true;
      const v5084 = await txn1.getOutput('approveSwap', 'v5083', ctc8, v5083);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v4868, v5084), {
          at: './index.rsh:173:13:application',
          fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:189:20:application call to "res" (defined at: ./index.rsh:183:13:function exp)', 'at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
          msg: 'out',
          who: 'approveSwap'
          });
        }
      else {
        }
      
      const v18392 = v2441;
      const v18394 = v2444;
      const v18395 = v2441.totST;
      const v18396 = v2441.totBT;
      const v18397 = v2441.distrNum;
      const v18398 = v2441.saleLocked;
      const v18399 = v2441.docHash;
      const v18400 = v18399[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18401 = v2441.cv;
      const v18402 = v18401[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18403 = v18401[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18404 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18405 = v18404[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18406 = stdlib.cast("UInt", "UInt256", v18405, false, true);
      const v18407 = v2441.ctcMan;
      return;
      
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2822 = ctc.selfAddress();
  const v2824 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v2826 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2822), null);
  const v2827 = {
    None: 0,
    Some: 1
    }[v2826[0]];
  const v2828 = stdlib.eq(v2827, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2828, {
    at: './index.rsh:401:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v2832 = stdlib.gt256(v2516, stdlib.checkedBigNumberify('./index.rsh:402:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2832, {
    at: './index.rsh:402:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v2834 = stdlib.gt256(v2480, stdlib.checkedBigNumberify('./index.rsh:403:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2834, {
    at: './index.rsh:403:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v2836 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2822), null);
  const v2837 = stdlib.fromSome(v2836, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2838 = stdlib.ge256(v2480, v2837);
  stdlib.assert(v2838, {
    at: './index.rsh:404:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v2841 = stdlib.gt256(v2837, stdlib.checkedBigNumberify('./index.rsh:405:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2841, {
    at: './index.rsh:405:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v2844 = v2441.currDistr;
  const v2845 = stdlib.safeMul256(v2837, v2844);
  const v2847 = stdlib.safeDiv256(v2845, v2480);
  const v2848 = stdlib.cast("UInt256", "UInt", v2847, false, true);
  const v2851 = stdlib.le(v2848, v2515);
  stdlib.assert(v2851, {
    at: './index.rsh:407:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v2854 = ['cBT0_324', v2824];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2854],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:410:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:410:25:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3034), null);
          const v5711 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3034), null);
          const v5712 = stdlib.fromSome(v5711, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5719 = v2441.currDistr;
          const v5720 = stdlib.safeMul256(v5712, v5719);
          const v5722 = stdlib.safeDiv256(v5720, v2480);
          const v5723 = stdlib.cast("UInt256", "UInt", v5722, false, true);
          const v5733 = stdlib.sub(v2515, v5723);
          const v5735 = stdlib.Array_set(v2514, '0', v5733);
          const v5736 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v5735);
          sim_r.txns.push({
            kind: 'from',
            to: v3034,
            tok: v2425
            });
          const v5737 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3034), null);
          const v5738 = stdlib.fromSome(v5737, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5739 = stdlib.safeAdd256(v5738, v5722);
          await stdlib.simMapSet(sim_r, 3, v3034, v5739);
          const v5740 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v3034), null);
          const v5741 = stdlib.fromSome(v5740, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5742 = stdlib.safeAdd256(v5741, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 4, v3034, v5742);
          const v5743 = await txn1.getOutput('cBT', 'v5722', ctc1, v5722);
          
          const v18924 = v2441;
          const v18926 = v5736;
          const v18927 = v2441.totST;
          const v18928 = v2441.totBT;
          const v18929 = v2441.distrNum;
          const v18930 = v2441.saleLocked;
          const v18931 = v2441.docHash;
          const v18932 = v18931[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18933 = v2441.cv;
          const v18934 = v18933[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18935 = v18933[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18936 = v5736[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18937 = v18936[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18938 = stdlib.cast("UInt", "UInt256", v18937, false, true);
          const v18939 = v2441.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5701 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
      const v5702 = {
        None: 0,
        Some: 1
        }[v5701[0]];
      const v5703 = stdlib.eq(v5702, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5703, {
        at: './index.rsh:413:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v5707 = stdlib.gt256(v2516, stdlib.checkedBigNumberify('./index.rsh:414:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5707, {
        at: './index.rsh:414:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v5709 = stdlib.gt256(v2480, stdlib.checkedBigNumberify('./index.rsh:415:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5709, {
        at: './index.rsh:415:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v5711 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3034), null);
      const v5712 = stdlib.fromSome(v5711, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5713 = stdlib.ge256(v2480, v5712);
      stdlib.assert(v5713, {
        at: './index.rsh:416:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v5716 = stdlib.gt256(v5712, stdlib.checkedBigNumberify('./index.rsh:417:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5716, {
        at: './index.rsh:417:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v5719 = v2441.currDistr;
      const v5720 = stdlib.safeMul256(v5712, v5719);
      const v5722 = stdlib.safeDiv256(v5720, v2480);
      const v5723 = stdlib.cast("UInt256", "UInt", v5722, false, true);
      const v5726 = stdlib.le(v5723, v2515);
      stdlib.assert(v5726, {
        at: './index.rsh:419:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v5733 = stdlib.sub(v2515, v5723);
      const v5735 = stdlib.Array_set(v2514, '0', v5733);
      const v5736 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v5735);
      ;
      const v5737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3034), null);
      const v5738 = stdlib.fromSome(v5737, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5739 = stdlib.safeAdd256(v5738, v5722);
      await stdlib.mapSet(map3, v3034, v5739);
      const v5740 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3034), null);
      const v5741 = stdlib.fromSome(v5740, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5742 = stdlib.safeAdd256(v5741, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map4, v3034, v5742);
      const v5743 = await txn1.getOutput('cBT', 'v5722', ctc1, v5722);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v5478, v5743), {
          at: './index.rsh:398:13:application',
          fs: ['at ./index.rsh:398:13:application call to [unknown function] (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:423:20:application call to "res" (defined at: ./index.rsh:412:13:function exp)', 'at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v18924 = v2441;
      const v18926 = v5736;
      const v18927 = v2441.totST;
      const v18928 = v2441.totBT;
      const v18929 = v2441.distrNum;
      const v18930 = v2441.saleLocked;
      const v18931 = v2441.docHash;
      const v18932 = v18931[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18933 = v2441.cv;
      const v18934 = v18933[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18935 = v18933[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18936 = v5736[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18937 = v18936[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18938 = stdlib.cast("UInt", "UInt256", v18937, false, true);
      const v18939 = v2441.ctcMan;
      return;
      
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2856 = ctc.selfAddress();
  const v2858 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:80:33:application call to "runcCM0_324" (defined at: ./index.rsh:427:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v2862 = stdlib.addressEq(v2856, v2421);
  const v2864 = stdlib.addressEq(v2856, v2518);
  const v2865 = v2862 ? true : v2864;
  stdlib.assert(v2865, {
    at: './index.rsh:431:23:application',
    fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:21:function exp)', 'at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:80:33:application call to "runcCM0_324" (defined at: ./index.rsh:427:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v2869 = ['cCM0_324', v2858];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2869],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:435:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:435:26:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          ;
          const v6359 = v6088[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
          const v6364 = true;
          const v6365 = await txn1.getOutput('cCM', 'v6364', ctc8, v6364);
          
          const v6371 = {
            ...v2441, 'ctcMan': v6359};
          const v19456 = v6371;
          const v19458 = v2444;
          const v19459 = v6371.totST;
          const v19460 = v6371.totBT;
          const v19461 = v6371.distrNum;
          const v19462 = v6371.saleLocked;
          const v19463 = v6371.docHash;
          const v19464 = v19463[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19465 = v6371.cv;
          const v19466 = v19465[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19467 = v19465[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19468 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19469 = v19468[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19470 = stdlib.cast("UInt", "UInt256", v19469, false, true);
          const v19471 = v6371.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6359 = v6088[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
      const v6360 = stdlib.addressEq(v3034, v2421);
      const v6362 = stdlib.addressEq(v3034, v2518);
      const v6363 = v6360 ? true : v6362;
      stdlib.assert(v6363, {
        at: './index.rsh:438:24:application',
        fs: ['at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v6364 = true;
      const v6365 = await txn1.getOutput('cCM', 'v6364', ctc8, v6364);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v6088, v6365), {
          at: './index.rsh:428:13:application',
          fs: ['at ./index.rsh:428:13:application call to [unknown function] (defined at: ./index.rsh:428:13:function exp)', 'at ./index.rsh:440:20:application call to "res" (defined at: ./index.rsh:437:13:function exp)', 'at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6371 = {
        ...v2441, 'ctcMan': v6359};
      const v19456 = v6371;
      const v19458 = v2444;
      const v19459 = v6371.totST;
      const v19460 = v6371.totBT;
      const v19461 = v6371.distrNum;
      const v19462 = v6371.saleLocked;
      const v19463 = v6371.docHash;
      const v19464 = v19463[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19465 = v6371.cv;
      const v19466 = v19465[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19467 = v19465[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19468 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19469 = v19468[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19470 = stdlib.cast("UInt", "UInt256", v19469, false, true);
      const v19471 = v6371.ctcMan;
      return;
      
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2595 = ctc.selfAddress();
  const v2597 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cancelSwap'
    });
  const v2599 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2595), null);
  const v2600 = '-----';
  const v2601 = stdlib.fromSome(v2599, v2600);
  const v2603 = stdlib.digest([ctc6], [v2601]);
  const v2605 = stdlib.digest([ctc6], [v2600]);
  const v2606 = stdlib.digestEq(v2603, v2605);
  const v2611 = 'compl';
  const v2614 = stdlib.digest([ctc6], [v2611]);
  const v2615 = stdlib.digestEq(v2603, v2614);
  const v2616 = v2615 ? false : true;
  const v2617 = v2606 ? false : v2616;
  stdlib.assert(v2617, {
    at: './index.rsh:153:23:application',
    fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:17:function exp)', 'at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'there must be a pending swap',
    who: 'cancelSwap'
    });
  const v2620 = ['cancelSwap0_324', v2597];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2620],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:157:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:157:25:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cancelSwap"
            });
          ;
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v3034), null);
          const v6984 = '-----';
          await stdlib.simMapSet(sim_r, 6, v3034, v6984);
          const v7003 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3034), null);
          const v7005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7007 = stdlib.fromSome(v7003, v7005);
          const v7008 = stdlib.Array_set(v7007, stdlib.checkedBigNumberify('./index.rsh:163:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:163:41:decimal', stdlib.UInt_max, '0'));
          const v7009 = stdlib.Array_set(v7008, stdlib.checkedBigNumberify('./index.rsh:164:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:164:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3034, v7009);
          const v7011 = true;
          const v7012 = await txn1.getOutput('cancelSwap', 'v7011', ctc8, v7011);
          
          const v19988 = v2441;
          const v19990 = v2444;
          const v19991 = v2441.totST;
          const v19992 = v2441.totBT;
          const v19993 = v2441.distrNum;
          const v19994 = v2441.saleLocked;
          const v19995 = v2441.docHash;
          const v19996 = v19995[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19997 = v2441.cv;
          const v19998 = v19997[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19999 = v19997[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20000 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20001 = v20000[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20002 = stdlib.cast("UInt", "UInt256", v20001, false, true);
          const v20003 = v2441.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6983 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3034), null);
      const v6984 = '-----';
      const v6985 = stdlib.fromSome(v6983, v6984);
      const v6987 = stdlib.digest([ctc6], [v6985]);
      const v6989 = stdlib.digest([ctc6], [v6984]);
      const v6990 = stdlib.digestEq(v6987, v6989);
      const v6995 = 'compl';
      const v6998 = stdlib.digest([ctc6], [v6995]);
      const v6999 = stdlib.digestEq(v6987, v6998);
      const v7000 = v6999 ? false : true;
      const v7001 = v6990 ? false : v7000;
      stdlib.assert(v7001, {
        at: './index.rsh:160:24:application',
        fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
        msg: 'there must be a pending swap',
        who: 'cancelSwap'
        });
      await stdlib.mapSet(map6, v3034, v6984);
      const v7003 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
      const v7005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7007 = stdlib.fromSome(v7003, v7005);
      const v7008 = stdlib.Array_set(v7007, stdlib.checkedBigNumberify('./index.rsh:163:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:163:41:decimal', stdlib.UInt_max, '0'));
      const v7009 = stdlib.Array_set(v7008, stdlib.checkedBigNumberify('./index.rsh:164:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:164:42:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3034, v7009);
      const v7011 = true;
      const v7012 = await txn1.getOutput('cancelSwap', 'v7011', ctc8, v7011);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v6698, v7012), {
          at: './index.rsh:150:13:application',
          fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:168:20:application call to "res" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
          msg: 'out',
          who: 'cancelSwap'
          });
        }
      else {
        }
      
      const v19988 = v2441;
      const v19990 = v2444;
      const v19991 = v2441.totST;
      const v19992 = v2441.totBT;
      const v19993 = v2441.distrNum;
      const v19994 = v2441.saleLocked;
      const v19995 = v2441.docHash;
      const v19996 = v19995[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19997 = v2441.cv;
      const v19998 = v19997[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19999 = v19997[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v20000 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20001 = v20000[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20002 = stdlib.cast("UInt", "UInt256", v20001, false, true);
      const v20003 = v2441.ctcMan;
      return;
      
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2689 = ctc.selfAddress();
  const v2691 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'claimSwapProceeds'
    });
  const v2693 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2689), null);
  const v2694 = {
    None: 0,
    Some: 1
    }[v2693[0]];
  const v2695 = stdlib.eq(v2694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2695, {
    at: './index.rsh:247:23:application',
    fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:17:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to claim swap proceeds',
    who: 'claimSwapProceeds'
    });
  const v2696 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2689), null);
  const v2698 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2700 = stdlib.fromSome(v2696, v2698);
  const v2701 = v2700[stdlib.checkedBigNumberify('./index.rsh:248:59:array ref', stdlib.UInt_max, '2')];
  const v2702 = stdlib.gt(v2701, stdlib.checkedBigNumberify('./index.rsh:248:65:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2702, {
    at: './index.rsh:248:23:application',
    fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:17:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must have swap proceeds to claim',
    who: 'claimSwapProceeds'
    });
  const v2711 = stdlib.ge(v2515, v2701);
  stdlib.assert(v2711, {
    at: './index.rsh:249:23:application',
    fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:17:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimSwapProceeds'
    });
  const v2714 = ['claimSwapProceeds0_324', v2691];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2714],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:253:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:253:25:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimSwapProceeds"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3034), null);
          const v7631 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3034), null);
          const v7633 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7635 = stdlib.fromSome(v7631, v7633);
          const v7636 = v7635[stdlib.checkedBigNumberify('./index.rsh:257:60:array ref', stdlib.UInt_max, '2')];
          const v7653 = stdlib.sub(v2515, v7636);
          const v7655 = stdlib.Array_set(v2514, '0', v7653);
          const v7656 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:260:47:application', stdlib.UInt_max, '0'), v7655);
          sim_r.txns.push({
            kind: 'from',
            to: v3034,
            tok: v2425
            });
          const v7657 = stdlib.Array_set(v7635, stdlib.checkedBigNumberify('./index.rsh:261:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:261:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3034, v7657);
          const v7658 = true;
          const v7659 = await txn1.getOutput('claimSwapProceeds', 'v7658', ctc8, v7658);
          
          const v20520 = v2441;
          const v20522 = v7656;
          const v20523 = v2441.totST;
          const v20524 = v2441.totBT;
          const v20525 = v2441.distrNum;
          const v20526 = v2441.saleLocked;
          const v20527 = v2441.docHash;
          const v20528 = v20527[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20529 = v2441.cv;
          const v20530 = v20529[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20531 = v20529[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20532 = v7656[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20533 = v20532[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20534 = stdlib.cast("UInt", "UInt256", v20533, false, true);
          const v20535 = v2441.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v7628 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
      const v7629 = {
        None: 0,
        Some: 1
        }[v7628[0]];
      const v7630 = stdlib.eq(v7629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7630, {
        at: './index.rsh:256:24:application',
        fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
        msg: 'you must be a whitelist member to claim swap proceeds',
        who: 'claimSwapProceeds'
        });
      const v7631 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
      const v7633 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7635 = stdlib.fromSome(v7631, v7633);
      const v7636 = v7635[stdlib.checkedBigNumberify('./index.rsh:257:60:array ref', stdlib.UInt_max, '2')];
      const v7637 = stdlib.gt(v7636, stdlib.checkedBigNumberify('./index.rsh:257:66:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7637, {
        at: './index.rsh:257:24:application',
        fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
        msg: 'you must have swap proceeds to claim',
        who: 'claimSwapProceeds'
        });
      const v7646 = stdlib.ge(v2515, v7636);
      stdlib.assert(v7646, {
        at: './index.rsh:259:24:application',
        fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimSwapProceeds'
        });
      const v7653 = stdlib.sub(v2515, v7636);
      const v7655 = stdlib.Array_set(v2514, '0', v7653);
      const v7656 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:260:47:application', stdlib.UInt_max, '0'), v7655);
      ;
      const v7657 = stdlib.Array_set(v7635, stdlib.checkedBigNumberify('./index.rsh:261:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:261:41:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3034, v7657);
      const v7658 = true;
      const v7659 = await txn1.getOutput('claimSwapProceeds', 'v7658', ctc8, v7658);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v7308, v7659), {
          at: './index.rsh:244:13:application',
          fs: ['at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)', 'at ./index.rsh:264:20:application call to "res" (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
          msg: 'out',
          who: 'claimSwapProceeds'
          });
        }
      else {
        }
      
      const v20520 = v2441;
      const v20522 = v7656;
      const v20523 = v2441.totST;
      const v20524 = v2441.totBT;
      const v20525 = v2441.distrNum;
      const v20526 = v2441.saleLocked;
      const v20527 = v2441.docHash;
      const v20528 = v20527[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v20529 = v2441.cv;
      const v20530 = v20529[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v20531 = v20529[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v20532 = v7656[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20533 = v20532[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20534 = stdlib.cast("UInt", "UInt256", v20533, false, true);
      const v20535 = v2441.ctcMan;
      return;
      
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2645 = ctc.selfAddress();
  const v2647 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'completeSwap'
    });
  const v2648 = v2647[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2649 = v2647[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2653 = stdlib.addressEq(v2645, v2648);
  const v2654 = v2653 ? false : true;
  stdlib.assert(v2654, {
    at: './index.rsh:197:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you cannot complete/buy your own swap',
    who: 'completeSwap'
    });
  const v2655 = stdlib.gt(v2649, stdlib.checkedBigNumberify('./index.rsh:198:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2655, {
    at: './index.rsh:198:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must buy at least 1 share token',
    who: 'completeSwap'
    });
  const v2656 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2648), null);
  const v2658 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2660 = stdlib.fromSome(v2656, v2658);
  const v2661 = v2660[stdlib.checkedBigNumberify('./index.rsh:199:68:array ref', stdlib.UInt_max, '0')];
  const v2662 = stdlib.le(v2649, v2661);
  stdlib.assert(v2662, {
    at: './index.rsh:199:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you cannot buy more than the quantity offered for sale',
    who: 'completeSwap'
    });
  const v2663 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2645), null);
  const v2664 = {
    None: 0,
    Some: 1
    }[v2663[0]];
  const v2665 = stdlib.eq(v2664, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2665, {
    at: './index.rsh:200:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to complete or buy swap',
    who: 'completeSwap'
    });
  const v2666 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2648), null);
  const v2667 = '-----';
  const v2668 = stdlib.fromSome(v2666, v2667);
  const v2669 = 'apprv';
  const v2670 = stdlib.digest([ctc6], [v2668]);
  const v2672 = stdlib.digest([ctc6], [v2669]);
  const v2673 = stdlib.digestEq(v2670, v2672);
  const v2677 = 'partl';
  const v2680 = stdlib.digest([ctc6], [v2677]);
  const v2681 = stdlib.digestEq(v2670, v2680);
  const v2682 = v2673 ? true : v2681;
  stdlib.assert(v2682, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you can only buy an approved or partially completed swap',
    who: 'completeSwap'
    });
  const v2687 = ['completeSwap0_324', v2647];
  
  const v2966 = v2660[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
  const v2967 = stdlib.safeMul(v2649, v2966);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2687],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:32:decimal', stdlib.UInt_max, '0'), [[v2967, v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "completeSwap"
            });
          const v7986 = v7918[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
          const v7987 = v7918[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '1')];
          const v7988 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v7986), null);
          const v7990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7992 = stdlib.fromSome(v7988, v7990);
          const v7993 = v7992[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
          const v7994 = stdlib.safeMul(v7987, v7993);
          ;
          const v8054 = stdlib.add(v2515, v7994);
          const v8056 = stdlib.Array_set(v2514, '0', v8054);
          const v8057 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8056);
          sim_r.txns.push({
            amt: v7994,
            kind: 'to',
            tok: v2425
            });
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3034), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v7986), null);
          const v8301 = 'partl';
          const v8312 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3034), null);
          const v8313 = stdlib.fromSome(v8312, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8314 = stdlib.cast("UInt", "UInt256", v7987, false, true);
          const v8315 = stdlib.safeAdd256(v8313, v8314);
          await stdlib.simMapSet(sim_r, 0, v3034, v8315);
          const v8316 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3034), null);
          const v8317 = stdlib.fromSome(v8316, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8319 = stdlib.safeAdd256(v8317, v8314);
          await stdlib.simMapSet(sim_r, 2, v3034, v8319);
          const v8320 = v7992[stdlib.checkedBigNumberify('./index.rsh:219:44:array ref', stdlib.UInt_max, '2')];
          const v8323 = stdlib.safeAdd(v8320, v7994);
          const v8324 = stdlib.Array_set(v7992, stdlib.checkedBigNumberify('./index.rsh:219:38:decimal', stdlib.UInt_max, '2'), v8323);
          const v8325 = v8324[stdlib.checkedBigNumberify('./index.rsh:220:46:array ref', stdlib.UInt_max, '3')];
          const v8326 = stdlib.safeAdd(v8325, v7987);
          const v8327 = stdlib.Array_set(v8324, stdlib.checkedBigNumberify('./index.rsh:220:39:decimal', stdlib.UInt_max, '3'), v8326);
          const v8328 = v8327[stdlib.checkedBigNumberify('./index.rsh:221:46:array ref', stdlib.UInt_max, '0')];
          const v8329 = stdlib.safeSub(v8328, v7987);
          const v8330 = stdlib.Array_set(v8327, stdlib.checkedBigNumberify('./index.rsh:221:39:decimal', stdlib.UInt_max, '0'), v8329);
          await stdlib.simMapSet(sim_r, 5, v7986, v8330);
          const v8331 = v8330[stdlib.checkedBigNumberify('./index.rsh:224:25:array ref', stdlib.UInt_max, '0')];
          const v8332 = stdlib.eq(v8331, stdlib.checkedBigNumberify('./index.rsh:224:32:decimal', stdlib.UInt_max, '0'));
          if (v8332) {
            const v8333 = 'compl';
            await stdlib.simMapSet(sim_r, 6, v7986, v8333);
            const v8334 = true;
            const v8335 = await txn1.getOutput('completeSwap', 'v8334', ctc8, v8334);
            
            const v8342 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7986), null);
            const v8343 = stdlib.fromSome(v8342, false);
            if (v8343) {
              const v8356 = stdlib.safeAdd256(v2480, v8314);
              const v8357 = {
                ...v2441, 'totST': v8356};
              const v21052 = v8357;
              const v21054 = v8057;
              const v21055 = v8357.totST;
              const v21056 = v8357.totBT;
              const v21057 = v8357.distrNum;
              const v21058 = v8357.saleLocked;
              const v21059 = v8357.docHash;
              const v21060 = v21059[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21061 = v8357.cv;
              const v21062 = v21061[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21063 = v21061[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21064 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21065 = v21064[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21066 = stdlib.cast("UInt", "UInt256", v21065, false, true);
              const v21067 = v8357.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              const v8345 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7986), null);
              const v8346 = stdlib.fromSome(v8345, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8348 = stdlib.safeSub256(v8346, v8314);
              await stdlib.simMapSet(sim_r, 0, v7986, v8348);
              const v8349 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v7986), null);
              const v8350 = stdlib.fromSome(v8349, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8352 = stdlib.safeSub256(v8350, v8314);
              await stdlib.simMapSet(sim_r, 2, v7986, v8352);
              const v21080 = v2441;
              const v21082 = v8057;
              const v21083 = v2441.totST;
              const v21084 = v2441.totBT;
              const v21085 = v2441.distrNum;
              const v21086 = v2441.saleLocked;
              const v21087 = v2441.docHash;
              const v21088 = v21087[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21089 = v2441.cv;
              const v21090 = v21089[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21091 = v21089[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21092 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21093 = v21092[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21094 = stdlib.cast("UInt", "UInt256", v21093, false, true);
              const v21095 = v2441.ctcMan;
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 6, v7986, v8301);
            const v8360 = true;
            const v8361 = await txn1.getOutput('completeSwap', 'v8360', ctc8, v8360);
            
            const v8368 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7986), null);
            const v8369 = stdlib.fromSome(v8368, false);
            if (v8369) {
              const v8382 = stdlib.safeAdd256(v2480, v8314);
              const v8383 = {
                ...v2441, 'totST': v8382};
              const v21108 = v8383;
              const v21110 = v8057;
              const v21111 = v8383.totST;
              const v21112 = v8383.totBT;
              const v21113 = v8383.distrNum;
              const v21114 = v8383.saleLocked;
              const v21115 = v8383.docHash;
              const v21116 = v21115[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21117 = v8383.cv;
              const v21118 = v21117[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21119 = v21117[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21120 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21121 = v21120[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21122 = stdlib.cast("UInt", "UInt256", v21121, false, true);
              const v21123 = v8383.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              const v8371 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7986), null);
              const v8372 = stdlib.fromSome(v8371, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8374 = stdlib.safeSub256(v8372, v8314);
              await stdlib.simMapSet(sim_r, 0, v7986, v8374);
              const v8375 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v7986), null);
              const v8376 = stdlib.fromSome(v8375, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8378 = stdlib.safeSub256(v8376, v8314);
              await stdlib.simMapSet(sim_r, 2, v7986, v8378);
              const v21136 = v2441;
              const v21138 = v8057;
              const v21139 = v2441.totST;
              const v21140 = v2441.totBT;
              const v21141 = v2441.distrNum;
              const v21142 = v2441.saleLocked;
              const v21143 = v2441.docHash;
              const v21144 = v21143[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21145 = v2441.cv;
              const v21146 = v21145[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21147 = v21145[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21148 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21149 = v21148[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21150 = stdlib.cast("UInt", "UInt256", v21149, false, true);
              const v21151 = v2441.ctcMan;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      undefined /* setApiDetails */;
      const v7986 = v7918[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
      const v7987 = v7918[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '1')];
      const v7988 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7986), null);
      const v7990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7992 = stdlib.fromSome(v7988, v7990);
      const v7993 = v7992[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
      const v7994 = stdlib.safeMul(v7987, v7993);
      ;
      const v8054 = stdlib.add(v2515, v7994);
      const v8056 = stdlib.Array_set(v2514, '0', v8054);
      const v8057 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8056);
      ;
      const v8277 = stdlib.addressEq(v3034, v7986);
      const v8278 = v8277 ? false : true;
      stdlib.assert(v8278, {
        at: './index.rsh:208:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you cannot complete/buy your own swap',
        who: 'completeSwap'
        });
      const v8279 = stdlib.gt(v7987, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8279, {
        at: './index.rsh:209:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you must buy at least 1 share token',
        who: 'completeSwap'
        });
      const v8285 = v7992[stdlib.checkedBigNumberify('./index.rsh:210:69:array ref', stdlib.UInt_max, '0')];
      const v8286 = stdlib.le(v7987, v8285);
      stdlib.assert(v8286, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you cannot buy more than the quantity offered for sale',
        who: 'completeSwap'
        });
      const v8287 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
      const v8288 = {
        None: 0,
        Some: 1
        }[v8287[0]];
      const v8289 = stdlib.eq(v8288, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v8289, {
        at: './index.rsh:211:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you must be a whitelist member to complete or buy swap',
        who: 'completeSwap'
        });
      const v8290 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7986), null);
      const v8291 = '-----';
      const v8292 = stdlib.fromSome(v8290, v8291);
      const v8293 = 'apprv';
      const v8294 = stdlib.digest([ctc6], [v8292]);
      const v8296 = stdlib.digest([ctc6], [v8293]);
      const v8297 = stdlib.digestEq(v8294, v8296);
      const v8301 = 'partl';
      const v8304 = stdlib.digest([ctc6], [v8301]);
      const v8305 = stdlib.digestEq(v8294, v8304);
      const v8306 = v8297 ? true : v8305;
      stdlib.assert(v8306, {
        at: './index.rsh:212:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you can only buy an approved or partially completed swap',
        who: 'completeSwap'
        });
      const v8312 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3034), null);
      const v8313 = stdlib.fromSome(v8312, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8314 = stdlib.cast("UInt", "UInt256", v7987, false, true);
      const v8315 = stdlib.safeAdd256(v8313, v8314);
      await stdlib.mapSet(map0, v3034, v8315);
      const v8316 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3034), null);
      const v8317 = stdlib.fromSome(v8316, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8319 = stdlib.safeAdd256(v8317, v8314);
      await stdlib.mapSet(map2, v3034, v8319);
      const v8320 = v7992[stdlib.checkedBigNumberify('./index.rsh:219:44:array ref', stdlib.UInt_max, '2')];
      const v8323 = stdlib.safeAdd(v8320, v7994);
      const v8324 = stdlib.Array_set(v7992, stdlib.checkedBigNumberify('./index.rsh:219:38:decimal', stdlib.UInt_max, '2'), v8323);
      const v8325 = v8324[stdlib.checkedBigNumberify('./index.rsh:220:46:array ref', stdlib.UInt_max, '3')];
      const v8326 = stdlib.safeAdd(v8325, v7987);
      const v8327 = stdlib.Array_set(v8324, stdlib.checkedBigNumberify('./index.rsh:220:39:decimal', stdlib.UInt_max, '3'), v8326);
      const v8328 = v8327[stdlib.checkedBigNumberify('./index.rsh:221:46:array ref', stdlib.UInt_max, '0')];
      const v8329 = stdlib.safeSub(v8328, v7987);
      const v8330 = stdlib.Array_set(v8327, stdlib.checkedBigNumberify('./index.rsh:221:39:decimal', stdlib.UInt_max, '0'), v8329);
      await stdlib.mapSet(map5, v7986, v8330);
      const v8331 = v8330[stdlib.checkedBigNumberify('./index.rsh:224:25:array ref', stdlib.UInt_max, '0')];
      const v8332 = stdlib.eq(v8331, stdlib.checkedBigNumberify('./index.rsh:224:32:decimal', stdlib.UInt_max, '0'));
      if (v8332) {
        const v8333 = 'compl';
        await stdlib.mapSet(map6, v7986, v8333);
        const v8334 = true;
        const v8335 = await txn1.getOutput('completeSwap', 'v8334', ctc8, v8334);
        if (v1502) {
          stdlib.protect(ctc0, await interact.out(v7918, v8335), {
            at: './index.rsh:194:13:application',
            fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:230:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'out',
            who: 'completeSwap'
            });
          }
        else {
          }
        
        const v8342 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7986), null);
        const v8343 = stdlib.fromSome(v8342, false);
        if (v8343) {
          const v8356 = stdlib.safeAdd256(v2480, v8314);
          const v8357 = {
            ...v2441, 'totST': v8356};
          const v21052 = v8357;
          const v21054 = v8057;
          const v21055 = v8357.totST;
          const v21056 = v8357.totBT;
          const v21057 = v8357.distrNum;
          const v21058 = v8357.saleLocked;
          const v21059 = v8357.docHash;
          const v21060 = v21059[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21061 = v8357.cv;
          const v21062 = v21061[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21063 = v21061[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21064 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21065 = v21064[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21066 = stdlib.cast("UInt", "UInt256", v21065, false, true);
          const v21067 = v8357.ctcMan;
          return;
          }
        else {
          const v8345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7986), null);
          const v8346 = stdlib.fromSome(v8345, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8348 = stdlib.safeSub256(v8346, v8314);
          await stdlib.mapSet(map0, v7986, v8348);
          const v8349 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7986), null);
          const v8350 = stdlib.fromSome(v8349, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8352 = stdlib.safeSub256(v8350, v8314);
          await stdlib.mapSet(map2, v7986, v8352);
          const v21080 = v2441;
          const v21082 = v8057;
          const v21083 = v2441.totST;
          const v21084 = v2441.totBT;
          const v21085 = v2441.distrNum;
          const v21086 = v2441.saleLocked;
          const v21087 = v2441.docHash;
          const v21088 = v21087[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21089 = v2441.cv;
          const v21090 = v21089[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21091 = v21089[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21092 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21093 = v21092[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21094 = stdlib.cast("UInt", "UInt256", v21093, false, true);
          const v21095 = v2441.ctcMan;
          return;
          }}
      else {
        await stdlib.mapSet(map6, v7986, v8301);
        const v8360 = true;
        const v8361 = await txn1.getOutput('completeSwap', 'v8360', ctc8, v8360);
        if (v1502) {
          stdlib.protect(ctc0, await interact.out(v7918, v8361), {
            at: './index.rsh:194:13:application',
            fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:230:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'out',
            who: 'completeSwap'
            });
          }
        else {
          }
        
        const v8368 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7986), null);
        const v8369 = stdlib.fromSome(v8368, false);
        if (v8369) {
          const v8382 = stdlib.safeAdd256(v2480, v8314);
          const v8383 = {
            ...v2441, 'totST': v8382};
          const v21108 = v8383;
          const v21110 = v8057;
          const v21111 = v8383.totST;
          const v21112 = v8383.totBT;
          const v21113 = v8383.distrNum;
          const v21114 = v8383.saleLocked;
          const v21115 = v8383.docHash;
          const v21116 = v21115[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21117 = v8383.cv;
          const v21118 = v21117[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21119 = v21117[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21120 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21121 = v21120[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21122 = stdlib.cast("UInt", "UInt256", v21121, false, true);
          const v21123 = v8383.ctcMan;
          return;
          }
        else {
          const v8371 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7986), null);
          const v8372 = stdlib.fromSome(v8371, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8374 = stdlib.safeSub256(v8372, v8314);
          await stdlib.mapSet(map0, v7986, v8374);
          const v8375 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7986), null);
          const v8376 = stdlib.fromSome(v8375, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8378 = stdlib.safeSub256(v8376, v8314);
          await stdlib.mapSet(map2, v7986, v8378);
          const v21136 = v2441;
          const v21138 = v8057;
          const v21139 = v2441.totST;
          const v21140 = v2441.totBT;
          const v21141 = v2441.distrNum;
          const v21142 = v2441.saleLocked;
          const v21143 = v2441.docHash;
          const v21144 = v21143[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21145 = v2441.cv;
          const v21146 = v21145[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21147 = v21145[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21148 = v8057[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21149 = v21148[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21150 = stdlib.cast("UInt", "UInt256", v21149, false, true);
          const v21151 = v2441.ctcMan;
          return;
          }}
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2805 = ctc.selfAddress();
  const v2807 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_324" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v2808 = v2807[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2811 = stdlib.addressEq(v2805, v2421);
  const v2813 = stdlib.addressEq(v2805, v2518);
  const v2814 = v2811 ? true : v2813;
  stdlib.assert(v2814, {
    at: './index.rsh:379:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:20:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_324" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v2815 = stdlib.cast("UInt256", "UInt", v2808, false, true);
  const v2816 = stdlib.gt(v2815, stdlib.checkedBigNumberify('./index.rsh:380:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2816, {
    at: './index.rsh:380:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:20:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_324" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v2820 = ['dBT0_324', v2807];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2820],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:383:24:decimal', stdlib.UInt_max, '0'), [[v2815, v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v8612 = v8528[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
          const v8613 = stdlib.cast("UInt256", "UInt", v8612, false, true);
          ;
          const v8664 = stdlib.add(v2515, v8613);
          const v8666 = stdlib.Array_set(v2514, '0', v8664);
          const v8667 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8666);
          sim_r.txns.push({
            amt: v8613,
            kind: 'to',
            tok: v2425
            });
          const v9004 = stdlib.safeAdd256(v2481, v8612);
          const v9005 = {
            ...v2441, 'totBT': v9004};
          const v9007 = stdlib.safeAdd256(v2482, stdlib.checkedBigNumberify('./index.rsh:390:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v9008 = {
            ...v9005, 'distrNum': v9007};
          const v9009 = {
            ...v9008, 'currDistr': v8612};
          const v9010 = true;
          const v9011 = await txn1.getOutput('dBT', 'v9010', ctc8, v9010);
          
          const v21668 = v9009;
          const v21670 = v8667;
          const v21671 = v9009.totST;
          const v21672 = v9009.totBT;
          const v21673 = v9009.distrNum;
          const v21674 = v9009.saleLocked;
          const v21675 = v9009.docHash;
          const v21676 = v21675[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21677 = v9009.cv;
          const v21678 = v21677[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21679 = v21677[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21680 = v8667[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21681 = v21680[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21682 = stdlib.cast("UInt", "UInt256", v21681, false, true);
          const v21683 = v9009.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      undefined /* setApiDetails */;
      const v8612 = v8528[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
      const v8613 = stdlib.cast("UInt256", "UInt", v8612, false, true);
      ;
      const v8664 = stdlib.add(v2515, v8613);
      const v8666 = stdlib.Array_set(v2514, '0', v8664);
      const v8667 = stdlib.Array_set(v2444, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8666);
      ;
      const v8997 = stdlib.addressEq(v3034, v2421);
      const v8999 = stdlib.addressEq(v3034, v2518);
      const v9000 = v8997 ? true : v8999;
      stdlib.assert(v9000, {
        at: './index.rsh:386:24:application',
        fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v9002 = stdlib.gt(v8613, stdlib.checkedBigNumberify('./index.rsh:387:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9002, {
        at: './index.rsh:387:24:application',
        fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v9004 = stdlib.safeAdd256(v2481, v8612);
      const v9005 = {
        ...v2441, 'totBT': v9004};
      const v9007 = stdlib.safeAdd256(v2482, stdlib.checkedBigNumberify('./index.rsh:390:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v9008 = {
        ...v9005, 'distrNum': v9007};
      const v9009 = {
        ...v9008, 'currDistr': v8612};
      const v9010 = true;
      const v9011 = await txn1.getOutput('dBT', 'v9010', ctc8, v9010);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v8528, v9011), {
          at: './index.rsh:376:13:application',
          fs: ['at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:393:20:application call to "res" (defined at: ./index.rsh:385:13:function exp)', 'at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v21668 = v9009;
      const v21670 = v8667;
      const v21671 = v9009.totST;
      const v21672 = v9009.totBT;
      const v21673 = v9009.distrNum;
      const v21674 = v9009.saleLocked;
      const v21675 = v9009.docHash;
      const v21676 = v21675[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v21677 = v9009.cv;
      const v21678 = v21677[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v21679 = v21677[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v21680 = v8667[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21681 = v21680[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21682 = stdlib.cast("UInt", "UInt256", v21681, false, true);
      const v21683 = v9009.ctcMan;
      return;
      
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2716 = ctc.selfAddress();
  const v2718 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_324" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v2724 = stdlib.eq(v2507, stdlib.checkedBigNumberify('./index.rsh:273:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2724, {
    at: './index.rsh:273:23:application',
    fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:18:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_324" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v2725 = stdlib.addressEq(v2716, v2421);
  const v2727 = stdlib.addressEq(v2716, v2518);
  const v2728 = v2725 ? true : v2727;
  stdlib.assert(v2728, {
    at: './index.rsh:274:23:application',
    fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:18:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_324" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v2732 = ['docHash0_324', v2718];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2732],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:278:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:278:26:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          ;
          const v9628 = v9138[stdlib.checkedBigNumberify('./index.rsh:268:13:spread', stdlib.UInt_max, '0')];
          const v9636 = stdlib.safeAdd(v2507, stdlib.checkedBigNumberify('./index.rsh:284:76:decimal', stdlib.UInt_max, '1'));
          const v9638 = [v9628, v9636, v3036];
          const v9639 = {
            ...v2441, 'docHash': v9638};
          const v9640 = true;
          const v9641 = await txn1.getOutput('docHash', 'v9640', ctc8, v9640);
          
          const v22200 = v9639;
          const v22202 = v2444;
          const v22203 = v9639.totST;
          const v22204 = v9639.totBT;
          const v22205 = v9639.distrNum;
          const v22206 = v9639.saleLocked;
          const v22207 = v9639.docHash;
          const v22208 = v22207[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v22209 = v9639.cv;
          const v22210 = v22209[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v22211 = v22209[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v22212 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22213 = v22212[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22214 = stdlib.cast("UInt", "UInt256", v22213, false, true);
          const v22215 = v9639.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v9628 = v9138[stdlib.checkedBigNumberify('./index.rsh:268:13:spread', stdlib.UInt_max, '0')];
      const v9631 = stdlib.eq(v2507, stdlib.checkedBigNumberify('./index.rsh:282:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9631, {
        at: './index.rsh:282:24:application',
        fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v9632 = stdlib.addressEq(v3034, v2421);
      const v9634 = stdlib.addressEq(v3034, v2518);
      const v9635 = v9632 ? true : v9634;
      stdlib.assert(v9635, {
        at: './index.rsh:283:24:application',
        fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v9636 = stdlib.safeAdd(v2507, stdlib.checkedBigNumberify('./index.rsh:284:76:decimal', stdlib.UInt_max, '1'));
      const v9638 = [v9628, v9636, v3036];
      const v9639 = {
        ...v2441, 'docHash': v9638};
      const v9640 = true;
      const v9641 = await txn1.getOutput('docHash', 'v9640', ctc8, v9640);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v9138, v9641), {
          at: './index.rsh:269:13:application',
          fs: ['at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)', 'at ./index.rsh:285:20:application call to "res" (defined at: ./index.rsh:280:13:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v22200 = v9639;
      const v22202 = v2444;
      const v22203 = v9639.totST;
      const v22204 = v9639.totBT;
      const v22205 = v9639.distrNum;
      const v22206 = v9639.saleLocked;
      const v22207 = v9639.docHash;
      const v22208 = v22207[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v22209 = v9639.cv;
      const v22210 = v22209[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v22211 = v22209[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v22212 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22213 = v22212[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22214 = stdlib.cast("UInt", "UInt256", v22213, false, true);
      const v22215 = v9639.ctcMan;
      return;
      
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2544 = ctc.selfAddress();
  const v2546 = stdlib.protect(ctc19, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'initSwap'
    });
  const v2547 = v2546[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2548 = v2546[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2549 = v2546[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2555 = stdlib.addressEq(v2544, v2421);
  const v2557 = stdlib.addressEq(v2544, v2518);
  const v2558 = v2555 ? true : v2557;
  const v2559 = v2549 ? v2558 : false;
  const v2560 = v2549 ? false : true;
  const v2561 = v2559 ? true : v2560;
  stdlib.assert(v2561, {
    at: './index.rsh:117:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'if you are not creator or manager, the swap cannot be share issuance type',
    who: 'initSwap'
    });
  const v2562 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2544), null);
  const v2563 = {
    None: 0,
    Some: 1
    }[v2562[0]];
  const v2564 = stdlib.eq(v2563, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2566 = v2564 ? v2560 : false;
  const v2568 = v2566 ? true : v2549;
  stdlib.assert(v2568, {
    at: './index.rsh:118:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member',
    who: 'initSwap'
    });
  const v2569 = stdlib.gt(v2547, stdlib.checkedBigNumberify('./index.rsh:119:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2569, {
    at: './index.rsh:119:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'initSwap'
    });
  const v2570 = stdlib.gt(v2548, stdlib.checkedBigNumberify('./index.rsh:120:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2570, {
    at: './index.rsh:120:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'price must be greater than 0',
    who: 'initSwap'
    });
  const v2571 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2544), null);
  const v2572 = '-----';
  const v2573 = stdlib.fromSome(v2571, v2572);
  const v2575 = stdlib.digest([ctc6], [v2573]);
  const v2577 = stdlib.digest([ctc6], [v2572]);
  const v2578 = stdlib.digestEq(v2575, v2577);
  const v2582 = 'compl';
  const v2585 = stdlib.digest([ctc6], [v2582]);
  const v2586 = stdlib.digestEq(v2575, v2585);
  const v2587 = v2578 ? true : v2586;
  stdlib.assert(v2587, {
    at: './index.rsh:121:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'there must be no pending swap',
    who: 'initSwap'
    });
  const v2593 = ['initSwap0_324', v2546];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2593],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:124:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:124:32:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "initSwap"
            });
          ;
          ;
          const v10258 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v10259 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v10260 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
          const v10262 = stdlib.addressEq(v3034, v2421);
          const v10264 = stdlib.addressEq(v3034, v2518);
          const v10265 = v10262 ? true : v10264;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3034), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v3034), null);
          const v10300 = v10265 ? v10260 : false;
          if (v10300) {
            const v10301 = 'apprv';
            await stdlib.simMapSet(sim_r, 6, v3034, v10301);
            await stdlib.simMapSet(sim_r, 7, v3034, true);
            const v10302 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3034), null);
            const v10304 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10306 = stdlib.fromSome(v10302, v10304);
            const v10307 = stdlib.Array_set(v10306, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10258);
            const v10308 = stdlib.Array_set(v10307, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10259);
            const v10309 = stdlib.Array_set(v10308, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 5, v3034, v10309);
            const v10310 = true;
            const v10311 = await txn1.getOutput('initSwap', 'v10310', ctc8, v10310);
            
            const v22732 = v2441;
            const v22734 = v2444;
            const v22735 = v2441.totST;
            const v22736 = v2441.totBT;
            const v22737 = v2441.distrNum;
            const v22738 = v2441.saleLocked;
            const v22739 = v2441.docHash;
            const v22740 = v22739[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
            const v22741 = v2441.cv;
            const v22742 = v22741[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
            const v22743 = v22741[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
            const v22744 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22745 = v22744[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22746 = stdlib.cast("UInt", "UInt256", v22745, false, true);
            const v22747 = v2441.ctcMan;
            sim_r.isHalt = false;
            }
          else {
            const v10319 = 'initd';
            await stdlib.simMapSet(sim_r, 6, v3034, v10319);
            await stdlib.simMapSet(sim_r, 7, v3034, v10260);
            const v10320 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3034), null);
            const v10322 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10324 = stdlib.fromSome(v10320, v10322);
            const v10325 = stdlib.Array_set(v10324, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10258);
            const v10326 = stdlib.Array_set(v10325, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10259);
            const v10327 = stdlib.Array_set(v10326, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 5, v3034, v10327);
            const v10328 = true;
            const v10329 = await txn1.getOutput('initSwap', 'v10328', ctc8, v10328);
            
            const v22760 = v2441;
            const v22762 = v2444;
            const v22763 = v2441.totST;
            const v22764 = v2441.totBT;
            const v22765 = v2441.distrNum;
            const v22766 = v2441.saleLocked;
            const v22767 = v2441.docHash;
            const v22768 = v22767[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
            const v22769 = v2441.cv;
            const v22770 = v22769[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
            const v22771 = v22769[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
            const v22772 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22773 = v22772[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22774 = stdlib.cast("UInt", "UInt256", v22773, false, true);
            const v22775 = v2441.ctcMan;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v10258 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
      const v10259 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
      const v10260 = v9748[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
      const v10262 = stdlib.addressEq(v3034, v2421);
      const v10264 = stdlib.addressEq(v3034, v2518);
      const v10265 = v10262 ? true : v10264;
      const v10266 = v10260 ? v10265 : false;
      const v10267 = v10260 ? false : true;
      const v10268 = v10266 ? true : v10267;
      stdlib.assert(v10268, {
        at: './index.rsh:127:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'if you are not creator or manager, the swap cannot be share issuance type',
        who: 'initSwap'
        });
      const v10269 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3034), null);
      const v10270 = {
        None: 0,
        Some: 1
        }[v10269[0]];
      const v10271 = stdlib.eq(v10270, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v10273 = v10271 ? v10267 : false;
      const v10275 = v10273 ? true : v10260;
      stdlib.assert(v10275, {
        at: './index.rsh:128:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'you must be a whitelist member',
        who: 'initSwap'
        });
      const v10276 = stdlib.gt(v10258, stdlib.checkedBigNumberify('./index.rsh:129:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10276, {
        at: './index.rsh:129:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'initSwap'
        });
      const v10277 = stdlib.gt(v10259, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10277, {
        at: './index.rsh:130:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'initSwap'
        });
      const v10278 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3034), null);
      const v10279 = '-----';
      const v10280 = stdlib.fromSome(v10278, v10279);
      const v10282 = stdlib.digest([ctc6], [v10280]);
      const v10284 = stdlib.digest([ctc6], [v10279]);
      const v10285 = stdlib.digestEq(v10282, v10284);
      const v10289 = 'compl';
      const v10292 = stdlib.digest([ctc6], [v10289]);
      const v10293 = stdlib.digestEq(v10282, v10292);
      const v10294 = v10285 ? true : v10293;
      stdlib.assert(v10294, {
        at: './index.rsh:131:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'there must be no pending swap',
        who: 'initSwap'
        });
      const v10300 = v10265 ? v10260 : false;
      if (v10300) {
        const v10301 = 'apprv';
        await stdlib.mapSet(map6, v3034, v10301);
        await stdlib.mapSet(map7, v3034, true);
        const v10302 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
        const v10304 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v10306 = stdlib.fromSome(v10302, v10304);
        const v10307 = stdlib.Array_set(v10306, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10258);
        const v10308 = stdlib.Array_set(v10307, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10259);
        const v10309 = stdlib.Array_set(v10308, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map5, v3034, v10309);
        const v10310 = true;
        const v10311 = await txn1.getOutput('initSwap', 'v10310', ctc8, v10310);
        if (v1502) {
          stdlib.protect(ctc0, await interact.out(v9748, v10311), {
            at: './index.rsh:114:13:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:145:20:application call to "res" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'out',
            who: 'initSwap'
            });
          }
        else {
          }
        
        const v22732 = v2441;
        const v22734 = v2444;
        const v22735 = v2441.totST;
        const v22736 = v2441.totBT;
        const v22737 = v2441.distrNum;
        const v22738 = v2441.saleLocked;
        const v22739 = v2441.docHash;
        const v22740 = v22739[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v22741 = v2441.cv;
        const v22742 = v22741[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v22743 = v22741[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v22744 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22745 = v22744[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22746 = stdlib.cast("UInt", "UInt256", v22745, false, true);
        const v22747 = v2441.ctcMan;
        return;
        }
      else {
        const v10319 = 'initd';
        await stdlib.mapSet(map6, v3034, v10319);
        await stdlib.mapSet(map7, v3034, v10260);
        const v10320 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3034), null);
        const v10322 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v10324 = stdlib.fromSome(v10320, v10322);
        const v10325 = stdlib.Array_set(v10324, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10258);
        const v10326 = stdlib.Array_set(v10325, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10259);
        const v10327 = stdlib.Array_set(v10326, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map5, v3034, v10327);
        const v10328 = true;
        const v10329 = await txn1.getOutput('initSwap', 'v10328', ctc8, v10328);
        if (v1502) {
          stdlib.protect(ctc0, await interact.out(v9748, v10329), {
            at: './index.rsh:114:13:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:145:20:application call to "res" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'out',
            who: 'initSwap'
            });
          }
        else {
          }
        
        const v22760 = v2441;
        const v22762 = v2444;
        const v22763 = v2441.totST;
        const v22764 = v2441.totBT;
        const v22765 = v2441.distrNum;
        const v22766 = v2441.saleLocked;
        const v22767 = v2441.docHash;
        const v22768 = v22767[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v22769 = v2441.cv;
        const v22770 = v22769[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v22771 = v22769[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v22772 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22773 = v22772[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22774 = stdlib.cast("UInt", "UInt256", v22773, false, true);
        const v22775 = v2441.ctcMan;
        return;
        }
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2788 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:80:33:application call to "runoptIn0_324" (defined at: ./index.rsh:348:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v2792 = ['optIn0_324', v2788];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2792],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:354:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:354:25:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 8, v3034, true);
          const v10948 = true;
          const v10949 = await txn1.getOutput('optIn', 'v10948', ctc8, v10948);
          
          const v23292 = v2441;
          const v23294 = v2444;
          const v23295 = v2441.totST;
          const v23296 = v2441.totBT;
          const v23297 = v2441.distrNum;
          const v23298 = v2441.saleLocked;
          const v23299 = v2441.docHash;
          const v23300 = v23299[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v23301 = v2441.cv;
          const v23302 = v23301[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v23303 = v23301[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v23304 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23305 = v23304[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23306 = stdlib.cast("UInt", "UInt256", v23305, false, true);
          const v23307 = v2441.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map8, v3034, true);
      const v10948 = true;
      const v10949 = await txn1.getOutput('optIn', 'v10948', ctc8, v10948);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v10358, v10949), {
          at: './index.rsh:349:13:application',
          fs: ['at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:358:20:application call to "res" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:356:13:application call to [unknown function] (defined at: ./index.rsh:356:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v23292 = v2441;
      const v23294 = v2444;
      const v23295 = v2441.totST;
      const v23296 = v2441.totBT;
      const v23297 = v2441.distrNum;
      const v23298 = v2441.saleLocked;
      const v23299 = v2441.docHash;
      const v23300 = v23299[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v23301 = v2441.cv;
      const v23302 = v23301[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v23303 = v23301[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v23304 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23305 = v23304[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23306 = stdlib.cast("UInt", "UInt256", v23305, false, true);
      const v23307 = v2441.ctcMan;
      return;
      
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
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
  
  
  const [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2749 = ctc.selfAddress();
  const v2751 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:80:33:application call to "runremWL0_324" (defined at: ./index.rsh:307:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v2755 = stdlib.addressEq(v2749, v2421);
  const v2757 = stdlib.addressEq(v2749, v2518);
  const v2758 = v2755 ? true : v2757;
  stdlib.assert(v2758, {
    at: './index.rsh:311:23:application',
    fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)', 'at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:80:33:application call to "runremWL0_324" (defined at: ./index.rsh:307:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v2762 = ['remWL0_324', v2751];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2421, v2425, v2441, v2444, v2480, v2481, v2482, v2484, v2505, v2507, v2510, v2512, v2514, v2515, v2516, v2518, v2762],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:315:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:315:26:decimal', stdlib.UInt_max, '0'), v2425]]],
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
      
      const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
      
      switch (v3035[0]) {
        case 'aST0_324': {
          const v3038 = v3035[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3648 = v3035[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4258 = v3035[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4868 = v3035[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5478 = v3035[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6088 = v3035[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6698 = v3035[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7308 = v3035[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7918 = v3035[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8528 = v3035[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9138 = v3035[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9748 = v3035[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10358 = v3035[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10968 = v3035[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          ;
          const v11565 = v10968[stdlib.checkedBigNumberify('./index.rsh:307:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v11565, undefined /* Nothing */);
          const v11571 = true;
          const v11572 = await txn1.getOutput('remWL', 'v11571', ctc8, v11571);
          
          const v23824 = v2441;
          const v23826 = v2444;
          const v23827 = v2441.totST;
          const v23828 = v2441.totBT;
          const v23829 = v2441.distrNum;
          const v23830 = v2441.saleLocked;
          const v23831 = v2441.docHash;
          const v23832 = v23831[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v23833 = v2441.cv;
          const v23834 = v23833[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v23835 = v23833[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v23836 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23837 = v23836[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23838 = stdlib.cast("UInt", "UInt256", v23837, false, true);
          const v23839 = v2441.ctcMan;
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
  const {data: [v3035], secs: v3037, time: v3036, didSend: v1502, from: v3034 } = txn1;
  switch (v3035[0]) {
    case 'aST0_324': {
      const v3038 = v3035[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3648 = v3035[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4258 = v3035[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4868 = v3035[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5478 = v3035[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6088 = v3035[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6698 = v3035[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7308 = v3035[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7918 = v3035[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8528 = v3035[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9138 = v3035[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9748 = v3035[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10358 = v3035[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10968 = v3035[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v11565 = v10968[stdlib.checkedBigNumberify('./index.rsh:307:13:spread', stdlib.UInt_max, '0')];
      const v11566 = stdlib.addressEq(v3034, v2421);
      const v11568 = stdlib.addressEq(v3034, v2518);
      const v11569 = v11566 ? true : v11568;
      stdlib.assert(v11569, {
        at: './index.rsh:318:24:application',
        fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map9, v11565, undefined /* Nothing */);
      const v11571 = true;
      const v11572 = await txn1.getOutput('remWL', 'v11571', ctc8, v11571);
      if (v1502) {
        stdlib.protect(ctc0, await interact.out(v10968, v11572), {
          at: './index.rsh:308:13:application',
          fs: ['at ./index.rsh:308:13:application call to [unknown function] (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:321:20:application call to "res" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v23824 = v2441;
      const v23826 = v2444;
      const v23827 = v2441.totST;
      const v23828 = v2441.totBT;
      const v23829 = v2441.distrNum;
      const v23830 = v2441.saleLocked;
      const v23831 = v2441.docHash;
      const v23832 = v23831[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v23833 = v2441.cv;
      const v23834 = v23833[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v23835 = v23833[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v23836 = v2444[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23837 = v23836[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23838 = stdlib.cast("UInt", "UInt256", v23837, false, true);
      const v23839 = v2441.ctcMan;
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
  appApproval: `ByA2AAEDIAhABGAYEQahAhACBdEB1J2TzAjg5cOwDOO5zasO2I6Z4A6fk4HRD+LOidYOsILfsAyamI65DJwF7oKunwqht9rXCqKmnpsMggOiA8ID8eGT4Qjd0eGYCev2jfsF3ZaWgwiK0sKbCLytx6sIl5z91Ab95qmlB7wF2Nv8mQP5hIqRBcn8mLwF2wSXxMGvAZz4g4gC////////////ASjJAvECBw2BAn8mDQEBAQABAwECAQQBBQAFLS0tLS0BBwIBASCf0CYEl4tw6mkMuSyiIXqYTjqXWt+37US2HyWYEUp9PwYBYXBwcnYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiNQAxGEETUCcGZEkiWzUBSSEEWzUCIQxbNQgxGSMSQQAcMQAhD69LASlLAlcAf2ZLAShLAld/UmZISEITAzYaABdJQQRDIjUEIzUGSSEQDEACo0khEQxAATdJIRIMQAB3SSETDEAAMUkhFAxAABQhFBJENhoBNf8qNP9QIQWvUEIEeyETEkQ2GgE1/4ABDTT/UCEFr1BCBGVJIRUMQAAaIRUSRDYaATYaAlA1/4ABCDT/UIE4r1BCBEQhEhJENhoBNhoCUDYaA1A1/4ABCzT/UIFPr1BCBCZJIRYMQABeSSEXDEAALiEXEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQMhGCVYNANXIAhQNQdCEjwhFhJENAEkEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDgeIDI1g1B0ISEyEREkQ0ASQSRDYaATX/MgM0/4gSKFdCIUk1/lcBIDT+IlVNMgM0/4gSE1djIUk1/lcBIDT+IlVNUDIDNP+IEf1XhCFJNf5XASA0/iJVTVA1B0IRv0khGQxAAMlJIRoMQACtSSEbDEAAcCEbEkQ0ASQSRDYaATX/MgM0/4gRv1elIUk1/VcBIDT9IlVNSTX+VwAINP5XCAhQNP5XGAhQJwc0/4gRmFfGBkk1/VcBBTT9IlVNUDT+VxAIUCI0/4gRfVfMAkk1/VcBARc0/SJVTRZRBwhQNQdCETohGhJENAEkEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDIRwlWDQDIR0lWFA0AyEeJVhQNQdCEQQhGRJEJwY1/4ABBjT/UCEHr1BCAp1JIR8MQABkSSEgDEAAHyEgEkQ0ASQSRDYaAYgQ/FfQASJVIxIWUQcINQdCEMIhHxJENAEkEkQ2GgE1/zIDNP+IENdXACFJNf5XASA0/iJVTTIDNP+IEMJXISFJNf5XASA0/iJVTVA1B0IQhCEQEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQOB4wOBcFg1B0IQWkkhIQxAAMtJISIMQABMSSEjDEAAMUkhJAxAABQhJBJENhoBNf8rNP9QIQWvUEIB2CEjEkQ2GgE1/4ABCTT/UCEFr1BCAcIhIhJENhoBNf8oNP9QgTyvUEIBrkkhJQxAAF1JISYMQAAuISYSRDQBJBJEKWQoZFArZFAqZFAnBGRQJwVkUEk1A1cAIDQDISclWFA1B0IPxCElEkQ0ASQSRCI2GgGID95XzgJJNf9XAQEXNP8iVU0WUQcINQdCD5whIRJEJwY1/ycINP9QIQevUEIBNkkhKAxAAGdJISkMQAAuSSEqDEAAEiEqEkQ2GgE1/4ABCjT/UEIBDyEpEkQnBjX/gAEMNP9QIQevUEIA+iEoEkQ0ASQSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQMhKyEGWDQDgd8EgSRYUDUHQg8aSSEsDEAAMEkhLQxAABUhLRJENhoBNf8nBTT/UCEFr1BCAKUhLBJEJwY1/ycENP9QIQevUEIAkYH1+t+SARJENhoBNhoCUDYaA1A1/yk0/1BCAHU2GgIXNQQ2GgM2GgEXSSENDEAMEkkkDEAAWiQSRCQ0ARJENARJIhJMNAISEUQpZChkUCtkUCpkUCcEZFAnBWRQSTUDVwAgNf+ABKdlxLSwMgYhLg9ENP8xABJENP80AyVbNAMhLyEwWDIGNAMhMSEJWEINF0gkNAESRDQESSISTDQCEhFEKWQoZFArZFAqZFAnBGRQJwVkUEk1A0lKSkpJVwAgNf8lWzX+IS8hMFg1/SExIQlYNfwhHCVYNfuB0wRbNfqBgwUhCVg1+YGUBVs1+CEnJVg190k1BTX2gATjuNGVNPZQsDIGIS4MRDT2IlVJITIMQAcpSYEKDEACrkmBDAxAAJNJITMMQABQITMSRDT2VwEgNfUxADT/EjEANPcSEUQ09UmIDcgpXNBLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAALTMBsCg1BzT/NP40/TIGNPxCDC9IMQAxAIgNjScJXM5LASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAAKsQBsCg1BzT/NP40/TIGNPxCC/NJgQsMQAHKSDT2VwERNfU09SJbNfQ09SEEWzXzNPVXEAEXNfIxADT/EjEANPcSETXxNPIUNfA08jTxEDTwEUQxAIgNFVfQASJVIxI08BA08hFENPQiDUQ08yINRCcHSTXvMQCIDPNXxgZJNe1XAQU07SJVTQFJNe407wESNO4nChIRRDTxNPIQQQCdMQAxAIgMxycLXMZLASlLAlcAf2ZLAShLAld/UmZISDEAMQCIDKgnCVzMSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAyJKDIDMQCIDIFXpSFJNe1XASA07SJVTTT0FlwANPMWXAghBK9cGFBcpUsBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAAoRgGwKDUHNP80/jT9MgY0/EIKyzEAMQCIDCqABgFpbml0ZFzGSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAwFKDTyFlEHCFBczEsBKUsCVwB/ZksBKEsCV39SZkhIMQAxAIgL4CgyAzEAiAvYV6UhSTXtVwEgNO0iVU009BZcADTzFlwIIQSvXBhQXKVLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAAKFgBsCg1BzT/NP40/TIGNPxCCiJINPZXAWA19TT6IhJEMQA0/xIxADT3EhFEgAkAAAAAAAAlqAGwKDUHNP80/jT9NPU0+iMIFlAyBhZQXJAyBjT8QgnfSSEEDEAD1UmBCQxAAHlINPZXASA19TT1STX0SZMhBQ5EIQhbNfM08zT+iAtHMQA0/xIxADT3EhFENPMiDUSACQAAAAAAACMyAbAoNQc0/zT+NP0hNDQDIR0lWDT0oIgLM100AyEeJVgnDKCICyZccDT0XCAyBjT8NPk0+DTzCBZcAFwAQglYSDT2VwEoNfWxIrIBIQqyEDQIshizNPVXACA19DT1JVs18zIDNPSICpVXpSFJNfFXASA08SJVTTXyNPM08iEEWws18TT8NPk0+DTxCBZcAFwANfA08TT+iAqTMQA09BNENPMiDUQ08zTyIlsORDEAiApMV9ABIlUjEkQnBzT0iAo9V8YGSTXuVwEFNO4iVU0BNe+ABXBhcnRsNe4074Agc01Vgx2FHebe9jpoxdjMiJk+rqCTCMGDIdksbrT86gASNO807gESEUQhCK808xZQNe0xADEAiAnmKDIDMQCICd5XACFJNexXASA07CJVTTTtoIgKGVBcAEsBKUsCVwB/ZksBKEsCV39SZkhIMQAxAIgJrCgyAzEAiAmkV0IhSTXsVwEgNOwiVU007aCICd9QXEJLASlLAlcAf2ZLAShLAld/UmZISDTySSEMWzTxCBZcEEk17EkhCFs08wgWXBhJNetJIls08wkWXAA16jT0SYgJTCg06lBcpUsBKUsCVwB/ZksBKEsCV39SZkhINOoiWyISQQDiNPRJiAkjgAYBY29tcGxcxksBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAAgjgGwKDUHIjT0iAjwV8wCSTXpVwEBFzTpIlVNQQAYNP80/jT9IQs0+zTtoIgJHV0yBjTwQgdgNPRJiAjAKDIDNPSICLhXACFJNelXASA06SJVTTTtoYgI81BcAEsBKUsCVwB/ZksBKEsCV39SZkhINPRJiAiHKDIDNPSICH9XQiFJNelXASA06SJVTTTtoYgIulBcQksBKUsCVwB/ZksBKEsCV39SZkhINP80/jT9MgY08EIG4TT0SYgIQSg07lBcxksBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAAgqAGwKDUHIjT0iAgSV8wCSTXpVwEBFzTpIlVNQQAYNP80/jT9IQs0+zTtoIgIP10yBjTwQgaCNPRJiAfiKDIDNPSIB9pXACFJNelXASA06SJVTTTtoYgIFVBcAEsBKUsCVwB/ZksBKEsCV39SZkhINPRJiAepKDIDNPSIB6FXQiFJNelXASA06SJVTTTtoYgH3FBcQksBKUsCVwB/ZksBKEsCV39SZkhINP80/jT9MgY08EIGA0gxAIgHY1fQASJVIxJEMgMxAIgHVFelIUk19FcBIDT0IlVNSTX1IQxbSTX0Ig1ENPg09A9EsSKyATT0shIhBrIQMQCyFDT+shGzMQAxAIgHGCg09SEEr1wQUFylSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAAB3qAbAoNQc0/zT+NP0yBjT8NPk0+DT0CRZcAFwAQgVrSSQMQAKRSSEODEAA3kkhCgxAAKNIJwdJNfUxAIgGslfGBkk181cBBTTzIlVNAUk19DT1ARM09CcKExBEMQAxAIgGjig09VBcxksBKUsCVwB/ZksBKEsCV39SZkhIMQAxAIgGbSgyAzEAiAZlV6UhSTXzVwEgNPMiVU0hBK9cACEEr1wIUFylSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABtjAbAoNQc0/zT+NP0yBjT8QgS0SDT2VwEgNfUxADT/EjEANPcSEUSACQAAAAAAABjcAbAoNQc0/zT+NP009VwAMgY0/EIEgEkhBgxAARlIMQCIBdlX0AEiVSMSRDQDIRglWDIDpUQ0+zIDpUQyAzEAiAW6V0IhSTX0VwEgNPQiVU019TT7NPWnRDT1MgOlRDT1NP1XICCjiAXiNPuiiAXcSTX0SZMhBQ5EIQhbSTXzNPgORLEisgE087ISIQayEDEAshQ0/rIRszEAMQCIBV4oMgMxAIgFVldjIUk18lcBIDTyIlVNNPSgiAWRUFxjSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAUkKDIDMQCIBRxXhCFJNfJXASA08iJVTScMoIgFV1BchEsBKUsCVwB/ZksBKEsCV39SZkhIgAgAAAAAAAAWWjT0ULA09DUHNP80/jT9MgY0/DT5NPg08wkWXABcAEIDYEg09lcBIDX1NPU19DEANP8SMQA09xIRRCcHNPSIBKdXxgZJNfNXAQU08yJVTQGAIJVPK2UUdMISvagB9xR3WGJ5PssOUDNabUvT8WFJ1JgJEkQ09EmIBG4nC1zGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABPbAbAoNQc0/zT+NP0yBjT8QgLUSSMMQACESSENDEAATUg09lcBIDX1MQA0/xIxADT3EhFENPVJiAQTKFzQSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABFeAbAoNQc0/zT+NP0yBjT8QgJ6SDT2VwEkNfWACQAAAAAAAA7uAbAoNQc0/zT+NP00AyErIQZYNPVQXEAyBjT8QgJKSDT2VwFgNfU09VcAIDX0NPVXICA18zT1V0AgNfI09DT/EjT0NPcSEUQ08jIDpUQ080mIA3soXNBLASlLAlcAf2ZLAShLAld/UmZISDTzSYgDXigyAzTziANWVwAhSTXxVwEgNPEiVU008qCIA5FQXABLASlLAlcAf2ZLAShLAld/UmZISDTzSYgDJSgyAzTziAMdV0IhSTXxVwEgNPEiVU008qCIA1hQXEJLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAADHwBsCg1BzT/NP40/SELNPs08qCIAyJdMgY0/EIBZSISRIHAmgyIAtixIrIBIQqyECKyGIAGBzEAMgkSsh4nCLIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/FepIDX7gASaMPkdNP9QNP4WUQcIUDT9UDT8FlA0+1CwIQmvNfqBoI0GiAJisSKyASKyEiEGshAyCrIUNPyyEbMxADT8NP0yA1CAKDIuMDJjb29wZXJhdGl2SWRjb29wZXJhdGl2SWRjb29wZXJhdGl2SWRQIQSvUDIDUIBwYWpkbmFlaW5hd2luZGlhZW5ndG5pZnJqd3JpdG5pcXdybmlyZWZpbmRpbmlnYWpkbmFlaW5hd2lkaWFlbmd0bmlpdG5pcXdybmlyZWZpbmRpbmlnZnVhZWJmdWJhd3VyAAAAAAAAAAAAAAAAAAAAAFA0/hZRBwhQMgNQMgNQIQSvUDIGNPpJVwARIQSvXABcAEIAADX/Nf41/TX8Nfs0/SELJVg1+jT9ITQlWDX5NP1XcCA1+DT9gYACI1gXNfc0/VeQcEk19iEHWzX1NP1XQChJNfRXAAQ18zT0VwQkNfI0/1cAEUk18SJbNfAhCK808BZQNe80/VcAIDXuNPs0/BZQNP1QNP9QNPpQNPlQNPhQNPcWUQcIUDT2UDT1FlA081A08lA08VA08BZQNO9QNO5QKUsBVwB/ZyhLAVd/f2crSwFX/n9nKksBgf0CITVYZycESwGB/AMhNVhnJwVLAYH7BIFhWGdIJDUBMgY1AkIALTEZIQ4SRLEisgEhCrIQNAiyGCEOshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwY0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEITIxNRJEIjE2EkQhDTE3EkQiNQEiNQIiNQhC/6VJMRhhQAAFSCEPr4lJKWJLAShiUExIiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQYSRDgRTwISRDgSEkSJSRUlTAmvTFCJ`,
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
    at: './index.rsh:449:13:after expr stmt semicolon',
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
