import{cq as a,cz as i,d7 as s,aT as t,cD as o,b9 as d}from"./index-DAt5dF0_.js";import{u as m,C as u}from"./useInAppWalletLocale-CznzjFdk.js";import"./oauth-BY4uKVCQ.js";function S(e){const{screen:c}=a(),n=i(),l=m(e.connectLocale.id);return e.size==="wide"||c!==s.main&&e.size==="compact"?t.jsx(o,{walletId:e.wallet.id,selectWallet:()=>{n({}),e.select()},client:e.client,connectLocale:e.connectLocale,recommendedWallets:e.recommendedWallets,isActive:c===e.wallet,badge:void 0}):l?t.jsx(u,{locale:l,wallet:e.wallet,done:e.done,select:e.select,goBack:e.goBack,chain:e.chain,client:e.client,size:e.size}):t.jsx(d,{height:"195px"})}export{S as default};
