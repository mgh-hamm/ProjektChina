import{ak as Q,p as S,l as E,al as ht,aj as yt,ai as ze,g as te,r as W,a3 as Ne,j as ne,A,a9 as ke,q as bt,am as O,c as d,an as U,a5 as Ae,ao as we,ag as xe,m as r,F as Oe,z as G,B as H,G as De,w as $,e as Ct,d as Me,i as St,a as _t,u as We,o as pt,ap as kt,aq as wt,k as xt,n as ve,ar as It,b as w,I as K,as as Vt,at as Bt,s as M,au as fe,a7 as Pt,Y as Ge,T as He,av as Et,aw as Ie,a6 as me,a4 as Tt,ax as $t,ay as Ve,x as ue,D as je,af as Lt,y as Rt}from"./index-1670b525.js";const Fe=["top","bottom"],zt=["start","end","left","right"];function Nt(e,t){let[a,n]=e.split(" ");return n||(n=Q(Fe,a)?"start":Q(zt,a)?"top":"center"),{side:Be(a,t),align:Be(n,t)}}function Be(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function xn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function In(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Vn(e){return{side:e.align,align:e.side}}function Bn(e){return Q(Fe,e.side)?"y":"x"}const L=S({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return E()({name:a??ht(yt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...L()},setup(n,i){let{slots:s}=i;return()=>{var l;return ze(n.tag,{class:[e,n.class],style:n.style},(l=s.default)==null?void 0:l.call(s))}}})}function R(e){const t=te("useRender");t.render=e}function At(e){const t=W(),a=W();if(Ne){const n=new ResizeObserver(i=>{e==null||e(i,n),i.length&&(a.value=i[0].contentRect)});ne(()=>{n.disconnect()}),A(t,(i,s)=>{s&&(n.unobserve(ke(s)),a.value=void 0),i&&n.observe(ke(i))},{flush:"post"})}return{resizeRef:t,contentRect:bt(a)}}const qe=S({border:[Boolean,Number,String]},"border");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{borderClasses:d(()=>{const n=U(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}const Ot=[null,"default","comfortable","compact"],ge=S({density:{type:String,default:"default",validator:e=>Ot.includes(e)}},"density");function he(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const Xe=S({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ye(e){return{elevationClasses:d(()=>{const a=U(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const ae=S({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{roundedClasses:d(()=>{const n=U(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const j=S({tag:{type:String,default:"div"}},"tag");function ye(e){return Ae(()=>{const t=[],a={};return e.value.background&&(we(e.value.background)?a.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(we(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function Z(e,t){const a=d(()=>({text:U(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ye(a);return{textColorClasses:n,textColorStyles:i}}function Pe(e,t){const a=d(()=>({background:U(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ye(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const Dt=["elevated","flat","tonal","outlined","text","plain"];function Je(e,t){return r(Oe,null,[e&&r("span",{key:"overlay",class:`${t}__overlay`},null),r("span",{key:"underlay",class:`${t}__underlay`},null)])}const be=S({color:String,variant:{type:String,default:"elevated",validator:e=>Dt.includes(e)}},"variant");function Qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();const a=d(()=>{const{variant:s}=xe(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=ye(d(()=>{const{variant:s,color:l}=xe(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Ke=S({divided:Boolean,...qe(),...L(),...ge(),...Xe(),...ae(),...j(),...G(),...be()},"VBtnGroup"),Ee=E()({name:"VBtnGroup",props:Ke(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=H(e),{densityClasses:i}=he(e),{borderClasses:s}=Ue(e),{elevationClasses:l}=Ye(e),{roundedClasses:u}=se(e);De({VBtn:{height:"auto",color:$(e,"color"),density:$(e,"density"),flat:!0,variant:$(e,"variant")}}),R(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,u.value,e.class],style:e.style},a))}}),Mt=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Wt=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function Gt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=te("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ct();Me(Symbol.for(`${t.description}:id`),i);const s=St(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=$(e,"value"),u=d(()=>s.disabled.value||e.disabled);s.register({id:i,value:l,disabled:u},n),ne(()=>{s.unregister(i)});const o=d(()=>s.isSelected(i)),v=d(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return A(o,g=>{n.emit("group:selected",{value:g})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:g=>s.select(i,g),selectedClass:v,value:l,disabled:u,group:s}}function Ht(e,t){let a=!1;const n=_t([]),i=We(e,"modelValue",[],c=>c==null?[]:Ze(n,wt(c)),c=>{const f=Ft(n,c);return e.multiple?f:f[0]}),s=te("useGroup");function l(c,f){const _=c,h=Symbol.for(`${t.description}:id`),k=xt(h,s==null?void 0:s.vnode).indexOf(f);k>-1?n.splice(k,0,_):n.push(_)}function u(c){if(a)return;o();const f=n.findIndex(_=>_.id===c);n.splice(f,1)}function o(){const c=n.find(f=>!f.disabled);c&&e.mandatory==="force"&&!i.value.length&&(i.value=[c.id])}pt(()=>{o()}),ne(()=>{a=!0});function v(c,f){const _=n.find(h=>h.id===c);if(!(f&&(_!=null&&_.disabled)))if(e.multiple){const h=i.value.slice(),p=h.findIndex(m=>m===c),k=~p;if(f=f??!k,k&&e.mandatory&&h.length<=1||!k&&e.max!=null&&h.length+1>e.max)return;p<0&&f?h.push(c):p>=0&&!f&&h.splice(p,1),i.value=h}else{const h=i.value.includes(c);if(e.mandatory&&h)return;i.value=f??!h?[c]:[]}}function g(c){if(e.multiple,i.value.length){const f=i.value[0],_=n.findIndex(k=>k.id===f);let h=(_+c)%n.length,p=n[h];for(;p.disabled&&h!==_;)h=(h+c)%n.length,p=n[h];if(p.disabled)return;i.value=[n[h].id]}else{const f=n.find(_=>!_.disabled);f&&(i.value=[f.id])}}const C={register:l,unregister:u,selected:i,select:v,disabled:$(e,"disabled"),prev:()=>g(n.length-1),next:()=>g(1),isSelected:c=>i.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:c=>jt(n,c)};return Me(t,C),C}function jt(e,t){const a=Ze(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Ze(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>kt(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Ft(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const et=Symbol.for("vuetify:v-btn-toggle"),qt=S({...Ke(),...Mt()},"VBtnToggle");E()({name:"VBtnToggle",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:u}=Ht(e,et);return R(()=>{const[o]=Ee.filterProps(e);return r(Ee,ve({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var v;return[(v=a.default)==null?void 0:v.call(a,{isSelected:n,next:i,prev:s,select:l,selected:u})]}})}),{next:i,prev:s,select:l}}});const Ut=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),re=E(!1)({name:"VDefaultsProvider",props:Ut(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:u}=It(e);return De(n,{reset:s,root:l,scoped:u,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});const Xt=["x-small","small","default","large","x-large"],ie=S({size:{type:[String,Number],default:"default"}},"size");function le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return Ae(()=>{let a,n;return Q(Xt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:w(e.size),height:w(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Yt=S({color:String,start:Boolean,end:Boolean,icon:K,...L(),...ie(),...j({tag:"i"}),...G()},"VIcon"),J=E()({name:"VIcon",props:Yt(),setup(e,t){let{attrs:a,slots:n}=t;const i=W(),{themeClasses:s}=H(e),{iconData:l}=Vt(d(()=>i.value||e.icon)),{sizeClasses:u}=le(e),{textColorClasses:o,textColorStyles:v}=Z($(e,"color"));return R(()=>{var C,c;const g=(C=n.default)==null?void 0:C.call(n);return g&&(i.value=(c=g.filter(f=>f.type===Bt&&f.children&&typeof f.children=="string")[0])==null?void 0:c.children),r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,u.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:w(e.size),height:w(e.size),width:w(e.size)},v.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[g]})}),{}}});function tt(e,t){const a=W(),n=M(!1);if(fe){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);ne(()=>{i.disconnect()}),A(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Jt=S({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...L(),...ie(),...j({tag:"div"}),...G()},"VProgressCircular"),Qt=E()({name:"VProgressCircular",props:Jt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=W(),{themeClasses:l}=H(e),{sizeClasses:u,sizeStyles:o}=le(e),{textColorClasses:v,textColorStyles:g}=Z($(e,"color")),{textColorClasses:C,textColorStyles:c}=Z($(e,"bgColor")),{intersectionRef:f,isIntersecting:_}=tt(),{resizeRef:h,contentRect:p}=At(),k=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),m=d(()=>Number(e.width)),x=d(()=>o.value?Number(e.size):p.value?p.value.width:Math.max(m.value,32)),P=d(()=>n/(1-m.value/x.value)*2),V=d(()=>m.value/x.value*P.value),z=d(()=>w((100-k.value)/100*i));return Pt(()=>{f.value=s.value,h.value=s.value}),R(()=>r(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":_.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,u.value,v.value,e.class],style:[o.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[r("circle",{class:["v-progress-circular__underlay",C.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":z.value},null)]),a.default&&r("div",{class:"v-progress-circular__content"},[a.default({value:k.value})])]})),{}}}),nt=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function at(e){return{dimensionStyles:d(()=>({height:w(e.height),maxHeight:w(e.maxHeight),maxWidth:w(e.maxWidth),minHeight:w(e.minHeight),minWidth:w(e.minWidth),width:w(e.width)}))}}const Te={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},st=S({location:String},"location");function it(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ge();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:l}=Nt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function u(v){return a?a(v):0}const o={};return s!=="center"&&(t?o[Te[s]]=`calc(100% - ${u(s)}px)`:o[s]=0),l!=="center"?t?o[Te[l]]=`calc(100% - ${u(l)}px)`:o[l]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const Kt=S({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...L(),...st({location:"top"}),...ae(),...j(),...G()},"VProgressLinear"),Zt=E()({name:"VProgressLinear",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=We(e,"modelValue"),{isRtl:i,rtlClasses:s}=Ge(),{themeClasses:l}=H(e),{locationStyles:u}=it(e),{textColorClasses:o,textColorStyles:v}=Z(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:C}=Pe(d(()=>e.bgColor||e.color)),{backgroundColorClasses:c,backgroundColorStyles:f}=Pe(e,"color"),{roundedClasses:_}=se(e),{intersectionRef:h,isIntersecting:p}=tt(),k=d(()=>parseInt(e.max,10)),m=d(()=>parseInt(e.height,10)),x=d(()=>parseFloat(e.bufferValue)/k.value*100),P=d(()=>parseFloat(n.value)/k.value*100),V=d(()=>i.value!==e.reverse),z=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),N=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function y(b){if(!h.value)return;const{left:I,right:D,width:T}=h.value.getBoundingClientRect(),X=V.value?T-b.clientX+(D-T):b.clientX-I;n.value=Math.round(X/T*k.value)}return R(()=>r(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&p.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},_.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?w(m.value):0,"--v-progress-linear-height":w(m.value),...u.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:P.value,onClick:e.clickable&&y},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...v.value,[V.value?"left":"right"]:w(-m.value),borderTop:`${w(m.value/2)} dotted`,opacity:N.value,top:`calc(50% - ${w(m.value/4)})`,width:w(100-x.value,"%"),"--v-progress-linear-stream-to":w(m.value*(V.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",g.value],style:[C.value,{opacity:N.value,width:w(e.stream?x.value:100,"%")}]},null),r(He,{name:z.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(b=>r("div",{key:b,class:["v-progress-linear__indeterminate",b,c.value],style:f.value},null))]):r("div",{class:["v-progress-linear__determinate",c.value],style:[f.value,{width:w(P.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:P.value,buffer:x.value})])]})),{}}}),en=S({loading:[Boolean,String]},"loader");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function En(e,t){var n;let{slots:a}=t;return r("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||r(Zt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const nn=["static","relative","fixed","absolute","sticky"],an=S({position:{type:String,validator:e=>nn.includes(e)}},"position");function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function Tn(){var e,t;return(t=(e=te("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function ln(e,t){const a=Et("RouterLink"),n=d(()=>!!(e.href||e.to)),i=d(()=>(n==null?void 0:n.value)||Ie(t,"click")||Ie(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:$(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var l,u;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(u=s.isActive)==null?void 0:u.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const rn=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let oe=!1;function $n(e,t){let a=!1,n,i;Ne&&(me(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,u,o)=>{oe?a?t(o):o():setTimeout(()=>a?t(o):o()),oe=!0}),i=e==null?void 0:e.afterEach(()=>{oe=!1})}),Tt(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var u;(u=l.state)!=null&&u.replaced||(a=!0,setTimeout(()=>a=!1))}}function on(e,t){A(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&me(()=>{t(!0)})},{immediate:!0})}const ce=Symbol("rippleStop"),un=80;function $e(e,t){e.style.transform=t,e.style.webkitTransform=t}function de(e){return e.constructor.name==="TouchEvent"}function lt(e){return e.constructor.name==="KeyboardEvent"}const cn=function(e,t){var C;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!lt(e)){const c=t.getBoundingClientRect(),f=de(e)?e.touches[e.touches.length-1]:e;n=f.clientX-c.left,i=f.clientY-c.top}let s=0,l=.3;(C=t._ripple)!=null&&C.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,v=a.center?u:`${n-s}px`,g=a.center?o:`${i-s}px`;return{radius:s,scale:l,x:v,y:g,centerX:u,centerY:o}},ee={show(e,t){var f;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:u,y:o,centerX:v,centerY:g}=cn(e,t,a),C=`${s*2}px`;i.className="v-ripple__animation",i.style.width=C,i.style.height=C,t.appendChild(n);const c=window.getComputedStyle(t);c&&c.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),$e(i,`translate(${u}, ${o}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),$e(i,`translate(${v}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function rt(e){return typeof e>"u"||!!e}function F(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ce])){if(e[ce]=!0,de(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||lt(e),a._ripple.class&&(t.class=a._ripple.class),de(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{ee.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},un)}else ee.show(e,a,t)}}function Le(e){e[ce]=!0}function B(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{B(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),ee.hide(t)}}function ot(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let q=!1;function ut(e){!q&&(e.keyCode===Ve.enter||e.keyCode===Ve.space)&&(q=!0,F(e))}function ct(e){q=!1,B(e)}function dt(e){q&&(q=!1,B(e))}function vt(e,t,a){const{value:n,modifiers:i}=t,s=rt(n);if(s||ee.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,$t(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",Le,{passive:!0}),e.addEventListener("mousedown",Le);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",B,{passive:!0}),e.addEventListener("touchmove",ot,{passive:!0}),e.addEventListener("touchcancel",B),e.addEventListener("mousedown",F),e.addEventListener("mouseup",B),e.addEventListener("mouseleave",B),e.addEventListener("keydown",ut),e.addEventListener("keyup",ct),e.addEventListener("blur",dt),e.addEventListener("dragstart",B,{passive:!0})}else!s&&a&&ft(e)}function ft(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",B),e.removeEventListener("touchmove",ot),e.removeEventListener("touchcancel",B),e.removeEventListener("mouseup",B),e.removeEventListener("mouseleave",B),e.removeEventListener("keydown",ut),e.removeEventListener("keyup",ct),e.removeEventListener("dragstart",B),e.removeEventListener("blur",dt)}function dn(e,t){vt(e,t,!1)}function vn(e){delete e._ripple,ft(e)}function fn(e,t){if(t.value===t.oldValue)return;const a=rt(t.oldValue);vt(e,t,a)}const mn={mounted:dn,unmounted:vn,updated:fn},gn=S({active:{type:Boolean,default:void 0},symbol:{type:null,default:et},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:K,appendIcon:K,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...qe(),...L(),...ge(),...nt(),...Xe(),...Wt(),...en(),...st(),...an(),...ae(),...rn(),...ie(),...j({tag:"button"}),...G(),...be({variant:"elevated"})},"VBtn"),Ln=E()({name:"VBtn",directives:{Ripple:mn},props:gn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=H(e),{borderClasses:s}=Ue(e),{colorClasses:l,colorStyles:u,variantClasses:o}=Qe(e),{densityClasses:v}=he(e),{dimensionStyles:g}=at(e),{elevationClasses:C}=Ye(e),{loaderClasses:c}=tn(e),{locationStyles:f}=it(e),{positionClasses:_}=sn(e),{roundedClasses:h}=se(e),{sizeClasses:p,sizeStyles:k}=le(e),m=Gt(e,e.symbol,!1),x=ln(e,a),P=d(()=>{var b;return e.active!==void 0?e.active:x.isLink.value?(b=x.isActive)==null?void 0:b.value:m==null?void 0:m.isSelected.value}),V=d(()=>(m==null?void 0:m.disabled.value)||e.disabled),z=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),N=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function y(b){var I;V.value||((I=x.navigate)==null||I.call(x,b),m==null||m.toggle())}return on(x,m==null?void 0:m.select),R(()=>{var Ce,Se;const b=x.isLink.value?"a":e.tag,I=!!(e.prependIcon||n.prepend),D=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),X=(m==null?void 0:m.isSelected.value)&&(!x.isLink.value||((Ce=x.isActive)==null?void 0:Ce.value))||!m||((Se=x.isActive)==null?void 0:Se.value);return ue(r(b,{type:b==="a"?void 0:"button",class:["v-btn",m==null?void 0:m.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,X?l.value:void 0,v.value,C.value,c.value,_.value,h.value,p.value,o.value,e.class],style:[X?u.value:void 0,g.value,f.value,k.value,e.style],disabled:V.value||void 0,href:x.href.value,onClick:y,value:N.value},{default:()=>{var _e;return[Je(!0,"v-btn"),!e.icon&&I&&r("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?r(re,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):r(J,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?r(J,{key:"content-icon",icon:e.icon},null):r(re,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var pe;return[((pe=n.default)==null?void 0:pe.call(n))??e.text]}})]),!e.icon&&D&&r("span",{key:"append",class:"v-btn__append"},[n.append?r(re,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):r(J,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((_e=n.loader)==null?void 0:_e.call(n))??r(Qt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[je("ripple"),!V.value&&e.ripple,null]])}),{}}}),hn=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Y=(e,t)=>{let{slots:a}=t;const{transition:n,disabled:i,...s}=e,{component:l=He,...u}=typeof n=="object"?n:{};return ze(l,ve(typeof n=="string"?{name:i?"":n}:u,s,{disabled:i}),a)};function yn(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const mt=S({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...L(),...nt()},"VResponsive"),Re=E()({name:"VResponsive",props:mt(),setup(e,t){let{slots:a}=t;const{aspectStyles:n}=yn(e),{dimensionStyles:i}=at(e);return R(()=>{var s;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function bn(e,t){if(!fe)return;const a=t.modifiers||{},n=t.value,{handler:i,options:s}=typeof n=="object"?n:{handler:n,options:{}},l=new IntersectionObserver(function(){var C;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(C=e._observe)==null?void 0:C[t.instance.$.uid];if(!v)return;const g=u.some(c=>c.isIntersecting);i&&(!a.quiet||v.init)&&(!a.once||g||v.init)&&i(g,u,o),g&&a.once?gt(e,t):v.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function gt(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Cn={mounted:bn,unmounted:gt},Sn=Cn,_n=S({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...mt(),...L(),...hn()},"VImg"),pn=E()({name:"VImg",directives:{intersect:Sn},props:_n(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const i=M(""),s=W(),l=M(e.eager?"loading":"idle"),u=M(),o=M(),v=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=d(()=>v.value.aspect||u.value/o.value||0);A(()=>e.src,()=>{C(l.value!=="idle")}),A(g,(y,b)=>{!y&&b&&s.value&&p(s.value)}),Lt(()=>C());function C(y){if(!(e.eager&&y)&&!(fe&&!y&&!e.eager)){if(l.value="loading",v.value.lazySrc){const b=new Image;b.src=v.value.lazySrc,p(b,null)}v.value.src&&me(()=>{var b,I;if(a("loadstart",((b=s.value)==null?void 0:b.currentSrc)||v.value.src),(I=s.value)!=null&&I.complete){if(s.value.naturalWidth||f(),l.value==="error")return;g.value||p(s.value,null),c()}else g.value||p(s.value),_()})}}function c(){var y;_(),l.value="loaded",a("load",((y=s.value)==null?void 0:y.currentSrc)||v.value.src)}function f(){var y;l.value="error",a("error",((y=s.value)==null?void 0:y.currentSrc)||v.value.src)}function _(){const y=s.value;y&&(i.value=y.currentSrc||y.src)}let h=-1;function p(y){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{clearTimeout(h);const{naturalHeight:D,naturalWidth:T}=y;D||T?(u.value=T,o.value=D):!y.complete&&l.value==="loading"&&b!=null?h=window.setTimeout(I,b):(y.currentSrc.endsWith(".svg")||y.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,o.value=1)};I()}const k=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),m=()=>{var I;if(!v.value.src||l.value==="idle")return null;const y=r("img",{class:["v-img__img",k.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:c,onError:f},null),b=(I=n.sources)==null?void 0:I.call(n);return r(Y,{transition:e.transition,appear:!0},{default:()=>[ue(b?r("picture",{class:"v-img__picture"},[b,y]):y,[[Rt,l.value==="loaded"]])]})},x=()=>r(Y,{transition:e.transition},{default:()=>[v.value.lazySrc&&l.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",k.value],src:v.value.lazySrc,alt:e.alt},null)]}),P=()=>n.placeholder?r(Y,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,V=()=>n.error?r(Y,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,z=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=M(!1);{const y=A(g,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),y())})}return R(()=>{const[y]=Re.filterProps(e);return ue(r(Re,ve({class:["v-img",{"v-img--booting":!N.value},e.class],style:e.style},y,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Oe,null,[r(m,null,null),r(x,null,null),r(z,null,null),r(P,null,null),r(V,null,null)]),default:n.default}),[[je("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:s,state:l,naturalWidth:u,naturalHeight:o}}}),kn=S({start:Boolean,end:Boolean,icon:K,image:String,...L(),...ge(),...ae(),...ie(),...j(),...G(),...be({variant:"flat"})},"VAvatar"),Rn=E()({name:"VAvatar",props:kn(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=H(e),{colorClasses:i,colorStyles:s,variantClasses:l}=Qe(e),{densityClasses:u}=he(e),{roundedClasses:o}=se(e),{sizeClasses:v,sizeStyles:g}=le(e);return R(()=>r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,i.value,u.value,o.value,v.value,l.value,e.class],style:[s.value,g.value,e.style]},{default:()=>{var C;return[e.image?r(pn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(J,{key:"icon",icon:e.icon},null):(C=a.default)==null?void 0:C.call(a),Je(!1,"v-avatar")]}})),{}}});export{ie as A,le as B,Nt as C,xn as D,In as E,Vn as F,Bn as G,hn as H,Tn as I,$n as J,Qt as K,Zt as L,Y as M,en as N,st as O,an as P,tn as Q,mn as R,it as S,sn as T,En as U,re as V,j as a,R as b,Pn as c,qe as d,ge as e,nt as f,Xe as g,ae as h,rn as i,be as j,ln as k,Ue as l,L as m,Qe as n,he as o,at as p,Ye as q,se as r,Je as s,Rn as t,At as u,J as v,Z as w,Pe as x,Ln as y,pn as z};
