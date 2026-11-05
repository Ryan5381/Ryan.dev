import{g as R,a as A,r as g,b as I,j as t,s as M,c as D,d as X,m as $,e as f,k as y,B as s,C as B}from"./index-B146gKJn.js";import{Q as F,N as U,C as E,T as z}from"./supabase-B4KiB8BU.js";import{u as b,F as O}from"./index-D852M6sh.js";import{m as l,a as v}from"./use-reduced-motion-BLorg7xH.js";import{D as m}from"./Divider-DPUwHsvD.js";function P(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function W(e){return parseFloat(e)}function _(e){return R("MuiSkeleton",e)}A("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const L=e=>{const{classes:r,variant:a,animation:i,hasChildren:n,width:o,height:d}=e;return X({root:["root",a,i,n&&"withChildren",n&&!o&&"fitContent",n&&!d&&"heightAuto"]},_,r)},c=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,p=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,N=typeof c!="string"?f`
        animation: ${c} 2s ease-in-out 0.5s infinite;
      `:null,T=typeof p!="string"?f`
        &::after {
          animation: ${p} 2s linear 0.5s infinite;
        }
      `:null,H=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[a.variant],a.animation!==!1&&r[a.animation],a.hasChildren&&r.withChildren,a.hasChildren&&!a.width&&r.fitContent,a.hasChildren&&!a.height&&r.heightAuto]}})($(({theme:e})=>{const r=P(e.shape.borderRadius)||"px",a=W(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:i})=>i.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:i})=>i.hasChildren&&!i.width,style:{maxWidth:"fit-content"}},{props:({ownerState:i})=>i.hasChildren&&!i.height,style:{height:"auto"}},{props:{animation:"pulse"},style:N||{animation:`${c} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:T||{"&::after":{animation:`${p} 2s linear 0.5s infinite`}}}]}})),K=g.forwardRef(function(r,a){const i=I({props:r,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:d="span",height:h,style:w,variant:C="text",width:k,...u}=i,x={...i,animation:n,component:d,variant:C,hasChildren:!!u.children},S=L(x);return t.jsx(H,{as:d,ref:a,className:D(S.root,o),ownerState:x,...u,style:{width:k,height:h,...w}})}),Q=()=>{const{data:e=[],isLoading:r,isError:a,isFetching:i,refetch:n}=b();if(r)return t.jsx(s,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"40vh"},children:t.jsx(B,{sx:{color:"#D4B483",filter:"drop-shadow(0 0 8px rgba(212, 180, 131, 0.4))"},size:50,thickness:4})});if(a)return t.jsx(F,{message:"無法載入個人資訊，請稍後重試。",retrying:i,onRetry:()=>{n()}});const o=e[0];return o?(console.log("profile",o.full_name),t.jsx(s,{component:l.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},sx:{padding:"1.5rem",whiteSpace:"pre-line",lineHeight:1.8,color:"rgba(255, 255, 255, 0.8)",fontSize:"1.05rem"},children:o.bio||"尚未填寫自我介紹"})):t.jsx(s,{children:"尚未設定個人檔案資料"})},j=()=>{const e=v();return t.jsxs(s,{role:"status","aria-label":"頭像載入中",sx:{position:"absolute",inset:0,display:"grid",placeItems:"center"},children:[t.jsx(K,{variant:"rectangular",animation:e?!1:"wave",width:"100%",height:"100%",sx:{position:"absolute",inset:0,bgcolor:"rgba(212,180,131,0.08)"}}),t.jsx(l.div,{animate:e?void 0:{opacity:[.45,1,.45],y:[0,-4,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},style:{display:"flex",color:"#D4B483",fontSize:36},children:t.jsx(O,{"aria-hidden":"true"})})]})},V=({src:e,alt:r})=>{const[a,i]=g.useState("loading"),n=v();return t.jsxs(t.Fragment,{children:[a==="loading"&&t.jsx(j,{}),a==="failed"&&t.jsx(s,{role:"status",sx:{color:"#D4B483",p:2},children:"頭像載入失敗，請稍後重新整理。"}),t.jsx(l.img,{src:e,alt:r,decoding:"async",onLoad:()=>i("ready"),onError:()=>i("failed"),"aria-hidden":a!=="ready",initial:!1,animate:{opacity:a==="ready"?1:0,scale:a==="ready"||n?1:1.04},transition:{duration:n?0:.6,ease:"easeOut"},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}})]})},q=()=>{const{data:e=[],isLoading:r,isError:a}=b(),i=e[0];return t.jsx(s,{sx:{width:"350px",height:"350px",borderRadius:"20px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.2)",backgroundColor:"rgba(255, 255, 255, 0.05)",backdropFilter:"blur(10px)",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:r?t.jsx(j,{}):i?.avatar_url?t.jsx(V,{src:i.avatar_url,alt:i.full_name||"Avatar"},i.avatar_url):t.jsx(s,{sx:{color:"rgba(255,255,255,0.2)",fontSize:"0.9rem",textAlign:"center",p:2},children:a?"頭像資料載入失敗":"尚未上傳頭像"})})},et=()=>t.jsxs(s,{sx:{width:"100%",minHeight:"100vh",background:"linear-gradient(170deg, #878274 0%, #24221a 100%)"},children:[t.jsx(U,{}),t.jsxs(E,{maxWidth:"lg",sx:{pt:{xs:12,md:15},pb:8},children:[t.jsx(s,{sx:{mb:6,textAlign:"center"},children:t.jsx(z,{variant:"h2",sx:{fontFamily:"'Playfair Display', serif",color:"#D4B483",fontWeight:400,fontSize:{xs:"2.5rem",md:"3.5rem"},mb:2},children:"About Me"})}),t.jsxs(s,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"center",md:"flex-start"},gap:{xs:5,md:8},mt:4},children:[t.jsx(s,{sx:{flexShrink:0},children:t.jsx(q,{})}),t.jsxs(s,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:"600px",width:"100%"},children:[t.jsx(s,{component:l.div,initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1,ease:"easeInOut",delay:.5},style:{originX:0,width:"100%"},children:t.jsx(m,{sx:{width:"100%",height:"2px",backgroundColor:"#96a29f",mb:"2rem",border:"none",borderRadius:"2px",opacity:.5}})}),t.jsx(Q,{}),t.jsx(s,{component:l.div,initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1,ease:"easeInOut",delay:1},style:{originX:0,width:"100%"},children:t.jsx(m,{sx:{width:"100%",height:"2px",backgroundColor:"#96a29f",mt:"2rem",border:"none",borderRadius:"2px",opacity:.5}})})]})]})]})]});export{et as default};
