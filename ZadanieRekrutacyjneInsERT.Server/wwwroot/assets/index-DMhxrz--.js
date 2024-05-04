(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var td={exports:{}},qi={},rd={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),xv=Symbol.for("react.portal"),bv=Symbol.for("react.fragment"),Sv=Symbol.for("react.strict_mode"),Ev=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),Nv=Symbol.for("react.suspense"),Av=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),Xu=Symbol.iterator;function Tv(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,od={};function ar(e,n,t){this.props=e,this.context=n,this.refs=od,this.updater=t||ad}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ld(){}ld.prototype=ar.prototype;function Ps(e,n,t){this.props=e,this.context=n,this.refs=od,this.updater=t||ad}var _s=Ps.prototype=new ld;_s.constructor=Ps;id(_s,ar.prototype);_s.isPureReactComponent=!0;var Gu=Array.isArray,sd=Object.prototype.hasOwnProperty,Ns={current:null},ud={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,n,t){var r,a={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)sd.call(n,r)&&!ud.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:ca,type:e,key:i,ref:o,props:a,_owner:Ns.current}}function Iv(e,n){return{$$typeof:ca,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function As(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function $v(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ku=/\/+/g;function _o(e,n){return typeof e=="object"&&e!==null&&e.key!=null?$v(""+e.key):n.toString(36)}function oi(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ca:case xv:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+_o(o,0):r,Gu(a)?(t="",e!=null&&(t=e.replace(Ku,"$&/")+"/"),oi(a,n,t,"",function(u){return u})):a!=null&&(As(a)&&(a=Iv(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ku,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",Gu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+_o(i,l);o+=oi(i,n,t,s,a)}else if(s=Tv(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+_o(i,l++),o+=oi(i,n,t,s,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(e,n,t){if(e==null)return e;var r=[],a=0;return oi(e,r,"","",function(i){return n.call(t,i,a++)}),r}function Lv(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},li={transition:null},zv={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:li,ReactCurrentOwner:Ns};function cd(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Ca,forEach:function(e,n,t){Ca(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ca(e,function(){n++}),n},toArray:function(e){return Ca(e,function(n){return n})||[]},only:function(e){if(!As(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=ar;j.Fragment=bv;j.Profiler=Ev;j.PureComponent=Ps;j.StrictMode=Sv;j.Suspense=Nv;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv;j.act=cd;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),a=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Ns.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)sd.call(n,s)&&!ud.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ca,type:e.type,key:a,ref:i,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:Pv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cv,_context:e},e.Consumer=e};j.createElement=fd;j.createFactory=function(e){var n=fd.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:_v,render:e}};j.isValidElement=As;j.lazy=function(e){return{$$typeof:Ov,_payload:{_status:-1,_result:e},_init:Lv}};j.memo=function(e,n){return{$$typeof:Av,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=li.transition;li.transition={};try{e()}finally{li.transition=n}};j.unstable_act=cd;j.useCallback=function(e,n){return ke.current.useCallback(e,n)};j.useContext=function(e){return ke.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};j.useEffect=function(e,n){return ke.current.useEffect(e,n)};j.useId=function(){return ke.current.useId()};j.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return ke.current.useMemo(e,n)};j.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};j.useRef=function(e){return ke.current.useRef(e)};j.useState=function(e){return ke.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return ke.current.useTransition()};j.version="18.3.1";rd.exports=j;var Xt=rd.exports;const Os=nd(Xt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=Xt,Mv=Symbol.for("react.element"),jv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,Dv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uv={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,n,t){var r,a={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Fv.call(n,r)&&!Uv.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Mv,type:e,key:i,ref:o,props:a,_owner:Dv.current}}qi.Fragment=jv;qi.jsx=dd;qi.jsxs=dd;td.exports=qi;var I=td.exports,sl={},md={exports:{}},Te={},pd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,$){var R=_.length;_.push($);e:for(;0<R;){var ne=R-1>>>1,se=_[ne];if(0<a(se,$))_[ne]=$,_[R]=se,R=ne;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var $=_[0],R=_.pop();if(R!==$){_[0]=R;e:for(var ne=0,se=_.length,Sa=se>>>1;ne<Sa;){var Jn=2*(ne+1)-1,Po=_[Jn],qn=Jn+1,Ea=_[qn];if(0>a(Po,R))qn<se&&0>a(Ea,Po)?(_[ne]=Ea,_[qn]=R,ne=qn):(_[ne]=Po,_[Jn]=R,ne=Jn);else if(qn<se&&0>a(Ea,R))_[ne]=Ea,_[qn]=R,ne=qn;else break e}}return $}function a(_,$){var R=_.sortIndex-$.sortIndex;return R!==0?R:_.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,m=3,h=!1,y=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var $=t(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=_)r(u),$.sortIndex=$.expirationTime,n(s,$);else break;$=t(u)}}function g(_){if(w=!1,p(_),!y)if(t(s)!==null)y=!0,Eo(k);else{var $=t(u);$!==null&&Co(g,$.startTime-_)}}function k(_,$){y=!1,w&&(w=!1,v(N),N=-1),h=!0;var R=m;try{for(p($),d=t(s);d!==null&&(!(d.expirationTime>$)||_&&!Ue());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,m=d.priorityLevel;var se=ne(d.expirationTime<=$);$=e.unstable_now(),typeof se=="function"?d.callback=se:d===t(s)&&r(s),p($)}else r(s);d=t(s)}if(d!==null)var Sa=!0;else{var Jn=t(u);Jn!==null&&Co(g,Jn.startTime-$),Sa=!1}return Sa}finally{d=null,m=R,h=!1}}var b=!1,S=null,N=-1,L=5,z=-1;function Ue(){return!(e.unstable_now()-z<L)}function ur(){if(S!==null){var _=e.unstable_now();z=_;var $=!0;try{$=S(!0,_)}finally{$?fr():(b=!1,S=null)}}else b=!1}var fr;if(typeof c=="function")fr=function(){c(ur)};else if(typeof MessageChannel<"u"){var Qu=new MessageChannel,kv=Qu.port2;Qu.port1.onmessage=ur,fr=function(){kv.postMessage(null)}}else fr=function(){T(ur,0)};function Eo(_){S=_,b||(b=!0,fr())}function Co(_,$){N=T(function(){_(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Eo(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var R=m;m=$;try{return _()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,$){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=m;m=_;try{return $()}finally{m=R}},e.unstable_scheduleCallback=function(_,$,R){var ne=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ne+R:ne):R=ne,_){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=R+se,_={id:f++,callback:$,priorityLevel:_,startTime:R,expirationTime:se,sortIndex:-1},R>ne?(_.sortIndex=R,n(u,_),t(s)===null&&_===t(u)&&(w?(v(N),N=-1):w=!0,Co(g,R-ne))):(_.sortIndex=se,n(s,_),y||h||(y=!0,Eo(k))),_},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(_){var $=m;return function(){var R=m;m=$;try{return _.apply(this,arguments)}finally{m=R}}}})(vd);pd.exports=vd;var Yv=pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=Xt,Oe=Yv;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hd=new Set,jr={};function kt(e,n){Gt(e,n),Gt(e+"Capture",n)}function Gt(e,n){for(jr[e]=n,e=0;e<n.length;e++)hd.add(n[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zu={},Ju={};function Vv(e){return ul.call(Ju,e)?!0:ul.call(Zu,e)?!1:Hv.test(e)?Ju[e]=!0:(Zu[e]=!0,!1)}function Bv(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qv(e,n,t,r){if(n===null||typeof n>"u"||Bv(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function xe(e,n,t,r,a,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];me[n]=new xe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ts=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ts,Is);me[n]=new xe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ts,Is);me[n]=new xe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ts,Is);me[n]=new xe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,n,t,r){var a=me.hasOwnProperty(n)?me[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Qv(n,t,a,r)&&(t=null),r||a===null?Vv(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var kn=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),St=Symbol.for("react.portal"),Et=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),zs=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),Rs=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),qu=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,No;function wr(e){if(No===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);No=n&&n[1]||""}return`
`+No+e}var Ao=!1;function Oo(e,n){if(!e||Ao)return"";Ao=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Ao=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?wr(e):""}function Xv(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=Oo(e.type,!1),e;case 11:return e=Oo(e.type.render,!1),e;case 1:return e=Oo(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Et:return"Fragment";case St:return"Portal";case fl:return"Profiler";case Ls:return"StrictMode";case cl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case gd:return(e._context.displayName||"Context")+".Provider";case zs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rs:return n=e.displayName||null,n!==null?n:ml(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return ml(e(n))}catch{}}return null}function Gv(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(n);case 8:return n===Ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kv(e){var n=kd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _a(e){e._valueTracker||(e._valueTracker=Kv(e))}function xd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ef(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Un(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bd(e,n){n=n.checked,n!=null&&$s(e,"checked",n,!1)}function vl(e,n){bd(e,n);var t=Un(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?hl(e,n.type,t):n.hasOwnProperty("defaultValue")&&hl(e,n.type,Un(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function nf(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function hl(e,n,t){(n!=="number"||bi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var kr=Array.isArray;function Dt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Un(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function gl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tf(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(kr(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Un(t)}}function Sd(e,n){var t=Un(n.value),r=Un(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function rf(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ed(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ed(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Na,Cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zv=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Zv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Cr[n]=Cr[e]})});function Pd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+n).trim():n+"px"}function _d(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Pd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var Jv=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,n){if(n){if(Jv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function kl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Ut=null,Yt=null;function af(e){if(e=pa(e)){if(typeof bl!="function")throw Error(x(280));var n=e.stateNode;n&&(n=ao(n),bl(e.stateNode,e.type,n))}}function Nd(e){Ut?Yt?Yt.push(e):Yt=[e]:Ut=e}function Ad(){if(Ut){var e=Ut,n=Yt;if(Yt=Ut=null,af(e),n)for(e=0;e<n.length;e++)af(n[e])}}function Od(e,n){return e(n)}function Td(){}var To=!1;function Id(e,n,t){if(To)return e(n,t);To=!0;try{return Od(e,n,t)}finally{To=!1,(Ut!==null||Yt!==null)&&(Td(),Ad())}}function Dr(e,n){var t=e.stateNode;if(t===null)return null;var r=ao(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var Sl=!1;if(fn)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Sl=!1}function qv(e,n,t,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Pr=!1,Si=null,Ei=!1,El=null,e1={onError:function(e){Pr=!0,Si=e}};function n1(e,n,t,r,a,i,o,l,s){Pr=!1,Si=null,qv.apply(e1,arguments)}function t1(e,n,t,r,a,i,o,l,s){if(n1.apply(this,arguments),Pr){if(Pr){var u=Si;Pr=!1,Si=null}else throw Error(x(198));Ei||(Ei=!0,El=u)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function $d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function of(e){if(xt(e)!==e)throw Error(x(188))}function r1(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return of(a),e;if(i===r)return of(a),n;i=i.sibling}throw Error(x(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function Ld(e){return e=r1(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=zd(e);if(n!==null)return n;e=e.sibling}return null}var Rd=Oe.unstable_scheduleCallback,lf=Oe.unstable_cancelCallback,a1=Oe.unstable_shouldYield,i1=Oe.unstable_requestPaint,te=Oe.unstable_now,o1=Oe.unstable_getCurrentPriorityLevel,js=Oe.unstable_ImmediatePriority,Md=Oe.unstable_UserBlockingPriority,Ci=Oe.unstable_NormalPriority,l1=Oe.unstable_LowPriority,jd=Oe.unstable_IdlePriority,eo=null,tn=null;function s1(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:c1,u1=Math.log,f1=Math.LN2;function c1(e){return e>>>=0,e===0?32:31-(u1(e)/f1|0)|0}var Aa=64,Oa=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?r=xr(l):(i&=o,i!==0&&(r=xr(i)))}else o=t&~a,o!==0?r=xr(o):i!==0&&(r=xr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Xe(n),a=1<<t,r|=e[t],n&=~a;return r}function d1(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Xe(i),l=1<<o,s=a[o];s===-1?(!(l&t)||l&r)&&(a[o]=d1(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fd(){var e=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),e}function Io(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function da(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function p1(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Xe(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function Fs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Xe(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var D=0;function Dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ud,Ds,Yd,Wd,Hd,Pl=!1,Ta=[],$n=null,Ln=null,zn=null,Ur=new Map,Yr=new Map,Nn=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sf(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Ur.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(n.pointerId)}}function mr(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=pa(n),n!==null&&Ds(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function h1(e,n,t,r,a){switch(n){case"focusin":return $n=mr($n,e,n,t,r,a),!0;case"dragenter":return Ln=mr(Ln,e,n,t,r,a),!0;case"mouseover":return zn=mr(zn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Ur.set(i,mr(Ur.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Yr.set(i,mr(Yr.get(i)||null,e,n,t,r,a)),!0}return!1}function Vd(e){var n=tt(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=$d(t),n!==null){e.blockedOn=n,Hd(e.priority,function(){Yd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_l(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);xl=r,t.target.dispatchEvent(r),xl=null}else return n=pa(t),n!==null&&Ds(n),e.blockedOn=t,!1;n.shift()}return!0}function uf(e,n,t){si(e)&&t.delete(n)}function g1(){Pl=!1,$n!==null&&si($n)&&($n=null),Ln!==null&&si(Ln)&&(Ln=null),zn!==null&&si(zn)&&(zn=null),Ur.forEach(uf),Yr.forEach(uf)}function pr(e,n){e.blockedOn===n&&(e.blockedOn=null,Pl||(Pl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,g1)))}function Wr(e){function n(a){return pr(a,e)}if(0<Ta.length){pr(Ta[0],e);for(var t=1;t<Ta.length;t++){var r=Ta[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&pr($n,e),Ln!==null&&pr(Ln,e),zn!==null&&pr(zn,e),Ur.forEach(n),Yr.forEach(n),t=0;t<Nn.length;t++)r=Nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(t=Nn[0],t.blockedOn===null);)Vd(t),t.blockedOn===null&&Nn.shift()}var Wt=kn.ReactCurrentBatchConfig,_i=!0;function y1(e,n,t,r){var a=D,i=Wt.transition;Wt.transition=null;try{D=1,Us(e,n,t,r)}finally{D=a,Wt.transition=i}}function w1(e,n,t,r){var a=D,i=Wt.transition;Wt.transition=null;try{D=4,Us(e,n,t,r)}finally{D=a,Wt.transition=i}}function Us(e,n,t,r){if(_i){var a=_l(e,n,t,r);if(a===null)Yo(e,n,r,Ni,t),sf(e,r);else if(h1(a,e,n,t,r))r.stopPropagation();else if(sf(e,r),n&4&&-1<v1.indexOf(e)){for(;a!==null;){var i=pa(a);if(i!==null&&Ud(i),i=_l(e,n,t,r),i===null&&Yo(e,n,r,Ni,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Yo(e,n,r,null,t)}}var Ni=null;function _l(e,n,t,r){if(Ni=null,e=Ms(r),e=tt(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=$d(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ni=e,null}function Bd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o1()){case js:return 1;case Md:return 4;case Ci:case l1:return 16;case jd:return 536870912;default:return 16}default:return 16}}var On=null,Ys=null,ui=null;function Qd(){if(ui)return ui;var e,n=Ys,t=n.length,r,a="value"in On?On.value:On.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return ui=a.slice(e,1<r?1-r:void 0)}function fi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ia(){return!0}function ff(){return!1}function Ie(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ia:ff,this.isPropagationStopped=ff,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ie(ir),ma=Z({},ir,{view:0,detail:0}),k1=Ie(ma),$o,Lo,vr,no=Z({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?($o=e.screenX-vr.screenX,Lo=e.screenY-vr.screenY):Lo=$o=0,vr=e),$o)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),cf=Ie(no),x1=Z({},no,{dataTransfer:0}),b1=Ie(x1),S1=Z({},ma,{relatedTarget:0}),zo=Ie(S1),E1=Z({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=Ie(E1),P1=Z({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_1=Ie(P1),N1=Z({},ir,{data:0}),df=Ie(N1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=T1[e])?!!n[e]:!1}function Hs(){return I1}var $1=Z({},ma,{key:function(e){if(e.key){var n=A1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=Ie($1),z1=Z({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=Ie(z1),R1=Z({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),M1=Ie(R1),j1=Z({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),F1=Ie(j1),D1=Z({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=Ie(D1),Y1=[9,13,27,32],Vs=fn&&"CompositionEvent"in window,_r=null;fn&&"documentMode"in document&&(_r=document.documentMode);var W1=fn&&"TextEvent"in window&&!_r,Xd=fn&&(!Vs||_r&&8<_r&&11>=_r),pf=" ",vf=!1;function Gd(e,n){switch(e){case"keyup":return Y1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ct=!1;function H1(e,n){switch(e){case"compositionend":return Kd(n);case"keypress":return n.which!==32?null:(vf=!0,pf);case"textInput":return e=n.data,e===pf&&vf?null:e;default:return null}}function V1(e,n){if(Ct)return e==="compositionend"||!Vs&&Gd(e,n)?(e=Qd(),ui=Ys=On=null,Ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xd&&n.locale!=="ko"?null:n.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!B1[e.type]:n==="textarea"}function Zd(e,n,t,r){Nd(r),n=Ai(n,"onChange"),0<n.length&&(t=new Ws("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Nr=null,Hr=null;function Q1(e){sm(e,0)}function to(e){var n=Nt(e);if(xd(n))return e}function X1(e,n){if(e==="change")return n}var Jd=!1;if(fn){var Ro;if(fn){var Mo="oninput"in document;if(!Mo){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Mo=typeof gf.oninput=="function"}Ro=Mo}else Ro=!1;Jd=Ro&&(!document.documentMode||9<document.documentMode)}function yf(){Nr&&(Nr.detachEvent("onpropertychange",qd),Hr=Nr=null)}function qd(e){if(e.propertyName==="value"&&to(Hr)){var n=[];Zd(n,Hr,e,Ms(e)),Id(Q1,n)}}function G1(e,n,t){e==="focusin"?(yf(),Nr=n,Hr=t,Nr.attachEvent("onpropertychange",qd)):e==="focusout"&&yf()}function K1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(Hr)}function Z1(e,n){if(e==="click")return to(n)}function J1(e,n){if(e==="input"||e==="change")return to(n)}function q1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:q1;function Vr(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!ul.call(n,a)||!Ke(e[a],n[a]))return!1}return!0}function wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,n){var t=wf(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=wf(t)}}function em(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?em(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nm(){for(var e=window,n=bi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=bi(e.document)}return n}function Bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function eh(e){var n=nm(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&em(t.ownerDocument.documentElement,t)){if(r!==null&&Bs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=kf(t,i);var o=kf(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=fn&&"documentMode"in document&&11>=document.documentMode,Pt=null,Nl=null,Ar=null,Al=!1;function xf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Al||Pt==null||Pt!==bi(r)||(r=Pt,"selectionStart"in r&&Bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Vr(Ar,r)||(Ar=r,r=Ai(Nl,"onSelect"),0<r.length&&(n=new Ws("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Pt)))}function $a(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var _t={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},jo={},tm={};fn&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function ro(e){if(jo[e])return jo[e];if(!_t[e])return e;var n=_t[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tm)return jo[e]=n[t];return e}var rm=ro("animationend"),am=ro("animationiteration"),im=ro("animationstart"),om=ro("transitionend"),lm=new Map,bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,n){lm.set(e,n),kt(n,[e])}for(var Fo=0;Fo<bf.length;Fo++){var Do=bf[Fo],th=Do.toLowerCase(),rh=Do[0].toUpperCase()+Do.slice(1);Gn(th,"on"+rh)}Gn(rm,"onAnimationEnd");Gn(am,"onAnimationIteration");Gn(im,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(om,"onTransitionEnd");Gt("onMouseEnter",["mouseout","mouseover"]);Gt("onMouseLeave",["mouseout","mouseover"]);Gt("onPointerEnter",["pointerout","pointerover"]);Gt("onPointerLeave",["pointerout","pointerover"]);kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Sf(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,t1(r,n,void 0,e),e.currentTarget=null}function sm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Sf(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Sf(a,l,u),i=s}}}if(Ei)throw e=El,Ei=!1,El=null,e}function Y(e,n){var t=n[Ll];t===void 0&&(t=n[Ll]=new Set);var r=e+"__bubble";t.has(r)||(um(n,e,2,!1),t.add(r))}function Uo(e,n,t){var r=0;n&&(r|=4),um(t,e,r,n)}var La="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[La]){e[La]=!0,hd.forEach(function(t){t!=="selectionchange"&&(ah.has(t)||Uo(t,!1,e),Uo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[La]||(n[La]=!0,Uo("selectionchange",!1,n))}}function um(e,n,t,r){switch(Bd(n)){case 1:var a=y1;break;case 4:a=w1;break;default:a=Us}t=a.bind(null,n,t,e),a=void 0,!Sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Yo(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=tt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Id(function(){var u=i,f=Ms(t),d=[];e:{var m=lm.get(e);if(m!==void 0){var h=Ws,y=e;switch(e){case"keypress":if(fi(t)===0)break e;case"keydown":case"keyup":h=L1;break;case"focusin":y="focus",h=zo;break;case"focusout":y="blur",h=zo;break;case"beforeblur":case"afterblur":h=zo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=M1;break;case rm:case am:case im:h=C1;break;case om:h=F1;break;case"scroll":h=k1;break;case"wheel":h=U1;break;case"copy":case"cut":case"paste":h=_1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=mf}var w=(n&4)!==0,T=!w&&e==="scroll",v=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,v!==null&&(g=Dr(c,v),g!=null&&w.push(Qr(c,g,p)))),T)break;c=c.return}0<w.length&&(m=new h(m,y,null,t,f),d.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&t!==xl&&(y=t.relatedTarget||t.fromElement)&&(tt(y)||y[cn]))break e;if((h||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=u,y=y?tt(y):null,y!==null&&(T=xt(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(w=cf,g="onMouseLeave",v="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=mf,g="onPointerLeave",v="onPointerEnter",c="pointer"),T=h==null?m:Nt(h),p=y==null?m:Nt(y),m=new w(g,c+"leave",h,t,f),m.target=T,m.relatedTarget=p,g=null,tt(f)===u&&(w=new w(v,c+"enter",y,t,f),w.target=p,w.relatedTarget=T,g=w),T=g,h&&y)n:{for(w=h,v=y,c=0,p=w;p;p=bt(p))c++;for(p=0,g=v;g;g=bt(g))p++;for(;0<c-p;)w=bt(w),c--;for(;0<p-c;)v=bt(v),p--;for(;c--;){if(w===v||v!==null&&w===v.alternate)break n;w=bt(w),v=bt(v)}w=null}else w=null;h!==null&&Ef(d,m,h,w,!1),y!==null&&T!==null&&Ef(d,T,y,w,!0)}}e:{if(m=u?Nt(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var k=X1;else if(hf(m))if(Jd)k=J1;else{k=K1;var b=G1}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Z1);if(k&&(k=k(e,u))){Zd(d,k,t,f);break e}b&&b(e,m,u),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&hl(m,"number",m.value)}switch(b=u?Nt(u):window,e){case"focusin":(hf(b)||b.contentEditable==="true")&&(Pt=b,Nl=u,Ar=null);break;case"focusout":Ar=Nl=Pt=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,xf(d,t,f);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":xf(d,t,f)}var S;if(Vs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ct?Gd(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Xd&&t.locale!=="ko"&&(Ct||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ct&&(S=Qd()):(On=f,Ys="value"in On?On.value:On.textContent,Ct=!0)),b=Ai(u,N),0<b.length&&(N=new df(N,e,null,t,f),d.push({event:N,listeners:b}),S?N.data=S:(S=Kd(t),S!==null&&(N.data=S)))),(S=W1?H1(e,t):V1(e,t))&&(u=Ai(u,"onBeforeInput"),0<u.length&&(f=new df("onBeforeInput","beforeinput",null,t,f),d.push({event:f,listeners:u}),f.data=S))}sm(d,n)})}function Qr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ai(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Dr(e,t),i!=null&&r.unshift(Qr(e,i,a)),i=Dr(e,n),i!=null&&r.push(Qr(e,i,a))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Dr(t,i),s!=null&&o.unshift(Qr(t,s,l))):a||(s=Dr(t,i),s!=null&&o.push(Qr(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var ih=/\r\n?/g,oh=/\u0000|\uFFFD/g;function Cf(e){return(typeof e=="string"?e:""+e).replace(ih,`
`).replace(oh,"")}function za(e,n,t){if(n=Cf(n),Cf(e)!==n&&t)throw Error(x(425))}function Oi(){}var Ol=null,Tl=null;function Il(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(e){return Pf.resolve(null).then(e).catch(uh)}:$l;function uh(e){setTimeout(function(){throw e})}function Wo(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Wr(n)}function Rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _f(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),qe="__reactFiber$"+or,Xr="__reactProps$"+or,cn="__reactContainer$"+or,Ll="__reactEvents$"+or,fh="__reactListeners$"+or,ch="__reactHandles$"+or;function tt(e){var n=e[qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[cn]||t[qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_f(e);e!==null;){if(t=e[qe])return t;e=_f(e)}return n}e=t,t=e.parentNode}return null}function pa(e){return e=e[qe]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ao(e){return e[Xr]||null}var zl=[],At=-1;function Kn(e){return{current:e}}function V(e){0>At||(e.current=zl[At],zl[At]=null,At--)}function U(e,n){At++,zl[At]=e.current,e.current=n}var Yn={},ge=Kn(Yn),Ee=Kn(!1),ct=Yn;function Kt(e,n){var t=e.type.contextTypes;if(!t)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ce(e){return e=e.childContextTypes,e!=null}function Ti(){V(Ee),V(ge)}function Nf(e,n,t){if(ge.current!==Yn)throw Error(x(168));U(ge,n),U(Ee,t)}function fm(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(x(108,Gv(e)||"Unknown",a));return Z({},t,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,ct=ge.current,U(ge,e),U(Ee,Ee.current),!0}function Af(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=fm(e,n,ct),r.__reactInternalMemoizedMergedChildContext=e,V(Ee),V(ge),U(ge,e)):V(Ee),U(Ee,t)}var on=null,io=!1,Ho=!1;function cm(e){on===null?on=[e]:on.push(e)}function dh(e){io=!0,cm(e)}function Zn(){if(!Ho&&on!==null){Ho=!0;var e=0,n=D;try{var t=on;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}on=null,io=!1}catch(a){throw on!==null&&(on=on.slice(e+1)),Rd(js,Zn),a}finally{D=n,Ho=!1}}return null}var Ot=[],Tt=0,$i=null,Li=0,ze=[],Re=0,dt=null,ln=1,sn="";function et(e,n){Ot[Tt++]=Li,Ot[Tt++]=$i,$i=e,Li=n}function dm(e,n,t){ze[Re++]=ln,ze[Re++]=sn,ze[Re++]=dt,dt=e;var r=ln;e=sn;var a=32-Xe(r)-1;r&=~(1<<a),t+=1;var i=32-Xe(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ln=1<<32-Xe(n)+a|t<<a|r,sn=i+e}else ln=1<<i|t<<a|r,sn=e}function Qs(e){e.return!==null&&(et(e,1),dm(e,1,0))}function Xs(e){for(;e===$i;)$i=Ot[--Tt],Ot[Tt]=null,Li=Ot[--Tt],Ot[Tt]=null;for(;e===dt;)dt=ze[--Re],ze[Re]=null,sn=ze[--Re],ze[Re]=null,ln=ze[--Re],ze[Re]=null}var Ae=null,Ne=null,X=!1,Ve=null;function mm(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Of(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,Ne=Rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,Ne=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=dt!==null?{id:ln,overflow:sn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ae=e,Ne=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(X){var n=Ne;if(n){var t=n;if(!Of(e,n)){if(Rl(e))throw Error(x(418));n=Rn(t.nextSibling);var r=Ae;n&&Of(e,n)?mm(r,t):(e.flags=e.flags&-4097|2,X=!1,Ae=e)}}else{if(Rl(e))throw Error(x(418));e.flags=e.flags&-4097|2,X=!1,Ae=e}}}function Tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Ra(e){if(e!==Ae)return!1;if(!X)return Tf(e),X=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Il(e.type,e.memoizedProps)),n&&(n=Ne)){if(Rl(e))throw pm(),Error(x(418));for(;n;)mm(e,n),n=Rn(n.nextSibling)}if(Tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ne=Rn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ne=null}}else Ne=Ae?Rn(e.stateNode.nextSibling):null;return!0}function pm(){for(var e=Ne;e;)e=Rn(e.nextSibling)}function Zt(){Ne=Ae=null,X=!1}function Gs(e){Ve===null?Ve=[e]:Ve.push(e)}var mh=kn.ReactCurrentBatchConfig;function hr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function Ma(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function If(e){var n=e._init;return n(e._payload)}function vm(e){function n(v,c){if(e){var p=v.deletions;p===null?(v.deletions=[c],v.flags|=16):p.push(c)}}function t(v,c){if(!e)return null;for(;c!==null;)n(v,c),c=c.sibling;return null}function r(v,c){for(v=new Map;c!==null;)c.key!==null?v.set(c.key,c):v.set(c.index,c),c=c.sibling;return v}function a(v,c){return v=Dn(v,c),v.index=0,v.sibling=null,v}function i(v,c,p){return v.index=p,e?(p=v.alternate,p!==null?(p=p.index,p<c?(v.flags|=2,c):p):(v.flags|=2,c)):(v.flags|=1048576,c)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,c,p,g){return c===null||c.tag!==6?(c=Zo(p,v.mode,g),c.return=v,c):(c=a(c,p),c.return=v,c)}function s(v,c,p,g){var k=p.type;return k===Et?f(v,c,p.props.children,g,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&If(k)===c.type)?(g=a(c,p.props),g.ref=hr(v,c,p),g.return=v,g):(g=gi(p.type,p.key,p.props,null,v.mode,g),g.ref=hr(v,c,p),g.return=v,g)}function u(v,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Jo(p,v.mode,g),c.return=v,c):(c=a(c,p.children||[]),c.return=v,c)}function f(v,c,p,g,k){return c===null||c.tag!==7?(c=ft(p,v.mode,g,k),c.return=v,c):(c=a(c,p),c.return=v,c)}function d(v,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zo(""+c,v.mode,p),c.return=v,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Pa:return p=gi(c.type,c.key,c.props,null,v.mode,p),p.ref=hr(v,null,c),p.return=v,p;case St:return c=Jo(c,v.mode,p),c.return=v,c;case Pn:var g=c._init;return d(v,g(c._payload),p)}if(kr(c)||cr(c))return c=ft(c,v.mode,p,null),c.return=v,c;Ma(v,c)}return null}function m(v,c,p,g){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(v,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pa:return p.key===k?s(v,c,p,g):null;case St:return p.key===k?u(v,c,p,g):null;case Pn:return k=p._init,m(v,c,k(p._payload),g)}if(kr(p)||cr(p))return k!==null?null:f(v,c,p,g,null);Ma(v,p)}return null}function h(v,c,p,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return v=v.get(p)||null,l(c,v,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pa:return v=v.get(g.key===null?p:g.key)||null,s(c,v,g,k);case St:return v=v.get(g.key===null?p:g.key)||null,u(c,v,g,k);case Pn:var b=g._init;return h(v,c,p,b(g._payload),k)}if(kr(g)||cr(g))return v=v.get(p)||null,f(c,v,g,k,null);Ma(c,g)}return null}function y(v,c,p,g){for(var k=null,b=null,S=c,N=c=0,L=null;S!==null&&N<p.length;N++){S.index>N?(L=S,S=null):L=S.sibling;var z=m(v,S,p[N],g);if(z===null){S===null&&(S=L);break}e&&S&&z.alternate===null&&n(v,S),c=i(z,c,N),b===null?k=z:b.sibling=z,b=z,S=L}if(N===p.length)return t(v,S),X&&et(v,N),k;if(S===null){for(;N<p.length;N++)S=d(v,p[N],g),S!==null&&(c=i(S,c,N),b===null?k=S:b.sibling=S,b=S);return X&&et(v,N),k}for(S=r(v,S);N<p.length;N++)L=h(S,v,N,p[N],g),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?N:L.key),c=i(L,c,N),b===null?k=L:b.sibling=L,b=L);return e&&S.forEach(function(Ue){return n(v,Ue)}),X&&et(v,N),k}function w(v,c,p,g){var k=cr(p);if(typeof k!="function")throw Error(x(150));if(p=k.call(p),p==null)throw Error(x(151));for(var b=k=null,S=c,N=c=0,L=null,z=p.next();S!==null&&!z.done;N++,z=p.next()){S.index>N?(L=S,S=null):L=S.sibling;var Ue=m(v,S,z.value,g);if(Ue===null){S===null&&(S=L);break}e&&S&&Ue.alternate===null&&n(v,S),c=i(Ue,c,N),b===null?k=Ue:b.sibling=Ue,b=Ue,S=L}if(z.done)return t(v,S),X&&et(v,N),k;if(S===null){for(;!z.done;N++,z=p.next())z=d(v,z.value,g),z!==null&&(c=i(z,c,N),b===null?k=z:b.sibling=z,b=z);return X&&et(v,N),k}for(S=r(v,S);!z.done;N++,z=p.next())z=h(S,v,N,z.value,g),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?N:z.key),c=i(z,c,N),b===null?k=z:b.sibling=z,b=z);return e&&S.forEach(function(ur){return n(v,ur)}),X&&et(v,N),k}function T(v,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Et&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Pa:e:{for(var k=p.key,b=c;b!==null;){if(b.key===k){if(k=p.type,k===Et){if(b.tag===7){t(v,b.sibling),c=a(b,p.props.children),c.return=v,v=c;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&If(k)===b.type){t(v,b.sibling),c=a(b,p.props),c.ref=hr(v,b,p),c.return=v,v=c;break e}t(v,b);break}else n(v,b);b=b.sibling}p.type===Et?(c=ft(p.props.children,v.mode,g,p.key),c.return=v,v=c):(g=gi(p.type,p.key,p.props,null,v.mode,g),g.ref=hr(v,c,p),g.return=v,v=g)}return o(v);case St:e:{for(b=p.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(v,c.sibling),c=a(c,p.children||[]),c.return=v,v=c;break e}else{t(v,c);break}else n(v,c);c=c.sibling}c=Jo(p,v.mode,g),c.return=v,v=c}return o(v);case Pn:return b=p._init,T(v,c,b(p._payload),g)}if(kr(p))return y(v,c,p,g);if(cr(p))return w(v,c,p,g);Ma(v,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(v,c.sibling),c=a(c,p),c.return=v,v=c):(t(v,c),c=Zo(p,v.mode,g),c.return=v,v=c),o(v)):t(v,c)}return T}var Jt=vm(!0),hm=vm(!1),zi=Kn(null),Ri=null,It=null,Ks=null;function Zs(){Ks=It=Ri=null}function Js(e){var n=zi.current;V(zi),e._currentValue=n}function jl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ht(e,n){Ri=e,Ks=It=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:n,next:null},It===null){if(Ri===null)throw Error(x(308));It=e,Ri.dependencies={lanes:0,firstContext:e}}else It=It.next=e;return n}var rt=null;function qs(e){rt===null?rt=[e]:rt.push(e)}function gm(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,qs(n)):(t.next=a.next,a.next=t),n.interleaved=t,dn(e,r)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var _n=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,dn(e,t)}return a=r.interleaved,a===null?(n.next=n,qs(r)):(n.next=a.next,a.next=n),r.interleaved=n,dn(e,t)}function ci(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fs(e,t)}}function $f(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Mi(e,n,t,r){var a=e.updateQueue;_n=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,f=u=s=null,l=i;do{var m=l.lane,h=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(m=n,h=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(h,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(h,d,m):y,m==null)break e;d=Z({},d,m);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else h={eventTime:h,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=h,s=d):f=f.next=h,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);pt|=o,e.lanes=o,e.memoizedState=d}}function Lf(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(x(191,a));a.call(r)}}}var va={},rn=Kn(va),Gr=Kn(va),Kr=Kn(va);function at(e){if(e===va)throw Error(x(174));return e}function nu(e,n){switch(U(Kr,n),U(Gr,e),U(rn,va),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:yl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=yl(n,e)}V(rn),U(rn,n)}function qt(){V(rn),V(Gr),V(Kr)}function wm(e){at(Kr.current);var n=at(rn.current),t=yl(n,e.type);n!==t&&(U(Gr,e),U(rn,t))}function tu(e){Gr.current===e&&(V(rn),V(Gr))}var G=Kn(0);function ji(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vo=[];function ru(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var di=kn.ReactCurrentDispatcher,Bo=kn.ReactCurrentBatchConfig,mt=0,K=null,ae=null,ue=null,Fi=!1,Or=!1,Zr=0,ph=0;function pe(){throw Error(x(321))}function au(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function iu(e,n,t,r,a,i){if(mt=i,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,di.current=e===null||e.memoizedState===null?yh:wh,e=t(r,a),Or){i=0;do{if(Or=!1,Zr=0,25<=i)throw Error(x(301));i+=1,ue=ae=null,n.updateQueue=null,di.current=kh,e=t(r,a)}while(Or)}if(di.current=Di,n=ae!==null&&ae.next!==null,mt=0,ue=ae=K=null,Fi=!1,n)throw Error(x(300));return e}function ou(){var e=Zr!==0;return Zr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function De(){if(ae===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var n=ue===null?K.memoizedState:ue.next;if(n!==null)ue=n,ae=e;else{if(e===null)throw Error(x(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function Jr(e,n){return typeof n=="function"?n(e):n}function Qo(e){var n=De(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=ae,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((mt&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,K.lanes|=f,pt|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,Ke(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,K.lanes|=i,pt|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Xo(e){var n=De(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Ke(i,n.memoizedState)||(Se=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function km(){}function xm(e,n){var t=K,r=De(),a=n(),i=!Ke(r.memoizedState,a);if(i&&(r.memoizedState=a,Se=!0),r=r.queue,lu(Em.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,qr(9,Sm.bind(null,t,r,a,n),void 0,null),fe===null)throw Error(x(349));mt&30||bm(t,n,a)}return a}function bm(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sm(e,n,t,r){n.value=t,n.getSnapshot=r,Cm(n)&&Pm(e)}function Em(e,n,t){return t(function(){Cm(n)&&Pm(e)})}function Cm(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function Pm(e){var n=dn(e,1);n!==null&&Ge(n,e,1,-1)}function zf(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},n.queue=e,e=e.dispatch=gh.bind(null,K,e),[n.memoizedState,e]}function qr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function _m(){return De().memoizedState}function mi(e,n,t,r){var a=Je();K.flags|=e,a.memoizedState=qr(1|n,t,void 0,r===void 0?null:r)}function oo(e,n,t,r){var a=De();r=r===void 0?null:r;var i=void 0;if(ae!==null){var o=ae.memoizedState;if(i=o.destroy,r!==null&&au(r,o.deps)){a.memoizedState=qr(n,t,i,r);return}}K.flags|=e,a.memoizedState=qr(1|n,t,i,r)}function Rf(e,n){return mi(8390656,8,e,n)}function lu(e,n){return oo(2048,8,e,n)}function Nm(e,n){return oo(4,2,e,n)}function Am(e,n){return oo(4,4,e,n)}function Om(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tm(e,n,t){return t=t!=null?t.concat([e]):null,oo(4,4,Om.bind(null,n,e),t)}function su(){}function Im(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&au(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function $m(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&au(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Lm(e,n,t){return mt&21?(Ke(t,n)||(t=Fd(),K.lanes|=t,pt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function vh(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=Bo.transition;Bo.transition={};try{e(!1),n()}finally{D=t,Bo.transition=r}}function zm(){return De().memoizedState}function hh(e,n,t){var r=Fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Rm(e))Mm(n,t);else if(t=gm(e,n,t,r),t!==null){var a=we();Ge(t,e,r,a),jm(t,n,r)}}function gh(e,n,t){var r=Fn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rm(e))Mm(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(a.hasEagerState=!0,a.eagerState=l,Ke(l,o)){var s=n.interleaved;s===null?(a.next=a,qs(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=gm(e,n,a,r),t!==null&&(a=we(),Ge(t,e,r,a),jm(t,n,r))}}function Rm(e){var n=e.alternate;return e===K||n!==null&&n===K}function Mm(e,n){Or=Fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jm(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fs(e,t)}}var Di={readContext:Fe,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},yh={readContext:Fe,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:Rf,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,mi(4194308,4,Om.bind(null,n,e),t)},useLayoutEffect:function(e,n){return mi(4194308,4,e,n)},useInsertionEffect:function(e,n){return mi(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=hh.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:zf,useDebugValue:su,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=zf(!1),n=e[0];return e=vh.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,a=Je();if(X){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),fe===null)throw Error(x(349));mt&30||bm(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Rf(Em.bind(null,r,i,e),[e]),r.flags|=2048,qr(9,Sm.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=fe.identifierPrefix;if(X){var t=sn,r=ln;t=(r&~(1<<32-Xe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ph++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},wh={readContext:Fe,useCallback:Im,useContext:Fe,useEffect:lu,useImperativeHandle:Tm,useInsertionEffect:Nm,useLayoutEffect:Am,useMemo:$m,useReducer:Qo,useRef:_m,useState:function(){return Qo(Jr)},useDebugValue:su,useDeferredValue:function(e){var n=De();return Lm(n,ae.memoizedState,e)},useTransition:function(){var e=Qo(Jr)[0],n=De().memoizedState;return[e,n]},useMutableSource:km,useSyncExternalStore:xm,useId:zm,unstable_isNewReconciler:!1},kh={readContext:Fe,useCallback:Im,useContext:Fe,useEffect:lu,useImperativeHandle:Tm,useInsertionEffect:Nm,useLayoutEffect:Am,useMemo:$m,useReducer:Xo,useRef:_m,useState:function(){return Xo(Jr)},useDebugValue:su,useDeferredValue:function(e){var n=De();return ae===null?n.memoizedState=e:Lm(n,ae.memoizedState,e)},useTransition:function(){var e=Xo(Jr)[0],n=De().memoizedState;return[e,n]},useMutableSource:km,useSyncExternalStore:xm,useId:zm,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Fl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var lo={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),a=Fn(e),i=un(r,a);i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,a),n!==null&&(Ge(n,e,a,r),ci(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),a=Fn(e),i=un(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,a),n!==null&&(Ge(n,e,a,r),ci(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=Fn(e),a=un(t,r);a.tag=2,n!=null&&(a.callback=n),n=Mn(e,a,r),n!==null&&(Ge(n,e,r,t),ci(n,e,r))}};function Mf(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Vr(t,r)||!Vr(a,i):!0}function Fm(e,n,t){var r=!1,a=Yn,i=n.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(a=Ce(n)?ct:ge.current,r=n.contextTypes,i=(r=r!=null)?Kt(e,a):Yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=lo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function jf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&lo.enqueueReplaceState(n,n.state,null)}function Dl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},eu(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Fe(i):(i=Ce(n)?ct:ge.current,a.context=Kt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Fl(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&lo.enqueueReplaceState(a,a.state,null),Mi(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,n){try{var t="",r=n;do t+=Xv(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Go(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ul(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var xh=typeof WeakMap=="function"?WeakMap:Map;function Dm(e,n,t){t=un(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yi||(Yi=!0,Zl=r),Ul(e,n)},t}function Um(e,n,t){t=un(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Ul(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ul(e,n),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ff(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new xh;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=zh.bind(null,e,n,t),n.then(e,e))}function Df(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Uf(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=un(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var bh=kn.ReactCurrentOwner,Se=!1;function ye(e,n,t,r){n.child=e===null?hm(n,null,t,r):Jt(n,e.child,t,r)}function Yf(e,n,t,r,a){t=t.render;var i=n.ref;return Ht(n,a),r=iu(e,n,t,r,i,a),t=ou(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,mn(e,n,a)):(X&&t&&Qs(n),n.flags|=1,ye(e,n,r,a),n.child)}function Wf(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!hu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ym(e,n,i,r,a)):(e=gi(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Vr,t(o,r)&&e.ref===n.ref)return mn(e,n,a)}return n.flags|=1,e=Dn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(Vr(i,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,mn(e,n,a)}return Yl(e,n,t,r,a)}function Wm(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Lt,_e),_e|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(Lt,_e),_e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,U(Lt,_e),_e|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,U(Lt,_e),_e|=r;return ye(e,n,a,t),n.child}function Hm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Yl(e,n,t,r,a){var i=Ce(t)?ct:ge.current;return i=Kt(n,i),Ht(n,a),t=iu(e,n,t,r,i,a),r=ou(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,mn(e,n,a)):(X&&r&&Qs(n),n.flags|=1,ye(e,n,t,a),n.child)}function Hf(e,n,t,r,a){if(Ce(t)){var i=!0;Ii(n)}else i=!1;if(Ht(n,a),n.stateNode===null)pi(e,n),Fm(n,t,r),Dl(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Ce(t)?ct:ge.current,u=Kt(n,u));var f=t.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jf(n,o,r,u),_n=!1;var m=n.memoizedState;o.state=m,Mi(n,r,o,a),s=n.memoizedState,l!==r||m!==s||Ee.current||_n?(typeof f=="function"&&(Fl(n,t,f,r),s=n.memoizedState),(l=_n||Mf(n,t,l,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ym(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:We(n.type,l),o.props=u,d=n.pendingProps,m=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Fe(s):(s=Ce(t)?ct:ge.current,s=Kt(n,s));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||m!==s)&&jf(n,o,r,s),_n=!1,m=n.memoizedState,o.state=m,Mi(n,r,o,a);var y=n.memoizedState;l!==d||m!==y||Ee.current||_n?(typeof h=="function"&&(Fl(n,t,h,r),y=n.memoizedState),(u=_n||Mf(n,t,u,r,m,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Wl(e,n,t,r,i,a)}function Wl(e,n,t,r,a,i){Hm(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&Af(n,t,!1),mn(e,n,i);r=n.stateNode,bh.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Jt(n,e.child,null,i),n.child=Jt(n,null,l,i)):ye(e,n,l,i),n.memoizedState=r.state,a&&Af(n,t,!0),n.child}function Vm(e){var n=e.stateNode;n.pendingContext?Nf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Nf(e,n.context,!1),nu(e,n.containerInfo)}function Vf(e,n,t,r,a){return Zt(),Gs(a),n.flags|=256,ye(e,n,t,r),n.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bm(e,n,t){var r=n.pendingProps,a=G.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),U(G,a&1),e===null)return Ml(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fo(o,r,0,null),e=ft(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Vl(t),n.memoizedState=Hl,e):uu(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Sh(e,n,o,r,l,a,t);if(i){i=r.fallback,o=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Dn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Dn(l,i):(i=ft(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Vl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Hl,r}return i=e.child,e=i.sibling,r=Dn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function uu(e,n){return n=fo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ja(e,n,t,r){return r!==null&&Gs(r),Jt(n,e.child,null,t),e=uu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sh(e,n,t,r,a,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Go(Error(x(422))),ja(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=fo({mode:"visible",children:r.children},a,0,null),i=ft(i,a,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Jt(n,e.child,null,o),n.child.memoizedState=Vl(o),n.memoizedState=Hl,i);if(!(n.mode&1))return ja(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(x(419)),r=Go(i,r,void 0),ja(e,n,o,r)}if(l=(o&e.childLanes)!==0,Se||l){if(r=fe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,dn(e,a),Ge(r,e,a,-1))}return vu(),r=Go(Error(x(421))),ja(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Rh.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Ne=Rn(a.nextSibling),Ae=n,X=!0,Ve=null,e!==null&&(ze[Re++]=ln,ze[Re++]=sn,ze[Re++]=dt,ln=e.id,sn=e.overflow,dt=n),n=uu(n,r.children),n.flags|=4096,n)}function Bf(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),jl(e.return,n,t)}function Ko(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function Qm(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(ye(e,n,r.children,t),r=G.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,t,n);else if(e.tag===19)Bf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&ji(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ko(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ji(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ko(n,!0,t,null,i);break;case"together":Ko(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function pi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=Dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Eh(e,n,t){switch(n.tag){case 3:Vm(n),Zt();break;case 5:wm(n);break;case 1:Ce(n.type)&&Ii(n);break;case 4:nu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;U(zi,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),n.flags|=128,null):t&n.child.childLanes?Bm(e,n,t):(U(G,G.current&1),e=mn(e,n,t),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qm(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return n.lanes=0,Wm(e,n,t)}return mn(e,n,t)}var Xm,Bl,Gm,Km;Xm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bl=function(){};Gm=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,at(rn.current);var i=null;switch(t){case"input":a=pl(e,a),r=pl(e,r),i=[];break;case"select":a=Z({},a,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":a=gl(e,a),r=gl(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}wl(t,r);var o;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Y("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Km=function(e,n,t,r){t!==r&&(n.flags|=4)};function gr(e,n){if(!X)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ch(e,n,t){var r=n.pendingProps;switch(Xs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return Ce(n.type)&&Ti(),ve(n),null;case 3:return r=n.stateNode,qt(),V(Ee),V(ge),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ra(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ve!==null&&(es(Ve),Ve=null))),Bl(e,n),ve(n),null;case 5:tu(n);var a=at(Kr.current);if(t=n.type,e!==null&&n.stateNode!=null)Gm(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return ve(n),null}if(e=at(rn.current),Ra(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[qe]=n,r[Xr]=i,e=(n.mode&1)!==0,t){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(a=0;a<br.length;a++)Y(br[a],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":ef(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":tf(r,i),Y("invalid",r)}wl(t,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&za(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&za(r.textContent,l,e),a=["children",""+l]):jr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(t){case"input":_a(r),nf(r,i,!0);break;case"textarea":_a(r),rf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oi)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ed(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[qe]=n,e[Xr]=r,Xm(e,n,!1,!1),n.stateNode=e;e:{switch(o=kl(t,r),t){case"dialog":Y("cancel",e),Y("close",e),a=r;break;case"iframe":case"object":case"embed":Y("load",e),a=r;break;case"video":case"audio":for(a=0;a<br.length;a++)Y(br[a],e);a=r;break;case"source":Y("error",e),a=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=r;break;case"details":Y("toggle",e),a=r;break;case"input":ef(e,r),a=pl(e,r),Y("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Z({},r,{value:void 0}),Y("invalid",e);break;case"textarea":tf(e,r),a=gl(e,r),Y("invalid",e);break;default:a=r}wl(t,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?_d(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cd(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Fr(e,s):typeof s=="number"&&Fr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&$s(e,i,s,o))}switch(t){case"input":_a(e),nf(e,r,!1);break;case"textarea":_a(e),rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Oi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)Km(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=at(Kr.current),at(rn.current),Ra(n)){if(r=n.stateNode,t=n.memoizedProps,r[qe]=n,(i=r.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:za(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qe]=n,n.stateNode=r}return ve(n),null;case 13:if(V(G),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ne!==null&&n.mode&1&&!(n.flags&128))pm(),Zt(),n.flags|=98560,i=!1;else if(i=Ra(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[qe]=n}else Zt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ve(n),i=!1}else Ve!==null&&(es(Ve),Ve=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):vu())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return qt(),Bl(e,n),e===null&&Br(n.stateNode.containerInfo),ve(n),null;case 10:return Js(n.type._context),ve(n),null;case 17:return Ce(n.type)&&Ti(),ve(n),null;case 19:if(V(G),i=n.memoizedState,i===null)return ve(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)gr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ji(e),o!==null){for(n.flags|=128,gr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(G,G.current&1|2),n.child}e=e.sibling}i.tail!==null&&te()>nr&&(n.flags|=128,r=!0,gr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ji(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!X)return ve(n),null}else 2*te()-i.renderingStartTime>nr&&t!==1073741824&&(n.flags|=128,r=!0,gr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=te(),n.sibling=null,t=G.current,U(G,r?t&1|2:t&1),n):(ve(n),null);case 22:case 23:return pu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?_e&1073741824&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function Ph(e,n){switch(Xs(n),n.tag){case 1:return Ce(n.type)&&Ti(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qt(),V(Ee),V(ge),ru(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return tu(n),null;case 13:if(V(G),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));Zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(G),null;case 4:return qt(),null;case 10:return Js(n.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var Fa=!1,he=!1,_h=typeof WeakSet=="function"?WeakSet:Set,P=null;function $t(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function Ql(e,n,t){try{t()}catch(r){J(e,n,r)}}var Qf=!1;function Nh(e,n){if(Ol=_i,e=nm(),Bs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,m=null;n:for(;;){for(var h;d!==t||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)m=d,d=h;for(;;){if(d===e)break n;if(m===t&&++u===a&&(l=o),m===i&&++f===r&&(s=o),(h=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=h}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tl={focusedElem:e,selectionRange:t},_i=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,T=y.memoizedState,v=n.stateNode,c=v.getSnapshotBeforeUpdate(n.elementType===n.type?w:We(n.type,w),T);v.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){J(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return y=Qf,Qf=!1,y}function Tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ql(n,t,i)}a=a.next}while(a!==r)}}function so(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zm(e){var n=e.alternate;n!==null&&(e.alternate=null,Zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qe],delete n[Xr],delete n[Ll],delete n[fh],delete n[ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jm(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,n,t),e=e.sibling;e!==null;)Gl(e,n,t),e=e.sibling}function Kl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kl(e,n,t),e=e.sibling;e!==null;)Kl(e,n,t),e=e.sibling}var ce=null,He=!1;function Sn(e,n,t){for(t=t.child;t!==null;)qm(e,n,t),t=t.sibling}function qm(e,n,t){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(eo,t)}catch{}switch(t.tag){case 5:he||$t(t,n);case 6:var r=ce,a=He;ce=null,Sn(e,n,t),ce=r,He=a,ce!==null&&(He?(e=ce,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ce.removeChild(t.stateNode));break;case 18:ce!==null&&(He?(e=ce,t=t.stateNode,e.nodeType===8?Wo(e.parentNode,t):e.nodeType===1&&Wo(e,t),Wr(e)):Wo(ce,t.stateNode));break;case 4:r=ce,a=He,ce=t.stateNode.containerInfo,He=!0,Sn(e,n,t),ce=r,He=a;break;case 0:case 11:case 14:case 15:if(!he&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ql(t,n,o),a=a.next}while(a!==r)}Sn(e,n,t);break;case 1:if(!he&&($t(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){J(t,n,l)}Sn(e,n,t);break;case 21:Sn(e,n,t);break;case 22:t.mode&1?(he=(r=he)||t.memoizedState!==null,Sn(e,n,t),he=r):Sn(e,n,t);break;default:Sn(e,n,t)}}function Gf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new _h),n.forEach(function(r){var a=Mh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Ye(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,He=!1;break e;case 3:ce=l.stateNode.containerInfo,He=!0;break e;case 4:ce=l.stateNode.containerInfo,He=!0;break e}l=l.return}if(ce===null)throw Error(x(160));qm(i,o,a),ce=null,He=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){J(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ep(n,e),n=n.sibling}function ep(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(n,e),Ze(e),r&4){try{Tr(3,e,e.return),so(3,e)}catch(w){J(e,e.return,w)}try{Tr(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Ye(n,e),Ze(e),r&512&&t!==null&&$t(t,t.return);break;case 5:if(Ye(n,e),Ze(e),r&512&&t!==null&&$t(t,t.return),e.flags&32){var a=e.stateNode;try{Fr(a,"")}catch(w){J(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&bd(a,i),kl(l,o);var u=kl(l,i);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?_d(a,d):f==="dangerouslySetInnerHTML"?Cd(a,d):f==="children"?Fr(a,d):$s(a,f,d,u)}switch(l){case"input":vl(a,i);break;case"textarea":Sd(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Dt(a,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?Dt(a,!!i.multiple,i.defaultValue,!0):Dt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Xr]=i}catch(w){J(e,e.return,w)}}break;case 6:if(Ye(n,e),Ze(e),r&4){if(e.stateNode===null)throw Error(x(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(Ye(n,e),Ze(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Ye(n,e),Ze(e);break;case 13:Ye(n,e),Ze(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(du=te())),r&4&&Gf(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(he=(u=he)||f,Ye(n,e),he=u):Ye(n,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(d=P=f;P!==null;){switch(m=P,h=m.child,m.tag){case 0:case 11:case 14:case 15:Tr(4,m,m.return);break;case 1:$t(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){J(r,t,w)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){Zf(d);continue}}h!==null?(h.return=m,P=h):Zf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Pd("display",o))}catch(w){J(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){J(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ye(n,e),Ze(e),r&4&&Gf(e);break;case 21:break;default:Ye(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Jm(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Fr(a,""),r.flags&=-33);var i=Xf(e);Kl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xf(e);Gl(e,l,o);break;default:throw Error(x(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ah(e,n,t){P=e,np(e)}function np(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Fa;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||he;l=Fa;var u=he;if(Fa=o,(he=s)&&!u)for(P=a;P!==null;)o=P,s=o.child,o.tag===22&&o.memoizedState!==null?Jf(a):s!==null?(s.return=o,P=s):Jf(a);for(;i!==null;)P=i,np(i),i=i.sibling;P=a,Fa=l,he=u}Kf(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,P=i):Kf(e)}}function Kf(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||so(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!he)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Lf(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Lf(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Wr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}he||n.flags&512&&Xl(n)}catch(m){J(n,n.return,m)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Zf(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Jf(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{so(4,n)}catch(s){J(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){J(n,a,s)}}var i=n.return;try{Xl(n)}catch(s){J(n,i,s)}break;case 5:var o=n.return;try{Xl(n)}catch(s){J(n,o,s)}}}catch(s){J(n,n.return,s)}if(n===e){P=null;break}var l=n.sibling;if(l!==null){l.return=n.return,P=l;break}P=n.return}}var Oh=Math.ceil,Ui=kn.ReactCurrentDispatcher,fu=kn.ReactCurrentOwner,je=kn.ReactCurrentBatchConfig,F=0,fe=null,re=null,de=0,_e=0,Lt=Kn(0),ie=0,ea=null,pt=0,uo=0,cu=0,Ir=null,be=null,du=0,nr=1/0,an=null,Yi=!1,Zl=null,jn=null,Da=!1,Tn=null,Wi=0,$r=0,Jl=null,vi=-1,hi=0;function we(){return F&6?te():vi!==-1?vi:vi=te()}function Fn(e){return e.mode&1?F&2&&de!==0?de&-de:mh.transition!==null?(hi===0&&(hi=Fd()),hi):(e=D,e!==0||(e=window.event,e=e===void 0?16:Bd(e.type)),e):1}function Ge(e,n,t,r){if(50<$r)throw $r=0,Jl=null,Error(x(185));da(e,t,r),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(uo|=t),ie===4&&An(e,de)),Pe(e,r),t===1&&F===0&&!(n.mode&1)&&(nr=te()+500,io&&Zn()))}function Pe(e,n){var t=e.callbackNode;m1(e,n);var r=Pi(e,e===fe?de:0);if(r===0)t!==null&&lf(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&lf(t),n===1)e.tag===0?dh(qf.bind(null,e)):cm(qf.bind(null,e)),sh(function(){!(F&6)&&Zn()}),t=null;else{switch(Dd(r)){case 1:t=js;break;case 4:t=Md;break;case 16:t=Ci;break;case 536870912:t=jd;break;default:t=Ci}t=up(t,tp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function tp(e,n){if(vi=-1,hi=0,F&6)throw Error(x(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=Pi(e,e===fe?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Hi(e,r);else{n=r;var a=F;F|=2;var i=ap();(fe!==e||de!==n)&&(an=null,nr=te()+500,ut(e,n));do try{$h();break}catch(l){rp(e,l)}while(!0);Zs(),Ui.current=i,F=a,re!==null?n=0:(fe=null,de=0,n=ie)}if(n!==0){if(n===2&&(a=Cl(e),a!==0&&(r=a,n=ql(e,a))),n===1)throw t=ea,ut(e,0),An(e,r),Pe(e,te()),t;if(n===6)An(e,r);else{if(a=e.current.alternate,!(r&30)&&!Th(a)&&(n=Hi(e,r),n===2&&(i=Cl(e),i!==0&&(r=i,n=ql(e,i))),n===1))throw t=ea,ut(e,0),An(e,r),Pe(e,te()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:nt(e,be,an);break;case 3:if(An(e,r),(r&130023424)===r&&(n=du+500-te(),10<n)){if(Pi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$l(nt.bind(null,e,be,an),n);break}nt(e,be,an);break;case 4:if(An(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-Xe(r);i=1<<o,o=n[o],o>a&&(a=o),r&=~i}if(r=a,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Oh(r/1960))-r,10<r){e.timeoutHandle=$l(nt.bind(null,e,be,an),r);break}nt(e,be,an);break;case 5:nt(e,be,an);break;default:throw Error(x(329))}}}return Pe(e,te()),e.callbackNode===t?tp.bind(null,e):null}function ql(e,n){var t=Ir;return e.current.memoizedState.isDehydrated&&(ut(e,n).flags|=256),e=Hi(e,n),e!==2&&(n=be,be=t,n!==null&&es(n)),e}function es(e){be===null?be=e:be.push.apply(be,e)}function Th(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!Ke(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~cu,n&=~uo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),r=1<<t;e[t]=-1,n&=~r}}function qf(e){if(F&6)throw Error(x(327));Vt();var n=Pi(e,0);if(!(n&1))return Pe(e,te()),null;var t=Hi(e,n);if(e.tag!==0&&t===2){var r=Cl(e);r!==0&&(n=r,t=ql(e,r))}if(t===1)throw t=ea,ut(e,0),An(e,n),Pe(e,te()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,nt(e,be,an),Pe(e,te()),null}function mu(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(nr=te()+500,io&&Zn())}}function vt(e){Tn!==null&&Tn.tag===0&&!(F&6)&&Vt();var n=F;F|=1;var t=je.transition,r=D;try{if(je.transition=null,D=1,e)return e()}finally{D=r,je.transition=t,F=n,!(F&6)&&Zn()}}function pu(){_e=Lt.current,V(Lt)}function ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,lh(t)),re!==null)for(t=re.return;t!==null;){var r=t;switch(Xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ti();break;case 3:qt(),V(Ee),V(ge),ru();break;case 5:tu(r);break;case 4:qt();break;case 13:V(G);break;case 19:V(G);break;case 10:Js(r.type._context);break;case 22:case 23:pu()}t=t.return}if(fe=e,re=e=Dn(e.current,null),de=_e=n,ie=0,ea=null,cu=uo=pt=0,be=Ir=null,rt!==null){for(n=0;n<rt.length;n++)if(t=rt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}t.pending=r}rt=null}return e}function rp(e,n){do{var t=re;try{if(Zs(),di.current=Di,Fi){for(var r=K.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Fi=!1}if(mt=0,ue=ae=K=null,Or=!1,Zr=0,fu.current=null,t===null||t.return===null){ie=1,ea=n,re=null;break}e:{var i=e,o=t.return,l=t,s=n;if(n=de,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Df(o);if(h!==null){h.flags&=-257,Uf(h,o,l,i,n),h.mode&1&&Ff(i,u,n),n=h,s=u;var y=n.updateQueue;if(y===null){var w=new Set;w.add(s),n.updateQueue=w}else y.add(s);break e}else{if(!(n&1)){Ff(i,u,n),vu();break e}s=Error(x(426))}}else if(X&&l.mode&1){var T=Df(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Uf(T,o,l,i,n),Gs(er(s,l));break e}}i=s=er(s,l),ie!==4&&(ie=2),Ir===null?Ir=[i]:Ir.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var v=Dm(i,s,n);$f(i,v);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jn===null||!jn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var g=Um(i,l,n);$f(i,g);break e}}i=i.return}while(i!==null)}op(t)}catch(k){n=k,re===t&&t!==null&&(re=t=t.return);continue}break}while(!0)}function ap(){var e=Ui.current;return Ui.current=Di,e===null?Di:e}function vu(){(ie===0||ie===3||ie===2)&&(ie=4),fe===null||!(pt&268435455)&&!(uo&268435455)||An(fe,de)}function Hi(e,n){var t=F;F|=2;var r=ap();(fe!==e||de!==n)&&(an=null,ut(e,n));do try{Ih();break}catch(a){rp(e,a)}while(!0);if(Zs(),F=t,Ui.current=r,re!==null)throw Error(x(261));return fe=null,de=0,ie}function Ih(){for(;re!==null;)ip(re)}function $h(){for(;re!==null&&!a1();)ip(re)}function ip(e){var n=sp(e.alternate,e,_e);e.memoizedProps=e.pendingProps,n===null?op(e):re=n,fu.current=null}function op(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ph(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(t=Ch(t,n,_e),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);ie===0&&(ie=5)}function nt(e,n,t){var r=D,a=je.transition;try{je.transition=null,D=1,Lh(e,n,t,r)}finally{je.transition=a,D=r}return null}function Lh(e,n,t,r){do Vt();while(Tn!==null);if(F&6)throw Error(x(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(p1(e,i),e===fe&&(re=fe=null,de=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Da||(Da=!0,up(Ci,function(){return Vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=D;D=1;var l=F;F|=4,fu.current=null,Nh(e,t),ep(t,e),eh(Tl),_i=!!Ol,Tl=Ol=null,e.current=t,Ah(t),i1(),F=l,D=o,je.transition=i}else e.current=t;if(Da&&(Da=!1,Tn=e,Wi=a),i=e.pendingLanes,i===0&&(jn=null),s1(t.stateNode),Pe(e,te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Yi)throw Yi=!1,e=Zl,Zl=null,e;return Wi&1&&e.tag!==0&&Vt(),i=e.pendingLanes,i&1?e===Jl?$r++:($r=0,Jl=e):$r=0,Zn(),null}function Vt(){if(Tn!==null){var e=Dd(Wi),n=je.transition,t=D;try{if(je.transition=null,D=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Wi=0,F&6)throw Error(x(331));var a=F;for(F|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(P=u;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Tr(8,f,i)}var d=f.child;if(d!==null)d.return=f,P=d;else for(;P!==null;){f=P;var m=f.sibling,h=f.return;if(Zm(f),f===u){P=null;break}if(m!==null){m.return=h,P=m;break}P=h}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Tr(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,P=v;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=c;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:so(9,l)}}catch(k){J(l,l.return,k)}if(l===o){P=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,P=g;break e}P=l.return}}if(F=a,Zn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{D=t,je.transition=n}}return!1}function ec(e,n,t){n=er(t,n),n=Dm(e,n,1),e=Mn(e,n,1),n=we(),e!==null&&(da(e,1,n),Pe(e,n))}function J(e,n,t){if(e.tag===3)ec(e,e,t);else for(;n!==null;){if(n.tag===3){ec(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=er(t,e),e=Um(n,e,1),n=Mn(n,e,1),e=we(),n!==null&&(da(n,1,e),Pe(n,e));break}}n=n.return}}function zh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,fe===e&&(de&t)===t&&(ie===4||ie===3&&(de&130023424)===de&&500>te()-du?ut(e,0):cu|=t),Pe(e,n)}function lp(e,n){n===0&&(e.mode&1?(n=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):n=1);var t=we();e=dn(e,n),e!==null&&(da(e,n,t),Pe(e,t))}function Rh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),lp(e,t)}function Mh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),lp(e,t)}var sp;sp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,Eh(e,n,t);Se=!!(e.flags&131072)}else Se=!1,X&&n.flags&1048576&&dm(n,Li,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;pi(e,n),e=n.pendingProps;var a=Kt(n,ge.current);Ht(n,t),a=iu(null,n,r,e,a,t);var i=ou();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(i=!0,Ii(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,eu(n),a.updater=lo,n.stateNode=a,a._reactInternals=n,Dl(n,r,e,t),n=Wl(null,n,r,!0,i,t)):(n.tag=0,X&&i&&Qs(n),ye(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(pi(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Fh(r),e=We(r,e),a){case 0:n=Yl(null,n,r,e,t);break e;case 1:n=Hf(null,n,r,e,t);break e;case 11:n=Yf(null,n,r,e,t);break e;case 14:n=Wf(null,n,r,We(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:We(r,a),Yl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:We(r,a),Hf(e,n,r,a,t);case 3:e:{if(Vm(n),e===null)throw Error(x(387));r=n.pendingProps,i=n.memoizedState,a=i.element,ym(e,n),Mi(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=er(Error(x(423)),n),n=Vf(e,n,r,t,a);break e}else if(r!==a){a=er(Error(x(424)),n),n=Vf(e,n,r,t,a);break e}else for(Ne=Rn(n.stateNode.containerInfo.firstChild),Ae=n,X=!0,Ve=null,t=hm(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zt(),r===a){n=mn(e,n,t);break e}ye(e,n,r,t)}n=n.child}return n;case 5:return wm(n),e===null&&Ml(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Il(r,a)?o=null:i!==null&&Il(r,i)&&(n.flags|=32),Hm(e,n),ye(e,n,o,t),n.child;case 6:return e===null&&Ml(n),null;case 13:return Bm(e,n,t);case 4:return nu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Jt(n,null,r,t):ye(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:We(r,a),Yf(e,n,r,a,t);case 7:return ye(e,n,n.pendingProps,t),n.child;case 8:return ye(e,n,n.pendingProps.children,t),n.child;case 12:return ye(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,o=a.value,U(zi,r._currentValue),r._currentValue=o,i!==null)if(Ke(i.value,o)){if(i.children===a.children&&!Ee.current){n=mn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=un(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),jl(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),jl(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ye(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ht(n,t),a=Fe(a),r=r(a),n.flags|=1,ye(e,n,r,t),n.child;case 14:return r=n.type,a=We(r,n.pendingProps),a=We(r.type,a),Wf(e,n,r,a,t);case 15:return Ym(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:We(r,a),pi(e,n),n.tag=1,Ce(r)?(e=!0,Ii(n)):e=!1,Ht(n,t),Fm(n,r,a),Dl(n,r,a,t),Wl(null,n,r,!0,e,t);case 19:return Qm(e,n,t);case 22:return Wm(e,n,t)}throw Error(x(156,n.tag))};function up(e,n){return Rd(e,n)}function jh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new jh(e,n,t,r)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zs)return 11;if(e===Rs)return 14}return 2}function Dn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function gi(e,n,t,r,a,i){var o=2;if(r=e,typeof e=="function")hu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Et:return ft(t.children,a,i,n);case Ls:o=8,a|=8;break;case fl:return e=Me(12,t,n,a|2),e.elementType=fl,e.lanes=i,e;case cl:return e=Me(13,t,n,a),e.elementType=cl,e.lanes=i,e;case dl:return e=Me(19,t,n,a),e.elementType=dl,e.lanes=i,e;case wd:return fo(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gd:o=10;break e;case yd:o=9;break e;case zs:o=11;break e;case Rs:o=14;break e;case Pn:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=Me(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function ft(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function fo(e,n,t,r){return e=Me(22,e,r,n),e.elementType=wd,e.lanes=t,e.stateNode={isHidden:!1},e}function Zo(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function Jo(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Dh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function gu(e,n,t,r,a,i,o,l,s){return e=new Dh(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Me(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(i),e}function Uh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:St,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function fp(e){if(!e)return Yn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(Ce(t))return fm(e,t,n)}return n}function cp(e,n,t,r,a,i,o,l,s){return e=gu(t,r,!0,e,a,i,o,l,s),e.context=fp(null),t=e.current,r=we(),a=Fn(t),i=un(r,a),i.callback=n??null,Mn(t,i,a),e.current.lanes=a,da(e,a,r),Pe(e,r),e}function co(e,n,t,r){var a=n.current,i=we(),o=Fn(a);return t=fp(t),n.context===null?n.context=t:n.pendingContext=t,n=un(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Mn(a,n,o),e!==null&&(Ge(e,a,o,i),ci(e,a,o)),o}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function yu(e,n){nc(e,n),(e=e.alternate)&&nc(e,n)}function Yh(){return null}var dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function wu(e){this._internalRoot=e}mo.prototype.render=wu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));co(e,n,null,null)};mo.prototype.unmount=wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vt(function(){co(null,e,null,null)}),n[cn]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nn.length&&n!==0&&n<Nn[t].priority;t++);Nn.splice(t,0,e),t===0&&Vd(e)}};function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function Wh(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=Vi(o);i.call(u)}}var o=cp(n,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=o,e[cn]=o.current,Br(e.nodeType===8?e.parentNode:e),vt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=Vi(s);l.call(u)}}var s=gu(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=s,e[cn]=s.current,Br(e.nodeType===8?e.parentNode:e),vt(function(){co(n,s,t,r)}),s}function vo(e,n,t,r,a){var i=t._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=Vi(o);l.call(s)}}co(n,o,e,a)}else o=Wh(t,n,e,a,r);return Vi(o)}Ud=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xr(n.pendingLanes);t!==0&&(Fs(n,t|1),Pe(n,te()),!(F&6)&&(nr=te()+500,Zn()))}break;case 13:vt(function(){var r=dn(e,1);if(r!==null){var a=we();Ge(r,e,1,a)}}),yu(e,1)}};Ds=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=we();Ge(n,e,134217728,t)}yu(e,134217728)}};Yd=function(e){if(e.tag===13){var n=Fn(e),t=dn(e,n);if(t!==null){var r=we();Ge(t,e,n,r)}yu(e,n)}};Wd=function(){return D};Hd=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};bl=function(e,n,t){switch(n){case"input":if(vl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=ao(r);if(!a)throw Error(x(90));xd(r),vl(r,a)}}}break;case"textarea":Sd(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};Od=mu;Td=vt;var Hh={usingClientEntryPoint:!1,Events:[pa,Nt,ao,Nd,Ad,mu]},yr={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vh={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ld(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{eo=Ua.inject(Vh),tn=Ua}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(n))throw Error(x(200));return Uh(e,n,null,t)};Te.createRoot=function(e,n){if(!ku(e))throw Error(x(299));var t=!1,r="",a=dp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=gu(e,1,!1,null,null,t,!1,r,a),e[cn]=n.current,Br(e.nodeType===8?e.parentNode:e),new wu(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ld(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return vt(e)};Te.hydrate=function(e,n,t){if(!po(n))throw Error(x(200));return vo(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!ku(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",o=dp;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=cp(n,null,e,1,t??null,a,!1,i,o),e[cn]=n.current,Br(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new mo(n)};Te.render=function(e,n,t){if(!po(n))throw Error(x(200));return vo(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!po(e))throw Error(x(40));return e._reactRootContainer?(vt(function(){vo(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Te.unstable_batchedUpdates=mu;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!po(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return vo(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp)}catch(e){console.error(e)}}mp(),md.exports=Te;var Bh=md.exports,rc=Bh;sl.createRoot=rc.createRoot,sl.hydrateRoot=rc.hydrateRoot;const Qh=()=>I.jsxs("header",{className:"header container",children:[I.jsx("a",{href:"#",children:I.jsx("button",{type:"button",className:"header-btn",children:"ExchangeRate"})}),I.jsx("a",{href:"#footer",children:I.jsx("button",{type:"button",className:"header-btn",children:"Contact"})})]}),Xh=({searchInput:e,setSearchInput:n})=>{const t=r=>{console.log(r.target.value);const a=r.target.value;n(a)};return I.jsx("div",{className:"container list-container",children:I.jsx("input",{placeholder:"Euro, USD...",className:"search-input",type:"text",onChange:r=>t(r),value:e})})};function ac(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ac(Object(t),!0).forEach(function(r){oe(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ac(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Bi(e){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bi(e)}function Gh(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Kh(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zh(e,n,t){return n&&Kh(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xu(e,n){return qh(e)||ng(e,n)||pp(e,n)||rg()}function ha(e){return Jh(e)||eg(e)||pp(e)||tg()}function Jh(e){if(Array.isArray(e))return ns(e)}function qh(e){if(Array.isArray(e))return e}function eg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ng(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function pp(e,n){if(e){if(typeof e=="string")return ns(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ns(e,n)}}function ns(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function tg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ic=function(){},bu={},vp={},hp=null,gp={mark:ic,measure:ic};try{typeof window<"u"&&(bu=window),typeof document<"u"&&(vp=document),typeof MutationObserver<"u"&&(hp=MutationObserver),typeof performance<"u"&&(gp=performance)}catch{}var ag=bu.navigator||{},oc=ag.userAgent,lc=oc===void 0?"":oc,Wn=bu,B=vp,sc=hp,Ya=gp;Wn.document;var xn=!!B.documentElement&&!!B.head&&typeof B.addEventListener=="function"&&typeof B.createElement=="function",yp=~lc.indexOf("MSIE")||~lc.indexOf("Trident/"),Wa,Ha,Va,Ba,Qa,pn="___FONT_AWESOME___",ts=16,wp="fa",kp="svg-inline--fa",ht="data-fa-i2svg",rs="data-fa-pseudo-element",ig="data-fa-pseudo-element-pending",Su="data-prefix",Eu="data-icon",uc="fontawesome-i2svg",og="async",lg=["HTML","HEAD","STYLE","SCRIPT"],xp=function(){try{return!0}catch{return!1}}(),W="classic",q="sharp",Cu=[W,q];function ga(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[W]}})}var na=ga((Wa={},oe(Wa,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),oe(Wa,q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Wa)),ta=ga((Ha={},oe(Ha,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),oe(Ha,q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ha)),ra=ga((Va={},oe(Va,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),oe(Va,q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Va)),sg=ga((Ba={},oe(Ba,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),oe(Ba,q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ba)),ug=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,bp="fa-layers-text",fg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cg=ga((Qa={},oe(Qa,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),oe(Qa,q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Qa)),Sp=[1,2,3,4,5,6,7,8,9,10],dg=Sp.concat([11,12,13,14,15,16,17,18,19,20]),mg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aa=new Set;Object.keys(ta[W]).map(aa.add.bind(aa));Object.keys(ta[q]).map(aa.add.bind(aa));var pg=[].concat(Cu,ha(aa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(Sp.map(function(e){return"".concat(e,"x")})).concat(dg.map(function(e){return"w-".concat(e)})),Lr=Wn.FontAwesomeConfig||{};function vg(e){var n=B.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function hg(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(B&&typeof B.querySelector=="function"){var gg=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gg.forEach(function(e){var n=xu(e,2),t=n[0],r=n[1],a=hg(vg(t));a!=null&&(Lr[r]=a)})}var Ep={styleDefault:"solid",familyDefault:"classic",cssPrefix:wp,replacementClass:kp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Lr.familyPrefix&&(Lr.cssPrefix=Lr.familyPrefix);var tr=E(E({},Ep),Lr);tr.autoReplaceSvg||(tr.observeMutations=!1);var A={};Object.keys(Ep).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(t){tr[e]=t,zr.forEach(function(r){return r(A)})},get:function(){return tr[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(n){tr.cssPrefix=n,zr.forEach(function(t){return t(A)})},get:function(){return tr.cssPrefix}});Wn.FontAwesomeConfig=A;var zr=[];function yg(e){return zr.push(e),function(){zr.splice(zr.indexOf(e),1)}}var En=ts,en={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wg(e){if(!(!e||!xn)){var n=B.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=B.head.childNodes,r=null,a=t.length-1;a>-1;a--){var i=t[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return B.head.insertBefore(n,r),e}}var kg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ia(){for(var e=12,n="";e-- >0;)n+=kg[Math.random()*62|0];return n}function lr(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Pu(e){return e.classList?lr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Cp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xg(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Cp(e[t]),'" ')},"").trim()}function ho(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function _u(e){return e.size!==en.size||e.x!==en.x||e.y!==en.y||e.rotate!==en.rotate||e.flipX||e.flipY}function bg(e){var n=e.transform,t=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function Sg(e){var n=e.transform,t=e.width,r=t===void 0?ts:t,a=e.height,i=a===void 0?ts:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&yp?s+="translate(".concat(n.x/En-r/2,"em, ").concat(n.y/En-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(n.x/En,"em), calc(-50% + ").concat(n.y/En,"em)) "):s+="translate(".concat(n.x/En,"em, ").concat(n.y/En,"em) "),s+="scale(".concat(n.size/En*(n.flipX?-1:1),", ").concat(n.size/En*(n.flipY?-1:1),") "),s+="rotate(".concat(n.rotate,"deg) "),s}var Eg=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pp(){var e=wp,n=kp,t=A.cssPrefix,r=A.replacementClass,a=Eg;if(t!==e||r!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(r))}return a}var fc=!1;function qo(){A.autoAddCss&&!fc&&(wg(Pp()),fc=!0)}var Cg={mixout:function(){return{dom:{css:Pp,insertCss:qo}}},hooks:function(){return{beforeDOMElementCreation:function(){qo()},beforeI2svg:function(){qo()}}}},vn=Wn||{};vn[pn]||(vn[pn]={});vn[pn].styles||(vn[pn].styles={});vn[pn].hooks||(vn[pn].hooks={});vn[pn].shims||(vn[pn].shims=[]);var Be=vn[pn],_p=[],Pg=function e(){B.removeEventListener("DOMContentLoaded",e),Qi=1,_p.map(function(n){return n()})},Qi=!1;xn&&(Qi=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),Qi||B.addEventListener("DOMContentLoaded",Pg));function _g(e){xn&&(Qi?setTimeout(e,0):_p.push(e))}function ya(e){var n=e.tag,t=e.attributes,r=t===void 0?{}:t,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Cp(e):"<".concat(n," ").concat(xg(r),">").concat(i.map(ya).join(""),"</").concat(n,">")}function cc(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var el=function(n,t,r,a){var i=Object.keys(n),o=i.length,l=t,s,u,f;for(r===void 0?(s=1,f=n[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,n[u],u,n);return f};function Ng(e){for(var n=[],t=0,r=e.length;t<r;){var a=e.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){var i=e.charCodeAt(t++);(i&64512)==56320?n.push(((a&1023)<<10)+(i&1023)+65536):(n.push(a),t--)}else n.push(a)}return n}function as(e){var n=Ng(e);return n.length===1?n[0].toString(16):null}function Ag(e,n){var t=e.length,r=e.charCodeAt(n),a;return r>=55296&&r<=56319&&t>n+1&&(a=e.charCodeAt(n+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function dc(e){return Object.keys(e).reduce(function(n,t){var r=e[t],a=!!r.icon;return a?n[r.iconName]=r.icon:n[t]=r,n},{})}function is(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,a=r===void 0?!1:r,i=dc(n);typeof Be.hooks.addPack=="function"&&!a?Be.hooks.addPack(e,dc(n)):Be.styles[e]=E(E({},Be.styles[e]||{}),i),e==="fas"&&is("fa",n)}var Xa,Ga,Ka,zt=Be.styles,Og=Be.shims,Tg=(Xa={},oe(Xa,W,Object.values(ra[W])),oe(Xa,q,Object.values(ra[q])),Xa),Nu=null,Np={},Ap={},Op={},Tp={},Ip={},Ig=(Ga={},oe(Ga,W,Object.keys(na[W])),oe(Ga,q,Object.keys(na[q])),Ga);function $g(e){return~pg.indexOf(e)}function Lg(e,n){var t=n.split("-"),r=t[0],a=t.slice(1).join("-");return r===e&&a!==""&&!$g(a)?a:null}var $p=function(){var n=function(i){return el(zt,function(o,l,s){return o[s]=el(l,i,{}),o},{})};Np=n(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),Ap=n(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),Ip=n(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var t="far"in zt||A.autoFetchSvg,r=el(Og,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});Op=r.names,Tp=r.unicodes,Nu=go(A.styleDefault,{family:A.familyDefault})};yg(function(e){Nu=go(e.styleDefault,{family:A.familyDefault})});$p();function Au(e,n){return(Np[e]||{})[n]}function zg(e,n){return(Ap[e]||{})[n]}function ot(e,n){return(Ip[e]||{})[n]}function Lp(e){return Op[e]||{prefix:null,iconName:null}}function Rg(e){var n=Tp[e],t=Au("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Hn(){return Nu}var Ou=function(){return{prefix:null,iconName:null,rest:[]}};function go(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,r=t===void 0?W:t,a=na[r][e],i=ta[r][e]||ta[r][a],o=e in Be.styles?e:null;return i||o||null}var mc=(Ka={},oe(Ka,W,Object.keys(ra[W])),oe(Ka,q,Object.keys(ra[q])),Ka);function yo(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.skipLookups,a=r===void 0?!1:r,i=(n={},oe(n,W,"".concat(A.cssPrefix,"-").concat(W)),oe(n,q,"".concat(A.cssPrefix,"-").concat(q)),n),o=null,l=W;(e.includes(i[W])||e.some(function(u){return mc[W].includes(u)}))&&(l=W),(e.includes(i[q])||e.some(function(u){return mc[q].includes(u)}))&&(l=q);var s=e.reduce(function(u,f){var d=Lg(A.cssPrefix,f);if(zt[f]?(f=Tg[l].includes(f)?sg[l][f]:f,o=f,u.prefix=f):Ig[l].indexOf(f)>-1?(o=f,u.prefix=go(f,{family:l})):d?u.iconName=d:f!==A.replacementClass&&f!==i[W]&&f!==i[q]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var m=o==="fa"?Lp(u.iconName):{},h=ot(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||h||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!zt.far&&zt.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},Ou());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===q&&(zt.fass||A.autoFetchSvg)&&(s.prefix="fass",s.iconName=ot(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Hn()||"fas"),s}var Mg=function(){function e(){Gh(this,e),this.definitions={}}return Zh(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=E(E({},t.definitions[l]||{}),o[l]),is(l,o[l]);var s=ra[W][l];s&&is(s,o[l]),$p()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];t[l]||(t[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(t[l][d]=u)}),t[l][s]=u}),t}}]),e}(),pc=[],Rt={},Bt={},jg=Object.keys(Bt);function Fg(e,n){var t=n.mixoutsTo;return pc=e,Rt={},Object.keys(Bt).forEach(function(r){jg.indexOf(r)===-1&&delete Bt[r]}),pc.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(t[o]=a[o]),Bi(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Rt[o]||(Rt[o]=[]),Rt[o].push(i[o])})}r.provides&&r.provides(Bt)}),t}function os(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];var i=Rt[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(r))}),n}function gt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=Rt[e]||[];a.forEach(function(i){i.apply(null,t)})}function hn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,n):void 0}function ls(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Hn();if(n)return n=ot(t,n)||n,cc(zp.definitions,t,n)||cc(Be.styles,t,n)}var zp=new Mg,Dg=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,gt("noAuto")},Ug={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xn?(gt("beforeI2svg",n),hn("pseudoElements2svg",n),hn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,_g(function(){Wg({autoReplaceSvgRoot:t}),gt("watch",n)})}},Yg={icon:function(n){if(n===null)return null;if(Bi(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ot(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],r=go(n[0]);return{prefix:r,iconName:ot(r,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(A.cssPrefix,"-"))>-1||n.match(ug))){var a=yo(n.split(" "),{skipLookups:!0});return{prefix:a.prefix||Hn(),iconName:ot(a.prefix,a.iconName)||a.iconName}}if(typeof n=="string"){var i=Hn();return{prefix:i,iconName:ot(i,n)||n}}}},$e={noAuto:Dg,config:A,dom:Ug,parse:Yg,library:zp,findIconDefinition:ls,toHtml:ya},Wg=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,r=t===void 0?B:t;(Object.keys(Be.styles).length>0||A.autoFetchSvg)&&xn&&A.autoReplaceSvg&&$e.dom.i2svg({node:r})};function wo(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ya(r)})}}),Object.defineProperty(e,"node",{get:function(){if(xn){var r=B.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Hg(e){var n=e.children,t=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(_u(o)&&t.found&&!r.found){var l=t.width,s=t.height,u={x:l/s/2,y:.5};a.style=ho(E(E({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function Vg(e){var n=e.prefix,t=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(A.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Tu(e){var n=e.icons,t=n.main,r=n.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,m=e.watchable,h=m===void 0?!1:m,y=r.found?r:t,w=y.width,T=y.height,v=a==="fak",c=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(function(L){return d.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(d.classes).join(" "),p={children:[],attributes:E(E({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})},g=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};h&&(p.attributes[ht]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||ia())},children:[s]}),delete p.attributes.title);var k=E(E({},p),{},{prefix:a,iconName:i,main:t,mask:r,maskId:u,transform:o,symbol:l,styles:E(E({},g),d.styles)}),b=r.found&&t.found?hn("generateAbstractMask",k)||{children:[],attributes:{}}:hn("generateAbstractIcon",k)||{children:[],attributes:{}},S=b.children,N=b.attributes;return k.children=S,k.attributes=N,l?Vg(k):Hg(k)}function vc(e){var n=e.content,t=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[ht]="");var f=E({},o.styles);_u(a)&&(f.transform=Sg({transform:a,startCentered:!0,width:t,height:r}),f["-webkit-transform"]=f.transform);var d=ho(f);d.length>0&&(u.style=d);var m=[];return m.push({tag:"span",attributes:u,children:[n]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Bg(e){var n=e.content,t=e.title,r=e.extra,a=E(E(E({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),i=ho(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var nl=Be.styles;function ss(e){var n=e[0],t=e[1],r=e.slice(4),a=xu(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var Qg={found:!1,width:512,height:512};function Xg(e,n){!xp&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function us(e,n){var t=n;return n==="fa"&&A.styleDefault!==null&&(n=Hn()),new Promise(function(r,a){if(hn("missingIconAbstract"),t==="fa"){var i=Lp(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&nl[n]&&nl[n][e]){var o=nl[n][e];return r(ss(o))}Xg(e,n),r(E(E({},Qg),{},{icon:A.showMissingIcons&&e?hn("missingIconAbstract")||{}:{}}))})}var hc=function(){},fs=A.measurePerformance&&Ya&&Ya.mark&&Ya.measure?Ya:{mark:hc,measure:hc},Sr='FA "6.5.2"',Gg=function(n){return fs.mark("".concat(Sr," ").concat(n," begins")),function(){return Rp(n)}},Rp=function(n){fs.mark("".concat(Sr," ").concat(n," ends")),fs.measure("".concat(Sr," ").concat(n),"".concat(Sr," ").concat(n," begins"),"".concat(Sr," ").concat(n," ends"))},Iu={begin:Gg,end:Rp},yi=function(){};function gc(e){var n=e.getAttribute?e.getAttribute(ht):null;return typeof n=="string"}function Kg(e){var n=e.getAttribute?e.getAttribute(Su):null,t=e.getAttribute?e.getAttribute(Eu):null;return n&&t}function Zg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Jg(){if(A.autoReplaceSvg===!0)return wi.replace;var e=wi[A.autoReplaceSvg];return e||wi.replace}function qg(e){return B.createElementNS("http://www.w3.org/2000/svg",e)}function e0(e){return B.createElement(e)}function Mp(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,r=t===void 0?e.tag==="svg"?qg:e0:t;if(typeof e=="string")return B.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Mp(o,{ceFn:r}))}),a}function n0(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var wi={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(a){t.parentNode.insertBefore(Mp(a),t)}),t.getAttribute(ht)===null&&A.keepOriginalSource){var r=B.createComment(n0(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(n){var t=n[0],r=n[1];if(~Pu(t).indexOf(A.replacementClass))return wi.replace(n);var a=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===A.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ya(l)}).join(`
`);t.setAttribute(ht,""),t.innerHTML=o}};function yc(e){e()}function jp(e,n){var t=typeof n=="function"?n:yi;if(e.length===0)t();else{var r=yc;A.mutateApproach===og&&(r=Wn.requestAnimationFrame||yc),r(function(){var a=Jg(),i=Iu.begin("mutate");e.map(a),i(),t()})}}var $u=!1;function Fp(){$u=!0}function cs(){$u=!1}var Xi=null;function wc(e){if(sc&&A.observeMutations){var n=e.treeCallback,t=n===void 0?yi:n,r=e.nodeCallback,a=r===void 0?yi:r,i=e.pseudoElementsCallback,o=i===void 0?yi:i,l=e.observeMutationsRoot,s=l===void 0?B:l;Xi=new sc(function(u){if(!$u){var f=Hn();lr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!gc(d.addedNodes[0])&&(A.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&A.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&gc(d.target)&&~mg.indexOf(d.attributeName))if(d.attributeName==="class"&&Kg(d.target)){var m=yo(Pu(d.target)),h=m.prefix,y=m.iconName;d.target.setAttribute(Su,h||f),y&&d.target.setAttribute(Eu,y)}else Zg(d.target)&&a(d.target)})}}),xn&&Xi.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t0(){Xi&&Xi.disconnect()}function r0(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),t}function a0(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=yo(Pu(e));return a.prefix||(a.prefix=Hn()),n&&t&&(a.prefix=n,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=zg(a.prefix,e.innerText)||Au(a.prefix,as(e.innerText))),!a.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function i0(e){var n=lr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),t=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(t?n["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||ia()):(n["aria-hidden"]="true",n.focusable="false")),n}function o0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:en,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=a0(e),r=t.iconName,a=t.prefix,i=t.rest,o=i0(e),l=os("parseNodeAttributes",{},e),s=n.styleParser?r0(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:en,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var l0=Be.styles;function Dp(e){var n=A.autoReplaceSvg==="nest"?kc(e,{styleParser:!1}):kc(e);return~n.extra.classes.indexOf(bp)?hn("generateLayersText",e,n):hn("generateSvgReplacementMutation",e,n)}var Vn=new Set;Cu.map(function(e){Vn.add("fa-".concat(e))});Object.keys(na[W]).map(Vn.add.bind(Vn));Object.keys(na[q]).map(Vn.add.bind(Vn));Vn=ha(Vn);function xc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xn)return Promise.resolve();var t=B.documentElement.classList,r=function(d){return t.add("".concat(uc,"-").concat(d))},a=function(d){return t.remove("".concat(uc,"-").concat(d))},i=A.autoFetchSvg?Vn:Cu.map(function(f){return"fa-".concat(f)}).concat(Object.keys(l0));i.includes("fa")||i.push("fa");var o=[".".concat(bp,":not([").concat(ht,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=lr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=Iu.begin("onTree"),u=l.reduce(function(f,d){try{var m=Dp(d);m&&f.push(m)}catch(h){xp||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(m){jp(m,function(){r("active"),r("complete"),a("pending"),typeof n=="function"&&n(),s(),f()})}).catch(function(m){s(),d(m)})})}function s0(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dp(e).then(function(t){t&&jp([t],n)})}function u0(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:ls(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:ls(a||{})),e(r,E(E({},t),{},{mask:a}))}}var f0=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,a=r===void 0?en:r,i=t.symbol,o=i===void 0?!1:i,l=t.mask,s=l===void 0?null:l,u=t.maskId,f=u===void 0?null:u,d=t.title,m=d===void 0?null:d,h=t.titleId,y=h===void 0?null:h,w=t.classes,T=w===void 0?[]:w,v=t.attributes,c=v===void 0?{}:v,p=t.styles,g=p===void 0?{}:p;if(n){var k=n.prefix,b=n.iconName,S=n.icon;return wo(E({type:"icon"},n),function(){return gt("beforeDOMElementCreation",{iconDefinition:n,params:t}),A.autoA11y&&(m?c["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(y||ia()):(c["aria-hidden"]="true",c.focusable="false")),Tu({icons:{main:ss(S),mask:s?ss(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:E(E({},en),a),symbol:o,title:m,maskId:f,titleId:y,extra:{attributes:c,styles:g,classes:T}})})}},c0={mixout:function(){return{icon:u0(f0)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=xc,t.nodeCallback=s0,t}}},provides:function(n){n.i2svg=function(t){var r=t.node,a=r===void 0?B:r,i=t.callback,o=i===void 0?function(){}:i;return xc(a,o)},n.generateSvgReplacementMutation=function(t,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,m=r.extra;return new Promise(function(h,y){Promise.all([us(a,l),f.iconName?us(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var T=xu(w,2),v=T[0],c=T[1];h([t,Tu({icons:{main:v,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(y)})},n.generateAbstractIcon=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.transform,l=t.styles,s=ho(l);s.length>0&&(a.style=s);var u;return _u(o)&&(u=hn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},d0={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return wo({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(ha(i)).join(" ")},children:o}]})}}}},m0={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return wo({type:"counter",content:t},function(){return gt("beforeDOMElementCreation",{content:t,params:r}),Bg({content:t.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(ha(l))}})})}}}},p0={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?en:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,m=r.styles,h=m===void 0?{}:m;return wo({type:"text",content:t},function(){return gt("beforeDOMElementCreation",{content:t,params:r}),vc({content:t,transform:E(E({},en),i),title:l,extra:{attributes:d,styles:h,classes:["".concat(A.cssPrefix,"-layers-text")].concat(ha(u))}})})}}},provides:function(n){n.generateLayersText=function(t,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(yp){var u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();l=f.width/u,s=f.height/u}return A.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,vc({content:t.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},v0=new RegExp('"',"ug"),bc=[1105920,1112319];function h0(e){var n=e.replace(v0,""),t=Ag(n,0),r=t>=bc[0]&&t<=bc[1],a=n.length===2?n[0]===n[1]:!1;return{value:as(a?n[0]:n),isSecondary:r||a}}function Sc(e,n){var t="".concat(ig).concat(n.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(t)!==null)return r();var i=lr(e.children),o=i.filter(function(S){return S.getAttribute(rs)===n})[0],l=Wn.getComputedStyle(e,n),s=l.getPropertyValue("font-family").match(fg),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?q:W,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?ta[m][s[2].toLowerCase()]:cg[m][u],y=h0(d),w=y.value,T=y.isSecondary,v=s[0].startsWith("FontAwesome"),c=Au(h,w),p=c;if(v){var g=Rg(w);g.iconName&&g.prefix&&(c=g.iconName,h=g.prefix)}if(c&&!T&&(!o||o.getAttribute(Su)!==h||o.getAttribute(Eu)!==p)){e.setAttribute(t,p),o&&e.removeChild(o);var k=o0(),b=k.extra;b.attributes[rs]=n,us(c,h).then(function(S){var N=Tu(E(E({},k),{},{icons:{main:S,mask:Ou()},prefix:h,iconName:p,extra:b,watchable:!0})),L=B.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=N.map(function(z){return ya(z)}).join(`
`),e.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function g0(e){return Promise.all([Sc(e,"::before"),Sc(e,"::after")])}function y0(e){return e.parentNode!==document.head&&!~lg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(rs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ec(e){if(xn)return new Promise(function(n,t){var r=lr(e.querySelectorAll("*")).filter(y0).map(g0),a=Iu.begin("searchPseudoElements");Fp(),Promise.all(r).then(function(){a(),cs(),n()}).catch(function(){a(),cs(),t()})})}var w0={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ec,t}}},provides:function(n){n.pseudoElements2svg=function(t){var r=t.node,a=r===void 0?B:r;A.searchPseudoElements&&Ec(a)}}},Cc=!1,k0={mixout:function(){return{dom:{unwatch:function(){Fp(),Cc=!0}}}},hooks:function(){return{bootstrap:function(){wc(os("mutationObserverCallbacks",{}))},noAuto:function(){t0()},watch:function(t){var r=t.observeMutationsRoot;Cc?cs():wc(os("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pc=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},t)},x0={mixout:function(){return{parse:{transform:function(t){return Pc(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-transform");return a&&(t.transform=Pc(a)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var r=t.main,a=t.transform,i=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:d,path:m};return{tag:"g",attributes:E({},h.outer),children:[{tag:"g",attributes:E({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),h.path)}]}]}}}},tl={x:0,y:0,width:"100%",height:"100%"};function _c(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function b0(e){return e.tag==="g"?e.children:[e]}var S0={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-mask"),i=a?yo(a.split(" ").map(function(o){return o.trim()})):Ou();return i.prefix||(i.prefix=Hn()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.mask,l=t.maskId,s=t.transform,u=i.width,f=i.icon,d=o.width,m=o.icon,h=bg({transform:s,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:E(E({},tl),{},{fill:"white"})},w=f.children?{children:f.children.map(_c)}:{},T={tag:"g",attributes:E({},h.inner),children:[_c(E({tag:f.tag,attributes:E(E({},f.attributes),h.path)},w))]},v={tag:"g",attributes:E({},h.outer),children:[T]},c="mask-".concat(l||ia()),p="clip-".concat(l||ia()),g={tag:"mask",attributes:E(E({},tl),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:b0(m)},g]};return r.push(k,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},tl)}),{children:r,attributes:a}}}},E0={provides:function(n){var t=!1;Wn.matchMedia&&(t=Wn.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},C0={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return t.symbol=i,t}}}},P0=[Cg,c0,d0,m0,p0,w0,k0,x0,S0,E0,C0];Fg(P0,{mixoutsTo:$e});$e.noAuto;$e.config;$e.library;$e.dom;var ds=$e.parse;$e.findIconDefinition;$e.toHtml;var _0=$e.icon;$e.layer;$e.text;$e.counter;var Up={exports:{}},N0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",A0=N0,O0=A0;function Yp(){}function Wp(){}Wp.resetWarningCache=Yp;var T0=function(){function e(r,a,i,o,l,s){if(s!==O0){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Wp,resetWarningCache:Yp};return t.PropTypes=t,t};Up.exports=T0();var I0=Up.exports;const M=nd(I0);function Nc(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function In(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Nc(Object(t),!0).forEach(function(r){Mt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nc(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Gi(e){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gi(e)}function Mt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $0(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function L0(e,n){if(e==null)return{};var t=$0(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ms(e){return z0(e)||R0(e)||M0(e)||j0()}function z0(e){if(Array.isArray(e))return ps(e)}function R0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M0(e,n){if(e){if(typeof e=="string")return ps(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ps(e,n)}}function ps(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F0(e){var n,t=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,m=e.fixedWidth,h=e.inverse,y=e.border,w=e.listItem,T=e.flip,v=e.size,c=e.rotation,p=e.pull,g=(n={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":m,"fa-inverse":h,"fa-border":y,"fa-li":w,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},Mt(n,"fa-".concat(v),typeof v<"u"&&v!==null),Mt(n,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Mt(n,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Mt(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(g).map(function(k){return g[k]?k:null}).filter(function(k){return k})}function D0(e){return e=e-0,e===e}function Hp(e){return D0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var U0=["style"];function Y0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function W0(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var r=t.indexOf(":"),a=Hp(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[Y0(a)]=i:n[a]=i,n},{})}function Vp(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var r=(n.children||[]).map(function(s){return Vp(e,s)}),a=Object.keys(n.attributes||{}).reduce(function(s,u){var f=n.attributes[u];switch(u){case"class":s.attrs.className=f,delete n.attributes.class;break;case"style":s.attrs.style=W0(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[Hp(u)]=f}return s},{attrs:{}}),i=t.style,o=i===void 0?{}:i,l=L0(t,U0);return a.attrs.style=In(In({},a.attrs.style),o),e.apply(void 0,[n.tag,In(In({},a.attrs),l)].concat(ms(r)))}var Bp=!1;try{Bp=!0}catch{}function H0(){if(!Bp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ac(e){if(e&&Gi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ds.icon)return ds.icon(e);if(e===null)return null;if(e&&Gi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function rl(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Mt({},e,n):{}}var wa=Os.forwardRef(function(e,n){var t=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Ac(t),f=rl("classes",[].concat(ms(F0(e)),ms(i.split(" ")))),d=rl("transform",typeof e.transform=="string"?ds.transform(e.transform):e.transform),m=rl("mask",Ac(r)),h=_0(u,In(In(In(In({},f),d),m),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!h)return H0("Could not find icon",u),null;var y=h.abstract,w={ref:n};return Object.keys(e).forEach(function(T){wa.defaultProps.hasOwnProperty(T)||(w[T]=e[T])}),V0(y[0],w)});wa.displayName="FontAwesomeIcon";wa.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};wa.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var V0=Vp.bind(null,Os.createElement);function Oc(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Oc(Object(t),!0).forEach(function(r){le(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oc(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ki(e){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ki(e)}function B0(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Q0(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X0(e,n,t){return n&&Q0(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Lu(e,n){return K0(e)||J0(e,n)||Qp(e,n)||ey()}function ka(e){return G0(e)||Z0(e)||Qp(e)||q0()}function G0(e){if(Array.isArray(e))return vs(e)}function K0(e){if(Array.isArray(e))return e}function Z0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J0(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Qp(e,n){if(e){if(typeof e=="string")return vs(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vs(e,n)}}function vs(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function q0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ey(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tc=function(){},zu={},Xp={},Gp=null,Kp={mark:Tc,measure:Tc};try{typeof window<"u"&&(zu=window),typeof document<"u"&&(Xp=document),typeof MutationObserver<"u"&&(Gp=MutationObserver),typeof performance<"u"&&(Kp=performance)}catch{}var ny=zu.navigator||{},Ic=ny.userAgent,$c=Ic===void 0?"":Ic,Bn=zu,Q=Xp,Lc=Gp,Za=Kp;Bn.document;var bn=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Zp=~$c.indexOf("MSIE")||~$c.indexOf("Trident/"),Ja,qa,ei,ni,ti,gn="___FONT_AWESOME___",hs=16,Jp="fa",qp="svg-inline--fa",yt="data-fa-i2svg",gs="data-fa-pseudo-element",ty="data-fa-pseudo-element-pending",Ru="data-prefix",Mu="data-icon",zc="fontawesome-i2svg",ry="async",ay=["HTML","HEAD","STYLE","SCRIPT"],ev=function(){try{return!0}catch{return!1}}(),H="classic",ee="sharp",ju=[H,ee];function xa(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[H]}})}var oa=xa((Ja={},le(Ja,H,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),le(Ja,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ja)),la=xa((qa={},le(qa,H,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(qa,ee,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),qa)),sa=xa((ei={},le(ei,H,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(ei,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ei)),iy=xa((ni={},le(ni,H,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(ni,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ni)),oy=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,nv="fa-layers-text",ly=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sy=xa((ti={},le(ti,H,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(ti,ee,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ti)),tv=[1,2,3,4,5,6,7,8,9,10],uy=tv.concat([11,12,13,14,15,16,17,18,19,20]),fy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ua=new Set;Object.keys(la[H]).map(ua.add.bind(ua));Object.keys(la[ee]).map(ua.add.bind(ua));var cy=[].concat(ju,ka(ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(tv.map(function(e){return"".concat(e,"x")})).concat(uy.map(function(e){return"w-".concat(e)})),Rr=Bn.FontAwesomeConfig||{};function dy(e){var n=Q.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function my(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var py=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];py.forEach(function(e){var n=Lu(e,2),t=n[0],r=n[1],a=my(dy(t));a!=null&&(Rr[r]=a)})}var rv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jp,replacementClass:qp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rr.familyPrefix&&(Rr.cssPrefix=Rr.familyPrefix);var rr=C(C({},rv),Rr);rr.autoReplaceSvg||(rr.observeMutations=!1);var O={};Object.keys(rv).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(t){rr[e]=t,Mr.forEach(function(r){return r(O)})},get:function(){return rr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(n){rr.cssPrefix=n,Mr.forEach(function(t){return t(O)})},get:function(){return rr.cssPrefix}});Bn.FontAwesomeConfig=O;var Mr=[];function vy(e){return Mr.push(e),function(){Mr.splice(Mr.indexOf(e),1)}}var Cn=hs,nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hy(e){if(!(!e||!bn)){var n=Q.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=Q.head.childNodes,r=null,a=t.length-1;a>-1;a--){var i=t[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Q.head.insertBefore(n,r),e}}var gy="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var e=12,n="";e-- >0;)n+=gy[Math.random()*62|0];return n}function sr(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Fu(e){return e.classList?sr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function av(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yy(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(av(e[t]),'" ')},"").trim()}function ko(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Du(e){return e.size!==nn.size||e.x!==nn.x||e.y!==nn.y||e.rotate!==nn.rotate||e.flipX||e.flipY}function wy(e){var n=e.transform,t=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function ky(e){var n=e.transform,t=e.width,r=t===void 0?hs:t,a=e.height,i=a===void 0?hs:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Zp?s+="translate(".concat(n.x/Cn-r/2,"em, ").concat(n.y/Cn-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(n.x/Cn,"em), calc(-50% + ").concat(n.y/Cn,"em)) "):s+="translate(".concat(n.x/Cn,"em, ").concat(n.y/Cn,"em) "),s+="scale(".concat(n.size/Cn*(n.flipX?-1:1),", ").concat(n.size/Cn*(n.flipY?-1:1),") "),s+="rotate(".concat(n.rotate,"deg) "),s}var xy=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function iv(){var e=Jp,n=qp,t=O.cssPrefix,r=O.replacementClass,a=xy;if(t!==e||r!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(r))}return a}var Rc=!1;function al(){O.autoAddCss&&!Rc&&(hy(iv()),Rc=!0)}var by={mixout:function(){return{dom:{css:iv,insertCss:al}}},hooks:function(){return{beforeDOMElementCreation:function(){al()},beforeI2svg:function(){al()}}}},yn=Bn||{};yn[gn]||(yn[gn]={});yn[gn].styles||(yn[gn].styles={});yn[gn].hooks||(yn[gn].hooks={});yn[gn].shims||(yn[gn].shims=[]);var Qe=yn[gn],ov=[],Sy=function e(){Q.removeEventListener("DOMContentLoaded",e),Zi=1,ov.map(function(n){return n()})},Zi=!1;bn&&(Zi=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Zi||Q.addEventListener("DOMContentLoaded",Sy));function Ey(e){bn&&(Zi?setTimeout(e,0):ov.push(e))}function ba(e){var n=e.tag,t=e.attributes,r=t===void 0?{}:t,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?av(e):"<".concat(n," ").concat(yy(r),">").concat(i.map(ba).join(""),"</").concat(n,">")}function Mc(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var il=function(n,t,r,a){var i=Object.keys(n),o=i.length,l=t,s,u,f;for(r===void 0?(s=1,f=n[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,n[u],u,n);return f};function Cy(e){for(var n=[],t=0,r=e.length;t<r;){var a=e.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){var i=e.charCodeAt(t++);(i&64512)==56320?n.push(((a&1023)<<10)+(i&1023)+65536):(n.push(a),t--)}else n.push(a)}return n}function ys(e){var n=Cy(e);return n.length===1?n[0].toString(16):null}function Py(e,n){var t=e.length,r=e.charCodeAt(n),a;return r>=55296&&r<=56319&&t>n+1&&(a=e.charCodeAt(n+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function jc(e){return Object.keys(e).reduce(function(n,t){var r=e[t],a=!!r.icon;return a?n[r.iconName]=r.icon:n[t]=r,n},{})}function ws(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,a=r===void 0?!1:r,i=jc(n);typeof Qe.hooks.addPack=="function"&&!a?Qe.hooks.addPack(e,jc(n)):Qe.styles[e]=C(C({},Qe.styles[e]||{}),i),e==="fas"&&ws("fa",n)}var ri,ai,ii,jt=Qe.styles,_y=Qe.shims,Ny=(ri={},le(ri,H,Object.values(sa[H])),le(ri,ee,Object.values(sa[ee])),ri),Uu=null,lv={},sv={},uv={},fv={},cv={},Ay=(ai={},le(ai,H,Object.keys(oa[H])),le(ai,ee,Object.keys(oa[ee])),ai);function Oy(e){return~cy.indexOf(e)}function Ty(e,n){var t=n.split("-"),r=t[0],a=t.slice(1).join("-");return r===e&&a!==""&&!Oy(a)?a:null}var dv=function(){var n=function(i){return il(jt,function(o,l,s){return o[s]=il(l,i,{}),o},{})};lv=n(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),sv=n(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),cv=n(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var t="far"in jt||O.autoFetchSvg,r=il(_y,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});uv=r.names,fv=r.unicodes,Uu=xo(O.styleDefault,{family:O.familyDefault})};vy(function(e){Uu=xo(e.styleDefault,{family:O.familyDefault})});dv();function Yu(e,n){return(lv[e]||{})[n]}function Iy(e,n){return(sv[e]||{})[n]}function st(e,n){return(cv[e]||{})[n]}function mv(e){return uv[e]||{prefix:null,iconName:null}}function $y(e){var n=fv[e],t=Yu("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Qn(){return Uu}var Wu=function(){return{prefix:null,iconName:null,rest:[]}};function xo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,r=t===void 0?H:t,a=oa[r][e],i=la[r][e]||la[r][a],o=e in Qe.styles?e:null;return i||o||null}var Fc=(ii={},le(ii,H,Object.keys(sa[H])),le(ii,ee,Object.keys(sa[ee])),ii);function bo(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.skipLookups,a=r===void 0?!1:r,i=(n={},le(n,H,"".concat(O.cssPrefix,"-").concat(H)),le(n,ee,"".concat(O.cssPrefix,"-").concat(ee)),n),o=null,l=H;(e.includes(i[H])||e.some(function(u){return Fc[H].includes(u)}))&&(l=H),(e.includes(i[ee])||e.some(function(u){return Fc[ee].includes(u)}))&&(l=ee);var s=e.reduce(function(u,f){var d=Ty(O.cssPrefix,f);if(jt[f]?(f=Ny[l].includes(f)?iy[l][f]:f,o=f,u.prefix=f):Ay[l].indexOf(f)>-1?(o=f,u.prefix=xo(f,{family:l})):d?u.iconName=d:f!==O.replacementClass&&f!==i[H]&&f!==i[ee]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var m=o==="fa"?mv(u.iconName):{},h=st(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||h||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!jt.far&&jt.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},Wu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ee&&(jt.fass||O.autoFetchSvg)&&(s.prefix="fass",s.iconName=st(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Qn()||"fas"),s}var Ly=function(){function e(){B0(this,e),this.definitions={}}return X0(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=C(C({},t.definitions[l]||{}),o[l]),ws(l,o[l]);var s=sa[H][l];s&&ws(s,o[l]),dv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];t[l]||(t[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(t[l][d]=u)}),t[l][s]=u}),t}}]),e}(),Dc=[],Ft={},Qt={},zy=Object.keys(Qt);function Ry(e,n){var t=n.mixoutsTo;return Dc=e,Ft={},Object.keys(Qt).forEach(function(r){zy.indexOf(r)===-1&&delete Qt[r]}),Dc.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(t[o]=a[o]),Ki(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ft[o]||(Ft[o]=[]),Ft[o].push(i[o])})}r.provides&&r.provides(Qt)}),t}function ks(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];var i=Ft[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(r))}),n}function wt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=Ft[e]||[];a.forEach(function(i){i.apply(null,t)})}function wn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Qt[e]?Qt[e].apply(null,n):void 0}function xs(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Qn();if(n)return n=st(t,n)||n,Mc(pv.definitions,t,n)||Mc(Qe.styles,t,n)}var pv=new Ly,My=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,wt("noAuto")},jy={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bn?(wt("beforeI2svg",n),wn("pseudoElements2svg",n),wn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,Ey(function(){Dy({autoReplaceSvgRoot:t}),wt("watch",n)})}},Fy={icon:function(n){if(n===null)return null;if(Ki(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:st(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],r=xo(n[0]);return{prefix:r,iconName:st(r,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(O.cssPrefix,"-"))>-1||n.match(oy))){var a=bo(n.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qn(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof n=="string"){var i=Qn();return{prefix:i,iconName:st(i,n)||n}}}},Le={noAuto:My,config:O,dom:jy,parse:Fy,library:pv,findIconDefinition:xs,toHtml:ba},Dy=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,r=t===void 0?Q:t;(Object.keys(Qe.styles).length>0||O.autoFetchSvg)&&bn&&O.autoReplaceSvg&&Le.dom.i2svg({node:r})};function So(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ba(r)})}}),Object.defineProperty(e,"node",{get:function(){if(bn){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Uy(e){var n=e.children,t=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Du(o)&&t.found&&!r.found){var l=t.width,s=t.height,u={x:l/s/2,y:.5};a.style=ko(C(C({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function Yy(e){var n=e.prefix,t=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(O.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Hu(e){var n=e.icons,t=n.main,r=n.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,m=e.watchable,h=m===void 0?!1:m,y=r.found?r:t,w=y.width,T=y.height,v=a==="fak",c=[O.replacementClass,i?"".concat(O.cssPrefix,"-").concat(i):""].filter(function(L){return d.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(d.classes).join(" "),p={children:[],attributes:C(C({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})},g=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};h&&(p.attributes[yt]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||fa())},children:[s]}),delete p.attributes.title);var k=C(C({},p),{},{prefix:a,iconName:i,main:t,mask:r,maskId:u,transform:o,symbol:l,styles:C(C({},g),d.styles)}),b=r.found&&t.found?wn("generateAbstractMask",k)||{children:[],attributes:{}}:wn("generateAbstractIcon",k)||{children:[],attributes:{}},S=b.children,N=b.attributes;return k.children=S,k.attributes=N,l?Yy(k):Uy(k)}function Uc(e){var n=e.content,t=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[yt]="");var f=C({},o.styles);Du(a)&&(f.transform=ky({transform:a,startCentered:!0,width:t,height:r}),f["-webkit-transform"]=f.transform);var d=ko(f);d.length>0&&(u.style=d);var m=[];return m.push({tag:"span",attributes:u,children:[n]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Wy(e){var n=e.content,t=e.title,r=e.extra,a=C(C(C({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),i=ko(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var ol=Qe.styles;function bs(e){var n=e[0],t=e[1],r=e.slice(4),a=Lu(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var Hy={found:!1,width:512,height:512};function Vy(e,n){!ev&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Ss(e,n){var t=n;return n==="fa"&&O.styleDefault!==null&&(n=Qn()),new Promise(function(r,a){if(wn("missingIconAbstract"),t==="fa"){var i=mv(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&ol[n]&&ol[n][e]){var o=ol[n][e];return r(bs(o))}Vy(e,n),r(C(C({},Hy),{},{icon:O.showMissingIcons&&e?wn("missingIconAbstract")||{}:{}}))})}var Yc=function(){},Es=O.measurePerformance&&Za&&Za.mark&&Za.measure?Za:{mark:Yc,measure:Yc},Er='FA "6.5.2"',By=function(n){return Es.mark("".concat(Er," ").concat(n," begins")),function(){return vv(n)}},vv=function(n){Es.mark("".concat(Er," ").concat(n," ends")),Es.measure("".concat(Er," ").concat(n),"".concat(Er," ").concat(n," begins"),"".concat(Er," ").concat(n," ends"))},Vu={begin:By,end:vv},ki=function(){};function Wc(e){var n=e.getAttribute?e.getAttribute(yt):null;return typeof n=="string"}function Qy(e){var n=e.getAttribute?e.getAttribute(Ru):null,t=e.getAttribute?e.getAttribute(Mu):null;return n&&t}function Xy(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function Gy(){if(O.autoReplaceSvg===!0)return xi.replace;var e=xi[O.autoReplaceSvg];return e||xi.replace}function Ky(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function Zy(e){return Q.createElement(e)}function hv(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,r=t===void 0?e.tag==="svg"?Ky:Zy:t;if(typeof e=="string")return Q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(hv(o,{ceFn:r}))}),a}function Jy(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var xi={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(a){t.parentNode.insertBefore(hv(a),t)}),t.getAttribute(yt)===null&&O.keepOriginalSource){var r=Q.createComment(Jy(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(n){var t=n[0],r=n[1];if(~Fu(t).indexOf(O.replacementClass))return xi.replace(n);var a=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===O.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ba(l)}).join(`
`);t.setAttribute(yt,""),t.innerHTML=o}};function Hc(e){e()}function gv(e,n){var t=typeof n=="function"?n:ki;if(e.length===0)t();else{var r=Hc;O.mutateApproach===ry&&(r=Bn.requestAnimationFrame||Hc),r(function(){var a=Gy(),i=Vu.begin("mutate");e.map(a),i(),t()})}}var Bu=!1;function yv(){Bu=!0}function Cs(){Bu=!1}var Ji=null;function Vc(e){if(Lc&&O.observeMutations){var n=e.treeCallback,t=n===void 0?ki:n,r=e.nodeCallback,a=r===void 0?ki:r,i=e.pseudoElementsCallback,o=i===void 0?ki:i,l=e.observeMutationsRoot,s=l===void 0?Q:l;Ji=new Lc(function(u){if(!Bu){var f=Qn();sr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Wc(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Wc(d.target)&&~fy.indexOf(d.attributeName))if(d.attributeName==="class"&&Qy(d.target)){var m=bo(Fu(d.target)),h=m.prefix,y=m.iconName;d.target.setAttribute(Ru,h||f),y&&d.target.setAttribute(Mu,y)}else Xy(d.target)&&a(d.target)})}}),bn&&Ji.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qy(){Ji&&Ji.disconnect()}function e2(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),t}function n2(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=bo(Fu(e));return a.prefix||(a.prefix=Qn()),n&&t&&(a.prefix=n,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Iy(a.prefix,e.innerText)||Yu(a.prefix,ys(e.innerText))),!a.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function t2(e){var n=sr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),t=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(t?n["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||fa()):(n["aria-hidden"]="true",n.focusable="false")),n}function r2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=n2(e),r=t.iconName,a=t.prefix,i=t.rest,o=t2(e),l=ks("parseNodeAttributes",{},e),s=n.styleParser?e2(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:nn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var a2=Qe.styles;function wv(e){var n=O.autoReplaceSvg==="nest"?Bc(e,{styleParser:!1}):Bc(e);return~n.extra.classes.indexOf(nv)?wn("generateLayersText",e,n):wn("generateSvgReplacementMutation",e,n)}var Xn=new Set;ju.map(function(e){Xn.add("fa-".concat(e))});Object.keys(oa[H]).map(Xn.add.bind(Xn));Object.keys(oa[ee]).map(Xn.add.bind(Xn));Xn=ka(Xn);function Qc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bn)return Promise.resolve();var t=Q.documentElement.classList,r=function(d){return t.add("".concat(zc,"-").concat(d))},a=function(d){return t.remove("".concat(zc,"-").concat(d))},i=O.autoFetchSvg?Xn:ju.map(function(f){return"fa-".concat(f)}).concat(Object.keys(a2));i.includes("fa")||i.push("fa");var o=[".".concat(nv,":not([").concat(yt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(yt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=sr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=Vu.begin("onTree"),u=l.reduce(function(f,d){try{var m=wv(d);m&&f.push(m)}catch(h){ev||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(m){gv(m,function(){r("active"),r("complete"),a("pending"),typeof n=="function"&&n(),s(),f()})}).catch(function(m){s(),d(m)})})}function i2(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wv(e).then(function(t){t&&gv([t],n)})}function o2(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:xs(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:xs(a||{})),e(r,C(C({},t),{},{mask:a}))}}var l2=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,a=r===void 0?nn:r,i=t.symbol,o=i===void 0?!1:i,l=t.mask,s=l===void 0?null:l,u=t.maskId,f=u===void 0?null:u,d=t.title,m=d===void 0?null:d,h=t.titleId,y=h===void 0?null:h,w=t.classes,T=w===void 0?[]:w,v=t.attributes,c=v===void 0?{}:v,p=t.styles,g=p===void 0?{}:p;if(n){var k=n.prefix,b=n.iconName,S=n.icon;return So(C({type:"icon"},n),function(){return wt("beforeDOMElementCreation",{iconDefinition:n,params:t}),O.autoA11y&&(m?c["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||fa()):(c["aria-hidden"]="true",c.focusable="false")),Hu({icons:{main:bs(S),mask:s?bs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:C(C({},nn),a),symbol:o,title:m,maskId:f,titleId:y,extra:{attributes:c,styles:g,classes:T}})})}},s2={mixout:function(){return{icon:o2(l2)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Qc,t.nodeCallback=i2,t}}},provides:function(n){n.i2svg=function(t){var r=t.node,a=r===void 0?Q:r,i=t.callback,o=i===void 0?function(){}:i;return Qc(a,o)},n.generateSvgReplacementMutation=function(t,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,m=r.extra;return new Promise(function(h,y){Promise.all([Ss(a,l),f.iconName?Ss(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var T=Lu(w,2),v=T[0],c=T[1];h([t,Hu({icons:{main:v,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(y)})},n.generateAbstractIcon=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.transform,l=t.styles,s=ko(l);s.length>0&&(a.style=s);var u;return Du(o)&&(u=wn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},u2={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return So({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(ka(i)).join(" ")},children:o}]})}}}},f2={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return So({type:"counter",content:t},function(){return wt("beforeDOMElementCreation",{content:t,params:r}),Wy({content:t.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(ka(l))}})})}}}},c2={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?nn:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,m=r.styles,h=m===void 0?{}:m;return So({type:"text",content:t},function(){return wt("beforeDOMElementCreation",{content:t,params:r}),Uc({content:t,transform:C(C({},nn),i),title:l,extra:{attributes:d,styles:h,classes:["".concat(O.cssPrefix,"-layers-text")].concat(ka(u))}})})}}},provides:function(n){n.generateLayersText=function(t,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Zp){var u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();l=f.width/u,s=f.height/u}return O.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Uc({content:t.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},d2=new RegExp('"',"ug"),Xc=[1105920,1112319];function m2(e){var n=e.replace(d2,""),t=Py(n,0),r=t>=Xc[0]&&t<=Xc[1],a=n.length===2?n[0]===n[1]:!1;return{value:ys(a?n[0]:n),isSecondary:r||a}}function Gc(e,n){var t="".concat(ty).concat(n.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(t)!==null)return r();var i=sr(e.children),o=i.filter(function(S){return S.getAttribute(gs)===n})[0],l=Bn.getComputedStyle(e,n),s=l.getPropertyValue("font-family").match(ly),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?ee:H,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?la[m][s[2].toLowerCase()]:sy[m][u],y=m2(d),w=y.value,T=y.isSecondary,v=s[0].startsWith("FontAwesome"),c=Yu(h,w),p=c;if(v){var g=$y(w);g.iconName&&g.prefix&&(c=g.iconName,h=g.prefix)}if(c&&!T&&(!o||o.getAttribute(Ru)!==h||o.getAttribute(Mu)!==p)){e.setAttribute(t,p),o&&e.removeChild(o);var k=r2(),b=k.extra;b.attributes[gs]=n,Ss(c,h).then(function(S){var N=Hu(C(C({},k),{},{icons:{main:S,mask:Wu()},prefix:h,iconName:p,extra:b,watchable:!0})),L=Q.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=N.map(function(z){return ba(z)}).join(`
`),e.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function p2(e){return Promise.all([Gc(e,"::before"),Gc(e,"::after")])}function v2(e){return e.parentNode!==document.head&&!~ay.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Kc(e){if(bn)return new Promise(function(n,t){var r=sr(e.querySelectorAll("*")).filter(v2).map(p2),a=Vu.begin("searchPseudoElements");yv(),Promise.all(r).then(function(){a(),Cs(),n()}).catch(function(){a(),Cs(),t()})})}var h2={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Kc,t}}},provides:function(n){n.pseudoElements2svg=function(t){var r=t.node,a=r===void 0?Q:r;O.searchPseudoElements&&Kc(a)}}},Zc=!1,g2={mixout:function(){return{dom:{unwatch:function(){yv(),Zc=!0}}}},hooks:function(){return{bootstrap:function(){Vc(ks("mutationObserverCallbacks",{}))},noAuto:function(){qy()},watch:function(t){var r=t.observeMutationsRoot;Zc?Cs():Vc(ks("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Jc=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},t)},y2={mixout:function(){return{parse:{transform:function(t){return Jc(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-transform");return a&&(t.transform=Jc(a)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var r=t.main,a=t.transform,i=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:d,path:m};return{tag:"g",attributes:C({},h.outer),children:[{tag:"g",attributes:C({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),h.path)}]}]}}}},ll={x:0,y:0,width:"100%",height:"100%"};function qc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function w2(e){return e.tag==="g"?e.children:[e]}var k2={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-mask"),i=a?bo(a.split(" ").map(function(o){return o.trim()})):Wu();return i.prefix||(i.prefix=Qn()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.mask,l=t.maskId,s=t.transform,u=i.width,f=i.icon,d=o.width,m=o.icon,h=wy({transform:s,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:C(C({},ll),{},{fill:"white"})},w=f.children?{children:f.children.map(qc)}:{},T={tag:"g",attributes:C({},h.inner),children:[qc(C({tag:f.tag,attributes:C(C({},f.attributes),h.path)},w))]},v={tag:"g",attributes:C({},h.outer),children:[T]},c="mask-".concat(l||fa()),p="clip-".concat(l||fa()),g={tag:"mask",attributes:C(C({},ll),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:w2(m)},g]};return r.push(k,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},ll)}),{children:r,attributes:a}}}},x2={provides:function(n){var t=!1;Bn.matchMedia&&(t=Bn.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},b2={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return t.symbol=i,t}}}},S2=[by,s2,u2,f2,c2,h2,g2,y2,k2,x2,b2];Ry(S2,{mixoutsTo:Le});Le.noAuto;Le.config;var E2=Le.library;Le.dom;Le.parse;Le.findIconDefinition;Le.toHtml;Le.icon;Le.layer;Le.text;Le.counter;var ed={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const C2=()=>(E2.add(ed),I.jsxs("footer",{id:"footer",className:"footer container",children:[I.jsxs("div",{children:[I.jsx("span",{children:"ExchangeRates ©"}),I.jsx("a",{className:"footer-link",href:"mailto:pawel.j.kroczak@gmail.com",children:" Pawel Kroczak"})]}),I.jsx("div",{children:I.jsx("a",{href:"https://github.com/hmkkkk",children:I.jsx(wa,{className:"footer-icon",icon:ed})})})]})),P2="https://localhost:7001/api",_2=async()=>await(await fetch(`${P2}/exchangerates`)).json(),N2=()=>I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"list-item",children:[I.jsx("label",{className:"currency-name",children:"Currency"}),I.jsx("label",{children:"Code"}),I.jsx("label",{children:"Exchange rate"})]}),I.jsxs("div",{className:"list-item bg-indigo",children:[I.jsx("label",{className:"currency-name",children:"Polish Zloty"}),I.jsx("label",{children:"PLN"}),I.jsx("label",{children:"1"})]})]}),A2=()=>I.jsx("p",{className:"text-center",children:"Failed to load exchange rates. Please reload the page or try again later."}),O2=({item:e})=>I.jsxs("div",{className:"list-item",children:[I.jsx("label",{className:"currency-name",style:{textTransform:"capitalize"},children:e.currency}),I.jsx("label",{children:e.code}),I.jsx("label",{children:e.mid})]}),T2=({exchangeRates:e,filterValue:n})=>{if(e===void 0)return I.jsx(A2,{});const t=e.filter(r=>r.currency.toLowerCase().includes(n.toLowerCase())||r.code.toLowerCase().includes(n.toLowerCase()));return I.jsx(I.Fragment,{children:t.map(r=>I.jsx(O2,{item:r},r.code))})},I2=({filterValue:e})=>{const[n,t]=Xt.useState();return Xt.useEffect(()=>{r()},[]),I.jsxs("div",{className:"container list-container",children:[I.jsx(N2,{}),I.jsx(T2,{exchangeRates:n,filterValue:e})]});async function r(){t(await _2())}},$2=()=>I.jsxs("div",{className:"container list-container",children:[I.jsx("h1",{className:"text-center",children:"Polish Zloty(PLN) exchange rates"}),I.jsx("p",{children:"Current average exchange rates of foreign currencies in zlotys. All the data was taken from NBP's API."})]});function L2(){const[e,n]=Xt.useState("");return I.jsxs(I.Fragment,{children:[I.jsx(Qh,{}),I.jsxs("div",{className:"h-screen container p-64",children:[I.jsx($2,{}),I.jsx(Xh,{searchInput:e,setSearchInput:n}),I.jsx(I2,{filterValue:e})]}),I.jsx(C2,{})]})}sl.createRoot(document.getElementById("root")).render(I.jsx(Os.StrictMode,{children:I.jsx(L2,{})}));
