import{a as J,cz as X,a$ as Y,aS as _,aP as ee,cQ as g,aT as i,b9 as te,cT as ne,aV as U,bd as z,bc as ae,aZ as j,cU as ie,cV as oe,cW as H,cX as x,cY as se,cZ as le,c_ as ce,c$ as re,bt as de,bm as ue,be as W,bq as fe,cx as he,cS as me,w as ge,_ as r}from"./index-DAt5dF0_.js";import{g as _e,l as pe}from"./oauth-BY4uKVCQ.js";function we(e){switch(e){case"google":return"Sign In - Google Accounts";default:return`Sign In - ${e.slice(0,1).toUpperCase()}${e.slice(1)}`}}function ye(e){switch(e){case"facebook":return{width:715,height:555};default:return{width:350,height:500}}}function xe(e,t,n){switch(e){case"apple":case"facebook":case"google":case"farcaster":case"telegram":case"discord":return _e({authOption:e,client:t,ecosystem:n});default:return""}}function Ee({authOption:e,themeObj:t,client:n,ecosystem:l}){const{height:p,width:c}=ye(e),E=(window.innerHeight-p)/2,L=(window.innerWidth-c)/2,s=window.open(xe(e,n,l),void 0,`width=${c}, height=${p}, top=${E}, left=${L}`);if(s){const u=we(e);s.document.title=u,s.document.body.innerHTML=Le,s.document.body.style.background=t.colors.modalBg,s.document.body.style.color=t.colors.accentText}return s&&window.addEventListener("beforeunload",()=>{s==null||s.close()}),s}const Le=`
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
        }
  }
</style>
`;async function be(e){const n=await(await fetch(`${J("inAppWallet")}/api/2024-05-05/ecosystem-wallet`,{headers:{"x-ecosystem-id":e}})).json();if(!n||n.code==="UNAUTHORIZED")throw new Error(n.message||`Could not find ecosystem wallet with id ${e}, please check your ecosystem wallet configuration.`);return n.authOptions??void 0}function ke(e){return/^\S+@\S+\.\S+$/.test(e.replace(/\+/g,""))}const q=["email","phone","google","apple","facebook","passkey"],je=e=>{var R,D,V;const t=e.locale,{wallet:n}=e,l=X(),p=Y(),c=_.useMemo(()=>{var a,o;return e.wallet.id==="inApp"?(o=(a=e.wallet.getConfig())==null?void 0:a.metadata)==null?void 0:o.image:void 0},[e.wallet]),E={google:t.signInWithGoogle,facebook:t.signInWithFacebook,apple:t.signInWithApple,discord:t.signInWithDiscord,farcaster:"Farcaster",telegram:"Telegram"},{data:L,isLoading:s}=ee({queryKey:["auth-options",n.id],queryFn:async()=>g(n)?be(n.id):null,enabled:g(n),retry:!1}),u=g(n)?L??q:((D=(R=n.getConfig())==null?void 0:R.auth)==null?void 0:D.options)??q,b=u.indexOf("email"),m=b!==-1,k=u.indexOf("phone"),f=k!==-1,[I,A]=_.useState(null),h=_.useMemo(()=>I||(m&&f?b<k?"email":"phone":m?"email":f?"phone":"none"),[m,f,b,k,I]);if(g(n)&&s)return i.jsx(te,{});const K=u.includes("passkey"),O=h==="email"?t.emailPlaceholder:t.phonePlaceholder,T=h==="email"?t.emailRequired:t.phoneRequired;let w="text";h==="email"?w="email":h==="phone"&&(w="tel");const d=u.filter(a=>ne.includes(a)),$=d.length>0,C=g(n)?{id:n.id,partnerId:(V=n.getConfig())==null?void 0:V.partnerId}:void 0,G=async a=>{var M,F;const o=n.getConfig(),S=((M=o==null?void 0:o.auth)==null?void 0:M.mode)??"popup";if(o&&"auth"in o&&S!=="popup"&&!e.isLinking)return pe({authOption:a,client:e.client,ecosystem:C,redirectUrl:(F=o==null?void 0:o.auth)==null?void 0:F.redirectUrl,mode:S});try{const y=Ee({authOption:a,themeObj:p,client:e.client,ecosystem:C});if(!y)throw new Error("Failed to open login window");const B={chain:e.chain,client:e.client,strategy:a,openedWindow:y,closeOpenedWindow:P=>{P.close()}},Q=(()=>{if(e.isLinking){if(n.id!=="inApp")throw new Error("Only in-app wallets support multi-auth");return he(n,B)}else{const P=n.connect(B);return me(a,ge),P}})();l({socialLogin:{type:a,connectionPromise:Q}}),e.select()}catch(y){console.error(`Error signing in with ${a}`,y)}};function Z(){l({passkeyLogin:!0}),e.select()}function N(){l({walletLogin:!0}),e.select()}const v=d.length>2;return i.jsxs(U,{flex:"column",gap:"md",style:{position:"relative"},children:[c&&i.jsxs(i.Fragment,{children:[i.jsx(z,{client:e.client,src:c.src,alt:c.alt,width:`${c.width}`,height:`${c.height}`,style:{margin:"auto"}}),i.jsx(ae,{y:"xxs"})]}),$&&i.jsx(U,{flex:"row",center:"x",gap:d.length>4?"xs":"sm",style:{justifyContent:"space-between",display:"grid",gridTemplateColumns:`repeat(${d.length}, 1fr)`},children:d.map(a=>{const o=v?d.length>4?j.md:j.lg:j.md;return i.jsxs(Ie,{"aria-label":`Login with ${a}`,"data-variant":v?"icon":"full",variant:"outline",onClick:()=>{G(a)},children:[i.jsx(z,{src:ie[a],width:o,height:o,client:e.client}),!v&&`${d.length===1?"Continue with ":""}${E[a]}`]},a)})}),e.size==="wide"&&$&&(m||f)&&i.jsx(oe,{text:t.or}),m&&i.jsx(i.Fragment,{children:h==="email"?i.jsx(H,{type:w,onSelect:a=>{l({emailLogin:a}),e.select()},placeholder:O,name:"email",errorMessage:a=>{if(!ke(a.toLowerCase()))return t.invalidEmail},emptyErrorMessage:T,submitButtonText:t.submitEmail}):i.jsx(x,{client:e.client,icon:se,onClick:()=>{A("email")},title:t.emailPlaceholder})}),f&&i.jsx(i.Fragment,{children:h==="phone"?i.jsx(H,{format:"phone",type:w,onSelect:a=>{l({phoneLogin:a.replace(/[-\(\) ]/g,"")}),e.select()},placeholder:O,name:"phone",errorMessage:a=>{const o=a.replace(/[-\(\) ]/g,"");if(!/^[0-9]+$/.test(o)&&f)return t.invalidPhone},emptyErrorMessage:T,submitButtonText:t.submitEmail}):i.jsx(x,{client:e.client,icon:le,onClick:()=>{A("phone")},title:t.phonePlaceholder})}),K&&i.jsx(i.Fragment,{children:i.jsx(x,{client:e.client,icon:ce,onClick:()=>{Z()},title:t.passkey})}),e.isLinking&&i.jsx(i.Fragment,{children:i.jsx(x,{client:e.client,icon:re(""),onClick:()=>{N()},title:t.linkWallet})})]})},Ie=de(ue)({flexGrow:1,"&[data-variant='full']":{display:"flex",justifyContent:"flex-start",padding:W.md,gap:W.sm,fontSize:fe.md,fontWeight:500,transition:"background-color 0.2s ease","&:active":{boxShadow:"none"}},"&[data-variant='icon']":{padding:W.sm}});async function ve(e){switch(e){case"es_ES":return(await r(async()=>{const{default:t}=await import("./es-KRP1eUth.js");return{default:t}},[])).default;case"ja_JP":return(await r(async()=>{const{default:t}=await import("./ja-CvlQDx_E.js");return{default:t}},[])).default;case"tl_PH":return(await r(async()=>{const{default:t}=await import("./tl-DYNbjJIy.js");return{default:t}},[])).default;case"vi_VN":return(await r(async()=>{const{default:t}=await import("./vi-DNa2Is64.js");return{default:t}},[])).default;case"de_DE":return(await r(async()=>{const{default:t}=await import("./de-B4p3brce.js");return{default:t}},[])).default;case"ko_KR":return(await r(async()=>{const{default:t}=await import("./kr-l36CKqHK.js");return{default:t}},[])).default;case"fr_FR":return(await r(async()=>{const{default:t}=await import("./fr-DIyoT90O.js");return{default:t}},[])).default;default:return(await r(async()=>{const{default:t}=await import("./en-ihCLWX_K.js");return{default:t}},[])).default}}function We(e){const[t,n]=_.useState(void 0);return _.useEffect(()=>{ve(e).then(l=>{n(l)})},[e]),t}export{je as C,Ee as o,We as u};
