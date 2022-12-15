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
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async (_v2470 ) => {
          const v2470 = stdlib.protect(ctc0, _v2470, null);
        
        const v2471 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2470), null);
        const v2472 = stdlib.fromSome(v2471, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2473 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2470), null);
        const v2474 = stdlib.fromSome(v2473, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2475 = [v2472, v2474];
        
        return v2475;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _saleLocked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async () => {
        
        
        return v2469;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTD = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async () => {
        
        const v2468 = [v2465, v2466, v2467];
        
        return v2468;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totSTBTDRec = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async (_v2477 ) => {
          const v2477 = stdlib.protect(ctc0, _v2477, null);
        
        const v2478 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2477), null);
        const v2479 = stdlib.fromSome(v2478, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2480 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2477), null);
        const v2481 = stdlib.fromSome(v2480, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2482 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v2477), null);
        const v2483 = stdlib.fromSome(v2482, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2484 = [v2479, v2481, v2483];
        
        return v2484;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vBtBal = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async () => {
        
        const v2502 = [v2501, v2410];
        
        return v2502;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCcCm = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async () => {
        
        const v2504 = [v2406, v2503];
        
        return v2504;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vCurrSwap = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async (_v2508 ) => {
          const v2508 = stdlib.protect(ctc0, _v2508, null);
        
        const v2509 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v2508), null);
        const v2511 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2513 = stdlib.fromSome(v2509, v2511);
        const v2514 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v2508), null);
        const v2515 = '-----';
        const v2516 = stdlib.fromSome(v2514, v2515);
        const v2517 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v2508), null);
        const v2518 = stdlib.fromSome(v2517, false);
        const v2519 = v2513[stdlib.checkedBigNumberify('./index.rsh:110:56:array ref', stdlib.UInt_max, '1')];
        const v2520 = v2513[stdlib.checkedBigNumberify('./index.rsh:110:69:array ref', stdlib.UInt_max, '0')];
        const v2521 = v2513[stdlib.checkedBigNumberify('./index.rsh:110:83:array ref', stdlib.UInt_max, '3')];
        const v2522 = v2513[stdlib.checkedBigNumberify('./index.rsh:110:125:array ref', stdlib.UInt_max, '2')];
        const v2523 = {
          cumProceeds: v2522,
          price: v2519,
          qty: v2520,
          shareIssuanceType: v2518,
          sold: v2521,
          status: v2516
          };
        
        return v2523;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vHash = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async () => {
        
        
        return v2490;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async (_v2505 ) => {
          const v2505 = stdlib.protect(ctc0, _v2505, null);
        
        const v2506 = stdlib.protect(map8_ctc, await viewlib.viewMapRef(8, v2505), null);
        const v2507 = stdlib.fromSome(v2506, false);
        
        return v2507;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _vcVersion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async () => {
        
        const v2498 = [v2495, v2497];
        
        return v2498;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wlMember = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = svs;
      return (await ((async (_v2486 ) => {
          const v2486 = stdlib.protect(ctc0, _v2486, null);
        
        const v2487 = stdlib.protect(map9_ctc, await viewlib.viewMapRef(9, v2486), null);
        const v2488 = {
          None: 0,
          Some: 1
          }[v2487[0]];
        const v2489 = stdlib.eq(v2488, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2489;}))(...args));
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
  
  
  const v2387 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2388 = [v2387];
  const v2394 = 'I have deployed';
  const v2395 = stdlib.protect(ctc14, await interact.getParams(v2394), {
    at: './index.rsh:56:103:application',
    fs: ['at ./index.rsh:55:17:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2396 = v2395.authorizedST;
  const v2397 = v2395.bT;
  const v2398 = v2395.companyName;
  const v2399 = v2395.lockSale;
  const v2400 = v2395.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2398, v2399, v2400, v2397, v2396],
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
      
      const {data: [v2407, v2408, v2409, v2410, v2411], secs: v2413, time: v2412, didSend: v42, from: v2406 } = txn1;
      
      const v2414 = v2388[stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0')];
      const v2415 = stdlib.Array_set(v2414, '0', stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'));
      const v2416 = stdlib.Array_set(v2388, stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'), v2415);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2410
        });
      ;
      
      const v2420 = '2.02';
      const v2421 = 'cooperativIdcooperativIdcooperativId';
      const v2422 = [v2420, v2421];
      const v2423 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v2424 = [v2423, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2425 = {
        ctcMan: v2409,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v2422,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v2424,
        saleLocked: v2408,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2426 = v2425;
      const v2427 = v2412;
      const v2429 = v2416;
      
      if (await (async () => {
        
        return true;})()) {
        const v2465 = v2426.totST;
        const v2466 = v2426.totBT;
        const v2467 = v2426.distrNum;
        const v2469 = v2426.saleLocked;
        const v2490 = v2426.docHash;
        const v2492 = v2490[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v2494 = v2426.cv;
        const v2495 = v2494[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v2497 = v2494[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v2499 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v2501 = stdlib.cast("UInt", "UInt256", v2500, false, true);
        const v2503 = v2426.ctcMan;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2410
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
  const {data: [v2407, v2408, v2409, v2410, v2411], secs: v2413, time: v2412, didSend: v42, from: v2406 } = txn1;
  const v2414 = v2388[stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0')];
  const v2415 = stdlib.Array_set(v2414, '0', stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'));
  const v2416 = stdlib.Array_set(v2388, stdlib.checkedBigNumberify('./index.rsh:59:13:dot', stdlib.UInt_max, '0'), v2415);
  ;
  ;
  const v2419 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v2419), {
    at: './index.rsh:61:31:application',
    fs: ['at ./index.rsh:61:31:application call to [unknown function] (defined at: ./index.rsh:61:31:function exp)', 'at ./index.rsh:61:31:application call to "liftedInteract" (defined at: ./index.rsh:61:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v2420 = '2.02';
  const v2421 = 'cooperativIdcooperativIdcooperativId';
  const v2422 = [v2420, v2421];
  const v2423 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v2424 = [v2423, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2425 = {
    ctcMan: v2409,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v2422,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v2424,
    saleLocked: v2408,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2426 = v2425;
  let v2427 = v2412;
  let v2429 = v2416;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const v2465 = v2426.totST;
    const v2466 = v2426.totBT;
    const v2467 = v2426.distrNum;
    const v2469 = v2426.saleLocked;
    const v2490 = v2426.docHash;
    const v2492 = v2490[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
    const v2494 = v2426.cv;
    const v2495 = v2494[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
    const v2497 = v2494[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
    const v2499 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
    const v2501 = stdlib.cast("UInt", "UInt256", v2500, false, true);
    const v2503 = v2426.ctcMan;
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
        args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503],
        evt_cnt: 0,
        funcNum: 3,
        lct: v2427,
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
          
          const {data: [], secs: v11520, time: v11519, didSend: v2041, from: v11518 } = txn4;
          
          ;
          const cv2426 = v2426;
          const cv2427 = v11519;
          const cv2429 = v2429;
          
          await (async () => {
            const v2426 = cv2426;
            const v2427 = cv2427;
            const v2429 = cv2429;
            
            if (await (async () => {
              
              return true;})()) {
              const v2465 = v2426.totST;
              const v2466 = v2426.totBT;
              const v2467 = v2426.distrNum;
              const v2469 = v2426.saleLocked;
              const v2490 = v2426.docHash;
              const v2492 = v2490[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v2494 = v2426.cv;
              const v2495 = v2494[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v2497 = v2494[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v2499 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v2501 = stdlib.cast("UInt", "UInt256", v2500, false, true);
              const v2503 = v2426.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2410
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
      const {data: [], secs: v11520, time: v11519, didSend: v2041, from: v11518 } = txn4;
      ;
      const v11521 = stdlib.addressEq(v2406, v11518);
      stdlib.assert(v11521, {
        at: './index.rsh:445:21:dot',
        fs: ['at ./index.rsh:444:40:application call to [unknown function] (defined at: ./index.rsh:444:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv2426 = v2426;
      const cv2427 = v11519;
      const cv2429 = v2429;
      
      v2426 = cv2426;
      v2427 = cv2427;
      v2429 = cv2429;
      
      txn2 = txn4;
      continue;
      }
    else {
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn3;
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3161 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '0')];
          const v3162 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '1')];
          const v3163 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '2')];
          const v3164 = stdlib.addressEq(v3161, v2406);
          const v3166 = stdlib.addressEq(v3161, v2503);
          const v3167 = v3164 ? true : v3166;
          stdlib.assert(v3167, {
            at: './index.rsh:337:24:application',
            fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3168 = stdlib.gt256(v3163, stdlib.checkedBigNumberify('./index.rsh:338:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3168, {
            at: './index.rsh:338:24:application',
            fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v3162, null);
          const v3170 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3162), null);
          const v3171 = stdlib.fromSome(v3170, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3172 = stdlib.safeAdd256(v3171, v3163);
          await stdlib.mapSet(map0, v3162, v3172);
          const v3173 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3162), null);
          const v3174 = stdlib.fromSome(v3173, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3175 = stdlib.safeAdd256(v3174, v3163);
          await stdlib.mapSet(map2, v3162, v3175);
          const v3177 = stdlib.safeAdd256(v2465, v3163);
          const v3178 = true;
          await txn3.getOutput('aST', 'v3178', ctc8, v3178);
          const v3187 = {
            ...v2426, 'totST': v3177};
          const cv2426 = v3187;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v3796 = v3627[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
          const v3799 = [v2495, v3796];
          const v3800 = {
            ...v2426, 'cv': v3799};
          const v3801 = true;
          await txn3.getOutput('addCoopId', 'v3801', ctc8, v3801);
          const cv2426 = v3800;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v4416 = v4234[stdlib.checkedBigNumberify('./index.rsh:289:13:spread', stdlib.UInt_max, '0')];
          const v4417 = stdlib.addressEq(v3016, v2406);
          const v4419 = stdlib.addressEq(v3016, v2503);
          const v4420 = v4417 ? true : v4419;
          stdlib.assert(v4420, {
            at: './index.rsh:300:24:application',
            fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v4416, null);
          const v4422 = true;
          await txn3.getOutput('addWL', 'v4422', ctc8, v4422);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5037 = v4841[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
          const v5038 = stdlib.addressEq(v3016, v2406);
          const v5040 = stdlib.addressEq(v3016, v2503);
          const v5041 = v5038 ? true : v5040;
          stdlib.assert(v5041, {
            at: './index.rsh:184:24:application',
            fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v5042 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v5037), null);
          const v5043 = '-----';
          const v5044 = stdlib.fromSome(v5042, v5043);
          const v5045 = 'initd';
          const v5046 = stdlib.digest([ctc6], [v5044]);
          const v5048 = stdlib.digest([ctc6], [v5045]);
          const v5049 = stdlib.digestEq(v5046, v5048);
          stdlib.assert(v5049, {
            at: './index.rsh:185:24:application',
            fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
            msg: 'you can onlyapprove an unapproved pending/initiated swap',
            who: 'Creator'
            });
          const v5050 = 'apprv';
          await stdlib.mapSet(map6, v5037, v5050);
          const v5056 = true;
          await txn3.getOutput('approveSwap', 'v5056', ctc8, v5056);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v5671 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3016), null);
          const v5672 = {
            None: 0,
            Some: 1
            }[v5671[0]];
          const v5673 = stdlib.eq(v5672, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v5673, {
            at: './index.rsh:413:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v5677 = stdlib.gt256(v2501, stdlib.checkedBigNumberify('./index.rsh:414:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5677, {
            at: './index.rsh:414:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v5679 = stdlib.gt256(v2465, stdlib.checkedBigNumberify('./index.rsh:415:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5679, {
            at: './index.rsh:415:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v5681 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3016), null);
          const v5682 = stdlib.fromSome(v5681, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5683 = stdlib.ge256(v2465, v5682);
          stdlib.assert(v5683, {
            at: './index.rsh:416:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v5686 = stdlib.gt256(v5682, stdlib.checkedBigNumberify('./index.rsh:417:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v5686, {
            at: './index.rsh:417:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v5689 = v2426.currDistr;
          const v5690 = stdlib.safeMul256(v5682, v5689);
          const v5692 = stdlib.safeDiv256(v5690, v2465);
          const v5693 = stdlib.cast("UInt256", "UInt", v5692, false, true);
          const v5696 = stdlib.le(v5693, v2500);
          stdlib.assert(v5696, {
            at: './index.rsh:419:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v5703 = stdlib.sub(v2500, v5693);
          const v5705 = stdlib.Array_set(v2499, '0', v5703);
          const v5706 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v5705);
          ;
          const v5707 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3016), null);
          const v5708 = stdlib.fromSome(v5707, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5709 = stdlib.safeAdd256(v5708, v5692);
          await stdlib.mapSet(map3, v3016, v5709);
          const v5710 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3016), null);
          const v5711 = stdlib.fromSome(v5710, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5712 = stdlib.safeAdd256(v5711, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map4, v3016, v5712);
          await txn3.getOutput('cBT', 'v5692', ctc1, v5692);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v5706;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6326 = v6055[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
          const v6327 = stdlib.addressEq(v3016, v2406);
          const v6329 = stdlib.addressEq(v3016, v2503);
          const v6330 = v6327 ? true : v6329;
          stdlib.assert(v6330, {
            at: './index.rsh:438:24:application',
            fs: ['at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v6331 = true;
          await txn3.getOutput('cCM', 'v6331', ctc8, v6331);
          const v6338 = {
            ...v2426, 'ctcMan': v6326};
          const cv2426 = v6338;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v6947 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3016), null);
          const v6948 = '-----';
          const v6949 = stdlib.fromSome(v6947, v6948);
          const v6951 = stdlib.digest([ctc6], [v6949]);
          const v6953 = stdlib.digest([ctc6], [v6948]);
          const v6954 = stdlib.digestEq(v6951, v6953);
          const v6959 = 'compl';
          const v6962 = stdlib.digest([ctc6], [v6959]);
          const v6963 = stdlib.digestEq(v6951, v6962);
          const v6964 = v6963 ? false : true;
          const v6965 = v6954 ? false : v6964;
          stdlib.assert(v6965, {
            at: './index.rsh:160:24:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: 'there must be a pending swap',
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v3016, v6948);
          const v6967 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
          const v6969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6971 = stdlib.fromSome(v6967, v6969);
          const v6972 = stdlib.Array_set(v6971, stdlib.checkedBigNumberify('./index.rsh:163:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:163:41:decimal', stdlib.UInt_max, '0'));
          const v6973 = stdlib.Array_set(v6972, stdlib.checkedBigNumberify('./index.rsh:164:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:164:42:decimal', stdlib.UInt_max, '0'));
          const v6974 = stdlib.Array_set(v6973, stdlib.checkedBigNumberify('./index.rsh:165:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:165:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3016, v6974);
          const v6975 = true;
          await txn3.getOutput('cancelSwap', 'v6975', ctc8, v6975);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v7589 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
          const v7591 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7593 = stdlib.fromSome(v7589, v7591);
          const v7594 = v7593[stdlib.checkedBigNumberify('./index.rsh:257:60:array ref', stdlib.UInt_max, '2')];
          const v7595 = stdlib.gt(v7594, stdlib.checkedBigNumberify('./index.rsh:257:66:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v7595, {
            at: './index.rsh:257:24:application',
            fs: ['at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
            msg: 'you must have swap proceeds to claim',
            who: 'Creator'
            });
          const v7604 = stdlib.ge(v2500, v7594);
          stdlib.assert(v7604, {
            at: './index.rsh:259:24:application',
            fs: ['at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v7611 = stdlib.sub(v2500, v7594);
          const v7613 = stdlib.Array_set(v2499, '0', v7611);
          const v7614 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:260:47:application', stdlib.UInt_max, '0'), v7613);
          ;
          const v7615 = stdlib.Array_set(v7593, stdlib.checkedBigNumberify('./index.rsh:261:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:261:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v3016, v7615);
          const v7616 = true;
          await txn3.getOutput('claimSwapProceeds', 'v7616', ctc8, v7616);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v7614;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          undefined /* setApiDetails */;
          const v7944 = v7876[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
          const v7945 = v7876[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '1')];
          const v7946 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7944), null);
          const v7948 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7950 = stdlib.fromSome(v7946, v7948);
          const v7951 = v7950[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
          const v7952 = stdlib.safeMul(v7945, v7951);
          ;
          const v8012 = stdlib.add(v2500, v7952);
          const v8014 = stdlib.Array_set(v2499, '0', v8012);
          const v8015 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8014);
          ;
          const v8232 = stdlib.addressEq(v3016, v7944);
          const v8233 = v8232 ? false : true;
          stdlib.assert(v8233, {
            at: './index.rsh:208:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you cannot complete/buy your own swap',
            who: 'Creator'
            });
          const v8234 = stdlib.gt(v7945, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8234, {
            at: './index.rsh:209:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you must buy at least 1 share token',
            who: 'Creator'
            });
          const v8240 = v7950[stdlib.checkedBigNumberify('./index.rsh:210:69:array ref', stdlib.UInt_max, '0')];
          const v8241 = stdlib.le(v7945, v8240);
          stdlib.assert(v8241, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you cannot buy more than the quantity offered for sale',
            who: 'Creator'
            });
          const v8242 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3016), null);
          const v8243 = {
            None: 0,
            Some: 1
            }[v8242[0]];
          const v8244 = stdlib.eq(v8243, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v8244, {
            at: './index.rsh:211:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you must be a whitelist member to complete or buy swap',
            who: 'Creator'
            });
          const v8245 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7944), null);
          const v8246 = '-----';
          const v8247 = stdlib.fromSome(v8245, v8246);
          const v8248 = 'apprv';
          const v8249 = stdlib.digest([ctc6], [v8247]);
          const v8251 = stdlib.digest([ctc6], [v8248]);
          const v8252 = stdlib.digestEq(v8249, v8251);
          const v8256 = 'partl';
          const v8259 = stdlib.digest([ctc6], [v8256]);
          const v8260 = stdlib.digestEq(v8249, v8259);
          const v8261 = v8252 ? true : v8260;
          stdlib.assert(v8261, {
            at: './index.rsh:212:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'you can only buy an approved or partially completed swap',
            who: 'Creator'
            });
          const v8267 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3016), null);
          const v8268 = stdlib.fromSome(v8267, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8269 = stdlib.cast("UInt", "UInt256", v7945, false, true);
          const v8270 = stdlib.safeAdd256(v8268, v8269);
          await stdlib.mapSet(map0, v3016, v8270);
          const v8271 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3016), null);
          const v8272 = stdlib.fromSome(v8271, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8274 = stdlib.safeAdd256(v8272, v8269);
          await stdlib.mapSet(map2, v3016, v8274);
          const v8277 = v7950[stdlib.checkedBigNumberify('./index.rsh:219:61:array ref', stdlib.UInt_max, '2')];
          const v8278 = stdlib.safeAdd(v7952, v8277);
          const v8279 = stdlib.Array_set(v7950, stdlib.checkedBigNumberify('./index.rsh:219:38:decimal', stdlib.UInt_max, '2'), v8278);
          const v8280 = v7950[stdlib.checkedBigNumberify('./index.rsh:221:45:array ref', stdlib.UInt_max, '3')];
          const v8281 = stdlib.safeAdd(v8280, v7945);
          const v8282 = stdlib.Array_set(v8279, stdlib.checkedBigNumberify('./index.rsh:221:39:decimal', stdlib.UInt_max, '3'), v8281);
          const v8284 = stdlib.safeSub(v8240, v7945);
          const v8285 = stdlib.Array_set(v8282, stdlib.checkedBigNumberify('./index.rsh:223:39:decimal', stdlib.UInt_max, '0'), v8284);
          await stdlib.mapSet(map5, v7944, v8285);
          const v8286 = v8285[stdlib.checkedBigNumberify('./index.rsh:226:25:array ref', stdlib.UInt_max, '0')];
          const v8287 = stdlib.eq(v8286, stdlib.checkedBigNumberify('./index.rsh:226:32:decimal', stdlib.UInt_max, '0'));
          if (v8287) {
            const v8288 = 'compl';
            await stdlib.mapSet(map6, v7944, v8288);
            const v8289 = true;
            await txn3.getOutput('completeSwap', 'v8289', ctc8, v8289);
            const v8297 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7944), null);
            const v8298 = stdlib.fromSome(v8297, false);
            if (v8298) {
              const v8311 = stdlib.safeAdd256(v2465, v8269);
              const v8312 = {
                ...v2426, 'totST': v8311};
              const cv2426 = v8312;
              const cv2427 = v3018;
              const cv2429 = v8015;
              
              v2426 = cv2426;
              v2427 = cv2427;
              v2429 = cv2429;
              
              txn2 = txn3;
              continue;}
            else {
              const v8300 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7944), null);
              const v8301 = stdlib.fromSome(v8300, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8303 = stdlib.safeSub256(v8301, v8269);
              await stdlib.mapSet(map0, v7944, v8303);
              const v8304 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7944), null);
              const v8305 = stdlib.fromSome(v8304, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8307 = stdlib.safeSub256(v8305, v8269);
              await stdlib.mapSet(map2, v7944, v8307);
              const cv2426 = v2426;
              const cv2427 = v3018;
              const cv2429 = v8015;
              
              v2426 = cv2426;
              v2427 = cv2427;
              v2429 = cv2429;
              
              txn2 = txn3;
              continue;}}
          else {
            await stdlib.mapSet(map6, v7944, v8256);
            const v8315 = true;
            await txn3.getOutput('completeSwap', 'v8315', ctc8, v8315);
            const v8323 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7944), null);
            const v8324 = stdlib.fromSome(v8323, false);
            if (v8324) {
              const v8337 = stdlib.safeAdd256(v2465, v8269);
              const v8338 = {
                ...v2426, 'totST': v8337};
              const cv2426 = v8338;
              const cv2427 = v3018;
              const cv2429 = v8015;
              
              v2426 = cv2426;
              v2427 = cv2427;
              v2429 = cv2429;
              
              txn2 = txn3;
              continue;}
            else {
              const v8326 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7944), null);
              const v8327 = stdlib.fromSome(v8326, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8329 = stdlib.safeSub256(v8327, v8269);
              await stdlib.mapSet(map0, v7944, v8329);
              const v8330 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7944), null);
              const v8331 = stdlib.fromSome(v8330, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8333 = stdlib.safeSub256(v8331, v8269);
              await stdlib.mapSet(map2, v7944, v8333);
              const cv2426 = v2426;
              const cv2427 = v3018;
              const cv2429 = v8015;
              
              v2426 = cv2426;
              v2427 = cv2427;
              v2429 = cv2429;
              
              txn2 = txn3;
              continue;}}
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          undefined /* setApiDetails */;
          const v8567 = v8483[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
          const v8568 = stdlib.cast("UInt256", "UInt", v8567, false, true);
          ;
          const v8619 = stdlib.add(v2500, v8568);
          const v8621 = stdlib.Array_set(v2499, '0', v8619);
          const v8622 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8621);
          ;
          const v8949 = stdlib.addressEq(v3016, v2406);
          const v8951 = stdlib.addressEq(v3016, v2503);
          const v8952 = v8949 ? true : v8951;
          stdlib.assert(v8952, {
            at: './index.rsh:386:24:application',
            fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v8954 = stdlib.gt(v8568, stdlib.checkedBigNumberify('./index.rsh:387:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8954, {
            at: './index.rsh:387:24:application',
            fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v8956 = stdlib.safeAdd256(v2466, v8567);
          const v8957 = {
            ...v2426, 'totBT': v8956};
          const v8959 = stdlib.safeAdd256(v2467, stdlib.checkedBigNumberify('./index.rsh:390:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8960 = {
            ...v8957, 'distrNum': v8959};
          const v8961 = {
            ...v8960, 'currDistr': v8567};
          const v8962 = true;
          await txn3.getOutput('dBT', 'v8962', ctc8, v8962);
          const cv2426 = v8961;
          const cv2427 = v3018;
          const cv2429 = v8622;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v9577 = v9090[stdlib.checkedBigNumberify('./index.rsh:268:13:spread', stdlib.UInt_max, '0')];
          const v9580 = stdlib.eq(v2492, stdlib.checkedBigNumberify('./index.rsh:282:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9580, {
            at: './index.rsh:282:24:application',
            fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v9581 = stdlib.addressEq(v3016, v2406);
          const v9583 = stdlib.addressEq(v3016, v2503);
          const v9584 = v9581 ? true : v9583;
          stdlib.assert(v9584, {
            at: './index.rsh:283:24:application',
            fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v9585 = stdlib.safeAdd(v2492, stdlib.checkedBigNumberify('./index.rsh:284:76:decimal', stdlib.UInt_max, '1'));
          const v9587 = [v9577, v9585, v3018];
          const v9588 = {
            ...v2426, 'docHash': v9587};
          const v9589 = true;
          await txn3.getOutput('docHash', 'v9589', ctc8, v9589);
          const cv2426 = v9588;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v10204 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v10205 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v10206 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
          const v10208 = stdlib.addressEq(v3016, v2406);
          const v10210 = stdlib.addressEq(v3016, v2503);
          const v10211 = v10208 ? true : v10210;
          const v10212 = v10206 ? v10211 : false;
          const v10213 = v10206 ? false : true;
          const v10214 = v10212 ? true : v10213;
          stdlib.assert(v10214, {
            at: './index.rsh:127:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'if you are not creator or manager, the swap cannot be share issuance type',
            who: 'Creator'
            });
          const v10215 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3016), null);
          const v10216 = {
            None: 0,
            Some: 1
            }[v10215[0]];
          const v10217 = stdlib.eq(v10216, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v10219 = v10217 ? v10213 : false;
          const v10221 = v10219 ? true : v10206;
          stdlib.assert(v10221, {
            at: './index.rsh:128:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'you must be a whitelist member',
            who: 'Creator'
            });
          const v10222 = stdlib.gt(v10204, stdlib.checkedBigNumberify('./index.rsh:129:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10222, {
            at: './index.rsh:129:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v10223 = stdlib.gt(v10205, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10223, {
            at: './index.rsh:130:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v10224 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3016), null);
          const v10225 = '-----';
          const v10226 = stdlib.fromSome(v10224, v10225);
          const v10228 = stdlib.digest([ctc6], [v10226]);
          const v10230 = stdlib.digest([ctc6], [v10225]);
          const v10231 = stdlib.digestEq(v10228, v10230);
          const v10235 = 'compl';
          const v10238 = stdlib.digest([ctc6], [v10235]);
          const v10239 = stdlib.digestEq(v10228, v10238);
          const v10240 = v10231 ? true : v10239;
          stdlib.assert(v10240, {
            at: './index.rsh:131:24:application',
            fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'there must be no pending swap',
            who: 'Creator'
            });
          const v10246 = v10211 ? v10206 : false;
          if (v10246) {
            const v10247 = 'apprv';
            await stdlib.mapSet(map6, v3016, v10247);
            await stdlib.mapSet(map7, v3016, true);
            const v10248 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
            const v10250 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10252 = stdlib.fromSome(v10248, v10250);
            const v10253 = stdlib.Array_set(v10252, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10204);
            const v10254 = stdlib.Array_set(v10253, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10205);
            const v10255 = stdlib.Array_set(v10254, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map5, v3016, v10255);
            const v10256 = true;
            await txn3.getOutput('initSwap', 'v10256', ctc8, v10256);
            const cv2426 = v2426;
            const cv2427 = v3018;
            const cv2429 = v2429;
            
            v2426 = cv2426;
            v2427 = cv2427;
            v2429 = cv2429;
            
            txn2 = txn3;
            continue;}
          else {
            const v10265 = 'initd';
            await stdlib.mapSet(map6, v3016, v10265);
            await stdlib.mapSet(map7, v3016, v10206);
            const v10266 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
            const v10268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10270 = stdlib.fromSome(v10266, v10268);
            const v10271 = stdlib.Array_set(v10270, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10204);
            const v10272 = stdlib.Array_set(v10271, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10205);
            const v10273 = stdlib.Array_set(v10272, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.mapSet(map5, v3016, v10273);
            const v10274 = true;
            await txn3.getOutput('initSwap', 'v10274', ctc8, v10274);
            const cv2426 = v2426;
            const cv2427 = v3018;
            const cv2429 = v2429;
            
            v2426 = cv2426;
            v2427 = cv2427;
            v2429 = cv2429;
            
            txn2 = txn3;
            continue;}
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          await stdlib.mapSet(map8, v3016, true);
          const v10891 = true;
          await txn3.getOutput('optIn', 'v10891', ctc8, v10891);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v11505 = v10911[stdlib.checkedBigNumberify('./index.rsh:307:13:spread', stdlib.UInt_max, '0')];
          const v11506 = stdlib.addressEq(v3016, v2406);
          const v11508 = stdlib.addressEq(v3016, v2503);
          const v11509 = v11506 ? true : v11508;
          stdlib.assert(v11509, {
            at: './index.rsh:318:24:application',
            fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map9, v11505, undefined /* Nothing */);
          const v11511 = true;
          await txn3.getOutput('remWL', 'v11511', ctc8, v11511);
          const cv2426 = v2426;
          const cv2427 = v3018;
          const cv2429 = v2429;
          
          v2426 = cv2426;
          v2427 = cv2427;
          v2429 = cv2429;
          
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2748 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_324" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v2749 = v2748[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2751 = v2748[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2756 = stdlib.addressEq(v2749, v2406);
  const v2758 = stdlib.addressEq(v2749, v2503);
  const v2759 = v2756 ? true : v2758;
  stdlib.assert(v2759, {
    at: './index.rsh:329:23:application',
    fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:29:function exp)', 'at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_324" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v2760 = stdlib.gt256(v2751, stdlib.checkedBigNumberify('./index.rsh:330:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2760, {
    at: './index.rsh:330:23:application',
    fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:29:function exp)', 'at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:80:33:application call to "runaST0_324" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v2766 = ['aST0_324', v2748];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2766],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:334:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:334:34:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          ;
          const v3162 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '1')];
          const v3163 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 9, v3162, null);
          const v3170 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3162), null);
          const v3171 = stdlib.fromSome(v3170, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3172 = stdlib.safeAdd256(v3171, v3163);
          await stdlib.simMapSet(sim_r, 0, v3162, v3172);
          const v3173 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3162), null);
          const v3174 = stdlib.fromSome(v3173, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3175 = stdlib.safeAdd256(v3174, v3163);
          await stdlib.simMapSet(sim_r, 2, v3162, v3175);
          const v3177 = stdlib.safeAdd256(v2465, v3163);
          const v3178 = true;
          const v3179 = await txn1.getOutput('aST', 'v3178', ctc8, v3178);
          
          const v3187 = {
            ...v2426, 'totST': v3177};
          const v16736 = v3187;
          const v16738 = v2429;
          const v16739 = v3187.totST;
          const v16740 = v3187.totBT;
          const v16741 = v3187.distrNum;
          const v16742 = v3187.saleLocked;
          const v16743 = v3187.docHash;
          const v16744 = v16743[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v16745 = v3187.cv;
          const v16746 = v16745[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v16747 = v16745[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v16748 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16749 = v16748[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v16750 = stdlib.cast("UInt", "UInt256", v16749, false, true);
          const v16751 = v3187.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3161 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '0')];
      const v3162 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '1')];
      const v3163 = v3020[stdlib.checkedBigNumberify('./index.rsh:325:13:spread', stdlib.UInt_max, '2')];
      const v3164 = stdlib.addressEq(v3161, v2406);
      const v3166 = stdlib.addressEq(v3161, v2503);
      const v3167 = v3164 ? true : v3166;
      stdlib.assert(v3167, {
        at: './index.rsh:337:24:application',
        fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3168 = stdlib.gt256(v3163, stdlib.checkedBigNumberify('./index.rsh:338:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3168, {
        at: './index.rsh:338:24:application',
        fs: ['at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map9, v3162, null);
      const v3170 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3162), null);
      const v3171 = stdlib.fromSome(v3170, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3172 = stdlib.safeAdd256(v3171, v3163);
      await stdlib.mapSet(map0, v3162, v3172);
      const v3173 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3162), null);
      const v3174 = stdlib.fromSome(v3173, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3175 = stdlib.safeAdd256(v3174, v3163);
      await stdlib.mapSet(map2, v3162, v3175);
      const v3177 = stdlib.safeAdd256(v2465, v3163);
      const v3178 = true;
      const v3179 = await txn1.getOutput('aST', 'v3178', ctc8, v3178);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v3020, v3179), {
          at: './index.rsh:326:13:application',
          fs: ['at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)', 'at ./index.rsh:344:20:application call to "res" (defined at: ./index.rsh:336:13:function exp)', 'at ./index.rsh:336:13:application call to [unknown function] (defined at: ./index.rsh:336:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3187 = {
        ...v2426, 'totST': v3177};
      const v16736 = v3187;
      const v16738 = v2429;
      const v16739 = v3187.totST;
      const v16740 = v3187.totBT;
      const v16741 = v3187.distrNum;
      const v16742 = v3187.saleLocked;
      const v16743 = v3187.docHash;
      const v16744 = v16743[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v16745 = v3187.cv;
      const v16746 = v16745[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v16747 = v16745[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v16748 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16749 = v16748[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v16750 = stdlib.cast("UInt", "UInt256", v16749, false, true);
      const v16751 = v3187.ctcMan;
      return;
      
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2778 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:364:13:application call to [unknown function] (defined at: ./index.rsh:364:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddCoopId0_324" (defined at: ./index.rsh:361:14:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v2785 = ['addCoopId0_324', v2778];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2785],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:367:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:367:27:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          ;
          const v3796 = v3627[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
          const v3799 = [v2495, v3796];
          const v3800 = {
            ...v2426, 'cv': v3799};
          const v3801 = true;
          const v3802 = await txn1.getOutput('addCoopId', 'v3801', ctc8, v3801);
          
          const v17268 = v3800;
          const v17270 = v2429;
          const v17271 = v3800.totST;
          const v17272 = v3800.totBT;
          const v17273 = v3800.distrNum;
          const v17274 = v3800.saleLocked;
          const v17275 = v3800.docHash;
          const v17276 = v17275[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17277 = v3800.cv;
          const v17278 = v17277[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17279 = v17277[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17280 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17281 = v17280[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17282 = stdlib.cast("UInt", "UInt256", v17281, false, true);
          const v17283 = v3800.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3796 = v3627[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
      const v3799 = [v2495, v3796];
      const v3800 = {
        ...v2426, 'cv': v3799};
      const v3801 = true;
      const v3802 = await txn1.getOutput('addCoopId', 'v3801', ctc8, v3801);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v3627, v3802), {
          at: './index.rsh:362:13:application',
          fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:371:20:application call to "res" (defined at: ./index.rsh:369:13:function exp)', 'at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v17268 = v3800;
      const v17270 = v2429;
      const v17271 = v3800.totST;
      const v17272 = v3800.totBT;
      const v17273 = v3800.distrNum;
      const v17274 = v3800.saleLocked;
      const v17275 = v3800.docHash;
      const v17276 = v17275[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17277 = v3800.cv;
      const v17278 = v17277[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17279 = v17277[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17280 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17281 = v17280[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17282 = stdlib.cast("UInt", "UInt256", v17281, false, true);
      const v17283 = v3800.ctcMan;
      return;
      
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2716 = ctc.selfAddress();
  const v2718 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddWL0_324" (defined at: ./index.rsh:289:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v2722 = stdlib.addressEq(v2716, v2406);
  const v2724 = stdlib.addressEq(v2716, v2503);
  const v2725 = v2722 ? true : v2724;
  stdlib.assert(v2725, {
    at: './index.rsh:293:23:application',
    fs: ['at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)', 'at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:13:function exp)', 'at ./index.rsh:80:33:application call to "runaddWL0_324" (defined at: ./index.rsh:289:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v2729 = ['addWL0_324', v2718];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2729],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:297:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:297:26:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          ;
          const v4416 = v4234[stdlib.checkedBigNumberify('./index.rsh:289:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v4416, null);
          const v4422 = true;
          const v4423 = await txn1.getOutput('addWL', 'v4422', ctc8, v4422);
          
          const v17800 = v2426;
          const v17802 = v2429;
          const v17803 = v2426.totST;
          const v17804 = v2426.totBT;
          const v17805 = v2426.distrNum;
          const v17806 = v2426.saleLocked;
          const v17807 = v2426.docHash;
          const v17808 = v17807[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v17809 = v2426.cv;
          const v17810 = v17809[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v17811 = v17809[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v17812 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17813 = v17812[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v17814 = stdlib.cast("UInt", "UInt256", v17813, false, true);
          const v17815 = v2426.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4416 = v4234[stdlib.checkedBigNumberify('./index.rsh:289:13:spread', stdlib.UInt_max, '0')];
      const v4417 = stdlib.addressEq(v3016, v2406);
      const v4419 = stdlib.addressEq(v3016, v2503);
      const v4420 = v4417 ? true : v4419;
      stdlib.assert(v4420, {
        at: './index.rsh:300:24:application',
        fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map9, v4416, null);
      const v4422 = true;
      const v4423 = await txn1.getOutput('addWL', 'v4422', ctc8, v4422);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v4234, v4423), {
          at: './index.rsh:290:13:application',
          fs: ['at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)', 'at ./index.rsh:303:20:application call to "res" (defined at: ./index.rsh:299:13:function exp)', 'at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v17800 = v2426;
      const v17802 = v2429;
      const v17803 = v2426.totST;
      const v17804 = v2426.totBT;
      const v17805 = v2426.distrNum;
      const v17806 = v2426.saleLocked;
      const v17807 = v2426.docHash;
      const v17808 = v17807[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v17809 = v2426.cv;
      const v17810 = v17809[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v17811 = v17809[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v17812 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17813 = v17812[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v17814 = stdlib.cast("UInt", "UInt256", v17813, false, true);
      const v17815 = v2426.ctcMan;
      return;
      
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2607 = ctc.selfAddress();
  const v2609 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'approveSwap'
    });
  const v2610 = v2609[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2613 = stdlib.addressEq(v2607, v2406);
  const v2615 = stdlib.addressEq(v2607, v2503);
  const v2616 = v2613 ? true : v2615;
  stdlib.assert(v2616, {
    at: './index.rsh:176:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:23:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'approveSwap'
    });
  const v2617 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2610), null);
  const v2618 = '-----';
  const v2619 = stdlib.fromSome(v2617, v2618);
  const v2620 = 'initd';
  const v2621 = stdlib.digest([ctc6], [v2619]);
  const v2623 = stdlib.digest([ctc6], [v2620]);
  const v2624 = stdlib.digestEq(v2621, v2623);
  stdlib.assert(v2624, {
    at: './index.rsh:177:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:23:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:80:33:application call to "runapproveSwap0_324" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you can onlyapprove an unapproved pending/initiated swap',
    who: 'approveSwap'
    });
  const v2628 = ['approveSwap0_324', v2609];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2628],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:181:26:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approveSwap"
            });
          ;
          ;
          const v5037 = v4841[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v5037), null);
          const v5050 = 'apprv';
          await stdlib.simMapSet(sim_r, 6, v5037, v5050);
          const v5056 = true;
          const v5057 = await txn1.getOutput('approveSwap', 'v5056', ctc8, v5056);
          
          const v18332 = v2426;
          const v18334 = v2429;
          const v18335 = v2426.totST;
          const v18336 = v2426.totBT;
          const v18337 = v2426.distrNum;
          const v18338 = v2426.saleLocked;
          const v18339 = v2426.docHash;
          const v18340 = v18339[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18341 = v2426.cv;
          const v18342 = v18341[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18343 = v18341[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18344 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18345 = v18344[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18346 = stdlib.cast("UInt", "UInt256", v18345, false, true);
          const v18347 = v2426.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5037 = v4841[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
      const v5038 = stdlib.addressEq(v3016, v2406);
      const v5040 = stdlib.addressEq(v3016, v2503);
      const v5041 = v5038 ? true : v5040;
      stdlib.assert(v5041, {
        at: './index.rsh:184:24:application',
        fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'approveSwap'
        });
      const v5042 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v5037), null);
      const v5043 = '-----';
      const v5044 = stdlib.fromSome(v5042, v5043);
      const v5045 = 'initd';
      const v5046 = stdlib.digest([ctc6], [v5044]);
      const v5048 = stdlib.digest([ctc6], [v5045]);
      const v5049 = stdlib.digestEq(v5046, v5048);
      stdlib.assert(v5049, {
        at: './index.rsh:185:24:application',
        fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
        msg: 'you can onlyapprove an unapproved pending/initiated swap',
        who: 'approveSwap'
        });
      const v5050 = 'apprv';
      await stdlib.mapSet(map6, v5037, v5050);
      const v5056 = true;
      const v5057 = await txn1.getOutput('approveSwap', 'v5056', ctc8, v5056);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v4841, v5057), {
          at: './index.rsh:173:13:application',
          fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:189:20:application call to "res" (defined at: ./index.rsh:183:13:function exp)', 'at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
          msg: 'out',
          who: 'approveSwap'
          });
        }
      else {
        }
      
      const v18332 = v2426;
      const v18334 = v2429;
      const v18335 = v2426.totST;
      const v18336 = v2426.totBT;
      const v18337 = v2426.distrNum;
      const v18338 = v2426.saleLocked;
      const v18339 = v2426.docHash;
      const v18340 = v18339[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18341 = v2426.cv;
      const v18342 = v18341[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18343 = v18341[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18344 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18345 = v18344[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18346 = stdlib.cast("UInt", "UInt256", v18345, false, true);
      const v18347 = v2426.ctcMan;
      return;
      
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2804 = ctc.selfAddress();
  const v2806 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v2808 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2804), null);
  const v2809 = {
    None: 0,
    Some: 1
    }[v2808[0]];
  const v2810 = stdlib.eq(v2809, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2810, {
    at: './index.rsh:401:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v2814 = stdlib.gt256(v2501, stdlib.checkedBigNumberify('./index.rsh:402:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2814, {
    at: './index.rsh:402:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v2816 = stdlib.gt256(v2465, stdlib.checkedBigNumberify('./index.rsh:403:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2816, {
    at: './index.rsh:403:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v2818 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2804), null);
  const v2819 = stdlib.fromSome(v2818, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2820 = stdlib.ge256(v2465, v2819);
  stdlib.assert(v2820, {
    at: './index.rsh:404:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v2823 = stdlib.gt256(v2819, stdlib.checkedBigNumberify('./index.rsh:405:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2823, {
    at: './index.rsh:405:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v2826 = v2426.currDistr;
  const v2827 = stdlib.safeMul256(v2819, v2826);
  const v2829 = stdlib.safeDiv256(v2827, v2465);
  const v2830 = stdlib.cast("UInt256", "UInt", v2829, false, true);
  const v2833 = stdlib.le(v2830, v2500);
  stdlib.assert(v2833, {
    at: './index.rsh:407:23:application',
    fs: ['at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:17:function exp)', 'at ./index.rsh:400:13:application call to [unknown function] (defined at: ./index.rsh:400:13:function exp)', 'at ./index.rsh:80:33:application call to "runcBT0_324" (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v2836 = ['cBT0_324', v2806];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2836],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:410:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:410:25:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          ;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3016), null);
          const v5681 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3016), null);
          const v5682 = stdlib.fromSome(v5681, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5689 = v2426.currDistr;
          const v5690 = stdlib.safeMul256(v5682, v5689);
          const v5692 = stdlib.safeDiv256(v5690, v2465);
          const v5693 = stdlib.cast("UInt256", "UInt", v5692, false, true);
          const v5703 = stdlib.sub(v2500, v5693);
          const v5705 = stdlib.Array_set(v2499, '0', v5703);
          const v5706 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v5705);
          sim_r.txns.push({
            kind: 'from',
            to: v3016,
            tok: v2410
            });
          const v5707 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3016), null);
          const v5708 = stdlib.fromSome(v5707, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5709 = stdlib.safeAdd256(v5708, v5692);
          await stdlib.simMapSet(sim_r, 3, v3016, v5709);
          const v5710 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v3016), null);
          const v5711 = stdlib.fromSome(v5710, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5712 = stdlib.safeAdd256(v5711, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 4, v3016, v5712);
          const v5713 = await txn1.getOutput('cBT', 'v5692', ctc1, v5692);
          
          const v18864 = v2426;
          const v18866 = v5706;
          const v18867 = v2426.totST;
          const v18868 = v2426.totBT;
          const v18869 = v2426.distrNum;
          const v18870 = v2426.saleLocked;
          const v18871 = v2426.docHash;
          const v18872 = v18871[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v18873 = v2426.cv;
          const v18874 = v18873[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v18875 = v18873[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v18876 = v5706[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18877 = v18876[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v18878 = stdlib.cast("UInt", "UInt256", v18877, false, true);
          const v18879 = v2426.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5671 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3016), null);
      const v5672 = {
        None: 0,
        Some: 1
        }[v5671[0]];
      const v5673 = stdlib.eq(v5672, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5673, {
        at: './index.rsh:413:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v5677 = stdlib.gt256(v2501, stdlib.checkedBigNumberify('./index.rsh:414:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5677, {
        at: './index.rsh:414:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v5679 = stdlib.gt256(v2465, stdlib.checkedBigNumberify('./index.rsh:415:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5679, {
        at: './index.rsh:415:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v5681 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3016), null);
      const v5682 = stdlib.fromSome(v5681, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5683 = stdlib.ge256(v2465, v5682);
      stdlib.assert(v5683, {
        at: './index.rsh:416:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v5686 = stdlib.gt256(v5682, stdlib.checkedBigNumberify('./index.rsh:417:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5686, {
        at: './index.rsh:417:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v5689 = v2426.currDistr;
      const v5690 = stdlib.safeMul256(v5682, v5689);
      const v5692 = stdlib.safeDiv256(v5690, v2465);
      const v5693 = stdlib.cast("UInt256", "UInt", v5692, false, true);
      const v5696 = stdlib.le(v5693, v2500);
      stdlib.assert(v5696, {
        at: './index.rsh:419:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v5703 = stdlib.sub(v2500, v5693);
      const v5705 = stdlib.Array_set(v2499, '0', v5703);
      const v5706 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v5705);
      ;
      const v5707 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3016), null);
      const v5708 = stdlib.fromSome(v5707, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5709 = stdlib.safeAdd256(v5708, v5692);
      await stdlib.mapSet(map3, v3016, v5709);
      const v5710 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3016), null);
      const v5711 = stdlib.fromSome(v5710, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5712 = stdlib.safeAdd256(v5711, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map4, v3016, v5712);
      const v5713 = await txn1.getOutput('cBT', 'v5692', ctc1, v5692);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v5448, v5713), {
          at: './index.rsh:398:13:application',
          fs: ['at ./index.rsh:398:13:application call to [unknown function] (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:423:20:application call to "res" (defined at: ./index.rsh:412:13:function exp)', 'at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v18864 = v2426;
      const v18866 = v5706;
      const v18867 = v2426.totST;
      const v18868 = v2426.totBT;
      const v18869 = v2426.distrNum;
      const v18870 = v2426.saleLocked;
      const v18871 = v2426.docHash;
      const v18872 = v18871[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v18873 = v2426.cv;
      const v18874 = v18873[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v18875 = v18873[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v18876 = v5706[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18877 = v18876[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v18878 = stdlib.cast("UInt", "UInt256", v18877, false, true);
      const v18879 = v2426.ctcMan;
      return;
      
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2838 = ctc.selfAddress();
  const v2840 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:80:33:application call to "runcCM0_324" (defined at: ./index.rsh:427:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v2844 = stdlib.addressEq(v2838, v2406);
  const v2846 = stdlib.addressEq(v2838, v2503);
  const v2847 = v2844 ? true : v2846;
  stdlib.assert(v2847, {
    at: './index.rsh:431:23:application',
    fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:21:function exp)', 'at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:80:33:application call to "runcCM0_324" (defined at: ./index.rsh:427:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v2851 = ['cCM0_324', v2840];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2851],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:435:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:435:26:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          ;
          const v6326 = v6055[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
          const v6331 = true;
          const v6332 = await txn1.getOutput('cCM', 'v6331', ctc8, v6331);
          
          const v6338 = {
            ...v2426, 'ctcMan': v6326};
          const v19396 = v6338;
          const v19398 = v2429;
          const v19399 = v6338.totST;
          const v19400 = v6338.totBT;
          const v19401 = v6338.distrNum;
          const v19402 = v6338.saleLocked;
          const v19403 = v6338.docHash;
          const v19404 = v19403[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19405 = v6338.cv;
          const v19406 = v19405[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19407 = v19405[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19408 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19409 = v19408[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19410 = stdlib.cast("UInt", "UInt256", v19409, false, true);
          const v19411 = v6338.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6326 = v6055[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
      const v6327 = stdlib.addressEq(v3016, v2406);
      const v6329 = stdlib.addressEq(v3016, v2503);
      const v6330 = v6327 ? true : v6329;
      stdlib.assert(v6330, {
        at: './index.rsh:438:24:application',
        fs: ['at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v6331 = true;
      const v6332 = await txn1.getOutput('cCM', 'v6331', ctc8, v6331);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v6055, v6332), {
          at: './index.rsh:428:13:application',
          fs: ['at ./index.rsh:428:13:application call to [unknown function] (defined at: ./index.rsh:428:13:function exp)', 'at ./index.rsh:440:20:application call to "res" (defined at: ./index.rsh:437:13:function exp)', 'at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6338 = {
        ...v2426, 'ctcMan': v6326};
      const v19396 = v6338;
      const v19398 = v2429;
      const v19399 = v6338.totST;
      const v19400 = v6338.totBT;
      const v19401 = v6338.distrNum;
      const v19402 = v6338.saleLocked;
      const v19403 = v6338.docHash;
      const v19404 = v19403[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19405 = v6338.cv;
      const v19406 = v19405[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19407 = v19405[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19408 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19409 = v19408[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19410 = stdlib.cast("UInt", "UInt256", v19409, false, true);
      const v19411 = v6338.ctcMan;
      return;
      
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2580 = ctc.selfAddress();
  const v2582 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'cancelSwap'
    });
  const v2584 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2580), null);
  const v2585 = '-----';
  const v2586 = stdlib.fromSome(v2584, v2585);
  const v2588 = stdlib.digest([ctc6], [v2586]);
  const v2590 = stdlib.digest([ctc6], [v2585]);
  const v2591 = stdlib.digestEq(v2588, v2590);
  const v2596 = 'compl';
  const v2599 = stdlib.digest([ctc6], [v2596]);
  const v2600 = stdlib.digestEq(v2588, v2599);
  const v2601 = v2600 ? false : true;
  const v2602 = v2591 ? false : v2601;
  stdlib.assert(v2602, {
    at: './index.rsh:153:23:application',
    fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:17:function exp)', 'at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:80:33:application call to "runcancelSwap0_324" (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'there must be a pending swap',
    who: 'cancelSwap'
    });
  const v2605 = ['cancelSwap0_324', v2582];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2605],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:157:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:157:25:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cancelSwap"
            });
          ;
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v3016), null);
          const v6948 = '-----';
          await stdlib.simMapSet(sim_r, 6, v3016, v6948);
          const v6967 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3016), null);
          const v6969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6971 = stdlib.fromSome(v6967, v6969);
          const v6972 = stdlib.Array_set(v6971, stdlib.checkedBigNumberify('./index.rsh:163:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:163:41:decimal', stdlib.UInt_max, '0'));
          const v6973 = stdlib.Array_set(v6972, stdlib.checkedBigNumberify('./index.rsh:164:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:164:42:decimal', stdlib.UInt_max, '0'));
          const v6974 = stdlib.Array_set(v6973, stdlib.checkedBigNumberify('./index.rsh:165:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:165:42:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3016, v6974);
          const v6975 = true;
          const v6976 = await txn1.getOutput('cancelSwap', 'v6975', ctc8, v6975);
          
          const v19928 = v2426;
          const v19930 = v2429;
          const v19931 = v2426.totST;
          const v19932 = v2426.totBT;
          const v19933 = v2426.distrNum;
          const v19934 = v2426.saleLocked;
          const v19935 = v2426.docHash;
          const v19936 = v19935[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v19937 = v2426.cv;
          const v19938 = v19937[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v19939 = v19937[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v19940 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19941 = v19940[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v19942 = stdlib.cast("UInt", "UInt256", v19941, false, true);
          const v19943 = v2426.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6947 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3016), null);
      const v6948 = '-----';
      const v6949 = stdlib.fromSome(v6947, v6948);
      const v6951 = stdlib.digest([ctc6], [v6949]);
      const v6953 = stdlib.digest([ctc6], [v6948]);
      const v6954 = stdlib.digestEq(v6951, v6953);
      const v6959 = 'compl';
      const v6962 = stdlib.digest([ctc6], [v6959]);
      const v6963 = stdlib.digestEq(v6951, v6962);
      const v6964 = v6963 ? false : true;
      const v6965 = v6954 ? false : v6964;
      stdlib.assert(v6965, {
        at: './index.rsh:160:24:application',
        fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
        msg: 'there must be a pending swap',
        who: 'cancelSwap'
        });
      await stdlib.mapSet(map6, v3016, v6948);
      const v6967 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
      const v6969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6971 = stdlib.fromSome(v6967, v6969);
      const v6972 = stdlib.Array_set(v6971, stdlib.checkedBigNumberify('./index.rsh:163:38:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:163:41:decimal', stdlib.UInt_max, '0'));
      const v6973 = stdlib.Array_set(v6972, stdlib.checkedBigNumberify('./index.rsh:164:39:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./index.rsh:164:42:decimal', stdlib.UInt_max, '0'));
      const v6974 = stdlib.Array_set(v6973, stdlib.checkedBigNumberify('./index.rsh:165:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:165:42:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3016, v6974);
      const v6975 = true;
      const v6976 = await txn1.getOutput('cancelSwap', 'v6975', ctc8, v6975);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v6662, v6976), {
          at: './index.rsh:150:13:application',
          fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:168:20:application call to "res" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
          msg: 'out',
          who: 'cancelSwap'
          });
        }
      else {
        }
      
      const v19928 = v2426;
      const v19930 = v2429;
      const v19931 = v2426.totST;
      const v19932 = v2426.totBT;
      const v19933 = v2426.distrNum;
      const v19934 = v2426.saleLocked;
      const v19935 = v2426.docHash;
      const v19936 = v19935[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v19937 = v2426.cv;
      const v19938 = v19937[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v19939 = v19937[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v19940 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19941 = v19940[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v19942 = stdlib.cast("UInt", "UInt256", v19941, false, true);
      const v19943 = v2426.ctcMan;
      return;
      
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2674 = ctc.selfAddress();
  const v2676 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'claimSwapProceeds'
    });
  const v2678 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2674), null);
  const v2680 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2682 = stdlib.fromSome(v2678, v2680);
  const v2683 = v2682[stdlib.checkedBigNumberify('./index.rsh:249:59:array ref', stdlib.UInt_max, '2')];
  const v2684 = stdlib.gt(v2683, stdlib.checkedBigNumberify('./index.rsh:249:65:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2684, {
    at: './index.rsh:249:23:application',
    fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:17:function exp)', 'at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must have swap proceeds to claim',
    who: 'claimSwapProceeds'
    });
  const v2693 = stdlib.ge(v2500, v2683);
  stdlib.assert(v2693, {
    at: './index.rsh:250:23:application',
    fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:17:function exp)', 'at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)', 'at ./index.rsh:80:33:application call to "runclaimSwapProceeds0_324" (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimSwapProceeds'
    });
  const v2696 = ['claimSwapProceeds0_324', v2676];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2696],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:254:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:254:25:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimSwapProceeds"
            });
          ;
          ;
          const v7589 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3016), null);
          const v7591 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7593 = stdlib.fromSome(v7589, v7591);
          const v7594 = v7593[stdlib.checkedBigNumberify('./index.rsh:257:60:array ref', stdlib.UInt_max, '2')];
          const v7611 = stdlib.sub(v2500, v7594);
          const v7613 = stdlib.Array_set(v2499, '0', v7611);
          const v7614 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:260:47:application', stdlib.UInt_max, '0'), v7613);
          sim_r.txns.push({
            kind: 'from',
            to: v3016,
            tok: v2410
            });
          const v7615 = stdlib.Array_set(v7593, stdlib.checkedBigNumberify('./index.rsh:261:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:261:41:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v3016, v7615);
          const v7616 = true;
          const v7617 = await txn1.getOutput('claimSwapProceeds', 'v7616', ctc8, v7616);
          
          const v20460 = v2426;
          const v20462 = v7614;
          const v20463 = v2426.totST;
          const v20464 = v2426.totBT;
          const v20465 = v2426.distrNum;
          const v20466 = v2426.saleLocked;
          const v20467 = v2426.docHash;
          const v20468 = v20467[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v20469 = v2426.cv;
          const v20470 = v20469[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v20471 = v20469[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v20472 = v7614[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20473 = v20472[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v20474 = stdlib.cast("UInt", "UInt256", v20473, false, true);
          const v20475 = v2426.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v7589 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
      const v7591 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7593 = stdlib.fromSome(v7589, v7591);
      const v7594 = v7593[stdlib.checkedBigNumberify('./index.rsh:257:60:array ref', stdlib.UInt_max, '2')];
      const v7595 = stdlib.gt(v7594, stdlib.checkedBigNumberify('./index.rsh:257:66:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7595, {
        at: './index.rsh:257:24:application',
        fs: ['at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
        msg: 'you must have swap proceeds to claim',
        who: 'claimSwapProceeds'
        });
      const v7604 = stdlib.ge(v2500, v7594);
      stdlib.assert(v7604, {
        at: './index.rsh:259:24:application',
        fs: ['at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimSwapProceeds'
        });
      const v7611 = stdlib.sub(v2500, v7594);
      const v7613 = stdlib.Array_set(v2499, '0', v7611);
      const v7614 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:260:47:application', stdlib.UInt_max, '0'), v7613);
      ;
      const v7615 = stdlib.Array_set(v7593, stdlib.checkedBigNumberify('./index.rsh:261:38:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:261:41:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v3016, v7615);
      const v7616 = true;
      const v7617 = await txn1.getOutput('claimSwapProceeds', 'v7616', ctc8, v7616);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v7269, v7617), {
          at: './index.rsh:246:13:application',
          fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:264:20:application call to "res" (defined at: ./index.rsh:256:13:function exp)', 'at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
          msg: 'out',
          who: 'claimSwapProceeds'
          });
        }
      else {
        }
      
      const v20460 = v2426;
      const v20462 = v7614;
      const v20463 = v2426.totST;
      const v20464 = v2426.totBT;
      const v20465 = v2426.distrNum;
      const v20466 = v2426.saleLocked;
      const v20467 = v2426.docHash;
      const v20468 = v20467[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v20469 = v2426.cv;
      const v20470 = v20469[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v20471 = v20469[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v20472 = v7614[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20473 = v20472[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v20474 = stdlib.cast("UInt", "UInt256", v20473, false, true);
      const v20475 = v2426.ctcMan;
      return;
      
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2630 = ctc.selfAddress();
  const v2632 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'completeSwap'
    });
  const v2633 = v2632[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2634 = v2632[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2638 = stdlib.addressEq(v2630, v2633);
  const v2639 = v2638 ? false : true;
  stdlib.assert(v2639, {
    at: './index.rsh:197:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you cannot complete/buy your own swap',
    who: 'completeSwap'
    });
  const v2640 = stdlib.gt(v2634, stdlib.checkedBigNumberify('./index.rsh:198:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2640, {
    at: './index.rsh:198:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must buy at least 1 share token',
    who: 'completeSwap'
    });
  const v2641 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2633), null);
  const v2643 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2645 = stdlib.fromSome(v2641, v2643);
  const v2646 = v2645[stdlib.checkedBigNumberify('./index.rsh:199:68:array ref', stdlib.UInt_max, '0')];
  const v2647 = stdlib.le(v2634, v2646);
  stdlib.assert(v2647, {
    at: './index.rsh:199:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you cannot buy more than the quantity offered for sale',
    who: 'completeSwap'
    });
  const v2648 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2630), null);
  const v2649 = {
    None: 0,
    Some: 1
    }[v2648[0]];
  const v2650 = stdlib.eq(v2649, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2650, {
    at: './index.rsh:200:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member to complete or buy swap',
    who: 'completeSwap'
    });
  const v2651 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2633), null);
  const v2652 = '-----';
  const v2653 = stdlib.fromSome(v2651, v2652);
  const v2654 = 'apprv';
  const v2655 = stdlib.digest([ctc6], [v2653]);
  const v2657 = stdlib.digest([ctc6], [v2654]);
  const v2658 = stdlib.digestEq(v2655, v2657);
  const v2662 = 'partl';
  const v2665 = stdlib.digest([ctc6], [v2662]);
  const v2666 = stdlib.digestEq(v2655, v2665);
  const v2667 = v2658 ? true : v2666;
  stdlib.assert(v2667, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:28:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:80:33:application call to "runcompleteSwap0_324" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you can only buy an approved or partially completed swap',
    who: 'completeSwap'
    });
  const v2672 = ['completeSwap0_324', v2632];
  
  const v2948 = v2645[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
  const v2949 = stdlib.safeMul(v2634, v2948);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2672],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:32:decimal', stdlib.UInt_max, '0'), [[v2949, v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "completeSwap"
            });
          const v7944 = v7876[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
          const v7945 = v7876[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '1')];
          const v7946 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v7944), null);
          const v7948 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7950 = stdlib.fromSome(v7946, v7948);
          const v7951 = v7950[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
          const v7952 = stdlib.safeMul(v7945, v7951);
          ;
          const v8012 = stdlib.add(v2500, v7952);
          const v8014 = stdlib.Array_set(v2499, '0', v8012);
          const v8015 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8014);
          sim_r.txns.push({
            amt: v7952,
            kind: 'to',
            tok: v2410
            });
          const v8240 = v7950[stdlib.checkedBigNumberify('./index.rsh:210:69:array ref', stdlib.UInt_max, '0')];
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3016), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v7944), null);
          const v8256 = 'partl';
          const v8267 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3016), null);
          const v8268 = stdlib.fromSome(v8267, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8269 = stdlib.cast("UInt", "UInt256", v7945, false, true);
          const v8270 = stdlib.safeAdd256(v8268, v8269);
          await stdlib.simMapSet(sim_r, 0, v3016, v8270);
          const v8271 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3016), null);
          const v8272 = stdlib.fromSome(v8271, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8274 = stdlib.safeAdd256(v8272, v8269);
          await stdlib.simMapSet(sim_r, 2, v3016, v8274);
          const v8277 = v7950[stdlib.checkedBigNumberify('./index.rsh:219:61:array ref', stdlib.UInt_max, '2')];
          const v8278 = stdlib.safeAdd(v7952, v8277);
          const v8279 = stdlib.Array_set(v7950, stdlib.checkedBigNumberify('./index.rsh:219:38:decimal', stdlib.UInt_max, '2'), v8278);
          const v8280 = v7950[stdlib.checkedBigNumberify('./index.rsh:221:45:array ref', stdlib.UInt_max, '3')];
          const v8281 = stdlib.safeAdd(v8280, v7945);
          const v8282 = stdlib.Array_set(v8279, stdlib.checkedBigNumberify('./index.rsh:221:39:decimal', stdlib.UInt_max, '3'), v8281);
          const v8284 = stdlib.safeSub(v8240, v7945);
          const v8285 = stdlib.Array_set(v8282, stdlib.checkedBigNumberify('./index.rsh:223:39:decimal', stdlib.UInt_max, '0'), v8284);
          await stdlib.simMapSet(sim_r, 5, v7944, v8285);
          const v8286 = v8285[stdlib.checkedBigNumberify('./index.rsh:226:25:array ref', stdlib.UInt_max, '0')];
          const v8287 = stdlib.eq(v8286, stdlib.checkedBigNumberify('./index.rsh:226:32:decimal', stdlib.UInt_max, '0'));
          if (v8287) {
            const v8288 = 'compl';
            await stdlib.simMapSet(sim_r, 6, v7944, v8288);
            const v8289 = true;
            const v8290 = await txn1.getOutput('completeSwap', 'v8289', ctc8, v8289);
            
            const v8297 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7944), null);
            const v8298 = stdlib.fromSome(v8297, false);
            if (v8298) {
              const v8311 = stdlib.safeAdd256(v2465, v8269);
              const v8312 = {
                ...v2426, 'totST': v8311};
              const v20992 = v8312;
              const v20994 = v8015;
              const v20995 = v8312.totST;
              const v20996 = v8312.totBT;
              const v20997 = v8312.distrNum;
              const v20998 = v8312.saleLocked;
              const v20999 = v8312.docHash;
              const v21000 = v20999[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21001 = v8312.cv;
              const v21002 = v21001[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21003 = v21001[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21004 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21005 = v21004[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21006 = stdlib.cast("UInt", "UInt256", v21005, false, true);
              const v21007 = v8312.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              const v8300 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7944), null);
              const v8301 = stdlib.fromSome(v8300, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8303 = stdlib.safeSub256(v8301, v8269);
              await stdlib.simMapSet(sim_r, 0, v7944, v8303);
              const v8304 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v7944), null);
              const v8305 = stdlib.fromSome(v8304, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8307 = stdlib.safeSub256(v8305, v8269);
              await stdlib.simMapSet(sim_r, 2, v7944, v8307);
              const v21020 = v2426;
              const v21022 = v8015;
              const v21023 = v2426.totST;
              const v21024 = v2426.totBT;
              const v21025 = v2426.distrNum;
              const v21026 = v2426.saleLocked;
              const v21027 = v2426.docHash;
              const v21028 = v21027[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21029 = v2426.cv;
              const v21030 = v21029[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21031 = v21029[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21032 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21033 = v21032[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21034 = stdlib.cast("UInt", "UInt256", v21033, false, true);
              const v21035 = v2426.ctcMan;
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 6, v7944, v8256);
            const v8315 = true;
            const v8316 = await txn1.getOutput('completeSwap', 'v8315', ctc8, v8315);
            
            const v8323 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v7944), null);
            const v8324 = stdlib.fromSome(v8323, false);
            if (v8324) {
              const v8337 = stdlib.safeAdd256(v2465, v8269);
              const v8338 = {
                ...v2426, 'totST': v8337};
              const v21048 = v8338;
              const v21050 = v8015;
              const v21051 = v8338.totST;
              const v21052 = v8338.totBT;
              const v21053 = v8338.distrNum;
              const v21054 = v8338.saleLocked;
              const v21055 = v8338.docHash;
              const v21056 = v21055[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21057 = v8338.cv;
              const v21058 = v21057[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21059 = v21057[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21060 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21061 = v21060[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21062 = stdlib.cast("UInt", "UInt256", v21061, false, true);
              const v21063 = v8338.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              const v8326 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7944), null);
              const v8327 = stdlib.fromSome(v8326, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8329 = stdlib.safeSub256(v8327, v8269);
              await stdlib.simMapSet(sim_r, 0, v7944, v8329);
              const v8330 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v7944), null);
              const v8331 = stdlib.fromSome(v8330, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v8333 = stdlib.safeSub256(v8331, v8269);
              await stdlib.simMapSet(sim_r, 2, v7944, v8333);
              const v21076 = v2426;
              const v21078 = v8015;
              const v21079 = v2426.totST;
              const v21080 = v2426.totBT;
              const v21081 = v2426.distrNum;
              const v21082 = v2426.saleLocked;
              const v21083 = v2426.docHash;
              const v21084 = v21083[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
              const v21085 = v2426.cv;
              const v21086 = v21085[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
              const v21087 = v21085[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
              const v21088 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21089 = v21088[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
              const v21090 = stdlib.cast("UInt", "UInt256", v21089, false, true);
              const v21091 = v2426.ctcMan;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      undefined /* setApiDetails */;
      const v7944 = v7876[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
      const v7945 = v7876[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '1')];
      const v7946 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v7944), null);
      const v7948 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7950 = stdlib.fromSome(v7946, v7948);
      const v7951 = v7950[stdlib.checkedBigNumberify('./index.rsh:205:79:array ref', stdlib.UInt_max, '1')];
      const v7952 = stdlib.safeMul(v7945, v7951);
      ;
      const v8012 = stdlib.add(v2500, v7952);
      const v8014 = stdlib.Array_set(v2499, '0', v8012);
      const v8015 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8014);
      ;
      const v8232 = stdlib.addressEq(v3016, v7944);
      const v8233 = v8232 ? false : true;
      stdlib.assert(v8233, {
        at: './index.rsh:208:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you cannot complete/buy your own swap',
        who: 'completeSwap'
        });
      const v8234 = stdlib.gt(v7945, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8234, {
        at: './index.rsh:209:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you must buy at least 1 share token',
        who: 'completeSwap'
        });
      const v8240 = v7950[stdlib.checkedBigNumberify('./index.rsh:210:69:array ref', stdlib.UInt_max, '0')];
      const v8241 = stdlib.le(v7945, v8240);
      stdlib.assert(v8241, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you cannot buy more than the quantity offered for sale',
        who: 'completeSwap'
        });
      const v8242 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3016), null);
      const v8243 = {
        None: 0,
        Some: 1
        }[v8242[0]];
      const v8244 = stdlib.eq(v8243, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v8244, {
        at: './index.rsh:211:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you must be a whitelist member to complete or buy swap',
        who: 'completeSwap'
        });
      const v8245 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v7944), null);
      const v8246 = '-----';
      const v8247 = stdlib.fromSome(v8245, v8246);
      const v8248 = 'apprv';
      const v8249 = stdlib.digest([ctc6], [v8247]);
      const v8251 = stdlib.digest([ctc6], [v8248]);
      const v8252 = stdlib.digestEq(v8249, v8251);
      const v8256 = 'partl';
      const v8259 = stdlib.digest([ctc6], [v8256]);
      const v8260 = stdlib.digestEq(v8249, v8259);
      const v8261 = v8252 ? true : v8260;
      stdlib.assert(v8261, {
        at: './index.rsh:212:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'you can only buy an approved or partially completed swap',
        who: 'completeSwap'
        });
      const v8267 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3016), null);
      const v8268 = stdlib.fromSome(v8267, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8269 = stdlib.cast("UInt", "UInt256", v7945, false, true);
      const v8270 = stdlib.safeAdd256(v8268, v8269);
      await stdlib.mapSet(map0, v3016, v8270);
      const v8271 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3016), null);
      const v8272 = stdlib.fromSome(v8271, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8274 = stdlib.safeAdd256(v8272, v8269);
      await stdlib.mapSet(map2, v3016, v8274);
      const v8277 = v7950[stdlib.checkedBigNumberify('./index.rsh:219:61:array ref', stdlib.UInt_max, '2')];
      const v8278 = stdlib.safeAdd(v7952, v8277);
      const v8279 = stdlib.Array_set(v7950, stdlib.checkedBigNumberify('./index.rsh:219:38:decimal', stdlib.UInt_max, '2'), v8278);
      const v8280 = v7950[stdlib.checkedBigNumberify('./index.rsh:221:45:array ref', stdlib.UInt_max, '3')];
      const v8281 = stdlib.safeAdd(v8280, v7945);
      const v8282 = stdlib.Array_set(v8279, stdlib.checkedBigNumberify('./index.rsh:221:39:decimal', stdlib.UInt_max, '3'), v8281);
      const v8284 = stdlib.safeSub(v8240, v7945);
      const v8285 = stdlib.Array_set(v8282, stdlib.checkedBigNumberify('./index.rsh:223:39:decimal', stdlib.UInt_max, '0'), v8284);
      await stdlib.mapSet(map5, v7944, v8285);
      const v8286 = v8285[stdlib.checkedBigNumberify('./index.rsh:226:25:array ref', stdlib.UInt_max, '0')];
      const v8287 = stdlib.eq(v8286, stdlib.checkedBigNumberify('./index.rsh:226:32:decimal', stdlib.UInt_max, '0'));
      if (v8287) {
        const v8288 = 'compl';
        await stdlib.mapSet(map6, v7944, v8288);
        const v8289 = true;
        const v8290 = await txn1.getOutput('completeSwap', 'v8289', ctc8, v8289);
        if (v1492) {
          stdlib.protect(ctc0, await interact.out(v7876, v8290), {
            at: './index.rsh:194:13:application',
            fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:232:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'out',
            who: 'completeSwap'
            });
          }
        else {
          }
        
        const v8297 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7944), null);
        const v8298 = stdlib.fromSome(v8297, false);
        if (v8298) {
          const v8311 = stdlib.safeAdd256(v2465, v8269);
          const v8312 = {
            ...v2426, 'totST': v8311};
          const v20992 = v8312;
          const v20994 = v8015;
          const v20995 = v8312.totST;
          const v20996 = v8312.totBT;
          const v20997 = v8312.distrNum;
          const v20998 = v8312.saleLocked;
          const v20999 = v8312.docHash;
          const v21000 = v20999[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21001 = v8312.cv;
          const v21002 = v21001[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21003 = v21001[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21004 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21005 = v21004[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21006 = stdlib.cast("UInt", "UInt256", v21005, false, true);
          const v21007 = v8312.ctcMan;
          return;
          }
        else {
          const v8300 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7944), null);
          const v8301 = stdlib.fromSome(v8300, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8303 = stdlib.safeSub256(v8301, v8269);
          await stdlib.mapSet(map0, v7944, v8303);
          const v8304 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7944), null);
          const v8305 = stdlib.fromSome(v8304, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8307 = stdlib.safeSub256(v8305, v8269);
          await stdlib.mapSet(map2, v7944, v8307);
          const v21020 = v2426;
          const v21022 = v8015;
          const v21023 = v2426.totST;
          const v21024 = v2426.totBT;
          const v21025 = v2426.distrNum;
          const v21026 = v2426.saleLocked;
          const v21027 = v2426.docHash;
          const v21028 = v21027[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21029 = v2426.cv;
          const v21030 = v21029[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21031 = v21029[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21032 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21033 = v21032[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21034 = stdlib.cast("UInt", "UInt256", v21033, false, true);
          const v21035 = v2426.ctcMan;
          return;
          }}
      else {
        await stdlib.mapSet(map6, v7944, v8256);
        const v8315 = true;
        const v8316 = await txn1.getOutput('completeSwap', 'v8315', ctc8, v8315);
        if (v1492) {
          stdlib.protect(ctc0, await interact.out(v7876, v8316), {
            at: './index.rsh:194:13:application',
            fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:232:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: 'out',
            who: 'completeSwap'
            });
          }
        else {
          }
        
        const v8323 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v7944), null);
        const v8324 = stdlib.fromSome(v8323, false);
        if (v8324) {
          const v8337 = stdlib.safeAdd256(v2465, v8269);
          const v8338 = {
            ...v2426, 'totST': v8337};
          const v21048 = v8338;
          const v21050 = v8015;
          const v21051 = v8338.totST;
          const v21052 = v8338.totBT;
          const v21053 = v8338.distrNum;
          const v21054 = v8338.saleLocked;
          const v21055 = v8338.docHash;
          const v21056 = v21055[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21057 = v8338.cv;
          const v21058 = v21057[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21059 = v21057[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21060 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21061 = v21060[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21062 = stdlib.cast("UInt", "UInt256", v21061, false, true);
          const v21063 = v8338.ctcMan;
          return;
          }
        else {
          const v8326 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7944), null);
          const v8327 = stdlib.fromSome(v8326, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8329 = stdlib.safeSub256(v8327, v8269);
          await stdlib.mapSet(map0, v7944, v8329);
          const v8330 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v7944), null);
          const v8331 = stdlib.fromSome(v8330, stdlib.checkedBigNumberify('./index.rsh:64:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8333 = stdlib.safeSub256(v8331, v8269);
          await stdlib.mapSet(map2, v7944, v8333);
          const v21076 = v2426;
          const v21078 = v8015;
          const v21079 = v2426.totST;
          const v21080 = v2426.totBT;
          const v21081 = v2426.distrNum;
          const v21082 = v2426.saleLocked;
          const v21083 = v2426.docHash;
          const v21084 = v21083[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21085 = v2426.cv;
          const v21086 = v21085[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21087 = v21085[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21088 = v8015[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21089 = v21088[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21090 = stdlib.cast("UInt", "UInt256", v21089, false, true);
          const v21091 = v2426.ctcMan;
          return;
          }}
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2787 = ctc.selfAddress();
  const v2789 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_324" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v2790 = v2789[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2793 = stdlib.addressEq(v2787, v2406);
  const v2795 = stdlib.addressEq(v2787, v2503);
  const v2796 = v2793 ? true : v2795;
  stdlib.assert(v2796, {
    at: './index.rsh:379:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:20:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_324" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v2797 = stdlib.cast("UInt256", "UInt", v2790, false, true);
  const v2798 = stdlib.gt(v2797, stdlib.checkedBigNumberify('./index.rsh:380:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2798, {
    at: './index.rsh:380:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:20:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:80:33:application call to "rundBT0_324" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v2802 = ['dBT0_324', v2789];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2802],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:383:24:decimal', stdlib.UInt_max, '0'), [[v2797, v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v8567 = v8483[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
          const v8568 = stdlib.cast("UInt256", "UInt", v8567, false, true);
          ;
          const v8619 = stdlib.add(v2500, v8568);
          const v8621 = stdlib.Array_set(v2499, '0', v8619);
          const v8622 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8621);
          sim_r.txns.push({
            amt: v8568,
            kind: 'to',
            tok: v2410
            });
          const v8956 = stdlib.safeAdd256(v2466, v8567);
          const v8957 = {
            ...v2426, 'totBT': v8956};
          const v8959 = stdlib.safeAdd256(v2467, stdlib.checkedBigNumberify('./index.rsh:390:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8960 = {
            ...v8957, 'distrNum': v8959};
          const v8961 = {
            ...v8960, 'currDistr': v8567};
          const v8962 = true;
          const v8963 = await txn1.getOutput('dBT', 'v8962', ctc8, v8962);
          
          const v21608 = v8961;
          const v21610 = v8622;
          const v21611 = v8961.totST;
          const v21612 = v8961.totBT;
          const v21613 = v8961.distrNum;
          const v21614 = v8961.saleLocked;
          const v21615 = v8961.docHash;
          const v21616 = v21615[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v21617 = v8961.cv;
          const v21618 = v21617[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v21619 = v21617[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v21620 = v8622[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21621 = v21620[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v21622 = stdlib.cast("UInt", "UInt256", v21621, false, true);
          const v21623 = v8961.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      undefined /* setApiDetails */;
      const v8567 = v8483[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
      const v8568 = stdlib.cast("UInt256", "UInt", v8567, false, true);
      ;
      const v8619 = stdlib.add(v2500, v8568);
      const v8621 = stdlib.Array_set(v2499, '0', v8619);
      const v8622 = stdlib.Array_set(v2429, stdlib.checkedBigNumberify('./index.rsh:80:33:dot', stdlib.UInt_max, '0'), v8621);
      ;
      const v8949 = stdlib.addressEq(v3016, v2406);
      const v8951 = stdlib.addressEq(v3016, v2503);
      const v8952 = v8949 ? true : v8951;
      stdlib.assert(v8952, {
        at: './index.rsh:386:24:application',
        fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v8954 = stdlib.gt(v8568, stdlib.checkedBigNumberify('./index.rsh:387:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8954, {
        at: './index.rsh:387:24:application',
        fs: ['at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v8956 = stdlib.safeAdd256(v2466, v8567);
      const v8957 = {
        ...v2426, 'totBT': v8956};
      const v8959 = stdlib.safeAdd256(v2467, stdlib.checkedBigNumberify('./index.rsh:390:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v8960 = {
        ...v8957, 'distrNum': v8959};
      const v8961 = {
        ...v8960, 'currDistr': v8567};
      const v8962 = true;
      const v8963 = await txn1.getOutput('dBT', 'v8962', ctc8, v8962);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v8483, v8963), {
          at: './index.rsh:376:13:application',
          fs: ['at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:393:20:application call to "res" (defined at: ./index.rsh:385:13:function exp)', 'at ./index.rsh:385:13:application call to [unknown function] (defined at: ./index.rsh:385:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v21608 = v8961;
      const v21610 = v8622;
      const v21611 = v8961.totST;
      const v21612 = v8961.totBT;
      const v21613 = v8961.distrNum;
      const v21614 = v8961.saleLocked;
      const v21615 = v8961.docHash;
      const v21616 = v21615[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v21617 = v8961.cv;
      const v21618 = v21617[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v21619 = v21617[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v21620 = v8622[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21621 = v21620[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v21622 = stdlib.cast("UInt", "UInt256", v21621, false, true);
      const v21623 = v8961.ctcMan;
      return;
      
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2698 = ctc.selfAddress();
  const v2700 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_324" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v2706 = stdlib.eq(v2492, stdlib.checkedBigNumberify('./index.rsh:273:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2706, {
    at: './index.rsh:273:23:application',
    fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:18:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_324" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v2707 = stdlib.addressEq(v2698, v2406);
  const v2709 = stdlib.addressEq(v2698, v2503);
  const v2710 = v2707 ? true : v2709;
  stdlib.assert(v2710, {
    at: './index.rsh:274:23:application',
    fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:18:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:80:33:application call to "rundocHash0_324" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v2714 = ['docHash0_324', v2700];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2714],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:278:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:278:26:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          ;
          const v9577 = v9090[stdlib.checkedBigNumberify('./index.rsh:268:13:spread', stdlib.UInt_max, '0')];
          const v9585 = stdlib.safeAdd(v2492, stdlib.checkedBigNumberify('./index.rsh:284:76:decimal', stdlib.UInt_max, '1'));
          const v9587 = [v9577, v9585, v3018];
          const v9588 = {
            ...v2426, 'docHash': v9587};
          const v9589 = true;
          const v9590 = await txn1.getOutput('docHash', 'v9589', ctc8, v9589);
          
          const v22140 = v9588;
          const v22142 = v2429;
          const v22143 = v9588.totST;
          const v22144 = v9588.totBT;
          const v22145 = v9588.distrNum;
          const v22146 = v9588.saleLocked;
          const v22147 = v9588.docHash;
          const v22148 = v22147[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v22149 = v9588.cv;
          const v22150 = v22149[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v22151 = v22149[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v22152 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22153 = v22152[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v22154 = stdlib.cast("UInt", "UInt256", v22153, false, true);
          const v22155 = v9588.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v9577 = v9090[stdlib.checkedBigNumberify('./index.rsh:268:13:spread', stdlib.UInt_max, '0')];
      const v9580 = stdlib.eq(v2492, stdlib.checkedBigNumberify('./index.rsh:282:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9580, {
        at: './index.rsh:282:24:application',
        fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v9581 = stdlib.addressEq(v3016, v2406);
      const v9583 = stdlib.addressEq(v3016, v2503);
      const v9584 = v9581 ? true : v9583;
      stdlib.assert(v9584, {
        at: './index.rsh:283:24:application',
        fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v9585 = stdlib.safeAdd(v2492, stdlib.checkedBigNumberify('./index.rsh:284:76:decimal', stdlib.UInt_max, '1'));
      const v9587 = [v9577, v9585, v3018];
      const v9588 = {
        ...v2426, 'docHash': v9587};
      const v9589 = true;
      const v9590 = await txn1.getOutput('docHash', 'v9589', ctc8, v9589);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v9090, v9590), {
          at: './index.rsh:269:13:application',
          fs: ['at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)', 'at ./index.rsh:285:20:application call to "res" (defined at: ./index.rsh:280:13:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v22140 = v9588;
      const v22142 = v2429;
      const v22143 = v9588.totST;
      const v22144 = v9588.totBT;
      const v22145 = v9588.distrNum;
      const v22146 = v9588.saleLocked;
      const v22147 = v9588.docHash;
      const v22148 = v22147[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v22149 = v9588.cv;
      const v22150 = v22149[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v22151 = v22149[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v22152 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22153 = v22152[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v22154 = stdlib.cast("UInt", "UInt256", v22153, false, true);
      const v22155 = v9588.ctcMan;
      return;
      
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2529 = ctc.selfAddress();
  const v2531 = stdlib.protect(ctc19, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'initSwap'
    });
  const v2532 = v2531[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2533 = v2531[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2534 = v2531[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2540 = stdlib.addressEq(v2529, v2406);
  const v2542 = stdlib.addressEq(v2529, v2503);
  const v2543 = v2540 ? true : v2542;
  const v2544 = v2534 ? v2543 : false;
  const v2545 = v2534 ? false : true;
  const v2546 = v2544 ? true : v2545;
  stdlib.assert(v2546, {
    at: './index.rsh:117:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'if you are not creator or manager, the swap cannot be share issuance type',
    who: 'initSwap'
    });
  const v2547 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v2529), null);
  const v2548 = {
    None: 0,
    Some: 1
    }[v2547[0]];
  const v2549 = stdlib.eq(v2548, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2551 = v2549 ? v2545 : false;
  const v2553 = v2551 ? true : v2534;
  stdlib.assert(v2553, {
    at: './index.rsh:118:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be a whitelist member',
    who: 'initSwap'
    });
  const v2554 = stdlib.gt(v2532, stdlib.checkedBigNumberify('./index.rsh:119:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2554, {
    at: './index.rsh:119:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'initSwap'
    });
  const v2555 = stdlib.gt(v2533, stdlib.checkedBigNumberify('./index.rsh:120:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2555, {
    at: './index.rsh:120:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'price must be greater than 0',
    who: 'initSwap'
    });
  const v2556 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2529), null);
  const v2557 = '-----';
  const v2558 = stdlib.fromSome(v2556, v2557);
  const v2560 = stdlib.digest([ctc6], [v2558]);
  const v2562 = stdlib.digest([ctc6], [v2557]);
  const v2563 = stdlib.digestEq(v2560, v2562);
  const v2567 = 'compl';
  const v2570 = stdlib.digest([ctc6], [v2567]);
  const v2571 = stdlib.digestEq(v2560, v2570);
  const v2572 = v2563 ? true : v2571;
  stdlib.assert(v2572, {
    at: './index.rsh:121:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:80:33:application call to "runinitSwap0_324" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'there must be no pending swap',
    who: 'initSwap'
    });
  const v2578 = ['initSwap0_324', v2531];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2578],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:124:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:124:32:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "initSwap"
            });
          ;
          ;
          const v10204 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v10205 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
          const v10206 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
          const v10208 = stdlib.addressEq(v3016, v2406);
          const v10210 = stdlib.addressEq(v3016, v2503);
          const v10211 = v10208 ? true : v10210;
          stdlib.protect(map9_ctc, await stdlib.simMapRef(sim_r, 9, v3016), null);
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v3016), null);
          const v10246 = v10211 ? v10206 : false;
          if (v10246) {
            const v10247 = 'apprv';
            await stdlib.simMapSet(sim_r, 6, v3016, v10247);
            await stdlib.simMapSet(sim_r, 7, v3016, true);
            const v10248 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3016), null);
            const v10250 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10252 = stdlib.fromSome(v10248, v10250);
            const v10253 = stdlib.Array_set(v10252, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10204);
            const v10254 = stdlib.Array_set(v10253, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10205);
            const v10255 = stdlib.Array_set(v10254, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 5, v3016, v10255);
            const v10256 = true;
            const v10257 = await txn1.getOutput('initSwap', 'v10256', ctc8, v10256);
            
            const v22672 = v2426;
            const v22674 = v2429;
            const v22675 = v2426.totST;
            const v22676 = v2426.totBT;
            const v22677 = v2426.distrNum;
            const v22678 = v2426.saleLocked;
            const v22679 = v2426.docHash;
            const v22680 = v22679[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
            const v22681 = v2426.cv;
            const v22682 = v22681[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
            const v22683 = v22681[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
            const v22684 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22685 = v22684[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22686 = stdlib.cast("UInt", "UInt256", v22685, false, true);
            const v22687 = v2426.ctcMan;
            sim_r.isHalt = false;
            }
          else {
            const v10265 = 'initd';
            await stdlib.simMapSet(sim_r, 6, v3016, v10265);
            await stdlib.simMapSet(sim_r, 7, v3016, v10206);
            const v10266 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3016), null);
            const v10268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10270 = stdlib.fromSome(v10266, v10268);
            const v10271 = stdlib.Array_set(v10270, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10204);
            const v10272 = stdlib.Array_set(v10271, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10205);
            const v10273 = stdlib.Array_set(v10272, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 5, v3016, v10273);
            const v10274 = true;
            const v10275 = await txn1.getOutput('initSwap', 'v10274', ctc8, v10274);
            
            const v22700 = v2426;
            const v22702 = v2429;
            const v22703 = v2426.totST;
            const v22704 = v2426.totBT;
            const v22705 = v2426.distrNum;
            const v22706 = v2426.saleLocked;
            const v22707 = v2426.docHash;
            const v22708 = v22707[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
            const v22709 = v2426.cv;
            const v22710 = v22709[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
            const v22711 = v22709[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
            const v22712 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22713 = v22712[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
            const v22714 = stdlib.cast("UInt", "UInt256", v22713, false, true);
            const v22715 = v2426.ctcMan;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v10204 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
      const v10205 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '1')];
      const v10206 = v9697[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '2')];
      const v10208 = stdlib.addressEq(v3016, v2406);
      const v10210 = stdlib.addressEq(v3016, v2503);
      const v10211 = v10208 ? true : v10210;
      const v10212 = v10206 ? v10211 : false;
      const v10213 = v10206 ? false : true;
      const v10214 = v10212 ? true : v10213;
      stdlib.assert(v10214, {
        at: './index.rsh:127:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'if you are not creator or manager, the swap cannot be share issuance type',
        who: 'initSwap'
        });
      const v10215 = stdlib.protect(map9_ctc, await stdlib.mapRef(map9, v3016), null);
      const v10216 = {
        None: 0,
        Some: 1
        }[v10215[0]];
      const v10217 = stdlib.eq(v10216, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v10219 = v10217 ? v10213 : false;
      const v10221 = v10219 ? true : v10206;
      stdlib.assert(v10221, {
        at: './index.rsh:128:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'you must be a whitelist member',
        who: 'initSwap'
        });
      const v10222 = stdlib.gt(v10204, stdlib.checkedBigNumberify('./index.rsh:129:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10222, {
        at: './index.rsh:129:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'initSwap'
        });
      const v10223 = stdlib.gt(v10205, stdlib.checkedBigNumberify('./index.rsh:130:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10223, {
        at: './index.rsh:130:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'initSwap'
        });
      const v10224 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v3016), null);
      const v10225 = '-----';
      const v10226 = stdlib.fromSome(v10224, v10225);
      const v10228 = stdlib.digest([ctc6], [v10226]);
      const v10230 = stdlib.digest([ctc6], [v10225]);
      const v10231 = stdlib.digestEq(v10228, v10230);
      const v10235 = 'compl';
      const v10238 = stdlib.digest([ctc6], [v10235]);
      const v10239 = stdlib.digestEq(v10228, v10238);
      const v10240 = v10231 ? true : v10239;
      stdlib.assert(v10240, {
        at: './index.rsh:131:24:application',
        fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
        msg: 'there must be no pending swap',
        who: 'initSwap'
        });
      const v10246 = v10211 ? v10206 : false;
      if (v10246) {
        const v10247 = 'apprv';
        await stdlib.mapSet(map6, v3016, v10247);
        await stdlib.mapSet(map7, v3016, true);
        const v10248 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
        const v10250 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v10252 = stdlib.fromSome(v10248, v10250);
        const v10253 = stdlib.Array_set(v10252, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10204);
        const v10254 = stdlib.Array_set(v10253, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10205);
        const v10255 = stdlib.Array_set(v10254, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map5, v3016, v10255);
        const v10256 = true;
        const v10257 = await txn1.getOutput('initSwap', 'v10256', ctc8, v10256);
        if (v1492) {
          stdlib.protect(ctc0, await interact.out(v9697, v10257), {
            at: './index.rsh:114:13:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:145:20:application call to "res" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'out',
            who: 'initSwap'
            });
          }
        else {
          }
        
        const v22672 = v2426;
        const v22674 = v2429;
        const v22675 = v2426.totST;
        const v22676 = v2426.totBT;
        const v22677 = v2426.distrNum;
        const v22678 = v2426.saleLocked;
        const v22679 = v2426.docHash;
        const v22680 = v22679[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v22681 = v2426.cv;
        const v22682 = v22681[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v22683 = v22681[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v22684 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22685 = v22684[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22686 = stdlib.cast("UInt", "UInt256", v22685, false, true);
        const v22687 = v2426.ctcMan;
        return;
        }
      else {
        const v10265 = 'initd';
        await stdlib.mapSet(map6, v3016, v10265);
        await stdlib.mapSet(map7, v3016, v10206);
        const v10266 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3016), null);
        const v10268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v10270 = stdlib.fromSome(v10266, v10268);
        const v10271 = stdlib.Array_set(v10270, stdlib.checkedBigNumberify('./index.rsh:140:38:decimal', stdlib.UInt_max, '0'), v10204);
        const v10272 = stdlib.Array_set(v10271, stdlib.checkedBigNumberify('./index.rsh:141:39:decimal', stdlib.UInt_max, '1'), v10205);
        const v10273 = stdlib.Array_set(v10272, stdlib.checkedBigNumberify('./index.rsh:142:39:decimal', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('./index.rsh:142:42:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map5, v3016, v10273);
        const v10274 = true;
        const v10275 = await txn1.getOutput('initSwap', 'v10274', ctc8, v10274);
        if (v1492) {
          stdlib.protect(ctc0, await interact.out(v9697, v10275), {
            at: './index.rsh:114:13:application',
            fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:145:20:application call to "res" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)'],
            msg: 'out',
            who: 'initSwap'
            });
          }
        else {
          }
        
        const v22700 = v2426;
        const v22702 = v2429;
        const v22703 = v2426.totST;
        const v22704 = v2426.totBT;
        const v22705 = v2426.distrNum;
        const v22706 = v2426.saleLocked;
        const v22707 = v2426.docHash;
        const v22708 = v22707[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
        const v22709 = v2426.cv;
        const v22710 = v22709[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
        const v22711 = v22709[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
        const v22712 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22713 = v22712[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
        const v22714 = stdlib.cast("UInt", "UInt256", v22713, false, true);
        const v22715 = v2426.ctcMan;
        return;
        }
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2770 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:80:33:application call to "runoptIn0_324" (defined at: ./index.rsh:348:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v2774 = ['optIn0_324', v2770];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2774],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:354:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:354:25:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 8, v3016, true);
          const v10891 = true;
          const v10892 = await txn1.getOutput('optIn', 'v10891', ctc8, v10891);
          
          const v23232 = v2426;
          const v23234 = v2429;
          const v23235 = v2426.totST;
          const v23236 = v2426.totBT;
          const v23237 = v2426.distrNum;
          const v23238 = v2426.saleLocked;
          const v23239 = v2426.docHash;
          const v23240 = v23239[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v23241 = v2426.cv;
          const v23242 = v23241[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v23243 = v23241[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v23244 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23245 = v23244[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23246 = stdlib.cast("UInt", "UInt256", v23245, false, true);
          const v23247 = v2426.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map8, v3016, true);
      const v10891 = true;
      const v10892 = await txn1.getOutput('optIn', 'v10891', ctc8, v10891);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v10304, v10892), {
          at: './index.rsh:349:13:application',
          fs: ['at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:358:20:application call to "res" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:356:13:application call to [unknown function] (defined at: ./index.rsh:356:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v23232 = v2426;
      const v23234 = v2429;
      const v23235 = v2426.totST;
      const v23236 = v2426.totBT;
      const v23237 = v2426.distrNum;
      const v23238 = v2426.saleLocked;
      const v23239 = v2426.docHash;
      const v23240 = v23239[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v23241 = v2426.cv;
      const v23242 = v23241[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v23243 = v23241[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v23244 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23245 = v23244[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23246 = stdlib.cast("UInt", "UInt256", v23245, false, true);
      const v23247 = v2426.ctcMan;
      return;
      
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
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
  
  
  const [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc11, ctc12, ctc18, ctc20, ctc1, ctc1, ctc1, ctc8, ctc17, ctc3, ctc13, ctc14, ctc19, ctc3, ctc1, ctc11]);
  const v2731 = ctc.selfAddress();
  const v2733 = stdlib.protect(ctc21, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:80:33:application call to "runremWL0_324" (defined at: ./index.rsh:307:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v2737 = stdlib.addressEq(v2731, v2406);
  const v2739 = stdlib.addressEq(v2731, v2503);
  const v2740 = v2737 ? true : v2739;
  stdlib.assert(v2740, {
    at: './index.rsh:311:23:application',
    fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)', 'at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:80:33:application call to "runremWL0_324" (defined at: ./index.rsh:307:13:function exp)', 'at ./index.rsh:80:33:application call to [unknown function] (defined at: ./index.rsh:80:33:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v2744 = ['remWL0_324', v2733];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2406, v2410, v2426, v2429, v2465, v2466, v2467, v2469, v2490, v2492, v2495, v2497, v2499, v2500, v2501, v2503, v2744],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc28],
    pay: [stdlib.checkedBigNumberify('./index.rsh:315:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:315:26:decimal', stdlib.UInt_max, '0'), v2410]]],
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
      
      const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
      
      switch (v3017[0]) {
        case 'aST0_324': {
          const v3020 = v3017[1];
          
          break;
          }
        case 'addCoopId0_324': {
          const v3627 = v3017[1];
          
          break;
          }
        case 'addWL0_324': {
          const v4234 = v3017[1];
          
          break;
          }
        case 'approveSwap0_324': {
          const v4841 = v3017[1];
          
          break;
          }
        case 'cBT0_324': {
          const v5448 = v3017[1];
          
          break;
          }
        case 'cCM0_324': {
          const v6055 = v3017[1];
          
          break;
          }
        case 'cancelSwap0_324': {
          const v6662 = v3017[1];
          
          break;
          }
        case 'claimSwapProceeds0_324': {
          const v7269 = v3017[1];
          
          break;
          }
        case 'completeSwap0_324': {
          const v7876 = v3017[1];
          
          break;
          }
        case 'dBT0_324': {
          const v8483 = v3017[1];
          
          break;
          }
        case 'docHash0_324': {
          const v9090 = v3017[1];
          
          break;
          }
        case 'initSwap0_324': {
          const v9697 = v3017[1];
          
          break;
          }
        case 'optIn0_324': {
          const v10304 = v3017[1];
          
          break;
          }
        case 'remWL0_324': {
          const v10911 = v3017[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          ;
          const v11505 = v10911[stdlib.checkedBigNumberify('./index.rsh:307:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 9, v11505, undefined /* Nothing */);
          const v11511 = true;
          const v11512 = await txn1.getOutput('remWL', 'v11511', ctc8, v11511);
          
          const v23764 = v2426;
          const v23766 = v2429;
          const v23767 = v2426.totST;
          const v23768 = v2426.totBT;
          const v23769 = v2426.distrNum;
          const v23770 = v2426.saleLocked;
          const v23771 = v2426.docHash;
          const v23772 = v23771[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
          const v23773 = v2426.cv;
          const v23774 = v23773[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
          const v23775 = v23773[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
          const v23776 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23777 = v23776[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
          const v23778 = stdlib.cast("UInt", "UInt256", v23777, false, true);
          const v23779 = v2426.ctcMan;
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
  const {data: [v3017], secs: v3019, time: v3018, didSend: v1492, from: v3016 } = txn1;
  switch (v3017[0]) {
    case 'aST0_324': {
      const v3020 = v3017[1];
      return;
      break;
      }
    case 'addCoopId0_324': {
      const v3627 = v3017[1];
      return;
      break;
      }
    case 'addWL0_324': {
      const v4234 = v3017[1];
      return;
      break;
      }
    case 'approveSwap0_324': {
      const v4841 = v3017[1];
      return;
      break;
      }
    case 'cBT0_324': {
      const v5448 = v3017[1];
      return;
      break;
      }
    case 'cCM0_324': {
      const v6055 = v3017[1];
      return;
      break;
      }
    case 'cancelSwap0_324': {
      const v6662 = v3017[1];
      return;
      break;
      }
    case 'claimSwapProceeds0_324': {
      const v7269 = v3017[1];
      return;
      break;
      }
    case 'completeSwap0_324': {
      const v7876 = v3017[1];
      return;
      break;
      }
    case 'dBT0_324': {
      const v8483 = v3017[1];
      return;
      break;
      }
    case 'docHash0_324': {
      const v9090 = v3017[1];
      return;
      break;
      }
    case 'initSwap0_324': {
      const v9697 = v3017[1];
      return;
      break;
      }
    case 'optIn0_324': {
      const v10304 = v3017[1];
      return;
      break;
      }
    case 'remWL0_324': {
      const v10911 = v3017[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v11505 = v10911[stdlib.checkedBigNumberify('./index.rsh:307:13:spread', stdlib.UInt_max, '0')];
      const v11506 = stdlib.addressEq(v3016, v2406);
      const v11508 = stdlib.addressEq(v3016, v2503);
      const v11509 = v11506 ? true : v11508;
      stdlib.assert(v11509, {
        at: './index.rsh:318:24:application',
        fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map9, v11505, undefined /* Nothing */);
      const v11511 = true;
      const v11512 = await txn1.getOutput('remWL', 'v11511', ctc8, v11511);
      if (v1492) {
        stdlib.protect(ctc0, await interact.out(v10911, v11512), {
          at: './index.rsh:308:13:application',
          fs: ['at ./index.rsh:308:13:application call to [unknown function] (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:321:20:application call to "res" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v23764 = v2426;
      const v23766 = v2429;
      const v23767 = v2426.totST;
      const v23768 = v2426.totBT;
      const v23769 = v2426.distrNum;
      const v23770 = v2426.saleLocked;
      const v23771 = v2426.docHash;
      const v23772 = v23771[stdlib.checkedBigNumberify('./index.rsh:101:28:application', stdlib.UInt_max, '1')];
      const v23773 = v2426.cv;
      const v23774 = v23773[stdlib.checkedBigNumberify('./index.rsh:102:42:array ref', stdlib.UInt_max, '0')];
      const v23775 = v23773[stdlib.checkedBigNumberify('./index.rsh:102:55:array ref', stdlib.UInt_max, '1')];
      const v23776 = v2429[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23777 = v23776[stdlib.checkedBigNumberify('./index.rsh:103:46:application', stdlib.UInt_max, '0')];
      const v23778 = stdlib.cast("UInt", "UInt256", v23777, false, true);
      const v23779 = v2426.ctcMan;
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
  appApproval: `ByA2AAMBIAhABGAYEQahAhACBdEB1J2TzAjg5cOwDOO5zasO2I6Z4A6fk4HRD+LOidYOsILfsAyamI65DJwF7oKunwqht9rXCqKmnpsMggOiA8ID8eGT4Qjd0eGYCev2jfsF3ZaWgwiK0sKbCLytx6sIl5z91Ab95qmlB7wF2Nv8mQP5hIqRBcn8mLwF2wSXxMGvAZz4g4gC////////////ASjJAvECBw2BAn8mDQEBAQABAwECAQQBBQAFLS0tLS0BBwIBASCf0CYEl4tw6mkMuSyiIXqYTjqXWt+37US2HyWYEUp9PwYBYXBwcnYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiNQAxGEETRycGZEkiWzUBSSEEWzUCIQxbNQgxGSQSQQAcMQAhD69LASlLAlcAf2ZLAShLAld/UmZISEIS+jYaABdJQQRDIjUEJDUGSSEQDEACo0khEQxAATdJIRIMQAB3SSETDEAAMUkhFAxAABQhFBJENhoBNf8qNP9QIQWvUEIEeyETEkQ2GgE1/4ABDTT/UCEFr1BCBGVJIRUMQAAaIRUSRDYaATYaAlA1/4ABCDT/UIE4r1BCBEQhEhJENhoBNhoCUDYaA1A1/4ABCzT/UIFPr1BCBCZJIRYMQABeSSEXDEAALiEXEkQ0ASMSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQMhGCVYNANXIAhQNQdCEjMhFhJENAEjEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDgeIDJFg1B0ISCiEREkQ0ASMSRDYaATX/MgM0/4gSH1dCIUk1/lcBIDT+IlVNMgM0/4gSCldjIUk1/lcBIDT+IlVNUDIDNP+IEfRXhCFJNf5XASA0/iJVTVA1B0IRtkkhGQxAAMlJIRoMQACtSSEbDEAAcCEbEkQ0ASMSRDYaATX/MgM0/4gRtlelIUk1/VcBIDT9IlVNSTX+VwAINP5XCAhQNP5XGAhQJwc0/4gRj1fGBkk1/VcBBTT9IlVNUDT+VxAIUCI0/4gRdFfMAkk1/VcBARc0/SJVTRZRBwhQNQdCETEhGhJENAEjEkQpZChkUCtkUCpkUCcEZFAnBWRQSTUDIRwlWDQDIR0lWFA0AyEeJVhQNQdCEPshGRJEJwY1/4ABBjT/UCEHr1BCAp1JIR8MQABkSSEgDEAAHyEgEkQ0ASMSRDYaAYgQ81fQASJVJBIWUQcINQdCELkhHxJENAEjEkQ2GgE1/zIDNP+IEM5XACFJNf5XASA0/iJVTTIDNP+IELlXISFJNf5XASA0/iJVTVA1B0IQeyEQEkQ0ASMSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQOB4wOBcFg1B0IQUUkhIQxAAMtJISIMQABMSSEjDEAAMUkhJAxAABQhJBJENhoBNf8rNP9QIQWvUEIB2CEjEkQ2GgE1/4ABCTT/UCEFr1BCAcIhIhJENhoBNf8oNP9QgTyvUEIBrkkhJQxAAF1JISYMQAAuISYSRDQBIxJEKWQoZFArZFAqZFAnBGRQJwVkUEk1A1cAIDQDISclWFA1B0IPuyElEkQ0ASMSRCI2GgGID9VXzgJJNf9XAQEXNP8iVU0WUQcINQdCD5MhIRJEJwY1/ycINP9QIQevUEIBNkkhKAxAAGdJISkMQAAuSSEqDEAAEiEqEkQ2GgE1/4ABCjT/UEIBDyEpEkQnBjX/gAEMNP9QIQevUEIA+iEoEkQ0ASMSRClkKGRQK2RQKmRQJwRkUCcFZFBJNQMhKyEGWDQDgd8EgSRYUDUHQg8RSSEsDEAAMEkhLQxAABUhLRJENhoBNf8nBTT/UCEFr1BCAKUhLBJEJwY1/ycENP9QIQevUEIAkYH1+t+SARJENhoBNhoCUDYaA1A1/yk0/1BCAHU2GgIXNQQ2GgM2GgEXSSENDEAMCUkjDEAAWiMSRCM0ARJENARJIhJMNAISEUQpZChkUCtkUCpkUCcEZFAnBWRQSTUDVwAgNf+ABKdlxLSwMgYhLg9ENP8xABJENP80AyVbNAMhLyEwWDIGNAMhMSEJWEINDkgjNAESRDQESSISTDQCEhFEKWQoZFArZFAqZFAnBGRQJwVkUEk1A0lKSkpJVwAgNf8lWzX+IS8hMFg1/SExIQlYNfwhHCVYNfuB0wRbNfqBgwUhCVg1+YGUBVs1+CEnJVg190k1BTX2gATjuNGVNPZQsDIGIS4MRDT2IlVJITIMQAcbSYEKDEACrkmBDAxAAJNJITMMQABQITMSRDT2VwEgNfUxADT/EjEANPcSEUQ09UmIDb8pXNBLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAALPcBsCg1BzT/NP40/TIGNPxCDCZIMQAxAIgNhCcJXM5LASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAAKosBsCg1BzT/NP40/TIGNPxCC+pJgQsMQAHKSDT2VwERNfU09SJbNfQ09SEEWzXzNPVXEAEXNfIxADT/EjEANPcSETXxNPIUNfA08jTxEDTwEUQxAIgNDFfQASJVJBI08BA08hFENPQiDUQ08yINRCcHSTXvMQCIDOpXxgZJNe1XAQU07SJVTQFJNe407wESNO4nChIRRDTxNPIQQQCdMQAxAIgMvicLXMZLASlLAlcAf2ZLAShLAld/UmZISDEAMQCIDJ8nCVzMSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAyAKDIDMQCIDHhXpSFJNe1XASA07SJVTTT0FlwANPMWXAghBK9cGFBcpUsBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAAoEAGwKDUHNP80/jT9MgY0/EIKwjEAMQCIDCGABgFpbml0ZFzGSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAv8KDTyFlEHCFBczEsBKUsCVwB/ZksBKEsCV39SZkhIMQAxAIgL1ygyAzEAiAvPV6UhSTXtVwEgNO0iVU009BZcADTzFlwIIQSvXBhQXKVLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAAKCIBsCg1BzT/NP40/TIGNPxCChlINPZXAWA19TT6IhJEMQA0/xIxADT3EhFEgAkAAAAAAAAldQGwKDUHNP80/jT9NPU0+iQIFlAyBhZQXJAyBjT8QgnWSSEEDEAD1EmBCQxAAHlINPZXASA19TT1STX0SZMhBQ5EIQhbNfM08zT+iAs+MQA0/xIxADT3EhFENPMiDUSACQAAAAAAACMCAbAoNQc0/zT+NP0hNDQDIR0lWDT0oIgLKl00AyEeJVgnDKCICx1ccDT0XCAyBjT8NPk0+DTzCBZcAFwAQglPSDT2VwEoNfWxIrIBIQqyEDQIshizNPVXACA19DT1JVs18zIDNPSICoxXpSFJNfFXASA08SJVTTXyNPM08iEEWws18TT8NPk0+DTxCBZcAFwANfA08TT+iAqKMQA09BNENPMiDUQ08iJbNe808zTvDkQxAIgKP1fQASJVJBJEJwc09IgKMFfGBkk17VcBBTTtIlVNATXugAVwYXJ0bDXtNO6AIHNNVYMdhR3m3vY6aMXYzIiZPq6gkwjBgyHZLG60/OoAEjTuNO0BEhFEIQivNPMWUDXsMQAxAIgJ2SgyAzEAiAnRVwAhSTXrVwEgNOsiVU007KCICgxQXABLASlLAlcAf2ZLAShLAld/UmZISDEAMQCICZ8oMgMxAIgJl1dCIUk161cBIDTrIlVNNOygiAnSUFxCSwEpSwJXAH9mSwEoSwJXf1JmSEg08jTxNPIhDFsIFlwQNPIhCFs08wgWXBg07zTzCRZcADXrNPRJiAlEKDTrUFylSwEpSwJXAH9mSwEoSwJXf1JmSEg06yJbIhJBAOI09EmICRuABgFjb21wbFzGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAACBhAbAoNQciNPSICOhXzAJJNepXAQEXNOoiVU1BABg0/zT+NP0hCzT7NOygiAkVXTIGNPBCB1g09EmICLgoMgM09IgIsFcAIUk16lcBIDTqIlVNNOyhiAjrUFwASwEpSwJXAH9mSwEoSwJXf1JmSEg09EmICH8oMgM09IgId1dCIUk16lcBIDTqIlVNNOyhiAiyUFxCSwEpSwJXAH9mSwEoSwJXf1JmSEg0/zT+NP0yBjTwQgbZNPRJiAg5KDTtUFzGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAACB7AbAoNQciNPSICApXzAJJNepXAQEXNOoiVU1BABg0/zT+NP0hCzT7NOygiAg3XTIGNPBCBno09EmIB9ooMgM09IgH0lcAIUk16lcBIDTqIlVNNOyhiAgNUFwASwEpSwJXAH9mSwEoSwJXf1JmSEg09EmIB6EoMgM09IgHmVdCIUk16lcBIDTqIlVNNOyhiAfUUFxCSwEpSwJXAH9mSwEoSwJXf1JmSEg0/zT+NP0yBjTwQgX7SDIDMQCIB1lXpSFJNfRXASA09CJVTUk19SEMW0k19CINRDT4NPQPRLEisgE09LISIQayEDEAshQ0/rIRszEAMQCIBx0oNPUhBK9cEFBcpUsBKUsCVwB/ZksBKEsCV39SZkhIgAkAAAAAAAAdwAGwKDUHNP80/jT9MgY0/DT5NPg09AkWXABcAEIFcEkjDEAClkkhDgxAAONJIQoMQACoSCcHSTX1MQCIBrdXxgZJNfNXAQU08yJVTQFJNfQ09QETNPQnChMQRDEAMQCIBpMoNPVQXMZLASlLAlcAf2ZLAShLAld/UmZISDEAMQCIBnIoMgMxAIgGalelIUk181cBIDTzIlVNIQSvXAAhBK9cCCEEr1wYUFylSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABs/AbAoNQc0/zT+NP0yBjT8QgS0SDT2VwEgNfUxADT/EjEANPcSEUSACQAAAAAAABi7AbAoNQc0/zT+NP009VwAMgY0/EIEgEkhBgxAARlIMQCIBdlX0AEiVSQSRDQDIRglWDIDpUQ0+zIDpUQyAzEAiAW6V0IhSTX0VwEgNPQiVU019TT7NPWnRDT1MgOlRDT1NP1XICCjiAXiNPuiiAXcSTX0SZMhBQ5EIQhbSTXzNPgORLEisgE087ISIQayEDEAshQ0/rIRszEAMQCIBV4oMgMxAIgFVldjIUk18lcBIDTyIlVNNPSgiAWRUFxjSwEpSwJXAH9mSwEoSwJXf1JmSEgxADEAiAUkKDIDMQCIBRxXhCFJNfJXASA08iJVTScMoIgFV1BchEsBKUsCVwB/ZksBKEsCV39SZkhIgAgAAAAAAAAWPDT0ULA09DUHNP80/jT9MgY0/DT5NPg08wkWXABcAEIDYEg09lcBIDX1NPU19DEANP8SMQA09xIRRCcHNPSIBKdXxgZJNfNXAQU08yJVTQGAIJVPK2UUdMISvagB9xR3WGJ5PssOUDNabUvT8WFJ1JgJEkQ09EmIBG4nC1zGSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABPAAbAoNQc0/zT+NP0yBjT8QgLUSSQMQACESSENDEAATUg09lcBIDX1MQA0/xIxADT3EhFENPVJiAQTKFzQSwEpSwJXAH9mSwEoSwJXf1JmSEiACQAAAAAAABFGAbAoNQc0/zT+NP0yBjT8QgJ6SDT2VwEkNfWACQAAAAAAAA7ZAbAoNQc0/zT+NP00AyErIQZYNPVQXEAyBjT8QgJKSDT2VwFgNfU09VcAIDX0NPVXICA18zT1V0AgNfI09DT/EjT0NPcSEUQ08jIDpUQ080mIA3soXNBLASlLAlcAf2ZLAShLAld/UmZISDTzSYgDXigyAzTziANWVwAhSTXxVwEgNPEiVU008qCIA5FQXABLASlLAlcAf2ZLAShLAld/UmZISDTzSYgDJSgyAzTziAMdV0IhSTXxVwEgNPEiVU008qCIA1hQXEJLASlLAlcAf2ZLAShLAld/UmZISIAJAAAAAAAADGoBsCg1BzT/NP40/SELNPs08qCIAyJdMgY0/EIBZSISRIHAmgyIAtixIrIBIQqyECKyGIAGBzEAMgkSsh4nCLIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/FepIDX7gASaMPkdNP9QNP4WUQcIUDT9UDT8FlA0+1CwIQmvNfqBoI0GiAJisSKyASKyEiEGshAyCrIUNPyyEbMxADT8NP0yA1CAKDIuMDJjb29wZXJhdGl2SWRjb29wZXJhdGl2SWRjb29wZXJhdGl2SWRQIQSvUDIDUIBwYWpkbmFlaW5hd2luZGlhZW5ndG5pZnJqd3JpdG5pcXdybmlyZWZpbmRpbmlnYWpkbmFlaW5hd2lkaWFlbmd0bmlpdG5pcXdybmlyZWZpbmRpbmlnZnVhZWJmdWJhd3VyAAAAAAAAAAAAAAAAAAAAAFA0/hZRBwhQMgNQMgNQIQSvUDIGNPpJVwARIQSvXABcAEIAADX/Nf41/TX8Nfs0/SELJVg1+jT9ITQlWDX5NP1XcCA1+DT9gYACJFgXNfc0/VeQcEk19iEHWzX1NP1XQChJNfRXAAQ18zT0VwQkNfI0/1cAEUk18SJbNfAhCK808BZQNe80/VcAIDXuNPs0/BZQNP1QNP9QNPpQNPlQNPhQNPcWUQcIUDT2UDT1FlA081A08lA08VA08BZQNO9QNO5QKUsBVwB/ZyhLAVd/f2crSwFX/n9nKksBgf0CITVYZycESwGB/AMhNVhnJwVLAYH7BIFhWGdIIzUBMgY1AkIALTEZIQ4SRLEisgEhCrIQNAiyGCEOshmzsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEJwY0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yIxNBJEITIxNRJEIjE2EkQhDTE3EkQiNQEiNQIiNQhC/6VJMRhhQAAFSCEPr4lJKWJLAShiUExIiTQASUokCDUAOAcyChJEOBAkEkQ4CBJEiTQASUpJJAg1ADgUMgoSRDgQIQYSRDgRTwISRDgSEkSJSRUlTAmvTFCJ`,
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
