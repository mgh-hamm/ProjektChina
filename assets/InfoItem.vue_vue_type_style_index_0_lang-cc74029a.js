import{$,O as n,U as a,W as r,a2 as f,M as v,r as g,m as e,Q as c,R as m,F as _,V as y,S as u,P as k,a1 as w}from"./index-1282da40.js";import{y as p,v as x}from"./VAvatar-3d1d39ca.js";import{b as V,V as C}from"./VCard-9ed24571.js";import{V as h}from"./VDivider-eae147b7.js";import{c as S}from"./VOverlay-6dfe7a4f.js";import{V as I}from"./VerticalSpacer-03fc83f9.js";import{V as N}from"./index-7ba26c47.js";const B={},j={class:"d-flex ma-3"},b={class:"mr-3 mt-3"},z={style:{position:"fixed"}},Q={style:{"margin-left":"20vw"}};function T(i,o){return n(),a("div",j,[r("div",b,[r("div",z,[f(i.$slots,"navigation")])]),r("div",Q,[f(i.$slots,"main")])])}const X=$(B,[["render",T]]),W=["href"],D={key:1,class:"font-weight-light"},E=v({__name:"Sources",props:{content:{}},setup(i){const o=i,t=g(!1);return(d,s)=>(n(),a(_,null,[e(p,{onClick:s[0]||(s[0]=l=>t.value=!t.value)},{default:c(()=>[m("Quellen")]),_:1}),e(S,{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=l=>t.value=l),theme:"light",class:"align-center justify-center"},{default:c(()=>[e(V,{theme:"dark"},{default:c(()=>[e(C,{class:"d-flex justify-center"},{default:c(()=>[m("Quellen")]),_:1}),(n(!0),a(_,null,y(o.content,l=>(n(),a("div",{key:l.source,class:"d-flex ma-1 justify-start align-center pr-3"},[e(x,{icon:"mdi-menu-right",size:"x-small"}),l.source?(n(),a("a",{key:0,href:l.source,class:"font-weight-light navItemStyle",target:"_blank"},u(l.title),9,W)):(n(),a("p",D,u(l.title),1))]))),128)),e(h),e(p,{onClick:s[1]||(s[1]=l=>t.value=!t.value),width:"100%"},{default:c(()=>[m("Schließen")]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});const F=["href"],Y=v({__name:"NavigationCard",props:{content:{},sources:{}},setup(i){const o=i;return(t,d)=>(n(),k(V,{class:"d-flex pl-1 pt-1 flex-column",width:"20vw",fixed:""},{default:c(()=>[(n(!0),a(_,null,y(o.content,s=>(n(),a("div",{key:s.title,class:"d-flex ma-1 justify-start align-center"},[e(x,{icon:"mdi-menu-right",size:"x-small"}),r("a",{href:s.route,class:"font-weight-light navItemStyle"},u(s.title),9,F)]))),128)),e(h),e(E,{content:o.sources},null,8,["content"])]),_:1}))}});const O=["id"],U={class:"mt-2 mr-4"},L={class:"d-flex flex-row align-center"},M={class:"pl-2 font-weight-medium"},P={key:0,class:"ml-2"},Z=v({__name:"InfoItem",props:{title:{},anchor:{}},setup(i){const o=g(!0);return(t,d)=>(n(),a(_,null,[r("a",{class:"anchor",id:t.anchor},null,8,O),r("div",U,[r("div",L,[e(p,{size:"x-small",icon:"mdi-arrow-expand",onClick:d[0]||(d[0]=s=>o.value=!o.value)}),r("p",M,u(t.title),1)]),e(h,{class:"mt-1 mb-1"}),e(N,null,{default:c(()=>[o.value?(n(),a("div",P,[f(t.$slots,"default")])):w("",!0)]),_:3})]),e(I)],64))}});export{X as W,Y as _,Z as a};