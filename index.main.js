// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc6 = stdlib.T_Tuple([ctc4, ctc5]);
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc11 = stdlib.T_Tuple([ctc10, ctc7, ctc7]);
  const ctc12 = stdlib.T_Object({
    cumProceeds: ctc7,
    price: ctc7,
    qty: ctc7,
    sold: ctc7,
    status: ctc2
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc0,
    currDistr: ctc3,
    cv: ctc6,
    distrHis: ctc9,
    distrIndex: ctc7,
    distrNum: ctc3,
    docHash: ctc11,
    saleDetails: ctc12,
    saleLocked: ctc13,
    totBT: ctc3,
    totST: ctc3,
    wlArr: ctc14,
    wlIndex: ctc7
    });
  const ctc16 = stdlib.T_Tuple([ctc7, ctc7, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc3]);
  const ctc20 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc22 = stdlib.T_Struct([['qty', ctc7], ['price', ctc7], ['sold', ctc7], ['status', ctc2], ['cumProceeds', ctc7]]);
  const ctc23 = stdlib.T_Null;
  const ctc24 = stdlib.T_Data({
    None: ctc23,
    Some: ctc3
    });
  const ctc25 = stdlib.T_Data({
    None: ctc23,
    Some: ctc13
    });
  const ctc26 = stdlib.T_Data({
    None: ctc23,
    Some: ctc23
    });
  const ctc27 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc28 = stdlib.T_Data({
    None: ctc23,
    Some: ctc27
    });
  const map0_ctc = ctc24;
  
  const map1_ctc = ctc24;
  
  const map2_ctc = ctc24;
  
  const map3_ctc = ctc24;
  
  const map4_ctc = ctc24;
  
  const map5_ctc = ctc24;
  
  const map6_ctc = ctc25;
  
  const map7_ctc = ctc26;
  
  const map8_ctc = ctc28;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async (_v3336 ) => {
                const v3336 = stdlib.protect(ctc0, _v3336, null);
              
              const v3337 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3336), null);
              const v3338 = stdlib.fromSome(v3337, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3339 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3336), null);
              const v3340 = stdlib.fromSome(v3339, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3341 = [v3338, v3340];
              
              return v3341;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc18
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              
              return v3335;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              const v3334 = [v3331, v3332, v3333];
              
              return v3334;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc19
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async (_v3343 ) => {
                const v3343 = stdlib.protect(ctc0, _v3343, null);
              
              const v3344 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v3343), null);
              const v3345 = stdlib.fromSome(v3344, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3346 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v3343), null);
              const v3347 = stdlib.fromSome(v3346, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3348 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v3343), null);
              const v3349 = stdlib.fromSome(v3348, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3350 = [v3345, v3347, v3349];
              
              return v3350;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc19
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              const v3369 = [v3368, v2953];
              
              return v3369;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc20
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              const v3371 = [v2949, v3370];
              
              return v3371;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc21
        },
      vCurrSale: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              const v3381 = {
                cumProceeds: v3380,
                price: v3377,
                qty: v3376,
                sold: v3378,
                status: v3379
                };
              
              return v3381;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc22
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              
              return v3357;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      vOptedIn: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async (_v3372 ) => {
                const v3372 = stdlib.protect(ctc0, _v3372, null);
              
              const v3373 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v3372), null);
              const v3374 = stdlib.fromSome(v3373, false);
              
              return v3374;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async () => {
              
              const v3365 = [v3362, v3364];
              
              return v3365;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            return (await ((async (_v3352 ) => {
                const v3352 = stdlib.protect(ctc0, _v3352, null);
              
              const v3353 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v3352), null);
              let v3354;
              switch (v3353[0]) {
                case 'None': {
                  const v3355 = v3353[1];
                  v3354 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3356 = v3353[1];
                  v3354 = true;
                  
                  break;
                  }
                }
              
              return v3354;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      wlMembers: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = svs;
            stdlib.assert(false, 'illegal view')
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc14
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc15, ctc17, ctc3, ctc3, ctc3, ctc13, ctc11, ctc7, ctc6, ctc4, ctc5, ctc16, ctc7, ctc3, ctc0, ctc12, ctc7, ctc7, ctc7, ctc2, ctc7]
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc4, ctc5, ctc8]);
  return {
    mapDataTy: ctc9
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Object({
    authorizedST: ctc1,
    bT: ctc9,
    companyName: ctc10,
    lockSale: ctc3,
    managerAddr: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc11]);
  const ctc17 = stdlib.T_Tuple([ctc6]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc20 = stdlib.T_Tuple([ctc1]);
  const ctc21 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc22 = stdlib.T_Tuple([ctc21]);
  const ctc23 = stdlib.T_Data({
    aST0_709: ctc13,
    addCoopId0_709: ctc15,
    addWL0_709: ctc16,
    buyOS0_709: ctc17,
    cBT0_709: ctc18,
    cCM0_709: ctc16,
    claimOSpr0_709: ctc18,
    createOS0_709: ctc19,
    dBT0_709: ctc20,
    docHash0_709: ctc22,
    endOS0_709: ctc18,
    optIn0_709: ctc18,
    remWL0_709: ctc16
    });
  const ctc24 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc25 = stdlib.T_Tuple([ctc24]);
  const ctc26 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc24], ['cumProceeds', ctc6]]);
  const ctc27 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc28 = stdlib.T_Tuple([ctc27, ctc14]);
  const ctc29 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc30 = stdlib.T_Tuple([ctc21, ctc6, ctc6]);
  const ctc31 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc24
    });
  const ctc32 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc33 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc28,
    distrHis: ctc29,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc30,
    saleDetails: ctc31,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc32,
    wlIndex: ctc6
    });
  const ctc34 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc35 = stdlib.T_Array(ctc34, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc
    });
  
  
  const v2930 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2931 = [v2930];
  const v2937 = 'I have deployed';
  const v2938 = stdlib.protect(ctc12, await interact.getParams(v2937), {
    at: './index.rsh:89:103:application',
    fs: ['at ./index.rsh:88:17:application call to [unknown function] (defined at: ./index.rsh:88:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2939 = v2938.authorizedST;
  const v2940 = v2938.bT;
  const v2941 = v2938.companyName;
  const v2942 = v2938.lockSale;
  const v2943 = v2938.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2942, v2943, v2940, v2939],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10, ctc3, ctc11, ctc9, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v2950, v2951, v2952, v2953, v2954], secs: v2956, time: v2955, didSend: v42, from: v2949 } = txn1;
      
      const v2957 = v2931[stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '0')];
      const v2959 = v2957[stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '1')];
      const v2960 = v2957[stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '2')];
      const v2961 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2959, v2960];
      const v2962 = stdlib.Array_set(v2931, stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '0'), v2961);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2953
        });
      ;
      
      const v2967 = [v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949];
      const v2969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3169 = [v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969];
      const v3170 = '1.04';
      const v3171 = 'cooperativIdcooperativIdcooperativId';
      const v3172 = [v3170, v3171];
      const v3274 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v3275 = [v3274, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3276 = 'ended';
      const v3277 = {
        cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        price: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        status: v3276
        };
      const v3279 = {
        ctcMan: v2952,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v3172,
        distrHis: v3169,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v3275,
        saleDetails: v3277,
        saleLocked: v2951,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlArr: v2967,
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3280 = v3279;
      const v3281 = v2955;
      const v3283 = v2962;
      
      if (await (async () => {
        
        return true;})()) {
        const v3331 = v3280.totST;
        const v3332 = v3280.totBT;
        const v3333 = v3280.distrNum;
        const v3335 = v3280.saleLocked;
        const v3357 = v3280.docHash;
        const v3359 = v3357[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
        const v3361 = v3280.cv;
        const v3362 = v3361[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
        const v3364 = v3361[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
        const v3366 = v3283[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
        const v3367 = v3366[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
        const v3368 = stdlib.cast("UInt", "UInt256", v3367, false);
        const v3370 = v3280.ctcMan;
        const v3375 = v3280.saleDetails;
        const v3376 = v3375.qty;
        const v3377 = v3375.price;
        const v3378 = v3375.sold;
        const v3379 = v3375.status;
        const v3380 = v3375.cumProceeds;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2953
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
    tys: [ctc10, ctc3, ctc11, ctc9, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2950, v2951, v2952, v2953, v2954], secs: v2956, time: v2955, didSend: v42, from: v2949 } = txn1;
  const v2957 = v2931[stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '0')];
  const v2959 = v2957[stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '1')];
  const v2960 = v2957[stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '2')];
  const v2961 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2959, v2960];
  const v2962 = stdlib.Array_set(v2931, stdlib.checkedBigNumberify('./index.rsh:93:13:dot', stdlib.UInt_max, '0'), v2961);
  ;
  ;
  const v2965 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v2965), {
    at: './index.rsh:95:31:application',
    fs: ['at ./index.rsh:95:31:application call to [unknown function] (defined at: ./index.rsh:95:31:function exp)', 'at ./index.rsh:95:31:application call to "liftedInteract" (defined at: ./index.rsh:95:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v2967 = [v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949, v2949];
  const v2969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3169 = [v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969, v2969];
  const v3170 = '1.04';
  const v3171 = 'cooperativIdcooperativIdcooperativId';
  const v3172 = [v3170, v3171];
  const v3274 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v3275 = [v3274, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3276 = 'ended';
  const v3277 = {
    cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    price: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    status: v3276
    };
  const v3279 = {
    ctcMan: v2952,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v3172,
    distrHis: v3169,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v3275,
    saleDetails: v3277,
    saleLocked: v2951,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlArr: v2967,
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3280 = v3279;
  let v3281 = v2955;
  let v3283 = v2962;
  
  while (await (async () => {
    
    return true;})()) {
    const v3331 = v3280.totST;
    const v3332 = v3280.totBT;
    const v3333 = v3280.distrNum;
    const v3335 = v3280.saleLocked;
    const v3357 = v3280.docHash;
    const v3359 = v3357[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
    const v3361 = v3280.cv;
    const v3362 = v3361[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
    const v3364 = v3361[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
    const v3366 = v3283[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
    const v3367 = v3366[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
    const v3368 = stdlib.cast("UInt", "UInt256", v3367, false);
    const v3370 = v3280.ctcMan;
    const v3375 = v3280.saleDetails;
    const v3376 = v3375.qty;
    const v3377 = v3375.price;
    const v3378 = v3375.sold;
    const v3379 = v3375.status;
    const v3380 = v3375.cumProceeds;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc23],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380],
        evt_cnt: 0,
        funcNum: 3,
        lct: v3281,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:450:21:decimal', stdlib.UInt_max, '0'), []],
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
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          
          const {data: [], secs: v13225, time: v13224, didSend: v2499, from: v13223 } = txn3;
          
          ;
          const cv3280 = v3280;
          const cv3281 = v13224;
          const cv3283 = v3283;
          
          await (async () => {
            const v3280 = cv3280;
            const v3281 = cv3281;
            const v3283 = cv3283;
            
            if (await (async () => {
              
              return true;})()) {
              const v3331 = v3280.totST;
              const v3332 = v3280.totBT;
              const v3333 = v3280.distrNum;
              const v3335 = v3280.saleLocked;
              const v3357 = v3280.docHash;
              const v3359 = v3357[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
              const v3361 = v3280.cv;
              const v3362 = v3361[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
              const v3364 = v3361[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
              const v3366 = v3283[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
              const v3367 = v3366[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
              const v3368 = stdlib.cast("UInt", "UInt256", v3367, false);
              const v3370 = v3280.ctcMan;
              const v3375 = v3280.saleDetails;
              const v3376 = v3375.qty;
              const v3377 = v3375.price;
              const v3378 = v3375.sold;
              const v3379 = v3375.status;
              const v3380 = v3375.cumProceeds;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2953
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
        tys: [ctc11, ctc9, ctc24, ctc33, ctc35, ctc1, ctc1, ctc1, ctc3, ctc30, ctc6, ctc28, ctc27, ctc14, ctc34, ctc6, ctc1, ctc11, ctc31, ctc6, ctc6, ctc6, ctc24, ctc6],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v13225, time: v13224, didSend: v2499, from: v13223 } = txn3;
      ;
      const v13226 = stdlib.addressEq(v2949, v13223);
      stdlib.assert(v13226, {
        at: './index.rsh:450:21:dot',
        fs: ['at ./index.rsh:449:40:application call to [unknown function] (defined at: ./index.rsh:449:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv3280 = v3280;
      const cv3281 = v13224;
      const cv3283 = v3283;
      
      v3280 = cv3280;
      v3281 = cv3281;
      v3283 = cv3283;
      
      continue;
      }
    else {
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn2;
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v3910 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v3911 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v3912 = [v3367, v3910, v3911];
          const v3913 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v3912);
          ;
          const v3915 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '0')];
          const v3916 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '1')];
          const v3917 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '2')];
          const v3918 = stdlib.addressEq(v3915, v2949);
          const v3920 = stdlib.addressEq(v3915, v3370);
          const v3921 = v3918 ? true : v3920;
          stdlib.assert(v3921, {
            at: './index.rsh:331:24:application',
            fs: ['at ./index.rsh:330:13:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3922 = stdlib.gt256(v3917, stdlib.checkedBigNumberify('./index.rsh:332:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3922, {
            at: './index.rsh:332:24:application',
            fs: ['at ./index.rsh:330:13:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v3916, null);
          const v3924 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3916), null);
          const v3925 = stdlib.fromSome(v3924, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3926 = stdlib.add256(v3925, v3917);
          await stdlib.mapSet(map0, v3916, v3926);
          const v3927 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3916), null);
          const v3928 = stdlib.fromSome(v3927, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3929 = stdlib.add256(v3928, v3917);
          await stdlib.mapSet(map3, v3916, v3929);
          const v3931 = stdlib.add256(v3331, v3917);
          const v3932 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3916), null);
          const v3934 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3936 = stdlib.fromSome(v3932, v3934);
          const v3937 = ['None', null];
          const v3938 = await stdlib.Array_asyncReduce([v3936], v3937, async([v3940], v3939, v3941) => {
            let v3942;
            switch (v3939[0]) {
              case 'None': {
                const v3943 = v3939[1];
                v3942 = true;
                
                break;
                }
              case 'Some': {
                const v3944 = v3939[1];
                v3942 = false;
                
                break;
                }
              }
            const v3945 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:341:53:decimal', stdlib.UInt_max, '0'), v3940);
            const v3946 = v3942 ? v3945 : false;
            const v3947 = ['Some', v3941];
            const v3948 = v3946 ? v3947 : v3939;
            
            return v3948;})
          const v3949 = stdlib.fromSome(v3938, stdlib.checkedBigNumberify('./index.rsh:100:41:decimal', stdlib.UInt_max, '0'));
          const v3950 = stdlib.cast("UInt256", "UInt", v3917, false);
          const v3952 = stdlib.Array_set(v3936, v3949, v3950);
          await stdlib.mapSet(map8, v3916, v3952);
          const v3953 = true;
          await txn2.getOutput('aST', 'v3953', ctc3, v3953);
          const v3963 = v3280.currDistr;
          const v3965 = v3280.distrHis;
          const v3966 = v3280.distrIndex;
          const v3973 = v3280.wlArr;
          const v3974 = v3280.wlIndex;
          const v3975 = {
            ctcMan: v3370,
            currDistr: v3963,
            cv: v3361,
            distrHis: v3965,
            distrIndex: v3966,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3931,
            wlArr: v3973,
            wlIndex: v3974
            };
          const cv3280 = v3975;
          const cv3281 = v3783;
          const cv3283 = v3913;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v4636 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v4637 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v4638 = [v3367, v4636, v4637];
          const v4639 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v4638);
          ;
          const v4706 = v4511[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
          const v4710 = v3280.currDistr;
          const v4712 = v3280.distrHis;
          const v4713 = v3280.distrIndex;
          const v4720 = v3280.wlArr;
          const v4721 = v3280.wlIndex;
          const v4722 = [v3362, v4706];
          const v4723 = {
            ctcMan: v3370,
            currDistr: v4710,
            cv: v4722,
            distrHis: v4712,
            distrIndex: v4713,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v4720,
            wlIndex: v4721
            };
          const v4724 = true;
          await txn2.getOutput('addCoopId', 'v4724', ctc3, v4724);
          const cv3280 = v4723;
          const cv3281 = v3783;
          const cv3283 = v4639;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v5362 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v5363 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v5364 = [v3367, v5362, v5363];
          const v5365 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v5364);
          ;
          const v5463 = v5237[stdlib.checkedBigNumberify('./index.rsh:275:13:spread', stdlib.UInt_max, '0')];
          const v5464 = stdlib.addressEq(v3781, v2949);
          const v5466 = stdlib.addressEq(v3781, v3370);
          const v5467 = v5464 ? true : v5466;
          stdlib.assert(v5467, {
            at: './index.rsh:286:24:application',
            fs: ['at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v5463, null);
          const v5469 = v3280.wlIndex;
          const v5470 = stdlib.ge(v5469, stdlib.checkedBigNumberify('./index.rsh:291:80:decimal', stdlib.UInt_max, '24'));
          const v5472 = stdlib.add(v5469, stdlib.checkedBigNumberify('./index.rsh:291:105:decimal', stdlib.UInt_max, '1'));
          const v5473 = v5470 ? stdlib.checkedBigNumberify('./index.rsh:291:85:decimal', stdlib.UInt_max, '0') : v5472;
          const v5475 = v3280.currDistr;
          const v5477 = v3280.distrHis;
          const v5478 = v3280.distrIndex;
          const v5485 = v3280.wlArr;
          const v5495 = stdlib.Array_set(v5485, v5473, v5463);
          const v5496 = {
            ctcMan: v3370,
            currDistr: v5475,
            cv: v3361,
            distrHis: v5477,
            distrIndex: v5478,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v5495,
            wlIndex: v5473
            };
          const v5497 = true;
          await txn2.getOutput('addWL', 'v5497', ctc3, v5497);
          const cv3280 = v5496;
          const cv3281 = v3783;
          const cv3283 = v5365;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          undefined /* setApiDetails */;
          const v5994 = v5963[stdlib.checkedBigNumberify('./index.rsh:197:13:spread', stdlib.UInt_max, '0')];
          const v5997 = stdlib.mul(v3377, v5994);
          ;
          const v6085 = stdlib.add(v3367, v5997);
          const v6088 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v6089 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v6090 = [v6085, v6088, v6089];
          const v6091 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v6090);
          ;
          const v6237 = stdlib.gt(v5994, stdlib.checkedBigNumberify('./index.rsh:211:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6237, {
            at: './index.rsh:211:24:application',
            fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v6240 = 'activ';
          const v6241 = stdlib.digest(ctc25, [v3379]);
          const v6243 = stdlib.digest(ctc25, [v6240]);
          const v6244 = stdlib.digestEq(v6241, v6243);
          stdlib.assert(v6244, {
            at: './index.rsh:212:24:application',
            fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
            msg: 'no sale is active',
            who: 'Creator'
            });
          const v6247 = stdlib.ge(v3376, v5994);
          stdlib.assert(v6247, {
            at: './index.rsh:213:24:application',
            fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
            msg: 'do not try to buy more than available',
            who: 'Creator'
            });
          const v6248 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3781), null);
          let v6249;
          switch (v6248[0]) {
            case 'None': {
              const v6250 = v6248[1];
              v6249 = false;
              
              break;
              }
            case 'Some': {
              const v6251 = v6248[1];
              v6249 = true;
              
              break;
              }
            }
          stdlib.assert(v6249, {
            at: './index.rsh:214:24:application',
            fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
            msg: 'you must be whitelisted to buy',
            who: 'Creator'
            });
          const v6252 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3781), null);
          const v6253 = stdlib.fromSome(v6252, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6254 = stdlib.cast("UInt", "UInt256", v5994, false);
          const v6255 = stdlib.add256(v6253, v6254);
          await stdlib.mapSet(map0, v3781, v6255);
          const v6256 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3781), null);
          const v6257 = stdlib.fromSome(v6256, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6259 = stdlib.add256(v6257, v6254);
          await stdlib.mapSet(map3, v3781, v6259);
          const v6262 = stdlib.add256(v3331, v6254);
          const v6263 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3781), null);
          const v6265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6267 = stdlib.fromSome(v6263, v6265);
          const v6268 = ['None', null];
          const v6269 = await stdlib.Array_asyncReduce([v6267], v6268, async([v6271], v6270, v6272) => {
            let v6273;
            switch (v6270[0]) {
              case 'None': {
                const v6274 = v6270[1];
                v6273 = true;
                
                break;
                }
              case 'Some': {
                const v6275 = v6270[1];
                v6273 = false;
                
                break;
                }
              }
            const v6276 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:221:53:decimal', stdlib.UInt_max, '0'), v6271);
            const v6277 = v6273 ? v6276 : false;
            const v6278 = ['Some', v6272];
            const v6279 = v6277 ? v6278 : v6270;
            
            return v6279;})
          const v6280 = stdlib.fromSome(v6269, stdlib.checkedBigNumberify('./index.rsh:100:41:decimal', stdlib.UInt_max, '0'));
          const v6282 = stdlib.Array_set(v6267, v6280, v5994);
          await stdlib.mapSet(map8, v3781, v6282);
          const v6286 = stdlib.sub(v3376, v5994);
          const v6295 = stdlib.add(v3378, v5994);
          const v6299 = stdlib.mul(v5994, v3377);
          const v6300 = stdlib.add(v3380, v6299);
          const v6301 = {
            cumProceeds: v6300,
            price: v3377,
            qty: v6286,
            sold: v6295,
            status: v3379
            };
          const v6303 = v3280.currDistr;
          const v6305 = v3280.distrHis;
          const v6306 = v3280.distrIndex;
          const v6313 = v3280.wlArr;
          const v6314 = v3280.wlIndex;
          const v6318 = {
            ctcMan: v3370,
            currDistr: v6303,
            cv: v3361,
            distrHis: v6305,
            distrIndex: v6306,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v6301,
            saleLocked: v3335,
            totBT: v3332,
            totST: v6262,
            wlArr: v6313,
            wlIndex: v6314
            };
          const v6319 = {
            cumProceeds: v6300,
            price: v3377,
            qty: v6286,
            sold: v6295,
            status: v3379
            };
          await txn2.getOutput('buyOS', 'v6319', ctc26, v6319);
          const cv3280 = v6318;
          const cv3281 = v3783;
          const cv3283 = v6091;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v6814 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v6815 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v6816 = [v3367, v6814, v6815];
          const v6817 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v6816);
          ;
          const v7063 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3781), null);
          let v7064;
          switch (v7063[0]) {
            case 'None': {
              const v7065 = v7063[1];
              v7064 = false;
              
              break;
              }
            case 'Some': {
              const v7066 = v7063[1];
              v7064 = true;
              
              break;
              }
            }
          stdlib.assert(v7064, {
            at: './index.rsh:415:24:application',
            fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v7067 = v6817[stdlib.checkedBigNumberify('./index.rsh:417:40:application', stdlib.UInt_max, '0')];
          const v7068 = v7067[stdlib.checkedBigNumberify('./index.rsh:417:40:application', stdlib.UInt_max, '0')];
          const v7069 = stdlib.cast("UInt", "UInt256", v7068, false);
          const v7070 = stdlib.gt256(v7069, stdlib.checkedBigNumberify('./index.rsh:417:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7070, {
            at: './index.rsh:417:24:application',
            fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v7072 = stdlib.gt256(v3331, stdlib.checkedBigNumberify('./index.rsh:418:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7072, {
            at: './index.rsh:418:24:application',
            fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v7074 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3781), null);
          const v7075 = stdlib.fromSome(v7074, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7076 = stdlib.ge256(v3331, v7075);
          stdlib.assert(v7076, {
            at: './index.rsh:419:24:application',
            fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v7079 = stdlib.gt256(v7075, stdlib.checkedBigNumberify('./index.rsh:420:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7079, {
            at: './index.rsh:420:24:application',
            fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v7082 = v3280.currDistr;
          const v7083 = stdlib.mul256(v7075, v7082);
          const v7085 = stdlib.div256(v7083, v3331);
          const v7086 = stdlib.cast("UInt256", "UInt", v7085, false);
          const v7089 = stdlib.le(v7086, v7068);
          stdlib.assert(v7089, {
            at: './index.rsh:422:24:application',
            fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v7096 = stdlib.sub(v7068, v7086);
          const v7099 = v7067[stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '1')];
          const v7100 = v7067[stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '2')];
          const v7101 = [v7096, v7099, v7100];
          const v7102 = stdlib.Array_set(v6817, stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '0'), v7101);
          ;
          const v7103 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3781), null);
          const v7104 = stdlib.fromSome(v7103, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7105 = stdlib.add256(v7104, v7085);
          await stdlib.mapSet(map4, v3781, v7105);
          const v7106 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3781), null);
          const v7107 = stdlib.fromSome(v7106, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7108 = stdlib.add256(v7107, stdlib.checkedBigNumberify('./index.rsh:426:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v3781, v7108);
          await txn2.getOutput('cBT', 'v7085', ctc1, v7085);
          const cv3280 = v3280;
          const cv3281 = v3783;
          const cv3283 = v7102;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v7540 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v7541 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v7542 = [v3367, v7540, v7541];
          const v7543 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v7542);
          ;
          const v7842 = v7415[stdlib.checkedBigNumberify('./index.rsh:431:13:spread', stdlib.UInt_max, '0')];
          const v7843 = stdlib.addressEq(v3781, v2949);
          const v7845 = stdlib.addressEq(v3781, v3370);
          const v7846 = v7843 ? true : v7845;
          stdlib.assert(v7846, {
            at: './index.rsh:442:24:application',
            fs: ['at ./index.rsh:441:13:application call to [unknown function] (defined at: ./index.rsh:441:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v7847 = true;
          await txn2.getOutput('cCM', 'v7847', ctc3, v7847);
          const v7855 = v3280.currDistr;
          const v7857 = v3280.distrHis;
          const v7858 = v3280.distrIndex;
          const v7865 = v3280.wlArr;
          const v7866 = v3280.wlIndex;
          const v7867 = {
            ctcMan: v7842,
            currDistr: v7855,
            cv: v3361,
            distrHis: v7857,
            distrIndex: v7858,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v7865,
            wlIndex: v7866
            };
          const cv3280 = v7867;
          const cv3281 = v3783;
          const cv3283 = v7543;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v8266 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v8267 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v8268 = [v3367, v8266, v8267];
          const v8269 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v8268);
          ;
          const v8598 = stdlib.addressEq(v3781, v2949);
          const v8600 = stdlib.addressEq(v3781, v3370);
          const v8601 = v8598 ? true : v8600;
          stdlib.assert(v8601, {
            at: './index.rsh:244:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v8604 = stdlib.gt(v3380, stdlib.checkedBigNumberify('./index.rsh:245:57:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8604, {
            at: './index.rsh:245:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: 'available proceeds must be greater than 0',
            who: 'Creator'
            });
          const v8605 = v8269[stdlib.checkedBigNumberify('./index.rsh:246:32:application', stdlib.UInt_max, '0')];
          const v8606 = v8605[stdlib.checkedBigNumberify('./index.rsh:246:32:application', stdlib.UInt_max, '0')];
          const v8609 = stdlib.ge(v8606, v3380);
          stdlib.assert(v8609, {
            at: './index.rsh:246:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v8617 = stdlib.sub(v8606, v3380);
          const v8620 = v8605[stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '1')];
          const v8621 = v8605[stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '2')];
          const v8622 = [v8617, v8620, v8621];
          const v8623 = stdlib.Array_set(v8269, stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '0'), v8622);
          ;
          const v8630 = {
            cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            price: v3377,
            qty: v3376,
            sold: v3378,
            status: v3379
            };
          const v8632 = v3280.currDistr;
          const v8634 = v3280.distrHis;
          const v8635 = v3280.distrIndex;
          const v8642 = v3280.wlArr;
          const v8643 = v3280.wlIndex;
          const v8645 = {
            ctcMan: v3370,
            currDistr: v8632,
            cv: v3361,
            distrHis: v8634,
            distrIndex: v8635,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v8630,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v8642,
            wlIndex: v8643
            };
          const v8646 = true;
          await txn2.getOutput('claimOSpr', 'v8646', ctc3, v8646);
          const cv3280 = v8645;
          const cv3281 = v3783;
          const cv3283 = v8623;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v8992 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v8993 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v8994 = [v3367, v8992, v8993];
          const v8995 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v8994);
          ;
          const v9384 = v8867[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '0')];
          const v9385 = v8867[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '1')];
          const v9386 = stdlib.addressEq(v3781, v2949);
          const v9388 = stdlib.addressEq(v3781, v3370);
          const v9389 = v9386 ? true : v9388;
          stdlib.assert(v9389, {
            at: './index.rsh:166:24:application',
            fs: ['at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v9390 = stdlib.gt(v9384, stdlib.checkedBigNumberify('./index.rsh:167:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9390, {
            at: './index.rsh:167:24:application',
            fs: ['at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v9391 = stdlib.gt(v9385, stdlib.checkedBigNumberify('./index.rsh:168:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9391, {
            at: './index.rsh:168:24:application',
            fs: ['at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v9398 = 'activ';
          const v9403 = {
            cumProceeds: v3380,
            price: v9385,
            qty: v9384,
            sold: v3378,
            status: v9398
            };
          const v9405 = v3280.currDistr;
          const v9407 = v3280.distrHis;
          const v9408 = v3280.distrIndex;
          const v9415 = v3280.wlArr;
          const v9416 = v3280.wlIndex;
          const v9419 = {
            ctcMan: v3370,
            currDistr: v9405,
            cv: v3361,
            distrHis: v9407,
            distrIndex: v9408,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v9403,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v9415,
            wlIndex: v9416
            };
          const v9421 = {
            cumProceeds: v3380,
            price: v9385,
            qty: v9384,
            sold: v3378,
            status: v9398
            };
          await txn2.getOutput('createOS', 'v9421', ctc26, v9421);
          const cv3280 = v9419;
          const cv3281 = v3783;
          const cv3283 = v8995;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          undefined /* setApiDetails */;
          const v9666 = v9593[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
          const v9667 = stdlib.cast("UInt256", "UInt", v9666, false);
          ;
          const v9715 = stdlib.add(v3367, v9667);
          const v9718 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v9719 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v9720 = [v9715, v9718, v9719];
          const v9721 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v9720);
          ;
          const v10169 = stdlib.addressEq(v3781, v2949);
          const v10171 = stdlib.addressEq(v3781, v3370);
          const v10172 = v10169 ? true : v10171;
          stdlib.assert(v10172, {
            at: './index.rsh:387:24:application',
            fs: ['at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v10174 = stdlib.gt(v9667, stdlib.checkedBigNumberify('./index.rsh:388:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10174, {
            at: './index.rsh:388:24:application',
            fs: ['at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v10176 = stdlib.add256(v3332, v9666);
          const v10180 = v3280.distrHis;
          const v10181 = v3280.distrIndex;
          const v10188 = v3280.wlArr;
          const v10189 = v3280.wlIndex;
          const v10192 = stdlib.add256(v3333, stdlib.checkedBigNumberify('./index.rsh:391:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v10194 = {
            ctcMan: v3370,
            currDistr: v9666,
            cv: v3361,
            distrHis: v10180,
            distrIndex: v10181,
            distrNum: v10192,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v10176,
            totST: v3331,
            wlArr: v10188,
            wlIndex: v10189
            };
          const v10195 = true;
          await txn2.getOutput('dBT', 'v10195', ctc3, v10195);
          const cv3280 = v10194;
          const cv3281 = v3783;
          const cv3283 = v9721;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v10444 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v10445 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v10446 = [v3367, v10444, v10445];
          const v10447 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v10446);
          ;
          const v10932 = v10319[stdlib.checkedBigNumberify('./index.rsh:254:13:spread', stdlib.UInt_max, '0')];
          const v10935 = stdlib.eq(v3359, stdlib.checkedBigNumberify('./index.rsh:268:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10935, {
            at: './index.rsh:268:24:application',
            fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v10936 = stdlib.addressEq(v3781, v2949);
          const v10938 = stdlib.addressEq(v3781, v3370);
          const v10939 = v10936 ? true : v10938;
          stdlib.assert(v10939, {
            at: './index.rsh:269:24:application',
            fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v10940 = stdlib.add(v3359, stdlib.checkedBigNumberify('./index.rsh:270:76:decimal', stdlib.UInt_max, '1'));
          const v10943 = v3280.currDistr;
          const v10945 = v3280.distrHis;
          const v10946 = v3280.distrIndex;
          const v10953 = v3280.wlArr;
          const v10954 = v3280.wlIndex;
          const v10955 = [v10932, v10940, v3783];
          const v10956 = {
            ctcMan: v3370,
            currDistr: v10943,
            cv: v3361,
            distrHis: v10945,
            distrIndex: v10946,
            distrNum: v3333,
            docHash: v10955,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v10953,
            wlIndex: v10954
            };
          const v10957 = true;
          await txn2.getOutput('docHash', 'v10957', ctc3, v10957);
          const cv3280 = v10956;
          const cv3281 = v3783;
          const cv3283 = v10447;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v11170 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v11171 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v11172 = [v3367, v11170, v11171];
          const v11173 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v11172);
          ;
          const v11696 = stdlib.addressEq(v3781, v2949);
          const v11698 = stdlib.addressEq(v3781, v3370);
          const v11699 = v11696 ? true : v11698;
          stdlib.assert(v11699, {
            at: './index.rsh:187:24:application',
            fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v11702 = 'activ';
          const v11703 = stdlib.digest(ctc25, [v3379]);
          const v11705 = stdlib.digest(ctc25, [v11702]);
          const v11706 = stdlib.digestEq(v11703, v11705);
          stdlib.assert(v11706, {
            at: './index.rsh:188:24:application',
            fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
            msg: 'sale must be active',
            who: 'Creator'
            });
          const v11718 = {
            cumProceeds: v3380,
            price: v3377,
            qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            status: v3276
            };
          const v11720 = v3280.currDistr;
          const v11722 = v3280.distrHis;
          const v11723 = v3280.distrIndex;
          const v11730 = v3280.wlArr;
          const v11731 = v3280.wlIndex;
          const v11734 = {
            ctcMan: v3370,
            currDistr: v11720,
            cv: v3361,
            distrHis: v11722,
            distrIndex: v11723,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v11718,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v11730,
            wlIndex: v11731
            };
          const v11735 = true;
          await txn2.getOutput('endOS', 'v11735', ctc3, v11735);
          const cv3280 = v11734;
          const cv3281 = v3783;
          const cv3283 = v11173;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v11896 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v11897 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v11898 = [v3367, v11896, v11897];
          const v11899 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v11898);
          ;
          await stdlib.mapSet(map6, v3781, true);
          const v12475 = true;
          await txn2.getOutput('optIn', 'v12475', ctc3, v12475);
          const cv3280 = v3280;
          const cv3281 = v3783;
          const cv3283 = v11899;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
          continue;
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          undefined /* setApiDetails */;
          ;
          const v12622 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v12623 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v12624 = [v3367, v12622, v12623];
          const v12625 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v12624);
          ;
          const v13209 = v12497[stdlib.checkedBigNumberify('./index.rsh:300:13:spread', stdlib.UInt_max, '0')];
          const v13210 = stdlib.addressEq(v3781, v2949);
          const v13212 = stdlib.addressEq(v3781, v3370);
          const v13213 = v13210 ? true : v13212;
          stdlib.assert(v13213, {
            at: './index.rsh:311:24:application',
            fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v13209, undefined /* Nothing */);
          const v13215 = true;
          await txn2.getOutput('remWL', 'v13215', ctc3, v13215);
          const cv3280 = v3280;
          const cv3281 = v3783;
          const cv3283 = v12625;
          
          v3280 = cv3280;
          v3281 = cv3281;
          v3283 = cv3283;
          
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc25 = stdlib.T_Tuple([ctc13]);
  const ctc26 = stdlib.T_Tuple([ctc9]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc24,
    addCoopId0_709: ctc25,
    addWL0_709: ctc26,
    buyOS0_709: ctc27,
    cBT0_709: ctc28,
    cCM0_709: ctc26,
    claimOSpr0_709: ctc28,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc28,
    optIn0_709: ctc28,
    remWL0_709: ctc26
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3529 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:322:13:application call to [unknown function] (defined at: ./index.rsh:322:13:function exp)', 'at ./index.rsh:122:35:application call to "runaST0_709" (defined at: ./index.rsh:319:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v3530 = v3529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3532 = v3529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3537 = stdlib.addressEq(v3530, v2949);
  const v3539 = stdlib.addressEq(v3530, v3370);
  const v3540 = v3537 ? true : v3539;
  stdlib.assert(v3540, {
    at: './index.rsh:323:23:application',
    fs: ['at ./index.rsh:322:13:application call to [unknown function] (defined at: ./index.rsh:322:29:function exp)', 'at ./index.rsh:322:13:application call to [unknown function] (defined at: ./index.rsh:322:13:function exp)', 'at ./index.rsh:122:35:application call to "runaST0_709" (defined at: ./index.rsh:319:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v3541 = stdlib.gt256(v3532, stdlib.checkedBigNumberify('./index.rsh:324:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3541, {
    at: './index.rsh:324:23:application',
    fs: ['at ./index.rsh:322:13:application call to [unknown function] (defined at: ./index.rsh:322:29:function exp)', 'at ./index.rsh:322:13:application call to [unknown function] (defined at: ./index.rsh:322:13:function exp)', 'at ./index.rsh:122:35:application call to "runaST0_709" (defined at: ./index.rsh:319:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v3547 = ['aST0_709', v3529];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3547],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:328:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:328:34:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v3910 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v3911 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v3912 = [v3367, v3910, v3911];
          const v3913 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v3912);
          ;
          const v3916 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '1')];
          const v3917 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 7, v3916, null);
          const v3924 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3916), null);
          const v3925 = stdlib.fromSome(v3924, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3926 = stdlib.add256(v3925, v3917);
          await stdlib.simMapSet(sim_r, 0, v3916, v3926);
          const v3927 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3916), null);
          const v3928 = stdlib.fromSome(v3927, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3929 = stdlib.add256(v3928, v3917);
          await stdlib.simMapSet(sim_r, 3, v3916, v3929);
          const v3931 = stdlib.add256(v3331, v3917);
          const v3932 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v3916), null);
          const v3934 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3936 = stdlib.fromSome(v3932, v3934);
          const v3937 = ['None', null];
          const v3938 = await stdlib.Array_asyncReduce([v3936], v3937, async([v3940], v3939, v3941) => {
            let v3942;
            switch (v3939[0]) {
              case 'None': {
                const v3943 = v3939[1];
                v3942 = true;
                
                break;
                }
              case 'Some': {
                const v3944 = v3939[1];
                v3942 = false;
                
                break;
                }
              }
            const v3945 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:341:53:decimal', stdlib.UInt_max, '0'), v3940);
            const v3946 = v3942 ? v3945 : false;
            const v3947 = ['Some', v3941];
            const v3948 = v3946 ? v3947 : v3939;
            
            return v3948;})
          const v3949 = stdlib.fromSome(v3938, stdlib.checkedBigNumberify('./index.rsh:100:41:decimal', stdlib.UInt_max, '0'));
          const v3950 = stdlib.cast("UInt256", "UInt", v3917, false);
          const v3952 = stdlib.Array_set(v3936, v3949, v3950);
          await stdlib.simMapSet(sim_r, 8, v3916, v3952);
          const v3953 = true;
          const v3954 = await txn1.getOutput('aST', 'v3953', ctc3, v3953);
          
          const v3963 = v3280.currDistr;
          const v3965 = v3280.distrHis;
          const v3966 = v3280.distrIndex;
          const v3973 = v3280.wlArr;
          const v3974 = v3280.wlIndex;
          const v3975 = {
            ctcMan: v3370,
            currDistr: v3963,
            cv: v3361,
            distrHis: v3965,
            distrIndex: v3966,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3931,
            wlArr: v3973,
            wlIndex: v3974
            };
          const v19072 = v3975;
          const v19074 = v3913;
          const v19075 = v3975.totST;
          const v19076 = v3975.totBT;
          const v19077 = v3975.distrNum;
          const v19078 = v3975.saleLocked;
          const v19079 = v3975.docHash;
          const v19080 = v19079[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v19081 = v3975.cv;
          const v19082 = v19081[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v19083 = v19081[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v19084 = v3913[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v19085 = v19084[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v19086 = stdlib.cast("UInt", "UInt256", v19085, false);
          const v19087 = v3975.ctcMan;
          const v19088 = v3975.saleDetails;
          const v19089 = v19088.qty;
          const v19090 = v19088.price;
          const v19091 = v19088.sold;
          const v19092 = v19088.status;
          const v19093 = v19088.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v3910 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v3911 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v3912 = [v3367, v3910, v3911];
      const v3913 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v3912);
      ;
      const v3915 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '0')];
      const v3916 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '1')];
      const v3917 = v3785[stdlib.checkedBigNumberify('./index.rsh:319:13:spread', stdlib.UInt_max, '2')];
      const v3918 = stdlib.addressEq(v3915, v2949);
      const v3920 = stdlib.addressEq(v3915, v3370);
      const v3921 = v3918 ? true : v3920;
      stdlib.assert(v3921, {
        at: './index.rsh:331:24:application',
        fs: ['at ./index.rsh:330:13:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3922 = stdlib.gt256(v3917, stdlib.checkedBigNumberify('./index.rsh:332:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3922, {
        at: './index.rsh:332:24:application',
        fs: ['at ./index.rsh:330:13:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map7, v3916, null);
      const v3924 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3916), null);
      const v3925 = stdlib.fromSome(v3924, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3926 = stdlib.add256(v3925, v3917);
      await stdlib.mapSet(map0, v3916, v3926);
      const v3927 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3916), null);
      const v3928 = stdlib.fromSome(v3927, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3929 = stdlib.add256(v3928, v3917);
      await stdlib.mapSet(map3, v3916, v3929);
      const v3931 = stdlib.add256(v3331, v3917);
      const v3932 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3916), null);
      const v3934 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3936 = stdlib.fromSome(v3932, v3934);
      const v3937 = ['None', null];
      const v3938 = await stdlib.Array_asyncReduce([v3936], v3937, async([v3940], v3939, v3941) => {
        let v3942;
        switch (v3939[0]) {
          case 'None': {
            const v3943 = v3939[1];
            v3942 = true;
            
            break;
            }
          case 'Some': {
            const v3944 = v3939[1];
            v3942 = false;
            
            break;
            }
          }
        const v3945 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:341:53:decimal', stdlib.UInt_max, '0'), v3940);
        const v3946 = v3942 ? v3945 : false;
        const v3947 = ['Some', v3941];
        const v3948 = v3946 ? v3947 : v3939;
        
        return v3948;})
      const v3949 = stdlib.fromSome(v3938, stdlib.checkedBigNumberify('./index.rsh:100:41:decimal', stdlib.UInt_max, '0'));
      const v3950 = stdlib.cast("UInt256", "UInt", v3917, false);
      const v3952 = stdlib.Array_set(v3936, v3949, v3950);
      await stdlib.mapSet(map8, v3916, v3952);
      const v3953 = true;
      const v3954 = await txn1.getOutput('aST', 'v3953', ctc3, v3953);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v3785, v3954), {
          at: './index.rsh:320:13:application',
          fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)', 'at ./index.rsh:343:20:application call to "res" (defined at: ./index.rsh:330:13:function exp)', 'at ./index.rsh:330:13:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3963 = v3280.currDistr;
      const v3965 = v3280.distrHis;
      const v3966 = v3280.distrIndex;
      const v3973 = v3280.wlArr;
      const v3974 = v3280.wlIndex;
      const v3975 = {
        ctcMan: v3370,
        currDistr: v3963,
        cv: v3361,
        distrHis: v3965,
        distrIndex: v3966,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v3375,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3931,
        wlArr: v3973,
        wlIndex: v3974
        };
      const v19072 = v3975;
      const v19074 = v3913;
      const v19075 = v3975.totST;
      const v19076 = v3975.totBT;
      const v19077 = v3975.distrNum;
      const v19078 = v3975.saleLocked;
      const v19079 = v3975.docHash;
      const v19080 = v19079[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v19081 = v3975.cv;
      const v19082 = v19081[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v19083 = v19081[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v19084 = v3913[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v19085 = v19084[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v19086 = stdlib.cast("UInt", "UInt256", v19085, false);
      const v19087 = v3975.ctcMan;
      const v19088 = v3975.saleDetails;
      const v19089 = v19088.qty;
      const v19090 = v19088.price;
      const v19091 = v19088.sold;
      const v19092 = v19088.status;
      const v19093 = v19088.cumProceeds;
      return;
      
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc13]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc9]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc24,
    addWL0_709: ctc26,
    buyOS0_709: ctc27,
    cBT0_709: ctc28,
    cCM0_709: ctc26,
    claimOSpr0_709: ctc28,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc28,
    optIn0_709: ctc28,
    remWL0_709: ctc26
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3559 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:364:13:application call to [unknown function] (defined at: ./index.rsh:364:13:function exp)', 'at ./index.rsh:122:35:application call to "runaddCoopId0_709" (defined at: ./index.rsh:361:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v3566 = ['addCoopId0_709', v3559];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3566],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:367:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:367:27:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          const v4636 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v4637 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v4638 = [v3367, v4636, v4637];
          const v4639 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v4638);
          ;
          const v4706 = v4511[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
          const v4710 = v3280.currDistr;
          const v4712 = v3280.distrHis;
          const v4713 = v3280.distrIndex;
          const v4720 = v3280.wlArr;
          const v4721 = v3280.wlIndex;
          const v4722 = [v3362, v4706];
          const v4723 = {
            ctcMan: v3370,
            currDistr: v4710,
            cv: v4722,
            distrHis: v4712,
            distrIndex: v4713,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v4720,
            wlIndex: v4721
            };
          const v4724 = true;
          const v4725 = await txn1.getOutput('addCoopId', 'v4724', ctc3, v4724);
          
          const v19632 = v4723;
          const v19634 = v4639;
          const v19635 = v4723.totST;
          const v19636 = v4723.totBT;
          const v19637 = v4723.distrNum;
          const v19638 = v4723.saleLocked;
          const v19639 = v4723.docHash;
          const v19640 = v19639[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v19641 = v4723.cv;
          const v19642 = v19641[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v19643 = v19641[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v19644 = v4639[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v19645 = v19644[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v19646 = stdlib.cast("UInt", "UInt256", v19645, false);
          const v19647 = v4723.ctcMan;
          const v19648 = v4723.saleDetails;
          const v19649 = v19648.qty;
          const v19650 = v19648.price;
          const v19651 = v19648.sold;
          const v19652 = v19648.status;
          const v19653 = v19648.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v4636 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v4637 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v4638 = [v3367, v4636, v4637];
      const v4639 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v4638);
      ;
      const v4706 = v4511[stdlib.checkedBigNumberify('./index.rsh:361:14:spread', stdlib.UInt_max, '0')];
      const v4710 = v3280.currDistr;
      const v4712 = v3280.distrHis;
      const v4713 = v3280.distrIndex;
      const v4720 = v3280.wlArr;
      const v4721 = v3280.wlIndex;
      const v4722 = [v3362, v4706];
      const v4723 = {
        ctcMan: v3370,
        currDistr: v4710,
        cv: v4722,
        distrHis: v4712,
        distrIndex: v4713,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v3375,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v4720,
        wlIndex: v4721
        };
      const v4724 = true;
      const v4725 = await txn1.getOutput('addCoopId', 'v4724', ctc3, v4724);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v4511, v4725), {
          at: './index.rsh:362:13:application',
          fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:371:20:application call to "res" (defined at: ./index.rsh:369:13:function exp)', 'at ./index.rsh:369:13:application call to [unknown function] (defined at: ./index.rsh:369:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v19632 = v4723;
      const v19634 = v4639;
      const v19635 = v4723.totST;
      const v19636 = v4723.totBT;
      const v19637 = v4723.distrNum;
      const v19638 = v4723.saleLocked;
      const v19639 = v4723.docHash;
      const v19640 = v19639[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v19641 = v4723.cv;
      const v19642 = v19641[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v19643 = v19641[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v19644 = v4639[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v19645 = v19644[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v19646 = stdlib.cast("UInt", "UInt256", v19645, false);
      const v19647 = v4723.ctcMan;
      const v19648 = v4723.saleDetails;
      const v19649 = v19648.qty;
      const v19650 = v19648.price;
      const v19651 = v19648.sold;
      const v19652 = v19648.status;
      const v19653 = v19648.cumProceeds;
      return;
      
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc24,
    buyOS0_709: ctc27,
    cBT0_709: ctc28,
    cCM0_709: ctc24,
    claimOSpr0_709: ctc28,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc28,
    optIn0_709: ctc28,
    remWL0_709: ctc24
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3497 = ctc.selfAddress();
  const v3499 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:278:13:application call to [unknown function] (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:122:35:application call to "runaddWL0_709" (defined at: ./index.rsh:275:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v3503 = stdlib.addressEq(v3497, v2949);
  const v3505 = stdlib.addressEq(v3497, v3370);
  const v3506 = v3503 ? true : v3505;
  stdlib.assert(v3506, {
    at: './index.rsh:279:23:application',
    fs: ['at ./index.rsh:278:13:application call to [unknown function] (defined at: ./index.rsh:278:18:function exp)', 'at ./index.rsh:278:13:application call to [unknown function] (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:122:35:application call to "runaddWL0_709" (defined at: ./index.rsh:275:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v3510 = ['addWL0_709', v3499];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3510],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:283:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:283:26:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v5362 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v5363 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v5364 = [v3367, v5362, v5363];
          const v5365 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v5364);
          ;
          const v5463 = v5237[stdlib.checkedBigNumberify('./index.rsh:275:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 7, v5463, null);
          const v5469 = v3280.wlIndex;
          const v5470 = stdlib.ge(v5469, stdlib.checkedBigNumberify('./index.rsh:291:80:decimal', stdlib.UInt_max, '24'));
          const v5472 = stdlib.add(v5469, stdlib.checkedBigNumberify('./index.rsh:291:105:decimal', stdlib.UInt_max, '1'));
          const v5473 = v5470 ? stdlib.checkedBigNumberify('./index.rsh:291:85:decimal', stdlib.UInt_max, '0') : v5472;
          const v5475 = v3280.currDistr;
          const v5477 = v3280.distrHis;
          const v5478 = v3280.distrIndex;
          const v5485 = v3280.wlArr;
          const v5495 = stdlib.Array_set(v5485, v5473, v5463);
          const v5496 = {
            ctcMan: v3370,
            currDistr: v5475,
            cv: v3361,
            distrHis: v5477,
            distrIndex: v5478,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v5495,
            wlIndex: v5473
            };
          const v5497 = true;
          const v5498 = await txn1.getOutput('addWL', 'v5497', ctc3, v5497);
          
          const v20192 = v5496;
          const v20194 = v5365;
          const v20195 = v5496.totST;
          const v20196 = v5496.totBT;
          const v20197 = v5496.distrNum;
          const v20198 = v5496.saleLocked;
          const v20199 = v5496.docHash;
          const v20200 = v20199[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v20201 = v5496.cv;
          const v20202 = v20201[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v20203 = v20201[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v20204 = v5365[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v20205 = v20204[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v20206 = stdlib.cast("UInt", "UInt256", v20205, false);
          const v20207 = v5496.ctcMan;
          const v20208 = v5496.saleDetails;
          const v20209 = v20208.qty;
          const v20210 = v20208.price;
          const v20211 = v20208.sold;
          const v20212 = v20208.status;
          const v20213 = v20208.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v5362 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v5363 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v5364 = [v3367, v5362, v5363];
      const v5365 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v5364);
      ;
      const v5463 = v5237[stdlib.checkedBigNumberify('./index.rsh:275:13:spread', stdlib.UInt_max, '0')];
      const v5464 = stdlib.addressEq(v3781, v2949);
      const v5466 = stdlib.addressEq(v3781, v3370);
      const v5467 = v5464 ? true : v5466;
      stdlib.assert(v5467, {
        at: './index.rsh:286:24:application',
        fs: ['at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map7, v5463, null);
      const v5469 = v3280.wlIndex;
      const v5470 = stdlib.ge(v5469, stdlib.checkedBigNumberify('./index.rsh:291:80:decimal', stdlib.UInt_max, '24'));
      const v5472 = stdlib.add(v5469, stdlib.checkedBigNumberify('./index.rsh:291:105:decimal', stdlib.UInt_max, '1'));
      const v5473 = v5470 ? stdlib.checkedBigNumberify('./index.rsh:291:85:decimal', stdlib.UInt_max, '0') : v5472;
      const v5475 = v3280.currDistr;
      const v5477 = v3280.distrHis;
      const v5478 = v3280.distrIndex;
      const v5485 = v3280.wlArr;
      const v5495 = stdlib.Array_set(v5485, v5473, v5463);
      const v5496 = {
        ctcMan: v3370,
        currDistr: v5475,
        cv: v3361,
        distrHis: v5477,
        distrIndex: v5478,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v3375,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v5495,
        wlIndex: v5473
        };
      const v5497 = true;
      const v5498 = await txn1.getOutput('addWL', 'v5497', ctc3, v5497);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v5237, v5498), {
          at: './index.rsh:276:13:application',
          fs: ['at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:296:20:application call to "res" (defined at: ./index.rsh:285:13:function exp)', 'at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v20192 = v5496;
      const v20194 = v5365;
      const v20195 = v5496.totST;
      const v20196 = v5496.totBT;
      const v20197 = v5496.distrNum;
      const v20198 = v5496.saleLocked;
      const v20199 = v5496.docHash;
      const v20200 = v20199[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v20201 = v5496.cv;
      const v20202 = v20201[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v20203 = v20201[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v20204 = v5365[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v20205 = v20204[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v20206 = stdlib.cast("UInt", "UInt256", v20205, false);
      const v20207 = v5496.ctcMan;
      const v20208 = v5496.saleDetails;
      const v20209 = v20208.qty;
      const v20210 = v20208.price;
      const v20211 = v20208.sold;
      const v20212 = v20208.status;
      const v20213 = v20208.cumProceeds;
      return;
      
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyOS3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyOS3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyOS3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc6]);
  const ctc25 = stdlib.T_Tuple([ctc11]);
  const ctc26 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc13]);
  const ctc28 = stdlib.T_Tuple([ctc9]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Tuple([ctc17]);
  const ctc32 = stdlib.T_Data({
    aST0_709: ctc26,
    addCoopId0_709: ctc27,
    addWL0_709: ctc28,
    buyOS0_709: ctc24,
    cBT0_709: ctc29,
    cCM0_709: ctc28,
    claimOSpr0_709: ctc29,
    createOS0_709: ctc15,
    dBT0_709: ctc30,
    docHash0_709: ctc31,
    endOS0_709: ctc29,
    optIn0_709: ctc29,
    remWL0_709: ctc28
    });
  const ctc33 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc11], ['cumProceeds', ctc6]]);
  
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3433 = ctc.selfAddress();
  const v3435 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:122:35:application call to "runbuyOS0_709" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'buyOS'
    });
  const v3436 = v3435[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3439 = stdlib.gt(v3436, stdlib.checkedBigNumberify('./index.rsh:201:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3439, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:20:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:122:35:application call to "runbuyOS0_709" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must buy at least 1 share token',
    who: 'buyOS'
    });
  const v3442 = 'activ';
  const v3443 = stdlib.digest(ctc25, [v3379]);
  const v3445 = stdlib.digest(ctc25, [v3442]);
  const v3446 = stdlib.digestEq(v3443, v3445);
  stdlib.assert(v3446, {
    at: './index.rsh:202:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:20:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:122:35:application call to "runbuyOS0_709" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'no sale is active',
    who: 'buyOS'
    });
  const v3449 = stdlib.ge(v3376, v3436);
  stdlib.assert(v3449, {
    at: './index.rsh:203:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:20:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:122:35:application call to "runbuyOS0_709" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'do not try to buy more than available',
    who: 'buyOS'
    });
  const v3450 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3433), null);
  let v3451;
  switch (v3450[0]) {
    case 'None': {
      const v3452 = v3450[1];
      v3451 = false;
      
      break;
      }
    case 'Some': {
      const v3453 = v3450[1];
      v3451 = true;
      
      break;
      }
    }
  stdlib.assert(v3451, {
    at: './index.rsh:204:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:20:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:122:35:application call to "runbuyOS0_709" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be whitelisted to buy',
    who: 'buyOS'
    });
  const v3457 = ['buyOS0_709', v3435];
  
  const v3674 = stdlib.mul(v3377, v3436);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3457],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:207:24:decimal', stdlib.UInt_max, '0'), [[v3674, v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyOS"
            });
          const v5994 = v5963[stdlib.checkedBigNumberify('./index.rsh:197:13:spread', stdlib.UInt_max, '0')];
          const v5997 = stdlib.mul(v3377, v5994);
          ;
          const v6085 = stdlib.add(v3367, v5997);
          const v6088 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v6089 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v6090 = [v6085, v6088, v6089];
          const v6091 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v6090);
          sim_r.txns.push({
            amt: v5997,
            kind: 'to',
            tok: v2953
            });
          stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v3781), null);
          const v6252 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3781), null);
          const v6253 = stdlib.fromSome(v6252, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6254 = stdlib.cast("UInt", "UInt256", v5994, false);
          const v6255 = stdlib.add256(v6253, v6254);
          await stdlib.simMapSet(sim_r, 0, v3781, v6255);
          const v6256 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3781), null);
          const v6257 = stdlib.fromSome(v6256, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6259 = stdlib.add256(v6257, v6254);
          await stdlib.simMapSet(sim_r, 3, v3781, v6259);
          const v6262 = stdlib.add256(v3331, v6254);
          const v6263 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v3781), null);
          const v6265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6267 = stdlib.fromSome(v6263, v6265);
          const v6268 = ['None', null];
          const v6269 = await stdlib.Array_asyncReduce([v6267], v6268, async([v6271], v6270, v6272) => {
            let v6273;
            switch (v6270[0]) {
              case 'None': {
                const v6274 = v6270[1];
                v6273 = true;
                
                break;
                }
              case 'Some': {
                const v6275 = v6270[1];
                v6273 = false;
                
                break;
                }
              }
            const v6276 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:221:53:decimal', stdlib.UInt_max, '0'), v6271);
            const v6277 = v6273 ? v6276 : false;
            const v6278 = ['Some', v6272];
            const v6279 = v6277 ? v6278 : v6270;
            
            return v6279;})
          const v6280 = stdlib.fromSome(v6269, stdlib.checkedBigNumberify('./index.rsh:100:41:decimal', stdlib.UInt_max, '0'));
          const v6282 = stdlib.Array_set(v6267, v6280, v5994);
          await stdlib.simMapSet(sim_r, 8, v3781, v6282);
          const v6286 = stdlib.sub(v3376, v5994);
          const v6295 = stdlib.add(v3378, v5994);
          const v6299 = stdlib.mul(v5994, v3377);
          const v6300 = stdlib.add(v3380, v6299);
          const v6301 = {
            cumProceeds: v6300,
            price: v3377,
            qty: v6286,
            sold: v6295,
            status: v3379
            };
          const v6303 = v3280.currDistr;
          const v6305 = v3280.distrHis;
          const v6306 = v3280.distrIndex;
          const v6313 = v3280.wlArr;
          const v6314 = v3280.wlIndex;
          const v6318 = {
            ctcMan: v3370,
            currDistr: v6303,
            cv: v3361,
            distrHis: v6305,
            distrIndex: v6306,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v6301,
            saleLocked: v3335,
            totBT: v3332,
            totST: v6262,
            wlArr: v6313,
            wlIndex: v6314
            };
          const v6319 = {
            cumProceeds: v6300,
            price: v3377,
            qty: v6286,
            sold: v6295,
            status: v3379
            };
          const v6320 = await txn1.getOutput('buyOS', 'v6319', ctc33, v6319);
          
          const v20752 = v6318;
          const v20754 = v6091;
          const v20755 = v6318.totST;
          const v20756 = v6318.totBT;
          const v20757 = v6318.distrNum;
          const v20758 = v6318.saleLocked;
          const v20759 = v6318.docHash;
          const v20760 = v20759[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v20761 = v6318.cv;
          const v20762 = v20761[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v20763 = v20761[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v20764 = v6091[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v20765 = v20764[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v20766 = stdlib.cast("UInt", "UInt256", v20765, false);
          const v20767 = v6318.ctcMan;
          const v20768 = v6318.saleDetails;
          const v20769 = v20768.qty;
          const v20770 = v20768.price;
          const v20771 = v20768.sold;
          const v20772 = v20768.status;
          const v20773 = v20768.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc32],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      undefined /* setApiDetails */;
      const v5994 = v5963[stdlib.checkedBigNumberify('./index.rsh:197:13:spread', stdlib.UInt_max, '0')];
      const v5997 = stdlib.mul(v3377, v5994);
      ;
      const v6085 = stdlib.add(v3367, v5997);
      const v6088 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v6089 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v6090 = [v6085, v6088, v6089];
      const v6091 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v6090);
      ;
      const v6237 = stdlib.gt(v5994, stdlib.checkedBigNumberify('./index.rsh:211:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6237, {
        at: './index.rsh:211:24:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'buyOS'
        });
      const v6240 = 'activ';
      const v6241 = stdlib.digest(ctc25, [v3379]);
      const v6243 = stdlib.digest(ctc25, [v6240]);
      const v6244 = stdlib.digestEq(v6241, v6243);
      stdlib.assert(v6244, {
        at: './index.rsh:212:24:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'no sale is active',
        who: 'buyOS'
        });
      const v6247 = stdlib.ge(v3376, v5994);
      stdlib.assert(v6247, {
        at: './index.rsh:213:24:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'do not try to buy more than available',
        who: 'buyOS'
        });
      const v6248 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3781), null);
      let v6249;
      switch (v6248[0]) {
        case 'None': {
          const v6250 = v6248[1];
          v6249 = false;
          
          break;
          }
        case 'Some': {
          const v6251 = v6248[1];
          v6249 = true;
          
          break;
          }
        }
      stdlib.assert(v6249, {
        at: './index.rsh:214:24:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'you must be whitelisted to buy',
        who: 'buyOS'
        });
      const v6252 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3781), null);
      const v6253 = stdlib.fromSome(v6252, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6254 = stdlib.cast("UInt", "UInt256", v5994, false);
      const v6255 = stdlib.add256(v6253, v6254);
      await stdlib.mapSet(map0, v3781, v6255);
      const v6256 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3781), null);
      const v6257 = stdlib.fromSome(v6256, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6259 = stdlib.add256(v6257, v6254);
      await stdlib.mapSet(map3, v3781, v6259);
      const v6262 = stdlib.add256(v3331, v6254);
      const v6263 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3781), null);
      const v6265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6267 = stdlib.fromSome(v6263, v6265);
      const v6268 = ['None', null];
      const v6269 = await stdlib.Array_asyncReduce([v6267], v6268, async([v6271], v6270, v6272) => {
        let v6273;
        switch (v6270[0]) {
          case 'None': {
            const v6274 = v6270[1];
            v6273 = true;
            
            break;
            }
          case 'Some': {
            const v6275 = v6270[1];
            v6273 = false;
            
            break;
            }
          }
        const v6276 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:221:53:decimal', stdlib.UInt_max, '0'), v6271);
        const v6277 = v6273 ? v6276 : false;
        const v6278 = ['Some', v6272];
        const v6279 = v6277 ? v6278 : v6270;
        
        return v6279;})
      const v6280 = stdlib.fromSome(v6269, stdlib.checkedBigNumberify('./index.rsh:100:41:decimal', stdlib.UInt_max, '0'));
      const v6282 = stdlib.Array_set(v6267, v6280, v5994);
      await stdlib.mapSet(map8, v3781, v6282);
      const v6286 = stdlib.sub(v3376, v5994);
      const v6295 = stdlib.add(v3378, v5994);
      const v6299 = stdlib.mul(v5994, v3377);
      const v6300 = stdlib.add(v3380, v6299);
      const v6301 = {
        cumProceeds: v6300,
        price: v3377,
        qty: v6286,
        sold: v6295,
        status: v3379
        };
      const v6303 = v3280.currDistr;
      const v6305 = v3280.distrHis;
      const v6306 = v3280.distrIndex;
      const v6313 = v3280.wlArr;
      const v6314 = v3280.wlIndex;
      const v6318 = {
        ctcMan: v3370,
        currDistr: v6303,
        cv: v3361,
        distrHis: v6305,
        distrIndex: v6306,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v6301,
        saleLocked: v3335,
        totBT: v3332,
        totST: v6262,
        wlArr: v6313,
        wlIndex: v6314
        };
      const v6319 = {
        cumProceeds: v6300,
        price: v3377,
        qty: v6286,
        sold: v6295,
        status: v3379
        };
      const v6320 = await txn1.getOutput('buyOS', 'v6319', ctc33, v6319);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v5963, v6320), {
          at: './index.rsh:198:13:application',
          fs: ['at ./index.rsh:198:13:application call to [unknown function] (defined at: ./index.rsh:198:13:function exp)', 'at ./index.rsh:229:20:application call to "res" (defined at: ./index.rsh:209:13:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'out',
          who: 'buyOS'
          });
        }
      else {
        }
      
      const v20752 = v6318;
      const v20754 = v6091;
      const v20755 = v6318.totST;
      const v20756 = v6318.totBT;
      const v20757 = v6318.distrNum;
      const v20758 = v6318.saleLocked;
      const v20759 = v6318.docHash;
      const v20760 = v20759[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v20761 = v6318.cv;
      const v20762 = v20761[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v20763 = v20761[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v20764 = v6091[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v20765 = v20764[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v20766 = stdlib.cast("UInt", "UInt256", v20765, false);
      const v20767 = v6318.ctcMan;
      const v20768 = v6318.saleDetails;
      const v20769 = v20768.qty;
      const v20770 = v20768.price;
      const v20771 = v20768.sold;
      const v20772 = v20768.status;
      const v20773 = v20768.cumProceeds;
      return;
      
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc27,
    buyOS0_709: ctc28,
    cBT0_709: ctc24,
    cCM0_709: ctc27,
    claimOSpr0_709: ctc24,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc24,
    optIn0_709: ctc24,
    remWL0_709: ctc27
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3585 = ctc.selfAddress();
  const v3587 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v3589 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3585), null);
  let v3590;
  switch (v3589[0]) {
    case 'None': {
      const v3591 = v3589[1];
      v3590 = false;
      
      break;
      }
    case 'Some': {
      const v3592 = v3589[1];
      v3590 = true;
      
      break;
      }
    }
  stdlib.assert(v3590, {
    at: './index.rsh:402:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:17:function exp)', 'at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v3596 = stdlib.gt256(v3368, stdlib.checkedBigNumberify('./index.rsh:404:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3596, {
    at: './index.rsh:404:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:17:function exp)', 'at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v3598 = stdlib.gt256(v3331, stdlib.checkedBigNumberify('./index.rsh:405:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3598, {
    at: './index.rsh:405:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:17:function exp)', 'at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v3600 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3585), null);
  const v3601 = stdlib.fromSome(v3600, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3602 = stdlib.ge256(v3331, v3601);
  stdlib.assert(v3602, {
    at: './index.rsh:406:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:17:function exp)', 'at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v3605 = stdlib.gt256(v3601, stdlib.checkedBigNumberify('./index.rsh:407:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3605, {
    at: './index.rsh:407:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:17:function exp)', 'at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v3608 = v3280.currDistr;
  const v3609 = stdlib.mul256(v3601, v3608);
  const v3611 = stdlib.div256(v3609, v3331);
  const v3612 = stdlib.cast("UInt256", "UInt", v3611, false);
  const v3615 = stdlib.le(v3612, v3367);
  stdlib.assert(v3615, {
    at: './index.rsh:409:23:application',
    fs: ['at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:17:function exp)', 'at ./index.rsh:401:13:application call to [unknown function] (defined at: ./index.rsh:401:13:function exp)', 'at ./index.rsh:122:35:application call to "runcBT0_709" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v3618 = ['cBT0_709', v3587];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3618],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:412:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:412:25:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v6814 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v6815 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v6816 = [v3367, v6814, v6815];
          const v6817 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v6816);
          ;
          stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v3781), null);
          const v7067 = v6817[stdlib.checkedBigNumberify('./index.rsh:417:40:application', stdlib.UInt_max, '0')];
          const v7068 = v7067[stdlib.checkedBigNumberify('./index.rsh:417:40:application', stdlib.UInt_max, '0')];
          const v7074 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3781), null);
          const v7075 = stdlib.fromSome(v7074, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7082 = v3280.currDistr;
          const v7083 = stdlib.mul256(v7075, v7082);
          const v7085 = stdlib.div256(v7083, v3331);
          const v7086 = stdlib.cast("UInt256", "UInt", v7085, false);
          const v7096 = stdlib.sub(v7068, v7086);
          const v7099 = v7067[stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '1')];
          const v7100 = v7067[stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '2')];
          const v7101 = [v7096, v7099, v7100];
          const v7102 = stdlib.Array_set(v6817, stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '0'), v7101);
          sim_r.txns.push({
            kind: 'from',
            to: v3781,
            tok: v2953
            });
          const v7103 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v3781), null);
          const v7104 = stdlib.fromSome(v7103, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7105 = stdlib.add256(v7104, v7085);
          await stdlib.simMapSet(sim_r, 4, v3781, v7105);
          const v7106 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3781), null);
          const v7107 = stdlib.fromSome(v7106, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7108 = stdlib.add256(v7107, stdlib.checkedBigNumberify('./index.rsh:426:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v3781, v7108);
          const v7109 = await txn1.getOutput('cBT', 'v7085', ctc1, v7085);
          
          const v21312 = v3280;
          const v21314 = v7102;
          const v21315 = v3280.totST;
          const v21316 = v3280.totBT;
          const v21317 = v3280.distrNum;
          const v21318 = v3280.saleLocked;
          const v21319 = v3280.docHash;
          const v21320 = v21319[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v21321 = v3280.cv;
          const v21322 = v21321[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v21323 = v21321[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v21324 = v7102[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v21325 = v21324[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v21326 = stdlib.cast("UInt", "UInt256", v21325, false);
          const v21327 = v3280.ctcMan;
          const v21328 = v3280.saleDetails;
          const v21329 = v21328.qty;
          const v21330 = v21328.price;
          const v21331 = v21328.sold;
          const v21332 = v21328.status;
          const v21333 = v21328.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v6814 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v6815 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v6816 = [v3367, v6814, v6815];
      const v6817 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v6816);
      ;
      const v7063 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3781), null);
      let v7064;
      switch (v7063[0]) {
        case 'None': {
          const v7065 = v7063[1];
          v7064 = false;
          
          break;
          }
        case 'Some': {
          const v7066 = v7063[1];
          v7064 = true;
          
          break;
          }
        }
      stdlib.assert(v7064, {
        at: './index.rsh:415:24:application',
        fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v7067 = v6817[stdlib.checkedBigNumberify('./index.rsh:417:40:application', stdlib.UInt_max, '0')];
      const v7068 = v7067[stdlib.checkedBigNumberify('./index.rsh:417:40:application', stdlib.UInt_max, '0')];
      const v7069 = stdlib.cast("UInt", "UInt256", v7068, false);
      const v7070 = stdlib.gt256(v7069, stdlib.checkedBigNumberify('./index.rsh:417:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7070, {
        at: './index.rsh:417:24:application',
        fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v7072 = stdlib.gt256(v3331, stdlib.checkedBigNumberify('./index.rsh:418:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7072, {
        at: './index.rsh:418:24:application',
        fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v7074 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3781), null);
      const v7075 = stdlib.fromSome(v7074, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7076 = stdlib.ge256(v3331, v7075);
      stdlib.assert(v7076, {
        at: './index.rsh:419:24:application',
        fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v7079 = stdlib.gt256(v7075, stdlib.checkedBigNumberify('./index.rsh:420:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7079, {
        at: './index.rsh:420:24:application',
        fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v7082 = v3280.currDistr;
      const v7083 = stdlib.mul256(v7075, v7082);
      const v7085 = stdlib.div256(v7083, v3331);
      const v7086 = stdlib.cast("UInt256", "UInt", v7085, false);
      const v7089 = stdlib.le(v7086, v7068);
      stdlib.assert(v7089, {
        at: './index.rsh:422:24:application',
        fs: ['at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v7096 = stdlib.sub(v7068, v7086);
      const v7099 = v7067[stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '1')];
      const v7100 = v7067[stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '2')];
      const v7101 = [v7096, v7099, v7100];
      const v7102 = stdlib.Array_set(v6817, stdlib.checkedBigNumberify('./index.rsh:424:50:application', stdlib.UInt_max, '0'), v7101);
      ;
      const v7103 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3781), null);
      const v7104 = stdlib.fromSome(v7103, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7105 = stdlib.add256(v7104, v7085);
      await stdlib.mapSet(map4, v3781, v7105);
      const v7106 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3781), null);
      const v7107 = stdlib.fromSome(v7106, stdlib.checkedBigNumberify('./index.rsh:99:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7108 = stdlib.add256(v7107, stdlib.checkedBigNumberify('./index.rsh:426:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v3781, v7108);
      const v7109 = await txn1.getOutput('cBT', 'v7085', ctc1, v7085);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v6689, v7109), {
          at: './index.rsh:399:13:application',
          fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:427:20:application call to "res" (defined at: ./index.rsh:414:13:function exp)', 'at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v21312 = v3280;
      const v21314 = v7102;
      const v21315 = v3280.totST;
      const v21316 = v3280.totBT;
      const v21317 = v3280.distrNum;
      const v21318 = v3280.saleLocked;
      const v21319 = v3280.docHash;
      const v21320 = v21319[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v21321 = v3280.cv;
      const v21322 = v21321[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v21323 = v21321[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v21324 = v7102[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v21325 = v21324[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v21326 = stdlib.cast("UInt", "UInt256", v21325, false);
      const v21327 = v3280.ctcMan;
      const v21328 = v3280.saleDetails;
      const v21329 = v21328.qty;
      const v21330 = v21328.price;
      const v21331 = v21328.sold;
      const v21332 = v21328.status;
      const v21333 = v21328.cumProceeds;
      return;
      
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc24,
    buyOS0_709: ctc27,
    cBT0_709: ctc28,
    cCM0_709: ctc24,
    claimOSpr0_709: ctc28,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc28,
    optIn0_709: ctc28,
    remWL0_709: ctc24
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3620 = ctc.selfAddress();
  const v3622 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:434:13:application call to [unknown function] (defined at: ./index.rsh:434:13:function exp)', 'at ./index.rsh:122:35:application call to "runcCM0_709" (defined at: ./index.rsh:431:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v3626 = stdlib.addressEq(v3620, v2949);
  const v3628 = stdlib.addressEq(v3620, v3370);
  const v3629 = v3626 ? true : v3628;
  stdlib.assert(v3629, {
    at: './index.rsh:435:23:application',
    fs: ['at ./index.rsh:434:13:application call to [unknown function] (defined at: ./index.rsh:434:21:function exp)', 'at ./index.rsh:434:13:application call to [unknown function] (defined at: ./index.rsh:434:13:function exp)', 'at ./index.rsh:122:35:application call to "runcCM0_709" (defined at: ./index.rsh:431:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v3633 = ['cCM0_709', v3622];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3633],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:439:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:439:26:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v7540 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v7541 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v7542 = [v3367, v7540, v7541];
          const v7543 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v7542);
          ;
          const v7842 = v7415[stdlib.checkedBigNumberify('./index.rsh:431:13:spread', stdlib.UInt_max, '0')];
          const v7847 = true;
          const v7848 = await txn1.getOutput('cCM', 'v7847', ctc3, v7847);
          
          const v7855 = v3280.currDistr;
          const v7857 = v3280.distrHis;
          const v7858 = v3280.distrIndex;
          const v7865 = v3280.wlArr;
          const v7866 = v3280.wlIndex;
          const v7867 = {
            ctcMan: v7842,
            currDistr: v7855,
            cv: v3361,
            distrHis: v7857,
            distrIndex: v7858,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v7865,
            wlIndex: v7866
            };
          const v21872 = v7867;
          const v21874 = v7543;
          const v21875 = v7867.totST;
          const v21876 = v7867.totBT;
          const v21877 = v7867.distrNum;
          const v21878 = v7867.saleLocked;
          const v21879 = v7867.docHash;
          const v21880 = v21879[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v21881 = v7867.cv;
          const v21882 = v21881[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v21883 = v21881[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v21884 = v7543[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v21885 = v21884[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v21886 = stdlib.cast("UInt", "UInt256", v21885, false);
          const v21887 = v7867.ctcMan;
          const v21888 = v7867.saleDetails;
          const v21889 = v21888.qty;
          const v21890 = v21888.price;
          const v21891 = v21888.sold;
          const v21892 = v21888.status;
          const v21893 = v21888.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v7540 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v7541 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v7542 = [v3367, v7540, v7541];
      const v7543 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v7542);
      ;
      const v7842 = v7415[stdlib.checkedBigNumberify('./index.rsh:431:13:spread', stdlib.UInt_max, '0')];
      const v7843 = stdlib.addressEq(v3781, v2949);
      const v7845 = stdlib.addressEq(v3781, v3370);
      const v7846 = v7843 ? true : v7845;
      stdlib.assert(v7846, {
        at: './index.rsh:442:24:application',
        fs: ['at ./index.rsh:441:13:application call to [unknown function] (defined at: ./index.rsh:441:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v7847 = true;
      const v7848 = await txn1.getOutput('cCM', 'v7847', ctc3, v7847);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v7415, v7848), {
          at: './index.rsh:432:13:application',
          fs: ['at ./index.rsh:432:13:application call to [unknown function] (defined at: ./index.rsh:432:13:function exp)', 'at ./index.rsh:445:20:application call to "res" (defined at: ./index.rsh:441:13:function exp)', 'at ./index.rsh:441:13:application call to [unknown function] (defined at: ./index.rsh:441:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v7855 = v3280.currDistr;
      const v7857 = v3280.distrHis;
      const v7858 = v3280.distrIndex;
      const v7865 = v3280.wlArr;
      const v7866 = v3280.wlIndex;
      const v7867 = {
        ctcMan: v7842,
        currDistr: v7855,
        cv: v3361,
        distrHis: v7857,
        distrIndex: v7858,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v3375,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v7865,
        wlIndex: v7866
        };
      const v21872 = v7867;
      const v21874 = v7543;
      const v21875 = v7867.totST;
      const v21876 = v7867.totBT;
      const v21877 = v7867.distrNum;
      const v21878 = v7867.saleLocked;
      const v21879 = v7867.docHash;
      const v21880 = v21879[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v21881 = v7867.cv;
      const v21882 = v21881[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v21883 = v21881[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v21884 = v7543[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v21885 = v21884[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v21886 = stdlib.cast("UInt", "UInt256", v21885, false);
      const v21887 = v7867.ctcMan;
      const v21888 = v7867.saleDetails;
      const v21889 = v21888.qty;
      const v21890 = v21888.price;
      const v21891 = v21888.sold;
      const v21892 = v21888.status;
      const v21893 = v21888.cumProceeds;
      return;
      
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimOSpr3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimOSpr3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimOSpr3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc27,
    buyOS0_709: ctc28,
    cBT0_709: ctc24,
    cCM0_709: ctc27,
    claimOSpr0_709: ctc24,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc24,
    optIn0_709: ctc24,
    remWL0_709: ctc27
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3459 = ctc.selfAddress();
  const v3461 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:122:35:application call to "runclaimOSpr0_709" (defined at: ./index.rsh:232:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'claimOSpr'
    });
  const v3463 = stdlib.addressEq(v3459, v2949);
  const v3465 = stdlib.addressEq(v3459, v3370);
  const v3466 = v3463 ? true : v3465;
  stdlib.assert(v3466, {
    at: './index.rsh:236:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:122:35:application call to "runclaimOSpr0_709" (defined at: ./index.rsh:232:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'claimOSpr'
    });
  const v3469 = stdlib.gt(v3380, stdlib.checkedBigNumberify('./index.rsh:237:56:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3469, {
    at: './index.rsh:237:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:122:35:application call to "runclaimOSpr0_709" (defined at: ./index.rsh:232:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'available proceeds must be greater than 0',
    who: 'claimOSpr'
    });
  const v3474 = stdlib.ge(v3367, v3380);
  stdlib.assert(v3474, {
    at: './index.rsh:238:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:122:35:application call to "runclaimOSpr0_709" (defined at: ./index.rsh:232:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimOSpr'
    });
  const v3477 = ['claimOSpr0_709', v3461];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3477],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:241:25:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimOSpr"
            });
          ;
          const v8266 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v8267 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v8268 = [v3367, v8266, v8267];
          const v8269 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v8268);
          ;
          const v8605 = v8269[stdlib.checkedBigNumberify('./index.rsh:246:32:application', stdlib.UInt_max, '0')];
          const v8606 = v8605[stdlib.checkedBigNumberify('./index.rsh:246:32:application', stdlib.UInt_max, '0')];
          const v8617 = stdlib.sub(v8606, v3380);
          const v8620 = v8605[stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '1')];
          const v8621 = v8605[stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '2')];
          const v8622 = [v8617, v8620, v8621];
          const v8623 = stdlib.Array_set(v8269, stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '0'), v8622);
          sim_r.txns.push({
            kind: 'from',
            to: v3781,
            tok: v2953
            });
          const v8630 = {
            cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            price: v3377,
            qty: v3376,
            sold: v3378,
            status: v3379
            };
          const v8632 = v3280.currDistr;
          const v8634 = v3280.distrHis;
          const v8635 = v3280.distrIndex;
          const v8642 = v3280.wlArr;
          const v8643 = v3280.wlIndex;
          const v8645 = {
            ctcMan: v3370,
            currDistr: v8632,
            cv: v3361,
            distrHis: v8634,
            distrIndex: v8635,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v8630,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v8642,
            wlIndex: v8643
            };
          const v8646 = true;
          const v8647 = await txn1.getOutput('claimOSpr', 'v8646', ctc3, v8646);
          
          const v22432 = v8645;
          const v22434 = v8623;
          const v22435 = v8645.totST;
          const v22436 = v8645.totBT;
          const v22437 = v8645.distrNum;
          const v22438 = v8645.saleLocked;
          const v22439 = v8645.docHash;
          const v22440 = v22439[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v22441 = v8645.cv;
          const v22442 = v22441[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v22443 = v22441[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v22444 = v8623[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v22445 = v22444[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v22446 = stdlib.cast("UInt", "UInt256", v22445, false);
          const v22447 = v8645.ctcMan;
          const v22448 = v8645.saleDetails;
          const v22449 = v22448.qty;
          const v22450 = v22448.price;
          const v22451 = v22448.sold;
          const v22452 = v22448.status;
          const v22453 = v22448.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v8266 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v8267 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v8268 = [v3367, v8266, v8267];
      const v8269 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v8268);
      ;
      const v8598 = stdlib.addressEq(v3781, v2949);
      const v8600 = stdlib.addressEq(v3781, v3370);
      const v8601 = v8598 ? true : v8600;
      stdlib.assert(v8601, {
        at: './index.rsh:244:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'claimOSpr'
        });
      const v8604 = stdlib.gt(v3380, stdlib.checkedBigNumberify('./index.rsh:245:57:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8604, {
        at: './index.rsh:245:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: 'available proceeds must be greater than 0',
        who: 'claimOSpr'
        });
      const v8605 = v8269[stdlib.checkedBigNumberify('./index.rsh:246:32:application', stdlib.UInt_max, '0')];
      const v8606 = v8605[stdlib.checkedBigNumberify('./index.rsh:246:32:application', stdlib.UInt_max, '0')];
      const v8609 = stdlib.ge(v8606, v3380);
      stdlib.assert(v8609, {
        at: './index.rsh:246:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimOSpr'
        });
      const v8617 = stdlib.sub(v8606, v3380);
      const v8620 = v8605[stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '1')];
      const v8621 = v8605[stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '2')];
      const v8622 = [v8617, v8620, v8621];
      const v8623 = stdlib.Array_set(v8269, stdlib.checkedBigNumberify('./index.rsh:247:70:application', stdlib.UInt_max, '0'), v8622);
      ;
      const v8630 = {
        cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        price: v3377,
        qty: v3376,
        sold: v3378,
        status: v3379
        };
      const v8632 = v3280.currDistr;
      const v8634 = v3280.distrHis;
      const v8635 = v3280.distrIndex;
      const v8642 = v3280.wlArr;
      const v8643 = v3280.wlIndex;
      const v8645 = {
        ctcMan: v3370,
        currDistr: v8632,
        cv: v3361,
        distrHis: v8634,
        distrIndex: v8635,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v8630,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v8642,
        wlIndex: v8643
        };
      const v8646 = true;
      const v8647 = await txn1.getOutput('claimOSpr', 'v8646', ctc3, v8646);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v8141, v8647), {
          at: './index.rsh:233:13:application',
          fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:250:20:application call to "res" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'out',
          who: 'claimOSpr'
          });
        }
      else {
        }
      
      const v22432 = v8645;
      const v22434 = v8623;
      const v22435 = v8645.totST;
      const v22436 = v8645.totBT;
      const v22437 = v8645.distrNum;
      const v22438 = v8645.saleLocked;
      const v22439 = v8645.docHash;
      const v22440 = v22439[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v22441 = v8645.cv;
      const v22442 = v22441[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v22443 = v22441[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v22444 = v8623[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v22445 = v22444[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v22446 = stdlib.cast("UInt", "UInt256", v22445, false);
      const v22447 = v8645.ctcMan;
      const v22448 = v8645.saleDetails;
      const v22449 = v22448.qty;
      const v22450 = v22448.price;
      const v22451 = v22448.sold;
      const v22452 = v22448.status;
      const v22453 = v22448.cumProceeds;
      return;
      
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createOS3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createOS3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createOS3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Tuple([ctc17]);
  const ctc32 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc27,
    buyOS0_709: ctc28,
    cBT0_709: ctc29,
    cCM0_709: ctc27,
    claimOSpr0_709: ctc29,
    createOS0_709: ctc15,
    dBT0_709: ctc30,
    docHash0_709: ctc31,
    endOS0_709: ctc29,
    optIn0_709: ctc29,
    remWL0_709: ctc27
    });
  const ctc33 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc11], ['cumProceeds', ctc6]]);
  
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3386 = ctc.selfAddress();
  const v3388 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:122:35:application call to "runcreateOS0_709" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'createOS'
    });
  const v3389 = v3388[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3390 = v3388[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3394 = stdlib.addressEq(v3386, v2949);
  const v3396 = stdlib.addressEq(v3386, v3370);
  const v3397 = v3394 ? true : v3396;
  stdlib.assert(v3397, {
    at: './index.rsh:157:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:27:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:122:35:application call to "runcreateOS0_709" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'createOS'
    });
  const v3398 = stdlib.gt(v3389, stdlib.checkedBigNumberify('./index.rsh:158:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3398, {
    at: './index.rsh:158:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:27:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:122:35:application call to "runcreateOS0_709" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'createOS'
    });
  const v3399 = stdlib.gt(v3390, stdlib.checkedBigNumberify('./index.rsh:159:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3399, {
    at: './index.rsh:159:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:27:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:122:35:application call to "runcreateOS0_709" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'price must be greater than 0',
    who: 'createOS'
    });
  const v3402 = 'activ';
  const v3403 = stdlib.digest(ctc24, [v3379]);
  const v3405 = stdlib.digest(ctc24, [v3402]);
  const v3406 = stdlib.digestEq(v3403, v3405);
  const v3407 = v3406 ? false : true;
  stdlib.assert(v3407, {
    at: './index.rsh:160:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:27:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:122:35:application call to "runcreateOS0_709" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'sale must not be active',
    who: 'createOS'
    });
  const v3412 = ['createOS0_709', v3388];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3412],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:163:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:163:28:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createOS"
            });
          ;
          const v8992 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v8993 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v8994 = [v3367, v8992, v8993];
          const v8995 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v8994);
          ;
          const v9384 = v8867[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '0')];
          const v9385 = v8867[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '1')];
          const v9398 = 'activ';
          const v9403 = {
            cumProceeds: v3380,
            price: v9385,
            qty: v9384,
            sold: v3378,
            status: v9398
            };
          const v9405 = v3280.currDistr;
          const v9407 = v3280.distrHis;
          const v9408 = v3280.distrIndex;
          const v9415 = v3280.wlArr;
          const v9416 = v3280.wlIndex;
          const v9419 = {
            ctcMan: v3370,
            currDistr: v9405,
            cv: v3361,
            distrHis: v9407,
            distrIndex: v9408,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v9403,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v9415,
            wlIndex: v9416
            };
          const v9421 = {
            cumProceeds: v3380,
            price: v9385,
            qty: v9384,
            sold: v3378,
            status: v9398
            };
          const v9422 = await txn1.getOutput('createOS', 'v9421', ctc33, v9421);
          
          const v22992 = v9419;
          const v22994 = v8995;
          const v22995 = v9419.totST;
          const v22996 = v9419.totBT;
          const v22997 = v9419.distrNum;
          const v22998 = v9419.saleLocked;
          const v22999 = v9419.docHash;
          const v23000 = v22999[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v23001 = v9419.cv;
          const v23002 = v23001[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v23003 = v23001[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v23004 = v8995[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v23005 = v23004[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v23006 = stdlib.cast("UInt", "UInt256", v23005, false);
          const v23007 = v9419.ctcMan;
          const v23008 = v9419.saleDetails;
          const v23009 = v23008.qty;
          const v23010 = v23008.price;
          const v23011 = v23008.sold;
          const v23012 = v23008.status;
          const v23013 = v23008.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc32],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v8992 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v8993 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v8994 = [v3367, v8992, v8993];
      const v8995 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v8994);
      ;
      const v9384 = v8867[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '0')];
      const v9385 = v8867[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '1')];
      const v9386 = stdlib.addressEq(v3781, v2949);
      const v9388 = stdlib.addressEq(v3781, v3370);
      const v9389 = v9386 ? true : v9388;
      stdlib.assert(v9389, {
        at: './index.rsh:166:24:application',
        fs: ['at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'createOS'
        });
      const v9390 = stdlib.gt(v9384, stdlib.checkedBigNumberify('./index.rsh:167:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9390, {
        at: './index.rsh:167:24:application',
        fs: ['at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'createOS'
        });
      const v9391 = stdlib.gt(v9385, stdlib.checkedBigNumberify('./index.rsh:168:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9391, {
        at: './index.rsh:168:24:application',
        fs: ['at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'createOS'
        });
      const v9398 = 'activ';
      const v9403 = {
        cumProceeds: v3380,
        price: v9385,
        qty: v9384,
        sold: v3378,
        status: v9398
        };
      const v9405 = v3280.currDistr;
      const v9407 = v3280.distrHis;
      const v9408 = v3280.distrIndex;
      const v9415 = v3280.wlArr;
      const v9416 = v3280.wlIndex;
      const v9419 = {
        ctcMan: v3370,
        currDistr: v9405,
        cv: v3361,
        distrHis: v9407,
        distrIndex: v9408,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v9403,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v9415,
        wlIndex: v9416
        };
      const v9421 = {
        cumProceeds: v3380,
        price: v9385,
        qty: v9384,
        sold: v3378,
        status: v9398
        };
      const v9422 = await txn1.getOutput('createOS', 'v9421', ctc33, v9421);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v8867, v9422), {
          at: './index.rsh:154:13:application',
          fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:173:20:application call to "res" (defined at: ./index.rsh:165:13:function exp)', 'at ./index.rsh:165:13:application call to [unknown function] (defined at: ./index.rsh:165:13:function exp)'],
          msg: 'out',
          who: 'createOS'
          });
        }
      else {
        }
      
      const v22992 = v9419;
      const v22994 = v8995;
      const v22995 = v9419.totST;
      const v22996 = v9419.totBT;
      const v22997 = v9419.distrNum;
      const v22998 = v9419.saleLocked;
      const v22999 = v9419.docHash;
      const v23000 = v22999[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v23001 = v9419.cv;
      const v23002 = v23001[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v23003 = v23001[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v23004 = v8995[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v23005 = v23004[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v23006 = stdlib.cast("UInt", "UInt256", v23005, false);
      const v23007 = v9419.ctcMan;
      const v23008 = v9419.saleDetails;
      const v23009 = v23008.qty;
      const v23010 = v23008.price;
      const v23011 = v23008.sold;
      const v23012 = v23008.status;
      const v23013 = v23008.cumProceeds;
      return;
      
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc1]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc27,
    buyOS0_709: ctc28,
    cBT0_709: ctc29,
    cCM0_709: ctc27,
    claimOSpr0_709: ctc29,
    createOS0_709: ctc15,
    dBT0_709: ctc24,
    docHash0_709: ctc30,
    endOS0_709: ctc29,
    optIn0_709: ctc29,
    remWL0_709: ctc27
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3568 = ctc.selfAddress();
  const v3570 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:122:35:application call to "rundBT0_709" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v3571 = v3570[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3574 = stdlib.addressEq(v3568, v2949);
  const v3576 = stdlib.addressEq(v3568, v3370);
  const v3577 = v3574 ? true : v3576;
  stdlib.assert(v3577, {
    at: './index.rsh:379:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:20:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:122:35:application call to "rundBT0_709" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v3578 = stdlib.cast("UInt256", "UInt", v3571, false);
  const v3579 = stdlib.gt(v3578, stdlib.checkedBigNumberify('./index.rsh:380:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3579, {
    at: './index.rsh:380:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:20:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:122:35:application call to "rundBT0_709" (defined at: ./index.rsh:375:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v3583 = ['dBT0_709', v3570];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3583],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:384:24:decimal', stdlib.UInt_max, '0'), [[v3578, v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v9666 = v9593[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
          const v9667 = stdlib.cast("UInt256", "UInt", v9666, false);
          ;
          const v9715 = stdlib.add(v3367, v9667);
          const v9718 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v9719 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v9720 = [v9715, v9718, v9719];
          const v9721 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v9720);
          sim_r.txns.push({
            amt: v9667,
            kind: 'to',
            tok: v2953
            });
          const v10176 = stdlib.add256(v3332, v9666);
          const v10180 = v3280.distrHis;
          const v10181 = v3280.distrIndex;
          const v10188 = v3280.wlArr;
          const v10189 = v3280.wlIndex;
          const v10192 = stdlib.add256(v3333, stdlib.checkedBigNumberify('./index.rsh:391:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v10194 = {
            ctcMan: v3370,
            currDistr: v9666,
            cv: v3361,
            distrHis: v10180,
            distrIndex: v10181,
            distrNum: v10192,
            docHash: v3357,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v10176,
            totST: v3331,
            wlArr: v10188,
            wlIndex: v10189
            };
          const v10195 = true;
          const v10196 = await txn1.getOutput('dBT', 'v10195', ctc3, v10195);
          
          const v23552 = v10194;
          const v23554 = v9721;
          const v23555 = v10194.totST;
          const v23556 = v10194.totBT;
          const v23557 = v10194.distrNum;
          const v23558 = v10194.saleLocked;
          const v23559 = v10194.docHash;
          const v23560 = v23559[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v23561 = v10194.cv;
          const v23562 = v23561[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v23563 = v23561[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v23564 = v9721[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v23565 = v23564[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v23566 = stdlib.cast("UInt", "UInt256", v23565, false);
          const v23567 = v10194.ctcMan;
          const v23568 = v10194.saleDetails;
          const v23569 = v23568.qty;
          const v23570 = v23568.price;
          const v23571 = v23568.sold;
          const v23572 = v23568.status;
          const v23573 = v23568.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      undefined /* setApiDetails */;
      const v9666 = v9593[stdlib.checkedBigNumberify('./index.rsh:375:13:spread', stdlib.UInt_max, '0')];
      const v9667 = stdlib.cast("UInt256", "UInt", v9666, false);
      ;
      const v9715 = stdlib.add(v3367, v9667);
      const v9718 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v9719 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v9720 = [v9715, v9718, v9719];
      const v9721 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v9720);
      ;
      const v10169 = stdlib.addressEq(v3781, v2949);
      const v10171 = stdlib.addressEq(v3781, v3370);
      const v10172 = v10169 ? true : v10171;
      stdlib.assert(v10172, {
        at: './index.rsh:387:24:application',
        fs: ['at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v10174 = stdlib.gt(v9667, stdlib.checkedBigNumberify('./index.rsh:388:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10174, {
        at: './index.rsh:388:24:application',
        fs: ['at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v10176 = stdlib.add256(v3332, v9666);
      const v10180 = v3280.distrHis;
      const v10181 = v3280.distrIndex;
      const v10188 = v3280.wlArr;
      const v10189 = v3280.wlIndex;
      const v10192 = stdlib.add256(v3333, stdlib.checkedBigNumberify('./index.rsh:391:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v10194 = {
        ctcMan: v3370,
        currDistr: v9666,
        cv: v3361,
        distrHis: v10180,
        distrIndex: v10181,
        distrNum: v10192,
        docHash: v3357,
        saleDetails: v3375,
        saleLocked: v3335,
        totBT: v10176,
        totST: v3331,
        wlArr: v10188,
        wlIndex: v10189
        };
      const v10195 = true;
      const v10196 = await txn1.getOutput('dBT', 'v10195', ctc3, v10195);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v9593, v10196), {
          at: './index.rsh:376:13:application',
          fs: ['at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:394:20:application call to "res" (defined at: ./index.rsh:386:13:function exp)', 'at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v23552 = v10194;
      const v23554 = v9721;
      const v23555 = v10194.totST;
      const v23556 = v10194.totBT;
      const v23557 = v10194.distrNum;
      const v23558 = v10194.saleLocked;
      const v23559 = v10194.docHash;
      const v23560 = v23559[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v23561 = v10194.cv;
      const v23562 = v23561[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v23563 = v23561[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v23564 = v9721[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v23565 = v23564[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v23566 = stdlib.cast("UInt", "UInt256", v23565, false);
      const v23567 = v10194.ctcMan;
      const v23568 = v10194.saleDetails;
      const v23569 = v23568.qty;
      const v23570 = v23568.price;
      const v23571 = v23568.sold;
      const v23572 = v23568.status;
      const v23573 = v23568.cumProceeds;
      return;
      
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc17]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc27,
    buyOS0_709: ctc28,
    cBT0_709: ctc29,
    cCM0_709: ctc27,
    claimOSpr0_709: ctc29,
    createOS0_709: ctc15,
    dBT0_709: ctc30,
    docHash0_709: ctc24,
    endOS0_709: ctc29,
    optIn0_709: ctc29,
    remWL0_709: ctc27
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3479 = ctc.selfAddress();
  const v3481 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:122:35:application call to "rundocHash0_709" (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v3487 = stdlib.eq(v3359, stdlib.checkedBigNumberify('./index.rsh:259:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3487, {
    at: './index.rsh:259:23:application',
    fs: ['at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:18:function exp)', 'at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:122:35:application call to "rundocHash0_709" (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v3488 = stdlib.addressEq(v3479, v2949);
  const v3490 = stdlib.addressEq(v3479, v3370);
  const v3491 = v3488 ? true : v3490;
  stdlib.assert(v3491, {
    at: './index.rsh:260:23:application',
    fs: ['at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:18:function exp)', 'at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:122:35:application call to "rundocHash0_709" (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v3495 = ['docHash0_709', v3481];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3495],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:264:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:264:26:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v10444 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v10445 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v10446 = [v3367, v10444, v10445];
          const v10447 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v10446);
          ;
          const v10932 = v10319[stdlib.checkedBigNumberify('./index.rsh:254:13:spread', stdlib.UInt_max, '0')];
          const v10940 = stdlib.add(v3359, stdlib.checkedBigNumberify('./index.rsh:270:76:decimal', stdlib.UInt_max, '1'));
          const v10943 = v3280.currDistr;
          const v10945 = v3280.distrHis;
          const v10946 = v3280.distrIndex;
          const v10953 = v3280.wlArr;
          const v10954 = v3280.wlIndex;
          const v10955 = [v10932, v10940, v3783];
          const v10956 = {
            ctcMan: v3370,
            currDistr: v10943,
            cv: v3361,
            distrHis: v10945,
            distrIndex: v10946,
            distrNum: v3333,
            docHash: v10955,
            saleDetails: v3375,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v10953,
            wlIndex: v10954
            };
          const v10957 = true;
          const v10958 = await txn1.getOutput('docHash', 'v10957', ctc3, v10957);
          
          const v24112 = v10956;
          const v24114 = v10447;
          const v24115 = v10956.totST;
          const v24116 = v10956.totBT;
          const v24117 = v10956.distrNum;
          const v24118 = v10956.saleLocked;
          const v24119 = v10956.docHash;
          const v24120 = v24119[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v24121 = v10956.cv;
          const v24122 = v24121[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v24123 = v24121[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v24124 = v10447[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v24125 = v24124[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v24126 = stdlib.cast("UInt", "UInt256", v24125, false);
          const v24127 = v10956.ctcMan;
          const v24128 = v10956.saleDetails;
          const v24129 = v24128.qty;
          const v24130 = v24128.price;
          const v24131 = v24128.sold;
          const v24132 = v24128.status;
          const v24133 = v24128.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v10444 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v10445 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v10446 = [v3367, v10444, v10445];
      const v10447 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v10446);
      ;
      const v10932 = v10319[stdlib.checkedBigNumberify('./index.rsh:254:13:spread', stdlib.UInt_max, '0')];
      const v10935 = stdlib.eq(v3359, stdlib.checkedBigNumberify('./index.rsh:268:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10935, {
        at: './index.rsh:268:24:application',
        fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v10936 = stdlib.addressEq(v3781, v2949);
      const v10938 = stdlib.addressEq(v3781, v3370);
      const v10939 = v10936 ? true : v10938;
      stdlib.assert(v10939, {
        at: './index.rsh:269:24:application',
        fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v10940 = stdlib.add(v3359, stdlib.checkedBigNumberify('./index.rsh:270:76:decimal', stdlib.UInt_max, '1'));
      const v10943 = v3280.currDistr;
      const v10945 = v3280.distrHis;
      const v10946 = v3280.distrIndex;
      const v10953 = v3280.wlArr;
      const v10954 = v3280.wlIndex;
      const v10955 = [v10932, v10940, v3783];
      const v10956 = {
        ctcMan: v3370,
        currDistr: v10943,
        cv: v3361,
        distrHis: v10945,
        distrIndex: v10946,
        distrNum: v3333,
        docHash: v10955,
        saleDetails: v3375,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v10953,
        wlIndex: v10954
        };
      const v10957 = true;
      const v10958 = await txn1.getOutput('docHash', 'v10957', ctc3, v10957);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v10319, v10958), {
          at: './index.rsh:255:13:application',
          fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:271:20:application call to "res" (defined at: ./index.rsh:266:13:function exp)', 'at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v24112 = v10956;
      const v24114 = v10447;
      const v24115 = v10956.totST;
      const v24116 = v10956.totBT;
      const v24117 = v10956.distrNum;
      const v24118 = v10956.saleLocked;
      const v24119 = v10956.docHash;
      const v24120 = v24119[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v24121 = v10956.cv;
      const v24122 = v24121[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v24123 = v24121[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v24124 = v10447[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v24125 = v24124[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v24126 = stdlib.cast("UInt", "UInt256", v24125, false);
      const v24127 = v10956.ctcMan;
      const v24128 = v10956.saleDetails;
      const v24129 = v24128.qty;
      const v24130 = v24128.price;
      const v24131 = v24128.sold;
      const v24132 = v24128.status;
      const v24133 = v24128.cumProceeds;
      return;
      
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
      return;
      break;
      }
    }
  
  
  };
export async function _endOS3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _endOS3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _endOS3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc11]);
  const ctc26 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc13]);
  const ctc28 = stdlib.T_Tuple([ctc9]);
  const ctc29 = stdlib.T_Tuple([ctc6]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Tuple([ctc17]);
  const ctc32 = stdlib.T_Data({
    aST0_709: ctc26,
    addCoopId0_709: ctc27,
    addWL0_709: ctc28,
    buyOS0_709: ctc29,
    cBT0_709: ctc24,
    cCM0_709: ctc28,
    claimOSpr0_709: ctc24,
    createOS0_709: ctc15,
    dBT0_709: ctc30,
    docHash0_709: ctc31,
    endOS0_709: ctc24,
    optIn0_709: ctc24,
    remWL0_709: ctc28
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3414 = ctc.selfAddress();
  const v3416 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:122:35:application call to "runendOS0_709" (defined at: ./index.rsh:176:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'endOS'
    });
  const v3418 = stdlib.addressEq(v3414, v2949);
  const v3420 = stdlib.addressEq(v3414, v3370);
  const v3421 = v3418 ? true : v3420;
  stdlib.assert(v3421, {
    at: './index.rsh:180:23:application',
    fs: ['at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:17:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:122:35:application call to "runendOS0_709" (defined at: ./index.rsh:176:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'endOS'
    });
  const v3424 = 'activ';
  const v3425 = stdlib.digest(ctc25, [v3379]);
  const v3427 = stdlib.digest(ctc25, [v3424]);
  const v3428 = stdlib.digestEq(v3425, v3427);
  stdlib.assert(v3428, {
    at: './index.rsh:181:23:application',
    fs: ['at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:17:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:122:35:application call to "runendOS0_709" (defined at: ./index.rsh:176:14:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'sale must be active',
    who: 'endOS'
    });
  const v3431 = ['endOS0_709', v3416];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3431],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:184:25:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "endOS"
            });
          ;
          const v11170 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v11171 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v11172 = [v3367, v11170, v11171];
          const v11173 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v11172);
          ;
          const v11718 = {
            cumProceeds: v3380,
            price: v3377,
            qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            status: v3276
            };
          const v11720 = v3280.currDistr;
          const v11722 = v3280.distrHis;
          const v11723 = v3280.distrIndex;
          const v11730 = v3280.wlArr;
          const v11731 = v3280.wlIndex;
          const v11734 = {
            ctcMan: v3370,
            currDistr: v11720,
            cv: v3361,
            distrHis: v11722,
            distrIndex: v11723,
            distrNum: v3333,
            docHash: v3357,
            saleDetails: v11718,
            saleLocked: v3335,
            totBT: v3332,
            totST: v3331,
            wlArr: v11730,
            wlIndex: v11731
            };
          const v11735 = true;
          const v11736 = await txn1.getOutput('endOS', 'v11735', ctc3, v11735);
          
          const v24672 = v11734;
          const v24674 = v11173;
          const v24675 = v11734.totST;
          const v24676 = v11734.totBT;
          const v24677 = v11734.distrNum;
          const v24678 = v11734.saleLocked;
          const v24679 = v11734.docHash;
          const v24680 = v24679[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v24681 = v11734.cv;
          const v24682 = v24681[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v24683 = v24681[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v24684 = v11173[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v24685 = v24684[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v24686 = stdlib.cast("UInt", "UInt256", v24685, false);
          const v24687 = v11734.ctcMan;
          const v24688 = v11734.saleDetails;
          const v24689 = v24688.qty;
          const v24690 = v24688.price;
          const v24691 = v24688.sold;
          const v24692 = v24688.status;
          const v24693 = v24688.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc32],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v11170 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v11171 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v11172 = [v3367, v11170, v11171];
      const v11173 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v11172);
      ;
      const v11696 = stdlib.addressEq(v3781, v2949);
      const v11698 = stdlib.addressEq(v3781, v3370);
      const v11699 = v11696 ? true : v11698;
      stdlib.assert(v11699, {
        at: './index.rsh:187:24:application',
        fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'endOS'
        });
      const v11702 = 'activ';
      const v11703 = stdlib.digest(ctc25, [v3379]);
      const v11705 = stdlib.digest(ctc25, [v11702]);
      const v11706 = stdlib.digestEq(v11703, v11705);
      stdlib.assert(v11706, {
        at: './index.rsh:188:24:application',
        fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: 'sale must be active',
        who: 'endOS'
        });
      const v11718 = {
        cumProceeds: v3380,
        price: v3377,
        qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        status: v3276
        };
      const v11720 = v3280.currDistr;
      const v11722 = v3280.distrHis;
      const v11723 = v3280.distrIndex;
      const v11730 = v3280.wlArr;
      const v11731 = v3280.wlIndex;
      const v11734 = {
        ctcMan: v3370,
        currDistr: v11720,
        cv: v3361,
        distrHis: v11722,
        distrIndex: v11723,
        distrNum: v3333,
        docHash: v3357,
        saleDetails: v11718,
        saleLocked: v3335,
        totBT: v3332,
        totST: v3331,
        wlArr: v11730,
        wlIndex: v11731
        };
      const v11735 = true;
      const v11736 = await txn1.getOutput('endOS', 'v11735', ctc3, v11735);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v11045, v11736), {
          at: './index.rsh:177:13:application',
          fs: ['at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)', 'at ./index.rsh:193:20:application call to "res" (defined at: ./index.rsh:186:13:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
          msg: 'out',
          who: 'endOS'
          });
        }
      else {
        }
      
      const v24672 = v11734;
      const v24674 = v11173;
      const v24675 = v11734.totST;
      const v24676 = v11734.totBT;
      const v24677 = v11734.distrNum;
      const v24678 = v11734.saleLocked;
      const v24679 = v11734.docHash;
      const v24680 = v24679[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v24681 = v11734.cv;
      const v24682 = v24681[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v24683 = v24681[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v24684 = v11173[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v24685 = v24684[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v24686 = stdlib.cast("UInt", "UInt256", v24685, false);
      const v24687 = v11734.ctcMan;
      const v24688 = v11734.saleDetails;
      const v24689 = v24688.qty;
      const v24690 = v24688.price;
      const v24691 = v24688.sold;
      const v24692 = v24688.status;
      const v24693 = v24688.cumProceeds;
      return;
      
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc27,
    buyOS0_709: ctc28,
    cBT0_709: ctc24,
    cCM0_709: ctc27,
    claimOSpr0_709: ctc24,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc24,
    optIn0_709: ctc24,
    remWL0_709: ctc27
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3551 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:122:35:application call to "runoptIn0_709" (defined at: ./index.rsh:348:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v3555 = ['optIn0_709', v3551];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3555],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:354:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:354:25:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v11896 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v11897 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v11898 = [v3367, v11896, v11897];
          const v11899 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v11898);
          ;
          await stdlib.simMapSet(sim_r, 6, v3781, true);
          const v12475 = true;
          const v12476 = await txn1.getOutput('optIn', 'v12475', ctc3, v12475);
          
          const v25232 = v3280;
          const v25234 = v11899;
          const v25235 = v3280.totST;
          const v25236 = v3280.totBT;
          const v25237 = v3280.distrNum;
          const v25238 = v3280.saleLocked;
          const v25239 = v3280.docHash;
          const v25240 = v25239[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v25241 = v3280.cv;
          const v25242 = v25241[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v25243 = v25241[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v25244 = v11899[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v25245 = v25244[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v25246 = stdlib.cast("UInt", "UInt256", v25245, false);
          const v25247 = v3280.ctcMan;
          const v25248 = v3280.saleDetails;
          const v25249 = v25248.qty;
          const v25250 = v25248.price;
          const v25251 = v25248.sold;
          const v25252 = v25248.status;
          const v25253 = v25248.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v11896 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v11897 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v11898 = [v3367, v11896, v11897];
      const v11899 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v11898);
      ;
      await stdlib.mapSet(map6, v3781, true);
      const v12475 = true;
      const v12476 = await txn1.getOutput('optIn', 'v12475', ctc3, v12475);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v11771, v12476), {
          at: './index.rsh:349:13:application',
          fs: ['at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:358:20:application call to "res" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:356:13:application call to [unknown function] (defined at: ./index.rsh:356:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v25232 = v3280;
      const v25234 = v11899;
      const v25235 = v3280.totST;
      const v25236 = v3280.totBT;
      const v25237 = v3280.distrNum;
      const v25238 = v3280.saleLocked;
      const v25239 = v3280.docHash;
      const v25240 = v25239[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v25241 = v3280.cv;
      const v25242 = v25241[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v25243 = v25241[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v25244 = v11899[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v25245 = v25244[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v25246 = stdlib.cast("UInt", "UInt256", v25245, false);
      const v25247 = v3280.ctcMan;
      const v25248 = v3280.saleDetails;
      const v25249 = v25248.qty;
      const v25250 = v25248.price;
      const v25251 = v25248.sold;
      const v25252 = v25248.status;
      const v25253 = v25248.cumProceeds;
      return;
      
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_709: ctc25,
    addCoopId0_709: ctc26,
    addWL0_709: ctc24,
    buyOS0_709: ctc27,
    cBT0_709: ctc28,
    cCM0_709: ctc24,
    claimOSpr0_709: ctc28,
    createOS0_709: ctc15,
    dBT0_709: ctc29,
    docHash0_709: ctc30,
    endOS0_709: ctc28,
    optIn0_709: ctc28,
    remWL0_709: ctc24
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
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3512 = ctc.selfAddress();
  const v3514 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:122:35:application call to "runremWL0_709" (defined at: ./index.rsh:300:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v3518 = stdlib.addressEq(v3512, v2949);
  const v3520 = stdlib.addressEq(v3512, v3370);
  const v3521 = v3518 ? true : v3520;
  stdlib.assert(v3521, {
    at: './index.rsh:304:23:application',
    fs: ['at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:18:function exp)', 'at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:122:35:application call to "runremWL0_709" (defined at: ./index.rsh:300:13:function exp)', 'at ./index.rsh:122:35:application call to [unknown function] (defined at: ./index.rsh:122:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v3525 = ['remWL0_709', v3514];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2949, v2953, v3276, v3280, v3283, v3331, v3332, v3333, v3335, v3357, v3359, v3361, v3362, v3364, v3366, v3367, v3368, v3370, v3375, v3376, v3377, v3378, v3379, v3380, v3525],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:308:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:308:26:decimal', stdlib.UInt_max, '0'), v2953]]],
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
      
      const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
      
      switch (v3782[0]) {
        case 'aST0_709': {
          const v3785 = v3782[1];
          
          break;
          }
        case 'addCoopId0_709': {
          const v4511 = v3782[1];
          
          break;
          }
        case 'addWL0_709': {
          const v5237 = v3782[1];
          
          break;
          }
        case 'buyOS0_709': {
          const v5963 = v3782[1];
          
          break;
          }
        case 'cBT0_709': {
          const v6689 = v3782[1];
          
          break;
          }
        case 'cCM0_709': {
          const v7415 = v3782[1];
          
          break;
          }
        case 'claimOSpr0_709': {
          const v8141 = v3782[1];
          
          break;
          }
        case 'createOS0_709': {
          const v8867 = v3782[1];
          
          break;
          }
        case 'dBT0_709': {
          const v9593 = v3782[1];
          
          break;
          }
        case 'docHash0_709': {
          const v10319 = v3782[1];
          
          break;
          }
        case 'endOS0_709': {
          const v11045 = v3782[1];
          
          break;
          }
        case 'optIn0_709': {
          const v11771 = v3782[1];
          
          break;
          }
        case 'remWL0_709': {
          const v12497 = v3782[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v12622 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
          const v12623 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
          const v12624 = [v3367, v12622, v12623];
          const v12625 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v12624);
          ;
          const v13209 = v12497[stdlib.checkedBigNumberify('./index.rsh:300:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 7, v13209, undefined /* Nothing */);
          const v13215 = true;
          const v13216 = await txn1.getOutput('remWL', 'v13215', ctc3, v13215);
          
          const v25792 = v3280;
          const v25794 = v12625;
          const v25795 = v3280.totST;
          const v25796 = v3280.totBT;
          const v25797 = v3280.distrNum;
          const v25798 = v3280.saleLocked;
          const v25799 = v3280.docHash;
          const v25800 = v25799[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
          const v25801 = v3280.cv;
          const v25802 = v25801[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
          const v25803 = v25801[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
          const v25804 = v12625[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v25805 = v25804[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
          const v25806 = stdlib.cast("UInt", "UInt256", v25805, false);
          const v25807 = v3280.ctcMan;
          const v25808 = v3280.saleDetails;
          const v25809 = v25808.qty;
          const v25810 = v25808.price;
          const v25811 = v25808.sold;
          const v25812 = v25808.status;
          const v25813 = v25808.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3782], secs: v3784, time: v3783, didSend: v1604, from: v3781 } = txn1;
  switch (v3782[0]) {
    case 'aST0_709': {
      const v3785 = v3782[1];
      return;
      break;
      }
    case 'addCoopId0_709': {
      const v4511 = v3782[1];
      return;
      break;
      }
    case 'addWL0_709': {
      const v5237 = v3782[1];
      return;
      break;
      }
    case 'buyOS0_709': {
      const v5963 = v3782[1];
      return;
      break;
      }
    case 'cBT0_709': {
      const v6689 = v3782[1];
      return;
      break;
      }
    case 'cCM0_709': {
      const v7415 = v3782[1];
      return;
      break;
      }
    case 'claimOSpr0_709': {
      const v8141 = v3782[1];
      return;
      break;
      }
    case 'createOS0_709': {
      const v8867 = v3782[1];
      return;
      break;
      }
    case 'dBT0_709': {
      const v9593 = v3782[1];
      return;
      break;
      }
    case 'docHash0_709': {
      const v10319 = v3782[1];
      return;
      break;
      }
    case 'endOS0_709': {
      const v11045 = v3782[1];
      return;
      break;
      }
    case 'optIn0_709': {
      const v11771 = v3782[1];
      return;
      break;
      }
    case 'remWL0_709': {
      const v12497 = v3782[1];
      undefined /* setApiDetails */;
      ;
      const v12622 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '1')];
      const v12623 = v3366[stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '2')];
      const v12624 = [v3367, v12622, v12623];
      const v12625 = stdlib.Array_set(v3283, stdlib.checkedBigNumberify('./index.rsh:122:35:dot', stdlib.UInt_max, '0'), v12624);
      ;
      const v13209 = v12497[stdlib.checkedBigNumberify('./index.rsh:300:13:spread', stdlib.UInt_max, '0')];
      const v13210 = stdlib.addressEq(v3781, v2949);
      const v13212 = stdlib.addressEq(v3781, v3370);
      const v13213 = v13210 ? true : v13212;
      stdlib.assert(v13213, {
        at: './index.rsh:311:24:application',
        fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map7, v13209, undefined /* Nothing */);
      const v13215 = true;
      const v13216 = await txn1.getOutput('remWL', 'v13215', ctc3, v13215);
      if (v1604) {
        stdlib.protect(ctc0, await interact.out(v12497, v13216), {
          at: './index.rsh:301:13:application',
          fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:314:20:application call to "res" (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v25792 = v3280;
      const v25794 = v12625;
      const v25795 = v3280.totST;
      const v25796 = v3280.totBT;
      const v25797 = v3280.distrNum;
      const v25798 = v3280.saleLocked;
      const v25799 = v3280.docHash;
      const v25800 = v25799[stdlib.checkedBigNumberify('./index.rsh:146:28:application', stdlib.UInt_max, '1')];
      const v25801 = v3280.cv;
      const v25802 = v25801[stdlib.checkedBigNumberify('./index.rsh:147:42:array ref', stdlib.UInt_max, '0')];
      const v25803 = v25801[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, '1')];
      const v25804 = v12625[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v25805 = v25804[stdlib.checkedBigNumberify('./index.rsh:148:46:application', stdlib.UInt_max, '0')];
      const v25806 = stdlib.cast("UInt", "UInt256", v25805, false);
      const v25807 = v3280.ctcMan;
      const v25808 = v3280.saleDetails;
      const v25809 = v25808.qty;
      const v25810 = v25808.price;
      const v25811 = v25808.sold;
      const v25812 = v25808.status;
      const v25813 = v25808.cumProceeds;
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
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _aST3(ctcTop, interact);}
  };
export async function addCoopId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addCoopId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addCoopId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _addCoopId3(ctcTop, interact);}
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
export async function buyOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _buyOS3(ctcTop, interact);}
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
export async function claimOSpr(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimOSpr expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimOSpr expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _claimOSpr3(ctcTop, interact);}
  };
export async function createOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _createOS3(ctcTop, interact);}
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
export async function endOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for endOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for endOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _endOS3(ctcTop, interact);}
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
    impure: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `buyOS(uint64)(uint64,uint64,uint64,byte[5],uint64)`, `cBT()uint256`, `cCM(address)byte`, `claimOSpr()byte`, `createOS(uint64,uint64)(uint64,uint64,uint64,byte[5],uint64)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `endOS()byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSale()(uint64,uint64,uint64,byte[5],uint64)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`, `wlMembers()address[25]`],
    sigs: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `buyOS(uint64)(uint64,uint64,uint64,byte[5],uint64)`, `cBT()uint256`, `cCM(address)byte`, `claimOSpr()byte`, `claimSTBT(address)(uint256,uint256)`, `createOS(uint64,uint64)(uint64,uint64,uint64,byte[5],uint64)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `endOS()byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSale()(uint64,uint64,uint64,byte[5],uint64)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`, `wlMembers()address[25]`]
    },
  appApproval: `BiBRAH8IAQMgoAb9AvwD+wT6BfkGcQZowAyoDaYPxhUYBBBgBUARyAFwCQfqB7ytx6sIpdL0kgyamI65DMfr7O0N2I6Z4A7n7I64DeDlw7AMsILfsAzsFt3R4ZgJobfa1wr2lavaC4wWrBbMFtSdk8wI8eGT4QjtFvmEipEF/eappQfdlpaDCIrSwpsI7hjJ/Ji8BZec/dQGnPiDiAKO4/3gAtjb/JkDjRizGbsZwxnLGdAZl8TBrwGInfftAQL///////////8BLc4V+xUlDCHJB4QB5gbJAaEGZCYdAQEBBgEAAQIBAwEEAQUBBwEMAQgBCQEKAQsBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQAgg4NGe0jACsbbGwAf9XxPwnqspe0HAhLyTDVhn3JaeGogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiNQAxGEEdmicaZEkiWzUBSSRbNQIhFVs1CDEZJRJBAFwxACEer0sBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISEIdDjYaABdJQQZMIjUEJTUGSSEfDEADiEkhIAxAAcJJISEMQADLSSEiDEAANUkhIwxAABUhIxJENhoBNf8nCDT/UCEYr1BCBtwhIhJENhoBNhoCUDX/Jwc0/1CBUK9QQgbDSSEkDEAAByEkEkQ0AQAhIRJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDgc4YIQVYNANXIAhQNQdCHC9JISUMQADVSSEmDEAAeSEmEkQ0ASEEEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQMhJyVYNQdCG6ghJRJENAEhBBJENhoBNf8yAzT/iBu7V2MhSTX+VwEgNP4iVU0yAzT/iBumV4QhSTX+VwEgNP4iVU1QMgM0/4gbkFelIUk1/lcBIDT+IlVNUDUHQhtTISASRCcaNf8nCzT/UCEWr1BCBURJISgMQADdSSEpDEAApEkhKgxAABMhKhJEJxo1/yk0/1AhFq9QQgUcISkSRDQBIQQSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1AyErIQVYNAMhLCEFWFA0AyEtIQVYUDUHQhqNISgSRDQBIQQSRDYaAYgaplfIAUk1/iJVQAAGIjX/QgAGJTX/QgAANP8WUQcINQdCGltJIS4MQADASSEvDEAAPyEvEkQ0ASEEEkQ2GgE1/zIDNP+IGmBXACFJNf5XASA0/iJVTTIDNP+IGktXISFJNf5XASA0/iJVTVA1B0IaDiEuEkQ0ASEEEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQMhMCEbWDUHQhmUIR8SRDYaATX/KzT/UCEYr1BCA4VJITEMQAEaSSEyDEAAt0khMwxAADBJITQMQAAVITQSRDYaATX/Jwk0/1AhGK9QQgNUITMSRDYaATX/KDT/UIE8r1BCA0AhMhJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDVwAgNAMhNSEFWFA1B0IYu0khNgxAAEFJITcMQAApITcSRDQBIQQSRCI2GgGIGMVXxgJJNf9XAQEXNP8iVU0WUQcINQdCGIQhNhJENhoBNf8nCjT/UEICeCExEkQnGjX/Jww0/1AhFq9QQgJkSSE4DEABPEkhOQxAASBJIToMQACDIToSRDQBIQQSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1AyE7IRRYNAOBkRiBJFhQNQdCF8chORJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDITwkWDQDIT0kWFA0AyE+JFhQNAMhPyEXWFA0AyFAJFhQNQdCFzEhOBJENhoBNf8nBjT/UCEYr1BCASFJIUEMQAAwSSFCDEAAFSFCEkQ2GgE1/ycENP9QgVivUEIA/iFBEkQnGjX/JwU0/1AhFq9QQgDqgfX635IBEkQ2GgE2GgJQNhoDUDX/KjT/UEIAzjYaAhc1BDYaAzYaARdJIUMMQBFwSSEEDEAAsiEEEkQhBDQBEkQ0BEkiEkw0AhIRRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1A1cAIDX/gASnZcS0sDIGIUQPRDT/MQASRDT/NAMhBVs0A1coBTQDIUUhRlgyBjQDIUchGVhCE6xIIQQ0ARJENARJIhJMNAISEUQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQNJSkpKSkpKSkpKSVcAIDX/IQVbNf5XKAU1/SFFIUZYNfwhRyEZWDX7ISshBVg1+iEsIQVYNfkhLSEFWDX4ISclWBc19yEwIRtYNfaB3RdbNfWB5ReBKFg19IG1GCEZWDXzgcYYWzXyITUhBVg18YGOGSFIWDXwITxbNe8hPVs17iE+WzXtIT8hF1g17CFAWzXrSTUFNeqABOO40ZU06lCwMgYhRAxENOoiVUkhDQxABQpJIRwMQAKOSYELDEABXkkhSQxAAK4hSRJENOpXASA157EisgEhDbIQNAiyGLMxADT/EjEANPESEUQ050mIFL0iIRpMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISIAJAAAAAAAAM58BsCg1BzT/NP40/TT8MgY08hY081cICFA081cQAVBCEcBIsSKyASENshA0CLIYszEAMQCIFCSAAgEBNedJVwDGNOdQTCEagaIGWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEiACQAAAAAAADC7AbAoNQc0/zT+NP00/DIGNPIWNPNXCAhQNPNXEAFQQhEXSYEKDEAAl0ixIrIBIQ2yEDQIshizMQA0/xIxADTxEhFENOwBJxsSRIAJAAAAAAAALdcBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNOsWNO4WUCSvUCSvUDT9UFA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCEHlINOpXAWA15zT1IhJEMQA0/xIxADTxEhFEgAkAAAAAAAAqzQGwKDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA05zT1JQgWUDIGFlBQNPBQNPcWUQcIUDT5UDT6UDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQg/uSSEdDEABnkkkDEAAvUg06lcBIDXnsSKyASENshA0CLIYszTnSTXmSUohFVsiEkQkWyISRCJbIhJEIRNbNeU05TT+iBJzMQA0/xIxADTxEhFENOUiDUSACQAAAAAAACfTAbAoNQc0/zT+NP008TTmUDT0UDT8IQ4hD1hQNPwhECRYUDT4JxygiBJOUDT2UDTwUDT3FlEHCFA0+TTmoIgSOFA0+lA0/CERIQZYUDT8IRIkWFAyBjTyNOUIFjTzVwgIUDTzVxABUEIPJEg06lcBEDXnsSKyASENshA0CLIYszTnIls15jTnJFs15TEANP8SMQA08RIRRDTmIg1ENOUiDUSABWFjdGl2NeSACAAAAAAAACTNNOYWNOUWUDTtFlA05FA06xZQULA05hY05RZQNO0WUDTkUDTrFlA1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNOsWNOUWUDTmFlA07RZQNORQUDT3FlEHCFA0+VA0+lA0/CERIQZYUDT8IRIkWFAyBjTyFjTzVwgIUDTzVxABUEIOSUixIrIBIQ2yEDQIshizNPIWNPNXCAhQNPNXEAFQNecxADT/EjEANPESEUQ06yINRDTnVwARSTXmIltJNeU06w9EsSKyATTrshIhFLIQMQCyFDT+shGzgAkAAAAAAAAhxgGwKDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA09lAkrzTuFlA07xZQNO0WUDTsUFA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY05TTrCRY05lcICFA05lcQAVBCDXlJIQQMQAW9SSEUDEACi0khFwxAAHxINOpXASA15zEANP8SMQA08RIRRIAJAAAAAAAAHqcBsCg1BzT/NP40/TTnNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNPBQNPcWUQcIUDT5UDT6UDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQgzoSLEisgEhDbIQNAiyGLM08hY081cICFA081cQAVA15zEAiA89V8gBSTXlIlVAAAYiNeZCAAYlNeZCAAA05kQ051cAEUk15SJbNeQhE6805BZQMgOlRDT6MgOlRDIDMQCIDv9XYyFJNeJXASA04iJVTTXjNPo046dENOMyA6VENOM0/FcgIKOID0k0+qKID0NJNeJJSiEVWyISRCRbIhJEIlsiEkQhE1tJNeE05A5EsSKyATThshIhFLIQMQCyFDT+shGzMQAxAIgOlygyAzEAiA6PV4QhSTXgVwEgNOAiVU004qCIDuxQNeBJVwCENOBQTIGlAYHFBlhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIMQAxAIgODSgyAzEAiA4FV6UhSTXgVwEgNOAiVU0nHKCIDmJQNeBJVwClNOBQTIHGAYGkBlhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIgAgAAAAAAAAbrTTiULA04jUHNP80/jT9NPwyBjTkNOEJFjTlVwgIUDTlVxABUEIK4Eg06lcBCDXnIjXmsSKyASENshA0CLIYszTmJQhJNeYhHQxA/+Y05xc15jTuNOYLNeU05TT+iA1yNOYiDUQ07AEnGxJENO805g9EMQCIDQpXyAFJNeMiVUAABiI15EIABiU15EIAADTkRCETrzTmFlA14zEAMQCIDOAoMgMxAIgM2FcAIUk14lcBIDTiIlVNNOOgiA01UDXiIUohS1g04kxQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIMQAxAIgMXSgyAzEAiAxVV2MhSTXiVwEgNOIiVU0046CIDLJQNeJJVwBjNOJQTCFMIU1YUEsBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISCEGrzEAiAvUIU4hT1hJNeElIQZYNOEiVU014iEcrzXhIjXgNOIkNOALJFgXNd804SJVQAAGJTXeQgAGIjXeQgAANOEoNOAWUDTeIjTfEhBNNeE04CUISTXgIVAMQP/EMQAxAIgLdig04iIkIjThSTXgJVs04CJVTQtSNOYWUDTiJEkiNOFJNeAlWzTgIlVNCwghBlJQUDXgVwDJNOBQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhINO805gk14DTtNOYINd806zTmNO4LCDXegAgAAAAAAAAYrzTgFjTuFlA03xZQNOxQNN4WUFCwNOAWNO4WUDTfFlA07FA03hZQNQc0/zT+NP008TT8VyAgUDT0UDT8IQ4hD1hQNPwhECRYUDT4UDT2UDTeFjTuFlA04BZQNN8WUDTsUFA09xZRBwhQNPlQNPo046CICsZQNPwhESEGWFA0/CESJFhQMgY08jTlCBY081cICFA081cQAVBCB7VJJQxAAZJJIUMMQAETSDTqVwEgNeexIrIBIQ2yEDQIshizNOc15jEANP8SMQA08RIRRDTmSYgJ9iUhGkxWSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhINPwhEltJNeUlCCI05SETD0015IAJAAAAAAAAFXkBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNPBQNPcWUQcIUDT5UDT6UDT8IREhBlhJIiEFNOQLUjTmUEwhBUk05AsIIQZSUFA05BZQMgY08hY081cICFA081cQAVBCBpVINOpXASQ154AJAAAAAAAAEnQBsCg1BzT/NP40/TTxNPxXICBQNAMhOyEUWDTnUFA0/CEOIQ9YUDT8IRAkWFA0+FA09lA08FA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCBh1INOpXAWA15yI15rEisgEhDbIQNAiyGLM05iUISTXmIR0MQP/mNOdXACA15jTnVyAgNeU051dAIDXkNOY0/xI05jTxEhFENOQyA6VENOVJiAhEJSEaTFZLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEg05UmIB+UoMgM05YgH3VcAIUk141cBIDTjIlVNNOSgiAg6UDXjIUohS1g040xQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhINOVJiAdjKDIDNOWIB1tXYyFJNeNXASA04yJVTTTkoIgHuFA140lXAGM041BMIUwhTVhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIIQavNOWIBtohTiFPWEk14iUhBlg04iJVTTXjIRyvNeIiNeE04yQ04QskWBc14DTiIlVAAAYlNd9CAAYiNd9CAAA04ig04RZQNN8iNOASEE014jThJQhJNeEhUAxA/8Q05UmIBn0oNOMiJCI04kk14SVbNOEiVU0LUjTkSUohFVsiEkQkWyISRCJbIhJEIRNbFlA04yRJIjTiSTXhJVs04SJVTQsIIQZSUFA14VcAyTThUEsBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISIAJAAAAAAAAD3EBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNPBQNPcWUQcIUDT5UDT6NOSgiAYDUDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQgL1IhJEgcCaDIgFnbEisgEhDbIQIrIYgAYGMQAyCRKyHimyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfxXqSA1+4AEmjD5HTT/UDT+FlEHCFA0/VA0/BZQNPtQsCEZr0k1+lcAETX5gaCNBogFIrEisgEishIhFLIQMgqyFDT8shGzIRWvNfiABWVuZGVkNfcxADT8NPc0/TIDUIAoMS4wNGNvb3BlcmF0aXZJZGNvb3BlcmF0aXZJZGNvb3BlcmF0aXZJZFA0+ElQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQUCSvUDIDUIBwYWpkbmFlaW5hd2luZGlhZW5ndG5pZnJqd3JpdG5pcXdybmlyZWZpbmRpbmlnYWpkbmFlaW5hd2lkaWFlbmd0bmlpdG5pcXdybmlyZWZpbmRpbmlnZnVhZWJmdWJhd3VyAAAAAAAAAAAAAAAAAAAAAFAyAzT3UFA0/hZRBwhQMgNQMgNQMQAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFBQJK9QMgYkrzT5VwgIUDT5VxABUEIAADX/Nf41/TX8Nfs1+jT9gYYPIQVYNfk0/YHmDiEFWDX4NP2BsA0hBVg19zT9geUOJVgXNfY0/YHQDSEbWEk19SEWWzX0NP1XQChJNfNXAAQ18jTzVwQkNfE0/1cAEUk18CJbNe8hE6807xZQNe40/VcAIDXtNP2BwA4hSFhJNewhFVs16zTsJFs16jTsIRNbNek07FcgBTXoNOwiWzXnNPo0+xZQNPxQNP1QNP9QNPlQNPhQNPdQNPYWUQcIUDT1UDT0FlA081A08lA08VA08FA07xZQNO5QNO1QNOxQNOsWUDTqFlA06RZQNOhQNOcWUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwEhByNYZycFSwEhCCNYZycGSwEhCSNYZylLASEKI1hnJwdLASELI1hnJwlLAYH4ByNYZycKSwGB9wgjWGcnC0sBgfYJI1hnJwxLAYH1CiNYZycISwGB9AsjWGcnDUsBgfMMI1hnJw5LAYHyDSNYZycPSwGB8Q4jWGcnEEsBgfAPI1hnJxFLAYHvECNYZycSSwGB7hEjWGcnE0sBge0SI1hnJxRLAYHsEyNYZycVSwGB6xQjWGcnFksBgeoVI1hnJxdLAYHpFiNYZycYSwGB6BcjWGcnGUsBgecYIQxYZ0ghBDUBMgY1AkIALTEZIRcSRLEisgEhDbIQNAiyGCEXshmzsSKyASKyCCWyEDIJsgkyCrIHs0IABTEZIhJEJxo0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEklCDIEEkQxFhJEJUMxGSISREL/3yIxNBJEgRsxNRJEIjE2EkQkMTcSRCI1ASI1AiI1CEL/pkkxGGFAAAVIIR6viUkqYksBKGJQSwErYlBLAScEYlBLAScFYlBLAScGYlBLASliUEsBJwdiUExIiTQASUolCDUAOAcyChJEOBAlEkQ4CBJEiTQASUpJJQg1ADgUMgoSRDgQIRQSRDgRTwISRDgSEkSJSRUhBUwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    api_aST: 7,
    api_addWL: 1,
    api_buyOS: 7,
    api_cBT: 1,
    api_claimOSpr: 1,
    api_createOS: 1,
    api_dBT: 1,
    api_endOS: 1,
    api_optIn: 1,
    api_remWL: 1
    },
  extraPages: 3,
  mapDataKeys: 8,
  mapDataSize: 1002,
  stateKeys: 26,
  stateSize: 3288,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 may use up to 9 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:122:35:dot.`]
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
                "internalType": "struct T27",
                "name": "v2950",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2951",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2952",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2953",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2954",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
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
                "internalType": "struct T27",
                "name": "v2950",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2951",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2952",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2953",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2954",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
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
                    "internalType": "enum _enum_T37",
                    "name": "which",
                    "type": "uint8"
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
                    "internalType": "struct T30",
                    "name": "_aST0_709",
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
                            "internalType": "bytes4",
                            "name": "elem1",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_addCoopId0_709",
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
                    "internalType": "struct T32",
                    "name": "_addWL0_709",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_buyOS0_709",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_709",
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
                    "internalType": "struct T32",
                    "name": "_cCM0_709",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimOSpr0_709",
                    "type": "bool"
                  },
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
                    "internalType": "struct T10",
                    "name": "_createOS0_709",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_dBT0_709",
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
                        "internalType": "struct T12",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T36",
                    "name": "_docHash0_709",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_endOS0_709",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_709",
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
                    "internalType": "struct T32",
                    "name": "_remWL0_709",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T37",
                "name": "v3782",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
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
        "internalType": "struct T42",
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
    "name": "_reach_oe_v10195",
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
    "name": "_reach_oe_v10957",
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
    "name": "_reach_oe_v11735",
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
    "name": "_reach_oe_v12475",
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
    "name": "_reach_oe_v13215",
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
    "name": "_reach_oe_v3953",
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
    "name": "_reach_oe_v4724",
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
    "name": "_reach_oe_v5497",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v6319",
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
    "name": "_reach_oe_v7085",
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
    "name": "_reach_oe_v7847",
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
    "name": "_reach_oe_v8646",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v9421",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap7Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
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
        "internalType": "struct T2",
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
    "name": "_reachMap8Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256[100]",
            "name": "_Some",
            "type": "uint256[100]"
          }
        ],
        "internalType": "struct T4",
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
                    "internalType": "enum _enum_T37",
                    "name": "which",
                    "type": "uint8"
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
                    "internalType": "struct T30",
                    "name": "_aST0_709",
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
                            "internalType": "bytes4",
                            "name": "elem1",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_addCoopId0_709",
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
                    "internalType": "struct T32",
                    "name": "_addWL0_709",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_buyOS0_709",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_709",
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
                    "internalType": "struct T32",
                    "name": "_cCM0_709",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimOSpr0_709",
                    "type": "bool"
                  },
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
                    "internalType": "struct T10",
                    "name": "_createOS0_709",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_dBT0_709",
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
                        "internalType": "struct T12",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T36",
                    "name": "_docHash0_709",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_endOS0_709",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_709",
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
                    "internalType": "struct T32",
                    "name": "_remWL0_709",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T37",
                "name": "v3782",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T40",
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
        "internalType": "struct T42",
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
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes4",
            "name": "elem1",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T8",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "addCoopId",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "buyOS",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
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
    "name": "claimOSpr",
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
        "name": "v25832",
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
        "internalType": "struct T5",
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
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "createOS",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
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
        "internalType": "struct T12",
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
    "name": "endOS",
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
        "internalType": "struct T20",
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
        "name": "v25836",
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
        "internalType": "struct T20",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
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
        "internalType": "struct T22",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vCurrSale",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
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
            "internalType": "struct T12",
            "name": "elem0",
            "type": "tuple"
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
        "internalType": "struct T13",
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
        "name": "v25842",
        "type": "address"
      }
    ],
    "name": "vOptedIn",
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
    "name": "vcVersion",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes4",
                "name": "elem0",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T7",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes4",
                "name": "elem1",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T8",
            "name": "elem1",
            "type": "tuple"
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v25845",
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
    "inputs": [],
    "name": "wlMembers",
    "outputs": [
      {
        "internalType": "address payable[25]",
        "name": "",
        "type": "address[25]"
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
  Bytecode: `0x608060405260405162009488380380620094888339810160408190526200002691620016df565b6000805543600355620000386200103b565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b929190620017b8565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415601362000dcf565b6060810151339060006001600160a01b0390921660209290920201526060810151339060016001600160a01b0390921660209290920201526060810151339060026001600160a01b0390921660209290920201526060810151339060036001600160a01b0390921660209290920201526060810151339060046001600160a01b0390921660209290920201526060810151339060056001600160a01b0390921660209290920201526060810151339060066001600160a01b0390921660209290920201526060810151339060076001600160a01b0390921660209290920201526060810151339060086001600160a01b0390921660209290920201526060810151339060096001600160a01b03909216602092909202015260608101513390600a6001600160a01b03909216602092909202015260608101513390600b6001600160a01b03909216602092909202015260608101513390600c6001600160a01b03909216602092909202015260608101513390600d6001600160a01b03909216602092909202015260608101513390600e6001600160a01b03909216602092909202015260608101513390600f6001600160a01b0390921660209290920201526060810151339060106001600160a01b0390921660209290920201526060810151339060116001600160a01b0390921660209290920201526060810151339060126001600160a01b0390921660209290920201526060810151339060136001600160a01b0390921660209290920201526060810151339060146001600160a01b0390921660209290920201526060810151339060156001600160a01b0390921660209290920201526060810151339060166001600160a01b0390921660209290920201526060810151339060176001600160a01b0390921660209290920201526060810151339060186001600160a01b039092166020928302919091015260808201805160009081905281519092018290525160a083015190916020020152608081015160a082015160016020020152608081015160a082015160026020020152608081015160a082015160036020020152608081015160a082015160046020020152608081015160a082015160056020020152608081015160a082015160066020020152608081015160a082015160076020020152608081015160a082015160086020020152608081015160a082015160096020020152608081015160a0820151600a6020020152608081015160a0820151600b6020020152608081015160a0820151600c6020020152608081015160a0820151600d6020020152608081015160a0820151600e6020020152608081015160a0820151600f6020020152608081015160a082015160106020020152608081015160a082015160116020020152608081015160a082015160126020020152608081015160a082015160136020020152608081015160a082015160146020020152608081015160a082015160156020020152608081015160a082015160166020020152608081015160a082015160176020020152608081015160a082015160186020020152608081015160a082015160196020020152608081015160a0820151601a6020020152608081015160a0820151601b6020020152608081015160a0820151601c6020020152608081015160a0820151601d6020020152608081015160a0820151601e6020020152608081015160a0820151601f602002018190525080608001518160a00151602060648110620005de57620005de6200184b565b6020020152608081015160a082015160216020020152608081015160a082015160226020020152608081015160a082015160236020020152608081015160a082015160246020020152608081015160a082015160256020020152608081015160a082015160266020020152608081015160a082015160276020020152608081015160a082015160286020020152608081015160a082015160296020020152608081015160a0820151602a6020020152608081015160a0820151602b6020020152608081015160a0820151602c6020020152608081015160a0820151602d6020020152608081015160a0820151602e6020020152608081015160a0820151602f6020020152608081015160a082015160306020020152608081015160a082015160316020020152608081015160a082015160326020020152608081015160a082015160336020020152608081015160a082015160346020020152608081015160a082015160356020020152608081015160a082015160366020020152608081015160a082015160376020020152608081015160a082015160386020020152608081015160a082015160396020020152608081015160a0820151603a6020020152608081015160a0820151603b6020020152608081015160a0820151603c6020020152608081015160a0820151603d6020020152608081015160a0820151603e6020020152608081015160a0820151603f6020020152608081015160a082015160406020020152608081015160a082015160416020020152608081015160a082015160426020020152608081015160a082015160436020020152608081015160a082015160446020020152608081015160a082015160456020020152608081015160a082015160466020020152608081015160a082015160476020020152608081015160a082015160486020020152608081015160a082015160496020020152608081015160a0820151604a6020020152608081015160a0820151604b6020020152608081015160a0820151604c6020020152608081015160a0820151604d6020020152608081015160a0820151604e6020020152608081015160a0820151604f6020020152608081015160a082015160506020020152608081015160a082015160516020020152608081015160a082015160526020020152608081015160a082015160536020020152608081015160a082015160546020020152608081015160a082015160556020020152608081015160a082015160566020020152608081015160a082015160576020020152608081015160a082015160586020020152608081015160a082015160596020020152608081015160a0820151605a6020020152608081015160a0820151605b6020020152608081015160a0820151605c6020020152608081015160a0820151605d6020020152608081015160a0820151605e6020020152608081015160a0820151605f6020020152608081015160a082015160606020020152608081015160a082015160616020020152608081015160a082015160626020020152608081015160a082015160636020020181905250630c4b8c0d60e21b8160c00151600001906001600160e01b03191690816001600160e01b031916815250507f636f6f706572617469764964636f6f706572617469764964636f6f70657261748160e001516000018181525050631a5d925960e21b8160e00151602001906001600160e01b03191690816001600160e01b031916815250508060c00151816101000151600001819052508060e00151816101000151602001819052507f616a646e6165696e6177696e646961656e67746e6966726a777269746e69717781610120015160000181815250507f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e81610120015160200181815250507f6969746e697177726e69726566696e64696e6967667561656266756261777572816101200151604001818152505080610120015181610140015160000181905250600081610140015160200181815250506000816101400151604001818152505064195b99195960da1b816101600151600001906001600160d81b03191690816001600160d81b031916815250506000816101800151600001818152505060008161018001516020018181525050600081610180015160400181815250506000816101800151606001818152505080610160015181610180015160800181905250816020015160400151816101a00151600001906001600160a01b031690816001600160a01b0316815250506000816101a001516020018181525050806101000151816101a00151604001819052508060a00151816101a00151606001819052506000816101a0015160800181815250506000816101a0015160a0018181525050806101400151816101a0015160c00181905250806101800151816101a0015160e00181905250816020015160200151816101a001516101000190151590811515815250506000816101a001516101200181815250506000816101a001516101400181815250508060600151816101a0015161016001819052506000816101a0015161018001818152505062000d55620011ab565b80513390526020838101516060015182516001600160a01b039091169082015261016083015182516040908101919091526101a0840151828401805191909152514390830152908301519083015162000db2919060009062000df9565b60208201516040015262000dc68162000e7c565b50505062001cd6565b8162000df55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000e03620011e8565b60005b600181101562000e595784816001811062000e255762000e256200184b565b602002015182826001811062000e3f5762000e3f6200184b565b60200201528062000e508162001861565b91505062000e06565b508181846001811062000e705762000e706200184b565b60200201529392505050565b604080516020808201835260008252830151909101515151815262000ea062001235565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515160608087019190915281518301516080808801919091528251516101409081015160a0808a01919091528451516101209081015160c0808c01919091528651519092015160e0808c0191909152865151610100908101511515908c0152865151830151918b01919091528551519091015187015191890191909152835151850151610160890152835151850151516101808901528351518501518601516101a08901528351850151516101c0890152835185015151516101e0890152885161020089015283515151909616610220880152825151860151610240880152825151860151840151610260880152825151860151850151610280880152825151860151909101516102a087015281515185015101516102c0860152515190920151516102e084015260036000554360015590516200100f9183910162001a88565b6040516020818303038152906040526002908051906020019062001035929190620013c9565b50505050565b60408051610220810190915260006101c082018181526101e0830182905261020083019190915281526020810162001072620011e8565b81526040805160608101825260008082526020828101829052928201529101908152602001620010a162001458565b8152602001620010c4604051806040016040528060008152602001600081525090565b8152602001620010d362001477565b815260408051602080820183526000808352818501929092528251808401845282815280820183905283850152825160608082018552818501848152825284518086018652848152808401859052828401528086019190915283518082018552838152808301849052808501849052608080870191909152845160c0808201875292810185815291810185905260a08082018690529181528084018590528086018590529086015283519182019093529081529082015260e00162001197620014b2565b8152602001620011a6620014fa565b905290565b6040805160a0810182526000818301818152606083018290528351602080820190955291825260808301919091528152908101620011a6620015d6565b60405180602001604052806001905b6200121e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620011f75790505090565b60408051610300810182526000808252602080830182905283519081018452908152909182019081526020016200126b620014fa565b81526020016200127a620011e8565b8152602001600081526020016000815260200160008152602001600015158152602001620012d56040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b815260200160008152602001620013166040805160608101825260008183018181528252825180840190935280835260208084019190915281019190915290565b8152604080516020808201835260008083528185019290925282518084018452828152808201839052838501528251606080820185528382529181018390529283018290528301919091526080820181905260a0820181905260c082015260e00162001381620014b2565b8152602001600081526020016000815260200160008152602001620013bc604051806020016040528060006001600160d81b03191681525090565b8152602001600081525090565b828054620013d79062001c99565b90600052602060002090601f016020900481019282620013fb576000855562001446565b82601f106200141657805160ff191683800117855562001446565b8280016001018555821562001446579182015b828111156200144657825182559160200191906001019062001429565b506200145492915062001601565b5090565b6040518061032001604052806019906020820280368337509192915050565b60405180610c8001604052806064905b6040805180820190915260008082526020820152815260200190600190039081620014875790505090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001620011a6604051806020016040528060006001600160d81b03191681525090565b604080516101a08101825260008082526020820152908101620015476040805160608101825260008183018181528252825180840190935280835260208084019190915281019190915290565b81526020016200155662001477565b81526020016000815260200160008152602001620015a16040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b8152602001620015b0620014b2565b81526020016000151581526020016000815260200160008152602001620013bc62001458565b6040518060600160405280620015eb620014fa565b815260200160008152602001620011a6620011e8565b5b8082111562001454576000815560010162001602565b604080519081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b80518015158114620016c257600080fd5b919050565b80516001600160a01b0381168114620016c257600080fd5b6000818303610120811215620016f457600080fd5b620016fe62001618565b83518152601f1982019150610100808312156200171a57600080fd5b620017246200164f565b60808412156200173357600080fd5b6200173d62001680565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200177560a08701620016b1565b60208201526200178860c08701620016c7565b60408201526200179b60e08701620016c7565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620018376101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200188457634e487b7160e01b600052601160045260246000fd5b5060010190565b63ffffffff60e01b8151511682526020810151620018c06020840182805182526020908101516001600160e01b031916910152565b505050565b8060005b606481101562001035578151805185526020908101518186015260409094019390910190600101620018c9565b8060005b6019811015620010355781516001600160a01b0316845260209384019390910190600101620018fa565b80516001600160a01b031682526020810151602083015260408101516200194f60408401826200188b565b5060608101516200196460a0840182620018c5565b506080818101516119a084015260a08201516119c084015260c0820151805180516119e0860152602080820151611a00870152604091820151611a2087015280830151611a4087015291810151611a6086015260e08401518051611a8087015291820151611aa0860152810151611ac08501526060810151611ae08501520151516001600160d81b031916611b008301526101008101511515611b20830152610120810151611b40830152610140810151611b6083015261016081015162001a31611b80840182620018f6565b506101800151611ea09190910152565b8060005b6001811015620010355762001a7184835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162001a45565b81516001600160a01b031681526123808101602083015162001ab560208401826001600160a01b03169052565b50604083015162001ad36040840182516001600160d81b0319169052565b50606083015162001ae8606084018262001924565b50608083015162001afe611f2084018262001a41565b5060a0830151611f8083015260c0830151611fa083015260e0830151611fc08301526101008301511515611fe08301526101208301518051805161200085015260208082015161202086015260409182015161204086015282015161206085015201516120808301526101408301516120a083015261016083015162001b896120c08401826200188b565b50610180830151516001600160e01b03199081166121208401526101a084015180516121408501526020908101519091166121608401526101c08401518051612180850152808201516121a085015260409081015115156121c08501526101e08501516121e08501526102008501516122008501526102208501516001600160a01b031661222085015261024085015180516122408601529182015161226085015281015161228084015260608101516122a084015260800151516001600160d81b03199081166122c08401526102608401516122e08401526102808401516123008401526102a08401516123208401526102c084015151166123408301526102e0909201516123609091015290565b600181811c9082168062001cae57607f821691505b6020821081141562001cd057634e487b7160e01b600052602260045260246000fd5b50919050565b6177a28062001ce66000396000f3fe60806040526004361061021c5760003560e01c80637333bd0911610122578063b7ba9551116100a5578063d9dcd84d1161006c578063d9dcd84d14610624578063dc01fb9d14610644578063e9b451af14610664578063f33cd53314610677578063fe9e59dd1461068a57005b8063b7ba9551146105b2578063b8003303146105c5578063cadc2e7a146105cd578063d07b8ddb146105ed578063d1ad1a371461060f57005b8063a153a9bd116100e9578063a153a9bd14610534578063a953303314610547578063ab53f2c61461054f578063abe9f98d14610572578063acf0cc221461059257005b80637333bd09146104d157806373b4522c146104d957806374fcef12146104ec578063817d57f3146104ff578063832307571461051f57005b80632152dd46116101aa57806350cea70f1161017157806350cea70f1461045457806354f2991c14610467578063573fa8a11461047a57806359cac3a41461049c5780635b48684e146104c957005b80632152dd46146103a55780633293bc79146103c75780633bc5b7bf146103e75780633c9febe8146104075780634a3912eb1461043457005b80631956a232116101ee5780631956a232146102cb5780631e3f5f07146103045780631e93b0f1146103175780631fa8b02f146103365780632080ea1c1461037857005b8063046989b61461022557806306dc92ff14610266578063125f48e41461029357806312822a75146102b657005b3661022357005b005b34801561023157600080fd5b5061023a61069f565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561027257600080fd5b506102866102813660046163b6565b6107ba565b60405161025d91906163f9565b6102a66102a13660046163b6565b6107e6565b604051901515815260200161025d565b3480156102c257600080fd5b506102a661082a565b3480156102d757600080fd5b506102e06108ee565b60408051825181526020928301516001600160a01b0316928101929092520161025d565b6102a6610312366004616429565b610a03565b34801561032357600080fd5b506003545b60405190815260200161025d565b34801561034257600080fd5b506103566103513660046163b6565b610a62565b604080518251815260208084015190820152918101519082015260600161025d565b34801561038457600080fd5b506103986103933660046163b6565b610c27565b60405161025d919061646a565b3480156103b157600080fd5b506103ba610c4d565b60405161025d91906164d0565b6103da6103d53660046164de565b610d32565b60405161025d91906164f7565b3480156103f357600080fd5b506102866104023660046163b6565b610d73565b34801561041357600080fd5b506104276104223660046163b6565b610d99565b60405161025d9190616537565b34801561044057600080fd5b506102a661044f3660046163b6565b610daa565b6102a66104623660046166c9565b610e97565b6102a661047536600461671f565b610ed2565b34801561048657600080fd5b5061048f610f0f565b60405161025d9190616770565b3480156104a857600080fd5b506104bc6104b73660046163b6565b610fd9565b60405161025d919061677e565b6102a6611145565b610328611176565b6102236104e7366004616795565b6111a6565b6102a66104fa3660046163b6565b6111ca565b34801561050b57600080fd5b5061028661051a3660046163b6565b61120e565b34801561052b57600080fd5b50600154610328565b6102a66105423660046163b6565b611234565b6102a661127a565b34801561055b57600080fd5b506105646112ab565b60405161025d9291906167d9565b34801561057e57600080fd5b506102a661058d3660046163b6565b611348565b34801561059e57600080fd5b506102866105ad3660046163b6565b61146f565b6103da6105c0366004616813565b611495565b6102a66114e5565b3480156105d957600080fd5b506102866105e83660046163b6565b611515565b3480156105f957600080fd5b5061060261153b565b60405161025d9190616861565b34801561061b57600080fd5b5061035661160a565b34801561063057600080fd5b5061039861063f3660046163b6565b611733565b34801561065057600080fd5b5061028661065f3660046163b6565b611759565b6102a66106723660046164de565b61177f565b610223610685366004616870565b6117bc565b34801561069657600080fd5b506103da6117dc565b6040805180820190915260008082526020820152600360005414156107ab576000600280546106cd90616883565b80601f01602080910402602001604051908101604052809291908181526020018280546106f990616883565b80156107465780601f1061071b57610100808354040283529160200191610746565b820191906000526020600020905b81548152906001019060200180831161072957829003601f168201915b505050505080602001905181019061075e9190616d07565b9050610780604080516060810182526000602082018181529282015290815290565b815181516001600160a01b039182169052610220909201518151921660209092019190915251919050565b6107b76000600c6118e1565b90565b60408051606081018252600080825260208201819052918101919091526107e082611907565b92915050565b60006107f06156e7565b60208101805151600290525151606001516001600160a01b0384169052610815615701565b61081f82826119d9565b604001519392505050565b6000600360005414156108e25760006002805461084690616883565b80601f016020809104026020016040519081016040528092919081815260200182805461087290616883565b80156108bf5780601f10610894576101008083540402835291602001916108bf565b820191906000526020600020905b8154815290600101906020018083116108a257829003601f168201915b50505050508060200190518101906108d79190616d07565b610100015192915050565b6107b7600060086118e1565b6040805180820190915260008082526020820152600360005414156109f75760006002805461091c90616883565b80601f016020809104026020016040519081016040528092919081815260200182805461094890616883565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b50505050508060200190518101906109ad9190616d07565b90506109cf604080516060810182526000602082018181529282015290815290565b61020082015181515260209182015181516001600160a01b0390911692019190915251919050565b6107b76000600b6118e1565b6000610a0d6156e7565b6020818101805151600090528051518201516001600160a01b038881169091528151518301519087169083015251510151604001839052610a4c615701565b610a5682826119d9565b519150505b9392505050565b610a8660405180606001604052806000815260200160008152602001600081525090565b60036000541415610c1657600060028054610aa090616883565b80601f0160208091040260200160405190810160405280929190818152602001828054610acc90616883565b8015610b195780601f10610aee57610100808354040283529160200191610b19565b820191906000526020600020905b815481529060010190602001808311610afc57829003601f168201915b5050505050806020019051810190610b319190616d07565b9050610b5a60408051608081018252600060208201818152928201819052606082015290815290565b6001610b6585611907565b516001811115610b7757610b776163d3565b14610b83576000610b91565b610b8c84611907565b604001515b8151526001610b9f85614b12565b516001811115610bb157610bb16163d3565b14610bbd576000610bcb565b610bc684614b12565b604001515b8151602001526001610bdc85614b9f565b516001811115610bee57610bee6163d3565b14610bfa576000610c08565b610c0384614b9f565b604001515b815160400152519392505050565b610c226000600a6118e1565b919050565b60408051606081018252600080825260208201819052918101919091526107e082614c2c565b610c55615776565b60036000541415610d2657600060028054610c6f90616883565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9b90616883565b8015610ce85780601f10610cbd57610100808354040283529160200191610ce8565b820191906000526020600020905b815481529060010190602001808311610ccb57829003601f168201915b5050505050806020019051810190610d009190616d07565b9050610d0a6157aa565b6101808201518151526101a09091015181516020015251919050565b6107b7600060106118e1565b610d3a6157bd565b610d426156e7565b6020810180515160039052515160800151839052610d5e615701565b610d6882826119d9565b606001519392505050565b60408051606081018252600080825260208201819052918101919091526107e082614cf5565b610da16157ff565b6107e082614d82565b600060036000541415610e8b57600060028054610dc690616883565b80601f0160208091040260200160405190810160405280929190818152602001828054610df290616883565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b5050505050806020019051810190610e579190616d07565b90506001610e6484614c2c565b516001811115610e7657610e766163d3565b14610e82576000610a5b565b61081f83614c2c565b610c226000600f6118e1565b6000610ea16156e7565b6020810180515160019052515160400151839052610ebd615701565b610ec782826119d9565b602001519392505050565b6000610edc6156e7565b602081018051516009905251516101400151839052610ef9615701565b610f0382826119d9565b61012001519392505050565b610f1761581e565b60036000541415610fcd57600060028054610f3190616883565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5d90616883565b8015610faa5780601f10610f7f57610100808354040283529160200191610faa565b820191906000526020600020905b815481529060010190602001808311610f8d57829003601f168201915b5050505050806020019051810190610fc29190616d07565b610120015192915050565b6107b76000600e6118e1565b6040805180820190915260008082526020820152600360005414156111395760006002805461100790616883565b80601f016020809104026020016040519081016040528092919081815260200182805461103390616883565b80156110805780601f1061105557610100808354040283529160200191611080565b820191906000526020600020905b81548152906001019060200180831161106357829003601f168201915b50505050508060200190518101906110989190616d07565b90506110ba604080516060810182526000602082018181529282015290815290565b60016110c585614cf5565b5160018111156110d7576110d76163d3565b146110e35760006110f1565b6110ec84614cf5565b604001515b81515260016110ff85614e5e565b516001811115611111576111116163d3565b1461111d57600061112b565b61112684614e5e565b604001515b815160200152519392505050565b610c22600060076118e1565b600061114f6156e7565b602081015151600b9052611161615701565b61116b82826119d9565b610160015192915050565b60006111806156e7565b60208101515160049052611192615701565b61119c82826119d9565b6080015192915050565b6111ae615701565b6111c66111c036849003840184616eaf565b82614eeb565b5050565b60006111d46156e7565b6020810180515160059052515160c001516001600160a01b03841690526111f9615701565b61120382826119d9565b60a001519392505050565b60408051606081018252600080825260208201819052918101919091526107e082615094565b600061123e6156e7565b60208101805151600c905251516101a001516001600160a01b0384169052611264615701565b61126e82826119d9565b61018001519392505050565b60006112846156e7565b602081015151600a9052611296615701565b6112a082826119d9565b610140015192915050565b6000606060005460028080546112c090616883565b80601f01602080910402602001604051908101604052809291908181526020018280546112ec90616883565b80156113395780601f1061130e57610100808354040283529160200191611339565b820191906000526020600020905b81548152906001019060200180831161131c57829003601f168201915b50505050509050915091509091565b6000600360005414156114635760006002805461136490616883565b80601f016020809104026020016040519081016040528092919081815260200182805461139090616883565b80156113dd5780601f106113b2576101008083540402835291602001916113dd565b820191906000526020600020905b8154815290600101906020018083116113c057829003601f168201915b50505050508060200190518101906113f59190616d07565b604080516020810190915260008152909150600061141285615121565b516001811115611424576114246163d3565b1415611433576000815261145b565b600161143e85615121565b516001811115611450576114506163d3565b141561145b57600181525b519392505050565b610c22600060116118e1565b60408051606081018252600080825260208201819052918101919091526107e082614b12565b61149d6157bd565b6114a56156e7565b602081810180515160079052805151610100908101518790529051510151018390526114cf615701565b6114d982826119d9565b60e00151949350505050565b60006114ef6156e7565b60208101515160069052611501615701565b61150b82826119d9565b60c0015192915050565b60408051606081018252600080825260208201819052918101919091526107e082614e5e565b611543615852565b600360005414156115fe5760006002805461155d90616883565b80601f016020809104026020016040519081016040528092919081815260200182805461158990616883565b80156115d65780601f106115ab576101008083540402835291602001916115d6565b820191906000526020600020905b8154815290600101906020018083116115b957829003601f168201915b50505050508060200190518101906115ee9190616d07565b90506115fc600060126118e1565b505b6107b7600060126118e1565b61162e60405180606001604052806000815260200160008152602001600081525090565b600360005414156117275760006002805461164890616883565b80601f016020809104026020016040519081016040528092919081815260200182805461167490616883565b80156116c15780601f10611696576101008083540402835291602001916116c1565b820191906000526020600020905b8154815290600101906020018083116116a457829003601f168201915b50505050508060200190518101906116d99190616d07565b905061170260408051608081018252600060208201818152928201819052606082015290815290565b60a082015181515260c082015181516020015260e09091015181516040015251919050565b6107b7600060096118e1565b60408051606081018252600080825260208201819052918101919091526107e082615121565b60408051606081018252600080825260208201819052918101919091526107e082614b9f565b60006117896156e7565b6020810180515160089052515161012001518390526117a6615701565b6117b082826119d9565b61010001519392505050565b6117c4615701565b6111c66117d636849003840184617029565b826119d9565b6117e46157bd565b600360005414156118d9576000600280546117fe90616883565b80601f016020809104026020016040519081016040528092919081815260200182805461182a90616883565b80156118775780601f1061184c57610100808354040283529160200191611877565b820191906000526020600020905b81548152906001019060200180831161185a57829003601f168201915b505050505080602001905181019061188f9190616d07565b9050611899615871565b6102608201518151526102808201518151602001526102a08201518151604001526102c08201518151606001526102e09091015181516080015251919050565b6107b76000600d5b816111c65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff166001811115611953576119536163d3565b14156119ca576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff166001811115611994576119946163d3565b60018111156119a5576119a56163d3565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6119e960036000541460496118e1565b8151611a049015806119fd57508251600154145b604a6118e1565b600080805560028054611a1690616883565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4290616883565b8015611a8f5780601f10611a6457610100808354040283529160200191611a8f565b820191906000526020600020905b815481529060010190602001808311611a7257829003601f168201915b5050505050806020019051810190611aa79190616d07565b9050611ab1615884565b611ac06000194310604b6118e1565b7f90f78d2789a6109e9975643a13ff35a09a55d33e4894868496af77e17e5e13333385604051611af19291906171d5565b60405180910390a1600060208501515151600c811115611b1357611b136163d3565b1415612435576020808501515101518152611b30341560146118e1565b6101e082015160208083018051929092526101c0840180518201518351830152516040908101519251921515920191909152820151611b7d90611b7690339060006151ae565b60156118e1565b8151815151611bbe916001600160a01b03918216911614611bb4576102208301518251516001600160a01b03908116911614611bb7565b60015b60166118e1565b805160400151611bd190151560176118e1565b80516020908101516001600160a01b039081166000908152600b835260408082208054600160ff199182168117909255865186015185168452828420805462ff000019169055865186015190941683526004855291819020805490931682179092558351918201519190920151909190611c4a90614cf5565b516001811115611c5c57611c5c6163d3565b14611c68576000611c7c565b815160200151611c7790614cf5565b604001515b611c86919061735b565b81516020908101516001600160a01b0390811660009081526004835260408082206001908101959095558551840151909216815260078352819020805460ff191684179055835190810151910151909190611ce090611907565b516001811115611cf257611cf26163d3565b14611cfe576000611d12565b815160200151611d0d90611907565b604001515b611d1c919061735b565b81516020908101516001600160a01b03166000908152600782526040808220600190810194909455808501805183905280518401839052805190910182905280516060018290528051608001829052805160a001829052805160c001829052805160e00182905280516101000182905280516101200182905280516101400182905280516101600182905280516101800182905280516101a00182905280516101c00182905280516101e00182905280516102000182905280516102200182905280516102400182905280516102600182905280516102800182905280516102a00182905280516102c00182905280516102e00182905280516103000182905280516103200182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c600152825101516120c990614d82565b5160018111156120db576120db6163d3565b146120ea5780604001516120fe565b8051602001516120f990614d82565b604001515b60608201526080810180516000908190528151602001819052905160c08301525b60648110156121f2578160600151816064811061213e5761213e617373565b602002015160e0830152600060c0830151516001811115612161576121616163d3565b141561217457600161010083015261219c565b600160c083015151600181111561218d5761218d6163d3565b141561219c5760006101008301525b6101208201805160019052516040018190526101008201516121bf5760006121c6565b60e0820151155b6121d4578160c001516121db565b8161012001515b60c0830152806121ea81617389565b91505061211f565b5060c081015160a0820190815281516020908101516001600160a01b03166000908152600c90915260409020805460ff19166001908117909155606083015191515161226b9291908181111561224a5761224a6163d3565b14612256576000612260565b8260a00151604001515b8351604001516151c4565b81516020908101516001600160a01b03166000908152600c9091526040902061229b916001909101906064615e81565b50604051600181527f6f8de590612054ae70668822ecb8aa922de3b309f53193229b4c31de983d04219060200160405180910390a160018352610220820151610140820180516001600160a01b0390921690915260608084018051602090810151845190910152610160850151835160409081019190915281518301518451909301929092525160809081015183519091015260e080850151835160a09081019190915261012080870151855160c09081019190915261024088015186519094019390935261010080880151865190151591015291860151935190910192909252825101519083015161238e919061735b565b610140808301805190910191909152606083018051610160908101518351909101525161018090810151915101526123c4615ebf565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015261014083015181830180519190915251439082015260808401519083015161241d9190600090615238565b60208201516040015261242f816152a0565b50614b0c565b600160208501515151600c81111561244f5761244f6163d3565b14156126475760208401515160400151610160820152612471341560186118e1565b6101e082015161018082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516124c2906124bb90339060006151ae565b60196118e1565b610180828101516101a08301805191909152610160808401515182516020908101919091526102208601516101c0860180516001600160a01b03909216909152606080880180518401518351850152945182516040908101919091528551820151835190920191909152845160809081015183519091015260e080890151835160a090810191909152610120808b0151855160c0908101919091526102408c0151865190940193909352610100808c01518651901515910152918a0151845190920191909152880151825161014001528451840151825190940193909352925184015192519093019190915251600181527f016c647551d75dae75cb2a5198c5b0e72c5436ad66ec804316b196827d4c2f26910160405180910390a1600160208401526125ed615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526101c08301518183018051919091525143910152608083015161018083015161241d9190600090615238565b600260208501515151600c811115612661576126616163d3565b141561290757602084015151606001516101e08201526126833415601a6118e1565b6101e082015161020082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516126d4906126cd90339060006151ae565b601b6118e1565b8151612712906001600160a01b03163314612708578261022001516001600160a01b0316336001600160a01b03161461270b565b60015b601c6118e1565b6101e081018051516001600160a01b039081166000908152600b6020526040808220805460ff19166001179055925151909116815220805462ff000019169055606082015161018001516018111561277f5760018260600151610180015161277a919061735b565b612782565b60005b61022080830191825283015161024080840180516001600160a01b0390931690925260608086018051602090810151855190910152610160808801518551604001528151830151855190930192909252805160809081015185519091015260e080880151855160a090810191909152610120808a0151875160c090810191909152958a0151875190930192909252610100808a0151875190151591015293880151855190910152918601519251610140019290925251015190516101e08301515161284e929190615453565b61024082018051610160019190915261022082015190516101800152604051600181527fde8ebaedd6a7ff4b398cb5afa2cb2ce3cc88073ef34091485344ad5f8e5350359060200160405180910390a1600160408401526128ad615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526102408301518183018051919091525143910152608083015161020083015161241d9190600090615238565b600360208501515151600c811115612921576129216163d3565b141561339f576020840151516080015161026082018190525161028083015161294a91906173a4565b61028082015261295c3415601d6118e1565b806102800151826101e00151612972919061735b565b6102a082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516102808201516129c2916129bb913391906151ae565b601e6118e1565b610260810151516129d6901515601f6118e1565b6102c0810180516430b1ba34bb60d91b9052516040805191516001600160d81b0319166020830152612a56910160408051808303601f1901815282825280516020918201206102c0870151516001600160d81b0319169184019190915291016040516020818303038152906040528051906020012060001c1460206118e1565b612a7281610260015160000151836102600151101560216118e1565b6000612a7d33615121565b516001811115612a8f57612a8f6163d3565b1415612aa25760006102e0820152612ace565b6001612aad33615121565b516001811115612abf57612abf6163d3565b1415612ace5760016102e08201525b612ade816102e0015160226118e1565b610260810151516103008201908152336000818152600460205260409020805460ff1916600190811790915591519190612b1790614cf5565b516001811115612b2957612b296163d3565b14612b35576000612b43565b612b3e33614cf5565b604001515b612b4d919061735b565b33600081815260046020908152604080832060019081019590955560079091529020805460ff1916831790556103008301519190612b8a90611907565b516001811115612b9c57612b9c6163d3565b14612ba8576000612bb6565b612bb133611907565b604001515b612bc0919061735b565b33600081815260076020908152604080832060019081019590955561032086810180518590528051909301849052825190910183905281516060018390528151608001839052815160a001839052815160c001839052815160e00183905281516101000183905281516101200183905281516101400183905281516101600183905281516101800183905281516101a00183905281516101c00183905281516101e00183905281516102000183905281516102200183905281516102400183905281516102600183905281516102800183905281516102a00183905281516102c00183905281516102e00183905281516103000183905281510182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c600152612f5d90614d82565b516001811115612f6f57612f6f6163d3565b14612f7f57806103200151612f8d565b612f8833614d82565b604001515b61034082015261036081018051600090819052815160200181905290516103a08301525b606481101561308b578161034001518160648110612fd157612fd1617373565b60200201516103c083015260006103a0830151516001811115612ff657612ff66163d3565b14156130095760016103e0830152613032565b60016103a0830151516001811115613023576130236163d3565b14156130325760006103e08301525b6104008201805160019052516040018190526103e082015161305557600061305d565b6103c0820151155b61306c57816103a00151613073565b8161040001515b6103a08301528061308381617389565b915050612fb1565b506103a08101516103808201908152336000908152600c60205260409020805460ff191660019081179091556103408301519151516130f9929190818111156130d6576130d66163d3565b146130e25760006130ed565b826103800151604001515b610260840151516151c4565b336000908152600c60205260409020613119916001909101906064615e81565b5061026080820151519083015161313091906173c3565b610420820152610260810151516102a083015161314d919061735b565b6104408201526102808201516102608201515161316a91906173a4565b826102e0015161317a919061735b565b610460820181905261048082018051919091526102808301518151602090810191909152610420830151825160409081019190915261044084015183516060908101919091526102c086015184516080908101919091526102208701516104a0870180516001600160a01b0390921690915282880180518601518251909601959095526101608801518151909401939093528351820151835190920191909152915182015181519092019190915260e080850151825160a09081019190915261012080870151845160c0908101919091529451845190930192909252610100808701518451901515910152928501519151015261030082015190830151613281919061735b565b6104a082018051610140019190915260608084018051610160908101518451909101525161018090810151925101919091526104208201516104c0830180519190915261028084015181516020015261044083015181516040908101919091526102c08501518251909301929092526104608301518151608001525190517fdd79abc73e076c6de0d78f28e00f4cf8f28eb780a2953b6490ccfb9c7096a4fe9161332a916164f7565b60405180910390a16104c08101516060840152613345615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526104a0830151818301805191909152514391015260808301516102a083015161241d9190600090615238565b600460208501515151600c8111156133b9576133b96163d3565b1415613765576133cb341560236118e1565b6101e08201516104e082018051919091526101c083018051602090810151835190910152516040908101518251901515910152608083015190516134129190600090615238565b81610500018190525061343561342e33846020015160006151ae565b60246118e1565b600061344033615121565b516001811115613452576134526163d3565b1415613465576000610520820152613491565b600161347033615121565b516001811115613482576134826163d3565b14156134915760016105208201525b6134a181610520015160256118e1565b61050081015151516134b690151560266118e1565b6134c860008360a001511160276118e1565b60016134d333611907565b5160018111156134e5576134e56163d3565b146134f15760006134ff565b6134fa33611907565b604001515b610540820181905260a083015161351991111560286118e1565b61352c60008261054001511160296118e1565b8160a0015182606001516020015182610540015161354a91906173a4565b61355491906173da565b610560820181905261058082018190526105008201515151613579911115602a6118e1565b610580810151610500820151515161359191906173c3565b6105a082018051919091526105008201805151602090810151835182015290515160409081015192519215159201919091528201516105808201516135d8919033906154e3565b336000818152600860205260409020805460ff191660019081179091556105608301519161360590614b12565b516001811115613617576136176163d3565b14613623576000613631565b61362c33614b12565b604001515b61363b919061735b565b33600081815260086020908152604080832060019081019590955560099091529020805460ff191683179055819061367290614b9f565b516001811115613684576136846163d3565b1461369057600061369e565b61369933614b9f565b604001515b6136a8919061735b565b336000908152600960209081526040918290206001019290925561056083015190519081527f992adf36861213a3c519fb9bd179ac5b307ed96f5e23d789abd61d40ba1ffb4d910160405180910390a1610560810151608084015261370b615ebf565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152606084015181830180519190915251439101526105008201516105a083015161241d9190600090615238565b600560208501515151600c81111561377f5761377f6163d3565b14156139915760208401515160c001516105c08201526137a13415602b6118e1565b6101e08201516105e082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516137f2906137eb90339060006151ae565b602c6118e1565b8151613830906001600160a01b03163314613826578261022001516001600160a01b0316336001600160a01b031614613829565b60015b602d6118e1565b604051600181527f69707748e1d7972380be0e95ea046a38a5f740d6ef234d77d83f1c163506c84d9060200160405180910390a1600160a0808501919091526105c082015151610600830180516001600160a01b0390921690915260608085018051602090810151845190910152610160808701518451604001528151830151845190930192909252805160809081015184519091015260e080870151845186015261012080880151855160c090810191909152610240890151865190930192909252610100808901518651901515910152908701518451909101529285015182516101400152825181015182519091015290516101809081015191510152613937615ebf565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152610600830151818301805191909152514391015260808301516105e083015161241d9190600090615238565b600660208501515151600c8111156139ab576139ab6163d3565b1415613c9b576139bd3415602e6118e1565b6101e082015161062082018051919091526101c08301805160209081015183519091015251604090810151825190151591015260808301519051613a049190600090615238565b816106400181905250613a27613a2033846020015160006151ae565b602f6118e1565b8151613a65906001600160a01b03163314613a5b578261022001516001600160a01b0316336001600160a01b031614613a5e565b60015b60306118e1565b613a786000836102e001511160316118e1565b6102e08201516106408201515151613a9391111560326118e1565b6102e08201516106408201515151613aab91906173c3565b61066082018051919091526106408201805151602090810151835182015290515160409081015192519215159201919091528201516102e0830151613af2919033906154e3565b6106808101805160009052610280830151815160209081019190915261026084015182516040908101919091526102a085015183516060908101919091526102c086015184516080908101919091526102208701516106a0870180516001600160a01b0390921690915282880180518601518251870152610160808a015183518701528151850151835190950194909452805183015182519093019290925260e080890151825160a090810191909152610120808b0151845160c0908101919091529851845190930192909252610100808b0151845190151591015296890151825190910152948701518551610140015280518201518551909201919091525161018090810151935101929092529051600181527f303d4abc86285cf374fe6665891c9d99707a5befe110e44fcdca62b202631b34910160405180910390a1600160c0840152613c40615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526106a0830151818301805191909152514391015261064082015161066083015161241d9190600090615238565b600760208501515151600c811115613cb557613cb56163d3565b141561406a5760208401515161010001516106c0820152613cd8341560336118e1565b6101e08201516106e082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151613d2990613d2290339060006151ae565b60346118e1565b8151613d67906001600160a01b03163314613d5d578261022001516001600160a01b0316336001600160a01b031614613d60565b60015b60356118e1565b6106c081015151613d7b90151560366118e1565b613d926000826106c00151602001511160376118e1565b6430b1ba34bb60d91b816107000151600001906001600160d81b03191690816001600160d81b03191681525050816102e001518161072001516000018181525050806106c00151602001518161072001516020018181525050806106c00151600001518161072001516040018181525050816102a00151816107200151606001818152505080610700015181610720015160800181905250816102200151816107400151600001906001600160a01b031690816001600160a01b0316815250508160600151602001518161074001516020018181525050816101600151816107400151604001819052508160600151606001518161074001516060018190525081606001516080015181610740015160800181815250508160e0015181610740015160a001818152505081610120015181610740015160c0018190525080610720015181610740015160e001819052508161010001518161074001516101000190151590811515815250508160c001518161074001516101200181815250508160a0015181610740015161014001818152505081606001516101600151816107400151610160018190525081606001516101800151816107400151610180018181525050806106c00151600001518161076001516000018181525050806106c00151602001518161076001516020018181525050816102a00151816107600151604001818152505080610700015181610760015160600181905250816102e0015181610760015160800181815250507f1271c61ea2b4533b6490c828d3003875d3c52b068d44e4b83928bf7ee19525a8816107600151604051613ff591906164f7565b60405180910390a161076081015160e0840152614010615ebf565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152610740830151818301805191909152514391015260808301516106e083015161241d9190600090615238565b600860208501515151600c811115614084576140846163d3565b14156142f45760208401515161012001516107808201819052516107a08201526140b0341560386118e1565b806107a00151826101e001516140c6919061735b565b6107c082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516107a08201516141169161410f913391906151ae565b60396118e1565b8151614154906001600160a01b0316331461414a578261022001516001600160a01b0316336001600160a01b03161461414d565b60015b603a6118e1565b6141676000826107a0015111603b6118e1565b6102208201516107e0820180516001600160a01b039092169091526107808201515181516020015261016083015181516040015260608084018051820151835190920191909152516080908101519151015260e08201516141ca9060019061735b565b6107e08201805160a00191909152610120830151815160c090810191909152610240840151825160e00152610100808501519251921515920191909152610780820151519083015161421c919061735b565b6107e082018051610120019190915260a08301518151610140015260608301805161016090810151835190910152516101809081015191510152604051600181527f83528deaefdb45c5da1fb24db88020f672353c98b1e557a5a24d81bdeb9acde59060200160405180910390a1600161010084015261429a615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526107e0830151818301805191909152514391015260808301516107c083015161241d9190600090615238565b600960208501515151600c81111561430e5761430e6163d3565b14156145645760208401515161014001516108008201526143313415603c6118e1565b6101e082015161082082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516143829061437b90339060006151ae565b603d6118e1565b614395600083610140015114603e6118e1565b81516143d3906001600160a01b031633146143c9578261022001516001600160a01b0316336001600160a01b0316146143cc565b60015b603f6118e1565b61080081015151610840820151526101408201516143f39060019061735b565b61084082018051602090810192909252805143604091820152610220850151610860850180516001600160a01b039092169091526060808701805186015183518701526101608089015184518601528151830151845190930192909252805160809081015184519091015260e080890151845160a0908101919091529551845160c0908101919091526102408a0151855190920191909152610100808a0151855190151591015288015183516101200152938701518251610140015283518101518251909101529151610180908101519251019190915251600181527fde8b28a00644e0d2f124e89caa36b878b3f350b51153a2f54b81d4d5c0107f16910160405180910390a1600161012084015261450a615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526108608301518183018051919091525143910152608083015161082083015161241d9190600090615238565b600a60208501515151600c81111561457e5761457e6163d3565b141561484157614590341560406118e1565b6101e082015161088082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516145e1906145da90339060006151ae565b60416118e1565b815161461f906001600160a01b03163314614615578261022001516001600160a01b0316336001600160a01b031614614618565b60015b60426118e1565b6108a0810180516430b1ba34bb60d91b9052516040805191516001600160d81b031916602083015261469f910160408051808303601f1901815282825280516020918201206102c0870151516001600160d81b0319169184019190915291016040516020818303038152906040528051906020012060001c1460436118e1565b6102e08201516108c08201805191909152610280830151815160209081019190915281516000604091820181905283516060908101919091528186015184516080908101919091526102208701516108e0870180516001600160a01b0390921690915282880180518601518251870152610160808a015183518701528151850151835190950194909452805183015182519093019290925260e080890151825160a090810191909152610120808b0151845160c0908101919091529851845190930192909252610100808b0151845190151591015296890151825190910152948701518551610140015280518201518551909201919091525161018090810151935101929092529051600181527f8eaac78ca3139a0c466311a1b315d84ad575bfac424cf8fde100214d80a2cf6b910160405180910390a160016101408401526147e7615ebf565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526108e08301518183018051919091525143910152608083015161088083015161241d9190600090615238565b600b60208501515151600c81111561485b5761485b6163d3565b141561497a5761486d341560446118e1565b6101e082015161090082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516148be906148b790339060006151ae565b60456118e1565b336000908152600a6020908152604091829020805462ff00ff1916620100011790559051600181527fda910a810716101fb56c6c9ac018263014b7512c4258af82c0e0e509013044e1910160405180910390a16001610160840152614921615ebf565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152608083015161090083015161241d9190600090615238565b600c60208501515151600c811115614994576149946163d3565b1415614b0c576020840151516101a001516109208201526149b7341560466118e1565b6101e082015161094082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151614a0890614a0190339060006151ae565b60476118e1565b8151614a46906001600160a01b03163314614a3c578261022001516001600160a01b0316336001600160a01b031614614a3f565b60015b60486118e1565b610920810151516001600160a01b03166000908152600b6020908152604091829020805462ffffff191690559051600181527f5e18f1b42ca45adf13858e5d8ea8a7706d701df31b41da75126c9f8868a9b9ce910160405180910390a16001610180840152614ab3615ebf565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152608083015161094083015161241d9190600090615238565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115614b5e57614b5e6163d3565b14156119ca576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff166001811115611994576119946163d3565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115614beb57614beb6163d3565b14156119ca576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff166001811115611994576119946163d3565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115614c7857614c786163d3565b14156119ca576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115614cb957614cb96163d3565b6001811115614cca57614cca6163d3565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115614d4157614d416163d3565b14156119ca576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611994576119946163d3565b614d8a6157ff565b60016001600160a01b0383166000908152600c602052604090205460ff166001811115614db957614db96163d3565b14156119ca576001600160a01b0382166000908152600c6020526040908190208151606081019092528054829060ff166001811115614dfa57614dfa6163d3565b6001811115614e0b57614e0b6163d3565b81528154610100900460ff161515602082015260408051610c808101808352919092019190600184019060649082845b815481526020019060010190808311614e3b575050505050815250509050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115614eaa57614eaa6163d3565b14156119ca576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611994576119946163d3565b614efb600360005414604e6118e1565b8151614f16901580614f0f57508251600154145b604f6118e1565b600080805560028054614f2890616883565b80601f0160208091040260200160405190810160405280929190818152602001828054614f5490616883565b8015614fa15780601f10614f7657610100808354040283529160200191614fa1565b820191906000526020600020905b815481529060010190602001808311614f8457829003601f168201915b5050505050806020019051810190614fb99190616d07565b9050614fcb60001943101560506118e1565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161501e3415604c6118e1565b8051615036906001600160a01b03163314604d6118e1565b61503e615ebf565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060840151828401805191909152805143930192909252608084015191510152614b0c816152a0565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156150e0576150e06163d3565b14156119ca576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115611994576119946163d3565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600b602052604090205460ff16600181111561516d5761516d6163d3565b14156119ca576001600160a01b0382166000908152600b6020526040908190208151606081019092528054829060ff166001811115614cb957614cb96163d3565b60006151bc838530856154fc565b949350505050565b6151cc615edf565b60005b6064811015615218578481606481106151ea576151ea617373565b602002015182826064811061520157615201617373565b60200201528061521081617389565b9150506151cf565b508181846064811061522c5761522c617373565b60200201529392505050565b615240615efe565b60005b600181101561528c5784816001811061525e5761525e617373565b602002015182826001811061527557615275617373565b60200201528061528481617389565b915050615243565b508181846001811061522c5761522c617373565b60408051602080820183526000825283015190910151515181526152c2615f49565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515160608087019190915281518301516080808801919091528251516101409081015160a0808a01919091528451516101209081015160c0808c01919091528651519092015160e0808c0191909152865151610100908101511515908c0152865151830151918b01919091528551519091015187015191890191909152835151850151610160890152835151850151516101808901528351518501518601516101a08901528351850151516101c0890152835185015151516101e0890152885161020089015283515151909616610220880152825151860151610240880152825151860151840151610260880152825151860151850151610280880152825151860151909101516102a087015281515185015101516102c0860152515190920151516102e0840152600360005543600155905161542f91839101617575565b60405160208183030381529060405260029080519060200190614b0c92919061607d565b61545b615852565b60005b60198110156154b55784816019811061547957615479617373565b602002015182826019811061549057615490617373565b6001600160a01b039092166020929092020152806154ad81617389565b91505061545e565b50818184601981106154c9576154c9617373565b6001600160a01b0390921660209290920201529392505050565b6154ee8383836155d6565b6154f757600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161556391617733565b60006040518083038185875af1925050503d80600081146155a0576040519150601f19603f3d011682016040523d82523d6000602084013e6155a5565b606091505b50915091506155b6828260016156a7565b50808060200190518101906155cb919061774f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161563591617733565b60006040518083038185875af1925050503d8060008114615672576040519150601f19603f3d011682016040523d82523d6000602084013e615677565b606091505b5091509150615688828260026156a7565b508080602001905181019061569d919061774f565b9695505050505050565b606083156156b6575081610a5b565b8251156156c65782518084602001fd5b60405163100960cb60e01b8152600481018390526024016118fe565b905290565b6040518060400160405280600081526020016156e26160f0565b604080516101a081018252600080825260208201819052918101919091526060810161572b6157bd565b815260006020820181905260408201819052606082015260800161574d6157bd565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b60408051606081018252600091810191825290819081526020016156e2604080518082019091526000808252602082015290565b60405180602001604052806156e2615776565b6040518060a001604052806000815260200160008152602001600081526020016157f260408051602081019091526000815290565b8152602001600081525090565b60408051606081018252600080825260208201529081016156e2615edf565b6040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b6040518061032001604052806019906020820280368337509192915050565b60405180602001604052806156e26157bd565b604080516109c0810182526000610960820181815261098083018290526109a0830182905282528251606081018452818152602080820183905281850192909252908201529081016158d4615edf565b81526020016158e1615edf565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c082015260e00161596e616103565b8152602001615993604080516060810182526000602082018181529282015290815290565b815260408051606081018252600080825260208281018290529282015291019081526020016159c0615776565b81526020016159cd616103565b81526020016159e760408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001615a1b616103565b8152602001615a366040518060200160405280600081525090565b815260200160008152602001615a68604051806060016040528060008152602001600081526020016000151581525090565b8152602001615a8260408051602081019091526000815290565b81526000602082018190526040820152606001615a9d615edf565b8152602001615aaa615edf565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c0909101908152602001600081526020016000815260200160008152602001615b4f61617c565b8152602001615b5c616103565b8152602001615b696157bd565b81526040805160608101825260008082526020828101829052928201529101908152602001615b96615efe565b8152602001600015158152602001600081526020016000815260200160008152602001615bdf604051806060016040528060008152602001600081526020016000151581525090565b8152602001615bf960408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615c26616103565b81526040805160608101825260008082526020828101829052928201529101908152602001615c53615efe565b81526040805160608101825260008082526020828101829052928201529101908152602001615c8061617c565b8152602001615c8d616103565b8152602001615caf604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001615ce960408051602081019091526000815290565b8152602001615cf661617c565b8152602001615d03616103565b8152602001615d106157bd565b8152602001615d2b6040518060200160405280600081525090565b815260200160008152602001615d5d604051806060016040528060008152602001600081526020016000151581525090565b8152602001615d6a616103565b8152602001615d9660408051608081018252600060208201818152928201819052606082015290815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615dc361581e565b8152602001615dd0616103565b81526040805160608101825260008082526020828101829052928201529101908152602001615e0a60408051602081019091526000815290565b8152602001615e1761617c565b8152602001615e24616103565b81526040805160608101825260008082526020828101829052928201529101908152602001615e5e60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b8260648101928215615eaf579160200282015b82811115615eaf578251825591602001919060010190615e94565b50615ebb9291506161b8565b5090565b6040518060400160405280615ed26161cd565b81526020016156e26161f9565b60405180610c8001604052806064906020820280368337509192915050565b60405180602001604052806001905b615f33604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081615f0d5790505090565b604080516103008101825260008082526020820152908101615f7660408051602081019091526000815290565b8152602001615f83616103565b8152602001615f90615efe565b8152602001600081526020016000815260200160008152602001600015158152602001615fbb61581e565b815260200160008152602001615fcf615776565b8152604080516020818101909252600081529101908152602001616003604080518082019091526000808252602082015290565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160006001600160a01b0316815260200161604e61617c565b81526020016000815260200160008152602001600081526020016157f260408051602081019091526000815290565b82805461608990616883565b90600052602060002090601f0160209004810192826160ab5760008555615eaf565b82601f106160c457805160ff1916838001178555615eaf565b82800160010185558215615eaf5791820182811115615eaf578251825591602001919060010190615e94565b60405180602001604052806156e2616220565b604080516101a08101825260008082526020820152908101616123615776565b8152602001616130616364565b8152602001600081526020016000815260200161614b61581e565b815260200161615861617c565b815260200160001515815260200160008152602001600081526020016157f2615852565b6040518060a00160405280600081526020016000815260200160008152602001600081526020016156e260408051602081019091526000815290565b5b80821115615ebb57600081556001016161b9565b60408051606081018252600080825260208201529081016156e260408051602081019091526000815290565b604051806060016040528061620c616103565b8152602001600081526020016156e2615efe565b604080516101c0810190915280600081526040805160608101825260008082526020828101829052928201529101908152602001616274604080516060810182526000602082018181529282015290815290565b815260200161628e60408051602081019091526000815290565b81526020016162a96040518060200160405280600081525090565b8152600060208201526040016162ca60408051602081019091526000815290565b81526020016000151581526020016162f5604051806040016040528060008152602001600081525090565b81526020016163106040518060200160405280600081525090565b815260200161633c60408051608081018252600060208201818152928201819052606082015290815290565b815260006020820181905260408201526060016156e260408051602081019091526000815290565b60405180610c8001604052806064905b60408051808201909152600080825260208201528152602001906001900390816163745790505090565b6001600160a01b03811681146163b357600080fd5b50565b6000602082840312156163c857600080fd5b8135610a5b8161639e565b634e487b7160e01b600052602160045260246000fd5b600281106163b3576163b36163d3565b81516060820190616409816163e9565b808352506020830151151560208301526040830151604083015292915050565b60008060006060848603121561643e57600080fd5b83356164498161639e565b925060208401356164598161639e565b929592945050506040919091013590565b8151606082019061647a816163e9565b8083525060208301511515602083015260408301511515604083015292915050565b63ffffffff60e01b81515116825260208101516154f76020840182805182526020908101516001600160e01b031916910152565b606081016107e0828461649c565b6000602082840312156164f057600080fd5b5035919050565b815181526020808301519082015260408083015190820152606080830151516001600160d81b031916908201526080918201519181019190915260a00190565b8151610cc0820190616548816163e9565b825260208381015115158184015260408085015190840160005b606481101561657f57825182529183019190830190600101616562565b5050505092915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156165c2576165c2616589565b60405290565b6040516060810167ffffffffffffffff811182821017156165c2576165c2616589565b6040516020810167ffffffffffffffff811182821017156165c2576165c2616589565b6040516101a0810167ffffffffffffffff811182821017156165c2576165c2616589565b604051610300810167ffffffffffffffff811182821017156165c2576165c2616589565b6040516101c0810167ffffffffffffffff811182821017156165c2576165c2616589565b6001600160e01b0319811681146163b357600080fd5b6000604082840312156166a257600080fd5b6166aa61659f565b90508135815260208201356166be8161667a565b602082015292915050565b6000604082840312156166db57600080fd5b610a5b8383616690565b6000606082840312156166f757600080fd5b6166ff6165c8565b905081358152602082013560208201526040820135604082015292915050565b60006060828403121561673157600080fd5b610a5b83836166e5565b61675a8282518051825260208082015190830152604090810151910152565b6020810151606083015260400151608090910152565b60a081016107e0828461673b565b8151815260208083015190820152604081016107e0565b6000604082840312156167a757600080fd5b50919050565b60005b838110156167c85781810151838201526020016167b0565b83811115614b0c5750506000910152565b82815260406020820152600082518060408401526167fe8160608501602087016167ad565b601f01601f1916919091016060019392505050565b6000806040838503121561682657600080fd5b50508035926020909101359150565b8060005b6019811015614b0c5781516001600160a01b0316845260209384019390910190600101616839565b61032081016107e08284616835565b60006102a082840312156167a757600080fd5b600181811c9082168061689757607f821691505b602082108114156167a757634e487b7160e01b600052602260045260246000fd5b8051610c228161639e565b6000602082840312156168d557600080fd5b6168dd6165eb565b82519091506001600160d81b0319811681146168f857600080fd5b815292915050565b60006020828403121561691257600080fd5b61691a6165eb565b905081516168f88161667a565b60006040828403121561693957600080fd5b61694161659f565b90508151815260208201516166be8161667a565b60006060828403121561696757600080fd5b61696f61659f565b905061697b8383616900565b81526166be8360208401616927565b600082601f83011261699b57600080fd5b60408051610c80810181811067ffffffffffffffff821117156169c0576169c0616589565b8252806119008501868111156169d557600080fd5b855b81811015616a14578481890312156169ef5760008081fd5b6169f761659f565b8151815260208083015181830152908452929092019184016169d7565b50919695505050505050565b600081830360a0811215616a3357600080fd5b616a3b6165c8565b91506060811215616a4b57600080fd5b50616a546165c8565b82518152602083015160208201526040830151604082015280825250606082015160208201526080820151604082015292915050565b600060a08284031215616a9c57600080fd5b60405160a0810181811067ffffffffffffffff82111715616abf57616abf616589565b806040525080915082518152602083015160208201526040830151604082015260608301516060820152616af684608085016168c3565b60808201525092915050565b80151581146163b357600080fd5b8051610c2281616b02565b600082601f830112616b2c57600080fd5b60405161032080820182811067ffffffffffffffff82111715616b5157616b51616589565b60405283018185821115616b6457600080fd5b845b82811015616b87578051616b798161639e565b825260209182019101616b66565b509195945050505050565b6000611ec08284031215616ba557600080fd5b616bad61660e565b9050616bb8826168b8565b815260208201516020820152616bd18360408401616955565b6040820152616be38360a0840161698a565b60608201526119a082015160808201526119c082015160a0820152616c0c836119e08401616a20565b60c0820152616c1f83611a808401616a8a565b60e0820152616c31611b208301616b10565b610100820152611b40820151610120820152611b60820151610140820152616c5d83611b808401616b1b565b610160820152611ea082015161018082015292915050565b600060608284031215616c8757600080fd5b616c8f6165c8565b905081518152602082015160208201526040820151616cad81616b02565b604082015292915050565b600082601f830112616cc957600080fd5b616cd16165eb565b80606080850186811115616ce457600080fd5b855b81811015616a1457616cf88882616c75565b85526020909401938201616ce6565b60006123808284031215616d1a57600080fd5b616d22616632565b616d2b836168b8565b8152616d39602084016168b8565b6020820152616d4b84604085016168c3565b6040820152616d5d8460608501616b92565b6060820152616d7084611f208501616cb8565b6080820152611f8083015160a0820152611fa083015160c0820152611fc083015160e0820152616da3611fe08401616b10565b610100820152616db7846120008501616a20565b6101208201526120a0830151610140820152616dd7846120c08501616955565b610160820152616deb846121208501616900565b610180820152616dff846121408501616927565b6101a0820152616e13846121808501616c75565b6101c08201526121e08301516101e0820152612200830151610200820152616e3e61222084016168b8565b610220820152616e52846122408501616a8a565b6102408201526122e08301516102608201526123008301516102808201526123208301516102a0820152616e8a8461234085016168c3565b6102c082015261236092909201516102e083015250919050565b8035610c2281616b02565b600060408284031215616ec157600080fd5b6040516040810181811067ffffffffffffffff82111715616ee457616ee4616589565b604052823581526020830135616ef981616b02565b60208201529392505050565b8035600d8110610c2257600080fd5b600060608284031215616f2657600080fd5b616f2e6165c8565b90508135616f3b8161639e565b81526020820135616f4b8161639e565b806020830152506040820135604082015292915050565b600060408284031215616f7457600080fd5b616f7c6165eb565b90506168f88383616690565b600060208284031215616f9a57600080fd5b616fa26165eb565b905081356168f88161639e565b600060208284031215616fc157600080fd5b616fc96165eb565b9135825250919050565b600060408284031215616fe557600080fd5b616fed61659f565b9050813581526020820135602082015292915050565b60006060828403121561701557600080fd5b61701d6165eb565b90506168f883836166e5565b60008183036102a081121561703d57600080fd5b61704561659f565b8335815261028080601f198401121561705d57600080fd5b6170656165eb565b925061706f616656565b61707b60208701616f05565b815261708a8760408801616f14565b602082015261709c8760a08801616f62565b60408201526170ae8760e08801616f88565b60608201526101006170c288828901616faf565b60808301526101206170d5818901616ea4565b60a08401526101406170e98a828b01616f88565b60c08501526101606170fc818b01616ea4565b60e08601526101806171108c828d01616fd3565b858701526171228c6101c08d01616faf565b848701526171348c6101e08d01617003565b838701526171456102408c01616ea4565b828701526171566102608c01616ea4565b81870152505050505061716b87838801616f88565b6101a082015283525060208101919091529392505050565b600d8110617193576171936163d3565b9052565b6111c6828251805182526020908101516001600160e01b031916910152565b6111c68282518051825260208082015190830152604090810151910152565b60006102c08201905060018060a01b038416825282516020830152602083015151617204604084018251617183565b60208181015180516001600160a01b03908116606087015291810151909116608085015260409081015160a085015281015161724360c0850182617197565b50606081015161010061726181860183516001600160a01b03169052565b6080830151915061012061727781870184519052565b60a0840151925061014061728e8188018515159052565b60c085015193506101606172ad81890186516001600160a01b03169052565b60e086015194506101806172c4818a018715159052565b9386015194506101a0936172e48986018780518252602090810151910152565b83870151516101e08a01528287015195506173036102008a01876171b6565b9086015115156102608901528501518015156102808901529350617325915050565b919091015180516001600160a01b03166102a08501529050509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561736e5761736e617345565b500190565b634e487b7160e01b600052603260045260246000fd5b600060001982141561739d5761739d617345565b5060010190565b60008160001904831182151516156173be576173be617345565b500290565b6000828210156173d5576173d5617345565b500390565b6000826173f757634e487b7160e01b600052601260045260246000fd5b500490565b8060005b6064811015614b0c5761741e84835180518252602090810151910152565b6040939093019260209190910190600101617400565b80518252602080820151908301526040808201519083015260608082015190830152608090810151516001600160d81b031916910152565b80516001600160a01b03168252602081015160208301526040810151617495604084018261649c565b5060608101516174a860a08401826173fc565b5060808101516119a083015260a08101516119c083015260c08101516174d26119e084018261673b565b5060e08101516174e6611a80840182617434565b506101008101511515611b20830152610120810151611b40830152610140810151611b60830152610160810151617521611b80840182616835565b506101800151611ea09190910152565b8060005b6001811015614b0c5761755f84835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101617535565b81516001600160a01b03168152612380810160208301516175a160208401826001600160a01b03169052565b5060408301516175be6040840182516001600160d81b0319169052565b5060608301516175d1606084018261746c565b5060808301516175e5611f20840182617531565b5060a0830151611f8083015260c0830151611fa083015260e0830151611fc08301526101008301511515611fe083015261012083015161762961200084018261673b565b506101408301516120a083015261016083015161764a6120c084018261649c565b50610180830151516001600160e01b03199081166121208401526101a084015180516121408501526020908101519091166121608401526101c08401518051612180850152908101516121a08401526040015115156121c08301526101e08301516121e08301526102008301516122008301526102208301516001600160a01b03166122208301526102408301516176e6612240840182617434565b506102608301516122e08301526102808301516123008301526102a08301516123208301526102c0830151516001600160d81b0319166123408301526102e0909201516123609091015290565b600082516177458184602087016167ad565b9190910192915050565b60006020828403121561776157600080fd5b8151610a5b81616b0256fea26469706673582212200ea7c90fe40228d0ee335efac4fc44abf07f8453603e4f5df311d0741ec12f5364736f6c634300080c0033`,
  BytecodeLen: 38024,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    vBtBal: `vBtBal`,
    vCcCm: `vCcCm`,
    vCurrSale: `vCurrSale`,
    vHash: `vHash`,
    vOptedIn: `vOptedIn`,
    vcVersion: `vcVersion`,
    wlMember: `wlMember`,
    wlMembers: `wlMembers`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:454:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:122:35:after expr stmt semicolon',
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
  "aST": aST,
  "addCoopId": addCoopId,
  "addWL": addWL,
  "buyOS": buyOS,
  "cBT": cBT,
  "cCM": cCM,
  "claimOSpr": claimOSpr,
  "createOS": createOS,
  "dBT": dBT,
  "docHash": docHash,
  "endOS": endOS,
  "optIn": optIn,
  "remWL": remWL
  };
export const _APIs = {
  aST: aST,
  addCoopId: addCoopId,
  addWL: addWL,
  buyOS: buyOS,
  cBT: cBT,
  cCM: cCM,
  claimOSpr: claimOSpr,
  createOS: createOS,
  dBT: dBT,
  docHash: docHash,
  endOS: endOS,
  optIn: optIn,
  remWL: remWL
  };
