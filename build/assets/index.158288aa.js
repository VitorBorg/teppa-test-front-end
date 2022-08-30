(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var R={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),iv=Symbol.for("react.portal"),ov=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),av=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),cv=Symbol.for("react.forward_ref"),dv=Symbol.for("react.suspense"),fv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),Xc=Symbol.iterator;function pv(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var Eh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kh=Object.assign,Ch={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Ch,this.updater=n||Eh}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ih(){}Ih.prototype=Nr.prototype;function Iu(e,t,n){this.props=e,this.context=t,this.refs=Ch,this.updater=n||Eh}var xu=Iu.prototype=new Ih;xu.constructor=Iu;kh(xu,Nr.prototype);xu.isPureReactComponent=!0;var Zc=Array.isArray,xh=Object.prototype.hasOwnProperty,Tu={current:null},Th={key:!0,ref:!0,__self:!0,__source:!0};function Ph(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)xh.call(t,r)&&!Th.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$i,type:e,key:o,ref:s,props:i,_owner:Tu.current}}function mv(e,t){return{$$typeof:$i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===$i}function gv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ed=/\/+/g;function ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gv(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $i:case iv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ya(s,0):r,Zc(i)?(n="",e!=null&&(n=e.replace(ed,"$&/")+"/"),So(i,t,n,"",function(u){return u})):i!=null&&(Pu(i)&&(i=mv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ed,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ya(o,a);s+=So(o,t,n,l,i)}else if(l=pv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ya(o,a++),s+=So(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Eo={transition:null},yv={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:Tu};G.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!Pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Nr;G.Fragment=ov;G.Profiler=av;G.PureComponent=Iu;G.StrictMode=sv;G.Suspense=dv;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Tu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)xh.call(t,l)&&!Th.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$i,type:e.type,key:i,ref:o,props:r,_owner:s}};G.createContext=function(e){return e={$$typeof:uv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lv,_context:e},e.Consumer=e};G.createElement=Ph;G.createFactory=function(e){var t=Ph.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:cv,render:e}};G.isValidElement=Pu;G.lazy=function(e){return{$$typeof:hv,_payload:{_status:-1,_result:e},_init:vv}};G.memo=function(e,t){return{$$typeof:fv,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Be.current.useCallback(e,t)};G.useContext=function(e){return Be.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};G.useEffect=function(e,t){return Be.current.useEffect(e,t)};G.useId=function(){return Be.current.useId()};G.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Be.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};G.useRef=function(e){return Be.current.useRef(e)};G.useState=function(e){return Be.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Be.current.useTransition()};G.version="18.2.0";(function(e){e.exports=G})(R);const Dr=Sh(R.exports);var vl={},Rh={exports:{}},it={},Oh={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,b){var z=x.length;x.push(b);e:for(;0<z;){var ie=z-1>>>1,O=x[ie];if(0<i(O,b))x[ie]=b,x[z]=O,z=ie;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var b=x[0],z=x.pop();if(z!==b){x[0]=z;e:for(var ie=0,O=x.length,N=O>>>1;ie<N;){var D=2*(ie+1)-1,F=x[D],w=D+1,K=x[w];if(0>i(F,z))w<O&&0>i(K,F)?(x[ie]=K,x[w]=z,ie=w):(x[ie]=F,x[D]=z,ie=D);else if(w<O&&0>i(K,z))x[ie]=K,x[w]=z,ie=w;else break e}}return b}function i(x,b){var z=x.sortIndex-b.sortIndex;return z!==0?z:x.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,c=3,g=!1,v=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=x)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function S(x){if(E=!1,m(x),!v)if(n(l)!==null)v=!0,Xe(_);else{var b=n(u);b!==null&&ze(S,b.startTime-x)}}function _(x,b){v=!1,E&&(E=!1,p(C),C=-1),g=!0;var z=c;try{for(m(b),h=n(l);h!==null&&(!(h.expirationTime>b)||x&&!q());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,c=h.priorityLevel;var O=ie(h.expirationTime<=b);b=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),m(b)}else r(l);h=n(l)}if(h!==null)var N=!0;else{var D=n(u);D!==null&&ze(S,D.startTime-b),N=!1}return N}finally{h=null,c=z,g=!1}}var A=!1,k=null,C=-1,$=5,M=-1;function q(){return!(e.unstable_now()-M<$)}function V(){if(k!==null){var x=e.unstable_now();M=x;var b=!0;try{b=k(!0,x)}finally{b?re():(A=!1,k=null)}}else A=!1}var re;if(typeof d=="function")re=function(){d(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,we=oe.port2;oe.port1.onmessage=V,re=function(){we.postMessage(null)}}else re=function(){T(V,0)};function Xe(x){k=x,A||(A=!0,re())}function ze(x,b){C=T(function(){x(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Xe(_))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(c){case 1:case 2:case 3:var b=3;break;default:b=c}var z=c;c=b;try{return x()}finally{c=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,b){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var z=c;c=x;try{return b()}finally{c=z}},e.unstable_scheduleCallback=function(x,b,z){var ie=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ie+z:ie):z=ie,x){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,x={id:f++,callback:b,priorityLevel:x,startTime:z,expirationTime:O,sortIndex:-1},z>ie?(x.sortIndex=z,t(u,x),n(l)===null&&x===n(u)&&(E?(p(C),C=-1):E=!0,ze(S,z-ie))):(x.sortIndex=O,t(l,x),v||g||(v=!0,Xe(_))),x},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(x){var b=c;return function(){var z=c;c=b;try{return x.apply(this,arguments)}finally{c=z}}}})(Ah);(function(e){e.exports=Ah})(Oh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=R.exports,rt=Oh.exports;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dh=new Set,hi={};function Gn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(hi[e]=t,e=0;e<t.length;e++)Dh.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,td={},nd={};function _v(e){return yl.call(nd,e)?!0:yl.call(td,e)?!1:wv.test(e)?nd[e]=!0:(td[e]=!0,!1)}function Sv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ev(e,t,n,r){if(t===null||typeof t>"u"||Sv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ru,Ou);Ae[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ru,Ou);Ae[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ru,Ou);Ae[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Au(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ev(t,n,i,r)&&(n=null),r||i===null?_v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),Mh=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),$h=Symbol.for("react.offscreen"),rd=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=rd&&e[rd]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,wa;function Yr(e){if(wa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wa=t&&t[1]||""}return`
`+wa+e}var _a=!1;function Sa(e,t){if(!e||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function kv(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=Sa(e.type,!1),e;case 11:return e=Sa(e.type.render,!1),e;case 1:return e=Sa(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Zn:return"Portal";case wl:return"Profiler";case Nu:return"StrictMode";case _l:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mh:return(e.displayName||"Context")+".Consumer";case Lh:return(e._context.displayName||"Context")+".Provider";case Du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Cv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iv(e){var t=bh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=Iv(e))}function Uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function id(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zh(e,t){t=t.checked,t!=null&&Au(e,"checked",t,!1)}function Cl(e,t){zh(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Il(e,t.type,n):t.hasOwnProperty("defaultValue")&&Il(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Il(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Jr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Fh(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,Bh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function Hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function Vh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tv=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(Tv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,hr=null,pr=null;function ld(e){if(e=zi(e)){if(typeof Al!="function")throw Error(I(280));var t=e.stateNode;t&&(t=xs(t),Al(e.stateNode,e.type,t))}}function Wh(e){hr?pr?pr.push(e):pr=[e]:hr=e}function Gh(){if(hr){var e=hr,t=pr;if(pr=hr=null,ld(e),t)for(e=0;e<t.length;e++)ld(t[e])}}function Kh(e,t){return e(t)}function qh(){}var Ea=!1;function Qh(e,t,n){if(Ea)return e(t,n);Ea=!0;try{return Kh(e,t,n)}finally{Ea=!1,(hr!==null||pr!==null)&&(qh(),Gh())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=xs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Nl=!1;if(Bt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Nl=!1}function Pv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ri=!1,Bo=null,Ho=!1,Dl=null,Rv={onError:function(e){ri=!0,Bo=e}};function Ov(e,t,n,r,i,o,s,a,l){ri=!1,Bo=null,Pv.apply(Rv,arguments)}function Av(e,t,n,r,i,o,s,a,l){if(Ov.apply(this,arguments),ri){if(ri){var u=Bo;ri=!1,Bo=null}else throw Error(I(198));Ho||(Ho=!0,Dl=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(Kn(e)!==e)throw Error(I(188))}function Nv(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ud(i),e;if(o===r)return ud(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Jh(e){return e=Nv(e),e!==null?Xh(e):null}function Xh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xh(e);if(t!==null)return t;e=e.sibling}return null}var Zh=rt.unstable_scheduleCallback,cd=rt.unstable_cancelCallback,Dv=rt.unstable_shouldYield,Lv=rt.unstable_requestPaint,ve=rt.unstable_now,Mv=rt.unstable_getCurrentPriorityLevel,$u=rt.unstable_ImmediatePriority,ep=rt.unstable_UserBlockingPriority,Vo=rt.unstable_NormalPriority,$v=rt.unstable_LowPriority,tp=rt.unstable_IdlePriority,Es=null,Ot=null;function bv(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Fv,Uv=Math.log,zv=Math.LN2;function Fv(e){return e>>>=0,e===0?32:31-(Uv(e)/zv|0)|0}var io=64,oo=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Xr(a):(o&=s,o!==0&&(r=Xr(o)))}else s=n&~i,s!==0?r=Xr(s):o!==0&&(r=Xr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),i=1<<n,r|=e[n],t&=~i;return r}function jv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Et(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=jv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function Hv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function rp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ip,Uu,op,sp,ap,Ml=!1,so=[],ln=null,un=null,cn=null,gi=new Map,vi=new Map,en=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Vr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wv(e,t,n,r,i){switch(t){case"focusin":return ln=Vr(ln,e,t,n,r,i),!0;case"dragenter":return un=Vr(un,e,t,n,r,i),!0;case"mouseover":return cn=Vr(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,Vr(gi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,Vr(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function lp(e){var t=Pn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yh(n),t!==null){e.blockedOn=t,ap(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ol=r,n.target.dispatchEvent(r),Ol=null}else return t=zi(n),t!==null&&Uu(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){ko(e)&&n.delete(t)}function Gv(){Ml=!1,ln!==null&&ko(ln)&&(ln=null),un!==null&&ko(un)&&(un=null),cn!==null&&ko(cn)&&(cn=null),gi.forEach(fd),vi.forEach(fd)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Gv)))}function yi(e){function t(i){return Wr(i,e)}if(0<so.length){Wr(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Wr(ln,e),un!==null&&Wr(un,e),cn!==null&&Wr(cn,e),gi.forEach(t),vi.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&en.shift()}var mr=Kt.ReactCurrentBatchConfig,Go=!0;function Kv(e,t,n,r){var i=ee,o=mr.transition;mr.transition=null;try{ee=1,zu(e,t,n,r)}finally{ee=i,mr.transition=o}}function qv(e,t,n,r){var i=ee,o=mr.transition;mr.transition=null;try{ee=4,zu(e,t,n,r)}finally{ee=i,mr.transition=o}}function zu(e,t,n,r){if(Go){var i=$l(e,t,n,r);if(i===null)Da(e,t,r,Ko,n),dd(e,r);else if(Wv(i,e,t,n,r))r.stopPropagation();else if(dd(e,r),t&4&&-1<Vv.indexOf(e)){for(;i!==null;){var o=zi(i);if(o!==null&&ip(o),o=$l(e,t,n,r),o===null&&Da(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var Ko=null;function $l(e,t,n,r){if(Ko=null,e=Mu(r),e=Pn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case $u:return 1;case ep:return 4;case Vo:case $v:return 16;case tp:return 536870912;default:return 16}default:return 16}}var sn=null,Fu=null,Co=null;function cp(){if(Co)return Co;var e,t=Fu,n=t.length,r,i="value"in sn?sn.value:sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Co=i.slice(e,1<r?1-r:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function hd(){return!1}function ot(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:hd,this.isPropagationStopped=hd,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=ot(Lr),Ui=he({},Lr,{view:0,detail:0}),Qv=ot(Ui),Ca,Ia,Gr,ks=he({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(Ca=e.screenX-Gr.screenX,Ia=e.screenY-Gr.screenY):Ia=Ca=0,Gr=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Ia}}),pd=ot(ks),Yv=he({},ks,{dataTransfer:0}),Jv=ot(Yv),Xv=he({},Ui,{relatedTarget:0}),xa=ot(Xv),Zv=he({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=ot(Zv),ty=he({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ny=ot(ty),ry=he({},Lr,{data:0}),md=ot(ry),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function Bu(){return ay}var ly=he({},Ui,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uy=ot(ly),cy=he({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=ot(cy),dy=he({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),fy=ot(dy),hy=he({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=ot(hy),my=he({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=ot(my),vy=[9,13,27,32],Hu=Bt&&"CompositionEvent"in window,ii=null;Bt&&"documentMode"in document&&(ii=document.documentMode);var yy=Bt&&"TextEvent"in window&&!ii,dp=Bt&&(!Hu||ii&&8<ii&&11>=ii),vd=String.fromCharCode(32),yd=!1;function fp(e,t){switch(e){case"keyup":return vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function wy(e,t){switch(e){case"compositionend":return hp(t);case"keypress":return t.which!==32?null:(yd=!0,vd);case"textInput":return e=t.data,e===vd&&yd?null:e;default:return null}}function _y(e,t){if(tr)return e==="compositionend"||!Hu&&fp(e,t)?(e=cp(),Co=Fu=sn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dp&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function pp(e,t,n,r){Wh(r),t=qo(t,"onChange"),0<t.length&&(n=new ju("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,wi=null;function Ey(e){Ip(e,0)}function Cs(e){var t=ir(e);if(Uh(t))return e}function ky(e,t){if(e==="change")return t}var mp=!1;if(Bt){var Ta;if(Bt){var Pa="oninput"in document;if(!Pa){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Pa=typeof _d.oninput=="function"}Ta=Pa}else Ta=!1;mp=Ta&&(!document.documentMode||9<document.documentMode)}function Sd(){oi&&(oi.detachEvent("onpropertychange",gp),wi=oi=null)}function gp(e){if(e.propertyName==="value"&&Cs(wi)){var t=[];pp(t,wi,e,Mu(e)),Qh(Ey,t)}}function Cy(e,t,n){e==="focusin"?(Sd(),oi=t,wi=n,oi.attachEvent("onpropertychange",gp)):e==="focusout"&&Sd()}function Iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(wi)}function xy(e,t){if(e==="click")return Cs(t)}function Ty(e,t){if(e==="input"||e==="change")return Cs(t)}function Py(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Py;function _i(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,t){var n=Ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function vp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yp(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ry(e){var t=yp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vp(n.ownerDocument.documentElement,n)){if(r!==null&&Vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kd(n,o);var s=kd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oy=Bt&&"documentMode"in document&&11>=document.documentMode,nr=null,bl=null,si=null,Ul=!1;function Cd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||nr==null||nr!==jo(r)||(r=nr,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&_i(si,r)||(si=r,r=qo(bl,"onSelect"),0<r.length&&(t=new ju("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ra={},wp={};Bt&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Is(e){if(Ra[e])return Ra[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wp)return Ra[e]=t[n];return e}var _p=Is("animationend"),Sp=Is("animationiteration"),Ep=Is("animationstart"),kp=Is("transitionend"),Cp=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Cp.set(e,t),Gn(t,[e])}for(var Oa=0;Oa<Id.length;Oa++){var Aa=Id[Oa],Ay=Aa.toLowerCase(),Ny=Aa[0].toUpperCase()+Aa.slice(1);Sn(Ay,"on"+Ny)}Sn(_p,"onAnimationEnd");Sn(Sp,"onAnimationIteration");Sn(Ep,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(kp,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function xd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Av(r,t,void 0,e),e.currentTarget=null}function Ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;xd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;xd(i,a,u),o=l}}}if(Ho)throw e=Dl,Ho=!1,Dl=null,e}function le(e,t){var n=t[Hl];n===void 0&&(n=t[Hl]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function Na(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Si(e){if(!e[uo]){e[uo]=!0,Dh.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Na(n,!1,e),Na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Na("selectionchange",!1,t))}}function xp(e,t,n,r){switch(up(t)){case 1:var i=Kv;break;case 4:i=qv;break;default:i=zu}n=i.bind(null,t,n,e),i=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Pn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Qh(function(){var u=o,f=Mu(n),h=[];e:{var c=Cp.get(e);if(c!==void 0){var g=ju,v=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":g=uy;break;case"focusin":v="focus",g=xa;break;case"focusout":v="blur",g=xa;break;case"beforeblur":case"afterblur":g=xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fy;break;case _p:case Sp:case Ep:g=ey;break;case kp:g=py;break;case"scroll":g=Qv;break;case"wheel":g=gy;break;case"copy":case"cut":case"paste":g=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gd}var E=(t&4)!==0,T=!E&&e==="scroll",p=E?c!==null?c+"Capture":null:c;E=[];for(var d=u,m;d!==null;){m=d;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=mi(d,p),S!=null&&E.push(Ei(d,S,m)))),T)break;d=d.return}0<E.length&&(c=new g(c,v,null,n,f),h.push({event:c,listeners:E}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",c&&n!==Ol&&(v=n.relatedTarget||n.fromElement)&&(Pn(v)||v[Ht]))break e;if((g||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Pn(v):null,v!==null&&(T=Kn(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(E=pd,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=gd,S="onPointerLeave",p="onPointerEnter",d="pointer"),T=g==null?c:ir(g),m=v==null?c:ir(v),c=new E(S,d+"leave",g,n,f),c.target=T,c.relatedTarget=m,S=null,Pn(f)===u&&(E=new E(p,d+"enter",v,n,f),E.target=m,E.relatedTarget=T,S=E),T=S,g&&v)t:{for(E=g,p=v,d=0,m=E;m;m=Yn(m))d++;for(m=0,S=p;S;S=Yn(S))m++;for(;0<d-m;)E=Yn(E),d--;for(;0<m-d;)p=Yn(p),m--;for(;d--;){if(E===p||p!==null&&E===p.alternate)break t;E=Yn(E),p=Yn(p)}E=null}else E=null;g!==null&&Td(h,c,g,E,!1),v!==null&&T!==null&&Td(h,T,v,E,!0)}}e:{if(c=u?ir(u):window,g=c.nodeName&&c.nodeName.toLowerCase(),g==="select"||g==="input"&&c.type==="file")var _=ky;else if(wd(c))if(mp)_=Ty;else{_=Iy;var A=Cy}else(g=c.nodeName)&&g.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(_=xy);if(_&&(_=_(e,u))){pp(h,_,n,f);break e}A&&A(e,c,u),e==="focusout"&&(A=c._wrapperState)&&A.controlled&&c.type==="number"&&Il(c,"number",c.value)}switch(A=u?ir(u):window,e){case"focusin":(wd(A)||A.contentEditable==="true")&&(nr=A,bl=u,si=null);break;case"focusout":si=bl=nr=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,Cd(h,n,f);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Cd(h,n,f)}var k;if(Hu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else tr?fp(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(dp&&n.locale!=="ko"&&(tr||C!=="onCompositionStart"?C==="onCompositionEnd"&&tr&&(k=cp()):(sn=f,Fu="value"in sn?sn.value:sn.textContent,tr=!0)),A=qo(u,C),0<A.length&&(C=new md(C,e,null,n,f),h.push({event:C,listeners:A}),k?C.data=k:(k=hp(n),k!==null&&(C.data=k)))),(k=yy?wy(e,n):_y(e,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(f=new md("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=k))}Ip(h,t)})}function Ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,n),o!=null&&r.unshift(Ei(e,o,i)),o=mi(e,t),o!=null&&r.push(Ei(e,o,i))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=mi(n,o),l!=null&&s.unshift(Ei(n,l,a))):i||(l=mi(n,o),l!=null&&s.push(Ei(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ly=/\r\n?/g,My=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(Ly,`
`).replace(My,"")}function co(e,t,n){if(t=Pd(t),Pd(e)!==t&&n)throw Error(I(425))}function Qo(){}var zl=null,Fl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(Uy)}:Bl;function Uy(e){setTimeout(function(){throw e})}function La(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Mr,ki="__reactProps$"+Mr,Ht="__reactContainer$"+Mr,Hl="__reactEvents$"+Mr,zy="__reactListeners$"+Mr,Fy="__reactHandles$"+Mr;function Pn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Od(e);e!==null;){if(n=e[Tt])return n;e=Od(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[Tt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function xs(e){return e[ki]||null}var Vl=[],or=-1;function En(e){return{current:e}}function ue(e){0>or||(e.current=Vl[or],Vl[or]=null,or--)}function ae(e,t){or++,Vl[or]=e.current,e.current=t}var _n={},be=En(_n),Ke=En(!1),$n=_n;function Er(e,t){var n=e.type.contextTypes;if(!n)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Yo(){ue(Ke),ue(be)}function Ad(e,t,n){if(be.current!==_n)throw Error(I(168));ae(be,t),ae(Ke,n)}function Tp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Cv(e)||"Unknown",i));return he({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,$n=be.current,ae(be,e),ae(Ke,Ke.current),!0}function Nd(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Tp(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,ue(Ke),ue(be),ae(be,e)):ue(Ke),ae(Ke,n)}var $t=null,Ts=!1,Ma=!1;function Pp(e){$t===null?$t=[e]:$t.push(e)}function jy(e){Ts=!0,Pp(e)}function kn(){if(!Ma&&$t!==null){Ma=!0;var e=0,t=ee;try{var n=$t;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Ts=!1}catch(i){throw $t!==null&&($t=$t.slice(e+1)),Zh($u,kn),i}finally{ee=t,Ma=!1}}return null}var sr=[],ar=0,Xo=null,Zo=0,at=[],lt=0,bn=null,bt=1,Ut="";function In(e,t){sr[ar++]=Zo,sr[ar++]=Xo,Xo=e,Zo=t}function Rp(e,t,n){at[lt++]=bt,at[lt++]=Ut,at[lt++]=bn,bn=e;var r=bt;e=Ut;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var o=32-Et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,bt=1<<32-Et(t)+i|n<<i|r,Ut=o+e}else bt=1<<o|n<<i|r,Ut=e}function Wu(e){e.return!==null&&(In(e,1),Rp(e,1,0))}function Gu(e){for(;e===Xo;)Xo=sr[--ar],sr[ar]=null,Zo=sr[--ar],sr[ar]=null;for(;e===bn;)bn=at[--lt],at[lt]=null,Ut=at[--lt],at[lt]=null,bt=at[--lt],at[lt]=null}var nt=null,tt=null,ce=!1,St=null;function Op(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:bt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(ce){var t=tt;if(t){var n=t;if(!Dd(e,t)){if(Wl(e))throw Error(I(418));t=dn(n.nextSibling);var r=nt;t&&Dd(e,t)?Op(r,n):(e.flags=e.flags&-4097|2,ce=!1,nt=e)}}else{if(Wl(e))throw Error(I(418));e.flags=e.flags&-4097|2,ce=!1,nt=e}}}function Ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function fo(e){if(e!==nt)return!1;if(!ce)return Ld(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=tt)){if(Wl(e))throw Ap(),Error(I(418));for(;t;)Op(e,t),t=dn(t.nextSibling)}if(Ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?dn(e.stateNode.nextSibling):null;return!0}function Ap(){for(var e=tt;e;)e=dn(e.nextSibling)}function kr(){tt=nt=null,ce=!1}function Ku(e){St===null?St=[e]:St.push(e)}var By=Kt.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var es=En(null),ts=null,lr=null,qu=null;function Qu(){qu=lr=ts=null}function Yu(e){var t=es.current;ue(es),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){ts=e,qu=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(qu!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(ts===null)throw Error(I(308));lr=e,ts.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Rn=null;function Ju(e){Rn===null?Rn=[e]:Rn.push(e)}function Np(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var c=a.lane,g=a.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,E=a;switch(c=t,g=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(g,h,c);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,c=typeof v=="function"?v.call(g,h,c):v,c==null)break e;h=he({},h,c);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else g={eventTime:g,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,s|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=h}}function $d(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Lp=new Nh.Component().refs;function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ps={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=pn(e),o=jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(kt(t,e,i,r),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=pn(e),o=jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(kt(t,e,i,r),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=pn(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(kt(t,e,r,n),xo(t,e,r))}};function bd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function Mp(e,t,n){var r=!1,i=_n,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(i=qe(t)?$n:be.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):_n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Lp,Xu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ft(o):(o=qe(t)?$n:be.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ql(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ps.enqueueReplaceState(i,i.state,null),ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Lp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zd(e){var t=e._init;return t(e._payload)}function $p(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=mn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,S){return d===null||d.tag!==6?(d=Ba(m,p.mode,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,S){var _=m.type;return _===er?f(p,d,m.props.children,S,m.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Jt&&zd(_)===d.type)?(S=i(d,m.props),S.ref=Kr(p,d,m),S.return=p,S):(S=No(m.type,m.key,m.props,null,p.mode,S),S.ref=Kr(p,d,m),S.return=p,S)}function u(p,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ha(m,p.mode,S),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,S,_){return d===null||d.tag!==7?(d=Ln(m,p.mode,S,_),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ba(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case to:return m=No(d.type,d.key,d.props,null,p.mode,m),m.ref=Kr(p,null,d),m.return=p,m;case Zn:return d=Ha(d,p.mode,m),d.return=p,d;case Jt:var S=d._init;return h(p,S(d._payload),m)}if(Jr(d)||Br(d))return d=Ln(d,p.mode,m,null),d.return=p,d;ho(p,d)}return null}function c(p,d,m,S){var _=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(p,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case to:return m.key===_?l(p,d,m,S):null;case Zn:return m.key===_?u(p,d,m,S):null;case Jt:return _=m._init,c(p,d,_(m._payload),S)}if(Jr(m)||Br(m))return _!==null?null:f(p,d,m,S,null);ho(p,m)}return null}function g(p,d,m,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,a(d,p,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case to:return p=p.get(S.key===null?m:S.key)||null,l(d,p,S,_);case Zn:return p=p.get(S.key===null?m:S.key)||null,u(d,p,S,_);case Jt:var A=S._init;return g(p,d,m,A(S._payload),_)}if(Jr(S)||Br(S))return p=p.get(m)||null,f(d,p,S,_,null);ho(d,S)}return null}function v(p,d,m,S){for(var _=null,A=null,k=d,C=d=0,$=null;k!==null&&C<m.length;C++){k.index>C?($=k,k=null):$=k.sibling;var M=c(p,k,m[C],S);if(M===null){k===null&&(k=$);break}e&&k&&M.alternate===null&&t(p,k),d=o(M,d,C),A===null?_=M:A.sibling=M,A=M,k=$}if(C===m.length)return n(p,k),ce&&In(p,C),_;if(k===null){for(;C<m.length;C++)k=h(p,m[C],S),k!==null&&(d=o(k,d,C),A===null?_=k:A.sibling=k,A=k);return ce&&In(p,C),_}for(k=r(p,k);C<m.length;C++)$=g(k,p,C,m[C],S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?C:$.key),d=o($,d,C),A===null?_=$:A.sibling=$,A=$);return e&&k.forEach(function(q){return t(p,q)}),ce&&In(p,C),_}function E(p,d,m,S){var _=Br(m);if(typeof _!="function")throw Error(I(150));if(m=_.call(m),m==null)throw Error(I(151));for(var A=_=null,k=d,C=d=0,$=null,M=m.next();k!==null&&!M.done;C++,M=m.next()){k.index>C?($=k,k=null):$=k.sibling;var q=c(p,k,M.value,S);if(q===null){k===null&&(k=$);break}e&&k&&q.alternate===null&&t(p,k),d=o(q,d,C),A===null?_=q:A.sibling=q,A=q,k=$}if(M.done)return n(p,k),ce&&In(p,C),_;if(k===null){for(;!M.done;C++,M=m.next())M=h(p,M.value,S),M!==null&&(d=o(M,d,C),A===null?_=M:A.sibling=M,A=M);return ce&&In(p,C),_}for(k=r(p,k);!M.done;C++,M=m.next())M=g(k,p,C,M.value,S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?C:M.key),d=o(M,d,C),A===null?_=M:A.sibling=M,A=M);return e&&k.forEach(function(V){return t(p,V)}),ce&&In(p,C),_}function T(p,d,m,S){if(typeof m=="object"&&m!==null&&m.type===er&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case to:e:{for(var _=m.key,A=d;A!==null;){if(A.key===_){if(_=m.type,_===er){if(A.tag===7){n(p,A.sibling),d=i(A,m.props.children),d.return=p,p=d;break e}}else if(A.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Jt&&zd(_)===A.type){n(p,A.sibling),d=i(A,m.props),d.ref=Kr(p,A,m),d.return=p,p=d;break e}n(p,A);break}else t(p,A);A=A.sibling}m.type===er?(d=Ln(m.props.children,p.mode,S,m.key),d.return=p,p=d):(S=No(m.type,m.key,m.props,null,p.mode,S),S.ref=Kr(p,d,m),S.return=p,p=S)}return s(p);case Zn:e:{for(A=m.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Ha(m,p.mode,S),d.return=p,p=d}return s(p);case Jt:return A=m._init,T(p,d,A(m._payload),S)}if(Jr(m))return v(p,d,m,S);if(Br(m))return E(p,d,m,S);ho(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Ba(m,p.mode,S),d.return=p,p=d),s(p)):n(p,d)}return T}var Cr=$p(!0),bp=$p(!1),Fi={},At=En(Fi),Ci=En(Fi),Ii=En(Fi);function On(e){if(e===Fi)throw Error(I(174));return e}function Zu(e,t){switch(ae(Ii,t),ae(Ci,e),ae(At,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tl(t,e)}ue(At),ae(At,t)}function Ir(){ue(At),ue(Ci),ue(Ii)}function Up(e){On(Ii.current);var t=On(At.current),n=Tl(t,e.type);t!==n&&(ae(Ci,e),ae(At,n))}function ec(e){Ci.current===e&&(ue(At),ue(Ci))}var de=En(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=[];function tc(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var To=Kt.ReactCurrentDispatcher,ba=Kt.ReactCurrentBatchConfig,Un=0,fe=null,_e=null,ke=null,is=!1,ai=!1,xi=0,Hy=0;function Le(){throw Error(I(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,i,o){if(Un=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?Ky:qy,e=n(r,i),ai){o=0;do{if(ai=!1,xi=0,25<=o)throw Error(I(301));o+=1,ke=_e=null,t.updateQueue=null,To.current=Qy,e=n(r,i)}while(ai)}if(To.current=os,t=_e!==null&&_e.next!==null,Un=0,ke=_e=fe=null,is=!1,t)throw Error(I(300));return e}function ic(){var e=xi!==0;return xi=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?fe.memoizedState=ke=e:ke=ke.next=e,ke}function ht(){if(_e===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ke===null?fe.memoizedState:ke.next;if(t!==null)ke=t,_e=e;else{if(e===null)throw Error(I(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ke===null?fe.memoizedState=ke=e:ke=ke.next=e}return ke}function Ti(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=ht(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Un&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,fe.lanes|=f,zn|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ct(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function za(e){var t=ht(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ct(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zp(){}function Fp(e,t){var n=fe,r=ht(),i=t(),o=!Ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,oc(Hp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Bp.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(I(349));(Un&30)!==0||jp(n,t,i)}return i}function jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bp(e,t,n,r){t.value=n,t.getSnapshot=r,Vp(t)&&Wp(e)}function Hp(e,t,n){return n(function(){Vp(t)&&Wp(e)})}function Vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Wp(e){var t=Vt(e,1);t!==null&&kt(t,e,1,-1)}function Fd(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Gy.bind(null,fe,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gp(){return ht().memoizedState}function Po(e,t,n,r){var i=xt();fe.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function Rs(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(_e!==null){var s=_e.memoizedState;if(o=s.destroy,r!==null&&nc(r,s.deps)){i.memoizedState=Pi(t,n,o,r);return}}fe.flags|=e,i.memoizedState=Pi(1|t,n,o,r)}function jd(e,t){return Po(8390656,8,e,t)}function oc(e,t){return Rs(2048,8,e,t)}function Kp(e,t){return Rs(4,2,e,t)}function qp(e,t){return Rs(4,4,e,t)}function Qp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yp(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4,4,Qp.bind(null,t,e),n)}function sc(){}function Jp(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xp(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zp(e,t,n){return(Un&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(Ct(n,t)||(n=np(),fe.lanes|=n,zn|=n,e.baseState=!0),t)}function Vy(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=ba.transition;ba.transition={};try{e(!1),t()}finally{ee=n,ba.transition=r}}function em(){return ht().memoizedState}function Wy(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tm(e))nm(t,n);else if(n=Np(e,t,n,r),n!==null){var i=je();kt(n,e,r,i),rm(n,t,r)}}function Gy(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tm(e))nm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,s)){var l=t.interleaved;l===null?(i.next=i,Ju(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Np(e,t,i,r),n!==null&&(i=je(),kt(n,e,r,i),rm(n,t,r))}}function tm(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function nm(e,t){ai=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rm(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}var os={readContext:ft,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Ky={readContext:ft,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,Qp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wy.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Fd,useDebugValue:sc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Fd(!1),t=e[0];return e=Vy.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=xt();if(ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ce===null)throw Error(I(349));(Un&30)!==0||jp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jd(Hp.bind(null,r,o,e),[e]),r.flags|=2048,Pi(9,Bp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=Ce.identifierPrefix;if(ce){var n=Ut,r=bt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qy={readContext:ft,useCallback:Jp,useContext:ft,useEffect:oc,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:qp,useMemo:Xp,useReducer:Ua,useRef:Gp,useState:function(){return Ua(Ti)},useDebugValue:sc,useDeferredValue:function(e){var t=ht();return Zp(t,_e.memoizedState,e)},useTransition:function(){var e=Ua(Ti)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1},Qy={readContext:ft,useCallback:Jp,useContext:ft,useEffect:oc,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:qp,useMemo:Xp,useReducer:za,useRef:Gp,useState:function(){return za(Ti)},useDebugValue:sc,useDeferredValue:function(e){var t=ht();return _e===null?t.memoizedState=e:Zp(t,_e.memoizedState,e)},useTransition:function(){var e=za(Ti)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1};function xr(e,t){try{var n="",r=t;do n+=kv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fa(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function im(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){as||(as=!0,su=r),Yl(e,t)},n}function om(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=c0.bind(null,e,t,n),t.then(e,e))}function Hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Jy=Kt.ReactCurrentOwner,Ge=!1;function Fe(e,t,n,r){t.child=e===null?bp(t,null,n,r):Cr(t,e.child,n,r)}function Wd(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=rc(e,t,n,r,o,i),n=ic(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ce&&n&&Wu(t),t.flags|=1,Fe(e,t,r,i),t.child)}function Gd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!pc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sm(e,t,o,r,i)):(e=No(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(s,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function sm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Jl(e,t,n,r,i)}function am(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(cr,et),et|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(cr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ae(cr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ae(cr,et),et|=r;return Fe(e,t,i,n),t.child}function lm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,i){var o=qe(n)?$n:be.current;return o=Er(t,o),gr(t,i),n=rc(e,t,n,r,o,i),r=ic(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ce&&r&&Wu(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Kd(e,t,n,r,i){if(qe(n)){var o=!0;Jo(t)}else o=!1;if(gr(t,i),t.stateNode===null)Ro(e,t),Mp(t,n,r),Ql(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=qe(n)?$n:be.current,u=Er(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ud(t,s,r,u),Xt=!1;var c=t.memoizedState;s.state=c,ns(t,r,s,i),l=t.memoizedState,a!==r||c!==l||Ke.current||Xt?(typeof f=="function"&&(ql(t,n,f,r),l=t.memoizedState),(a=Xt||bd(t,n,a,r,c,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:wt(t.type,a),s.props=u,h=t.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=qe(n)?$n:be.current,l=Er(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||c!==l)&&Ud(t,s,r,l),Xt=!1,c=t.memoizedState,s.state=c,ns(t,r,s,i);var v=t.memoizedState;a!==h||c!==v||Ke.current||Xt?(typeof g=="function"&&(ql(t,n,g,r),v=t.memoizedState),(u=Xt||bd(t,n,u,r,c,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){lm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Nd(t,n,!1),Wt(e,t,o);r=t.stateNode,Jy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Cr(t,e.child,null,o),t.child=Cr(t,null,a,o)):Fe(e,t,a,o),t.memoizedState=r.state,i&&Nd(t,n,!0),t.child}function um(e){var t=e.stateNode;t.pendingContext?Ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ad(e,t.context,!1),Zu(e,t.containerInfo)}function qd(e,t,n,r,i){return kr(),Ku(i),t.flags|=256,Fe(e,t,n,r),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,t,n){var r=t.pendingProps,i=de.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(de,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ns(s,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=eu(n),t.memoizedState=Zl,e):ac(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=mn(a,o):(o=Ln(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?eu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Zl,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ac(e,t){return t=Ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,n,r){return r!==null&&Ku(r),Cr(t,e.child,null,n),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Fa(Error(I(422))),po(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ns({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Cr(t,e.child,null,s),t.child.memoizedState=eu(s),t.memoizedState=Zl,o);if((t.mode&1)===0)return po(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Fa(o,r,void 0),po(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ge||a){if(r=Ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vt(e,i),kt(r,e,i,-1))}return hc(),r=Fa(Error(I(421))),po(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=d0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=dn(i.nextSibling),nt=t,ce=!0,St=null,e!==null&&(at[lt++]=bt,at[lt++]=Ut,at[lt++]=bn,bt=e.id,Ut=e.overflow,bn=t),t=ac(t,r.children),t.flags|=4096,t)}function Qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fe(e,t,r.children,n),r=de.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(de,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,o);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zy(e,t,n){switch(t.tag){case 3:um(t),kr();break;case 5:Up(t);break;case 1:qe(t.type)&&Jo(t);break;case 4:Zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(de,de.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?cm(e,t,n):(ae(de,de.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ae(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return dm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,am(e,t,n)}return Wt(e,t,n)}var fm,tu,hm,pm;fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tu=function(){};hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(At.current);var o=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=xl(e,i),r=xl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Pl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};pm=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function e0(e,t,n){var r=t.pendingProps;switch(Gu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return qe(t.type)&&Yo(),Me(t),null;case 3:return r=t.stateNode,Ir(),ue(Ke),ue(be),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(uu(St),St=null))),tu(e,t),Me(t),null;case 5:ec(t);var i=On(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Me(t),null}if(e=On(At.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Tt]=t,r[ki]=o,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Zr.length;i++)le(Zr[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":id(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":sd(r,o),le("invalid",r)}Pl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&co(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&co(r.textContent,a,e),i=["children",""+a]):hi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&le("scroll",r)}switch(n){case"input":no(r),od(r,o,!0);break;case"textarea":no(r),ad(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Tt]=t,e[ki]=r,fm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Rl(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zr.length;i++)le(Zr[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":id(e,r),i=kl(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":sd(e,r),i=xl(e,r),le("invalid",e);break;default:i=r}Pl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Vh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pi(e,l):typeof l=="number"&&pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&Au(e,o,l,s))}switch(n){case"input":no(e),od(e,r,!1);break;case"textarea":no(e),ad(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)pm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=On(Ii.current),On(At.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Me(t),null;case 13:if(ue(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ap(),kr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Tt]=t}else kr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else St!==null&&(uu(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(de.current&1)!==0?Se===0&&(Se=3):hc())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Ir(),tu(e,t),e===null&&Si(t.stateNode.containerInfo),Me(t),null;case 10:return Yu(t.type._context),Me(t),null;case 17:return qe(t.type)&&Yo(),Me(t),null;case 19:if(ue(de),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)qr(o,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=rs(e),s!==null){for(t.flags|=128,qr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>Tr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=rs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ce)return Me(t),null}else 2*ve()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=de.current,ae(de,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(et&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function t0(e,t){switch(Gu(t),t.tag){case 1:return qe(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),ue(Ke),ue(be),tc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(ue(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(de),null;case 4:return Ir(),null;case 10:return Yu(t.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var mo=!1,$e=!1,n0=typeof WeakSet=="function"?WeakSet:Set,L=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function nu(e,t,n){try{n()}catch(r){me(e,t,r)}}var Yd=!1;function r0(e,t){if(zl=Go,e=yp(),Vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=e,c=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)c=h,h=g;for(;;){if(h===e)break t;if(c===n&&++u===i&&(a=s),c===o&&++f===r&&(l=s),(g=h.nextSibling)!==null)break;h=c,c=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},Go=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,T=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:wt(t.type,E),T);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){me(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=Yd,Yd=!1,v}function li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&nu(t,n,o)}i=i.next}while(i!==r)}}function Os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mm(e){var t=e.alternate;t!==null&&(e.alternate=null,mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[ki],delete t[Hl],delete t[zy],delete t[Fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gm(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}var Re=null,_t=!1;function Qt(e,t,n){for(n=n.child;n!==null;)vm(e,t,n),n=n.sibling}function vm(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:$e||ur(n,t);case 6:var r=Re,i=_t;Re=null,Qt(e,t,n),Re=r,_t=i,Re!==null&&(_t?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(_t?(e=Re,n=n.stateNode,e.nodeType===8?La(e.parentNode,n):e.nodeType===1&&La(e,n),yi(e)):La(Re,n.stateNode));break;case 4:r=Re,i=_t,Re=n.stateNode.containerInfo,_t=!0,Qt(e,t,n),Re=r,_t=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&nu(n,t,s),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!$e&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Qt(e,t,n),$e=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Xd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new n0),t.forEach(function(r){var i=f0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,_t=!1;break e;case 3:Re=a.stateNode.containerInfo,_t=!0;break e;case 4:Re=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Re===null)throw Error(I(160));vm(o,s,i),Re=null,_t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ym(t,e),t=t.sibling}function ym(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),It(e),r&4){try{li(3,e,e.return),Os(3,e)}catch(E){me(e,e.return,E)}try{li(5,e,e.return)}catch(E){me(e,e.return,E)}}break;case 1:vt(t,e),It(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(vt(t,e),It(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(E){me(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&zh(i,o),Rl(a,s);var u=Rl(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?Vh(i,h):f==="dangerouslySetInnerHTML"?Bh(i,h):f==="children"?pi(i,h):Au(i,f,h,u)}switch(a){case"input":Cl(i,o);break;case"textarea":Fh(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?fr(i,!!o.multiple,g,!1):c!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ki]=o}catch(E){me(e,e.return,E)}}break;case 6:if(vt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){me(e,e.return,E)}}break;case 3:if(vt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(E){me(e,e.return,E)}break;case 4:vt(t,e),It(e);break;case 13:vt(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(cc=ve())),r&4&&Xd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||f,vt(t,e),$e=u):vt(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(L=e,f=e.child;f!==null;){for(h=L=f;L!==null;){switch(c=L,g=c.child,c.tag){case 0:case 11:case 14:case 15:li(4,c,c.return);break;case 1:ur(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(E){me(r,n,E)}}break;case 5:ur(c,c.return);break;case 22:if(c.memoizedState!==null){ef(h);continue}}g!==null?(g.return=c,L=g):ef(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hh("display",s))}catch(E){me(e,e.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){me(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vt(t,e),It(e),r&4&&Xd(e);break;case 21:break;default:vt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gm(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=Jd(e);ou(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jd(e);iu(e,a,s);break;default:throw Error(I(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i0(e,t,n){L=e,wm(e)}function wm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||mo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=mo;var u=$e;if(mo=s,($e=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?tf(i):l!==null?(l.return=s,L=l):tf(i);for(;o!==null;)L=o,wm(o),o=o.sibling;L=i,mo=a,$e=u}Zd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,L=o):Zd(e)}}function Zd(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:$e||Os(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$d(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$d(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&yi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}$e||t.flags&512&&ru(t)}catch(c){me(t,t.return,c)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function ef(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function tf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Os(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){me(t,i,l)}}var o=t.return;try{ru(t)}catch(l){me(t,o,l)}break;case 5:var s=t.return;try{ru(t)}catch(l){me(t,s,l)}}}catch(l){me(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var o0=Math.ceil,ss=Kt.ReactCurrentDispatcher,lc=Kt.ReactCurrentOwner,dt=Kt.ReactCurrentBatchConfig,Q=0,Ce=null,ye=null,Oe=0,et=0,cr=En(0),Se=0,Ri=null,zn=0,As=0,uc=0,ui=null,We=null,cc=0,Tr=1/0,Mt=null,as=!1,su=null,hn=null,go=!1,an=null,ls=0,ci=0,au=null,Oo=-1,Ao=0;function je(){return(Q&6)!==0?ve():Oo!==-1?Oo:Oo=ve()}function pn(e){return(e.mode&1)===0?1:(Q&2)!==0&&Oe!==0?Oe&-Oe:By.transition!==null?(Ao===0&&(Ao=np()),Ao):(e=ee,e!==0||(e=window.event,e=e===void 0?16:up(e.type)),e)}function kt(e,t,n,r){if(50<ci)throw ci=0,au=null,Error(I(185));bi(e,n,r),((Q&2)===0||e!==Ce)&&(e===Ce&&((Q&2)===0&&(As|=n),Se===4&&tn(e,Oe)),Qe(e,r),n===1&&Q===0&&(t.mode&1)===0&&(Tr=ve()+500,Ts&&kn()))}function Qe(e,t){var n=e.callbackNode;Bv(e,t);var r=Wo(e,e===Ce?Oe:0);if(r===0)n!==null&&cd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cd(n),t===1)e.tag===0?jy(nf.bind(null,e)):Pp(nf.bind(null,e)),by(function(){(Q&6)===0&&kn()}),n=null;else{switch(rp(r)){case 1:n=$u;break;case 4:n=ep;break;case 16:n=Vo;break;case 536870912:n=tp;break;default:n=Vo}n=Tm(n,_m.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _m(e,t){if(Oo=-1,Ao=0,(Q&6)!==0)throw Error(I(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Wo(e,e===Ce?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=us(e,r);else{t=r;var i=Q;Q|=2;var o=Em();(Ce!==e||Oe!==t)&&(Mt=null,Tr=ve()+500,Dn(e,t));do try{l0();break}catch(a){Sm(e,a)}while(1);Qu(),ss.current=o,Q=i,ye!==null?t=0:(Ce=null,Oe=0,t=Se)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(r=i,t=lu(e,i))),t===1)throw n=Ri,Dn(e,0),tn(e,r),Qe(e,ve()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!s0(i)&&(t=us(e,r),t===2&&(o=Ll(e),o!==0&&(r=o,t=lu(e,o))),t===1))throw n=Ri,Dn(e,0),tn(e,r),Qe(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:xn(e,We,Mt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=cc+500-ve(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(xn.bind(null,e,We,Mt),t);break}xn(e,We,Mt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*o0(r/1960))-r,10<r){e.timeoutHandle=Bl(xn.bind(null,e,We,Mt),r);break}xn(e,We,Mt);break;case 5:xn(e,We,Mt);break;default:throw Error(I(329))}}}return Qe(e,ve()),e.callbackNode===n?_m.bind(null,e):null}function lu(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=us(e,t),e!==2&&(t=We,We=n,t!==null&&uu(t)),e}function uu(e){We===null?We=e:We.push.apply(We,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~uc,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function nf(e){if((Q&6)!==0)throw Error(I(327));vr();var t=Wo(e,0);if((t&1)===0)return Qe(e,ve()),null;var n=us(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=lu(e,r))}if(n===1)throw n=Ri,Dn(e,0),tn(e,t),Qe(e,ve()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,We,Mt),Qe(e,ve()),null}function dc(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Tr=ve()+500,Ts&&kn())}}function Fn(e){an!==null&&an.tag===0&&(Q&6)===0&&vr();var t=Q;Q|=1;var n=dt.transition,r=ee;try{if(dt.transition=null,ee=1,e)return e()}finally{ee=r,dt.transition=n,Q=t,(Q&6)===0&&kn()}}function fc(){et=cr.current,ue(cr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$y(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:Ir(),ue(Ke),ue(be),tc();break;case 5:ec(r);break;case 4:Ir();break;case 13:ue(de);break;case 19:ue(de);break;case 10:Yu(r.type._context);break;case 22:case 23:fc()}n=n.return}if(Ce=e,ye=e=mn(e.current,null),Oe=et=t,Se=0,Ri=null,uc=As=zn=0,We=ui=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Rn=null}return e}function Sm(e,t){do{var n=ye;try{if(Qu(),To.current=os,is){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}is=!1}if(Un=0,ke=_e=fe=null,ai=!1,xi=0,lc.current=null,n===null||n.return===null){Se=1,Ri=t,ye=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if((f.mode&1)===0&&(h===0||h===11||h===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Hd(s);if(g!==null){g.flags&=-257,Vd(g,s,a,o,t),g.mode&1&&Bd(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var E=new Set;E.add(l),t.updateQueue=E}else v.add(l);break e}else{if((t&1)===0){Bd(o,u,t),hc();break e}l=Error(I(426))}}else if(ce&&a.mode&1){var T=Hd(s);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),Vd(T,s,a,o,t),Ku(xr(l,a));break e}}o=l=xr(l,a),Se!==4&&(Se=2),ui===null?ui=[o]:ui.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=im(o,l,t);Md(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=om(o,a,t);Md(o,S);break e}}o=o.return}while(o!==null)}Cm(n)}catch(_){t=_,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function Em(){var e=ss.current;return ss.current=os,e===null?os:e}function hc(){(Se===0||Se===3||Se===2)&&(Se=4),Ce===null||(zn&268435455)===0&&(As&268435455)===0||tn(Ce,Oe)}function us(e,t){var n=Q;Q|=2;var r=Em();(Ce!==e||Oe!==t)&&(Mt=null,Dn(e,t));do try{a0();break}catch(i){Sm(e,i)}while(1);if(Qu(),Q=n,ss.current=r,ye!==null)throw Error(I(261));return Ce=null,Oe=0,Se}function a0(){for(;ye!==null;)km(ye)}function l0(){for(;ye!==null&&!Dv();)km(ye)}function km(e){var t=xm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Cm(e):ye=t,lc.current=null}function Cm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=e0(n,t,et),n!==null){ye=n;return}}else{if(n=t0(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,ye=null;return}}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Se===0&&(Se=5)}function xn(e,t,n){var r=ee,i=dt.transition;try{dt.transition=null,ee=1,u0(e,t,n,r)}finally{dt.transition=i,ee=r}return null}function u0(e,t,n,r){do vr();while(an!==null);if((Q&6)!==0)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Hv(e,o),e===Ce&&(ye=Ce=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||go||(go=!0,Tm(Vo,function(){return vr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=dt.transition,dt.transition=null;var s=ee;ee=1;var a=Q;Q|=4,lc.current=null,r0(e,n),ym(n,e),Ry(Fl),Go=!!zl,Fl=zl=null,e.current=n,i0(n),Lv(),Q=a,ee=s,dt.transition=o}else e.current=n;if(go&&(go=!1,an=e,ls=i),o=e.pendingLanes,o===0&&(hn=null),bv(n.stateNode),Qe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(as)throw as=!1,e=su,su=null,e;return(ls&1)!==0&&e.tag!==0&&vr(),o=e.pendingLanes,(o&1)!==0?e===au?ci++:(ci=0,au=e):ci=0,kn(),null}function vr(){if(an!==null){var e=rp(ls),t=dt.transition,n=ee;try{if(dt.transition=null,ee=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,ls=0,(Q&6)!==0)throw Error(I(331));var i=Q;for(Q|=4,L=e.current;L!==null;){var o=L,s=o.child;if((L.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:li(8,f,o)}var h=f.child;if(h!==null)h.return=f,L=h;else for(;L!==null;){f=L;var c=f.sibling,g=f.return;if(mm(f),f===u){L=null;break}if(c!==null){c.return=g,L=c;break}L=g}}}var v=o.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var T=E.sibling;E.sibling=null,E=T}while(E!==null)}}L=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:li(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){s=L;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,L=m;else e:for(s=d;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Os(9,a)}}catch(_){me(a,a.return,_)}if(a===s){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(Q=i,kn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{ee=n,dt.transition=t}}return!1}function rf(e,t,n){t=xr(n,t),t=im(e,t,1),e=fn(e,t,1),t=je(),e!==null&&(bi(e,1,t),Qe(e,t))}function me(e,t,n){if(e.tag===3)rf(e,e,n);else for(;t!==null;){if(t.tag===3){rf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=xr(n,e),e=om(t,e,1),t=fn(t,e,1),e=je(),t!==null&&(bi(t,1,e),Qe(t,e));break}}t=t.return}}function c0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Oe&n)===n&&(Se===4||Se===3&&(Oe&130023424)===Oe&&500>ve()-cc?Dn(e,0):uc|=n),Qe(e,t)}function Im(e,t){t===0&&((e.mode&1)===0?t=1:(t=oo,oo<<=1,(oo&130023424)===0&&(oo=4194304)));var n=je();e=Vt(e,t),e!==null&&(bi(e,t,n),Qe(e,n))}function d0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Im(e,n)}function f0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Im(e,n)}var xm;xm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,Zy(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ce&&(t.flags&1048576)!==0&&Rp(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var i=Er(t,be.current);gr(t,n),i=rc(null,t,r,e,i,n);var o=ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(t),i.updater=Ps,t.stateNode=i,i._reactInternals=t,Ql(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,ce&&o&&Wu(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=p0(r),e=wt(r,e),i){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=Kd(null,t,r,e,n);break e;case 11:t=Wd(null,t,r,e,n);break e;case 14:t=Gd(null,t,r,wt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Jl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Kd(e,t,r,i,n);case 3:e:{if(um(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dp(e,t),ns(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xr(Error(I(423)),t),t=qd(e,t,r,n,i);break e}else if(r!==i){i=xr(Error(I(424)),t),t=qd(e,t,r,n,i);break e}else for(tt=dn(t.stateNode.containerInfo.firstChild),nt=t,ce=!0,St=null,n=bp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){t=Wt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Up(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,jl(r,i)?s=null:o!==null&&jl(r,o)&&(t.flags|=32),lm(e,t),Fe(e,t,s,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return cm(e,t,n);case 4:return Zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Wd(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ae(es,r._currentValue),r._currentValue=s,o!==null)if(Ct(o.value,s)){if(o.children===i.children&&!Ke.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=jt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Kl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=ft(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),Gd(e,t,r,i,n);case 15:return sm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Ro(e,t),t.tag=1,qe(r)?(e=!0,Jo(t)):e=!1,gr(t,n),Mp(t,r,i),Ql(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return dm(e,t,n);case 22:return am(e,t,n)}throw Error(I(156,t.tag))};function Tm(e,t){return Zh(e,t)}function h0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new h0(e,t,n,r)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p0(e){if(typeof e=="function")return pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Du)return 11;if(e===Lu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")pc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case er:return Ln(n.children,i,o,t);case Nu:s=8,i|=8;break;case wl:return e=ct(12,n,t,i|2),e.elementType=wl,e.lanes=o,e;case _l:return e=ct(13,n,t,i),e.elementType=_l,e.lanes=o,e;case Sl:return e=ct(19,n,t,i),e.elementType=Sl,e.lanes=o,e;case $h:return Ns(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lh:s=10;break e;case Mh:s=9;break e;case Du:s=11;break e;case Lu:s=14;break e;case Jt:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Ns(e,t,n,r){return e=ct(22,e,r,t),e.elementType=$h,e.lanes=n,e.stateNode={isHidden:!1},e}function Ba(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Ha(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mc(e,t,n,r,i,o,s,a,l){return e=new m0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(o),e}function g0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pm(e){if(!e)return _n;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(qe(n))return Tp(e,n,t)}return t}function Rm(e,t,n,r,i,o,s,a,l){return e=mc(n,r,!0,e,i,o,s,a,l),e.context=Pm(null),n=e.current,r=je(),i=pn(n),o=jt(r,i),o.callback=t!=null?t:null,fn(n,o,i),e.current.lanes=i,bi(e,i,r),Qe(e,r),e}function Ds(e,t,n,r){var i=t.current,o=je(),s=pn(i);return n=Pm(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,s),e!==null&&(kt(e,i,s,o),xo(e,i,s)),s}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){of(e,t),(e=e.alternate)&&of(e,t)}function v0(){return null}var Om=typeof reportError=="function"?reportError:function(e){console.error(e)};function vc(e){this._internalRoot=e}Ls.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Ds(e,t,null,null)};Ls.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Ds(null,e,null,null)}),t[Ht]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&lp(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function y0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=cs(s);o.call(u)}}var s=Rm(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=s,e[Ht]=s.current,Si(e.nodeType===8?e.parentNode:e),Fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=cs(l);a.call(u)}}var l=mc(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=l,e[Ht]=l.current,Si(e.nodeType===8?e.parentNode:e),Fn(function(){Ds(t,l,n,r)}),l}function $s(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=cs(s);a.call(l)}}Ds(t,s,e,i)}else s=y0(n,t,e,i,r);return cs(s)}ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(bu(t,n|1),Qe(t,ve()),(Q&6)===0&&(Tr=ve()+500,kn()))}break;case 13:Fn(function(){var r=Vt(e,1);if(r!==null){var i=je();kt(r,e,1,i)}}),gc(e,1)}};Uu=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=je();kt(t,e,134217728,n)}gc(e,134217728)}};op=function(e){if(e.tag===13){var t=pn(e),n=Vt(e,t);if(n!==null){var r=je();kt(n,e,t,r)}gc(e,t)}};sp=function(){return ee};ap=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Al=function(e,t,n){switch(t){case"input":if(Cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xs(r);if(!i)throw Error(I(90));Uh(r),Cl(r,i)}}}break;case"textarea":Fh(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};Kh=dc;qh=Fn;var w0={usingClientEntryPoint:!1,Events:[zi,ir,xs,Wh,Gh,dc]},Qr={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_0={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jh(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||v0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Es=vo.inject(_0),Ot=vo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(I(200));return g0(e,t,null,n)};it.createRoot=function(e,t){if(!yc(e))throw Error(I(299));var n=!1,r="",i=Om;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mc(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,Si(e.nodeType===8?e.parentNode:e),new vc(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Jh(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Fn(e)};it.hydrate=function(e,t,n){if(!Ms(t))throw Error(I(200));return $s(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Om;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Rm(t,null,e,1,n!=null?n:null,i,!1,o,s),e[Ht]=t.current,Si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ls(t)};it.render=function(e,t,n){if(!Ms(t))throw Error(I(200));return $s(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!Ms(e))throw Error(I(40));return e._reactRootContainer?(Fn(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};it.unstable_batchedUpdates=dc;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ms(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return $s(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=it})(Rh);var af=Rh.exports;vl.createRoot=af.createRoot,vl.hydrateRoot=af.hydrateRoot;var wc={exports:{}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Us=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),Fs=Symbol.for("react.provider"),js=Symbol.for("react.context"),S0=Symbol.for("react.server_context"),Bs=Symbol.for("react.forward_ref"),Hs=Symbol.for("react.suspense"),Vs=Symbol.for("react.suspense_list"),Ws=Symbol.for("react.memo"),Gs=Symbol.for("react.lazy"),E0=Symbol.for("react.offscreen"),Am;Am=Symbol.for("react.module.reference");function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _c:switch(e=e.type,e){case bs:case zs:case Us:case Hs:case Vs:return e;default:switch(e=e&&e.$$typeof,e){case S0:case js:case Bs:case Gs:case Ws:case Fs:return e;default:return t}}case Sc:return t}}}te.ContextConsumer=js;te.ContextProvider=Fs;te.Element=_c;te.ForwardRef=Bs;te.Fragment=bs;te.Lazy=Gs;te.Memo=Ws;te.Portal=Sc;te.Profiler=zs;te.StrictMode=Us;te.Suspense=Hs;te.SuspenseList=Vs;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return mt(e)===js};te.isContextProvider=function(e){return mt(e)===Fs};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_c};te.isForwardRef=function(e){return mt(e)===Bs};te.isFragment=function(e){return mt(e)===bs};te.isLazy=function(e){return mt(e)===Gs};te.isMemo=function(e){return mt(e)===Ws};te.isPortal=function(e){return mt(e)===Sc};te.isProfiler=function(e){return mt(e)===zs};te.isStrictMode=function(e){return mt(e)===Us};te.isSuspense=function(e){return mt(e)===Hs};te.isSuspenseList=function(e){return mt(e)===Vs};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bs||e===zs||e===Us||e===Hs||e===Vs||e===E0||typeof e=="object"&&e!==null&&(e.$$typeof===Gs||e.$$typeof===Ws||e.$$typeof===Fs||e.$$typeof===js||e.$$typeof===Bs||e.$$typeof===Am||e.getModuleId!==void 0)};te.typeOf=mt;(function(e){e.exports=te})(wc);function k0(e){function t(O,N,D,F,w){for(var K=0,P=0,pe=0,J=0,Z,H,xe=0,Ve=0,Y,De=Y=Z=0,X=0,Te=0,Fr=0,Pe=0,Zi=D.length,jr=Zi-1,gt,B="",ge="",ga="",va="",qt;X<Zi;){if(H=D.charCodeAt(X),X===jr&&P+J+pe+K!==0&&(P!==0&&(H=P===47?10:47),J=pe=K=0,Zi++,jr++),P+J+pe+K===0){if(X===jr&&(0<Te&&(B=B.replace(c,"")),0<B.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:B+=D.charAt(X)}H=59}switch(H){case 123:for(B=B.trim(),Z=B.charCodeAt(0),Y=1,Pe=++X;X<Zi;){switch(H=D.charCodeAt(X)){case 123:Y++;break;case 125:Y--;break;case 47:switch(H=D.charCodeAt(X+1)){case 42:case 47:e:{for(De=X+1;De<jr;++De)switch(D.charCodeAt(De)){case 47:if(H===42&&D.charCodeAt(De-1)===42&&X+2!==De){X=De+1;break e}break;case 10:if(H===47){X=De+1;break e}}X=De}}break;case 91:H++;case 40:H++;case 34:case 39:for(;X++<jr&&D.charCodeAt(X)!==H;);}if(Y===0)break;X++}switch(Y=D.substring(Pe,X),Z===0&&(Z=(B=B.replace(h,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Te&&(B=B.replace(c,"")),H=B.charCodeAt(1),H){case 100:case 109:case 115:case 45:Te=N;break;default:Te=Xe}if(Y=t(N,Te,Y,H,w+1),Pe=Y.length,0<x&&(Te=n(Xe,B,Fr),qt=a(3,Y,Te,N,re,V,Pe,H,w,F),B=Te.join(""),qt!==void 0&&(Pe=(Y=qt.trim()).length)===0&&(H=0,Y="")),0<Pe)switch(H){case 115:B=B.replace(A,s);case 100:case 109:case 45:Y=B+"{"+Y+"}";break;case 107:B=B.replace(d,"$1 $2"),Y=B+"{"+Y+"}",Y=we===1||we===2&&o("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=B+Y,F===112&&(Y=(ge+=Y,""))}else Y="";break;default:Y=t(N,n(N,B,Fr),Y,F,w+1)}ga+=Y,Y=Fr=Te=De=Z=0,B="",H=D.charCodeAt(++X);break;case 125:case 59:if(B=(0<Te?B.replace(c,""):B).trim(),1<(Pe=B.length))switch(De===0&&(Z=B.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Pe=(B=B.replace(" ",":")).length),0<x&&(qt=a(1,B,N,O,re,V,ge.length,F,w,F))!==void 0&&(Pe=(B=qt.trim()).length)===0&&(B="\0\0"),Z=B.charCodeAt(0),H=B.charCodeAt(1),Z){case 0:break;case 64:if(H===105||H===99){va+=B+D.charAt(X);break}default:B.charCodeAt(Pe-1)!==58&&(ge+=i(B,Z,H,B.charCodeAt(2)))}Fr=Te=De=Z=0,B="",H=D.charCodeAt(++X)}}switch(H){case 13:case 10:P===47?P=0:1+Z===0&&F!==107&&0<B.length&&(Te=1,B+="\0"),0<x*z&&a(0,B,N,O,re,V,ge.length,F,w,F),V=1,re++;break;case 59:case 125:if(P+J+pe+K===0){V++;break}default:switch(V++,gt=D.charAt(X),H){case 9:case 32:if(J+K+P===0)switch(xe){case 44:case 58:case 9:case 32:gt="";break;default:H!==32&&(gt=" ")}break;case 0:gt="\\0";break;case 12:gt="\\f";break;case 11:gt="\\v";break;case 38:J+P+K===0&&(Te=Fr=1,gt="\f"+gt);break;case 108:if(J+P+K+oe===0&&0<De)switch(X-De){case 2:xe===112&&D.charCodeAt(X-3)===58&&(oe=xe);case 8:Ve===111&&(oe=Ve)}break;case 58:J+P+K===0&&(De=X);break;case 44:P+pe+J+K===0&&(Te=1,gt+="\r");break;case 34:case 39:P===0&&(J=J===H?0:J===0?H:J);break;case 91:J+P+pe===0&&K++;break;case 93:J+P+pe===0&&K--;break;case 41:J+P+K===0&&pe--;break;case 40:if(J+P+K===0){if(Z===0)switch(2*xe+3*Ve){case 533:break;default:Z=1}pe++}break;case 64:P+pe+J+K+De+Y===0&&(Y=1);break;case 42:case 47:if(!(0<J+K+pe))switch(P){case 0:switch(2*H+3*D.charCodeAt(X+1)){case 235:P=47;break;case 220:Pe=X,P=42}break;case 42:H===47&&xe===42&&Pe+2!==X&&(D.charCodeAt(Pe+2)===33&&(ge+=D.substring(Pe,X+1)),gt="",P=0)}}P===0&&(B+=gt)}Ve=xe,xe=H,X++}if(Pe=ge.length,0<Pe){if(Te=N,0<x&&(qt=a(2,ge,Te,O,re,V,Pe,F,w,F),qt!==void 0&&(ge=qt).length===0))return va+ge+ga;if(ge=Te.join(",")+"{"+ge+"}",we*oe!==0){switch(we!==2||o(ge,2)||(oe=0),oe){case 111:ge=ge.replace(S,":-moz-$1")+ge;break;case 112:ge=ge.replace(m,"::-webkit-input-$1")+ge.replace(m,"::-moz-$1")+ge.replace(m,":-ms-input-$1")+ge}oe=0}}return va+ge+ga}function n(O,N,D){var F=N.trim().split(T);N=F;var w=F.length,K=O.length;switch(K){case 0:case 1:var P=0;for(O=K===0?"":O[0]+" ";P<w;++P)N[P]=r(O,N[P],D).trim();break;default:var pe=P=0;for(N=[];P<w;++P)for(var J=0;J<K;++J)N[pe++]=r(O[J]+" ",F[P],D).trim()}return N}function r(O,N,D){var F=N.charCodeAt(0);switch(33>F&&(F=(N=N.trim()).charCodeAt(0)),F){case 38:return N.replace(p,"$1"+O.trim());case 58:return O.trim()+N.replace(p,"$1"+O.trim());default:if(0<1*D&&0<N.indexOf("\f"))return N.replace(p,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+N}function i(O,N,D,F){var w=O+";",K=2*N+3*D+4*F;if(K===944){O=w.indexOf(":",9)+1;var P=w.substring(O,w.length-1).trim();return P=w.substring(0,O).trim()+P+";",we===1||we===2&&o(P,1)?"-webkit-"+P+P:P}if(we===0||we===2&&!o(w,1))return w;switch(K){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(q,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return P=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+w+"-ms-flex-pack"+P+w;case 1005:return v.test(w)?w.replace(g,":-webkit-")+w.replace(g,":-moz-")+w:w;case 1e3:switch(P=w.substring(13).trim(),N=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(N)){case 226:P=w.replace(_,"tb");break;case 232:P=w.replace(_,"tb-rl");break;case 220:P=w.replace(_,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+P+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(N=(w=O).length-10,P=(w.charCodeAt(N)===33?w.substring(0,N):w).substring(O.indexOf(":",7)+1).trim(),K=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:w=w.replace(P,"-webkit-"+P)+";"+w;break;case 207:case 102:w=w.replace(P,"-webkit-"+(102<K?"inline-":"")+"box")+";"+w.replace(P,"-webkit-"+P)+";"+w.replace(P,"-ms-"+P+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return P=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+P+"-ms-flex-"+P+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(C,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(C,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(M.test(O)===!0)return(P=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),N,D,F).replace(":fill-available",":stretch"):w.replace(P,"-webkit-"+P)+w.replace(P,"-moz-"+P.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,D+F===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+w}return w}function o(O,N){var D=O.indexOf(N===1?":":"{"),F=O.substring(0,N!==3?D:10);return D=O.substring(D+1,O.length-1),b(N!==2?F:F.replace($,"$1"),D,N)}function s(O,N){var D=i(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return D!==N+";"?D.replace(k," or ($1)").substring(4):"("+N+")"}function a(O,N,D,F,w,K,P,pe,J,Z){for(var H=0,xe=N,Ve;H<x;++H)switch(Ve=ze[H].call(f,O,xe,D,F,w,K,P,pe,J,Z)){case void 0:case!1:case!0:case null:break;default:xe=Ve}if(xe!==N)return xe}function l(O){switch(O){case void 0:case null:x=ze.length=0;break;default:if(typeof O=="function")ze[x++]=O;else if(typeof O=="object")for(var N=0,D=O.length;N<D;++N)l(O[N]);else z=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(b=null,O?typeof O!="function"?we=1:(we=2,b=O):we=0),u}function f(O,N){var D=O;if(33>D.charCodeAt(0)&&(D=D.trim()),ie=D,D=[ie],0<x){var F=a(-1,N,D,D,re,V,0,0,0,0);F!==void 0&&typeof F=="string"&&(N=F)}var w=t(Xe,D,N,0,0);return 0<x&&(F=a(-2,w,D,D,re,V,w.length,0,0,0),F!==void 0&&(w=F)),ie="",oe=0,V=re=1,w}var h=/^\0+/g,c=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,E=/([,: ])(transform)/g,T=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,S=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,C=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,V=1,re=1,oe=0,we=1,Xe=[],ze=[],x=0,b=null,z=0,ie="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var C0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function I0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var x0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lf=I0(function(e){return x0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Nm={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,Ec=Ie?Symbol.for("react.element"):60103,kc=Ie?Symbol.for("react.portal"):60106,Ks=Ie?Symbol.for("react.fragment"):60107,qs=Ie?Symbol.for("react.strict_mode"):60108,Qs=Ie?Symbol.for("react.profiler"):60114,Ys=Ie?Symbol.for("react.provider"):60109,Js=Ie?Symbol.for("react.context"):60110,Cc=Ie?Symbol.for("react.async_mode"):60111,Xs=Ie?Symbol.for("react.concurrent_mode"):60111,Zs=Ie?Symbol.for("react.forward_ref"):60112,ea=Ie?Symbol.for("react.suspense"):60113,T0=Ie?Symbol.for("react.suspense_list"):60120,ta=Ie?Symbol.for("react.memo"):60115,na=Ie?Symbol.for("react.lazy"):60116,P0=Ie?Symbol.for("react.block"):60121,R0=Ie?Symbol.for("react.fundamental"):60117,O0=Ie?Symbol.for("react.responder"):60118,A0=Ie?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ec:switch(e=e.type,e){case Cc:case Xs:case Ks:case Qs:case qs:case ea:return e;default:switch(e=e&&e.$$typeof,e){case Js:case Zs:case na:case ta:case Ys:return e;default:return t}}case kc:return t}}}function Dm(e){return st(e)===Xs}ne.AsyncMode=Cc;ne.ConcurrentMode=Xs;ne.ContextConsumer=Js;ne.ContextProvider=Ys;ne.Element=Ec;ne.ForwardRef=Zs;ne.Fragment=Ks;ne.Lazy=na;ne.Memo=ta;ne.Portal=kc;ne.Profiler=Qs;ne.StrictMode=qs;ne.Suspense=ea;ne.isAsyncMode=function(e){return Dm(e)||st(e)===Cc};ne.isConcurrentMode=Dm;ne.isContextConsumer=function(e){return st(e)===Js};ne.isContextProvider=function(e){return st(e)===Ys};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ec};ne.isForwardRef=function(e){return st(e)===Zs};ne.isFragment=function(e){return st(e)===Ks};ne.isLazy=function(e){return st(e)===na};ne.isMemo=function(e){return st(e)===ta};ne.isPortal=function(e){return st(e)===kc};ne.isProfiler=function(e){return st(e)===Qs};ne.isStrictMode=function(e){return st(e)===qs};ne.isSuspense=function(e){return st(e)===ea};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ks||e===Xs||e===Qs||e===qs||e===ea||e===T0||typeof e=="object"&&e!==null&&(e.$$typeof===na||e.$$typeof===ta||e.$$typeof===Ys||e.$$typeof===Js||e.$$typeof===Zs||e.$$typeof===R0||e.$$typeof===O0||e.$$typeof===A0||e.$$typeof===P0)};ne.typeOf=st;(function(e){e.exports=ne})(Nm);var Ic=Nm.exports,N0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},L0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xc={};xc[Ic.ForwardRef]=L0;xc[Ic.Memo]=Lm;function uf(e){return Ic.isMemo(e)?Lm:xc[e.$$typeof]||N0}var M0=Object.defineProperty,$0=Object.getOwnPropertyNames,cf=Object.getOwnPropertySymbols,b0=Object.getOwnPropertyDescriptor,U0=Object.getPrototypeOf,df=Object.prototype;function Mm(e,t,n){if(typeof t!="string"){if(df){var r=U0(t);r&&r!==df&&Mm(e,r,n)}var i=$0(t);cf&&(i=i.concat(cf(t)));for(var o=uf(e),s=uf(t),a=0;a<i.length;++a){var l=i[a];if(!D0[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=b0(t,l);try{M0(e,l,u)}catch{}}}}return e}var z0=Mm;function Rt(){return(Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ff=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},cu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!wc.exports.typeOf(e)},ds=Object.freeze([]),gn=Object.freeze({});function Oi(e){return typeof e=="function"}function hf(e){return e.displayName||e.name||"Component"}function Tc(e){return e&&typeof e.styledComponentId=="string"}var Pr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Pc=typeof window<"u"&&"HTMLElement"in window,F0=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),j0={};function ji(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var B0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&ji(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Do=new Map,fs=new Map,di=1,yo=function(e){if(Do.has(e))return Do.get(e);for(;fs.has(di);)di++;var t=di++;return Do.set(e,t),fs.set(t,e),t},H0=function(e){return fs.get(e)},V0=function(e,t){t>=di&&(di=t+1),Do.set(e,t),fs.set(t,e)},W0="style["+Pr+'][data-styled-version="5.3.5"]',G0=new RegExp("^"+Pr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),K0=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},q0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(G0);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(V0(u,l),K0(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},Q0=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},$m=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Pr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Pr,"active"),r.setAttribute("data-styled-version","5.3.5");var s=Q0();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Y0=function(){function e(n){var r=this.element=$m(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}ji(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),J0=function(){function e(n){var r=this.element=$m(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),X0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),pf=Pc,Z0={isServer:!Pc,useCSSOMInjection:!F0},hs=function(){function e(n,r,i){n===void 0&&(n=gn),r===void 0&&(r={}),this.options=Rt({},Z0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Pc&&pf&&(pf=!1,function(o){for(var s=document.querySelectorAll(W0),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Pr)!=="active"&&(q0(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return yo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Rt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new X0(s):o?new Y0(s):new J0(s),new B0(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(yo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(yo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(yo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=H0(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var f=Pr+".g"+s+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(c){c.length>0&&(h+=c+",")}),o+=""+u+f+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),e1=/(a)(d)/gi,mf=function(e){return String.fromCharCode(e+(e>25?39:97))};function du(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=mf(t%52)+n;return(mf(t%52)+n).replace(e1,"$1-$2")}var dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bm=function(e){return dr(5381,e)};function Um(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Oi(n)&&!Tc(n))return!1}return!0}var t1=bm("5.3.5"),n1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Um(t),this.componentId=n,this.baseHash=dr(t1,n),this.baseStyle=r,hs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=jn(this.rules,t,n,r).join(""),a=du(dr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=dr(this.baseHash,r.hash),h="",c=0;c<u;c++){var g=this.rules[c];if(typeof g=="string")h+=g;else if(g){var v=jn(g,t,n,r),E=Array.isArray(v)?v.join(""):v;f=dr(f,E+c),h+=E}}if(h){var T=du(f>>>0);if(!n.hasNameForId(i,T)){var p=r(h,"."+T,void 0,i);n.insertRules(i,T,p)}o.push(T)}}return o.join(" ")},e}(),r1=/^\s*\/\/.*$/gm,i1=[":","[",".","#"];function o1(e){var t,n,r,i,o=e===void 0?gn:e,s=o.options,a=s===void 0?gn:s,l=o.plugins,u=l===void 0?ds:l,f=new k0(a),h=[],c=function(E){function T(p){if(p)try{E(p+"}")}catch{}}return function(p,d,m,S,_,A,k,C,$,M){switch(p){case 1:if($===0&&d.charCodeAt(0)===64)return E(d+";"),"";break;case 2:if(C===0)return d+"/*|*/";break;case 3:switch(C){case 102:case 112:return E(m[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(T)}}}(function(E){h.push(E)}),g=function(E,T,p){return T===0&&i1.indexOf(p[n.length])!==-1||p.match(i)?E:"."+t};function v(E,T,p,d){d===void 0&&(d="&");var m=E.replace(r1,""),S=T&&p?p+" "+T+" { "+m+" }":m;return t=d,n=T,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(p||!T?"":T,S)}return f.use([].concat(u,[function(E,T,p){E===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},c,function(E){if(E===-2){var T=h;return h=[],T}}])),v.hash=u.length?u.reduce(function(E,T){return T.name||ji(15),dr(E,T.name)},5381).toString():"",v}var zm=Dr.createContext();zm.Consumer;var Fm=Dr.createContext(),s1=(Fm.Consumer,new hs),fu=o1();function jm(){return R.exports.useContext(zm)||s1}function Bm(){return R.exports.useContext(Fm)||fu}var a1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=fu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return ji(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=fu),this.name+t.hash},e}(),l1=/([A-Z])/,u1=/([A-Z])/g,c1=/^ms-/,d1=function(e){return"-"+e.toLowerCase()};function gf(e){return l1.test(e)?e.replace(u1,d1).replace(c1,"-ms-"):e}var vf=function(e){return e==null||e===!1||e===""};function jn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=jn(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(vf(e))return"";if(Tc(e))return"."+e.styledComponentId;if(Oi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return jn(l,t,n,r)}var u;return e instanceof a1?n?(e.inject(n,r),e.getName(r)):e:cu(e)?function f(h,c){var g,v,E=[];for(var T in h)h.hasOwnProperty(T)&&!vf(h[T])&&(Array.isArray(h[T])&&h[T].isCss||Oi(h[T])?E.push(gf(T)+":",h[T],";"):cu(h[T])?E.push.apply(E,f(h[T],T)):E.push(gf(T)+": "+(g=T,(v=h[T])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in C0?String(v).trim():v+"px")+";"));return c?[c+" {"].concat(E,["}"]):E}(e):e.toString()}var yf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Hm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Oi(e)||cu(e)?yf(jn(ff(ds,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:yf(jn(ff(e,n)))}var Vm=function(e,t,n){return n===void 0&&(n=gn),e.theme!==n.theme&&e.theme||t||n.theme},f1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,h1=/(^-|-$)/g;function Va(e){return e.replace(f1,"-").replace(h1,"")}var Wm=function(e){return du(bm(e)>>>0)};function wo(e){return typeof e=="string"&&!0}var hu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},p1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function m1(e,t,n){var r=e[n];hu(t)&&hu(r)?Gm(r,t):e[n]=t}function Gm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(hu(s))for(var a in s)p1(a)&&m1(e,s[a],a)}return e}var Rc=Dr.createContext();Rc.Consumer;var Wa={};function Km(e,t,n){var r=Tc(e),i=!wo(e),o=t.attrs,s=o===void 0?ds:o,a=t.componentId,l=a===void 0?function(d,m){var S=typeof d!="string"?"sc":Va(d);Wa[S]=(Wa[S]||0)+1;var _=S+"-"+Wm("5.3.5"+S+Wa[S]);return m?m+"-"+_:_}(t.displayName,t.parentComponentId):a,u=t.displayName,f=u===void 0?function(d){return wo(d)?"styled."+d:"Styled("+hf(d)+")"}(e):u,h=t.displayName&&t.componentId?Va(t.displayName)+"-"+t.componentId:t.componentId||l,c=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(d,m,S){return e.shouldForwardProp(d,m,S)&&t.shouldForwardProp(d,m,S)}:e.shouldForwardProp);var v,E=new n1(n,h,r?e.componentStyle:void 0),T=E.isStatic&&s.length===0,p=function(d,m){return function(S,_,A,k){var C=S.attrs,$=S.componentStyle,M=S.defaultProps,q=S.foldedComponentIds,V=S.shouldForwardProp,re=S.styledComponentId,oe=S.target,we=function(F,w,K){F===void 0&&(F=gn);var P=Rt({},w,{theme:F}),pe={};return K.forEach(function(J){var Z,H,xe,Ve=J;for(Z in Oi(Ve)&&(Ve=Ve(P)),Ve)P[Z]=pe[Z]=Z==="className"?(H=pe[Z],xe=Ve[Z],H&&xe?H+" "+xe:H||xe):Ve[Z]}),[P,pe]}(Vm(_,R.exports.useContext(Rc),M)||gn,_,C),Xe=we[0],ze=we[1],x=function(F,w,K,P){var pe=jm(),J=Bm(),Z=w?F.generateAndInjectStyles(gn,pe,J):F.generateAndInjectStyles(K,pe,J);return Z}($,k,Xe),b=A,z=ze.$as||_.$as||ze.as||_.as||oe,ie=wo(z),O=ze!==_?Rt({},_,{},ze):_,N={};for(var D in O)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?N.as=O[D]:(V?V(D,lf,z):!ie||lf(D))&&(N[D]=O[D]));return _.style&&ze.style!==_.style&&(N.style=Rt({},_.style,{},ze.style)),N.className=Array.prototype.concat(q,re,x!==re?x:null,_.className,ze.className).filter(Boolean).join(" "),N.ref=b,R.exports.createElement(z,N)}(v,d,m,T)};return p.displayName=f,(v=Dr.forwardRef(p)).attrs=c,v.componentStyle=E,v.displayName=f,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ds,v.styledComponentId=h,v.target=r?e.target:e,v.withComponent=function(d){var m=t.componentId,S=function(A,k){if(A==null)return{};var C,$,M={},q=Object.keys(A);for($=0;$<q.length;$++)C=q[$],k.indexOf(C)>=0||(M[C]=A[C]);return M}(t,["componentId"]),_=m&&m+"-"+(wo(d)?d:Va(hf(d)));return Km(d,Rt({},S,{attrs:c,componentId:_}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Gm({},e.defaultProps,d):d}}),v.toString=function(){return"."+v.styledComponentId},i&&z0(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var pu=function(e){return function t(n,r,i){if(i===void 0&&(i=gn),!wc.exports.isValidElementType(r))return ji(1,String(r));var o=function(){return n(r,i,Hm.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Rt({},i,{},s))},o.attrs=function(s){return t(n,r,Rt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(Km,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){pu[e]=pu(e)});var g1=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Um(n),hs.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(jn(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&hs.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function v1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Hm.apply(void 0,[e].concat(n)),o="sc-global-"+Wm(JSON.stringify(i)),s=new g1(i,o);function a(u){var f=jm(),h=Bm(),c=R.exports.useContext(Rc),g=R.exports.useRef(f.allocateGSInstance(o)).current;return f.server&&l(g,u,f,c,h),R.exports.useLayoutEffect(function(){if(!f.server)return l(g,u,f,c,h),function(){return s.removeStyles(g,f)}},[g,u,f,c,h]),null}function l(u,f,h,c,g){if(s.isStatic)s.renderStyles(u,j0,h,g);else{var v=Rt({},f,{theme:Vm(f,c,a.defaultProps)});s.renderStyles(u,v,h,g)}}return Dr.memo(a)}const U=pu,y1=v1`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Commissioner', sans-serif;
  }
  body {
    max-width: 100%;
    width: 100vw;
    height: 100vh;
    background-color: #1F2937;
    //background-color: #111827;
    color: white;
  }

  button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  }
`;function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));var wf=function(e){return e},_f="beforeunload",w1="popstate";function _1(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var k=r.location,C=k.pathname,$=k.search,M=k.hash,q=i.state||{};return[q.idx,wf({pathname:C,search:$,hash:M,state:q.usr||null,key:q.key||"default"})]}var s=null;function a(){if(s)g.call(s),s=null;else{var k=An.Pop,C=o(),$=C[0],M=C[1];if(g.length){if($!=null){var q=f-$;q&&(s={action:k,location:M,retry:function(){_(q*-1)}},_(q))}}else d(k)}}r.addEventListener(w1,a);var l=An.Pop,u=o(),f=u[0],h=u[1],c=Ef(),g=Ef();f==null&&(f=0,i.replaceState(ps({},i.state,{idx:f}),""));function v(k){return typeof k=="string"?k:mu(k)}function E(k,C){return C===void 0&&(C=null),wf(ps({pathname:h.pathname,hash:"",search:""},typeof k=="string"?qn(k):k,{state:C,key:S1()}))}function T(k,C){return[{usr:k.state,key:k.key,idx:C},v(k)]}function p(k,C,$){return!g.length||(g.call({action:k,location:C,retry:$}),!1)}function d(k){l=k;var C=o();f=C[0],h=C[1],c.call({action:l,location:h})}function m(k,C){var $=An.Push,M=E(k,C);function q(){m(k,C)}if(p($,M,q)){var V=T(M,f+1),re=V[0],oe=V[1];try{i.pushState(re,"",oe)}catch{r.location.assign(oe)}d($)}}function S(k,C){var $=An.Replace,M=E(k,C);function q(){S(k,C)}if(p($,M,q)){var V=T(M,f),re=V[0],oe=V[1];i.replaceState(re,"",oe),d($)}}function _(k){i.go(k)}var A={get action(){return l},get location(){return h},createHref:v,push:m,replace:S,go:_,back:function(){_(-1)},forward:function(){_(1)},listen:function(C){return c.push(C)},block:function(C){var $=g.push(C);return g.length===1&&r.addEventListener(_f,Sf),function(){$(),g.length||r.removeEventListener(_f,Sf)}}};return A}function Sf(e){e.preventDefault(),e.returnValue=""}function Ef(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function S1(){return Math.random().toString(36).substr(2,8)}function mu(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,s=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function qn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Oc=R.exports.createContext(null),Ac=R.exports.createContext(null),ra=R.exports.createContext({outlet:null,matches:[]});function Lt(e,t){if(!e)throw new Error(t)}function E1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qn(t):t,i=Ym(r.pathname||"/",n);if(i==null)return null;let o=qm(e);k1(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=N1(o[a],i);return s}function qm(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||Lt(!1),s.relativePath=s.relativePath.slice(r.length));let a=vn([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&Lt(!1),qm(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:O1(a,i.index),routesMeta:l})}),t}function k1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:A1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C1=/^:\w+$/,I1=3,x1=2,T1=1,P1=10,R1=-2,kf=e=>e==="*";function O1(e,t){let n=e.split("/"),r=n.length;return n.some(kf)&&(r+=R1),t&&(r+=x1),n.filter(i=>!kf(i)).reduce((i,o)=>i+(C1.test(o)?I1:o===""?T1:P1),r)}function A1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function N1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=D1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:vn([i,f.pathname]),pathnameBase:Jm(vn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=vn([i,f.pathnameBase]))}return o}function D1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{if(f==="*"){let c=a[h]||"";s=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=M1(a[h]||""),u},{}),pathname:o,pathnameBase:s,pattern:e}}function L1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function M1(e,t){try{return decodeURIComponent(e)}catch{return e}}function $1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:b1(n,t):t,search:z1(r),hash:F1(i)}}function b1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qm(e,t,n){let r=typeof e=="string"?qn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?t[a]:"/"}let s=$1(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function U1(e){return e===""||e.pathname===""?"/":typeof e=="string"?qn(e).pathname:e.pathname}function Ym(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),Jm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function j1(e){Bi()||Lt(!1);let{basename:t,navigator:n}=R.exports.useContext(Oc),{hash:r,pathname:i,search:o}=Xm(e),s=i;if(t!=="/"){let a=U1(e),l=a!=null&&a.endsWith("/");s=i==="/"?t+(l?"/":""):vn([t,i])}return n.createHref({pathname:s,search:o,hash:r})}function Bi(){return R.exports.useContext(Ac)!=null}function ia(){return Bi()||Lt(!1),R.exports.useContext(Ac).location}function Nc(){Bi()||Lt(!1);let{basename:e,navigator:t}=R.exports.useContext(Oc),{matches:n}=R.exports.useContext(ra),{pathname:r}=ia(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=R.exports.useRef(!1);return R.exports.useEffect(()=>{o.current=!0}),R.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Qm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=vn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}function Xm(e){let{matches:t}=R.exports.useContext(ra),{pathname:n}=ia(),r=JSON.stringify(t.map(i=>i.pathnameBase));return R.exports.useMemo(()=>Qm(e,JSON.parse(r),n),[e,r,n])}function B1(e,t){Bi()||Lt(!1);let{matches:n}=R.exports.useContext(ra),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=ia(),a;if(t){var l;let c=typeof t=="string"?qn(t):t;o==="/"||((l=c.pathname)==null?void 0:l.startsWith(o))||Lt(!1),a=c}else a=s;let u=a.pathname||"/",f=o==="/"?u:u.slice(o.length)||"/",h=E1(e,{pathname:f});return H1(h&&h.map(c=>Object.assign({},c,{params:Object.assign({},i,c.params),pathname:vn([o,c.pathname]),pathnameBase:c.pathnameBase==="/"?o:vn([o,c.pathnameBase])})),n)}function H1(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>R.exports.createElement(ra.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Lo(e){Lt(!1)}function V1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=An.Pop,navigator:o,static:s=!1}=e;Bi()&&Lt(!1);let a=Jm(t),l=R.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=qn(r));let{pathname:u="/",search:f="",hash:h="",state:c=null,key:g="default"}=r,v=R.exports.useMemo(()=>{let E=Ym(u,a);return E==null?null:{pathname:E,search:f,hash:h,state:c,key:g}},[a,u,f,h,c,g]);return v==null?null:R.exports.createElement(Oc.Provider,{value:l},R.exports.createElement(Ac.Provider,{children:n,value:{location:v,navigationType:i}}))}function W1(e){let{children:t,location:n}=e;return B1(gu(t),n)}function gu(e){let t=[];return R.exports.Children.forEach(e,n=>{if(!R.exports.isValidElement(n))return;if(n.type===R.exports.Fragment){t.push.apply(t,gu(n.props.children));return}n.type!==Lo&&Lt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=gu(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vu.apply(this,arguments)}function G1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const K1=["onClick","reloadDocument","replace","state","target","to"];function q1(e){let{basename:t,children:n,window:r}=e,i=R.exports.useRef();i.current==null&&(i.current=_1({window:r}));let o=i.current,[s,a]=R.exports.useState({action:o.action,location:o.location});return R.exports.useLayoutEffect(()=>o.listen(a),[o]),R.exports.createElement(V1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}function Q1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Y1=R.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:s,target:a,to:l}=t,u=G1(t,K1),f=j1(l),h=J1(l,{replace:o,state:s,target:a});function c(g){r&&r(g),!g.defaultPrevented&&!i&&h(g)}return R.exports.createElement("a",vu({},u,{href:f,onClick:c,ref:n,target:a}))});function J1(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Nc(),s=ia(),a=Xm(e);return R.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Q1(l)){l.preventDefault();let u=!!r||mu(s)===mu(a);o(e,{replace:u,state:i})}},[s,o,a,r,i,n,e])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},X1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let c=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(c=64)),r.push(n[f],n[h],n[c],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):X1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw Error();const c=o<<2|a>>4;if(r.push(c),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Z1=function(e){const t=Zm(e);return eg.encodeByteArray(t,!0)},tg=function(e){return Z1(e).replace(/\./g,"")},ew=function(e){try{return eg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function rw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ow(){const e=Ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function sw(){return typeof indexedDB=="object"}function aw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="FirebaseError";class Cn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=lw,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?uw(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Cn(i,a,r)}}function uw(e,t){return e.replace(cw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const cw=/\{\$([^}]+)}/g;function dw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ms(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Cf(o)&&Cf(s)){if(!ms(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ei(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ti(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function fw(e,t){const n=new hw(e,t);return n.subscribe.bind(n)}class hw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ga),i.error===void 0&&(i.error=Ga),i.complete===void 0&&(i.complete=Ga);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){return e&&e._delegate?e._delegate:e}class Rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new tw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vw(t))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tn){return this.instances.has(t)}getOptions(t=Tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Tn){return this.component?this.component.multipleInstances?t:Tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(e){return e===Tn?void 0:e}function vw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const ww={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},_w=se.INFO,Sw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Ew=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Sw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ng{constructor(t){this.name=t,this._logLevel=_w,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ww[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const kw=(e,t)=>t.some(n=>e instanceof n);let If,xf;function Cw(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,yu=new WeakMap,ig=new WeakMap,Ka=new WeakMap,Dc=new WeakMap;function xw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(yn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&rg.set(n,e)}).catch(()=>{}),Dc.set(t,e),t}function Tw(e){if(yu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});yu.set(e,t)}let wu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ig.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pw(e){wu=e(wu)}function Rw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qa(this),t,...n);return ig.set(r,t.sort?t.sort():[t]),yn(r)}:Iw().includes(e)?function(...t){return e.apply(qa(this),t),yn(rg.get(this))}:function(...t){return yn(e.apply(qa(this),t))}}function Ow(e){return typeof e=="function"?Rw(e):(e instanceof IDBTransaction&&Tw(e),kw(e,Cw())?new Proxy(e,wu):e)}function yn(e){if(e instanceof IDBRequest)return xw(e);if(Ka.has(e))return Ka.get(e);const t=Ow(e);return t!==e&&(Ka.set(e,t),Dc.set(t,e)),t}const qa=e=>Dc.get(e);function Aw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=yn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(yn(s.result),l.oldVersion,l.newVersion,yn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Nw=["get","getKey","getAll","getAllKeys","count"],Dw=["put","add","delete","clear"],Qa=new Map;function Tf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qa.get(t))return Qa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Dw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Nw.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qa.set(t,o),o}Pw(e=>({...e,get:(t,n,r)=>Tf(t,n)||e.get(t,n,r),has:(t,n)=>!!Tf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _u="@firebase/app",Pf="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new ng("@firebase/app"),$w="@firebase/app-compat",bw="@firebase/analytics-compat",Uw="@firebase/analytics",zw="@firebase/app-check-compat",Fw="@firebase/app-check",jw="@firebase/auth",Bw="@firebase/auth-compat",Hw="@firebase/database",Vw="@firebase/database-compat",Ww="@firebase/functions",Gw="@firebase/functions-compat",Kw="@firebase/installations",qw="@firebase/installations-compat",Qw="@firebase/messaging",Yw="@firebase/messaging-compat",Jw="@firebase/performance",Xw="@firebase/performance-compat",Zw="@firebase/remote-config",e_="@firebase/remote-config-compat",t_="@firebase/storage",n_="@firebase/storage-compat",r_="@firebase/firestore",i_="@firebase/firestore-compat",o_="firebase",s_="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="[DEFAULT]",a_={[_u]:"fire-core",[$w]:"fire-core-compat",[Uw]:"fire-analytics",[bw]:"fire-analytics-compat",[Fw]:"fire-app-check",[zw]:"fire-app-check-compat",[jw]:"fire-auth",[Bw]:"fire-auth-compat",[Hw]:"fire-rtdb",[Vw]:"fire-rtdb-compat",[Ww]:"fire-fn",[Gw]:"fire-fn-compat",[Kw]:"fire-iid",[qw]:"fire-iid-compat",[Qw]:"fire-fcm",[Yw]:"fire-fcm-compat",[Jw]:"fire-perf",[Xw]:"fire-perf-compat",[Zw]:"fire-rc",[e_]:"fire-rc-compat",[t_]:"fire-gcs",[n_]:"fire-gcs-compat",[r_]:"fire-fst",[i_]:"fire-fst-compat","fire-js":"fire-js",[o_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Map,Su=new Map;function l_(e,t){try{e.container.addComponent(t)}catch(n){Bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ai(e){const t=e.name;if(Su.has(t))return Bn.debug(`There were multiple attempts to register component ${t}.`),!1;Su.set(t,e);for(const n of gs.values())l_(n,e);return!0}function sg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Hi("app","Firebase",u_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=s_;function d_(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:og,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Hn.create("bad-app-name",{appName:String(r)});const i=gs.get(r);if(i){if(ms(e,i.options)&&ms(n,i.config))return i;throw Hn.create("duplicate-app",{appName:r})}const o=new yw(r);for(const a of Su.values())o.addComponent(a);const s=new c_(e,n,o);return gs.set(r,s),s}function f_(e=og){const t=gs.get(e);if(!t)throw Hn.create("no-app",{appName:e});return t}function yr(e,t,n){var r;let i=(r=a_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}Ai(new Rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firebase-heartbeat-database",p_=1,Ni="firebase-heartbeat-store";let Ya=null;function ag(){return Ya||(Ya=Aw(h_,p_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ni)}}}).catch(e=>{throw Hn.create("idb-open",{originalErrorMessage:e.message})})),Ya}async function m_(e){var t;try{return(await ag()).transaction(Ni).objectStore(Ni).get(lg(e))}catch(n){if(n instanceof Cn)Bn.warn(n.message);else{const r=Hn.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Bn.warn(r.message)}}}async function Rf(e,t){var n;try{const i=(await ag()).transaction(Ni,"readwrite");return await i.objectStore(Ni).put(t,lg(e)),i.done}catch(r){if(r instanceof Cn)Bn.warn(r.message);else{const i=Hn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Bn.warn(i.message)}}}function lg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=1024,v_=30*24*60*60*1e3;class y_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new __(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Of();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=v_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Of(),{heartbeatsToSend:n,unsentEntries:r}=w_(this._heartbeatsCache.heartbeats),i=tg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Of(){return new Date().toISOString().substring(0,10)}function w_(e,t=g_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Af(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Af(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class __{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sw()?aw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await m_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Af(e){return tg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(e){Ai(new Rr("platform-logger",t=>new Lw(t),"PRIVATE")),Ai(new Rr("heartbeat",t=>new y_(t),"PRIVATE")),yr(_u,Pf,e),yr(_u,Pf,"esm2017"),yr("fire-js","")}S_("");function Lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ug(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E_=ug,cg=new Hi("auth","Firebase",ug());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new ng("@firebase/auth");function Mo(e,...t){Nf.logLevel<=se.ERROR&&Nf.error(`Auth (${oa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,...t){throw Mc(e,...t)}function Nt(e,...t){return Mc(e,...t)}function dg(e,t,n){const r=Object.assign(Object.assign({},E_()),{[t]:n});return new Hi("auth","Firebase",r).create(t,{appName:e.name})}function k_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&pt(e,"argument-error"),dg(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cg.create(e,...t)}function j(e,t,...n){if(!e)throw Mc(t,...n)}function zt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mo(t),new Error(t)}function Gt(e,t){e||zt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function Ft(e){Gt(e instanceof Function,"Expected a class definition");let t=Df.get(e);return t?(Gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Df.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(e,t){const n=sg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ms(o,t!=null?t:{}))return i;pt(i,"already-initialized")}return n.initialize({options:t})}function I_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function x_(){return Lf()==="http:"||Lf()==="https:"}function Lf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x_()||rw()||"connection"in navigator)?navigator.onLine:!0}function P_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Gt(n>t,"Short delay should be less than long delay!"),this.isMobile=nw()||iw()}get(){return T_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e,t){Gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Gi(3e4,6e4);function Ki(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qi(e,t,n,r,i={}){return hg(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Vi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),fg.fetch()(pg(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function hg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R_),t);try{const i=new A_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw _o(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw _o(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw _o(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dg(e,f,u);pt(e,f)}}catch(i){if(i instanceof Cn)throw i;pt(e,"network-request-failed")}}async function Qi(e,t,n,r,i={}){const o=await qi(e,t,n,r,i);return"mfaPendingCredential"in o&&pt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function pg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$c(e.config,i):`${e.config.apiScheme}://${i}`}class A_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),O_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(e,t){return qi(e,"POST","/v1/accounts:delete",t)}async function D_(e,t){return qi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function L_(e,t=!1){const n=Wi(e),r=await n.getIdToken(t),i=bc(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fi(Ja(i.auth_time)),issuedAtTime:fi(Ja(i.iat)),expirationTime:fi(Ja(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ja(e){return Number(e)*1e3}function bc(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const o=ew(r);return o?JSON.parse(o):(Mo("Failed to decode base64 JWT payload"),null)}catch(o){return Mo("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function M_(e){const t=bc(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Cn&&$_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function $_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Di(e,D_(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?F_(o.providerUserInfo):[],a=z_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new mg(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,h)}async function U_(e){const t=Wi(e);await vs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function z_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function F_(e){return e.map(t=>{var{providerId:n}=t,r=Lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(e,t){const n=await hg(e,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=pg(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):M_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return j(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await j_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Li;return r&&(j(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(j(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Mn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new mg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Di(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return L_(this,t)}reload(){return U_(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Mn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Di(this,N_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,c=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:S,isAnonymous:_,providerData:A,stsTokenManager:k}=n;j(m&&k,t,"internal-error");const C=Li.fromJSON(this.name,k);j(typeof m=="string",t,"internal-error"),Yt(h,t.name),Yt(c,t.name),j(typeof S=="boolean",t,"internal-error"),j(typeof _=="boolean",t,"internal-error"),Yt(g,t.name),Yt(v,t.name),Yt(E,t.name),Yt(T,t.name),Yt(p,t.name),Yt(d,t.name);const $=new Mn({uid:m,auth:t,email:c,emailVerified:S,displayName:h,isAnonymous:_,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:C,createdAt:p,lastLoginAt:d});return A&&Array.isArray(A)&&($.providerData=A.map(M=>Object.assign({},M))),T&&($._redirectEventId=T),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const o=new Mn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await vs(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gg.type="NONE";const Mf=gg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(e,t,n){return`firebase:${e}:${t}:${n}`}class wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,o),this.fullPersistenceKey=$o("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wr(Ft(Mf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ft(Mf);const s=$o(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const h=Mn._fromJSON(t,f);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new wr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new wr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sg(t))return"Blackberry";if(Eg(t))return"Webos";if(Uc(t))return"Safari";if((t.includes("chrome/")||yg(t))&&!t.includes("edge/"))return"Chrome";if(_g(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vg(e=Ue()){return/firefox\//i.test(e)}function Uc(e=Ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yg(e=Ue()){return/crios\//i.test(e)}function wg(e=Ue()){return/iemobile/i.test(e)}function _g(e=Ue()){return/android/i.test(e)}function Sg(e=Ue()){return/blackberry/i.test(e)}function Eg(e=Ue()){return/webos/i.test(e)}function sa(e=Ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function B_(e=Ue()){var t;return sa(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function H_(){return ow()&&document.documentMode===10}function kg(e=Ue()){return sa(e)||_g(e)||Eg(e)||Sg(e)||/windows phone/i.test(e)||wg(e)}function V_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(e,t=[]){let n;switch(e){case"Browser":n=$f(Ue());break;case"Worker":n=`${$f(Ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bf(this),this.idTokenSubscription=new bf(this),this.beforeStateQueue=new W_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await vs(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=P_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Wi(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Hi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ft(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return j(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Yi(e){return Wi(e)}class bf{constructor(t){this.auth=t,this.observer=null,this.addObserver=fw(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,n){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}async function K_(e,t){return qi(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(e,t){return Qi(e,"POST","/v1/accounts:signInWithPassword",Ki(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",Ki(e,t))}async function Y_(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",Ki(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends zc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Mi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Mi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return q_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Q_(t,{email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return K_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Y_(t,{idToken:n,email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(e,t){return Qi(e,"POST","/v1/accounts:signInWithIdp",Ki(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="http://localhost";class Vn extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Vn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Vn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return _r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_r(t,n)}buildRequest(){const t={requestUri:J_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z_(e){const t=ei(ti(e)).link,n=t?ei(ti(t)).deep_link_id:null,r=ei(ti(e)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||t||e}class Fc{constructor(t){var n,r,i,o,s,a;const l=ei(ti(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=X_((i=l.mode)!==null&&i!==void 0?i:null);j(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Z_(t);try{return new Fc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(t,n){return Mi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Fc.parseLink(n);return j(r,"argument-error"),Mi._fromEmailAndCode(t,r.code,r.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends jc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ji{constructor(){super("facebook.com")}static credential(t){return Vn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return nn.credential(t.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Vn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ji{constructor(){super("github.com")}static credential(t){return Vn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rn.credential(t.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ji{constructor(){super("twitter.com")}static credential(t,n){return Vn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return on.credentialFromTaggedObject(t)}static credentialFromError(t){return on.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e,t){return Qi(e,"POST","/v1/accounts:signUp",Ki(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Mn._fromIdTokenResponse(t,r,i),s=Uf(r);return new Wn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Uf(r);return new Wn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Uf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Cn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ys(t,n,r,i)}}function Ig(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(e,o,t,r):o})}async function tS(e,t,n=!1){const r=await Di(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await Di(e,Ig(i,o,t,e),n);j(s.idToken,i,"internal-error");const a=bc(s.idToken);j(a,i,"internal-error");const{sub:l}=a;return j(e.uid===l,i,"user-mismatch"),Wn._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&pt(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(e,t,n=!1){const r="signIn",i=await Ig(e,r,t),o=await Wn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function rS(e,t){return xg(Yi(e),t)}async function iS(e,t,n){const r=Yi(e),i=await eS(r,{returnSecureToken:!0,email:t,password:n}),o=await Wn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function oS(e,t,n){return rS(Wi(e),$r.credential(t,n))}const ws="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(){const e=Ue();return Uc(e)||sa(e)}const aS=1e3,lS=10;class Pg extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sS()&&V_(),this.fallbackToPolling=kg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);H_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,lS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pg.type="LOCAL";const uS=Pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Rg.type="SESSION";const Og=Rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new aa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await cS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Bc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const c=h;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(c.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function fS(e){Dt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function hS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function mS(){return Ag()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="firebaseLocalStorageDb",gS=1,_s="firebaseLocalStorage",Dg="fbase_key";class Xi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(e,t){return e.transaction([_s],t?"readwrite":"readonly").objectStore(_s)}function vS(){const e=indexedDB.deleteDatabase(Ng);return new Xi(e).toPromise()}function ku(){const e=indexedDB.open(Ng,gS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(_s,{keyPath:Dg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(_s)?t(r):(r.close(),await vS(),t(await ku()))})})}async function zf(e,t,n){const r=la(e,!0).put({[Dg]:t,value:n});return new Xi(r).toPromise()}async function yS(e,t){const n=la(e,!1).get(t),r=await new Xi(n).toPromise();return r===void 0?null:r.value}function Ff(e,t){const n=la(e,!0).delete(t);return new Xi(n).toPromise()}const wS=800,_S=3;class Lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ku(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_S)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ag()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(mS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hS(),!this.activeServiceWorker)return;this.sender=new dS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ku();return await zf(t,ws,"1"),await Ff(t,ws),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>yS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=la(i,!1).getAll();return new Xi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lg.type="LOCAL";const SS=Lg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function kS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Nt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ES().appendChild(r)})}function CS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(e,t){return t?Ft(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends zc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return _r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return _r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function IS(e){return xg(e.auth,new Hc(e),e.bypassAuthState)}function xS(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),nS(n,new Hc(e),e.bypassAuthState)}async function TS(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),tS(n,new Hc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return IS;case"linkViaPopup":case"linkViaRedirect":return TS;case"reauthViaPopup":case"reauthViaRedirect":return xS;default:pt(this.auth,"internal-error")}}resolve(t){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new Gi(2e3,1e4);async function RS(e,t,n){const r=Yi(e);k_(e,t,jc);const i=Mg(r,n);return new Nn(r,"signInViaPopup",t,i).executeNotNull()}class Nn extends $g{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const t=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,PS.get())};t()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="pendingRedirect",bo=new Map;class AS extends $g{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=bo.get(this.auth._key());if(!t){try{const r=await NS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}bo.set(this.auth._key(),t)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NS(e,t){const n=MS(t),r=LS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DS(e,t){bo.set(e._key(),t)}function LS(e){return Ft(e._redirectPersistence)}function MS(e){return $o(OS,e.config.apiKey,e.name)}async function $S(e,t,n=!1){const r=Yi(e),i=Mg(r,t),s=await new AS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=10*60*1e3;class US{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!zS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!bg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bS&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(t))}saveEventToCache(t){this.cachedEventUids.add(jf(t)),this.lastProcessedEventTime=Date.now()}}function jf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function bg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function zS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(e,t={}){return qi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function HS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await FS(e);for(const n of t)try{if(VS(n))return}catch{}pt(e,"unauthorized-domain")}function VS(e){const t=Eu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!BS.test(n))return!1;if(jS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Gi(3e4,6e4);function Bf(){const e=Dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function GS(e){return new Promise((t,n)=>{var r,i,o;function s(){Bf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bf(),n(Nt(e,"network-request-failed"))},timeout:WS.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Dt().gapi)===null||o===void 0)&&o.load)s();else{const a=CS("iframefcb");return Dt()[a]=()=>{gapi.load?s():n(Nt(e,"network-request-failed"))},kS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Uo=null,t})}let Uo=null;function KS(e){return Uo=Uo||GS(e),Uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new Gi(5e3,15e3),QS="__/auth/iframe",YS="emulator/auth/iframe",JS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$c(t,YS):`https://${e.config.authDomain}/${QS}`,r={apiKey:t.apiKey,appName:e.name,v:oa},i=XS.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vi(r).slice(1)}`}async function eE(e){const t=await KS(e),n=Dt().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:ZS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Nt(e,"network-request-failed"),a=Dt().setTimeout(()=>{o(s)},qS.get());function l(){Dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nE=500,rE=600,iE="_blank",oE="http://localhost";class Hf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sE(e,t,n,r=nE,i=rE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ue().toLowerCase();n&&(a=yg(u)?iE:n),vg(u)&&(t=t||oE,l.scrollbars="yes");const f=Object.entries(l).reduce((c,[g,v])=>`${c}${g}=${v},`,"");if(B_(u)&&a!=="_self")return aE(t||"",a),new Hf(null);const h=window.open(t||"",a,f);j(h,e,"popup-blocked");try{h.focus()}catch{}return new Hf(h)}function aE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="__/auth/handler",uE="emulator/auth/handler";function Vf(e,t,n,r,i,o){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oa,eventId:i};if(t instanceof jc){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",dw(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Ji){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cE(e)}?${Vi(a).slice(1)}`}function cE({config:e}){return e.emulator?$c(e,uE):`https://${e.authDomain}/${lE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class dE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Og,this._completeRedirectFn=$S,this._overrideRedirectResult=DS}async _openPopup(t,n,r,i){var o;Gt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Vf(t,n,r,Eu(),i);return sE(t,s,Bc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),fS(Vf(t,n,r,Eu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await eE(t),r=new US(t);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xa,{type:Xa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Xa];s!==void 0&&n(!!s),pt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return kg()||Uc()||sa()}}const fE=dE;var Wf="@firebase/auth",Gf="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mE(e){Ai(new Rr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{j(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),j(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cg(e)},f=new G_(a,l,u);return I_(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ai(new Rr("auth-internal",t=>{const n=Yi(t.getProvider("auth").getImmediate());return(r=>new hE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(Wf,Gf,pE(e)),yr(Wf,Gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(e=f_()){const t=sg(e,"auth");return t.isInitialized()?t.getImmediate():C_(e,{popupRedirectResolver:fE,persistence:[SS,uS,Og]})}mE("Browser");var ua={exports:{}},ca={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE=R.exports,vE=Symbol.for("react.element"),yE=Symbol.for("react.fragment"),wE=Object.prototype.hasOwnProperty,_E=gE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SE={key:!0,ref:!0,__self:!0,__source:!0};function Ug(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)wE.call(t,r)&&!SE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vE,type:e,key:o,ref:s,props:i,_owner:_E.current}}ca.Fragment=yE;ca.jsx=Ug;ca.jsxs=Ug;(function(e){e.exports=ca})(ua);const Je=ua.exports.Fragment,y=ua.exports.jsx,W=ua.exports.jsxs,zg=R.exports.createContext({}),EE=({children:e})=>{const[t,n]=R.exports.useState(window.localStorage.getItem("auth")==="true"),[r,i]=R.exports.useState(window.localStorage.getItem("userToken")),o=Kf(),s=({email:f,password:h})=>{iS(o,f,h).then(c=>{console.log("ELE ENTROU");const g=c.user;console.log(g),console.log(g==null?void 0:g.accessToken)}).catch(c=>{const g=c.code,v=c.message;console.log(g),console.log(v)})},a=({email:f,password:h})=>{oS(o,f,h).then(c=>{const g=c.user;console.log(g)}).catch(c=>{const g=c.code,v=c.message;console.log(g),console.log(v)})},l=()=>{const f=Kf(),h=new Pt;f.languageCode="pt",RS(o,h).then(c=>{var v;const g=(v=c.user)==null?void 0:v.accessToken;window.localStorage.setItem("userToken",g),window.localStorage.setItem("auth","true"),i(g),n(!0)}).catch(c=>{console.log();const g=c.code,v=c.message;c.customData.email,console.log(g),console.log(v);const E=Pt.credentialFromError(c);console.log(E)})},u=()=>{n(!1),i(""),localStorage.removeItem("auth"),localStorage.removeItem("userToken")};return y(zg.Provider,{value:{userToken:r,auth:t,signInWithGoogle:l,signout:u,signWithEmail:s,signWithEmailPassword:a},children:e})},br=()=>R.exports.useContext(zg),kE=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 60px;
  min-height: 600px;

  background-color: #111827;
`,CE=U.ul`
  display: grid;
  //grid: repeat(1, auto) / auto-flow auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  li {
    list-style-type: none;
  }
`,IE=U.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 1rem;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);

  min-width: 190px;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
  }
`,xE=U.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
`,TE=U.data`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`,Za=U.data`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  strong {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    color: gray;
  }
`,PE=U.h3`
  font-size: 1.35rem;
  text-align: center;
  padding-top: 1rem;
`,RE=U.p`
  font-size: 0.75rem;
  text-align: right;
  color: gray;
`;var Fg={exports:{}},Vc={exports:{}},jg=function(t,n){return function(){for(var i=new Array(arguments.length),o=0;o<i.length;o++)i[o]=arguments[o];return t.apply(n,i)}},OE=jg,Wc=Object.prototype.toString,Gc=function(e){return function(t){var n=Wc.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Qn(e){return e=e.toLowerCase(),function(n){return Gc(n)===e}}function Kc(e){return Array.isArray(e)}function Ss(e){return typeof e>"u"}function AE(e){return e!==null&&!Ss(e)&&e.constructor!==null&&!Ss(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Bg=Qn("ArrayBuffer");function NE(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Bg(e.buffer),t}function DE(e){return typeof e=="string"}function LE(e){return typeof e=="number"}function Hg(e){return e!==null&&typeof e=="object"}function zo(e){if(Gc(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var ME=Qn("Date"),$E=Qn("File"),bE=Qn("Blob"),UE=Qn("FileList");function qc(e){return Wc.call(e)==="[object Function]"}function zE(e){return Hg(e)&&qc(e.pipe)}function FE(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Wc.call(e)===t||qc(e.toString)&&e.toString()===t)}var jE=Qn("URLSearchParams");function BE(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function HE(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Qc(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),Kc(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function Cu(){var e={};function t(i,o){zo(e[o])&&zo(i)?e[o]=Cu(e[o],i):zo(i)?e[o]=Cu({},i):Kc(i)?e[o]=i.slice():e[o]=i}for(var n=0,r=arguments.length;n<r;n++)Qc(arguments[n],t);return e}function VE(e,t,n){return Qc(t,function(i,o){n&&typeof i=="function"?e[o]=OE(i,n):e[o]=i}),e}function WE(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function GE(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function KE(e,t,n){var r,i,o,s={};t=t||{};do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)o=r[i],s[o]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function qE(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n}function QE(e){if(!e)return null;var t=e.length;if(Ss(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var YE=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),Ne={isArray:Kc,isArrayBuffer:Bg,isBuffer:AE,isFormData:FE,isArrayBufferView:NE,isString:DE,isNumber:LE,isObject:Hg,isPlainObject:zo,isUndefined:Ss,isDate:ME,isFile:$E,isBlob:bE,isFunction:qc,isStream:zE,isURLSearchParams:jE,isStandardBrowserEnv:HE,forEach:Qc,merge:Cu,extend:VE,trim:BE,stripBOM:WE,inherits:GE,toFlatObject:KE,kindOf:Gc,kindOfTest:Qn,endsWith:qE,toArray:QE,isTypedArray:YE,isFileList:UE},Jn=Ne;function qf(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Vg=function(t,n,r){if(!n)return t;var i;if(r)i=r(n);else if(Jn.isURLSearchParams(n))i=n.toString();else{var o=[];Jn.forEach(n,function(l,u){l===null||typeof l>"u"||(Jn.isArray(l)?u=u+"[]":l=[l],Jn.forEach(l,function(h){Jn.isDate(h)?h=h.toISOString():Jn.isObject(h)&&(h=JSON.stringify(h)),o.push(qf(u)+"="+qf(h))}))}),i=o.join("&")}if(i){var s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t},JE=Ne;function da(){this.handlers=[]}da.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};da.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};da.prototype.forEach=function(t){JE.forEach(this.handlers,function(r){r!==null&&t(r)})};var XE=da,ZE=Ne,ek=function(t,n){ZE.forEach(t,function(i,o){o!==n&&o.toUpperCase()===n.toUpperCase()&&(t[n]=i,delete t[o])})},Wg=Ne;function Or(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Wg.inherits(Or,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Gg=Or.prototype,Kg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Kg[e]={value:e}});Object.defineProperties(Or,Kg);Object.defineProperty(Gg,"isAxiosError",{value:!0});Or.from=function(e,t,n,r,i,o){var s=Object.create(Gg);return Wg.toFlatObject(e,s,function(l){return l!==Error.prototype}),Or.call(s,e.message,t,n,r,i),s.name=e.name,o&&Object.assign(s,o),s};var Ur=Or,qg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yt=Ne;function tk(e,t){t=t||new FormData;var n=[];function r(o){return o===null?"":yt.isDate(o)?o.toISOString():yt.isArrayBuffer(o)||yt.isTypedArray(o)?typeof Blob=="function"?new Blob([o]):Buffer.from(o):o}function i(o,s){if(yt.isPlainObject(o)||yt.isArray(o)){if(n.indexOf(o)!==-1)throw Error("Circular reference detected in "+s);n.push(o),yt.forEach(o,function(l,u){if(!yt.isUndefined(l)){var f=s?s+"."+u:u,h;if(l&&!s&&typeof l=="object"){if(yt.endsWith(u,"{}"))l=JSON.stringify(l);else if(yt.endsWith(u,"[]")&&(h=yt.toArray(l))){h.forEach(function(c){!yt.isUndefined(c)&&t.append(f,r(c))});return}}i(l,f)}}),n.pop()}else t.append(s,r(o))}return i(e),t}var Qg=tk,el,Qf;function nk(){if(Qf)return el;Qf=1;var e=Ur;return el=function(n,r,i){var o=i.config.validateStatus;!i.status||!o||o(i.status)?n(i):r(new e("Request failed with status code "+i.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},el}var tl,Yf;function rk(){if(Yf)return tl;Yf=1;var e=Ne;return tl=e.isStandardBrowserEnv()?function(){return{write:function(r,i,o,s,a,l){var u=[];u.push(r+"="+encodeURIComponent(i)),e.isNumber(o)&&u.push("expires="+new Date(o).toGMTString()),e.isString(s)&&u.push("path="+s),e.isString(a)&&u.push("domain="+a),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),tl}var ik=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},ok=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},sk=ik,ak=ok,Yg=function(t,n){return t&&!sk(n)?ak(t,n):n},nl,Jf;function lk(){if(Jf)return nl;Jf=1;var e=Ne,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return nl=function(r){var i={},o,s,a;return r&&e.forEach(r.split(`
`),function(u){if(a=u.indexOf(":"),o=e.trim(u.substr(0,a)).toLowerCase(),s=e.trim(u.substr(a+1)),o){if(i[o]&&t.indexOf(o)>=0)return;o==="set-cookie"?i[o]=(i[o]?i[o]:[]).concat([s]):i[o]=i[o]?i[o]+", "+s:s}}),i},nl}var rl,Xf;function uk(){if(Xf)return rl;Xf=1;var e=Ne;return rl=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function o(s){var a=s;return n&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=o(window.location.href),function(a){var l=e.isString(a)?o(a):a;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),rl}var il,Zf;function fa(){if(Zf)return il;Zf=1;var e=Ur,t=Ne;function n(r){e.call(this,r==null?"canceled":r,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(n,e,{__CANCEL__:!0}),il=n,il}var ol,eh;function ck(){return eh||(eh=1,ol=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}),ol}var sl,th;function nh(){if(th)return sl;th=1;var e=Ne,t=nk(),n=rk(),r=Vg,i=Yg,o=lk(),s=uk(),a=qg,l=Ur,u=fa(),f=ck();return sl=function(c){return new Promise(function(v,E){var T=c.data,p=c.headers,d=c.responseType,m;function S(){c.cancelToken&&c.cancelToken.unsubscribe(m),c.signal&&c.signal.removeEventListener("abort",m)}e.isFormData(T)&&e.isStandardBrowserEnv()&&delete p["Content-Type"];var _=new XMLHttpRequest;if(c.auth){var A=c.auth.username||"",k=c.auth.password?unescape(encodeURIComponent(c.auth.password)):"";p.Authorization="Basic "+btoa(A+":"+k)}var C=i(c.baseURL,c.url);_.open(c.method.toUpperCase(),r(C,c.params,c.paramsSerializer),!0),_.timeout=c.timeout;function $(){if(!!_){var V="getAllResponseHeaders"in _?o(_.getAllResponseHeaders()):null,re=!d||d==="text"||d==="json"?_.responseText:_.response,oe={data:re,status:_.status,statusText:_.statusText,headers:V,config:c,request:_};t(function(Xe){v(Xe),S()},function(Xe){E(Xe),S()},oe),_=null}}if("onloadend"in _?_.onloadend=$:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout($)},_.onabort=function(){!_||(E(new l("Request aborted",l.ECONNABORTED,c,_)),_=null)},_.onerror=function(){E(new l("Network Error",l.ERR_NETWORK,c,_,_)),_=null},_.ontimeout=function(){var re=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded",oe=c.transitional||a;c.timeoutErrorMessage&&(re=c.timeoutErrorMessage),E(new l(re,oe.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,c,_)),_=null},e.isStandardBrowserEnv()){var M=(c.withCredentials||s(C))&&c.xsrfCookieName?n.read(c.xsrfCookieName):void 0;M&&(p[c.xsrfHeaderName]=M)}"setRequestHeader"in _&&e.forEach(p,function(re,oe){typeof T>"u"&&oe.toLowerCase()==="content-type"?delete p[oe]:_.setRequestHeader(oe,re)}),e.isUndefined(c.withCredentials)||(_.withCredentials=!!c.withCredentials),d&&d!=="json"&&(_.responseType=c.responseType),typeof c.onDownloadProgress=="function"&&_.addEventListener("progress",c.onDownloadProgress),typeof c.onUploadProgress=="function"&&_.upload&&_.upload.addEventListener("progress",c.onUploadProgress),(c.cancelToken||c.signal)&&(m=function(V){!_||(E(!V||V&&V.type?new u:V),_.abort(),_=null)},c.cancelToken&&c.cancelToken.subscribe(m),c.signal&&(c.signal.aborted?m():c.signal.addEventListener("abort",m))),T||(T=null);var q=f(C);if(q&&["http","https","file"].indexOf(q)===-1){E(new l("Unsupported protocol "+q+":",l.ERR_BAD_REQUEST,c));return}_.send(T)})},sl}var al,rh;function dk(){return rh||(rh=1,al=null),al}var Ee=Ne,ih=ek,oh=Ur,fk=qg,hk=Qg,pk={"Content-Type":"application/x-www-form-urlencoded"};function sh(e,t){!Ee.isUndefined(e)&&Ee.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function mk(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=nh()),e}function gk(e,t,n){if(Ee.isString(e))try{return(t||JSON.parse)(e),Ee.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var ha={transitional:fk,adapter:mk(),transformRequest:[function(t,n){if(ih(n,"Accept"),ih(n,"Content-Type"),Ee.isFormData(t)||Ee.isArrayBuffer(t)||Ee.isBuffer(t)||Ee.isStream(t)||Ee.isFile(t)||Ee.isBlob(t))return t;if(Ee.isArrayBufferView(t))return t.buffer;if(Ee.isURLSearchParams(t))return sh(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r=Ee.isObject(t),i=n&&n["Content-Type"],o;if((o=Ee.isFileList(t))||r&&i==="multipart/form-data"){var s=this.env&&this.env.FormData;return hk(o?{"files[]":t}:t,s&&new s)}else if(r||i==="application/json")return sh(n,"application/json"),gk(t);return t}],transformResponse:[function(t){var n=this.transitional||ha.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,o=!r&&this.responseType==="json";if(o||i&&Ee.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?oh.from(s,oh.ERR_BAD_RESPONSE,this,null,this.response):s}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dk()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ee.forEach(["delete","get","head"],function(t){ha.headers[t]={}});Ee.forEach(["post","put","patch"],function(t){ha.headers[t]=Ee.merge(pk)});var Yc=ha,vk=Ne,yk=Yc,wk=function(t,n,r){var i=this||yk;return vk.forEach(r,function(s){t=s.call(i,t,n)}),t},ll,ah;function Jg(){return ah||(ah=1,ll=function(t){return!!(t&&t.__CANCEL__)}),ll}var lh=Ne,ul=wk,_k=Jg(),Sk=Yc,Ek=fa();function cl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ek}var kk=function(t){cl(t),t.headers=t.headers||{},t.data=ul.call(t,t.data,t.headers,t.transformRequest),t.headers=lh.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),lh.forEach(["delete","get","head","post","put","patch","common"],function(i){delete t.headers[i]});var n=t.adapter||Sk.adapter;return n(t).then(function(i){return cl(t),i.data=ul.call(t,i.data,i.headers,t.transformResponse),i},function(i){return _k(i)||(cl(t),i&&i.response&&(i.response.data=ul.call(t,i.response.data,i.response.headers,t.transformResponse))),Promise.reject(i)})},Ze=Ne,Xg=function(t,n){n=n||{};var r={};function i(f,h){return Ze.isPlainObject(f)&&Ze.isPlainObject(h)?Ze.merge(f,h):Ze.isPlainObject(h)?Ze.merge({},h):Ze.isArray(h)?h.slice():h}function o(f){if(Ze.isUndefined(n[f])){if(!Ze.isUndefined(t[f]))return i(void 0,t[f])}else return i(t[f],n[f])}function s(f){if(!Ze.isUndefined(n[f]))return i(void 0,n[f])}function a(f){if(Ze.isUndefined(n[f])){if(!Ze.isUndefined(t[f]))return i(void 0,t[f])}else return i(void 0,n[f])}function l(f){if(f in n)return i(t[f],n[f]);if(f in t)return i(void 0,t[f])}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return Ze.forEach(Object.keys(t).concat(Object.keys(n)),function(h){var c=u[h]||o,g=c(h);Ze.isUndefined(g)&&c!==l||(r[h]=g)}),r},dl,uh;function Zg(){return uh||(uh=1,dl={version:"0.27.2"}),dl}var Ck=Zg().version,Zt=Ur,Jc={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Jc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var ch={};Jc.transitional=function(t,n,r){function i(o,s){return"[Axios v"+Ck+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return function(o,s,a){if(t===!1)throw new Zt(i(s," has been removed"+(n?" in "+n:"")),Zt.ERR_DEPRECATED);return n&&!ch[s]&&(ch[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function Ik(e,t,n){if(typeof e!="object")throw new Zt("options must be an object",Zt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],s=t[o];if(s){var a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new Zt("option "+o+" must be "+l,Zt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Zt("Unknown option "+o,Zt.ERR_BAD_OPTION)}}var xk={assertOptions:Ik,validators:Jc},ev=Ne,Tk=Vg,dh=XE,fh=kk,pa=Xg,Pk=Yg,tv=xk,Xn=tv.validators;function Ar(e){this.defaults=e,this.interceptors={request:new dh,response:new dh}}Ar.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=pa(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&tv.assertOptions(r,{silentJSONParsing:Xn.transitional(Xn.boolean),forcedJSONParsing:Xn.transitional(Xn.boolean),clarifyTimeoutError:Xn.transitional(Xn.boolean)},!1);var i=[],o=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(o=o&&g.synchronous,i.unshift(g.fulfilled,g.rejected))});var s=[];this.interceptors.response.forEach(function(g){s.push(g.fulfilled,g.rejected)});var a;if(!o){var l=[fh,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(s),a=Promise.resolve(n);l.length;)a=a.then(l.shift(),l.shift());return a}for(var u=n;i.length;){var f=i.shift(),h=i.shift();try{u=f(u)}catch(c){h(c);break}}try{a=fh(u)}catch(c){return Promise.reject(c)}for(;s.length;)a=a.then(s.shift(),s.shift());return a};Ar.prototype.getUri=function(t){t=pa(this.defaults,t);var n=Pk(t.baseURL,t.url);return Tk(n,t.params,t.paramsSerializer)};ev.forEach(["delete","get","head","options"],function(t){Ar.prototype[t]=function(n,r){return this.request(pa(r||{},{method:t,url:n,data:(r||{}).data}))}});ev.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(pa(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Ar.prototype[t]=n(),Ar.prototype[t+"Form"]=n(!0)});var Rk=Ar,fl,hh;function Ok(){if(hh)return fl;hh=1;var e=fa();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(s){r=s});var i=this;this.promise.then(function(o){if(!!i._listeners){var s,a=i._listeners.length;for(s=0;s<a;s++)i._listeners[s](o);i._listeners=null}}),this.promise.then=function(o){var s,a=new Promise(function(l){i.subscribe(l),s=l}).then(o);return a.cancel=function(){i.unsubscribe(s)},a},n(function(s){i.reason||(i.reason=new e(s),r(i.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},t.prototype.unsubscribe=function(r){if(!!this._listeners){var i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}},t.source=function(){var r,i=new t(function(s){r=s});return{token:i,cancel:r}},fl=t,fl}var hl,ph;function Ak(){return ph||(ph=1,hl=function(t){return function(r){return t.apply(null,r)}}),hl}var pl,mh;function Nk(){if(mh)return pl;mh=1;var e=Ne;return pl=function(n){return e.isObject(n)&&n.isAxiosError===!0},pl}var gh=Ne,Dk=jg,Fo=Rk,Lk=Xg,Mk=Yc;function nv(e){var t=new Fo(e),n=Dk(Fo.prototype.request,t);return gh.extend(n,Fo.prototype,t),gh.extend(n,t),n.create=function(i){return nv(Lk(e,i))},n}var Ye=nv(Mk);Ye.Axios=Fo;Ye.CanceledError=fa();Ye.CancelToken=Ok();Ye.isCancel=Jg();Ye.VERSION=Zg().version;Ye.toFormData=Qg;Ye.AxiosError=Ur;Ye.Cancel=Ye.CanceledError;Ye.all=function(t){return Promise.all(t)};Ye.spread=Ak();Ye.isAxiosError=Nk();Vc.exports=Ye;Vc.exports.default=Ye;(function(e){e.exports=Vc.exports})(Fg);const ma=Sh(Fg.exports),$k=async e=>{const t=`http://localhost:8098/nota/delete/${e}`;return await await ma.delete(t,{headers:{Authorization:"Bearer "+window.localStorage.getItem("userToken")}})},bk=()=>y(Je,{children:W("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"22px",height:"22px",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50",children:[y("line",{fill:"none",stroke:"#F45389",strokeLinecap:"round",strokeLinejoin:"round",x1:"35.253",y1:"14.747",x2:"14.747",y2:"35.254"}),y("circle",{fill:"none",stroke:"#fff",strokeLinejoin:"round",cx:"25",cy:"25",r:"23.668"}),y("line",{fill:"none",stroke:"#F45389",strokeLinecap:"round",strokeLinejoin:"round",x1:"35.253",y1:"35.254",x2:"14.747",y2:"14.747"})]})}),rv=R.exports.createContext({}),Uk=({children:e})=>{const[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState(0),[o,s]=R.exports.useState(!1),[a,l]=R.exports.useState({idNota:"",cnpjCompra:"",idProduto:"",qntProduto:""}),u=g=>{l({idNota:g.id,cnpjCompra:g.cnpj,idProduto:g.idProduto,qntProduto:g.qnt}),s(!0)},f=()=>{s(!1)},h=()=>{n(!t)},c=g=>{i(g)};return y(rv.Provider,{value:{updateList:t,componentValue:r,ListHasChanged:h,changeComponentValue:c,checkDataUpdate:o,dataUpdate:a,editForm:u,finishedForm:f},children:e})},zr=()=>R.exports.useContext(rv),zk=e=>{console.log("Nota do caralho"),console.log(e),console.log(typeof e);const{ListHasChanged:t,editForm:n}=zr();return W(IE,{children:[W("div",{children:[y("button",{onClick:()=>{n(e)},children:"Editar"}),y("button",{onClick:()=>{$k(e.id),t()},children:y(bk,{})})]}),W(xE,{children:[y(PE,{children:"Nota Fiscal"}),y(RE,{children:e.date}),W(TE,{children:[W(Za,{children:[" ",y("strong",{children:"Comprador"}),y("p",{children:e.cnpj})]}),W(Za,{children:[" ",y("strong",{children:"Produto"}),y("p",{children:e.idProduto})]}),W(Za,{children:[" ",y("strong",{children:"Quantidade"}),y("p",{children:e.qnt})]})]})]})]})},Fk=async()=>{const e="http://localhost:8098/nota/all";return await(await ma.get(e,{headers:{Authorization:"Bearer "+window.localStorage.getItem("userToken")}})).data},jk=()=>{const[e,t]=R.exports.useState([]),{signout:n}=br(),{updateList:r}=zr();return R.exports.useEffect(()=>{(async()=>{try{const o=await Fk();console.log(o),(o==null?void 0:o.code)==="404"&&n(),t(o)}catch(o){console.log(o)}})(),console.log(e==null?void 0:e.length)},[,r]),y(Je,{children:y(kE,{children:y(CE,{children:e==null?void 0:e.map(i=>y("li",{children:y(zk,{id:i==null?void 0:i.id,idProduto:i==null?void 0:i.idProduto,qnt:i==null?void 0:i.qntProduto,date:i==null?void 0:i.dateTime,cnpj:i==null?void 0:i.cnpjCompra})},i.id))})})})},Bk=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 6rem;
  padding-bottom: 60px;
  min-height: 600px;

  background-color: #111827;
`;U.ul`
  display: grid;
  //grid: repeat(1, auto) / auto-flow auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  li {
    list-style-type: none;
  }
`;const Hk=U.button`
  display: flex;
  flex-direction: column;
  background-color: rgba(150, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 10px;
`,Vk=U.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 1rem;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
`,Wk=U.div`
  height: auto;
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    padding-bottom: 1rem;
  }
`,Gk=U.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;

  button {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.01);
  }
`,Kk=U.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1rem;
`,ml=U.div`
  height: 0.7rem;
  width: 30%;

  background-color: rgba(255, 255, 255, 1);
`,gl=U.div`
  height: 0.7rem;
  width: 30%;

  background-color: #818cf8;
`,vh=U.button`
  :disabled {
    color: #383838;
  }
`,qk=U.section`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;
`,Qk=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Yk=U.span`
  width: 10px;
  height: 10px;
  background-color: red;

  border-radius: 100%;
  margin: 0.2rem;
`,Jk=U.span`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 100%;

  margin: 0.2rem;
`,ut=e=>y(Qk,{children:e.type==="warning"?y(Yk,{}):y(Jk,{})}),Xk=({data:e,setData:t,setValidation:n,validation:r})=>{const i=s=>{t({...e,cnpjCompra:s.target.value})};R.exports.useEffect(()=>{e.cnpjCompra.length!==14||o(e.cnpjCompra)?n(!1):n(!0)},[e.cnpjCompra]);function o(s){return/[a-zA-Z]/.test(s)}return y(Je,{children:W(qk,{children:[r===!1?y(ut,{type:"warning"}):y(ut,{type:"success"}),y("input",{type:"text",placeholder:"CNPJ do comprador",onChange:i,value:e.cnpjCompra})]})})},Zk=U.section`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;
`,eC=({data:e,setData:t,setValidation:n,validation:r})=>{const i=o=>{t({...e,idProduto:o.target.value})};return R.exports.useEffect(()=>{e.idProduto==""?n(!1):n(!0)},[e.idProduto]),y(Je,{children:W(Zk,{children:[r===!1?y(ut,{type:"warning"}):y(ut,{type:"success"}),y("input",{list:"products",value:e.idProduto,placeholder:"selecione o produto",onChange:o=>i(o)}),W("datalist",{id:"products",children:[y("option",{value:"Produto exemplo 1"}),y("option",{value:"Produto exemplo 2"}),y("option",{value:"Produto exemplo 3"})]})]})})},tC=U.section`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;
`,nC=({data:e,setData:t,setValidation:n,validation:r})=>{const i=o=>{t({...e,qntProduto:o.target.value})};return R.exports.useEffect(()=>{e.qntProduto==0?n(!1):n(!0)},[e.qntProduto]),y(Je,{children:W(tC,{children:[r===!1?y(ut,{type:"warning"}):y(ut,{type:"success"}),y("input",{type:"number",placeholder:"Quantidade",onChange:i,value:e.qntProduto})]})})},rC=async e=>{const t="http://localhost:8098/nota/save";return await await ma.post(t,e,{headers:{Authorization:"Bearer "+window.localStorage.getItem("userToken")}})},iC=async e=>{console.log("DATA UPDATE"),console.log(typeof e);const t=` http://localhost:8098/nota/save/${e.idNota}`;return await await ma.put(t,{cnpjCompra:e.cnpjCompra,idProduto:e.idProduto,qntProduto:e.qntProduto},{headers:{Authorization:"Bearer "+window.localStorage.getItem("userToken")}})},oC=()=>{const[e,t]=R.exports.useState(0),[n,r]=R.exports.useState(!1),i=["Cnpj do comprador","Produto","Quantidade"],[o,s]=R.exports.useState({idNota:"",cnpjCompra:"",idProduto:"",qntProduto:""}),{changeComponentValue:a,checkDataUpdate:l,dataUpdate:u,finishedForm:f}=zr();R.exports.useEffect(()=>{l==1&&s(u)},[,l]);const h=()=>{a(0)},c=()=>{e<2&&n===!0&&t(e+1)},g=()=>{e>0&&t(e-1),r(!0)},v=e==i.length-1?y(vh,{disabled:n===!1,onClick:()=>{alert("Nota cadastrada!"),l==1?(iC({idNota:o.idNota,cnpjCompra:o.cnpjCompra,idProduto:o.idProduto,qntProduto:o.qntProduto}),f()):rC({cnpjCompra:o.cnpjCompra,idProduto:o.idProduto,qntProduto:o.qntProduto}),h()},children:"Cadastrar"}):y(vh,{onClick:c,disabled:n===!1,children:"Avan\xE7ar"}),E=()=>{if(e==0)return y("div",{children:y(Xk,{data:o,setData:s,setValidation:r,validation:n})});if(e==1)return y("div",{children:y(eC,{data:o,setData:s,setValidation:r,validation:n})});if(e==2)return y(nC,{data:o,setData:s,setValidation:r,validation:n})};return y(Je,{children:W(Vk,{children:[W(Kk,{children:[e>0?y(gl,{}):y(ml,{}),e>1?y(gl,{}):y(ml,{}),e>2?y(gl,{}):y(ml,{})]}),W(Wk,{children:[y("h3",{children:i[e]}),y("div",{children:E()}),W(Gk,{children:[y("button",{onClick:g,disabled:e==0,children:"Voltar"}),v]})]})]})})},sC=()=>{const{changeComponentValue:e,finishedForm:t}=zr();return y(Je,{children:W(Bk,{children:[y(oC,{}),y(Hk,{onClick:()=>{e(0),t()},children:"Cancelar"})]})})},aC=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`,lC=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h1 {
    font-size: 3.75rem;
    line-height: 1;

    span:nth-child(3) {
      color: #818cf8;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75;
  }
`,uC=()=>y(aC,{children:W(lC,{children:[W("h1",{children:[y("span",{children:"Gerenciador"}),y("br",{}),y("span",{children:"de Notas Fiscais"})]}),y("p",{children:"Gerenciador simples, r\xE1pido e f\xE1cil de usar!"})]})}),cC=U.section`
  width: 100%;
  padding: 30px 0px 30px 0px;
`,dC=U.div`
  display: flex;
  justify-content: center;
`,fC=U.div`
  display: flex;
  justify-content: space-between;
  background-color: purple;
  width: 500px;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);

  padding: 8px;
  border-radius: 30px;

  div {
    padding: 0px 1rem 0px 0.4rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`,hC=()=>{const{signout:e}=br(),{changeComponentValue:t}=zr();return W(cC,{children:[y(uC,{}),y(dC,{children:W(fC,{children:[y("div",{children:y("button",{onClick:()=>{t(1)},children:"Criar nota"})}),y("div",{children:y("button",{onClick:e,children:"Sair"})})]})})]})},pC=()=>{const e=Nc(),{auth:t}=br(),{componentValue:n,checkDataUpdate:r}=zr(),[i,o]=R.exports.useState(1);return R.exports.useEffect(()=>{i==0?o(1):o(0)},[n]),R.exports.useEffect(()=>{r==!0?o(1):o(0)},[r]),R.exports.useEffect(()=>{window.localStorage.getItem("auth")!=="true"&&e("/")},[t]),W(Je,{children:[y(hC,{}),i==0?y(jk,{}):y(sC,{})]})},mC=U.section`
  height: auto;
  width: auto;
  min-width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
`,gC=U.div`
  height: 300px;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    padding-top: 1rem;
    padding-bottom: 0.4rem;
  }
`,vC=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,yC=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 1rem;

  div:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0.4rem;

    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.03);
  }
`,wC=U.button`
  :disabled {
    color: #383838;
  }
`,_C=U.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;

  button {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.01);
  }
`,SC=()=>{const[e,t]=R.exports.useState({email:"",password:""}),{signInWithGoogle:n,signWithEmailPassword:r}=br(),i=()=>{r(e.email,e.password)},o=a=>{t({...e,password:a.target.value})};return y(Je,{children:y(mC,{children:W(gC,{children:[W(yC,{children:[y("div",{children:y(Y1,{to:"/Signup",children:"Cadastrar"})}),y("div",{children:y("button",{onClick:n,children:"Entrar com google"})})]}),y("h3",{children:"Sign In"}),W(vC,{children:[y("input",{type:"email",placeholder:"Email",onChange:a=>{t({...e,email:a.target.value})},value:e.email}),y("input",{type:"password",placeholder:"senha",onChange:o,value:e.password}),y(_C,{children:y(wC,{onClick:i,children:"Fazer Login"})})]})]})})})},EC=U.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,kC=()=>{const e=Nc(),{auth:t}=br();return R.exports.useEffect(()=>{window.localStorage.getItem("auth")==="true"&&e("/home")},[t]),y(EC,{children:y(SC,{})})},CC=U.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,IC=U.section`
  height: auto;
  width: 30%;
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 1rem;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
`,xC=U.div`
  height: auto;
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    padding-bottom: 1rem;
  }
`,TC=U.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;

  button {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.01);
  }
`,PC=U.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1rem;
`,yh=U.div`
  height: 0.7rem;
  width: 47%;

  background-color: rgba(255, 255, 255, 1);
`,wh=U.div`
  height: 0.7rem;
  width: 47%;

  background-color: #818cf8;
`,_h=U.button`
  :disabled {
    color: #383838;
  }
`,RC=({validation:e,setValidation:t})=>{const[n,r]=R.exports.useState(!1);return R.exports.useEffect(()=>{t(!!n)},[n]),y(Je,{children:W("div",{children:[y("input",{type:"checkbox",name:"term",id:"term",onChange:o=>{r(o.target.checked)},checked:n}),y("label",{htmlFor:"term",children:"Eu aceito todos os termos e condi\xE7\xF5es de cadastro!"})]})})},OC=U.section`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  div {
    display: flex;
    flex: row;
    gap: 0.5rem;
  }
`,AC=({data:e,setData:t,setValidation:n})=>{const[r,i]=R.exports.useState(!1),[o,s]=R.exports.useState(!1),[a,l]=R.exports.useState(!1),u=v=>{t({...e,email:v.target.value})},f=v=>{t({...e,password:v.target.value})},h=v=>{t({...e,passwordConfirmation:v.target.value})};function c(v){return/[@]/.test(v)}function g(v){return/[.]/.test(v)}return R.exports.useEffect(()=>{e.email.length<5||!c(e.email)||!g(e.email)?i(!1):i(!0),e.password.length<6?s(!1):s(!0),e.password!==e.passwordConfirmation||e.password.length<6?l(!1):l(!0)},[,e.email,e.password,e.passwordConfirmation]),R.exports.useEffect(()=>{n(!(!r||!o||!a))},[r,o,a]),y(Je,{children:W(OC,{children:[W("div",{children:[r===!1?y(ut,{type:"warning"}):y(ut,{type:"success"}),y("input",{type:"email",placeholder:"Email",onChange:u,value:e.email})]}),W("div",{children:[o===!1?y(ut,{type:"warning"}):y(ut,{type:"success"})," ",y("input",{type:"password",placeholder:"senha",onChange:f,value:e.password})]}),W("div",{children:[a===!1?y(ut,{type:"warning"}):y(ut,{type:"success"})," ",y("input",{type:"password",placeholder:"confirmar senha",onChange:h,value:e.passwordConfirmation})]}),e.password!==e.passwordConfirmation&&y("div",{children:"As senhas nao coincidem!"})]})})},NC=()=>{const[e,t]=R.exports.useState(0),[n,r]=R.exports.useState(!1),{signWithEmail:i}=br(),o=["Dados","Termos"],[s,a]=R.exports.useState({email:"",password:"",passwordConfirmation:""}),l=()=>{e<1&&t(e+1)},u=()=>{e>0&&t(e-1)},f=e==o.length-1?y(_h,{disabled:!n,onClick:()=>{alert("Enviado!"),i({email:s.email,password:s.password})},children:"Cadastrar"}):y(_h,{onClick:l,disabled:!n,children:"Avan\xE7ar"}),h=()=>{if(e==0)return y("div",{children:y(AC,{data:s,setData:a,setValidation:r})});if(e==1)return y("div",{children:y(RC,{setValidation:r,validation:n})})};return y(Je,{children:W(IC,{children:[W(PC,{children:[e>0?y(wh,{}):y(yh,{}),e>1?y(wh,{}):y(yh,{})]}),W(xC,{children:[y("h3",{children:o[e]}),y("div",{children:h()}),W(TC,{children:[y("button",{onClick:u,disabled:e==0,children:"Voltar"}),f]})]})]})})},DC=()=>y(CC,{children:y(NC,{})}),LC=()=>y(q1,{children:y(R.exports.Fragment,{children:W(W1,{children:[y(Lo,{path:"/",element:y(kC,{})}),y(Lo,{path:"/signup",element:y(DC,{})}),y(Lo,{path:"/home",element:y(pC,{})})]})})}),MC=U.section`
  height: 5vh;
  width: 100%;

  margin-top: 2vh;
  margin-bottom: 2vw;
  padding-left: 40px;

  display: flex;
  align-items: center;
  justify-content: left;

  gap: 1vw;

  font-size: 22px;
`,$C=()=>y(Je,{children:W("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50",children:[y("polygon",{fill:"none",stroke:"#fff",strokeLinejoin:"bevel",points:"28.061,3.865 43.794,5.456 45.385,21.189 18.868,47.706 \r 1.544,30.382 "}),y("circle",{fill:"none",stroke:"#fff",strokeLinejoin:"bevel",cx:"34.248",cy:"15.002",r:"2.25"}),y("line",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",x1:"24.349",y1:"34.801",x2:"14.449",y2:"24.901"}),y("line",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",x1:"20.105",y1:"39.044",x2:"10.206",y2:"29.145"})]})}),bC=()=>y(Je,{children:W(MC,{children:[y($C,{}),y("span",{children:"Teppa Test"})]})});function UC(){return W("div",{children:[y(bC,{}),y(LC,{}),y(y1,{})]})}var zC="firebase",FC="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(zC,FC,"app");const jC={apiKey:"AIzaSyCIEPVDoyoRt88L1EoyoLvUthRASBRWZx4",authDomain:"notafiscal-teppa-front.firebaseapp.com",projectId:"notafiscal-teppa-front",storageBucket:"notafiscal-teppa-front.appspot.com",messagingSenderId:"1058244186883",appId:"1:1058244186883:web:4373df7efce33fe4a08f36"};d_(jC);vl.createRoot(document.getElementById("root")).render(y(Dr.StrictMode,{children:y(EE,{children:y(Uk,{children:y(UC,{})})})}));
