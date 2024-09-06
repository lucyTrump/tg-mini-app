import{dh as e,di as a,a7 as i,F as o}from"./index-DAt5dF0_.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:a(t.raw),s=e(`${c}${r.length}`);return i(o([s,r]),n)}export{u as hashMessage};
