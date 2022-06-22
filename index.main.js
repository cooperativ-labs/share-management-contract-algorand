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
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc6, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Data({
    None: ctc12,
    Some: ctc2
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
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async (_v1141 ) => {
                const v1141 = stdlib.protect(ctc0, _v1141, null);
              
              const v1142 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1141), null);
              const v1143 = stdlib.fromSome(v1142, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1144 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1141), null);
              const v1145 = stdlib.fromSome(v1144, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1146 = [v1143, v1145];
              
              return v1146;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async () => {
              
              
              return v1125;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async () => {
              
              const v1140 = [v1127, v1126, v1123];
              
              return v1140;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async (_v1148 ) => {
                const v1148 = stdlib.protect(ctc0, _v1148, null);
              
              const v1149 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1148), null);
              const v1150 = stdlib.fromSome(v1149, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1151 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1148), null);
              const v1152 = stdlib.fromSome(v1151, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1153 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1148), null);
              const v1154 = stdlib.fromSome(v1153, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1155 = [v1150, v1152, v1154];
              
              return v1155;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async () => {
              
              
              return v1164;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async () => {
              
              const v1165 = [v1101, v1120];
              
              return v1165;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async () => {
              
              
              return v1124;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async () => {
              
              
              return v1122;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = svs;
            return (await ((async (_v1157 ) => {
                const v1157 = stdlib.protect(ctc0, _v1157, null);
              
              const v1158 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1157), null);
              let v1159;
              switch (v1158[0]) {
                case 'None': {
                  const v1160 = v1158[1];
                  v1159 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1161 = v1158[1];
                  v1159 = true;
                  
                  break;
                  }
                }
              
              return v1159;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc2, ctc4, ctc5, ctc2, ctc2, ctc8, ctc7, ctc6, ctc2]
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
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Data({
    aST0_182: ctc9,
    addWL0_182: ctc10,
    cBT0_182: ctc11,
    cCM0_182: ctc10,
    dBT0_182: ctc12,
    docHash0_182: ctc14,
    optIn0_182: ctc11,
    remWL0_182: ctc10
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
  
  
  const v1083 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1084 = [v1083];
  const v1090 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:79:103:application',
    fs: ['at ./index.rsh:78:17:application call to [unknown function] (defined at: ./index.rsh:78:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1091 = v1090.authorizedST;
  const v1092 = v1090.bT;
  const v1093 = v1090.companyName;
  const v1094 = v1090.lockSale;
  const v1095 = v1090.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1093, v1094, v1095, v1092, v1091],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1102, v1103, v1104, v1105, v1106], secs: v1108, time: v1107, didSend: v41, from: v1101 } = txn1;
      
      const v1109 = v1084[stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '0')];
      const v1111 = v1109[stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '1')];
      const v1112 = v1109[stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '2')];
      const v1113 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1111, v1112];
      const v1114 = stdlib.Array_set(v1084, stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '0'), v1113);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1105
        });
      ;
      
      const v1118 = '1.01';
      const v1119 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v1120 = v1104;
      const v1121 = stdlib.checkedBigNumberify('./index.rsh:103:114:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1122 = v1118;
      const v1123 = stdlib.checkedBigNumberify('./index.rsh:103:173:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1124 = v1119;
      const v1125 = v1103;
      const v1126 = stdlib.checkedBigNumberify('./index.rsh:103:138:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1127 = stdlib.checkedBigNumberify('./index.rsh:103:126:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1128 = v1107;
      const v1130 = v1114;
      
      if (await (async () => {
        
        return true;})()) {
        const v1162 = v1130[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
        const v1163 = v1162[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
        const v1164 = stdlib.cast(false, true, v1163);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1105
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
  const {data: [v1102, v1103, v1104, v1105, v1106], secs: v1108, time: v1107, didSend: v41, from: v1101 } = txn1;
  const v1109 = v1084[stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '0')];
  const v1111 = v1109[stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '1')];
  const v1112 = v1109[stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '2')];
  const v1113 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1111, v1112];
  const v1114 = stdlib.Array_set(v1084, stdlib.checkedBigNumberify('./index.rsh:83:13:dot', stdlib.UInt_max, '0'), v1113);
  ;
  ;
  const v1117 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1117), {
    at: './index.rsh:85:31:application',
    fs: ['at ./index.rsh:85:31:application call to [unknown function] (defined at: ./index.rsh:85:31:function exp)', 'at ./index.rsh:85:31:application call to "liftedInteract" (defined at: ./index.rsh:85:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v1118 = '1.01';
  const v1119 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  let v1120 = v1104;
  let v1121 = stdlib.checkedBigNumberify('./index.rsh:103:114:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1122 = v1118;
  let v1123 = stdlib.checkedBigNumberify('./index.rsh:103:173:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1124 = v1119;
  let v1125 = v1103;
  let v1126 = stdlib.checkedBigNumberify('./index.rsh:103:138:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1127 = stdlib.checkedBigNumberify('./index.rsh:103:126:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1128 = v1107;
  let v1130 = v1114;
  
  while (await (async () => {
    
    return true;})()) {
    const v1162 = v1130[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
    const v1163 = v1162[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
    const v1164 = stdlib.cast(false, true, v1163);
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
        args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1128,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:282:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v3325, time: v3324, didSend: v882, from: v3323 } = txn3;
          
          ;
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v3324;
          const cv1130 = v1130;
          
          await (async () => {
            const v1120 = cv1120;
            const v1121 = cv1121;
            const v1122 = cv1122;
            const v1123 = cv1123;
            const v1124 = cv1124;
            const v1125 = cv1125;
            const v1126 = cv1126;
            const v1127 = cv1127;
            const v1128 = cv1128;
            const v1130 = cv1130;
            
            if (await (async () => {
              
              return true;})()) {
              const v1162 = v1130[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
              const v1163 = v1162[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
              const v1164 = stdlib.cast(false, true, v1163);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1105
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
        tys: [ctc7, ctc4, ctc7, ctc1, ctc16, ctc1, ctc13, ctc6, ctc1, ctc1, ctc19, ctc18, ctc17, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v3325, time: v3324, didSend: v882, from: v3323 } = txn3;
      ;
      const v3326 = stdlib.addressEq(v1101, v3323);
      stdlib.assert(v3326, {
        at: './index.rsh:282:21:dot',
        fs: ['at ./index.rsh:281:40:application call to [unknown function] (defined at: ./index.rsh:281:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1120 = v1120;
      const cv1121 = v1121;
      const cv1122 = v1122;
      const cv1123 = v1123;
      const cv1124 = v1124;
      const cv1125 = v1125;
      const cv1126 = v1126;
      const cv1127 = v1127;
      const cv1128 = v3324;
      const cv1130 = v1130;
      
      v1120 = cv1120;
      v1121 = cv1121;
      v1122 = cv1122;
      v1123 = cv1123;
      v1124 = cv1124;
      v1125 = cv1125;
      v1126 = cv1126;
      v1127 = cv1127;
      v1128 = cv1128;
      v1130 = cv1130;
      
      continue;
      }
    else {
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn2;
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v1478 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v1479 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v1480 = [v1163, v1478, v1479];
          const v1481 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1480);
          ;
          const v1483 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '0')];
          const v1484 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '1')];
          const v1485 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '2')];
          const v1486 = stdlib.addressEq(v1483, v1101);
          const v1487 = stdlib.addressEq(v1483, v1120);
          const v1488 = v1486 ? true : v1487;
          stdlib.assert(v1488, {
            at: './index.rsh:185:24:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1489 = stdlib.gt256(v1485, stdlib.checkedBigNumberify('./index.rsh:186:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v1489, {
            at: './index.rsh:186:24:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v1484, null);
          const v1491 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1484), null);
          const v1492 = stdlib.fromSome(v1491, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1493 = stdlib.add256(v1492, v1485);
          await stdlib.mapSet(map0, v1484, v1493);
          const v1494 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1484), null);
          const v1495 = stdlib.fromSome(v1494, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1496 = stdlib.add256(v1495, v1485);
          await stdlib.mapSet(map3, v1484, v1496);
          const v1497 = true;
          await txn2.getOutput('aST', 'v1497', ctc6, v1497);
          const v1506 = stdlib.add256(v1127, v1485);
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1506;
          const cv1128 = v1393;
          const cv1130 = v1481;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v1719 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v1720 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v1721 = [v1163, v1719, v1720];
          const v1722 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1721);
          ;
          const v1750 = v1636[stdlib.checkedBigNumberify('./index.rsh:136:13:spread', stdlib.UInt_max, '0')];
          const v1751 = stdlib.addressEq(v1391, v1101);
          const v1752 = stdlib.addressEq(v1391, v1120);
          const v1753 = v1751 ? true : v1752;
          stdlib.assert(v1753, {
            at: './index.rsh:147:24:application',
            fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v1750, null);
          const v1755 = true;
          await txn2.getOutput('addWL', 'v1755', ctc6, v1755);
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v1722;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v1960 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v1961 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v1962 = [v1163, v1960, v1961];
          const v1963 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1962);
          ;
          const v2005 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1391), null);
          let v2006;
          switch (v2005[0]) {
            case 'None': {
              const v2007 = v2005[1];
              v2006 = false;
              
              break;
              }
            case 'Some': {
              const v2008 = v2005[1];
              v2006 = true;
              
              break;
              }
            }
          stdlib.assert(v2006, {
            at: './index.rsh:248:24:application',
            fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2009 = v1963[stdlib.checkedBigNumberify('./index.rsh:250:40:application', stdlib.UInt_max, '0')];
          const v2010 = v2009[stdlib.checkedBigNumberify('./index.rsh:250:40:application', stdlib.UInt_max, '0')];
          const v2011 = stdlib.cast(false, true, v2010);
          const v2012 = stdlib.gt256(v2011, stdlib.checkedBigNumberify('./index.rsh:250:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v2012, {
            at: './index.rsh:250:24:application',
            fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v2013 = stdlib.gt256(v1127, stdlib.checkedBigNumberify('./index.rsh:251:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v2013, {
            at: './index.rsh:251:24:application',
            fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v2014 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1391), null);
          const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2016 = stdlib.ge256(v1127, v2015);
          stdlib.assert(v2016, {
            at: './index.rsh:252:24:application',
            fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v2019 = stdlib.gt256(v2015, stdlib.checkedBigNumberify('./index.rsh:253:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v2019, {
            at: './index.rsh:253:24:application',
            fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v2022 = stdlib.mul256(v2015, v1121);
          const v2023 = stdlib.div256(v2022, v1127);
          const v2024 = stdlib.cast(true, false, v2023);
          const v2027 = stdlib.le(v2024, v2010);
          stdlib.assert(v2027, {
            at: './index.rsh:255:24:application',
            fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v2034 = stdlib.sub(v2010, v2024);
          const v2037 = v2009[stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '1')];
          const v2038 = v2009[stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '2')];
          const v2039 = [v2034, v2037, v2038];
          const v2040 = stdlib.Array_set(v1963, stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '0'), v2039);
          ;
          const v2041 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1391), null);
          const v2042 = stdlib.fromSome(v2041, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2043 = stdlib.add256(v2042, v2023);
          await stdlib.mapSet(map4, v1391, v2043);
          const v2044 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1391), null);
          const v2045 = stdlib.fromSome(v2044, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2046 = stdlib.add256(v2045, stdlib.checkedBigNumberify('./index.rsh:259:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v1391, v2046);
          await txn2.getOutput('cBT', 'v2023', ctc1, v2023);
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v2040;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v2201 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2202 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2203 = [v1163, v2201, v2202];
          const v2204 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2203);
          ;
          const v2295 = v2118[stdlib.checkedBigNumberify('./index.rsh:264:13:spread', stdlib.UInt_max, '0')];
          const v2296 = stdlib.addressEq(v1391, v1101);
          const v2297 = stdlib.addressEq(v1391, v1120);
          const v2298 = v2296 ? true : v2297;
          stdlib.assert(v2298, {
            at: './index.rsh:275:24:application',
            fs: ['at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2299 = true;
          await txn2.getOutput('cCM', 'v2299', ctc6, v2299);
          const cv1120 = v2295;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v2204;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          undefined /* setApiDetails */;
          const v2397 = v2359[stdlib.checkedBigNumberify('./index.rsh:212:13:spread', stdlib.UInt_max, '0')];
          const v2398 = stdlib.cast(true, false, v2397);
          ;
          const v2439 = stdlib.add(v1163, v2398);
          const v2442 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2443 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2444 = [v2439, v2442, v2443];
          const v2445 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2444);
          ;
          const v2550 = stdlib.addressEq(v1391, v1101);
          const v2551 = stdlib.addressEq(v1391, v1120);
          const v2552 = v2550 ? true : v2551;
          stdlib.assert(v2552, {
            at: './index.rsh:224:24:application',
            fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2554 = stdlib.gt(v2398, stdlib.checkedBigNumberify('./index.rsh:225:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v2554, {
            at: './index.rsh:225:24:application',
            fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2555 = true;
          await txn2.getOutput('dBT', 'v2555', ctc6, v2555);
          const v2562 = stdlib.add256(v1126, v2397);
          const v2563 = stdlib.add256(v1123, stdlib.checkedBigNumberify('./index.rsh:228:93:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const cv1120 = v1120;
          const cv1121 = v2397;
          const cv1122 = v1122;
          const cv1123 = v2563;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v2562;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v2445;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v2683 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2684 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2685 = [v1163, v2683, v2684];
          const v2686 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2685);
          ;
          const v2807 = v2600[stdlib.checkedBigNumberify('./index.rsh:119:13:spread', stdlib.UInt_max, '0')];
          const v2808 = stdlib.addressEq(v1391, v1101);
          const v2809 = stdlib.addressEq(v1391, v1120);
          const v2810 = v2808 ? true : v2809;
          stdlib.assert(v2810, {
            at: './index.rsh:130:24:application',
            fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2811 = true;
          await txn2.getOutput('docHash', 'v2811', ctc6, v2811);
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v2807;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v2686;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v2924 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2925 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2926 = [v1163, v2924, v2925];
          const v2927 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2926);
          ;
          const v3061 = true;
          await txn2.getOutput('optIn', 'v3061', ctc6, v3061);
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v2927;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
          continue;
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          undefined /* setApiDetails */;
          ;
          const v3165 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v3166 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v3167 = [v1163, v3165, v3166];
          const v3168 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v3167);
          ;
          const v3310 = v3082[stdlib.checkedBigNumberify('./index.rsh:154:13:spread', stdlib.UInt_max, '0')];
          const v3311 = stdlib.addressEq(v1391, v1101);
          const v3312 = stdlib.addressEq(v1391, v1120);
          const v3313 = v3311 ? true : v3312;
          stdlib.assert(v3313, {
            at: './index.rsh:165:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v3310, undefined /* Nothing */);
          const v3315 = true;
          await txn2.getOutput('remWL', 'v3315', ctc6, v3315);
          const cv1120 = v1120;
          const cv1121 = v1121;
          const cv1122 = v1122;
          const cv1123 = v1123;
          const cv1124 = v1124;
          const cv1125 = v1125;
          const cv1126 = v1126;
          const cv1127 = v1127;
          const cv1128 = v1393;
          const cv1130 = v3168;
          
          v1120 = cv1120;
          v1121 = cv1121;
          v1122 = cv1122;
          v1123 = cv1123;
          v1124 = cv1124;
          v1125 = cv1125;
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1130 = cv1130;
          
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
    aST0_182: ctc12,
    addWL0_182: ctc13,
    cBT0_182: ctc14,
    cCM0_182: ctc13,
    dBT0_182: ctc15,
    docHash0_182: ctc16,
    optIn0_182: ctc14,
    remWL0_182: ctc13
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1214 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:103:96:application call to "runaST0_182" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1215 = v1214[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1217 = v1214[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1222 = stdlib.addressEq(v1215, v1101);
  const v1223 = stdlib.addressEq(v1215, v1120);
  const v1224 = v1222 ? true : v1223;
  stdlib.assert(v1224, {
    at: './index.rsh:177:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:29:function exp)', 'at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:103:96:application call to "runaST0_182" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1225 = stdlib.gt256(v1217, stdlib.checkedBigNumberify('./index.rsh:178:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1225, {
    at: './index.rsh:178:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:29:function exp)', 'at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:103:96:application call to "runaST0_182" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1231 = ['aST0_182', v1214];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1231],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:182:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:182:34:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v1478 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v1479 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v1480 = [v1163, v1478, v1479];
          const v1481 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1480);
          ;
          const v1484 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '1')];
          const v1485 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v1484, null);
          const v1491 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1484), null);
          const v1492 = stdlib.fromSome(v1491, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1493 = stdlib.add256(v1492, v1485);
          await stdlib.simMapSet(sim_r, 0, v1484, v1493);
          const v1494 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1484), null);
          const v1495 = stdlib.fromSome(v1494, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1496 = stdlib.add256(v1495, v1485);
          await stdlib.simMapSet(sim_r, 3, v1484, v1496);
          const v1497 = true;
          const v1498 = await txn1.getOutput('aST', 'v1497', ctc8, v1497);
          
          const v1506 = stdlib.add256(v1127, v1485);
          const v5807 = v1120;
          const v5808 = v1121;
          const v5809 = v1122;
          const v5810 = v1123;
          const v5811 = v1124;
          const v5812 = v1125;
          const v5813 = v1126;
          const v5814 = v1506;
          const v5816 = v1481;
          const v5817 = v1481[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v5818 = v5817[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v5819 = stdlib.cast(false, true, v5818);
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v1478 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v1479 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v1480 = [v1163, v1478, v1479];
      const v1481 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1480);
      ;
      const v1483 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '0')];
      const v1484 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '1')];
      const v1485 = v1395[stdlib.checkedBigNumberify('./index.rsh:173:13:spread', stdlib.UInt_max, '2')];
      const v1486 = stdlib.addressEq(v1483, v1101);
      const v1487 = stdlib.addressEq(v1483, v1120);
      const v1488 = v1486 ? true : v1487;
      stdlib.assert(v1488, {
        at: './index.rsh:185:24:application',
        fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v1489 = stdlib.gt256(v1485, stdlib.checkedBigNumberify('./index.rsh:186:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v1489, {
        at: './index.rsh:186:24:application',
        fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v1484, null);
      const v1491 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1484), null);
      const v1492 = stdlib.fromSome(v1491, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1493 = stdlib.add256(v1492, v1485);
      await stdlib.mapSet(map0, v1484, v1493);
      const v1494 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1484), null);
      const v1495 = stdlib.fromSome(v1494, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1496 = stdlib.add256(v1495, v1485);
      await stdlib.mapSet(map3, v1484, v1496);
      const v1497 = true;
      const v1498 = await txn1.getOutput('aST', 'v1497', ctc8, v1497);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v1395, v1498), {
          at: './index.rsh:174:13:application',
          fs: ['at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:13:function exp)', 'at ./index.rsh:193:20:application call to "res" (defined at: ./index.rsh:184:13:function exp)', 'at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v1506 = stdlib.add256(v1127, v1485);
      const v5807 = v1120;
      const v5808 = v1121;
      const v5809 = v1122;
      const v5810 = v1123;
      const v5811 = v1124;
      const v5812 = v1125;
      const v5813 = v1126;
      const v5814 = v1506;
      const v5816 = v1481;
      const v5817 = v1481[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v5818 = v5817[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v5819 = stdlib.cast(false, true, v5818);
      return;
      
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
    aST0_182: ctc13,
    addWL0_182: ctc12,
    cBT0_182: ctc14,
    cCM0_182: ctc12,
    dBT0_182: ctc15,
    docHash0_182: ctc16,
    optIn0_182: ctc14,
    remWL0_182: ctc12
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1184 = ctc.selfAddress();
  const v1186 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)', 'at ./index.rsh:103:96:application call to "runaddWL0_182" (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1190 = stdlib.addressEq(v1184, v1101);
  const v1191 = stdlib.addressEq(v1184, v1120);
  const v1192 = v1190 ? true : v1191;
  stdlib.assert(v1192, {
    at: './index.rsh:140:23:application',
    fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:18:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)', 'at ./index.rsh:103:96:application call to "runaddWL0_182" (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1196 = ['addWL0_182', v1186];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1196],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:144:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:144:26:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v1719 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v1720 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v1721 = [v1163, v1719, v1720];
          const v1722 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1721);
          ;
          const v1750 = v1636[stdlib.checkedBigNumberify('./index.rsh:136:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v1750, null);
          const v1755 = true;
          const v1756 = await txn1.getOutput('addWL', 'v1755', ctc8, v1755);
          
          const v5951 = v1120;
          const v5952 = v1121;
          const v5953 = v1122;
          const v5954 = v1123;
          const v5955 = v1124;
          const v5956 = v1125;
          const v5957 = v1126;
          const v5958 = v1127;
          const v5960 = v1722;
          const v5961 = v1722[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v5962 = v5961[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v5963 = stdlib.cast(false, true, v5962);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v1719 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v1720 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v1721 = [v1163, v1719, v1720];
      const v1722 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1721);
      ;
      const v1750 = v1636[stdlib.checkedBigNumberify('./index.rsh:136:13:spread', stdlib.UInt_max, '0')];
      const v1751 = stdlib.addressEq(v1391, v1101);
      const v1752 = stdlib.addressEq(v1391, v1120);
      const v1753 = v1751 ? true : v1752;
      stdlib.assert(v1753, {
        at: './index.rsh:147:24:application',
        fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v1750, null);
      const v1755 = true;
      const v1756 = await txn1.getOutput('addWL', 'v1755', ctc8, v1755);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v1636, v1756), {
          at: './index.rsh:137:13:application',
          fs: ['at ./index.rsh:137:13:application call to [unknown function] (defined at: ./index.rsh:137:13:function exp)', 'at ./index.rsh:150:20:application call to "res" (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v5951 = v1120;
      const v5952 = v1121;
      const v5953 = v1122;
      const v5954 = v1123;
      const v5955 = v1124;
      const v5956 = v1125;
      const v5957 = v1126;
      const v5958 = v1127;
      const v5960 = v1722;
      const v5961 = v1722[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v5962 = v5961[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v5963 = stdlib.cast(false, true, v5962);
      return;
      
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aST0_182: ctc13,
    addWL0_182: ctc14,
    cBT0_182: ctc12,
    cCM0_182: ctc14,
    dBT0_182: ctc15,
    docHash0_182: ctc16,
    optIn0_182: ctc12,
    remWL0_182: ctc14
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1257 = ctc.selfAddress();
  const v1259 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1261 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1257), null);
  let v1262;
  switch (v1261[0]) {
    case 'None': {
      const v1263 = v1261[1];
      v1262 = false;
      
      break;
      }
    case 'Some': {
      const v1264 = v1261[1];
      v1262 = true;
      
      break;
      }
    }
  stdlib.assert(v1262, {
    at: './index.rsh:235:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:17:function exp)', 'at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1268 = stdlib.gt256(v1164, stdlib.checkedBigNumberify('./index.rsh:237:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1268, {
    at: './index.rsh:237:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:17:function exp)', 'at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v1269 = stdlib.gt256(v1127, stdlib.checkedBigNumberify('./index.rsh:238:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1269, {
    at: './index.rsh:238:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:17:function exp)', 'at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v1270 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1257), null);
  const v1271 = stdlib.fromSome(v1270, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1272 = stdlib.ge256(v1127, v1271);
  stdlib.assert(v1272, {
    at: './index.rsh:239:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:17:function exp)', 'at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v1275 = stdlib.gt256(v1271, stdlib.checkedBigNumberify('./index.rsh:240:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1275, {
    at: './index.rsh:240:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:17:function exp)', 'at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v1278 = stdlib.mul256(v1271, v1121);
  const v1279 = stdlib.div256(v1278, v1127);
  const v1280 = stdlib.cast(true, false, v1279);
  const v1283 = stdlib.le(v1280, v1163);
  stdlib.assert(v1283, {
    at: './index.rsh:242:23:application',
    fs: ['at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:17:function exp)', 'at ./index.rsh:234:13:application call to [unknown function] (defined at: ./index.rsh:234:13:function exp)', 'at ./index.rsh:103:96:application call to "runcBT0_182" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v1286 = ['cBT0_182', v1259];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1286],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:245:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:245:25:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v1960 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v1961 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v1962 = [v1163, v1960, v1961];
          const v1963 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1962);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1391), null);
          const v2009 = v1963[stdlib.checkedBigNumberify('./index.rsh:250:40:application', stdlib.UInt_max, '0')];
          const v2010 = v2009[stdlib.checkedBigNumberify('./index.rsh:250:40:application', stdlib.UInt_max, '0')];
          const v2014 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1391), null);
          const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2022 = stdlib.mul256(v2015, v1121);
          const v2023 = stdlib.div256(v2022, v1127);
          const v2024 = stdlib.cast(true, false, v2023);
          const v2034 = stdlib.sub(v2010, v2024);
          const v2037 = v2009[stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '1')];
          const v2038 = v2009[stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '2')];
          const v2039 = [v2034, v2037, v2038];
          const v2040 = stdlib.Array_set(v1963, stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '0'), v2039);
          sim_r.txns.push({
            amt: v2024,
            kind: 'from',
            to: v1391,
            tok: v1105
            });
          const v2041 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1391), null);
          const v2042 = stdlib.fromSome(v2041, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2043 = stdlib.add256(v2042, v2023);
          await stdlib.simMapSet(sim_r, 4, v1391, v2043);
          const v2044 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1391), null);
          const v2045 = stdlib.fromSome(v2044, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2046 = stdlib.add256(v2045, stdlib.checkedBigNumberify('./index.rsh:259:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v1391, v2046);
          const v2047 = await txn1.getOutput('cBT', 'v2023', ctc1, v2023);
          
          const v6095 = v1120;
          const v6096 = v1121;
          const v6097 = v1122;
          const v6098 = v1123;
          const v6099 = v1124;
          const v6100 = v1125;
          const v6101 = v1126;
          const v6102 = v1127;
          const v6104 = v2040;
          const v6105 = v2040[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6106 = v6105[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6107 = stdlib.cast(false, true, v6106);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v1960 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v1961 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v1962 = [v1163, v1960, v1961];
      const v1963 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v1962);
      ;
      const v2005 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1391), null);
      let v2006;
      switch (v2005[0]) {
        case 'None': {
          const v2007 = v2005[1];
          v2006 = false;
          
          break;
          }
        case 'Some': {
          const v2008 = v2005[1];
          v2006 = true;
          
          break;
          }
        }
      stdlib.assert(v2006, {
        at: './index.rsh:248:24:application',
        fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2009 = v1963[stdlib.checkedBigNumberify('./index.rsh:250:40:application', stdlib.UInt_max, '0')];
      const v2010 = v2009[stdlib.checkedBigNumberify('./index.rsh:250:40:application', stdlib.UInt_max, '0')];
      const v2011 = stdlib.cast(false, true, v2010);
      const v2012 = stdlib.gt256(v2011, stdlib.checkedBigNumberify('./index.rsh:250:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2012, {
        at: './index.rsh:250:24:application',
        fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v2013 = stdlib.gt256(v1127, stdlib.checkedBigNumberify('./index.rsh:251:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2013, {
        at: './index.rsh:251:24:application',
        fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v2014 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1391), null);
      const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2016 = stdlib.ge256(v1127, v2015);
      stdlib.assert(v2016, {
        at: './index.rsh:252:24:application',
        fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v2019 = stdlib.gt256(v2015, stdlib.checkedBigNumberify('./index.rsh:253:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2019, {
        at: './index.rsh:253:24:application',
        fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v2022 = stdlib.mul256(v2015, v1121);
      const v2023 = stdlib.div256(v2022, v1127);
      const v2024 = stdlib.cast(true, false, v2023);
      const v2027 = stdlib.le(v2024, v2010);
      stdlib.assert(v2027, {
        at: './index.rsh:255:24:application',
        fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v2034 = stdlib.sub(v2010, v2024);
      const v2037 = v2009[stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '1')];
      const v2038 = v2009[stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '2')];
      const v2039 = [v2034, v2037, v2038];
      const v2040 = stdlib.Array_set(v1963, stdlib.checkedBigNumberify('./index.rsh:257:50:application', stdlib.UInt_max, '0'), v2039);
      ;
      const v2041 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1391), null);
      const v2042 = stdlib.fromSome(v2041, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2043 = stdlib.add256(v2042, v2023);
      await stdlib.mapSet(map4, v1391, v2043);
      const v2044 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1391), null);
      const v2045 = stdlib.fromSome(v2044, stdlib.checkedBigNumberify('./index.rsh:89:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2046 = stdlib.add256(v2045, stdlib.checkedBigNumberify('./index.rsh:259:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v1391, v2046);
      const v2047 = await txn1.getOutput('cBT', 'v2023', ctc1, v2023);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v1877, v2047), {
          at: './index.rsh:232:13:application',
          fs: ['at ./index.rsh:232:13:application call to [unknown function] (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:260:20:application call to "res" (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v6095 = v1120;
      const v6096 = v1121;
      const v6097 = v1122;
      const v6098 = v1123;
      const v6099 = v1124;
      const v6100 = v1125;
      const v6101 = v1126;
      const v6102 = v1127;
      const v6104 = v2040;
      const v6105 = v2040[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6106 = v6105[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6107 = stdlib.cast(false, true, v6106);
      return;
      
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
    aST0_182: ctc13,
    addWL0_182: ctc12,
    cBT0_182: ctc14,
    cCM0_182: ctc12,
    dBT0_182: ctc15,
    docHash0_182: ctc16,
    optIn0_182: ctc14,
    remWL0_182: ctc12
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1288 = ctc.selfAddress();
  const v1290 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:267:13:application call to [unknown function] (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:103:96:application call to "runcCM0_182" (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1294 = stdlib.addressEq(v1288, v1101);
  const v1295 = stdlib.addressEq(v1288, v1120);
  const v1296 = v1294 ? true : v1295;
  stdlib.assert(v1296, {
    at: './index.rsh:268:23:application',
    fs: ['at ./index.rsh:267:13:application call to [unknown function] (defined at: ./index.rsh:267:21:function exp)', 'at ./index.rsh:267:13:application call to [unknown function] (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:103:96:application call to "runcCM0_182" (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1300 = ['cCM0_182', v1290];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1300],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:272:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:272:26:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v2201 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2202 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2203 = [v1163, v2201, v2202];
          const v2204 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2203);
          ;
          const v2295 = v2118[stdlib.checkedBigNumberify('./index.rsh:264:13:spread', stdlib.UInt_max, '0')];
          const v2299 = true;
          const v2300 = await txn1.getOutput('cCM', 'v2299', ctc8, v2299);
          
          const v6239 = v2295;
          const v6240 = v1121;
          const v6241 = v1122;
          const v6242 = v1123;
          const v6243 = v1124;
          const v6244 = v1125;
          const v6245 = v1126;
          const v6246 = v1127;
          const v6248 = v2204;
          const v6249 = v2204[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6250 = v6249[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6251 = stdlib.cast(false, true, v6250);
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v2201 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v2202 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v2203 = [v1163, v2201, v2202];
      const v2204 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2203);
      ;
      const v2295 = v2118[stdlib.checkedBigNumberify('./index.rsh:264:13:spread', stdlib.UInt_max, '0')];
      const v2296 = stdlib.addressEq(v1391, v1101);
      const v2297 = stdlib.addressEq(v1391, v1120);
      const v2298 = v2296 ? true : v2297;
      stdlib.assert(v2298, {
        at: './index.rsh:275:24:application',
        fs: ['at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v2299 = true;
      const v2300 = await txn1.getOutput('cCM', 'v2299', ctc8, v2299);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v2118, v2300), {
          at: './index.rsh:265:13:application',
          fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)', 'at ./index.rsh:277:20:application call to "res" (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6239 = v2295;
      const v6240 = v1121;
      const v6241 = v1122;
      const v6242 = v1123;
      const v6243 = v1124;
      const v6244 = v1125;
      const v6245 = v1126;
      const v6246 = v1127;
      const v6248 = v2204;
      const v6249 = v2204[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6250 = v6249[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6251 = stdlib.cast(false, true, v6250);
      return;
      
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aST0_182: ctc13,
    addWL0_182: ctc14,
    cBT0_182: ctc15,
    cCM0_182: ctc14,
    dBT0_182: ctc12,
    docHash0_182: ctc16,
    optIn0_182: ctc15,
    remWL0_182: ctc14
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1241 = ctc.selfAddress();
  const v1243 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:103:96:application call to "rundBT0_182" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1244 = v1243[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1247 = stdlib.addressEq(v1241, v1101);
  const v1248 = stdlib.addressEq(v1241, v1120);
  const v1249 = v1247 ? true : v1248;
  stdlib.assert(v1249, {
    at: './index.rsh:216:23:application',
    fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:103:96:application call to "rundBT0_182" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1250 = stdlib.cast(true, false, v1244);
  const v1251 = stdlib.gt(v1250, stdlib.checkedBigNumberify('./index.rsh:217:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1251, {
    at: './index.rsh:217:23:application',
    fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:103:96:application call to "rundBT0_182" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1255 = ['dBT0_182', v1243];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1255],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:24:decimal', stdlib.UInt_max, '0'), [[v1250, v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v2397 = v2359[stdlib.checkedBigNumberify('./index.rsh:212:13:spread', stdlib.UInt_max, '0')];
          const v2398 = stdlib.cast(true, false, v2397);
          ;
          const v2439 = stdlib.add(v1163, v2398);
          const v2442 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2443 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2444 = [v2439, v2442, v2443];
          const v2445 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2444);
          sim_r.txns.push({
            amt: v2398,
            kind: 'to',
            tok: v1105
            });
          const v2555 = true;
          const v2556 = await txn1.getOutput('dBT', 'v2555', ctc8, v2555);
          
          const v2562 = stdlib.add256(v1126, v2397);
          const v2563 = stdlib.add256(v1123, stdlib.checkedBigNumberify('./index.rsh:228:93:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v6383 = v1120;
          const v6384 = v2397;
          const v6385 = v1122;
          const v6386 = v2563;
          const v6387 = v1124;
          const v6388 = v1125;
          const v6389 = v2562;
          const v6390 = v1127;
          const v6392 = v2445;
          const v6393 = v2445[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6394 = v6393[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6395 = stdlib.cast(false, true, v6394);
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      undefined /* setApiDetails */;
      const v2397 = v2359[stdlib.checkedBigNumberify('./index.rsh:212:13:spread', stdlib.UInt_max, '0')];
      const v2398 = stdlib.cast(true, false, v2397);
      ;
      const v2439 = stdlib.add(v1163, v2398);
      const v2442 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v2443 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v2444 = [v2439, v2442, v2443];
      const v2445 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2444);
      ;
      const v2550 = stdlib.addressEq(v1391, v1101);
      const v2551 = stdlib.addressEq(v1391, v1120);
      const v2552 = v2550 ? true : v2551;
      stdlib.assert(v2552, {
        at: './index.rsh:224:24:application',
        fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v2554 = stdlib.gt(v2398, stdlib.checkedBigNumberify('./index.rsh:225:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2554, {
        at: './index.rsh:225:24:application',
        fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v2555 = true;
      const v2556 = await txn1.getOutput('dBT', 'v2555', ctc8, v2555);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v2359, v2556), {
          at: './index.rsh:213:13:application',
          fs: ['at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:227:20:application call to "res" (defined at: ./index.rsh:223:13:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v2562 = stdlib.add256(v1126, v2397);
      const v2563 = stdlib.add256(v1123, stdlib.checkedBigNumberify('./index.rsh:228:93:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v6383 = v1120;
      const v6384 = v2397;
      const v6385 = v1122;
      const v6386 = v2563;
      const v6387 = v1124;
      const v6388 = v1125;
      const v6389 = v2562;
      const v6390 = v1127;
      const v6392 = v2445;
      const v6393 = v2445[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6394 = v6393[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6395 = stdlib.cast(false, true, v6394);
      return;
      
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    aST0_182: ctc13,
    addWL0_182: ctc14,
    cBT0_182: ctc15,
    cCM0_182: ctc14,
    dBT0_182: ctc16,
    docHash0_182: ctc12,
    optIn0_182: ctc15,
    remWL0_182: ctc14
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1170 = ctc.selfAddress();
  const v1172 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:103:96:application call to "rundocHash0_182" (defined at: ./index.rsh:119:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v1176 = stdlib.addressEq(v1170, v1101);
  const v1177 = stdlib.addressEq(v1170, v1120);
  const v1178 = v1176 ? true : v1177;
  stdlib.assert(v1178, {
    at: './index.rsh:123:23:application',
    fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:18:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:103:96:application call to "rundocHash0_182" (defined at: ./index.rsh:119:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'docHash'
    });
  const v1182 = ['docHash0_182', v1172];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1182],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:127:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:127:26:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v2683 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2684 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2685 = [v1163, v2683, v2684];
          const v2686 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2685);
          ;
          const v2807 = v2600[stdlib.checkedBigNumberify('./index.rsh:119:13:spread', stdlib.UInt_max, '0')];
          const v2811 = true;
          const v2812 = await txn1.getOutput('docHash', 'v2811', ctc8, v2811);
          
          const v6527 = v1120;
          const v6528 = v1121;
          const v6529 = v1122;
          const v6530 = v1123;
          const v6531 = v2807;
          const v6532 = v1125;
          const v6533 = v1126;
          const v6534 = v1127;
          const v6536 = v2686;
          const v6537 = v2686[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6538 = v6537[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6539 = stdlib.cast(false, true, v6538);
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v2683 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v2684 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v2685 = [v1163, v2683, v2684];
      const v2686 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2685);
      ;
      const v2807 = v2600[stdlib.checkedBigNumberify('./index.rsh:119:13:spread', stdlib.UInt_max, '0')];
      const v2808 = stdlib.addressEq(v1391, v1101);
      const v2809 = stdlib.addressEq(v1391, v1120);
      const v2810 = v2808 ? true : v2809;
      stdlib.assert(v2810, {
        at: './index.rsh:130:24:application',
        fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
        msg: null,
        who: 'docHash'
        });
      const v2811 = true;
      const v2812 = await txn1.getOutput('docHash', 'v2811', ctc8, v2811);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v2600, v2812), {
          at: './index.rsh:120:13:application',
          fs: ['at ./index.rsh:120:13:application call to [unknown function] (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:132:20:application call to "res" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v6527 = v1120;
      const v6528 = v1121;
      const v6529 = v1122;
      const v6530 = v1123;
      const v6531 = v2807;
      const v6532 = v1125;
      const v6533 = v1126;
      const v6534 = v1127;
      const v6536 = v2686;
      const v6537 = v2686[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6538 = v6537[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6539 = stdlib.cast(false, true, v6538);
      return;
      
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aST0_182: ctc13,
    addWL0_182: ctc14,
    cBT0_182: ctc12,
    cCM0_182: ctc14,
    dBT0_182: ctc15,
    docHash0_182: ctc16,
    optIn0_182: ctc12,
    remWL0_182: ctc14
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1235 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:201:13:application call to [unknown function] (defined at: ./index.rsh:201:13:function exp)', 'at ./index.rsh:103:96:application call to "runoptIn0_182" (defined at: ./index.rsh:198:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v1239 = ['optIn0_182', v1235];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1239],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:205:25:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v2924 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v2925 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v2926 = [v1163, v2924, v2925];
          const v2927 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2926);
          ;
          const v3061 = true;
          const v3062 = await txn1.getOutput('optIn', 'v3061', ctc8, v3061);
          
          const v6671 = v1120;
          const v6672 = v1121;
          const v6673 = v1122;
          const v6674 = v1123;
          const v6675 = v1124;
          const v6676 = v1125;
          const v6677 = v1126;
          const v6678 = v1127;
          const v6680 = v2927;
          const v6681 = v2927[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6682 = v6681[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6683 = stdlib.cast(false, true, v6682);
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v2924 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v2925 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v2926 = [v1163, v2924, v2925];
      const v2927 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v2926);
      ;
      const v3061 = true;
      const v3062 = await txn1.getOutput('optIn', 'v3061', ctc8, v3061);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v2841, v3062), {
          at: './index.rsh:199:13:application',
          fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:208:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v6671 = v1120;
      const v6672 = v1121;
      const v6673 = v1122;
      const v6674 = v1123;
      const v6675 = v1124;
      const v6676 = v1125;
      const v6677 = v1126;
      const v6678 = v1127;
      const v6680 = v2927;
      const v6681 = v2927[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6682 = v6681[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6683 = stdlib.cast(false, true, v6682);
      return;
      
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
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
    aST0_182: ctc13,
    addWL0_182: ctc12,
    cBT0_182: ctc14,
    cCM0_182: ctc12,
    dBT0_182: ctc15,
    docHash0_182: ctc16,
    optIn0_182: ctc14,
    remWL0_182: ctc12
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
  
  
  const [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1198 = ctc.selfAddress();
  const v1200 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)', 'at ./index.rsh:103:96:application call to "runremWL0_182" (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1204 = stdlib.addressEq(v1198, v1101);
  const v1205 = stdlib.addressEq(v1198, v1120);
  const v1206 = v1204 ? true : v1205;
  stdlib.assert(v1206, {
    at: './index.rsh:158:23:application',
    fs: ['at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:18:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)', 'at ./index.rsh:103:96:application call to "runremWL0_182" (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:103:96:application call to [unknown function] (defined at: ./index.rsh:103:96:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1210 = ['remWL0_182', v1200];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1101, v1105, v1120, v1121, v1122, v1123, v1124, v1125, v1126, v1127, v1130, v1162, v1163, v1164, v1210],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:162:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:162:26:decimal', stdlib.UInt_max, '0'), v1105]]],
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
      
      const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
      
      switch (v1392[0]) {
        case 'aST0_182': {
          const v1395 = v1392[1];
          
          break;
          }
        case 'addWL0_182': {
          const v1636 = v1392[1];
          
          break;
          }
        case 'cBT0_182': {
          const v1877 = v1392[1];
          
          break;
          }
        case 'cCM0_182': {
          const v2118 = v1392[1];
          
          break;
          }
        case 'dBT0_182': {
          const v2359 = v1392[1];
          
          break;
          }
        case 'docHash0_182': {
          const v2600 = v1392[1];
          
          break;
          }
        case 'optIn0_182': {
          const v2841 = v1392[1];
          
          break;
          }
        case 'remWL0_182': {
          const v3082 = v1392[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v3165 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
          const v3166 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
          const v3167 = [v1163, v3165, v3166];
          const v3168 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v3167);
          ;
          const v3310 = v3082[stdlib.checkedBigNumberify('./index.rsh:154:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v3310, undefined /* Nothing */);
          const v3315 = true;
          const v3316 = await txn1.getOutput('remWL', 'v3315', ctc8, v3315);
          
          const v6815 = v1120;
          const v6816 = v1121;
          const v6817 = v1122;
          const v6818 = v1123;
          const v6819 = v1124;
          const v6820 = v1125;
          const v6821 = v1126;
          const v6822 = v1127;
          const v6824 = v3168;
          const v6825 = v3168[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6826 = v6825[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
          const v6827 = stdlib.cast(false, true, v6826);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1392], secs: v1394, time: v1393, didSend: v695, from: v1391 } = txn1;
  switch (v1392[0]) {
    case 'aST0_182': {
      const v1395 = v1392[1];
      return;
      break;
      }
    case 'addWL0_182': {
      const v1636 = v1392[1];
      return;
      break;
      }
    case 'cBT0_182': {
      const v1877 = v1392[1];
      return;
      break;
      }
    case 'cCM0_182': {
      const v2118 = v1392[1];
      return;
      break;
      }
    case 'dBT0_182': {
      const v2359 = v1392[1];
      return;
      break;
      }
    case 'docHash0_182': {
      const v2600 = v1392[1];
      return;
      break;
      }
    case 'optIn0_182': {
      const v2841 = v1392[1];
      return;
      break;
      }
    case 'remWL0_182': {
      const v3082 = v1392[1];
      undefined /* setApiDetails */;
      ;
      const v3165 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '1')];
      const v3166 = v1162[stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '2')];
      const v3167 = [v1163, v3165, v3166];
      const v3168 = stdlib.Array_set(v1130, stdlib.checkedBigNumberify('./index.rsh:103:96:dot', stdlib.UInt_max, '0'), v3167);
      ;
      const v3310 = v3082[stdlib.checkedBigNumberify('./index.rsh:154:13:spread', stdlib.UInt_max, '0')];
      const v3311 = stdlib.addressEq(v1391, v1101);
      const v3312 = stdlib.addressEq(v1391, v1120);
      const v3313 = v3311 ? true : v3312;
      stdlib.assert(v3313, {
        at: './index.rsh:165:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v3310, undefined /* Nothing */);
      const v3315 = true;
      const v3316 = await txn1.getOutput('remWL', 'v3315', ctc8, v3315);
      if (v695) {
        stdlib.protect(ctc0, await interact.out(v3082, v3316), {
          at: './index.rsh:155:13:application',
          fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:168:20:application call to "res" (defined at: ./index.rsh:164:13:function exp)', 'at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v6815 = v1120;
      const v6816 = v1121;
      const v6817 = v1122;
      const v6818 = v1123;
      const v6819 = v1124;
      const v6820 = v1125;
      const v6821 = v1126;
      const v6822 = v1127;
      const v6824 = v3168;
      const v6825 = v3168[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6826 = v6825[stdlib.checkedBigNumberify('./index.rsh:115:45:application', stdlib.UInt_max, '0')];
      const v6827 = stdlib.cast(false, true, v6826);
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
    impure: [`aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()uint256`, `cCM(address)byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`],
    sigs: [`aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()uint256`, `cCM(address)byte`, `claimSTBT(address)(uint256,uint256)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`]
    },
  appApproval: `BiAkAAMBIAhAEQQYjQLGAccBvK3Hqwiht9rXCuDlw7AMsILfsAzYjpngDr/K2PAK3dHhmAn52Z68CfHhk+EI+YSKkQX95qmlB4rSwpsIyfyYvAVgnPiDiAKh4OznBJfEwa8BAv///////////wGtAgcFEKCNBiYFAQEBAAECACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASI1ADEYQQqbK2RJIls1ASEEWzUCMRkkEkEAHDEAIQuvSwEpSwJXAH9mSwEoSwJXf0hmSEhCClU2GgAXSUECoCI1BCQ1BkkhDAxAAaRJIQ0MQADnSSEODEAAlEkhDwxAADlJIRAMQAAWIRASRDYaATX/gAEHNP9QIQWvUEIC7iEPEkQ0ASMSRClkKGRQKmRQSTUDV+wBNQdCCgEhDhJENAEjEkQ2GgE1/zIDNP+ICf1XQiFJNf5XASA0/iJVTTIDNP+ICehXhCFJNf5XASA0/iJVTVAyAzT/iAnSV6UhSTX+VwEgNP4iVU1QNQdCCa1JIREMQAAcIRESRDQBIxJEKWQoZFAqZFBJNQNXaAQ1B0IJiiENEkQ0ASMSRClkKGRQKmRQSTUDIQklWDQDV+0gUDQDV2wgUDUHQglhSSESDEAAVkkhEwxAAB4hExJENAEjEkQpZChkUCpkUEk1A4HXAiVYNQdCCTUhEhJENAEjEkQ2GgGICTdXxgFJNf4iVUAABiI1/0IABiQ1/0IAADT/FlEHCDUHQgkESSEUDEAAPiEUEkQ0ASMSRDYaATX/MgM0/4gI+VcAIUk1/lcBIDT+IlVNMgM0/4gI5FchIUk1/lcBIDT+IlVNUDUHQgi/IQwSRDYaATX/KDT/UCEFr1BCAXxJIRUMQABzSSEWDEAAP0khFwxAABYhFxJENhoBNf+AAQQ0/1AhBa9QQgFRIRYSRDQBIxJEKWQoZFAqZFBJNQNXACA0A1coIFA1B0IIXkkhGAxAABIhGBJENhoBNf+AAQU0/1BCARYhFRJEKzX/gAEGNP9QIRmvUEIBAkkhGgxAADlJIRsMQAAcIRsSRDQBIxJEKWQoZFAqZFBJNQNXjGA1B0IIByEaEkQ2GgE1/4ABAzT/UCEFr1BCAMJJIRwMQAASIRwSRCs1/yo0/1AhGa9QQgCpgfX635IBEkQ2GgE2GgJQNhoDUDX/KTT/UEIAjTYaAhc1BDYaAzYaARdJIR0MQAXgSSMMQAByIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDVwAgNf+ABKdlxLSwMgYhHg9ENP8xABJENP80AyVbNANXKCA0A1dIIDQDV2gENANXbCA0A1eMYDQDV+wBFzQDV+0gNAMhCSVYMgY0AyEfIQZYQgZsSCM0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lKSkpKSklXACA1/yVbNf5XKCA1/VdIIDX8V2gENftXbCA1+leMYDX5V+wBFzX4V+0gNfchCSVYNfYhHyEGWDX1gb4CIQZYNfSBzwJbNfNJNQU18oAE47jRlTTyULAyBiEeDEQ08iJVSSEHDEABiEmBBgxAAKxJISAMQABtISASRDTyVwEgNfExADT/EjEANP0SEUQ08UmIBosiIQpMVksBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAAM8wGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPYyBjTzFjT0VwgIUDT0VxABUEIFZkiACQAAAAAAAAv1AbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jIGNPMWNPRXCAhQNPRXEAFQQgUuSSEhDEAAS0g08lcBYDXxMQA0/xIxADT9EhFEgAkAAAAAAAAK+wGwKDUHNP80/jT9NPw0+zT6NPE0+DT3NPYyBjTzFjT0VwgIUDT0VxABUEIE3Eg08lcBIDXxNPFJNfBJSiEiWyISRCEEWyISRCJbIhJEIQhbNe807zT+iAW0MQA0/xIxADT9EhFENO8iDUSACQAAAAAAAAn7AbAoNQc0/zT+NP008DT7NPonBKCIBaI0+TT4NPc08KCIBZY09jIGNPM07wgWNPRXCAhQNPRXEAFQQgRZSSEdDEABzkkjDEAAS0g08lcBIDXxMQA0/xIxADT9EhFEgAkAAAAAAAAI+wGwKDUHNP80/jTxNPw0+zT6NPk0+DT3NPYyBjTzFjT0VwgIUDT0VxABUEIEAUg08xY09FcICFA09FcQAVA18TEAiAS/V8YBSTXvIlVAAAYiNfBCAAYkNfBCAAA08EQ08VcAEUk17yJbNe4hCK807hZQMgOlRDT2MgOlRDIDMQCIBIFXYyFJNexXASA07CJVTTXtNPY07adENO0yA6VENO00/KOIBKw09qKIBKZJNexJSiEiWyISRCEEWyISRCJbIhJEIQhbSTXrNO4ORLEisgE067ISIQeyEDEAshQ0/rIRszEAMQCIBBsoMgMxAIgEE1eEIUk16lcBIDTqIlVNNOygiAROUDXqSVcAhDTqUExXpSJQSwEpSwJXAH9mSwEoSwJXf0hmSEgxADEAiAPVKDIDMQCIA81XpSFJNepXASA06iJVTScEoIgECFA16klXAKU06lBMV8YBUEsBKUsCVwB/ZksBKEsCV39IZkhIgAgAAAAAAAAH5zTsULA07DUHNP80/jT9NPw0+zT6NPk0+DT3NPYyBjTuNOsJFjTvVwgIUDTvVxABUEIChEkkDEAAakg08lcBIDXxMQA0/xIxADT9EhFENPFJiAM5JCEKTFZLASlLAlcAf2ZLAShLAld/SGZISIAJAAAAAAAABtsBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2MgY08xY09FcICFA09FcQAVBCAhRINPJXAWA18TTxVwAgNfA08VcgIDXvNPFXQCA17jTwNP8SNPA0/RIRRDTuMgOlRDTvSYgCtCQhCkxWSwEpSwJXAH9mSwEoSwJXf0hmSEg070mIApUoMgM074gCjVcAIUk17VcBIDTtIlVNNO6giALIUDXtVyGmNO1MUEsBKUsCVwB/ZksBKEsCV39IZkhINO9JiAJVKDIDNO+IAk1XYyFJNe1XASA07SJVTTTuoIgCiFA17UlXAGM07VBMV4RDUEsBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAAF2QGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY07qCIAjwyBjTzFjT0VwgIUDT0VxABUEIBBCISRCI0ARJENARJIhJMNAISEURJNQVJSklXAIA1/1eAARc1/leBIDX9gaEBWzX8V6kgNfuABJow+R00/1A0/hZRBwhQNP1QNPwWUDT7ULAhI4gBnCEGr0k1+lcAETX5ISOIAYyxIrIBIrISIQeyEDIKshQ0/LIRszEANPw0/TIDgAQxLjAxMgOAYGFqZG5hZWluYXdpbmRpYWVuZ3RuaWZyandyaXRuaXF3cm5pcmVmaW5kaW5pZ2FqZG5hZWluYXdpZGlhZW5ndG5paXRuaXF3cm5pcmVmaW5kaW5pZ2Z1YWViZnViYXd1cjT+MgMyAzIGIQSvNPlXCAhQNPlXEAFQQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NP9XABFJNfMiWzXyIQivNPIWUDXxNPQ09RZQNPZQNPdQNPhQNPlQNPpQNPsWUQcIUDT8UDT9UDT/UDTzUDTyFlA08VApSwFXAH9nKEsBV39/ZypLAVf+eWdIIzUBMgY1AkIAHDEZISESRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghC6+JSSliSwEoYlBMSIk0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECEHEkQ4EU8CEkQ4EhJEiUkVJUwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 2,
  mapDataSize: 199,
  stateKeys: 3,
  stateSize: 375,
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
                "name": "v1102",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1103",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1104",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1106",
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
                "name": "v1102",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1103",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1104",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1106",
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
                    "internalType": "struct T16",
                    "name": "_aST0_182",
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
                    "internalType": "struct T17",
                    "name": "_addWL0_182",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_182",
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
                    "internalType": "struct T17",
                    "name": "_cCM0_182",
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
                    "internalType": "struct T19",
                    "name": "_dBT0_182",
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
                    "name": "_docHash0_182",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_182",
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
                    "internalType": "struct T17",
                    "name": "_remWL0_182",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1392",
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
    "name": "_reach_oe_v1497",
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
    "name": "_reach_oe_v1755",
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
    "name": "_reach_oe_v2023",
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
    "name": "_reach_oe_v2299",
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
    "name": "_reach_oe_v2555",
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
    "name": "_reach_oe_v2811",
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
    "name": "_reach_oe_v3061",
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
    "name": "_reach_oe_v3315",
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
                    "internalType": "struct T16",
                    "name": "_aST0_182",
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
                    "internalType": "struct T17",
                    "name": "_addWL0_182",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_182",
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
                    "internalType": "struct T17",
                    "name": "_cCM0_182",
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
                    "internalType": "struct T19",
                    "name": "_dBT0_182",
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
                    "name": "_docHash0_182",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_182",
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
                    "internalType": "struct T17",
                    "name": "_remWL0_182",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1392",
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v6831",
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
        "name": "v6835",
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
        "name": "v6841",
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
  Bytecode: `0x608060405260405162004d7f38038062004d7f83398101604081905262000026916200079c565b600080554360035562000038620003f4565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b92919062000875565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415601062000219565b606081015163312e303160e01b90526080810180517f616a646e6165696e6177696e646961656e67746e6966726a777269746e697177905280517f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e602090910152517f6969746e697177726e69726566696e64696e69676675616562667562617775726040909101526200016162000485565b80513390526020808401805160609081015184516001600160a01b0391821690850152825160409081015185870180519190931690528151600090860181905287840151835183015282519093018390526080808801518351909101529251840151815190151560a090910152805160c001829052805160e0018290525143610100909101529184015190840151620001fb929062000243565b602082015161012001526200021081620002c6565b50505062000af9565b816200023f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200024d620004b0565b60005b6001811015620002a3578481600181106200026f576200026f62000908565b602002015182826001811062000289576200028962000908565b6020020152806200029a816200091e565b91505062000250565b5081818460018110620002ba57620002ba62000908565b60200201529392505050565b6040805160208082019092526000815290820151610120015151518152620002ed620004fd565b8251516001600160a01b03908116825283516020908101518216818401528085018051519092166040808501919091528251820151606080860191909152835182015160808087019190915284519091015160a08087019190915284519091015160c080870191909152845190910151151560e08087019190915284519091015161010086015283510151610120808601919091528351810151610140860152835181015151610160860152925190920151515161018084015283516101a08401526003600055436001559051620003c8918391016200098f565b60405160208183030381529060405260029080519060200190620003ee929190620005b2565b50505050565b604080516101008101909152600060a0820181815260c0830182905260e083019190915281526020810162000428620004b0565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160808101825260009181018281526060820192909252908152602081016200048062000641565b60405180602001604052806001905b620004e6604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004bf5790505090565b604080516101c08101825260008082526020808301829052828401829052606080840183905284518083018652838152608085015260a084018390528451908101855282815290810182905292830181905260c082019290925260e08101829052610100810182905261012081019190915261014081016200057e620004b0565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b828054620005c09062000abc565b90600052602060002090601f016020900481019282620005e457600085556200062f565b82601f10620005ff57805160ff19168380011785556200062f565b828001600101855582156200062f579182015b828111156200062f57825182559160200191906001019062000612565b506200063d929150620006be565b5090565b6040805161014081018252600080825260208083018290528351908101845290815290918201908152600060208083018290526040805160608101825283815291820183905281810192909252910190815260200160001515815260200160008152602001600081526020016000815260200162000480620004b0565b5b808211156200063d5760008155600101620006bf565b604080519081016001600160401b03811182821017156200070657634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200070657634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200070657634e487b7160e01b600052604160045260246000fd5b805180151581146200077f57600080fd5b919050565b80516001600160a01b03811681146200077f57600080fd5b6000818303610120811215620007b157600080fd5b620007bb620006d5565b83518152601f198201915061010080831215620007d757600080fd5b620007e16200070c565b6080841215620007f057600080fd5b620007fa6200073d565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200083260a087016200076e565b60208201526200084560c0870162000784565b60408201526200085860e0870162000784565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620008f46101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200094157634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b6001811015620003ee576200097884835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200094c565b81516001600160a01b0316815261028081016020830151620009bc60208401826001600160a01b03169052565b506040830151620009d860408401826001600160a01b03169052565b5060608301516060830152608083015162000a006080840182516001600160e01b0319169052565b5060a083015160a083015260c083015162000a3260c08401828051825260208082015190830152604090810151910152565b5060e083015161012062000a498185018315159052565b61010085015161014085810191909152908501516101608086019190915290850151915061018062000a7e8186018462000948565b9085015180516101e08601526020810151610200860152604001511515610220850152840151610240840152506101a0909201516102609091015290565b600181811c9082168062000ad157607f821691505b6020821081141562000af357634e487b7160e01b600052602260045260246000fd5b50919050565b6142768062000b096000396000f3fe6080604052600436106101ae5760003560e01c80635b48684e116100eb578063ab53f2c61161008f578063d1ad1a3711610061578063d1ad1a37146104d6578063d750cd08146104eb578063dc01fb9d146104fe578063e9b451af1461051e57005b8063ab53f2c614610453578063abe9f98d14610476578063acf0cc2214610496578063cadc2e7a146104b657005b806374fcef12116100c857806374fcef12146103f8578063817d57f31461040b578063832307571461042b578063a153a9bd1461044057005b80635b48684e146103d55780637333bd09146103dd57806373b4522c146103e557005b80631fa8b02f116101525780633bc5b7bf1161012f5780633bc5b7bf1461034557806354f2991c14610365578063573fa8a11461037857806359cac3a41461039a57005b80631fa8b02f146102a85780632080ea1c146102ea5780632152dd461461031757005b806312822a751161018b57806312822a75146102485780631956a2321461025d5780631e3f5f07146102805780631e93b0f11461029357005b8063046989b6146101b757806306dc92ff146101f8578063125f48e41461022557005b366101b557005b005b3480156101c357600080fd5b506101cc610531565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561020457600080fd5b50610218610213366004613774565b61064b565b6040516101ef91906137b7565b610238610233366004613774565b610677565b60405190151581526020016101ef565b34801561025457600080fd5b506102386106d7565b34801561026957600080fd5b5061027261079a565b6040519081526020016101ef565b61023861028e3660046137e7565b61085e565b34801561029f57600080fd5b50600354610272565b3480156102b457600080fd5b506102c86102c3366004613774565b6108d0565b60408051825181526020808401519082015291810151908201526060016101ef565b3480156102f657600080fd5b5061030a610305366004613774565b610a95565b6040516101ef9190613828565b34801561032357600080fd5b5061032c610abb565b60405190516001600160e01b03191681526020016101ef565b34801561035157600080fd5b50610218610360366004613774565b610b8b565b610238610373366004613961565b610bb1565b34801561038457600080fd5b5061038d610c09565b6040516101ef919061397d565b3480156103a657600080fd5b506103ba6103b5366004613774565b610ce5565b604080518251815260209283015192810192909252016101ef565b610238610e51565b610272610e9e565b6101b56103f336600461399e565b610eeb565b610238610406366004613774565b610f0f565b34801561041757600080fd5b50610218610426366004613774565b610f70565b34801561043757600080fd5b50600154610272565b61023861044e366004613774565b610f96565b34801561045f57600080fd5b50610468610ff8565b6040516101ef9291906139e2565b34801561048257600080fd5b50610238610491366004613774565b611095565b3480156104a257600080fd5b506102186104b1366004613774565b6111bc565b3480156104c257600080fd5b506102186104d1366004613774565b6111e2565b3480156104e257600080fd5b506102c8611208565b6101b56104f9366004613a1c565b611333565b34801561050a57600080fd5b50610218610519366004613774565b611353565b61023861052c366004613a2f565b611379565b60408051808201909152600080825260208201526003600054141561063c5760006002805461055f90613a48565b80601f016020809104026020016040519081016040528092919081815260200182805461058b90613a48565b80156105d85780601f106105ad576101008083540402835291602001916105d8565b820191906000526020600020905b8154815290600101906020018083116105bb57829003601f168201915b50505050508060200190518101906105f09190613bb6565b9050610612604080516060810182526000602082018181529282015290815290565b815181516001600160a01b0391821690526040909201518151921660209092019190915251919050565b6106486000600c6113d1565b90565b6040805160608101825260008082526020820181905291810191909152610671826113f7565b92915050565b60006106816131c6565b61068961320a565b610691613224565b60408051602080820183526001600160a01b0388168252838301919091526001835281518082019092528282528301526106cb82846114c9565b50506020015192915050565b60006003600054141561078e576000600280546106f390613a48565b80601f016020809104026020016040519081016040528092919081815260200182805461071f90613a48565b801561076c5780601f106107415761010080835404028352916020019161076c565b820191906000526020600020905b81548152906001019060200180831161074f57829003601f168201915b50505050508060200190518101906107849190613bb6565b60e0015192915050565b610648600060086113d1565b600060036000541415610852576000600280546107b690613a48565b80601f01602080910402602001604051908101604052809291908181526020018280546107e290613a48565b801561082f5780601f106108045761010080835404028352916020019161082f565b820191906000526020600020905b81548152906001019060200180831161081257829003601f168201915b50505050508060200190518101906108479190613bb6565b6101a0015192915050565b6106486000600b6113d1565b60006108686131c6565b61087061320a565b610878613224565b604080516060810182526001600160a01b0389811682528816602080830191909152818301889052838101919091526000835281518082019092528282528301526108c382846114c9565b50505190505b9392505050565b6108f460405180606001604052806000815260200160008152602001600081525090565b60036000541415610a845760006002805461090e90613a48565b80601f016020809104026020016040519081016040528092919081815260200182805461093a90613a48565b80156109875780601f1061095c57610100808354040283529160200191610987565b820191906000526020600020905b81548152906001019060200180831161096a57829003601f168201915b505050505080602001905181019061099f9190613bb6565b90506109c860408051608081018252600060208201818152928201819052606082015290815290565b60016109d385612882565b5160018111156109e5576109e5613791565b146109f15760006109ff565b6109fa84612882565b604001515b8151526001610a0d8561290f565b516001811115610a1f57610a1f613791565b14610a2b576000610a39565b610a348461290f565b604001515b8151602001526001610a4a8561299c565b516001811115610a5c57610a5c613791565b14610a68576000610a76565b610a718461299c565b604001515b815160400152519392505050565b610a906000600a6113d1565b919050565b604080516060810182526000808252602082018190529181019190915261067182612a29565b60408051602081019091526000815260036000541415610b7f57600060028054610ae490613a48565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1090613a48565b8015610b5d5780601f10610b3257610100808354040283529160200191610b5d565b820191906000526020600020905b815481529060010190602001808311610b4057829003601f168201915b5050505050806020019051810190610b759190613bb6565b6080015192915050565b6106486000600e6113d1565b604080516060810182526000808252602082018190529181019190915261067182612af2565b6000610bbb6131c6565b610bc361320a565b610bcb613224565b604080516020808201835287825260c0840191909152600583528151808201909252828252830152610bfd82846114c9565b505060a0015192915050565b60408051606081018252600080825260208201819052918101829052905460031415610cd957600060028054610c3e90613a48565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6a90613a48565b8015610cb75780601f10610c8c57610100808354040283529160200191610cb7565b820191906000526020600020905b815481529060010190602001808311610c9a57829003601f168201915b5050505050806020019051810190610ccf9190613bb6565b60c0015192915050565b6106486000600d6113d1565b604080518082019091526000808252602082015260036000541415610e4557600060028054610d1390613a48565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3f90613a48565b8015610d8c5780601f10610d6157610100808354040283529160200191610d8c565b820191906000526020600020905b815481529060010190602001808311610d6f57829003601f168201915b5050505050806020019051810190610da49190613bb6565b9050610dc6604080516060810182526000602082018181529282015290815290565b6001610dd185612af2565b516001811115610de357610de3613791565b14610def576000610dfd565b610df884612af2565b604001515b8151526001610e0b85612b7f565b516001811115610e1d57610e1d613791565b14610e29576000610e37565b610e3284612b7f565b604001515b815160200152519392505050565b610a90600060076113d1565b6000610e5b6131c6565b610e6361320a565b610e6b613224565b600060e08201526006815260408051602080820190925282815290830152610e9382846114c9565b505060c00151919050565b6000610ea86131c6565b610eb061320a565b610eb8613224565b600060608201526002815260408051602080820190925282815290830152610ee082846114c9565b505060400151919050565b610ef36131c6565b610f0b610f0536849003840184613cb1565b82612c0c565b5050565b6000610f196131c6565b610f2161320a565b610f29613224565b60408051602080820183526001600160a01b03881682526080840191909152600383528151808201909252828252830152610f6482846114c9565b50506060015192915050565b604080516060810182526000808252602082018190529181019190915261067182612882565b6000610fa06131c6565b610fa861320a565b610fb0613224565b60408051602080820183526001600160a01b0388168252610100840191909152600783528151808201909252828252830152610fec82846114c9565b505060e0015192915050565b60006060600054600280805461100d90613a48565b80601f016020809104026020016040519081016040528092919081815260200182805461103990613a48565b80156110865780601f1061105b57610100808354040283529160200191611086565b820191906000526020600020905b81548152906001019060200180831161106957829003601f168201915b50505050509050915091509091565b6000600360005414156111b0576000600280546110b190613a48565b80601f01602080910402602001604051908101604052809291908181526020018280546110dd90613a48565b801561112a5780601f106110ff5761010080835404028352916020019161112a565b820191906000526020600020905b81548152906001019060200180831161110d57829003601f168201915b50505050508060200190518101906111429190613bb6565b604080516020810190915260008152909150600061115f85612a29565b51600181111561117157611171613791565b141561118057600081526111a8565b600161118b85612a29565b51600181111561119d5761119d613791565b14156111a857600181525b519392505050565b610a906000600f6113d1565b60408051606081018252600080825260208201819052918101919091526106718261290f565b604080516060810182526000808252602082018190529181019190915261067182612b7f565b61122c60405180606001604052806000815260200160008152602001600081525090565b600360005414156113275760006002805461124690613a48565b80601f016020809104026020016040519081016040528092919081815260200182805461127290613a48565b80156112bf5780601f10611294576101008083540402835291602001916112bf565b820191906000526020600020905b8154815290600101906020018083116112a257829003601f168201915b50505050508060200190518101906112d79190613bb6565b905061130060408051608081018252600060208201818152928201819052606082015290815290565b61012082015181515261010082015181516020015260a09091015181516040015251919050565b610648600060096113d1565b61133b6131c6565b610f0b61134d36849003840184613dd5565b826114c9565b60408051606081018252600080825260208201819052918101919091526106718261299c565b60006113836131c6565b61138b61320a565b611393613224565b604080516020808201835287825260a08401919091526004835281518082019092528282528301526113c582846114c9565b50506080015192915050565b81610f0b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561144357611443613791565b14156114ba576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561148457611484613791565b600181111561149557611495613791565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6114d9600360005414602f6113d1565b81516114f49015806114ed57508251600154145b60306113d1565b60008080556002805461150690613a48565b80601f016020809104026020016040519081016040528092919081815260200182805461153290613a48565b801561157f5780601f106115545761010080835404028352916020019161157f565b820191906000526020600020905b81548152906001019060200180831161156257829003601f168201915b50505050508060200190518101906115979190613bb6565b90506115a16132f6565b6115b0600019431060316113d1565b7f6c0c03bee9b44c4f663edb600044e12a0644f7dd1ecffc11cdeff463126f0f0933856040516115e1929190613eea565b60405180910390a1600060208501515151600781111561160357611603613791565b1415611955576020808501515101518152611620341560116113d1565b610180820151602080830180519290925261016084018051820151835183015251604090810151925192151592019190915282015161166d906116669033906000612e16565b60126113d1565b81518151516116ad916001600160a01b039182169116146116a35760408301518251516001600160a01b039081169116146116a6565b60015b60136113d1565b8051604001516116c090151560146113d1565b80516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff00001916905586518601519094168352600485529181902080549093168217909255835191820151919092015190919061173990612af2565b51600181111561174b5761174b613791565b1461175757600061176b565b81516020015161176690612af2565b604001515b6117759190613ffc565b81516020908101516001600160a01b0390811660009081526004835260408082206001908101959095558551840151909216815260078352819020805460ff1916841790558351908101519101519091906117cf906113f7565b5160018111156117e1576117e1613791565b146117ed576000611801565b8151602001516117fc906113f7565b604001515b61180b9190613ffc565b81516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527fda0729da5cb44df6a79cb32734dd361dace2a6d302687e962ac35154306251f9910160405180910390a16001835261186f613507565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845183015260a08088015185519094019390935260c08088015185519092019190915260e087015184519015159301929092526101008601519251909101919091528251015161012084015161190b9190613ffc565b816020015160e001818152505043816020015161010001818152505061193c83610140015160008460200151612e2c565b6020820151610120015261194f81612ea0565b5061287c565b600160208501515151600781111561196f5761196f613791565b1415611b585760208401515160409081015190820152611991341560156113d1565b61018082015160608201805191909152610160830180516020908101518351820152905160409081015192519215159201919091528201516119e1906119da9033906000612e16565b60166113d1565b8151611a1e906001600160a01b03163314611a145782604001516001600160a01b0316336001600160a01b031614611a17565b60015b60176113d1565b60408181018051516001600160a01b039081166000908152600a6020908152848220805460ff191660019081179091559351519092168152839020805462ff00001916905591519081527fcafdc2cbee8ee57c7b9e96f793d2d68fb24fdeeeabbdb869140e69575f998aaa910160405180910390a160016020840152611aa2613507565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845184015260c08088015185519093019290925260e0808801518551901515920191909152610100808801518551909301929092526101208701518451909101529151439201919091526101408401519083015161193c9190600090612e2c565b6002602085015151516007811115611b7257611b72613791565b1415611f6f57611b84341560186113d1565b61018082015160808201805191909152610160830180516020908101518351909101525160409081015182519015159101526101408301519051611bcb9190600090612e2c565b8160a00181905250611bed611be63384602001516000612e16565b60196113d1565b6000611bf833612a29565b516001811115611c0a57611c0a613791565b1415611c1c57600060c0820152611c47565b6001611c2733612a29565b516001811115611c3957611c39613791565b1415611c4757600160c08201525b611c568160c00151601a6113d1565b60a08101515151611c6a901515601b6113d1565b611c7d600083610120015111601c6113d1565b6001611c88336113f7565b516001811115611c9a57611c9a613791565b14611ca6576000611cb4565b611caf336113f7565b604001515b60e08201819052610120830151611cce911115601d6113d1565b611ce060008260e0015111601e6113d1565b81610120015182606001518260e00151611cfa919061402a565b611d049190614049565b6101008201819052610120820181905260a08201515151611d28911115601f6113d1565b61012081015160a08201515151611d3f919061406b565b610140820180519190915260a0820180515160209081015183518201529051516040908101519251921515920191909152820151610120820151611d8591903390612fc2565b336000818152600860205260409020805460ff1916600190811790915561010083015191611db29061290f565b516001811115611dc457611dc4613791565b14611dd0576000611dde565b611dd93361290f565b604001515b611de89190613ffc565b33600081815260086020908152604080832060019081019590955560099091529020805460ff1916831790558190611e1f9061299c565b516001811115611e3157611e31613791565b14611e3d576000611e4b565b611e463361299c565b604001515b611e559190613ffc565b336000908152600960209081526040918290206001019290925561010083015190519081527ff83ef0c90afacc892fb1de72a98fe12accbc80368556b660f200a4246de7374d910160405180910390a16101008101516040840152611eb8613507565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c08087015184519092019190915260e0808701518451901515908401526101008088015185519093019290925261012087015184519091015291514392019190915282015161014083015161193c9190600090612e2c565b6003602085015151516007811115611f8957611f89613791565b1415612136576020808501515160800151610160830152611fac903415906113d1565b6101808083015190820180519190915261016083018051602090810151835182015290516040908101519251921515920191909152820151611ffc90611ff59033906000612e16565b60216113d1565b8151612039906001600160a01b0316331461202f5782604001516001600160a01b0316336001600160a01b031614612032565b60015b60226113d1565b604051600181527f2100ef2895a6f6e78456e37d7187a15d44692367aa05e39a131b719f0a6213689060200160405180910390a16001606084015261207c613507565b825181516001600160a01b03918216905260208085015183519083169082015261016084015151818401805191909316905260608086015183519092019190915260808086015183516040015260a08087015184519093019290925260c08087015184519092019190915260e08087015184519015159301929092526101008087015184519092019190915261012086015183519092019190915290514391015261014083015161018083015161193c9190600090612e2c565b600460208501515151600781111561215057612150613791565b14156123495760208401515160a001516101a08201819052516101c082015261217b341560236113d1565b806101c001518261018001516121919190613ffc565b6101e08201805191909152610160830180516020908101518351820152905160409081015192519215159201919091528201516101c08201516121e1916121da91339190612e16565b60246113d1565b815161221e906001600160a01b031633146122145782604001516001600160a01b0316336001600160a01b031614612217565b60015b60256113d1565b6122316000826101c001511160266113d1565b604051600181527f503beb2aeaf5a08116b18244bb8e62c135c24d9b410dfaa7ebe1d968b266a13d9060200160405180910390a160016080840152612274613507565b825181516001600160a01b03918216905260208085015183519083169082015260408086015182850180519190941690526101a08501515183519092019190915260808501519151015260a08301516122cf90600190613ffc565b6020820180516060019190915260c084015181516080015260e0840151905190151560a0909101526101a08201515161010084015161230e9190613ffc565b60208201805160c00191909152610120840151815160e001525143610100909101526101408301516101e083015161193c9190600090612e2c565b600560208501515151600781111561236357612363613791565b141561250d5760208401515160c00151610200820152612385341560276113d1565b6101808201516102208201805191909152610160830180516020908101518351820152905160409081015192519215159201919091528201516123d6906123cf9033906000612e16565b60286113d1565b8151612413906001600160a01b031633146124095782604001516001600160a01b0316336001600160a01b03161461240c565b60015b60296113d1565b604051600181527ff7caa06bc69493f0471cc8e07cdbbbfd4f34e5deb86203bc1a07a0b2e9f46c629060200160405180910390a1600160a0840152612456613507565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a0808701518451909301929092526102008501515183519091015260e080860151835190151592019190915261010080860151835160c0015261012086015183519092019190915290514391015261014083015161022083015161193c9190600090612e2c565b600660208501515151600781111561252757612527613791565b1415612689576125393415602a6113d1565b61018082015161024082018051919091526101608301805160209081015183518201529051604090810151925192151592019190915282015161258a906125839033906000612e16565b602b6113d1565b604051600181527f2e12198b879823aa513db71bec95892d01e25a65d7f9e42ad0213db8ba4bd4a09060200160405180910390a1600160c08401526125cd613507565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c08087015184519092019190915260e08087015184519015159301929092526101008087015184519092019190915261012086015183519092019190915290514391015261014083015161024083015161193c9190600090612e2c565b60076020850151515160078111156126a3576126a3613791565b141561287c5760208401515161010001516102608201526126c63415602c6113d1565b610180820151610280820180519190915261016083018051602090810151835182015290516040908101519251921515920191909152820151612717906127109033906000612e16565b602d6113d1565b8151612754906001600160a01b0316331461274a5782604001516001600160a01b0316336001600160a01b03161461274d565b60015b602e6113d1565b610260810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527fedce25b74cdc52e785be3bbef7b57f5df47b90c15d4cc02fcd2847a892521d1c910160405180910390a1600160e08401526127c0613507565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c08087015184519092019190915260e08087015184519015159301929092526101008087015184519092019190915261012086015183519092019190915290514391015261014083015161028083015161193c9190600090612e2c565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156128ce576128ce613791565b14156114ba576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561148457611484613791565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111561295b5761295b613791565b14156114ba576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561148457611484613791565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff1660018111156129e8576129e8613791565b14156114ba576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561148457611484613791565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115612a7557612a75613791565b14156114ba576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115612ab657612ab6613791565b6001811115612ac757612ac7613791565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115612b3e57612b3e613791565b14156114ba576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561148457611484613791565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612bcb57612bcb613791565b14156114ba576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561148457611484613791565b612c1c60036000541460346113d1565b8151612c37901580612c3057508251600154145b60356113d1565b600080805560028054612c4990613a48565b80601f0160208091040260200160405190810160405280929190818152602001828054612c7590613a48565b8015612cc25780601f10612c9757610100808354040283529160200191612cc2565b820191906000526020600020905b815481529060010190602001808311612ca557829003601f168201915b5050505050806020019051810190612cda9190613bb6565b9050612cec60001943101560366113d1565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1612d3f341560326113d1565b8051612d57906001600160a01b0316331460336113d1565b612d5f613507565b815181516001600160a01b039182169052602080840151835190831690820152604080850151828501805191909416905260608086015184519093019290925260808086015184519092019190915260a08086015184519093019290925260c08086015184519092019190915260e080860151845190151593019290925261010080860151845190920191909152610120808601518451909301929092528251439101526101408401519151015261287c81612ea0565b6000612e2483853085612fdb565b949350505050565b612e34613530565b60005b6001811015612e8057848160018110612e5257612e52614014565b6020020151828260018110612e6957612e69614014565b602002015280612e7881614082565b915050612e37565b5081818460018110612e9457612e94614014565b60200201529392505050565b6040805160208082019092526000815290820151610120015151518152612ec561357b565b8251516001600160a01b03908116825283516020908101518216818401528085018051519092166040808501919091528251820151606080860191909152835182015160808087019190915284519091015160a08087019190915284519091015160c080870191909152845190910151151560e08087019190915284519091015161010086015283510151610120808601919091528351810151610140860152835181015151610160860152925190920151515161018084015283516101a08401526003600055436001559051612f9e918391016140e1565b6040516020818303038152906040526002908051906020019061287c929190613629565b612fcd8383836130b5565b612fd657600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161304291614207565b60006040518083038185875af1925050503d806000811461307f576040519150601f19603f3d011682016040523d82523d6000602084013e613084565b606091505b509150915061309582826001613186565b50808060200190518101906130aa9190614223565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161311491614207565b60006040518083038185875af1925050503d8060008114613151576040519150601f19603f3d011682016040523d82523d6000602084013e613156565b606091505b509150915061316782826002613186565b508080602001905181019061317c9190614223565b9695505050505050565b606083156131955750816108c9565b8251156131a55782518084602001fd5b60405163100960cb60e01b8152600481018390526024016113ee565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518060400160405280600081526020016131c16136ad565b6040805161012081019091528060008152604080516060810182526000808252602082810182905292820152910190815260200161326d60408051602081019091526000815290565b81526000602082015260400161328e60408051602081019091526000815290565b81526020016132a96040518060200160405280600081525090565b81526020016132d560408051608081018252600060208201818152928201819052606082015290815290565b8152600060208201526040016131c160408051602081019091526000815290565b604080516103008101825260006102a082018181526102c083018290526102e083018290528252825160608082018552828252602080830184905282860184905280850192909252845180830186528381528486015284518082018652838152808301849052808601849052818501528451908101855282815290810182905292830152608081019190915260a0810161338e613530565b81526020016000151581526020016000815260200160008152602001600081526020016133d7604051806060016040528060008152602001600081526020016000151581525090565b81526020016133f160408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200161342c6040518060200160405280600081525090565b81526020016000815260200161345e604051806060016040528060008152602001600081526020016000151581525090565b815260200161348a60408051608081018252600060208201818152928201819052606082015290815290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016134e460408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160808101825260009181018281526060820192909252908152602081016131c16136c0565b60405180602001604052806001905b613565604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161353f5790505090565b604080516101c08101825260008082526020808301829052828401829052606080840183905284518083018652838152608085015260a0840183905284519081018552828152908101829052928301529060c0820190815260200160001515815260200160008152602001600081526020016135f5613530565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b82805461363590613a48565b90600052602060002090601f016020900481019282613657576000855561369d565b82601f1061367057805160ff191683800117855561369d565b8280016001018555821561369d579182015b8281111561369d578251825591602001919060010190613682565b506136a9929150613747565b5090565b60405180602001604052806131c1613224565b6040805161014081018252600080825260208201529081016136ed60408051602081019091526000815290565b81526020016000815260200161371c604080516060810182526000808252602082018190529181019190915290565b81526020016000151581526020016000815260200160008152602001600081526020016131c1613530565b5b808211156136a95760008155600101613748565b6001600160a01b038116811461377157600080fd5b50565b60006020828403121561378657600080fd5b81356108c98161375c565b634e487b7160e01b600052602160045260246000fd5b6002811061377157613771613791565b815160608201906137c7816137a7565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156137fc57600080fd5b83356138078161375c565b925060208401356138178161375c565b929592945050506040919091013590565b81516060820190613838816137a7565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156138935761389361385a565b60405290565b6040516020810167ffffffffffffffff811182821017156138935761389361385a565b6040516101c0810167ffffffffffffffff811182821017156138935761389361385a565b6040805190810167ffffffffffffffff811182821017156138935761389361385a565b604051610120810167ffffffffffffffff811182821017156138935761389361385a565b60006060828403121561393957600080fd5b613941613870565b905081358152602082013560208201526040820135604082015292915050565b60006060828403121561397357600080fd5b6108c98383613927565b81518152602080830151908201526040808301519082015260608101610671565b6000604082840312156139b057600080fd5b50919050565b60005b838110156139d15781810151838201526020016139b9565b8381111561287c5750506000910152565b8281526040602082015260008251806040840152613a078160608501602087016139b6565b601f01601f1916919091016060019392505050565b60006101c082840312156139b057600080fd5b600060208284031215613a4157600080fd5b5035919050565b600181811c90821680613a5c57607f821691505b602082108114156139b057634e487b7160e01b600052602260045260246000fd5b8051610a908161375c565b600060208284031215613a9a57600080fd5b613aa2613899565b82519091506001600160e01b031981168114613abd57600080fd5b815292915050565b600060608284031215613ad757600080fd5b613adf613870565b905081518152602082015160208201526040820151604082015292915050565b801515811461377157600080fd5b8051610a9081613aff565b600060608284031215613b2a57600080fd5b613b32613870565b905081518152602082015160208201526040820151613b5081613aff565b604082015292915050565b600082601f830112613b6c57600080fd5b613b74613899565b80606080850186811115613b8757600080fd5b855b81811015613baa57613b9b8882613b18565b85526020909401938201613b89565b50919695505050505050565b60006102808284031215613bc957600080fd5b613bd16138bc565b613bda83613a7d565b8152613be860208401613a7d565b6020820152613bf960408401613a7d565b604082015260608301516060820152613c158460808501613a88565b608082015260a083015160a0820152613c318460c08501613ac5565b60c0820152610120613c44818501613b0d565b60e08301526101408085015161010084015261016080860151838501526101809250613c7287848801613b5b565b82850152613c84876101e08801613b18565b908401525061024084015190820152610260909201516101a083015250919050565b8035610a9081613aff565b600060408284031215613cc357600080fd5b6040516040810181811067ffffffffffffffff82111715613ce657613ce661385a565b604052823581526020830135613cfb81613aff565b60208201529392505050565b803560088110610a9057600080fd5b600060608284031215613d2857600080fd5b613d30613870565b90508135613d3d8161375c565b81526020820135613d4d8161375c565b806020830152506040820135604082015292915050565b600060208284031215613d7657600080fd5b613d7e613899565b90508135613abd8161375c565b600060208284031215613d9d57600080fd5b613da5613899565b9135825250919050565b600060608284031215613dc157600080fd5b613dc9613899565b9050613abd8383613927565b60008183036101c0811215613de957600080fd5b613df16138e0565b833581526101a080601f1984011215613e0957600080fd5b613e11613899565b9250613e1b613903565b613e2760208701613d07565b8152613e368760408801613d16565b6020820152613e488760a08801613d64565b6040820152613e5960c08701613ca6565b6060820152613e6b8760e08801613d64565b6080820152610100613e7f88828901613d8b565b60a0830152613e92886101208901613daf565b60c0830152613ea46101808801613ca6565b60e0830152613eb588848901613d64565b9082015283525060208101919091529392505050565b610f0b8282518051825260208082015190830152604090810151910152565b6001600160a01b038316815281516020808301919091528201515180516101e08301919060088110613f1e57613f1e613791565b60408401526020810151613f57606085018280516001600160a01b03908116835260208083015190911690830152604090810151910152565b50604081015180516001600160a01b031660c085015250606081015180151560e0850152506080810151610100613f9981860183516001600160a01b03169052565b60a08301515161012086015260c08301519150613fba610140860183613ecb565b60e083015115156101a086015290910151516001600160a01b03166101c0909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561400f5761400f613fe6565b500190565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561404457614044613fe6565b500290565b60008261406657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561407d5761407d613fe6565b500390565b600060001982141561409657614096613fe6565b5060010190565b8060005b600181101561287c576140cb84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016140a1565b81516001600160a01b031681526102808101602083015161410d60208401826001600160a01b03169052565b50604083015161412860408401826001600160a01b03169052565b5060608301516060830152608083015161414f6080840182516001600160e01b0319169052565b5060a083015160a083015260c083015161418060c08401828051825260208082015190830152604090810151910152565b5060e08301516101206141968185018315159052565b6101008501516101408581019190915290850151610160808601919091529085015191506101806141c98186018461409d565b9085015180516101e08601526020810151610200860152604001511515610220850152840151610240840152506101a0909201516102609091015290565b600082516142198184602087016139b6565b9190910192915050565b60006020828403121561423557600080fd5b81516108c981613aff56fea2646970667358221220cd3d58ae2daad2c13ca12c2565f3e95a8949faaf46e60a002ca74d676bd9732264736f6c634300080c0033`,
  BytecodeLen: 19839,
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
    at: './index.rsh:286:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:103:96:after expr stmt semicolon',
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
  "addWL": addWL,
  "cBT": cBT,
  "cCM": cCM,
  "dBT": dBT,
  "docHash": docHash,
  "optIn": optIn,
  "remWL": remWL
  };
export const _APIs = {
  aST: aST,
  addWL: addWL,
  cBT: cBT,
  cCM: cCM,
  dBT: dBT,
  docHash: docHash,
  optIn: optIn,
  remWL: remWL
  };
