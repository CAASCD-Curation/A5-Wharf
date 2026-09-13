(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rd={exports:{}},Yo={};var xv;function sM(){if(xv)return Yo;xv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=e,Yo.jsx=i,Yo.jsxs=i,Yo}var Sv;function oM(){return Sv||(Sv=1,Rd.exports=sM()),Rd.exports}var P=oM(),wd={exports:{}},ot={};var yv;function lM(){if(yv)return ot;yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function x(L,ee,$){this.props=L,this.context=ee,this.refs=S,this.updater=$||b}x.prototype.isReactComponent={},x.prototype.setState=function(L,ee){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ee,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=x.prototype;function z(L,ee,$){this.props=L,this.context=ee,this.refs=S,this.updater=$||b}var C=z.prototype=new N;C.constructor=z,w(C,x.prototype),C.isPureReactComponent=!0;var D=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(L,ee,$){var be=$.ref;return{$$typeof:r,type:L,key:ee,ref:be!==void 0?be:null,props:$}}function V(L,ee){return O(L.type,ee,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Z(L){var ee={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function($){return ee[$]})}var ie=/\/+/g;function j(L,ee){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):ee.toString(36)}function K(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(U,U):(L.status="pending",L.then(function(ee){L.status==="pending"&&(L.status="fulfilled",L.value=ee)},function(ee){L.status==="pending"&&(L.status="rejected",L.reason=ee)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function F(L,ee,$,be,we){var Ce=typeof L;(Ce==="undefined"||Ce==="boolean")&&(L=null);var te=!1;if(L===null)te=!0;else switch(Ce){case"bigint":case"string":case"number":te=!0;break;case"object":switch(L.$$typeof){case r:case e:te=!0;break;case g:return te=L._init,F(te(L._payload),ee,$,be,we)}}if(te)return we=we(L),te=be===""?"."+j(L,0):be,D(we)?($="",te!=null&&($=te.replace(ie,"$&/")+"/"),F(we,ee,$,"",function(tt){return tt})):we!=null&&(X(we)&&(we=V(we,$+(we.key==null||L&&L.key===we.key?"":(""+we.key).replace(ie,"$&/")+"/")+te)),ee.push(we)),1;te=0;var he=be===""?".":be+":";if(D(L))for(var Re=0;Re<L.length;Re++)be=L[Re],Ce=he+j(be,Re),te+=F(be,ee,$,Ce,we);else if(Re=M(L),typeof Re=="function")for(L=Re.call(L),Re=0;!(be=L.next()).done;)be=be.value,Ce=he+j(be,Re++),te+=F(be,ee,$,Ce,we);else if(Ce==="object"){if(typeof L.then=="function")return F(K(L),ee,$,be,we);throw ee=String(L),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return te}function G(L,ee,$){if(L==null)return L;var be=[],we=0;return F(L,be,"","",function(Ce){return ee.call($,Ce,we++)}),be}function fe(L){if(L._status===-1){var ee=L._result;ee=ee(),ee.then(function($){(L._status===0||L._status===-1)&&(L._status=1,L._result=$)},function($){(L._status===0||L._status===-1)&&(L._status=2,L._result=$)}),L._status===-1&&(L._status=0,L._result=ee)}if(L._status===1)return L._result.default;throw L._result}var se=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},me={map:G,forEach:function(L,ee,$){G(L,function(){ee.apply(this,arguments)},$)},count:function(L){var ee=0;return G(L,function(){ee++}),ee},toArray:function(L){return G(L,function(ee){return ee})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ot.Activity=_,ot.Children=me,ot.Component=x,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=z,ot.StrictMode=s,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ot.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},ot.cache=function(L){return function(){return L.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(L,ee,$){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var be=w({},L.props),we=L.key;if(ee!=null)for(Ce in ee.key!==void 0&&(we=""+ee.key),ee)!T.call(ee,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ee.ref===void 0||(be[Ce]=ee[Ce]);var Ce=arguments.length-2;if(Ce===1)be.children=$;else if(1<Ce){for(var te=Array(Ce),he=0;he<Ce;he++)te[he]=arguments[he+2];be.children=te}return O(L.type,we,be)},ot.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ot.createElement=function(L,ee,$){var be,we={},Ce=null;if(ee!=null)for(be in ee.key!==void 0&&(Ce=""+ee.key),ee)T.call(ee,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(we[be]=ee[be]);var te=arguments.length-2;if(te===1)we.children=$;else if(1<te){for(var he=Array(te),Re=0;Re<te;Re++)he[Re]=arguments[Re+2];we.children=he}if(L&&L.defaultProps)for(be in te=L.defaultProps,te)we[be]===void 0&&(we[be]=te[be]);return O(L,Ce,we)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(L){return{$$typeof:p,render:L}},ot.isValidElement=X,ot.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:fe}},ot.memo=function(L,ee){return{$$typeof:h,type:L,compare:ee===void 0?null:ee}},ot.startTransition=function(L){var ee=I.T,$={};I.T=$;try{var be=L(),we=I.S;we!==null&&we($,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(U,se)}catch(Ce){se(Ce)}finally{ee!==null&&$.types!==null&&(ee.types=$.types),I.T=ee}},ot.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ot.use=function(L){return I.H.use(L)},ot.useActionState=function(L,ee,$){return I.H.useActionState(L,ee,$)},ot.useCallback=function(L,ee){return I.H.useCallback(L,ee)},ot.useContext=function(L){return I.H.useContext(L)},ot.useDebugValue=function(){},ot.useDeferredValue=function(L,ee){return I.H.useDeferredValue(L,ee)},ot.useEffect=function(L,ee){return I.H.useEffect(L,ee)},ot.useEffectEvent=function(L){return I.H.useEffectEvent(L)},ot.useId=function(){return I.H.useId()},ot.useImperativeHandle=function(L,ee,$){return I.H.useImperativeHandle(L,ee,$)},ot.useInsertionEffect=function(L,ee){return I.H.useInsertionEffect(L,ee)},ot.useLayoutEffect=function(L,ee){return I.H.useLayoutEffect(L,ee)},ot.useMemo=function(L,ee){return I.H.useMemo(L,ee)},ot.useOptimistic=function(L,ee){return I.H.useOptimistic(L,ee)},ot.useReducer=function(L,ee,$){return I.H.useReducer(L,ee,$)},ot.useRef=function(L){return I.H.useRef(L)},ot.useState=function(L){return I.H.useState(L)},ot.useSyncExternalStore=function(L,ee,$){return I.H.useSyncExternalStore(L,ee,$)},ot.useTransition=function(){return I.H.useTransition()},ot.version="19.2.3",ot}var Mv;function hp(){return Mv||(Mv=1,wd.exports=lM()),wd.exports}var de=hp(),Cd={exports:{}},Zo={},Nd={exports:{}},Dd={};var Ev;function cM(){return Ev||(Ev=1,(function(r){function e(F,G){var fe=F.length;F.push(G);e:for(;0<fe;){var se=fe-1>>>1,me=F[se];if(0<l(me,G))F[se]=G,F[fe]=me,fe=se;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],fe=F.pop();if(fe!==G){F[0]=fe;e:for(var se=0,me=F.length,L=me>>>1;se<L;){var ee=2*(se+1)-1,$=F[ee],be=ee+1,we=F[be];if(0>l($,fe))be<me&&0>l(we,$)?(F[se]=we,F[be]=fe,se=be):(F[se]=$,F[ee]=fe,se=ee);else if(be<me&&0>l(we,fe))F[se]=we,F[be]=fe,se=be;else break e}}return G}function l(F,G){var fe=F.sortIndex-G.sortIndex;return fe!==0?fe:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,_=null,v=3,M=!1,b=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=F)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function D(F){if(w=!1,C(F),!b)if(i(m)!==null)b=!0,U||(U=!0,Z());else{var G=i(h);G!==null&&K(D,G.startTime-F)}}var U=!1,I=-1,T=5,O=-1;function V(){return S?!0:!(r.unstable_now()-O<T)}function X(){if(S=!1,U){var F=r.unstable_now();O=F;var G=!0;try{e:{b=!1,w&&(w=!1,N(I),I=-1),M=!0;var fe=v;try{t:{for(C(F),_=i(m);_!==null&&!(_.expirationTime>F&&V());){var se=_.callback;if(typeof se=="function"){_.callback=null,v=_.priorityLevel;var me=se(_.expirationTime<=F);if(F=r.unstable_now(),typeof me=="function"){_.callback=me,C(F),G=!0;break t}_===i(m)&&s(m),C(F)}else s(m);_=i(m)}if(_!==null)G=!0;else{var L=i(h);L!==null&&K(D,L.startTime-F),G=!1}}break e}finally{_=null,v=fe,M=!1}G=void 0}}finally{G?Z():U=!1}}}var Z;if(typeof z=="function")Z=function(){z(X)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,j=ie.port2;ie.port1.onmessage=X,Z=function(){j.postMessage(null)}}else Z=function(){x(X,0)};function K(F,G){I=x(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var fe=v;v=G;try{return F()}finally{v=fe}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var fe=v;v=F;try{return G()}finally{v=fe}},r.unstable_scheduleCallback=function(F,G,fe){var se=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?se+fe:se):fe=se,F){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=fe+me,F={id:g++,callback:G,priorityLevel:F,startTime:fe,expirationTime:me,sortIndex:-1},fe>se?(F.sortIndex=fe,e(h,F),i(m)===null&&F===i(h)&&(w?(N(I),I=-1):w=!0,K(D,fe-se))):(F.sortIndex=me,e(m,F),b||M||(b=!0,U||(U=!0,Z()))),F},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(F){var G=v;return function(){var fe=v;v=G;try{return F.apply(this,arguments)}finally{v=fe}}}})(Dd)),Dd}var bv;function uM(){return bv||(bv=1,Nd.exports=cM()),Nd.exports}var Ld={exports:{}},In={};var Tv;function fM(){if(Tv)return In;Tv=1;var r=hp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},In.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},In.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},In.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},In.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},In.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},In.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},In.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},In.requestFormReset=function(m){s.d.r(m)},In.unstable_batchedUpdates=function(m,h){return m(h)},In.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},In.useFormStatus=function(){return f.H.useHostTransitionStatus()},In.version="19.2.3",In}var Av;function dM(){if(Av)return Ld.exports;Av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=fM(),Ld.exports}var Rv;function hM(){if(Rv)return Zo;Rv=1;var r=uM(),e=hp(),i=dM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Symbol.for("react.client.reference");function j(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ie?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case D:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:j(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return j(t(n))}catch{}}return null}var K=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},se=[],me=-1;function L(t){return{current:t}}function ee(t){0>me||(t.current=se[me],se[me]=null,me--)}function $(t,n){me++,se[me]=t.current,t.current=n}var be=L(null),we=L(null),Ce=L(null),te=L(null);function he(t,n){switch($(Ce,n),$(we,t),$(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?V0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=V0(n),t=k0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(be),$(be,t)}function Re(){ee(be),ee(we),ee(Ce)}function tt(t){t.memoizedState!==null&&$(te,t);var n=be.current,a=k0(n,t.type);n!==a&&($(we,t),$(be,a))}function He(t){we.current===t&&(ee(be),ee(we)),te.current===t&&(ee(te),Xo._currentValue=fe)}var rt,rn;function st(t){if(rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rt=n&&n[1]||"",rn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rt+t+rn}var Mt=!1;function Bt(t,n){if(!t||Mt)return"";Mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(ge){var ue=ge}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(ge){ue=ge}t.call(Ee.prototype)}}else{try{throw Error()}catch(ge){ue=ge}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(ge){if(ge&&ue&&typeof ge.stack=="string")return[ge.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var H=y.split(`
`),le=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===le.length)for(o=H.length-1,u=le.length-1;1<=o&&0<=u&&H[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==le[u]){var Se=`
`+H[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{Mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?st(a):""}function _t(t,n){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return t.child!==n&&n!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Bt(t.type,!1);case 11:return Bt(t.type.render,!1);case 1:return Bt(t.type,!0);case 31:return st("Activity");default:return""}}function Yt(t){try{var n="",a=null;do n+=_t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var sn=Object.prototype.hasOwnProperty,Rn=r.unstable_scheduleCallback,Zt=r.unstable_cancelCallback,on=r.unstable_shouldYield,Y=r.unstable_requestPaint,Ft=r.unstable_now,Ot=r.unstable_getCurrentPriorityLevel,B=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,ce=r.unstable_LowPriority,ve=r.unstable_IdlePriority,Ne=r.log,Oe=r.unstable_setDisableYieldValue,_e=null,xe=null;function De(t){if(typeof Ne=="function"&&Oe(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(_e,t)}catch{}}var Xe=Math.clz32?Math.clz32:Je,Be=Math.log,Pe=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Be(t)/Pe|0)|0}var $e=256,it=262144,q=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Le(o):(y&=R,y!==0?u=Le(y):a||(a=R&~t,a!==0&&(u=Le(a))))):(R=o&~d,R!==0?u=Le(R):y!==0?u=Le(y):a||(a=o&~t,a!==0&&(u=Le(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vt(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,le=t.hiddenUpdates;for(a=y&~a;0<a;){var Se=31-Xe(a),Ee=1<<Se;R[Se]=0,H[Se]=-1;var ue=le[Se];if(ue!==null)for(le[Se]=null,Se=0;Se<ue.length;Se++){var ge=ue[Se];ge!==null&&(ge.lane&=-536870913)}a&=~Ee}o!==0&&Ct(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function Ct(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ni(t,n){var a=n&-n;return a=(a&42)!==0?1:no(a),(a&(t.suspendedLanes|n))!==0?0:a}function no(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ao(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:dv(t.type))}function Kr(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ki=Math.random().toString(36).slice(2),mn="__reactFiber$"+ki,Nn="__reactProps$"+ki,qn="__reactContainer$"+ki,_r="__reactEvents$"+ki,vl="__reactListeners$"+ki,_l="__reactHandles$"+ki,xr="__reactResources$"+ki,Fa="__reactMarker$"+ki;function za(t){delete t[mn],delete t[Nn],delete t[_r],delete t[vl],delete t[_l]}function ra(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=K0(t);t!==null;){if(a=t[mn])return a;t=K0(t)}return n}t=a,a=t.parentNode}return null}function sa(t){if(t=t[mn]||t[qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ha(t){var n=t[xr];return n||(n=t[xr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Fa]=!0}var xl=new Set,ro={};function A(t,n){k(t,n),k(t+"Capture",n)}function k(t,n){for(ro[t]=n,t=0;t<n.length;t++)xl.add(n[t])}var pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Fe(t){return sn.call(re,t)?!0:sn.call(ae,t)?!1:pe.test(t)?re[t]=!0:(ae[t]=!0,!1)}function We(t,n,a){if(Fe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ve(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=vt(t,n,""+t[n])}}function Nt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Kt=/[\n"\\]/g;function pt(t){return t.replace(Kt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ke(n)):t.value!==""+ke(n)&&(t.value=""+ke(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?En(t,y,ke(n)):a!=null?En(t,y,ke(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ke(R):t.removeAttribute("name")}function je(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ye(t);return}a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ye(t)}function En(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mt(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Gn(t,n,a){if(n!=null&&(n=""+ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ke(a):""}function ii(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ke(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ye(t)}function Vn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ga=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ga.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function tn(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Pt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Pt(t,d,n[d])}function gi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(t){return Xi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function vi(){}var Eu=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function Gp(t){var n=sa(t);if(n&&(t=n.stateNode)){var a=t[Nn]||null;e:switch(t=n.stateNode,n.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Nn]||null;if(!u)throw Error(s(90));vn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Nt(o)}break e;case"textarea":Gn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mt(t,!!a.multiple,n,!1)}}}var Tu=!1;function Vp(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var o=t(n);return o}finally{if(Tu=!1,(Qr!==null||Jr!==null)&&(sc(),Qr&&(n=Qr,t=Jr,Jr=Qr=null,Gp(n),t)))for(n=0;n<t.length;n++)Gp(t[n])}}function so(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(oa)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Au=!1}var Va=null,Ru=null,Sl=null;function kp(){if(Sl)return Sl;var t,n=Ru,a=n.length,o,u="value"in Va?Va.value:Va.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return Sl=u.slice(t,1<o?1-o:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Xp(){return!1}function Yn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ml:Xp,this.isPropagationStopped=Xp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Yn(yr),lo=_({},yr,{view:0,detail:0}),aS=Yn(lo),wu,Cu,co,bl=_({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(wu=t.screenX-co.screenX,Cu=t.screenY-co.screenY):Cu=wu=0,co=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Wp=Yn(bl),rS=_({},bl,{dataTransfer:0}),sS=Yn(rS),oS=_({},lo,{relatedTarget:0}),Nu=Yn(oS),lS=_({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=Yn(lS),uS=_({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=Yn(uS),dS=_({},yr,{data:0}),jp=Yn(dS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mS[t])?!!n[t]:!1}function Du(){return gS}var vS=_({},lo,{key:function(t){if(t.key){var n=hS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_S=Yn(vS),xS=_({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Yn(xS),SS=_({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),yS=Yn(SS),MS=_({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=Yn(MS),bS=_({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=Yn(bS),AS=_({},yr,{newState:0,oldState:0}),RS=Yn(AS),wS=[9,13,27,32],Lu=oa&&"CompositionEvent"in window,uo=null;oa&&"documentMode"in document&&(uo=document.documentMode);var CS=oa&&"TextEvent"in window&&!uo,Yp=oa&&(!Lu||uo&&8<uo&&11>=uo),Zp=" ",Kp=!1;function Qp(t,n){switch(t){case"keyup":return wS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function NS(t,n){switch(t){case"compositionend":return Jp(n);case"keypress":return n.which!==32?null:(Kp=!0,Zp);case"textInput":return t=n.data,t===Zp&&Kp?null:t;default:return null}}function DS(t,n){if($r)return t==="compositionend"||!Lu&&Qp(t,n)?(t=kp(),Sl=Ru=Va=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yp&&n.locale!=="ko"?null:n.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!LS[t.type]:n==="textarea"}function em(t,n,a,o){Qr?Jr?Jr.push(o):Jr=[o]:Qr=o,n=hc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var fo=null,ho=null;function US(t){I0(t,0)}function Tl(t){var n=Sr(t);if(Nt(n))return t}function tm(t,n){if(t==="change")return n}var nm=!1;if(oa){var Uu;if(oa){var Ou="oninput"in document;if(!Ou){var im=document.createElement("div");im.setAttribute("oninput","return;"),Ou=typeof im.oninput=="function"}Uu=Ou}else Uu=!1;nm=Uu&&(!document.documentMode||9<document.documentMode)}function am(){fo&&(fo.detachEvent("onpropertychange",rm),ho=fo=null)}function rm(t){if(t.propertyName==="value"&&Tl(ho)){var n=[];em(n,ho,t,bu(t)),Vp(US,n)}}function OS(t,n,a){t==="focusin"?(am(),fo=n,ho=a,fo.attachEvent("onpropertychange",rm)):t==="focusout"&&am()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(ho)}function IS(t,n){if(t==="click")return Tl(n)}function BS(t,n){if(t==="input"||t==="change")return Tl(n)}function FS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:FS;function po(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!sn.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,n){var a=sm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sm(a)}}function lm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?lm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var zS=oa&&"documentMode"in document&&11>=document.documentMode,es=null,Iu=null,mo=null,Bu=!1;function um(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||es==null||es!==Jt(o)||(o=es,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=hc(Iu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=es)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ts={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},Fu={},fm={};oa&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Er(t){if(Fu[t])return Fu[t];if(!ts[t])return t;var n=ts[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in fm)return Fu[t]=n[a];return t}var dm=Er("animationend"),hm=Er("animationiteration"),pm=Er("animationstart"),HS=Er("transitionrun"),GS=Er("transitionstart"),VS=Er("transitioncancel"),mm=Er("transitionend"),gm=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Li(t,n){gm.set(t,n),A(n,[t])}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],ns=0,Hu=0;function Rl(){for(var t=ns,n=Hu=ns=0;n<t;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&vm(a,u,d)}}function wl(t,n,a,o){_i[ns++]=t,_i[ns++]=n,_i[ns++]=a,_i[ns++]=o,Hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gu(t,n,a,o){return wl(t,n,a,o),Cl(t)}function br(t,n){return wl(t,null,null,n),Cl(t)}function vm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Cl(t){if(50<Bo)throw Bo=0,Qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var is={};function kS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new kS(t,n,a,o)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function _m(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Nl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Vu(t)&&(y=1);else if(typeof t=="string")y=Yy(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ri(31,a,n,u),t.elementType=O,t.lanes=d,t;case w:return Tr(a.children,u,d,n);case S:y=8,u|=24;break;case x:return t=ri(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case D:return t=ri(13,a,n,u),t.elementType=D,t.lanes=d,t;case U:return t=ri(19,a,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:y=10;break e;case N:y=9;break e;case C:y=11;break e;case I:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ri(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Tr(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function ku(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function xm(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Xu(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sm=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=Sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Yt(n)},Sm.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var as=[],rs=0,Dl=null,go=0,Si=[],yi=0,ka=null,Wi=1,ji="";function ca(t,n){as[rs++]=go,as[rs++]=Dl,Dl=t,go=n}function ym(t,n,a){Si[yi++]=Wi,Si[yi++]=ji,Si[yi++]=ka,ka=t;var o=Wi;t=ji;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var d=32-Xe(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Wi=1<<32-Xe(n)+u|a<<u|o,ji=d+t}else Wi=1<<d|a<<u|o,ji=t}function Wu(t){t.return!==null&&(ca(t,1),ym(t,1,0))}function ju(t){for(;t===Dl;)Dl=as[--rs],as[rs]=null,go=as[--rs],as[rs]=null;for(;t===ka;)ka=Si[--yi],Si[yi]=null,ji=Si[--yi],Si[yi]=null,Wi=Si[--yi],Si[yi]=null}function Mm(t,n){Si[yi++]=Wi,Si[yi++]=ji,Si[yi++]=ka,Wi=n.id,ji=n.overflow,ka=t}var Dn=null,$t=null,At=!1,Xa=null,Mi=!1,qu=Error(s(519));function Wa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(xi(n,t)),qu}function Em(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Nn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)St(zo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),je(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),ii(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||H0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=vi),n=!0):n=!1,n||Wa(t,!0)}function bm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function ss(t){if(t!==Dn)return!1;if(!At)return bm(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dd(t.type,t.memoizedProps)),a=!a),a&&$t&&Wa(t),bm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Z0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Z0(t)}else n===27?(n=$t,rr(t.type)?(t=vd,vd=null,$t=t):$t=n):$t=Dn?bi(t.stateNode.nextSibling):null;return!0}function Ar(){$t=Dn=null,At=!1}function Yu(){var t=Xa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Xa=null),t}function vo(t){Xa===null?Xa=[t]:Xa.push(t)}var Zu=L(null),Rr=null,ua=null;function ja(t,n,a){$(Zu,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=Zu.current,ee(Zu)}function Ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Ku(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Ku(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function os(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ai(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===te.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}u=u.return}t!==null&&Qu(n,t,a,o),n.flags|=262144}function Ll(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wr(t){Rr=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Tm(Rr,t)}function Ul(t,n){return Rr===null&&wr(t),Tm(t,n)}function Tm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var XS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},WS=r.unstable_scheduleCallback,jS=r.unstable_NormalPriority,_n={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new XS,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&WS(jS,function(){t.controller.abort()})}var xo=null,$u=0,ls=0,cs=null;function qS(t,n){if(xo===null){var a=xo=[];$u=0,ls=id(),cs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(Am,Am),n}function Am(){if(--$u===0&&xo!==null){cs!==null&&(cs.status="fulfilled");var t=xo;xo=null,ls=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function YS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rm=F.S;F.S=function(t,n){u0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qS(t,n),Rm!==null&&Rm(t,n)};var Cr=L(null);function ef(){var t=Cr.current;return t!==null?t:Qt.pooledCache}function Ol(t,n){n===null?$(Cr,Cr.current):$(Cr,n.pool)}function wm(){var t=ef();return t===null?null:{parent:_n._currentValue,pool:t}}var us=Error(s(460)),tf=Error(s(474)),Pl=Error(s(542)),Il={then:function(){}};function Cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(vi,vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lm(t),t;default:if(typeof n.status=="string")n.then(vi,vi);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lm(t),t}throw Dr=n,us}}function Nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,us):a}}var Dr=null;function Dm(){if(Dr===null)throw Error(s(459));var t=Dr;return Dr=null,t}function Lm(t){if(t===us||t===Pl)throw Error(s(483))}var fs=null,So=0;function Bl(t){var n=So;return So+=1,fs===null&&(fs=[]),Nm(fs,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Fl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Um(t){function n(Q,W){if(t){var oe=Q.deletions;oe===null?(Q.deletions=[W],Q.flags|=16):oe.push(W)}}function a(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=la(Q,W),Q.index=0,Q.sibling=null,Q}function d(Q,W,oe){return Q.index=oe,t?(oe=Q.alternate,oe!==null?(oe=oe.index,oe<W?(Q.flags|=67108866,W):oe):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function y(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,oe,Me){return W===null||W.tag!==6?(W=ku(oe,Q.mode,Me),W.return=Q,W):(W=u(W,oe),W.return=Q,W)}function H(Q,W,oe,Me){var et=oe.type;return et===w?Se(Q,W,oe.props.children,Me,oe.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Nr(et)===W.type)?(W=u(W,oe.props),yo(W,oe),W.return=Q,W):(W=Nl(oe.type,oe.key,oe.props,null,Q.mode,Me),yo(W,oe),W.return=Q,W)}function le(Q,W,oe,Me){return W===null||W.tag!==4||W.stateNode.containerInfo!==oe.containerInfo||W.stateNode.implementation!==oe.implementation?(W=Xu(oe,Q.mode,Me),W.return=Q,W):(W=u(W,oe.children||[]),W.return=Q,W)}function Se(Q,W,oe,Me,et){return W===null||W.tag!==7?(W=Tr(oe,Q.mode,Me,et),W.return=Q,W):(W=u(W,oe),W.return=Q,W)}function Ee(Q,W,oe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=ku(""+W,Q.mode,oe),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return oe=Nl(W.type,W.key,W.props,null,Q.mode,oe),yo(oe,W),oe.return=Q,oe;case b:return W=Xu(W,Q.mode,oe),W.return=Q,W;case T:return W=Nr(W),Ee(Q,W,oe)}if(K(W)||Z(W))return W=Tr(W,Q.mode,oe,null),W.return=Q,W;if(typeof W.then=="function")return Ee(Q,Bl(W),oe);if(W.$$typeof===z)return Ee(Q,Ul(Q,W),oe);Fl(Q,W)}return null}function ue(Q,W,oe,Me){var et=W!==null?W.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return et!==null?null:R(Q,W,""+oe,Me);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===et?H(Q,W,oe,Me):null;case b:return oe.key===et?le(Q,W,oe,Me):null;case T:return oe=Nr(oe),ue(Q,W,oe,Me)}if(K(oe)||Z(oe))return et!==null?null:Se(Q,W,oe,Me,null);if(typeof oe.then=="function")return ue(Q,W,Bl(oe),Me);if(oe.$$typeof===z)return ue(Q,W,Ul(Q,oe),Me);Fl(Q,oe)}return null}function ge(Q,W,oe,Me,et){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return Q=Q.get(oe)||null,R(W,Q,""+Me,et);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case M:return Q=Q.get(Me.key===null?oe:Me.key)||null,H(W,Q,Me,et);case b:return Q=Q.get(Me.key===null?oe:Me.key)||null,le(W,Q,Me,et);case T:return Me=Nr(Me),ge(Q,W,oe,Me,et)}if(K(Me)||Z(Me))return Q=Q.get(oe)||null,Se(W,Q,Me,et,null);if(typeof Me.then=="function")return ge(Q,W,oe,Bl(Me),et);if(Me.$$typeof===z)return ge(Q,W,oe,Ul(W,Me),et);Fl(W,Me)}return null}function Ze(Q,W,oe,Me){for(var et=null,Lt=null,Ke=W,ht=W=0,bt=null;Ke!==null&&ht<oe.length;ht++){Ke.index>ht?(bt=Ke,Ke=null):bt=Ke.sibling;var Ut=ue(Q,Ke,oe[ht],Me);if(Ut===null){Ke===null&&(Ke=bt);break}t&&Ke&&Ut.alternate===null&&n(Q,Ke),W=d(Ut,W,ht),Lt===null?et=Ut:Lt.sibling=Ut,Lt=Ut,Ke=bt}if(ht===oe.length)return a(Q,Ke),At&&ca(Q,ht),et;if(Ke===null){for(;ht<oe.length;ht++)Ke=Ee(Q,oe[ht],Me),Ke!==null&&(W=d(Ke,W,ht),Lt===null?et=Ke:Lt.sibling=Ke,Lt=Ke);return At&&ca(Q,ht),et}for(Ke=o(Ke);ht<oe.length;ht++)bt=ge(Ke,Q,ht,oe[ht],Me),bt!==null&&(t&&bt.alternate!==null&&Ke.delete(bt.key===null?ht:bt.key),W=d(bt,W,ht),Lt===null?et=bt:Lt.sibling=bt,Lt=bt);return t&&Ke.forEach(function(ur){return n(Q,ur)}),At&&ca(Q,ht),et}function nt(Q,W,oe,Me){if(oe==null)throw Error(s(151));for(var et=null,Lt=null,Ke=W,ht=W=0,bt=null,Ut=oe.next();Ke!==null&&!Ut.done;ht++,Ut=oe.next()){Ke.index>ht?(bt=Ke,Ke=null):bt=Ke.sibling;var ur=ue(Q,Ke,Ut.value,Me);if(ur===null){Ke===null&&(Ke=bt);break}t&&Ke&&ur.alternate===null&&n(Q,Ke),W=d(ur,W,ht),Lt===null?et=ur:Lt.sibling=ur,Lt=ur,Ke=bt}if(Ut.done)return a(Q,Ke),At&&ca(Q,ht),et;if(Ke===null){for(;!Ut.done;ht++,Ut=oe.next())Ut=Ee(Q,Ut.value,Me),Ut!==null&&(W=d(Ut,W,ht),Lt===null?et=Ut:Lt.sibling=Ut,Lt=Ut);return At&&ca(Q,ht),et}for(Ke=o(Ke);!Ut.done;ht++,Ut=oe.next())Ut=ge(Ke,Q,ht,Ut.value,Me),Ut!==null&&(t&&Ut.alternate!==null&&Ke.delete(Ut.key===null?ht:Ut.key),W=d(Ut,W,ht),Lt===null?et=Ut:Lt.sibling=Ut,Lt=Ut);return t&&Ke.forEach(function(rM){return n(Q,rM)}),At&&ca(Q,ht),et}function jt(Q,W,oe,Me){if(typeof oe=="object"&&oe!==null&&oe.type===w&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var et=oe.key;W!==null;){if(W.key===et){if(et=oe.type,et===w){if(W.tag===7){a(Q,W.sibling),Me=u(W,oe.props.children),Me.return=Q,Q=Me;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Nr(et)===W.type){a(Q,W.sibling),Me=u(W,oe.props),yo(Me,oe),Me.return=Q,Q=Me;break e}a(Q,W);break}else n(Q,W);W=W.sibling}oe.type===w?(Me=Tr(oe.props.children,Q.mode,Me,oe.key),Me.return=Q,Q=Me):(Me=Nl(oe.type,oe.key,oe.props,null,Q.mode,Me),yo(Me,oe),Me.return=Q,Q=Me)}return y(Q);case b:e:{for(et=oe.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===oe.containerInfo&&W.stateNode.implementation===oe.implementation){a(Q,W.sibling),Me=u(W,oe.children||[]),Me.return=Q,Q=Me;break e}else{a(Q,W);break}else n(Q,W);W=W.sibling}Me=Xu(oe,Q.mode,Me),Me.return=Q,Q=Me}return y(Q);case T:return oe=Nr(oe),jt(Q,W,oe,Me)}if(K(oe))return Ze(Q,W,oe,Me);if(Z(oe)){if(et=Z(oe),typeof et!="function")throw Error(s(150));return oe=et.call(oe),nt(Q,W,oe,Me)}if(typeof oe.then=="function")return jt(Q,W,Bl(oe),Me);if(oe.$$typeof===z)return jt(Q,W,Ul(Q,oe),Me);Fl(Q,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,W!==null&&W.tag===6?(a(Q,W.sibling),Me=u(W,oe),Me.return=Q,Q=Me):(a(Q,W),Me=ku(oe,Q.mode,Me),Me.return=Q,Q=Me),y(Q)):a(Q,W)}return function(Q,W,oe,Me){try{So=0;var et=jt(Q,W,oe,Me);return fs=null,et}catch(Ke){if(Ke===us||Ke===Pl)throw Ke;var Lt=ri(29,Ke,null,Q.mode);return Lt.lanes=Me,Lt.return=Q,Lt}}}var Lr=Um(!0),Om=Um(!1),qa=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(t),vm(t,null,a),n}return wl(t,o,n,a),Cl(t)}function Mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,jn(t,a)}}function rf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var sf=!1;function Eo(){if(sf){var t=cs;if(t!==null)throw t}}function bo(t,n,a,o){sf=!1;var u=t.updateQueue;qa=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,le=H.next;H.next=null,y===null?d=le:y.next=le,y=H;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,R=Se.lastBaseUpdate,R!==y&&(R===null?Se.firstBaseUpdate=le:R.next=le,Se.lastBaseUpdate=H))}if(d!==null){var Ee=u.baseState;y=0,Se=le=H=null,R=d;do{var ue=R.lane&-536870913,ge=ue!==R.lane;if(ge?(Et&ue)===ue:(o&ue)===ue){ue!==0&&ue===ls&&(sf=!0),Se!==null&&(Se=Se.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,nt=R;ue=n;var jt=a;switch(nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){Ee=Ze.call(jt,Ee,ue);break e}Ee=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,ue=typeof Ze=="function"?Ze.call(jt,Ee,ue):Ze,ue==null)break e;Ee=_({},Ee,ue);break e;case 2:qa=!0}}ue=R.callback,ue!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=u.callbacks,ge===null?u.callbacks=[ue]:ge.push(ue))}else ge={lane:ue,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Se===null?(le=Se=ge,H=Ee):Se=Se.next=ge,y|=ue;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ge=R,R=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);Se===null&&(H=Ee),u.baseState=H,u.firstBaseUpdate=le,u.lastBaseUpdate=Se,d===null&&(u.shared.lanes=0),er|=y,t.lanes=y,t.memoizedState=Ee}}function Pm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pm(a[t],n)}var ds=L(null),zl=L(0);function Bm(t,n){t=Sa,$(zl,t),$(ds,n),Sa=t|n.baseLanes}function of(){$(zl,Sa),$(ds,ds.current)}function lf(){Sa=zl.current,ee(ds),ee(zl)}var si=L(null),Ei=null;function Ka(t){var n=t.alternate;$(dn,dn.current&1),$(si,t),Ei===null&&(n===null||ds.current!==null||n.memoizedState!==null)&&(Ei=t)}function cf(t){$(dn,dn.current),$(si,t),Ei===null&&(Ei=t)}function Fm(t){t.tag===22?($(dn,dn.current),$(si,t),Ei===null&&(Ei=t)):Qa()}function Qa(){$(dn,dn.current),$(si,si.current)}function oi(t){ee(si),Ei===t&&(Ei=null),ee(dn)}var dn=L(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||md(a)||gd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,dt=null,Xt=null,xn=null,Gl=!1,hs=!1,Ur=!1,Vl=0,To=0,ps=null,ZS=0;function ln(){throw Error(s(321))}function uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function ff(t,n,a,o,u,d){return da=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?yg:Af,Ur=!1,d=a(o,u),Ur=!1,hs&&(d=Hm(n,a,o,u)),zm(t),d}function zm(t){F.H=wo;var n=Xt!==null&&Xt.next!==null;if(da=0,xn=Xt=dt=null,Gl=!1,To=0,ps=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&Ll(t)&&(Sn=!0))}function Hm(t,n,a,o){dt=t;var u=0;do{if(hs&&(ps=null),To=0,hs=!1,25<=u)throw Error(s(301));if(u+=1,xn=Xt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=Mg,d=n(a,o)}while(hs);return d}function KS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Ao(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(dt.flags|=1024),n}function df(){var t=Vl!==0;return Vl=0,t}function hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pf(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}da=0,xn=Xt=dt=null,hs=!1,To=Vl=0,ps=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?dt.memoizedState=xn=t:xn=xn.next=t,xn}function hn(){if(Xt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=xn===null?dt.memoizedState:xn.next;if(n!==null)xn=n,Xt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},xn===null?dt.memoizedState=xn=t:xn=xn.next=t}return xn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(t){var n=To;return To+=1,ps===null&&(ps=[]),t=Nm(ps,t,n),n=dt,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?yg:Af),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ao(t);if(t.$$typeof===z)return Ln(t)}throw Error(s(438,String(t)))}function mf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=V;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function Wl(t){var n=hn();return gf(n,Xt,t)}function gf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,H=null,le=n,Se=!1;do{var Ee=le.lane&-536870913;if(Ee!==le.lane?(Et&Ee)===Ee:(da&Ee)===Ee){var ue=le.revertLane;if(ue===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Ee===ls&&(Se=!0);else if((da&ue)===ue){le=le.next,ue===ls&&(Se=!0);continue}else Ee={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},H===null?(R=H=Ee,y=d):H=H.next=Ee,dt.lanes|=ue,er|=ue;Ee=le.action,Ur&&a(d,Ee),d=le.hasEagerState?le.eagerState:a(d,Ee)}else ue={lane:Ee,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},H===null?(R=H=ue,y=d):H=H.next=ue,dt.lanes|=Ee,er|=Ee;le=le.next}while(le!==null&&le!==n);if(H===null?y=d:H.next=R,!ai(d,t.memoizedState)&&(Sn=!0,Se&&(a=cs,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vf(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);ai(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Gm(t,n,a){var o=dt,u=hn(),d=At;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ai((Xt||u).memoizedState,a);if(y&&(u.memoizedState=a,Sn=!0),u=u.queue,Sf(Xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||xn!==null&&xn.memoizedState.tag&1){if(o.flags|=2048,ms(9,{destroy:void 0},km.bind(null,o,u,a,n),null),Qt===null)throw Error(s(349));d||(da&127)!==0||Vm(o,n,a)}return a}function Vm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=kl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function km(t,n,a,o){n.value=a,n.getSnapshot=o,Wm(n)&&jm(t)}function Xm(t,n,a){return a(function(){Wm(n)&&jm(t)})}function Wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function jm(t){var n=br(t,2);n!==null&&$n(n,t,2)}function _f(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ur){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function qm(t,n,a,o){return t.baseState=a,gf(t,Xt,typeof o=="function"?o:ha)}function QS(t,n,a,o,u){if(Yl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Ym(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,y={};F.T=y;try{var R=a(u,o),H=F.S;H!==null&&H(y,R),Zm(t,n,R)}catch(le){xf(t,n,le)}finally{d!==null&&y.types!==null&&(d.types=y.types),F.T=d}}else try{d=a(u,o),Zm(t,n,d)}catch(le){xf(t,n,le)}}function Zm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Km(t,n,o)},function(o){return xf(t,n,o)}):Km(t,n,a)}function Km(t,n,a){n.status="fulfilled",n.value=a,Qm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ym(t,a)))}function xf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qm(n),n=n.next;while(n!==o)}t.action=null}function Qm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Jm(t,n){return n}function $m(t,n){if(At){var a=Qt.formState;if(a!==null){e:{var o=dt;if(At){if($t){t:{for(var u=$t,d=Mi;u.nodeType!==8;){if(!d){u=null;break t}if(u=bi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=bi(u.nextSibling),o=u.data==="F!";break e}}Wa(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:n},a.queue=o,a=_g.bind(null,dt,o),o.dispatch=a,o=_f(!1),d=Tf.bind(null,dt,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=QS.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function eg(t){var n=hn();return tg(n,Xt,t)}function tg(t,n,a){if(n=gf(t,n,Jm)[0],t=Wl(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(y){throw y===us?Pl:y}else o=n;n=hn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ms(9,{destroy:void 0},JS.bind(null,u,a),null)),[o,d,t]}function JS(t,n){t.action=n}function ng(t){var n=hn(),a=Xt;if(a!==null)return tg(n,a,t);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ms(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=kl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function ig(){return hn().memoizedState}function jl(t,n,a,o){var u=kn();dt.flags|=t,u.memoizedState=ms(1|n,{destroy:void 0},a,o===void 0?null:o)}function ql(t,n,a,o){var u=hn();o=o===void 0?null:o;var d=u.memoizedState.inst;Xt!==null&&o!==null&&uf(o,Xt.memoizedState.deps)?u.memoizedState=ms(n,d,a,o):(dt.flags|=t,u.memoizedState=ms(1|n,d,a,o))}function ag(t,n){jl(8390656,8,t,n)}function Sf(t,n){ql(2048,8,t,n)}function $S(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=kl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function rg(t){var n=hn().memoizedState;return $S({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function sg(t,n){return ql(4,2,t,n)}function og(t,n){return ql(4,4,t,n)}function lg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function cg(t,n,a){a=a!=null?a.concat([t]):null,ql(4,4,lg.bind(null,n,t),a)}function yf(){}function ug(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function fg(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=t(),Ur){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[o,n],o}function Mf(t,n,a){return a===void 0||(da&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=d0(),dt.lanes|=t,er|=t,a)}function dg(t,n,a,o){return ai(a,n)?a:ds.current!==null?(t=Mf(t,a,o),ai(t,n)||(Sn=!0),t):(da&42)===0||(da&1073741824)!==0&&(Et&261930)===0?(Sn=!0,t.memoizedState=a):(t=d0(),dt.lanes|=t,er|=t,n)}function hg(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var y=F.T,R={};F.T=R,Tf(t,!1,n,a);try{var H=u(),le=F.S;if(le!==null&&le(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var Se=YS(H,o);Ro(t,n,Se,ui(t))}else Ro(t,n,o,ui(t))}catch(Ee){Ro(t,n,{then:function(){},status:"rejected",reason:Ee},ui())}finally{G.p=d,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function ey(){}function Ef(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=pg(t).queue;hg(t,u,n,fe,a===null?ey:function(){return mg(t),a(o)})}function pg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:fe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function mg(t){var n=pg(t);n.next===null&&(n=t.alternate.memoizedState),Ro(t,n.next.queue,{},ui())}function bf(){return Ln(Xo)}function gg(){return hn().memoizedState}function vg(){return hn().memoizedState}function ty(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Ya(a);var o=Za(n,t,a);o!==null&&($n(o,n,a),Mo(o,n,a)),n={cache:Ju()},t.payload=n;return}n=n.return}}function ny(t,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(t)?xg(n,a):(a=Gu(t,n,a,o),a!==null&&($n(a,t,o),Sg(a,n,o)))}function _g(t,n,a){var o=ui();Ro(t,n,a,o)}function Ro(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(t))xg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,ai(R,y))return wl(t,n,u,0),Qt===null&&Rl(),!1}catch{}if(a=Gu(t,n,u,o),a!==null)return $n(a,t,o),Sg(a,n,o),!0}return!1}function Tf(t,n,a,o){if(o={lane:2,revertLane:id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(t)){if(n)throw Error(s(479))}else n=Gu(t,a,o,2),n!==null&&$n(n,t,2)}function Yl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function xg(t,n){hs=Gl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Sg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,jn(t,a)}}var wo={readContext:Ln,use:Xl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};wo.useEffectEvent=ln;var yg={readContext:Ln,use:Xl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:ag,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,jl(4194308,4,lg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var o=t();if(Ur){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Ur){De(!0);try{a(n)}finally{De(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=ny.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=_f(t);var n=t.queue,a=_g.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:yf,useDeferredValue:function(t,n){var a=kn();return Mf(a,t,n)},useTransition:function(){var t=_f(!1);return t=hg.bind(null,dt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=kn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(Et&127)!==0||Vm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,ag(Xm.bind(null,o,d,t),[t]),o.flags|=2048,ms(9,{destroy:void 0},km.bind(null,o,d,a,n),null),a},useId:function(){var t=kn(),n=Qt.identifierPrefix;if(At){var a=ji,o=Wi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ZS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bf,useFormState:$m,useActionState:$m,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:mf,useCacheRefresh:function(){return kn().memoizedState=ty.bind(null,dt)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Ln,use:Xl,useCallback:ug,useContext:Ln,useEffect:Sf,useImperativeHandle:cg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:Wl,useRef:ig,useState:function(){return Wl(ha)},useDebugValue:yf,useDeferredValue:function(t,n){var a=hn();return dg(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Wl(ha)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Ao(t),n]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:bf,useFormState:eg,useActionState:eg,useOptimistic:function(t,n){var a=hn();return qm(a,Xt,t,n)},useMemoCache:mf,useCacheRefresh:vg};Af.useEffectEvent=rg;var Mg={readContext:Ln,use:Xl,useCallback:ug,useContext:Ln,useEffect:Sf,useImperativeHandle:cg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:vf,useRef:ig,useState:function(){return vf(ha)},useDebugValue:yf,useDeferredValue:function(t,n){var a=hn();return Xt===null?Mf(a,t,n):dg(a,Xt.memoizedState,t,n)},useTransition:function(){var t=vf(ha)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Ao(t),n]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:bf,useFormState:ng,useActionState:ng,useOptimistic:function(t,n){var a=hn();return Xt!==null?qm(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:vg};Mg.useEffectEvent=rg;function Rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ui(),u=Ya(o);u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&($n(n,t,o),Mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ui(),u=Ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&($n(n,t,o),Mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),o=Ya(a);o.tag=2,n!=null&&(o.callback=n),n=Za(t,o,a),n!==null&&($n(n,t,a),Mo(n,t,a))}};function Eg(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,d):!0}function bg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Tg(t){Al(t)}function Ag(t){console.error(t)}function Rg(t){Al(t)}function Zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function wg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cf(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(t,n)},a}function Cg(t){return t=Ya(t),t.tag=3,t}function Ng(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){wg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){wg(n,a,o),typeof u!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function iy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&os(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return Ei===null?oc():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ed(t,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ed(t,o,u)),!1}throw Error(s(435,a.tag))}return ed(t,o,u),oc(),!1}if(At)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(t=Error(s(422),{cause:o}),vo(xi(t,a)))):(o!==qu&&(n=Error(s(423),{cause:o}),vo(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,a),u=Cf(t.stateNode,o,u),rf(t,u),cn!==4&&(cn=2)),!1;var d=Error(s(520),{cause:o});if(d=xi(d,a),Io===null?Io=[d]:Io.push(d),cn!==4&&(cn=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Cf(a.stateNode,o,t),rf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(tr===null||!tr.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Cg(u),Ng(u,t,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(s(461)),Sn=!1;function Un(t,n,a,o){n.child=t===null?Om(n,null,a,o):Lr(n,t.child,a,o)}function Dg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return wr(n),o=ff(t,n,a,y,d,u),R=df(),t!==null&&!Sn?(hf(t,n,u),pa(t,n,u)):(At&&R&&Wu(n),n.flags|=1,Un(t,n,o,u),n.child)}function Lg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Vu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Ug(t,n,d,o,u)):(t=Nl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Ff(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(y,o)&&t.ref===n.ref)return pa(t,n,u)}return n.flags|=1,t=la(d,o),t.ref=n.ref,t.return=n,n.child=t}function Ug(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(po(d,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,Ff(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,pa(t,n,u)}return Df(t,n,a,o,u)}function Og(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Pg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(n,d!==null?d.cachePool:null),d!==null?Bm(n,d):of(),Fm(n);else return o=n.lanes=536870912,Pg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ol(n,d.cachePool),Bm(n,d),Qa(),n.memoizedState=null):(t!==null&&Ol(n,null),of(),Qa());return Un(t,n,u,a),n.child}function Co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pg(t,n,a,o,u){var d=ef();return d=d===null?null:{parent:_n._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ol(n,null),of(),Fm(n),t!==null&&os(t,n,o,!0),n.childLanes=u,null}function Kl(t,n){return n=Jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ig(t,n,a){return Lr(n,t.child,null,a),t=Kl(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function ay(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Kl(n,o),n.lanes=536870912,Co(null,t);if(cf(n),(t=$t)?(t=Y0(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Wi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=xm(t),a.return=n,n.child=a,Dn=n,$t=null)):t=null,t===null)throw Wa(n);return n.lanes=536870912,null}return Kl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=Ig(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||os(t,n,a,!1),u=(a&t.childLanes)!==0,Sn||u){if(o=Qt,o!==null&&(y=ni(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,br(t,y),$n(o,t,y),Nf;oc(),n=Ig(t,n,a)}else t=d.treeContext,$t=bi(y.nextSibling),Dn=n,At=!0,Xa=null,Mi=!1,t!==null&&Mm(n,t),n=Kl(n,o),n.flags|=4096;return n}return t=la(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return wr(n),a=ff(t,n,a,o,void 0,u),o=df(),t!==null&&!Sn?(hf(t,n,u),pa(t,n,u)):(At&&o&&Wu(n),n.flags|=1,Un(t,n,a,u),n.child)}function Bg(t,n,a,o,u,d){return wr(n),n.updateQueue=null,a=Hm(n,o,a,u),zm(t),o=df(),t!==null&&!Sn?(hf(t,n,d),pa(t,n,d)):(At&&o&&Wu(n),n.flags|=1,Un(t,n,a,d),n.child)}function Fg(t,n,a,o,u){if(wr(n),n.stateNode===null){var d=is,y=a.contextType;typeof y=="object"&&y!==null&&(d=Ln(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=wf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},nf(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Ln(y):is,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Rf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&wf.enqueueReplaceState(d,d.state,null),bo(n,o,d,u),Eo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,H=Or(a,R);d.props=H;var le=d.context,Se=a.contextType;y=is,typeof Se=="object"&&Se!==null&&(y=Ln(Se));var Ee=a.getDerivedStateFromProps;Se=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Se||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||le!==y)&&bg(n,d,o,y),qa=!1;var ue=n.memoizedState;d.state=ue,bo(n,o,d,u),Eo(),le=n.memoizedState,R||ue!==le||qa?(typeof Ee=="function"&&(Rf(n,a,Ee,o),le=n.memoizedState),(H=qa||Eg(n,a,H,o,ue,le,y))?(Se||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=y,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,af(t,n),y=n.memoizedProps,Se=Or(a,y),d.props=Se,Ee=n.pendingProps,ue=d.context,le=a.contextType,H=is,typeof le=="object"&&le!==null&&(H=Ln(le)),R=a.getDerivedStateFromProps,(le=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Ee||ue!==H)&&bg(n,d,o,H),qa=!1,ue=n.memoizedState,d.state=ue,bo(n,o,d,u),Eo();var ge=n.memoizedState;y!==Ee||ue!==ge||qa||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof R=="function"&&(Rf(n,a,R,o),ge=n.memoizedState),(Se=qa||Eg(n,a,Se,o,ue,ge,H)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ge,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ge,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),d.props=o,d.state=ge,d.context=H,o=Se):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Lr(n,t.child,null,u),n.child=Lr(n,null,a,u)):Un(t,n,a,u),n.memoizedState=d.state,t=n.child):t=pa(t,n,u),t}function zg(t,n,a,o){return Ar(),n.flags|=256,Un(t,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:wm()}}function Of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Hg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ka(n):Qa(),(t=$t)?(t=Y0(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Wi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=xm(t),a.return=n,n.child=a,Dn=n,$t=null)):t=null,t===null)throw Wa(n);return gd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Qa(),u=n.mode,R=Jl({mode:"hidden",children:R},u),o=Tr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Uf(a),o.childLanes=Of(t,y,a),n.memoizedState=Lf,Co(null,o)):(Ka(n),Pf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(Ka(n),n.flags&=-257,n=If(t,n,a)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,n=null):(Qa(),R=o.fallback,u=n.mode,o=Jl({mode:"visible",children:o.children},u),R=Tr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Lr(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Of(t,y,a),n.memoizedState=Lf,n=Co(null,o));else if(Ka(n),gd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var le=y.dgst;y=le,o=Error(s(419)),o.stack="",o.digest=y,vo({value:o,source:null,stack:null}),n=If(t,n,a)}else if(Sn||os(t,n,a,!1),y=(a&t.childLanes)!==0,Sn||y){if(y=Qt,y!==null&&(o=ni(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,br(t,o),$n(y,t,o),Nf;md(R)||oc(),n=If(t,n,a)}else md(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,$t=bi(R.nextSibling),Dn=n,At=!0,Xa=null,Mi=!1,t!==null&&Mm(n,t),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Qa(),R=o.fallback,u=n.mode,H=t.child,le=H.sibling,o=la(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,le!==null?R=la(le,R):(R=Tr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Co(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Uf(a):(u=R.cachePool,u!==null?(H=_n._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=wm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Of(t,y,a),n.memoizedState=Lf,Co(t.child,o)):(Ka(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Pf(t,n){return n=Jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Jl(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function If(t,n,a){return Lr(n,t.child,null,a),t=Pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ku(t.return,n,a)}function Bf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function Vg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=dn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,$(dn,y),Un(t,n,o,a),o=At?go:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,a,n);else if(t.tag===19)Gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Bf(n,!0,a,null,d,o);break;case"together":Bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),er|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function ry(t,n,a){switch(n.tag){case 3:he(n,n.stateNode.containerInfo),ja(n,_n,t.memoizedState.cache),Ar();break;case 27:case 5:tt(n);break;case 4:he(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hg(t,n,a):(Ka(n),t=pa(t,n,a),t!==null?t.sibling:null);Ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(os(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Vg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),$(dn,dn.current),o)break;return null;case 22:return n.lanes=0,Og(t,n,a,n.pendingProps);case 24:ja(n,_n,t.memoizedState.cache)}return pa(t,n,a)}function kg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Ff(t,a)&&(n.flags&128)===0)return Sn=!1,ry(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,At&&(n.flags&1048576)!==0&&ym(n,go,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Nr(n.elementType),n.type=t,typeof t=="function")Vu(t)?(o=Or(t,o),n.tag=1,n=Fg(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=Dg(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=Lg(null,n,t,o,a);break e}}throw n=j(t)||t,Error(s(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Or(o,n.pendingProps),Fg(t,n,o,u,a);case 3:e:{if(he(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,af(t,n),bo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ja(n,_n,o),o!==d.cache&&Qu(n,[_n],a,!0),Eo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=zg(t,n,o,a);break e}else if(o!==u){u=xi(Error(s(424)),n),vo(u),n=zg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=bi(t.firstChild),Dn=n,At=!0,Xa=null,Mi=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ar(),o===u){n=pa(t,n,a);break e}Un(t,n,o,a)}n=n.child}return n;case 26:return Ql(t,n),t===null?(a=ev(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=pc(Ce.current).createElement(a),o[mn]=n,o[Nn]=t,On(o,a,t),gn(o),n.stateNode=o):n.memoizedState=ev(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&At&&(o=n.stateNode=Q0(n.type,n.pendingProps,Ce.current),Dn=n,Mi=!0,u=$t,rr(n.type)?(vd=u,$t=bi(o.firstChild)):$t=u),Un(t,n,n.pendingProps.children,a),Ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=$t)&&(o=Py(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Dn=n,$t=bi(o.firstChild),Mi=!1,u=!0):u=!1),u||Wa(n)),tt(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,dd(u,d)?o=null:y!==null&&dd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(t,n,KS,null,null,a),Xo._currentValue=u),Ql(t,n),Un(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=$t)&&(a=Iy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,$t=null,t=!0):t=!1),t||Wa(n)),null;case 13:return Hg(t,n,a);case 4:return he(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Lr(n,null,o,a):Un(t,n,o,a),n.child;case 11:return Dg(t,n,n.type,n.pendingProps,a);case 7:return Un(t,n,n.pendingProps,a),n.child;case 8:return Un(t,n,n.pendingProps.children,a),n.child;case 12:return Un(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ja(n,n.type,o.value),Un(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,wr(n),u=Ln(u),o=o(u),n.flags|=1,Un(t,n,o,a),n.child;case 14:return Lg(t,n,n.type,n.pendingProps,a);case 15:return Ug(t,n,n.type,n.pendingProps,a);case 19:return Vg(t,n,a);case 31:return ay(t,n,a);case 22:return Og(t,n,a,n.pendingProps);case 24:return wr(n),o=Ln(_n),t===null?(u=ef(),u===null&&(u=Qt,d=Ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},nf(n),ja(n,_n,u)):((t.lanes&a)!==0&&(af(t,n),bo(n,null,null,a),Eo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ja(n,_n,o)):(o=d.cache,ja(n,_n,o),o!==u.cache&&Qu(n,[_n],a,!0))),Un(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function zf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(g0())t.flags|=8192;else throw Dr=Il,tf}else t.flags&=-16777217}function Xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rv(n))if(g0())t.flags|=8192;else throw Dr=Il,tf}function $l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,xs|=n)}function No(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function sy(t,n,a){var o=n.pendingProps;switch(ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),fa(_n),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ss(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),en(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ma(n),d!==null?(en(n),Xg(n,d)):(en(n),zf(n,u,null,o,a))):d?d!==t.memoizedState?(ma(n),en(n),Xg(n,d)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ma(n),en(n),zf(n,u,t,o,a)),null;case 27:if(He(n),a=Ce.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ma(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=be.current,ss(n)?Em(n):(t=Q0(u,o,a),n.stateNode=t,ma(n))}return en(n),null;case 5:if(He(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ma(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(d=be.current,ss(n))Em(n);else{var y=pc(Ce.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[mn]=n,d[Nn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ma(n)}}return en(n),zf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ma(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ce.current,ss(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||H0(t.nodeValue,a)),t||Wa(n,!0)}else t=pc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ss(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[mn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ss(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),en(n),null);case 4:return Re(),t===null&&od(n.stateNode.containerInfo),en(n),null;case 10:return fa(n.type),en(n),null;case 19:if(ee(dn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)No(o,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Hl(t),d!==null){for(n.flags|=128,No(o,!1),t=d.updateQueue,n.updateQueue=t,$l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)_m(a,t),a=a.sibling;return $(dn,dn.current&1|2),At&&ca(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>ac&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=Hl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,$l(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return en(n),null}else 2*Ft()-o.renderingStartTime>ac&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=dn.current,$(dn,u?a&1|2:a&1),At&&ca(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return oi(n),lf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ee(Cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(_n),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function oy(t,n){switch(ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(_n),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ee(dn),null;case 4:return Re(),null;case 10:return fa(n.type),null;case 22:case 23:return oi(n),lf(),t!==null&&ee(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(_n),null;case 25:return null;default:return null}}function Wg(t,n){switch(ju(n),n.tag){case 3:fa(_n),Re();break;case 26:case 27:case 5:He(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:ee(dn);break;case 10:fa(n.type);break;case 22:case 23:oi(n),lf(),t!==null&&ee(Cr);break;case 24:fa(_n)}}function Do(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,le=R;try{le()}catch(Se){Ht(u,H,Se)}}}o=o.next}while(o!==d)}}catch(Se){Ht(n,n.return,Se)}}function jg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Im(n,a)}catch(o){Ht(t,t.return,o)}}}function qg(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function Lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function qi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function Yg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Hf(t,n,a){try{var o=t.stateNode;Cy(o,t.type,a,n),o[Nn]=n}catch(u){Ht(t,t.return,u)}}function Zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rr(t.type)||t.tag===4}function Gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=vi));else if(o!==4&&(o===27&&rr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Vf(t,n,a),t=t.sibling;t!==null;)Vf(t,n,a),t=t.sibling}function ec(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&rr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ec(t,n,a),t=t.sibling;t!==null;)ec(t,n,a),t=t.sibling}function Kg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,a),n[mn]=t,n[Nn]=a}catch(d){Ht(t,t.return,d)}}var ga=!1,yn=!1,kf=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,wn=null;function ly(t,n){if(t=t.containerInfo,ud=yc,t=cm(t),Pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,le=0,Se=0,Ee=t,ue=null;t:for(;;){for(var ge;Ee!==a||u!==0&&Ee.nodeType!==3||(R=y+u),Ee!==d||o!==0&&Ee.nodeType!==3||(H=y+o),Ee.nodeType===3&&(y+=Ee.nodeValue.length),(ge=Ee.firstChild)!==null;)ue=Ee,Ee=ge;for(;;){if(Ee===t)break t;if(ue===a&&++le===u&&(R=y),ue===d&&++Se===o&&(H=y),(ge=Ee.nextSibling)!==null)break;Ee=ue,ue=Ee.parentNode}Ee=ge}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:t,selectionRange:a},yc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ze=Or(a.type,u);t=o.getSnapshotBeforeUpdate(Ze,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Ht(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function Jg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),o&4&&Do(5,a);break;case 1:if(_a(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Ht(a,a.return,y)}else{var u=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ht(a,a.return,y)}}o&64&&jg(a),o&512&&Lo(a,a.return);break;case 3:if(_a(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Im(t,n)}catch(y){Ht(a,a.return,y)}}break;case 27:n===null&&o&4&&Kg(a);case 26:case 5:_a(t,a),n===null&&o&4&&Yg(a),o&512&&Lo(a,a.return);break;case 12:_a(t,a);break;case 31:_a(t,a),o&4&&t0(t,a);break;case 13:_a(t,a),o&4&&n0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=vy.bind(null,a),By(t,a))));break;case 22:if(o=a.memoizedState!==null||ga,!o){n=n!==null&&n.memoizedState!==null||yn,u=ga;var d=yn;ga=o,(yn=n)&&!d?xa(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),ga=u,yn=d}break;case 30:break;default:_a(t,a)}}function $g(t){var n=t.alternate;n!==null&&(t.alternate=null,$g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&za(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Zn=!1;function va(t,n,a){for(a=a.child;a!==null;)e0(t,n,a),a=a.sibling}function e0(t,n,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:yn||qi(a,n),va(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yn||qi(a,n);var o=nn,u=Zn;rr(a.type)&&(nn=a.stateNode,Zn=!1),va(t,n,a),Go(a.stateNode),nn=o,Zn=u;break;case 5:yn||qi(a,n);case 6:if(o=nn,u=Zn,nn=null,va(t,n,a),nn=o,Zn=u,nn!==null)if(Zn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){Ht(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){Ht(a,n,d)}break;case 18:nn!==null&&(Zn?(t=nn,j0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Rs(t)):j0(nn,a.stateNode));break;case 4:o=nn,u=Zn,nn=a.stateNode.containerInfo,Zn=!0,va(t,n,a),nn=o,Zn=u;break;case 0:case 11:case 14:case 15:Ja(2,a,n),yn||Ja(4,a,n),va(t,n,a);break;case 1:yn||(qi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qg(a,n,o)),va(t,n,a);break;case 21:va(t,n,a);break;case 22:yn=(o=yn)||a.memoizedState!==null,va(t,n,a),yn=o;break;default:va(t,n,a)}}function t0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rs(t)}catch(a){Ht(n,n.return,a)}}}function n0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rs(t)}catch(a){Ht(n,n.return,a)}}function cy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Qg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Qg),n;default:throw Error(s(435,t.tag))}}function tc(t,n){var a=cy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=_y.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(rr(R.type)){nn=R.stateNode,Zn=!1;break e}break;case 5:nn=R.stateNode,Zn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,Zn=!0;break e}R=R.return}if(nn===null)throw Error(s(160));e0(d,y,u),nn=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i0(n,t),n=n.sibling}var Ui=null;function i0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(Ja(3,t,t.return),Do(3,t),Ja(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(yn||a===null||qi(a,a.return)),o&64&&ga&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(Kn(n,t),Qn(t),o&512&&(yn||a===null||qi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Fa]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,a),d[mn]=t,gn(d),o=d;break e;case"link":var y=iv("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;case"meta":if(y=iv("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else av(u,t.type,t.stateNode);else t.stateNode=nv(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?av(u,t.type,t.stateNode):nv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(yn||a===null||qi(a,a.return)),a!==null&&o&4&&Hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(yn||a===null||qi(a,a.return)),t.flags&32){u=t.stateNode;try{Vn(u,"")}catch(Ze){Ht(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Hf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ze){Ht(t,t.return,Ze)}}break;case 3:if(vc=null,u=Ui,Ui=mc(n.containerInfo),Kn(n,t),Ui=u,Qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rs(n.containerInfo)}catch(Ze){Ht(t,t.return,Ze)}kf&&(kf=!1,a0(t));break;case 4:o=Ui,Ui=mc(t.stateNode.containerInfo),Kn(n,t),Qn(t),Ui=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,le=ga,Se=yn;if(ga=le||u,yn=Se||H,Kn(n,t),yn=Se,ga=le,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ga||yn||Pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var Ee=H.memoizedProps.style,ue=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ze){Ht(H,H.return,Ze)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ze){Ht(H,H.return,Ze)}}}else if(n.tag===18){if(a===null){H=n;try{var ge=H.stateNode;u?q0(ge,!0):q0(H.stateNode,!1)}catch(Ze){Ht(H,H.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,tc(t,a))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Zg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Gf(t);ec(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Vn(y,""),a.flags&=-33);var R=Gf(t);ec(t,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,le=Gf(t);Vf(t,le,H);break;default:throw Error(s(161))}}catch(Se){Ht(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function a0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;a0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jg(t,n.alternate,n),n=n.sibling}function Pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ja(4,n,n.return),Pr(n);break;case 1:qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qg(n,n.return,a),Pr(n);break;case 27:Go(n.stateNode);case 26:case 5:qi(n,n.return),Pr(n);break;case 22:n.memoizedState===null&&Pr(n);break;case 30:Pr(n);break;default:Pr(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:xa(u,d,a),Do(4,d);break;case 1:if(xa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Ht(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Pm(H[u],R)}catch(le){Ht(o,o.return,le)}}a&&y&64&&jg(d),Lo(d,d.return);break;case 27:Kg(d);case 26:case 5:xa(u,d,a),a&&o===null&&y&4&&Yg(d),Lo(d,d.return);break;case 12:xa(u,d,a);break;case 31:xa(u,d,a),a&&y&4&&t0(u,d);break;case 13:xa(u,d,a),a&&y&4&&n0(u,d);break;case 22:d.memoizedState===null&&xa(u,d,a),Lo(d,d.return);break;case 30:break;default:xa(u,d,a)}n=n.sibling}}function Xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&_o(a))}function Wf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&_o(t))}function Oi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)r0(t,n,a,o),n=n.sibling}function r0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,a,o),u&2048&&Do(9,n);break;case 1:Oi(t,n,a,o);break;case 3:Oi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&_o(t)));break;case 12:if(u&2048){Oi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Ht(n,n.return,H)}}else Oi(t,n,a,o);break;case 31:Oi(t,n,a,o);break;case 13:Oi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Oi(t,n,a,o):Uo(t,n):d._visibility&2?Oi(t,n,a,o):(d._visibility|=2,gs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(y,n);break;case 24:Oi(t,n,a,o),u&2048&&Wf(n.alternate,n);break;default:Oi(t,n,a,o)}}function gs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,H=o,le=y.flags;switch(y.tag){case 0:case 11:case 15:gs(d,y,R,H,u),Do(8,y);break;case 23:break;case 22:var Se=y.stateNode;y.memoizedState!==null?Se._visibility&2?gs(d,y,R,H,u):Uo(d,y):(Se._visibility|=2,gs(d,y,R,H,u)),u&&le&2048&&Xf(y.alternate,y);break;case 24:gs(d,y,R,H,u),u&&le&2048&&Wf(y.alternate,y);break;default:gs(d,y,R,H,u)}n=n.sibling}}function Uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&Xf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Wf(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Oo=8192;function vs(t,n,a){if(t.subtreeFlags&Oo)for(t=t.child;t!==null;)s0(t,n,a),t=t.sibling}function s0(t,n,a){switch(t.tag){case 26:vs(t,n,a),t.flags&Oo&&t.memoizedState!==null&&Zy(a,Ui,t.memoizedState,t.memoizedProps);break;case 5:vs(t,n,a);break;case 3:case 4:var o=Ui;Ui=mc(t.stateNode.containerInfo),vs(t,n,a),Ui=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,vs(t,n,a),Oo=o):vs(t,n,a));break;default:vs(t,n,a)}}function o0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,c0(o,t)}o0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)l0(t),t=t.sibling}function l0(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,nc(t)):Po(t);break;default:Po(t)}}function nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,c0(o,t)}o0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,nc(n));break;default:nc(n)}t=t.sibling}}function c0(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,d=o.return;if($g(o),o===a){wn=null;break e}if(u!==null){u.return=d,wn=u;break e}wn=d}}}var uy={getCacheForType:function(t){var n=Ln(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Ln(_n).controller.signal}},fy=typeof WeakMap=="function"?WeakMap:Map,It=0,Qt=null,xt=null,Et=0,zt=0,li=null,$a=!1,_s=!1,jf=!1,Sa=0,cn=0,er=0,Ir=0,qf=0,ci=0,xs=0,Io=null,Jn=null,Yf=!1,ic=0,u0=0,ac=1/0,rc=null,tr=null,bn=0,nr=null,Ss=null,ya=0,Zf=0,Kf=null,f0=null,Bo=0,Qf=null;function ui(){return(It&2)!==0&&Et!==0?Et&-Et:F.T!==null?id():ao()}function d0(){if(ci===0)if((Et&536870912)===0||At){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ci=t}else ci=536870912;return t=si.current,t!==null&&(t.flags|=32),ci}function $n(t,n,a){(t===Qt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(ys(t,0),ir(t,Et,ci,!1)),qe(t,a),((It&2)===0||t!==Qt)&&(t===Qt&&((It&2)===0&&(Ir|=a),cn===4&&ir(t,Et,ci,!1)),Yi(t))}function h0(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?py(t,n):$f(t,n,!0),d=o;do{if(u===0){_s&&!o&&ir(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!dy(a)){u=$f(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Io;var H=R.current.memoizedState.isDehydrated;if(H&&(ys(R,y).flags|=256),y=$f(R,y,!1),y!==2){if(jf&&!H){R.errorRecoveryDisabledLanes|=d,Ir|=d,u=4;break e}d=Jn,Jn=u,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){ys(t,0),ir(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ir(o,n,ci,!$a);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ic+300-Ft(),10<u)){if(ir(o,n,ci,!$a),ye(o,0,!0)!==0)break e;ya=n,o.timeoutHandle=X0(p0.bind(null,o,a,Jn,rc,Yf,n,ci,Ir,xs,$a,d,"Throttled",-0,0),u);break e}p0(o,a,Jn,rc,Yf,n,ci,Ir,xs,$a,d,null,-0,0)}}break}while(!0);Yi(t)}function p0(t,n,a,o,u,d,y,R,H,le,Se,Ee,ue,ge){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},s0(n,d,Ee);var Ze=(d&62914560)===d?ic-Ft():(d&4194048)===d?u0-Ft():0;if(Ze=Ky(Ee,Ze),Ze!==null){ya=d,t.cancelPendingCommit=Ze(M0.bind(null,t,n,d,a,o,u,y,R,H,Se,Ee,null,ue,ge)),ir(t,d,y,!le);return}}M0(t,n,d,a,o,u,y,R,H)}function dy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ai(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ir(t,n,a,o){n&=~qf,n&=~Ir,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Xe(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Ct(t,a,n)}function sc(){return(It&6)===0?(Fo(0),!1):!0}function Jf(){if(xt!==null){if(zt===0)var t=xt.return;else t=xt,ua=Rr=null,pf(t),fs=null,So=0,t=xt;for(;t!==null;)Wg(t.alternate,t),t=t.return;xt=null}}function ys(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ly(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ya=0,Jf(),Qt=t,xt=a=la(t.current,null),Et=n,zt=0,li=null,$a=!1,_s=Ue(t,n),jf=!1,xs=ci=qf=Ir=er=cn=0,Jn=Io=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),d=1<<u;n|=t[u],o&=~d}return Sa=n,Rl(),a}function m0(t,n){dt=null,F.H=wo,n===us||n===Pl?(n=Dm(),zt=3):n===tf?(n=Dm(),zt=4):zt=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,xt===null&&(cn=1,Zl(t,xi(n,t.current)))}function g0(){var t=si.current;return t===null?!0:(Et&4194048)===Et?Ei===null:(Et&62914560)===Et||(Et&536870912)!==0?t===Ei:!1}function v0(){var t=F.H;return F.H=wo,t===null?wo:t}function _0(){var t=F.A;return F.A=uy,t}function oc(){cn=4,$a||(Et&4194048)!==Et&&si.current!==null||(_s=!0),(er&134217727)===0&&(Ir&134217727)===0||Qt===null||ir(Qt,Et,ci,!1)}function $f(t,n,a){var o=It;It|=2;var u=v0(),d=_0();(Qt!==t||Et!==n)&&(rc=null,ys(t,n)),n=!1;var y=cn;e:do try{if(zt!==0&&xt!==null){var R=xt,H=li;switch(zt){case 8:Jf(),y=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var le=zt;if(zt=0,li=null,Ms(t,R,H,le),a&&_s){y=0;break e}break;default:le=zt,zt=0,li=null,Ms(t,R,H,le)}}hy(),y=cn;break}catch(Se){m0(t,Se)}while(!0);return n&&t.shellSuspendCounter++,ua=Rr=null,It=o,F.H=u,F.A=d,xt===null&&(Qt=null,Et=0,Rl()),y}function hy(){for(;xt!==null;)x0(xt)}function py(t,n){var a=It;It|=2;var o=v0(),u=_0();Qt!==t||Et!==n?(rc=null,ac=Ft()+500,ys(t,n)):_s=Ue(t,n);e:do try{if(zt!==0&&xt!==null){n=xt;var d=li;t:switch(zt){case 1:zt=0,li=null,Ms(t,n,d,1);break;case 2:case 9:if(Cm(d)){zt=0,li=null,S0(n);break}n=function(){zt!==2&&zt!==9||Qt!==t||(zt=7),Yi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Cm(d)?(zt=0,li=null,S0(n)):(zt=0,li=null,Ms(t,n,d,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var R=xt;if(y?rv(y):R.stateNode.complete){zt=0,li=null;var H=R.sibling;if(H!==null)xt=H;else{var le=R.return;le!==null?(xt=le,lc(le)):xt=null}break t}}zt=0,li=null,Ms(t,n,d,5);break;case 6:zt=0,li=null,Ms(t,n,d,6);break;case 8:Jf(),cn=6;break e;default:throw Error(s(462))}}my();break}catch(Se){m0(t,Se)}while(!0);return ua=Rr=null,F.H=o,F.A=u,It=a,xt!==null?0:(Qt=null,Et=0,Rl(),cn)}function my(){for(;xt!==null&&!on();)x0(xt)}function x0(t){var n=kg(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?lc(t):xt=n}function S0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Bg(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=Bg(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:pf(n);default:Wg(a,n),n=xt=_m(n,Sa),n=kg(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?lc(t):xt=n}function Ms(t,n,a,o){ua=Rr=null,pf(n),fs=null,So=0;var u=n.return;try{if(iy(t,u,n,a,Et)){cn=1,Zl(t,xi(a,t.current)),xt=null;return}}catch(d){if(u!==null)throw xt=u,d;cn=1,Zl(t,xi(a,t.current)),xt=null;return}n.flags&32768?(At||o===1?t=!0:_s||(Et&536870912)!==0?t=!1:($a=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),y0(n,t)):lc(n)}function lc(t){var n=t;do{if((n.flags&32768)!==0){y0(n,$a);return}t=n.return;var a=sy(n.alternate,n,Sa);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);cn===0&&(cn=5)}function y0(t,n){do{var a=oy(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);cn=6,xt=null}function M0(t,n,a,o,u,d,y,R,H){t.cancelPendingCommit=null;do cc();while(bn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Hu,Vt(t,a,d,y,R,H),t===Qt&&(xt=Qt=null,Et=0),Ss=n,nr=t,ya=a,Zf=d,Kf=u,f0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xy(J,function(){return R0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,y=It,It|=4;try{ly(t,n,a)}finally{It=y,G.p=u,F.T=o}}bn=1,E0(),b0(),T0()}}function E0(){if(bn===1){bn=0;var t=nr,n=Ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=It;It|=4;try{i0(n,t);var d=fd,y=cm(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&lm(R.ownerDocument.documentElement,R)){if(H!==null&&Pu(R)){var le=H.start,Se=H.end;if(Se===void 0&&(Se=le),"selectionStart"in R)R.selectionStart=le,R.selectionEnd=Math.min(Se,R.value.length);else{var Ee=R.ownerDocument||document,ue=Ee&&Ee.defaultView||window;if(ue.getSelection){var ge=ue.getSelection(),Ze=R.textContent.length,nt=Math.min(H.start,Ze),jt=H.end===void 0?nt:Math.min(H.end,Ze);!ge.extend&&nt>jt&&(y=jt,jt=nt,nt=y);var Q=om(R,nt),W=om(R,jt);if(Q&&W&&(ge.rangeCount!==1||ge.anchorNode!==Q.node||ge.anchorOffset!==Q.offset||ge.focusNode!==W.node||ge.focusOffset!==W.offset)){var oe=Ee.createRange();oe.setStart(Q.node,Q.offset),ge.removeAllRanges(),nt>jt?(ge.addRange(oe),ge.extend(W.node,W.offset)):(oe.setEnd(W.node,W.offset),ge.addRange(oe))}}}}for(Ee=[],ge=R;ge=ge.parentNode;)ge.nodeType===1&&Ee.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Me=Ee[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}yc=!!ud,fd=ud=null}finally{It=u,G.p=o,F.T=a}}t.current=n,bn=2}}function b0(){if(bn===2){bn=0;var t=nr,n=Ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=It;It|=4;try{Jg(t,n.alternate,n)}finally{It=u,G.p=o,F.T=a}}bn=3}}function T0(){if(bn===4||bn===3){bn=0,Y();var t=nr,n=Ss,a=ya,o=f0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Ss=nr=null,A0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(tr=null),io(a),n=n.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(_e,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{F.T=n,G.p=u}}(ya&3)!==0&&cc(),Yi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Qf?Bo++:(Bo=0,Qf=t):Bo=0,Fo(0)}}function A0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,_o(n)))}function cc(){return E0(),b0(),T0(),R0()}function R0(){if(bn!==5)return!1;var t=nr,n=Zf;Zf=0;var a=io(ya),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Kf,Kf=null;var d=nr,y=ya;if(bn=0,Ss=nr=null,ya=0,(It&6)!==0)throw Error(s(331));var R=It;if(It|=4,l0(d.current),r0(d,d.current,y,a),It=R,Fo(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(_e,d)}catch{}return!0}finally{G.p=u,F.T=o,A0(t,n)}}function w0(t,n,a){n=xi(a,n),n=Cf(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(qe(t,2),Yi(t))}function Ht(t,n,a){if(t.tag===3)w0(t,t,a);else for(;n!==null;){if(n.tag===3){w0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(tr===null||!tr.has(o))){t=xi(a,t),a=Cg(2),o=Za(n,a,2),o!==null&&(Ng(a,o,n,t),qe(o,2),Yi(o));break}}n=n.return}}function ed(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new fy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(jf=!0,u.add(a),t=gy.bind(null,t,n,a),n.then(t,t))}function gy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(Et&a)===a&&(cn===4||cn===3&&(Et&62914560)===Et&&300>Ft()-ic?(It&2)===0&&ys(t,0):qf|=a,xs===Et&&(xs=0)),Yi(t)}function C0(t,n){n===0&&(n=Te()),t=br(t,n),t!==null&&(qe(t,n),Yi(t))}function vy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),C0(t,a)}function _y(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),C0(t,a)}function xy(t,n){return Rn(t,n)}var uc=null,Es=null,td=!1,fc=!1,nd=!1,ar=0;function Yi(t){t!==Es&&t.next===null&&(Es===null?uc=Es=t:Es=Es.next=t),fc=!0,td||(td=!0,yy())}function Fo(t,n){if(!nd&&fc){nd=!0;do for(var a=!1,o=uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Xe(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,U0(o,d))}else d=Et,d=ye(o,o===Qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ue(o,d)||(a=!0,U0(o,d));o=o.next}while(a);nd=!1}}function Sy(){N0()}function N0(){fc=td=!1;var t=0;ar!==0&&Dy()&&(t=ar);for(var n=Ft(),a=null,o=uc;o!==null;){var u=o.next,d=D0(o,n);d===0?(o.next=null,a===null?uc=u:a.next=u,u===null&&(Es=a)):(a=o,(t!==0||(d&3)!==0)&&(fc=!0)),o=u}bn!==0&&bn!==5||Fo(t),ar!==0&&(ar=0)}function D0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Xe(d),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Ge(R,n)):H<=n&&(t.expiredLanes|=R),d&=~R}if(n=Qt,a=Et,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Zt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Zt(o),io(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=ve;break;default:a=J}return o=L0.bind(null,t),a=Rn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Zt(o),t.callbackPriority=2,t.callbackNode=null,2}function L0(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(cc()&&t.callbackNode!==a)return null;var o=Et;return o=ye(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(h0(t,o,n),D0(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?L0.bind(null,t):null)}function U0(t,n){if(cc())return null;h0(t,n,!0)}function yy(){Uy(function(){(It&6)!==0?Rn(B,Sy):N0()})}function id(){if(ar===0){var t=ls;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),ar=t}return ar}function O0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Di(""+t)}function P0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function My(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=O0((u[Nn]||null).action),y=o.submitter;y&&(n=(n=y[Nn]||null)?O0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new El("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ar!==0){var H=y?P0(u,y):new FormData(u);Ef(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=y?P0(u,y):new FormData(u),Ef(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var ad=0;ad<zu.length;ad++){var rd=zu[ad],Ey=rd.toLowerCase(),by=rd[0].toUpperCase()+rd.slice(1);Li(Ey,"on"+by)}Li(dm,"onAnimationEnd"),Li(hm,"onAnimationIteration"),Li(pm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(HS,"onTransitionRun"),Li(GS,"onTransitionStart"),Li(VS,"onTransitionCancel"),Li(mm,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function I0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,le=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(Se){Al(Se)}u.currentTarget=null,d=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,le=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(Se){Al(Se)}u.currentTarget=null,d=H}}}}function St(t,n){var a=n[_r];a===void 0&&(a=n[_r]=new Set);var o=t+"__bubble";a.has(o)||(B0(n,t,2,!1),a.add(o))}function sd(t,n,a){var o=0;n&&(o|=4),B0(a,t,o,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function od(t){if(!t[dc]){t[dc]=!0,xl.forEach(function(a){a!=="selectionchange"&&(Ty.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[dc]||(n[dc]=!0,sd("selectionchange",!1,n))}}function B0(t,n,a,o){switch(dv(n)){case 2:var u=$y;break;case 8:u=eM;break;default:u=Md}a=u.bind(null,n,a,t),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ld(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=ra(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Vp(function(){var le=d,Se=bu(a),Ee=[];e:{var ue=gm.get(t);if(ue!==void 0){var ge=El,Ze=t;switch(t){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":ge=_S;break;case"focusin":Ze="focus",ge=Nu;break;case"focusout":Ze="blur",ge=Nu;break;case"beforeblur":case"afterblur":ge=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=yS;break;case dm:case hm:case pm:ge=cS;break;case mm:ge=ES;break;case"scroll":case"scrollend":ge=aS;break;case"wheel":ge=TS;break;case"copy":case"cut":case"paste":ge=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=qp;break;case"toggle":case"beforetoggle":ge=RS}var nt=(n&4)!==0,jt=!nt&&(t==="scroll"||t==="scrollend"),Q=nt?ue!==null?ue+"Capture":null:ue;nt=[];for(var W=le,oe;W!==null;){var Me=W;if(oe=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||oe===null||Q===null||(Me=so(W,Q),Me!=null&&nt.push(Ho(W,Me,oe))),jt)break;W=W.return}0<nt.length&&(ue=new ge(ue,Ze,null,a,Se),Ee.push({event:ue,listeners:nt}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",ue&&a!==Eu&&(Ze=a.relatedTarget||a.fromElement)&&(ra(Ze)||Ze[qn]))break e;if((ge||ue)&&(ue=Se.window===Se?Se:(ue=Se.ownerDocument)?ue.defaultView||ue.parentWindow:window,ge?(Ze=a.relatedTarget||a.toElement,ge=le,Ze=Ze?ra(Ze):null,Ze!==null&&(jt=c(Ze),nt=Ze.tag,Ze!==jt||nt!==5&&nt!==27&&nt!==6)&&(Ze=null)):(ge=null,Ze=le),ge!==Ze)){if(nt=Wp,Me="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(nt=qp,Me="onPointerLeave",Q="onPointerEnter",W="pointer"),jt=ge==null?ue:Sr(ge),oe=Ze==null?ue:Sr(Ze),ue=new nt(Me,W+"leave",ge,a,Se),ue.target=jt,ue.relatedTarget=oe,Me=null,ra(Se)===le&&(nt=new nt(Q,W+"enter",Ze,a,Se),nt.target=oe,nt.relatedTarget=jt,Me=nt),jt=Me,ge&&Ze)t:{for(nt=Ay,Q=ge,W=Ze,oe=0,Me=Q;Me;Me=nt(Me))oe++;Me=0;for(var et=W;et;et=nt(et))Me++;for(;0<oe-Me;)Q=nt(Q),oe--;for(;0<Me-oe;)W=nt(W),Me--;for(;oe--;){if(Q===W||W!==null&&Q===W.alternate){nt=Q;break t}Q=nt(Q),W=nt(W)}nt=null}else nt=null;ge!==null&&F0(Ee,ue,ge,nt,!1),Ze!==null&&jt!==null&&F0(Ee,jt,Ze,nt,!0)}}e:{if(ue=le?Sr(le):window,ge=ue.nodeName&&ue.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ue.type==="file")var Lt=tm;else if($p(ue))if(nm)Lt=BS;else{Lt=PS;var Ke=OS}else ge=ue.nodeName,!ge||ge.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?le&&gi(le.elementType)&&(Lt=tm):Lt=IS;if(Lt&&(Lt=Lt(t,le))){em(Ee,Lt,a,Se);break e}Ke&&Ke(t,ue,le),t==="focusout"&&le&&ue.type==="number"&&le.memoizedProps.value!=null&&En(ue,"number",ue.value)}switch(Ke=le?Sr(le):window,t){case"focusin":($p(Ke)||Ke.contentEditable==="true")&&(es=Ke,Iu=le,mo=null);break;case"focusout":mo=Iu=es=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,um(Ee,a,Se);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":um(Ee,a,Se)}var ht;if(Lu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else $r?Qp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Yp&&a.locale!=="ko"&&($r||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&$r&&(ht=kp()):(Va=Se,Ru="value"in Va?Va.value:Va.textContent,$r=!0)),Ke=hc(le,bt),0<Ke.length&&(bt=new jp(bt,t,null,a,Se),Ee.push({event:bt,listeners:Ke}),ht?bt.data=ht:(ht=Jp(a),ht!==null&&(bt.data=ht)))),(ht=CS?NS(t,a):DS(t,a))&&(bt=hc(le,"onBeforeInput"),0<bt.length&&(Ke=new jp("onBeforeInput","beforeinput",null,a,Se),Ee.push({event:Ke,listeners:bt}),Ke.data=ht)),My(Ee,t,le,a,Se)}I0(Ee,n)})}function Ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function hc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=so(t,a),u!=null&&o.unshift(Ho(t,u,d)),u=so(t,n),u!=null&&o.push(Ho(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Ay(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,le=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||le===null||(H=le,u?(le=so(a,d),le!=null&&y.unshift(Ho(a,le,H))):u||(le=so(a,d),le!=null&&y.push(Ho(a,le,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Ry=/\r\n?/g,wy=/\u0000|\uFFFD/g;function z0(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(wy,"")}function H0(t,n){return n=z0(n),z0(t)===n}function Wt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(t,""+o);break;case"className":Ie(t,"class",o);break;case"tabIndex":Ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,o);break;case"style":tn(t,o,d);break;case"data":if(n!=="object"){Ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Di(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Di(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=vi);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Di(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),We(t,"popover",o);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kt.get(a)||a,We(t,a,o))}}function cd(t,n,a,o,u,d){switch(a){case"style":tn(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&Vn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ro.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Nn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):We(t,a,o)}}}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,d,y,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=d=y=u=null,H=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":y=Se;break;case"checked":H=Se;break;case"defaultChecked":le=Se;break;case"value":d=Se;break;case"defaultValue":R=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:Wt(t,n,o,Se,a,null)}}je(t,d,R,H,le,y,u,!1);return;case"select":St("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Wt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?mt(t,!!o,n,!1):a!=null&&mt(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Wt(t,n,y,R,a,null)}ii(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Wt(t,n,H,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<zo.length;o++)St(zo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,le,o,a,null)}return;default:if(gi(n)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&cd(t,n,Se,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Wt(t,n,R,o,a,null))}function Cy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,H=null,le=null,Se=null;for(ge in a){var Ee=a[ge];if(a.hasOwnProperty(ge)&&Ee!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":H=Ee;default:o.hasOwnProperty(ge)||Wt(t,n,ge,null,o,Ee)}}for(var ue in o){var ge=o[ue];if(Ee=a[ue],o.hasOwnProperty(ue)&&(ge!=null||Ee!=null))switch(ue){case"type":d=ge;break;case"name":u=ge;break;case"checked":le=ge;break;case"defaultChecked":Se=ge;break;case"value":y=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:ge!==Ee&&Wt(t,n,ue,ge,o,Ee)}}vn(t,y,R,H,le,Se,d,u);return;case"select":ge=y=R=ue=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ge=H;default:o.hasOwnProperty(d)||Wt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ue=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==H&&Wt(t,n,u,d,o,H)}n=R,a=y,o=ge,ue!=null?mt(t,!!a,ue,!1):!!o!=!!a&&(n!=null?mt(t,!!a,n,!0):mt(t,!!a,a?[]:"",!1));return;case"textarea":ge=ue=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ue=u;break;case"defaultValue":ge=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Wt(t,n,y,u,o,d)}Gn(t,ue,ge);return;case"option":for(var Ze in a)ue=a[Ze],a.hasOwnProperty(Ze)&&ue!=null&&!o.hasOwnProperty(Ze)&&(Ze==="selected"?t.selected=!1:Wt(t,n,Ze,null,o,ue));for(H in o)ue=o[H],ge=a[H],o.hasOwnProperty(H)&&ue!==ge&&(ue!=null||ge!=null)&&(H==="selected"?t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol":Wt(t,n,H,ue,o,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ue=a[nt],a.hasOwnProperty(nt)&&ue!=null&&!o.hasOwnProperty(nt)&&Wt(t,n,nt,null,o,ue);for(le in o)if(ue=o[le],ge=a[le],o.hasOwnProperty(le)&&ue!==ge&&(ue!=null||ge!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Wt(t,n,le,ue,o,ge)}return;default:if(gi(n)){for(var jt in a)ue=a[jt],a.hasOwnProperty(jt)&&ue!==void 0&&!o.hasOwnProperty(jt)&&cd(t,n,jt,void 0,o,ue);for(Se in o)ue=o[Se],ge=a[Se],!o.hasOwnProperty(Se)||ue===ge||ue===void 0&&ge===void 0||cd(t,n,Se,ue,o,ge);return}}for(var Q in a)ue=a[Q],a.hasOwnProperty(Q)&&ue!=null&&!o.hasOwnProperty(Q)&&Wt(t,n,Q,null,o,ue);for(Ee in o)ue=o[Ee],ge=a[Ee],!o.hasOwnProperty(Ee)||ue===ge||ue==null&&ge==null||Wt(t,n,Ee,ue,o,ge)}function G0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&G0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],le=H.startTime;if(le>R)break;var Se=H.transferSize,Ee=H.initiatorType;Se&&G0(Ee)&&(H=H.responseEnd,y+=Se*(H<R?1:(R-le)/(H-le)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ud=null,fd=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function V0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function Dy(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(t){return W0.resolve(null).then(t).catch(Oy)}:X0;function Oy(t){setTimeout(function(){throw t})}function rr(t){return t==="head"}function j0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Rs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Go(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[Fa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Go(t.ownerDocument.body);a=u}while(a);Rs(n)}function q0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),za(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Py(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Fa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function Iy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function Y0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function md(t){return t.data==="$?"||t.data==="$~"}function gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function By(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vd=null;function Z0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function K0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Q0(t,n,a){switch(n=pc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);za(t)}var Ti=new Map,J0=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=G.d;G.d={f:Fy,r:zy,D:Hy,C:Gy,L:Vy,m:ky,X:Wy,S:Xy,M:jy};function Fy(){var t=Ma.f(),n=sc();return t||n}function zy(t){var n=sa(t);n!==null&&n.tag===5&&n.type==="form"?mg(n):Ma.r(t)}var bs=typeof document>"u"?null:document;function $0(t,n,a){var o=bs;if(o&&typeof n=="string"&&n){var u=pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),J0.has(u)||(J0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function Hy(t){Ma.D(t),$0("dns-prefetch",t,null)}function Gy(t,n){Ma.C(t,n),$0("preconnect",t,n)}function Vy(t,n,a){Ma.L(t,n,a);var o=bs;if(o&&t&&n){var u='link[rel="preload"][as="'+pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pt(a.imageSizes)+'"]')):u+='[href="'+pt(t)+'"]';var d=u;switch(n){case"style":d=Ts(t);break;case"script":d=As(t)}Ti.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(ko(d))||(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function ky(t,n){Ma.m(t,n);var a=bs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pt(o)+'"][href="'+pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=As(t)}if(!Ti.has(d)&&(t=_({rel:"modulepreload",href:t},n),Ti.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(d)))return}o=a.createElement("link"),On(o,"link",t),gn(o),a.head.appendChild(o)}}}function Xy(t,n,a){Ma.S(t,n,a);var o=bs;if(o&&t){var u=Ha(o).hoistableStyles,d=Ts(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Vo(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(d))&&_d(t,a);var H=y=o.createElement("link");gn(H),On(H,"link",t),H._p=new Promise(function(le,Se){H.onload=le,H.onerror=Se}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,gc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function Wy(t,n){Ma.X(t,n);var a=bs;if(a&&t){var o=Ha(a).hoistableScripts,u=As(t),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(t=_({src:t,async:!0},n),(n=Ti.get(u))&&xd(t,n),d=a.createElement("script"),gn(d),On(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function jy(t,n){Ma.M(t,n);var a=bs;if(a&&t){var o=Ha(a).hoistableScripts,u=As(t),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&xd(t,n),d=a.createElement("script"),gn(d),On(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ev(t,n,a,o){var u=(u=Ce.current)?mc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ts(a.href),a=Ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ts(a.href);var d=Ha(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Vo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,a),d||qy(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=As(a),a=Ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ts(t){return'href="'+pt(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function tv(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function qy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",a),gn(n),t.head.appendChild(n))}function As(t){return'[src="'+pt(t)+'"]'}function ko(t){return"script[async]"+t}function nv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pt(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",u),gc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ts(a.href);var d=t.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=tv(a),(u=Ti.get(u))&&_d(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var y=d;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),On(d,"link",o),n.state.loading|=4,gc(d,a.precedence,t),n.instance=d;case"script":return d=As(a.src),(u=t.querySelector(ko(d)))?(n.instance=u,gn(u),u):(o=a,(u=Ti.get(d))&&(o=_({},a),xd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),On(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,t));return n.instance}function gc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var vc=null;function iv(t,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Fa]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function av(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Yy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ts(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,gn(d);return}d=n.ownerDocument||n,o=tv(o),(u=Ti.get(u))&&_d(o,u),d=d.createElement("link"),gn(d);var y=d;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),On(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_c.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sd=0;function Ky(t,n){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Sd===0&&(Sd=62500*Ny());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Sd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function Sc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,n.forEach(Qy,t),xc=null,_c.call(t))}function Qy(t,n){if(!(n.state.loading&4)){var a=xc.get(t);if(a)var o=a.get(null);else{a=new Map,xc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Xo={$$typeof:z,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Jy(t,n,a,o,u,d,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function sv(t,n,a,o,u,d,y,R,H,le,Se,Ee){return t=new Jy(t,n,a,y,H,le,Se,Ee,R),n=1,d===!0&&(n|=24),d=ri(3,null,null,n),t.current=d,d.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},nf(d),t}function ov(t){return t?(t=is,t):is}function lv(t,n,a,o,u,d){u=ov(u),o.context===null?o.context=u:o.pendingContext=u,o=Ya(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Za(t,o,n),a!==null&&($n(a,t,n),Mo(a,t,n))}function cv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function yd(t,n){cv(t,n),(t=t.alternate)&&cv(t,n)}function uv(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&$n(n,t,67108864),yd(t,67108864)}}function fv(t){if(t.tag===13||t.tag===31){var n=ui();n=no(n);var a=br(t,n);a!==null&&$n(a,t,n),yd(t,n)}}var yc=!0;function $y(t,n,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=2,Md(t,n,a,o)}finally{G.p=d,F.T=u}}function eM(t,n,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=8,Md(t,n,a,o)}finally{G.p=d,F.T=u}}function Md(t,n,a,o){if(yc){var u=Ed(o);if(u===null)ld(t,n,o,Mc,a),hv(t,o);else if(nM(u,t,n,a,o))o.stopPropagation();else if(hv(t,o),n&4&&-1<tM.indexOf(t)){for(;u!==null;){var d=sa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Le(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Xe(y);R.entanglements[1]|=H,y&=~H}Yi(d),(It&6)===0&&(ac=Ft()+500,Fo(0))}}break;case 31:case 13:R=br(d,2),R!==null&&$n(R,d,2),sc(),yd(d,2)}if(d=Ed(o),d===null&&ld(t,n,o,Mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ld(t,n,o,null,a)}}function Ed(t){return t=bu(t),bd(t)}var Mc=null;function bd(t){if(Mc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Mc=t,null}function dv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case B:return 2;case E:return 8;case J:case ce:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Td=!1,sr=null,or=null,lr=null,Wo=new Map,jo=new Map,cr=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(t,n){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function qo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=sa(n),n!==null&&uv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function nM(t,n,a,o,u){switch(n){case"focusin":return sr=qo(sr,t,n,a,o,u),!0;case"dragenter":return or=qo(or,t,n,a,o,u),!0;case"mouseover":return lr=qo(lr,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Wo.set(d,qo(Wo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,jo.set(d,qo(jo.get(d)||null,t,n,a,o,u)),!0}return!1}function pv(t){var n=ra(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Kr(t.priority,function(){fv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Kr(t.priority,function(){fv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Eu=o,a.target.dispatchEvent(o),Eu=null}else return n=sa(a),n!==null&&uv(n),t.blockedOn=a,!1;n.shift()}return!0}function mv(t,n,a){Ec(t)&&a.delete(n)}function iM(){Td=!1,sr!==null&&Ec(sr)&&(sr=null),or!==null&&Ec(or)&&(or=null),lr!==null&&Ec(lr)&&(lr=null),Wo.forEach(mv),jo.forEach(mv)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Td||(Td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,iM)))}var Tc=null;function gv(t){Tc!==t&&(Tc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(bd(o||a)===null)continue;break}var d=sa(a);d!==null&&(t.splice(n,3),n-=3,Ef(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Rs(t){function n(H){return bc(H,t)}sr!==null&&bc(sr,t),or!==null&&bc(or,t),lr!==null&&bc(lr,t),Wo.forEach(n),jo.forEach(n);for(var a=0;a<cr.length;a++){var o=cr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)pv(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[Nn]||null;if(typeof d=="function")y||gv(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Nn]||null)R=y.formAction;else if(bd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),gv(a)}}}function vv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ad(t){this._internalRoot=t}Ac.prototype.render=Ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ui();lv(a,o,t,n,null,null)},Ac.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;lv(t.current,2,null,t,null,null),sc(),n[qn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=ao();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&pv(t)}};var _v=e.version;if(_v!=="19.2.3")throw Error(s(527,_v,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var aM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{_e=Rc.inject(aM),xe=Rc}catch{}}return Zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Tg,d=Ag,y=Rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=sv(t,1,!1,null,null,a,o,null,u,d,y,vv),t[qn]=n.current,od(t),new Ad(n)},Zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Tg,y=Ag,R=Rg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=sv(t,1,!0,n,a??null,o,u,H,d,y,R,vv),n.context=ov(null),a=n.current,o=ui(),o=no(o),u=Ya(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,qe(n,a),Yi(n),t[qn]=n.current,od(t),new Ac(n)},Zo.version="19.2.3",Zo}var wv;function pM(){if(wv)return Cd.exports;wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=hM(),Cd.exports}var mM=pM();var pp=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,V_=/^[\\/]{2}/;function gM(r,e){return e+r.replace(/\\/g,"/")}var Cv="popstate";function Nv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function vM(r={}){function e(s,l){let c=l.state?.masked,{pathname:f,search:p,hash:m}=c||s.location;return _h("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:js(l)}return xM(e,i,null,r)}function an(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function na(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _M(){return Math.random().toString(36).substring(2,10)}function Dv(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function _h(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ks(e):e,state:i,key:e&&e.key||s||_M(),mask:l}}function js({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Ks(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function xM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function _(){p="POP";let S=g(),x=S==null?null:S-h;h=S,m&&m({action:p,location:w.location,delta:x})}function v(S,x){p="PUSH";let N=Nv(S)?S:_h(w.location,S,x);h=g()+1;let z=Dv(N,h),C=w.createHref(N.mask||N);try{f.pushState(z,"",C)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;l.location.assign(C)}c&&m&&m({action:p,location:w.location,delta:1})}function M(S,x){p="REPLACE";let N=Nv(S)?S:_h(w.location,S,x);h=g();let z=Dv(N,h),C=w.createHref(N.mask||N);f.replaceState(z,"",C),c&&m&&m({action:p,location:w.location,delta:0})}function b(S){return SM(l,S)}let w={get action(){return p},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Cv,_),m=S,()=>{l.removeEventListener(Cv,_),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let x=b(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:M,go(S){return f.go(S)}};return w}function SM(r,e,i=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),an(s,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:js(e);return l=l.replace(/ $/,"%20"),!i&&V_.test(l)&&(l=s+l),new URL(l,s)}function k_(r,e,i="/"){return yM(r,e,i,!1)}function yM(r,e,i,s,l){let c=typeof e=="string"?Ks(e):e,f=Ua(c.pathname||"/",i);if(f==null)return null;let p=MM(r),m=null,h=UM(f);for(let g=0;m==null&&g<p.length;++g)m=LM(p[g],h,s);return m}function MM(r){let e=X_(r);return EM(e),e}function X_(r,e=[],i=[],s="",l=!1){let c=(f,p,m=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;an(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=Hi([s,g.relativePath]),v=i.concat(g);f.children&&f.children.length>0&&(an(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),X_(f.children,e,v,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:NM(_,f.index),routesMeta:v.map((M,b)=>{let[w,S]=q_(M.relativePath,M.caseSensitive,b===v.length-1);return{...M,matcher:w,compiledParams:S}})})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of W_(f.path))c(f,p,!0,m)}),e}function W_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=W_(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function EM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:DM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var bM=/^:[\w-]+$/,TM=3,AM=2,RM=1,wM=10,CM=-2,Lv=r=>r==="*";function NM(r,e){let i=r.split("/"),s=i.length;return i.some(Lv)&&(s+=CM),e&&(s+=AM),i.filter(l=>!Lv(l)).reduce((l,c)=>l+(bM.test(c)?TM:c===""?RM:wM),s)}function DM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function LM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",_={path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v=m.matcher&&m.compiledParams?j_(_,g,m.matcher,m.compiledParams):ru(_,g),M=m.route;if(!v&&h&&i&&!s[s.length-1].route.index&&(v=ru({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Hi([c,v.pathname]),pathnameBase:IM(Hi([c,v.pathnameBase])),route:M}),v.pathnameBase!=="/"&&(c=Hi([c,v.pathnameBase]))}return f}function ru(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=q_(r.path,r.caseSensitive,r.end);return j_(r,e,i,s)}function j_(r,e,i,s){let l=e.match(i);if(!l)return null;let c=l[0],f=qs(c,1),p=l.slice(1);return{params:s.reduce((h,{paramName:g,isOptional:_},v)=>{if(g==="*"){let b=p[v]||"";f=qs(c.slice(0,c.length-b.length),1)}const M=p[v];return _&&!M?h[g]=void 0:h[g]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function q_(r,e=!1,i=!0){na(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,g)=>{if(s.push({paramName:p,isOptional:m!=null}),m){let _=g.charAt(h+f.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function UM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return na(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ua(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function OM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Ks(r):r,c;return i?(i=Z_(i),i.startsWith("/")||i.startsWith("\\")?c=Uv(i.substring(1),"/"):c=Uv(i,e)):c=e,{pathname:c,search:BM(s),hash:FM(l)}}function Uv(r,e){let i=qs(e).split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ud(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function PM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Y_(r){let e=PM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function mp(r,e,i,s=!1){let l;typeof r=="string"?l=Ks(r):(l={...r},an(!l.pathname||!l.pathname.includes("?"),Ud("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),Ud("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),Ud("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}p=_>=0?e[_]:"/"}let m=OM(l,p),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var Z_=r=>r.replace(/[\\/]{2,}/g,"/"),Hi=r=>Z_(r.join("/"));function qs(r,e=0){let i=r.length;for(;i>e&&r.charCodeAt(i-1)===47;)i--;return i===r.length?r:r.slice(0,i)}var IM=r=>qs(r).replace(/^\/*/,"/"),BM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,FM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,zM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function HM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function GM(r){let e=r.map(i=>i.route.path).filter(Boolean);return Hi(e)||"/"}var K_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Q_(r,e){let i=r;if(typeof i!="string"||!pp.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(K_)try{let c=new URL(window.location.href),f=V_.test(i)?new URL(gM(i,c.protocol)):new URL(i),p=Ua(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{na(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ov=new URL("http://localhost");function J_(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),Ov)}catch{return Ov}}function Od(r,e){return r.origin===e.origin&&(r.origin!=="null"||r.protocol===e.protocol&&r.host===e.host)}function VM(r,e){if(r.startsWith("//"))return!0;let i=e.protocol.toLowerCase();return r.toLowerCase().startsWith(i)?e.host===""||r.slice(i.length).startsWith("//"):!1}function $_(r,e,i,s){let l=null;try{l=r==null?null:new URL(r,i)}catch{}let c=new URL(e,i),f=l!=null&&!Od(l,i),p=!Od(c,i);if(s==="reject"){if(f||p)throw new Error("External navigation is not allowed")}else if(p&&(l==null||!VM(r,l)||!Od(l,c)))throw new Error("External navigation is not allowed")}var ex=["POST","PUT","PATCH","DELETE"];new Set(ex);var kM=["GET",...ex];new Set(kM);var XM=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function WM(r){try{return XM.includes(new URL(r).protocol)}catch{return!1}}var Qs=de.createContext(null);Qs.displayName="DataRouter";var mu=de.createContext(null);mu.displayName="DataRouterState";var tx=de.createContext(!1);function jM(){return de.useContext(tx)}var nx=de.createContext({isTransitioning:!1});nx.displayName="ViewTransition";var qM=de.createContext(new Map);qM.displayName="Fetchers";var YM=de.createContext(null);YM.displayName="Await";var Ni=de.createContext(null);Ni.displayName="Navigation";var dl=de.createContext(null);dl.displayName="Location";var Ia=de.createContext({outlet:null,matches:[],isDataRoute:!1});Ia.displayName="Route";var gp=de.createContext(null);gp.displayName="RouteError";var ix="REACT_ROUTER_ERROR",ZM="REDIRECT",KM="ROUTE_ERROR_RESPONSE";function QM(r){if(r.startsWith(`${ix}:${ZM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function JM(r){if(r.startsWith(`${ix}:${KM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new zM(e.status,e.statusText,e.data)}catch{}}function $M(r,{relative:e}={}){an(hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=de.useContext(Ni),{hash:l,pathname:c,search:f}=pl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Hi([i,c])),s.createHref({pathname:p,search:f,hash:l})}function hl(){return de.useContext(dl)!=null}function Ba(){return an(hl(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(dl).location}var ax="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rx(r){de.useContext(Ni).static||de.useLayoutEffect(r)}function Js(){let{isDataRoute:r}=de.useContext(Ia);return r?d1():e1()}function e1(){an(hl(),"useNavigate() may be used only in the context of a <Router> component.");let r=de.useContext(Qs),{basename:e,navigator:i}=de.useContext(Ni),{matches:s}=de.useContext(Ia),{pathname:l}=Ba(),c=JSON.stringify(Y_(s)),f=de.useRef(!1);return rx(()=>{f.current=!0}),de.useCallback((m,h={})=>{if(na(f.current,ax),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=mp(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Hi([e,g.pathname])),$_(typeof m=="string"?m:js(m),i.createHref(g),J_(i),"reject"),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,c,l,r])}de.createContext(null);function pl(r,{relative:e}={}){let{matches:i}=de.useContext(Ia),{pathname:s}=Ba(),l=JSON.stringify(Y_(i));return de.useMemo(()=>mp(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function t1(r,e){return sx(r,e)}function sx(r,e,i){an(hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=de.useContext(Ni),{matches:l}=de.useContext(Ia),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let S=h&&h.path||"";lx(p,!h||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let g=Ba(),_;if(e){let S=typeof e=="string"?Ks(e):e;an(m==="/"||S.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${S.pathname}" was given in the \`location\` prop.`),_=S}else _=g;let v=_.pathname||"/",M=v;if(m!=="/"){let S=m.replace(/^\//,"").split("/");M="/"+v.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=i&&i.state.matches.length?i.state.matches.map(S=>Object.assign(S,{route:i.manifest[S.route.id]||S.route})):k_(r,{pathname:M});na(h||b!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),na(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=s1(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:Hi([m,s.encodeLocation?s.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Hi([m,s.encodeLocation?s.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i);return e&&w?de.createElement(dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,..._},navigationType:"POP"}},w):w}function n1(){let r=f1(),e=HM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:c},"ErrorBoundary")," or"," ",de.createElement("code",{style:c},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),i?de.createElement("pre",{style:l},i):null,f)}var i1=de.createElement(n1,null),ox=class extends de.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=JM(r.digest);i&&(r=i)}let e=r!==void 0?de.createElement(Ia.Provider,{value:this.props.routeContext},de.createElement(gp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?de.createElement(a1,{error:r},e):e}};ox.contextType=tx;var Pd=new WeakMap;function a1({children:r,error:e}){let{basename:i,navigator:s}=de.useContext(Ni);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let l=QM(e.digest);if(l){let c=Pd.get(e);if(c)throw c;let f=Q_(l.location,i),p=f.absoluteURL||f.to;if($_(l.location,p,J_(s),"allow-explicit"),WM(p))throw new Error("Invalid redirect location");if(K_&&!Pd.get(e))if(f.isExternal||l.reloadDocument)window.location.href=p;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw Pd.set(e,m),m}return de.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p}`})}}return r}function r1({routeContext:r,match:e,children:i}){let s=de.useContext(Qs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(Ia.Provider,{value:r},i)}function s1(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let g=l.findIndex(_=>_.route.id&&c?.[_.route.id]!==void 0);an(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(i&&s){f=s.renderFallback;for(let g=0;g<l.length;g++){let _=l[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:v,errors:M}=s,b=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||b){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,h=s&&m?(g,_)=>{m(g,{location:s.location,params:s.matches?.[0]?.params??{},pattern:GM(s.matches),errorInfo:_})}:void 0;return l.reduceRight((g,_,v)=>{let M,b=!1,w=null,S=null;s&&(M=c&&_.route.id?c[_.route.id]:void 0,w=_.route.errorElement||i1,f&&(p<0&&v===0?(lx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):p===v&&(b=!0,S=_.route.hydrateFallbackElement||null)));let x=e.concat(l.slice(0,v+1)),N=()=>{let z;return M?z=w:b?z=S:_.route.Component?z=de.createElement(_.route.Component,null):_.route.element?z=_.route.element:z=g,de.createElement(r1,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:s!=null},children:z})};return s&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?de.createElement(ox,{location:s.location,revalidation:s.revalidation,component:w,error:M,children:N(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):N()},null)}function vp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function o1(r){let e=de.useContext(Qs);return an(e,vp(r)),e}function l1(r){let e=de.useContext(mu);return an(e,vp(r)),e}function c1(r){let e=de.useContext(Ia);return an(e,vp(r)),e}function _p(r){let e=c1(r),i=e.matches[e.matches.length-1];return an(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function u1(){return _p("useRouteId")}function f1(){let r=de.useContext(gp),e=l1("useRouteError"),i=_p("useRouteError");return r!==void 0?r:e.errors?.[i]}function d1(){let{router:r}=o1("useNavigate"),e=_p("useNavigate"),i=de.useRef(!1);return rx(()=>{i.current=!0}),de.useCallback(async(l,c={})=>{na(i.current,ax),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Pv={};function lx(r,e,i){!e&&!Pv[r]&&(Pv[r]=!0,na(!1,i))}de.memo(h1);function h1({routes:r,manifest:e,future:i,state:s,isStatic:l,onError:c}){return sx(r,void 0,{manifest:e,state:s,isStatic:l,onError:c})}function Gs(r){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function p1({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,useTransitions:f}){an(!hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=de.useMemo(()=>({basename:p,navigator:l,static:c,useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Ks(i));let{pathname:h="/",search:g="",hash:_="",state:v=null,key:M="default",mask:b}=i,w=de.useMemo(()=>{let S=Ua(h,p);return S==null?null:{location:{pathname:S,search:g,hash:_,state:v,key:M,mask:b},navigationType:s}},[p,h,g,_,v,M,s,b]);return na(w!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:de.createElement(Ni.Provider,{value:m},de.createElement(dl.Provider,{children:e,value:w}))}function m1({children:r,location:e}){return t1(xh(r),e)}function xh(r,e=[]){let i=[];return de.Children.forEach(r,(s,l)=>{if(!de.isValidElement(s))return;let c=[...e,l];if(s.type===de.Fragment){i.push.apply(i,xh(s.props.children,c));return}an(s.type===Gs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=xh(s.props.children,c)),i.push(f)}),i}var Qc="get",Jc="application/x-www-form-urlencoded";function gu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function g1(r){return gu(r)&&r.tagName.toLowerCase()==="button"}function v1(r){return gu(r)&&r.tagName.toLowerCase()==="form"}function _1(r){return gu(r)&&r.tagName.toLowerCase()==="input"}function x1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function S1(r,e){return r.button===0&&(!e||e==="_self")&&!x1(r)}var wc=null;function y1(){if(wc===null)try{new FormData(document.createElement("form"),0),wc=!1}catch{wc=!0}return wc}var M1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Id(r){return r!=null&&!M1.has(r)?(na(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jc}"`),null):r}function E1(r,e){let i,s,l,c,f;if(v1(r)){let p=r.getAttribute("action");s=p?Ua(p,e):null,i=r.getAttribute("method")||Qc,l=Id(r.getAttribute("enctype"))||Jc,c=new FormData(r)}else if(g1(r)||_1(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Ua(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||Qc,l=Id(r.getAttribute("formenctype"))||Id(p.getAttribute("enctype"))||Jc,c=new FormData(p,r),!y1()){let{name:h,type:g,value:_}=r;if(g==="image"){let v=h?`${h}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else h&&c.append(h,_)}}else{if(gu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Qc,s=null,l=Jc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function cx(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ua(l.pathname,e)==="/"?l.pathname=`${qs(e)}/_root.${s}`:l.pathname=`${qs(l.pathname)}.${s}`,l}async function b1(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function T1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function A1(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await b1(c,i);return f.links?f.links():[]}return[]}));return N1(s.flat(1).filter(T1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Iv(r,e,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function R1(r,e,{includeHydrateFallback:i}={}){return w1(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function w1(r){return[...new Set(r)]}function C1(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function N1(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(C1(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Sp(){let r=de.useContext(Qs);return xp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function D1(){let r=de.useContext(mu);return xp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var yp=de.createContext(void 0);yp.displayName="FrameworkContext";function vu(){let r=de.useContext(yp);return xp(r,"You must render this element inside a <HydratedRouter> element"),r}function L1(r,e){let i=de.useContext(yp),[s,l]=de.useState(!1),[c,f]=de.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:_}=e,v=de.useRef(null);de.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let w=x=>{x.forEach(N=>{f(N.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),de.useEffect(()=>{if(s){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[s]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Ko(p,M),onBlur:Ko(m,b),onMouseEnter:Ko(h,M),onMouseLeave:Ko(g,b),onTouchStart:Ko(_,M)}]:[!1,v,{}]}function Ko(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function U1({page:r,...e}){let i=jM(),{nonce:s}=vu(),{router:l}=Sp(),c=de.useMemo(()=>k_(l.routes,r,l.basename),[l.routes,r,l.basename]);return c?(e.nonce==null&&s&&(e={...e,nonce:s}),i?de.createElement(P1,{page:r,matches:c,...e}):de.createElement(I1,{page:r,matches:c,...e})):null}function O1(r){let{manifest:e,routeModules:i}=vu(),[s,l]=de.useState([]);return de.useEffect(()=>{let c=!1;return A1(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function P1({page:r,matches:e,...i}){let s=Ba(),{future:l}=vu(),{basename:c}=Sp(),f=de.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let p=cx(r,c,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:h.push(g.route.id);return m&&h.length>0&&p.searchParams.set("_routes",h.join(",")),[p.pathname+p.search]},[c,l.v8_trailingSlashAwareDataRequests,r,s,e]);return de.createElement(de.Fragment,null,f.map(p=>de.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...i})))}function I1({page:r,matches:e,...i}){let s=Ba(),{future:l,manifest:c,routeModules:f}=vu(),{basename:p}=Sp(),{loaderData:m,matches:h}=D1(),g=de.useMemo(()=>Iv(r,e,h,c,s,"data"),[r,e,h,c,s]),_=de.useMemo(()=>Iv(r,e,h,c,s,"assets"),[r,e,h,c,s]),v=de.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let w=new Set,S=!1;if(e.forEach(N=>{let z=c.routes[N.route.id];!z||!z.hasLoader||(!g.some(C=>C.route.id===N.route.id)&&N.route.id in m&&f[N.route.id]?.shouldRevalidate||z.hasClientLoader?S=!0:w.add(N.route.id))}),w.size===0)return[];let x=cx(r,p,l.v8_trailingSlashAwareDataRequests,"data");return S&&w.size>0&&x.searchParams.set("_routes",e.filter(N=>w.has(N.route.id)).map(N=>N.route.id).join(",")),[x.pathname+x.search]},[p,l.v8_trailingSlashAwareDataRequests,m,s,c,g,e,r,f]),M=de.useMemo(()=>R1(_,c),[_,c]),b=O1(_);return de.createElement(de.Fragment,null,v.map(w=>de.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),M.map(w=>de.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),b.map(({key:w,link:S})=>de.createElement("link",{key:w,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function B1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var F1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{F1&&(window.__reactRouterVersion="7.18.3")}catch{}function z1({basename:r,children:e,useTransitions:i,window:s}){let l=de.useRef();l.current==null&&(l.current=vM({window:s,v5Compat:!0}));let c=l.current,[f,p]=de.useState({action:c.action,location:c.location}),m=de.useCallback(h=>{i===!1?p(h):de.startTransition(()=>p(h))},[i]);return de.useLayoutEffect(()=>c.listen(m),[c,m]),de.createElement(p1,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var ux=de.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,mask:p,state:m,target:h,to:g,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:M,...b},w){let{basename:S,navigator:x,useTransitions:N}=de.useContext(Ni),z=typeof g=="string"&&pp.test(g),C=Q_(g,S);g=C.to;let D=$M(g,{relative:l}),U=Ba(),I=null;if(p){let K=mp(p,[],U.mask?U.mask.pathname:"/",!0);S!=="/"&&(K.pathname=K.pathname==="/"?S:Hi([S,K.pathname])),I=x.createHref(K)}let[T,O,V]=L1(s,b),X=k1(g,{replace:f,mask:p,state:m,target:h,preventScrollReset:_,relative:l,viewTransition:v,defaultShouldRevalidate:M,useTransitions:N});function Z(K){e&&e(K),K.defaultPrevented||X(K)}let ie=!(C.isExternal||c),j=de.createElement("a",{...b,...V,href:(ie?I:void 0)||C.absoluteURL||D,onClick:ie?Z:e,ref:B1(w,O),target:h,"data-discover":!z&&i==="render"?"true":void 0});return T&&!z?de.createElement(de.Fragment,null,j,de.createElement(U1,{page:D})):j});ux.displayName="Link";var H1=de.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},g){let _=pl(f,{relative:h.relative}),v=Ba(),M=de.useContext(mu),{navigator:b,basename:w}=de.useContext(Ni),S=M!=null&&Y1(_)&&p===!0,x=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,N=v.pathname,z=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(N=N.toLowerCase(),z=z?z.toLowerCase():null,x=x.toLowerCase()),z&&w&&(z=Ua(z,w)||z);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let D=N===x||!l&&N.startsWith(x)&&N.charAt(C)==="/",U=z!=null&&(z===x||!l&&z.startsWith(x)&&z.charAt(x.length)==="/"),I={isActive:D,isPending:U,isTransitioning:S},T=D?e:void 0,O;typeof s=="function"?O=s(I):O=[s,D?"active":null,U?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let V=typeof c=="function"?c(I):c;return de.createElement(ux,{...h,"aria-current":T,className:O,ref:g,style:V,to:f,viewTransition:p},typeof m=="function"?m(I):m)});H1.displayName="NavLink";var G1=de.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Qc,action:p,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:_,defaultShouldRevalidate:v,...M},b)=>{let{useTransitions:w}=de.useContext(Ni),S=j1(),x=q1(p,{relative:h}),N=f.toLowerCase()==="get"?"get":"post",z=typeof p=="string"&&pp.test(p),C=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,I=U?.getAttribute("formmethod")||f,T=()=>S(U||D.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:_,defaultShouldRevalidate:v});w&&i!==!1?de.startTransition(()=>T()):T()};return de.createElement("form",{ref:b,method:N,action:x,onSubmit:s?m:C,...M,"data-discover":!z&&r==="render"?"true":void 0})});G1.displayName="Form";function V1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fx(r){let e=de.useContext(Qs);return an(e,V1(r)),e}function k1(r,{target:e,replace:i,mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m,useTransitions:h}={}){let g=Js(),_=Ba(),v=pl(r,{relative:f});return de.useCallback(M=>{if(S1(M,e)){M.preventDefault();let b=i!==void 0?i:js(_)===js(v),w=()=>g(r,{replace:b,mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m});h?de.startTransition(()=>w()):w()}},[_,g,v,i,s,l,e,r,c,f,p,m,h])}var X1=0,W1=()=>`__${String(++X1)}__`;function j1(){let{router:r}=fx("useSubmit"),{basename:e}=de.useContext(Ni),i=u1(),s=r.fetch,l=r.navigate;return de.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:g,body:_}=E1(c,e);if(f.navigate===!1){let v=f.fetcherKey||W1();await s(v,i,f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function q1(r,{relative:e}={}){let{basename:i}=de.useContext(Ni),s=de.useContext(Ia);an(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...pl(r||".",{relative:e})},f=Ba();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Hi([i,c.pathname])),js(c)}function Y1(r,{relative:e}={}){let i=de.useContext(nx);an(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=fx("useViewTransitionState"),l=pl(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,s)||i.nextLocation.pathname;return ru(l.pathname,f)!=null||ru(l.pathname,c)!=null}const Z1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Bv=r=>{const e=K1(r);return e.charAt(0).toUpperCase()+e.slice(1)},dx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),Q1=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var J1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $1=de.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>de.createElement("svg",{ref:m,...J1,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:dx("lucide",l),...!c&&!Q1(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,g])=>de.createElement(h,g)),...Array.isArray(c)?c:[c]]));const Mp=(r,e)=>{const i=de.forwardRef(({className:s,...l},c)=>de.createElement($1,{ref:c,iconNode:e,className:dx(`lucide-${Z1(Bv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Bv(r),i};const eE=[["path",{d:"M12 6v16",key:"nqf5sj"}],["path",{d:"m19 13 2-1a9 9 0 0 1-18 0l2 1",key:"y7qv08"}],["path",{d:"M9 11h6",key:"1fldmi"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]],tE=Mp("anchor",eE);const nE=[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]],iE=Mp("ship",nE);const aE=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]],rE=Mp("tower-control",aE);function Fv({style:r}){return P.jsx("svg",{"code-path":"src\\pages\\Home.tsx:9:5",className:"sparkle",style:r,viewBox:"0 0 100 100","aria-hidden":!0,children:P.jsx("path",{"code-path":"src\\pages\\Home.tsx:10:7",d:"M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"})})}const hx={anchor:tE,tower:rE,ship:iE},zv=Object.keys(hx);function sE(){const r=Js(),[e,i]=de.useState([]),s=de.useMemo(()=>Array.from({length:42},(c,f)=>({id:f,left:Math.random()*100,top:Math.random()*88,size:Math.random()*2.2+.8,dur:`${(Math.random()*3+2).toFixed(2)}s`,delay:`${(Math.random()*4).toFixed(2)}s`})),[]),l=c=>{const f=c.currentTarget.getBoundingClientRect(),p={id:Date.now()+Math.random(),x:c.clientX-f.left,y:c.clientY-f.top,icon:zv[Math.floor(Math.random()*zv.length)],rot:Math.random()*24-12,size:34+Math.random()*22};i(m=>[...m.slice(-20),p]),window.setTimeout(()=>i(m=>m.filter(h=>h.id!==p.id)),1500)};return P.jsxs("div",{"code-path":"src\\pages\\Home.tsx:70:5",className:"splash fade-in grain",onClick:l,children:[P.jsx("div",{"code-path":"src\\pages\\Home.tsx:71:7",className:"splash-bg"}),P.jsx("div",{"code-path":"src\\pages\\Home.tsx:72:7",className:"splash-vignette"}),s.map(c=>P.jsx("span",{"code-path":"src\\pages\\Home.tsx:75:9",className:"star-dot",style:{left:`${c.left}%`,top:`${c.top}%`,width:c.size,height:c.size,"--dur":c.dur,"--delay":c.delay}},c.id)),e.map(c=>{const f=hx[c.icon];return P.jsxs("span",{"code-path":"src\\pages\\Home.tsx:95:11",className:"spawn-icon",style:{left:c.x,top:c.y,width:c.size,height:c.size,"--rot":`${c.rot}deg`},children:[P.jsx("svg",{"code-path":"src\\pages\\Home.tsx:108:13",className:"spawn-burst",viewBox:"0 0 100 100","aria-hidden":!0,children:P.jsx("path",{"code-path":"src\\pages\\Home.tsx:109:15",d:"M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"})}),P.jsx(f,{"code-path":"src\\pages\\Home.tsx:111:13",className:"spawn-glyph",strokeWidth:0,fill:"currentColor","aria-hidden":!0})]},c.id)}),P.jsxs("nav",{"code-path":"src\\pages\\Home.tsx:116:7",className:"splash-nav",children:[P.jsx("span",{"code-path":"src\\pages\\Home.tsx:117:9",children:"PIER"}),P.jsx("span",{"code-path":"src\\pages\\Home.tsx:118:9",children:"HARBOR"}),P.jsx("span",{"code-path":"src\\pages\\Home.tsx:119:9",children:"TIDE"}),P.jsx("span",{"code-path":"src\\pages\\Home.tsx:120:9",children:"ARCHIVE"})]}),P.jsxs("div",{"code-path":"src\\pages\\Home.tsx:123:7",className:"splash-center",children:[P.jsxs("div",{"code-path":"src\\pages\\Home.tsx:124:9",className:"splash-zh",children:[P.jsx(Fv,{"code-path":"src\\pages\\Home.tsx:125:11"}),"和码头有关的一切",P.jsx(Fv,{"code-path":"src\\pages\\Home.tsx:127:11",style:{animationDelay:"1.4s"}})]}),P.jsxs("h1",{"code-path":"src\\pages\\Home.tsx:129:9",className:"splash-title",children:["Everything of",P.jsx("br",{"code-path":"src\\pages\\Home.tsx:131:11"}),"the Pier"]})]}),P.jsxs("button",{"code-path":"src\\pages\\Home.tsx:136:7",className:"splash-enter",onClick:c=>{c.stopPropagation(),r("/tunnel")},children:["点 击 进 入 · ENTER THE PIER",P.jsx("span",{"code-path":"src\\pages\\Home.tsx:144:9",className:"chev"})]})]})}const Ep="186",oE=0,Hv=1,lE=2,$c=1,cE=2,rl=3,Xr=0,ti=1,Ji=2,Na=0,ol=1,Gv=2,Vv=3,kv=4,uE=5,Vs=100,fE=101,dE=102,hE=103,pE=104,mE=200,gE=201,vE=202,_E=203,px=204,mx=205,xE=206,SE=207,yE=208,ME=209,EE=210,bE=211,TE=212,AE=213,RE=214,Sh=0,yh=1,Mh=2,ll=3,Eh=4,bh=5,Th=6,Ah=7,gx=0,wE=1,CE=2,ta=0,vx=1,_x=2,xx=3,Sx=4,yx=5,Mx=6,Ex=7,bx=300,Wr=301,Ys=302,Bd=303,Fd=304,_u=306,Rh=1e3,Ca=1001,wh=1002,Pn=1003,NE=1004,Cc=1005,zn=1006,zd=1007,Vr=1008,Ci=1009,Tx=1010,Ax=1011,cl=1012,bp=1013,ia=1014,$i=1015,aa=1016,Tp=1017,Ap=1018,ul=1020,Rx=35902,wx=35899,Cx=1021,Nx=1022,zi=1023,Oa=1026,kr=1027,Dx=1028,Rp=1029,jr=1030,wp=1031,Cp=1033,eu=33776,tu=33777,nu=33778,iu=33779,Ch=35840,Nh=35841,Dh=35842,Lh=35843,Uh=36196,Oh=37492,Ph=37496,Ih=37488,Bh=37489,su=37490,Fh=37491,zh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,jh=37815,qh=37816,Yh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,$h=36492,ep=36494,tp=36495,np=36283,ip=36284,ou=36285,ap=36286,DE=3200,Xv=0,LE=1,vr="",Ri="srgb",lu="srgb-linear",cu="linear",Gt="srgb",Hd=7680,UE=519,OE=512,PE=513,IE=514,Np=515,BE=516,FE=517,Dp=518,zE=519,HE=35044,Wv="300 es",ea=2e3,uu=2001;function GE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function VE(){const r=fu("canvas");return r.style.display="block",r}const jv={};function qv(...r){const e="THREE."+r.shift();console.log(e,...r)}function Lx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=Lx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Dt(...r){r=Lx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Xs(...r){const e=r.join(" ");e in jv||(jv[e]=!0,at(...r))}function kE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const XE={[Sh]:yh,[Mh]:Th,[Eh]:Ah,[ll]:bh,[yh]:Sh,[Th]:Mh,[Ah]:Eh,[bh]:ll};class Zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=Math.PI/180,rp=180/Math.PI;function ml(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function WE(r,e){return(r%e+e)%e}function Vd(r,e,i){return(1-i)*r+i*e}function Qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ip=class Ip{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ip.prototype.isVector2=!0;let ct=Ip;class $s{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],_=s[l+3],v=c[f+0],M=c[f+1],b=c[f+2],w=c[f+3];if(_!==w||m!==v||h!==M||g!==b){let S=m*v+h*M+g*b+_*w;S<0&&(v=-v,M=-M,b=-b,w=-w,S=-S);let x=1-p;if(S<.9995){const N=Math.acos(S),z=Math.sin(N);x=Math.sin(x*N)/z,p=Math.sin(p*N)/z,m=m*x+v*p,h=h*x+M*p,g=g*x+b*p,_=_*x+w*p}else{m=m*x+v*p,h=h*x+M*p,g=g*x+b*p,_=_*x+w*p;const N=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=N,h*=N,g*=N,_*=N}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],_=c[f],v=c[f+1],M=c[f+2],b=c[f+3];return e[i]=p*b+g*_+m*M-h*v,e[i+1]=m*b+g*v+h*_-p*M,e[i+2]=h*b+g*M+p*v-m*_,e[i+3]=g*b-p*_-m*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),_=p(c/2),v=m(s/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=v*g*_+h*M*b,this._y=h*M*_-v*g*b,this._z=h*g*b+v*M*_,this._w=h*g*_-v*M*b;break;case"YXZ":this._x=v*g*_+h*M*b,this._y=h*M*_-v*g*b,this._z=h*g*b-v*M*_,this._w=h*g*_+v*M*b;break;case"ZXY":this._x=v*g*_-h*M*b,this._y=h*M*_+v*g*b,this._z=h*g*b+v*M*_,this._w=h*g*_-v*M*b;break;case"ZYX":this._x=v*g*_-h*M*b,this._y=h*M*_+v*g*b,this._z=h*g*b-v*M*_,this._w=h*g*_+v*M*b;break;case"YZX":this._x=v*g*_+h*M*b,this._y=h*M*_+v*g*b,this._z=h*g*b-v*M*_,this._w=h*g*_-v*M*b;break;case"XZY":this._x=v*g*_-h*M*b,this._y=h*M*_-v*g*b,this._z=h*g*b+v*M*_,this._w=h*g*_+v*M*b;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],_=i[10],v=s+p+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(s>p&&s>_){const M=2*Math.sqrt(1+s-p-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-s-_);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bp=class Bp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Yv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Yv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*h+f*_-p*g,this.y=s+m*g+p*h-c*_,this.z=l+m*_+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bp.prototype.isVector3=!0;let ne=Bp;const kd=new ne,Yv=new $s,Fp=class Fp{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],_=s[7],v=s[2],M=s[5],b=s[8],w=l[0],S=l[3],x=l[6],N=l[1],z=l[4],C=l[7],D=l[2],U=l[5],I=l[8];return c[0]=f*w+p*N+m*D,c[3]=f*S+p*z+m*U,c[6]=f*x+p*C+m*I,c[1]=h*w+g*N+_*D,c[4]=h*S+g*z+_*U,c[7]=h*x+g*C+_*I,c[2]=v*w+M*N+b*D,c[5]=v*S+M*z+b*U,c[8]=v*x+M*C+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=g*f-p*h,v=p*m-g*c,M=h*c-f*m,b=i*_+s*v+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(l*h-g*s)*w,e[2]=(p*s-l*f)*w,e[3]=v*w,e[4]=(g*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=M*w,e[7]=(s*m-h*i)*w,e[8]=(f*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xd.makeScale(e,i)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xd.makeRotation(-e)),this}translate(e,i){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fp.prototype.isMatrix3=!0;let lt=Fp;const Xd=new lt,Zv=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jE(){const r={enabled:!0,workingColorSpace:lu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Gt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(l.r=Ws(l.r),l.g=Ws(l.g),l.b=Ws(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vr?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[lu]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:Zv,fromXYZ:Kv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:Zv,fromXYZ:Kv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),r}const Rt=jE();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ws;class qE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ws===void 0&&(ws=fu("canvas")),ws.width=e.width,ws.height=e.height;const l=ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ws}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Da(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YE=0;class Lp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Wd(l[f].image)):c.push(Wd(l[f]))}else c=Wd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let ZE=0;const jd=new ne;class Hn extends Zr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Ca,l=Ca,c=zn,f=Vr,p=zi,m=Ci,h=Hn.DEFAULT_ANISOTROPY,g=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=ml(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case Ca:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case Ca:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=bx;Hn.DEFAULT_ANISOTROPY=1;const zp=class zp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],_=m[8],v=m[1],M=m[5],b=m[9],w=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+S)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(h+1)/2,C=(M+1)/2,D=(x+1)/2,U=(g+v)/4,I=(_+w)/4,T=(b+S)/4;return z>C&&z>D?z<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(z),l=U/s,c=I/s):C>D?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=U/l,c=T/l):D<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(D),s=I/c,l=T/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-b)*(S-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(S-b)/N,this.y=(_-w)/N,this.z=(v-g)/N,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;let un=zp;class KE extends Zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Hn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lp(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends KE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ux extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QE extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pu=class pu{constructor(e,i,s,l,c,f,p,m,h,g,_,v,M,b,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,_,v,M,b,w,S)}set(e,i,s,l,c,f,p,m,h,g,_,v,M,b,w,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=M,x[7]=b,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=f*g,M=f*_,b=p*g,w=p*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=M+b*h,i[5]=v-w*h,i[9]=-p*m,i[2]=w-v*h,i[6]=b+M*h,i[10]=f*m}else if(e.order==="YXZ"){const v=m*g,M=m*_,b=h*g,w=h*_;i[0]=v+w*p,i[4]=b*p-M,i[8]=f*h,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=M*p-b,i[6]=w+v*p,i[10]=f*m}else if(e.order==="ZXY"){const v=m*g,M=m*_,b=h*g,w=h*_;i[0]=v-w*p,i[4]=-f*_,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*g,i[9]=w-v*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const v=f*g,M=f*_,b=p*g,w=p*_;i[0]=m*g,i[4]=b*h-M,i[8]=v*h+w,i[1]=m*_,i[5]=w*h+v,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,M=f*h,b=p*m,w=p*h;i[0]=m*g,i[4]=w-v*_,i[8]=b*_+M,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=M*_+b,i[10]=v-w*_}else if(e.order==="XZY"){const v=f*m,M=f*h,b=p*m,w=p*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=v*_+w,i[5]=f*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=p*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JE,e,$E)}lookAt(e,i,s){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),fr.crossVectors(s,fi),fr.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),fr.crossVectors(s,fi)),fr.normalize(),Nc.crossVectors(fi,fr),l[0]=fr.x,l[4]=Nc.x,l[8]=fi.x,l[1]=fr.y,l[5]=Nc.y,l[9]=fi.y,l[2]=fr.z,l[6]=Nc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],_=s[5],v=s[9],M=s[13],b=s[2],w=s[6],S=s[10],x=s[14],N=s[3],z=s[7],C=s[11],D=s[15],U=l[0],I=l[4],T=l[8],O=l[12],V=l[1],X=l[5],Z=l[9],ie=l[13],j=l[2],K=l[6],F=l[10],G=l[14],fe=l[3],se=l[7],me=l[11],L=l[15];return c[0]=f*U+p*V+m*j+h*fe,c[4]=f*I+p*X+m*K+h*se,c[8]=f*T+p*Z+m*F+h*me,c[12]=f*O+p*ie+m*G+h*L,c[1]=g*U+_*V+v*j+M*fe,c[5]=g*I+_*X+v*K+M*se,c[9]=g*T+_*Z+v*F+M*me,c[13]=g*O+_*ie+v*G+M*L,c[2]=b*U+w*V+S*j+x*fe,c[6]=b*I+w*X+S*K+x*se,c[10]=b*T+w*Z+S*F+x*me,c[14]=b*O+w*ie+S*G+x*L,c[3]=N*U+z*V+C*j+D*fe,c[7]=N*I+z*X+C*K+D*se,c[11]=N*T+z*Z+C*F+D*me,c[15]=N*O+z*ie+C*G+D*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],_=e[6],v=e[10],M=e[14],b=e[3],w=e[7],S=e[11],x=e[15],N=m*M-h*v,z=p*M-h*_,C=p*v-m*_,D=f*M-h*g,U=f*v-m*g,I=f*_-p*g;return i*(w*N-S*z+x*C)-s*(b*N-S*D+x*U)+l*(b*z-w*D+x*I)-c*(b*C-w*U+S*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],g=e[10];return i*(f*g-p*h)-s*(c*g-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=e[9],v=e[10],M=e[11],b=e[12],w=e[13],S=e[14],x=e[15],N=i*p-s*f,z=i*m-l*f,C=i*h-c*f,D=s*m-l*p,U=s*h-c*p,I=l*h-c*m,T=g*w-_*b,O=g*S-v*b,V=g*x-M*b,X=_*S-v*w,Z=_*x-M*w,ie=v*x-M*S,j=N*ie-z*Z+C*X+D*V-U*O+I*T;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/j;return e[0]=(p*ie-m*Z+h*X)*K,e[1]=(l*Z-s*ie-c*X)*K,e[2]=(w*I-S*U+x*D)*K,e[3]=(v*U-_*I-M*D)*K,e[4]=(m*V-f*ie-h*O)*K,e[5]=(i*ie-l*V+c*O)*K,e[6]=(S*C-b*I-x*z)*K,e[7]=(g*I-v*C+M*z)*K,e[8]=(f*Z-p*V+h*T)*K,e[9]=(s*V-i*Z-c*T)*K,e[10]=(b*U-w*C+x*N)*K,e[11]=(_*C-g*U-M*N)*K,e[12]=(p*O-f*X-m*T)*K,e[13]=(i*X-s*O+l*T)*K,e[14]=(w*z-b*D-S*N)*K,e[15]=(g*D-_*z+v*N)*K,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,_=p+p,v=c*h,M=c*g,b=c*_,w=f*g,S=f*_,x=p*_,N=m*h,z=m*g,C=m*_,D=s.x,U=s.y,I=s.z;return l[0]=(1-(w+x))*D,l[1]=(M+C)*D,l[2]=(b-z)*D,l[3]=0,l[4]=(M-C)*U,l[5]=(1-(v+x))*U,l[6]=(S+N)*U,l[7]=0,l[8]=(b+z)*I,l[9]=(S-N)*I,l[10]=(1-(v+w))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Cs.set(l[0],l[1],l[2]).length();const p=Cs.set(l[4],l[5],l[6]).length(),m=Cs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Pi.copy(this);const h=1/f,g=1/p,_=1/m;return Pi.elements[0]*=h,Pi.elements[1]*=h,Pi.elements[2]*=h,Pi.elements[4]*=g,Pi.elements[5]*=g,Pi.elements[6]*=g,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,i.setFromRotationMatrix(Pi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=ea,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let b,w;if(m)b=c/(f-c),w=f*c/(f-c);else if(p===ea)b=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(p===uu)b=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=ea,m=!1){const h=this.elements,g=2/(i-e),_=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,w;if(m)b=1/(f-c),w=f/(f-c);else if(p===ea)b=-2/(f-c),w=-(f+c)/(f-c);else if(p===uu)b=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};pu.prototype.isMatrix4=!0;let pn=pu;const Cs=new ne,Pi=new pn,JE=new ne(0,0,0),$E=new ne(1,1,1),fr=new ne,Nc=new ne,fi=new ne,Qv=new pn,Jv=new $s;class qr{constructor(e=0,i=0,s=0,l=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jv.setFromEuler(this),this.setFromQuaternion(Jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class Up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const $v=new ne,Ns=new $s,Ea=new pn,Dc=new ne,Jo=new ne,tb=new ne,nb=new $s,e_=new ne(1,0,0),t_=new ne(0,1,0),n_=new ne(0,0,1),i_={type:"added"},ib={type:"removed"},Ds={type:"childadded",child:null},qd={type:"childremoved",child:null};class hi extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const e=new ne,i=new qr,s=new $s,l=new ne(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new lt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ns.setFromAxisAngle(e,i),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,i){return Ns.setFromAxisAngle(e,i),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Dc.copy(e):Dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Jo,Dc,this.up):Ea.lookAt(Dc,Jo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(Ea),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ib),qd.child=e,this.dispatchEvent(qd),qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),_=f(e.shapes),v=f(e.skeletons),M=f(e.animations),b=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}hi.DEFAULT_UP=new ne(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qt extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class Yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const w of e.hand.values()){const S=i.getJointPose(w,s),x=this._getHandJoint(h,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),M=.02,b=.005;h.inputState.pinching&&v>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new qt;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Zd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class wt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=WE(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Zd(f,c,e+1/3),this.g=Zd(f,c,e),this.b=Zd(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const s=Ox[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Rt.workingToColorSpace(Fn.copy(this),e),Math.round(Tt(Fn.r*255,0,255))*65536+Math.round(Tt(Fn.g*255,0,255))*256+Math.round(Tt(Fn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=g<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ri){Rt.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+i,dr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(dr),e.getHSL(Lc);const s=Vd(dr.h,Lc.h,i),l=Vd(dr.s,Lc.s,i),c=Vd(dr.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new wt;wt.NAMES=Ox;class rb extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new ne,ba=new ne,Kd=new ne,Ta=new ne,Ls=new ne,Us=new ne,a_=new ne,Qd=new ne,Jd=new ne,$d=new ne,eh=new un,th=new un,nh=new un;class Fi{constructor(e=new ne,i=new ne,s=new ne){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),ba.subVectors(s,i),Kd.subVectors(e,i);const f=Ii.dot(Ii),p=Ii.dot(ba),m=Ii.dot(Kd),h=ba.dot(ba),g=ba.dot(Kd),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,M=(h*m-p*g)*v,b=(f*g-p*m)*v;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(f,Ta.y),m.addScaledVector(p,Ta.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return eh.setScalar(0),th.setScalar(0),nh.setScalar(0),eh.fromBufferAttribute(e,i),th.fromBufferAttribute(e,s),nh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(eh,c.x),f.addScaledVector(th,c.y),f.addScaledVector(nh,c.z),f}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),ba.subVectors(e,i),Ii.cross(ba).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ii.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Fi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Fi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Ls.subVectors(l,s),Us.subVectors(c,s),Qd.subVectors(e,s);const m=Ls.dot(Qd),h=Us.dot(Qd);if(m<=0&&h<=0)return i.copy(s);Jd.subVectors(e,l);const g=Ls.dot(Jd),_=Us.dot(Jd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*h;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ls,f);$d.subVectors(e,c);const M=Ls.dot($d),b=Us.dot($d);if(b>=0&&M<=b)return i.copy(c);const w=M*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Us,p);const S=g*b-M*_;if(S<=0&&_-g>=0&&M-b>=0)return a_.subVectors(c,l),p=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(a_,p);const x=1/(S+w+v);return f=w*x,p=v*x,i.copy(s).addScaledVector(Ls,f).addScaledVector(Us,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Uc.copy(s.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Oc.subVectors(this.max,$o),Os.subVectors(e.a,$o),Ps.subVectors(e.b,$o),Is.subVectors(e.c,$o),hr.subVectors(Ps,Os),pr.subVectors(Is,Ps),Br.subVectors(Os,Is);let i=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Br.z,Br.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Br.z,0,-Br.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Br.y,Br.x,0];return!ih(i,Os,Ps,Is,Oc)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,Os,Ps,Is,Oc))?!1:(Pc.crossVectors(hr,pr),i=[Pc.x,Pc.y,Pc.z],ih(i,Os,Ps,Is,Oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Aa=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Bi=new ne,Uc=new eo,Os=new ne,Ps=new ne,Is=new ne,hr=new ne,pr=new ne,Br=new ne,$o=new ne,Oc=new ne,Pc=new ne,Fr=new ne;function ih(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Fr.fromArray(r,c);const p=l.x*Math.abs(Fr.x)+l.y*Math.abs(Fr.y)+l.z*Math.abs(Fr.z),m=e.dot(Fr),h=i.dot(Fr),g=s.dot(Fr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const Mn=new ne,Ic=new ct;let sb=0;class La extends Zr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=HE,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ic.fromBufferAttribute(this,i),Ic.applyMatrix3(e),this.setXY(i,Ic.x,Ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Qo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ei(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Px extends La{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Ix extends La{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class fn extends La{constructor(e,i,s){super(new Float32Array(e),i,s)}}const ob=new eo,el=new ne,ah=new ne;class Op{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ob.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(ah)),this.expandByPoint(el.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lb=0;const Ai=new pn,rh=new hi,Bs=new ne,di=new eo,tl=new eo,Cn=new ne;class Wn extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GE(e)?Ix:Px)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new lt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Op);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];tl.setFromBufferAttribute(p),this.morphTargetsRelative?(Cn.addVectors(di.min,tl.min),di.expandByPoint(Cn),Cn.addVectors(di.max,tl.max),di.expandByPoint(Cn)):(di.expandByPoint(tl.min),di.expandByPoint(tl.max))}di.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)Cn.fromBufferAttribute(p,h),m&&(Bs.fromBufferAttribute(e,h),Cn.add(Bs)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new La(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new ne,m[T]=new ne;const h=new ne,g=new ne,_=new ne,v=new ct,M=new ct,b=new ct,w=new ne,S=new ne;function x(T,O,V){h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,O),_.fromBufferAttribute(s,V),v.fromBufferAttribute(c,T),M.fromBufferAttribute(c,O),b.fromBufferAttribute(c,V),g.sub(h),_.sub(h),M.sub(v),b.sub(v);const X=1/(M.x*b.y-b.x*M.y);isFinite(X)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(X),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(X),p[T].add(w),p[O].add(w),p[V].add(w),m[T].add(S),m[O].add(S),m[V].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let T=0,O=N.length;T<O;++T){const V=N[T],X=V.start,Z=V.count;for(let ie=X,j=X+Z;ie<j;ie+=3)x(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const z=new ne,C=new ne,D=new ne,U=new ne;function I(T){D.fromBufferAttribute(l,T),U.copy(D);const O=p[T];z.copy(O),z.sub(D.multiplyScalar(D.dot(O))).normalize(),C.crossVectors(U,O);const X=C.dot(m[T])<0?-1:1;f.setXYZW(T,z.x,z.y,z.z,X)}for(let T=0,O=N.length;T<O;++T){const V=N[T],X=V.start,Z=V.count;for(let ie=X,j=X+Z;ie<j;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new La(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new ne,c=new ne,f=new ne,p=new ne,m=new ne,h=new ne,g=new ne,_=new ne;if(e)for(let v=0,M=e.count;v<M;v+=3){const b=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,S),p.add(g),m.add(g),h.add(g),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,_=p.normalized,v=new h.constructor(m.length*g);let M=0,b=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*g;for(let x=0;x<g;x++)v[b++]=h[M++]}return new La(v,g,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,_=h.length;g<_;g++){const v=h[g],M=e(v,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,v=h.length;_<v;_++){const M=h[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,M=_.length;v<M;v++)g.push(_[v].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new ne,cb=new ne,ub=new lt;class gr{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=sh.subVectors(s,i).cross(cb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(sh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ub.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fb=0;class xu extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=ol,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=px,this.blendDst=mx,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=UE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hd,this.stencilZFail=Hd,this.stencilZPass=Hd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new gr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ct().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ra=new ne,oh=new ne,Bc=new ne,Fc=new ne;class Bx{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ra)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ra.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){oh.copy(e).add(i).multiplyScalar(.5),Bc.copy(i).sub(e).normalize(),Fc.copy(this.origin).sub(oh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Bc),p=Fc.dot(this.direction),m=-Fc.dot(Bc),h=Fc.lengthSq(),g=Math.abs(1-f*f);let _,v,M,b;if(g>0)if(_=f*m-p,v=f*p-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,M=_*(_+f*v+2*p)+v*(f*_+v+2*m)+h}else v=c,_=Math.max(0,-(f*v+p)),M=-_*_+v*(v+2*m)+h;else v=-c,_=Math.max(0,-(f*v+p)),M=-_*_+v*(v+2*m)+h;else v<=-b?(_=Math.max(0,-(-f*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+h):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+h):(_=Math.max(0,-(f*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+h);else v=f>0?-c:c,_=Math.max(0,-(f*v+p)),M=-_*_+v*(v+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(oh).addScaledVector(Bc,v),M}intersectSphere(e,i){if(e.radius<0)return null;Ra.subVectors(e.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,l=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,l=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(p=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ra)!==null}intersectTriangle(e,i,s,l,c){const f=this.origin,p=this.direction,m=p.x,h=p.y,g=p.z,_=e.x-f.x,v=e.y-f.y,M=e.z-f.z,b=i.x-f.x,w=i.y-f.y,S=i.z-f.z,x=s.x-f.x,N=s.y-f.y,z=s.z-f.z,C=Math.abs(m),D=Math.abs(h),U=Math.abs(g);let I,T,O,V,X,Z,ie,j,K,F,G,fe;if(C>=D&&C>=U?(O=m,Z=_,K=b,fe=x,m>=0?(I=h,T=g,V=v,X=M,ie=w,j=S,F=N,G=z):(I=g,T=h,V=M,X=v,ie=S,j=w,F=z,G=N)):D>=U?(O=h,Z=v,K=w,fe=N,h>=0?(I=g,T=m,V=M,X=_,ie=S,j=b,F=z,G=x):(I=m,T=g,V=_,X=M,ie=b,j=S,F=x,G=z)):(O=g,Z=M,K=S,fe=z,g>=0?(I=m,T=h,V=_,X=v,ie=b,j=w,F=x,G=N):(I=h,T=m,V=v,X=_,ie=w,j=b,F=N,G=x)),O===0)return null;const se=I/O,me=T/O,L=1/O,ee=V-se*Z,$=X-me*Z,be=ie-se*K,we=j-me*K,Ce=F-se*fe,te=G-me*fe,he=Ce*we-te*be,Re=ee*te-$*Ce,tt=be*$-we*ee;if(l){if(he<0||Re<0||tt<0)return null}else if((he<0||Re<0||tt<0)&&(he>0||Re>0||tt>0))return null;const He=he+Re+tt;if(He===0)return null;const rt=L*(he*Z+Re*K+tt*fe);return(He>0?rt<0:rt>0)?null:this.at(rt/He,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class du extends xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r_=new pn,zr=new Bx,zc=new Op,s_=new ne,Hc=new ne,Gc=new ne,Vc=new ne,lh=new ne,kc=new ne,o_=new ne,Xc=new ne;class pi extends hi{constructor(e=new Wn,i=new du){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){kc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],_=c[m];g!==0&&(lh.fromBufferAttribute(_,e),f?kc.addScaledVector(lh,g):kc.addScaledVector(lh.sub(i),g))}i.add(kc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(zc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(zc,s_)===null||zr.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),zr.copy(e.ray).applyMatrix4(r_),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,zr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,w=v.length;b<w;b++){const S=v[b],x=f[S.materialIndex],N=Math.max(S.start,M.start),z=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let C=N,D=z;C<D;C+=3){const U=p.getX(C),I=p.getX(C+1),T=p.getX(C+2);l=Wc(this,x,e,s,h,g,_,U,I,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const N=p.getX(S),z=p.getX(S+1),C=p.getX(S+2);l=Wc(this,f,e,s,h,g,_,N,z,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=v.length;b<w;b++){const S=v[b],x=f[S.materialIndex],N=Math.max(S.start,M.start),z=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let C=N,D=z;C<D;C+=3){const U=C,I=C+1,T=C+2;l=Wc(this,x,e,s,h,g,_,U,I,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const N=S,z=S+1,C=S+2;l=Wc(this,f,e,s,h,g,_,N,z,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function db(r,e,i,s,l,c,f,p){let m;if(e.side===ti?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===Xr,p),m===null)return null;Xc.copy(p),Xc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Xc);return h<i.near||h>i.far?null:{distance:h,point:Xc.clone(),object:r}}function Wc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Hc),r.getVertexPosition(m,Gc),r.getVertexPosition(h,Vc);const g=db(r,e,i,s,Hc,Gc,Vc,o_);if(g){const _=new ne;Fi.getBarycoord(o_,Hc,Gc,Vc,_),l&&(g.uv=Fi.getInterpolatedAttribute(l,p,m,h,_,new ct)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,p,m,h,_,new ct)),f&&(g.normal=Fi.getInterpolatedAttribute(f,p,m,h,_,new ne),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new ne,materialIndex:0};Fi.getNormal(Hc,Gc,Vc,v.normal),g.face=v,g.barycoord=_}return g}class hb extends Hn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Pn,g=Pn,_,v){super(null,f,p,m,h,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new Op,pb=new ct(.5,.5),jc=new ne;class Fx{constructor(e=new gr,i=new gr,s=new gr,l=new gr,c=new gr,f=new gr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ea,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],_=c[5],v=c[6],M=c[7],b=c[8],w=c[9],S=c[10],x=c[11],N=c[12],z=c[13],C=c[14],D=c[15];if(l[0].setComponents(h-f,M-g,x-b,D-N).normalize(),l[1].setComponents(h+f,M+g,x+b,D+N).normalize(),l[2].setComponents(h+p,M+_,x+w,D+z).normalize(),l[3].setComponents(h-p,M-_,x-w,D-z).normalize(),s)l[4].setComponents(m,v,S,C).normalize(),l[5].setComponents(h-m,M-v,x-S,D-C).normalize();else if(l[4].setComponents(h-m,M-v,x-S,D-C).normalize(),i===ea)l[5].setComponents(h+m,M+v,x+S,D+C).normalize();else if(i===uu)l[5].setComponents(m,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=pb.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?e.max.x:e.min.x,jc.y=l.normal.y>0?e.max.y:e.min.y,jc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zx extends Hn{constructor(e=[],i=Wr,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mb extends Hn{constructor(e,i,s,l,c,f,p,m,h){super(e,i,s,l,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends Hn{constructor(e,i,s=ia,l,c,f,p=Pn,m=Pn,h,g=Oa,_=1){if(g!==Oa&&g!==kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class gb extends fl{constructor(e,i=ia,s=Wr,l,c,f=Pn,p=Pn,m,h=Oa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yt extends Wn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],_=[];let v=0,M=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(_,2));function b(w,S,x,N,z,C,D,U,I,T,O){const V=C/I,X=D/T,Z=C/2,ie=D/2,j=U/2,K=I+1,F=T+1;let G=0,fe=0;const se=new ne;for(let me=0;me<F;me++){const L=me*X-ie;for(let ee=0;ee<K;ee++){const $=ee*V-Z;se[w]=$*N,se[S]=L*z,se[x]=j,h.push(se.x,se.y,se.z),se[w]=0,se[S]=0,se[x]=U>0?1:-1,g.push(se.x,se.y,se.z),_.push(ee/I),_.push(1-me/T),G+=1}}for(let me=0;me<T;me++)for(let L=0;L<I;L++){const ee=v+L+K*me,$=v+L+K*(me+1),be=v+(L+1)+K*(me+1),we=v+(L+1)+K*me;m.push(ee,$,we),m.push($,be,we),fe+=6}p.addGroup(M,fe,O),M+=fe,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ut extends Wn{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],M=[];let b=0;const w=[],S=s/2;let x=0;N(),f===!1&&(e>0&&z(!0),i>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(M,2));function N(){const C=new ne,D=new ne;let U=0;const I=(i-e)/s;for(let T=0;T<=c;T++){const O=[],V=T/c,X=V*(i-e)+e;for(let Z=0;Z<=l;Z++){const ie=Z/l,j=ie*m+p,K=Math.sin(j),F=Math.cos(j);D.x=X*K,D.y=-V*s+S,D.z=X*F,_.push(D.x,D.y,D.z),C.set(K,I,F).normalize(),v.push(C.x,C.y,C.z),M.push(ie,1-V),O.push(b++)}w.push(O)}for(let T=0;T<l;T++)for(let O=0;O<c;O++){const V=w[O][T],X=w[O+1][T],Z=w[O+1][T+1],ie=w[O][T+1];(e>0||O!==0)&&(g.push(V,X,ie),U+=3),(i>0||O!==c-1)&&(g.push(X,Z,ie),U+=3)}h.addGroup(x,U,0),x+=U}function z(C){const D=b,U=new ct,I=new ne;let T=0;const O=C===!0?e:i,V=C===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,S*V,0),v.push(0,V,0),M.push(.5,.5),b++;const X=b;for(let Z=0;Z<=l;Z++){const j=Z/l*m+p,K=Math.cos(j),F=Math.sin(j);I.x=O*F,I.y=S*V,I.z=O*K,_.push(I.x,I.y,I.z),v.push(0,V,0),U.x=K*.5+.5,U.y=F*.5*V+.5,M.push(U.x,U.y),b++}for(let Z=0;Z<l;Z++){const ie=D+Z,j=X+Z;C===!0?g.push(j,j+1,ie):g.push(j+1,j,ie),T+=3}h.addGroup(x,T,C===!0?1:2),x+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yr extends ut{constructor(e=1,i=1,s=32,l=1,c=!1,f=0,p=Math.PI*2){super(0,e,i,s,l,c,f,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p}}static fromJSON(e){return new Yr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pp extends Wn{constructor(e=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=Tt(l,0,Math.PI*2);const c=[],f=[],p=[],m=[],h=[],g=1/i,_=new ne,v=new ct,M=new ne,b=new ne,w=new ne;let S=0,x=0;for(let N=0;N<=e.length-1;N++)switch(N){case 0:S=e[N+1].x-e[N].x,x=e[N+1].y-e[N].y,M.x=x*1,M.y=-S,M.z=x*0,w.copy(M),M.normalize(),m.push(M.x,M.y,M.z);break;case e.length-1:m.push(w.x,w.y,w.z);break;default:S=e[N+1].x-e[N].x,x=e[N+1].y-e[N].y,M.x=x*1,M.y=-S,M.z=x*0,b.copy(M),M.x+=w.x,M.y+=w.y,M.z+=w.z,M.normalize(),m.push(M.x,M.y,M.z),w.copy(b)}for(let N=0;N<=i;N++){const z=s+N*g*l,C=Math.sin(z),D=Math.cos(z);for(let U=0;U<=e.length-1;U++){_.x=e[U].x*C,_.y=e[U].y,_.z=e[U].x*D,f.push(_.x,_.y,_.z),v.x=N/i,v.y=U/(e.length-1),p.push(v.x,v.y);const I=m[3*U+0]*C,T=m[3*U+1],O=m[3*U+0]*D;h.push(I,T,O)}}for(let N=0;N<i;N++)for(let z=0;z<e.length-1;z++){const C=z+N*e.length,D=C,U=C+e.length,I=C+e.length+1,T=C+1;c.push(D,U,T),c.push(I,T,U)}this.setIndex(c),this.setAttribute("position",new fn(f,3)),this.setAttribute("uv",new fn(p,2)),this.setAttribute("normal",new fn(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.points,e.segments,e.phiStart,e.phiLength)}}class gl extends Wn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,_=e/p,v=i/m,M=[],b=[],w=[],S=[];for(let x=0;x<g;x++){const N=x*v-f;for(let z=0;z<h;z++){const C=z*_-c;b.push(C,-N,0),w.push(0,0,1),S.push(z/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<p;N++){const z=N+h*x,C=N+h*(x+1),D=N+1+h*(x+1),U=N+1+h*x;M.push(z,C,U),M.push(C,D,U)}this.setIndex(M),this.setAttribute("position",new fn(b,3)),this.setAttribute("normal",new fn(w,3)),this.setAttribute("uv",new fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends Wn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let h=0;const g=[],_=new ne,v=new ne,M=[],b=[],w=[],S=[];for(let x=0;x<=s;x++){const N=[],z=x/s,C=f+z*p,D=e*Math.cos(C),U=Math.sqrt(e*e-D*D);let I=0;x===0&&f===0?I=.5/i:x===s&&m===Math.PI&&(I=-.5/i);for(let T=0;T<=i;T++){const O=T/i,V=l+O*c;_.x=-U*Math.cos(V),_.y=D,_.z=U*Math.sin(V),b.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),S.push(O+I,1-z),N.push(h++)}g.push(N)}for(let x=0;x<s;x++)for(let N=0;N<i;N++){const z=g[x][N+1],C=g[x][N],D=g[x+1][N],U=g[x+1][N+1];(x!==0||f>0)&&M.push(z,C,U),(x!==s-1||m<Math.PI)&&M.push(C,D,U)}this.setIndex(M),this.setAttribute("position",new fn(b,3)),this.setAttribute("normal",new fn(w,3)),this.setAttribute("uv",new fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mi extends Wn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],g=[],_=[],v=new ne,M=new ne,b=new ne;for(let w=0;w<=s;w++){const S=f+w/s*p;for(let x=0;x<=l;x++){const N=x/l*c;M.x=(e+i*Math.cos(S))*Math.cos(N),M.y=(e+i*Math.cos(S))*Math.sin(N),M.z=i*Math.sin(S),h.push(M.x,M.y,M.z),v.x=e*Math.cos(N),v.y=e*Math.sin(N),b.subVectors(M,v).normalize(),g.push(b.x,b.y,b.z),_.push(x/l),_.push(w/s)}}for(let w=1;w<=s;w++)for(let S=1;S<=l;S++){const x=(l+1)*w+S-1,N=(l+1)*(w-1)+S-1,z=(l+1)*(w-1)+S,C=(l+1)*w+S;m.push(x,N,C),m.push(N,z,C)}this.setIndex(m),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Zs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(l_(l))l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(l_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const s=Zs(r[i]);for(const l in s)e[l]=s[l]}return e}function l_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function vb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Gx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const _b={clone:Zs,merge:Xn};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=vb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new wt().setHex(l.value);break;case"v2":this.uniforms[s].value=new ct().fromArray(l.value);break;case"v3":this.uniforms[s].value=new ne().fromArray(l.value);break;case"v4":this.uniforms[s].value=new un().fromArray(l.value);break;case"m3":this.uniforms[s].value=new lt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new pn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yb extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mb extends xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc=new ne,Yc=new $s,Zi=new ne;class Vx extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qc,Yc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Yc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(qc,Yc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Yc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ne,c_=new ct,u_=new ct;class wi extends Vx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(Gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,i){return this.getViewBounds(e,c_,u_),i.subVectors(u_,c_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Gd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kx extends Vx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Fs=-90,zs=1;class bb extends hi{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Fs,zs,e,i);l.layers=this.layers,this.add(l);const c=new wi(Fs,zs,e,i);c.layers=this.layers,this.add(c);const f=new wi(Fs,zs,e,i);f.layers=this.layers,this.add(f);const p=new wi(Fs,zs,e,i);p.layers=this.layers,this.add(p);const m=new wi(Fs,zs,e,i);m.layers=this.layers,this.add(m);const h=new wi(Fs,zs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Tb extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const f_=new pn;class Ab{constructor(e,i,s=0,l=1/0){this.ray=new Bx(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Up,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Dt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return f_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f_),this}intersectObject(e,i=!0,s=[]){return sp(e,this,s,i),s.sort(d_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)sp(e[l],this,s,i);return s.sort(d_),s}}function d_(r,e){return r.distance-e.distance}function sp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)sp(c[f],e,i,!0)}}class Rb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Hp=class Hp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Hp.prototype.isMatrix2=!0;let h_=Hp;function p_(r,e,i,s){const l=wb(s);switch(i){case Cx:return r*e;case Dx:return r*e/l.components*l.byteLength;case Rp:return r*e/l.components*l.byteLength;case jr:return r*e*2/l.components*l.byteLength;case wp:return r*e*2/l.components*l.byteLength;case Nx:return r*e*3/l.components*l.byteLength;case zi:return r*e*4/l.components*l.byteLength;case Cp:return r*e*4/l.components*l.byteLength;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Lh:return Math.max(r,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(r,8)*Math.max(e,8)/2;case Uh:case Oh:case Ih:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ph:case su:case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $h:case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ou:case ap:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wb(r){switch(r){case Ci:case Tx:return{byteLength:1,components:1};case cl:case Ax:case aa:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case ia:case bp:case $i:return{byteLength:4,components:1};case Rx:case wx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);function Xx(){let r=null,e=!1,i=null,s=null;function l(c,f){s=r.requestAnimationFrame(l),i(c,f)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Cb(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,h,g),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const g=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,g);else{_.sort((M,b)=>M.start-b.start);let v=0;for(let M=1;M<_.length;M++){const b=_[v],w=_[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let M=0,b=_.length;M<b;M++){const w=_[M];r.bufferSubData(h,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ib=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sT="gl_FragColor = linearToOutputTexel( gl_FragColor );",oT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,MT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ET=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,UT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Nb,alphahash_pars_fragment:Db,alphamap_fragment:Lb,alphamap_pars_fragment:Ub,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:Ib,aomap_pars_fragment:Bb,batching_pars_vertex:Fb,batching_vertex:zb,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:eT,defaultnormal_vertex:tT,displacementmap_pars_vertex:nT,displacementmap_vertex:iT,emissivemap_fragment:aT,emissivemap_pars_fragment:rT,colorspace_fragment:sT,colorspace_pars_fragment:oT,envmap_fragment:lT,envmap_common_pars_fragment:cT,envmap_pars_fragment:uT,envmap_pars_vertex:fT,envmap_physical_pars_fragment:MT,envmap_vertex:dT,fog_vertex:hT,fog_pars_vertex:pT,fog_fragment:mT,fog_pars_fragment:gT,gradientmap_pars_fragment:vT,lightmap_pars_fragment:_T,lights_lambert_fragment:xT,lights_lambert_pars_fragment:ST,lights_pars_begin:yT,lights_toon_fragment:ET,lights_toon_pars_fragment:bT,lights_phong_fragment:TT,lights_phong_pars_fragment:AT,lights_physical_fragment:RT,lights_physical_pars_fragment:wT,lights_fragment_begin:CT,lights_fragment_maps:NT,lights_fragment_end:DT,lightprobes_pars_fragment:LT,logdepthbuf_fragment:UT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:IT,map_fragment:BT,map_pars_fragment:FT,map_particle_fragment:zT,map_particle_pars_fragment:HT,metalnessmap_fragment:GT,metalnessmap_pars_fragment:VT,morphinstance_vertex:kT,morphcolor_vertex:XT,morphnormal_vertex:WT,morphtarget_pars_vertex:jT,morphtarget_vertex:qT,normal_fragment_begin:YT,normal_fragment_maps:ZT,normal_pars_fragment:KT,normal_pars_vertex:QT,normal_vertex:JT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:eA,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:nA,iridescence_pars_fragment:iA,opaque_fragment:aA,packing:rA,premultiplied_alpha_fragment:sA,project_vertex:oA,dithering_fragment:lA,dithering_pars_fragment:cA,roughnessmap_fragment:uA,roughnessmap_pars_fragment:fA,shadowmap_pars_fragment:dA,shadowmap_pars_vertex:hA,shadowmap_vertex:pA,shadowmask_pars_fragment:mA,skinbase_vertex:gA,skinning_pars_vertex:vA,skinning_vertex:_A,skinnormal_vertex:xA,specularmap_fragment:SA,specularmap_pars_fragment:yA,tonemapping_fragment:MA,tonemapping_pars_fragment:EA,transmission_fragment:bA,transmission_pars_fragment:TA,uv_pars_fragment:AA,uv_pars_vertex:RA,uv_vertex:wA,worldpos_vertex:CA,background_vert:NA,background_frag:DA,backgroundCube_vert:LA,backgroundCube_frag:UA,cube_vert:OA,cube_frag:PA,depth_vert:IA,depth_frag:BA,distance_vert:FA,distance_frag:zA,equirect_vert:HA,equirect_frag:GA,linedashed_vert:VA,linedashed_frag:kA,meshbasic_vert:XA,meshbasic_frag:WA,meshlambert_vert:jA,meshlambert_frag:qA,meshmatcap_vert:YA,meshmatcap_frag:ZA,meshnormal_vert:KA,meshnormal_frag:QA,meshphong_vert:JA,meshphong_frag:$A,meshphysical_vert:e2,meshphysical_frag:t2,meshtoon_vert:n2,meshtoon_frag:i2,points_vert:a2,points_frag:r2,shadow_vert:s2,shadow_frag:o2,sprite_vert:l2,sprite_frag:c2},ze={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Qi={basic:{uniforms:Xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Xn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Xn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Xn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Xn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Xn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Xn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Xn([ze.common,ze.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Xn([ze.lights,ze.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Qi.physical={uniforms:Xn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Zc={r:0,b:0,g:0},u2=new pn,Wx=new lt;Wx.set(-1,0,0,0,1,0,0,0,1);function f2(r,e,i,s,l,c){const f=new wt(0);let p=l===!0?0:1,m,h,g=null,_=0,v=null;function M(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){const C=N.backgroundBlurriness>0;z=e.get(z,C)}return z}function b(N){let z=!1;const C=M(N);C===null?S(f,p):C&&C.isColor&&(S(C,1),z=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(N,z){const C=M(z);C&&(C.isCubeTexture||C.mapping===_u)?(h===void 0&&(h=new pi(new yt(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Zs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u2.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Wx),h.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Gt,(g!==C||_!==C.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,g=C,_=C.version,v=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new pi(new gl(2,2),new Vi({name:"BackgroundMaterial",uniforms:Zs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,z){N.getRGB(Zc,Gx(r)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,z,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,z=1){f.set(N),p=z,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(f,p)},render:b,addToRenderList:w,dispose:x}}function d2(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function p(X,Z,ie,j,K){let F=!1;const G=_(X,j,ie,Z);c!==G&&(c=G,h(c.object)),F=M(X,j,ie,K),F&&b(X,j,ie,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,C(X,Z,ie,j),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return r.createVertexArray()}function h(X){return r.bindVertexArray(X)}function g(X){return r.deleteVertexArray(X)}function _(X,Z,ie,j){const K=j.wireframe===!0;let F=s[Z.id];F===void 0&&(F={},s[Z.id]=F);const G=X.isInstancedMesh===!0?X.id:0;let fe=F[G];fe===void 0&&(fe={},F[G]=fe);let se=fe[ie.id];se===void 0&&(se={},fe[ie.id]=se);let me=se[K];return me===void 0&&(me=v(m()),se[K]=me),me}function v(X){const Z=[],ie=[],j=[];for(let K=0;K<i;K++)Z[K]=0,ie[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ie,attributeDivisors:j,object:X,attributes:{},index:null}}function M(X,Z,ie,j){const K=c.attributes,F=Z.attributes;let G=0;const fe=ie.getAttributes();for(const se in fe)if(fe[se].location>=0){const L=K[se];let ee=F[se];if(ee===void 0&&(se==="instanceMatrix"&&X.instanceMatrix&&(ee=X.instanceMatrix),se==="instanceColor"&&X.instanceColor&&(ee=X.instanceColor)),L===void 0||L.attribute!==ee||ee&&L.data!==ee.data)return!0;G++}return c.attributesNum!==G||c.index!==j}function b(X,Z,ie,j){const K={},F=Z.attributes;let G=0;const fe=ie.getAttributes();for(const se in fe)if(fe[se].location>=0){let L=F[se];L===void 0&&(se==="instanceMatrix"&&X.instanceMatrix&&(L=X.instanceMatrix),se==="instanceColor"&&X.instanceColor&&(L=X.instanceColor));const ee={};ee.attribute=L,L&&L.data&&(ee.data=L.data),K[se]=ee,G++}c.attributes=K,c.attributesNum=G,c.index=j}function w(){const X=c.newAttributes;for(let Z=0,ie=X.length;Z<ie;Z++)X[Z]=0}function S(X){x(X,0)}function x(X,Z){const ie=c.newAttributes,j=c.enabledAttributes,K=c.attributeDivisors;ie[X]=1,j[X]===0&&(r.enableVertexAttribArray(X),j[X]=1),K[X]!==Z&&(r.vertexAttribDivisor(X,Z),K[X]=Z)}function N(){const X=c.newAttributes,Z=c.enabledAttributes;for(let ie=0,j=Z.length;ie<j;ie++)Z[ie]!==X[ie]&&(r.disableVertexAttribArray(ie),Z[ie]=0)}function z(X,Z,ie,j,K,F,G){G===!0?r.vertexAttribIPointer(X,Z,ie,K,F):r.vertexAttribPointer(X,Z,ie,j,K,F)}function C(X,Z,ie,j){w();const K=j.attributes,F=ie.getAttributes(),G=Z.defaultAttributeValues;for(const fe in F){const se=F[fe];if(se.location>=0){let me=K[fe];if(me===void 0&&(fe==="instanceMatrix"&&X.instanceMatrix&&(me=X.instanceMatrix),fe==="instanceColor"&&X.instanceColor&&(me=X.instanceColor)),me!==void 0){const L=me.normalized,ee=me.itemSize,$=e.get(me);if($===void 0)continue;const be=$.buffer,we=$.type,Ce=$.bytesPerElement,te=we===r.INT||we===r.UNSIGNED_INT||me.gpuType===bp;if(me.isInterleavedBufferAttribute){const he=me.data,Re=he.stride,tt=me.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<se.locationSize;He++)x(se.location+He,he.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<se.locationSize;He++)S(se.location+He);r.bindBuffer(r.ARRAY_BUFFER,be);for(let He=0;He<se.locationSize;He++)z(se.location+He,ee/se.locationSize,we,L,Re*Ce,(tt+ee/se.locationSize*He)*Ce,te)}else{if(me.isInstancedBufferAttribute){for(let he=0;he<se.locationSize;he++)x(se.location+he,me.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let he=0;he<se.locationSize;he++)S(se.location+he);r.bindBuffer(r.ARRAY_BUFFER,be);for(let he=0;he<se.locationSize;he++)z(se.location+he,ee/se.locationSize,we,L,ee*Ce,ee/se.locationSize*he*Ce,te)}}else if(G!==void 0){const L=G[fe];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(se.location,L);break;case 3:r.vertexAttrib3fv(se.location,L);break;case 4:r.vertexAttrib4fv(se.location,L);break;default:r.vertexAttrib1fv(se.location,L)}}}}N()}function D(){O();for(const X in s){const Z=s[X];for(const ie in Z){const j=Z[ie];for(const K in j){const F=j[K];for(const G in F)g(F[G].object),delete F[G];delete j[K]}}delete s[X]}}function U(X){if(s[X.id]===void 0)return;const Z=s[X.id];for(const ie in Z){const j=Z[ie];for(const K in j){const F=j[K];for(const G in F)g(F[G].object),delete F[G];delete j[K]}}delete s[X.id]}function I(X){for(const Z in s){const ie=s[Z];for(const j in ie){const K=ie[j];if(K[X.id]===void 0)continue;const F=K[X.id];for(const G in F)g(F[G].object),delete F[G];delete K[X.id]}}}function T(X){for(const Z in s){const ie=s[Z],j=X.isInstancedMesh===!0?X.id:0,K=ie[j];if(K!==void 0){for(const F in K){const G=K[F];for(const fe in G)g(G[fe].object),delete G[fe];delete K[F]}delete ie[j],Object.keys(ie).length===0&&delete s[Z]}}}function O(){V(),f=!0,c!==l&&(c=l,h(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:V,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:S,disableUnusedAttributes:N}}function h2(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,g){g!==0&&(r.drawArraysInstanced(s,m,h,g),i.update(h,s,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,g);let v=0;for(let M=0;M<g;M++)v+=h[M];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function p2(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==zi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ci&&I!==$i&&!T&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(at("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:C,maxSamples:D,samples:U}}function m2(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new gr,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||s!==0||l;return l=v,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,M){const b=_.clippingPlanes,w=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!l||b===null||b.length===0||c&&!S)c?g(null):h();else{const N=c?0:s,z=N*4;let C=x.clippingState||null;m.value=C,C=g(b,v,z,M);for(let D=0;D!==z;++D)C[D]=i[D];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,v,M,b){const w=_!==null?_.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const x=M+w*4,N=v.matrixWorldInverse;p.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let z=0,C=M;z!==w;++z,C+=4)f.copy(_[z]).applyMatrix4(N,p),f.normal.toArray(S,C),S[C+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}const ks=4,g2=6,v2=20,_2=256,nl=new kx,m_=new wt;let ch=null,uh=0,fh=0,dh=!1;const x2=new ne,Gr=new ne;class g_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=x2}=c;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Wr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:aa,format:zi,colorSpace:lu,depthBuffer:!1},l=v_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=S2(c)),this._blurMaterial=M2(c,e,i),this._ggxMaterial=y2(c,e,i)}return l}_compileMaterial(e){const i=new pi(new Wn,e);this._renderer.compile(i,nl)}_sceneToCubeUV(e,i,s,l,c){const m=new wi(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(m_),_.toneMapping=ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new yt,new du({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let x=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,x=!0):(S.color.copy(m_),x=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,h[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):C===1?(m.up.set(0,0,h[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,h[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const D=this._cubeSize;Hs(l,C*D,z>2?D:0,D,D),_.setRenderTarget(l),x&&_.render(w,m),_.render(e,m)}_.toneMapping=M,_.autoClear=v,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Wr||e.mapping===Ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Hs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,nl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=h*1.25,M=_*v,{_lodMax:b}=this,w=this._sizeLods[s],S=3*w*(s>b-ks?s-b+ks:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Hs(c,S,x,3*w,2*w),l.setRenderTarget(c),l.render(p,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Hs(e,S,x,3*w,2*w),l.setRenderTarget(e),l.render(p,nl)}_blur(e,i,s,l){const c=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,s,f),this._blurPass(c,e,s,s,f)}_blurPass(e,i,s,l,c){const f=this._renderer,p=this._blurMaterial,m=this._lodMeshes[l];m.material=p;const h=p.uniforms;h.envMap.value=e.texture,h.sigma.value=c,h.mipInt.value=this._lodMax-s;const g=this._sizeLods[l],_=3*g*(l>this._lodMax-ks?l-this._lodMax+ks:0),v=4*(this._cubeSize-g);Hs(i,_,v,3*g,2*g),f.setRenderTarget(i),f.render(m,nl)}}function S2(r){const e=[],i=[];let s=r;const l=r-ks+1+g2;for(let c=0;c<l;c++){const f=Math.pow(2,s);e.push(f);const p=1/(f-2),m=-p,h=1+p,g=[m,m,h,m,h,h,m,m,h,h,m,h],_=6,v=6,M=3,b=new Float32Array(M*v*_),w=new Float32Array(M*v*_);for(let x=0;x<_;x++){const N=x%3*2/3-1,z=x>2?0:-1,C=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];b.set(C,M*v*x);for(let D=0;D<v;D++){const U=g[D*2]*2-1,I=g[D*2+1]*2-1;x===0?Gr.set(1,I,U):x===1?Gr.set(-U,1,-I):x===2?Gr.set(-U,I,1):x===3?Gr.set(-1,I,-U):x===4?Gr.set(-U,-1,I):Gr.set(U,I,-1),Gr.toArray(w,(x*v+D)*M)}}const S=new Wn;S.setAttribute("position",new La(b,M)),S.setAttribute("outputDirection",new La(w,M)),i.push(new pi(S,null)),s>ks&&s--}return{lodMeshes:i,sizeLods:e}}function v_(r,e,i){const s=new Gi(r,e,i);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hs(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function y2(r,e,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function M2(r,e,i){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:v2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function __(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function x_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jx extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new yt(5,5,5),c=new Vi({name:"CubemapFromEquirect",uniforms:Zs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Na});c.uniforms.tEquirect.value=i;const f=new pi(l,c),p=i.minFilter;return i.minFilter===Vr&&(i.minFilter=zn),new bb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function E2(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,M=!1){return v==null?null:M?f(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===Bd||M===Fd)if(e.has(v)){const b=e.get(v).texture;return p(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new jx(b.height);return w.fromEquirectangularTexture(r,v),e.set(v,w),v.addEventListener("dispose",h),p(w.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const M=v.mapping,b=M===Bd||M===Fd,w=M===Wr||M===Ys;if(b||w){let S=i.get(v);const x=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new g_(r)),S=b?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const N=v.image;return b&&N&&N.height>0||w&&N&&m(N)?(s===null&&(s=new g_(r)),S=b?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function p(v,M){return M===Bd?v.mapping=Wr:M===Fd&&(v.mapping=Ys),v}function m(v){let M=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&M++;return M===b}function h(v){const M=v.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function g(v){const M=v.target;M.removeEventListener("dispose",g);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function b2(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xs("WebGLRenderer: "+s+" extension not supported."),l}}}function T2(r,e,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function h(_){const v=[],M=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const N=M.array;w=M.version;for(let z=0,C=N.length;z<C;z+=3){const D=N[z+0],U=N[z+1],I=N[z+2];v.push(D,U,U,I,I,D)}}else{const N=b.array;w=b.version;for(let z=0,C=N.length/3-1;z<C;z+=3){const D=z+0,U=z+1,I=z+2;v.push(D,U,U,I,I,D)}}const S=new(b.count>=65535?Ix:Px)(v,1);S.version=w;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function A2(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,v){r.drawElements(s,v,c,_*f),i.update(v,s,1)}function h(_,v,M){M!==0&&(r.drawElementsInstanced(s,v,c,_*f,M),i.update(v,s,M))}function g(_,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,_,0,M);let w=0;for(let S=0;S<M;S++)w+=v[S];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function R2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Dt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function w2(r,e,i){const s=new WeakMap,l=new un;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(p);if(v===void 0||v.count!==_){let V=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",V)};var M=V;v!==void 0&&v.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),S===!0&&(C=3);let D=p.attributes.position.count*C,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*U*4*_),T=new Ux(I,D,U,_);T.type=$i,T.needsUpdate=!0;const O=C*4;for(let X=0;X<_;X++){const Z=x[X],ie=N[X],j=z[X],K=D*U*4*X;for(let F=0;F<Z.count;F++){const G=F*O;b===!0&&(l.fromBufferAttribute(Z,F),I[K+G+0]=l.x,I[K+G+1]=l.y,I[K+G+2]=l.z,I[K+G+3]=0),w===!0&&(l.fromBufferAttribute(ie,F),I[K+G+4]=l.x,I[K+G+5]=l.y,I[K+G+6]=l.z,I[K+G+7]=0),S===!0&&(l.fromBufferAttribute(j,F),I[K+G+8]=l.x,I[K+G+9]=l.y,I[K+G+10]=l.z,I[K+G+11]=j.itemSize===4?l.w:1)}}v={count:_,texture:T,size:new ct(D,U)},s.set(p,v),p.addEventListener("dispose",V)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function C2(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,_=h.geometry,v=e.get(h,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return v}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const N2={[vx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[xx]:"CINEON_TONE_MAPPING",[Sx]:"ACES_FILMIC_TONE_MAPPING",[Mx]:"AGX_TONE_MAPPING",[Ex]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function D2(r,e,i,s,l,c){const f=new Gi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,m=null;const h=new Wn;h.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fn([0,2,0,0,2,0],2));const g=new yb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new pi(h,g),v=new kx(-1,1,1,-1,0,1);let M=null,b=null,w=!1,S,x=null,N=[],z=!1;this.setSize=function(C,D){f.setSize(C,D),p!==null&&p.setSize(C,D),m!==null&&m.setSize(C,D);for(let U=0;U<N.length;U++){const I=N[U];I.setSize&&I.setSize(C,D)}},this.setEffects=function(C){N=C,z=N.length>0&&N[0].isRenderPass===!0;const D=f.width,U=f.height;N.length>0&&p===null&&(p=new Gi(D,U,{type:aa,depthBuffer:!1,stencilBuffer:!1}),m=new Gi(D,U,{type:aa,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<N.length;I++){const T=N[I];T.setSize&&T.setSize(D,U)}},this.begin=function(C,D){if(w||C.toneMapping===ta&&N.length===0)return!1;if(x=D,D!==null){const U=D.width,I=D.height;(f.width!==U||f.height!==I)&&this.setSize(U,I)}return z===!1&&C.setRenderTarget(f),S=C.toneMapping,C.toneMapping=ta,!0},this.hasRenderPass=function(){return z},this.end=function(C,D){C.toneMapping=S,w=!0;let U=f,I=p;for(let T=0;T<N.length;T++){const O=N[T];O.enabled!==!1&&(O.render(C,I,U,D),O.needsSwap!==!1&&(U=I,I=I===p?m:p))}if(M!==C.outputColorSpace||b!==C.toneMapping){M=C.outputColorSpace,b=C.toneMapping,g.defines={},Rt.getTransfer(M)===Gt&&(g.defines.SRGB_TRANSFER="");const T=N2[b];T&&(g.defines[T]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(x),C.render(_,v),x=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){f.dispose(),p!==null&&p.dispose(),m!==null&&m.dispose(),h.dispose(),g.dispose()}}const qx=new Hn,op=new fl(1,1),Yx=new Ux,Zx=new QE,Kx=new zx,S_=[],y_=[],M_=new Float32Array(16),E_=new Float32Array(9),b_=new Float32Array(4);function to(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=S_[l];if(c===void 0&&(c=new Float32Array(l),S_[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function An(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function yu(r,e){let i=y_[e];i===void 0&&(i=new Int32Array(e),y_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function L2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function U2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2fv(this.addr,e),An(i,e)}}function O2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;r.uniform3fv(this.addr,e),An(i,e)}}function P2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4fv(this.addr,e),An(i,e)}}function I2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;b_.set(s),r.uniformMatrix2fv(this.addr,!1,b_),An(i,s)}}function B2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;E_.set(s),r.uniformMatrix3fv(this.addr,!1,E_),An(i,s)}}function F2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;M_.set(s),r.uniformMatrix4fv(this.addr,!1,M_),An(i,s)}}function z2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function H2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2iv(this.addr,e),An(i,e)}}function G2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3iv(this.addr,e),An(i,e)}}function V2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4iv(this.addr,e),An(i,e)}}function k2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function X2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2uiv(this.addr,e),An(i,e)}}function W2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3uiv(this.addr,e),An(i,e)}}function j2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4uiv(this.addr,e),An(i,e)}}function q2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(op.compareFunction=i.isReversedDepthBuffer()?Dp:Np,c=op):c=qx,i.setTexture2D(e||c,l)}function Y2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Zx,l)}function Z2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Kx,l)}function K2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Yx,l)}function Q2(r){switch(r){case 5126:return L2;case 35664:return U2;case 35665:return O2;case 35666:return P2;case 35674:return I2;case 35675:return B2;case 35676:return F2;case 5124:case 35670:return z2;case 35667:case 35671:return H2;case 35668:case 35672:return G2;case 35669:case 35673:return V2;case 5125:return k2;case 36294:return X2;case 36295:return W2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return K2}}function J2(r,e){r.uniform1fv(this.addr,e)}function $2(r,e){const i=to(e,this.size,2);r.uniform2fv(this.addr,i)}function eR(r,e){const i=to(e,this.size,3);r.uniform3fv(this.addr,i)}function tR(r,e){const i=to(e,this.size,4);r.uniform4fv(this.addr,i)}function nR(r,e){const i=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function iR(r,e){const i=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function aR(r,e){const i=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function rR(r,e){r.uniform1iv(this.addr,e)}function sR(r,e){r.uniform2iv(this.addr,e)}function oR(r,e){r.uniform3iv(this.addr,e)}function lR(r,e){r.uniform4iv(this.addr,e)}function cR(r,e){r.uniform1uiv(this.addr,e)}function uR(r,e){r.uniform2uiv(this.addr,e)}function fR(r,e){r.uniform3uiv(this.addr,e)}function dR(r,e){r.uniform4uiv(this.addr,e)}function hR(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=op:f=qx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function pR(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Zx,c[f])}function mR(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Kx,c[f])}function gR(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Yx,c[f])}function vR(r){switch(r){case 5126:return J2;case 35664:return $2;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return aR;case 5124:case 35670:return rR;case 35667:case 35671:return sR;case 35668:case 35672:return oR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return fR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class _R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Q2(i.type)}}class xR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vR(i.type)}}class SR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function T_(r,e){r.seq.push(e),r.map[e.id]=e}function yR(r,e,i){const s=r.name,l=s.length;for(hh.lastIndex=0;;){const c=hh.exec(s),f=hh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){T_(i,h===void 0?new _R(p,r,e):new xR(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new SR(p),T_(i,_)),i=_}}}class au{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);yR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function A_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const MR=37297;let ER=0;function bR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const R_=new lt;function TR(r){Rt._getMatrix(R_,Rt.workingColorSpace,r);const e=`mat3( ${R_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function w_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+bR(r.getShaderSource(e),p)}else return c}function AR(r,e){const i=TR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const RR={[vx]:"Linear",[_x]:"Reinhard",[xx]:"Cineon",[Sx]:"ACESFilmic",[Mx]:"AgX",[Ex]:"Neutral",[yx]:"Custom"};function wR(r,e){const i=RR[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new ne;function CR(){Rt.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function DR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function LR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function sl(r){return r!==""}function C_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(UR,PR)}const OR=new Map;function PR(r,e){let i=gt[e];if(i===void 0){const s=OR.get(e);if(s!==void 0)i=gt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lp(i)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(r){return r.replace(IR,BR)}function BR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function L_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FR={[$c]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function zR(r){return FR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HR={[Wr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[_u]:"ENVMAP_TYPE_CUBE_UV"};function GR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":HR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const VR={[Ys]:"ENVMAP_MODE_REFRACTION"};function kR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":VR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XR={[gx]:"ENVMAP_BLENDING_MULTIPLY",[wE]:"ENVMAP_BLENDING_MIX",[CE]:"ENVMAP_BLENDING_ADD"};function WR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":XR[r.combine]||"ENVMAP_BLENDING_NONE"}function jR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function qR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=zR(i),h=GR(i),g=kR(i),_=WR(i),v=jR(i),M=NR(i),b=DR(c),w=l.createProgram();let S,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),x.length>0&&(x+=`
`)):(S=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),x=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ta?"#define TONE_MAPPING":"",i.toneMapping!==ta?gt.tonemapping_pars_fragment:"",i.toneMapping!==ta?wR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,AR("linearToOutputTexel",i.outputColorSpace),CR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=lp(f),f=C_(f,i),f=N_(f,i),p=lp(p),p=C_(p,i),p=N_(p,i),f=D_(f),p=D_(p),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=N+S+f,C=N+x+p,D=A_(l,l.VERTEX_SHADER,z),U=A_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,D),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(X){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(w)||"",ie=l.getShaderInfoLog(D)||"",j=l.getShaderInfoLog(U)||"",K=Z.trim(),F=ie.trim(),G=j.trim();let fe=!0,se=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,D,U);else{const me=w_(l,D,"vertex"),L=w_(l,U,"fragment");Dt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+K+`
`+me+`
`+L)}else K!==""?at("WebGLProgram: Program Info Log:",K):(F===""||G==="")&&(se=!1);se&&(X.diagnostics={runnable:fe,programLog:K,vertexShader:{log:F,prefix:S},fragmentShader:{log:G,prefix:x}})}l.deleteShader(D),l.deleteShader(U),T=new au(l,w),O=LR(l,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(w,MR)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ER++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=U,this}let YR=0;class ZR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new KR(e),i.set(e,s)),s}}class KR{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function QR(r){return r===jr||r===su||r===ou}function JR(r,e,i,s,l,c){const f=new Up,p=new ZR,m=new Set,h=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,O,V,X,Z,ie){const j=X.fog,K=Z.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,fe=e.get(T.envMap||F,G),se=fe&&fe.mapping===_u?fe.image.height:null,me=M[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const L=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ee=L!==void 0?L.length:0;let $=0;K.morphAttributes.position!==void 0&&($=1),K.morphAttributes.normal!==void 0&&($=2),K.morphAttributes.color!==void 0&&($=3);let be,we,Ce,te;if(me){const Vt=Qi[me];be=Vt.vertexShader,we=Vt.fragmentShader}else{be=T.vertexShader,we=T.fragmentShader;const Vt=p.getVertexShaderStage(T),Ct=p.getFragmentShaderStage(T);p.update(T,Vt,Ct),Ce=Vt.id,te=Ct.id}const he=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),tt=Z.isInstancedMesh===!0,He=Z.isBatchedMesh===!0,rt=!!T.map,rn=!!T.matcap,st=!!fe,Mt=!!T.aoMap,Bt=!!T.lightMap,_t=!!T.bumpMap&&T.wireframe===!1,Yt=!!T.normalMap,sn=!!T.displacementMap,Rn=!!T.emissiveMap,Zt=!!T.metalnessMap,on=!!T.roughnessMap,Y=T.anisotropy>0,Ft=T.clearcoat>0,Ot=T.dispersion>0,B=T.retroreflectivity>0,E=T.iridescence>0,J=T.sheen>0,ce=T.transmission>0,ve=Y&&!!T.anisotropyMap,Ne=Ft&&!!T.clearcoatMap,Oe=Ft&&!!T.clearcoatNormalMap,_e=Ft&&!!T.clearcoatRoughnessMap,xe=E&&!!T.iridescenceMap,De=E&&!!T.iridescenceThicknessMap,Xe=J&&!!T.sheenColorMap,Be=J&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Je=!!T.specularColorMap,$e=!!T.specularIntensityMap,it=ce&&!!T.transmissionMap,q=ce&&!!T.thicknessMap,Le=!!T.gradientMap,ye=!!T.alphaMap,Ue=T.alphaTest>0,Ge=!!T.alphaHash,Te=!!T.extensions;let Qe=ta;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const qe={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:be,fragmentShader:we,defines:T.defines,customVertexShaderID:Ce,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:He,batchingColor:He&&Z._colorsTexture!==null,instancing:tt,instancingColor:tt&&Z.instanceColor!==null,instancingMorph:tt&&Z.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:rt,matcap:rn,envMap:st,envMapMode:st&&fe.mapping,envMapCubeUVHeight:se,aoMap:Mt,lightMap:Bt,bumpMap:_t,normalMap:Yt,displacementMap:sn,emissiveMap:Rn,normalMapObjectSpace:Yt&&T.normalMapType===LE,normalMapTangentSpace:Yt&&T.normalMapType===Xv,packedNormalMap:Yt&&T.normalMapType===Xv&&QR(T.normalMap.format),metalnessMap:Zt,roughnessMap:on,anisotropy:Y,anisotropyMap:ve,clearcoat:Ft,clearcoatMap:Ne,clearcoatNormalMap:Oe,clearcoatRoughnessMap:_e,dispersion:Ot,retroreflection:B,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:J,sheenColorMap:Xe,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:Je,specularIntensityMap:$e,transmission:ce,transmissionMap:it,thicknessMap:q,gradientMap:Le,opaque:T.transparent===!1&&T.blending===ol&&T.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ue,alphaHash:Ge,combine:T.combine,mapUv:rt&&b(T.map.channel),aoMapUv:Mt&&b(T.aoMap.channel),lightMapUv:Bt&&b(T.lightMap.channel),bumpMapUv:_t&&b(T.bumpMap.channel),normalMapUv:Yt&&b(T.normalMap.channel),displacementMapUv:sn&&b(T.displacementMap.channel),emissiveMapUv:Rn&&b(T.emissiveMap.channel),metalnessMapUv:Zt&&b(T.metalnessMap.channel),roughnessMapUv:on&&b(T.roughnessMap.channel),anisotropyMapUv:ve&&b(T.anisotropyMap.channel),clearcoatMapUv:Ne&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(T.sheenRoughnessMap.channel),specularMapUv:Pe&&b(T.specularMap.channel),specularColorMapUv:Je&&b(T.specularColorMap.channel),specularIntensityMapUv:$e&&b(T.specularIntensityMap.channel),transmissionMapUv:it&&b(T.transmissionMap.channel),thicknessMapUv:q&&b(T.thicknessMap.channel),alphaMapUv:ye&&b(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Yt||Y),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!K.attributes.uv&&(rt||ye),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:$,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:rt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:Rn&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ji,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Te&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&T.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)O.push(V),O.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(x(O,T),N(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function N(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.retroreflection&&f.enable(24),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function z(T){const O=M[T.type];let V;if(O){const X=Qi[O];V=_b.clone(X.uniforms)}else V=T.uniforms;return V}function C(T,O){let V=g.get(O);return V!==void 0?++V.usedTimes:(V=new qR(r,O,T,l),h.push(V),g.set(O,V)),V}function D(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function I(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:z,acquireProgram:C,releaseProgram:D,releaseShaderCache:U,programs:h,dispose:I}}function $R(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function e3(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function U_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function O_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function p(v,M,b,w,S,x){let N=r[e];return N===void 0?(N={id:v.id,object:v,geometry:M,material:b,materialVariant:f(v),groupOrder:w,renderOrder:v.renderOrder,z:S,group:x},r[e]=N):(N.id=v.id,N.object=v,N.geometry=M,N.material=b,N.materialVariant=f(v),N.groupOrder=w,N.renderOrder=v.renderOrder,N.z=S,N.group=x),e++,N}function m(v,M,b,w,S,x,N){N.reversedDepth===!0&&(S=-S);const z=p(v,M,b,w,S,x);b.transmission>0?s.push(z):b.transparent===!0?l.push(z):i.push(z)}function h(v,M,b,w,S,x){const N=p(v,M,b,w,S,x);b.transmission>0?s.unshift(N):b.transparent===!0?l.unshift(N):i.unshift(N)}function g(v,M){i.length>1&&i.sort(v||e3),s.length>1&&s.sort(M||U_),l.length>1&&l.sort(M||U_)}function _(){for(let v=e,M=r.length;v<M;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:g}}function t3(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new O_,r.set(s,[f])):l>=c.length?(f=new O_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function n3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new ne,color:new wt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=i,i}}}function i3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let a3=0;function r3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function s3(r){const e=new n3,i=i3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ne);const l=new ne,c=new pn,f=new pn;function p(h){let g=0,_=0,v=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let M=0,b=0,w=0,S=0,x=0,N=0,z=0,C=0,D=0,U=0,I=0,T=0,O=0,V=0;h.sort(r3);for(let Z=0,ie=h.length;Z<ie;Z++){const j=h[Z],K=j.color,F=j.intensity,G=j.distance;let fe=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===jr?fe=j.shadow.map.texture:fe=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)g+=K.r*F,_+=K.g*F,v+=K.b*F;else if(j.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(j.sh.coefficients[se],F);V++}else if(j.isSunLight){const se=e.get(j);if(se.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const me=j.shadow,L=i.get(j);L.shadowIntensity=me.intensity,L.shadowBias=me.bias,L.shadowNormalBias=me.normalBias,L.shadowRadius=me.radius,L.shadowMapSize.copy(me.mapSize).multiply(me.getFrameExtents()),s.sunShadow[b]=L,s.sunShadowMap[b]=fe;const ee=me.getViewportCount();for(let $=0;$<ee;$++)s.sunShadowMatrix[w+$]=me.getMatrix($),s.sunShadowCascade[w+$]=me._cascadeData[$];w+=ee,b++}s.sun[M]=se,M++}else if(j.isDirectionalLight){const se=e.get(j);if(se.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const me=j.shadow,L=i.get(j);L.shadowIntensity=me.intensity,L.shadowBias=me.bias,L.shadowNormalBias=me.normalBias,L.shadowRadius=me.radius,L.shadowMapSize=me.mapSize,s.directionalShadow[S]=L,s.directionalShadowMap[S]=fe,s.directionalShadowMatrix[S]=j.shadow.matrix,D++}s.directional[S]=se,S++}else if(j.isSpotLight){const se=e.get(j);se.position.setFromMatrixPosition(j.matrixWorld),se.color.copy(K).multiplyScalar(F),se.distance=G,se.coneCos=Math.cos(j.angle),se.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),se.decay=j.decay,s.spot[N]=se;const me=j.shadow;if(j.map&&(s.spotLightMap[T]=j.map,T++,me.updateMatrices(j),j.castShadow&&O++),s.spotLightMatrix[N]=me.matrix,j.castShadow){const L=i.get(j);L.shadowIntensity=me.intensity,L.shadowBias=me.bias,L.shadowNormalBias=me.normalBias,L.shadowRadius=me.radius,L.shadowMapSize=me.mapSize,s.spotShadow[N]=L,s.spotShadowMap[N]=fe,I++}N++}else if(j.isRectAreaLight){const se=e.get(j);se.color.copy(K).multiplyScalar(F),se.halfWidth.set(j.width*.5,0,0),se.halfHeight.set(0,j.height*.5,0),s.rectArea[z]=se,z++}else if(j.isPointLight){const se=e.get(j);if(se.color.copy(j.color).multiplyScalar(j.intensity),se.distance=j.distance,se.decay=j.decay,j.castShadow){const me=j.shadow,L=i.get(j);L.shadowIntensity=me.intensity,L.shadowBias=me.bias,L.shadowNormalBias=me.normalBias,L.shadowRadius=me.radius,L.shadowMapSize=me.mapSize,L.shadowCameraNear=me.camera.near,L.shadowCameraFar=me.camera.far,s.pointShadow[x]=L,s.pointShadowMap[x]=fe,s.pointShadowMatrix[x]=j.shadow.matrix,U++}s.point[x]=se,x++}else if(j.isHemisphereLight){const se=e.get(j);se.skyColor.copy(j.color).multiplyScalar(F),se.groundColor.copy(j.groundColor).multiplyScalar(F),s.hemi[C]=se,C++}}z>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const X=s.hash;(X.sunLength!==M||X.directionalLength!==S||X.pointLength!==x||X.spotLength!==N||X.rectAreaLength!==z||X.hemiLength!==C||X.numSunShadows!==b||X.numDirectionalShadows!==D||X.numPointShadows!==U||X.numSpotShadows!==I||X.numSpotMaps!==T||X.numLightProbes!==V)&&(s.sun.length=M,s.directional.length=S,s.spot.length=N,s.rectArea.length=z,s.point.length=x,s.hemi.length=C,s.sunShadow.length=b,s.sunShadowMap.length=b,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.directionalShadowMatrix.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+T-O,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=V,X.sunLength=M,X.directionalLength=S,X.pointLength=x,X.spotLength=N,X.rectAreaLength=z,X.hemiLength=C,X.numSunShadows=b,X.numDirectionalShadows=D,X.numPointShadows=U,X.numSpotShadows=I,X.numSpotMaps=T,X.numLightProbes=V,s.version=a3++)}function m(h,g){let _=0,v=0,M=0,b=0,w=0,S=0;const x=g.matrixWorldInverse;for(let N=0,z=h.length;N<z;N++){const C=h[N];if(C.isSunLight){const D=s.sun[_];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(x),_++}else if(C.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),v++}else if(C.isSpotLight){const D=s.spot[b];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),b++}else if(C.isRectAreaLight){const D=s.rectArea[w];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(x),f.identity(),c.copy(C.matrixWorld),c.premultiply(x),f.extractRotation(c),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),w++}else if(C.isPointLight){const D=s.point[M];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(x),M++}else if(C.isHemisphereLight){const D=s.hemi[S];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(x),S++}}}return{setup:p,setupView:m,state:s}}function P_(r){const e=new s3(r),i=[],s=[],l=[];function c(v){_.camera=v,i.length=0,s.length=0,l.length=0}function f(v){i.push(v)}function p(v){s.push(v)}function m(v){l.push(v)}function h(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function o3(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new P_(r),e.set(l,[p])):c>=f.length?(p=new P_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const l3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,u3=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],f3=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],I_=new pn,il=new ne,ph=new ne;function d3(r,e,i){let s=new Fx;const l=new ct,c=new ct,f=new un,p=new Mb,m=new Eb,h={},g=i.maxTextureSize,_={[Xr]:ti,[ti]:Xr,[Ji]:Ji},v=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:l3,fragmentShader:c3}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new Wn;b.setAttribute("position",new La(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new pi(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let x=this.type;this.render=function(U,I,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;this.type===cE&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$c);const O=r.getRenderTarget(),V=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Na),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=x!==this.type;ie&&I.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(K=>K.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,K=U.length;j<K;j++){const F=U[j],G=F.shadow;if(G===void 0){at("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const fe=G.getFrameExtents();l.multiply(fe),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/fe.x),l.x=c.x*fe.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/fe.y),l.y=c.y*fe.y,G.mapSize.y=c.y));const se=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=se,G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===rl){if(F.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gi(l.x,l.y,{format:jr,type:aa,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new fl(l.x,l.y,$i),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Oa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else F.isPointLight?(G.map=new jx(l.x),G.map.depthTexture=new gb(l.x,ia)):(G.map=new Gi(l.x,l.y),G.map.depthTexture=new fl(l.x,l.y,ia)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Oa,this.type===$c?(G.map.depthTexture.compareFunction=se?Dp:Np,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==l.x||G.map.height!==l.y)&&G.map.setSize(l.x,l.y);const me=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();F.isPointLight!==!0&&G.updateMatrices(F,T);for(let L=0;L<me;L++){const ee=G.getCamera(L);if(F.isPointLight){const $=G.camera,be=G.matrix,we=F.distance||$.far;we!==$.far&&($.far=we,$.updateProjectionMatrix()),il.setFromMatrixPosition(F.matrixWorld),$.position.copy(il),ph.copy($.position),ph.add(u3[L]),$.up.copy(f3[L]),$.lookAt(ph),$.updateMatrixWorld(),be.makeTranslation(-il.x,-il.y,-il.z),I_.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(I_,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,L),r.clear();else{L===0&&(r.setRenderTarget(G.map),r.clear());const $=G.getViewport(L);f.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),Z.viewport(f)}s=G.getFrustum(L),C(I,T,ee,F,this.type)}G.isPointLightShadow!==!0&&this.type===rl&&N(G,T),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(O,V,X)};function N(U,I){const T=e.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null?U.mapPass=new Gi(l.x,l.y,{format:jr,type:aa}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(I,null,T,v,w,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value.set(U.map.width,U.map.height),M.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(I,null,T,M,w,null)}function z(U,I,T,O){let V=null;const X=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(X!==void 0)V=X;else if(V=T.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=V.uuid,ie=I.uuid;let j=h[Z];j===void 0&&(j={},h[Z]=j);let K=j[ie];K===void 0&&(K=V.clone(),j[ie]=K,I.addEventListener("dispose",D)),V=K}if(V.visible=I.visible,V.wireframe=I.wireframe,O===rl?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:_[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=r.properties.get(V);Z.light=T}return V}function C(U,I,T,O,V){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===rl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ie=e.update(U),j=U.material;if(Array.isArray(j)){const K=ie.groups;for(let F=0,G=K.length;F<G;F++){const fe=K[F],se=j[fe.materialIndex];if(se&&se.visible){const me=z(U,se,O,V);U.onBeforeShadow(r,U,I,T,ie,me,fe),r.renderBufferDirect(T,null,ie,me,U,fe),U.onAfterShadow(r,U,I,T,ie,me,fe)}}}else if(j.visible){const K=z(U,j,O,V);U.onBeforeShadow(r,U,I,T,ie,K,null),r.renderBufferDirect(T,null,ie,K,U,null),U.onAfterShadow(r,U,I,T,ie,K,null)}}const Z=U.children;for(let ie=0,j=Z.length;ie<j;ie++)C(Z[ie],I,T,O,V)}function D(U){U.target.removeEventListener("dispose",D);for(const T in h){const O=h[T],V=U.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function h3(r,e){function i(){let q=!1;const Le=new un;let ye=null;const Ue=new un(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!q&&(r.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){q=Ge},setClear:function(Ge,Te,Qe,qe,Vt){Vt===!0&&(Ge*=qe,Te*=qe,Qe*=qe),Le.set(Ge,Te,Qe,qe),Ue.equals(Le)===!1&&(r.clearColor(Ge,Te,Qe,qe),Ue.copy(Le))},reset:function(){q=!1,ye=null,Ue.set(-1,0,0,0)}}}function s(){let q=!1,Le=!1,ye=null,Ue=null,Ge=null;return{setReversed:function(Te){if(Le!==Te){const Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Le=Te;const qe=Ge;Ge=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(Te){Te?he(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!q&&(r.depthMask(Te),ye=Te)},setFunc:function(Te){if(Le&&(Te=XE[Te]),Ue!==Te){switch(Te){case Sh:r.depthFunc(r.NEVER);break;case yh:r.depthFunc(r.ALWAYS);break;case Mh:r.depthFunc(r.LESS);break;case ll:r.depthFunc(r.LEQUAL);break;case Eh:r.depthFunc(r.EQUAL);break;case bh:r.depthFunc(r.GEQUAL);break;case Th:r.depthFunc(r.GREATER);break;case Ah:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Te}},setLocked:function(Te){q=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,Le&&(Te=1-Te),r.clearDepth(Te))},reset:function(){q=!1,ye=null,Ue=null,Ge=null,Le=!1}}}function l(){let q=!1,Le=null,ye=null,Ue=null,Ge=null,Te=null,Qe=null,qe=null,Vt=null;return{setTest:function(Ct){q||(Ct?he(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!q&&(r.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,jn,ni){(ye!==Ct||Ue!==jn||Ge!==ni)&&(r.stencilFunc(Ct,jn,ni),ye=Ct,Ue=jn,Ge=ni)},setOp:function(Ct,jn,ni){(Te!==Ct||Qe!==jn||qe!==ni)&&(r.stencilOp(Ct,jn,ni),Te=Ct,Qe=jn,qe=ni)},setLocked:function(Ct){q=Ct},setClear:function(Ct){Vt!==Ct&&(r.clearStencil(Ct),Vt=Ct)},reset:function(){q=!1,Le=null,ye=null,Ue=null,Ge=null,Te=null,Qe=null,qe=null,Vt=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},_={},v={},M=new WeakMap,b=[],w=null,S=!1,x=null,N=null,z=null,C=null,D=null,U=null,I=null,T=new wt(0,0,0),O=0,V=!1,X=null,Z=null,ie=null,j=null,K=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,fe=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(se)[1]),G=fe>=1):se.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),G=fe>=2);let me=null,L={};const ee=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),be=new un().fromArray(ee),we=new un().fromArray($);function Ce(q,Le,ye,Ue){const Ge=new Uint8Array(4),Te=r.createTexture();r.bindTexture(q,Te),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ye;Qe++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Le+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Te}const te={};te[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),he(r.DEPTH_TEST),f.setFunc(ll),_t(!1),Yt(Hv),he(r.CULL_FACE),Mt(Na);function he(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Re(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function tt(q,Le){return v[q]!==Le?(r.bindFramebuffer(q,Le),v[q]=Le,q===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),q===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function He(q,Le){let ye=b,Ue=!1;if(q){ye=M.get(Le),ye===void 0&&(ye=[],M.set(Le,ye));const Ge=q.textures;if(ye.length!==Ge.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Qe=Ge.length;Te<Qe;Te++)ye[Te]=r.COLOR_ATTACHMENT0+Te;ye.length=Ge.length,Ue=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(ye)}function rt(q){return w!==q?(r.useProgram(q),w=q,!0):!1}const rn={[Vs]:r.FUNC_ADD,[fE]:r.FUNC_SUBTRACT,[dE]:r.FUNC_REVERSE_SUBTRACT};rn[hE]=r.MIN,rn[pE]=r.MAX;const st={[mE]:r.ZERO,[gE]:r.ONE,[vE]:r.SRC_COLOR,[px]:r.SRC_ALPHA,[EE]:r.SRC_ALPHA_SATURATE,[yE]:r.DST_COLOR,[xE]:r.DST_ALPHA,[_E]:r.ONE_MINUS_SRC_COLOR,[mx]:r.ONE_MINUS_SRC_ALPHA,[ME]:r.ONE_MINUS_DST_COLOR,[SE]:r.ONE_MINUS_DST_ALPHA,[bE]:r.CONSTANT_COLOR,[TE]:r.ONE_MINUS_CONSTANT_COLOR,[AE]:r.CONSTANT_ALPHA,[RE]:r.ONE_MINUS_CONSTANT_ALPHA};function Mt(q,Le,ye,Ue,Ge,Te,Qe,qe,Vt,Ct){if(q===Na){S===!0&&(Re(r.BLEND),S=!1);return}if(S===!1&&(he(r.BLEND),S=!0),q!==uE){if(q!==x||Ct!==V){if((N!==Vs||D!==Vs)&&(r.blendEquation(r.FUNC_ADD),N=Vs,D=Vs),Ct)switch(q){case ol:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gv:r.blendFunc(r.ONE,r.ONE);break;case Vv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",q);break}else switch(q){case ol:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vv:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kv:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",q);break}z=null,C=null,U=null,I=null,T.set(0,0,0),O=0,x=q,V=Ct}return}Ge=Ge||Le,Te=Te||ye,Qe=Qe||Ue,(Le!==N||Ge!==D)&&(r.blendEquationSeparate(rn[Le],rn[Ge]),N=Le,D=Ge),(ye!==z||Ue!==C||Te!==U||Qe!==I)&&(r.blendFuncSeparate(st[ye],st[Ue],st[Te],st[Qe]),z=ye,C=Ue,U=Te,I=Qe),(qe.equals(T)===!1||Vt!==O)&&(r.blendColor(qe.r,qe.g,qe.b,Vt),T.copy(qe),O=Vt),x=q,V=!1}function Bt(q,Le){q.side===Ji?Re(r.CULL_FACE):he(r.CULL_FACE);let ye=q.side===ti;Le&&(ye=!ye),_t(ye),q.blending===ol&&q.transparent===!1?Mt(Na):Mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ue=q.stencilWrite;p.setTest(Ue),Ue&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Rn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(q){X!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),X=q)}function Yt(q){q!==oE?(he(r.CULL_FACE),q!==Z&&(q===Hv?r.cullFace(r.BACK):q===lE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),Z=q}function sn(q){q!==ie&&(G&&r.lineWidth(q),ie=q)}function Rn(q,Le,ye){q?(he(r.POLYGON_OFFSET_FILL),(j!==Le||K!==ye)&&(j=Le,K=ye,f.getReversed()&&(Le=-Le),r.polygonOffset(Le,ye))):Re(r.POLYGON_OFFSET_FILL)}function Zt(q){q?he(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function on(q){q===void 0&&(q=r.TEXTURE0+F-1),me!==q&&(r.activeTexture(q),me=q)}function Y(q,Le,ye){ye===void 0&&(me===null?ye=r.TEXTURE0+F-1:ye=me);let Ue=L[ye];Ue===void 0&&(Ue={type:void 0,texture:void 0},L[ye]=Ue),(Ue.type!==q||Ue.texture!==Le)&&(me!==ye&&(r.activeTexture(ye),me=ye),r.bindTexture(q,Le||te[q]),Ue.type=q,Ue.texture=Le)}function Ft(){const q=L[me];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ot(){try{r.compressedTexImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function E(){try{r.texSubImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function J(){try{r.texSubImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function Ne(){try{r.texStorage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function Oe(){try{r.texStorage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function _e(){try{r.texImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function xe(){try{r.texImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function De(q){return _[q]!==void 0?_[q]:r.getParameter(q)}function Xe(q,Le){_[q]!==Le&&(r.pixelStorei(q,Le),_[q]=Le)}function Be(q){be.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),be.copy(q))}function Pe(q){we.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),we.copy(q))}function Je(q,Le){let ye=h.get(Le);ye===void 0&&(ye=new WeakMap,h.set(Le,ye));let Ue=ye.get(q);Ue===void 0&&(Ue=r.getUniformBlockIndex(Le,q.name),ye.set(q,Ue))}function $e(q,Le){const Ue=h.get(Le).get(q);m.get(Le)!==Ue&&(r.uniformBlockBinding(Le,Ue,q.__bindingPointIndex),m.set(Le,Ue))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},me=null,L={},v={},M=new WeakMap,b=[],w=null,S=!1,x=null,N=null,z=null,C=null,D=null,U=null,I=null,T=new wt(0,0,0),O=0,V=!1,X=null,Z=null,ie=null,j=null,K=null,be.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:he,disable:Re,bindFramebuffer:tt,drawBuffers:He,useProgram:rt,setBlending:Mt,setMaterial:Bt,setFlipSided:_t,setCullFace:Yt,setLineWidth:sn,setPolygonOffset:Rn,setScissorTest:Zt,activeTexture:on,bindTexture:Y,unbindTexture:Ft,compressedTexImage2D:Ot,compressedTexImage3D:B,texImage2D:_e,texImage3D:xe,pixelStorei:Xe,getParameter:De,updateUBOMapping:Je,uniformBlockBinding:$e,texStorage2D:Ne,texStorage3D:Oe,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Be,viewport:Pe,reset:it}}function p3(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,g=new WeakMap,_=new Set;let v;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(B,E){return b?new OffscreenCanvas(B,E):fu("canvas")}function S(B,E,J){let ce=1;const ve=Ot(B);if((ve.width>J||ve.height>J)&&(ce=J/Math.max(ve.width,ve.height)),ce<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ne=Math.floor(ce*ve.width),Oe=Math.floor(ce*ve.height);v===void 0&&(v=w(Ne,Oe));const _e=E?w(Ne,Oe):v;return _e.width=Ne,_e.height=Oe,_e.getContext("2d").drawImage(B,0,0,Ne,Oe),at("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ne+"x"+Oe+")."),_e}else return"data"in B&&at("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),B;return B}function x(B){return B.generateMipmaps}function N(B){r.generateMipmap(B)}function z(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(B,E,J,ce,ve,Ne=!1){if(B!==null){if(r[B]!==void 0)return r[B];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Oe;ce&&(Oe=e.get("EXT_texture_norm16"),Oe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=E;if(E===r.RED&&(J===r.FLOAT&&(_e=r.R32F),J===r.HALF_FLOAT&&(_e=r.R16F),J===r.UNSIGNED_BYTE&&(_e=r.R8),J===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.R16_EXT),J===r.SHORT&&Oe&&(_e=Oe.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(_e=r.R8UI),J===r.UNSIGNED_SHORT&&(_e=r.R16UI),J===r.UNSIGNED_INT&&(_e=r.R32UI),J===r.BYTE&&(_e=r.R8I),J===r.SHORT&&(_e=r.R16I),J===r.INT&&(_e=r.R32I)),E===r.RG&&(J===r.FLOAT&&(_e=r.RG32F),J===r.HALF_FLOAT&&(_e=r.RG16F),J===r.UNSIGNED_BYTE&&(_e=r.RG8),J===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RG16_EXT),J===r.SHORT&&Oe&&(_e=Oe.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(_e=r.RG8UI),J===r.UNSIGNED_SHORT&&(_e=r.RG16UI),J===r.UNSIGNED_INT&&(_e=r.RG32UI),J===r.BYTE&&(_e=r.RG8I),J===r.SHORT&&(_e=r.RG16I),J===r.INT&&(_e=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),J===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),J===r.UNSIGNED_INT&&(_e=r.RGB32UI),J===r.BYTE&&(_e=r.RGB8I),J===r.SHORT&&(_e=r.RGB16I),J===r.INT&&(_e=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),J===r.UNSIGNED_INT&&(_e=r.RGBA32UI),J===r.BYTE&&(_e=r.RGBA8I),J===r.SHORT&&(_e=r.RGBA16I),J===r.INT&&(_e=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGB16_EXT),J===r.SHORT&&Oe&&(_e=Oe.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(_e=r.R11F_G11F_B10F)),E===r.RGBA){const xe=Ne?cu:Rt.getTransfer(ve);J===r.FLOAT&&(_e=r.RGBA32F),J===r.HALF_FLOAT&&(_e=r.RGBA16F),J===r.UNSIGNED_BYTE&&(_e=xe===Gt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGBA16_EXT),J===r.SHORT&&Oe&&(_e=Oe.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function D(B,E){let J;return B?E===null||E===ia||E===ul?J=r.DEPTH24_STENCIL8:E===$i?J=r.DEPTH32F_STENCIL8:E===cl&&(J=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ia||E===ul?J=r.DEPTH_COMPONENT24:E===$i?J=r.DEPTH_COMPONENT32F:E===cl&&(J=r.DEPTH_COMPONENT16),J}function U(B,E){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Pn&&B.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function I(B){const E=B.target;E.removeEventListener("dispose",I),O(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(B){const E=B.target;E.removeEventListener("dispose",T),X(E)}function O(B){const E=s.get(B);if(E.__webglInit===void 0)return;const J=B.source,ce=M.get(J);if(ce){const ve=ce[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&V(B),Object.keys(ce).length===0&&M.delete(J)}s.remove(B)}function V(B){const E=s.get(B);r.deleteTexture(E.__webglTexture);const J=B.source,ce=M.get(J);delete ce[E.__cacheKey],f.memory.textures--}function X(B){const E=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let ve=0;ve<E.__webglFramebuffer[ce].length;ve++)r.deleteFramebuffer(E.__webglFramebuffer[ce][ve]);else r.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)r.deleteFramebuffer(E.__webglFramebuffer[ce]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=B.textures;for(let ce=0,ve=J.length;ce<ve;ce++){const Ne=s.get(J[ce]);Ne.__webglTexture&&(r.deleteTexture(Ne.__webglTexture),f.memory.textures--),s.remove(J[ce])}s.remove(B)}let Z=0;function ie(){Z=0}function j(){return Z}function K(B){Z=B}function F(){const B=Z;return B>=l.maxTextures&&at("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+l.maxTextures),Z+=1,B}function G(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function fe(B,E){const J=s.get(B);if(B.isVideoTexture&&Y(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){const ce=B.image;if(ce===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,B,E);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function se(B,E){const J=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Re(J,B,E);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function me(B,E){const J=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Re(J,B,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function L(B,E){const J=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){tt(J,B,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const ee={[Rh]:r.REPEAT,[Ca]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},$={[Pn]:r.NEAREST,[NE]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[zd]:r.LINEAR_MIPMAP_NEAREST,[Vr]:r.LINEAR_MIPMAP_LINEAR},be={[OE]:r.NEVER,[zE]:r.ALWAYS,[PE]:r.LESS,[Np]:r.LEQUAL,[IE]:r.EQUAL,[Dp]:r.GEQUAL,[BE]:r.GREATER,[FE]:r.NOTEQUAL};function we(B,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===zd||E.magFilter===Cc||E.magFilter===Vr||E.minFilter===zn||E.minFilter===zd||E.minFilter===Cc||E.minFilter===Vr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,ee[E.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,ee[E.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,ee[E.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,$[E.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Cc&&E.minFilter!==Vr||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(B,E){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",I));const ce=E.source;let ve=M.get(ce);ve===void 0&&(ve={},M.set(ce,ve));const Ne=G(E);if(Ne!==B.__cacheKey){ve[Ne]===void 0&&(ve[Ne]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),ve[Ne].usedTimes++;const Oe=ve[B.__cacheKey];Oe!==void 0&&(ve[B.__cacheKey].usedTimes--,Oe.usedTimes===0&&V(E)),B.__cacheKey=Ne,B.__webglTexture=ve[Ne].texture}return J}function te(B,E,J){return Math.floor(Math.floor(B/J)/E)}function he(B,E,J,ce){const Ne=B.updateRanges;if(Ne.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,ce,E.data);else{Ne.sort((Xe,Be)=>Xe.start-Be.start);let Oe=0;for(let Xe=1;Xe<Ne.length;Xe++){const Be=Ne[Oe],Pe=Ne[Xe],Je=Be.start+Be.count,$e=te(Pe.start,E.width,4),it=te(Be.start,E.width,4);Pe.start<=Je+1&&$e===it&&te(Pe.start+Pe.count-1,E.width,4)===$e?Be.count=Math.max(Be.count,Pe.start+Pe.count-Be.start):(++Oe,Ne[Oe]=Pe)}Ne.length=Oe+1;const _e=i.getParameter(r.UNPACK_ROW_LENGTH),xe=i.getParameter(r.UNPACK_SKIP_PIXELS),De=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Xe=0,Be=Ne.length;Xe<Be;Xe++){const Pe=Ne[Xe],Je=Math.floor(Pe.start/4),$e=Math.ceil(Pe.count/4),it=Je%E.width,q=Math.floor(Je/E.width),Le=$e,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,it),i.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,it,q,Le,ye,J,ce,E.data)}B.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,_e),i.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Re(B,E,J){let ce=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=r.TEXTURE_3D);const ve=Ce(B,E),Ne=E.source;i.bindTexture(ce,B.__webglTexture,r.TEXTURE0+J);const Oe=s.get(Ne);if(Ne.version!==Oe.__version||ve===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Rt.getPrimaries(Rt.workingColorSpace),Ue=E.colorSpace===vr?null:Rt.getPrimaries(E.colorSpace),Ge=E.colorSpace===vr||ye===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=S(E.image,!1,l.maxTextureSize);xe=Ft(E,xe);const De=c.convert(E.format,E.colorSpace),Xe=c.convert(E.type);let Be=C(E.internalFormat,De,Xe,E.normalized,E.colorSpace,E.isVideoTexture);we(ce,E);let Pe;const Je=E.mipmaps,$e=E.isVideoTexture!==!0,it=Oe.__version===void 0||ve===!0,q=Ne.dataReady,Le=U(E,xe);if(E.isDepthTexture)Be=D(E.format===kr,E.type),it&&($e?i.texStorage2D(r.TEXTURE_2D,1,Be,xe.width,xe.height):i.texImage2D(r.TEXTURE_2D,0,Be,xe.width,xe.height,0,De,Xe,null));else if(E.isDataTexture)if(Je.length>0){$e&&it&&i.texStorage2D(r.TEXTURE_2D,Le,Be,Je[0].width,Je[0].height);for(let ye=0,Ue=Je.length;ye<Ue;ye++)Pe=Je[ye],$e?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,De,Xe,Pe.data):i.texImage2D(r.TEXTURE_2D,ye,Be,Pe.width,Pe.height,0,De,Xe,Pe.data);E.generateMipmaps=!1}else $e?(it&&i.texStorage2D(r.TEXTURE_2D,Le,Be,xe.width,xe.height),q&&he(E,xe,De,Xe)):i.texImage2D(r.TEXTURE_2D,0,Be,xe.width,xe.height,0,De,Xe,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Be,Je[0].width,Je[0].height,xe.depth);for(let ye=0,Ue=Je.length;ye<Ue;ye++)if(Pe=Je[ye],E.format!==zi)if(De!==null)if($e){if(q)if(E.layerUpdates.size>0){const Ge=p_(Pe.width,Pe.height,E.format,E.type);for(const Te of E.layerUpdates){const Qe=Pe.data.subarray(Te*Ge/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Te,Pe.width,Pe.height,1,De,Qe)}}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,xe.depth,De,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Be,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,xe.depth,De,Xe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,Be,Pe.width,Pe.height,xe.depth,0,De,Xe,Pe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{$e&&it&&i.texStorage2D(r.TEXTURE_2D,Le,Be,Je[0].width,Je[0].height);for(let ye=0,Ue=Je.length;ye<Ue;ye++)Pe=Je[ye],E.format!==zi?De!==null?$e?q&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,Be,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,De,Xe,Pe.data):i.texImage2D(r.TEXTURE_2D,ye,Be,Pe.width,Pe.height,0,De,Xe,Pe.data)}else if(E.isDataArrayTexture)if($e){if(it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Be,xe.width,xe.height,xe.depth),q)if(E.layerUpdates.size>0){const ye=p_(xe.width,xe.height,E.format,E.type);for(const Ue of E.layerUpdates){const Ge=xe.data.subarray(Ue*ye/xe.data.BYTES_PER_ELEMENT,(Ue+1)*ye/xe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,xe.width,xe.height,1,De,Xe,Ge)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,De,Xe,xe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,De,Xe,xe.data);else if(E.isData3DTexture)$e?(it&&i.texStorage3D(r.TEXTURE_3D,Le,Be,xe.width,xe.height,xe.depth),q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,De,Xe,xe.data)):i.texImage3D(r.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,De,Xe,xe.data);else if(E.isFramebufferTexture){if(it)if($e)i.texStorage2D(r.TEXTURE_2D,Le,Be,xe.width,xe.height);else{let ye=xe.width,Ue=xe.height;for(let Ge=0;Ge<Le;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,Be,ye,Ue,0,De,Xe,null),ye>>=1,Ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),_.add(E),ye.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Te of _)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{const Ge=r.RGBA,Te=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Te,Qe,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if($e&&it){const ye=Ot(Je[0]);i.texStorage2D(r.TEXTURE_2D,Le,Be,ye.width,ye.height)}for(let ye=0,Ue=Je.length;ye<Ue;ye++)Pe=Je[ye],$e?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,De,Xe,Pe):i.texImage2D(r.TEXTURE_2D,ye,Be,De,Xe,Pe);E.generateMipmaps=!1}else if($e){if(it){const ye=Ot(xe);i.texStorage2D(r.TEXTURE_2D,Le,Be,ye.width,ye.height)}q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Xe,xe)}else i.texImage2D(r.TEXTURE_2D,0,Be,De,Xe,xe);x(E)&&N(ce),Oe.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function tt(B,E,J){if(E.image.length!==6)return;const ce=Ce(B,E),ve=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+J);const Ne=s.get(ve);if(ve.version!==Ne.__version||ce===!0){i.activeTexture(r.TEXTURE0+J);const Oe=Rt.getPrimaries(Rt.workingColorSpace),_e=E.colorSpace===vr?null:Rt.getPrimaries(E.colorSpace),xe=E.colorSpace===vr||Oe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Xe=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let Te=0;Te<6;Te++)!De&&!Xe?Be[Te]=S(E.image[Te],!0,l.maxCubemapSize):Be[Te]=Xe?E.image[Te].image:E.image[Te],Be[Te]=Ft(E,Be[Te]);const Pe=Be[0],Je=c.convert(E.format,E.colorSpace),$e=c.convert(E.type),it=C(E.internalFormat,Je,$e,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Le=Ne.__version===void 0||ce===!0,ye=ve.dataReady;let Ue=U(E,Pe);we(r.TEXTURE_CUBE_MAP,E);let Ge;if(De){q&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,it,Pe.width,Pe.height);for(let Te=0;Te<6;Te++){Ge=Be[Te].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const qe=Ge[Qe];E.format!==zi?Je!==null?q?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,qe.width,qe.height,Je,qe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,it,qe.width,qe.height,0,qe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,qe.width,qe.height,Je,$e,qe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,it,qe.width,qe.height,0,Je,$e,qe.data)}}}else{if(Ge=E.mipmaps,q&&Le){Ge.length>0&&Ue++;const Te=Ot(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,it,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Xe){q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Be[Te].width,Be[Te].height,Je,$e,Be[Te].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Be[Te].width,Be[Te].height,0,Je,$e,Be[Te].data);for(let Qe=0;Qe<Ge.length;Qe++){const Vt=Ge[Qe].image[Te].image;q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,Vt.width,Vt.height,Je,$e,Vt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,it,Vt.width,Vt.height,0,Je,$e,Vt.data)}}else{q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Je,$e,Be[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Je,$e,Be[Te]);for(let Qe=0;Qe<Ge.length;Qe++){const qe=Ge[Qe];q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,Je,$e,qe.image[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,it,Je,$e,qe.image[Te])}}}x(E)&&N(r.TEXTURE_CUBE_MAP),Ne.__version=ve.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function He(B,E,J,ce,ve,Ne){const Oe=c.convert(J.format,J.colorSpace),_e=c.convert(J.type),xe=C(J.internalFormat,Oe,_e,J.normalized,J.colorSpace),De=s.get(E),Xe=s.get(J);if(Xe.__renderTarget=E,!De.__hasExternalTextures){const Be=Math.max(1,E.width>>Ne),Pe=Math.max(1,E.height>>Ne);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,Ne,xe,Be,Pe,E.depth,0,Oe,_e,null):i.texImage2D(ve,Ne,xe,Be,Pe,0,Oe,_e,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),on(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,ve,Xe.__webglTexture,0,Zt(E)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,ve,Xe.__webglTexture,Ne),i.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(B,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,B),E.depthBuffer){const ce=E.depthTexture,ve=ce&&ce.isDepthTexture?ce.type:null,Ne=D(E.stencilBuffer,ve),Oe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;on(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(E),Ne,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(E),Ne,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,B)}else{const ce=E.textures;for(let ve=0;ve<ce.length;ve++){const Ne=ce[ve],Oe=c.convert(Ne.format,Ne.colorSpace),_e=c.convert(Ne.type),xe=C(Ne.internalFormat,Oe,_e,Ne.normalized,Ne.colorSpace);on(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(E),xe,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(E),xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function rn(B,E,J){const ce=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=s.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),we(r.TEXTURE_CUBE_MAP,E.depthTexture);const De=c.convert(E.depthTexture.format),Xe=c.convert(E.depthTexture.type);let Be;E.depthTexture.format===Oa?Be=r.DEPTH_COMPONENT24:E.depthTexture.format===kr&&(Be=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Be,E.width,E.height,0,De,Xe,null)}}else fe(E.depthTexture,0);const Ne=ve.__webglTexture,Oe=Zt(E),_e=ce?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,xe=E.depthTexture.format===kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oa)on(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,_e,Ne,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,xe,_e,Ne,0);else if(E.depthTexture.format===kr)on(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,_e,Ne,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,xe,_e,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(B){const E=s.get(B),J=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){const ce=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",ve)};ce.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=ce}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let ce=0;ce<6;ce++)rn(E.__webglFramebuffer[ce],B,ce);else{const ce=B.texture.mipmaps;ce&&ce.length>0?rn(E.__webglFramebuffer[0],B,0):rn(E.__webglFramebuffer,B,0)}else if(J){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=r.createRenderbuffer(),rt(E.__webglDepthbuffer[ce],B,!1);else{const ve=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ne)}}else{const ce=B.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),rt(E.__webglDepthbuffer,B,!1);else{const ve=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ne)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(B,E,J){const ce=s.get(B);E!==void 0&&He(ce.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&st(B)}function Bt(B){const E=B.texture,J=s.get(B),ce=s.get(E);B.addEventListener("dispose",T);const ve=B.textures,Ne=B.isWebGLCubeRenderTarget===!0,Oe=ve.length>1;if(Oe||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=E.version,f.memory.textures++),Ne){J.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[_e]=[];for(let xe=0;xe<E.mipmaps.length;xe++)J.__webglFramebuffer[_e][xe]=r.createFramebuffer()}else J.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)J.__webglFramebuffer[_e]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let _e=0,xe=ve.length;_e<xe;_e++){const De=s.get(ve[_e]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),f.memory.textures++)}if(B.samples>0&&on(B)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let _e=0;_e<ve.length;_e++){const xe=ve[_e];J.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[_e]);const De=c.convert(xe.format,xe.colorSpace),Xe=c.convert(xe.type),Be=C(xe.internalFormat,De,Xe,xe.normalized,xe.colorSpace,B.isXRRenderTarget===!0),Pe=Zt(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Be,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,J.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(J.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),we(r.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)He(J.__webglFramebuffer[_e][xe],B,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else He(J.__webglFramebuffer[_e],B,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(E)&&N(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let _e=0,xe=ve.length;_e<xe;_e++){const De=ve[_e],Xe=s.get(De);let Be=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Be=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,Xe.__webglTexture),we(Be,De),He(J.__webglFramebuffer,B,De,r.COLOR_ATTACHMENT0+_e,Be,0),x(De)&&N(Be)}i.unbindTexture()}else{let _e=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(_e=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(_e,ce.__webglTexture),we(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)He(J.__webglFramebuffer[xe],B,E,r.COLOR_ATTACHMENT0,_e,xe);else He(J.__webglFramebuffer,B,E,r.COLOR_ATTACHMENT0,_e,0);x(E)&&N(_e),i.unbindTexture()}B.depthBuffer&&st(B)}function _t(B){const E=B.textures;for(let J=0,ce=E.length;J<ce;J++){const ve=E[J];if(x(ve)){const Ne=z(B),Oe=s.get(ve).__webglTexture;i.bindTexture(Ne,Oe),N(Ne),i.unbindTexture()}}}const Yt=[],sn=[];function Rn(B){if(B.samples>0){if(on(B)===!1){const E=B.textures,J=B.width,ce=B.height;let ve=r.COLOR_BUFFER_BIT;const Ne=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(B),_e=E.length>1;if(_e)for(let De=0;De<E.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const xe=B.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let De=0;De<E.length;De++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Xe=s.get(E[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,J,ce,0,0,J,ce,ve,r.NEAREST),m===!0&&(Yt.length=0,sn.length=0,Yt.push(r.COLOR_ATTACHMENT0+De),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Yt.push(Ne),sn.push(Ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,sn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<E.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Xe=s.get(E[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Xe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&m){const E=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Zt(B){return Math.min(l.maxSamples,B.samples)}function on(B){const E=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(B){const E=f.render.frame;g.get(B)!==E&&(g.set(B,E),B.update())}function Ft(B,E){const J=B.colorSpace,ce=B.format,ve=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==lu&&J!==vr&&(Rt.getTransfer(J)===Gt?(ce!==zi||ve!==Ci)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",J)),E}function Ot(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=ie,this.getTextureUnits=j,this.setTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=se,this.setTexture3D=me,this.setTextureCube=L,this.rebindTextures=Mt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=He,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function m3(r,e){function i(s,l=vr){let c;const f=Rt.getTransfer(l);if(s===Ci)return r.UNSIGNED_BYTE;if(s===Tp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===wx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Tx)return r.BYTE;if(s===Ax)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===bp)return r.INT;if(s===ia)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===aa)return r.HALF_FLOAT;if(s===Cx)return r.ALPHA;if(s===Nx)return r.RGB;if(s===zi)return r.RGBA;if(s===Oa)return r.DEPTH_COMPONENT;if(s===kr)return r.DEPTH_STENCIL;if(s===Dx)return r.RED;if(s===Rp)return r.RED_INTEGER;if(s===jr)return r.RG;if(s===wp)return r.RG_INTEGER;if(s===Cp)return r.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===Nh||s===Dh||s===Lh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Oh||s===Ph||s===Ih||s===Bh||s===su||s===Fh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Uh||s===Oh)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ph)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ih)return c.COMPRESSED_R11_EAC;if(s===Bh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===su)return c.COMPRESSED_RG11_EAC;if(s===Fh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$h||s===ep||s===tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===$h)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ou||s===ap)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ou)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const g3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Hx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Vi({vertexShader:g3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new gl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x3 extends Zr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,_=null,v=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",S=new _3,x={},N=i.getContextAttributes();let z=null,C=null;const D=[],U=[],I=new ct;let T=null,O=null;const V=new wi;V.viewport=new un;const X=new wi;X.viewport=new un;const Z=[V,X],ie=new Tb;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=D[te];return he===void 0&&(he=new Yd,D[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=D[te];return he===void 0&&(he=new Yd,D[te]=he),he.getGripSpace()},this.getHand=function(te){let he=D[te];return he===void 0&&(he=new Yd,D[te]=he),he.getHandSpace()};function F(te){const he=U.indexOf(te.inputSource);if(he===-1)return;const Re=D[he];Re!==void 0&&(Re.update(te.inputSource,te.frame,h||f),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function G(){l.removeEventListener("select",F),l.removeEventListener("selectstart",F),l.removeEventListener("selectend",F),l.removeEventListener("squeeze",F),l.removeEventListener("squeezestart",F),l.removeEventListener("squeezeend",F),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",fe);for(let te=0;te<D.length;te++){const he=U[te];he!==null&&(U[te]=null,D[te].disconnect(he))}j=null,K=null,S.reset();for(const te in x)delete x[te];if(e.setRenderTarget(z),M=null,v=null,_=null,l=null,C=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),O!==null){const te=O.camera;te.fov=O.fov,te.zoom=O.zoom,te.updateProjectionMatrix(),O=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){p=te,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",F),l.addEventListener("selectstart",F),l.addEventListener("selectend",F),l.addEventListener("squeeze",F),l.addEventListener("squeezestart",F),l.addEventListener("squeezeend",F),l.addEventListener("end",G),l.addEventListener("inputsourceschange",fe),N.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,tt=null,He=null;N.depth&&(He=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=N.stencil?kr:Oa,tt=N.stencil?ul:ia);const rt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(rt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Gi(v.textureWidth,v.textureHeight,{format:zi,type:Ci,depthTexture:new fl(v.textureWidth,v.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Re={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Gi(M.framebufferWidth,M.framebufferHeight,{format:zi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function fe(te){for(let he=0;he<te.removed.length;he++){const Re=te.removed[he],tt=U.indexOf(Re);tt>=0&&(U[tt]=null,D[tt].disconnect(Re))}for(let he=0;he<te.added.length;he++){const Re=te.added[he];let tt=U.indexOf(Re);if(tt===-1){for(let rt=0;rt<D.length;rt++)if(rt>=U.length){U.push(Re),tt=rt;break}else if(U[rt]===null){U[rt]=Re,tt=rt;break}if(tt===-1)break}const He=D[tt];He&&He.connect(Re)}}const se=new ne,me=new ne;function L(te,he,Re){se.setFromMatrixPosition(he.matrixWorld),me.setFromMatrixPosition(Re.matrixWorld);const tt=se.distanceTo(me),He=he.projectionMatrix.elements,rt=Re.projectionMatrix.elements,rn=He[14]/(He[10]-1),st=He[14]/(He[10]+1),Mt=(He[9]+1)/He[5],Bt=(He[9]-1)/He[5],_t=(He[8]-1)/He[0],Yt=(rt[8]+1)/rt[0],sn=rn*_t,Rn=rn*Yt,Zt=tt/(-_t+Yt),on=Zt*-_t;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(on),te.translateZ(Zt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),He[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Y=rn+Zt,Ft=st+Zt,Ot=sn-on,B=Rn+(tt-on),E=Mt*st/Ft*Y,J=Bt*st/Ft*Y;te.projectionMatrix.makePerspective(Ot,B,E,J,Y,Ft),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ee(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let he=te.near,Re=te.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),ie.near=X.near=V.near=he,ie.far=X.far=V.far=Re,(j!==ie.near||K!==ie.far)&&(l.updateRenderState({depthNear:ie.near,depthFar:ie.far}),j=ie.near,K=ie.far),ie.layers.mask=te.layers.mask|6,V.layers.mask=ie.layers.mask&-5,X.layers.mask=ie.layers.mask&-3;const tt=te.parent,He=ie.cameras;ee(ie,tt);for(let rt=0;rt<He.length;rt++)ee(He[rt],tt);He.length===2?L(ie,V,X):ie.projectionMatrix.copy(V.projectionMatrix),O===null&&te.isPerspectiveCamera&&(O={camera:te,fov:te.fov,zoom:te.zoom}),$(te,ie,tt)};function $(te,he,Re){Re===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=rp*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ie)},this.getCameraTexture=function(te){return x[te]};let be=null;function we(te,he){if(g=he.getViewerPose(h||f),b=he,g!==null){const Re=g.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let tt=!1;Re.length!==ie.cameras.length&&(ie.cameras.length=0,tt=!0);for(let st=0;st<Re.length;st++){const Mt=Re[st];let Bt=null;if(M!==null)Bt=M.getViewport(Mt);else{const Yt=_.getViewSubImage(v,Mt);Bt=Yt.viewport,st===0&&(e.setRenderTargetTextures(C,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(C))}let _t=Z[st];_t===void 0&&(_t=new wi,_t.layers.enable(st),_t.viewport=new un,Z[st]=_t),_t.matrix.fromArray(Mt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Mt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),st===0&&(ie.matrix.copy(_t.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),tt===!0&&ie.cameras.push(_t)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const st=_.getDepthInformation(Re[0]);st&&st.isValid&&st.texture&&S.init(st,l.renderState)}if(He&&He.includes("camera-access")&&w){e.state.unbindTexture(),_=s.getBinding();for(let st=0;st<Re.length;st++){const Mt=Re[st].camera;if(Mt){let Bt=x[Mt];Bt||(Bt=new Hx,x[Mt]=Bt);const _t=_.getCameraImage(Mt);Bt.sourceTexture=_t}}}}for(let Re=0;Re<D.length;Re++){const tt=U[Re],He=D[Re];tt!==null&&He!==void 0&&He.update(tt,he,h||f)}be&&be(te,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),b=null}const Ce=new Xx;Ce.setAnimationLoop(we),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}}const S3=new pn,Qx=new lt;Qx.set(-1,0,0,0,1,0,0,0,1);function y3(r,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,Gx(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,N,z,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&M(S,x,C)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),w(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,N,z):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),z=N.envMap,C=N.envMapRotation;z&&(S.envMap.value=z,S.envMapRotation.value.setFromMatrix4(S3.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Qx),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,N,z){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=z*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function M3(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,D){const U=D.program;s.uniformBlockBinding(C,U)}function h(C,D){let U=l[C.id];U===void 0&&(S(C),U=g(C),l[C.id]=U,C.addEventListener("dispose",N));const I=D.program;s.updateUBOMapping(C,I);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const D=_();C.__bindingPointIndex=D;const U=r.createBuffer(),I=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,I,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function _(){for(let C=0;C<p;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const D=l[C.id],U=C.uniforms,I=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let T=0,O=U.length;T<O;T++){const V=U[T];if(Array.isArray(V))for(let X=0,Z=V.length;X<Z;X++)M(V[X],T,X,I);else M(V,T,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,D,U,I){if(w(C,D,U,I)===!0){const T=C.__offset,O=C.value;if(Array.isArray(O)){let V=0;for(let X=0;X<O.length;X++){const Z=O[X],ie=x(Z);b(Z,C.__data,V),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(V+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(O,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function b(C,D,U){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,U)}function w(C,D,U,I){const T=C.value,O=D+"_"+U;if(I[O]===void 0)return typeof T=="number"||typeof T=="boolean"?I[O]=T:ArrayBuffer.isView(T)?I[O]=T.slice():I[O]=T.clone(),!0;{const V=I[O];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return I[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function S(C){const D=C.uniforms;let U=0;const I=16;for(let O=0,V=D.length;O<V;O++){const X=Array.isArray(D[O])?D[O]:[D[O]];for(let Z=0,ie=X.length;Z<ie;Z++){const j=X[Z],K=Array.isArray(j.value)?j.value:[j.value];for(let F=0,G=K.length;F<G;F++){const fe=K[F],se=x(fe),me=U%I,L=me%se.boundary,ee=me+L;U+=L,ee!==0&&I-ee<se.storage&&(U+=I-ee),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=se.storage}}}const T=U%I;return T>0&&(U+=I-T),C.__size=U,C.__cache={},this}function x(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):at("WebGLRenderer: Unsupported uniform value type.",C),D}function N(C){const D=C.target;D.removeEventListener("dispose",N);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function z(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:h,dispose:z}}const E3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function b3(){return Ki===null&&(Ki=new hb(E3,16,16,jr,aa),Ki.name="DFG_LUT",Ki.minFilter=zn,Ki.magFilter=zn,Ki.wrapS=Ca,Ki.wrapT=Ca,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class T3{constructor(e={}){const{canvas:i=VE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=Ci}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const w=M,S=new Set([Cp,wp,Rp]),x=new Set([Ci,ia,cl,ul,Tp,Ap]),N=new Uint32Array(4),z=new Int32Array(4),C=new ne;let D=null,U=null;const I=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let X=!1,Z=null,ie=null,j=null,K=null;this._outputColorSpace=Ri;let F=0,G=0,fe=null,se=-1,me=null;const L=new un,ee=new un;let $=null;const be=new wt(0);let we=0,Ce=i.width,te=i.height,he=1,Re=null,tt=null;const He=new un(0,0,Ce,te),rt=new un(0,0,Ce,te);let rn=!1;const st=new Fx;let Mt=!1,Bt=!1;const _t=new pn,Yt=new ne,sn=new un,Rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function on(){return fe===null?he:1}let Y=s;function Ft(A,k){return i.getContext(A,k)}let Ot,B,E,J,ce,ve,Ne,Oe,_e,xe,De,Xe,Be,Pe,Je,$e,it,q,Le,ye,Ue,Ge,Te;try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",Vt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",jn,!1),Y===null){const k="webgl2";if(Y=Ft(k,A),Y===null)throw Ft(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw i.removeEventListener("webglcontextlost",Vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),Dt("WebGLRenderer: "+A.message),A}function Qe(){Ot=new b2(Y),Ot.init(),Ue=new m3(Y,Ot),B=new p2(Y,Ot,e,Ue),E=new h3(Y,Ot),B.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ie=Y.createFramebuffer(),j=Y.createFramebuffer(),K=Y.createFramebuffer(),J=new R2(Y),ce=new $R,ve=new p3(Y,Ot,E,ce,B,Ue,J),Ne=new E2(V),Oe=new Cb(Y),Ge=new d2(Y,Oe),_e=new T2(Y,Oe,J,Ge),xe=new C2(Y,_e,Oe,Ge,J),q=new w2(Y,B,ve),Je=new m2(ce),De=new JR(V,Ne,Ot,B,Ge,Je),Xe=new y3(V,ce),Be=new t3,Pe=new o3(Ot),it=new f2(V,Ne,E,xe,b,m),$e=new d3(V,xe,B),Te=new M3(Y,J,B,E),Le=new h2(Y,Ot,J),ye=new A2(Y,Ot,J),J.programs=De.programs,V.capabilities=B,V.extensions=Ot,V.properties=ce,V.renderLists=Be,V.shadowMap=$e,V.state=E,V.info=J}w!==Ci&&(O=new D2(w,i.width,i.height,p,l,c));const qe=new x3(V,Y);this.xr=qe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(Ce,te,!1))},this.getSize=function(A){return A.set(Ce,te)},this.setSize=function(A,k,pe=!0){if(qe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=A,te=k,i.width=Math.floor(A*he),i.height=Math.floor(k*he),pe===!0&&(i.style.width=A+"px",i.style.height=k+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Ce*he,te*he).floor()},this.setDrawingBufferSize=function(A,k,pe){Ce=A,te=k,he=pe,i.width=Math.floor(A*pe),i.height=Math.floor(k*pe),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(w===Ci){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(He)},this.setViewport=function(A,k,pe,ae){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,k,pe,ae),E.viewport(L.copy(He).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(rt)},this.setScissor=function(A,k,pe,ae){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,k,pe,ae),E.scissor(ee.copy(rt).multiplyScalar(he).round())},this.getScissorTest=function(){return rn},this.setScissorTest=function(A){E.setScissorTest(rn=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,pe=!0){let ae=0;if(A){let re=!1;if(fe!==null){const Fe=fe.texture.format;re=S.has(Fe)}if(re){const Fe=fe.texture.type,We=x.has(Fe),Ie=it.getClearColor(),Ve=it.getClearAlpha(),ke=Ie.r,ft=Ie.g,vt=Ie.b;We?(N[0]=ke,N[1]=ft,N[2]=vt,N[3]=Ve,Y.clearBufferuiv(Y.COLOR,0,N)):(z[0]=ke,z[1]=ft,z[2]=vt,z[3]=Ve,Y.clearBufferiv(Y.COLOR,0,z))}else ae|=Y.COLOR_BUFFER_BIT}k&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),it.dispose(),Be.dispose(),Pe.dispose(),ce.dispose(),Ne.dispose(),xe.dispose(),Ge.dispose(),Te.dispose(),De.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",mn),qe.removeEventListener("sessionend",Nn),qn.stop()};function Vt(A){A.preventDefault(),qv("WebGLRenderer: Context Lost."),X=!0}function Ct(){qv("WebGLRenderer: Context Restored."),X=!1;const A=J.autoReset,k=$e.enabled,pe=$e.autoUpdate,ae=$e.needsUpdate,re=$e.type;Qe(),J.autoReset=A,$e.enabled=k,$e.autoUpdate=pe,$e.needsUpdate=ae,$e.type=re}function jn(A){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ni(A){const k=A.target;k.removeEventListener("dispose",ni),no(k)}function no(A){io(A),ce.remove(A)}function io(A){const k=ce.get(A).programs;k!==void 0&&(k.forEach(function(pe){De.releaseProgram(pe)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,pe,ae,re,Fe){k===null&&(k=Rn);const We=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ie=Ha(A,k,pe,ae,re);E.setMaterial(ae,We);let Ve=pe.index,ke=1;if(ae.wireframe===!0){if(Ve=_e.getWireframeAttribute(pe),Ve===void 0)return;ke=2}const ft=pe.drawRange,vt=pe.attributes.position;let Ye=ft.start*ke,Nt=(ft.start+ft.count)*ke;Fe!==null&&(Ye=Math.max(Ye,Fe.start*ke),Nt=Math.min(Nt,(Fe.start+Fe.count)*ke)),Ve!==null?(Ye=Math.max(Ye,0),Nt=Math.min(Nt,Ve.count)):vt!=null&&(Ye=Math.max(Ye,0),Nt=Math.min(Nt,vt.count));const Jt=Nt-Ye;if(Jt<0||Jt===1/0)return;Ge.setup(re,ae,Ie,pe,Ve);let Kt,pt=Le;if(Ve!==null&&(Kt=Oe.get(Ve),pt=ye,pt.setIndex(Kt)),re.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*on()),pt.setMode(Y.LINES)):pt.setMode(Y.TRIANGLES);else if(re.isLine){let vn=ae.linewidth;vn===void 0&&(vn=1),E.setLineWidth(vn*on()),re.isLineSegments?pt.setMode(Y.LINES):re.isLineLoop?pt.setMode(Y.LINE_LOOP):pt.setMode(Y.LINE_STRIP)}else re.isPoints?pt.setMode(Y.POINTS):re.isSprite&&pt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))pt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const vn=re._multiDrawStarts,je=re._multiDrawCounts,En=re._multiDrawCount,mt=Ve?Oe.get(Ve).bytesPerElement:1,Gn=ce.get(ae).currentProgram.getUniforms();for(let ii=0;ii<En;ii++)Gn.setValue(Y,"_gl_DrawID",ii),pt.render(vn[ii]/mt,je[ii])}else if(re.isInstancedMesh)pt.renderInstances(Ye,Jt,re.count);else if(pe.isInstancedBufferGeometry){const vn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,je=Math.min(pe.instanceCount,vn);pt.renderInstances(Ye,Jt,je)}else pt.render(Ye,Jt)};function ao(A,k,pe,ae){Z!==null&&A.isNodeMaterial&&Z.setObject(ae,A),Mt===!0&&Je.setState(A,pe,!1),A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,za(A,k,ae),A.side=Xr,A.needsUpdate=!0,za(A,k,ae),A.side=Ji):za(A,k,ae)}this.compile=function(A,k,pe=null){pe===null&&(pe=A),Z!==null&&Z.renderStart(A,k,pe),U=Pe.get(pe),U.init(k),T.push(U),pe.traverseVisible(function(re){re.isLight&&re.layers.test(k.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),A!==pe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(k.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights(),Z!==null&&Z.updateLights(U.state.lightsArray),Bt=this.localClippingEnabled,Mt=Je.init(this.clippingPlanes,Bt),Mt===!0&&Je.setGlobalState(this.clippingPlanes,k),Z!==null&&$e.render(U.state.shadowsArray,pe,k);const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const Ie=Fe[We];ao(Ie,pe,k,re),ae.add(Ie)}else ao(Fe,pe,k,re),ae.add(Fe)}),U=T.pop(),Z!==null&&Z.renderEnd(),ae},this.compileAsync=function(A,k,pe=null){const ae=this.compile(A,k,pe);return new Promise(re=>{function Fe(){if(ae.forEach(function(We){const Ve=ce.get(We).currentProgram;(Ve===void 0||Ve.isReady())&&ae.delete(We)}),ae.size===0){re(A);return}setTimeout(Fe,10)}Ot.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Kr=null;function ki(A){Kr&&Kr(A)}function mn(){qn.stop()}function Nn(){qn.start()}const qn=new Xx;qn.setAnimationLoop(ki),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){Kr=A,qe.setAnimationLoop(A),A===null?qn.stop():qn.start()},qe.addEventListener("sessionstart",mn),qe.addEventListener("sessionend",Nn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Z!==null&&Z.renderStart(A,k);const pe=qe.enabled===!0&&qe.isPresenting===!0,ae=O!==null&&(fe===null||pe)&&O.begin(V,fe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(k),k=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,k,fe),U=Pe.get(A,T.length),U.init(k),U.state.textureUnits=ve.getTextureUnits(),T.push(U),_t.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),st.setFromProjectionMatrix(_t,ea,k.reversedDepth),Bt=this.localClippingEnabled,Mt=Je.init(this.clippingPlanes,Bt),D=Be.get(A,I.length),D.init(),I.push(D),qe.enabled===!0&&qe.isPresenting===!0){const We=V.xr.getDepthSensingMesh();We!==null&&_r(We,k,-1/0,V.sortObjects)}_r(A,k,0,V.sortObjects),D.finish(),Z!==null&&Z.updateLights(U.state.lightsArray),V.sortObjects===!0&&D.sort(Re,tt),Zt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Zt&&it.addToRenderList(D,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Je.beginShadows();const re=U.state.shadowsArray;if($e.render(re,A,k),Mt===!0&&Je.endShadows(),(ae&&O.hasRenderPass())===!1){const We=D.opaque,Ie=D.transmissive;if(U.setupLights(),k.isArrayCamera){const Ve=k.cameras;if(Ie.length>0)for(let ke=0,ft=Ve.length;ke<ft;ke++){const vt=Ve[ke];_l(We,Ie,A,vt)}Zt&&it.render(A);for(let ke=0,ft=Ve.length;ke<ft;ke++){const vt=Ve[ke];vl(D,A,vt,vt.viewport)}}else Ie.length>0&&_l(We,Ie,A,k),Zt&&it.render(A),vl(D,A,k)}fe!==null&&G===0&&(ve.updateMultisampleRenderTarget(fe),ve.updateRenderTargetMipmap(fe)),ae&&O.end(V),A.isScene===!0&&A.onAfterRender(V,A,k),Ge.resetDefaultState(),se=-1,me=null,T.pop(),T.length>0?(U=T[T.length-1],ve.setTextureUnits(U.state.textureUnits),Mt===!0&&Je.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?D=I[I.length-1]:D=null,Z!==null&&Z.renderEnd()};function _r(A,k,pe,ae){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)pe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(st)){ae&&sn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const We=xe.update(A),Ie=A.material;Ie.visible&&D.push(A,We,Ie,pe,sn.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(st))){const We=xe.update(A),Ie=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),sn.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),sn.copy(We.boundingSphere.center)),sn.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Ie)){const Ve=We.groups;for(let ke=0,ft=Ve.length;ke<ft;ke++){const vt=Ve[ke],Ye=Ie[vt.materialIndex];Ye&&Ye.visible&&D.push(A,We,Ye,pe,sn.z,vt,k)}}else Ie.visible&&D.push(A,We,Ie,pe,sn.z,null,k)}}const Fe=A.children;for(let We=0,Ie=Fe.length;We<Ie;We++)_r(Fe[We],k,pe,ae)}function vl(A,k,pe,ae){const{opaque:re,transmissive:Fe,transparent:We}=A;U.setupLightsView(pe),Mt===!0&&Je.setGlobalState(V.clippingPlanes,pe),ae&&E.viewport(L.copy(ae)),re.length>0&&xr(re,k,pe),Fe.length>0&&xr(Fe,k,pe),We.length>0&&xr(We,k,pe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function _l(A,k,pe,ae){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const Ye=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new Gi(1,1,{generateMipmaps:!0,type:Ye?aa:Ci,minFilter:Vr,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Fe=U.state.transmissionRenderTarget[ae.id],We=ae.viewport||L;Fe.setSize(We.z*V.transmissionResolutionScale,We.w*V.transmissionResolutionScale);const Ie=V.getRenderTarget(),Ve=V.getActiveCubeFace(),ke=V.getActiveMipmapLevel();V.setRenderTarget(Fe),V.getClearColor(be),we=V.getClearAlpha(),we<1&&V.setClearColor(16777215,.5),V.clear(),Zt&&it.render(pe);const ft=V.toneMapping;V.toneMapping=ta;const vt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),Mt===!0&&Je.setGlobalState(V.clippingPlanes,ae),xr(A,pe,ae),ve.updateMultisampleRenderTarget(Fe),ve.updateRenderTargetMipmap(Fe),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Nt=0,Jt=k.length;Nt<Jt;Nt++){const Kt=k[Nt],{object:pt,geometry:vn,material:je,group:En}=Kt;if(je.side===Ji&&pt.layers.test(ae.layers)){const mt=je.side;je.side=ti,je.needsUpdate=!0,Fa(pt,pe,ae,vn,je,En),je.side=mt,je.needsUpdate=!0,Ye=!0}}Ye===!0&&(ve.updateMultisampleRenderTarget(Fe),ve.updateRenderTargetMipmap(Fe))}V.setRenderTarget(Ie,Ve,ke),V.setClearColor(be,we),vt!==void 0&&(ae.viewport=vt),V.toneMapping=ft}function xr(A,k,pe){const ae=k.isScene===!0?k.overrideMaterial:null;for(let re=0,Fe=A.length;re<Fe;re++){const We=A[re],{object:Ie,geometry:Ve,group:ke}=We;let ft=We.material;ft.allowOverride===!0&&ae!==null&&(ft=ae),Ie.layers.test(pe.layers)&&Fa(Ie,k,pe,Ve,ft,ke)}}function Fa(A,k,pe,ae,re,Fe){Z!==null&&re.isNodeMaterial&&Z.setObject(A,re),A.onBeforeRender(V,k,pe,ae,re,Fe),A.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(V,k,pe,ae,A,Fe),re.transparent===!0&&re.side===Ji&&re.forceSinglePass===!1?(re.side=ti,re.needsUpdate=!0,V.renderBufferDirect(pe,k,ae,re,A,Fe),re.side=Xr,re.needsUpdate=!0,V.renderBufferDirect(pe,k,ae,re,A,Fe),re.side=Ji):V.renderBufferDirect(pe,k,ae,re,A,Fe),A.onAfterRender(V,k,pe,ae,re,Fe)}function za(A,k,pe){k.isScene!==!0&&(k=Rn);const ae=ce.get(A),re=U.state.lights,Fe=U.state.shadowsArray,We=re.state.version,Ie=De.getParameters(A,re.state,Fe,k,pe,U.state.lightProbeGridArray),Ve=De.getProgramCacheKey(Ie);let ke=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ae.fog=k.fog;const ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Ne.get(A.envMap||ae.environment,ft),ae.envMapRotation=ae.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",ni),ke=new Map,ae.programs=ke);let vt=ke.get(Ve);if(vt!==void 0){if(ae.currentProgram===vt&&ae.lightsStateVersion===We)return sa(A,Ie),vt}else Ie.uniforms=De.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,pe,Ie),A.onBeforeCompile(Ie,V),vt=De.acquireProgram(Ie,Ve),ke.set(Ve,vt),ae.uniforms=Ie.uniforms;const Ye=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Je.uniform),sa(A,Ie),ae.needsLights=xl(A),ae.lightsStateVersion=We,ae.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=U.state.lightProbeGridArray.length>0,ae.currentProgram=vt,ae.uniformsList=null,vt}function ra(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=au.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function sa(A,k){const pe=ce.get(A);pe.outputColorSpace=k.outputColorSpace,pe.batching=k.batching,pe.batchingColor=k.batchingColor,pe.instancing=k.instancing,pe.instancingColor=k.instancingColor,pe.instancingMorph=k.instancingMorph,pe.skinning=k.skinning,pe.morphTargets=k.morphTargets,pe.morphNormals=k.morphNormals,pe.morphColors=k.morphColors,pe.morphTargetsCount=k.morphTargetsCount,pe.numClippingPlanes=k.numClippingPlanes,pe.numIntersection=k.numClipIntersection,pe.vertexAlphas=k.vertexAlphas,pe.vertexTangents=k.vertexTangents,pe.toneMapping=k.toneMapping}function Sr(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let pe=0,ae=A.length;pe<ae;pe++){const re=A[pe];if(re.texture!==null&&re.boundingBox.containsPoint(C))return re}return null}function Ha(A,k,pe,ae,re){k.isScene!==!0&&(k=Rn),ve.resetTextureUnits();const Fe=k.fog,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?k.environment:null,Ie=fe===null?V.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Rt.workingColorSpace,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,ke=Ne.get(ae.envMap||We,Ve),ft=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,vt=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!pe.morphAttributes.position,Nt=!!pe.morphAttributes.normal,Jt=!!pe.morphAttributes.color;let Kt=ta;ae.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Kt=V.toneMapping);const pt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,vn=pt!==void 0?pt.length:0,je=ce.get(ae),En=U.state.lights;if(Mt===!0&&(Bt===!0||A!==me)){const kt=A===me&&ae.id===se;Je.setState(ae,A,kt)}let mt=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==En.state.version||je.outputColorSpace!==Ie||re.isBatchedMesh&&je.batching===!1||!re.isBatchedMesh&&je.batching===!0||re.isBatchedMesh&&je.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&je.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&je.instancing===!1||!re.isInstancedMesh&&je.instancing===!0||re.isSkinnedMesh&&je.skinning===!1||!re.isSkinnedMesh&&je.skinning===!0||re.isInstancedMesh&&je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&je.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&je.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&je.instancingMorph===!1&&re.morphTexture!==null||je.envMap!==ke||ae.fog===!0&&je.fog!==Fe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Je.numPlanes||je.numIntersection!==Je.numIntersection)||je.vertexAlphas!==ft||je.vertexTangents!==vt||je.morphTargets!==Ye||je.morphNormals!==Nt||je.morphColors!==Jt||je.toneMapping!==Kt||je.morphTargetsCount!==vn||!!je.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,je.__version=ae.version);let Gn=je.currentProgram;mt===!0&&(Gn=za(ae,k,re),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Gn,je));let ii=!1,Vn=!1,Ga=!1;const Pt=Gn.getUniforms(),tn=je.uniforms;if(E.useProgram(Gn.program)&&(ii=!0,Vn=!0,Ga=!0),ae.id!==se&&(se=ae.id,Vn=!0),je.needsLights){const kt=Sr(U.state.lightProbeGridArray,re);je.lightProbeGrid!==kt&&(je.lightProbeGrid=kt,Vn=!0)}if(ii||me!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(Y,"projectionMatrix",A.projectionMatrix),Pt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Xi=Pt.map.cameraPosition;Xi!==void 0&&Xi.setValue(Y,Yt.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&Pt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),me!==A&&(me=A,Vn=!0,Ga=!0)}if(je.needsLights&&(En.state.sunShadowMap.length>0&&Pt.setValue(Y,"sunShadowMap",En.state.sunShadowMap,ve),En.state.directionalShadowMap.length>0&&Pt.setValue(Y,"directionalShadowMap",En.state.directionalShadowMap,ve),En.state.spotShadowMap.length>0&&Pt.setValue(Y,"spotShadowMap",En.state.spotShadowMap,ve),En.state.pointShadowMap.length>0&&Pt.setValue(Y,"pointShadowMap",En.state.pointShadowMap,ve)),re.isSkinnedMesh){Pt.setOptional(Y,re,"bindMatrix"),Pt.setOptional(Y,re,"bindMatrixInverse");const kt=re.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Pt.setValue(Y,"boneTexture",kt.boneTexture,ve))}re.isBatchedMesh&&(Pt.setOptional(Y,re,"batchingTexture"),Pt.setValue(Y,"batchingTexture",re._matricesTexture,ve),Pt.setOptional(Y,re,"batchingIdTexture"),Pt.setValue(Y,"batchingIdTexture",re._indirectTexture,ve),Pt.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&Pt.setValue(Y,"batchingColorTexture",re._colorsTexture,ve));const gi=pe.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&q.update(re,pe,Gn),(Vn||je.receiveShadow!==re.receiveShadow)&&(je.receiveShadow=re.receiveShadow,Pt.setValue(Y,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=b3()),Vn){if(Pt.setValue(Y,"toneMappingExposure",V.toneMappingExposure),je.needsLights&&gn(tn,Ga),Fe&&ae.fog===!0&&Xe.refreshFogUniforms(tn,Fe),Xe.refreshMaterialUniforms(tn,ae,he,te,U.state.transmissionRenderTarget[A.id]),je.needsLights&&je.lightProbeGrid){const kt=je.lightProbeGrid;tn.probesSH.value=kt.texture,tn.probesMin.value.copy(kt.boundingBox.min),tn.probesMax.value.copy(kt.boundingBox.max),tn.probesResolution.value.copy(kt.resolution)}au.upload(Y,ra(je),tn,ve)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(au.upload(Y,ra(je),tn,ve),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(Y,"center",re.center),Pt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),Pt.setValue(Y,"normalMatrix",re.normalMatrix),Pt.setValue(Y,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const kt=ae.uniformsGroups;for(let Xi=0,Di=kt.length;Xi<Di;Xi++){const vi=kt[Xi];Te.update(vi,Gn),Te.bind(vi,Gn)}}return Gn}function gn(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function xl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(A,k,pe){const ae=ce.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ce.get(A.texture).__webglTexture=k,ce.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:pe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const pe=ce.get(A);pe.__webglFramebuffer=k,pe.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,pe=0){fe=A,F=k,G=pe;let ae=null,re=!1,Fe=!1;if(A){const Ie=ce.get(A);if(Ie.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),L.copy(A.viewport),ee.copy(A.scissor),$=A.scissorTest,E.viewport(L),E.scissor(ee),E.setScissorTest($),se=-1;return}else if(Ie.__webglFramebuffer===void 0)ve.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ve.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if(Ie.__boundDepthTexture!==ft){if(ft!==null&&ce.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Fe=!0);const ke=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?ae=ke[k][pe]:ae=ke[k],re=!0):A.samples>0&&ve.useMultisampledRTT(A)===!1?ae=ce.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ae=ke[pe]:ae=ke,L.copy(A.viewport),ee.copy(A.scissor),$=A.scissorTest}else L.copy(He).multiplyScalar(he).floor(),ee.copy(rt).multiplyScalar(he).floor(),$=rn;if(pe!==0&&(ae=ie),E.bindFramebuffer(Y.FRAMEBUFFER,ae)&&E.drawBuffers(A,ae),E.viewport(L),E.scissor(ee),E.setScissorTest($),re){const Ie=ce.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,pe)}else if(Fe){const Ie=k;for(let Ve=0;Ve<A.textures.length;Ve++){const ke=ce.get(A.textures[Ve]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ve,ke.__webglTexture,pe,Ie)}}else if(A!==null&&pe!==0){const Ie=ce.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,pe)}se=-1};function ro(A){const k=ce.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=B.textureFormatReadable(A.format),k.__typeReadable=B.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,pe,ae,re,Fe,We,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Ve=Ve[We]),Ve){E.bindFramebuffer(Y.FRAMEBUFFER,Ve);try{const ke=A.textures[Ie],ft=ke.format,vt=ke.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie);const Ye=ro(ke);if(Ye.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-ae&&pe>=0&&pe<=A.height-re&&Y.readPixels(k,pe,ae,re,Ue.convert(ft),Ue.convert(vt),Fe)}finally{const ke=fe!==null?ce.get(fe).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,k,pe,ae,re,Fe,We,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Ve=Ve[We]),Ve)if(k>=0&&k<=A.width-ae&&pe>=0&&pe<=A.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,Ve);const ke=A.textures[Ie],ft=ke.format,vt=ke.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie);const Ye=ro(ke);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Nt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(k,pe,ae,re,Ue.convert(ft),Ue.convert(vt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const Jt=fe!==null?ce.get(fe).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Jt);const Kt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await kE(Y,Kt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Nt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Nt),Y.deleteSync(Kt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,pe=0){const ae=Math.pow(2,-pe),re=Math.floor(A.image.width*ae),Fe=Math.floor(A.image.height*ae),We=k!==null?k.x:0,Ie=k!==null?k.y:0;ve.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,pe,0,0,We,Ie,re,Fe),E.unbindTexture()},this.copyTextureToTexture=function(A,k,pe=null,ae=null,re=0,Fe=0){let We,Ie,Ve,ke,ft,vt,Ye,Nt,Jt;const Kt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(pe!==null)We=pe.max.x-pe.min.x,Ie=pe.max.y-pe.min.y,Ve=pe.isBox3?pe.max.z-pe.min.z:1,ke=pe.min.x,ft=pe.min.y,vt=pe.isBox3?pe.min.z:0;else{const tn=Math.pow(2,-re);We=Math.floor(Kt.width*tn),Ie=Math.floor(Kt.height*tn),A.isDataArrayTexture?Ve=Kt.depth:A.isData3DTexture?Ve=Math.floor(Kt.depth*tn):Ve=1,ke=0,ft=0,vt=0}ae!==null?(Ye=ae.x,Nt=ae.y,Jt=ae.z):(Ye=0,Nt=0,Jt=0);const pt=Ue.convert(k.format),vn=Ue.convert(k.type);let je;k.isData3DTexture?(ve.setTexture3D(k,0),je=Y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ve.setTexture2DArray(k,0),je=Y.TEXTURE_2D_ARRAY):(ve.setTexture2D(k,0),je=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,k.unpackAlignment);const En=E.getParameter(Y.UNPACK_ROW_LENGTH),mt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ii=E.getParameter(Y.UNPACK_SKIP_ROWS),Vn=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ft),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,vt);const Ga=A.isDataArrayTexture||A.isData3DTexture,Pt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const tn=ce.get(A),gi=ce.get(k),kt=ce.get(tn.__renderTarget),Xi=ce.get(gi.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,kt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Di=0;Di<Ve;Di++)Ga&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ce.get(A).__webglTexture,re,vt+Di),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ce.get(k).__webglTexture,Fe,Jt+Di)),Y.blitFramebuffer(ke,ft,We,Ie,Ye,Nt,We,Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||ce.has(A)){const tn=ce.get(A),gi=ce.get(k);E.bindFramebuffer(Y.READ_FRAMEBUFFER,j),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,K);for(let kt=0;kt<Ve;kt++)Ga?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tn.__webglTexture,re,vt+kt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,tn.__webglTexture,re),Pt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,gi.__webglTexture,Fe,Jt+kt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,gi.__webglTexture,Fe),re!==0?Y.blitFramebuffer(ke,ft,We,Ie,Ye,Nt,We,Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):Pt?Y.copyTexSubImage3D(je,Fe,Ye,Nt,Jt+kt,ke,ft,We,Ie):Y.copyTexSubImage2D(je,Fe,Ye,Nt,ke,ft,We,Ie);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(je,Fe,Ye,Nt,Jt,We,Ie,Ve,pt,vn,Kt.data):k.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,Fe,Ye,Nt,Jt,We,Ie,Ve,pt,Kt.data):Y.texSubImage3D(je,Fe,Ye,Nt,Jt,We,Ie,Ve,pt,vn,Kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,Ye,Nt,We,Ie,pt,vn,Kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,Ye,Nt,Kt.width,Kt.height,pt,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,Ye,Nt,We,Ie,pt,vn,Kt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,En),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ii),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Vn),Fe===0&&k.generateMipmaps&&Y.generateMipmap(je),E.unbindTexture()},this.initRenderTarget=function(A){ce.get(A).__webglFramebuffer===void 0&&ve.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ve.setTextureCube(A,0):A.isData3DTexture?ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ve.setTexture2DArray(A,0):ve.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,G=0,fe=null,E.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const Jx=[{no:"X-01",name:"指明方向",en:"DIRECTION",model:"lighthouse",img:"/img/archive/form-05.jpg",history:"法罗斯岛约前280年 七大奇迹 为船指路",derivation:"火光铜镜→菲涅尔透镜→自动化无人化",works:"守望 召唤 孤独 精神坐标"},{no:"X-02",name:"照明引航",en:"NAVIGATION LIGHT",model:"lightbuoy",img:"/img/archive/art-31.jpg",history:"夜航借渔火认路、1731年泰晤士河口首设灯船",derivation:"灯船→钟浮标→雷达应答标",works:"忽明忽暗的等待、漂着的坐标"},{no:"X-03",name:"系留、牵挂",en:"MOORING",model:"bollard",img:"/img/archive/form-17.jpg",history:"系马桩的水上版。bollard源于圆木桩",derivation:"木桩→铸铁耳桩→自动系泊→怀旧装置",works:"解缆=离别、锚点成通用隐喻"},{no:"X-04",name:"停驻安顿",en:"ANCHORAGE",model:"anchor",img:"/img/archive/art-18.jpg",history:"石碇→木爪锚→铁锚、ankyra本义弯钩",derivation:"宋元大铁锚→帆船锚制→基督教希望符号",works:"希望与安顿、抛锚/起锚=人生动词"},{no:"X-05",name:"过渡、承载",en:"TRANSITION",model:"walkway",img:"/img/archive/art-21.jpg",history:"船岸之间的最后一块木板",derivation:"木跳→制式舷梯→登机桥",works:"门槛与抉择连接的最小单元、摇晃"},{no:"X-06",name:"延伸",en:"EXTENSION",model:"arm",img:"/img/archive/form-35.jpg",history:"栈本义高架木构，栈道的水版",derivation:"木桩→铁桩混凝土、青岛栈桥1892成地标",works:"过渡与之间、残桥=时代遗骸"},{no:"X-07",name:"承托",en:"SUPPORT",model:"bracket",img:"/img/archive/art-24.jpg",history:"无动力平底船当站台，随水升降",derivation:"木趸→铁趸→轮渡标配→浮动建筑底座",works:"浮动的陆地、漂泊人生"},{no:"X-08",name:"平台",en:"PLATFORM",model:"platform",img:"/img/archive/form-12.jpg",history:"deck本义屋顶，船上的地",derivation:"帆船→邮轮公共空间→滨水铺装",works:"舞台、边界、同船共济"},{no:"X-09",name:"挡浪",en:"WAVE BREAKER",model:"tetrapod",img:"/img/archive/art-19.jpg",history:"罗马抛石堤、breakwater字面-碎浪之水",derivation:"普利茅斯1812→消波块1950s→滨海步道",works:"牺牲-庇护、心理防线的地理模型"},{no:"X-10",name:"托举离水",en:"LIFTING",model:"crane",img:"/img/archive/form-31.jpg",history:"让船离水修理、宋代有记录，1495年朴茨茅斯",derivation:"木闸→浮箱闸门→巨型化→遗产改造",works:"暂停-修复、空坞=剧场"},{no:"X-11",name:"起重交换",en:"EXCHANGE",model:"gantry",img:"/img/archive/art-39.jpg",history:"罗马踏轮吊，以小力举巨重",derivation:"人力→液压吊(1846)→集装箱桥吊(1956)",works:"交换的仪式、巨物美学"},{no:"X-12",name:"储存记忆",en:"STORAGE",model:"barrel",img:"/img/archive/art-16.jpg",history:"warehouse=货+屋、筒仓储散货",derivation:"阿尔伯特码头1846→集装箱场站→筒仓改造2017",works:"仓库=存放时间的记忆体"},{no:"X-13",name:"缓冲消能",en:"BUFFERING",model:"fender",img:"/img/archive/art-23.jpg",history:"废轮胎、垫木缓冲船岸碰撞",derivation:"橡胶护舷→充气护舷、轮胎成渔港签名",works:"以柔克刚"},{no:"X-14",name:"聚力牵引",en:"HAULING",model:"capstan",img:"/img/archive/form-22.jpg",history:"轴向收绳，以小博大、罗马已有",derivation:"踏轮→蒸汽绞车→系缆机",works:"等待、众人推杆的合力"},{no:"X-15",name:"报时定候",en:"TIMEKEEPING",model:"bell",img:"/img/archive/form-20.jpg",history:"自鸣钟统一船期与工时，工业时间的岸上分身",derivation:"江海关1927、江汉关1924→钟声变城市记忆",works:"时间权威、离别倒计时"},{no:"X-16",name:"检验",en:"INSPECTION",model:"gauge",img:"/img/archive/art-20.jpg",history:"714年广州市舶使、1685年四海关",derivation:"榷关→近代海关→口岸联检大楼",works:"门槛、检查、放行、国境的码头"},{no:"X-17",name:"泊驻",en:"BERTHING",model:"buoy",img:"/img/archive/art-42.jpg",history:"候潮候泊的泊地、berth本义床",derivation:"天然锚地→划定锚地→泊位成核心资产",works:"给人留个位置、群灯孤立"},{no:"X-18",name:"协调",en:"COORDINATION",model:"signalmast",img:"/img/archive/form-36.jpg",history:"一领众和的劳动号子，协调发力也协调呼吸",derivation:"人力装卸→1922年海员大罢工→号子成非遗",works:"脊梁、集体"},{no:"X-19",name:"凭证、通行",en:"PASSAGE",model:"passplate",img:"/img/archive/form-21.jpg",history:"近代轮渡，一票一人凭票登船",derivation:"纸质票→剪票钳→闸机电子客票",works:"一张票的重量、错过、离别"},{no:"X-20",name:"日常过渡",en:"EVERYDAY CROSSING",model:"gangplank",img:"/img/archive/art-15.jpg",history:"河滩凿阶即成、阶伸进河，家即是码头",derivation:"浣洗登船的日常节点→古镇乡愁景观",works:"日常生活的渡口、水的座位"}],mh=100,$x=26,eS=2.6,gh=$x*eS,B_=3.4,F_=Jx.length,tS=924228,A3=15984584,z_=["向前滚动 · 前往码头","向后滚动 · 返回前页","点击物品 · 查看档案"];function R3(r,e,i,s,l=140){const c=[],f=[],p=h=>{const g=Math.sin(h*i);return s*Math.sign(g)*Math.pow(Math.abs(g),.72)+s*.28*Math.sin(h*i*2+1.2)};for(let h=0;h<=l;h++){const g=h/l*Math.PI*2,_=r+p(g);c.push(Math.cos(g)*(_+e/2),Math.sin(g)*(_+e/2),0),c.push(Math.cos(g)*(_-e/2),Math.sin(g)*(_-e/2),0)}for(let h=0;h<l;h++){const g=h*2;f.push(g,g+1,g+2,g+1,g+3,g+2)}const m=new Wn;return m.setAttribute("position",new fn(c,3)),m.setIndex(f),m}function w3(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d"),i=e.createRadialGradient(128,128,0,128,128,128);return i.addColorStop(0,"rgba(245,232,200,0.95)"),i.addColorStop(.4,"rgba(245,232,200,0.32)"),i.addColorStop(1,"rgba(245,232,200,0)"),e.fillStyle=i,e.fillRect(0,0,256,256),new mb(r)}function C3(r){return new Vi({uniforms:{uLight:{value:new ne(.5,.78,.62).normalize()},uDot:{value:5*r},uInk:{value:new wt(1513242)},uPaper:{value:new wt(15987178)},uFogColor:{value:new wt(tS)},uFogNear:{value:12},uFogFar:{value:78}},vertexShader:`
      varying vec3 vNormal;
      varying float vDepth;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uLight;
      uniform float uDot;
      uniform vec3 uInk;
      uniform vec3 uPaper;
      uniform vec3 uFogColor;
      uniform float uFogNear;
      uniform float uFogFar;
      varying vec3 vNormal;
      varying float vDepth;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main() {
        vec3 n = normalize(vNormal);
        float diff = max(dot(n, normalize(uLight)), 0.0);
        float b = 0.16 + 0.84 * diff;
        vec2 uv = gl_FragCoord.xy / uDot;
        uv += (hash(floor(uv)) - 0.5) * 0.45;
        float d = length(fract(uv) - 0.5);
        float r = (1.0 - b) * 0.66;
        float ink = 1.0 - smoothstep(r - 0.14, r + 0.14, d);
        vec3 col = mix(uPaper, uInk, ink);
        float f = smoothstep(uFogNear, uFogFar, vDepth);
        col = mix(col, uFogColor, f);
        gl_FragColor = vec4(col, 1.0);
      }
    `})}function Ae(r,e,i=[0,0,0],s=[0,0,0]){const l=new pi(r,e);return l.position.set(i[0],i[1],i[2]),l.rotation.set(s[0],s[1],s[2]),l}function H_(r,e,i,s){const l=new Wn().setFromPoints([r,e,i]);return l.computeVertexNormals(),new pi(l,s)}function N3(r){const e=new qt;return e.add(Ae(new ut(.78,.92,.35,24),r,[0,.18,0])),e.add(Ae(new ut(.28,.48,2.7,24),r,[0,1.75,0])),[[.45,.75],[.39,1.45],[.335,2.15]].forEach(([i,s])=>e.add(Ae(new mi(i,.07,10,30),r,[0,s,0],[Math.PI/2,0,0]))),e.add(Ae(new ut(.4,.4,.1,24),r,[0,3.16,0])),e.add(Ae(new ut(.2,.2,.34,16),r,[0,3.38,0])),e.add(Ae(new Yr(.3,.42,24),r,[0,3.78,0])),e}function D3(r){const e=new qt;e.add(Ae(new ut(.34,.42,.35,20),r,[0,.18,0])),e.add(Ae(new ut(.16,.32,1.15,20),r,[0,.93,0]));for(let i=0;i<3;i++){const s=i/3*Math.PI*2;e.add(Ae(new ut(.02,.02,.7,6),r,[Math.cos(s)*.14,1.8,Math.sin(s)*.14]))}return e.add(Ae(new Pa(.17,16,12),r,[0,1.98,0])),e.add(Ae(new mi(.2,.03,8,20),r,[0,.4,0],[Math.PI/2,0,0])),e}function L3(r){const e=new qt;return e.add(Ae(new ut(.62,.74,.3,24),r,[0,.15,0])),e.add(Ae(new ut(.36,.46,.9,24),r,[0,.75,0])),e.add(Ae(new ut(.58,.4,.32,24),r,[0,1.32,0])),e.add(Ae(new Pa(.14,16,12),r,[0,1.53,0])),e.add(Ae(new mi(.44,.09,10,28),r,[0,.55,0],[Math.PI/2,0,0])),e}function U3(r){const e=new qt;return e.add(Ae(new ut(.055,.055,2.2,10),r,[0,1.15,0])),e.add(Ae(new ut(.045,.045,1.25,8),r,[0,2.05,0],[0,0,Math.PI/2])),e.add(Ae(new mi(.14,.035,8,18),r,[0,2.32,0])),e.add(Ae(new ut(.06,.075,1.25,8),r,[-.36,.42,0],[0,0,-.6])),e.add(Ae(new ut(.06,.075,1.25,8),r,[.36,.42,0],[0,0,.6])),e.add(Ae(new Yr(.16,.35,4),r,[-.78,.62,0],[0,0,2.2])),e.add(Ae(new Yr(.16,.35,4),r,[.78,.62,0],[0,0,-2.2])),e.add(Ae(new Pa(.09,10,8),r,[0,.1,0])),e}function O3(r){const e=new qt;e.add(Ae(new yt(2.7,.14,1),r));for(let i=-1;i<=1;i++)e.add(Ae(new yt(2.74,.03,.05),r,[0,.085,i*.3]));return[[-1.2,-.4],[1.2,-.4],[-1.2,.4],[1.2,.4]].forEach(([i,s])=>e.add(Ae(new ut(.05,.05,1.2,8),r,[i,-.65,s]))),[-.45,.45].forEach(i=>{e.add(Ae(new ut(.025,.025,2.7,6),r,[0,.55,i],[0,0,Math.PI/2]));for(let s=-1;s<=1;s++)e.add(Ae(new ut(.02,.02,.55,6),r,[s*1.1,.28,i]))}),e}function P3(r){const e=new qt;return e.add(Ae(new yt(4.6,.45,.85),r)),e.add(Ae(new yt(4.64,.1,.62),r,[0,.27,0])),[-1.8,-.6,.6,1.8].forEach(i=>e.add(Ae(new ut(.07,.07,.6,8),r,[i,.55,0]))),e.add(Ae(new yt(.3,.55,.92),r,[2.3,.2,0])),e}function I3(r){const e=new qt;return e.add(Ae(new yt(.3,1.7,.3),r,[0,.85,0])),e.add(Ae(new yt(1.7,.22,.28),r,[.55,1.68,0])),e.add(Ae(new yt(.2,1.6,.2),r,[-.52,.8,0],[0,0,.65])),e.add(Ae(new yt(.2,1.05,.2),r,[.45,.85,0],[0,0,-.5])),e.add(Ae(new yt(.34,.3,.34),r,[0,1.75,0])),e}function B3(r){const e=new qt;e.add(Ae(new yt(1.9,.14,1.9),r));for(let i=-1;i<=1;i++)e.add(Ae(new yt(1.94,.03,.05),r,[0,.085,i*.55])),e.add(Ae(new yt(.05,.03,1.94),r,[i*.55,.085,0]));return[[-.85,-.85],[.85,-.85],[-.85,.85],[.85,.85]].forEach(([i,s])=>e.add(Ae(new ut(.04,.04,.85,8),r,[i,.42,s]))),e.add(Ae(new ut(.025,.025,1.8,6),r,[0,.85,-.85],[0,0,Math.PI/2])),e.add(Ae(new ut(.025,.025,1.8,6),r,[0,.85,.85],[0,0,Math.PI/2])),e.add(Ae(new ut(.025,.025,1.8,6),r,[-.85,.85,0],[Math.PI/2,0,0])),e.add(Ae(new ut(.025,.025,1.8,6),r,[.85,.85,0],[Math.PI/2,0,0])),e}function F3(r){const e=new qt,i=(s,l)=>{const c=Ae(new ut(.15,.26,1.7,10),r);c.rotation.set(s,0,l),c.position.set(-Math.sin(l)*.55,-.3,Math.sin(s)*.55),e.add(c)};return i(.55,0),i(-.55,0),i(0,.55),i(0,-.55),e.add(Ae(new Pa(.28,12,10),r,[0,.28,0])),e}function z3(r){const e=new qt;e.add(Ae(new ut(.4,.5,.5,16),r,[0,.25,0])),e.add(Ae(new yt(.66,.55,.6),r,[0,.75,0])),e.add(Ae(new ut(.1,.12,1.5,10),r,[0,1.6,0]));const i=Ae(new yt(2.5,.16,.16),r,[.85,2.4,0]);return i.rotation.z=.35,e.add(i),e.add(Ae(new yt(.55,.4,.4),r,[-.55,2.2,0])),e.add(Ae(new ut(.015,.015,.9,6),r,[1.9,1.75,0])),e.add(Ae(new mi(.08,.025,8,14,Math.PI*1.3),r,[1.9,1.27,0],[0,0,Math.PI*.8])),e}function H3(r){const e=new qt;[-1.05,1.05].forEach(s=>e.add(Ae(new yt(.22,2.6,.22),r,[s,1.3,0]))),e.add(Ae(new yt(2.75,.28,.32),r,[0,2.72,0]));const i=(s,l,c,f)=>{const p=Math.hypot(c-s,f-l),m=Ae(new ut(.035,.035,p,8),r,[(s+c)/2,(l+f)/2,0]);m.rotation.z=Math.atan2(f-l,c-s)-Math.PI/2,e.add(m)};return i(-1.05,.1,1.05,2.6),i(1.05,.1,-1.05,2.6),e.add(Ae(new yt(.42,.2,.4),r,[.55,2.5,0])),e.add(Ae(new ut(.015,.015,.8,6),r,[.55,2,0])),e.add(Ae(new mi(.09,.03,8,16,Math.PI*1.4),r,[.55,1.55,0],[0,0,Math.PI*.8])),e}function G3(r){const e=new qt,i=[new ct(.02,0),new ct(.33,.03),new ct(.44,.3),new ct(.48,.55),new ct(.44,.8),new ct(.33,1.07),new ct(.02,1.1)];return e.add(Ae(new Pp(i,28),r)),[.24,.86].forEach(s=>e.add(Ae(new mi(s===.24?.43:.42,.03,10,30),r,[0,s,0],[Math.PI/2,0,0]))),e}function V3(r){const e=new qt;e.add(Ae(new yt(.5,.1,.3),r,[0,1.62,0])),e.add(Ae(new ut(.028,.028,.9,8),r,[0,1.15,0]));const i=Ae(new mi(.5,.17,14,30),r,[0,.35,0],[.25,.3,0]);return e.add(i),e}function k3(r){const e=new qt;e.add(Ae(new ut(.55,.65,.22,20),r,[0,.11,0])),e.add(Ae(new ut(.36,.42,.55,20),r,[0,.5,0])),e.add(Ae(new Yr(.32,.28,20),r,[0,.9,0]));for(let i=0;i<4;i++){const s=i/4*Math.PI*2+.4;e.add(Ae(new ut(.028,.028,1.4,8),r,[0,.52,0],[0,s,Math.PI/2]))}return e}function X3(r){const e=new qt;return[-.42,.42].forEach(i=>e.add(Ae(new ut(.05,.06,1.6,8),r,[i,.8,0]))),e.add(Ae(new yt(1.1,.12,.12),r,[0,1.62,0])),e.add(Ae(new ut(.42,.2,.55,20),r,[0,1.18,0])),e.add(Ae(new ut(.07,.07,.16,8),r,[0,1.52,0])),e.add(Ae(new Pa(.07,10,8),r,[0,.86,0])),e}function W3(r){const e=new qt;e.add(Ae(new yt(.7,.18,.5),r,[0,.09,0])),e.add(Ae(new yt(.52,2.6,.12),r,[0,1.48,0])),e.add(Ae(new yt(.56,.14,.16),r,[0,2.85,0]));for(let i=0;i<9;i++){const s=i%2===0?.36:.22;e.add(Ae(new yt(s,.045,.02),r,[0,.42+i*.27,.07]))}return e}function j3(r){const e=new qt;e.add(Ae(new ut(.42,.5,.35,18),r,[0,.18,0])),e.add(Ae(new Pa(.62,20,16),r,[0,.85,0]));for(let i=0;i<4;i++){const s=i/4*Math.PI*2;e.add(Ae(new ut(.02,.02,.55,6),r,[Math.cos(s)*.2,1.6,Math.sin(s)*.2]))}return e.add(Ae(new Pa(.15,14,10),r,[0,1.95,0])),e.add(Ae(new mi(.18,.03,8,18),r,[0,.06,0],[Math.PI/2,0,0])),e}function q3(r){const e=new qt;return e.add(Ae(new ut(.05,.07,3.2,10),r,[0,1.6,0])),e.add(Ae(new Yr(.22,.3,12),r,[0,.15,0])),e.add(Ae(new ut(.025,.025,1.35,6),r,[0,2.6,0],[0,0,Math.PI/2])),e.add(Ae(new ut(.02,.02,.95,6),r,[0,2.05,0],[0,0,Math.PI/2])),e.add(H_(new ne(.08,2.56,0),new ne(.95,2.5,0),new ne(.08,2.1,0),r)),e.add(H_(new ne(.08,2.02,0),new ne(.7,1.97,0),new ne(.08,1.6,0),r)),e}function Y3(r){const e=new qt,i=Ae(new yt(1.15,1.5,.09),r,[0,.75,0]);return i.rotation.z=.08,e.add(i),e.add(Ae(new mi(.12,.03,8,18),r,[-.06,1.58,0])),e.add(Ae(new yt(.34,.16,.14),r,[-.06,1.5,0])),e.add(Ae(new mi(.28,.022,8,26),r,[.02,.72,.06])),e.add(Ae(new yt(.5,.05,.02),r,[.02,.72,.055])),e.add(Ae(new yt(.34,.05,.02),r,[.02,.6,.055])),e}function Z3(r){const e=new qt,i=Ae(new yt(2.7,.12,.72),r);i.rotation.z=.22,e.add(i);for(let s=-1;s<=2;s++){const l=Ae(new yt(.09,.05,.76),r,[s*.62-.3,.08+(s*.62-.3)*.22,0]);l.rotation.z=.22,e.add(l)}return e.add(Ae(new yt(.5,.1,.8),r,[-1.42,-.3,0])),e}const K3={lighthouse:N3,lightbuoy:D3,bollard:L3,anchor:U3,walkway:O3,arm:P3,bracket:I3,platform:B3,tetrapod:F3,crane:z3,gantry:H3,barrel:G3,fender:V3,capstan:k3,bell:X3,gauge:W3,buoy:j3,signalmast:q3,passplate:Y3,gangplank:Z3};function Q3(){const r=Js(),e=de.useRef(null),i=de.useRef(null),s=de.useRef(null),l=de.useRef(!1),[c,f]=de.useState(null),[p,m]=de.useState(0);return de.useEffect(()=>{const h=window.setInterval(()=>m(g=>(g+1)%z_.length),3200);return()=>window.clearInterval(h)},[]),de.useEffect(()=>{l.current=!!c},[c]),de.useEffect(()=>{const h=e.current,g=new T3({antialias:!0}),_=Math.min(window.devicePixelRatio,2);g.setPixelRatio(_),g.setSize(window.innerWidth,window.innerHeight),h.appendChild(g.domElement);const v=new rb;v.background=new wt(tS);const M=new wi(74,window.innerWidth/window.innerHeight,.1,220);M.position.set(0,0,6),M.updateMatrixWorld();const b=C3(_),w=new ne(.55,.75,.65).normalize();w.transformDirection(M.matrixWorldInverse),b.uniforms.uLight.value.copy(w);const S=[],x=new qt;v.add(x);for(let $=0;$<$x;$++){const be=new qt,we=.96+$*29%7*.012,Ce=new pi(R3(4.9,1.05,6,.34),new du({color:new wt(A3).multiplyScalar(we),side:Ji,fog:!1}));be.add(Ce),be.position.z=-$*eS,be.userData.spin=($%2===0?1:-1)*(.05+$%5*.012),x.add(be),S.push(be)}const N=new pi(new gl(30,30),new du({map:w3(),transparent:!0,depthWrite:!1,fog:!1}));N.position.z=-gh+2,v.add(N);const z=[];for(let $=0;$<F_;$++){const be=Jx[$],we=K3[be.model](b),te=new eo().setFromObject(we).getCenter(new ne);we.position.sub(te);const he=new qt;he.add(we);const Re=new qt;Re.add(he);const tt=$*2.4+.7,He=1.2+$%4*.5,rt=Math.sin(tt)*He*.72;Re.position.set(Math.cos(tt)*He,rt,-5-$*B_),Re.scale.setScalar(.72+$*37%10/30),Re.userData.itemId=be.no,v.add(Re),z.push({outer:Re,inner:he,item:be,spin:($%3-1)*.24,bobPhase:$*1.7,baseY:rt})}let C=0,D=0,U=0,I=!1;const T=$=>{$.preventDefault(),!l.current&&(C+=$.deltaY*.0042,C=Math.max(-3.2,Math.min(3.2,C)))},O=new Ab,V=new ct;let X=null,Z=0,ie=0,j=0;const K=($,be)=>{V.set($/window.innerWidth*2-1,-(be/window.innerHeight)*2+1),O.setFromCamera(V,M);const we=O.intersectObjects(z.map(te=>te.outer),!0);if(!we.length)return null;let Ce=we[0].object;for(;Ce&&!Ce.userData.itemId;)Ce=Ce.parent;return Ce?z.find(te=>te.outer===Ce)??null:null},F=$=>{if(X){X.inner.rotation.y+=$.movementX*.012,X.inner.rotation.x+=$.movementY*.012,j+=Math.abs($.movementX)+Math.abs($.movementY);return}g.domElement.style.cursor=K($.clientX,$.clientY)?"grab":"default"},G=$=>{X=K($.clientX,$.clientY),Z=$.clientX,ie=$.clientY,j=0,X&&(g.domElement.style.cursor="grabbing")},fe=$=>{const be=X;X=null,g.domElement.style.cursor="default",be&&j<8&&Math.hypot($.clientX-Z,$.clientY-ie)<8&&f(be.item)};window.addEventListener("wheel",T,{passive:!1}),window.addEventListener("pointermove",F),window.addEventListener("pointerdown",G),window.addEventListener("pointerup",fe);const se=()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",se);const me=new Rb;function L(){const $=Math.min(me.getDelta(),.05),be=me.elapsedTime,we=C;C*=.9;let Ce=D+we;if(Ce>=mh)return r("/pier"),!1;if(Ce<-4)return r("/"),!1;Ce=Math.max(-4,Ce);const te=Ce-D;D=Ce,i.current&&(i.current.style.width=`${Math.max(0,D/mh*100)}%`),s.current&&(s.current.textContent=String(Math.round(D)).padStart(3,"0"));for(const he of S)he.position.z+=te,he.rotation.z+=he.userData.spin*$,he.position.z>4&&(he.position.z-=gh);N.position.z+=te,N.position.z>4&&(N.position.z-=gh);for(const he of z)he.outer.position.z+=te,he.outer.position.z>7&&(he.outer.position.z-=F_*B_+8),he.outer.position.y=he.baseY+Math.sin(be*.9+he.bobPhase)*.16,he!==X&&(he.inner.rotation.y+=he.spin*$);return g.render(v,M),!0}const ee=()=>{I||(U=requestAnimationFrame(ee),L())};return ee(),()=>{I=!0,cancelAnimationFrame(U),window.removeEventListener("wheel",T),window.removeEventListener("pointermove",F),window.removeEventListener("pointerdown",G),window.removeEventListener("pointerup",fe),window.removeEventListener("resize",se),g.dispose(),v.traverse($=>{const be=$;be.geometry&&be.geometry.dispose();const we=be.material;Array.isArray(we)?we.forEach(Ce=>Ce.dispose()):we?.dispose()}),h.removeChild(g.domElement)}},[r]),P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:708:5",className:"tunnel fade-in",children:[P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:709:7",ref:e,className:"tunnel-canvas"}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:710:7",className:"tunnel-vignette"}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:712:7",className:"tunnel-top",children:"PIER 07 · 海浪漩涡 · WAVE TUNNEL"}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:715:7",className:"tunnel-tip-wrap",children:P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:716:9",className:"tunnel-tip",children:z_[p]},p)}),P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:722:7",className:"tunnel-progress",children:[P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:723:9",className:"lab",children:[P.jsx("span",{"code-path":"src\\pages\\Tunnel.tsx:724:11",children:"DEPTH · 下潜深度"}),P.jsxs("span",{"code-path":"src\\pages\\Tunnel.tsx:725:11",children:[P.jsx("span",{"code-path":"src\\pages\\Tunnel.tsx:726:13",ref:s,children:"000"})," / ",mh]})]}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:729:9",className:"bar",children:P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:730:11",ref:i,className:"fill"})})]}),c&&P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:736:9",className:"tn-backdrop",onClick:()=>f(null),children:P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:737:11",className:"tn-card",onClick:h=>h.stopPropagation(),children:[P.jsx("button",{"code-path":"src\\pages\\Tunnel.tsx:738:13",className:"tn-x",onClick:()=>f(null),"aria-label":"关闭",children:"✕"}),P.jsxs("span",{"code-path":"src\\pages\\Tunnel.tsx:741:13",className:"tn-no",children:[c.no," · 拆分意象"]}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:742:13",className:"tn-imgwrap",children:P.jsx("img",{"code-path":"src\\pages\\Tunnel.tsx:743:15",src:c.img,alt:c.name})}),P.jsx("h3",{"code-path":"src\\pages\\Tunnel.tsx:745:13",children:c.name}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:746:13",className:"tn-en",children:c.en}),P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:747:13",className:"tn-row",children:[P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:748:15",className:"tn-lab",children:"HISTORY · 由来与历史"}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:749:15",className:"tn-val",children:c.history})]}),P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:751:13",className:"tn-row",children:[P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:752:15",className:"tn-lab",children:"EVOLUTION · 衍生脉络"}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:753:15",className:"tn-val",children:c.derivation})]}),P.jsxs("div",{"code-path":"src\\pages\\Tunnel.tsx:755:13",className:"tn-row",children:[P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:756:15",className:"tn-lab",children:"WORKS · 相关作品"}),P.jsx("div",{"code-path":"src\\pages\\Tunnel.tsx:757:15",className:"tn-val",children:c.works})]}),P.jsx("button",{"code-path":"src\\pages\\Tunnel.tsx:759:13",className:"tn-close",onClick:()=>f(null),children:"收起档案"})]})})]})}const G_=[{id:"crane",img:"/img/part-crane.jpg",zh:"门式起重机",en:"GANTRY CRANE",story:"钢铁巨臂垂在泊位上方，每小时吊起三十个集装箱的重量。它是码头最高的建筑，也是离云最近的地方。"},{id:"bollard",img:"/img/part-bollard.jpg",zh:"系缆桩",en:"MOORING BOLLARD",story:"所有抵达，都从一根缆绳开始。铸铁的肩膀被磨得发亮，它记得每一条船的拉力，也记得每一次离别。"},{id:"container",img:"/img/part-container.jpg",zh:"集装箱",en:"CONTAINER",story:"标准化的铁盒子，装着全世界的货物与故事。锈迹是它路过的港口，编号是它唯一的名字。"},{id:"lighthouse",img:"/img/part-lighthouse.jpg",zh:"灯塔",en:"LIGHTHOUSE",story:"夜里唯一不睡觉的人。光束每七秒扫过海面一次，替所有晚归的船，把最后一段路照亮。"},{id:"anchor",img:"/img/part-anchor.jpg",zh:"船锚",en:"ANCHOR",story:"让漂泊有理由停下来。沉在海底的时候它最安静，出水的那一刻，整艘船都松了一口气。"},{id:"gull",img:"/img/part-gull.jpg",zh:"海鸥",en:"SEAGULL",story:"码头的流浪天气预报员。它们总知道哪条船会先回来，也会在开饭前准时出现在食堂屋顶。"}],vh={img:"/img/ship-halftone.jpg"};function J3(r,e=10){let i=r;const s=()=>(i=(i*9301+49297)%233280,i/233280),l=[],c=(f,p)=>{for(let m=0;m<=f;m++){const[h,g]=p(m/f),_=h+(h===0||h===100?0:(s()-.5)*e),v=g+(g===0||g===100?0:(s()-.5)*e);l.push(`${_.toFixed(1)}% ${v.toFixed(1)}%`)}};return c(9,f=>[f*100,0]),c(6,f=>[100,f*100]),c(9,f=>[(1-f)*100,100]),c(6,f=>[0,(1-f)*100]),`polygon(${l.join(", ")})`}const $3=["pos-l1","pos-l2","pos-l3","pos-r1","pos-r2","pos-r3"];function ew(){const r=Js(),[e,i]=de.useState(null),[s,l]=de.useState(!1),[c,f]=de.useState(!1),[p,m]=de.useState(!1);de.useEffect(()=>{if(!s)return;const M=window.setTimeout(()=>f(!0),150);return()=>window.clearTimeout(M)},[s]);const h=de.useMemo(()=>G_.map((M,b)=>J3(17+b*31)),[]);de.useEffect(()=>{const M=b=>b.key==="Escape"&&(i(null),l(!1));return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[]);const g=M=>i({img:M.img,zh:M.zh,en:M.en,story:M.story}),_=()=>{m(!0),window.setTimeout(()=>{r("/archive"),l(!1),m(!1),f(!1)},750)},v=()=>l(!0);return P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:77:5",className:"pier fade-in grain",children:[P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:78:7",className:"pier-inner",children:[P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:79:9",className:"pier-topbar",children:[P.jsx("button",{"code-path":"src\\pages\\Pier.tsx:80:11",onClick:()=>r("/"),children:"← 返回开屏"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:81:11",children:"PIER 07 · 码头档案"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:85:9",className:"ship-wrap",children:[P.jsxs("figure",{"code-path":"src\\pages\\Pier.tsx:86:11",className:"ship-frame",onClick:v,children:[P.jsx("img",{"code-path":"src\\pages\\Pier.tsx:87:13",src:vh.img,alt:"远洋货轮 · 黑白网点照片"}),P.jsx("figcaption",{"code-path":"src\\pages\\Pier.tsx:88:13",className:"ship-caption",children:"MV PIER 07 · BERTH 07"})]}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:90:11",className:"ship-hint",children:"点 击 船 舶 与 卡 片 · 读 取 码 头 档 案"})]}),G_.map((M,b)=>P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:95:11",className:`torn-card ${$3[b]}`,style:{clipPath:h[b]},onClick:()=>g(M),children:[P.jsxs("span",{"code-path":"src\\pages\\Pier.tsx:101:13",className:"card-index",children:["No.0",b+1]}),P.jsx("img",{"code-path":"src\\pages\\Pier.tsx:102:13",src:M.img,alt:M.zh}),P.jsxs("span",{"code-path":"src\\pages\\Pier.tsx:103:13",className:"card-label",children:[M.zh," · ",M.en]})]},M.id))]}),e&&P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:111:9",className:"modal-backdrop",onClick:()=>i(null),children:P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:112:11",className:"modal-panel",onClick:M=>M.stopPropagation(),children:[P.jsx("img",{"code-path":"src\\pages\\Pier.tsx:113:13",src:e.img,alt:e.zh}),P.jsx("h3",{"code-path":"src\\pages\\Pier.tsx:114:13",children:e.zh}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:115:13",className:"modal-en",children:e.en}),P.jsx("p",{"code-path":"src\\pages\\Pier.tsx:116:13",children:e.story}),P.jsx("button",{"code-path":"src\\pages\\Pier.tsx:117:13",className:"modal-close",onClick:()=>i(null),children:"收起档案"})]})}),s&&P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:125:9",className:"ship-card-backdrop",onClick:()=>l(!1),children:P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:126:11",className:"book-scene",children:P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:127:11",className:`book ${c?"open":""} ${p?"flip":""}`,onClick:M=>M.stopPropagation(),children:[P.jsx("button",{"code-path":"src\\pages\\Pier.tsx:131:13",className:"close",onClick:()=>l(!1),"aria-label":"关闭",children:"✕"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:134:13",className:"book-base"}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:136:13",className:"book-mobile-head",children:[P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:137:15",className:"m-title",children:"码头档案"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:138:15",className:"m-en",children:"PIER ARCHIVE"}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:139:15",className:"tape-photo",children:[P.jsx("img",{"code-path":"src\\pages\\Pier.tsx:140:17",src:vh.img,alt:"MV PIER 07"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:141:17",className:"pcap",children:"MV PIER 07 · BERTH 07"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:143:15",className:"id-card",children:[P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:144:17",className:"id-badge"}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:145:17",className:"id-text",children:[P.jsx("b",{"code-path":"src\\pages\\Pier.tsx:146:19",children:"PIER 07"})," · 码头档案",P.jsx("br",{"code-path":"src\\pages\\Pier.tsx:146:40"}),"FILE No. 07-219",P.jsx("br",{"code-path":"src\\pages\\Pier.tsx:147:34"}),"四册档案 + 拆分意象图解"]}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:150:17",className:"barcode"})]})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:154:13",className:"book-page",children:[P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:155:15",className:"p-head",children:[P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:156:17",className:"p-tab",children:"档案启封"}),P.jsx("h3",{"code-path":"src\\pages\\Pier.tsx:157:17",children:"码头档案"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:158:17",className:"p-en",children:"PIER ARCHIVE"})]}),P.jsx("p",{"code-path":"src\\pages\\Pier.tsx:160:15",className:"p-intro",children:"它在大洋上走了四十天，终于靠上 07 号泊位。卸下的是一整座码头的记忆—— 画里的海港、书里的江岸、直播镜头前的渔港，与一切伸向水面的形式。 四册档案，另附一册拆分意象图解，现已整理完毕，等待查阅。"}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:165:15",className:"p-notes",children:[P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:166:17",className:"note",children:[P.jsx("b",{"code-path":"src\\pages\\Pier.tsx:166:39",children:"A. 经典艺术档案"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:166:55",className:"cnt",children:"39 ENTRIES"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:167:17",className:"note",children:[P.jsx("b",{"code-path":"src\\pages\\Pier.tsx:167:39",children:"L. 文学意象"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:167:53",className:"cnt",children:"50 ENTRIES"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:168:17",className:"note",children:[P.jsx("b",{"code-path":"src\\pages\\Pier.tsx:168:39",children:"S. 社会素材"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:168:53",className:"cnt",children:"50 ENTRIES"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:169:17",className:"note",children:[P.jsx("b",{"code-path":"src\\pages\\Pier.tsx:169:39",children:"F. 形式灵感"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:169:53",className:"cnt",children:"43 ENTRIES"})]})]}),P.jsx("button",{"code-path":"src\\pages\\Pier.tsx:171:15",className:"p-open",onClick:_,children:"翻开档案 →"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:176:13",className:"book-flip",children:[P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:177:15",className:"ff ff-front",children:"PIER 07"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:178:15",className:"ff ff-back",children:"PIER 07 · 07"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:181:13",className:"book-cover",children:[P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:182:15",className:"face front",children:[P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:183:17",className:"clip"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:184:17",className:"f-title",children:"码头档案"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:185:17",className:"f-en",children:"PIER ARCHIVE"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:186:17",className:"f-line",children:"SHIMO DOC · 码头2 · 182 ENTRIES"}),P.jsx("div",{"code-path":"src\\pages\\Pier.tsx:187:17",className:"f-stamp",children:"档案启封"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:189:15",className:"face back",children:[P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:190:17",className:"clip"}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:191:17",className:"tape-photo",children:[P.jsx("img",{"code-path":"src\\pages\\Pier.tsx:192:19",src:vh.img,alt:"MV PIER 07"}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:193:19",className:"pcap",children:"MV PIER 07 · BERTH 07"})]}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:195:17",className:"id-card",children:[P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:196:19",className:"id-badge"}),P.jsxs("div",{"code-path":"src\\pages\\Pier.tsx:197:19",className:"id-text",children:[P.jsx("b",{"code-path":"src\\pages\\Pier.tsx:198:21",children:"PIER 07"})," · 码头档案",P.jsx("br",{"code-path":"src\\pages\\Pier.tsx:198:42"}),"FILE No. 07-219",P.jsx("br",{"code-path":"src\\pages\\Pier.tsx:199:36"}),"四册档案 + 拆分意象图解"]}),P.jsx("span",{"code-path":"src\\pages\\Pier.tsx:202:19",className:"barcode"})]})]})]})]})})})]})}const tw={经典艺术档案:JSON.parse('[{"name":"克洛德·洛兰《海港与示巴女王登船》","text":"描绘神话场景的古典石阶码头，古船、黄昏海面，将神话故事与港口风景融合，奠定西方海港绘画范式。","source":"英国国家美术馆 伦敦","era":"1648年","tags":"巴洛克，古典风景画，理想化码头，海港，神话叙事","note":"西方最早理想化码头绘画范本，常被后世艺术家参考。"},{"name":"克洛德·洛兰《圣乌苏拉登船的海港》","text":"取材圣乌苏拉公主登船朝圣的宗教传说，港口被处理为沐浴在金色光线中的理想化空间，船只与建筑服从于整体的光线秩序。","source":"英国国家美术馆 伦敦","era":"1641年","tags":"古典艺术，海港，理想风景"},{"name":"爱德华·马奈《月光下的布洛涅港》","text":"马奈描绘布洛涅港月光下的景象，月光在港口水面上投下柔和的光晕，画面静谧而富有氛围感。","source":"奥赛博物馆 巴黎","era":"1869年","tags":"前印象派，法国港口，月光"},{"name":"J.M.W. 透纳《加莱码头》","text":"透纳早期代表作，描绘加莱港繁忙的码头景象，各种大小船只挤满海港，是浪漫主义海港画的早期典范。","source":"英国国家美术馆 伦敦","era":"1803年","tags":"浪漫主义，英国，加莱 ，海港"},{"name":"透纳《月光下的煤港》","text":"月光与工业火光交织，描绘码头搬运煤炭工人，最早记录工业时代码头劳动的绘画。","source":"美国国家美术馆","era":"1835年","tags":"浪漫主义，工业码头，夜间，煤炭装卸，工人","note":"开创性将工业码头劳动纳入风景画，史料价值极高。"},{"name":"煜呱《广州港全景图》","text":"全景记录广州珠江码头，十三行商馆、中外商船、炮台，晚清对外贸易码头最重要视觉档案。","source":"广东省博物馆 广州","era":"约1840‑1847","tags":"清代外销画，广州十三行，珠江码头，中外贸易港口","note":"全景记录广州珠江码头，十三行商馆、中外商船、炮台，晚清对外贸易码头最重要视觉档案。"},{"name":"爱德华·马奈《布洛涅码头》","text":"布洛涅港口码头，码头建筑、海面小船，简洁笔触捕捉海岸码头天光氛围。","source":"奥赛博物馆 巴黎","era":"1868年","tags":"印象派，马奈，法国渔港码头，防波堤","note":"印象派早期海港，弱化细节，重在光影氛围。"},{"name":"莫奈《费康低潮码头》","text":"诺曼底费康渔港码头，退潮后大船搁浅沙滩码头，捕捉潮汐变化下码头光影。","source":"芝加哥艺术学院","era":"1868年","tags":"印象派，莫奈，诺曼底渔港，退潮码头","note":"莫奈早期海景，重点表现潮汐对码头的影响。"},{"name":"约翰·乔治·布朗《码头工人的午休》","text":"哈德逊河码头，搬运工人在货堆上午休闲谈，背景蒸汽船帆船，记录19世纪码头劳动者日常。","source":"美国国家美术馆","era":"1879年","tags":"现实主义，纽约码头劳工，工人生活","note":"聚焦码头普通劳动者，社会纪实绘画。"},{"name":"乔治·皮埃尔·修拉《码头尽头，翁弗勒尔》","text":"修拉点彩代表作，翁弗勒尔码头防波堤与灯塔，彩色小点构建码头宁静海面光影。","source":"克罗勒‑穆勒博物馆 荷兰","era":"1886年","tags":"点彩派，修拉，法国渔港码头，灯塔防波堤","note":"新印象派码头题材典范，全部由色点构成画面。"},{"name":"保罗·西涅克《鹿特丹港口》","text":"荷兰鹿特丹繁忙工业码头，大量货船驳船，用点彩表现工业化港口喧闹氛围。","source":"奥赛博物馆","era":"1886年","tags":"点彩派，西涅克，荷兰工业码头，货船驳船","note":"点彩派表现工业港口的代表作品。"},{"name":"卡米耶·毕沙罗《巴黎塞纳河畔，玛丽桥，安茹码头》","text":"沙罗印象派代表作，描绘巴黎安茹码头实景。前景码头工人搬运砂石，码头堆放建材，驳船停靠岸边，背景玛丽石桥横跨塞纳河，捕捉19世纪巴黎内河码头日常劳动与自然光效。","source":"私人收藏","era":"约1875年","tags":"印象派，巴黎，塞纳河码头，城市劳工，玛丽桥","note":"写生作品，真实记录巴黎城市码头劳动场景；同一地点好友吉约曼也创作过同题材画作，可对照研究。","local":"/img/archive/art-12.jpg"},{"name":"阿尔芒·吉约曼《安茹码头眺望玛丽桥》","text":"吉约曼（毕沙罗终生好友），他画室就在安茹码头，与毕沙罗画同一地点。画面同样描绘砂石堆、码头工人、马车、玛丽石桥，色彩更加浓烈奔放。","source":"巴黎小皇宫博物馆","era":"1883年","tags":"印象派，巴黎，塞纳河码头，玛丽桥，城市风景","note":"两位艺术家同一地点写生，可做对比研究；毕沙罗约1875，吉约曼约1883，相隔8年","local":"/img/archive/art-13.jpg"},{"name":"卡米耶·毕沙罗 《鲁昂，拿破仑码头》","text":"毕沙罗鲁昂港口组画之一，描绘繁忙的拿破仑码头，河面停泊大量商船，岸边码头建筑错落，捕捉工业河港自然光与市井氛围。","source":"费城艺术博物馆","era":"1883 年","tags":"印象派，鲁昂，塞纳河工业码头，河港，帆船","note":"鲁昂是当时法国重要工业港口，区别巴黎城市内河小码头。","local":"/img/archive/art-14.jpg"},{"name":"毕沙罗《码头工人》","text":"毕沙罗版画作品，刻画鲁昂码头搬运工人，帆船桅杆与港口背景，表现码头底层劳动者劳作现场。","source":"巴黎现代美术馆","era":"1890年","tags":"版画，塞纳河码头劳工","note":"版画形式，适合复制传播，记录城市码头劳工；原作实际创作1887，档案沿用1890馆藏著录。","local":"/img/archive/art-15.jpg"},{"name":"保罗·西涅克《圣马洛码头》","text":"法国布列塔尼圣马洛海港码头，渔船与滨海建筑，绚烂点彩色彩描绘海湾码头。","source":"巴黎小皇宫博物馆","era":"1897‑1898年","tags":"点彩派，布列塔尼渔港，停泊的帆船、石砌码头、滨海老城建筑","note":"布列塔尼渔港码头，色彩饱和度高。","local":"/img/archive/art-16.jpg"},{"name":"梵高《圣玛丽海滩渔船》","text":"南法圣玛丽渔村码头沙滩，彩色渔船搁浅岸边，强烈色彩表现海边码头风貌。","source":"梵高博物馆","era":"1888年","tags":"后印象派，梵高，地中海渔港码头，沙滩渔船","note":"梵高海岸码头，色彩主观化，不是写实记录。","local":"/img/archive/art-17.jpg"},{"name":"亨利·卢梭《伊夫里码头》","text":"巴黎伊夫里码头，简单质朴造型，描绘塞纳河沿岸码头、船只与河岸建筑。","source":"奥赛博物馆","era":"约1907年","tags":"朴素主义","note":"朴素派，画面造型稚拙，充满童话感。","local":"/img/archive/art-18.jpg"},{"name":"乔治·布拉克《诺曼底小港湾》","text":"布拉克早期立体主义作品，把诺曼底码头、帆船、海面拆解几何块面，打破传统透视，早期立体主义海港绘画。","source":"芝加哥艺术学院","era":"1909年","tags":"立体主义，法国港口码头，几何解构","note":"码头题材被几何拆解，实验性艺术作品。","local":"/img/archive/art-19.jpg"},{"name":"乔治·贝洛斯《码头工人》","text":"寒冬冰封纽约码头，码头工人与停泊货船，真实刻画城市底层码头现实生活。","source":"英国国家美术馆","era":"1912年","tags":"垃圾箱画派，美国，纽约冬季冰封码头，码头工人","note":"美国垃圾箱画派，直面城市底层现实。","local":"/img/archive/art-20.jpg"},{"name":"阿尔伯特·马奎特《鲁昂码头》","text":"仓库、驳船、桥梁，灰调简洁色彩记录工业内河码头。","source":"圣路易斯艺术博物馆","era":"1912年","tags":"野兽派，马奎特，塞纳河工业码头，仓库驳船 马奎特，鲁昂塞纳河码头","note":"野兽派，色块简化，捕捉码头整体氛围。","local":"/img/archive/art-21.jpg"},{"name":"保罗·西涅克《圣特罗佩港口》","text":"南法圣特罗佩码头，明媚阳光，彩色点彩描绘地中海休闲渔港码头。","source":"巴黎现代美术馆","era":"1912年","tags":"点彩派，西涅克，地中海度假渔港码头","note":"度假型渔港码头，和工业码头形成对比。","local":"/img/archive/art-22.jpg"},{"name":"查尔斯·皮尔斯《夜间码头装卸》","text":"战时夜间军用码头，探照灯照亮码头，士兵工人装卸战争物资。","source":"阿什莫林博物馆","era":"1917年","tags":"一战战争版画，夜间军用码头，探照灯","note":"表现战争状态下码头夜间劳动，光影强烈。","local":"/img/archive/art-23.jpg"},{"name":"斯特拉提斯·阿西奥蒂斯《比雷埃夫斯港口》","text":"希腊比雷埃夫斯码头，雨天码头街道行人撑伞，蒸汽轮船停泊，忧郁城市海港氛围。","source":"比雷埃夫斯市立美术馆","era":"1938年","tags":"现实主义，希腊，雨中港口码头，城市生活","note":"雨天城市码头，描绘码头市民生活，不只是船舶。","local":"/img/archive/art-24.jpg"},{"name":"《黑斯廷斯鱼市海滩码头》","text":"渔民就地分拣、交易渔获，海面风帆林立，云层间穿透光束，记录19世纪英国渔业码头鲜活市井劳动场面。","source":"纳尔逊‑阿特金斯美术馆","era":"1810年","tags":"浪漫主义，渔业码头劳动","note":"浪漫主义海景，聚焦普通渔民的海岸生产生活。","local":"/img/archive/art-25.jpg"},{"name":"莫奈《波尔多港》","text":"描绘波尔多加龙河畔繁忙的港口；前景工人搬运货物，马车劳作；远景城市建筑尖顶隐约浮现。运用印象派灵动的色彩笔触，再现19世纪波尔多葡萄酒贸易港口的热闹景象。","source":"苏黎世布尔勒收藏基金会","era":"1871年","tags":"印象派，法国商贸港口，码头劳动","note":"莫奈重要港口题材作品，记录法国大西洋商贸码头。","local":"/img/archive/art-26.jpg"},{"name":"雅各布·德·巴巴里《威尼斯城市图》","text":"留存至今最早的大型城市鸟瞰图之一，港口与运河中成群的船只凸显威尼斯的海上力量。","source":"科雷尔博物馆 威尼斯","era":"1500年","tags":"文艺复兴，意大利，鸟瞰图，港口","note":"码头是城市的“肺”。船进船出，城市才有呼吸；没有港口，威尼斯就只是水中的一堆石头。","local":"/img/archive/art-27.jpg"},{"name":"老彼得·勃鲁盖尔《那不勒斯港》","text":"勃鲁盖尔游历意大利期间以细腻笔触描绘那不勒斯湾的港口与城堡。","source":"罗马多利亚·潘菲利美术馆","era":"约1558年","tags":"文艺复兴 ，佛兰德斯，海港风景","note":"码头把远方的海变成可观看的风景，也把贸易、权力和日常劳作压在同一片水面上。","local":"/img/archive/art-28.jpg"},{"name":"克劳德·洛兰《日落海港》","text":"日落霞光铺满海面。右侧码头矗立古罗马拱门遗迹，前景劳工登船、搬运物资，岸边贵族人物休憩闲谈；落日柔光笼罩海湾，将古典建筑、码头劳作与黄昏海景融为一体。","source":"圣彼得堡冬宫博物馆","era":"1634 年","tags":"古典风景，意大利海港，黄昏码头，古典遗迹","note":"注重黄昏光影渲染，融合古代建筑遗迹与码头世俗劳动场景。","local":"/img/archive/art-29.jpg"},{"name":"约翰内斯·维米尔《代尔夫特风景》","text":"维米尔从东南方向描绘代尔夫特城，前景是城市南端的三角形港口科尔克。","source":"莫瑞泰斯皇家美术馆","era":"约1660—1661年","tags":"荷兰黄金时代 ，城市景观 ，光影","note":"码头不繁忙，却像城市与外界之间的沉默接口。云、水、城墙都在等待一艘船。","local":"/img/archive/art-30.jpg"},{"name":"J.M.W. 透纳《迪耶普港》","text":"透纳1820年代中期展出两幅纪念碑式港口画作之一，以阳光的戏剧性效果为核心。","source":"弗里克收藏 纽约","era":"1825年","tags":"浪漫主义，法国港口，光线","note":"码头在透纳笔下是光的舞台。人群、船桅、旗帜都只是光线的配角。","local":"/img/archive/art-31.jpg"},{"name":"J.M.W. 透纳《科隆：邮船抵达》","text":"与《迪耶普港》同年展出，描绘科隆港邮船抵达的场景。","source":"弗里克收藏 纽约","era":"1826年","tags":"浪漫主义 ，莱茵河，港口","note":"码头是抵达与离开的临界点。邮船靠岸，城市与河流在光线中暂时合成一个整体。","local":"/img/archive/art-32.jpg"},{"name":"歌川广重《东海道五十三次·品川 日之出》","text":"描绘清晨从日本桥出发的旅人抵达第一个驿站品川，迎接日出的情景。","source":"MOA美术馆 热海","era":"1833—1834年","tags":"浮世绘 ，东海道，品川 ，港口","note":"码头是旅途的第一口呼吸。船帆与朝日同时出现，出发和希望被压在同一张画里。","local":"/img/archive/art-33.jpg"},{"name":"歌川广重《东海道五十三次·日本桥 朝之景》","text":"采用正面视角呈现日本桥，以朝霞为背景，桥那端的大名行列正缓缓现身","source":"MOA美术馆 热海","era":"1833—1834年","tags":"浮世绘 ，江户 ，日本桥","note":"虽然不直接画码头，但日本桥是江户水运网络的起点。码头在这里是城市清晨的神经末梢。","local":"/img/archive/art-34.jpg"},{"name":"皮埃尔·波纳尔《退潮时港口的船只》","text":"石砌弧形码头横亘画面，堤岸上行人漫步，海面停泊多艘白帆小渔船；远景城市建筑群与哥特教堂矗立，笔触粗犷灵动，色调沉郁，描绘退潮状态下的法国海港日常风貌。","source":"私人收藏","era":"1905年","tags":"纳比派，法国海港码头，退潮港口，城市海岸","note":"纳比派港口风景画，注重色块与概括化的码头人物刻画。","local":"/img/archive/art-35.jpg"},{"name":"歌川广重《名所江户百景·大桥安宅之夕立》","text":"描绘新大桥上突遭骤雨的情景，以大胆的构图和斜线雨丝著称。","source":"多家博物馆藏","era":"1856—1858年","tags":"浮世绘 ，江户 ，骤雨","note":"码头附近的气候总在变。雨、水、桥、船，码头是城市与天气直接碰撞的地方。","local":"/img/archive/art-36.jpg"},{"name":"克劳德·莫奈《翁弗勒尔的帆船》","text":"莫奈在翁弗勒尔绘制，描绘退潮后停泊的帆船。","source":"多家博物馆藏有版本","era":"1866年","tags":"印象派前奏 ，诺曼底，港口","note":"码头在莫奈笔下是光的练习场。船不是重点，水面和天空的反射才是。","local":"/img/archive/art-37.jpg"},{"name":"约翰·阿特金森·格里姆肖《月光下的渔港码头》","text":"满月高悬云层之间，月光洒向水面形成粼粼倒影；港内停泊多艘大型帆船，码头之上有工人活动，岸边成片码头屋舍，窗户透出点点灯火，渲染静谧朦胧的夜间港口氛围。","source":"私人收藏","era":"19世纪后期","tags":"维多利亚夜景绘画，月光码头，渔港夜色","note":"擅长月光夜景，写实刻画夜晚码头海港的光影氛围。","local":"/img/archive/art-38.jpg"},{"name":"卡尔弗特·理查德·琼斯《布罗德码头的吊桥，布里斯托尔》","text":"展示布里斯托尔老港中心一座繁忙吊桥的景象，行人与马车的运动造成前景雾状模糊。(卡罗式摄影法）","source":"维多利亚与阿尔伯特博物馆 伦敦","era":"1840年代","tags":"早期摄影 ，布里斯托尔 ，港口日常","note":"意象：码头铁路与物流）码头铁路把船运与陆运连成一条线，由来是港口货物集散需求，历史中让码头吞吐量暴增，衍生出物流、工业、连接。相关作品：19世纪末港口铁路档案摄影","local":"/img/archive/art-39.jpg"},{"name":"尔弗特·理查德·《低潮时的港口》","text":"摄影史上最早的全景照片之一（右半部分），前景是石块和水蚀泥滩，停泊的船只与港口城镇构成远景。","source":"维多利亚与阿尔伯特博物馆 伦敦","era":"1840年代","tags":"早期摄影，全景 ，港口","note":"意象：干船坞与维修）：干船坞把船托出水面，让工人能检修船底。由来是排干水的船池，历史中让船舶维修从滩涂变成工程，衍生出浮动船坞、船台、维修港。相关作品：朴茨茅斯船坞档案照片；透纳也曾画过港口与船坞题材。","local":"/img/archive/art-40.jpg"},{"name":"欧仁·布丹《安特卫普的港口》","text":"描绘阴云密布的天空、停泊的帆船和岸上白色的小楼。（木板油画)","source":"奥赛博物馆 巴黎","era":"1871年","tags":"印象派 ，安特卫普 ，港口","note":"意象：系缆桩与缆绳）：系缆桩最早是木桩、石柱，后来变成铸铁桩，作用是把船与岸连接起来。缆绳从植物纤维到钢丝绳，衍生出绳结、捆绑、脐带等意象。相关作品：丢勒《安特卫普港口》。","local":"/img/archive/art-41.jpg"},{"name":"约翰·阿特金森·格里姆肖《老斯卡伯勒：满月，涨潮》","text":"涨潮的海面波光荡漾，满月穿透云层，港内船只以深色剪影呈现；岸边码头人影活动，远方城镇点点灯火在薄雾中若隐若现，将月夜渔港的宁静与码头劳作气息融为一体。","source":"私人收藏","era":"1879年","tags":"多利亚夜景绘画，满月海港，涨潮码头，英国渔港","note":"意象由来：中世纪商贸港口实际生产设施；大航海时代扩张，灯塔、栈桥成为标配；19世纪工业港口新增街灯、货运泊位。 历史：从简易土石滩涂装卸点，演化成石砌人工港，承担货物装卸、人员登船、夜间值守。","local":"/img/archive/art-42.jpg"},{"name":"马丁努斯·罗尔比《弗雷德里克港正在捻缝的大船》","text":"画面展现丹麦弗雷德里克港海岸边的船只修缮场景，巨型木质船只搁浅在沙滩上，岸边聚集着施工的工匠与休憩的人群，远处是开阔的海面与天空，忠实记录了19世纪丹麦造船业与航海业的真实风貌。","source":"法国巴黎 卢浮宫","era":"1847年","tags":"丹麦黄金时代，现实主义绘画，海景画，造船业，卢浮宫馆藏，19世纪艺术","local":"/img/archive/art-43.jpg"},{"name":"克洛德·约瑟夫·韦尔内 《罗什福尔港》（自殖民地仓库望去）","text":"法王委托的法国五大港志系列之一：殖民地仓库前帆影忙碌、工匠穿梭，堪称18世纪的国家“港口普查”。","source":"罗什福尔海事博物馆 法国","era":"1763年","tags":"法国，港口志，蒙时代","local":"/img/archive/art-44.jpg"},{"name":"克洛德·约瑟夫·韦尔内《马赛港入口》","text":"同系列中最壮丽的一幅：圣让堡与圣尼古拉堡扼守航道，商船排队入港，展现旧制度时代法国的海权想象。","source":"卢浮宫 巴黎","era":"1754年","tags":"法国，港口志，海权","local":"/img/archive/art-45.jpg"},{"name":"J·M·W·透纳《加来栈桥》","text":"透纳的加来栈桥画稿由雕版师刻印传播：翻浪的栈桥边，帆船正放下乘客。速写般的动势借版画进入大众视野，也预示了他后来的水彩自由。","source":"私人收藏","era":"约1803年","tags":"浪漫主义，版画，旅行写生","local":"/img/archive/art-46.jpg"},{"name":"葛饰北斋《富岳三十六景·武阳佃岛》","text":"江户湾佃岛渔村的晒网场与往来的五大力船，远处富士山小如徽章。庶民的码头日常进入了“世界图像”。","source":"大都会艺术博物馆 纽约","era":"约1830–1832年","tags":"浮世绘，江户港，富士山","local":"/img/archive/art-47.jpg"},{"name":"约翰·康斯太勃尔《滑铁卢桥开通》","text":"泰晤士河上的大桥开通盛典：蒸汽船与帆船混泊，桥塔脚手架尚未拆除。康斯太勃尔以云与水为真正的画面主角。","source":"私人收藏（1832年皇家艺术研究院展出）","era":"1832年","tags":"浪漫主义，泰晤士河，城市庆典","local":"/img/archive/art-48.jpg"},{"name":"古斯塔夫·勒·格雷 《水面上的双桅船》","text":"天空与海面分别曝光再拼合于同一张底片——摄影术早期最富盛名的“后期合成”传奇，让海景第一次拥有戏剧性的云。","source":"J·保罗·盖蒂博物馆 洛杉矶","era":"1856年","tags":"摄影史，海景，合成印相","local":"/img/archive/art-49.jpg"},{"name":"詹姆斯·惠斯勒《沃平》","text":"泰晤士河南岸沃平码头：水手、缆绳、酒馆与蒸汽船混作一团。惠斯勒以近乎新闻摄影的视角描绘伦敦码头众生相。","source":"华盛顿国家美术馆 美国","era":"1860–1864年","tags":"现实主义，晤士河，市井码头","local":"/img/archive/art-50.jpg"}]'),文学意象:[{name:"黄埔江码头",text:"苏州河的浊水幻成了金绿色",source:"茅盾《子夜》",era:"1933",tags:"书籍-都会",note:"开篇场景即在驶向上海的船上，吴老太爷由码头接车进城，全书以上海为舞台写民族资本。"},{name:"十六铺码头",text:"香港的陷落成全了她",source:"张爱玲《倾城之恋》",era:"1943",tags:"书籍/影视-都会",note:"白流苏两度乘轮船往返沪港之间，码头是她从退路走向生路的转换口"},{name:"边城渡口",text:"“由四川过湖南去，靠东有一条官路……有一小溪，溪边有座白色小塔，塔下住了一户单独的人家。”",source:"沈从文《边城》",era:"1934",tags:"书籍/影视-乡土",note:"渡口与白塔是小说核心空间"},{name:"伊萨卡港",text:"费埃克斯人的船趁夜把奥德修斯送抵伊萨卡港湾，他在橄榄树丛中醒来——二十年漂泊在此落锚。",source:"荷马《奥德赛》",era:"公元前8世纪",tags:"史诗"},{name:"乌篷船码头",text:"一直到现在，我实在再没有吃到那夜似的好豆，也不再看到那夜似的好戏了。",source:"鲁迅《社戏》",era:"1922",tags:"书籍-乡土",note:"前半写平桥村河埠头乘乌篷船夜航看社戏，结尾此句收束全篇。"},{name:"咸亨酒店门口水岸",text:"大淖是一片大水，淖边草房里住着挑夫、锡匠，十一子和巧云在这方水码头边长大",source:"汪曾祺《大淖记事》",era:"1981",tags:"书籍-乡土",note:"“淖”即高邮湖荡间的大水洼；以码头劳工的世界写出底层人生的洁净与尊严。"},{name:"荣国府码头",text:"黛玉自那日弃舟登岸时，便有荣国府打发了轿子并拉行李的车辆久候了。",source:"曹雪芹《红楼梦》",era:"1791",tags:"书籍/影视-世家"},{name:"周庄水巷码头",text:"旧毡帽朋友们摇船到万盛米行的河埠头粜米",source:"叶圣陶《多收了三五斗》",era:"1933",tags:"书籍-乡土",note:"“谷贱伤农”的名篇；河埠头即水乡码头，粜米的船挤在埠头，丰收反成灾"},{name:"嘉陵江码头",text:"方宝庆一家从北平逃难到重庆，在沿江的茶馆里卖艺求生，码头艺人的辛酸与善意尽在沿江的灯火里。",source:"老舍《鼓书艺人》",era:"1952",tags:"书籍-乡土",note:"以重庆为背景写民间艺人在战乱中的流离与操守。"},{name:"长江渡口",text:"夜船泊在鸭窠围，沈从文望着水边吊脚楼的灯光，看水手们上岸寻欢，记下还乡途中的这一幕。",source:"沈从文《湘行散记》",era:"1936",tags:"书籍-乡土"},{name:"白洋淀水码头",text:"库文轩被撤销烈士称号后，带着儿子东亮离开岸上，加入向阳船队，从此以码头为家、以船为乡。",source:"苏童《河岸》",era:"2009",tags:"书籍-乡土",note:"对船民而言，码头就是街道、法庭与阳台。"},{name:"北平城外码头",text:"觉慧在黎明前离家登舟，沿锦江顺流而下，逃离高家，去上海寻找新的生活。",source:"巴金《家》",era:"1933",tags:"书籍-乡土",note:"见小说结尾，为“激流”三部曲第一部的高潮"},{name:"黄河渡口",text:"花园口决堤，黄水漫流，赤杨岗的庄稼汉扶老携幼，在渡口与黄水之间逃荒求生。",source:"李凖《黄河东流去》",era:"1979",tags:"书籍-乡土",note:"以1938年花园口决堤、黄泛区大逃荒的史实为底本"},{name:"兰州黄河桥渡",text:"浔阳江头夜送客，枫叶荻花秋瑟瑟",source:"白居易《琵琶行》",era:"816",tags:"诗词",note:"“江头”即江边渡口码头"},{name:"上海苏州河码头",text:"弄堂女儿王琦瑶的一生，在苏州河的仓库、桥影与上海的里弄之间缓缓展开。",source:"王安忆《长恨歌》",era:"1995",tags:"书籍-都会",note:"苏州河两岸的仓库与里弄构成王琦瑶时代的上海底景"},{name:"外滩码头",text:"上帝不响，像一切全由我定",source:"金宇澄《繁花》",era:"2012",tags:"书籍-都会"},{name:"天津海河码头",text:"有绝活的，吃荤，亮堂，站在大街中央；没能耐的，吃素，发蔫，靠边呆着。",source:"冯骥才《俗世奇人》",era:"1994年起陆续发表",tags:"书籍-人文",note:"引句见《俗世奇人》序，写码头生存哲学；序文点明“天津卫是码头”，全书皆是码头上下的奇人异事。"},{name:"渔港码头",text:"老海碰子带着小海碰子潜入北方的寒海，海参窝子和暴风潮是渔港人共同的命。",source:"邓刚《迷人的海》",era:"1983",tags:"书籍-人文",note:"小说写黄渤海渔港“海碰子”的潜水人生，开改革年代海洋文学之先。"},{name:"长亭渡口",text:"都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。",source:"柳永《雨霖铃》",era:"北宋",tags:"诗词",note:"北宋汴京漕运发达，离人多自汴河码头登舟"},{name:"灞桥渡口",text:"劳歌一曲解行舟，红叶青山水急流。日暮酒醒人已远，满天风雨下西楼。",source:"许浑《谢亭送别》",era:"晚唐",tags:"诗词",note:"“解行舟”即解缆离岸，一声橹响别尽友人。"},{name:"乌江渡口",text:"天之亡我，我何渡为",source:"司马迁《史记·项羽本纪》",era:"西汉",tags:"纪传体史书",note:"于是项王乃欲东渡乌江。乌江亭长檥船待"},{name:"易水渡口",text:"朝发枉渚兮，夕宿辰阳。入溆浦余儃佪兮，迷不知吾所如。",source:"屈原《九章·涉江》",era:"战国",tags:"诗词",note:"“朝发”“夕宿”的行船埠头，即逐臣离郢的起点。"},{name:"赤壁江岸",text:"壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。",source:"苏轼《前赤壁赋》",era:"1082",tags:"诗词"},{name:"洞庭湖渡口",text:"移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。",source:"孟浩然《宿建德江》",era:"唐",tags:"诗词"},{name:"姑苏城外码头",text:"月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。",source:"张继《枫桥夜泊》",era:"唐",tags:"诗词"},{name:"江边渡船",text:"故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。",source:"李白《黄鹤楼送孟浩然之广陵》",era:"唐",tags:"诗词",note:"目送是码头教给文人的告别方式"},{name:"西津渡",text:"京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还。",source:"王安石《泊船瓜洲》",era:"1075",tags:"诗词",note:"王安石自江宁赴京再相，泊舟瓜洲而作"},{name:"伊萨卡港",text:"战争第十年，希腊联军的战船仍锚泊在特洛伊海岸，营帐挨着船队，归期无期。",source:"荷马《伊利亚特》",era:"约公元前8世纪",tags:"史诗",note:"船队锚地即军营的边界"},{name:"特洛伊海岸",text:"特洛伊亡命者埃涅阿斯率残部七条船漂泊海上，风暴过后，在迦太基附近的海岸登陆。",source:"维吉尔《埃涅阿斯纪》",era:"约公元前19年",tags:"史诗"},{name:"奥德修斯离港处",text:"一个人并不是生来要给打败的。",source:"海明威《老人与海》",era:"1952",tags:"书籍",note:"圣地亚哥栖身的小渔港一般视为古巴科希马尔村，海明威常在那里出海钓鱼"},{name:"哈瓦那小渔港",text:"于是我们继续奋力向前，逆水行舟，被不断地向后推，直至回到往昔岁月。",source:"菲茨杰拉德《了不起的盖茨比》",era:"1925",tags:"书籍-人文",note:"第一章结尾，盖茨比朝黑夜的海面伸出手臂，望见“码头尽头的一盏绿灯”——绿灯就设在黛西家的码头尽头。"},{name:"纽约港",text:"哈克和吉姆的木筏在密西西比河上顺流而下，每到一个轮渡码头，都是一次靠岸、试探与逃离。",source:"马克·吐温《哈克贝利·费恩历险记》",era:"1884",tags:"书籍-人文",note:"马克·吐温少年时代在密西西比河上做领航员，河流细节皆出自身经历；木筏与码头构成自由与文明的分界线。"},{name:"密西西比河码头",text:"赛克斯逃回泰晤士河边的老巢，在河滨贫民窟雅各布岛上被围困，仓皇间坠楼，被自己的绳索取了性命。",source:"狄更斯《雾都孤儿》",era:"1838",tags:"书籍",note:"雅各布岛是当时伦敦真实存在的河滨贫民窟，狄更斯借它写尽码头区的贫困、犯罪与泥泞。"},{name:"伦敦码头",text:"马格维奇冒险从泰晤士河夜渡回伦敦见皮普，皮普和赫伯特划船接应，逃亡计划败于河上的盘查。",source:"狄更斯《远大前程》",era:"1861",tags:"书籍",note:"马格维奇是皮普的隐秘资助人，一场夜渡把恩情与阶级交割在河面码头上。"},{name:"泰晤士河码头",text:"加西莫多在格雷沃广场的刑台上受鞭刑示众，烈日下干渴呼救，满场围观者中唯有爱斯梅拉达上前送水。",source:"雨果《巴黎圣母院》",era:"1831",tags:"书籍",note:"格雷沃广场原是塞纳河滩码头广场，今巴黎市政厅广场一带"},{name:"巴黎塞纳河码头",text:"外祖父带着阿廖沙在伏尔加河码头上船，纤夫们弓身拉纤、号子低沉的身影，从此印进孩子的眼睛。",source:"高尔基《童年》",era:"1913",tags:"书籍"},{name:"伏尔加河码头",text:"拉斯科尔尼科夫沿着涅瓦河滨河和一座座运河桥漫无目的地走，水岸成了他与自己对话的地方。",source:"陀思妥耶夫斯基《罪与罚》",era:"1866",tags:"书籍",note:"滨河与运河桥是小说中人物徘徊、相遇与忏悔的典型空间。"},{name:"圣彼得堡河岸",text:"在海的远处，水是那么蓝，像最美丽的矢车菊花瓣，同时又是那么清，像最明亮的玻璃。",source:"安徒生《海的女儿》",era:"1837",tags:"童话",note:"王子泊船的海港是望向人类世界的窗口。"},{name:"都柏林港口",text:"亨利带着凯瑟琳趁夜从湖岸划一条小艇离开意大利，横渡马焦雷湖，在瑞士一侧登岸。",source:"海明威《永别了，武器》",era:"1929",tags:"书籍",note:"是爱情与战争的最后一道界线"},{name:"都柏林海岸",text:"萨林姆离开海岸小镇，到大河转弯处的河港定居开店，眼看独立的希望在这里装卸、腐烂。",source:"奈保尔《河湾》",era:"1979",tags:"书籍",note:"殖民时代非洲河港小镇的衰败"},{name:"马赛港",text:"悉达多向船夫瓦稣迪瓦学摆渡，终日在渡口迎来送往，终于有一天，他从河水里听懂了万物圆融的声音。",source:"赫尔曼·黑塞《悉达多》",era:"1922",tags:"书籍",note:"渡口渡人者自渡的象征是黑塞的东方悟道。"},{name:"威尼斯码头",text:"十年之后，拉姆齐先生终于带着孩子们从海湾的泊船处驶向灯塔，航程补上了多年前欠下的那个允诺。",source:"弗吉尼亚·伍尔夫《到灯塔去》",era:"1927",tags:"书籍"},{name:"奥赛码头",text:"在五十三年七个月零十一天以来的日日夜夜，弗洛伦蒂诺·阿里萨一直都准备好了答案。",source:"加西亚·马尔克斯《霍乱时期的爱情》",era:"1985",tags:"书籍"},{name:"北海港口",text:"马洛沿刚果河深入内陆，在贸易站的汽船码头接船、修船，沿河去寻找神出鬼没的库尔茨。",source:"约瑟夫·康拉德《黑暗之心》",era:"1899",tags:"书籍"},{name:"马赛老港",text:"“法老号”进港的清晨，水手唐代斯在码头上被捕，一场冤案从马赛老港起航。",source:"大仲马《基督山伯爵》",era:"1844",tags:"书籍",note:"法老号到港、唐代斯在码头被捕；港外的伊夫堡监狱即今天的马赛名胜。"},{name:"港口城市",text:"安东尼奥的商船在海上未归，他又给挚友巴萨尼奥签下借据，债主夏洛克执意要从他身上割下一磅肉。",source:"莎士比亚《威尼斯商人》",era:"1597",tags:"书籍-人文",note:"里亚尔托是威尼斯商贸消息的集散地；里亚尔托桥至今是大运河上的商业中心。"},{name:"河岸渡口",text:"一只天鹅逃出樊笼，双爪却被河滩的柏油粘住，在挣扎中怀念故乡的湖泊——旧巴黎正被拆毁，诗人与它一同怀旧。",source:"波德莱尔《天鹅》（《恶之花》）",era:"1857",tags:"诗词",note:"写于奥斯曼改造巴黎期间，旧河滩与街巷正在消失"},{name:"斯凯岛码头",text:"伊芙琳攥着去布宜诺斯艾利斯的船票，在拥挤的码头被人流裹向跳板，最后一刻却死死抓住栏杆，没有上船。",source:"乔伊斯《都柏林人·伊芙琳》",era:"1914",tags:"书籍",note:"码头是出走与滞留的分界线"},{name:"南美港口",text:"凌晨，布卢姆扶着醉酒的斯蒂芬在码头边的马车夫棚屋歇脚，给他叫了一杯浓可可。",source:"詹姆斯·乔伊斯《尤利西斯》",era:"1922",tags:"书籍",note:"第十六章欧迈俄斯，场景在都柏林利菲河的码头区"},{name:"荆门山长江渡口",text:"渡远荆门外，来从楚国游。山随平野尽，江入大荒流。月下飞天镜，云生结海楼。仍怜故乡水，万里送行舟",source:"李白《渡荆门送别》",era:"唐"}],社会素材:[{name:"朱蓬口码头直播间",text:"主播直接把直播间搬到渔船码头，海鲜从“生产现场”直接进入“镜头现场”；码头第一次同时成为产地、摄影棚和销售终端",source:"连云港市赣榆区政府",era:"2024",tags:"直播电商｜渔港｜生产现场"},{name:"港口工人罢工",text:"45,000名码头工人停工，货轮和集装箱一起停下来：一个平时几乎看不见的劳动群体突然让全国供应链“显形”",source:"美国东海岸及墨西哥湾沿岸码头工人罢工",era:"2024",tags:"劳工｜罢工｜自动化"},{name:"Instagram码头",text:"工作码头被年轻人持续拍摄，原本的货运设施因为网络传播获得了新的非正式身份",source:"中国香港西区公众货物装卸区",era:"约2010年代",tags:"社交媒体｜自拍｜公共空间"},{name:"石板路尽头是海",text:"66号公路传统终点标志把“抵达”最终压缩成一个走到海边的动作",source:"美国洛杉矶圣莫尼卡码头",era:"2009年至今",tags:"旅行｜终点｜仪式"},{name:"废墟里的年轻人",text:"航运衰退后的废弃码头成为酷儿青年聚集、生活和创作的地方",source:"美国纽约克里斯托弗街码头",era:"1970—1990年代",tags:"酷儿｜社群｜非正式占用",note:"《克里斯托弗街二号码头（两腿交叉）》(Christopher Street Pier #2 [Crossed Legs], 1976)。在70年代，这个码头是西村同性恋人士喜爱的聚会地点。"},{name:"码头争夺战",text:"罢工工人向码头进发并与警方发生冲突，码头入口由交通界面突然变成劳资冲突的政治现场",source:"加拿大温哥华巴兰坦码头",era:"1935",tags:"劳工｜罢工｜公共冲突"},{name:"海狮占领码头",text:"海狮主动占据原本属于船只的浮台，动物栖息反而成为码头最重要的公共景观之一",source:"美国旧金山39号码头",era:"1989年至今",tags:"动物｜城市共存｜观看"},{name:"企鹅黄昏归巢",text:"约1400只小企鹅每天日落后从海里返回码头防波堤，游客观看与动物栖息之间形成新的空间秩序",source:"澳大利亚墨尔本圣基尔达码头",tags:"动物｜观赏｜生态保护"},{name:"码头边的栈桥",text:"这座木质栈桥在关闭港口功能后陷入衰败，后来依靠社区组织筹资和维护重新成为地方文化资产",source:"澳大利亚巴瑟尔顿栈桥",era:"1865年至今",tags:"遗产｜社区维护｜地方认同"},{name:"出海前的祝福仪式",text:"意大利移民社群每年举行“船队祝福”仪式，原本生产性的渔业码头被赋予宗教与社区意义",source:"澳大利亚弗里曼特尔渔船港",era:"1948年至今",tags:"仪式｜渔业｜移民文化"},{name:"新世界的第一块踏板",text:"战后大量移民从这里登陆，码头成为他们进入澳大利亚后的第一个公共空间",source:"澳大利亚墨尔本车站码头",era:"1949—1966",tags:"移民｜抵达｜身份转换"},{name:"红灯下的夜生活",text:"该码头曾悬挂着许多红色油灯以提醒过往船只，因此从人力车夫、出租车司机和新加坡当地居民那里得到了“红灯码头”这一昵称。码头处处彰显探险与探索精神，几乎称得上是新加坡历史的有力代表。",source:"新加坡克利福德码头",era:"1950—1970年代",tags:"航海｜城市记忆｜地标"},{name:"海边的公共艺术节",text:"公共艺术被直接带入工作的商业码头，使生产、旅游与艺术展示在同一个空间并置，位于麦克米兰码头尽头的“瞭望台”（LookOut）雕塑，是为了纪念艺术家、慈善家和社区领袖南希·拉纳斯托·奥斯本（Nancy Rahnasto Osborne）而建",source:"美国普罗温斯敦麦克米伦码头",era:"2026",tags:"公共艺术｜地方文化｜社区",note:"每年夏天，当地和周边地区的艺术家们都会用原创作品装点普罗温斯敦的街道、滨水区和公共空间，赞颂创造力、地域特色和社区精神。从麦克米伦码头和商业街到小镇各处意想不到的角落，这些壁画、雕塑和特定场域装置艺术作品邀请居民和游客以全新的视角体验普罗温斯敦"},{name:"屋顶上的第二层城市",text:"最初建于1907年，作为航运和仓储码头。经多年变迁后，1947年一场大火席卷码头，持续多日才将其完全扑灭.后来原工业码头顶部增加近2英亩公共公园，使码头从单层交通平台转变成上下叠合的城市空间",source:"美国纽约57号码头",era:"2022年至今",tags:"工业遗产｜屋顶公园｜再利用"},{name:"多功能码头",text:"西雅图Pier 62巨型水上巨幕，同一平台可以举办瑜伽、足球、音乐会、节庆、市集等活动，使用方式并不被固定",source:"美国西雅图62号码头",era:"2020年至今",tags:"弹性使用｜活动｜公共生活"},{name:"从废弃码头到电影现场",text:"原警察拖车设施转化为开放公共空间，并进入翠贝卡电影节等文化活动体系",source:"美国纽约76号码头",era:"2021",tags:"文化活动｜电影｜基础设施再利用"},{name:"泰坦尼克之后",text:"泰坦尼克号幸存者乘卡帕西亚号抵达这里，使一个普通客运码头成为灾难史的重要地点",source:"美国纽约54号码头原址",era:"1912",tags:"灾难｜抵达｜集体记忆"},{name:"出发五天后的沉没",text:"卢西塔尼亚号从这里出发，五天后被德国潜艇击沉，出发地点因此与灾难形成强烈的时间关系",source:"美国纽约54号码头",era:"1915",tags:"战争｜出发｜灾难预兆"},{name:"伸进海里的舞厅",text:"舞厅、剧场、游泳池和游乐设施不断进入码头，海上交通空间逐渐成为完整的娱乐系统",source:"英国克拉克顿码头",era:"1920—1930年代",tags:"舞蹈｜青年文化｜大众娱乐"},{name:"海上剩下的骨架",text:"火灾后残存的金属骨架没有立刻消失，反而成为布莱顿海岸线最具辨识度的城市遗迹之一",source:"英国布莱顿西码头",era:"2003年至今",tags:"废墟｜火灾｜城市景观"},{name:"码头保护运动",text:"这是一场历时近20年、具有里程碑意义的英国民间古迹保护运动。该运动成功将当时英国唯一保存完好的、被誉为“英格兰最美”的 一级登录建筑维多利亚时代码头从拆除命运中解救了出来",source:"英国克里夫登码头",era:"1970—1980年代",tags:"公众募资｜遗产保护｜参与"},{name:"战争对码头的改造",text:"战争期间码头被部分拆除，原本供人娱乐的设施被改造成防止敌军登陆的防御障碍",source:"英国布莱顿宫殿码头",era:"1940年代",tags:"战争｜防御｜公共设施"},{name:"码头功能的转变",text:"剧院拆除后，游乐设施进一步扩张，码头从表演文化转向机械娱乐",source:"英国布莱顿宫殿码头",era:"1986",tags:"娱乐转型｜消费文化｜空间变化"},{name:"沿着海面运行的铁路",text:"窄轨电车直接沿码头运行，陆地交通系统在这里被拉进海上",source:"英国海斯码头",era:"1922年至今",tags:"铁路｜接驳｜交通遗产"},{name:"火灾中的单向撤离",text:"火灾发生在海上尽端，游客必须沿唯一的线性通道撤离，码头的“尽端性”突然变成安全问题",source:"英国绍森德码头",era:"1959",tags:"灾难｜疏散｜公共安全"},{name:"码头上的彩虹旗",text:"当地LGBTQ社群将大型彩虹旗带到码头尽端，使一个具有强烈公共可见性的地点成为政治表达的媒介",source:"美国加州亨廷顿海滩码头",era:"2023",tags:"身份政治｜公共表达｜社群行动"},{name:"码头防御线",text:"战争时期主动破坏码头，使原本供人通行的连续路径成为阻止敌军登陆的防御设施",source:"英国沃辛码头",era:"1940",tags:"战争｜防御｜空间破坏"},{name:"灾难事件",text:"码头尽端建筑被火灾摧毁，原本作为海滨娱乐终点的建筑瞬间成为城市灾难事件的现场",source:"英国帕格宁顿码头",era:"1919",tags:"火灾｜灾难｜公共空间"},{name:"海上客运站",text:"码头建成后，大量蒸汽船在这里上下客，原本危险的潮汐登陆逐渐转变成正规的海上客运",source:"英国班戈Garth码头",era:"19世纪末—20世纪初",tags:"渡轮｜蒸汽船｜人口流动"},{name:"码头救生站",text:"码头尽端的小岛上设置救生艇站，使娱乐性码头同时承担海难救援功能",source:"英国Birnbeck码头",era:"19世纪末",tags:"救生｜海难｜公共设施"},{name:"比赛场地",text:"码头直接设置奥运标准露天游泳池，使海上交通设施成为体育活动场所",source:"英国克拉克顿码头",era:"1932",tags:"体育｜身体｜海滨娱乐"},{name:"海上运输站点",text:"早期码头主要承担Purbeck石材运输，铁路和马车把采石场与海面连接起来",source:"英国斯旺纳奇码头",era:"1859—1860",tags:"工业运输｜采石业｜地方经济"},{name:"海上旅行起点",text:"码头成为前往马恩岛等地的日间旅行起点，交通功能与海滨度假文化结合",source:"英国兰迪德诺码头",era:"20世纪",tags:"旅游｜渡轮｜大众休闲"},{name:"码头蹦极",text:"码头尽端的高空娱乐把原本用于抵达船只的垂直高度重新转化成身体冒险体验",source:"荷兰斯海弗宁恩码头",era:"21世纪",tags:"极限运动｜旅游｜消费"},{name:"海上长椅",text:"超长木质平台把“走到海里”变成海滨度假的固定仪式，码头本身成为目的地",source:"波兰索波特码头",era:"19世纪至今",tags:"散步｜观景｜度假"},{name:"重建记忆的场所",text:"飓风桑迪摧毁部分码头后，经营方以“重建家庭记忆”为叙事推动恢复，把建筑修复与地方集体记忆绑定起来",source:"美国新泽西州Casino Pier",era:"2012—2017",tags:"自然灾害｜家庭｜重建"},{name:"码头春运",text:"国庆期间日均客流达到8万人次，排队人群甚至延伸到街道，传统轮渡突然变成城市旅游与集体出行的热点",source:"武汉中华路—江汉关轮渡",era:"古代至今",tags:"节庆｜返乡｜人口流动"},{name:"码头赶集",text:"码头与场镇长期同时形成，渡船、货物、农产品和赶场人群聚集在一起，形成典型的“水上街市”",source:"重庆合川嘉陵江沿岸古码头",era:"古代至今",tags:"赶集｜贸易｜水陆转换"},{name:"古镇旅游传播",text:"古镇旅游传播，被设计出来的传统入口：码头成为穿越“旧时光”的视觉装置",source:"乌镇码头",tags:"旅游｜贸易｜文化"},{name:"旅游热潮",text:"等待成为旅行体验的一部分：码头制造进入岛屿之前的仪式感",source:"厦门鼓浪屿",tags:"旅游｜集散｜文化"},{name:"城市形象传播",text:"普通通勤空间被重新包装：码头成为观看城市天际线的移动观景台",source:"上海外滩轮渡码头",tags:"宣传｜文化｜大众休闲"},{name:"码头茶馆",text:"码头附近茶馆承担等船、等货、谈生意和休息等多重功能，交通节点自然形成日常社交空间",source:"长江沿岸码头城镇/四川、重庆",tags:"茶馆｜船工｜地方生活"},{name:"船宴",text:"船只靠岸后形成临时宴席和水上餐饮，码头逐渐衍生出具有地方特色的消费活动",source:"长江及江南地区",era:"20世纪",tags:"宴席｜商业｜地方文化"},{name:"游戏创作社区",text:"码头成为虚拟建造中的基础空间模板",source:"Minecraft 港口建筑",tags:"游戏｜空间｜虚拟"},{name:"港口ASMR",text:"汽笛、海浪、吊机声成为沉浸式体验",source:"声音类视频",tags:"网络｜沉浸｜视频"},{name:"商业摄影趋势",text:"离别空间被重新编码为爱情场景",source:"码头婚纱摄影",tags:"摄影｜商业｜地方文化"},{name:"移民故事中的港口",text:"码头承载迁徙、身份改变和新生活开始",source:"纪录片传播",tags:"人口流动｜文化｜集散"},{name:"疫情物资码头",text:"特殊时期水运承担物资转运任务，码头成为城市应急物流的临时接口",source:"中国武汉江滩水运节点",tags:"疫情｜物资运输｜应急"},{name:"端午龙舟",text:"龙舟训练、下水和竞渡队伍集结都依赖水岸节点，码头成为地方集体运动的基础设施",source:"中国广东顺德水乡码头",tags:"节庆｜体育｜社区"},{name:"码头朝圣",text:"恒河沿岸的河坛与下水阶梯使码头承担沐浴、祈祷、祭奠等宗教活动，是“码头作为神圣入口”的典型",source:"印度瓦拉纳西恒河河岸码头",tags:"宗教仪式"}],形式灵感:[{name:"Grand Canyon Skywalk（大峡谷天空步道）",text:"悬挑在峡谷上空 21 米的 U 形玻璃平台，游客走出崖壁、凌空俯瞰千米深的谷底",source:"美国科罗拉多大峡谷2007",tags:"公共设施-观景建筑",note:"原型为栈桥码头的悬挑平台",local:"/img/archive/form-01.jpg"},{name:"西溪湿地栈道",text:"杭州西溪湿地中纵横的木栈道系统，架在沼泽水面之上，串联村落、堤岛与观鸟点",source:"观鸟点 中国杭州2005开园至今",tags:"公共设施-景观设施",note:"栈桥码头架空形式"},{name:"滨海湾金沙无边际泳池",text:"新加坡地标酒店 57 层屋顶的 150 米泳池，池沿与天际线相接，视觉上水一直延伸到城市尽头",source:"新加坡2010",tags:"酒店设施",note:"取自码头平台与水面齐平的交接线",local:"/img/archive/form-03.jpg"},{name:"徐汇滨江亲水平台（上海西岸）",text:"由旧机场码头改造的开放滨水带，大台阶、慢跑道与厂房遗迹并置，市民可以一直走到水边",source:"中国上海2010 年代起",tags:"公共设施-城市更新",note:"河埠头大台阶的现代化"},{name:"珍宝海鲜舫（Jumbo Floating Restaurant）",text:"香港仔避风塘上停泊四十余年的巨型画舫，仿宫廷装饰，曾是到访香港的必游之地",source:"中国香港1976–2022",tags:"商业设施-餐饮建筑",note:"趸船码头原型商业化",local:"/img/archive/form-05.jpg"},{name:"《印象·西湖》水上舞台",text:"杭州西湖岳湖水域上的实景演出舞台，升降装置藏于水下，演出时悄然浮出水面",source:"中国杭州2007起",tags:"文化设施-演艺空间",note:"趸船原型"},{name:"丹嫩沙多水上市场",text:"曼谷西郊运河上的传统市集，小贩摇橹兜售，游客乘船穿行于摊位之间",source:"泰国19 世纪形成至今",tags:"商业设施-市集",note:"码头集市原型",local:"/img/archive/form-07.jpg"},{name:"霞浦海上渔村（疍家渔排）",text:"福建霞浦与海南陵水海面上，木板与浮筒连成的网格聚落，房屋、网箱、街巷都漂浮着",source:"中国东南沿海传统至今",tags:"居住聚落-渔业设施",note:"以码头网格为原型",local:"/img/archive/form-08.jpg"},{name:"马尔代夫水上别墅（Overwater Bungalow）",text:"度假酒店沿浅海栈桥展开的一排水上屋，房间直接架在泻湖之上，透过地板玻璃可见海水",source:"马尔代夫1970 年起",tags:"居住建筑-度假酒店",note:"栈桥＋平台原型",local:"/img/archive/form-09.jpg"},{name:"巴塞罗那邮轮港",text:"旧港改造的地中海邮轮母港，长条形码头与现代化客运楼并列，邮轮贴着城市天际线停靠",source:"西班牙1990 年代起",tags:"交通建筑-公共设施",note:"码头形式公共建筑化"},{name:"Coal Drops Yard国王十字煤场院",text:"伦敦国王十字由卸煤高架仓库改造的购物文化区，两排 Victorian 仓库之间架起曲线屋面",source:"英国伦敦2018",tags:"文化商业设施-城市更新",note:"码头仓库",local:"/img/archive/form-11.jpg"},{name:"ZeitzMOCAA（蔡茨非洲当代艺术博物馆）",text:"开普敦港口 42 座混凝土筒仓内部雕凿出的当代美术馆，谷粒通道变成贯通的中庭",source:"南非开普敦2017",tags:"文化设施-美术馆",note:"筒仓码头垂直巨构",local:"/img/archive/form-12.jpg"},{name:"船厂 1862",text:"上海陆家嘴滨江由百年造船厂改造的商业文化空间，保留船坞、塔吊与锈迹钢板",source:"中国上海2018",tags:"文化商业设施-工业遗产",note:"干船坞原型"},{name:"悉尼鱼市场",text:"南半球最大的水产品市场，紧邻 Blackwattle 湾，码头卸货、拍卖、餐饮一线贯通",source:"澳大利亚1989",tags:"商业设施-市场建筑",note:"卸鱼台原型",local:"/img/archive/form-14.jpg"},{name:"Pater Noster 灯塔酒店",text:"瑞典西海岸一座 1892 年灯塔改建的小型酒店，住客乘船抵达，房间即是曾经的灯守人居所",source:"瑞典2020",tags:"居住设施-酒店",note:"灯塔功能置换",local:"/img/archive/form-15.jpg"},{name:"中环行人天桥系统",text:"香港中环架空的步行网络，连接写字楼、商场、码头与车站，雨天可通走大半核心区",source:"中国香港1970",tags:"公共设施",note:"栈桥形式",local:"/img/archive/form-16.jpg"},{name:"滨海湾花园空中步道 （OCBC Skyway）",text:"新加坡滨海湾花园两棵擎天大树之间 22 米高的悬空走道，俯瞰整个海湾花园",source:"新加坡2012",tags:"公共设施-景观设施",note:"栈桥＋桅杆林原型",local:"/img/archive/form-17.jpg"},{name:"上海西岸保留塔吊群",text:"徐汇滨江更新中刻意保留的橙色港口塔吊，与江岸步道、美术馆群构成工业景观",source:"中国上海2010 年代",tags:"景观地标-工业遗产",note:"码头吊机作为工业雕塑",local:"/img/archive/form-18.jpg"},{name:"沙坡尾艺术西区",text:"厦门旧避风坞渔港改造的文创园区，船坞、泊岸与骑楼之间长出工作室、市集与展演空间",source:"中国厦门2014 起",tags:"文化设施-城市更新",note:"旧渔港候泊空间原型",local:"/img/archive/form-19.jpg"},{name:"The Floating Piers（浮动码头）",text:'克里斯托夫妇在意大利伊塞奥湖铺设的 3 公里金色浮桥，湖面因此成为可以步行的"街道"',source:"意大利2016",tags:"艺术装置",note:"浮码头原型",local:"/img/archive/form-20.jpg"},{name:"机场登机廊桥",text:"空中的码头，可伸缩的建筑接口，连接飞机与陆地的临时通道：人从一个世界进入另一个世界",tags:"伸缩｜接口｜接驳",local:"/img/archive/form-21.jpg"},{name:"火车站月台",text:"陆地上的码头，等待、出发、抵达的空间逻辑：没有水，也拥有航行结构",tags:"边缘｜候行｜线性",local:"/img/archive/form-22.jpg"},{name:"伸出的树根",text:"自然中的码头，根系进入土壤深处：像码头进入水面，寻找稳定的连接",tags:"根系｜分叉｜生态边界",local:"/img/archive/form-23.jpg"},{name:"书签",text:"停留在故事某一处：书页之间形成精神停靠点",tags:"阅读中的码头",local:"/img/archive/form-24.jpg"},{name:"阳台",text:"建筑伸向城市的边缘：人在这里观察外部世界",tags:"悬浮的私人码头",local:"/img/archive/form-25.jpg"},{name:"珊瑚礁",text:"生命聚集于固定结构周围：成为生态共同体入口",tags:"海洋中的自然码头",local:"/img/archive/form-26.jpg"},{name:"蜘蛛网",text:"多个节点之间建立临时通道：连接而不占有",tags:"柔性的连接码头",local:"/img/archive/form-27.jpg"},{name:"蜂巢入口",text:"内部世界与外部世界交换的位置",tags:"昆虫世界的码头",local:"/img/archive/form-28.jpg"},{name:"快递驿站",text:"人与物交换的最后节点",tags:"城市物流码头",local:"/img/archive/form-29.jpg"},{name:"行李转盘",text:"机场行李提取大厅，人的位置基本不动，物品不断循环来到人面前。码头候船空间也可以借鉴这种“物动、人等”的组织方式",tags:"循环｜等待｜集合",local:"/img/archive/form-30.jpg"},{name:"观景台",text:"路径最终不通向另一处，而通向一个视线终点。码头尽端也天然具备这种“走到最后看出去”的结构",tags:"尽端｜远眺｜停留",local:"/img/archive/form-31.jpg"},{name:"外卖取餐区",text:"骑手到达、放置、离开，整个空间始终处于交接状态。码头也可以被理解成一个不断发生“交接”的地方",tags:"集散｜快速交换｜流动",local:"/img/archive/form-32.jpg"},{name:"失物招领处",text:"人已经走了，物却留在那里。码头也天然拥有大量与“离开”相关的遗留物和记忆",tags:"遗留｜记忆｜离开",local:"/img/archive/form-33.jpg"},{name:"街头公交站牌",text:"站牌本身不会移动，却指向所有可能抵达的地方。它像码头上的航线图，把未知变成可以想象的目的地",tags:"方向｜路径｜未知",local:"/img/archive/form-34.jpg"},{name:"路边停车位",text:"停车位本质上是一块被规划出来的陆地码头，让移动中的汽车获得短暂稳定",tags:"停靠｜规则｜占据",local:"/img/archive/form-35.jpg"},{name:"旧书摊",text:"书从一个人的收藏进入另一个人的生活，像货物经过码头重新获得新的目的地",tags:"交换｜记忆｜再利用",local:"/img/archive/form-36.jpg"},{name:"街头自动售货机",text:"自动售货机没有店员，却持续完成“投递—交换”。它像一个微缩码头，让物品自行等待新的主人",tags:"交换｜无人｜供应",local:"/img/archive/form-37.jpg"},{name:"游戏加载界面",text:"玩家还没有进入游戏世界，但已经脱离现实状态。加载界面是一种数字时代的渡口",tags:"等待｜转换｜入口",local:"/img/archive/form-38.jpg"},{name:"背包",text:"背包承载一个人在移动过程中的必要物品，是一个随身的小型基地",tags:"迁移｜携带｜容纳",note:"个人携带的移动港口 生活被压缩后的容器",local:"/img/archive/form-39.jpg"},{name:"门槛与阈限空间（人类学概念）",text:"法国人类学家阿诺尔德·范·热内普在1909年出版的《过渡礼仪》中提出，所有仪式都遵循“分隔—边缘（阈限）—聚合”三阶段结构。他明确指出，从一个社会地位到另一个地位的过渡，对等于地域过渡——“如进入一村庄或房子，从一个房间进入另一个房间，或穿过街道或广场……从一个阶层到另一阶层的过渡常常礼仪性地通过‘门槛’或‘敞开空间’来标示”。维克多·特纳继承并发展了阈限理论，将阈限定义为“社会文化结构介于两者之间的过渡性状态”，具有反结构和生成性的潜能。",source:"1909年（概念提出） 20世纪初",tags:"阈限、过渡礼仪、门槛、中介空间、人类学理论",note:"门槛是尺度最小的“码头” 。码头让船与岸交接，门槛让此处与彼处交接。范·热内普的洞见在于，他用“空间”来理解“社会”——从一个身份到另一个身份的过渡，被体验为从一个空间到另一个空间的地域过渡。这恰恰是码头最本质的经验：登船的那一刻，你同时跨越了物理边界和身份边界。联想关键词：阈限、身份转换、跨越的仪式感。",local:"/img/archive/form-40.jpg"},{name:"文具盒",text:"文具盒是书包内部的“子码头”。儿童文具盒的设计遵循一套微型的空间动线原理：将收纳区域按照取用频率分层，其逻辑与集装箱码头的堆场分区如出一辙。",source:"现代工业设计（持续演进中）",tags:"微型空间、收纳动线、模块化、个人基础设施",note:"具盒是可握在手中的“集装箱堆场” 。它的尺度小到可以塞进书包，但它的空间组织逻辑完全复制了大型码头的分区策略。",local:"/img/archive/form-41.jpg"},{name:"心理咨询师",text:"心理咨询师提供稳定的时间、空间与关系设置，让来访者暂时停靠、卸载情绪、整理自我，再离岸回到生活。咨询室既不是家，也不是职场，而是一个“阈限空间”。",source:"心理治疗专业设置理论；Irvin Yalom《给心理治疗师的礼物》",tags:"心理咨询、阈限空间、情绪码头、设置、容器、过渡",note:"咨询师就是“人的码头”。码头让船卸货、补给、检修；咨询让来访者卸下情绪、获得回应、重整再出发。固定时间=泊位，保密=船坞，共情=引航。咨询结束，来访者离岸，但码头仍在。",local:"/img/archive/form-42.jpg"},{name:"斯米顿灯塔（埃迪斯通灯塔重建塔）",text:"约翰·斯米顿为埃迪斯通礁设计的这座石灯塔（1759年建成）是工程学传奇：他首创以花岗岩石块榫卯咬合、用铁楔紧固的砌法，抵抗北海巨浪百年。1882年灯塔迁至普利茅斯高地保存至今。",source:"1759年",tags:"灯塔，石构形式，港口门户",note:"码头的第一道“立面”其实在水上：灯塔是港口的形式宣言。斯米顿的砌石法后来直接用于伦敦桥等工程，他也被尊为土木工程之父——今天材料试验“莫氏/斯米顿”体系里的“斯米顿”就是他。",local:"/img/archive/form-43.jpg"},{name:"汉堡仓库城",text:"1888年起在易北河群岛上填水造陆建成的仓库城：成片红砖新哥特仓库以运河分隔、桥梁连接，构成一座水中仓储迷宫。曾是世界最大仓储综合体，现为UNESCO世界遗产。",source:"1888年",tags:"仓储城，红砖哥特，自由港",note:"它把“码头”做成了城市肌理：货从船直接吊进仓库窗洞，仓库底层即码头。2013年它与2011年的现代音乐厅易北爱乐一起入遗——新旧码头形式的对话，至今仍是汉堡的城市名片。",local:"/img/archive/form-44.jpg"},{name:"集装箱码头鸟瞰",text:"1956年马尔科姆·麦克莱恩的“理想X号”首航开启了货柜化革命：货物标准化为箱，码头形式随之彻底重构——岸桥如巨型门框，堆场如积木矩阵。这张照片呈现的就是这场革命完成后的港口形态。",source:"1956年",tags:"集装箱，桥吊，货柜化",note:"集装箱是史上最成功的“形式简化”所有改变世界的码头形式，起点往往只是不想再排队。",local:"/img/archive/form-45.jpg"},{name:"水牛城谷物升降机",text:"美国中西部湖滨的谷物升降机群：混凝土筒仓、钢架输送廊与码头驳船系统连成一体。没有任何“设计”，却让形式完全服从于粮食的重力流。",source:"1905年",tags:"谷物升降机，筒仓形式，现代主义源头",note:"建筑史最著名的“码头形式灵感”",local:"/img/archive/form-46.jpg"},{name:"莱安德罗·埃利希的“迷宫叙事”",text:"阿根廷艺术家埃利希用镜像与错视重建空间，让观众同时处于虚幻与真实之间，身体被悬置。",source:"990年代—2020年代",tags:"异托邦、镜面空间、身体悬置",note:"埃利希让你从“确信自己在哪里”过渡到“不再确信”。他的楼梯间不是用来走的，是用来迷失的——正如码头的本质不是到达对岸，而是让“在途中”变得可被体验。你站在镜面前，既不在这一侧，也不在那一侧，你在码头性的纯粹状态中。",local:"/img/archive/form-47.jpg"},{name:"爱丽丝梦游仙境的兔子洞",text:"兔子洞像隧道般笔直向前，忽然向下倾斜，爱丽丝掉进一口深井。井壁不是黑暗虚空，而是碗橱、书架、地图和图画。坠落久到她有足够时间东张西望，甚至取下一瓶柑橘酱。",source:"1865年",tags:"兔子洞、垂直通道、自由落体、阈限",note:"兔子洞是垂直的码头——水平码头跨越水面，兔子洞坠落奇境。特纳说阈限人“既不在此处，也不在彼处”。爱丽丝下坠的漫长瞬间正是如此：离开地面，未达井底；放弃控制，获得自由。过渡不一定是跨越，过渡可以是坠落。",local:"/img/archive/form-48.jpg"},{name:"AI生成艺术中的“潜在空间”",text:"在GAN和扩散模型中存在一个“潜在空间”——它不是任何一张具体图像，而是所有可能图像之间的过渡区域。在此空间中插值移动，会产生一系列拒绝被命名的中间形态。",source:"在GAN和扩散模型中存在一个“潜在空间”——它不是任何一张具体图像，而是所有可能图像之间的过渡区域。在此空间中插值移动，会产生一系列拒绝被命名的中间形态。",tags:"潜在空间、插值、数字阈限",note:"潜在空间是数字时代的码头——插值不产生“猫车”，只产生无法归类的中间态。码头不生产起点与终点，只生产“之间”。"}]},nw=[{no:"X-01",img:"/img/archive/form-05.jpg",name:"指明方向",history:"法罗斯岛约前280年 七大奇迹 为船指路",derivation:"火光铜镜→菲涅尔透镜→自动化无人化",works:"守望 召唤 孤独 精神坐标"},{no:"X-02",img:"/img/archive/art-31.jpg",name:"照明引航",history:"夜航借渔火认路、1731年泰晤士河口首设灯船",derivation:"灯船→钟浮标→雷达应答标",works:"忽明忽暗的等待、漂着的坐标"},{no:"X-03",img:"/img/archive/form-17.jpg",name:"系留、牵挂",history:"系马桩的水上版。bollard源于圆木桩",derivation:"木桩→铸铁耳桩→自动系泊→怀旧装置",works:"解缆=离别、锚点成通用隐喻"},{no:"X-04",img:"/img/archive/art-18.jpg",name:"停驻安顿",history:"石碇→木爪锚→铁锚、ankyra本义弯钩",derivation:"宋元大铁锚→帆船锚制→基督教希望符号",works:"希望与安顿、抛锚/起锚=人生动词"},{no:"X-05",img:"/img/archive/art-21.jpg",name:"过渡、承载",history:"船岸之间的最后一块木板",derivation:"木跳→制式舷梯→登机桥",works:"门槛与抉择连接的最小单元、摇晃"},{no:"X-06",img:"/img/archive/form-35.jpg",name:"延伸",history:"栈本义高架木构，栈道的水版",derivation:"木桩→铁桩混凝土、青岛栈桥1892成地标",works:"过渡与之间、残桥=时代遗骸"},{no:"X-07",img:"/img/archive/art-24.jpg",name:"承托",history:"无动力平底船当站台，随水升降",derivation:"木趸→铁趸→轮渡标配→浮动建筑底座",works:"浮动的陆地、漂泊人生"},{no:"X-08",img:"/img/archive/form-12.jpg",name:"平台",history:"deck本义屋顶，船上的地",derivation:"帆船→邮轮公共空间→滨水铺装",works:"舞台、边界、同船共济"},{no:"X-09",img:"/img/archive/art-19.jpg",name:"挡浪",history:"罗马抛石堤、breakwater字面-碎浪之水",derivation:"普利茅斯1812→消波块1950s→滨海步道",works:"牺牲-庇护、心理防线的地理模型"},{no:"X-10",img:"/img/archive/form-31.jpg",name:"托举离水",history:"让船离水修理、宋代有记录，1495年朴茨茅斯",derivation:"木闸→浮箱闸门→巨型化→遗产改造",works:"暂停-修复、空坞=剧场"},{no:"X-11",img:"/img/archive/art-39.jpg",name:"起重交换",history:"罗马踏轮吊，以小力举巨重",derivation:"人力→液压吊(1846)→集装箱桥吊(1956)",works:"交换的仪式、巨物美学"},{no:"X-12",img:"/img/archive/art-16.jpg",name:"储存记忆",history:"warehouse=货+屋、筒仓储散货",derivation:"阿尔伯特码头1846→集装箱场站→筒仓改造2017",works:"仓库=存放时间的记忆体"},{no:"X-13",img:"/img/archive/art-23.jpg",name:"缓冲消能",history:"废轮胎、垫木缓冲船岸碰撞",derivation:"橡胶护舷→充气护舷、轮胎成渔港签名",works:"以柔克刚"},{no:"X-14",img:"/img/archive/form-22.jpg",name:"聚力牵引",history:"轴向收绳，以小博大、罗马已有",derivation:"踏轮→蒸汽绞车→系缆机",works:"等待、众人推杆的合力"},{no:"X-15",img:"/img/archive/form-20.jpg",name:"报时定候",history:"自鸣钟统一船期与工时，工业时间的岸上分身",derivation:"江海关1927、江汉关1924→钟声变城市记忆",works:"时间权威、离别倒计时"},{no:"X-16",img:"/img/archive/art-20.jpg",name:"检验",history:"714年广州市舶使、1685年四海关",derivation:"榷关→近代海关→口岸联检大楼",works:"门槛、检查、放行、国境的码头"},{no:"X-17",img:"/img/archive/art-42.jpg",name:"泊驻",history:"候潮候泊的泊地、berth本义床",derivation:"天然锚地→划定锚地→泊位成核心资产",works:"给人留个位置、群灯孤立"},{no:"X-18",img:"/img/archive/form-36.jpg",name:"协调",history:"一领众和的劳动号子，协调发力也协调呼吸",derivation:"人力装卸→1922年海员大罢工→号子成非遗",works:"脊梁、集体"},{no:"X-19",img:"/img/archive/form-21.jpg",name:"凭证、通行",history:"近代轮渡，一票一人凭票登船",derivation:"纸质票→剪票钳→闸机电子客票",works:"一张票的重量、错过、离别"},{no:"X-20",img:"/img/archive/art-15.jpg",name:"日常过渡",history:"河滩凿阶即成、阶伸进河，家即是码头",derivation:"浣洗登船的日常节点→古镇乡愁景观",works:"日常生活的渡口、水的座位"}],nS={tiles:nw},iw=["/img/archive/art-12.jpg","/img/archive/art-13.jpg","/img/archive/art-14.jpg","/img/archive/art-15.jpg","/img/archive/art-16.jpg","/img/archive/art-17.jpg","/img/archive/art-18.jpg","/img/archive/art-19.jpg","/img/archive/art-20.jpg","/img/archive/art-21.jpg","/img/archive/art-22.jpg","/img/archive/art-23.jpg","/img/archive/art-24.jpg","/img/archive/art-25.jpg","/img/archive/art-26.jpg","/img/archive/art-27.jpg","/img/archive/art-28.jpg","/img/archive/art-29.jpg","/img/archive/art-30.jpg","/img/archive/art-31.jpg","/img/archive/art-32.jpg","/img/archive/art-33.jpg","/img/archive/art-34.jpg","/img/archive/art-35.jpg","/img/archive/art-36.jpg","/img/archive/art-37.jpg","/img/archive/art-38.jpg","/img/archive/art-39.jpg","/img/archive/art-40.jpg","/img/archive/art-41.jpg","/img/archive/art-42.jpg","/img/archive/art-43.jpg","/img/archive/art-44.jpg","/img/archive/art-45.jpg","/img/archive/art-46.jpg","/img/archive/art-47.jpg","/img/archive/art-48.jpg","/img/archive/art-49.jpg","/img/archive/art-50.jpg","/img/archive/form-01.jpg","/img/archive/form-03.jpg","/img/archive/form-05.jpg","/img/archive/form-07.jpg","/img/archive/form-08.jpg","/img/archive/form-09.jpg","/img/archive/form-11.jpg","/img/archive/form-12.jpg","/img/archive/form-14.jpg","/img/archive/form-15.jpg","/img/archive/form-16.jpg","/img/archive/form-17.jpg","/img/archive/form-18.jpg","/img/archive/form-19.jpg","/img/archive/form-20.jpg","/img/archive/form-21.jpg","/img/archive/form-22.jpg","/img/archive/form-23.jpg","/img/archive/form-24.jpg","/img/archive/form-25.jpg","/img/archive/form-26.jpg","/img/archive/form-27.jpg","/img/archive/form-28.jpg","/img/archive/form-29.jpg","/img/archive/form-30.jpg","/img/archive/form-31.jpg","/img/archive/form-32.jpg","/img/archive/form-33.jpg","/img/archive/form-34.jpg","/img/archive/form-35.jpg","/img/archive/form-36.jpg","/img/archive/form-37.jpg","/img/archive/form-38.jpg","/img/archive/form-39.jpg","/img/archive/form-40.jpg","/img/archive/form-41.jpg","/img/archive/form-42.jpg","/img/archive/form-43.jpg","/img/archive/form-44.jpg","/img/archive/form-45.jpg","/img/archive/form-46.jpg","/img/archive/form-47.jpg","/img/archive/form-48.jpg"],aw={pool:iw},hu=aw.pool,rw=r=>hu[(r*13+5)%hu.length],sw=r=>hu[(r*29+47)%hu.length],Mu=tw,iS=r=>r.filter(e=>e.local),cp=iS(Mu.经典艺术档案??[]),up=Mu.文学意象??[],fp=Mu.社会素材??[],dp=iS(Mu.形式灵感??[]),ow=[{id:"sec-a",idx:"A.",zh:"经典艺术档案",en:"CLASSIC ART",cnt:cp.length},{id:"sec-l",idx:"L.",zh:"文学意象",en:"LITERARY IMAGES",cnt:up.length},{id:"sec-s",idx:"S.",zh:"社会素材",en:"SOCIAL MATERIAL",cnt:fp.length},{id:"sec-f",idx:"F.",zh:"形式灵感",en:"FORMAL INSPIRATION",cnt:dp.length}],al=r=>String(r).padStart(2,"0");function lw(){const r=Js();return de.useEffect(()=>{const e=new IntersectionObserver(i=>i.forEach(s=>s.isIntersecting&&s.target.classList.add("in")),{threshold:.06});return document.querySelectorAll(".rv").forEach(i=>e.observe(i)),()=>e.disconnect()},[]),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:53:5",className:"archive fade-in",children:[P.jsx("button",{"code-path":"src\\pages\\Archive.tsx:54:7",className:"archive-back",onClick:()=>r("/pier"),children:"← 返回码头"}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:58:7",className:"archive-inner",children:[P.jsxs("header",{"code-path":"src\\pages\\Archive.tsx:60:9",className:"archive-hero",children:[P.jsx("h1",{"code-path":"src\\pages\\Archive.tsx:61:11",children:"PIER ARCHIVE"}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:62:11",className:"zh",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:63:13",children:"码头档案"}),P.jsxs("span",{"code-path":"src\\pages\\Archive.tsx:64:13",className:"meta",children:["SHIMO DOC · 码头2 · ",cp.length+up.length+fp.length+dp.length," ENTRIES · FILE EDITION"]})]})]}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:70:9",className:"archive-body",children:[P.jsxs("aside",{"code-path":"src\\pages\\Archive.tsx:72:11",className:"arch-nav",children:[P.jsx("h4",{"code-path":"src\\pages\\Archive.tsx:73:13",children:"PIER INDEX"}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:74:13",className:"sub",children:"码头档案 · 分类导览"}),ow.map(e=>P.jsxs("a",{"code-path":"src\\pages\\Archive.tsx:76:15",onClick:()=>document.getElementById(e.id)?.scrollIntoView({behavior:"smooth"}),children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:77:17",className:"idx",children:e.idx}),P.jsxs("span",{"code-path":"src\\pages\\Archive.tsx:78:17",children:[e.zh,P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:80:19",style:{opacity:.45,fontSize:11,marginLeft:8,fontFamily:"monospace"},children:e.en})]}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:84:17",className:"cnt",children:al(e.cnt)})]},e.id))]}),P.jsxs("main",{"code-path":"src\\pages\\Archive.tsx:89:11",children:[P.jsxs("section",{"code-path":"src\\pages\\Archive.tsx:91:13",className:"arch-section",id:"sec-a",children:[P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:92:15",className:"arch-sec-head rv",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:93:17",className:"no",children:"A."}),P.jsx("h2",{"code-path":"src\\pages\\Archive.tsx:94:17",children:"经典艺术档案"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:95:17",className:"en",children:"CLASSIC ART ARCHIVE"})]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:97:15",className:"folder-grid",children:cp.map((e,i)=>P.jsxs("article",{"code-path":"src\\pages\\Archive.tsx:99:19",className:"folder-card rv",children:[P.jsxs("span",{"code-path":"src\\pages\\Archive.tsx:100:21",className:"tab",children:["A-",al(i+1)," · 经典艺术档案"]}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:101:21",className:"stamp",children:"已归档 FILED"}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:102:21",className:"photo",children:P.jsx("img",{"code-path":"src\\pages\\Archive.tsx:103:23",src:e.local,alt:e.name,loading:"lazy"})}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:105:21",className:"nm",children:e.name}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:106:21",className:"tx",children:e.text}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:107:21",className:"mt",children:[e.source," · ",e.era,e.tags?` · ${e.tags}`:"",e.note?P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:110:33",className:"note",children:["◈ ",e.note]}):null]})]},i))})]}),P.jsxs("section",{"code-path":"src\\pages\\Archive.tsx:118:13",className:"arch-section",id:"sec-l",children:[P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:119:15",className:"arch-sec-head rv",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:120:17",className:"no",children:"L."}),P.jsx("h2",{"code-path":"src\\pages\\Archive.tsx:121:17",children:"文学意象"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:122:17",className:"en",children:"LITERARY IMAGES"})]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:124:15",className:"mini-grid",children:up.map((e,i)=>P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:126:19",className:"mini-card rv",children:[P.jsxs("span",{"code-path":"src\\pages\\Archive.tsx:127:21",className:"tab mini-tab2",children:["L-",al(i+1)]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:128:21",className:"mini-photo",children:P.jsx("img",{"code-path":"src\\pages\\Archive.tsx:129:23",src:rw(i),alt:"",loading:"lazy"})}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:131:21",className:"mini-body",children:[P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:132:23",className:"quote",children:e.text}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:133:23",className:"who",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:134:25",className:"src",children:e.name}),e.source?` —— ${e.source}`:""]}),e.note?P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:137:33",className:"extra",children:e.note}):null,P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:138:23",className:"era",children:e.era})]})]},i))})]}),P.jsxs("section",{"code-path":"src\\pages\\Archive.tsx:146:13",className:"arch-section",id:"sec-s",children:[P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:147:15",className:"arch-sec-head rv",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:148:17",className:"no",children:"S."}),P.jsx("h2",{"code-path":"src\\pages\\Archive.tsx:149:17",children:"社会素材"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:150:17",className:"en",children:"SOCIAL MATERIAL"})]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:152:15",className:"mini-grid",children:fp.map((e,i)=>P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:154:19",className:"mini-card rv",children:[P.jsxs("span",{"code-path":"src\\pages\\Archive.tsx:155:21",className:"tab mini-tab2",children:["S-",al(i+1)]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:156:21",className:"mini-photo",children:P.jsx("img",{"code-path":"src\\pages\\Archive.tsx:157:23",src:sw(i),alt:"",loading:"lazy"})}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:159:21",className:"mini-body",children:[P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:160:23",className:"nm2",children:e.name}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:161:23",className:"tx2",children:e.text}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:162:23",className:"mt2",children:[e.source," · ",e.era,e.tags?` · ${e.tags}`:""]})]})]},i))})]}),P.jsxs("section",{"code-path":"src\\pages\\Archive.tsx:173:13",className:"arch-section",id:"sec-f",children:[P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:174:15",className:"arch-sec-head rv",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:175:17",className:"no",children:"F."}),P.jsx("h2",{"code-path":"src\\pages\\Archive.tsx:176:17",children:"形式灵感"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:177:17",className:"en",children:"FORMAL INSPIRATION"})]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:179:15",className:"form-cols",children:dp.map((e,i)=>P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:181:19",className:"form-item folder-mini rv",children:[P.jsxs("span",{"code-path":"src\\pages\\Archive.tsx:182:21",className:"tab mini-tab",children:["F-",al(i+1)]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:183:21",className:"photo",children:P.jsx("img",{"code-path":"src\\pages\\Archive.tsx:184:23",src:e.local,alt:e.name,loading:"lazy"})}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:186:21",className:"cap",children:[P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:187:23",className:"nm",children:e.name}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:188:23",className:"tx",children:e.text}),P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:189:23",className:"mt",children:[e.source," · ",e.tags]})]})]},i))})]}),P.jsxs("section",{"code-path":"src\\pages\\Archive.tsx:199:13",className:"wheel-section rv",id:"interlude",children:[P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:200:15",className:"wheel-label",children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:201:17",className:"no",children:"◌"}),P.jsx("h2",{"code-path":"src\\pages\\Archive.tsx:202:17",children:"转 场"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:203:17",className:"en",children:"INTERLUDE · PRAYER WHEEL · HOVER TO PAUSE"})]}),P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:205:15",className:"wheel-stage",children:P.jsx("div",{"code-path":"src\\pages\\Archive.tsx:206:17",className:"wheel",children:nS.tiles.map((e,i,s)=>P.jsxs("div",{"code-path":"src\\pages\\Archive.tsx:208:21",className:"wheel-card",style:{transform:`rotateY(${360/s.length*i}deg) translateZ(430px)`},children:[P.jsx("img",{"code-path":"src\\pages\\Archive.tsx:215:23",src:e.img,alt:e.no,loading:"lazy"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:216:23",className:"wno",children:e.no})]},e.no))})})]}),P.jsxs("button",{"code-path":"src\\pages\\Archive.tsx:224:13",className:"next-band rv",onClick:()=>r("/anatomy"),children:[P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:225:15",className:"no",children:"X."}),P.jsx("h3",{"code-path":"src\\pages\\Archive.tsx:226:15",children:"拆分意象 · 图解"}),P.jsx("span",{"code-path":"src\\pages\\Archive.tsx:227:15",className:"en",children:"20 PLATES · FAN DECK →"})]})]})]})]})]})}const wa=nS.tiles;function cw(){const r=Js(),[e,i]=de.useState(0),[s,l]=de.useState(!1);de.useEffect(()=>{const f=p=>{p.key==="Escape"&&l(!1),p.key==="ArrowRight"&&i(m=>(m+1)%wa.length),p.key==="ArrowLeft"&&i(m=>(m-1+wa.length)%wa.length)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const c=wa[e];return P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:36:5",className:"anatomy fade-in",children:[P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:37:7",className:"corner tl",children:"[PIER 07]"}),P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:38:7",className:"corner tc",children:"[拆分意象 · ANATOMY]"}),P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:39:7",className:"corner tr",style:{cursor:"pointer"},onClick:()=>r("/archive"),children:"[返回档案]"}),P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:42:7",className:"corner bl",children:"码头 · 档案"}),P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:43:7",className:"corner bc",children:"KLEIN BLUE EDITION"}),P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:44:7",className:"corner br",children:"© PIER 07"}),P.jsxs("header",{"code-path":"src\\pages\\Anatomy.tsx:46:7",className:"anatomy-head",children:[P.jsx("h1",{"code-path":"src\\pages\\Anatomy.tsx:47:9",children:"ANATOMY"}),P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:48:9",className:"zh",children:"拆 分 意 象"}),P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:49:9",className:"hint",children:"点 击 两 侧 照 片 翻 动 · 点 OPEN 拆 解 意 象"})]}),P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:53:7",className:"deck-stage",children:P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:54:9",className:"deck",children:wa.map((f,p)=>{const m=p-e,h=Math.max(-4,Math.min(4,m)),g=h*-6,_=h*46,v=-Math.abs(h)*130;return P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:62:15",className:`fan-card ${m===0?"active":""}`,style:{"--ry":`${g}deg`,"--tx":`${_}%`,"--tz":`${v}px`,zIndex:20-Math.abs(h),opacity:Math.abs(m)>4?0:1,pointerEvents:Math.abs(m)>4?"none":"auto"},onClick:()=>m===0?l(!0):i(p),children:[P.jsx("img",{"code-path":"src\\pages\\Anatomy.tsx:75:17",src:f.img,alt:f.name,loading:"lazy"}),P.jsx("span",{"code-path":"src\\pages\\Anatomy.tsx:76:17",className:"fno",children:f.no})]},f.no)})})}),P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:84:7",className:"deck-ctl",children:[P.jsx("button",{"code-path":"src\\pages\\Anatomy.tsx:85:9",onClick:()=>i(f=>(f-1+wa.length)%wa.length),children:"‹ PREV"}),P.jsxs("span",{"code-path":"src\\pages\\Anatomy.tsx:86:9",className:"counter",children:[c.no," / X-",String(wa.length).padStart(2,"0")]}),P.jsx("button",{"code-path":"src\\pages\\Anatomy.tsx:89:9",className:"open",onClick:()=>l(!0),children:"OPEN · 拆分意象"}),P.jsx("button",{"code-path":"src\\pages\\Anatomy.tsx:92:9",onClick:()=>i(f=>(f+1)%wa.length),children:"NEXT ›"})]}),s&&P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:97:9",className:"ana-backdrop",onClick:()=>l(!1),children:P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:98:11",className:"ana-panel",onClick:f=>f.stopPropagation(),children:[P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:99:13",className:"visual",children:[P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:100:15",className:"photo",children:P.jsx("img",{"code-path":"src\\pages\\Anatomy.tsx:101:17",src:c.img,alt:c.name})}),P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:103:15",className:"cap",children:["FIG. ",c.no," · RANDOM PLATE · PIER 07"]})]}),P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:105:13",className:"info",children:[P.jsx("button",{"code-path":"src\\pages\\Anatomy.tsx:106:15",className:"close",onClick:()=>l(!1),"aria-label":"关闭",children:"✕"}),P.jsxs("span",{"code-path":"src\\pages\\Anatomy.tsx:109:15",className:"tab",children:[c.no," · 拆分意象"]}),P.jsx("h3",{"code-path":"src\\pages\\Anatomy.tsx:110:15",children:c.name}),P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:111:15",className:"row",children:[P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:112:17",className:"lab",children:"HISTORY · 由来与历史"}),P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:113:17",className:"val",children:c.history})]}),P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:115:15",className:"row",children:[P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:116:17",className:"lab",children:"EVOLUTION · 衍生脉络"}),P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:117:17",className:"val",children:c.derivation})]}),P.jsxs("div",{"code-path":"src\\pages\\Anatomy.tsx:119:15",className:"row",children:[P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:120:17",className:"lab",children:"WORKS · 相关作品"}),P.jsx("div",{"code-path":"src\\pages\\Anatomy.tsx:121:17",className:"val",children:c.works})]})]})]})})]})}function uw(){return P.jsxs(m1,{"code-path":"src\\App.tsx:10:5",children:[P.jsx(Gs,{"code-path":"src\\App.tsx:11:7",path:"/",element:P.jsx(sE,{"code-path":"src\\App.tsx:11:32"})}),P.jsx(Gs,{"code-path":"src\\App.tsx:12:7",path:"/tunnel",element:P.jsx(Q3,{"code-path":"src\\App.tsx:12:38"})}),P.jsx(Gs,{"code-path":"src\\App.tsx:13:7",path:"/pier",element:P.jsx(ew,{"code-path":"src\\App.tsx:13:36"})}),P.jsx(Gs,{"code-path":"src\\App.tsx:14:7",path:"/archive",element:P.jsx(lw,{"code-path":"src\\App.tsx:14:39"})}),P.jsx(Gs,{"code-path":"src\\App.tsx:15:7",path:"/anatomy",element:P.jsx(cw,{"code-path":"src\\App.tsx:15:39"})})]})}mM.createRoot(document.getElementById("root")).render(P.jsx(de.StrictMode,{"code-path":"src\\main.tsx:8:3",children:P.jsx(z1,{"code-path":"src\\main.tsx:9:5",children:P.jsx(uw,{"code-path":"src\\main.tsx:10:7"})})}));
