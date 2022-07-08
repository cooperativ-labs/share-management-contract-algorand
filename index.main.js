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
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async (_v3320 ) => {
                const v3320 = stdlib.protect(ctc0, _v3320, null);
              
              const v3321 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3320), null);
              const v3322 = stdlib.fromSome(v3321, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3323 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3320), null);
              const v3324 = stdlib.fromSome(v3323, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3325 = [v3322, v3324];
              
              return v3325;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc18
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              
              return v3319;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              const v3318 = [v3315, v3316, v3317];
              
              return v3318;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc19
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async (_v3327 ) => {
                const v3327 = stdlib.protect(ctc0, _v3327, null);
              
              const v3328 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v3327), null);
              const v3329 = stdlib.fromSome(v3328, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3330 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v3327), null);
              const v3331 = stdlib.fromSome(v3330, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3332 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v3327), null);
              const v3333 = stdlib.fromSome(v3332, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3334 = [v3329, v3331, v3333];
              
              return v3334;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc19
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              const v3353 = [v3352, v2939];
              
              return v3353;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc20
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              const v3355 = [v2935, v3354];
              
              return v3355;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc21
        },
      vCurrSale: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              const v3365 = {
                cumProceeds: v3364,
                price: v3361,
                qty: v3360,
                sold: v3362,
                status: v3363
                };
              
              return v3365;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc22
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              
              return v3341;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      vOptedIn: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async (_v3356 ) => {
                const v3356 = stdlib.protect(ctc0, _v3356, null);
              
              const v3357 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v3356), null);
              const v3358 = stdlib.fromSome(v3357, false);
              
              return v3358;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async () => {
              
              const v3349 = [v3346, v3348];
              
              return v3349;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
            return (await ((async (_v3336 ) => {
                const v3336 = stdlib.protect(ctc0, _v3336, null);
              
              const v3337 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v3336), null);
              let v3338;
              switch (v3337[0]) {
                case 'None': {
                  const v3339 = v3337[1];
                  v3338 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3340 = v3337[1];
                  v3338 = true;
                  
                  break;
                  }
                }
              
              return v3338;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      wlMembers: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = svs;
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
    aST0_704: ctc13,
    addCoopId0_704: ctc15,
    addWL0_704: ctc16,
    buyOS0_704: ctc17,
    cBT0_704: ctc18,
    cCM0_704: ctc16,
    claimOSpr0_704: ctc18,
    createOS0_704: ctc19,
    dBT0_704: ctc20,
    docHash0_704: ctc22,
    endOS0_704: ctc18,
    optIn0_704: ctc18,
    remWL0_704: ctc16
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
  
  
  const v2916 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2917 = [v2916];
  const v2923 = 'I have deployed';
  const v2924 = stdlib.protect(ctc12, await interact.getParams(v2923), {
    at: './index.rsh:88:103:application',
    fs: ['at ./index.rsh:87:17:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2925 = v2924.authorizedST;
  const v2926 = v2924.bT;
  const v2927 = v2924.companyName;
  const v2928 = v2924.lockSale;
  const v2929 = v2924.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2927, v2928, v2929, v2926, v2925],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10, ctc3, ctc11, ctc9, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v2936, v2937, v2938, v2939, v2940], secs: v2942, time: v2941, didSend: v42, from: v2935 } = txn1;
      
      const v2943 = v2917[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0')];
      const v2945 = v2943[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '1')];
      const v2946 = v2943[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '2')];
      const v2947 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2945, v2946];
      const v2948 = stdlib.Array_set(v2917, stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0'), v2947);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2939
        });
      ;
      const v2951 = [v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935];
      const v2953 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3153 = [v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953];
      const v3154 = '1.03';
      const v3155 = 'cooperativIdcooperativIdcooperativId';
      const v3156 = [v3154, v3155];
      const v3258 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v3259 = [v3258, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3260 = 'ended';
      const v3261 = {
        cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        price: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        status: v3260
        };
      const v3263 = {
        ctcMan: v2938,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v3156,
        distrHis: v3153,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v3259,
        saleDetails: v3261,
        saleLocked: v2937,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlArr: v2951,
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3264 = v3263;
      const v3265 = v2941;
      const v3267 = v2948;
      
      if (await (async () => {
        
        return true;})()) {
        const v3315 = v3264.totST;
        const v3316 = v3264.totBT;
        const v3317 = v3264.distrNum;
        const v3319 = v3264.saleLocked;
        const v3341 = v3264.docHash;
        const v3343 = v3341[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
        const v3345 = v3264.cv;
        const v3346 = v3345[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
        const v3348 = v3345[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
        const v3350 = v3267[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
        const v3351 = v3350[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
        const v3352 = stdlib.cast("UInt", "UInt256", v3351, false);
        const v3354 = v3264.ctcMan;
        const v3359 = v3264.saleDetails;
        const v3360 = v3359.qty;
        const v3361 = v3359.price;
        const v3362 = v3359.sold;
        const v3363 = v3359.status;
        const v3364 = v3359.cumProceeds;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2939
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
  const {data: [v2936, v2937, v2938, v2939, v2940], secs: v2942, time: v2941, didSend: v42, from: v2935 } = txn1;
  const v2943 = v2917[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0')];
  const v2945 = v2943[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '1')];
  const v2946 = v2943[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '2')];
  const v2947 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2945, v2946];
  const v2948 = stdlib.Array_set(v2917, stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0'), v2947);
  ;
  ;
  const v2951 = [v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935, v2935];
  const v2953 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3153 = [v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953, v2953];
  const v3154 = '1.03';
  const v3155 = 'cooperativIdcooperativIdcooperativId';
  const v3156 = [v3154, v3155];
  const v3258 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v3259 = [v3258, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3260 = 'ended';
  const v3261 = {
    cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    price: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    status: v3260
    };
  const v3263 = {
    ctcMan: v2938,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v3156,
    distrHis: v3153,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v3259,
    saleDetails: v3261,
    saleLocked: v2937,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlArr: v2951,
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3264 = v3263;
  let v3265 = v2941;
  let v3267 = v2948;
  
  while (await (async () => {
    
    return true;})()) {
    const v3315 = v3264.totST;
    const v3316 = v3264.totBT;
    const v3317 = v3264.distrNum;
    const v3319 = v3264.saleLocked;
    const v3341 = v3264.docHash;
    const v3343 = v3341[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
    const v3345 = v3264.cv;
    const v3346 = v3345[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
    const v3348 = v3345[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
    const v3350 = v3267[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
    const v3351 = v3350[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
    const v3352 = stdlib.cast("UInt", "UInt256", v3351, false);
    const v3354 = v3264.ctcMan;
    const v3359 = v3264.saleDetails;
    const v3360 = v3359.qty;
    const v3361 = v3359.price;
    const v3362 = v3359.sold;
    const v3363 = v3359.status;
    const v3364 = v3359.cumProceeds;
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
        args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364],
        evt_cnt: 0,
        funcNum: 3,
        lct: v3265,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:446:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v13131, time: v13130, didSend: v2485, from: v13129 } = txn3;
          
          ;
          const cv3264 = v3264;
          const cv3265 = v13130;
          const cv3267 = v3267;
          
          await (async () => {
            const v3264 = cv3264;
            const v3265 = cv3265;
            const v3267 = cv3267;
            
            if (await (async () => {
              
              return true;})()) {
              const v3315 = v3264.totST;
              const v3316 = v3264.totBT;
              const v3317 = v3264.distrNum;
              const v3319 = v3264.saleLocked;
              const v3341 = v3264.docHash;
              const v3343 = v3341[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
              const v3345 = v3264.cv;
              const v3346 = v3345[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
              const v3348 = v3345[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
              const v3350 = v3267[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
              const v3351 = v3350[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
              const v3352 = stdlib.cast("UInt", "UInt256", v3351, false);
              const v3354 = v3264.ctcMan;
              const v3359 = v3264.saleDetails;
              const v3360 = v3359.qty;
              const v3361 = v3359.price;
              const v3362 = v3359.sold;
              const v3363 = v3359.status;
              const v3364 = v3359.cumProceeds;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2939
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
      const {data: [], secs: v13131, time: v13130, didSend: v2485, from: v13129 } = txn3;
      ;
      const v13132 = stdlib.addressEq(v2935, v13129);
      stdlib.assert(v13132, {
        at: './index.rsh:446:21:dot',
        fs: ['at ./index.rsh:445:40:application call to [unknown function] (defined at: ./index.rsh:445:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv3264 = v3264;
      const cv3265 = v13130;
      const cv3267 = v3267;
      
      v3264 = cv3264;
      v3265 = cv3265;
      v3267 = cv3267;
      
      continue;
      }
    else {
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn2;
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v3894 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v3895 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v3896 = [v3351, v3894, v3895];
          const v3897 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v3896);
          ;
          const v3899 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '0')];
          const v3900 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '1')];
          const v3901 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '2')];
          const v3902 = stdlib.addressEq(v3899, v2935);
          const v3904 = stdlib.addressEq(v3899, v3354);
          const v3905 = v3902 ? true : v3904;
          stdlib.assert(v3905, {
            at: './index.rsh:327:24:application',
            fs: ['at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3906 = stdlib.gt256(v3901, stdlib.checkedBigNumberify('./index.rsh:328:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3906, {
            at: './index.rsh:328:24:application',
            fs: ['at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v3900, null);
          const v3908 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3900), null);
          const v3909 = stdlib.fromSome(v3908, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3910 = stdlib.add256(v3909, v3901);
          await stdlib.mapSet(map0, v3900, v3910);
          const v3911 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3900), null);
          const v3912 = stdlib.fromSome(v3911, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3913 = stdlib.add256(v3912, v3901);
          await stdlib.mapSet(map3, v3900, v3913);
          const v3915 = stdlib.add256(v3315, v3901);
          const v3916 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3900), null);
          const v3918 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3920 = stdlib.fromSome(v3916, v3918);
          const v3921 = ['None', null];
          const v3922 = await stdlib.Array_asyncReduce([v3920], v3921, async([v3924], v3923, v3925) => {
            let v3926;
            switch (v3923[0]) {
              case 'None': {
                const v3927 = v3923[1];
                v3926 = true;
                
                break;
                }
              case 'Some': {
                const v3928 = v3923[1];
                v3926 = false;
                
                break;
                }
              }
            const v3929 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:337:53:decimal', stdlib.UInt_max, '0'), v3924);
            const v3930 = v3926 ? v3929 : false;
            const v3931 = ['Some', v3925];
            const v3932 = v3930 ? v3931 : v3923;
            
            return v3932;})
          const v3933 = stdlib.fromSome(v3922, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v3934 = stdlib.cast("UInt256", "UInt", v3901, false);
          const v3936 = stdlib.Array_set(v3920, v3933, v3934);
          await stdlib.mapSet(map8, v3900, v3936);
          const v3937 = true;
          await txn2.getOutput('aST', 'v3937', ctc3, v3937);
          const v3947 = v3264.currDistr;
          const v3949 = v3264.distrHis;
          const v3950 = v3264.distrIndex;
          const v3957 = v3264.wlArr;
          const v3958 = v3264.wlIndex;
          const v3959 = {
            ctcMan: v3354,
            currDistr: v3947,
            cv: v3345,
            distrHis: v3949,
            distrIndex: v3950,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3915,
            wlArr: v3957,
            wlIndex: v3958
            };
          const cv3264 = v3959;
          const cv3265 = v3767;
          const cv3267 = v3897;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v4614 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v4615 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v4616 = [v3351, v4614, v4615];
          const v4617 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v4616);
          ;
          const v4684 = v4489[stdlib.checkedBigNumberify('./index.rsh:357:14:spread', stdlib.UInt_max, '0')];
          const v4688 = v3264.currDistr;
          const v4690 = v3264.distrHis;
          const v4691 = v3264.distrIndex;
          const v4698 = v3264.wlArr;
          const v4699 = v3264.wlIndex;
          const v4700 = [v3346, v4684];
          const v4701 = {
            ctcMan: v3354,
            currDistr: v4688,
            cv: v4700,
            distrHis: v4690,
            distrIndex: v4691,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v4698,
            wlIndex: v4699
            };
          const v4702 = true;
          await txn2.getOutput('addCoopId', 'v4702', ctc3, v4702);
          const cv3264 = v4701;
          const cv3265 = v3767;
          const cv3267 = v4617;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v5334 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v5335 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v5336 = [v3351, v5334, v5335];
          const v5337 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v5336);
          ;
          const v5435 = v5209[stdlib.checkedBigNumberify('./index.rsh:271:13:spread', stdlib.UInt_max, '0')];
          const v5436 = stdlib.addressEq(v3765, v2935);
          const v5438 = stdlib.addressEq(v3765, v3354);
          const v5439 = v5436 ? true : v5438;
          stdlib.assert(v5439, {
            at: './index.rsh:282:24:application',
            fs: ['at ./index.rsh:281:13:application call to [unknown function] (defined at: ./index.rsh:281:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v5435, null);
          const v5441 = v3264.wlIndex;
          const v5442 = stdlib.ge(v5441, stdlib.checkedBigNumberify('./index.rsh:287:80:decimal', stdlib.UInt_max, '24'));
          const v5444 = stdlib.add(v5441, stdlib.checkedBigNumberify('./index.rsh:287:105:decimal', stdlib.UInt_max, '1'));
          const v5445 = v5442 ? stdlib.checkedBigNumberify('./index.rsh:287:85:decimal', stdlib.UInt_max, '0') : v5444;
          const v5447 = v3264.currDistr;
          const v5449 = v3264.distrHis;
          const v5450 = v3264.distrIndex;
          const v5457 = v3264.wlArr;
          const v5467 = stdlib.Array_set(v5457, v5445, v5435);
          const v5468 = {
            ctcMan: v3354,
            currDistr: v5447,
            cv: v3345,
            distrHis: v5449,
            distrIndex: v5450,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v5467,
            wlIndex: v5445
            };
          const v5469 = true;
          await txn2.getOutput('addWL', 'v5469', ctc3, v5469);
          const cv3264 = v5468;
          const cv3265 = v3767;
          const cv3267 = v5337;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          undefined /* setApiDetails */;
          const v5960 = v5929[stdlib.checkedBigNumberify('./index.rsh:194:13:spread', stdlib.UInt_max, '0')];
          const v5963 = stdlib.mul(v3361, v5960);
          ;
          const v6051 = stdlib.add(v3351, v5963);
          const v6054 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6055 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6056 = [v6051, v6054, v6055];
          const v6057 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6056);
          ;
          const v6203 = stdlib.gt(v5960, stdlib.checkedBigNumberify('./index.rsh:208:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6203, {
            at: './index.rsh:208:24:application',
            fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v6206 = 'activ';
          const v6207 = stdlib.digest(ctc25, [v3363]);
          const v6209 = stdlib.digest(ctc25, [v6206]);
          const v6210 = stdlib.digestEq(v6207, v6209);
          stdlib.assert(v6210, {
            at: './index.rsh:209:24:application',
            fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
            msg: 'no sale is active',
            who: 'Creator'
            });
          const v6213 = stdlib.ge(v3360, v5960);
          stdlib.assert(v6213, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
            msg: 'do not try to buy more than available',
            who: 'Creator'
            });
          const v6214 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3765), null);
          let v6215;
          switch (v6214[0]) {
            case 'None': {
              const v6216 = v6214[1];
              v6215 = false;
              
              break;
              }
            case 'Some': {
              const v6217 = v6214[1];
              v6215 = true;
              
              break;
              }
            }
          stdlib.assert(v6215, {
            at: './index.rsh:211:24:application',
            fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
            msg: 'you must be whitelisted to buy',
            who: 'Creator'
            });
          const v6218 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3765), null);
          const v6219 = stdlib.fromSome(v6218, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6220 = stdlib.cast("UInt", "UInt256", v5960, false);
          const v6221 = stdlib.add256(v6219, v6220);
          await stdlib.mapSet(map0, v3765, v6221);
          const v6222 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3765), null);
          const v6223 = stdlib.fromSome(v6222, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6225 = stdlib.add256(v6223, v6220);
          await stdlib.mapSet(map3, v3765, v6225);
          const v6229 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3765), null);
          const v6231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6233 = stdlib.fromSome(v6229, v6231);
          const v6234 = ['None', null];
          const v6235 = await stdlib.Array_asyncReduce([v6233], v6234, async([v6237], v6236, v6238) => {
            let v6239;
            switch (v6236[0]) {
              case 'None': {
                const v6240 = v6236[1];
                v6239 = true;
                
                break;
                }
              case 'Some': {
                const v6241 = v6236[1];
                v6239 = false;
                
                break;
                }
              }
            const v6242 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:218:53:decimal', stdlib.UInt_max, '0'), v6237);
            const v6243 = v6239 ? v6242 : false;
            const v6244 = ['Some', v6238];
            const v6245 = v6243 ? v6244 : v6236;
            
            return v6245;})
          const v6246 = stdlib.fromSome(v6235, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v6248 = stdlib.Array_set(v6233, v6246, v5960);
          await stdlib.mapSet(map8, v3765, v6248);
          const v6252 = stdlib.sub(v3360, v5960);
          const v6261 = stdlib.add(v3362, v5960);
          const v6265 = stdlib.mul(v5960, v3361);
          const v6266 = stdlib.add(v3364, v6265);
          const v6267 = {
            cumProceeds: v6266,
            price: v3361,
            qty: v6252,
            sold: v6261,
            status: v3363
            };
          const v6269 = v3264.currDistr;
          const v6271 = v3264.distrHis;
          const v6272 = v3264.distrIndex;
          const v6279 = v3264.wlArr;
          const v6280 = v3264.wlIndex;
          const v6282 = {
            ctcMan: v3354,
            currDistr: v6269,
            cv: v3345,
            distrHis: v6271,
            distrIndex: v6272,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v6267,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v6279,
            wlIndex: v6280
            };
          const v6283 = {
            cumProceeds: v6266,
            price: v3361,
            qty: v6252,
            sold: v6261,
            status: v3363
            };
          await txn2.getOutput('buyOS', 'v6283', ctc26, v6283);
          const cv3264 = v6282;
          const cv3265 = v3767;
          const cv3267 = v6057;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v6774 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6775 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6776 = [v3351, v6774, v6775];
          const v6777 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6776);
          ;
          const v7021 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3765), null);
          let v7022;
          switch (v7021[0]) {
            case 'None': {
              const v7023 = v7021[1];
              v7022 = false;
              
              break;
              }
            case 'Some': {
              const v7024 = v7021[1];
              v7022 = true;
              
              break;
              }
            }
          stdlib.assert(v7022, {
            at: './index.rsh:411:24:application',
            fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v7025 = v6777[stdlib.checkedBigNumberify('./index.rsh:413:40:application', stdlib.UInt_max, '0')];
          const v7026 = v7025[stdlib.checkedBigNumberify('./index.rsh:413:40:application', stdlib.UInt_max, '0')];
          const v7027 = stdlib.cast("UInt", "UInt256", v7026, false);
          const v7028 = stdlib.gt256(v7027, stdlib.checkedBigNumberify('./index.rsh:413:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7028, {
            at: './index.rsh:413:24:application',
            fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v7030 = stdlib.gt256(v3315, stdlib.checkedBigNumberify('./index.rsh:414:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7030, {
            at: './index.rsh:414:24:application',
            fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v7032 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3765), null);
          const v7033 = stdlib.fromSome(v7032, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7034 = stdlib.ge256(v3315, v7033);
          stdlib.assert(v7034, {
            at: './index.rsh:415:24:application',
            fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v7037 = stdlib.gt256(v7033, stdlib.checkedBigNumberify('./index.rsh:416:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7037, {
            at: './index.rsh:416:24:application',
            fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v7040 = v3264.currDistr;
          const v7041 = stdlib.mul256(v7033, v7040);
          const v7043 = stdlib.div256(v7041, v3315);
          const v7044 = stdlib.cast("UInt256", "UInt", v7043, false);
          const v7047 = stdlib.le(v7044, v7026);
          stdlib.assert(v7047, {
            at: './index.rsh:418:24:application',
            fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v7054 = stdlib.sub(v7026, v7044);
          const v7057 = v7025[stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '1')];
          const v7058 = v7025[stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '2')];
          const v7059 = [v7054, v7057, v7058];
          const v7060 = stdlib.Array_set(v6777, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v7059);
          ;
          const v7061 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3765), null);
          const v7062 = stdlib.fromSome(v7061, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7063 = stdlib.add256(v7062, v7043);
          await stdlib.mapSet(map4, v3765, v7063);
          const v7064 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3765), null);
          const v7065 = stdlib.fromSome(v7064, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7066 = stdlib.add256(v7065, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v3765, v7066);
          await txn2.getOutput('cBT', 'v7043', ctc1, v7043);
          const cv3264 = v3264;
          const cv3265 = v3767;
          const cv3267 = v7060;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v7494 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v7495 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v7496 = [v3351, v7494, v7495];
          const v7497 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v7496);
          ;
          const v7794 = v7369[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
          const v7795 = stdlib.addressEq(v3765, v2935);
          const v7797 = stdlib.addressEq(v3765, v3354);
          const v7798 = v7795 ? true : v7797;
          stdlib.assert(v7798, {
            at: './index.rsh:438:24:application',
            fs: ['at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v7799 = true;
          await txn2.getOutput('cCM', 'v7799', ctc3, v7799);
          const v7807 = v3264.currDistr;
          const v7809 = v3264.distrHis;
          const v7810 = v3264.distrIndex;
          const v7817 = v3264.wlArr;
          const v7818 = v3264.wlIndex;
          const v7819 = {
            ctcMan: v7794,
            currDistr: v7807,
            cv: v3345,
            distrHis: v7809,
            distrIndex: v7810,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v7817,
            wlIndex: v7818
            };
          const cv3264 = v7819;
          const cv3265 = v3767;
          const cv3267 = v7497;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v8214 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8215 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8216 = [v3351, v8214, v8215];
          const v8217 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8216);
          ;
          const v8544 = stdlib.addressEq(v3765, v2935);
          const v8546 = stdlib.addressEq(v3765, v3354);
          const v8547 = v8544 ? true : v8546;
          stdlib.assert(v8547, {
            at: './index.rsh:240:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v8550 = stdlib.gt(v3364, stdlib.checkedBigNumberify('./index.rsh:241:57:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8550, {
            at: './index.rsh:241:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: 'available proceeds must be greater than 0',
            who: 'Creator'
            });
          const v8551 = v8217[stdlib.checkedBigNumberify('./index.rsh:242:32:application', stdlib.UInt_max, '0')];
          const v8552 = v8551[stdlib.checkedBigNumberify('./index.rsh:242:32:application', stdlib.UInt_max, '0')];
          const v8555 = stdlib.ge(v8552, v3364);
          stdlib.assert(v8555, {
            at: './index.rsh:242:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v8563 = stdlib.sub(v8552, v3364);
          const v8566 = v8551[stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '1')];
          const v8567 = v8551[stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '2')];
          const v8568 = [v8563, v8566, v8567];
          const v8569 = stdlib.Array_set(v8217, stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '0'), v8568);
          ;
          const v8576 = {
            cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            price: v3361,
            qty: v3360,
            sold: v3362,
            status: v3363
            };
          const v8578 = v3264.currDistr;
          const v8580 = v3264.distrHis;
          const v8581 = v3264.distrIndex;
          const v8588 = v3264.wlArr;
          const v8589 = v3264.wlIndex;
          const v8591 = {
            ctcMan: v3354,
            currDistr: v8578,
            cv: v3345,
            distrHis: v8580,
            distrIndex: v8581,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v8576,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v8588,
            wlIndex: v8589
            };
          const v8592 = true;
          await txn2.getOutput('claimOSpr', 'v8592', ctc3, v8592);
          const cv3264 = v8591;
          const cv3265 = v3767;
          const cv3267 = v8569;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v8934 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8935 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8936 = [v3351, v8934, v8935];
          const v8937 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8936);
          ;
          const v9324 = v8809[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '0')];
          const v9325 = v8809[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '1')];
          const v9326 = stdlib.addressEq(v3765, v2935);
          const v9328 = stdlib.addressEq(v3765, v3354);
          const v9329 = v9326 ? true : v9328;
          stdlib.assert(v9329, {
            at: './index.rsh:165:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v9330 = stdlib.gt(v9324, stdlib.checkedBigNumberify('./index.rsh:166:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9330, {
            at: './index.rsh:166:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v9331 = stdlib.gt(v9325, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9331, {
            at: './index.rsh:167:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v9338 = 'activ';
          const v9343 = {
            cumProceeds: v3364,
            price: v9325,
            qty: v9324,
            sold: v3362,
            status: v9338
            };
          const v9345 = v3264.currDistr;
          const v9347 = v3264.distrHis;
          const v9348 = v3264.distrIndex;
          const v9355 = v3264.wlArr;
          const v9356 = v3264.wlIndex;
          const v9359 = {
            ctcMan: v3354,
            currDistr: v9345,
            cv: v3345,
            distrHis: v9347,
            distrIndex: v9348,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v9343,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v9355,
            wlIndex: v9356
            };
          const v9361 = {
            cumProceeds: v3364,
            price: v9325,
            qty: v9324,
            sold: v3362,
            status: v9338
            };
          await txn2.getOutput('createOS', 'v9361', ctc26, v9361);
          const cv3264 = v9359;
          const cv3265 = v3767;
          const cv3267 = v8937;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          undefined /* setApiDetails */;
          const v9602 = v9529[stdlib.checkedBigNumberify('./index.rsh:371:13:spread', stdlib.UInt_max, '0')];
          const v9603 = stdlib.cast("UInt256", "UInt", v9602, false);
          ;
          const v9651 = stdlib.add(v3351, v9603);
          const v9654 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v9655 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v9656 = [v9651, v9654, v9655];
          const v9657 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v9656);
          ;
          const v10103 = stdlib.addressEq(v3765, v2935);
          const v10105 = stdlib.addressEq(v3765, v3354);
          const v10106 = v10103 ? true : v10105;
          stdlib.assert(v10106, {
            at: './index.rsh:383:24:application',
            fs: ['at ./index.rsh:382:13:application call to [unknown function] (defined at: ./index.rsh:382:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v10108 = stdlib.gt(v9603, stdlib.checkedBigNumberify('./index.rsh:384:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10108, {
            at: './index.rsh:384:24:application',
            fs: ['at ./index.rsh:382:13:application call to [unknown function] (defined at: ./index.rsh:382:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v10110 = stdlib.add256(v3316, v9602);
          const v10114 = v3264.distrHis;
          const v10115 = v3264.distrIndex;
          const v10122 = v3264.wlArr;
          const v10123 = v3264.wlIndex;
          const v10126 = stdlib.add256(v3317, stdlib.checkedBigNumberify('./index.rsh:387:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v10128 = {
            ctcMan: v3354,
            currDistr: v9602,
            cv: v3345,
            distrHis: v10114,
            distrIndex: v10115,
            distrNum: v10126,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v10110,
            totST: v3315,
            wlArr: v10122,
            wlIndex: v10123
            };
          const v10129 = true;
          await txn2.getOutput('dBT', 'v10129', ctc3, v10129);
          const cv3264 = v10128;
          const cv3265 = v3767;
          const cv3267 = v9657;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v10374 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v10375 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v10376 = [v3351, v10374, v10375];
          const v10377 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v10376);
          ;
          const v10860 = v10249[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '0')];
          const v10863 = stdlib.eq(v3343, stdlib.checkedBigNumberify('./index.rsh:264:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10863, {
            at: './index.rsh:264:24:application',
            fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v10864 = stdlib.addressEq(v3765, v2935);
          const v10866 = stdlib.addressEq(v3765, v3354);
          const v10867 = v10864 ? true : v10866;
          stdlib.assert(v10867, {
            at: './index.rsh:265:24:application',
            fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v10868 = stdlib.add(v3343, stdlib.checkedBigNumberify('./index.rsh:266:76:decimal', stdlib.UInt_max, '1'));
          const v10871 = v3264.currDistr;
          const v10873 = v3264.distrHis;
          const v10874 = v3264.distrIndex;
          const v10881 = v3264.wlArr;
          const v10882 = v3264.wlIndex;
          const v10883 = [v10860, v10868, v3767];
          const v10884 = {
            ctcMan: v3354,
            currDistr: v10871,
            cv: v3345,
            distrHis: v10873,
            distrIndex: v10874,
            distrNum: v3317,
            docHash: v10883,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v10881,
            wlIndex: v10882
            };
          const v10885 = true;
          await txn2.getOutput('docHash', 'v10885', ctc3, v10885);
          const cv3264 = v10884;
          const cv3265 = v3767;
          const cv3267 = v10377;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v11094 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11095 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11096 = [v3351, v11094, v11095];
          const v11097 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11096);
          ;
          const v11618 = stdlib.addressEq(v3765, v2935);
          const v11620 = stdlib.addressEq(v3765, v3354);
          const v11621 = v11618 ? true : v11620;
          stdlib.assert(v11621, {
            at: './index.rsh:186:24:application',
            fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v11624 = 'activ';
          const v11625 = stdlib.digest(ctc25, [v3363]);
          const v11627 = stdlib.digest(ctc25, [v11624]);
          const v11628 = stdlib.digestEq(v11625, v11627);
          stdlib.assert(v11628, {
            at: './index.rsh:187:24:application',
            fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
            msg: 'sale must be active',
            who: 'Creator'
            });
          const v11636 = {
            cumProceeds: v3364,
            price: v3361,
            qty: v3360,
            sold: v3362,
            status: v3260
            };
          const v11638 = v3264.currDistr;
          const v11640 = v3264.distrHis;
          const v11641 = v3264.distrIndex;
          const v11648 = v3264.wlArr;
          const v11649 = v3264.wlIndex;
          const v11652 = {
            ctcMan: v3354,
            currDistr: v11638,
            cv: v3345,
            distrHis: v11640,
            distrIndex: v11641,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v11636,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v11648,
            wlIndex: v11649
            };
          const v11653 = true;
          await txn2.getOutput('endOS', 'v11653', ctc3, v11653);
          const cv3264 = v11652;
          const cv3265 = v3767;
          const cv3267 = v11097;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v11814 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11815 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11816 = [v3351, v11814, v11815];
          const v11817 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11816);
          ;
          await stdlib.mapSet(map6, v3765, true);
          const v12387 = true;
          await txn2.getOutput('optIn', 'v12387', ctc3, v12387);
          const cv3264 = v3264;
          const cv3265 = v3767;
          const cv3267 = v11817;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
          continue;
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          undefined /* setApiDetails */;
          ;
          const v12534 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v12535 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v12536 = [v3351, v12534, v12535];
          const v12537 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v12536);
          ;
          const v13115 = v12409[stdlib.checkedBigNumberify('./index.rsh:296:13:spread', stdlib.UInt_max, '0')];
          const v13116 = stdlib.addressEq(v3765, v2935);
          const v13118 = stdlib.addressEq(v3765, v3354);
          const v13119 = v13116 ? true : v13118;
          stdlib.assert(v13119, {
            at: './index.rsh:307:24:application',
            fs: ['at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v13115, undefined /* Nothing */);
          const v13121 = true;
          await txn2.getOutput('remWL', 'v13121', ctc3, v13121);
          const cv3264 = v3264;
          const cv3265 = v3767;
          const cv3267 = v12537;
          
          v3264 = cv3264;
          v3265 = cv3265;
          v3267 = cv3267;
          
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
    aST0_704: ctc24,
    addCoopId0_704: ctc25,
    addWL0_704: ctc26,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc26,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc26
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3513 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:121:35:application call to "runaST0_704" (defined at: ./index.rsh:315:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v3514 = v3513[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3516 = v3513[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3521 = stdlib.addressEq(v3514, v2935);
  const v3523 = stdlib.addressEq(v3514, v3354);
  const v3524 = v3521 ? true : v3523;
  stdlib.assert(v3524, {
    at: './index.rsh:319:23:application',
    fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:29:function exp)', 'at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:121:35:application call to "runaST0_704" (defined at: ./index.rsh:315:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v3525 = stdlib.gt256(v3516, stdlib.checkedBigNumberify('./index.rsh:320:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3525, {
    at: './index.rsh:320:23:application',
    fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:29:function exp)', 'at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:121:35:application call to "runaST0_704" (defined at: ./index.rsh:315:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v3531 = ['aST0_704', v3513];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3531],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:324:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:324:34:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v3894 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v3895 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v3896 = [v3351, v3894, v3895];
          const v3897 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v3896);
          ;
          const v3900 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '1')];
          const v3901 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 7, v3900, null);
          const v3908 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3900), null);
          const v3909 = stdlib.fromSome(v3908, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3910 = stdlib.add256(v3909, v3901);
          await stdlib.simMapSet(sim_r, 0, v3900, v3910);
          const v3911 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3900), null);
          const v3912 = stdlib.fromSome(v3911, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3913 = stdlib.add256(v3912, v3901);
          await stdlib.simMapSet(sim_r, 3, v3900, v3913);
          const v3915 = stdlib.add256(v3315, v3901);
          const v3916 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v3900), null);
          const v3918 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3920 = stdlib.fromSome(v3916, v3918);
          const v3921 = ['None', null];
          const v3922 = await stdlib.Array_asyncReduce([v3920], v3921, async([v3924], v3923, v3925) => {
            let v3926;
            switch (v3923[0]) {
              case 'None': {
                const v3927 = v3923[1];
                v3926 = true;
                
                break;
                }
              case 'Some': {
                const v3928 = v3923[1];
                v3926 = false;
                
                break;
                }
              }
            const v3929 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:337:53:decimal', stdlib.UInt_max, '0'), v3924);
            const v3930 = v3926 ? v3929 : false;
            const v3931 = ['Some', v3925];
            const v3932 = v3930 ? v3931 : v3923;
            
            return v3932;})
          const v3933 = stdlib.fromSome(v3922, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v3934 = stdlib.cast("UInt256", "UInt", v3901, false);
          const v3936 = stdlib.Array_set(v3920, v3933, v3934);
          await stdlib.simMapSet(sim_r, 8, v3900, v3936);
          const v3937 = true;
          const v3938 = await txn1.getOutput('aST', 'v3937', ctc3, v3937);
          
          const v3947 = v3264.currDistr;
          const v3949 = v3264.distrHis;
          const v3950 = v3264.distrIndex;
          const v3957 = v3264.wlArr;
          const v3958 = v3264.wlIndex;
          const v3959 = {
            ctcMan: v3354,
            currDistr: v3947,
            cv: v3345,
            distrHis: v3949,
            distrIndex: v3950,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3915,
            wlArr: v3957,
            wlIndex: v3958
            };
          const v18978 = v3959;
          const v18980 = v3897;
          const v18981 = v3959.totST;
          const v18982 = v3959.totBT;
          const v18983 = v3959.distrNum;
          const v18984 = v3959.saleLocked;
          const v18985 = v3959.docHash;
          const v18986 = v18985[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v18987 = v3959.cv;
          const v18988 = v18987[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v18989 = v18987[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v18990 = v3897[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v18991 = v18990[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v18992 = stdlib.cast("UInt", "UInt256", v18991, false);
          const v18993 = v3959.ctcMan;
          const v18994 = v3959.saleDetails;
          const v18995 = v18994.qty;
          const v18996 = v18994.price;
          const v18997 = v18994.sold;
          const v18998 = v18994.status;
          const v18999 = v18994.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v3894 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v3895 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v3896 = [v3351, v3894, v3895];
      const v3897 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v3896);
      ;
      const v3899 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '0')];
      const v3900 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '1')];
      const v3901 = v3769[stdlib.checkedBigNumberify('./index.rsh:315:13:spread', stdlib.UInt_max, '2')];
      const v3902 = stdlib.addressEq(v3899, v2935);
      const v3904 = stdlib.addressEq(v3899, v3354);
      const v3905 = v3902 ? true : v3904;
      stdlib.assert(v3905, {
        at: './index.rsh:327:24:application',
        fs: ['at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3906 = stdlib.gt256(v3901, stdlib.checkedBigNumberify('./index.rsh:328:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3906, {
        at: './index.rsh:328:24:application',
        fs: ['at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map7, v3900, null);
      const v3908 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3900), null);
      const v3909 = stdlib.fromSome(v3908, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3910 = stdlib.add256(v3909, v3901);
      await stdlib.mapSet(map0, v3900, v3910);
      const v3911 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3900), null);
      const v3912 = stdlib.fromSome(v3911, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3913 = stdlib.add256(v3912, v3901);
      await stdlib.mapSet(map3, v3900, v3913);
      const v3915 = stdlib.add256(v3315, v3901);
      const v3916 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3900), null);
      const v3918 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3920 = stdlib.fromSome(v3916, v3918);
      const v3921 = ['None', null];
      const v3922 = await stdlib.Array_asyncReduce([v3920], v3921, async([v3924], v3923, v3925) => {
        let v3926;
        switch (v3923[0]) {
          case 'None': {
            const v3927 = v3923[1];
            v3926 = true;
            
            break;
            }
          case 'Some': {
            const v3928 = v3923[1];
            v3926 = false;
            
            break;
            }
          }
        const v3929 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:337:53:decimal', stdlib.UInt_max, '0'), v3924);
        const v3930 = v3926 ? v3929 : false;
        const v3931 = ['Some', v3925];
        const v3932 = v3930 ? v3931 : v3923;
        
        return v3932;})
      const v3933 = stdlib.fromSome(v3922, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
      const v3934 = stdlib.cast("UInt256", "UInt", v3901, false);
      const v3936 = stdlib.Array_set(v3920, v3933, v3934);
      await stdlib.mapSet(map8, v3900, v3936);
      const v3937 = true;
      const v3938 = await txn1.getOutput('aST', 'v3937', ctc3, v3937);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v3769, v3938), {
          at: './index.rsh:316:13:application',
          fs: ['at ./index.rsh:316:13:application call to [unknown function] (defined at: ./index.rsh:316:13:function exp)', 'at ./index.rsh:339:20:application call to "res" (defined at: ./index.rsh:326:13:function exp)', 'at ./index.rsh:326:13:application call to [unknown function] (defined at: ./index.rsh:326:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3947 = v3264.currDistr;
      const v3949 = v3264.distrHis;
      const v3950 = v3264.distrIndex;
      const v3957 = v3264.wlArr;
      const v3958 = v3264.wlIndex;
      const v3959 = {
        ctcMan: v3354,
        currDistr: v3947,
        cv: v3345,
        distrHis: v3949,
        distrIndex: v3950,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v3359,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3915,
        wlArr: v3957,
        wlIndex: v3958
        };
      const v18978 = v3959;
      const v18980 = v3897;
      const v18981 = v3959.totST;
      const v18982 = v3959.totBT;
      const v18983 = v3959.distrNum;
      const v18984 = v3959.saleLocked;
      const v18985 = v3959.docHash;
      const v18986 = v18985[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v18987 = v3959.cv;
      const v18988 = v18987[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v18989 = v18987[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v18990 = v3897[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v18991 = v18990[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v18992 = stdlib.cast("UInt", "UInt256", v18991, false);
      const v18993 = v3959.ctcMan;
      const v18994 = v3959.saleDetails;
      const v18995 = v18994.qty;
      const v18996 = v18994.price;
      const v18997 = v18994.sold;
      const v18998 = v18994.status;
      const v18999 = v18994.cumProceeds;
      return;
      
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc24,
    addWL0_704: ctc26,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc26,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc26
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3543 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:360:13:application call to [unknown function] (defined at: ./index.rsh:360:13:function exp)', 'at ./index.rsh:121:35:application call to "runaddCoopId0_704" (defined at: ./index.rsh:357:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v3550 = ['addCoopId0_704', v3543];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3550],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:363:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:363:27:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          const v4614 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v4615 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v4616 = [v3351, v4614, v4615];
          const v4617 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v4616);
          ;
          const v4684 = v4489[stdlib.checkedBigNumberify('./index.rsh:357:14:spread', stdlib.UInt_max, '0')];
          const v4688 = v3264.currDistr;
          const v4690 = v3264.distrHis;
          const v4691 = v3264.distrIndex;
          const v4698 = v3264.wlArr;
          const v4699 = v3264.wlIndex;
          const v4700 = [v3346, v4684];
          const v4701 = {
            ctcMan: v3354,
            currDistr: v4688,
            cv: v4700,
            distrHis: v4690,
            distrIndex: v4691,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v4698,
            wlIndex: v4699
            };
          const v4702 = true;
          const v4703 = await txn1.getOutput('addCoopId', 'v4702', ctc3, v4702);
          
          const v19538 = v4701;
          const v19540 = v4617;
          const v19541 = v4701.totST;
          const v19542 = v4701.totBT;
          const v19543 = v4701.distrNum;
          const v19544 = v4701.saleLocked;
          const v19545 = v4701.docHash;
          const v19546 = v19545[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v19547 = v4701.cv;
          const v19548 = v19547[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v19549 = v19547[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v19550 = v4617[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v19551 = v19550[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v19552 = stdlib.cast("UInt", "UInt256", v19551, false);
          const v19553 = v4701.ctcMan;
          const v19554 = v4701.saleDetails;
          const v19555 = v19554.qty;
          const v19556 = v19554.price;
          const v19557 = v19554.sold;
          const v19558 = v19554.status;
          const v19559 = v19554.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v4614 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v4615 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v4616 = [v3351, v4614, v4615];
      const v4617 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v4616);
      ;
      const v4684 = v4489[stdlib.checkedBigNumberify('./index.rsh:357:14:spread', stdlib.UInt_max, '0')];
      const v4688 = v3264.currDistr;
      const v4690 = v3264.distrHis;
      const v4691 = v3264.distrIndex;
      const v4698 = v3264.wlArr;
      const v4699 = v3264.wlIndex;
      const v4700 = [v3346, v4684];
      const v4701 = {
        ctcMan: v3354,
        currDistr: v4688,
        cv: v4700,
        distrHis: v4690,
        distrIndex: v4691,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v3359,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v4698,
        wlIndex: v4699
        };
      const v4702 = true;
      const v4703 = await txn1.getOutput('addCoopId', 'v4702', ctc3, v4702);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v4489, v4703), {
          at: './index.rsh:358:13:application',
          fs: ['at ./index.rsh:358:13:application call to [unknown function] (defined at: ./index.rsh:358:13:function exp)', 'at ./index.rsh:367:20:application call to "res" (defined at: ./index.rsh:365:13:function exp)', 'at ./index.rsh:365:13:application call to [unknown function] (defined at: ./index.rsh:365:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v19538 = v4701;
      const v19540 = v4617;
      const v19541 = v4701.totST;
      const v19542 = v4701.totBT;
      const v19543 = v4701.distrNum;
      const v19544 = v4701.saleLocked;
      const v19545 = v4701.docHash;
      const v19546 = v19545[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v19547 = v4701.cv;
      const v19548 = v19547[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v19549 = v19547[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v19550 = v4617[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v19551 = v19550[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v19552 = stdlib.cast("UInt", "UInt256", v19551, false);
      const v19553 = v4701.ctcMan;
      const v19554 = v4701.saleDetails;
      const v19555 = v19554.qty;
      const v19556 = v19554.price;
      const v19557 = v19554.sold;
      const v19558 = v19554.status;
      const v19559 = v19554.cumProceeds;
      return;
      
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc24,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc24,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc24
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3481 = ctc.selfAddress();
  const v3483 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:121:35:application call to "runaddWL0_704" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v3487 = stdlib.addressEq(v3481, v2935);
  const v3489 = stdlib.addressEq(v3481, v3354);
  const v3490 = v3487 ? true : v3489;
  stdlib.assert(v3490, {
    at: './index.rsh:275:23:application',
    fs: ['at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:18:function exp)', 'at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:121:35:application call to "runaddWL0_704" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v3494 = ['addWL0_704', v3483];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3494],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:279:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v5334 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v5335 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v5336 = [v3351, v5334, v5335];
          const v5337 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v5336);
          ;
          const v5435 = v5209[stdlib.checkedBigNumberify('./index.rsh:271:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 7, v5435, null);
          const v5441 = v3264.wlIndex;
          const v5442 = stdlib.ge(v5441, stdlib.checkedBigNumberify('./index.rsh:287:80:decimal', stdlib.UInt_max, '24'));
          const v5444 = stdlib.add(v5441, stdlib.checkedBigNumberify('./index.rsh:287:105:decimal', stdlib.UInt_max, '1'));
          const v5445 = v5442 ? stdlib.checkedBigNumberify('./index.rsh:287:85:decimal', stdlib.UInt_max, '0') : v5444;
          const v5447 = v3264.currDistr;
          const v5449 = v3264.distrHis;
          const v5450 = v3264.distrIndex;
          const v5457 = v3264.wlArr;
          const v5467 = stdlib.Array_set(v5457, v5445, v5435);
          const v5468 = {
            ctcMan: v3354,
            currDistr: v5447,
            cv: v3345,
            distrHis: v5449,
            distrIndex: v5450,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v5467,
            wlIndex: v5445
            };
          const v5469 = true;
          const v5470 = await txn1.getOutput('addWL', 'v5469', ctc3, v5469);
          
          const v20098 = v5468;
          const v20100 = v5337;
          const v20101 = v5468.totST;
          const v20102 = v5468.totBT;
          const v20103 = v5468.distrNum;
          const v20104 = v5468.saleLocked;
          const v20105 = v5468.docHash;
          const v20106 = v20105[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v20107 = v5468.cv;
          const v20108 = v20107[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v20109 = v20107[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v20110 = v5337[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20111 = v20110[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20112 = stdlib.cast("UInt", "UInt256", v20111, false);
          const v20113 = v5468.ctcMan;
          const v20114 = v5468.saleDetails;
          const v20115 = v20114.qty;
          const v20116 = v20114.price;
          const v20117 = v20114.sold;
          const v20118 = v20114.status;
          const v20119 = v20114.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v5334 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v5335 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v5336 = [v3351, v5334, v5335];
      const v5337 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v5336);
      ;
      const v5435 = v5209[stdlib.checkedBigNumberify('./index.rsh:271:13:spread', stdlib.UInt_max, '0')];
      const v5436 = stdlib.addressEq(v3765, v2935);
      const v5438 = stdlib.addressEq(v3765, v3354);
      const v5439 = v5436 ? true : v5438;
      stdlib.assert(v5439, {
        at: './index.rsh:282:24:application',
        fs: ['at ./index.rsh:281:13:application call to [unknown function] (defined at: ./index.rsh:281:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map7, v5435, null);
      const v5441 = v3264.wlIndex;
      const v5442 = stdlib.ge(v5441, stdlib.checkedBigNumberify('./index.rsh:287:80:decimal', stdlib.UInt_max, '24'));
      const v5444 = stdlib.add(v5441, stdlib.checkedBigNumberify('./index.rsh:287:105:decimal', stdlib.UInt_max, '1'));
      const v5445 = v5442 ? stdlib.checkedBigNumberify('./index.rsh:287:85:decimal', stdlib.UInt_max, '0') : v5444;
      const v5447 = v3264.currDistr;
      const v5449 = v3264.distrHis;
      const v5450 = v3264.distrIndex;
      const v5457 = v3264.wlArr;
      const v5467 = stdlib.Array_set(v5457, v5445, v5435);
      const v5468 = {
        ctcMan: v3354,
        currDistr: v5447,
        cv: v3345,
        distrHis: v5449,
        distrIndex: v5450,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v3359,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v5467,
        wlIndex: v5445
        };
      const v5469 = true;
      const v5470 = await txn1.getOutput('addWL', 'v5469', ctc3, v5469);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v5209, v5470), {
          at: './index.rsh:272:13:application',
          fs: ['at ./index.rsh:272:13:application call to [unknown function] (defined at: ./index.rsh:272:13:function exp)', 'at ./index.rsh:292:20:application call to "res" (defined at: ./index.rsh:281:13:function exp)', 'at ./index.rsh:281:13:application call to [unknown function] (defined at: ./index.rsh:281:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v20098 = v5468;
      const v20100 = v5337;
      const v20101 = v5468.totST;
      const v20102 = v5468.totBT;
      const v20103 = v5468.distrNum;
      const v20104 = v5468.saleLocked;
      const v20105 = v5468.docHash;
      const v20106 = v20105[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v20107 = v5468.cv;
      const v20108 = v20107[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v20109 = v20107[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v20110 = v5337[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20111 = v20110[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20112 = stdlib.cast("UInt", "UInt256", v20111, false);
      const v20113 = v5468.ctcMan;
      const v20114 = v5468.saleDetails;
      const v20115 = v20114.qty;
      const v20116 = v20114.price;
      const v20117 = v20114.sold;
      const v20118 = v20114.status;
      const v20119 = v20114.cumProceeds;
      return;
      
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc26,
    addCoopId0_704: ctc27,
    addWL0_704: ctc28,
    buyOS0_704: ctc24,
    cBT0_704: ctc29,
    cCM0_704: ctc28,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc31,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc28
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3417 = ctc.selfAddress();
  const v3419 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'buyOS'
    });
  const v3420 = v3419[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3423 = stdlib.gt(v3420, stdlib.checkedBigNumberify('./index.rsh:198:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3423, {
    at: './index.rsh:198:23:application',
    fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must buy at least 1 share token',
    who: 'buyOS'
    });
  const v3426 = 'activ';
  const v3427 = stdlib.digest(ctc25, [v3363]);
  const v3429 = stdlib.digest(ctc25, [v3426]);
  const v3430 = stdlib.digestEq(v3427, v3429);
  stdlib.assert(v3430, {
    at: './index.rsh:199:23:application',
    fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'no sale is active',
    who: 'buyOS'
    });
  const v3433 = stdlib.ge(v3360, v3420);
  stdlib.assert(v3433, {
    at: './index.rsh:200:23:application',
    fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'do not try to buy more than available',
    who: 'buyOS'
    });
  const v3434 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3417), null);
  let v3435;
  switch (v3434[0]) {
    case 'None': {
      const v3436 = v3434[1];
      v3435 = false;
      
      break;
      }
    case 'Some': {
      const v3437 = v3434[1];
      v3435 = true;
      
      break;
      }
    }
  stdlib.assert(v3435, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be whitelisted to buy',
    who: 'buyOS'
    });
  const v3441 = ['buyOS0_704', v3419];
  
  const v3658 = stdlib.mul(v3361, v3420);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3441],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:204:24:decimal', stdlib.UInt_max, '0'), [[v3658, v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyOS"
            });
          const v5960 = v5929[stdlib.checkedBigNumberify('./index.rsh:194:13:spread', stdlib.UInt_max, '0')];
          const v5963 = stdlib.mul(v3361, v5960);
          ;
          const v6051 = stdlib.add(v3351, v5963);
          const v6054 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6055 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6056 = [v6051, v6054, v6055];
          const v6057 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6056);
          sim_r.txns.push({
            amt: v5963,
            kind: 'to',
            tok: v2939
            });
          stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v3765), null);
          const v6218 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3765), null);
          const v6219 = stdlib.fromSome(v6218, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6220 = stdlib.cast("UInt", "UInt256", v5960, false);
          const v6221 = stdlib.add256(v6219, v6220);
          await stdlib.simMapSet(sim_r, 0, v3765, v6221);
          const v6222 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3765), null);
          const v6223 = stdlib.fromSome(v6222, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6225 = stdlib.add256(v6223, v6220);
          await stdlib.simMapSet(sim_r, 3, v3765, v6225);
          const v6229 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v3765), null);
          const v6231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6233 = stdlib.fromSome(v6229, v6231);
          const v6234 = ['None', null];
          const v6235 = await stdlib.Array_asyncReduce([v6233], v6234, async([v6237], v6236, v6238) => {
            let v6239;
            switch (v6236[0]) {
              case 'None': {
                const v6240 = v6236[1];
                v6239 = true;
                
                break;
                }
              case 'Some': {
                const v6241 = v6236[1];
                v6239 = false;
                
                break;
                }
              }
            const v6242 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:218:53:decimal', stdlib.UInt_max, '0'), v6237);
            const v6243 = v6239 ? v6242 : false;
            const v6244 = ['Some', v6238];
            const v6245 = v6243 ? v6244 : v6236;
            
            return v6245;})
          const v6246 = stdlib.fromSome(v6235, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v6248 = stdlib.Array_set(v6233, v6246, v5960);
          await stdlib.simMapSet(sim_r, 8, v3765, v6248);
          const v6252 = stdlib.sub(v3360, v5960);
          const v6261 = stdlib.add(v3362, v5960);
          const v6265 = stdlib.mul(v5960, v3361);
          const v6266 = stdlib.add(v3364, v6265);
          const v6267 = {
            cumProceeds: v6266,
            price: v3361,
            qty: v6252,
            sold: v6261,
            status: v3363
            };
          const v6269 = v3264.currDistr;
          const v6271 = v3264.distrHis;
          const v6272 = v3264.distrIndex;
          const v6279 = v3264.wlArr;
          const v6280 = v3264.wlIndex;
          const v6282 = {
            ctcMan: v3354,
            currDistr: v6269,
            cv: v3345,
            distrHis: v6271,
            distrIndex: v6272,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v6267,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v6279,
            wlIndex: v6280
            };
          const v6283 = {
            cumProceeds: v6266,
            price: v3361,
            qty: v6252,
            sold: v6261,
            status: v3363
            };
          const v6284 = await txn1.getOutput('buyOS', 'v6283', ctc33, v6283);
          
          const v20658 = v6282;
          const v20660 = v6057;
          const v20661 = v6282.totST;
          const v20662 = v6282.totBT;
          const v20663 = v6282.distrNum;
          const v20664 = v6282.saleLocked;
          const v20665 = v6282.docHash;
          const v20666 = v20665[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v20667 = v6282.cv;
          const v20668 = v20667[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v20669 = v20667[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v20670 = v6057[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20671 = v20670[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20672 = stdlib.cast("UInt", "UInt256", v20671, false);
          const v20673 = v6282.ctcMan;
          const v20674 = v6282.saleDetails;
          const v20675 = v20674.qty;
          const v20676 = v20674.price;
          const v20677 = v20674.sold;
          const v20678 = v20674.status;
          const v20679 = v20674.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      undefined /* setApiDetails */;
      const v5960 = v5929[stdlib.checkedBigNumberify('./index.rsh:194:13:spread', stdlib.UInt_max, '0')];
      const v5963 = stdlib.mul(v3361, v5960);
      ;
      const v6051 = stdlib.add(v3351, v5963);
      const v6054 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v6055 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v6056 = [v6051, v6054, v6055];
      const v6057 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6056);
      ;
      const v6203 = stdlib.gt(v5960, stdlib.checkedBigNumberify('./index.rsh:208:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6203, {
        at: './index.rsh:208:24:application',
        fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'buyOS'
        });
      const v6206 = 'activ';
      const v6207 = stdlib.digest(ctc25, [v3363]);
      const v6209 = stdlib.digest(ctc25, [v6206]);
      const v6210 = stdlib.digestEq(v6207, v6209);
      stdlib.assert(v6210, {
        at: './index.rsh:209:24:application',
        fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'no sale is active',
        who: 'buyOS'
        });
      const v6213 = stdlib.ge(v3360, v5960);
      stdlib.assert(v6213, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'do not try to buy more than available',
        who: 'buyOS'
        });
      const v6214 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3765), null);
      let v6215;
      switch (v6214[0]) {
        case 'None': {
          const v6216 = v6214[1];
          v6215 = false;
          
          break;
          }
        case 'Some': {
          const v6217 = v6214[1];
          v6215 = true;
          
          break;
          }
        }
      stdlib.assert(v6215, {
        at: './index.rsh:211:24:application',
        fs: ['at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'you must be whitelisted to buy',
        who: 'buyOS'
        });
      const v6218 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3765), null);
      const v6219 = stdlib.fromSome(v6218, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6220 = stdlib.cast("UInt", "UInt256", v5960, false);
      const v6221 = stdlib.add256(v6219, v6220);
      await stdlib.mapSet(map0, v3765, v6221);
      const v6222 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3765), null);
      const v6223 = stdlib.fromSome(v6222, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6225 = stdlib.add256(v6223, v6220);
      await stdlib.mapSet(map3, v3765, v6225);
      const v6229 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3765), null);
      const v6231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6233 = stdlib.fromSome(v6229, v6231);
      const v6234 = ['None', null];
      const v6235 = await stdlib.Array_asyncReduce([v6233], v6234, async([v6237], v6236, v6238) => {
        let v6239;
        switch (v6236[0]) {
          case 'None': {
            const v6240 = v6236[1];
            v6239 = true;
            
            break;
            }
          case 'Some': {
            const v6241 = v6236[1];
            v6239 = false;
            
            break;
            }
          }
        const v6242 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:218:53:decimal', stdlib.UInt_max, '0'), v6237);
        const v6243 = v6239 ? v6242 : false;
        const v6244 = ['Some', v6238];
        const v6245 = v6243 ? v6244 : v6236;
        
        return v6245;})
      const v6246 = stdlib.fromSome(v6235, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
      const v6248 = stdlib.Array_set(v6233, v6246, v5960);
      await stdlib.mapSet(map8, v3765, v6248);
      const v6252 = stdlib.sub(v3360, v5960);
      const v6261 = stdlib.add(v3362, v5960);
      const v6265 = stdlib.mul(v5960, v3361);
      const v6266 = stdlib.add(v3364, v6265);
      const v6267 = {
        cumProceeds: v6266,
        price: v3361,
        qty: v6252,
        sold: v6261,
        status: v3363
        };
      const v6269 = v3264.currDistr;
      const v6271 = v3264.distrHis;
      const v6272 = v3264.distrIndex;
      const v6279 = v3264.wlArr;
      const v6280 = v3264.wlIndex;
      const v6282 = {
        ctcMan: v3354,
        currDistr: v6269,
        cv: v3345,
        distrHis: v6271,
        distrIndex: v6272,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v6267,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v6279,
        wlIndex: v6280
        };
      const v6283 = {
        cumProceeds: v6266,
        price: v3361,
        qty: v6252,
        sold: v6261,
        status: v3363
        };
      const v6284 = await txn1.getOutput('buyOS', 'v6283', ctc33, v6283);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v5929, v6284), {
          at: './index.rsh:195:13:application',
          fs: ['at ./index.rsh:195:13:application call to [unknown function] (defined at: ./index.rsh:195:13:function exp)', 'at ./index.rsh:225:20:application call to "res" (defined at: ./index.rsh:206:13:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'out',
          who: 'buyOS'
          });
        }
      else {
        }
      
      const v20658 = v6282;
      const v20660 = v6057;
      const v20661 = v6282.totST;
      const v20662 = v6282.totBT;
      const v20663 = v6282.distrNum;
      const v20664 = v6282.saleLocked;
      const v20665 = v6282.docHash;
      const v20666 = v20665[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v20667 = v6282.cv;
      const v20668 = v20667[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v20669 = v20667[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v20670 = v6057[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20671 = v20670[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20672 = stdlib.cast("UInt", "UInt256", v20671, false);
      const v20673 = v6282.ctcMan;
      const v20674 = v6282.saleDetails;
      const v20675 = v20674.qty;
      const v20676 = v20674.price;
      const v20677 = v20674.sold;
      const v20678 = v20674.status;
      const v20679 = v20674.cumProceeds;
      return;
      
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc24,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc27
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3569 = ctc.selfAddress();
  const v3571 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v3573 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3569), null);
  let v3574;
  switch (v3573[0]) {
    case 'None': {
      const v3575 = v3573[1];
      v3574 = false;
      
      break;
      }
    case 'Some': {
      const v3576 = v3573[1];
      v3574 = true;
      
      break;
      }
    }
  stdlib.assert(v3574, {
    at: './index.rsh:398:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:17:function exp)', 'at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v3580 = stdlib.gt256(v3352, stdlib.checkedBigNumberify('./index.rsh:400:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3580, {
    at: './index.rsh:400:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:17:function exp)', 'at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v3582 = stdlib.gt256(v3315, stdlib.checkedBigNumberify('./index.rsh:401:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3582, {
    at: './index.rsh:401:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:17:function exp)', 'at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v3584 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3569), null);
  const v3585 = stdlib.fromSome(v3584, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3586 = stdlib.ge256(v3315, v3585);
  stdlib.assert(v3586, {
    at: './index.rsh:402:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:17:function exp)', 'at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v3589 = stdlib.gt256(v3585, stdlib.checkedBigNumberify('./index.rsh:403:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3589, {
    at: './index.rsh:403:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:17:function exp)', 'at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v3592 = v3264.currDistr;
  const v3593 = stdlib.mul256(v3585, v3592);
  const v3595 = stdlib.div256(v3593, v3315);
  const v3596 = stdlib.cast("UInt256", "UInt", v3595, false);
  const v3599 = stdlib.le(v3596, v3351);
  stdlib.assert(v3599, {
    at: './index.rsh:405:23:application',
    fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:17:function exp)', 'at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:394:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v3602 = ['cBT0_704', v3571];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3602],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:408:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:408:25:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v6774 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6775 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6776 = [v3351, v6774, v6775];
          const v6777 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6776);
          ;
          stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v3765), null);
          const v7025 = v6777[stdlib.checkedBigNumberify('./index.rsh:413:40:application', stdlib.UInt_max, '0')];
          const v7026 = v7025[stdlib.checkedBigNumberify('./index.rsh:413:40:application', stdlib.UInt_max, '0')];
          const v7032 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3765), null);
          const v7033 = stdlib.fromSome(v7032, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7040 = v3264.currDistr;
          const v7041 = stdlib.mul256(v7033, v7040);
          const v7043 = stdlib.div256(v7041, v3315);
          const v7044 = stdlib.cast("UInt256", "UInt", v7043, false);
          const v7054 = stdlib.sub(v7026, v7044);
          const v7057 = v7025[stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '1')];
          const v7058 = v7025[stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '2')];
          const v7059 = [v7054, v7057, v7058];
          const v7060 = stdlib.Array_set(v6777, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v7059);
          sim_r.txns.push({
            kind: 'from',
            to: v3765,
            tok: v2939
            });
          const v7061 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v3765), null);
          const v7062 = stdlib.fromSome(v7061, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7063 = stdlib.add256(v7062, v7043);
          await stdlib.simMapSet(sim_r, 4, v3765, v7063);
          const v7064 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3765), null);
          const v7065 = stdlib.fromSome(v7064, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7066 = stdlib.add256(v7065, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v3765, v7066);
          const v7067 = await txn1.getOutput('cBT', 'v7043', ctc1, v7043);
          
          const v21218 = v3264;
          const v21220 = v7060;
          const v21221 = v3264.totST;
          const v21222 = v3264.totBT;
          const v21223 = v3264.distrNum;
          const v21224 = v3264.saleLocked;
          const v21225 = v3264.docHash;
          const v21226 = v21225[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v21227 = v3264.cv;
          const v21228 = v21227[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v21229 = v21227[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v21230 = v7060[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21231 = v21230[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21232 = stdlib.cast("UInt", "UInt256", v21231, false);
          const v21233 = v3264.ctcMan;
          const v21234 = v3264.saleDetails;
          const v21235 = v21234.qty;
          const v21236 = v21234.price;
          const v21237 = v21234.sold;
          const v21238 = v21234.status;
          const v21239 = v21234.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v6774 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v6775 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v6776 = [v3351, v6774, v6775];
      const v6777 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6776);
      ;
      const v7021 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3765), null);
      let v7022;
      switch (v7021[0]) {
        case 'None': {
          const v7023 = v7021[1];
          v7022 = false;
          
          break;
          }
        case 'Some': {
          const v7024 = v7021[1];
          v7022 = true;
          
          break;
          }
        }
      stdlib.assert(v7022, {
        at: './index.rsh:411:24:application',
        fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v7025 = v6777[stdlib.checkedBigNumberify('./index.rsh:413:40:application', stdlib.UInt_max, '0')];
      const v7026 = v7025[stdlib.checkedBigNumberify('./index.rsh:413:40:application', stdlib.UInt_max, '0')];
      const v7027 = stdlib.cast("UInt", "UInt256", v7026, false);
      const v7028 = stdlib.gt256(v7027, stdlib.checkedBigNumberify('./index.rsh:413:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7028, {
        at: './index.rsh:413:24:application',
        fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v7030 = stdlib.gt256(v3315, stdlib.checkedBigNumberify('./index.rsh:414:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7030, {
        at: './index.rsh:414:24:application',
        fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v7032 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3765), null);
      const v7033 = stdlib.fromSome(v7032, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7034 = stdlib.ge256(v3315, v7033);
      stdlib.assert(v7034, {
        at: './index.rsh:415:24:application',
        fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v7037 = stdlib.gt256(v7033, stdlib.checkedBigNumberify('./index.rsh:416:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7037, {
        at: './index.rsh:416:24:application',
        fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v7040 = v3264.currDistr;
      const v7041 = stdlib.mul256(v7033, v7040);
      const v7043 = stdlib.div256(v7041, v3315);
      const v7044 = stdlib.cast("UInt256", "UInt", v7043, false);
      const v7047 = stdlib.le(v7044, v7026);
      stdlib.assert(v7047, {
        at: './index.rsh:418:24:application',
        fs: ['at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v7054 = stdlib.sub(v7026, v7044);
      const v7057 = v7025[stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '1')];
      const v7058 = v7025[stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '2')];
      const v7059 = [v7054, v7057, v7058];
      const v7060 = stdlib.Array_set(v6777, stdlib.checkedBigNumberify('./index.rsh:420:50:application', stdlib.UInt_max, '0'), v7059);
      ;
      const v7061 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3765), null);
      const v7062 = stdlib.fromSome(v7061, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7063 = stdlib.add256(v7062, v7043);
      await stdlib.mapSet(map4, v3765, v7063);
      const v7064 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3765), null);
      const v7065 = stdlib.fromSome(v7064, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7066 = stdlib.add256(v7065, stdlib.checkedBigNumberify('./index.rsh:422:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v3765, v7066);
      const v7067 = await txn1.getOutput('cBT', 'v7043', ctc1, v7043);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v6649, v7067), {
          at: './index.rsh:395:13:application',
          fs: ['at ./index.rsh:395:13:application call to [unknown function] (defined at: ./index.rsh:395:13:function exp)', 'at ./index.rsh:423:20:application call to "res" (defined at: ./index.rsh:410:13:function exp)', 'at ./index.rsh:410:13:application call to [unknown function] (defined at: ./index.rsh:410:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v21218 = v3264;
      const v21220 = v7060;
      const v21221 = v3264.totST;
      const v21222 = v3264.totBT;
      const v21223 = v3264.distrNum;
      const v21224 = v3264.saleLocked;
      const v21225 = v3264.docHash;
      const v21226 = v21225[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v21227 = v3264.cv;
      const v21228 = v21227[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v21229 = v21227[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v21230 = v7060[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21231 = v21230[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21232 = stdlib.cast("UInt", "UInt256", v21231, false);
      const v21233 = v3264.ctcMan;
      const v21234 = v3264.saleDetails;
      const v21235 = v21234.qty;
      const v21236 = v21234.price;
      const v21237 = v21234.sold;
      const v21238 = v21234.status;
      const v21239 = v21234.cumProceeds;
      return;
      
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc24,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc24,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc24
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3604 = ctc.selfAddress();
  const v3606 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:121:35:application call to "runcCM0_704" (defined at: ./index.rsh:427:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v3610 = stdlib.addressEq(v3604, v2935);
  const v3612 = stdlib.addressEq(v3604, v3354);
  const v3613 = v3610 ? true : v3612;
  stdlib.assert(v3613, {
    at: './index.rsh:431:23:application',
    fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:21:function exp)', 'at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:121:35:application call to "runcCM0_704" (defined at: ./index.rsh:427:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v3617 = ['cCM0_704', v3606];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3617],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:435:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:435:26:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v7494 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v7495 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v7496 = [v3351, v7494, v7495];
          const v7497 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v7496);
          ;
          const v7794 = v7369[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
          const v7799 = true;
          const v7800 = await txn1.getOutput('cCM', 'v7799', ctc3, v7799);
          
          const v7807 = v3264.currDistr;
          const v7809 = v3264.distrHis;
          const v7810 = v3264.distrIndex;
          const v7817 = v3264.wlArr;
          const v7818 = v3264.wlIndex;
          const v7819 = {
            ctcMan: v7794,
            currDistr: v7807,
            cv: v3345,
            distrHis: v7809,
            distrIndex: v7810,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v7817,
            wlIndex: v7818
            };
          const v21778 = v7819;
          const v21780 = v7497;
          const v21781 = v7819.totST;
          const v21782 = v7819.totBT;
          const v21783 = v7819.distrNum;
          const v21784 = v7819.saleLocked;
          const v21785 = v7819.docHash;
          const v21786 = v21785[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v21787 = v7819.cv;
          const v21788 = v21787[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v21789 = v21787[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v21790 = v7497[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21791 = v21790[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21792 = stdlib.cast("UInt", "UInt256", v21791, false);
          const v21793 = v7819.ctcMan;
          const v21794 = v7819.saleDetails;
          const v21795 = v21794.qty;
          const v21796 = v21794.price;
          const v21797 = v21794.sold;
          const v21798 = v21794.status;
          const v21799 = v21794.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v7494 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v7495 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v7496 = [v3351, v7494, v7495];
      const v7497 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v7496);
      ;
      const v7794 = v7369[stdlib.checkedBigNumberify('./index.rsh:427:13:spread', stdlib.UInt_max, '0')];
      const v7795 = stdlib.addressEq(v3765, v2935);
      const v7797 = stdlib.addressEq(v3765, v3354);
      const v7798 = v7795 ? true : v7797;
      stdlib.assert(v7798, {
        at: './index.rsh:438:24:application',
        fs: ['at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v7799 = true;
      const v7800 = await txn1.getOutput('cCM', 'v7799', ctc3, v7799);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v7369, v7800), {
          at: './index.rsh:428:13:application',
          fs: ['at ./index.rsh:428:13:application call to [unknown function] (defined at: ./index.rsh:428:13:function exp)', 'at ./index.rsh:441:20:application call to "res" (defined at: ./index.rsh:437:13:function exp)', 'at ./index.rsh:437:13:application call to [unknown function] (defined at: ./index.rsh:437:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v7807 = v3264.currDistr;
      const v7809 = v3264.distrHis;
      const v7810 = v3264.distrIndex;
      const v7817 = v3264.wlArr;
      const v7818 = v3264.wlIndex;
      const v7819 = {
        ctcMan: v7794,
        currDistr: v7807,
        cv: v3345,
        distrHis: v7809,
        distrIndex: v7810,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v3359,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v7817,
        wlIndex: v7818
        };
      const v21778 = v7819;
      const v21780 = v7497;
      const v21781 = v7819.totST;
      const v21782 = v7819.totBT;
      const v21783 = v7819.distrNum;
      const v21784 = v7819.saleLocked;
      const v21785 = v7819.docHash;
      const v21786 = v21785[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v21787 = v7819.cv;
      const v21788 = v21787[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v21789 = v21787[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v21790 = v7497[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21791 = v21790[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21792 = stdlib.cast("UInt", "UInt256", v21791, false);
      const v21793 = v7819.ctcMan;
      const v21794 = v7819.saleDetails;
      const v21795 = v21794.qty;
      const v21796 = v21794.price;
      const v21797 = v21794.sold;
      const v21798 = v21794.status;
      const v21799 = v21794.cumProceeds;
      return;
      
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc24,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc27
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3443 = ctc.selfAddress();
  const v3445 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:228:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'claimOSpr'
    });
  const v3447 = stdlib.addressEq(v3443, v2935);
  const v3449 = stdlib.addressEq(v3443, v3354);
  const v3450 = v3447 ? true : v3449;
  stdlib.assert(v3450, {
    at: './index.rsh:232:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:17:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:228:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'claimOSpr'
    });
  const v3453 = stdlib.gt(v3364, stdlib.checkedBigNumberify('./index.rsh:233:56:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3453, {
    at: './index.rsh:233:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:17:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:228:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'available proceeds must be greater than 0',
    who: 'claimOSpr'
    });
  const v3458 = stdlib.ge(v3351, v3364);
  stdlib.assert(v3458, {
    at: './index.rsh:234:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:17:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:228:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimOSpr'
    });
  const v3461 = ['claimOSpr0_704', v3445];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3461],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:237:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:237:25:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimOSpr"
            });
          ;
          const v8214 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8215 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8216 = [v3351, v8214, v8215];
          const v8217 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8216);
          ;
          const v8551 = v8217[stdlib.checkedBigNumberify('./index.rsh:242:32:application', stdlib.UInt_max, '0')];
          const v8552 = v8551[stdlib.checkedBigNumberify('./index.rsh:242:32:application', stdlib.UInt_max, '0')];
          const v8563 = stdlib.sub(v8552, v3364);
          const v8566 = v8551[stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '1')];
          const v8567 = v8551[stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '2')];
          const v8568 = [v8563, v8566, v8567];
          const v8569 = stdlib.Array_set(v8217, stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '0'), v8568);
          sim_r.txns.push({
            kind: 'from',
            to: v3765,
            tok: v2939
            });
          const v8576 = {
            cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            price: v3361,
            qty: v3360,
            sold: v3362,
            status: v3363
            };
          const v8578 = v3264.currDistr;
          const v8580 = v3264.distrHis;
          const v8581 = v3264.distrIndex;
          const v8588 = v3264.wlArr;
          const v8589 = v3264.wlIndex;
          const v8591 = {
            ctcMan: v3354,
            currDistr: v8578,
            cv: v3345,
            distrHis: v8580,
            distrIndex: v8581,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v8576,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v8588,
            wlIndex: v8589
            };
          const v8592 = true;
          const v8593 = await txn1.getOutput('claimOSpr', 'v8592', ctc3, v8592);
          
          const v22338 = v8591;
          const v22340 = v8569;
          const v22341 = v8591.totST;
          const v22342 = v8591.totBT;
          const v22343 = v8591.distrNum;
          const v22344 = v8591.saleLocked;
          const v22345 = v8591.docHash;
          const v22346 = v22345[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v22347 = v8591.cv;
          const v22348 = v22347[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v22349 = v22347[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v22350 = v8569[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22351 = v22350[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22352 = stdlib.cast("UInt", "UInt256", v22351, false);
          const v22353 = v8591.ctcMan;
          const v22354 = v8591.saleDetails;
          const v22355 = v22354.qty;
          const v22356 = v22354.price;
          const v22357 = v22354.sold;
          const v22358 = v22354.status;
          const v22359 = v22354.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v8214 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v8215 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v8216 = [v3351, v8214, v8215];
      const v8217 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8216);
      ;
      const v8544 = stdlib.addressEq(v3765, v2935);
      const v8546 = stdlib.addressEq(v3765, v3354);
      const v8547 = v8544 ? true : v8546;
      stdlib.assert(v8547, {
        at: './index.rsh:240:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'claimOSpr'
        });
      const v8550 = stdlib.gt(v3364, stdlib.checkedBigNumberify('./index.rsh:241:57:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8550, {
        at: './index.rsh:241:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: 'available proceeds must be greater than 0',
        who: 'claimOSpr'
        });
      const v8551 = v8217[stdlib.checkedBigNumberify('./index.rsh:242:32:application', stdlib.UInt_max, '0')];
      const v8552 = v8551[stdlib.checkedBigNumberify('./index.rsh:242:32:application', stdlib.UInt_max, '0')];
      const v8555 = stdlib.ge(v8552, v3364);
      stdlib.assert(v8555, {
        at: './index.rsh:242:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimOSpr'
        });
      const v8563 = stdlib.sub(v8552, v3364);
      const v8566 = v8551[stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '1')];
      const v8567 = v8551[stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '2')];
      const v8568 = [v8563, v8566, v8567];
      const v8569 = stdlib.Array_set(v8217, stdlib.checkedBigNumberify('./index.rsh:243:70:application', stdlib.UInt_max, '0'), v8568);
      ;
      const v8576 = {
        cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        price: v3361,
        qty: v3360,
        sold: v3362,
        status: v3363
        };
      const v8578 = v3264.currDistr;
      const v8580 = v3264.distrHis;
      const v8581 = v3264.distrIndex;
      const v8588 = v3264.wlArr;
      const v8589 = v3264.wlIndex;
      const v8591 = {
        ctcMan: v3354,
        currDistr: v8578,
        cv: v3345,
        distrHis: v8580,
        distrIndex: v8581,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v8576,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v8588,
        wlIndex: v8589
        };
      const v8592 = true;
      const v8593 = await txn1.getOutput('claimOSpr', 'v8592', ctc3, v8592);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v8089, v8593), {
          at: './index.rsh:229:13:application',
          fs: ['at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:246:20:application call to "res" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
          msg: 'out',
          who: 'claimOSpr'
          });
        }
      else {
        }
      
      const v22338 = v8591;
      const v22340 = v8569;
      const v22341 = v8591.totST;
      const v22342 = v8591.totBT;
      const v22343 = v8591.distrNum;
      const v22344 = v8591.saleLocked;
      const v22345 = v8591.docHash;
      const v22346 = v22345[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v22347 = v8591.cv;
      const v22348 = v22347[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v22349 = v22347[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v22350 = v8569[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22351 = v22350[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22352 = stdlib.cast("UInt", "UInt256", v22351, false);
      const v22353 = v8591.ctcMan;
      const v22354 = v8591.saleDetails;
      const v22355 = v22354.qty;
      const v22356 = v22354.price;
      const v22357 = v22354.sold;
      const v22358 = v22354.status;
      const v22359 = v22354.cumProceeds;
      return;
      
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc29,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc31,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc27
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3370 = ctc.selfAddress();
  const v3372 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'createOS'
    });
  const v3373 = v3372[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3374 = v3372[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3378 = stdlib.addressEq(v3370, v2935);
  const v3380 = stdlib.addressEq(v3370, v3354);
  const v3381 = v3378 ? true : v3380;
  stdlib.assert(v3381, {
    at: './index.rsh:156:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'createOS'
    });
  const v3382 = stdlib.gt(v3373, stdlib.checkedBigNumberify('./index.rsh:157:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3382, {
    at: './index.rsh:157:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'createOS'
    });
  const v3383 = stdlib.gt(v3374, stdlib.checkedBigNumberify('./index.rsh:158:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3383, {
    at: './index.rsh:158:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'price must be greater than 0',
    who: 'createOS'
    });
  const v3386 = 'activ';
  const v3387 = stdlib.digest(ctc24, [v3363]);
  const v3389 = stdlib.digest(ctc24, [v3386]);
  const v3390 = stdlib.digestEq(v3387, v3389);
  const v3391 = v3390 ? false : true;
  stdlib.assert(v3391, {
    at: './index.rsh:159:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'sale must not be active',
    who: 'createOS'
    });
  const v3396 = ['createOS0_704', v3372];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3396],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:162:28:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createOS"
            });
          ;
          const v8934 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8935 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8936 = [v3351, v8934, v8935];
          const v8937 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8936);
          ;
          const v9324 = v8809[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '0')];
          const v9325 = v8809[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '1')];
          const v9338 = 'activ';
          const v9343 = {
            cumProceeds: v3364,
            price: v9325,
            qty: v9324,
            sold: v3362,
            status: v9338
            };
          const v9345 = v3264.currDistr;
          const v9347 = v3264.distrHis;
          const v9348 = v3264.distrIndex;
          const v9355 = v3264.wlArr;
          const v9356 = v3264.wlIndex;
          const v9359 = {
            ctcMan: v3354,
            currDistr: v9345,
            cv: v3345,
            distrHis: v9347,
            distrIndex: v9348,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v9343,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v9355,
            wlIndex: v9356
            };
          const v9361 = {
            cumProceeds: v3364,
            price: v9325,
            qty: v9324,
            sold: v3362,
            status: v9338
            };
          const v9362 = await txn1.getOutput('createOS', 'v9361', ctc33, v9361);
          
          const v22898 = v9359;
          const v22900 = v8937;
          const v22901 = v9359.totST;
          const v22902 = v9359.totBT;
          const v22903 = v9359.distrNum;
          const v22904 = v9359.saleLocked;
          const v22905 = v9359.docHash;
          const v22906 = v22905[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v22907 = v9359.cv;
          const v22908 = v22907[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v22909 = v22907[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v22910 = v8937[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22911 = v22910[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22912 = stdlib.cast("UInt", "UInt256", v22911, false);
          const v22913 = v9359.ctcMan;
          const v22914 = v9359.saleDetails;
          const v22915 = v22914.qty;
          const v22916 = v22914.price;
          const v22917 = v22914.sold;
          const v22918 = v22914.status;
          const v22919 = v22914.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v8934 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v8935 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v8936 = [v3351, v8934, v8935];
      const v8937 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8936);
      ;
      const v9324 = v8809[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '0')];
      const v9325 = v8809[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '1')];
      const v9326 = stdlib.addressEq(v3765, v2935);
      const v9328 = stdlib.addressEq(v3765, v3354);
      const v9329 = v9326 ? true : v9328;
      stdlib.assert(v9329, {
        at: './index.rsh:165:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'createOS'
        });
      const v9330 = stdlib.gt(v9324, stdlib.checkedBigNumberify('./index.rsh:166:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9330, {
        at: './index.rsh:166:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'createOS'
        });
      const v9331 = stdlib.gt(v9325, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9331, {
        at: './index.rsh:167:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'createOS'
        });
      const v9338 = 'activ';
      const v9343 = {
        cumProceeds: v3364,
        price: v9325,
        qty: v9324,
        sold: v3362,
        status: v9338
        };
      const v9345 = v3264.currDistr;
      const v9347 = v3264.distrHis;
      const v9348 = v3264.distrIndex;
      const v9355 = v3264.wlArr;
      const v9356 = v3264.wlIndex;
      const v9359 = {
        ctcMan: v3354,
        currDistr: v9345,
        cv: v3345,
        distrHis: v9347,
        distrIndex: v9348,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v9343,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v9355,
        wlIndex: v9356
        };
      const v9361 = {
        cumProceeds: v3364,
        price: v9325,
        qty: v9324,
        sold: v3362,
        status: v9338
        };
      const v9362 = await txn1.getOutput('createOS', 'v9361', ctc33, v9361);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v8809, v9362), {
          at: './index.rsh:153:13:application',
          fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:172:20:application call to "res" (defined at: ./index.rsh:164:13:function exp)', 'at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
          msg: 'out',
          who: 'createOS'
          });
        }
      else {
        }
      
      const v22898 = v9359;
      const v22900 = v8937;
      const v22901 = v9359.totST;
      const v22902 = v9359.totBT;
      const v22903 = v9359.distrNum;
      const v22904 = v9359.saleLocked;
      const v22905 = v9359.docHash;
      const v22906 = v22905[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v22907 = v9359.cv;
      const v22908 = v22907[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v22909 = v22907[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v22910 = v8937[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22911 = v22910[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22912 = stdlib.cast("UInt", "UInt256", v22911, false);
      const v22913 = v9359.ctcMan;
      const v22914 = v9359.saleDetails;
      const v22915 = v22914.qty;
      const v22916 = v22914.price;
      const v22917 = v22914.sold;
      const v22918 = v22914.status;
      const v22919 = v22914.cumProceeds;
      return;
      
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc29,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc24,
    docHash0_704: ctc30,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc27
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3552 = ctc.selfAddress();
  const v3554 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:374:13:application call to [unknown function] (defined at: ./index.rsh:374:13:function exp)', 'at ./index.rsh:121:35:application call to "rundBT0_704" (defined at: ./index.rsh:371:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v3555 = v3554[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3558 = stdlib.addressEq(v3552, v2935);
  const v3560 = stdlib.addressEq(v3552, v3354);
  const v3561 = v3558 ? true : v3560;
  stdlib.assert(v3561, {
    at: './index.rsh:375:23:application',
    fs: ['at ./index.rsh:374:13:application call to [unknown function] (defined at: ./index.rsh:374:20:function exp)', 'at ./index.rsh:374:13:application call to [unknown function] (defined at: ./index.rsh:374:13:function exp)', 'at ./index.rsh:121:35:application call to "rundBT0_704" (defined at: ./index.rsh:371:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v3562 = stdlib.cast("UInt256", "UInt", v3555, false);
  const v3563 = stdlib.gt(v3562, stdlib.checkedBigNumberify('./index.rsh:376:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3563, {
    at: './index.rsh:376:23:application',
    fs: ['at ./index.rsh:374:13:application call to [unknown function] (defined at: ./index.rsh:374:20:function exp)', 'at ./index.rsh:374:13:application call to [unknown function] (defined at: ./index.rsh:374:13:function exp)', 'at ./index.rsh:121:35:application call to "rundBT0_704" (defined at: ./index.rsh:371:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v3567 = ['dBT0_704', v3554];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3567],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:380:24:decimal', stdlib.UInt_max, '0'), [[v3562, v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v9602 = v9529[stdlib.checkedBigNumberify('./index.rsh:371:13:spread', stdlib.UInt_max, '0')];
          const v9603 = stdlib.cast("UInt256", "UInt", v9602, false);
          ;
          const v9651 = stdlib.add(v3351, v9603);
          const v9654 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v9655 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v9656 = [v9651, v9654, v9655];
          const v9657 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v9656);
          sim_r.txns.push({
            amt: v9603,
            kind: 'to',
            tok: v2939
            });
          const v10110 = stdlib.add256(v3316, v9602);
          const v10114 = v3264.distrHis;
          const v10115 = v3264.distrIndex;
          const v10122 = v3264.wlArr;
          const v10123 = v3264.wlIndex;
          const v10126 = stdlib.add256(v3317, stdlib.checkedBigNumberify('./index.rsh:387:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v10128 = {
            ctcMan: v3354,
            currDistr: v9602,
            cv: v3345,
            distrHis: v10114,
            distrIndex: v10115,
            distrNum: v10126,
            docHash: v3341,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v10110,
            totST: v3315,
            wlArr: v10122,
            wlIndex: v10123
            };
          const v10129 = true;
          const v10130 = await txn1.getOutput('dBT', 'v10129', ctc3, v10129);
          
          const v23458 = v10128;
          const v23460 = v9657;
          const v23461 = v10128.totST;
          const v23462 = v10128.totBT;
          const v23463 = v10128.distrNum;
          const v23464 = v10128.saleLocked;
          const v23465 = v10128.docHash;
          const v23466 = v23465[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v23467 = v10128.cv;
          const v23468 = v23467[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v23469 = v23467[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v23470 = v9657[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v23471 = v23470[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v23472 = stdlib.cast("UInt", "UInt256", v23471, false);
          const v23473 = v10128.ctcMan;
          const v23474 = v10128.saleDetails;
          const v23475 = v23474.qty;
          const v23476 = v23474.price;
          const v23477 = v23474.sold;
          const v23478 = v23474.status;
          const v23479 = v23474.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      undefined /* setApiDetails */;
      const v9602 = v9529[stdlib.checkedBigNumberify('./index.rsh:371:13:spread', stdlib.UInt_max, '0')];
      const v9603 = stdlib.cast("UInt256", "UInt", v9602, false);
      ;
      const v9651 = stdlib.add(v3351, v9603);
      const v9654 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v9655 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v9656 = [v9651, v9654, v9655];
      const v9657 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v9656);
      ;
      const v10103 = stdlib.addressEq(v3765, v2935);
      const v10105 = stdlib.addressEq(v3765, v3354);
      const v10106 = v10103 ? true : v10105;
      stdlib.assert(v10106, {
        at: './index.rsh:383:24:application',
        fs: ['at ./index.rsh:382:13:application call to [unknown function] (defined at: ./index.rsh:382:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v10108 = stdlib.gt(v9603, stdlib.checkedBigNumberify('./index.rsh:384:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10108, {
        at: './index.rsh:384:24:application',
        fs: ['at ./index.rsh:382:13:application call to [unknown function] (defined at: ./index.rsh:382:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v10110 = stdlib.add256(v3316, v9602);
      const v10114 = v3264.distrHis;
      const v10115 = v3264.distrIndex;
      const v10122 = v3264.wlArr;
      const v10123 = v3264.wlIndex;
      const v10126 = stdlib.add256(v3317, stdlib.checkedBigNumberify('./index.rsh:387:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v10128 = {
        ctcMan: v3354,
        currDistr: v9602,
        cv: v3345,
        distrHis: v10114,
        distrIndex: v10115,
        distrNum: v10126,
        docHash: v3341,
        saleDetails: v3359,
        saleLocked: v3319,
        totBT: v10110,
        totST: v3315,
        wlArr: v10122,
        wlIndex: v10123
        };
      const v10129 = true;
      const v10130 = await txn1.getOutput('dBT', 'v10129', ctc3, v10129);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v9529, v10130), {
          at: './index.rsh:372:13:application',
          fs: ['at ./index.rsh:372:13:application call to [unknown function] (defined at: ./index.rsh:372:13:function exp)', 'at ./index.rsh:390:20:application call to "res" (defined at: ./index.rsh:382:13:function exp)', 'at ./index.rsh:382:13:application call to [unknown function] (defined at: ./index.rsh:382:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v23458 = v10128;
      const v23460 = v9657;
      const v23461 = v10128.totST;
      const v23462 = v10128.totBT;
      const v23463 = v10128.distrNum;
      const v23464 = v10128.saleLocked;
      const v23465 = v10128.docHash;
      const v23466 = v23465[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v23467 = v10128.cv;
      const v23468 = v23467[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v23469 = v23467[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v23470 = v9657[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v23471 = v23470[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v23472 = stdlib.cast("UInt", "UInt256", v23471, false);
      const v23473 = v10128.ctcMan;
      const v23474 = v10128.saleDetails;
      const v23475 = v23474.qty;
      const v23476 = v23474.price;
      const v23477 = v23474.sold;
      const v23478 = v23474.status;
      const v23479 = v23474.cumProceeds;
      return;
      
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc29,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc24,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc27
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3463 = ctc.selfAddress();
  const v3465 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:121:35:application call to "rundocHash0_704" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v3471 = stdlib.eq(v3343, stdlib.checkedBigNumberify('./index.rsh:255:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3471, {
    at: './index.rsh:255:23:application',
    fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:18:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:121:35:application call to "rundocHash0_704" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v3472 = stdlib.addressEq(v3463, v2935);
  const v3474 = stdlib.addressEq(v3463, v3354);
  const v3475 = v3472 ? true : v3474;
  stdlib.assert(v3475, {
    at: './index.rsh:256:23:application',
    fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:18:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:121:35:application call to "rundocHash0_704" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v3479 = ['docHash0_704', v3465];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3479],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:260:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:260:26:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v10374 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v10375 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v10376 = [v3351, v10374, v10375];
          const v10377 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v10376);
          ;
          const v10860 = v10249[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '0')];
          const v10868 = stdlib.add(v3343, stdlib.checkedBigNumberify('./index.rsh:266:76:decimal', stdlib.UInt_max, '1'));
          const v10871 = v3264.currDistr;
          const v10873 = v3264.distrHis;
          const v10874 = v3264.distrIndex;
          const v10881 = v3264.wlArr;
          const v10882 = v3264.wlIndex;
          const v10883 = [v10860, v10868, v3767];
          const v10884 = {
            ctcMan: v3354,
            currDistr: v10871,
            cv: v3345,
            distrHis: v10873,
            distrIndex: v10874,
            distrNum: v3317,
            docHash: v10883,
            saleDetails: v3359,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v10881,
            wlIndex: v10882
            };
          const v10885 = true;
          const v10886 = await txn1.getOutput('docHash', 'v10885', ctc3, v10885);
          
          const v24018 = v10884;
          const v24020 = v10377;
          const v24021 = v10884.totST;
          const v24022 = v10884.totBT;
          const v24023 = v10884.distrNum;
          const v24024 = v10884.saleLocked;
          const v24025 = v10884.docHash;
          const v24026 = v24025[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v24027 = v10884.cv;
          const v24028 = v24027[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v24029 = v24027[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v24030 = v10377[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24031 = v24030[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24032 = stdlib.cast("UInt", "UInt256", v24031, false);
          const v24033 = v10884.ctcMan;
          const v24034 = v10884.saleDetails;
          const v24035 = v24034.qty;
          const v24036 = v24034.price;
          const v24037 = v24034.sold;
          const v24038 = v24034.status;
          const v24039 = v24034.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v10374 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v10375 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v10376 = [v3351, v10374, v10375];
      const v10377 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v10376);
      ;
      const v10860 = v10249[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '0')];
      const v10863 = stdlib.eq(v3343, stdlib.checkedBigNumberify('./index.rsh:264:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10863, {
        at: './index.rsh:264:24:application',
        fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v10864 = stdlib.addressEq(v3765, v2935);
      const v10866 = stdlib.addressEq(v3765, v3354);
      const v10867 = v10864 ? true : v10866;
      stdlib.assert(v10867, {
        at: './index.rsh:265:24:application',
        fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v10868 = stdlib.add(v3343, stdlib.checkedBigNumberify('./index.rsh:266:76:decimal', stdlib.UInt_max, '1'));
      const v10871 = v3264.currDistr;
      const v10873 = v3264.distrHis;
      const v10874 = v3264.distrIndex;
      const v10881 = v3264.wlArr;
      const v10882 = v3264.wlIndex;
      const v10883 = [v10860, v10868, v3767];
      const v10884 = {
        ctcMan: v3354,
        currDistr: v10871,
        cv: v3345,
        distrHis: v10873,
        distrIndex: v10874,
        distrNum: v3317,
        docHash: v10883,
        saleDetails: v3359,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v10881,
        wlIndex: v10882
        };
      const v10885 = true;
      const v10886 = await txn1.getOutput('docHash', 'v10885', ctc3, v10885);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v10249, v10886), {
          at: './index.rsh:251:13:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:267:20:application call to "res" (defined at: ./index.rsh:262:13:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v24018 = v10884;
      const v24020 = v10377;
      const v24021 = v10884.totST;
      const v24022 = v10884.totBT;
      const v24023 = v10884.distrNum;
      const v24024 = v10884.saleLocked;
      const v24025 = v10884.docHash;
      const v24026 = v24025[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v24027 = v10884.cv;
      const v24028 = v24027[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v24029 = v24027[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v24030 = v10377[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24031 = v24030[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24032 = stdlib.cast("UInt", "UInt256", v24031, false);
      const v24033 = v10884.ctcMan;
      const v24034 = v10884.saleDetails;
      const v24035 = v24034.qty;
      const v24036 = v24034.price;
      const v24037 = v24034.sold;
      const v24038 = v24034.status;
      const v24039 = v24034.cumProceeds;
      return;
      
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc26,
    addCoopId0_704: ctc27,
    addWL0_704: ctc28,
    buyOS0_704: ctc29,
    cBT0_704: ctc24,
    cCM0_704: ctc28,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc31,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc28
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3398 = ctc.selfAddress();
  const v3400 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:121:35:application call to "runendOS0_704" (defined at: ./index.rsh:175:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'endOS'
    });
  const v3402 = stdlib.addressEq(v3398, v2935);
  const v3404 = stdlib.addressEq(v3398, v3354);
  const v3405 = v3402 ? true : v3404;
  stdlib.assert(v3405, {
    at: './index.rsh:179:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:121:35:application call to "runendOS0_704" (defined at: ./index.rsh:175:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'endOS'
    });
  const v3408 = 'activ';
  const v3409 = stdlib.digest(ctc25, [v3363]);
  const v3411 = stdlib.digest(ctc25, [v3408]);
  const v3412 = stdlib.digestEq(v3409, v3411);
  stdlib.assert(v3412, {
    at: './index.rsh:180:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:121:35:application call to "runendOS0_704" (defined at: ./index.rsh:175:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'sale must be active',
    who: 'endOS'
    });
  const v3415 = ['endOS0_704', v3400];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3415],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:183:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:183:25:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "endOS"
            });
          ;
          const v11094 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11095 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11096 = [v3351, v11094, v11095];
          const v11097 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11096);
          ;
          const v11636 = {
            cumProceeds: v3364,
            price: v3361,
            qty: v3360,
            sold: v3362,
            status: v3260
            };
          const v11638 = v3264.currDistr;
          const v11640 = v3264.distrHis;
          const v11641 = v3264.distrIndex;
          const v11648 = v3264.wlArr;
          const v11649 = v3264.wlIndex;
          const v11652 = {
            ctcMan: v3354,
            currDistr: v11638,
            cv: v3345,
            distrHis: v11640,
            distrIndex: v11641,
            distrNum: v3317,
            docHash: v3341,
            saleDetails: v11636,
            saleLocked: v3319,
            totBT: v3316,
            totST: v3315,
            wlArr: v11648,
            wlIndex: v11649
            };
          const v11653 = true;
          const v11654 = await txn1.getOutput('endOS', 'v11653', ctc3, v11653);
          
          const v24578 = v11652;
          const v24580 = v11097;
          const v24581 = v11652.totST;
          const v24582 = v11652.totBT;
          const v24583 = v11652.distrNum;
          const v24584 = v11652.saleLocked;
          const v24585 = v11652.docHash;
          const v24586 = v24585[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v24587 = v11652.cv;
          const v24588 = v24587[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v24589 = v24587[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v24590 = v11097[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24591 = v24590[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24592 = stdlib.cast("UInt", "UInt256", v24591, false);
          const v24593 = v11652.ctcMan;
          const v24594 = v11652.saleDetails;
          const v24595 = v24594.qty;
          const v24596 = v24594.price;
          const v24597 = v24594.sold;
          const v24598 = v24594.status;
          const v24599 = v24594.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v11094 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v11095 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v11096 = [v3351, v11094, v11095];
      const v11097 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11096);
      ;
      const v11618 = stdlib.addressEq(v3765, v2935);
      const v11620 = stdlib.addressEq(v3765, v3354);
      const v11621 = v11618 ? true : v11620;
      stdlib.assert(v11621, {
        at: './index.rsh:186:24:application',
        fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'endOS'
        });
      const v11624 = 'activ';
      const v11625 = stdlib.digest(ctc25, [v3363]);
      const v11627 = stdlib.digest(ctc25, [v11624]);
      const v11628 = stdlib.digestEq(v11625, v11627);
      stdlib.assert(v11628, {
        at: './index.rsh:187:24:application',
        fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
        msg: 'sale must be active',
        who: 'endOS'
        });
      const v11636 = {
        cumProceeds: v3364,
        price: v3361,
        qty: v3360,
        sold: v3362,
        status: v3260
        };
      const v11638 = v3264.currDistr;
      const v11640 = v3264.distrHis;
      const v11641 = v3264.distrIndex;
      const v11648 = v3264.wlArr;
      const v11649 = v3264.wlIndex;
      const v11652 = {
        ctcMan: v3354,
        currDistr: v11638,
        cv: v3345,
        distrHis: v11640,
        distrIndex: v11641,
        distrNum: v3317,
        docHash: v3341,
        saleDetails: v11636,
        saleLocked: v3319,
        totBT: v3316,
        totST: v3315,
        wlArr: v11648,
        wlIndex: v11649
        };
      const v11653 = true;
      const v11654 = await txn1.getOutput('endOS', 'v11653', ctc3, v11653);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v10969, v11654), {
          at: './index.rsh:176:13:application',
          fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:190:20:application call to "res" (defined at: ./index.rsh:185:13:function exp)', 'at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
          msg: 'out',
          who: 'endOS'
          });
        }
      else {
        }
      
      const v24578 = v11652;
      const v24580 = v11097;
      const v24581 = v11652.totST;
      const v24582 = v11652.totBT;
      const v24583 = v11652.distrNum;
      const v24584 = v11652.saleLocked;
      const v24585 = v11652.docHash;
      const v24586 = v24585[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v24587 = v11652.cv;
      const v24588 = v24587[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v24589 = v24587[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v24590 = v11097[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24591 = v24590[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24592 = stdlib.cast("UInt", "UInt256", v24591, false);
      const v24593 = v11652.ctcMan;
      const v24594 = v11652.saleDetails;
      const v24595 = v24594.qty;
      const v24596 = v24594.price;
      const v24597 = v24594.sold;
      const v24598 = v24594.status;
      const v24599 = v24594.cumProceeds;
      return;
      
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc24,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc27
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3535 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:347:13:application call to [unknown function] (defined at: ./index.rsh:347:13:function exp)', 'at ./index.rsh:121:35:application call to "runoptIn0_704" (defined at: ./index.rsh:344:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v3539 = ['optIn0_704', v3535];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3539],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:350:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:350:25:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v11814 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11815 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11816 = [v3351, v11814, v11815];
          const v11817 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11816);
          ;
          await stdlib.simMapSet(sim_r, 6, v3765, true);
          const v12387 = true;
          const v12388 = await txn1.getOutput('optIn', 'v12387', ctc3, v12387);
          
          const v25138 = v3264;
          const v25140 = v11817;
          const v25141 = v3264.totST;
          const v25142 = v3264.totBT;
          const v25143 = v3264.distrNum;
          const v25144 = v3264.saleLocked;
          const v25145 = v3264.docHash;
          const v25146 = v25145[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v25147 = v3264.cv;
          const v25148 = v25147[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v25149 = v25147[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v25150 = v11817[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25151 = v25150[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25152 = stdlib.cast("UInt", "UInt256", v25151, false);
          const v25153 = v3264.ctcMan;
          const v25154 = v3264.saleDetails;
          const v25155 = v25154.qty;
          const v25156 = v25154.price;
          const v25157 = v25154.sold;
          const v25158 = v25154.status;
          const v25159 = v25154.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v11814 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v11815 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v11816 = [v3351, v11814, v11815];
      const v11817 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11816);
      ;
      await stdlib.mapSet(map6, v3765, true);
      const v12387 = true;
      const v12388 = await txn1.getOutput('optIn', 'v12387', ctc3, v12387);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v11689, v12388), {
          at: './index.rsh:345:13:application',
          fs: ['at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)', 'at ./index.rsh:354:20:application call to "res" (defined at: ./index.rsh:352:13:function exp)', 'at ./index.rsh:352:13:application call to [unknown function] (defined at: ./index.rsh:352:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v25138 = v3264;
      const v25140 = v11817;
      const v25141 = v3264.totST;
      const v25142 = v3264.totBT;
      const v25143 = v3264.distrNum;
      const v25144 = v3264.saleLocked;
      const v25145 = v3264.docHash;
      const v25146 = v25145[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v25147 = v3264.cv;
      const v25148 = v25147[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v25149 = v25147[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v25150 = v11817[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25151 = v25150[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25152 = stdlib.cast("UInt", "UInt256", v25151, false);
      const v25153 = v3264.ctcMan;
      const v25154 = v3264.saleDetails;
      const v25155 = v25154.qty;
      const v25156 = v25154.price;
      const v25157 = v25154.sold;
      const v25158 = v25154.status;
      const v25159 = v25154.cumProceeds;
      return;
      
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
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
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc24,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc24,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc24
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
  
  
  const [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3496 = ctc.selfAddress();
  const v3498 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)', 'at ./index.rsh:121:35:application call to "runremWL0_704" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v3502 = stdlib.addressEq(v3496, v2935);
  const v3504 = stdlib.addressEq(v3496, v3354);
  const v3505 = v3502 ? true : v3504;
  stdlib.assert(v3505, {
    at: './index.rsh:300:23:application',
    fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:18:function exp)', 'at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)', 'at ./index.rsh:121:35:application call to "runremWL0_704" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v3509 = ['remWL0_704', v3498];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2935, v2939, v3260, v3264, v3267, v3315, v3316, v3317, v3319, v3341, v3343, v3345, v3346, v3348, v3350, v3351, v3352, v3354, v3359, v3360, v3361, v3362, v3363, v3364, v3509],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:304:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:304:26:decimal', stdlib.UInt_max, '0'), v2939]]],
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
      
      const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
      
      switch (v3766[0]) {
        case 'aST0_704': {
          const v3769 = v3766[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4489 = v3766[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5209 = v3766[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5929 = v3766[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6649 = v3766[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7369 = v3766[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8089 = v3766[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8809 = v3766[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9529 = v3766[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10249 = v3766[1];
          
          break;
          }
        case 'endOS0_704': {
          const v10969 = v3766[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11689 = v3766[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12409 = v3766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v12534 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v12535 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v12536 = [v3351, v12534, v12535];
          const v12537 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v12536);
          ;
          const v13115 = v12409[stdlib.checkedBigNumberify('./index.rsh:296:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 7, v13115, undefined /* Nothing */);
          const v13121 = true;
          const v13122 = await txn1.getOutput('remWL', 'v13121', ctc3, v13121);
          
          const v25698 = v3264;
          const v25700 = v12537;
          const v25701 = v3264.totST;
          const v25702 = v3264.totBT;
          const v25703 = v3264.distrNum;
          const v25704 = v3264.saleLocked;
          const v25705 = v3264.docHash;
          const v25706 = v25705[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v25707 = v3264.cv;
          const v25708 = v25707[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v25709 = v25707[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v25710 = v12537[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25711 = v25710[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25712 = stdlib.cast("UInt", "UInt256", v25711, false);
          const v25713 = v3264.ctcMan;
          const v25714 = v3264.saleDetails;
          const v25715 = v25714.qty;
          const v25716 = v25714.price;
          const v25717 = v25714.sold;
          const v25718 = v25714.status;
          const v25719 = v25714.cumProceeds;
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
  const {data: [v3766], secs: v3768, time: v3767, didSend: v1599, from: v3765 } = txn1;
  switch (v3766[0]) {
    case 'aST0_704': {
      const v3769 = v3766[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4489 = v3766[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5209 = v3766[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5929 = v3766[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6649 = v3766[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7369 = v3766[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8089 = v3766[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8809 = v3766[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9529 = v3766[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10249 = v3766[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v10969 = v3766[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11689 = v3766[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12409 = v3766[1];
      undefined /* setApiDetails */;
      ;
      const v12534 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v12535 = v3350[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v12536 = [v3351, v12534, v12535];
      const v12537 = stdlib.Array_set(v3267, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v12536);
      ;
      const v13115 = v12409[stdlib.checkedBigNumberify('./index.rsh:296:13:spread', stdlib.UInt_max, '0')];
      const v13116 = stdlib.addressEq(v3765, v2935);
      const v13118 = stdlib.addressEq(v3765, v3354);
      const v13119 = v13116 ? true : v13118;
      stdlib.assert(v13119, {
        at: './index.rsh:307:24:application',
        fs: ['at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map7, v13115, undefined /* Nothing */);
      const v13121 = true;
      const v13122 = await txn1.getOutput('remWL', 'v13121', ctc3, v13121);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v12409, v13122), {
          at: './index.rsh:297:13:application',
          fs: ['at ./index.rsh:297:13:application call to [unknown function] (defined at: ./index.rsh:297:13:function exp)', 'at ./index.rsh:310:20:application call to "res" (defined at: ./index.rsh:306:13:function exp)', 'at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v25698 = v3264;
      const v25700 = v12537;
      const v25701 = v3264.totST;
      const v25702 = v3264.totBT;
      const v25703 = v3264.distrNum;
      const v25704 = v3264.saleLocked;
      const v25705 = v3264.docHash;
      const v25706 = v25705[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v25707 = v3264.cv;
      const v25708 = v25707[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v25709 = v25707[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v25710 = v12537[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25711 = v25710[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25712 = stdlib.cast("UInt", "UInt256", v25711, false);
      const v25713 = v3264.ctcMan;
      const v25714 = v3264.saleDetails;
      const v25715 = v25714.qty;
      const v25716 = v25714.price;
      const v25717 = v25714.sold;
      const v25718 = v25714.status;
      const v25719 = v25714.cumProceeds;
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
  appApproval: `BiBRAH8IAQMgoAb9AvwD+wT6BfkGcQZowAyoDaYPxhUYBBBgBUARyAFwCQfqB7ytx6sIpdL0kgyamI65DMfr7O0N2I6Z4A7n7I64DeDlw7AMsILfsAzsFt3R4ZgJobfa1wr2lavaC4wWrBbMFtSdk8wI8eGT4QjtFvmEipEF/eappQfdlpaDCIrSwpsI7hjJ/Ji8BZec/dQGnPiDiAKO4/3gAtjb/JkDjRizGbsZwxnLGdAZl8TBrwGInfftAQL///////////8BLc4V+xUlDCHJB4QB5gbJAaEGZCYdAQEBBgEAAQIBAwEEAQUBBwEMAQgBCQEKAQsBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQAgg4NGe0jACsbbGwAf9XxPwnqspe0HAhLyTDVhn3JaeGogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiNQAxGEEdlicaZEkiWzUBSSRbNQIhFVs1CDEZJRJBAFwxACEer0sBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISEIdCjYaABdJQQZMIjUEJTUGSSEfDEADiEkhIAxAAcJJISEMQADLSSEiDEAANUkhIwxAABUhIxJENhoBNf8nCDT/UCEYr1BCBtwhIhJENhoBNhoCUDX/Jwc0/1CBUK9QQgbDSSEkDEAAByEkEkQ0AQAhIRJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDgc4YIQVYNANXIAhQNQdCHCtJISUMQADVSSEmDEAAeSEmEkQ0ASEEEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQMhJyVYNQdCG6QhJRJENAEhBBJENhoBNf8yAzT/iBu3V0IhSTX+VwEgNP4iVU0yAzT/iBuiV4QhSTX+VwEgNP4iVU1QMgM0/4gbjFelIUk1/lcBIDT+IlVNUDUHQhtPISASRCcaNf8nCzT/UCEWr1BCBURJISgMQADdSSEpDEAApEkhKgxAABMhKhJEJxo1/yk0/1AhFq9QQgUcISkSRDQBIQQSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1AyErIQVYNAMhLCEFWFA0AyEtIQVYUDUHQhqJISgSRDQBIQQSRDYaAYgaolfIAUk1/iJVQAAGIjX/QgAGJTX/QgAANP8WUQcINQdCGldJIS4MQADASSEvDEAAPyEvEkQ0ASEEEkQ2GgE1/zIDNP+IGlxXACFJNf5XASA0/iJVTTIDNP+IGkdXISFJNf5XASA0/iJVTVA1B0IaCiEuEkQ0ASEEEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQMhMCEbWDUHQhmQIR8SRDYaATX/KzT/UCEYr1BCA4VJITEMQAEaSSEyDEAAt0khMwxAADBJITQMQAAVITQSRDYaATX/Jwk0/1AhGK9QQgNUITMSRDYaATX/KDT/UIE8r1BCA0AhMhJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDVwAgNAMhNSEFWFA1B0IYt0khNgxAAEFJITcMQAApITcSRDQBIQQSRCI2GgGIGMFXxgJJNf9XAQEXNP8iVU0WUQcINQdCGIAhNhJENhoBNf8nCjT/UEICeCExEkQnGjX/Jww0/1AhFq9QQgJkSSE4DEABPEkhOQxAASBJIToMQACDIToSRDQBIQQSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1AyE7IRRYNAOBkRiBJFhQNQdCF8MhORJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDITwkWDQDIT0kWFA0AyE+JFhQNAMhPyEXWFA0AyFAJFhQNQdCFy0hOBJENhoBNf8nBjT/UCEYr1BCASFJIUEMQAAwSSFCDEAAFSFCEkQ2GgE1/ycENP9QgVivUEIA/iFBEkQnGjX/JwU0/1AhFq9QQgDqgfX635IBEkQ2GgE2GgJQNhoDUDX/KjT/UEIAzjYaAhc1BDYaAzYaARdJIUMMQBFsSSEEDEAAsiEEEkQhBDQBEkQ0BEkiEkw0AhIRRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1A1cAIDX/gASnZcS0sDIGIUQPRDT/MQASRDT/NAMhBVs0A1coBTQDIUUhRlgyBjQDIUchGVhCE6hIIQQ0ARJENARJIhJMNAISEUQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQNJSkpKSkpKSkpKSVcAIDX/IQVbNf5XKAU1/SFFIUZYNfwhRyEZWDX7ISshBVg1+iEsIQVYNfkhLSEFWDX4ISclWBc19yEwIRtYNfaB3RdbNfWB5ReBKFg19IG1GCEZWDXzgcYYWzXyITUhBVg18YGOGSFIWDXwITxbNe8hPVs17iE+WzXtIT8hF1g17CFAWzXrSTUFNeqABOO40ZU06lCwMgYhRAxENOoiVUkhDQxABQxJIRwMQAKQSYELDEABXkkhSQxAAK4hSRJENOpXASA157EisgEhDbIQNAiyGLMxADT/EjEANPESEUQ050mIFLkiIRpMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISIAJAAAAAAAAM0EBsCg1BzT/NP40/TT8MgY08hY081cICFA081cQAVBCEbxIsSKyASENshA0CLIYszEAMQCIFCCAAgEBNedJVwDGNOdQTCEagaIGWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEiACQAAAAAAADBjAbAoNQc0/zT+NP00/DIGNPIWNPNXCAhQNPNXEAFQQhETSYEKDEAAmUixIrIBIQ2yEDQIshizMQA0/xIxADTxEhFENOwBJxsSRIAJAAAAAAAALYUBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNOsWNO4WUDTvFlA07RZQNP1QUDT3FlEHCFA0+VA0+lA0/CERIQZYUDT8IRIkWFAyBjTyFjTzVwgIUDTzVxABUEIQc0g06lcBYDXnNPUiEkQxADT/EjEANPESEUSACQAAAAAAACqFAbAoNQc0/zT+NP008TT8VyAgUDT0UDT8IQ4hD1hQNPwhECRYUDT4UDTnNPUlCBZQMgYWUFA08FA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCD+hJIR0MQAGeSSQMQAC9SDTqVwEgNeexIrIBIQ2yEDQIshizNOdJNeZJSiEVWyISRCRbIhJEIlsiEkQhE1s15TTlNP6IEm0xADT/EjEANPESEUQ05SINRIAJAAAAAAAAJ5EBsCg1BzT/NP40/TTxNOZQNPRQNPwhDiEPWFA0/CEQJFhQNPgnHKCIEkhQNPZQNPBQNPcWUQcIUDT5NOagiBIyUDT6UDT8IREhBlhQNPwhEiRYUDIGNPI05QgWNPNXCAhQNPNXEAFQQg8eSDTqVwEQNeexIrIBIQ2yEDQIshizNOciWzXmNOckWzXlMQA0/xIxADTxEhFENOYiDUQ05SINRIAFYWN0aXY15IAIAAAAAAAAJJE05hY05RZQNO0WUDTkUDTrFlBQsDTmFjTlFlA07RZQNORQNOsWUDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA09lA06xY05RZQNOYWUDTtFlA05FBQNPcWUQcIUDT5UDT6UDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQg5DSLEisgEhDbIQNAiyGLM08hY081cICFA081cQAVA15zEANP8SMQA08RIRRDTrIg1ENOdXABFJNeYiW0k15TTrD0SxIrIBNOuyEiEUshAxALIUNP6yEbOACQAAAAAAACGQAbAoNQc0/zT+NP008TT8VyAgUDT0UDT8IQ4hD1hQNPwhECRYUDT4UDT2UCSvNO4WUDTvFlA07RZQNOxQUDT3FlEHCFA0+VA0+lA0/CERIQZYUDT8IRIkWFAyBjTlNOsJFjTmVwgIUDTmVxABUEINc0khBAxABbdJIRQMQAKLSSEXDEAAfEg06lcBIDXnMQA0/xIxADTxEhFEgAkAAAAAAAAedwGwKDUHNP80/jT9NOc0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA09lA08FA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCDOJIsSKyASENshA0CLIYszTyFjTzVwgIUDTzVxABUDXnMQCIDzdXyAFJNeUiVUAABiI15kIABiU15kIAADTmRDTnVwARSTXlIls15CETrzTkFlAyA6VENPoyA6VEMgMxAIgO+VdjIUk14lcBIDTiIlVNNeM0+jTjp0Q04zIDpUQ04zT8VyAgo4gPQzT6oogPPUk14klKIRVbIhJEJFsiEkQiWyISRCETW0k14TTkDkSxIrIBNOGyEiEUshAxALIUNP6yEbMxADEAiA6RKDIDMQCIDolXhCFJNeBXASA04CJVTTTioIgO5lA14ElXAIQ04FBMgaUBgcUGWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEgxADEAiA4HKDIDMQCIDf9XpSFJNeBXASA04CJVTSccoIgOXFA14ElXAKU04FBMgcYBgaQGWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEiACAAAAAAAABuDNOJQsDTiNQc0/zT+NP00/DIGNOQ04QkWNOVXCAhQNOVXEAFQQgraSDTqVwEINeciNeaxIrIBIQ2yEDQIshizNOYlCEk15iEdDED/5jTnFzXmNO405gs15TTlNP6IDWw05iINRDTsAScbEkQ07zTmD0QxAIgNBFfIAUk14yJVQAAGIjXkQgAGJTXkQgAANOREIROvNOYWUDXjMQAxAIgM2igyAzEAiAzSVwAhSTXiVwEgNOIiVU0046CIDS9QNeIhSiFLWDTiTFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEgxADEAiAxXKDIDMQCIDE9XYyFJNeJXASA04iJVTTTjoIgMrFA14klXAGM04lBMIUwhTVhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIIQavMQCIC84hTiFPWEk14SUhBlg04SJVTTXiIRyvNeEiNeA04iQ04AskWBc13zThIlVAAAYlNd5CAAYiNd5CAAA04Sg04BZQNN4iNN8SEE014TTgJQhJNeAhUAxA/8QxADEAiAtwKDTiIiQiNOFJNeAlWzTgIlVNC1I05hZQNOIkSSI04Uk14CVbNOAiVU0LCCEGUlBQNeBXAMk04FBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEg07zTmCTXgNO005gg13zTrNOY07gsINd6ACAAAAAAAABiLNOAWNO4WUDTfFlA07FA03hZQULA04BY07hZQNN8WUDTsUDTeFlA1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNN4WNO4WUDTgFlA03xZQNOxQUDT3FlEHCFA0+VA0+lA0/CERIQZYUDT8IRIkWFAyBjTyNOUIFjTzVwgIUDTzVxABUEIHtUklDEABkkkhQwxAARNINOpXASA157EisgEhDbIQNAiyGLM05zXmMQA0/xIxADTxEhFENOZJiAn2JSEaTFZLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEg0/CESW0k15SUIIjTlIRMPTTXkgAkAAAAAAAAVXQGwKDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA09lA08FA09xZRBwhQNPlQNPpQNPwhESEGWEkiIQU05AtSNOZQTCEFSTTkCwghBlJQUDTkFlAyBjTyFjTzVwgIUDTzVxABUEIGlUg06lcBJDXngAkAAAAAAAASXgGwKDUHNP80/jT9NPE0/FcgIFA0AyE7IRRYNOdQUDT8IQ4hD1hQNPwhECRYUDT4UDT2UDTwUDT3FlEHCFA0+VA0+lA0/CERIQZYUDT8IRIkWFAyBjTyFjTzVwgIUDTzVxABUEIGHUg06lcBYDXnIjXmsSKyASENshA0CLIYszTmJQhJNeYhHQxA/+Y051cAIDXmNOdXICA15TTnV0AgNeQ05jT/EjTmNPESEUQ05DIDpUQ05UmICEQlIRpMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISDTlSYgH5SgyAzTliAfdVwAhSTXjVwEgNOMiVU005KCICDpQNeMhSiFLWDTjTFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEg05UmIB2MoMgM05YgHW1djIUk141cBIDTjIlVNNOSgiAe4UDXjSVcAYzTjUEwhTCFNWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEghBq805YgG2iFOIU9YSTXiJSEGWDTiIlVNNeMhHK814iI14TTjJDThCyRYFzXgNOIiVUAABiU130IABiI130IAADTiKDThFlA03yI04BIQTTXiNOElCEk14SFQDED/xDTlSYgGfSg04yIkIjTiSTXhJVs04SJVTQtSNORJSiEVWyISRCRbIhJEIlsiEkQhE1sWUDTjJEkiNOJJNeElWzThIlVNCwghBlJQUDXhVwDJNOFQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIgAkAAAAAAAAPYQGwKDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA09lA08FA09xZRBwhQNPlQNPo05KCIBgNQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCAvUiEkSBwJoMiAWdsSKyASENshAishiABgYxADIJErIeKbIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/FepIDX7gASaMPkdNP9QNP4WUQcIUDT9UDT8FlA0+1CwIRmvSTX6VwARNfmBoI0GiAUisSKyASKyEiEUshAyCrIUNPyyEbMhFa81+IAFZW5kZWQ19zEANPw09zT9MgNQgCgxLjAzY29vcGVyYXRpdklkY29vcGVyYXRpdklkY29vcGVyYXRpdklkUDT4SVA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FA0+FBQJK9QMgNQgHBhamRuYWVpbmF3aW5kaWFlbmd0bmlmcmp3cml0bmlxd3JuaXJlZmluZGluaWdhamRuYWVpbmF3aWRpYWVuZ3RuaWl0bmlxd3JuaXJlZmluZGluaWdmdWFlYmZ1YmF3dXIAAAAAAAAAAAAAAAAAAAAAUDIDNPdQUDT+FlEHCFAyA1AyA1AxADEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUFAkr1AyBiSvNPlXCAhQNPlXEAFQQgAANf81/jX9Nfw1+zX6NP2Bhg8hBVg1+TT9geYOIQVYNfg0/YGwDSEFWDX3NP2B5Q4lWBc19jT9gdANIRtYSTX1IRZbNfQ0/VdAKEk181cABDXyNPNXBCQ18TT/VwARSTXwIls17yETrzTvFlA17jT9VwAgNe00/YHADiFIWEk17CEVWzXrNOwkWzXqNOwhE1s16TTsVyAFNeg07CJbNec0+jT7FlA0/FA0/VA0/1A0+VA0+FA091A09hZRBwhQNPVQNPQWUDTzUDTyUDTxUDTwUDTvFlA07lA07VA07FA06xZQNOoWUDTpFlA06FA05xZQKksBVwB/ZyhLAVd/f2crSwFX/n9nJwRLASEHI1hnJwVLASEII1hnJwZLASEJI1hnKUsBIQojWGcnB0sBIQsjWGcnCUsBgfgHI1hnJwpLAYH3CCNYZycLSwGB9gkjWGcnDEsBgfUKI1hnJwhLAYH0CyNYZycNSwGB8wwjWGcnDksBgfINI1hnJw9LAYHxDiNYZycQSwGB8A8jWGcnEUsBge8QI1hnJxJLAYHuESNYZycTSwGB7RIjWGcnFEsBgewTI1hnJxVLAYHrFCNYZycWSwGB6hUjWGcnF0sBgekWI1hnJxhLAYHoFyNYZycZSwGB5xghDFhnSCEENQEyBjUCQgAtMRkhFxJEsSKyASENshA0CLIYIReyGbOxIrIBIrIIJbIQMgmyCTIKsgezQgAFMRkiEkQnGjQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSUIMgQSRDEWEkQlQzEZIhJEQv/fIjE0EkSBGzE1EkQiMTYSRCQxNxJEIjUBIjUCIjUIQv+mSTEYYUAABUghHq+JSSpiSwEoYlBLAStiUEsBJwRiUEsBJwViUEsBJwZiUEsBKWJQSwEnB2JQTEiJNABJSiUINQA4BzIKEkQ4ECUSRDgIEkSJNABJSkklCDUAOBQyChJEOBAhFBJEOBFPAhJEOBISRIlJFSEFTAmvTFCJ`,
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
  warnings: [`Step 2 may use up to 9 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:121:35:dot.`]
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
                "name": "v2936",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2937",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2938",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2939",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2940",
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
                "name": "v2936",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2937",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2938",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2939",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2940",
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
                    "name": "_aST0_704",
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
                    "name": "_addCoopId0_704",
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
                    "name": "_addWL0_704",
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
                    "name": "_buyOS0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_704",
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
                    "name": "_cCM0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimOSpr0_704",
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
                    "name": "_createOS0_704",
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
                    "name": "_dBT0_704",
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
                    "name": "_docHash0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_endOS0_704",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_704",
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
                    "name": "_remWL0_704",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T37",
                "name": "v3766",
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
    "name": "_reach_oe_v10129",
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
    "name": "_reach_oe_v10885",
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
    "name": "_reach_oe_v11653",
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
    "name": "_reach_oe_v12387",
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
    "name": "_reach_oe_v13121",
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
    "name": "_reach_oe_v3937",
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
    "name": "_reach_oe_v4702",
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
    "name": "_reach_oe_v5469",
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
    "name": "_reach_oe_v6283",
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
    "name": "_reach_oe_v7043",
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
    "name": "_reach_oe_v7799",
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
    "name": "_reach_oe_v8592",
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
    "name": "_reach_oe_v9361",
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
                    "name": "_aST0_704",
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
                    "name": "_addCoopId0_704",
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
                    "name": "_addWL0_704",
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
                    "name": "_buyOS0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_704",
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
                    "name": "_cCM0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimOSpr0_704",
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
                    "name": "_createOS0_704",
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
                    "name": "_dBT0_704",
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
                    "name": "_docHash0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_endOS0_704",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_704",
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
                    "name": "_remWL0_704",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T37",
                "name": "v3766",
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
        "name": "v25738",
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
        "name": "v25742",
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
        "name": "v25748",
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
        "name": "v25751",
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
  Bytecode: `0x608060405260405162009513380380620095138339810160408190526200002691620016df565b6000805543600355620000386200103b565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b929190620017b8565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415601362000dcf565b6060810151339060006001600160a01b0390921660209290920201526060810151339060016001600160a01b0390921660209290920201526060810151339060026001600160a01b0390921660209290920201526060810151339060036001600160a01b0390921660209290920201526060810151339060046001600160a01b0390921660209290920201526060810151339060056001600160a01b0390921660209290920201526060810151339060066001600160a01b0390921660209290920201526060810151339060076001600160a01b0390921660209290920201526060810151339060086001600160a01b0390921660209290920201526060810151339060096001600160a01b03909216602092909202015260608101513390600a6001600160a01b03909216602092909202015260608101513390600b6001600160a01b03909216602092909202015260608101513390600c6001600160a01b03909216602092909202015260608101513390600d6001600160a01b03909216602092909202015260608101513390600e6001600160a01b03909216602092909202015260608101513390600f6001600160a01b0390921660209290920201526060810151339060106001600160a01b0390921660209290920201526060810151339060116001600160a01b0390921660209290920201526060810151339060126001600160a01b0390921660209290920201526060810151339060136001600160a01b0390921660209290920201526060810151339060146001600160a01b0390921660209290920201526060810151339060156001600160a01b0390921660209290920201526060810151339060166001600160a01b0390921660209290920201526060810151339060176001600160a01b0390921660209290920201526060810151339060186001600160a01b039092166020928302919091015260808201805160009081905281519092018290525160a083015190916020020152608081015160a082015160016020020152608081015160a082015160026020020152608081015160a082015160036020020152608081015160a082015160046020020152608081015160a082015160056020020152608081015160a082015160066020020152608081015160a082015160076020020152608081015160a082015160086020020152608081015160a082015160096020020152608081015160a0820151600a6020020152608081015160a0820151600b6020020152608081015160a0820151600c6020020152608081015160a0820151600d6020020152608081015160a0820151600e6020020152608081015160a0820151600f6020020152608081015160a082015160106020020152608081015160a082015160116020020152608081015160a082015160126020020152608081015160a082015160136020020152608081015160a082015160146020020152608081015160a082015160156020020152608081015160a082015160166020020152608081015160a082015160176020020152608081015160a082015160186020020152608081015160a082015160196020020152608081015160a0820151601a6020020152608081015160a0820151601b6020020152608081015160a0820151601c6020020152608081015160a0820151601d6020020152608081015160a0820151601e6020020152608081015160a0820151601f602002018190525080608001518160a00151602060648110620005de57620005de6200184b565b6020020152608081015160a082015160216020020152608081015160a082015160226020020152608081015160a082015160236020020152608081015160a082015160246020020152608081015160a082015160256020020152608081015160a082015160266020020152608081015160a082015160276020020152608081015160a082015160286020020152608081015160a082015160296020020152608081015160a0820151602a6020020152608081015160a0820151602b6020020152608081015160a0820151602c6020020152608081015160a0820151602d6020020152608081015160a0820151602e6020020152608081015160a0820151602f6020020152608081015160a082015160306020020152608081015160a082015160316020020152608081015160a082015160326020020152608081015160a082015160336020020152608081015160a082015160346020020152608081015160a082015160356020020152608081015160a082015160366020020152608081015160a082015160376020020152608081015160a082015160386020020152608081015160a082015160396020020152608081015160a0820151603a6020020152608081015160a0820151603b6020020152608081015160a0820151603c6020020152608081015160a0820151603d6020020152608081015160a0820151603e6020020152608081015160a0820151603f6020020152608081015160a082015160406020020152608081015160a082015160416020020152608081015160a082015160426020020152608081015160a082015160436020020152608081015160a082015160446020020152608081015160a082015160456020020152608081015160a082015160466020020152608081015160a082015160476020020152608081015160a082015160486020020152608081015160a082015160496020020152608081015160a0820151604a6020020152608081015160a0820151604b6020020152608081015160a0820151604c6020020152608081015160a0820151604d6020020152608081015160a0820151604e6020020152608081015160a0820151604f6020020152608081015160a082015160506020020152608081015160a082015160516020020152608081015160a082015160526020020152608081015160a082015160536020020152608081015160a082015160546020020152608081015160a082015160556020020152608081015160a082015160566020020152608081015160a082015160576020020152608081015160a082015160586020020152608081015160a082015160596020020152608081015160a0820151605a6020020152608081015160a0820151605b6020020152608081015160a0820151605c6020020152608081015160a0820151605d6020020152608081015160a0820151605e6020020152608081015160a0820151605f6020020152608081015160a082015160606020020152608081015160a082015160616020020152608081015160a082015160626020020152608081015160a08201516063602002018190525063312e303360e01b8160c00151600001906001600160e01b03191690816001600160e01b031916815250507f636f6f706572617469764964636f6f706572617469764964636f6f70657261748160e001516000018181525050631a5d925960e21b8160e00151602001906001600160e01b03191690816001600160e01b031916815250508060c00151816101000151600001819052508060e00151816101000151602001819052507f616a646e6165696e6177696e646961656e67746e6966726a777269746e69717781610120015160000181815250507f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e81610120015160200181815250507f6969746e697177726e69726566696e64696e6967667561656266756261777572816101200151604001818152505080610120015181610140015160000181905250600081610140015160200181815250506000816101400151604001818152505064195b99195960da1b816101600151600001906001600160d81b03191690816001600160d81b031916815250506000816101800151600001818152505060008161018001516020018181525050600081610180015160400181815250506000816101800151606001818152505080610160015181610180015160800181905250816020015160400151816101a00151600001906001600160a01b031690816001600160a01b0316815250506000816101a001516020018181525050806101000151816101a00151604001819052508060a00151816101a00151606001819052506000816101a0015160800181815250506000816101a0015160a0018181525050806101400151816101a0015160c00181905250806101800151816101a0015160e00181905250816020015160200151816101a001516101000190151590811515815250506000816101a001516101200181815250506000816101a001516101400181815250508060600151816101a0015161016001819052506000816101a0015161018001818152505062000d55620011ab565b80513390526020838101516060015182516001600160a01b039091169082015261016083015182516040908101919091526101a0840151828401805191909152514390830152908301519083015162000db2919060009062000df9565b60208201516040015262000dc68162000e7c565b50505062001cd6565b8162000df55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000e03620011e8565b60005b600181101562000e595784816001811062000e255762000e256200184b565b602002015182826001811062000e3f5762000e3f6200184b565b60200201528062000e508162001861565b91505062000e06565b508181846001811062000e705762000e706200184b565b60200201529392505050565b604080516020808201835260008252830151909101515151815262000ea062001235565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515160608087019190915281518301516080808801919091528251516101409081015160a0808a01919091528451516101209081015160c0808c01919091528651519092015160e0808c0191909152865151610100908101511515908c0152865151830151918b01919091528551519091015187015191890191909152835151850151610160890152835151850151516101808901528351518501518601516101a08901528351850151516101c0890152835185015151516101e0890152885161020089015283515151909616610220880152825151860151610240880152825151860151840151610260880152825151860151850151610280880152825151860151909101516102a087015281515185015101516102c0860152515190920151516102e084015260036000554360015590516200100f9183910162001a88565b6040516020818303038152906040526002908051906020019062001035929190620013c9565b50505050565b60408051610220810190915260006101c082018181526101e0830182905261020083019190915281526020810162001072620011e8565b81526040805160608101825260008082526020828101829052928201529101908152602001620010a162001458565b8152602001620010c4604051806040016040528060008152602001600081525090565b8152602001620010d362001477565b815260408051602080820183526000808352818501929092528251808401845282815280820183905283850152825160608082018552818501848152825284518086018652848152808401859052828401528086019190915283518082018552838152808301849052808501849052608080870191909152845160c0808201875292810185815291810185905260a08082018690529181528084018590528086018590529086015283519182019093529081529082015260e00162001197620014b2565b8152602001620011a6620014fa565b905290565b6040805160a0810182526000818301818152606083018290528351602080820190955291825260808301919091528152908101620011a6620015d6565b60405180602001604052806001905b6200121e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620011f75790505090565b60408051610300810182526000808252602080830182905283519081018452908152909182019081526020016200126b620014fa565b81526020016200127a620011e8565b8152602001600081526020016000815260200160008152602001600015158152602001620012d56040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b815260200160008152602001620013166040805160608101825260008183018181528252825180840190935280835260208084019190915281019190915290565b8152604080516020808201835260008083528185019290925282518084018452828152808201839052838501528251606080820185528382529181018390529283018290528301919091526080820181905260a0820181905260c082015260e00162001381620014b2565b8152602001600081526020016000815260200160008152602001620013bc604051806020016040528060006001600160d81b03191681525090565b8152602001600081525090565b828054620013d79062001c99565b90600052602060002090601f016020900481019282620013fb576000855562001446565b82601f106200141657805160ff191683800117855562001446565b8280016001018555821562001446579182015b828111156200144657825182559160200191906001019062001429565b506200145492915062001601565b5090565b6040518061032001604052806019906020820280368337509192915050565b60405180610c8001604052806064905b6040805180820190915260008082526020820152815260200190600190039081620014875790505090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001620011a6604051806020016040528060006001600160d81b03191681525090565b604080516101a08101825260008082526020820152908101620015476040805160608101825260008183018181528252825180840190935280835260208084019190915281019190915290565b81526020016200155662001477565b81526020016000815260200160008152602001620015a16040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b8152602001620015b0620014b2565b81526020016000151581526020016000815260200160008152602001620013bc62001458565b6040518060600160405280620015eb620014fa565b815260200160008152602001620011a6620011e8565b5b8082111562001454576000815560010162001602565b604080519081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b80518015158114620016c257600080fd5b919050565b80516001600160a01b0381168114620016c257600080fd5b6000818303610120811215620016f457600080fd5b620016fe62001618565b83518152601f1982019150610100808312156200171a57600080fd5b620017246200164f565b60808412156200173357600080fd5b6200173d62001680565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200177560a08701620016b1565b60208201526200178860c08701620016c7565b60408201526200179b60e08701620016c7565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620018376101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200188457634e487b7160e01b600052601160045260246000fd5b5060010190565b63ffffffff60e01b8151511682526020810151620018c06020840182805182526020908101516001600160e01b031916910152565b505050565b8060005b606481101562001035578151805185526020908101518186015260409094019390910190600101620018c9565b8060005b6019811015620010355781516001600160a01b0316845260209384019390910190600101620018fa565b80516001600160a01b031682526020810151602083015260408101516200194f60408401826200188b565b5060608101516200196460a0840182620018c5565b506080818101516119a084015260a08201516119c084015260c0820151805180516119e0860152602080820151611a00870152604091820151611a2087015280830151611a4087015291810151611a6086015260e08401518051611a8087015291820151611aa0860152810151611ac08501526060810151611ae08501520151516001600160d81b031916611b008301526101008101511515611b20830152610120810151611b40830152610140810151611b6083015261016081015162001a31611b80840182620018f6565b506101800151611ea09190910152565b8060005b6001811015620010355762001a7184835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162001a45565b81516001600160a01b031681526123808101602083015162001ab560208401826001600160a01b03169052565b50604083015162001ad36040840182516001600160d81b0319169052565b50606083015162001ae8606084018262001924565b50608083015162001afe611f2084018262001a41565b5060a0830151611f8083015260c0830151611fa083015260e0830151611fc08301526101008301511515611fe08301526101208301518051805161200085015260208082015161202086015260409182015161204086015282015161206085015201516120808301526101408301516120a083015261016083015162001b896120c08401826200188b565b50610180830151516001600160e01b03199081166121208401526101a084015180516121408501526020908101519091166121608401526101c08401518051612180850152808201516121a085015260409081015115156121c08501526101e08501516121e08501526102008501516122008501526102208501516001600160a01b031661222085015261024085015180516122408601529182015161226085015281015161228084015260608101516122a084015260800151516001600160d81b03199081166122c08401526102608401516122e08401526102808401516123008401526102a08401516123208401526102c084015151166123408301526102e0909201516123609091015290565b600181811c9082168062001cae57607f821691505b6020821081141562001cd057634e487b7160e01b600052602260045260246000fd5b50919050565b61782d8062001ce66000396000f3fe60806040526004361061021c5760003560e01c80637333bd0911610122578063b7ba9551116100a5578063d9dcd84d1161006c578063d9dcd84d14610624578063dc01fb9d14610644578063e9b451af14610664578063f33cd53314610677578063fe9e59dd1461068a57005b8063b7ba9551146105b2578063b8003303146105c5578063cadc2e7a146105cd578063d07b8ddb146105ed578063d1ad1a371461060f57005b8063a153a9bd116100e9578063a153a9bd14610534578063a953303314610547578063ab53f2c61461054f578063abe9f98d14610572578063acf0cc221461059257005b80637333bd09146104d157806373b4522c146104d957806374fcef12146104ec578063817d57f3146104ff578063832307571461051f57005b80632152dd46116101aa57806350cea70f1161017157806350cea70f1461045457806354f2991c14610467578063573fa8a11461047a57806359cac3a41461049c5780635b48684e146104c957005b80632152dd46146103a55780633293bc79146103c75780633bc5b7bf146103e75780633c9febe8146104075780634a3912eb1461043457005b80631956a232116101ee5780631956a232146102cb5780631e3f5f07146103045780631e93b0f1146103175780631fa8b02f146103365780632080ea1c1461037857005b8063046989b61461022557806306dc92ff14610266578063125f48e41461029357806312822a75146102b657005b3661022357005b005b34801561023157600080fd5b5061023a61069f565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561027257600080fd5b50610286610281366004616441565b6107ba565b60405161025d9190616484565b6102a66102a1366004616441565b6107e6565b604051901515815260200161025d565b3480156102c257600080fd5b506102a661082a565b3480156102d757600080fd5b506102e06108ee565b60408051825181526020928301516001600160a01b0316928101929092520161025d565b6102a66103123660046164b4565b610a03565b34801561032357600080fd5b506003545b60405190815260200161025d565b34801561034257600080fd5b50610356610351366004616441565b610a62565b604080518251815260208084015190820152918101519082015260600161025d565b34801561038457600080fd5b50610398610393366004616441565b610c27565b60405161025d91906164f5565b3480156103b157600080fd5b506103ba610c4d565b60405161025d919061655b565b6103da6103d5366004616569565b610d32565b60405161025d9190616582565b3480156103f357600080fd5b50610286610402366004616441565b610d73565b34801561041357600080fd5b50610427610422366004616441565b610d99565b60405161025d91906165c2565b34801561044057600080fd5b506102a661044f366004616441565b610daa565b6102a6610462366004616754565b610e97565b6102a66104753660046167aa565b610ed2565b34801561048657600080fd5b5061048f610f0f565b60405161025d91906167fb565b3480156104a857600080fd5b506104bc6104b7366004616441565b610fd9565b60405161025d9190616809565b6102a6611145565b610328611176565b6102236104e7366004616820565b6111a6565b6102a66104fa366004616441565b6111ca565b34801561050b57600080fd5b5061028661051a366004616441565b61120e565b34801561052b57600080fd5b50600154610328565b6102a6610542366004616441565b611234565b6102a661127a565b34801561055b57600080fd5b506105646112ab565b60405161025d929190616864565b34801561057e57600080fd5b506102a661058d366004616441565b611348565b34801561059e57600080fd5b506102866105ad366004616441565b61146f565b6103da6105c036600461689e565b611495565b6102a66114e5565b3480156105d957600080fd5b506102866105e8366004616441565b611515565b3480156105f957600080fd5b5061060261153b565b60405161025d91906168ec565b34801561061b57600080fd5b5061035661160a565b34801561063057600080fd5b5061039861063f366004616441565b611733565b34801561065057600080fd5b5061028661065f366004616441565b611759565b6102a6610672366004616569565b61177f565b6102236106853660046168fb565b6117bc565b34801561069657600080fd5b506103da6117dc565b6040805180820190915260008082526020820152600360005414156107ab576000600280546106cd9061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546106f99061690e565b80156107465780601f1061071b57610100808354040283529160200191610746565b820191906000526020600020905b81548152906001019060200180831161072957829003601f168201915b505050505080602001905181019061075e9190616d92565b9050610780604080516060810182526000602082018181529282015290815290565b815181516001600160a01b039182169052610220909201518151921660209092019190915251919050565b6107b76000600c6118e1565b90565b60408051606081018252600080825260208201819052918101919091526107e082611907565b92915050565b60006107f0615772565b60208101805151600290525151606001516001600160a01b038416905261081561578c565b61081f82826119d9565b604001519392505050565b6000600360005414156108e2576000600280546108469061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546108729061690e565b80156108bf5780601f10610894576101008083540402835291602001916108bf565b820191906000526020600020905b8154815290600101906020018083116108a257829003601f168201915b50505050508060200190518101906108d79190616d92565b610100015192915050565b6107b7600060086118e1565b6040805180820190915260008082526020820152600360005414156109f75760006002805461091c9061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546109489061690e565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b50505050508060200190518101906109ad9190616d92565b90506109cf604080516060810182526000602082018181529282015290815290565b61020082015181515260209182015181516001600160a01b0390911692019190915251919050565b6107b76000600b6118e1565b6000610a0d615772565b6020818101805151600090528051518201516001600160a01b038881169091528151518301519087169083015251510151604001839052610a4c61578c565b610a5682826119d9565b519150505b9392505050565b610a8660405180606001604052806000815260200160008152602001600081525090565b60036000541415610c1657600060028054610aa09061690e565b80601f0160208091040260200160405190810160405280929190818152602001828054610acc9061690e565b8015610b195780601f10610aee57610100808354040283529160200191610b19565b820191906000526020600020905b815481529060010190602001808311610afc57829003601f168201915b5050505050806020019051810190610b319190616d92565b9050610b5a60408051608081018252600060208201818152928201819052606082015290815290565b6001610b6585614b9d565b516001811115610b7757610b7761645e565b14610b83576000610b91565b610b8c84614b9d565b604001515b8151526001610b9f85614c2a565b516001811115610bb157610bb161645e565b14610bbd576000610bcb565b610bc684614c2a565b604001515b8151602001526001610bdc85614cb7565b516001811115610bee57610bee61645e565b14610bfa576000610c08565b610c0384614cb7565b604001515b815160400152519392505050565b610c226000600a6118e1565b919050565b60408051606081018252600080825260208201819052918101919091526107e082614d44565b610c55615801565b60036000541415610d2657600060028054610c6f9061690e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9b9061690e565b8015610ce85780601f10610cbd57610100808354040283529160200191610ce8565b820191906000526020600020905b815481529060010190602001808311610ccb57829003601f168201915b5050505050806020019051810190610d009190616d92565b9050610d0a615835565b6101808201518151526101a09091015181516020015251919050565b6107b7600060106118e1565b610d3a615848565b610d42615772565b6020810180515160039052515160800151839052610d5e61578c565b610d6882826119d9565b606001519392505050565b60408051606081018252600080825260208201819052918101919091526107e082614e0d565b610da161588a565b6107e082614e9a565b600060036000541415610e8b57600060028054610dc69061690e565b80601f0160208091040260200160405190810160405280929190818152602001828054610df29061690e565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b5050505050806020019051810190610e579190616d92565b90506001610e6484614d44565b516001811115610e7657610e7661645e565b14610e82576000610a5b565b61081f83614d44565b610c226000600f6118e1565b6000610ea1615772565b6020810180515160019052515160400151839052610ebd61578c565b610ec782826119d9565b602001519392505050565b6000610edc615772565b602081018051516009905251516101400151839052610ef961578c565b610f0382826119d9565b61012001519392505050565b610f176158a9565b60036000541415610fcd57600060028054610f319061690e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5d9061690e565b8015610faa5780601f10610f7f57610100808354040283529160200191610faa565b820191906000526020600020905b815481529060010190602001808311610f8d57829003601f168201915b5050505050806020019051810190610fc29190616d92565b610120015192915050565b6107b76000600e6118e1565b604080518082019091526000808252602082015260036000541415611139576000600280546110079061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546110339061690e565b80156110805780601f1061105557610100808354040283529160200191611080565b820191906000526020600020905b81548152906001019060200180831161106357829003601f168201915b50505050508060200190518101906110989190616d92565b90506110ba604080516060810182526000602082018181529282015290815290565b60016110c585614e0d565b5160018111156110d7576110d761645e565b146110e35760006110f1565b6110ec84614e0d565b604001515b81515260016110ff85614f76565b5160018111156111115761111161645e565b1461111d57600061112b565b61112684614f76565b604001515b815160200152519392505050565b610c22600060076118e1565b600061114f615772565b602081015151600b905261116161578c565b61116b82826119d9565b610160015192915050565b6000611180615772565b6020810151516004905261119261578c565b61119c82826119d9565b6080015192915050565b6111ae61578c565b6111c66111c036849003840184616f3a565b82615003565b5050565b60006111d4615772565b6020810180515160059052515160c001516001600160a01b03841690526111f961578c565b61120382826119d9565b60a001519392505050565b60408051606081018252600080825260208201819052918101919091526107e082614b9d565b600061123e615772565b60208101805151600c905251516101a001516001600160a01b038416905261126461578c565b61126e82826119d9565b61018001519392505050565b6000611284615772565b602081015151600a905261129661578c565b6112a082826119d9565b610140015192915050565b6000606060005460028080546112c09061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546112ec9061690e565b80156113395780601f1061130e57610100808354040283529160200191611339565b820191906000526020600020905b81548152906001019060200180831161131c57829003601f168201915b50505050509050915091509091565b600060036000541415611463576000600280546113649061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546113909061690e565b80156113dd5780601f106113b2576101008083540402835291602001916113dd565b820191906000526020600020905b8154815290600101906020018083116113c057829003601f168201915b50505050508060200190518101906113f59190616d92565b6040805160208101909152600081529091506000611412856151ac565b5160018111156114245761142461645e565b1415611433576000815261145b565b600161143e856151ac565b5160018111156114505761145061645e565b141561145b57600181525b519392505050565b610c22600060116118e1565b60408051606081018252600080825260208201819052918101919091526107e082614c2a565b61149d615848565b6114a5615772565b602081810180515160079052805151610100908101518790529051510151018390526114cf61578c565b6114d982826119d9565b60e00151949350505050565b60006114ef615772565b6020810151516006905261150161578c565b61150b82826119d9565b60c0015192915050565b60408051606081018252600080825260208201819052918101919091526107e082614f76565b6115436158dd565b600360005414156115fe5760006002805461155d9061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546115899061690e565b80156115d65780601f106115ab576101008083540402835291602001916115d6565b820191906000526020600020905b8154815290600101906020018083116115b957829003601f168201915b50505050508060200190518101906115ee9190616d92565b90506115fc600060126118e1565b505b6107b7600060126118e1565b61162e60405180606001604052806000815260200160008152602001600081525090565b60036000541415611727576000600280546116489061690e565b80601f01602080910402602001604051908101604052809291908181526020018280546116749061690e565b80156116c15780601f10611696576101008083540402835291602001916116c1565b820191906000526020600020905b8154815290600101906020018083116116a457829003601f168201915b50505050508060200190518101906116d99190616d92565b905061170260408051608081018252600060208201818152928201819052606082015290815290565b60a082015181515260c082015181516020015260e09091015181516040015251919050565b6107b7600060096118e1565b60408051606081018252600080825260208201819052918101919091526107e0826151ac565b60408051606081018252600080825260208201819052918101919091526107e082614cb7565b6000611789615772565b6020810180515160089052515161012001518390526117a661578c565b6117b082826119d9565b61010001519392505050565b6117c461578c565b6111c66117d6368490038401846170b4565b826119d9565b6117e4615848565b600360005414156118d9576000600280546117fe9061690e565b80601f016020809104026020016040519081016040528092919081815260200182805461182a9061690e565b80156118775780601f1061184c57610100808354040283529160200191611877565b820191906000526020600020905b81548152906001019060200180831161185a57829003601f168201915b505050505080602001905181019061188f9190616d92565b90506118996158fc565b6102608201518151526102808201518151602001526102a08201518151604001526102c08201518151606001526102e09091015181516080015251919050565b6107b76000600d5b816111c65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156119535761195361645e565b14156119ca576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156119945761199461645e565b60018111156119a5576119a561645e565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6119e960036000541460496118e1565b8151611a049015806119fd57508251600154145b604a6118e1565b600080805560028054611a169061690e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a429061690e565b8015611a8f5780601f10611a6457610100808354040283529160200191611a8f565b820191906000526020600020905b815481529060010190602001808311611a7257829003601f168201915b5050505050806020019051810190611aa79190616d92565b9050611ab161590f565b611ac06000194310604b6118e1565b7f90f78d2789a6109e9975643a13ff35a09a55d33e4894868496af77e17e5e13333385604051611af1929190617260565b60405180910390a1600060208501515151600c811115611b1357611b1361645e565b1415612435576020808501515101518152611b30341560146118e1565b6101e082015160208083018051929092526101c0840180518201518351830152516040908101519251921515920191909152820151611b7d90611b769033906000615239565b60156118e1565b8151815151611bbe916001600160a01b03918216911614611bb4576102208301518251516001600160a01b03908116911614611bb7565b60015b60166118e1565b805160400151611bd190151560176118e1565b80516020908101516001600160a01b039081166000908152600b835260408082208054600160ff199182168117909255865186015185168452828420805462ff000019169055865186015190941683526004855291819020805490931682179092558351918201519190920151909190611c4a90614e0d565b516001811115611c5c57611c5c61645e565b14611c68576000611c7c565b815160200151611c7790614e0d565b604001515b611c8691906173e6565b81516020908101516001600160a01b0390811660009081526004835260408082206001908101959095558551840151909216815260078352819020805460ff191684179055835190810151910151909190611ce090611907565b516001811115611cf257611cf261645e565b14611cfe576000611d12565b815160200151611d0d90611907565b604001515b611d1c91906173e6565b81516020908101516001600160a01b03166000908152600782526040808220600190810194909455808501805183905280518401839052805190910182905280516060018290528051608001829052805160a001829052805160c001829052805160e00182905280516101000182905280516101200182905280516101400182905280516101600182905280516101800182905280516101a00182905280516101c00182905280516101e00182905280516102000182905280516102200182905280516102400182905280516102600182905280516102800182905280516102a00182905280516102c00182905280516102e00182905280516103000182905280516103200182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c600152825101516120c990614e9a565b5160018111156120db576120db61645e565b146120ea5780604001516120fe565b8051602001516120f990614e9a565b604001515b60608201526080810180516000908190528151602001819052905160c08301525b60648110156121f2578160600151816064811061213e5761213e6173fe565b602002015160e0830152600060c08301515160018111156121615761216161645e565b141561217457600161010083015261219c565b600160c083015151600181111561218d5761218d61645e565b141561219c5760006101008301525b6101208201805160019052516040018190526101008201516121bf5760006121c6565b60e0820151155b6121d4578160c001516121db565b8161012001515b60c0830152806121ea81617414565b91505061211f565b5060c081015160a0820190815281516020908101516001600160a01b03166000908152600c90915260409020805460ff19166001908117909155606083015191515161226b9291908181111561224a5761224a61645e565b14612256576000612260565b8260a00151604001515b83516040015161524f565b81516020908101516001600160a01b03166000908152600c9091526040902061229b916001909101906064615f0c565b50604051600181527f0aaa27e9e1496552bfbbe1a89d5784659ca271f5fe4503e92cefa18d25c43a7d9060200160405180910390a160018352610220820151610140820180516001600160a01b0390921690915260608084018051602090810151845190910152610160850151835160409081019190915281518301518451909301929092525160809081015183519091015260e080850151835160a09081019190915261012080870151855160c09081019190915261024088015186519094019390935261010080880151865190151591015291860151935190910192909252825101519083015161238e91906173e6565b610140808301805190910191909152606083018051610160908101518351909101525161018090810151915101526123c4615f4a565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015261014083015181830180519190915251439082015260808401519083015161241d91906000906152c3565b60208201516040015261242f8161532b565b50614b97565b600160208501515151600c81111561244f5761244f61645e565b14156126475760208401515160400151610160820152612471341560186118e1565b6101e082015161018082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516124c2906124bb9033906000615239565b60196118e1565b610180828101516101a08301805191909152610160808401515182516020908101919091526102208601516101c0860180516001600160a01b03909216909152606080880180518401518351850152945182516040908101919091528551820151835190920191909152845160809081015183519091015260e080890151835160a090810191909152610120808b0151855160c0908101919091526102408c0151865190940193909352610100808c01518651901515910152918a0151845190920191909152880151825161014001528451840151825190940193909352925184015192519093019190915251600181527ff319b6a963838f48712b3462594f8de012cce05c03b301d8dbfd308904910625910160405180910390a1600160208401526125ed615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526101c08301518183018051919091525143910152608083015161018083015161241d91906000906152c3565b600260208501515151600c8111156126615761266161645e565b141561290757602084015151606001516101e08201526126833415601a6118e1565b6101e082015161020082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516126d4906126cd9033906000615239565b601b6118e1565b8151612712906001600160a01b03163314612708578261022001516001600160a01b0316336001600160a01b03161461270b565b60015b601c6118e1565b6101e081018051516001600160a01b039081166000908152600b6020526040808220805460ff19166001179055925151909116815220805462ff000019169055606082015161018001516018111561277f5760018260600151610180015161277a91906173e6565b612782565b60005b61022080830191825283015161024080840180516001600160a01b0390931690925260608086018051602090810151855190910152610160808801518551604001528151830151855190930192909252805160809081015185519091015260e080880151855160a090810191909152610120808a0151875160c090810191909152958a0151875190930192909252610100808a0151875190151591015293880151855190910152918601519251610140019290925251015190516101e08301515161284e9291906154de565b61024082018051610160019190915261022082015190516101800152604051600181527f9857662781bf282338463067553191c95d899ea4072523419e2317ae219101909060200160405180910390a1600160408401526128ad615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526102408301518183018051919091525143910152608083015161020083015161241d91906000906152c3565b600360208501515151600c8111156129215761292161645e565b141561341f576020840151516080015161026082018190525161028083015161294a919061742f565b61028082015261295c3415601d6118e1565b806102800151826101e0015161297291906173e6565b6102a082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516102808201516129c2916129bb91339190615239565b601e6118e1565b610260810151516129d6901515601f6118e1565b6102c0810180516430b1ba34bb60d91b9052516040805191516001600160d81b0319166020830152612a56910160408051808303601f1901815282825280516020918201206102c0870151516001600160d81b0319169184019190915291016040516020818303038152906040528051906020012060001c1460206118e1565b612a7281610260015160000151836102600151101560216118e1565b6000612a7d336151ac565b516001811115612a8f57612a8f61645e565b1415612aa25760006102e0820152612ace565b6001612aad336151ac565b516001811115612abf57612abf61645e565b1415612ace5760016102e08201525b612ade816102e0015160226118e1565b610260810151516103008201908152336000818152600460205260409020805460ff1916600190811790915591519190612b1790614e0d565b516001811115612b2957612b2961645e565b14612b35576000612b43565b612b3e33614e0d565b604001515b612b4d91906173e6565b33600081815260046020908152604080832060019081019590955560079091529020805460ff1916831790556103008301519190612b8a90611907565b516001811115612b9c57612b9c61645e565b14612ba8576000612bb6565b612bb133611907565b604001515b612bc091906173e6565b33600081815260076020908152604080832060019081019590955561032086810180518590528051909301849052825190910183905281516060018390528151608001839052815160a001839052815160c001839052815160e00183905281516101000183905281516101200183905281516101400183905281516101600183905281516101800183905281516101a00183905281516101c00183905281516101e00183905281516102000183905281516102200183905281516102400183905281516102600183905281516102800183905281516102a00183905281516102c00183905281516102e00183905281516103000183905281510182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c600152612f5d90614e9a565b516001811115612f6f57612f6f61645e565b14612f7f57806103200151612f8d565b612f8833614e9a565b604001515b61034082015261036081018051600090819052815160200181905290516103a08301525b606481101561308b578161034001518160648110612fd157612fd16173fe565b60200201516103c083015260006103a0830151516001811115612ff657612ff661645e565b14156130095760016103e0830152613032565b60016103a08301515160018111156130235761302361645e565b14156130325760006103e08301525b6104008201805160019052516040018190526103e082015161305557600061305d565b6103c0820151155b61306c57816103a00151613073565b8161040001515b6103a08301528061308381617414565b915050612fb1565b506103a08101516103808201908152336000908152600c60205260409020805460ff191660019081179091556103408301519151516130f9929190818111156130d6576130d661645e565b146130e25760006130ed565b826103800151604001515b6102608401515161524f565b336000908152600c60205260409020613119916001909101906064615f0c565b50610260808201515190830151613130919061744e565b610420820152610260810151516102a083015161314d91906173e6565b6104408201526102808201516102608201515161316a919061742f565b826102e0015161317a91906173e6565b816104600181815250508061046001518161048001516000018181525050816102800151816104800151602001818152505080610420015181610480015160400181815250508061044001518161048001516060018181525050816102c0015181610480015160800181905250816102200151816104a00151600001906001600160a01b031690816001600160a01b031681525050816060015160200151816104a001516020018181525050816101600151816104a0015160400181905250816060015160600151816104a0015160600181905250816060015160800151816104a0015160800181815250508160e00151816104a0015160a0018181525050816101200151816104a0015160c00181905250806104800151816104a0015160e00181905250816101000151816104a001516101000190151590811515815250508160c00151816104a001516101200181815250508160a00151816104a0015161014001818152505081606001516101600151816104a00151610160018190525081606001516101800151816104a00151610180018181525050806104200151816104c001516000018181525050816102800151816104c001516020018181525050806104400151816104c001516040018181525050816102c00151816104c0015160600181905250806104600151816104c0015160800181815250507fd413a3c172b45568df50947f6ac82e79edc66fd02d804c99b495d8fa1a32fe98816104c001516040516133aa9190616582565b60405180910390a16104c081015160608401526133c5615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526104a0830151818301805191909152514391015260808301516102a083015161241d91906000906152c3565b600460208501515151600c8111156134395761343961645e565b14156137e55761344b341560236118e1565b6101e08201516104e082018051919091526101c0830180516020908101518351909101525160409081015182519015159101526080830151905161349291906000906152c3565b8161050001819052506134b56134ae3384602001516000615239565b60246118e1565b60006134c0336151ac565b5160018111156134d2576134d261645e565b14156134e5576000610520820152613511565b60016134f0336151ac565b5160018111156135025761350261645e565b14156135115760016105208201525b61352181610520015160256118e1565b610500810151515161353690151560266118e1565b61354860008360a001511160276118e1565b600161355333611907565b5160018111156135655761356561645e565b1461357157600061357f565b61357a33611907565b604001515b610540820181905260a083015161359991111560286118e1565b6135ac60008261054001511160296118e1565b8160a001518260600151602001518261054001516135ca919061742f565b6135d49190617465565b6105608201819052610580820181905261050082015151516135f9911115602a6118e1565b6105808101516105008201515151613611919061744e565b6105a082018051919091526105008201805151602090810151835182015290515160409081015192519215159201919091528201516105808201516136589190339061556e565b336000818152600860205260409020805460ff191660019081179091556105608301519161368590614c2a565b5160018111156136975761369761645e565b146136a35760006136b1565b6136ac33614c2a565b604001515b6136bb91906173e6565b33600081815260086020908152604080832060019081019590955560099091529020805460ff19168317905581906136f290614cb7565b5160018111156137045761370461645e565b1461371057600061371e565b61371933614cb7565b604001515b61372891906173e6565b336000908152600960209081526040918290206001019290925561056083015190519081527f2ad0ff32e9c9cc223430c8ae584816e46b3199eb0663a654b50461c62f6f9100910160405180910390a1610560810151608084015261378b615f4a565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152606084015181830180519190915251439101526105008201516105a083015161241d91906000906152c3565b600560208501515151600c8111156137ff576137ff61645e565b1415613a115760208401515160c001516105c08201526138213415602b6118e1565b6101e08201516105e082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516138729061386b9033906000615239565b602c6118e1565b81516138b0906001600160a01b031633146138a6578261022001516001600160a01b0316336001600160a01b0316146138a9565b60015b602d6118e1565b604051600181527f08718d7d5b8dbe9c4e277763b96d4b781882bcfdf70e7080a8a500c4e2bca7ae9060200160405180910390a1600160a0808501919091526105c082015151610600830180516001600160a01b0390921690915260608085018051602090810151845190910152610160808701518451604001528151830151845190930192909252805160809081015184519091015260e080870151845186015261012080880151855160c0908101919091526102408901518651909301929092526101008089015186519015159101529087015184519091015292850151825161014001528251810151825190910152905161018090810151915101526139b7615f4a565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152610600830151818301805191909152514391015260808301516105e083015161241d91906000906152c3565b600660208501515151600c811115613a2b57613a2b61645e565b1415613d1b57613a3d3415602e6118e1565b6101e082015161062082018051919091526101c08301805160209081015183519091015251604090810151825190151591015260808301519051613a8491906000906152c3565b816106400181905250613aa7613aa03384602001516000615239565b602f6118e1565b8151613ae5906001600160a01b03163314613adb578261022001516001600160a01b0316336001600160a01b031614613ade565b60015b60306118e1565b613af86000836102e001511160316118e1565b6102e08201516106408201515151613b1391111560326118e1565b6102e08201516106408201515151613b2b919061744e565b61066082018051919091526106408201805151602090810151835182015290515160409081015192519215159201919091528201516102e0830151613b729190339061556e565b6106808101805160009052610280830151815160209081019190915261026084015182516040908101919091526102a085015183516060908101919091526102c086015184516080908101919091526102208701516106a0870180516001600160a01b0390921690915282880180518601518251870152610160808a015183518701528151850151835190950194909452805183015182519093019290925260e080890151825160a090810191909152610120808b0151845160c0908101919091529851845190930192909252610100808b0151845190151591015296890151825190910152948701518551610140015280518201518551909201919091525161018090810151935101929092529051600181527f2c646c4f44f74e5c2b2a5af9ab3304dd9989c0eafe6e5fc502b6fc32652e73a5910160405180910390a1600160c0840152613cc0615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526106a0830151818301805191909152514391015261064082015161066083015161241d91906000906152c3565b600760208501515151600c811115613d3557613d3561645e565b14156140ea5760208401515161010001516106c0820152613d58341560336118e1565b6101e08201516106e082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151613da990613da29033906000615239565b60346118e1565b8151613de7906001600160a01b03163314613ddd578261022001516001600160a01b0316336001600160a01b031614613de0565b60015b60356118e1565b6106c081015151613dfb90151560366118e1565b613e126000826106c00151602001511160376118e1565b6430b1ba34bb60d91b816107000151600001906001600160d81b03191690816001600160d81b03191681525050816102e001518161072001516000018181525050806106c00151602001518161072001516020018181525050806106c00151600001518161072001516040018181525050816102a00151816107200151606001818152505080610700015181610720015160800181905250816102200151816107400151600001906001600160a01b031690816001600160a01b0316815250508160600151602001518161074001516020018181525050816101600151816107400151604001819052508160600151606001518161074001516060018190525081606001516080015181610740015160800181815250508160e0015181610740015160a001818152505081610120015181610740015160c0018190525080610720015181610740015160e001819052508161010001518161074001516101000190151590811515815250508160c001518161074001516101200181815250508160a0015181610740015161014001818152505081606001516101600151816107400151610160018190525081606001516101800151816107400151610180018181525050806106c00151600001518161076001516000018181525050806106c00151602001518161076001516020018181525050816102a00151816107600151604001818152505080610700015181610760015160600181905250816102e0015181610760015160800181815250507f991dc4e302987d360c9a82a915c027d83392ee4e419f93cc4659cf5d71c02b9b8161076001516040516140759190616582565b60405180910390a161076081015160e0840152614090615f4a565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152610740830151818301805191909152514391015260808301516106e083015161241d91906000906152c3565b600860208501515151600c8111156141045761410461645e565b14156143745760208401515161012001516107808201819052516107a0820152614130341560386118e1565b806107a00151826101e0015161414691906173e6565b6107c082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516107a08201516141969161418f91339190615239565b60396118e1565b81516141d4906001600160a01b031633146141ca578261022001516001600160a01b0316336001600160a01b0316146141cd565b60015b603a6118e1565b6141e76000826107a0015111603b6118e1565b6102208201516107e0820180516001600160a01b039092169091526107808201515181516020015261016083015181516040015260608084018051820151835190920191909152516080908101519151015260e082015161424a906001906173e6565b6107e08201805160a00191909152610120830151815160c090810191909152610240840151825160e00152610100808501519251921515920191909152610780820151519083015161429c91906173e6565b6107e082018051610120019190915260a08301518151610140015260608301805161016090810151835190910152516101809081015191510152604051600181527fc6cb1a73ef8294400d54929a396e00392286faf2dd62972de6f58f1af07cc44c9060200160405180910390a1600161010084015261431a615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526107e0830151818301805191909152514391015260808301516107c083015161241d91906000906152c3565b600960208501515151600c81111561438e5761438e61645e565b14156145e45760208401515161014001516108008201526143b13415603c6118e1565b6101e082015161082082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151614402906143fb9033906000615239565b603d6118e1565b614415600083610140015114603e6118e1565b8151614453906001600160a01b03163314614449578261022001516001600160a01b0316336001600160a01b03161461444c565b60015b603f6118e1565b6108008101515161084082015152610140820151614473906001906173e6565b61084082018051602090810192909252805143604091820152610220850151610860850180516001600160a01b039092169091526060808701805186015183518701526101608089015184518601528151830151845190930192909252805160809081015184519091015260e080890151845160a0908101919091529551845160c0908101919091526102408a0151855190920191909152610100808a0151855190151591015288015183516101200152938701518251610140015283518101518251909101529151610180908101519251019190915251600181527f18fa1bff5b98245ea6da96949a82e8ad3b3f00dbc23c4a6a691e2ab89a36e81b910160405180910390a1600161012084015261458a615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526108608301518183018051919091525143910152608083015161082083015161241d91906000906152c3565b600a60208501515151600c8111156145fe576145fe61645e565b14156148cc57614610341560406118e1565b6101e082015161088082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516146619061465a9033906000615239565b60416118e1565b815161469f906001600160a01b03163314614695578261022001516001600160a01b0316336001600160a01b031614614698565b60015b60426118e1565b6108a0810180516430b1ba34bb60d91b9052516040805191516001600160d81b031916602083015261471f910160408051808303601f1901815282825280516020918201206102c0870151516001600160d81b0319169184019190915291016040516020818303038152906040528051906020012060001c1460436118e1565b6102e08201516108c08201805191909152610280830151815160209081019190915261026084015182516040908101919091526102a085015183516060908101919091528186015184516080908101919091526102208701516108e0870180516001600160a01b0390921690915282880180518601518251870152610160808a015183518701528151850151835190950194909452805183015182519093019290925260e080890151825160a090810191909152610120808b0151845160c0908101919091529851845190930192909252610100808b0151845190151591015296890151825190910152948701518551610140015280518201518551909201919091525161018090810151935101929092529051600181527ff189d6c127474d15567fc6a99c5daec2bd94a3f7dbc5dae4a39e88e66997ccba910160405180910390a16001610140840152614872615f4a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526108e08301518183018051919091525143910152608083015161088083015161241d91906000906152c3565b600b60208501515151600c8111156148e6576148e661645e565b1415614a05576148f8341560446118e1565b6101e082015161090082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151614949906149429033906000615239565b60456118e1565b336000908152600a6020908152604091829020805462ff00ff1916620100011790559051600181527f663c4a0721cb51dd78406c7e75a0bdb876afcd1b853281db1b16d78fc2726cb3910160405180910390a160016101608401526149ac615f4a565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152608083015161090083015161241d91906000906152c3565b600c60208501515151600c811115614a1f57614a1f61645e565b1415614b97576020840151516101a00151610920820152614a42341560466118e1565b6101e082015161094082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151614a9390614a8c9033906000615239565b60476118e1565b8151614ad1906001600160a01b03163314614ac7578261022001516001600160a01b0316336001600160a01b031614614aca565b60015b60486118e1565b610920810151516001600160a01b03166000908152600b6020908152604091829020805462ffffff191690559051600181527f9aa8da4dc5f6c60b021badc55ed14d3a9e1dd35ff4c9e390359407e30075b0ff910160405180910390a16001610180840152614b3e615f4a565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152608083015161094083015161241d91906000906152c3565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115614be957614be961645e565b14156119ca576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156119945761199461645e565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115614c7657614c7661645e565b14156119ca576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156119945761199461645e565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115614d0357614d0361645e565b14156119ca576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff1660018111156119945761199461645e565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115614d9057614d9061645e565b14156119ca576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115614dd157614dd161645e565b6001811115614de257614de261645e565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115614e5957614e5961645e565b14156119ca576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156119945761199461645e565b614ea261588a565b60016001600160a01b0383166000908152600c602052604090205460ff166001811115614ed157614ed161645e565b14156119ca576001600160a01b0382166000908152600c6020526040908190208151606081019092528054829060ff166001811115614f1257614f1261645e565b6001811115614f2357614f2361645e565b81528154610100900460ff161515602082015260408051610c808101808352919092019190600184019060649082845b815481526020019060010190808311614f53575050505050815250509050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115614fc257614fc261645e565b14156119ca576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156119945761199461645e565b615013600360005414604e6118e1565b815161502e90158061502757508251600154145b604f6118e1565b6000808055600280546150409061690e565b80601f016020809104026020016040519081016040528092919081815260200182805461506c9061690e565b80156150b95780601f1061508e576101008083540402835291602001916150b9565b820191906000526020600020905b81548152906001019060200180831161509c57829003601f168201915b50505050508060200190518101906150d19190616d92565b90506150e360001943101560506118e1565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a16151363415604c6118e1565b805161514e906001600160a01b03163314604d6118e1565b615156615f4a565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060840151828401805191909152805143930192909252608084015191510152614b978161532b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600b602052604090205460ff1660018111156151f8576151f861645e565b14156119ca576001600160a01b0382166000908152600b6020526040908190208151606081019092528054829060ff166001811115614dd157614dd161645e565b600061524783853085615587565b949350505050565b615257615f6a565b60005b60648110156152a357848160648110615275576152756173fe565b602002015182826064811061528c5761528c6173fe565b60200201528061529b81617414565b91505061525a565b50818184606481106152b7576152b76173fe565b60200201529392505050565b6152cb615f89565b60005b6001811015615317578481600181106152e9576152e96173fe565b6020020151828260018110615300576153006173fe565b60200201528061530f81617414565b9150506152ce565b50818184600181106152b7576152b76173fe565b604080516020808201835260008252830151909101515151815261534d615fd4565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515160608087019190915281518301516080808801919091528251516101409081015160a0808a01919091528451516101209081015160c0808c01919091528651519092015160e0808c0191909152865151610100908101511515908c0152865151830151918b01919091528551519091015187015191890191909152835151850151610160890152835151850151516101808901528351518501518601516101a08901528351850151516101c0890152835185015151516101e0890152885161020089015283515151909616610220880152825151860151610240880152825151860151840151610260880152825151860151850151610280880152825151860151909101516102a087015281515185015101516102c0860152515190920151516102e084015260036000554360015590516154ba91839101617600565b60405160208183030381529060405260029080519060200190614b97929190616108565b6154e66158dd565b60005b601981101561554057848160198110615504576155046173fe565b602002015182826019811061551b5761551b6173fe565b6001600160a01b0390921660209290920201528061553881617414565b9150506154e9565b5081818460198110615554576155546173fe565b6001600160a01b0390921660209290920201529392505050565b615579838383615661565b61558257600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916155ee916177be565b60006040518083038185875af1925050503d806000811461562b576040519150601f19603f3d011682016040523d82523d6000602084013e615630565b606091505b509150915061564182826001615732565b508080602001905181019061565691906177da565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916156c0916177be565b60006040518083038185875af1925050503d80600081146156fd576040519150601f19603f3d011682016040523d82523d6000602084013e615702565b606091505b509150915061571382826002615732565b508080602001905181019061572891906177da565b9695505050505050565b60608315615741575081610a5b565b8251156157515782518084602001fd5b60405163100960cb60e01b8152600481018390526024016118fe565b905290565b60405180604001604052806000815260200161576d61617b565b604080516101a08101825260008082526020820181905291810191909152606081016157b6615848565b81526000602082018190526040820181905260608201526080016157d8615848565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b604080516060810182526000918101918252908190815260200161576d604080518082019091526000808252602082015290565b604051806020016040528061576d615801565b6040518060a0016040528060008152602001600081526020016000815260200161587d60408051602081019091526000815290565b8152602001600081525090565b604080516060810182526000808252602082015290810161576d615f6a565b6040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b6040518061032001604052806019906020820280368337509192915050565b604051806020016040528061576d615848565b604080516109c0810182526000610960820181815261098083018290526109a08301829052825282516060810184528181526020808201839052818501929092529082015290810161595f615f6a565b815260200161596c615f6a565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c082015260e0016159f961618e565b8152602001615a1e604080516060810182526000602082018181529282015290815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615a4b615801565b8152602001615a5861618e565b8152602001615a7260408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001615aa661618e565b8152602001615ac16040518060200160405280600081525090565b815260200160008152602001615af3604051806060016040528060008152602001600081526020016000151581525090565b8152602001615b0d60408051602081019091526000815290565b81526000602082018190526040820152606001615b28615f6a565b8152602001615b35615f6a565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c0909101908152602001600081526020016000815260200160008152602001615bda616207565b8152602001615be761618e565b8152602001615bf4615848565b81526040805160608101825260008082526020828101829052928201529101908152602001615c21615f89565b8152602001600015158152602001600081526020016000815260200160008152602001615c6a604051806060016040528060008152602001600081526020016000151581525090565b8152602001615c8460408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615cb161618e565b81526040805160608101825260008082526020828101829052928201529101908152602001615cde615f89565b81526040805160608101825260008082526020828101829052928201529101908152602001615d0b616207565b8152602001615d1861618e565b8152602001615d3a604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001615d7460408051602081019091526000815290565b8152602001615d81616207565b8152602001615d8e61618e565b8152602001615d9b615848565b8152602001615db66040518060200160405280600081525090565b815260200160008152602001615de8604051806060016040528060008152602001600081526020016000151581525090565b8152602001615df561618e565b8152602001615e2160408051608081018252600060208201818152928201819052606082015290815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615e4e6158a9565b8152602001615e5b61618e565b81526040805160608101825260008082526020828101829052928201529101908152602001615e9560408051602081019091526000815290565b8152602001615ea2616207565b8152602001615eaf61618e565b81526040805160608101825260008082526020828101829052928201529101908152602001615ee960408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b8260648101928215615f3a579160200282015b82811115615f3a578251825591602001919060010190615f1f565b50615f46929150616243565b5090565b6040518060400160405280615f5d616258565b815260200161576d616284565b60405180610c8001604052806064906020820280368337509192915050565b60405180602001604052806001905b615fbe604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081615f985790505090565b60408051610300810182526000808252602082015290810161600160408051602081019091526000815290565b815260200161600e61618e565b815260200161601b615f89565b81526020016000815260200160008152602001600081526020016000151581526020016160466158a9565b81526020016000815260200161605a615801565b815260408051602081810190925260008152910190815260200161608e604080518082019091526000808252602082015290565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160006001600160a01b031681526020016160d9616207565b815260200160008152602001600081526020016000815260200161587d60408051602081019091526000815290565b8280546161149061690e565b90600052602060002090601f0160209004810192826161365760008555615f3a565b82601f1061614f57805160ff1916838001178555615f3a565b82800160010185558215615f3a5791820182811115615f3a578251825591602001919060010190615f1f565b604051806020016040528061576d6162ab565b604080516101a081018252600080825260208201529081016161ae615801565b81526020016161bb6163ef565b815260200160008152602001600081526020016161d66158a9565b81526020016161e3616207565b8152602001600015158152602001600081526020016000815260200161587d6158dd565b6040518060a001604052806000815260200160008152602001600081526020016000815260200161576d60408051602081019091526000815290565b5b80821115615f465760008155600101616244565b604080516060810182526000808252602082015290810161576d60408051602081019091526000815290565b604051806060016040528061629761618e565b81526020016000815260200161576d615f89565b604080516101c08101909152806000815260408051606081018252600080825260208281018290529282015291019081526020016162ff604080516060810182526000602082018181529282015290815290565b815260200161631960408051602081019091526000815290565b81526020016163346040518060200160405280600081525090565b81526000602082015260400161635560408051602081019091526000815290565b8152602001600015158152602001616380604051806040016040528060008152602001600081525090565b815260200161639b6040518060200160405280600081525090565b81526020016163c760408051608081018252600060208201818152928201819052606082015290815290565b8152600060208201819052604082015260600161576d60408051602081019091526000815290565b60405180610c8001604052806064905b60408051808201909152600080825260208201528152602001906001900390816163ff5790505090565b6001600160a01b038116811461643e57600080fd5b50565b60006020828403121561645357600080fd5b8135610a5b81616429565b634e487b7160e01b600052602160045260246000fd5b6002811061643e5761643e61645e565b8151606082019061649481616474565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156164c957600080fd5b83356164d481616429565b925060208401356164e481616429565b929592945050506040919091013590565b8151606082019061650581616474565b8083525060208301511515602083015260408301511515604083015292915050565b63ffffffff60e01b81515116825260208101516155826020840182805182526020908101516001600160e01b031916910152565b606081016107e08284616527565b60006020828403121561657b57600080fd5b5035919050565b815181526020808301519082015260408083015190820152606080830151516001600160d81b031916908201526080918201519181019190915260a00190565b8151610cc08201906165d381616474565b825260208381015115158184015260408085015190840160005b606481101561660a578251825291830191908301906001016165ed565b5050505092915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561664d5761664d616614565b60405290565b6040516060810167ffffffffffffffff8111828210171561664d5761664d616614565b6040516020810167ffffffffffffffff8111828210171561664d5761664d616614565b6040516101a0810167ffffffffffffffff8111828210171561664d5761664d616614565b604051610300810167ffffffffffffffff8111828210171561664d5761664d616614565b6040516101c0810167ffffffffffffffff8111828210171561664d5761664d616614565b6001600160e01b03198116811461643e57600080fd5b60006040828403121561672d57600080fd5b61673561662a565b905081358152602082013561674981616705565b602082015292915050565b60006040828403121561676657600080fd5b610a5b838361671b565b60006060828403121561678257600080fd5b61678a616653565b905081358152602082013560208201526040820135604082015292915050565b6000606082840312156167bc57600080fd5b610a5b8383616770565b6167e58282518051825260208082015190830152604090810151910152565b6020810151606083015260400151608090910152565b60a081016107e082846167c6565b8151815260208083015190820152604081016107e0565b60006040828403121561683257600080fd5b50919050565b60005b8381101561685357818101518382015260200161683b565b83811115614b975750506000910152565b8281526040602082015260008251806040840152616889816060850160208701616838565b601f01601f1916919091016060019392505050565b600080604083850312156168b157600080fd5b50508035926020909101359150565b8060005b6019811015614b975781516001600160a01b03168452602093840193909101906001016168c4565b61032081016107e082846168c0565b60006102a0828403121561683257600080fd5b600181811c9082168061692257607f821691505b6020821081141561683257634e487b7160e01b600052602260045260246000fd5b8051610c2281616429565b60006020828403121561696057600080fd5b616968616676565b82519091506001600160d81b03198116811461698357600080fd5b815292915050565b60006020828403121561699d57600080fd5b6169a5616676565b9050815161698381616705565b6000604082840312156169c457600080fd5b6169cc61662a565b905081518152602082015161674981616705565b6000606082840312156169f257600080fd5b6169fa61662a565b9050616a06838361698b565b815261674983602084016169b2565b600082601f830112616a2657600080fd5b60408051610c80810181811067ffffffffffffffff82111715616a4b57616a4b616614565b825280611900850186811115616a6057600080fd5b855b81811015616a9f57848189031215616a7a5760008081fd5b616a8261662a565b815181526020808301518183015290845292909201918401616a62565b50919695505050505050565b600081830360a0811215616abe57600080fd5b616ac6616653565b91506060811215616ad657600080fd5b50616adf616653565b82518152602083015160208201526040830151604082015280825250606082015160208201526080820151604082015292915050565b600060a08284031215616b2757600080fd5b60405160a0810181811067ffffffffffffffff82111715616b4a57616b4a616614565b806040525080915082518152602083015160208201526040830151604082015260608301516060820152616b81846080850161694e565b60808201525092915050565b801515811461643e57600080fd5b8051610c2281616b8d565b600082601f830112616bb757600080fd5b60405161032080820182811067ffffffffffffffff82111715616bdc57616bdc616614565b60405283018185821115616bef57600080fd5b845b82811015616c12578051616c0481616429565b825260209182019101616bf1565b509195945050505050565b6000611ec08284031215616c3057600080fd5b616c38616699565b9050616c4382616943565b815260208201516020820152616c5c83604084016169e0565b6040820152616c6e8360a08401616a15565b60608201526119a082015160808201526119c082015160a0820152616c97836119e08401616aab565b60c0820152616caa83611a808401616b15565b60e0820152616cbc611b208301616b9b565b610100820152611b40820151610120820152611b60820151610140820152616ce883611b808401616ba6565b610160820152611ea082015161018082015292915050565b600060608284031215616d1257600080fd5b616d1a616653565b905081518152602082015160208201526040820151616d3881616b8d565b604082015292915050565b600082601f830112616d5457600080fd5b616d5c616676565b80606080850186811115616d6f57600080fd5b855b81811015616a9f57616d838882616d00565b85526020909401938201616d71565b60006123808284031215616da557600080fd5b616dad6166bd565b616db683616943565b8152616dc460208401616943565b6020820152616dd6846040850161694e565b6040820152616de88460608501616c1d565b6060820152616dfb84611f208501616d43565b6080820152611f8083015160a0820152611fa083015160c0820152611fc083015160e0820152616e2e611fe08401616b9b565b610100820152616e42846120008501616aab565b6101208201526120a0830151610140820152616e62846120c085016169e0565b610160820152616e7684612120850161698b565b610180820152616e8a8461214085016169b2565b6101a0820152616e9e846121808501616d00565b6101c08201526121e08301516101e0820152612200830151610200820152616ec96122208401616943565b610220820152616edd846122408501616b15565b6102408201526122e08301516102608201526123008301516102808201526123208301516102a0820152616f1584612340850161694e565b6102c082015261236092909201516102e083015250919050565b8035610c2281616b8d565b600060408284031215616f4c57600080fd5b6040516040810181811067ffffffffffffffff82111715616f6f57616f6f616614565b604052823581526020830135616f8481616b8d565b60208201529392505050565b8035600d8110610c2257600080fd5b600060608284031215616fb157600080fd5b616fb9616653565b90508135616fc681616429565b81526020820135616fd681616429565b806020830152506040820135604082015292915050565b600060408284031215616fff57600080fd5b617007616676565b9050616983838361671b565b60006020828403121561702557600080fd5b61702d616676565b9050813561698381616429565b60006020828403121561704c57600080fd5b617054616676565b9135825250919050565b60006040828403121561707057600080fd5b61707861662a565b9050813581526020820135602082015292915050565b6000606082840312156170a057600080fd5b6170a8616676565b90506169838383616770565b60008183036102a08112156170c857600080fd5b6170d061662a565b8335815261028080601f19840112156170e857600080fd5b6170f0616676565b92506170fa6166e1565b61710660208701616f90565b81526171158760408801616f9f565b60208201526171278760a08801616fed565b60408201526171398760e08801617013565b606082015261010061714d8882890161703a565b6080830152610120617160818901616f2f565b60a08401526101406171748a828b01617013565b60c0850152610160617187818b01616f2f565b60e086015261018061719b8c828d0161705e565b858701526171ad8c6101c08d0161703a565b848701526171bf8c6101e08d0161708e565b838701526171d06102408c01616f2f565b828701526171e16102608c01616f2f565b8187015250505050506171f687838801617013565b6101a082015283525060208101919091529392505050565b600d811061721e5761721e61645e565b9052565b6111c6828251805182526020908101516001600160e01b031916910152565b6111c68282518051825260208082015190830152604090810151910152565b60006102c08201905060018060a01b03841682528251602083015260208301515161728f60408401825161720e565b60208181015180516001600160a01b03908116606087015291810151909116608085015260409081015160a08501528101516172ce60c0850182617222565b5060608101516101006172ec81860183516001600160a01b03169052565b6080830151915061012061730281870184519052565b60a084015192506101406173198188018515159052565b60c0850151935061016061733881890186516001600160a01b03169052565b60e0860151945061018061734f818a018715159052565b9386015194506101a09361736f8986018780518252602090810151910152565b83870151516101e08a015282870151955061738e6102008a0187617241565b90860151151561026089015285015180151561028089015293506173b0915050565b919091015180516001600160a01b03166102a08501529050509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156173f9576173f96173d0565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415617428576174286173d0565b5060010190565b6000816000190483118215151615617449576174496173d0565b500290565b600082821015617460576174606173d0565b500390565b60008261748257634e487b7160e01b600052601260045260246000fd5b500490565b8060005b6064811015614b97576174a984835180518252602090810151910152565b604093909301926020919091019060010161748b565b80518252602080820151908301526040808201519083015260608082015190830152608090810151516001600160d81b031916910152565b80516001600160a01b031682526020810151602083015260408101516175206040840182616527565b50606081015161753360a0840182617487565b5060808101516119a083015260a08101516119c083015260c081015161755d6119e08401826167c6565b5060e0810151617571611a808401826174bf565b506101008101511515611b20830152610120810151611b40830152610140810151611b608301526101608101516175ac611b808401826168c0565b506101800151611ea09190910152565b8060005b6001811015614b97576175ea84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016175c0565b81516001600160a01b031681526123808101602083015161762c60208401826001600160a01b03169052565b5060408301516176496040840182516001600160d81b0319169052565b50606083015161765c60608401826174f7565b506080830151617670611f208401826175bc565b5060a0830151611f8083015260c0830151611fa083015260e0830151611fc08301526101008301511515611fe08301526101208301516176b46120008401826167c6565b506101408301516120a08301526101608301516176d56120c0840182616527565b50610180830151516001600160e01b03199081166121208401526101a084015180516121408501526020908101519091166121608401526101c08401518051612180850152908101516121a08401526040015115156121c08301526101e08301516121e08301526102008301516122008301526102208301516001600160a01b03166122208301526102408301516177716122408401826174bf565b506102608301516122e08301526102808301516123008301526102a08301516123208301526102c0830151516001600160d81b0319166123408301526102e0909201516123609091015290565b600082516177d0818460208701616838565b9190910192915050565b6000602082840312156177ec57600080fd5b8151610a5b81616b8d56fea26469706673582212201bb19d2804b54a1df293e6fbdf113dc6bd7ebfd5da1b07179c8698669183b34864736f6c634300080c0033`,
  BytecodeLen: 38163,
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
    at: './index.rsh:450:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:121:35:after expr stmt semicolon',
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
