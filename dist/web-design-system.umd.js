(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e["web-design-system"]={},e["react/jsx-runtime"],e.React))})(this,function(e,t,r){"use strict";const G="",h=(n,o)=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:11,height:13,fill:"none",ref:o,...n,children:t.jsx("path",{fill:"#fff",d:"M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"})}),x=r.forwardRef(h),M=r.memo(x),_=(n,o)=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:10,height:11,fill:"none",ref:o,...n,children:t.jsx("path",{fill:"#fff",d:"M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"})}),S=r.forwardRef(_),u=r.memo(S),w=(n,o)=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:12,fill:"none",ref:o,...n,children:t.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"})}),T=r.forwardRef(w),c=r.memo(T),g={PRIMARY:"primary"},E={[g.PRIMARY]:`px-6 py-4 bg-system-black text-system-white hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium text-white bg-black disabled:cursor-not-allowed`},p=r.forwardRef(({variant:n,label:o,hasIcon:a=!1,disabled:d=!1,icon:i,...m})=>{const b=E[n];return t.jsxs("button",{className:b,disabled:d,...m,children:[o,a&&t.jsx("span",{"data-testid":"button-icon",className:"inline-block ml-2",children:i||t.jsx(c,{})})]})}),s={H1:"h1",H2:"h2",H3:"h3",H4M:"h4m",H4R:"h4r",BODY_REG:"p-reg",BODY_14_REG:"p-14-reg",BODY_M:"p-m",BODY_14_M:"p-14-m",SMALL_12_REG:"p-sm-12-reg",SMALL_12_M:"p-sm-12-m",SMALL_10:"p-sm-10",ALL_CAPS_12:"p-all-caps-12"},l={SYSTEM_BLACK:"system-black",SYSTEM_WHITE:"system-white",SYSTEM_LIGHT_GREEN:"system-light-green",SYSTEM_GREEN:"system-green",SYSTEM_RED:"system-red"},f=n=>n.startsWith("h4")?"h4":n.startsWith("p")?"p":n,L={[s.H1]:"text-3xl font-medium leading-4xl",[s.H2]:"text-2xl font-medium leading-3xl",[s.H3]:"text-xl font-medium leading-2xl",[s.H4M]:"text-lg font-medium leading-xl",[s.H4R]:"text-lg font-normal leading-xl",[s.BODY_REG]:"text-md font-normal leading-lg",[s.BODY_14_REG]:"text-sm font-normal leading-md",[s.BODY_M]:"text-md font-medium leading-lg",[s.BODY_14_M]:"text-sm font-medium leading-md",[s.SMALL_12_REG]:"text-xs font-normal leading-sm",[s.SMALL_12_M]:"text-xs font-medium leading-sm",[s.SMALL_10]:"text-xs font-normal leading-xs",[s.ALL_CAPS_12]:"text-xs font-normal leading-sm"},A={[l.SYSTEM_LIGHT_GREEN]:"text-system-light-green",[l.SYSTEM_GREEN]:"text-system-green",[l.SYSTEM_RED]:"text-system-red",[l.SYSTEM_BLACK]:"text-system-black",[l.SYSTEM_WHITE]:"text-system-white"},y=({variant:n,color:o="system-black",text:a,...d})=>{const i=f(n),m=L[n]+" "+A[o];return t.jsx(i,{className:m,...d,children:a})},Y=()=>t.jsx("div",{children:"Banner"}),B=()=>t.jsx("div",{children:"Footer"}),H=(n,o=16)=>1/o*(n||0)+"rem";e.AppleIcon=M,e.ArrowRightIcon=c,e.Button=p,e.ButtonVariants=g,e.GoogleStoreIcon=u,e.MlBanner=Y,e.OrFooter=B,e.Text=y,e.TextColors=l,e.TextVariants=s,e.generateHTMLTag=f,e.pxToRem=H,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
