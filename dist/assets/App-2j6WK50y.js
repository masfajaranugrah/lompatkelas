const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-Dx4_b2Ij.js","assets/index-DE8uJ4Xl.js","assets/index-CUUKmsNE.css","assets/Hero-CD3lCTYN.js","assets/About-m--kUdJ0.js","assets/Service-BUrl73h4.js","assets/db-r4Spd9Vu.js","assets/Team-D6YT2AmC.js","assets/Contact-DN8r6xNS.js","assets/Footer-B2zaAGOZ.js","assets/Layanan-DFC6aJc8.js","assets/Visimisi-KimY30Ag.js","assets/Whatsapp-DJRLekJ-.js","assets/According-B0CjaEVT.js"])))=>i.map(i=>d[i]);
import{r as s,R as de,_ as P,j as p}from"./index-DE8uJ4Xl.js";/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));const H="popstate";function fe(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:l,hash:u}=r.location;return z("",{pathname:i,search:l,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:$(a)}return me(t,n,null,e)}function g(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ne(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pe(){return Math.random().toString(36).substr(2,8)}function G(e,t){return{usr:e.state,key:e.key,idx:t}}function z(e,t,n,r){return n===void 0&&(n=null),N({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||pe()})}function $(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function me(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,u=b.Pop,o=null,h=d();h==null&&(h=0,l.replaceState(N({},l.state,{idx:h}),""));function d(){return(l.state||{idx:null}).idx}function c(){u=b.Pop;let f=d(),E=f==null?null:f-h;h=f,o&&o({action:u,location:v.location,delta:E})}function m(f,E){u=b.Push;let C=z(v.location,f,E);h=d()+1;let _=G(C,h),R=v.createHref(C);try{l.pushState(_,"",R)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(R)}i&&o&&o({action:u,location:v.location,delta:1})}function y(f,E){u=b.Replace;let C=z(v.location,f,E);h=d();let _=G(C,h),R=v.createHref(C);l.replaceState(_,"",R),i&&o&&o({action:u,location:v.location,delta:0})}function x(f){let E=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof f=="string"?f:$(f);return C=C.replace(/ $/,"%20"),g(E,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,E)}let v={get action(){return u},get location(){return e(a,l)},listen(f){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(H,c),o=f,()=>{a.removeEventListener(H,c),o=null}},createHref(f){return t(a,f)},createURL:x,encodeLocation(f){let E=x(f);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:y,go(f){return l.go(f)}};return v}var X;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(X||(X={}));function ve(e,t,n){return n===void 0&&(n="/"),ge(e,t,n,!1)}function ge(e,t,n,r){let a=typeof t=="string"?U(t):t,i=M(a.pathname||"/",n);if(i==null)return null;let l=re(e);xe(l);let u=null;for(let o=0;u==null&&o<l.length;++o){let h=Oe(i);u=je(l[o],h,r)}return u}function re(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,u)=>{let o={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(g(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let h=j([r,o.relativePath]),d=n.concat(o);i.children&&i.children.length>0&&(g(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),re(i.children,t,d,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:we(h,i.index),routesMeta:d})};return e.forEach((i,l)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))a(i,l);else for(let o of ae(i.path))a(i,l,o)}),t}function ae(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=ae(r.join("/")),u=[];return u.push(...l.map(o=>o===""?i:[i,o].join("/"))),a&&u.push(...l),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function xe(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:be(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ye=/^:[\w-]+$/,Ee=3,_e=2,Ce=1,Pe=10,Re=-2,Y=e=>e==="*";function we(e,t){let n=e.split("/"),r=n.length;return n.some(Y)&&(r+=Re),t&&(r+=_e),n.filter(a=>!Y(a)).reduce((a,i)=>a+(ye.test(i)?Ee:i===""?Ce:Pe),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function je(e,t,n){let{routesMeta:r}=e,a={},i="/",l=[];for(let u=0;u<r.length;++u){let o=r[u],h=u===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=Q({path:o.relativePath,caseSensitive:o.caseSensitive,end:h},d),m=o.route;if(!c&&h&&n&&!r[r.length-1].route.index&&(c=Q({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},d)),!c)return null;Object.assign(a,c.params),l.push({params:a,pathname:j([i,c.pathname]),pathnameBase:Te(j([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=j([i,c.pathnameBase]))}return l}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((h,d,c)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let v=u[c]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=u[c];return y&&!x?h[m]=void 0:h[m]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:l,pattern:e}}function Se(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ne(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Oe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ne(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Le(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:Ie(n,t):t,search:Be(r),hash:Ne(a)}}function Ie(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function V(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ue(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function J(e,t){let n=Ue(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function K(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=U(e):(a=N({},e),g(!a.pathname||!a.pathname.includes("?"),V("?","pathname","search",a)),g(!a.pathname||!a.pathname.includes("#"),V("#","pathname","hash",a)),g(!a.search||!a.search.includes("#"),V("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,u;if(l==null)u=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),c-=1;a.pathname=m.join("/")}u=c>=0?t[c]:"/"}let o=Le(a,u),h=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(h||d)&&(o.pathname+="/"),o}const j=e=>e.join("/").replace(/\/\/+/g,"/"),Te=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Be=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ne=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ke(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ie=["post","put","patch","delete"];new Set(ie);const $e=["get",...ie];new Set($e);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}const q=s.createContext(null),Ae=s.createContext(null),S=s.createContext(null),F=s.createContext(null),O=s.createContext({outlet:null,matches:[],isDataRoute:!1}),le=s.createContext(null);function Fe(e,t){let{relative:n}=t===void 0?{}:t;T()||g(!1);let{basename:r,navigator:a}=s.useContext(S),{hash:i,pathname:l,search:u}=ue(e,{relative:n}),o=l;return r!=="/"&&(o=l==="/"?r:j([r,l])),a.createHref({pathname:o,search:u,hash:i})}function T(){return s.useContext(F)!=null}function B(){return T()||g(!1),s.useContext(F).location}function oe(e){s.useContext(S).static||s.useLayoutEffect(e)}function se(){let{isDataRoute:e}=s.useContext(O);return e?Qe():Ve()}function Ve(){T()||g(!1);let e=s.useContext(q),{basename:t,future:n,navigator:r}=s.useContext(S),{matches:a}=s.useContext(O),{pathname:i}=B(),l=JSON.stringify(J(a,n.v7_relativeSplatPath)),u=s.useRef(!1);return oe(()=>{u.current=!0}),s.useCallback(function(h,d){if(d===void 0&&(d={}),!u.current)return;if(typeof h=="number"){r.go(h);return}let c=K(h,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:j([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,l,i,e])}function ue(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(S),{matches:a}=s.useContext(O),{pathname:i}=B(),l=JSON.stringify(J(a,r.v7_relativeSplatPath));return s.useMemo(()=>K(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function ze(e,t){return We(e,t)}function We(e,t,n,r){T()||g(!1);let{navigator:a}=s.useContext(S),{matches:i}=s.useContext(O),l=i[i.length-1],u=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let h=B(),d;if(t){var c;let f=typeof t=="string"?U(t):t;o==="/"||(c=f.pathname)!=null&&c.startsWith(o)||g(!1),d=f}else d=h;let m=d.pathname||"/",y=m;if(o!=="/"){let f=o.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(f.length).join("/")}let x=ve(e,{pathname:y}),v=qe(x&&x.map(f=>Object.assign({},f,{params:Object.assign({},u,f.params),pathname:j([o,a.encodeLocation?a.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?o:j([o,a.encodeLocation?a.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,n,r);return t&&v?s.createElement(F.Provider,{value:{location:k({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:b.Pop}},v):v}function De(){let e=Ye(),t=ke(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return s.createElement(s.Fragment,null,s.createElement("h2",null,"Unexpected Application Error!"),s.createElement("h3",{style:{fontStyle:"italic"}},t),n?s.createElement("pre",{style:a},n):null,null)}const Me=s.createElement(De,null);class Je extends s.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?s.createElement(O.Provider,{value:this.props.routeContext},s.createElement(le.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ke(e){let{routeContext:t,match:n,children:r}=e,a=s.useContext(q);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),s.createElement(O.Provider,{value:t},r)}function qe(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=(a=n)==null?void 0:a.errors;if(u!=null){let d=l.findIndex(c=>c.route.id&&(u==null?void 0:u[c.route.id])!==void 0);d>=0||g(!1),l=l.slice(0,Math.min(l.length,d+1))}let o=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let c=l[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(h=d),c.route.id){let{loaderData:m,errors:y}=n,x=c.route.loader&&m[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||x){o=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((d,c,m)=>{let y,x=!1,v=null,f=null;n&&(y=u&&c.route.id?u[c.route.id]:void 0,v=c.route.errorElement||Me,o&&(h<0&&m===0?(x=!0,f=null):h===m&&(x=!0,f=c.route.hydrateFallbackElement||null)));let E=t.concat(l.slice(0,m+1)),C=()=>{let _;return y?_=v:x?_=f:c.route.Component?_=s.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=d,s.createElement(Ke,{match:c,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?s.createElement(Je,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:C(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):C()},null)}var ce=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ce||{}),A=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(A||{});function He(e){let t=s.useContext(q);return t||g(!1),t}function Ge(e){let t=s.useContext(Ae);return t||g(!1),t}function Xe(e){let t=s.useContext(O);return t||g(!1),t}function he(e){let t=Xe(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function Ye(){var e;let t=s.useContext(le),n=Ge(A.UseRouteError),r=he(A.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Qe(){let{router:e}=He(ce.UseNavigateStable),t=he(A.UseNavigateStable),n=s.useRef(!1);return oe(()=>{n.current=!0}),s.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,k({fromRouteId:t},i)))},[e,t])}function Ze(e){let{to:t,replace:n,state:r,relative:a}=e;T()||g(!1);let{future:i,static:l}=s.useContext(S),{matches:u}=s.useContext(O),{pathname:o}=B(),h=se(),d=K(t,J(u,i.v7_relativeSplatPath),o,a==="path"),c=JSON.stringify(d);return s.useEffect(()=>h(JSON.parse(c),{replace:n,state:r,relative:a}),[h,c,a,n,r]),null}function w(e){g(!1)}function et(e){let{basename:t="/",children:n=null,location:r,navigationType:a=b.Pop,navigator:i,static:l=!1,future:u}=e;T()&&g(!1);let o=t.replace(/^\/*/,"/"),h=s.useMemo(()=>({basename:o,navigator:i,static:l,future:k({v7_relativeSplatPath:!1},u)}),[o,u,i,l]);typeof r=="string"&&(r=U(r));let{pathname:d="/",search:c="",hash:m="",state:y=null,key:x="default"}=r,v=s.useMemo(()=>{let f=M(d,o);return f==null?null:{location:{pathname:f,search:c,hash:m,state:y,key:x},navigationType:a}},[o,d,c,m,y,x,a]);return v==null?null:s.createElement(S.Provider,{value:h},s.createElement(F.Provider,{children:n,value:v}))}function tt(e){let{children:t,location:n}=e;return ze(W(t),n)}new Promise(()=>{});function W(e,t){t===void 0&&(t=[]);let n=[];return s.Children.forEach(e,(r,a)=>{if(!s.isValidElement(r))return;let i=[...t,a];if(r.type===s.Fragment){n.push.apply(n,W(r.props.children,i));return}r.type!==w&&g(!1),!r.props.index||!r.props.children||g(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=W(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function nt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function rt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function at(e,t){return e.button===0&&(!t||t==="_self")&&!rt(e)}const it=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],lt="6";try{window.__reactRouterVersion=lt}catch{}const ot="startTransition",Z=de[ot];function st(e){let{basename:t,children:n,future:r,window:a}=e,i=s.useRef();i.current==null&&(i.current=fe({window:a,v5Compat:!0}));let l=i.current,[u,o]=s.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},d=s.useCallback(c=>{h&&Z?Z(()=>o(c)):o(c)},[o,h]);return s.useLayoutEffect(()=>l.listen(d),[l,d]),s.createElement(et,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,future:r})}const ut=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ct=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:l,state:u,target:o,to:h,preventScrollReset:d,unstable_viewTransition:c}=t,m=nt(t,it),{basename:y}=s.useContext(S),x,v=!1;if(typeof h=="string"&&ct.test(h)&&(x=h,ut))try{let _=new URL(window.location.href),R=h.startsWith("//")?new URL(_.protocol+h):new URL(h),I=M(R.pathname,y);R.origin===_.origin&&I!=null?h=I+R.search+R.hash:v=!0}catch{}let f=Fe(h,{relative:a}),E=ht(h,{replace:l,state:u,target:o,preventScrollReset:d,relative:a,unstable_viewTransition:c});function C(_){r&&r(_),_.defaultPrevented||E(_)}return s.createElement("a",D({},m,{href:x||f,onClick:v||i?r:C,ref:n,target:o}))});var ee;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ee||(ee={}));var te;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(te||(te={}));function ht(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:l,unstable_viewTransition:u}=t===void 0?{}:t,o=se(),h=B(),d=ue(e,{relative:l});return s.useCallback(c=>{if(at(c,n)){c.preventDefault();let m=r!==void 0?r:$(h)===$(d);o(e,{replace:m,state:a,preventScrollReset:i,relative:l,unstable_viewTransition:u})}},[h,o,d,r,a,n,e,i,l,u])}const dt=s.lazy(()=>P(()=>import("./Header-Dx4_b2Ij.js"),__vite__mapDeps([0,1,2]))),ft=s.lazy(()=>P(()=>import("./Hero-CD3lCTYN.js"),__vite__mapDeps([3,1,2]))),pt=s.lazy(()=>P(()=>import("./About-m--kUdJ0.js"),__vite__mapDeps([4,1,2]))),mt=s.lazy(()=>P(()=>import("./Service-BUrl73h4.js"),__vite__mapDeps([5,1,2,6]))),vt=s.lazy(()=>P(()=>import("./Team-D6YT2AmC.js"),__vite__mapDeps([7,1,2]))),gt=s.lazy(()=>P(()=>import("./Contact-DN8r6xNS.js"),__vite__mapDeps([8,1,2]))),xt=s.lazy(()=>P(()=>import("./Footer-B2zaAGOZ.js"),__vite__mapDeps([9,1,2]))),yt=s.lazy(()=>P(()=>import("./Layanan-DFC6aJc8.js"),__vite__mapDeps([10,1,2,6]))),Et=s.lazy(()=>P(()=>import("./Visimisi-KimY30Ag.js"),__vite__mapDeps([11,1,2]))),_t=s.lazy(()=>P(()=>import("./Whatsapp-DJRLekJ-.js"),__vite__mapDeps([12,1,2]))),Ct=s.lazy(()=>P(()=>import("./According-B0CjaEVT.js"),__vite__mapDeps([13,1,2,6])));function L(){const e=B();return s.useEffect(()=>{const t=e.pathname,n=document.querySelector(`[id="${t.slice(1)}"]`);if(n){const i=n.getBoundingClientRect().top+window.pageYOffset-70;window.scrollTo({top:i,behavior:"smooth"})}},[e]),p.jsxs("main",{children:[p.jsx(dt,{}),p.jsx(ft,{id:"hero"}),p.jsx(yt,{id:"keunggulan"}),p.jsx(pt,{id:"about"}),p.jsx(Et,{id:"visi-and-misi"}),p.jsx(vt,{id:"team"}),p.jsx(mt,{id:"layanan"}),p.jsx(gt,{id:"contact"}),p.jsx(Ct,{}),p.jsx(_t,{}),p.jsx(xt,{})]})}function Pt(){return p.jsx(st,{children:p.jsxs(tt,{children:[p.jsx(w,{path:"/",element:p.jsx(L,{})}),p.jsx(w,{path:"/home",element:p.jsx(Ze,{to:"/"})}),p.jsx(w,{path:"/keunggulan",element:p.jsx(L,{})}),p.jsx(w,{path:"/about",element:p.jsx(L,{})}),p.jsx(w,{path:"/visi-and-misi",element:p.jsx(L,{})}),p.jsx(w,{path:"/team",element:p.jsx(L,{})}),p.jsx(w,{path:"/layanan",element:p.jsx(L,{})}),p.jsx(w,{path:"/contact",element:p.jsx(L,{})})]})})}const bt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));export{bt as A,wt as L,B as u};
