import{H as a}from"./index-DAt5dF0_.js";const p="0xe9703d25",d=[{name:"_tokenId",type:"uint256",internalType:"uint256"}],T=[{name:"startTimestamp",type:"uint256",internalType:"uint256"},{name:"maxClaimableSupply",type:"uint256",internalType:"uint256"},{name:"supplyClaimed",type:"uint256",internalType:"uint256"},{name:"quantityLimitPerWallet",type:"uint256",internalType:"uint256"},{name:"merkleRoot",type:"bytes32",internalType:"bytes32"},{name:"pricePerToken",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"metadata",type:"string",internalType:"string"}];async function C(t){return a({contract:t.contract,method:[p,d,T],params:[t.tokenId]})}const I="0x5ab063e8",P=[{type:"uint256",name:"_tokenId"}],k=[{type:"uint256"}];async function S(t){return a({contract:t.contract,method:[I,P,k],params:[t.tokenId]})}const _="0xd45b28d7",f=[{type:"uint256",name:"_tokenId"},{type:"uint256",name:"_conditionId"}],N=[{type:"tuple",name:"condition",components:[{type:"uint256",name:"startTimestamp"},{type:"uint256",name:"maxClaimableSupply"},{type:"uint256",name:"supplyClaimed"},{type:"uint256",name:"quantityLimitPerWallet"},{type:"bytes32",name:"merkleRoot"},{type:"uint256",name:"pricePerToken"},{type:"address",name:"currency"},{type:"string",name:"metadata"}]}];async function g(t){return a({contract:t.contract,method:[_,f,N],params:[t.tokenId,t.conditionId]})}async function b(t){const i=async()=>{const e=await S(t);return g({...t,conditionId:e})},r=async()=>{const[e,m,o,c,l,u,y,s]=await C({...t,tokenId:t.tokenId});return{startTimestamp:e,maxClaimableSupply:m,supplyClaimed:o,quantityLimitPerWallet:c,merkleRoot:l,pricePerToken:u,currency:y,metadata:s}},n=(await Promise.allSettled([i(),r()])).find(e=>e.status==="fulfilled");if((n==null?void 0:n.status)==="fulfilled")return n.value;throw new Error("Claim condition not found")}export{b as getActiveClaimCondition};
