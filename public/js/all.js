/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

$(window).scroll(function () { 
    var original = $('#limit-sticky').offset().top + $('#limit-sticky').outerHeight()
    if($(window).scrollTop() > ($('#limit-sticky').offset().top + $('#limit-sticky').outerHeight())){
        $(".sticky-efect").animate({
            top:'0',
            height:'100vh'
        },0)
    }
    if($(window).scrollTop() <= ($('#limit-sticky').offset().top + $('#limit-sticky').outerHeight())){
        $(".sticky-efect").animate({
            top:original,
            
        },0)
    }
});

$(document).ready(main);
function sidebar(){
    $('.crm-option-trubilia>ul>li').click((e)=>{
        var deg = ($(e.target).find($('.submenu')).is(":visible")?'0deg':'90deg');  
        $(e.target).find($('i.fa-angle-right')).css('transform',`rotate(${deg})`)

        $(e.target).find($('.submenu')).toggle(400)

    })
}

function uploaders(){
    var counter =0;
    let allInputs = document.getElementsByClassName("file-uploader");

    var readURL = function(input,container){
        
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                console.log(counter);
                var img = document.createElement("IMG");
                img.src = e.target.result
                img.width="100%"
                document.querySelectorAll(".file-uploader>i")[counter-1].style.display = 'none'
                document.getElementsByClassName("file-uploader")[counter-1].appendChild(img);
            }
            reader.readAsDataURL(input.files[0]);
        }
        counter ++;
    }
    
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('click',()=>{
            $(".file-upload")[i].click();
        })
    }
    
    $(".file-upload").on('change',function(){
        readURL(this)
    })
}

function main() {
    uploaders()
    sidebar()
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("trubilia-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
}

/*!
FullCalendar Core Package v4.1.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.FullCalendar = {}));
}(this, function (exports) { 'use strict';

    // Creating
    // ----------------------------------------------------------------------------------------------------------------
    var elementPropHash = {
        className: true,
        colSpan: true,
        rowSpan: true
    };
    var containerTagHash = {
        '<tr': 'tbody',
        '<td': 'tr'
    };
    function createElement(tagName, attrs, content) {
        var el = document.createElement(tagName);
        if (attrs) {
            for (var attrName in attrs) {
                if (attrName === 'style') {
                    applyStyle(el, attrs[attrName]);
                }
                else if (elementPropHash[attrName]) {
                    el[attrName] = attrs[attrName];
                }
                else {
                    el.setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        if (typeof content === 'string') {
            el.innerHTML = content; // shortcut. no need to process HTML in any way
        }
        else if (content != null) {
            appendToElement(el, content);
        }
        return el;
    }
    function htmlToElement(html) {
        html = html.trim();
        var container = document.createElement(computeContainerTag(html));
        container.innerHTML = html;
        return container.firstChild;
    }
    function htmlToElements(html) {
        return Array.prototype.slice.call(htmlToNodeList(html));
    }
    function htmlToNodeList(html) {
        html = html.trim();
        var container = document.createElement(computeContainerTag(html));
        container.innerHTML = html;
        return container.childNodes;
    }
    // assumes html already trimmed and tag names are lowercase
    function computeContainerTag(html) {
        return containerTagHash[html.substr(0, 3) // faster than using regex
        ] || 'div';
    }
    function appendToElement(el, content) {
        var childNodes = normalizeContent(content);
        for (var i = 0; i < childNodes.length; i++) {
            el.appendChild(childNodes[i]);
        }
    }
    function prependToElement(parent, content) {
        var newEls = normalizeContent(content);
        var afterEl = parent.firstChild || null; // if no firstChild, will append to end, but that's okay, b/c there were no children
        for (var i = 0; i < newEls.length; i++) {
            parent.insertBefore(newEls[i], afterEl);
        }
    }
    function insertAfterElement(refEl, content) {
        var newEls = normalizeContent(content);
        var afterEl = refEl.nextSibling || null;
        for (var i = 0; i < newEls.length; i++) {
            refEl.parentNode.insertBefore(newEls[i], afterEl);
        }
    }
    function normalizeContent(content) {
        var els;
        if (typeof content === 'string') {
            els = htmlToElements(content);
        }
        else if (content instanceof Node) {
            els = [content];
        }
        else { // Node[] or NodeList
            els = Array.prototype.slice.call(content);
        }
        return els;
    }
    function removeElement(el) {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    // Querying
    // ----------------------------------------------------------------------------------------------------------------
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    var matchesMethod = Element.prototype.matches ||
        Element.prototype.matchesSelector ||
        Element.prototype.msMatchesSelector;
    var closestMethod = Element.prototype.closest || function (selector) {
        // polyfill
        var el = this;
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (elementMatches(el, selector)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
    function elementClosest(el, selector) {
        return closestMethod.call(el, selector);
    }
    function elementMatches(el, selector) {
        return matchesMethod.call(el, selector);
    }
    // accepts multiple subject els
    // returns a real array. good for methods like forEach
    function findElements(container, selector) {
        var containers = container instanceof HTMLElement ? [container] : container;
        var allMatches = [];
        for (var i = 0; i < containers.length; i++) {
            var matches = containers[i].querySelectorAll(selector);
            for (var j = 0; j < matches.length; j++) {
                allMatches.push(matches[j]);
            }
        }
        return allMatches;
    }
    // accepts multiple subject els
    // only queries direct child elements
    function findChildren(parent, selector) {
        var parents = parent instanceof HTMLElement ? [parent] : parent;
        var allMatches = [];
        for (var i = 0; i < parents.length; i++) {
            var childNodes = parents[i].children; // only ever elements
            for (var j = 0; j < childNodes.length; j++) {
                var childNode = childNodes[j];
                if (!selector || elementMatches(childNode, selector)) {
                    allMatches.push(childNode);
                }
            }
        }
        return allMatches;
    }
    // Attributes
    // ----------------------------------------------------------------------------------------------------------------
    function forceClassName(el, className, bool) {
        if (bool) {
            el.classList.add(className);
        }
        else {
            el.classList.remove(className);
        }
    }
    // Style
    // ----------------------------------------------------------------------------------------------------------------
    var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
    function applyStyle(el, props) {
        for (var propName in props) {
            applyStyleProp(el, propName, props[propName]);
        }
    }
    function applyStyleProp(el, name, val) {
        if (val == null) {
            el.style[name] = '';
        }
        else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
            el.style[name] = val + 'px';
        }
        else {
            el.style[name] = val;
        }
    }

    function pointInsideRect(point, rect) {
        return point.left >= rect.left &&
            point.left < rect.right &&
            point.top >= rect.top &&
            point.top < rect.bottom;
    }
    // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
    function intersectRects(rect1, rect2) {
        var res = {
            left: Math.max(rect1.left, rect2.left),
            right: Math.min(rect1.right, rect2.right),
            top: Math.max(rect1.top, rect2.top),
            bottom: Math.min(rect1.bottom, rect2.bottom)
        };
        if (res.left < res.right && res.top < res.bottom) {
            return res;
        }
        return false;
    }
    function translateRect(rect, deltaX, deltaY) {
        return {
            left: rect.left + deltaX,
            right: rect.right + deltaX,
            top: rect.top + deltaY,
            bottom: rect.bottom + deltaY
        };
    }
    // Returns a new point that will have been moved to reside within the given rectangle
    function constrainPoint(point, rect) {
        return {
            left: Math.min(Math.max(point.left, rect.left), rect.right),
            top: Math.min(Math.max(point.top, rect.top), rect.bottom)
        };
    }
    // Returns a point that is the center of the given rectangle
    function getRectCenter(rect) {
        return {
            left: (rect.left + rect.right) / 2,
            top: (rect.top + rect.bottom) / 2
        };
    }
    // Subtracts point2's coordinates from point1's coordinates, returning a delta
    function diffPoints(point1, point2) {
        return {
            left: point1.left - point2.left,
            top: point1.top - point2.top
        };
    }

    // Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
    var isRtlScrollbarOnLeft = null;
    function getIsRtlScrollbarOnLeft() {
        if (isRtlScrollbarOnLeft === null) {
            isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
        }
        return isRtlScrollbarOnLeft;
    }
    function computeIsRtlScrollbarOnLeft() {
        var outerEl = createElement('div', {
            style: {
                position: 'absolute',
                top: -1000,
                left: 0,
                border: 0,
                padding: 0,
                overflow: 'scroll',
                direction: 'rtl'
            }
        }, '<div></div>');
        document.body.appendChild(outerEl);
        var innerEl = outerEl.firstChild;
        var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
        removeElement(outerEl);
        return res;
    }
    // The scrollbar width computations in computeEdges are sometimes flawed when it comes to
    // retina displays, rounding, and IE11. Massage them into a usable value.
    function sanitizeScrollbarWidth(width) {
        width = Math.max(0, width); // no negatives
        width = Math.round(width);
        return width;
    }

    function computeEdges(el, getPadding) {
        if (getPadding === void 0) { getPadding = false; }
        var computedStyle = window.getComputedStyle(el);
        var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
        var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
        var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
        var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
        var scrollbarLeftRight = sanitizeScrollbarWidth(el.offsetWidth - el.clientWidth - borderLeft - borderRight);
        var scrollbarBottom = sanitizeScrollbarWidth(el.offsetHeight - el.clientHeight - borderTop - borderBottom);
        var res = {
            borderLeft: borderLeft,
            borderRight: borderRight,
            borderTop: borderTop,
            borderBottom: borderBottom,
            scrollbarBottom: scrollbarBottom,
            scrollbarLeft: 0,
            scrollbarRight: 0
        };
        if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
            res.scrollbarLeft = scrollbarLeftRight;
        }
        else {
            res.scrollbarRight = scrollbarLeftRight;
        }
        if (getPadding) {
            res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
            res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
            res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
            res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
        }
        return res;
    }
    function computeInnerRect(el, goWithinPadding) {
        if (goWithinPadding === void 0) { goWithinPadding = false; }
        var outerRect = computeRect(el);
        var edges = computeEdges(el, goWithinPadding);
        var res = {
            left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
            right: outerRect.right - edges.borderRight - edges.scrollbarRight,
            top: outerRect.top + edges.borderTop,
            bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
        };
        if (goWithinPadding) {
            res.left += edges.paddingLeft;
            res.right -= edges.paddingRight;
            res.top += edges.paddingTop;
            res.bottom -= edges.paddingBottom;
        }
        return res;
    }
    function computeRect(el) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            right: rect.right + window.pageXOffset,
            bottom: rect.bottom + window.pageYOffset
        };
    }
    function computeViewportRect() {
        return {
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
    }
    function computeHeightAndMargins(el) {
        var computed = window.getComputedStyle(el);
        return el.getBoundingClientRect().height +
            parseInt(computed.marginTop, 10) +
            parseInt(computed.marginBottom, 10);
    }
    // does not return window
    function getClippingParents(el) {
        var parents = [];
        while (el instanceof HTMLElement) { // will stop when gets to document or null
            var computedStyle = window.getComputedStyle(el);
            if (computedStyle.position === 'fixed') {
                break;
            }
            if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
                parents.push(el);
            }
            el = el.parentNode;
        }
        return parents;
    }
    function computeClippingRect(el) {
        return getClippingParents(el)
            .map(function (el) {
            return computeInnerRect(el);
        })
            .concat(computeViewportRect())
            .reduce(function (rect0, rect1) {
            return intersectRects(rect0, rect1) || rect1; // should always intersect
        });
    }

    // Stops a mouse/touch event from doing it's native browser action
    function preventDefault(ev) {
        ev.preventDefault();
    }
    // Event Delegation
    // ----------------------------------------------------------------------------------------------------------------
    function listenBySelector(container, eventType, selector, handler) {
        function realHandler(ev) {
            var matchedChild = elementClosest(ev.target, selector);
            if (matchedChild) {
                handler.call(matchedChild, ev, matchedChild);
            }
        }
        container.addEventListener(eventType, realHandler);
        return function () {
            container.removeEventListener(eventType, realHandler);
        };
    }
    function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
        var currentMatchedChild;
        return listenBySelector(container, 'mouseover', selector, function (ev, matchedChild) {
            if (matchedChild !== currentMatchedChild) {
                currentMatchedChild = matchedChild;
                onMouseEnter(ev, matchedChild);
                var realOnMouseLeave_1 = function (ev) {
                    currentMatchedChild = null;
                    onMouseLeave(ev, matchedChild);
                    matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
                };
                // listen to the next mouseleave, and then unattach
                matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
            }
        });
    }
    // Animation
    // ----------------------------------------------------------------------------------------------------------------
    var transitionEventNames = [
        'webkitTransitionEnd',
        'otransitionend',
        'oTransitionEnd',
        'msTransitionEnd',
        'transitionend'
    ];
    // triggered only when the next single subsequent transition finishes
    function whenTransitionDone(el, callback) {
        var realCallback = function (ev) {
            callback(ev);
            transitionEventNames.forEach(function (eventName) {
                el.removeEventListener(eventName, realCallback);
            });
        };
        transitionEventNames.forEach(function (eventName) {
            el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
        });
    }

    var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    // Adding
    function addWeeks(m, n) {
        var a = dateToUtcArray(m);
        a[2] += n * 7;
        return arrayToUtcDate(a);
    }
    function addDays(m, n) {
        var a = dateToUtcArray(m);
        a[2] += n;
        return arrayToUtcDate(a);
    }
    function addMs(m, n) {
        var a = dateToUtcArray(m);
        a[6] += n;
        return arrayToUtcDate(a);
    }
    // Diffing (all return floats)
    function diffWeeks(m0, m1) {
        return diffDays(m0, m1) / 7;
    }
    function diffDays(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
    }
    function diffHours(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
    }
    function diffMinutes(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
    }
    function diffSeconds(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / 1000;
    }
    function diffDayAndTime(m0, m1) {
        var m0day = startOfDay(m0);
        var m1day = startOfDay(m1);
        return {
            years: 0,
            months: 0,
            days: Math.round(diffDays(m0day, m1day)),
            milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf())
        };
    }
    // Diffing Whole Units
    function diffWholeWeeks(m0, m1) {
        var d = diffWholeDays(m0, m1);
        if (d !== null && d % 7 === 0) {
            return d / 7;
        }
        return null;
    }
    function diffWholeDays(m0, m1) {
        if (timeAsMs(m0) === timeAsMs(m1)) {
            return Math.round(diffDays(m0, m1));
        }
        return null;
    }
    // Start-Of
    function startOfDay(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate()
        ]);
    }
    function startOfHour(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours()
        ]);
    }
    function startOfMinute(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes()
        ]);
    }
    function startOfSecond(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes(),
            m.getUTCSeconds()
        ]);
    }
    // Week Computation
    function weekOfYear(marker, dow, doy) {
        var y = marker.getUTCFullYear();
        var w = weekOfGivenYear(marker, y, dow, doy);
        if (w < 1) {
            return weekOfGivenYear(marker, y - 1, dow, doy);
        }
        var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
        if (nextW >= 1) {
            return Math.min(w, nextW);
        }
        return w;
    }
    function weekOfGivenYear(marker, year, dow, doy) {
        var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
        var dayStart = startOfDay(marker);
        var days = Math.round(diffDays(firstWeekStart, dayStart));
        return Math.floor(days / 7) + 1; // zero-indexed
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        var fwd = 7 + dow - doy;
        // first-week day local weekday -- which local weekday is fwd
        var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // Array Conversion
    function dateToLocalArray(date) {
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
    }
    function arrayToLocalDate(a) {
        return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
        a[3] || 0, a[4] || 0, a[5] || 0);
    }
    function dateToUtcArray(date) {
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds()
        ];
    }
    function arrayToUtcDate(a) {
        // according to web standards (and Safari), a month index is required.
        // massage if only given a year.
        if (a.length === 1) {
            a = a.concat([0]);
        }
        return new Date(Date.UTC.apply(Date, a));
    }
    // Other Utils
    function isValidDate(m) {
        return !isNaN(m.valueOf());
    }
    function timeAsMs(m) {
        return m.getUTCHours() * 1000 * 60 * 60 +
            m.getUTCMinutes() * 1000 * 60 +
            m.getUTCSeconds() * 1000 +
            m.getUTCMilliseconds();
    }

    var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
    var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    // Parsing and Creation
    function createDuration(input, unit) {
        var _a;
        if (typeof input === 'string') {
            return parseString(input);
        }
        else if (typeof input === 'object' && input) { // non-null object
            return normalizeObject(input);
        }
        else if (typeof input === 'number') {
            return normalizeObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
        }
        else {
            return null;
        }
    }
    function parseString(s) {
        var m = PARSE_RE.exec(s);
        if (m) {
            var sign = m[1] ? -1 : 1;
            return {
                years: 0,
                months: 0,
                days: sign * (m[2] ? parseInt(m[2], 10) : 0),
                milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                    (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                    (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                    (m[6] ? parseInt(m[6], 10) : 0) // ms
                )
            };
        }
        return null;
    }
    function normalizeObject(obj) {
        return {
            years: obj.years || obj.year || 0,
            months: obj.months || obj.month || 0,
            days: (obj.days || obj.day || 0) +
                getWeeksFromInput(obj) * 7,
            milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
                (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
                (obj.seconds || obj.second || 0) * 1000 + // seconds
                (obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
        };
    }
    function getWeeksFromInput(obj) {
        return obj.weeks || obj.week || 0;
    }
    // Equality
    function durationsEqual(d0, d1) {
        return d0.years === d1.years &&
            d0.months === d1.months &&
            d0.days === d1.days &&
            d0.milliseconds === d1.milliseconds;
    }
    function isSingleDay(dur) {
        return dur.years === 0 && dur.months === 0 && dur.days === 1 && dur.milliseconds === 0;
    }
    // Simple Math
    function addDurations(d0, d1) {
        return {
            years: d0.years + d1.years,
            months: d0.months + d1.months,
            days: d0.days + d1.days,
            milliseconds: d0.milliseconds + d1.milliseconds
        };
    }
    function subtractDurations(d1, d0) {
        return {
            years: d1.years - d0.years,
            months: d1.months - d0.months,
            days: d1.days - d0.days,
            milliseconds: d1.milliseconds - d0.milliseconds
        };
    }
    function multiplyDuration(d, n) {
        return {
            years: d.years * n,
            months: d.months * n,
            days: d.days * n,
            milliseconds: d.milliseconds * n
        };
    }
    // Conversions
    // "Rough" because they are based on average-case Gregorian months/years
    function asRoughYears(dur) {
        return asRoughDays(dur) / 365;
    }
    function asRoughMonths(dur) {
        return asRoughDays(dur) / 30;
    }
    function asRoughDays(dur) {
        return asRoughMs(dur) / 864e5;
    }
    function asRoughMinutes(dur) {
        return asRoughMs(dur) / (1000 * 60);
    }
    function asRoughSeconds(dur) {
        return asRoughMs(dur) / 1000;
    }
    function asRoughMs(dur) {
        return dur.years * (365 * 864e5) +
            dur.months * (30 * 864e5) +
            dur.days * 864e5 +
            dur.milliseconds;
    }
    // Advanced Math
    function wholeDivideDurations(numerator, denominator) {
        var res = null;
        for (var i = 0; i < INTERNAL_UNITS.length; i++) {
            var unit = INTERNAL_UNITS[i];
            if (denominator[unit]) {
                var localRes = numerator[unit] / denominator[unit];
                if (!isInt(localRes) || (res !== null && res !== localRes)) {
                    return null;
                }
                res = localRes;
            }
            else if (numerator[unit]) {
                // needs to divide by something but can't!
                return null;
            }
        }
        return res;
    }
    function greatestDurationDenominator(dur, dontReturnWeeks) {
        var ms = dur.milliseconds;
        if (ms) {
            if (ms % 1000 !== 0) {
                return { unit: 'millisecond', value: ms };
            }
            if (ms % (1000 * 60) !== 0) {
                return { unit: 'second', value: ms / 1000 };
            }
            if (ms % (1000 * 60 * 60) !== 0) {
                return { unit: 'minute', value: ms / (1000 * 60) };
            }
            if (ms) {
                return { unit: 'hour', value: ms / (1000 * 60 * 60) };
            }
        }
        if (dur.days) {
            if (!dontReturnWeeks && dur.days % 7 === 0) {
                return { unit: 'week', value: dur.days / 7 };
            }
            return { unit: 'day', value: dur.days };
        }
        if (dur.months) {
            return { unit: 'month', value: dur.months };
        }
        if (dur.years) {
            return { unit: 'year', value: dur.years };
        }
        return { unit: 'millisecond', value: 0 };
    }

    /* FullCalendar-specific DOM Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    // Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
    // and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
    function compensateScroll(rowEl, scrollbarWidths) {
        if (scrollbarWidths.left) {
            applyStyle(rowEl, {
                borderLeftWidth: 1,
                marginLeft: scrollbarWidths.left - 1
            });
        }
        if (scrollbarWidths.right) {
            applyStyle(rowEl, {
                borderRightWidth: 1,
                marginRight: scrollbarWidths.right - 1
            });
        }
    }
    // Undoes compensateScroll and restores all borders/margins
    function uncompensateScroll(rowEl) {
        applyStyle(rowEl, {
            marginLeft: '',
            marginRight: '',
            borderLeftWidth: '',
            borderRightWidth: ''
        });
    }
    // Make the mouse cursor express that an event is not allowed in the current area
    function disableCursor() {
        document.body.classList.add('fc-not-allowed');
    }
    // Returns the mouse cursor to its original look
    function enableCursor() {
        document.body.classList.remove('fc-not-allowed');
    }
    // Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
    // By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
    // any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and
    // reduces the available height.
    function distributeHeight(els, availableHeight, shouldRedistribute) {
        // *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
        // and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
        var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
        var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
        var flexEls = []; // elements that are allowed to expand. array of DOM nodes
        var flexOffsets = []; // amount of vertical space it takes up
        var flexHeights = []; // actual css height
        var usedHeight = 0;
        undistributeHeight(els); // give all elements their natural height
        // find elements that are below the recommended height (expandable).
        // important to query for heights in a single first pass (to avoid reflow oscillation).
        els.forEach(function (el, i) {
            var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
            var naturalOffset = computeHeightAndMargins(el);
            if (naturalOffset < minOffset) {
                flexEls.push(el);
                flexOffsets.push(naturalOffset);
                flexHeights.push(el.offsetHeight);
            }
            else {
                // this element stretches past recommended height (non-expandable). mark the space as occupied.
                usedHeight += naturalOffset;
            }
        });
        // readjust the recommended height to only consider the height available to non-maxed-out rows.
        if (shouldRedistribute) {
            availableHeight -= usedHeight;
            minOffset1 = Math.floor(availableHeight / flexEls.length);
            minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
        }
        // assign heights to all expandable elements
        flexEls.forEach(function (el, i) {
            var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
            var naturalOffset = flexOffsets[i];
            var naturalHeight = flexHeights[i];
            var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
            if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
                el.style.height = newHeight + 'px';
            }
        });
    }
    // Undoes distrubuteHeight, restoring all els to their natural height
    function undistributeHeight(els) {
        els.forEach(function (el) {
            el.style.height = '';
        });
    }
    // Given `els`, a set of <td> cells, find the cell with the largest natural width and set the widths of all the
    // cells to be that width.
    // PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
    function matchCellWidths(els) {
        var maxInnerWidth = 0;
        els.forEach(function (el) {
            var innerEl = el.firstChild; // hopefully an element
            if (innerEl instanceof HTMLElement) {
                var innerWidth_1 = innerEl.offsetWidth;
                if (innerWidth_1 > maxInnerWidth) {
                    maxInnerWidth = innerWidth_1;
                }
            }
        });
        maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
        els.forEach(function (el) {
            el.style.width = maxInnerWidth + 'px';
        });
        return maxInnerWidth;
    }
    // Given one element that resides inside another,
    // Subtracts the height of the inner element from the outer element.
    function subtractInnerElHeight(outerEl, innerEl) {
        // effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
        var reflowStyleProps = {
            position: 'relative',
            left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
        };
        applyStyle(outerEl, reflowStyleProps);
        applyStyle(innerEl, reflowStyleProps);
        var diff = outerEl.offsetHeight - innerEl.offsetHeight; // grab the dimensions
        // undo hack
        var resetStyleProps = { position: '', left: '' };
        applyStyle(outerEl, resetStyleProps);
        applyStyle(innerEl, resetStyleProps);
        return diff;
    }
    /* Selection
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventSelection(el) {
        el.classList.add('fc-unselectable');
        el.addEventListener('selectstart', preventDefault);
    }
    function allowSelection(el) {
        el.classList.remove('fc-unselectable');
        el.removeEventListener('selectstart', preventDefault);
    }
    /* Context Menu
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventContextMenu(el) {
        el.addEventListener('contextmenu', preventDefault);
    }
    function allowContextMenu(el) {
        el.removeEventListener('contextmenu', preventDefault);
    }
    /* Object Ordering by Field
    ----------------------------------------------------------------------------------------------------------------------*/
    function parseFieldSpecs(input) {
        var specs = [];
        var tokens = [];
        var i;
        var token;
        if (typeof input === 'string') {
            tokens = input.split(/\s*,\s*/);
        }
        else if (typeof input === 'function') {
            tokens = [input];
        }
        else if (Array.isArray(input)) {
            tokens = input;
        }
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            if (typeof token === 'string') {
                specs.push(token.charAt(0) === '-' ?
                    { field: token.substring(1), order: -1 } :
                    { field: token, order: 1 });
            }
            else if (typeof token === 'function') {
                specs.push({ func: token });
            }
        }
        return specs;
    }
    function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
        var i;
        var cmp;
        for (i = 0; i < fieldSpecs.length; i++) {
            cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
            if (cmp) {
                return cmp;
            }
        }
        return 0;
    }
    function compareByFieldSpec(obj0, obj1, fieldSpec) {
        if (fieldSpec.func) {
            return fieldSpec.func(obj0, obj1);
        }
        return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
            * (fieldSpec.order || 1);
    }
    function flexibleCompare(a, b) {
        if (!a && !b) {
            return 0;
        }
        if (b == null) {
            return -1;
        }
        if (a == null) {
            return 1;
        }
        if (typeof a === 'string' || typeof b === 'string') {
            return String(a).localeCompare(String(b));
        }
        return a - b;
    }
    /* String Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function capitaliseFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function padStart(val, len) {
        var s = String(val);
        return '000'.substr(0, len - s.length) + s;
    }
    /* Number Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function compareNumbers(a, b) {
        return a - b;
    }
    function isInt(n) {
        return n % 1 === 0;
    }
    /* Weird Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function applyAll(functions, thisObj, args) {
        if (typeof functions === 'function') { // supplied a single function
            functions = [functions];
        }
        if (functions) {
            var i = void 0;
            var ret = void 0;
            for (i = 0; i < functions.length; i++) {
                ret = functions[i].apply(thisObj, args) || ret;
            }
            return ret;
        }
    }
    function firstDefined() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            if (args[i] !== undefined) {
                return args[i];
            }
        }
    }
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    // https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
    function debounce(func, wait) {
        var timeout;
        var args;
        var context;
        var timestamp;
        var result;
        var later = function () {
            var last = new Date().valueOf() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                result = func.apply(context, args);
                context = args = null;
            }
        };
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date().valueOf();
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            return result;
        };
    }
    // Number and Boolean are only types that defaults or not computed for
    // TODO: write more comments
    function refineProps(rawProps, processors, defaults, leftoverProps) {
        if (defaults === void 0) { defaults = {}; }
        var refined = {};
        for (var key in processors) {
            var processor = processors[key];
            if (rawProps[key] !== undefined) {
                // found
                if (processor === Function) {
                    refined[key] = typeof rawProps[key] === 'function' ? rawProps[key] : null;
                }
                else if (processor) { // a refining function?
                    refined[key] = processor(rawProps[key]);
                }
                else {
                    refined[key] = rawProps[key];
                }
            }
            else if (defaults[key] !== undefined) {
                // there's an explicit default
                refined[key] = defaults[key];
            }
            else {
                // must compute a default
                if (processor === String) {
                    refined[key] = ''; // empty string is default for String
                }
                else if (!processor || processor === Number || processor === Boolean || processor === Function) {
                    refined[key] = null; // assign null for other non-custom processor funcs
                }
                else {
                    refined[key] = processor(null); // run the custom processor func
                }
            }
        }
        if (leftoverProps) {
            for (var key in rawProps) {
                if (processors[key] === undefined) {
                    leftoverProps[key] = rawProps[key];
                }
            }
        }
        return refined;
    }
    /*
    Get a snapshot of an object, so we can compare it to later revisions.
    Intentionally only works with arrays, jaja
    */
    function freezeRaw(raw) {
        if (Array.isArray(raw)) {
            return Array.prototype.slice.call(raw);
        }
        return raw;
    }
    /* Date stuff that doesn't belong in datelib core
    ----------------------------------------------------------------------------------------------------------------------*/
    // given a timed range, computes an all-day range that has the same exact duration,
    // but whose start time is aligned with the start of the day.
    function computeAlignedDayRange(timedRange) {
        var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
        var start = startOfDay(timedRange.start);
        var end = addDays(start, dayCnt);
        return { start: start, end: end };
    }
    // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
    // TODO: give nextDayThreshold a default arg
    function computeVisibleDayRange(timedRange, nextDayThreshold) {
        if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
        var startDay = null;
        var endDay = null;
        if (timedRange.end) {
            endDay = startOfDay(timedRange.end);
            var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
            // If the end time is actually inclusively part of the next day and is equal to or
            // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
            // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
            if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
                endDay = addDays(endDay, 1);
            }
        }
        if (timedRange.start) {
            startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
            // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
            if (endDay && endDay <= startDay) {
                endDay = addDays(startDay, 1);
            }
        }
        return { start: startDay, end: endDay };
    }
    // spans from one day into another?
    function isMultiDayRange(range) {
        var visibleRange = computeVisibleDayRange(range);
        return diffDays(visibleRange.start, visibleRange.end) > 1;
    }
    function diffDates(date0, date1, dateEnv, largeUnit) {
        if (largeUnit === 'year') {
            return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
        }
        else if (largeUnit === 'month') {
            return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
        }
        else {
            return diffDayAndTime(date0, date1); // returns a duration
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function parseRecurring(eventInput, allDayDefault, dateEnv, recurringTypes, leftovers) {
        for (var i = 0; i < recurringTypes.length; i++) {
            var localLeftovers = {};
            var parsed = recurringTypes[i].parse(eventInput, localLeftovers, dateEnv);
            if (parsed) {
                var allDay = localLeftovers.allDay;
                delete localLeftovers.allDay; // remove from leftovers
                if (allDay == null) {
                    allDay = allDayDefault;
                    if (allDay == null) {
                        allDay = parsed.allDayGuess;
                        if (allDay == null) {
                            allDay = false;
                        }
                    }
                }
                __assign(leftovers, localLeftovers);
                return {
                    allDay: allDay,
                    duration: parsed.duration,
                    typeData: parsed.typeData,
                    typeId: i
                };
            }
        }
        return null;
    }
    /*
    Event MUST have a recurringDef
    */
    function expandRecurringRanges(eventDef, framingRange, dateEnv, recurringTypes) {
        var typeDef = recurringTypes[eventDef.recurringDef.typeId];
        var markers = typeDef.expand(eventDef.recurringDef.typeData, framingRange, dateEnv);
        // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
        if (eventDef.allDay) {
            markers = markers.map(startOfDay);
        }
        return markers;
    }

    // Merges an array of objects into a single object.
    // The second argument allows for an array of property names who's object values will be merged together.
    function mergeProps(propObjs, complexProps) {
        var dest = {};
        var i;
        var name;
        var complexObjs;
        var j;
        var val;
        var props;
        if (complexProps) {
            for (i = 0; i < complexProps.length; i++) {
                name = complexProps[i];
                complexObjs = [];
                // collect the trailing object values, stopping when a non-object is discovered
                for (j = propObjs.length - 1; j >= 0; j--) {
                    val = propObjs[j][name];
                    if (typeof val === 'object' && val) { // non-null object
                        complexObjs.unshift(val);
                    }
                    else if (val !== undefined) {
                        dest[name] = val; // if there were no objects, this value will be used
                        break;
                    }
                }
                // if the trailing values were objects, use the merged value
                if (complexObjs.length) {
                    dest[name] = mergeProps(complexObjs);
                }
            }
        }
        // copy values into the destination, going from last to first
        for (i = propObjs.length - 1; i >= 0; i--) {
            props = propObjs[i];
            for (name in props) {
                if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                    dest[name] = props[name];
                }
            }
        }
        return dest;
    }
    function filterHash(hash, func) {
        var filtered = {};
        for (var key in hash) {
            if (func(hash[key], key)) {
                filtered[key] = hash[key];
            }
        }
        return filtered;
    }
    function mapHash(hash, func) {
        var newHash = {};
        for (var key in hash) {
            newHash[key] = func(hash[key], key);
        }
        return newHash;
    }
    function arrayToHash(a) {
        var hash = {};
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var item = a_1[_i];
            hash[item] = true;
        }
        return hash;
    }
    function hashValuesToArray(obj) {
        var a = [];
        for (var key in obj) {
            a.push(obj[key]);
        }
        return a;
    }

    function parseEvents(rawEvents, sourceId, calendar, allowOpenRange) {
        var eventStore = createEmptyEventStore();
        for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
            var rawEvent = rawEvents_1[_i];
            var tuple = parseEvent(rawEvent, sourceId, calendar, allowOpenRange);
            if (tuple) {
                eventTupleToStore(tuple, eventStore);
            }
        }
        return eventStore;
    }
    function eventTupleToStore(tuple, eventStore) {
        if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
        eventStore.defs[tuple.def.defId] = tuple.def;
        if (tuple.instance) {
            eventStore.instances[tuple.instance.instanceId] = tuple.instance;
        }
        return eventStore;
    }
    function expandRecurring(eventStore, framingRange, calendar) {
        var dateEnv = calendar.dateEnv;
        var defs = eventStore.defs, instances = eventStore.instances;
        // remove existing recurring instances
        instances = filterHash(instances, function (instance) {
            return !defs[instance.defId].recurringDef;
        });
        for (var defId in defs) {
            var def = defs[defId];
            if (def.recurringDef) {
                var starts = expandRecurringRanges(def, framingRange, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes);
                var duration = def.recurringDef.duration;
                if (!duration) {
                    duration = def.allDay ?
                        calendar.defaultAllDayEventDuration :
                        calendar.defaultTimedEventDuration;
                }
                for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
                    var start = starts_1[_i];
                    var instance = createEventInstance(defId, {
                        start: start,
                        end: dateEnv.add(start, duration)
                    });
                    instances[instance.instanceId] = instance;
                }
            }
        }
        return { defs: defs, instances: instances };
    }
    // retrieves events that have the same groupId as the instance specified by `instanceId`
    // or they are the same as the instance.
    // why might instanceId not be in the store? an event from another calendar?
    function getRelevantEvents(eventStore, instanceId) {
        var instance = eventStore.instances[instanceId];
        if (instance) {
            var def_1 = eventStore.defs[instance.defId];
            // get events/instances with same group
            var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
                return isEventDefsGrouped(def_1, lookDef);
            });
            // add the original
            // TODO: wish we could use eventTupleToStore or something like it
            newStore.defs[def_1.defId] = def_1;
            newStore.instances[instance.instanceId] = instance;
            return newStore;
        }
        return createEmptyEventStore();
    }
    function isEventDefsGrouped(def0, def1) {
        return Boolean(def0.groupId && def0.groupId === def1.groupId);
    }
    function transformRawEvents(rawEvents, eventSource, calendar) {
        var calEachTransform = calendar.opt('eventDataTransform');
        var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
        if (sourceEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
        }
        if (calEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
        }
        return rawEvents;
    }
    function transformEachRawEvent(rawEvents, func) {
        var refinedEvents;
        if (!func) {
            refinedEvents = rawEvents;
        }
        else {
            refinedEvents = [];
            for (var _i = 0, rawEvents_2 = rawEvents; _i < rawEvents_2.length; _i++) {
                var rawEvent = rawEvents_2[_i];
                var refinedEvent = func(rawEvent);
                if (refinedEvent) {
                    refinedEvents.push(refinedEvent);
                }
                else if (refinedEvent == null) {
                    refinedEvents.push(rawEvent);
                } // if a different falsy value, do nothing
            }
        }
        return refinedEvents;
    }
    function createEmptyEventStore() {
        return { defs: {}, instances: {} };
    }
    function mergeEventStores(store0, store1) {
        return {
            defs: __assign({}, store0.defs, store1.defs),
            instances: __assign({}, store0.instances, store1.instances)
        };
    }
    function filterEventStoreDefs(eventStore, filterFunc) {
        var defs = filterHash(eventStore.defs, filterFunc);
        var instances = filterHash(eventStore.instances, function (instance) {
            return defs[instance.defId]; // still exists?
        });
        return { defs: defs, instances: instances };
    }

    function parseRange(input, dateEnv) {
        var start = null;
        var end = null;
        if (input.start) {
            start = dateEnv.createMarker(input.start);
        }
        if (input.end) {
            end = dateEnv.createMarker(input.end);
        }
        if (!start && !end) {
            return null;
        }
        if (start && end && end < start) {
            return null;
        }
        return { start: start, end: end };
    }
    // SIDE-EFFECT: will mutate ranges.
    // Will return a new array result.
    function invertRanges(ranges, constraintRange) {
        var invertedRanges = [];
        var start = constraintRange.start; // the end of the previous range. the start of the new range
        var i;
        var dateRange;
        // ranges need to be in order. required for our date-walking algorithm
        ranges.sort(compareRanges);
        for (i = 0; i < ranges.length; i++) {
            dateRange = ranges[i];
            // add the span of time before the event (if there is any)
            if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
                invertedRanges.push({ start: start, end: dateRange.start });
            }
            if (dateRange.end > start) {
                start = dateRange.end;
            }
        }
        // add the span of time after the last event (if there is any)
        if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start: start, end: constraintRange.end });
        }
        return invertedRanges;
    }
    function compareRanges(range0, range1) {
        return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
    }
    function intersectRanges(range0, range1) {
        var start = range0.start;
        var end = range0.end;
        var newRange = null;
        if (range1.start !== null) {
            if (start === null) {
                start = range1.start;
            }
            else {
                start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
            }
        }
        if (range1.end != null) {
            if (end === null) {
                end = range1.end;
            }
            else {
                end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
            }
        }
        if (start === null || end === null || start < end) {
            newRange = { start: start, end: end };
        }
        return newRange;
    }
    function rangesEqual(range0, range1) {
        return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
            (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
    }
    function rangesIntersect(range0, range1) {
        return (range0.end === null || range1.start === null || range0.end > range1.start) &&
            (range0.start === null || range1.end === null || range0.start < range1.end);
    }
    function rangeContainsRange(outerRange, innerRange) {
        return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
            (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
    }
    function rangeContainsMarker(range, date) {
        return (range.start === null || date >= range.start) &&
            (range.end === null || date < range.end);
    }
    // If the given date is not within the given range, move it inside.
    // (If it's past the end, make it one millisecond before the end).
    function constrainMarkerToRange(date, range) {
        if (range.start != null && date < range.start) {
            return range.start;
        }
        if (range.end != null && date >= range.end) {
            return new Date(range.end.valueOf() - 1);
        }
        return date;
    }

    function removeExact(array, exactVal) {
        var removeCnt = 0;
        var i = 0;
        while (i < array.length) {
            if (array[i] === exactVal) {
                array.splice(i, 1);
                removeCnt++;
            }
            else {
                i++;
            }
        }
        return removeCnt;
    }
    function isArraysEqual(a0, a1) {
        var len = a0.length;
        var i;
        if (len !== a1.length) { // not array? or not same length?
            return false;
        }
        for (i = 0; i < len; i++) {
            if (a0[i] !== a1[i]) {
                return false;
            }
        }
        return true;
    }

    function memoize(workerFunc) {
        var args;
        var res;
        return function () {
            if (!args || !isArraysEqual(args, arguments)) {
                args = arguments;
                res = workerFunc.apply(this, arguments);
            }
            return res;
        };
    }
    /*
    always executes the workerFunc, but if the result is equal to the previous result,
    return the previous result instead.
    */
    function memoizeOutput(workerFunc, equalityFunc) {
        var cachedRes = null;
        return function () {
            var newRes = workerFunc.apply(this, arguments);
            if (cachedRes === null || !(cachedRes === newRes || equalityFunc(cachedRes, newRes))) {
                cachedRes = newRes;
            }
            return cachedRes;
        };
    }

    var EXTENDED_SETTINGS_AND_SEVERITIES = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0
    };
    var STANDARD_DATE_PROP_SEVERITIES = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1
    };
    var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
    var COMMA_RE = /,/g; // we need re for globalness
    var MULTI_SPACE_RE = /\s+/g;
    var LTR_RE = /\u200e/g; // control character
    var UTC_RE = /UTC|GMT/;
    var NativeFormatter = /** @class */ (function () {
        function NativeFormatter(formatSettings) {
            var standardDateProps = {};
            var extendedSettings = {};
            var severity = 0;
            for (var name_1 in formatSettings) {
                if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
                    extendedSettings[name_1] = formatSettings[name_1];
                    severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
                }
                else {
                    standardDateProps[name_1] = formatSettings[name_1];
                    if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
                        severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
                    }
                }
            }
            this.standardDateProps = standardDateProps;
            this.extendedSettings = extendedSettings;
            this.severity = severity;
            this.buildFormattingFunc = memoize(buildFormattingFunc);
        }
        NativeFormatter.prototype.format = function (date, context) {
            return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
        };
        NativeFormatter.prototype.formatRange = function (start, end, context) {
            var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
            var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
            if (!diffSeverity) {
                return this.format(start, context);
            }
            var biggestUnitForPartial = diffSeverity;
            if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
                (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
                (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
                (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
                biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
            }
            var full0 = this.format(start, context);
            var full1 = this.format(end, context);
            if (full0 === full1) {
                return full0;
            }
            var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
            var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
            var partial0 = partialFormattingFunc(start);
            var partial1 = partialFormattingFunc(end);
            var insertion = findCommonInsertion(full0, partial0, full1, partial1);
            var separator = extendedSettings.separator || '';
            if (insertion) {
                return insertion.before + partial0 + separator + partial1 + insertion.after;
            }
            return full0 + separator + full1;
        };
        NativeFormatter.prototype.getLargestUnit = function () {
            switch (this.severity) {
                case 7:
                case 6:
                case 5:
                    return 'year';
                case 4:
                    return 'month';
                case 3:
                    return 'week';
                default:
                    return 'day';
            }
        };
        return NativeFormatter;
    }());
    function buildFormattingFunc(standardDateProps, extendedSettings, context) {
        var standardDatePropCnt = Object.keys(standardDateProps).length;
        if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
            return function (date) {
                return formatTimeZoneOffset(date.timeZoneOffset);
            };
        }
        if (standardDatePropCnt === 0 && extendedSettings.week) {
            return function (date) {
                return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekLabel, context.locale, extendedSettings.week);
            };
        }
        return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
    }
    function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
        standardDateProps = __assign({}, standardDateProps); // copy
        extendedSettings = __assign({}, extendedSettings); // copy
        sanitizeSettings(standardDateProps, extendedSettings);
        standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
        var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
        var zeroFormat; // needed?
        if (extendedSettings.omitZeroMinute) {
            var zeroProps = __assign({}, standardDateProps);
            delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
            zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
        }
        return function (date) {
            var marker = date.marker;
            var format;
            if (zeroFormat && !marker.getUTCMinutes()) {
                format = zeroFormat;
            }
            else {
                format = normalFormat;
            }
            var s = format.format(marker);
            return postProcess(s, date, standardDateProps, extendedSettings, context);
        };
    }
    function sanitizeSettings(standardDateProps, extendedSettings) {
        // deal with a browser inconsistency where formatting the timezone
        // requires that the hour/minute be present.
        if (standardDateProps.timeZoneName) {
            if (!standardDateProps.hour) {
                standardDateProps.hour = '2-digit';
            }
            if (!standardDateProps.minute) {
                standardDateProps.minute = '2-digit';
            }
        }
        // only support short timezone names
        if (standardDateProps.timeZoneName === 'long') {
            standardDateProps.timeZoneName = 'short';
        }
        // if requesting to display seconds, MUST display minutes
        if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
            delete extendedSettings.omitZeroMinute;
        }
    }
    function postProcess(s, date, standardDateProps, extendedSettings, context) {
        s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
        if (standardDateProps.timeZoneName === 'short') {
            s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
                'UTC' : // important to normalize for IE, which does "GMT"
                formatTimeZoneOffset(date.timeZoneOffset));
        }
        if (extendedSettings.omitCommas) {
            s = s.replace(COMMA_RE, '').trim();
        }
        if (extendedSettings.omitZeroMinute) {
            s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
        }
        // ^ do anything that might create adjacent spaces before this point,
        // because MERIDIEM_RE likes to eat up loading spaces
        if (extendedSettings.meridiem === false) {
            s = s.replace(MERIDIEM_RE, '').trim();
        }
        else if (extendedSettings.meridiem === 'narrow') { // a/p
            s = s.replace(MERIDIEM_RE, function (m0, m1) {
                return m1.toLocaleLowerCase();
            });
        }
        else if (extendedSettings.meridiem === 'short') { // am/pm
            s = s.replace(MERIDIEM_RE, function (m0, m1) {
                return m1.toLocaleLowerCase() + 'm';
            });
        }
        else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
            s = s.replace(MERIDIEM_RE, function (m0) {
                return m0.toLocaleLowerCase();
            });
        }
        s = s.replace(MULTI_SPACE_RE, ' ');
        s = s.trim();
        return s;
    }
    function injectTzoStr(s, tzoStr) {
        var replaced = false;
        s = s.replace(UTC_RE, function () {
            replaced = true;
            return tzoStr;
        });
        // IE11 doesn't include UTC/GMT in the original string, so append to end
        if (!replaced) {
            s += ' ' + tzoStr;
        }
        return s;
    }
    function formatWeekNumber(num, weekLabel, locale, display) {
        var parts = [];
        if (display === 'narrow') {
            parts.push(weekLabel);
        }
        else if (display === 'short') {
            parts.push(weekLabel, ' ');
        }
        // otherwise, considered 'numeric'
        parts.push(locale.simpleNumberFormat.format(num));
        if (locale.options.isRtl) { // TODO: use control characters instead?
            parts.reverse();
        }
        return parts.join('');
    }
    // Range Formatting Utils
    // 0 = exactly the same
    // 1 = different by time
    // and bigger
    function computeMarkerDiffSeverity(d0, d1, ca) {
        if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
            return 5;
        }
        if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
            return 4;
        }
        if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
            return 2;
        }
        if (timeAsMs(d0) !== timeAsMs(d1)) {
            return 1;
        }
        return 0;
    }
    function computePartialFormattingOptions(options, biggestUnit) {
        var partialOptions = {};
        for (var name_2 in options) {
            if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
                STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
                partialOptions[name_2] = options[name_2];
            }
        }
        return partialOptions;
    }
    function findCommonInsertion(full0, partial0, full1, partial1) {
        var i0 = 0;
        while (i0 < full0.length) {
            var found0 = full0.indexOf(partial0, i0);
            if (found0 === -1) {
                break;
            }
            var before0 = full0.substr(0, found0);
            i0 = found0 + partial0.length;
            var after0 = full0.substr(i0);
            var i1 = 0;
            while (i1 < full1.length) {
                var found1 = full1.indexOf(partial1, i1);
                if (found1 === -1) {
                    break;
                }
                var before1 = full1.substr(0, found1);
                i1 = found1 + partial1.length;
                var after1 = full1.substr(i1);
                if (before0 === before1 && after0 === after1) {
                    return {
                        before: before0,
                        after: after0
                    };
                }
            }
        }
        return null;
    }

    /*
    TODO: fix the terminology of "formatter" vs "formatting func"
    */
    /*
    At the time of instantiation, this object does not know which cmd-formatting system it will use.
    It receives this at the time of formatting, as a setting.
    */
    var CmdFormatter = /** @class */ (function () {
        function CmdFormatter(cmdStr, separator) {
            this.cmdStr = cmdStr;
            this.separator = separator;
        }
        CmdFormatter.prototype.format = function (date, context) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, this.separator));
        };
        CmdFormatter.prototype.formatRange = function (start, end, context) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, this.separator));
        };
        return CmdFormatter;
    }());

    var FuncFormatter = /** @class */ (function () {
        function FuncFormatter(func) {
            this.func = func;
        }
        FuncFormatter.prototype.format = function (date, context) {
            return this.func(createVerboseFormattingArg(date, null, context));
        };
        FuncFormatter.prototype.formatRange = function (start, end, context) {
            return this.func(createVerboseFormattingArg(start, end, context));
        };
        return FuncFormatter;
    }());

    // Formatter Object Creation
    function createFormatter(input, defaultSeparator) {
        if (typeof input === 'object' && input) { // non-null object
            if (typeof defaultSeparator === 'string') {
                input = __assign({ separator: defaultSeparator }, input);
            }
            return new NativeFormatter(input);
        }
        else if (typeof input === 'string') {
            return new CmdFormatter(input, defaultSeparator);
        }
        else if (typeof input === 'function') {
            return new FuncFormatter(input);
        }
    }
    // String Utils
    // timeZoneOffset is in minutes
    function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
        if (stripZeroTime === void 0) { stripZeroTime = false; }
        var s = marker.toISOString();
        s = s.replace('.000', '');
        if (stripZeroTime) {
            s = s.replace('T00:00:00Z', '');
        }
        if (s.length > 10) { // time part wasn't stripped, can add timezone info
            if (timeZoneOffset == null) {
                s = s.replace('Z', '');
            }
            else if (timeZoneOffset !== 0) {
                s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
            }
            // otherwise, its UTC-0 and we want to keep the Z
        }
        return s;
    }
    function formatIsoTimeString(marker) {
        return padStart(marker.getUTCHours(), 2) + ':' +
            padStart(marker.getUTCMinutes(), 2) + ':' +
            padStart(marker.getUTCSeconds(), 2);
    }
    function formatTimeZoneOffset(minutes, doIso) {
        if (doIso === void 0) { doIso = false; }
        var sign = minutes < 0 ? '-' : '+';
        var abs = Math.abs(minutes);
        var hours = Math.floor(abs / 60);
        var mins = Math.round(abs % 60);
        if (doIso) {
            return sign + padStart(hours, 2) + ':' + padStart(mins, 2);
        }
        else {
            return 'GMT' + sign + hours + (mins ? ':' + padStart(mins, 2) : '');
        }
    }
    // Arg Utils
    function createVerboseFormattingArg(start, end, context, separator) {
        var startInfo = expandZonedMarker(start, context.calendarSystem);
        var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
        return {
            date: startInfo,
            start: startInfo,
            end: endInfo,
            timeZone: context.timeZone,
            localeCodes: context.locale.codes,
            separator: separator
        };
    }
    function expandZonedMarker(dateInfo, calendarSystem) {
        var a = calendarSystem.markerToArray(dateInfo.marker);
        return {
            marker: dateInfo.marker,
            timeZoneOffset: dateInfo.timeZoneOffset,
            array: a,
            year: a[0],
            month: a[1],
            day: a[2],
            hour: a[3],
            minute: a[4],
            second: a[5],
            millisecond: a[6]
        };
    }

    var EventSourceApi = /** @class */ (function () {
        function EventSourceApi(calendar, internalEventSource) {
            this.calendar = calendar;
            this.internalEventSource = internalEventSource;
        }
        EventSourceApi.prototype.remove = function () {
            this.calendar.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: this.internalEventSource.sourceId
            });
        };
        EventSourceApi.prototype.refetch = function () {
            this.calendar.dispatch({
                type: 'FETCH_EVENT_SOURCES',
                sourceIds: [this.internalEventSource.sourceId]
            });
        };
        Object.defineProperty(EventSourceApi.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventSourceApi.prototype, "url", {
            // only relevant to json-feed event sources
            get: function () {
                return this.internalEventSource.meta.url;
            },
            enumerable: true,
            configurable: true
        });
        return EventSourceApi;
    }());

    var EventApi = /** @class */ (function () {
        function EventApi(calendar, def, instance) {
            this._calendar = calendar;
            this._def = def;
            this._instance = instance || null;
        }
        /*
        TODO: make event struct more responsible for this
        */
        EventApi.prototype.setProp = function (name, val) {
            var _a, _b;
            if (name in DATE_PROPS) ;
            else if (name in NON_DATE_PROPS) {
                if (typeof NON_DATE_PROPS[name] === 'function') {
                    val = NON_DATE_PROPS[name](val);
                }
                this.mutate({
                    standardProps: (_a = {}, _a[name] = val, _a)
                });
            }
            else if (name in UNSCOPED_EVENT_UI_PROPS) {
                var ui = void 0;
                if (typeof UNSCOPED_EVENT_UI_PROPS[name] === 'function') {
                    val = UNSCOPED_EVENT_UI_PROPS[name](val);
                }
                if (name === 'color') {
                    ui = { backgroundColor: val, borderColor: val };
                }
                else if (name === 'editable') {
                    ui = { startEditable: val, durationEditable: val };
                }
                else {
                    ui = (_b = {}, _b[name] = val, _b);
                }
                this.mutate({
                    standardProps: { ui: ui }
                });
            }
        };
        EventApi.prototype.setExtendedProp = function (name, val) {
            var _a;
            this.mutate({
                extendedProps: (_a = {}, _a[name] = val, _a)
            });
        };
        EventApi.prototype.setStart = function (startInput, options) {
            if (options === void 0) { options = {}; }
            var dateEnv = this._calendar.dateEnv;
            var start = dateEnv.createMarker(startInput);
            if (start && this._instance) { // TODO: warning if parsed bad
                var instanceRange = this._instance.range;
                var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
                var endDelta = null;
                if (options.maintainDuration) {
                    var origDuration = diffDates(instanceRange.start, instanceRange.end, dateEnv, options.granularity);
                    var newDuration = diffDates(start, instanceRange.end, dateEnv, options.granularity);
                    endDelta = subtractDurations(origDuration, newDuration);
                }
                this.mutate({ startDelta: startDelta, endDelta: endDelta });
            }
        };
        EventApi.prototype.setEnd = function (endInput, options) {
            if (options === void 0) { options = {}; }
            var dateEnv = this._calendar.dateEnv;
            var end;
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) {
                    return; // TODO: warning if parsed bad
                }
            }
            if (this._instance) {
                if (end) {
                    var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                    this.mutate({ endDelta: endDelta });
                }
                else {
                    this.mutate({ standardProps: { hasEnd: false } });
                }
            }
        };
        EventApi.prototype.setDates = function (startInput, endInput, options) {
            if (options === void 0) { options = {}; }
            var dateEnv = this._calendar.dateEnv;
            var standardProps = { allDay: options.allDay };
            var start = dateEnv.createMarker(startInput);
            var end;
            if (!start) {
                return; // TODO: warning if parsed bad
            }
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) { // TODO: warning if parsed bad
                    return;
                }
            }
            if (this._instance) {
                var instanceRange = this._instance.range;
                // when computing the diff for an event being converted to all-day,
                // compute diff off of the all-day values the way event-mutation does.
                if (options.allDay === true) {
                    instanceRange = computeAlignedDayRange(instanceRange);
                }
                var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
                if (end) {
                    var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                    this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
                }
                else {
                    standardProps.hasEnd = false;
                    this.mutate({ startDelta: startDelta, standardProps: standardProps });
                }
            }
        };
        EventApi.prototype.moveStart = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ startDelta: delta });
            }
        };
        EventApi.prototype.moveEnd = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ endDelta: delta });
            }
        };
        EventApi.prototype.moveDates = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ startDelta: delta, endDelta: delta });
            }
        };
        EventApi.prototype.setAllDay = function (allDay, options) {
            if (options === void 0) { options = {}; }
            var standardProps = { allDay: allDay };
            var maintainDuration = options.maintainDuration;
            if (maintainDuration == null) {
                maintainDuration = this._calendar.opt('allDayMaintainDuration');
            }
            if (this._def.allDay !== allDay) {
                standardProps.hasEnd = maintainDuration;
            }
            this.mutate({ standardProps: standardProps });
        };
        EventApi.prototype.formatRange = function (formatInput) {
            var dateEnv = this._calendar.dateEnv;
            var instance = this._instance;
            var formatter = createFormatter(formatInput, this._calendar.opt('defaultRangeSeparator'));
            if (this._def.hasEnd) {
                return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                    forcedStartTzo: instance.forcedStartTzo,
                    forcedEndTzo: instance.forcedEndTzo
                });
            }
            else {
                return dateEnv.format(instance.range.start, formatter, {
                    forcedTzo: instance.forcedStartTzo
                });
            }
        };
        EventApi.prototype.mutate = function (mutation) {
            var def = this._def;
            var instance = this._instance;
            if (instance) {
                this._calendar.dispatch({
                    type: 'MUTATE_EVENTS',
                    instanceId: instance.instanceId,
                    mutation: mutation,
                    fromApi: true
                });
                var eventStore = this._calendar.state.eventStore;
                this._def = eventStore.defs[def.defId];
                this._instance = eventStore.instances[instance.instanceId];
            }
        };
        EventApi.prototype.remove = function () {
            this._calendar.dispatch({
                type: 'REMOVE_EVENT_DEF',
                defId: this._def.defId
            });
        };
        Object.defineProperty(EventApi.prototype, "source", {
            get: function () {
                var sourceId = this._def.sourceId;
                if (sourceId) {
                    return new EventSourceApi(this._calendar, this._calendar.state.eventSources[sourceId]);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "start", {
            get: function () {
                return this._instance ?
                    this._calendar.dateEnv.toDate(this._instance.range.start) :
                    null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "end", {
            get: function () {
                return (this._instance && this._def.hasEnd) ?
                    this._calendar.dateEnv.toDate(this._instance.range.end) :
                    null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "id", {
            // computable props that all access the def
            // TODO: find a TypeScript-compatible way to do this at scale
            get: function () { return this._def.publicId; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "groupId", {
            get: function () { return this._def.groupId; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "allDay", {
            get: function () { return this._def.allDay; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "title", {
            get: function () { return this._def.title; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "url", {
            get: function () { return this._def.url; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "rendering", {
            get: function () { return this._def.rendering; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "startEditable", {
            get: function () { return this._def.ui.startEditable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "durationEditable", {
            get: function () { return this._def.ui.durationEditable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "constraint", {
            get: function () { return this._def.ui.constraints[0] || null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "overlap", {
            get: function () { return this._def.ui.overlap; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "allow", {
            get: function () { return this._def.ui.allows[0] || null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "backgroundColor", {
            get: function () { return this._def.ui.backgroundColor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "borderColor", {
            get: function () { return this._def.ui.borderColor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "textColor", {
            get: function () { return this._def.ui.textColor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "classNames", {
            // NOTE: user can't modify these because Object.freeze was called in event-def parsing
            get: function () { return this._def.ui.classNames; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "extendedProps", {
            get: function () { return this._def.extendedProps; },
            enumerable: true,
            configurable: true
        });
        return EventApi;
    }());

    /*
    Specifying nextDayThreshold signals that all-day ranges should be sliced.
    */
    function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
        var inverseBgByGroupId = {};
        var inverseBgByDefId = {};
        var defByGroupId = {};
        var bgRanges = [];
        var fgRanges = [];
        var eventUis = compileEventUis(eventStore.defs, eventUiBases);
        for (var defId in eventStore.defs) {
            var def = eventStore.defs[defId];
            if (def.rendering === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId] = [];
                    if (!defByGroupId[def.groupId]) {
                        defByGroupId[def.groupId] = def;
                    }
                }
                else {
                    inverseBgByDefId[defId] = [];
                }
            }
        }
        for (var instanceId in eventStore.instances) {
            var instance = eventStore.instances[instanceId];
            var def = eventStore.defs[instance.defId];
            var ui = eventUis[def.defId];
            var origRange = instance.range;
            var normalRange = (!def.allDay && nextDayThreshold) ?
                computeVisibleDayRange(origRange, nextDayThreshold) :
                origRange;
            var slicedRange = intersectRanges(normalRange, framingRange);
            if (slicedRange) {
                if (def.rendering === 'inverse-background') {
                    if (def.groupId) {
                        inverseBgByGroupId[def.groupId].push(slicedRange);
                    }
                    else {
                        inverseBgByDefId[instance.defId].push(slicedRange);
                    }
                }
                else {
                    (def.rendering === 'background' ? bgRanges : fgRanges).push({
                        def: def,
                        ui: ui,
                        instance: instance,
                        range: slicedRange,
                        isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                        isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
                    });
                }
            }
        }
        for (var groupId in inverseBgByGroupId) { // BY GROUP
            var ranges = inverseBgByGroupId[groupId];
            var invertedRanges = invertRanges(ranges, framingRange);
            for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
                var invertedRange = invertedRanges_1[_i];
                var def = defByGroupId[groupId];
                var ui = eventUis[def.defId];
                bgRanges.push({
                    def: def,
                    ui: ui,
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false
                });
            }
        }
        for (var defId in inverseBgByDefId) {
            var ranges = inverseBgByDefId[defId];
            var invertedRanges = invertRanges(ranges, framingRange);
            for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
                var invertedRange = invertedRanges_2[_a];
                bgRanges.push({
                    def: eventStore.defs[defId],
                    ui: eventUis[defId],
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false
                });
            }
        }
        return { bg: bgRanges, fg: fgRanges };
    }
    function hasBgRendering(def) {
        return def.rendering === 'background' || def.rendering === 'inverse-background';
    }
    function filterSegsViaEls(view, segs, isMirror) {
        if (view.hasPublicHandlers('eventRender')) {
            segs = segs.filter(function (seg) {
                var custom = view.publiclyTrigger('eventRender', [
                    {
                        event: new EventApi(view.calendar, seg.eventRange.def, seg.eventRange.instance),
                        isMirror: isMirror,
                        isStart: seg.isStart,
                        isEnd: seg.isEnd,
                        // TODO: include seg.range once all components consistently generate it
                        el: seg.el,
                        view: view
                    }
                ]);
                if (custom === false) { // means don't render at all
                    return false;
                }
                else if (custom && custom !== true) {
                    seg.el = custom;
                }
                return true;
            });
        }
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            setElSeg(seg.el, seg);
        }
        return segs;
    }
    function setElSeg(el, seg) {
        el.fcSeg = seg;
    }
    function getElSeg(el) {
        return el.fcSeg || null;
    }
    // event ui computation
    function compileEventUis(eventDefs, eventUiBases) {
        return mapHash(eventDefs, function (eventDef) {
            return compileEventUi(eventDef, eventUiBases);
        });
    }
    function compileEventUi(eventDef, eventUiBases) {
        var uis = [];
        if (eventUiBases['']) {
            uis.push(eventUiBases['']);
        }
        if (eventUiBases[eventDef.defId]) {
            uis.push(eventUiBases[eventDef.defId]);
        }
        uis.push(eventDef.ui);
        return combineEventUis(uis);
    }

    // applies the mutation to ALL defs/instances within the event store
    function applyMutationToEventStore(eventStore, eventConfigBase, mutation, calendar) {
        var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
        var dest = createEmptyEventStore();
        for (var defId in eventStore.defs) {
            var def = eventStore.defs[defId];
            dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, calendar.pluginSystem.hooks.eventDefMutationAppliers, calendar);
        }
        for (var instanceId in eventStore.instances) {
            var instance = eventStore.instances[instanceId];
            var def = dest.defs[instance.defId]; // important to grab the newly modified def
            dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, calendar);
        }
        return dest;
    }
    function applyMutationToEventDef(eventDef, eventConfig, mutation, appliers, calendar) {
        var standardProps = mutation.standardProps || {};
        // if hasEnd has not been specified, guess a good value based on deltas.
        // if duration will change, there's no way the default duration will persist,
        // and thus, we need to mark the event as having a real end
        if (standardProps.hasEnd == null &&
            eventConfig.durationEditable &&
            willDeltasAffectDuration(eventConfig.startEditable ? mutation.startDelta : null, mutation.endDelta || null)) {
            standardProps.hasEnd = true; // TODO: is this mutation okay?
        }
        var copy = __assign({}, eventDef, standardProps, { ui: __assign({}, eventDef.ui, standardProps.ui) });
        if (mutation.extendedProps) {
            copy.extendedProps = __assign({}, copy.extendedProps, mutation.extendedProps);
        }
        for (var _i = 0, appliers_1 = appliers; _i < appliers_1.length; _i++) {
            var applier = appliers_1[_i];
            applier(copy, mutation, calendar);
        }
        if (!copy.hasEnd && calendar.opt('forceEventDuration')) {
            copy.hasEnd = true;
        }
        return copy;
    }
    function willDeltasAffectDuration(startDelta, endDelta) {
        if (startDelta && !asRoughMs(startDelta)) {
            startDelta = null;
        }
        if (endDelta && !asRoughMs(endDelta)) {
            endDelta = null;
        }
        if (!startDelta && !endDelta) {
            return false;
        }
        if (Boolean(startDelta) !== Boolean(endDelta)) {
            return true;
        }
        return !durationsEqual(startDelta, endDelta);
    }
    function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
    eventConfig, mutation, calendar) {
        var dateEnv = calendar.dateEnv;
        var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
        var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
        var copy = __assign({}, eventInstance);
        if (forceAllDay) {
            copy.range = computeAlignedDayRange(copy.range);
        }
        if (mutation.startDelta && eventConfig.startEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.startDelta),
                end: copy.range.end
            };
        }
        if (clearEnd) {
            copy.range = {
                start: copy.range.start,
                end: calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start)
            };
        }
        else if (mutation.endDelta &&
            (eventConfig.durationEditable ||
                !willDeltasAffectDuration(// TODO: nonDRY logic above
                eventConfig.startEditable ? mutation.startDelta : null, mutation.endDelta))) {
            copy.range = {
                start: copy.range.start,
                end: dateEnv.add(copy.range.end, mutation.endDelta)
            };
        }
        // in case event was all-day but the supplied deltas were not
        // better util for this?
        if (eventDef.allDay) {
            copy.range = {
                start: startOfDay(copy.range.start),
                end: startOfDay(copy.range.end)
            };
        }
        // handle invalid durations
        if (copy.range.end < copy.range.start) {
            copy.range.end = calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start);
        }
        return copy;
    }

    function reduceEventStore (eventStore, action, eventSources, dateProfile, calendar) {
        switch (action.type) {
            case 'RECEIVE_EVENTS': // raw
                return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, calendar);
            case 'ADD_EVENTS': // already parsed, but not expanded
                return addEvent(eventStore, action.eventStore, // new ones
                dateProfile ? dateProfile.activeRange : null, calendar);
            case 'MERGE_EVENTS': // already parsed and expanded
                return mergeEventStores(eventStore, action.eventStore);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                if (dateProfile) {
                    return expandRecurring(eventStore, dateProfile.activeRange, calendar);
                }
                else {
                    return eventStore;
                }
            case 'CHANGE_TIMEZONE':
                return rezoneDates(eventStore, action.oldDateEnv, calendar.dateEnv);
            case 'MUTATE_EVENTS':
                return applyMutationToRelated(eventStore, action.instanceId, action.mutation, action.fromApi, calendar);
            case 'REMOVE_EVENT_INSTANCES':
                return excludeInstances(eventStore, action.instances);
            case 'REMOVE_EVENT_DEF':
                return filterEventStoreDefs(eventStore, function (eventDef) {
                    return eventDef.defId !== action.defId;
                });
            case 'REMOVE_EVENT_SOURCE':
                return excludeEventsBySourceId(eventStore, action.sourceId);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return filterEventStoreDefs(eventStore, function (eventDef) {
                    return !eventDef.sourceId; // only keep events with no source id
                });
            case 'REMOVE_ALL_EVENTS':
                return createEmptyEventStore();
            case 'RESET_EVENTS':
                return {
                    defs: eventStore.defs,
                    instances: eventStore.instances
                };
            default:
                return eventStore;
        }
    }
    function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, calendar) {
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
        ) {
            var subset = parseEvents(transformRawEvents(rawEvents, eventSource, calendar), eventSource.sourceId, calendar);
            if (fetchRange) {
                subset = expandRecurring(subset, fetchRange, calendar);
            }
            return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
        }
        return eventStore;
    }
    function addEvent(eventStore, subset, expandRange, calendar) {
        if (expandRange) {
            subset = expandRecurring(subset, expandRange, calendar);
        }
        return mergeEventStores(eventStore, subset);
    }
    function rezoneDates(eventStore, oldDateEnv, newDateEnv) {
        var defs = eventStore.defs;
        var instances = mapHash(eventStore.instances, function (instance) {
            var def = defs[instance.defId];
            if (def.allDay || def.recurringDef) {
                return instance; // isn't dependent on timezone
            }
            else {
                return __assign({}, instance, { range: {
                        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
                    }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
            }
        });
        return { defs: defs, instances: instances };
    }
    function applyMutationToRelated(eventStore, instanceId, mutation, fromApi, calendar) {
        var relevant = getRelevantEvents(eventStore, instanceId);
        var eventConfigBase = fromApi ?
            { '': {
                    startEditable: true,
                    durationEditable: true,
                    constraints: [],
                    overlap: null,
                    allows: [],
                    backgroundColor: '',
                    borderColor: '',
                    textColor: '',
                    classNames: []
                } } :
            calendar.eventUiBases;
        relevant = applyMutationToEventStore(relevant, eventConfigBase, mutation, calendar);
        return mergeEventStores(eventStore, relevant);
    }
    function excludeEventsBySourceId(eventStore, sourceId) {
        return filterEventStoreDefs(eventStore, function (eventDef) {
            return eventDef.sourceId !== sourceId;
        });
    }
    // QUESTION: why not just return instances? do a general object-property-exclusion util
    function excludeInstances(eventStore, removals) {
        return {
            defs: eventStore.defs,
            instances: filterHash(eventStore.instances, function (instance) {
                return !removals[instance.instanceId];
            })
        };
    }

    // high-level segmenting-aware tester functions
    // ------------------------------------------------------------------------------------------------------------------------
    function isInteractionValid(interaction, calendar) {
        return isNewPropsValid({ eventDrag: interaction }, calendar); // HACK: the eventDrag props is used for ALL interactions
    }
    function isDateSelectionValid(dateSelection, calendar) {
        return isNewPropsValid({ dateSelection: dateSelection }, calendar);
    }
    function isNewPropsValid(newProps, calendar) {
        var view = calendar.view;
        var props = __assign({ businessHours: view ? view.props.businessHours : createEmptyEventStore(), dateSelection: '', eventStore: calendar.state.eventStore, eventUiBases: calendar.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
        return (calendar.pluginSystem.hooks.isPropsValid || isPropsValid)(props, calendar);
    }
    function isPropsValid(state, calendar, dateSpanMeta, filterConfig) {
        if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
        if (state.eventDrag && !isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
            return false;
        }
        if (state.dateSelection && !isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
            return false;
        }
        return true;
    }
    // Moving Event Validation
    // ------------------------------------------------------------------------------------------------------------------------
    function isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
        var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
        var subjectEventStore = interaction.mutatedEvents;
        var subjectDefs = subjectEventStore.defs;
        var subjectInstances = subjectEventStore.instances;
        var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
            state.eventUiBases :
            { '': calendar.selectionConfig } // if not a real event, validate as a selection
        );
        if (filterConfig) {
            subjectConfigs = mapHash(subjectConfigs, filterConfig);
        }
        var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances); // exclude the subject events. TODO: exclude defs too?
        var otherDefs = otherEventStore.defs;
        var otherInstances = otherEventStore.instances;
        var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
        for (var subjectInstanceId in subjectInstances) {
            var subjectInstance = subjectInstances[subjectInstanceId];
            var subjectRange = subjectInstance.range;
            var subjectConfig = subjectConfigs[subjectInstance.defId];
            var subjectDef = subjectDefs[subjectInstance.defId];
            // constraint
            if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, calendar)) {
                return false;
            }
            // overlap
            var overlapFunc = calendar.opt('eventOverlap');
            if (typeof overlapFunc !== 'function') {
                overlapFunc = null;
            }
            for (var otherInstanceId in otherInstances) {
                var otherInstance = otherInstances[otherInstanceId];
                // intersect! evaluate
                if (rangesIntersect(subjectRange, otherInstance.range)) {
                    var otherOverlap = otherConfigs[otherInstance.defId].overlap;
                    // consider the other event's overlap. only do this if the subject event is a "real" event
                    if (otherOverlap === false && interaction.isEvent) {
                        return false;
                    }
                    if (subjectConfig.overlap === false) {
                        return false;
                    }
                    if (overlapFunc && !overlapFunc(new EventApi(calendar, otherDefs[otherInstance.defId], otherInstance), // still event
                    new EventApi(calendar, subjectDef, subjectInstance) // moving event
                    )) {
                        return false;
                    }
                }
            }
            // allow (a function)
            for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
                var subjectAllow = _a[_i];
                var subjectDateSpan = __assign({}, dateSpanMeta, { range: subjectInstance.range, allDay: subjectDef.allDay });
                var origDef = state.eventStore.defs[subjectDef.defId];
                var origInstance = state.eventStore.instances[subjectInstanceId];
                var eventApi = void 0;
                if (origDef) { // was previously in the calendar
                    eventApi = new EventApi(calendar, origDef, origInstance);
                }
                else { // was an external event
                    eventApi = new EventApi(calendar, subjectDef); // no instance, because had no dates
                }
                if (!subjectAllow(calendar.buildDateSpanApi(subjectDateSpan), eventApi)) {
                    return false;
                }
            }
        }
        return true;
    }
    // Date Selection Validation
    // ------------------------------------------------------------------------------------------------------------------------
    function isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
        var relevantEventStore = state.eventStore;
        var relevantDefs = relevantEventStore.defs;
        var relevantInstances = relevantEventStore.instances;
        var selection = state.dateSelection;
        var selectionRange = selection.range;
        var selectionConfig = calendar.selectionConfig;
        if (filterConfig) {
            selectionConfig = filterConfig(selectionConfig);
        }
        // constraint
        if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, calendar)) {
            return false;
        }
        // overlap
        var overlapFunc = calendar.opt('selectOverlap');
        if (typeof overlapFunc !== 'function') {
            overlapFunc = null;
        }
        for (var relevantInstanceId in relevantInstances) {
            var relevantInstance = relevantInstances[relevantInstanceId];
            // intersect! evaluate
            if (rangesIntersect(selectionRange, relevantInstance.range)) {
                if (selectionConfig.overlap === false) {
                    return false;
                }
                if (overlapFunc && !overlapFunc(new EventApi(calendar, relevantDefs[relevantInstance.defId], relevantInstance))) {
                    return false;
                }
            }
        }
        // allow (a function)
        for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
            var selectionAllow = _a[_i];
            var fullDateSpan = __assign({}, dateSpanMeta, selection);
            if (!selectionAllow(calendar.buildDateSpanApi(fullDateSpan), null)) {
                return false;
            }
        }
        return true;
    }
    // Constraint Utils
    // ------------------------------------------------------------------------------------------------------------------------
    function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, calendar) {
        for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
            var constraint = constraints_1[_i];
            if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, calendar), subjectRange)) {
                return false;
            }
        }
        return true;
    }
    function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
    otherEventStore, // for if constraint is an even group ID
    businessHoursUnexpanded, // for if constraint is 'businessHours'
    calendar // for expanding businesshours
    ) {
        if (constraint === 'businessHours') {
            return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, calendar));
        }
        else if (typeof constraint === 'string') { // an group ID
            return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
                return eventDef.groupId === constraint;
            }));
        }
        else if (typeof constraint === 'object' && constraint) { // non-null object
            return eventStoreToRanges(expandRecurring(constraint, subjectRange, calendar));
        }
        return []; // if it's false
    }
    // TODO: move to event-store file?
    function eventStoreToRanges(eventStore) {
        var instances = eventStore.instances;
        var ranges = [];
        for (var instanceId in instances) {
            ranges.push(instances[instanceId].range);
        }
        return ranges;
    }
    // TODO: move to geom file?
    function anyRangesContainRange(outerRanges, innerRange) {
        for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
            var outerRange = outerRanges_1[_i];
            if (rangeContainsRange(outerRange, innerRange)) {
                return true;
            }
        }
        return false;
    }
    // Parsing
    // ------------------------------------------------------------------------------------------------------------------------
    function normalizeConstraint(input, calendar) {
        if (Array.isArray(input)) {
            return parseEvents(input, '', calendar, true); // allowOpenRange=true
        }
        else if (typeof input === 'object' && input) { // non-null object
            return parseEvents([input], '', calendar, true); // allowOpenRange=true
        }
        else if (input != null) {
            return String(input);
        }
        else {
            return null;
        }
    }

    function htmlEscape(s) {
        return (s + '').replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#039;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, '<br />');
    }
    // Given a hash of CSS properties, returns a string of CSS.
    // Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
    function cssToStr(cssProps) {
        var statements = [];
        for (var name_1 in cssProps) {
            var val = cssProps[name_1];
            if (val != null && val !== '') {
                statements.push(name_1 + ':' + val);
            }
        }
        return statements.join(';');
    }
    // Given an object hash of HTML attribute names to values,
    // generates a string that can be injected between < > in HTML
    function attrsToStr(attrs) {
        var parts = [];
        for (var name_2 in attrs) {
            var val = attrs[name_2];
            if (val != null) {
                parts.push(name_2 + '="' + htmlEscape(val) + '"');
            }
        }
        return parts.join(' ');
    }
    function parseClassName(raw) {
        if (Array.isArray(raw)) {
            return raw;
        }
        else if (typeof raw === 'string') {
            return raw.split(/\s+/);
        }
        else {
            return [];
        }
    }

    var UNSCOPED_EVENT_UI_PROPS = {
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: null,
        overlap: null,
        allow: null,
        className: parseClassName,
        classNames: parseClassName,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String
    };
    function processUnscopedUiProps(rawProps, calendar, leftovers) {
        var props = refineProps(rawProps, UNSCOPED_EVENT_UI_PROPS, {}, leftovers);
        var constraint = normalizeConstraint(props.constraint, calendar);
        return {
            startEditable: props.startEditable != null ? props.startEditable : props.editable,
            durationEditable: props.durationEditable != null ? props.durationEditable : props.editable,
            constraints: constraint != null ? [constraint] : [],
            overlap: props.overlap,
            allows: props.allow != null ? [props.allow] : [],
            backgroundColor: props.backgroundColor || props.color,
            borderColor: props.borderColor || props.color,
            textColor: props.textColor,
            classNames: props.classNames.concat(props.className)
        };
    }
    function processScopedUiProps(prefix, rawScoped, calendar, leftovers) {
        var rawUnscoped = {};
        var wasFound = {};
        for (var key in UNSCOPED_EVENT_UI_PROPS) {
            var scopedKey = prefix + capitaliseFirstLetter(key);
            rawUnscoped[key] = rawScoped[scopedKey];
            wasFound[scopedKey] = true;
        }
        if (prefix === 'event') {
            rawUnscoped.editable = rawScoped.editable; // special case. there is no 'eventEditable', just 'editable'
        }
        if (leftovers) {
            for (var key in rawScoped) {
                if (!wasFound[key]) {
                    leftovers[key] = rawScoped[key];
                }
            }
        }
        return processUnscopedUiProps(rawUnscoped, calendar);
    }
    var EMPTY_EVENT_UI = {
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        classNames: []
    };
    // prevent against problems with <2 args!
    function combineEventUis(uis) {
        return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
    }
    function combineTwoEventUis(item0, item1) {
        return {
            startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
            durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
            constraints: item0.constraints.concat(item1.constraints),
            overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
            allows: item0.allows.concat(item1.allows),
            backgroundColor: item1.backgroundColor || item0.backgroundColor,
            borderColor: item1.borderColor || item0.borderColor,
            textColor: item1.textColor || item0.textColor,
            classNames: item0.classNames.concat(item1.classNames)
        };
    }

    var NON_DATE_PROPS = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        rendering: String,
        extendedProps: null
    };
    var DATE_PROPS = {
        start: null,
        date: null,
        end: null,
        allDay: null
    };
    var uid = 0;
    function parseEvent(raw, sourceId, calendar, allowOpenRange) {
        var allDayDefault = computeIsAllDayDefault(sourceId, calendar);
        var leftovers0 = {};
        var recurringRes = parseRecurring(raw, // raw, but with single-event stuff stripped out
        allDayDefault, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes, leftovers0 // will populate with non-recurring props
        );
        if (recurringRes) {
            var def = parseEventDef(leftovers0, sourceId, recurringRes.allDay, Boolean(recurringRes.duration), calendar);
            def.recurringDef = {
                typeId: recurringRes.typeId,
                typeData: recurringRes.typeData,
                duration: recurringRes.duration
            };
            return { def: def, instance: null };
        }
        else {
            var leftovers1 = {};
            var singleRes = parseSingle(raw, allDayDefault, calendar, leftovers1, allowOpenRange);
            if (singleRes) {
                var def = parseEventDef(leftovers1, sourceId, singleRes.allDay, singleRes.hasEnd, calendar);
                var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
                return { def: def, instance: instance };
            }
        }
        return null;
    }
    /*
    Will NOT populate extendedProps with the leftover properties.
    Will NOT populate date-related props.
    The EventNonDateInput has been normalized (id => publicId, etc).
    */
    function parseEventDef(raw, sourceId, allDay, hasEnd, calendar) {
        var leftovers = {};
        var def = pluckNonDateProps(raw, calendar, leftovers);
        def.defId = String(uid++);
        def.sourceId = sourceId;
        def.allDay = allDay;
        def.hasEnd = hasEnd;
        for (var _i = 0, _a = calendar.pluginSystem.hooks.eventDefParsers; _i < _a.length; _i++) {
            var eventDefParser = _a[_i];
            var newLeftovers = {};
            eventDefParser(def, leftovers, newLeftovers);
            leftovers = newLeftovers;
        }
        def.extendedProps = __assign(leftovers, def.extendedProps || {});
        // help out EventApi from having user modify props
        Object.freeze(def.ui.classNames);
        Object.freeze(def.extendedProps);
        return def;
    }
    function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
        return {
            instanceId: String(uid++),
            defId: defId,
            range: range,
            forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
            forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
        };
    }
    function parseSingle(raw, allDayDefault, calendar, leftovers, allowOpenRange) {
        var props = pluckDateProps(raw, leftovers);
        var allDay = props.allDay;
        var startMeta;
        var startMarker = null;
        var hasEnd = false;
        var endMeta;
        var endMarker = null;
        startMeta = calendar.dateEnv.createMarkerMeta(props.start);
        if (startMeta) {
            startMarker = startMeta.marker;
        }
        else if (!allowOpenRange) {
            return null;
        }
        if (props.end != null) {
            endMeta = calendar.dateEnv.createMarkerMeta(props.end);
        }
        if (allDay == null) {
            if (allDayDefault != null) {
                allDay = allDayDefault;
            }
            else {
                // fall back to the date props LAST
                allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                    (!endMeta || endMeta.isTimeUnspecified);
            }
        }
        if (allDay && startMarker) {
            startMarker = startOfDay(startMarker);
        }
        if (endMeta) {
            endMarker = endMeta.marker;
            if (allDay) {
                endMarker = startOfDay(endMarker);
            }
            if (startMarker && endMarker <= startMarker) {
                endMarker = null;
            }
        }
        if (endMarker) {
            hasEnd = true;
        }
        else if (!allowOpenRange) {
            hasEnd = calendar.opt('forceEventDuration') || false;
            endMarker = calendar.dateEnv.add(startMarker, allDay ?
                calendar.defaultAllDayEventDuration :
                calendar.defaultTimedEventDuration);
        }
        return {
            allDay: allDay,
            hasEnd: hasEnd,
            range: { start: startMarker, end: endMarker },
            forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
            forcedEndTzo: endMeta ? endMeta.forcedTzo : null
        };
    }
    function pluckDateProps(raw, leftovers) {
        var props = refineProps(raw, DATE_PROPS, {}, leftovers);
        props.start = (props.start !== null) ? props.start : props.date;
        delete props.date;
        return props;
    }
    function pluckNonDateProps(raw, calendar, leftovers) {
        var preLeftovers = {};
        var props = refineProps(raw, NON_DATE_PROPS, {}, preLeftovers);
        var ui = processUnscopedUiProps(preLeftovers, calendar, leftovers);
        props.publicId = props.id;
        delete props.id;
        props.ui = ui;
        return props;
    }
    function computeIsAllDayDefault(sourceId, calendar) {
        var res = null;
        if (sourceId) {
            var source = calendar.state.eventSources[sourceId];
            res = source.allDayDefault;
        }
        if (res == null) {
            res = calendar.opt('allDayDefault');
        }
        return res;
    }

    var DEF_DEFAULTS = {
        startTime: '09:00',
        endTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5],
        rendering: 'inverse-background',
        classNames: 'fc-nonbusiness',
        groupId: '_businessHours' // so multiple defs get grouped
    };
    /*
    TODO: pass around as EventDefHash!!!
    */
    function parseBusinessHours(input, calendar) {
        return parseEvents(refineInputs(input), '', calendar);
    }
    function refineInputs(input) {
        var rawDefs;
        if (input === true) {
            rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
        }
        else if (Array.isArray(input)) {
            // if specifying an array, every sub-definition NEEDS a day-of-week
            rawDefs = input.filter(function (rawDef) {
                return rawDef.daysOfWeek;
            });
        }
        else if (typeof input === 'object' && input) { // non-null object
            rawDefs = [input];
        }
        else { // is probably false
            rawDefs = [];
        }
        rawDefs = rawDefs.map(function (rawDef) {
            return __assign({}, DEF_DEFAULTS, rawDef);
        });
        return rawDefs;
    }

    function memoizeRendering(renderFunc, unrenderFunc, dependencies) {
        if (dependencies === void 0) { dependencies = []; }
        var dependents = [];
        var thisContext;
        var prevArgs;
        function unrender() {
            if (prevArgs) {
                for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                    var dependent = dependents_1[_i];
                    dependent.unrender();
                }
                if (unrenderFunc) {
                    unrenderFunc.apply(thisContext, prevArgs);
                }
                prevArgs = null;
            }
        }
        function res() {
            if (!prevArgs || !isArraysEqual(prevArgs, arguments)) {
                unrender();
                thisContext = this;
                prevArgs = arguments;
                renderFunc.apply(this, arguments);
            }
        }
        res.dependents = dependents;
        res.unrender = unrender;
        for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
            var dependency = dependencies_1[_i];
            dependency.dependents.push(res);
        }
        return res;
    }

    function isValuesSimilar(val0, val1, depth) {
        if (depth === void 0) { depth = 1; }
        if (val0 === val1) {
            return true;
        }
        else if (Array.isArray(val0) && Array.isArray(val1)) {
            return isArraysSimilar(val0, val1, depth);
        }
        else if (typeof val0 === 'object' && val0 && typeof val1 === 'object' && val1) { // non-null objects
            return isObjectsSimilar(val0, val1, depth);
        }
        else {
            return false;
        }
    }
    function isArraysSimilar(a0, a1, depth) {
        if (depth === void 0) { depth = 1; }
        if (a0 === a1) {
            return true;
        }
        else if (depth > 0) {
            if (a0.length !== a1.length) {
                return false;
            }
            else {
                for (var i = 0; i < a0.length; i++) {
                    if (!isValuesSimilar(a0[i], a1[i], depth - 1)) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            return false;
        }
    }
    function isObjectsSimilar(obj0, obj1, depth) {
        if (depth === void 0) { depth = 1; }
        if (obj0 === obj1) {
            return true;
        }
        else if (depth > 0) {
            for (var prop in obj0) {
                if (!(prop in obj1)) {
                    return false;
                }
            }
            for (var prop in obj1) {
                if (!(prop in obj0)) {
                    return false;
                }
                else {
                    if (!isValuesSimilar(obj0[prop], obj1[prop], depth - 1)) {
                        return false;
                    }
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    function computeChangedProps(obj0, obj1, depth) {
        if (depth === void 0) { depth = 1; }
        var res = {};
        for (var prop in obj1) {
            if (!(prop in obj0) ||
                !isValuesSimilar(obj0[prop], obj1[prop], depth - 1)) {
                res[prop] = obj1[prop];
            }
        }
        return res;
    }
    function anyKeysRemoved(obj0, obj1) {
        for (var prop in obj0) {
            if (!(prop in obj1)) {
                return true;
            }
        }
        return false;
    }

    var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
    var Splitter = /** @class */ (function () {
        function Splitter() {
            this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
            this.splitDateSelection = memoize(this._splitDateSpan);
            this.splitEventStore = memoize(this._splitEventStore);
            this.splitIndividualUi = memoize(this._splitIndividualUi);
            this.splitEventDrag = memoize(this._splitInteraction);
            this.splitEventResize = memoize(this._splitInteraction);
            this.eventUiBuilders = {}; // TODO: typescript protection
        }
        Splitter.prototype.splitProps = function (props) {
            var _this = this;
            var keyInfos = this.getKeyInfo(props);
            var defKeys = this.getKeysForEventDefs(props.eventStore);
            var dateSelections = this.splitDateSelection(props.dateSelection);
            var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
            var eventStores = this.splitEventStore(props.eventStore, defKeys);
            var eventDrags = this.splitEventDrag(props.eventDrag);
            var eventResizes = this.splitEventResize(props.eventResize);
            var splitProps = {};
            this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
                return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
            });
            for (var key in keyInfos) {
                var keyInfo = keyInfos[key];
                var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
                var buildEventUi = this.eventUiBuilders[key];
                splitProps[key] = {
                    businessHours: keyInfo.businessHours || props.businessHours,
                    dateSelection: dateSelections[key] || null,
                    eventStore: eventStore,
                    eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                    eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                    eventDrag: eventDrags[key] || null,
                    eventResize: eventResizes[key] || null
                };
            }
            return splitProps;
        };
        Splitter.prototype._splitDateSpan = function (dateSpan) {
            var dateSpans = {};
            if (dateSpan) {
                var keys = this.getKeysForDateSpan(dateSpan);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    dateSpans[key] = dateSpan;
                }
            }
            return dateSpans;
        };
        Splitter.prototype._getKeysForEventDefs = function (eventStore) {
            var _this = this;
            return mapHash(eventStore.defs, function (eventDef) {
                return _this.getKeysForEventDef(eventDef);
            });
        };
        Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
            var defs = eventStore.defs, instances = eventStore.instances;
            var splitStores = {};
            for (var defId in defs) {
                for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!splitStores[key]) {
                        splitStores[key] = createEmptyEventStore();
                    }
                    splitStores[key].defs[defId] = defs[defId];
                }
            }
            for (var instanceId in instances) {
                var instance = instances[instanceId];
                for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
                    var key = _c[_b];
                    if (splitStores[key]) { // must have already been created
                        splitStores[key].instances[instanceId] = instance;
                    }
                }
            }
            return splitStores;
        };
        Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
            var splitHashes = {};
            for (var defId in eventUiBases) {
                if (defId) { // not the '' key
                    for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                        var key = _a[_i];
                        if (!splitHashes[key]) {
                            splitHashes[key] = {};
                        }
                        splitHashes[key][defId] = eventUiBases[defId];
                    }
                }
            }
            return splitHashes;
        };
        Splitter.prototype._splitInteraction = function (interaction) {
            var splitStates = {};
            if (interaction) {
                var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents) // can't use cached. might be events from other calendar
                );
                // can't rely on defKeys because event data is mutated
                var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
                var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
                var populate = function (key) {
                    if (!splitStates[key]) {
                        splitStates[key] = {
                            affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                            mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                            isEvent: interaction.isEvent,
                            origSeg: interaction.origSeg
                        };
                    }
                };
                for (var key in affectedStores_1) {
                    populate(key);
                }
                for (var key in mutatedStores_1) {
                    populate(key);
                }
            }
            return splitStates;
        };
        return Splitter;
    }());
    function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
        var baseParts = [];
        if (allUi) {
            baseParts.push(allUi);
        }
        if (eventUiForKey) {
            baseParts.push(eventUiForKey);
        }
        var stuff = {
            '': combineEventUis(baseParts)
        };
        if (individualUi) {
            __assign(stuff, individualUi);
        }
        return stuff;
    }

    // Generates HTML for an anchor to another view into the calendar.
    // Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
    // `gotoOptions` can either be a DateMarker, or an object with the form:
    // { date, type, forceOff }
    // `type` is a view-type like "day" or "week". default value is "day".
    // `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
    function buildGotoAnchorHtml(component, gotoOptions, attrs, innerHtml) {
        var dateEnv = component.dateEnv;
        var date;
        var type;
        var forceOff;
        var finalOptions;
        if (gotoOptions instanceof Date) {
            date = gotoOptions; // a single date-like input
        }
        else {
            date = gotoOptions.date;
            type = gotoOptions.type;
            forceOff = gotoOptions.forceOff;
        }
        finalOptions = {
            date: dateEnv.formatIso(date, { omitTime: true }),
            type: type || 'day'
        };
        if (typeof attrs === 'string') {
            innerHtml = attrs;
            attrs = null;
        }
        attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
        innerHtml = innerHtml || '';
        if (!forceOff && component.opt('navLinks')) {
            return '<a' + attrs +
                ' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
                innerHtml +
                '</a>';
        }
        else {
            return '<span' + attrs + '>' +
                innerHtml +
                '</span>';
        }
    }
    function getAllDayHtml(component) {
        return component.opt('allDayHtml') || htmlEscape(component.opt('allDayText'));
    }
    // Computes HTML classNames for a single-day element
    function getDayClasses(date, dateProfile, context, noThemeHighlight) {
        var calendar = context.calendar, view = context.view, theme = context.theme, dateEnv = context.dateEnv;
        var classes = [];
        var todayStart;
        var todayEnd;
        if (!rangeContainsMarker(dateProfile.activeRange, date)) {
            classes.push('fc-disabled-day');
        }
        else {
            classes.push('fc-' + DAY_IDS[date.getUTCDay()]);
            if (view.opt('monthMode') &&
                dateEnv.getMonth(date) !== dateEnv.getMonth(dateProfile.currentRange.start)) {
                classes.push('fc-other-month');
            }
            todayStart = startOfDay(calendar.getNow());
            todayEnd = addDays(todayStart, 1);
            if (date < todayStart) {
                classes.push('fc-past');
            }
            else if (date >= todayEnd) {
                classes.push('fc-future');
            }
            else {
                classes.push('fc-today');
                if (noThemeHighlight !== true) {
                    classes.push(theme.getClass('today'));
                }
            }
        }
        return classes;
    }

    // given a function that resolves a result asynchronously.
    // the function can either call passed-in success and failure callbacks,
    // or it can return a promise.
    // if you need to pass additional params to func, bind them first.
    function unpromisify(func, success, failure) {
        // guard against success/failure callbacks being called more than once
        // and guard against a promise AND callback being used together.
        var isResolved = false;
        var wrappedSuccess = function () {
            if (!isResolved) {
                isResolved = true;
                success.apply(this, arguments);
            }
        };
        var wrappedFailure = function () {
            if (!isResolved) {
                isResolved = true;
                if (failure) {
                    failure.apply(this, arguments);
                }
            }
        };
        var res = func(wrappedSuccess, wrappedFailure);
        if (res && typeof res.then === 'function') {
            res.then(wrappedSuccess, wrappedFailure);
        }
    }

    var Mixin = /** @class */ (function () {
        function Mixin() {
        }
        // mix into a CLASS
        Mixin.mixInto = function (destClass) {
            this.mixIntoObj(destClass.prototype);
        };
        // mix into ANY object
        Mixin.mixIntoObj = function (destObj) {
            var _this = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
                if (!destObj[name]) { // if destination doesn't already define it
                    destObj[name] = _this.prototype[name];
                }
            });
        };
        /*
        will override existing methods
        TODO: remove! not used anymore
        */
        Mixin.mixOver = function (destClass) {
            var _this = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
                destClass.prototype[name] = _this.prototype[name];
            });
        };
        return Mixin;
    }());

    /*
    USAGE:
      import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
    in class:
      on: EmitterInterface['on']
      one: EmitterInterface['one']
      off: EmitterInterface['off']
      trigger: EmitterInterface['trigger']
      triggerWith: EmitterInterface['triggerWith']
      hasHandlers: EmitterInterface['hasHandlers']
    after class:
      EmitterMixin.mixInto(TheClass)
    */
    var EmitterMixin = /** @class */ (function (_super) {
        __extends(EmitterMixin, _super);
        function EmitterMixin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmitterMixin.prototype.on = function (type, handler) {
            addToHash(this._handlers || (this._handlers = {}), type, handler);
            return this; // for chaining
        };
        // todo: add comments
        EmitterMixin.prototype.one = function (type, handler) {
            addToHash(this._oneHandlers || (this._oneHandlers = {}), type, handler);
            return this; // for chaining
        };
        EmitterMixin.prototype.off = function (type, handler) {
            if (this._handlers) {
                removeFromHash(this._handlers, type, handler);
            }
            if (this._oneHandlers) {
                removeFromHash(this._oneHandlers, type, handler);
            }
            return this; // for chaining
        };
        EmitterMixin.prototype.trigger = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.triggerWith(type, this, args);
            return this; // for chaining
        };
        EmitterMixin.prototype.triggerWith = function (type, context, args) {
            if (this._handlers) {
                applyAll(this._handlers[type], context, args);
            }
            if (this._oneHandlers) {
                applyAll(this._oneHandlers[type], context, args);
                delete this._oneHandlers[type]; // will never fire again
            }
            return this; // for chaining
        };
        EmitterMixin.prototype.hasHandlers = function (type) {
            return (this._handlers && this._handlers[type] && this._handlers[type].length) ||
                (this._oneHandlers && this._oneHandlers[type] && this._oneHandlers[type].length);
        };
        return EmitterMixin;
    }(Mixin));
    function addToHash(hash, type, handler) {
        (hash[type] || (hash[type] = []))
            .push(handler);
    }
    function removeFromHash(hash, type, handler) {
        if (handler) {
            if (hash[type]) {
                hash[type] = hash[type].filter(function (func) {
                    return func !== handler;
                });
            }
        }
        else {
            delete hash[type]; // remove all handler funcs for this type
        }
    }

    /*
    Records offset information for a set of elements, relative to an origin element.
    Can record the left/right OR the top/bottom OR both.
    Provides methods for querying the cache by position.
    */
    var PositionCache = /** @class */ (function () {
        function PositionCache(originEl, els, isHorizontal, isVertical) {
            this.originEl = originEl;
            this.els = els;
            this.isHorizontal = isHorizontal;
            this.isVertical = isVertical;
        }
        // Queries the els for coordinates and stores them.
        // Call this method before using and of the get* methods below.
        PositionCache.prototype.build = function () {
            var originEl = this.originEl;
            var originClientRect = this.originClientRect =
                originEl.getBoundingClientRect(); // relative to viewport top-left
            if (this.isHorizontal) {
                this.buildElHorizontals(originClientRect.left);
            }
            if (this.isVertical) {
                this.buildElVerticals(originClientRect.top);
            }
        };
        // Populates the left/right internal coordinate arrays
        PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
            var lefts = [];
            var rights = [];
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                var rect = el.getBoundingClientRect();
                lefts.push(rect.left - originClientLeft);
                rights.push(rect.right - originClientLeft);
            }
            this.lefts = lefts;
            this.rights = rights;
        };
        // Populates the top/bottom internal coordinate arrays
        PositionCache.prototype.buildElVerticals = function (originClientTop) {
            var tops = [];
            var bottoms = [];
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                var rect = el.getBoundingClientRect();
                tops.push(rect.top - originClientTop);
                bottoms.push(rect.bottom - originClientTop);
            }
            this.tops = tops;
            this.bottoms = bottoms;
        };
        // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
        // If no intersection is made, returns undefined.
        PositionCache.prototype.leftToIndex = function (leftPosition) {
            var lefts = this.lefts;
            var rights = this.rights;
            var len = lefts.length;
            var i;
            for (i = 0; i < len; i++) {
                if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                    return i;
                }
            }
        };
        // Given a top offset (from document top), returns the index of the el that it vertically intersects.
        // If no intersection is made, returns undefined.
        PositionCache.prototype.topToIndex = function (topPosition) {
            var tops = this.tops;
            var bottoms = this.bottoms;
            var len = tops.length;
            var i;
            for (i = 0; i < len; i++) {
                if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                    return i;
                }
            }
        };
        // Gets the width of the element at the given index
        PositionCache.prototype.getWidth = function (leftIndex) {
            return this.rights[leftIndex] - this.lefts[leftIndex];
        };
        // Gets the height of the element at the given index
        PositionCache.prototype.getHeight = function (topIndex) {
            return this.bottoms[topIndex] - this.tops[topIndex];
        };
        return PositionCache;
    }());

    /*
    An object for getting/setting scroll-related information for an element.
    Internally, this is done very differently for window versus DOM element,
    so this object serves as a common interface.
    */
    var ScrollController = /** @class */ (function () {
        function ScrollController() {
        }
        ScrollController.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight();
        };
        ScrollController.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth();
        };
        ScrollController.prototype.canScrollVertically = function () {
            return this.getMaxScrollTop() > 0;
        };
        ScrollController.prototype.canScrollHorizontally = function () {
            return this.getMaxScrollLeft() > 0;
        };
        ScrollController.prototype.canScrollUp = function () {
            return this.getScrollTop() > 0;
        };
        ScrollController.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop();
        };
        ScrollController.prototype.canScrollLeft = function () {
            return this.getScrollLeft() > 0;
        };
        ScrollController.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft();
        };
        return ScrollController;
    }());
    var ElementScrollController = /** @class */ (function (_super) {
        __extends(ElementScrollController, _super);
        function ElementScrollController(el) {
            var _this = _super.call(this) || this;
            _this.el = el;
            return _this;
        }
        ElementScrollController.prototype.getScrollTop = function () {
            return this.el.scrollTop;
        };
        ElementScrollController.prototype.getScrollLeft = function () {
            return this.el.scrollLeft;
        };
        ElementScrollController.prototype.setScrollTop = function (top) {
            this.el.scrollTop = top;
        };
        ElementScrollController.prototype.setScrollLeft = function (left) {
            this.el.scrollLeft = left;
        };
        ElementScrollController.prototype.getScrollWidth = function () {
            return this.el.scrollWidth;
        };
        ElementScrollController.prototype.getScrollHeight = function () {
            return this.el.scrollHeight;
        };
        ElementScrollController.prototype.getClientHeight = function () {
            return this.el.clientHeight;
        };
        ElementScrollController.prototype.getClientWidth = function () {
            return this.el.clientWidth;
        };
        return ElementScrollController;
    }(ScrollController));
    var WindowScrollController = /** @class */ (function (_super) {
        __extends(WindowScrollController, _super);
        function WindowScrollController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WindowScrollController.prototype.getScrollTop = function () {
            return window.pageYOffset;
        };
        WindowScrollController.prototype.getScrollLeft = function () {
            return window.pageXOffset;
        };
        WindowScrollController.prototype.setScrollTop = function (n) {
            window.scroll(window.pageXOffset, n);
        };
        WindowScrollController.prototype.setScrollLeft = function (n) {
            window.scroll(n, window.pageYOffset);
        };
        WindowScrollController.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth;
        };
        WindowScrollController.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight;
        };
        WindowScrollController.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight;
        };
        WindowScrollController.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth;
        };
        return WindowScrollController;
    }(ScrollController));

    /*
    Embodies a div that has potential scrollbars
    */
    var ScrollComponent = /** @class */ (function (_super) {
        __extends(ScrollComponent, _super);
        function ScrollComponent(overflowX, overflowY) {
            var _this = _super.call(this, createElement('div', {
                className: 'fc-scroller'
            })) || this;
            _this.overflowX = overflowX;
            _this.overflowY = overflowY;
            _this.applyOverflow();
            return _this;
        }
        // sets to natural height, unlocks overflow
        ScrollComponent.prototype.clear = function () {
            this.setHeight('auto');
            this.applyOverflow();
        };
        ScrollComponent.prototype.destroy = function () {
            removeElement(this.el);
        };
        // Overflow
        // -----------------------------------------------------------------------------------------------------------------
        ScrollComponent.prototype.applyOverflow = function () {
            applyStyle(this.el, {
                overflowX: this.overflowX,
                overflowY: this.overflowY
            });
        };
        // Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
        // Useful for preserving scrollbar widths regardless of future resizes.
        // Can pass in scrollbarWidths for optimization.
        ScrollComponent.prototype.lockOverflow = function (scrollbarWidths) {
            var overflowX = this.overflowX;
            var overflowY = this.overflowY;
            scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
            if (overflowX === 'auto') {
                overflowX = (scrollbarWidths.bottom || // horizontal scrollbars?
                    this.canScrollHorizontally() // OR scrolling pane with massless scrollbars?
                ) ? 'scroll' : 'hidden';
            }
            if (overflowY === 'auto') {
                overflowY = (scrollbarWidths.left || scrollbarWidths.right || // horizontal scrollbars?
                    this.canScrollVertically() // OR scrolling pane with massless scrollbars?
                ) ? 'scroll' : 'hidden';
            }
            applyStyle(this.el, { overflowX: overflowX, overflowY: overflowY });
        };
        ScrollComponent.prototype.setHeight = function (height) {
            applyStyleProp(this.el, 'height', height);
        };
        ScrollComponent.prototype.getScrollbarWidths = function () {
            var edges = computeEdges(this.el);
            return {
                left: edges.scrollbarLeft,
                right: edges.scrollbarRight,
                bottom: edges.scrollbarBottom
            };
        };
        return ScrollComponent;
    }(ElementScrollController));

    var Theme = /** @class */ (function () {
        function Theme(calendarOptions) {
            this.calendarOptions = calendarOptions;
            this.processIconOverride();
        }
        Theme.prototype.processIconOverride = function () {
            if (this.iconOverrideOption) {
                this.setIconOverride(this.calendarOptions[this.iconOverrideOption]);
            }
        };
        Theme.prototype.setIconOverride = function (iconOverrideHash) {
            var iconClassesCopy;
            var buttonName;
            if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
                iconClassesCopy = __assign({}, this.iconClasses);
                for (buttonName in iconOverrideHash) {
                    iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
                }
                this.iconClasses = iconClassesCopy;
            }
            else if (iconOverrideHash === false) {
                this.iconClasses = {};
            }
        };
        Theme.prototype.applyIconOverridePrefix = function (className) {
            var prefix = this.iconOverridePrefix;
            if (prefix && className.indexOf(prefix) !== 0) { // if not already present
                className = prefix + className;
            }
            return className;
        };
        Theme.prototype.getClass = function (key) {
            return this.classes[key] || '';
        };
        Theme.prototype.getIconClass = function (buttonName) {
            var className = this.iconClasses[buttonName];
            if (className) {
                return this.baseIconClass + ' ' + className;
            }
            return '';
        };
        Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
            var className;
            if (this.iconOverrideCustomButtonOption) {
                className = customButtonProps[this.iconOverrideCustomButtonOption];
                if (className) {
                    return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
                }
            }
            return '';
        };
        return Theme;
    }());
    Theme.prototype.classes = {};
    Theme.prototype.iconClasses = {};
    Theme.prototype.baseIconClass = '';
    Theme.prototype.iconOverridePrefix = '';

    var guid = 0;
    var Component = /** @class */ (function () {
        function Component(context, isView) {
            // HACK to populate view at top of component instantiation call chain
            if (isView) {
                context.view = this;
            }
            this.uid = String(guid++);
            this.context = context;
            this.dateEnv = context.dateEnv;
            this.theme = context.theme;
            this.view = context.view;
            this.calendar = context.calendar;
            this.isRtl = this.opt('dir') === 'rtl';
        }
        Component.addEqualityFuncs = function (newFuncs) {
            this.prototype.equalityFuncs = __assign({}, this.prototype.equalityFuncs, newFuncs);
        };
        Component.prototype.opt = function (name) {
            return this.context.options[name];
        };
        Component.prototype.receiveProps = function (props) {
            var _a = recycleProps(this.props || {}, props, this.equalityFuncs), anyChanges = _a.anyChanges, comboProps = _a.comboProps;
            this.props = comboProps;
            if (anyChanges) {
                this.render(comboProps);
            }
        };
        Component.prototype.render = function (props) {
        };
        // after destroy is called, this component won't ever be used again
        Component.prototype.destroy = function () {
        };
        return Component;
    }());
    Component.prototype.equalityFuncs = {};
    /*
    Reuses old values when equal. If anything is unequal, returns newProps as-is.
    Great for PureComponent, but won't be feasible with React, so just eliminate and use React's DOM diffing.
    */
    function recycleProps(oldProps, newProps, equalityFuncs) {
        var comboProps = {}; // some old, some new
        var anyChanges = false;
        for (var key in newProps) {
            if (key in oldProps && (oldProps[key] === newProps[key] ||
                (equalityFuncs[key] && equalityFuncs[key](oldProps[key], newProps[key])))) {
                // equal to old? use old prop
                comboProps[key] = oldProps[key];
            }
            else {
                comboProps[key] = newProps[key];
                anyChanges = true;
            }
        }
        for (var key in oldProps) {
            if (!(key in newProps)) {
                anyChanges = true;
                break;
            }
        }
        return { anyChanges: anyChanges, comboProps: comboProps };
    }

    /*
    PURPOSES:
    - hook up to fg, fill, and mirror renderers
    - interface for dragging and hits
    */
    var DateComponent = /** @class */ (function (_super) {
        __extends(DateComponent, _super);
        function DateComponent(context, el, isView) {
            var _this = _super.call(this, context, isView) || this;
            _this.el = el;
            return _this;
        }
        DateComponent.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            removeElement(this.el);
        };
        // TODO: WHAT ABOUT (sourceSeg && sourceSeg.component.doesDragMirror)
        //
        // Event Drag-n-Drop Rendering (for both events and external elements)
        // ---------------------------------------------------------------------------------------------------------------
        /*
        renderEventDragSegs(state: EventSegUiInteractionState) {
          if (state) {
            let { isEvent, segs, sourceSeg } = state
      
            if (this.eventRenderer) {
              this.eventRenderer.hideByHash(state.affectedInstances)
            }
      
            // if the user is dragging something that is considered an event with real event data,
            // and this component likes to do drag mirrors OR the component where the seg came from
            // likes to do drag mirrors, then render a drag mirror.
            if (isEvent && (this.doesDragMirror || sourceSeg && sourceSeg.component.doesDragMirror)) {
              if (this.mirrorRenderer) {
                this.mirrorRenderer.renderSegs(segs, { isDragging: true, sourceSeg })
              }
            }
      
            // if it would be impossible to render a drag mirror OR this component likes to render
            // highlights, then render a highlight.
            if (!isEvent || this.doesDragHighlight) {
              if (this.fillRenderer) {
                this.fillRenderer.renderSegs('highlight', segs)
              }
            }
          }
        }
        */
        // Hit System
        // -----------------------------------------------------------------------------------------------------------------
        DateComponent.prototype.buildPositionCaches = function () {
        };
        DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
            return null; // this should be abstract
        };
        // Validation
        // -----------------------------------------------------------------------------------------------------------------
        DateComponent.prototype.isInteractionValid = function (interaction) {
            var calendar = this.calendar;
            var dateProfile = this.props.dateProfile; // HACK
            var instances = interaction.mutatedEvents.instances;
            if (dateProfile) { // HACK for DayTile
                for (var instanceId in instances) {
                    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
                        return false;
                    }
                }
            }
            return isInteractionValid(interaction, calendar);
        };
        DateComponent.prototype.isDateSelectionValid = function (selection) {
            var dateProfile = this.props.dateProfile; // HACK
            if (dateProfile && // HACK for DayTile
                !rangeContainsRange(dateProfile.validRange, selection.range)) {
                return false;
            }
            return isDateSelectionValid(selection, this.calendar);
        };
        // Triggering
        // -----------------------------------------------------------------------------------------------------------------
        // TODO: move to Calendar
        DateComponent.prototype.publiclyTrigger = function (name, args) {
            var calendar = this.calendar;
            return calendar.publiclyTrigger(name, args);
        };
        DateComponent.prototype.publiclyTriggerAfterSizing = function (name, args) {
            var calendar = this.calendar;
            return calendar.publiclyTriggerAfterSizing(name, args);
        };
        DateComponent.prototype.hasPublicHandlers = function (name) {
            var calendar = this.calendar;
            return calendar.hasPublicHandlers(name);
        };
        DateComponent.prototype.triggerRenderedSegs = function (segs, isMirrors) {
            var calendar = this.calendar;
            if (this.hasPublicHandlers('eventPositioned')) {
                for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                    var seg = segs_1[_i];
                    this.publiclyTriggerAfterSizing('eventPositioned', [
                        {
                            event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                            isMirror: isMirrors,
                            isStart: seg.isStart,
                            isEnd: seg.isEnd,
                            el: seg.el,
                            view: this // ?
                        }
                    ]);
                }
            }
            if (!calendar.state.loadingLevel) { // avoid initial empty state while pending
                calendar.afterSizingTriggers._eventsPositioned = [null]; // fire once
            }
        };
        DateComponent.prototype.triggerWillRemoveSegs = function (segs, isMirrors) {
            var calendar = this.calendar;
            for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                var seg = segs_2[_i];
                calendar.trigger('eventElRemove', seg.el);
            }
            if (this.hasPublicHandlers('eventDestroy')) {
                for (var _a = 0, segs_3 = segs; _a < segs_3.length; _a++) {
                    var seg = segs_3[_a];
                    this.publiclyTrigger('eventDestroy', [
                        {
                            event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                            isMirror: isMirrors,
                            el: seg.el,
                            view: this // ?
                        }
                    ]);
                }
            }
        };
        // Pointer Interaction Utils
        // -----------------------------------------------------------------------------------------------------------------
        DateComponent.prototype.isValidSegDownEl = function (el) {
            return !this.props.eventDrag && // HACK
                !this.props.eventResize && // HACK
                !elementClosest(el, '.fc-mirror') &&
                (this.isPopover() || !this.isInPopover(el));
            // ^above line ensures we don't detect a seg interaction within a nested component.
            // it's a HACK because it only supports a popover as the nested component.
        };
        DateComponent.prototype.isValidDateDownEl = function (el) {
            var segEl = elementClosest(el, this.fgSegSelector);
            return (!segEl || segEl.classList.contains('fc-mirror')) &&
                !elementClosest(el, '.fc-more') && // a "more.." link
                !elementClosest(el, 'a[data-goto]') && // a clickable nav link
                !this.isInPopover(el);
        };
        DateComponent.prototype.isPopover = function () {
            return this.el.classList.contains('fc-popover');
        };
        DateComponent.prototype.isInPopover = function (el) {
            return Boolean(elementClosest(el, '.fc-popover'));
        };
        return DateComponent;
    }(Component));
    DateComponent.prototype.fgSegSelector = '.fc-event-container > *';
    DateComponent.prototype.bgSegSelector = '.fc-bgevent:not(.fc-nonbusiness)';

    var uid$1 = 0;
    function createPlugin(input) {
        return {
            id: String(uid$1++),
            deps: input.deps || [],
            reducers: input.reducers || [],
            eventDefParsers: input.eventDefParsers || [],
            eventDragMutationMassagers: input.eventDragMutationMassagers || [],
            eventDefMutationAppliers: input.eventDefMutationAppliers || [],
            dateSelectionTransformers: input.dateSelectionTransformers || [],
            datePointTransforms: input.datePointTransforms || [],
            dateSpanTransforms: input.dateSpanTransforms || [],
            views: input.views || {},
            viewPropsTransformers: input.viewPropsTransformers || [],
            isPropsValid: input.isPropsValid || null,
            externalDefTransforms: input.externalDefTransforms || [],
            eventResizeJoinTransforms: input.eventResizeJoinTransforms || [],
            viewContainerModifiers: input.viewContainerModifiers || [],
            eventDropTransformers: input.eventDropTransformers || [],
            componentInteractions: input.componentInteractions || [],
            calendarInteractions: input.calendarInteractions || [],
            themeClasses: input.themeClasses || {},
            eventSourceDefs: input.eventSourceDefs || [],
            cmdFormatter: input.cmdFormatter,
            recurringTypes: input.recurringTypes || [],
            namedTimeZonedImpl: input.namedTimeZonedImpl,
            defaultView: input.defaultView || '',
            elementDraggingImpl: input.elementDraggingImpl,
            optionChangeHandlers: input.optionChangeHandlers || {}
        };
    }
    var PluginSystem = /** @class */ (function () {
        function PluginSystem() {
            this.hooks = {
                reducers: [],
                eventDefParsers: [],
                eventDragMutationMassagers: [],
                eventDefMutationAppliers: [],
                dateSelectionTransformers: [],
                datePointTransforms: [],
                dateSpanTransforms: [],
                views: {},
                viewPropsTransformers: [],
                isPropsValid: null,
                externalDefTransforms: [],
                eventResizeJoinTransforms: [],
                viewContainerModifiers: [],
                eventDropTransformers: [],
                componentInteractions: [],
                calendarInteractions: [],
                themeClasses: {},
                eventSourceDefs: [],
                cmdFormatter: null,
                recurringTypes: [],
                namedTimeZonedImpl: null,
                defaultView: '',
                elementDraggingImpl: null,
                optionChangeHandlers: {}
            };
            this.addedHash = {};
        }
        PluginSystem.prototype.add = function (plugin) {
            if (!this.addedHash[plugin.id]) {
                this.addedHash[plugin.id] = true;
                for (var _i = 0, _a = plugin.deps; _i < _a.length; _i++) {
                    var dep = _a[_i];
                    this.add(dep);
                }
                this.hooks = combineHooks(this.hooks, plugin);
            }
        };
        return PluginSystem;
    }());
    function combineHooks(hooks0, hooks1) {
        return {
            reducers: hooks0.reducers.concat(hooks1.reducers),
            eventDefParsers: hooks0.eventDefParsers.concat(hooks1.eventDefParsers),
            eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
            eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
            dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
            datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
            dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
            views: __assign({}, hooks0.views, hooks1.views),
            viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
            isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
            externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
            eventResizeJoinTransforms: hooks0.eventResizeJoinTransforms.concat(hooks1.eventResizeJoinTransforms),
            viewContainerModifiers: hooks0.viewContainerModifiers.concat(hooks1.viewContainerModifiers),
            eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
            calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
            componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
            themeClasses: __assign({}, hooks0.themeClasses, hooks1.themeClasses),
            eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
            cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
            recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
            namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
            defaultView: hooks0.defaultView || hooks1.defaultView,
            elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
            optionChangeHandlers: __assign({}, hooks0.optionChangeHandlers, hooks1.optionChangeHandlers)
        };
    }

    var eventSourceDef = {
        ignoreRange: true,
        parseMeta: function (raw) {
            if (Array.isArray(raw)) { // short form
                return raw;
            }
            else if (Array.isArray(raw.events)) {
                return raw.events;
            }
            return null;
        },
        fetch: function (arg, success) {
            success({
                rawEvents: arg.eventSource.meta
            });
        }
    };
    var ArrayEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef]
    });

    var eventSourceDef$1 = {
        parseMeta: function (raw) {
            if (typeof raw === 'function') { // short form
                return raw;
            }
            else if (typeof raw.events === 'function') {
                return raw.events;
            }
            return null;
        },
        fetch: function (arg, success, failure) {
            var dateEnv = arg.calendar.dateEnv;
            var func = arg.eventSource.meta;
            unpromisify(func.bind(null, {
                start: dateEnv.toDate(arg.range.start),
                end: dateEnv.toDate(arg.range.end),
                startStr: dateEnv.formatIso(arg.range.start),
                endStr: dateEnv.formatIso(arg.range.end),
                timeZone: dateEnv.timeZone
            }), function (rawEvents) {
                success({ rawEvents: rawEvents }); // needs an object response
            }, failure // send errorObj directly to failure callback
            );
        }
    };
    var FuncEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef$1]
    });

    function requestJson(method, url, params, successCallback, failureCallback) {
        method = method.toUpperCase();
        var body = null;
        if (method === 'GET') {
            url = injectQueryStringParams(url, params);
        }
        else {
            body = encodeParams(params);
        }
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (method !== 'GET') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                try {
                    var res = JSON.parse(xhr.responseText);
                    successCallback(res, xhr);
                }
                catch (err) {
                    failureCallback('Failure parsing JSON', xhr);
                }
            }
            else {
                failureCallback('Request failed', xhr);
            }
        };
        xhr.onerror = function () {
            failureCallback('Request failed', xhr);
        };
        xhr.send(body);
    }
    function injectQueryStringParams(url, params) {
        return url +
            (url.indexOf('?') === -1 ? '?' : '&') +
            encodeParams(params);
    }
    function encodeParams(params) {
        var parts = [];
        for (var key in params) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
        return parts.join('&');
    }

    var eventSourceDef$2 = {
        parseMeta: function (raw) {
            if (typeof raw === 'string') { // short form
                raw = { url: raw };
            }
            else if (!raw || typeof raw !== 'object' || !raw.url) {
                return null;
            }
            return {
                url: raw.url,
                method: (raw.method || 'GET').toUpperCase(),
                extraParams: raw.extraParams,
                startParam: raw.startParam,
                endParam: raw.endParam,
                timeZoneParam: raw.timeZoneParam
            };
        },
        fetch: function (arg, success, failure) {
            var meta = arg.eventSource.meta;
            var requestParams = buildRequestParams(meta, arg.range, arg.calendar);
            requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
                success({ rawEvents: rawEvents, xhr: xhr });
            }, function (errorMessage, xhr) {
                failure({ message: errorMessage, xhr: xhr });
            });
        }
    };
    var JsonFeedEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef$2]
    });
    function buildRequestParams(meta, range, calendar) {
        var dateEnv = calendar.dateEnv;
        var startParam;
        var endParam;
        var timeZoneParam;
        var customRequestParams;
        var params = {};
        startParam = meta.startParam;
        if (startParam == null) {
            startParam = calendar.opt('startParam');
        }
        endParam = meta.endParam;
        if (endParam == null) {
            endParam = calendar.opt('endParam');
        }
        timeZoneParam = meta.timeZoneParam;
        if (timeZoneParam == null) {
            timeZoneParam = calendar.opt('timeZoneParam');
        }
        // retrieve any outbound GET/POST data from the options
        if (typeof meta.extraParams === 'function') {
            // supplied as a function that returns a key/value object
            customRequestParams = meta.extraParams();
        }
        else {
            // probably supplied as a straight key/value object
            customRequestParams = meta.extraParams || {};
        }
        __assign(params, customRequestParams);
        params[startParam] = dateEnv.formatIso(range.start);
        params[endParam] = dateEnv.formatIso(range.end);
        if (dateEnv.timeZone !== 'local') {
            params[timeZoneParam] = dateEnv.timeZone;
        }
        return params;
    }

    var recurring = {
        parse: function (rawEvent, leftoverProps, dateEnv) {
            var createMarker = dateEnv.createMarker.bind(dateEnv);
            var processors = {
                daysOfWeek: null,
                startTime: createDuration,
                endTime: createDuration,
                startRecur: createMarker,
                endRecur: createMarker
            };
            var props = refineProps(rawEvent, processors, {}, leftoverProps);
            var anyValid = false;
            for (var propName in props) {
                if (props[propName] != null) {
                    anyValid = true;
                    break;
                }
            }
            if (anyValid) {
                return {
                    allDayGuess: Boolean(!props.startTime && !props.endTime),
                    duration: (props.startTime && props.endTime) ?
                        subtractDurations(props.endTime, props.startTime) :
                        null,
                    typeData: props // doesn't need endTime anymore but oh well
                };
            }
            return null;
        },
        expand: function (typeData, framingRange, dateEnv) {
            var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
            if (clippedFramingRange) {
                return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
            }
            else {
                return [];
            }
        }
    };
    var SimpleRecurrencePlugin = createPlugin({
        recurringTypes: [recurring]
    });
    function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
        var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
        var dayMarker = startOfDay(framingRange.start);
        var endMarker = framingRange.end;
        var instanceStarts = [];
        while (dayMarker < endMarker) {
            var instanceStart 
            // if everyday, or this particular day-of-week
            = void 0;
            // if everyday, or this particular day-of-week
            if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
                if (startTime) {
                    instanceStart = dateEnv.add(dayMarker, startTime);
                }
                else {
                    instanceStart = dayMarker;
                }
                instanceStarts.push(instanceStart);
            }
            dayMarker = addDays(dayMarker, 1);
        }
        return instanceStarts;
    }

    var DefaultOptionChangeHandlers = createPlugin({
        optionChangeHandlers: {
            events: function (events, calendar) {
                handleEventSources([events], calendar);
            },
            eventSources: handleEventSources,
            plugins: handlePlugins
        }
    });
    function handleEventSources(inputs, calendar) {
        var unfoundSources = hashValuesToArray(calendar.state.eventSources);
        var newInputs = [];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var inputFound = false;
            for (var i = 0; i < unfoundSources.length; i++) {
                if (isValuesSimilar(unfoundSources[i]._raw, input, 2)) {
                    unfoundSources.splice(i, 1); // delete
                    inputFound = true;
                    break;
                }
            }
            if (!inputFound) {
                newInputs.push(input);
            }
        }
        for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
            var unfoundSource = unfoundSources_1[_a];
            calendar.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: unfoundSource.sourceId
            });
        }
        for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
            var newInput = newInputs_1[_b];
            calendar.addEventSource(newInput);
        }
    }
    // shortcoming: won't remove plugins
    function handlePlugins(inputs, calendar) {
        calendar.addPluginInputs(inputs); // will gracefully handle duplicates
    }

    var config = {}; // TODO: make these options
    var globalDefaults = {
        defaultRangeSeparator: ' - ',
        titleRangeSeparator: ' \u2013 ',
        defaultTimedEventDuration: '01:00:00',
        defaultAllDayEventDuration: { day: 1 },
        forceEventDuration: false,
        nextDayThreshold: '00:00:00',
        // display
        columnHeader: true,
        defaultView: '',
        aspectRatio: 1.35,
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next'
        },
        weekends: true,
        weekNumbers: false,
        weekNumberCalculation: 'local',
        editable: false,
        // nowIndicator: false,
        scrollTime: '06:00:00',
        minTime: '00:00:00',
        maxTime: '24:00:00',
        showNonCurrentDates: true,
        // event ajax
        lazyFetching: true,
        startParam: 'start',
        endParam: 'end',
        timeZoneParam: 'timeZone',
        timeZone: 'local',
        // allDayDefault: undefined,
        // locale
        locales: [],
        locale: '',
        // dir: will get this from the default locale
        // buttonIcons: null,
        // allows setting a min-height to the event segment to prevent short events overlapping each other
        timeGridEventMinHeight: 0,
        themeSystem: 'standard',
        // eventResizableFromStart: false,
        dragRevertDuration: 500,
        dragScroll: true,
        allDayMaintainDuration: false,
        // selectable: false,
        unselectAuto: true,
        // selectMinDistance: 0,
        dropAccept: '*',
        eventOrder: 'start,-duration,allDay,title',
        // ^ if start tie, longer events go before shorter. final tie-breaker is title text
        // rerenderDelay: null,
        eventLimit: false,
        eventLimitClick: 'popover',
        dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        handleWindowResize: true,
        windowResizeDelay: 100,
        longPressDelay: 1000,
        eventDragMinDistance: 5 // only applies to mouse
    };
    var rtlDefaults = {
        header: {
            left: 'next,prev today',
            center: '',
            right: 'title'
        },
        buttonIcons: {
            // TODO: make RTL support the responibility of the theme
            prev: 'fc-icon-chevron-right',
            next: 'fc-icon-chevron-left',
            prevYear: 'fc-icon-chevrons-right',
            nextYear: 'fc-icon-chevrons-left'
        }
    };
    var complexOptions = [
        'header',
        'footer',
        'buttonText',
        'buttonIcons'
    ];
    // Merges an array of option objects into a single object
    function mergeOptions(optionObjs) {
        return mergeProps(optionObjs, complexOptions);
    }
    // TODO: move this stuff to a "plugin"-related file...
    var INTERNAL_PLUGINS = [
        ArrayEventSourcePlugin,
        FuncEventSourcePlugin,
        JsonFeedEventSourcePlugin,
        SimpleRecurrencePlugin,
        DefaultOptionChangeHandlers
    ];
    function refinePluginDefs(pluginInputs) {
        var plugins = [];
        for (var _i = 0, pluginInputs_1 = pluginInputs; _i < pluginInputs_1.length; _i++) {
            var pluginInput = pluginInputs_1[_i];
            if (typeof pluginInput === 'string') {
                var globalName = 'FullCalendar' + capitaliseFirstLetter(pluginInput);
                if (!window[globalName]) {
                    console.warn('Plugin file not loaded for ' + pluginInput);
                }
                else {
                    plugins.push(window[globalName].default); // is an ES6 module
                }
            }
            else {
                plugins.push(pluginInput);
            }
        }
        return INTERNAL_PLUGINS.concat(plugins);
    }

    var RAW_EN_LOCALE = {
        code: 'en',
        week: {
            dow: 0,
            doy: 4 // 4 days need to be within the year to be considered the first week
        },
        dir: 'ltr',
        buttonText: {
            prev: 'prev',
            next: 'next',
            prevYear: 'prev year',
            nextYear: 'next year',
            year: 'year',
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day',
            list: 'list'
        },
        weekLabel: 'W',
        allDayText: 'all-day',
        eventLimitText: 'more',
        noEventsMessage: 'No events to display'
    };
    function parseRawLocales(explicitRawLocales) {
        var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
        var globalArray = window['FullCalendarLocalesAll'] || []; // from locales-all.js
        var globalObject = window['FullCalendarLocales'] || {}; // from locales/*.js. keys are meaningless
        var allRawLocales = globalArray.concat(// globalArray is low prio
        hashValuesToArray(globalObject), // medium prio
        explicitRawLocales // highest prio
        );
        var rawLocaleMap = {
            en: RAW_EN_LOCALE // necessary?
        };
        for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
            var rawLocale = allRawLocales_1[_i];
            rawLocaleMap[rawLocale.code] = rawLocale;
        }
        return {
            map: rawLocaleMap,
            defaultCode: defaultCode
        };
    }
    function buildLocale(inputSingular, available) {
        if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
            return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
        }
        else {
            return queryLocale(inputSingular, available);
        }
    }
    function queryLocale(codeArg, available) {
        var codes = [].concat(codeArg || []); // will convert to array
        var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
        return parseLocale(codeArg, codes, raw);
    }
    function queryRawLocale(codes, available) {
        for (var i = 0; i < codes.length; i++) {
            var parts = codes[i].toLocaleLowerCase().split('-');
            for (var j = parts.length; j > 0; j--) {
                var simpleId = parts.slice(0, j).join('-');
                if (available[simpleId]) {
                    return available[simpleId];
                }
            }
        }
        return null;
    }
    function parseLocale(codeArg, codes, raw) {
        var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
        delete merged.code; // don't want this part of the options
        var week = merged.week;
        delete merged.week;
        return {
            codeArg: codeArg,
            codes: codes,
            week: week,
            simpleNumberFormat: new Intl.NumberFormat(codeArg),
            options: merged
        };
    }

    var OptionsManager = /** @class */ (function () {
        function OptionsManager(overrides) {
            this.overrides = __assign({}, overrides); // make a copy
            this.dynamicOverrides = {};
            this.compute();
        }
        OptionsManager.prototype.add = function (props) {
            __assign(this.overrides, props);
            this.compute();
        };
        OptionsManager.prototype.addDynamic = function (props) {
            __assign(this.dynamicOverrides, props);
            this.compute();
        };
        OptionsManager.prototype.reset = function (props) {
            this.overrides = props;
            this.compute();
        };
        // Computes the flattened options hash for the calendar and assigns to `this.options`.
        // Assumes this.overrides and this.dynamicOverrides have already been initialized.
        OptionsManager.prototype.compute = function () {
            // TODO: not a very efficient system
            var locales = firstDefined(// explicit locale option given?
            this.dynamicOverrides.locales, this.overrides.locales, globalDefaults.locales);
            var locale = firstDefined(// explicit locales option given?
            this.dynamicOverrides.locale, this.overrides.locale, globalDefaults.locale);
            var available = parseRawLocales(locales);
            var localeDefaults = buildLocale(locale || available.defaultCode, available.map).options;
            var dir = firstDefined(// based on options computed so far, is direction RTL?
            this.dynamicOverrides.dir, this.overrides.dir, localeDefaults.dir);
            var dirDefaults = dir === 'rtl' ? rtlDefaults : {};
            this.dirDefaults = dirDefaults;
            this.localeDefaults = localeDefaults;
            this.computed = mergeOptions([
                globalDefaults,
                dirDefaults,
                localeDefaults,
                this.overrides,
                this.dynamicOverrides
            ]);
        };
        return OptionsManager;
    }());

    var calendarSystemClassMap = {};
    function registerCalendarSystem(name, theClass) {
        calendarSystemClassMap[name] = theClass;
    }
    function createCalendarSystem(name) {
        return new calendarSystemClassMap[name]();
    }
    var GregorianCalendarSystem = /** @class */ (function () {
        function GregorianCalendarSystem() {
        }
        GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
            return d.getUTCFullYear();
        };
        GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
            return d.getUTCMonth();
        };
        GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
            return d.getUTCDate();
        };
        GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
            return arrayToUtcDate(arr);
        };
        GregorianCalendarSystem.prototype.markerToArray = function (marker) {
            return dateToUtcArray(marker);
        };
        return GregorianCalendarSystem;
    }());
    registerCalendarSystem('gregory', GregorianCalendarSystem);

    var ISO_RE = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function parse(str) {
        var m = ISO_RE.exec(str);
        if (m) {
            var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number('0.' + m[12]) * 1000 : 0));
            if (isValidDate(marker)) {
                var timeZoneOffset = null;
                if (m[13]) {
                    timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                        Number(m[18] || 0));
                }
                return {
                    marker: marker,
                    isTimeUnspecified: !m[6],
                    timeZoneOffset: timeZoneOffset
                };
            }
        }
        return null;
    }

    var DateEnv = /** @class */ (function () {
        function DateEnv(settings) {
            var timeZone = this.timeZone = settings.timeZone;
            var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
            if (settings.namedTimeZoneImpl && isNamedTimeZone) {
                this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
            }
            this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
            this.calendarSystem = createCalendarSystem(settings.calendarSystem);
            this.locale = settings.locale;
            this.weekDow = settings.locale.week.dow;
            this.weekDoy = settings.locale.week.doy;
            if (settings.weekNumberCalculation === 'ISO') {
                this.weekDow = 1;
                this.weekDoy = 4;
            }
            else if (typeof settings.firstDay === 'number') {
                this.weekDow = settings.firstDay;
            }
            if (typeof settings.weekNumberCalculation === 'function') {
                this.weekNumberFunc = settings.weekNumberCalculation;
            }
            this.weekLabel = settings.weekLabel != null ? settings.weekLabel : settings.locale.options.weekLabel;
            this.cmdFormatter = settings.cmdFormatter;
        }
        // Creating / Parsing
        DateEnv.prototype.createMarker = function (input) {
            var meta = this.createMarkerMeta(input);
            if (meta === null) {
                return null;
            }
            return meta.marker;
        };
        DateEnv.prototype.createNowMarker = function () {
            if (this.canComputeOffset) {
                return this.timestampToMarker(new Date().valueOf());
            }
            else {
                // if we can't compute the current date val for a timezone,
                // better to give the current local date vals than UTC
                return arrayToUtcDate(dateToLocalArray(new Date()));
            }
        };
        DateEnv.prototype.createMarkerMeta = function (input) {
            if (typeof input === 'string') {
                return this.parse(input);
            }
            var marker = null;
            if (typeof input === 'number') {
                marker = this.timestampToMarker(input);
            }
            else if (input instanceof Date) {
                input = input.valueOf();
                if (!isNaN(input)) {
                    marker = this.timestampToMarker(input);
                }
            }
            else if (Array.isArray(input)) {
                marker = arrayToUtcDate(input);
            }
            if (marker === null || !isValidDate(marker)) {
                return null;
            }
            return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
        };
        DateEnv.prototype.parse = function (s) {
            var parts = parse(s);
            if (parts === null) {
                return null;
            }
            var marker = parts.marker;
            var forcedTzo = null;
            if (parts.timeZoneOffset !== null) {
                if (this.canComputeOffset) {
                    marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
                }
                else {
                    forcedTzo = parts.timeZoneOffset;
                }
            }
            return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
        };
        // Accessors
        DateEnv.prototype.getYear = function (marker) {
            return this.calendarSystem.getMarkerYear(marker);
        };
        DateEnv.prototype.getMonth = function (marker) {
            return this.calendarSystem.getMarkerMonth(marker);
        };
        // Adding / Subtracting
        DateEnv.prototype.add = function (marker, dur) {
            var a = this.calendarSystem.markerToArray(marker);
            a[0] += dur.years;
            a[1] += dur.months;
            a[2] += dur.days;
            a[6] += dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.subtract = function (marker, dur) {
            var a = this.calendarSystem.markerToArray(marker);
            a[0] -= dur.years;
            a[1] -= dur.months;
            a[2] -= dur.days;
            a[6] -= dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.addYears = function (marker, n) {
            var a = this.calendarSystem.markerToArray(marker);
            a[0] += n;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.addMonths = function (marker, n) {
            var a = this.calendarSystem.markerToArray(marker);
            a[1] += n;
            return this.calendarSystem.arrayToMarker(a);
        };
        // Diffing Whole Units
        DateEnv.prototype.diffWholeYears = function (m0, m1) {
            var calendarSystem = this.calendarSystem;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
                calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
                return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
            }
            return null;
        };
        DateEnv.prototype.diffWholeMonths = function (m0, m1) {
            var calendarSystem = this.calendarSystem;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
                return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                    (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
            }
            return null;
        };
        // Range / Duration
        DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
            var n = this.diffWholeYears(m0, m1);
            if (n !== null) {
                return { unit: 'year', value: n };
            }
            n = this.diffWholeMonths(m0, m1);
            if (n !== null) {
                return { unit: 'month', value: n };
            }
            n = diffWholeWeeks(m0, m1);
            if (n !== null) {
                return { unit: 'week', value: n };
            }
            n = diffWholeDays(m0, m1);
            if (n !== null) {
                return { unit: 'day', value: n };
            }
            n = diffHours(m0, m1);
            if (isInt(n)) {
                return { unit: 'hour', value: n };
            }
            n = diffMinutes(m0, m1);
            if (isInt(n)) {
                return { unit: 'minute', value: n };
            }
            n = diffSeconds(m0, m1);
            if (isInt(n)) {
                return { unit: 'second', value: n };
            }
            return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
        };
        DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
            // TODO: can use greatestWholeUnit
            var diff;
            if (d.years) {
                diff = this.diffWholeYears(m0, m1);
                if (diff !== null) {
                    return diff / asRoughYears(d);
                }
            }
            if (d.months) {
                diff = this.diffWholeMonths(m0, m1);
                if (diff !== null) {
                    return diff / asRoughMonths(d);
                }
            }
            if (d.days) {
                diff = diffWholeDays(m0, m1);
                if (diff !== null) {
                    return diff / asRoughDays(d);
                }
            }
            return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
        };
        // Start-Of
        DateEnv.prototype.startOf = function (m, unit) {
            if (unit === 'year') {
                return this.startOfYear(m);
            }
            else if (unit === 'month') {
                return this.startOfMonth(m);
            }
            else if (unit === 'week') {
                return this.startOfWeek(m);
            }
            else if (unit === 'day') {
                return startOfDay(m);
            }
            else if (unit === 'hour') {
                return startOfHour(m);
            }
            else if (unit === 'minute') {
                return startOfMinute(m);
            }
            else if (unit === 'second') {
                return startOfSecond(m);
            }
        };
        DateEnv.prototype.startOfYear = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m)
            ]);
        };
        DateEnv.prototype.startOfMonth = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m)
            ]);
        };
        DateEnv.prototype.startOfWeek = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m),
                m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7)
            ]);
        };
        // Week Number
        DateEnv.prototype.computeWeekNumber = function (marker) {
            if (this.weekNumberFunc) {
                return this.weekNumberFunc(this.toDate(marker));
            }
            else {
                return weekOfYear(marker, this.weekDow, this.weekDoy);
            }
        };
        // TODO: choke on timeZoneName: long
        DateEnv.prototype.format = function (marker, formatter, dateOptions) {
            if (dateOptions === void 0) { dateOptions = {}; }
            return formatter.format({
                marker: marker,
                timeZoneOffset: dateOptions.forcedTzo != null ?
                    dateOptions.forcedTzo :
                    this.offsetForMarker(marker)
            }, this);
        };
        DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
            if (dateOptions === void 0) { dateOptions = {}; }
            if (dateOptions.isEndExclusive) {
                end = addMs(end, -1);
            }
            return formatter.formatRange({
                marker: start,
                timeZoneOffset: dateOptions.forcedStartTzo != null ?
                    dateOptions.forcedStartTzo :
                    this.offsetForMarker(start)
            }, {
                marker: end,
                timeZoneOffset: dateOptions.forcedEndTzo != null ?
                    dateOptions.forcedEndTzo :
                    this.offsetForMarker(end)
            }, this);
        };
        DateEnv.prototype.formatIso = function (marker, extraOptions) {
            if (extraOptions === void 0) { extraOptions = {}; }
            var timeZoneOffset = null;
            if (!extraOptions.omitTimeZoneOffset) {
                if (extraOptions.forcedTzo != null) {
                    timeZoneOffset = extraOptions.forcedTzo;
                }
                else {
                    timeZoneOffset = this.offsetForMarker(marker);
                }
            }
            return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
        };
        // TimeZone
        DateEnv.prototype.timestampToMarker = function (ms) {
            if (this.timeZone === 'local') {
                return arrayToUtcDate(dateToLocalArray(new Date(ms)));
            }
            else if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
                return new Date(ms);
            }
            else {
                return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
            }
        };
        DateEnv.prototype.offsetForMarker = function (m) {
            if (this.timeZone === 'local') {
                return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
            }
            else if (this.timeZone === 'UTC') {
                return 0;
            }
            else if (this.namedTimeZoneImpl) {
                return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
            }
            return null;
        };
        // Conversion
        DateEnv.prototype.toDate = function (m, forcedTzo) {
            if (this.timeZone === 'local') {
                return arrayToLocalDate(dateToUtcArray(m));
            }
            else if (this.timeZone === 'UTC') {
                return new Date(m.valueOf()); // make sure it's a copy
            }
            else if (!this.namedTimeZoneImpl) {
                return new Date(m.valueOf() - (forcedTzo || 0));
            }
            else {
                return new Date(m.valueOf() -
                    this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60 // convert minutes -> ms
                );
            }
        };
        return DateEnv;
    }());

    var SIMPLE_SOURCE_PROPS = {
        id: String,
        allDayDefault: Boolean,
        eventDataTransform: Function,
        success: Function,
        failure: Function
    };
    var uid$2 = 0;
    function doesSourceNeedRange(eventSource, calendar) {
        var defs = calendar.pluginSystem.hooks.eventSourceDefs;
        return !defs[eventSource.sourceDefId].ignoreRange;
    }
    function parseEventSource(raw, calendar) {
        var defs = calendar.pluginSystem.hooks.eventSourceDefs;
        for (var i = defs.length - 1; i >= 0; i--) { // later-added plugins take precedence
            var def = defs[i];
            var meta = def.parseMeta(raw);
            if (meta) {
                var res = parseEventSourceProps(typeof raw === 'object' ? raw : {}, meta, i, calendar);
                res._raw = freezeRaw(raw);
                return res;
            }
        }
        return null;
    }
    function parseEventSourceProps(raw, meta, sourceDefId, calendar) {
        var leftovers0 = {};
        var props = refineProps(raw, SIMPLE_SOURCE_PROPS, {}, leftovers0);
        var leftovers1 = {};
        var ui = processUnscopedUiProps(leftovers0, calendar, leftovers1);
        props.isFetching = false;
        props.latestFetchId = '';
        props.fetchRange = null;
        props.publicId = String(raw.id || '');
        props.sourceId = String(uid$2++);
        props.sourceDefId = sourceDefId;
        props.meta = meta;
        props.ui = ui;
        props.extendedProps = leftovers1;
        return props;
    }

    function reduceEventSources (eventSources, action, dateProfile, calendar) {
        switch (action.type) {
            case 'ADD_EVENT_SOURCES': // already parsed
                return addSources(eventSources, action.sources, dateProfile ? dateProfile.activeRange : null, calendar);
            case 'REMOVE_EVENT_SOURCE':
                return removeSource(eventSources, action.sourceId);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                if (dateProfile) {
                    return fetchDirtySources(eventSources, dateProfile.activeRange, calendar);
                }
                else {
                    return eventSources;
                }
            case 'FETCH_EVENT_SOURCES':
            case 'CHANGE_TIMEZONE':
                return fetchSourcesByIds(eventSources, action.sourceIds ?
                    arrayToHash(action.sourceIds) :
                    excludeStaticSources(eventSources, calendar), dateProfile ? dateProfile.activeRange : null, calendar);
            case 'RECEIVE_EVENTS':
            case 'RECEIVE_EVENT_ERROR':
                return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return {};
            default:
                return eventSources;
        }
    }
    var uid$3 = 0;
    function addSources(eventSourceHash, sources, fetchRange, calendar) {
        var hash = {};
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var source = sources_1[_i];
            hash[source.sourceId] = source;
        }
        if (fetchRange) {
            hash = fetchDirtySources(hash, fetchRange, calendar);
        }
        return __assign({}, eventSourceHash, hash);
    }
    function removeSource(eventSourceHash, sourceId) {
        return filterHash(eventSourceHash, function (eventSource) {
            return eventSource.sourceId !== sourceId;
        });
    }
    function fetchDirtySources(sourceHash, fetchRange, calendar) {
        return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
            return isSourceDirty(eventSource, fetchRange, calendar);
        }), fetchRange, calendar);
    }
    function isSourceDirty(eventSource, fetchRange, calendar) {
        if (!doesSourceNeedRange(eventSource, calendar)) {
            return !eventSource.latestFetchId;
        }
        else {
            return !calendar.opt('lazyFetching') ||
                !eventSource.fetchRange ||
                fetchRange.start < eventSource.fetchRange.start ||
                fetchRange.end > eventSource.fetchRange.end;
        }
    }
    function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, calendar) {
        var nextSources = {};
        for (var sourceId in prevSources) {
            var source = prevSources[sourceId];
            if (sourceIdHash[sourceId]) {
                nextSources[sourceId] = fetchSource(source, fetchRange, calendar);
            }
            else {
                nextSources[sourceId] = source;
            }
        }
        return nextSources;
    }
    function fetchSource(eventSource, fetchRange, calendar) {
        var sourceDef = calendar.pluginSystem.hooks.eventSourceDefs[eventSource.sourceDefId];
        var fetchId = String(uid$3++);
        sourceDef.fetch({
            eventSource: eventSource,
            calendar: calendar,
            range: fetchRange
        }, function (res) {
            var rawEvents = res.rawEvents;
            var calSuccess = calendar.opt('eventSourceSuccess');
            var calSuccessRes;
            var sourceSuccessRes;
            if (eventSource.success) {
                sourceSuccessRes = eventSource.success(rawEvents, res.xhr);
            }
            if (calSuccess) {
                calSuccessRes = calSuccess(rawEvents, res.xhr);
            }
            rawEvents = sourceSuccessRes || calSuccessRes || rawEvents;
            calendar.dispatch({
                type: 'RECEIVE_EVENTS',
                sourceId: eventSource.sourceId,
                fetchId: fetchId,
                fetchRange: fetchRange,
                rawEvents: rawEvents
            });
        }, function (error) {
            var callFailure = calendar.opt('eventSourceFailure');
            console.warn(error.message, error);
            if (eventSource.failure) {
                eventSource.failure(error);
            }
            if (callFailure) {
                callFailure(error);
            }
            calendar.dispatch({
                type: 'RECEIVE_EVENT_ERROR',
                sourceId: eventSource.sourceId,
                fetchId: fetchId,
                fetchRange: fetchRange,
                error: error
            });
        });
        return __assign({}, eventSource, { isFetching: true, latestFetchId: fetchId });
    }
    function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
        var _a;
        var eventSource = sourceHash[sourceId];
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId) {
            return __assign({}, sourceHash, (_a = {}, _a[sourceId] = __assign({}, eventSource, { isFetching: false, fetchRange: fetchRange }), _a));
        }
        return sourceHash;
    }
    function excludeStaticSources(eventSources, calendar) {
        return filterHash(eventSources, function (eventSource) {
            return doesSourceNeedRange(eventSource, calendar);
        });
    }

    var DateProfileGenerator = /** @class */ (function () {
        function DateProfileGenerator(viewSpec, calendar) {
            this.viewSpec = viewSpec;
            this.options = viewSpec.options;
            this.dateEnv = calendar.dateEnv;
            this.calendar = calendar;
            this.initHiddenDays();
        }
        /* Date Range Computation
        ------------------------------------------------------------------------------------------------------------------*/
        // Builds a structure with info about what the dates/ranges will be for the "prev" view.
        DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate) {
            var dateEnv = this.dateEnv;
            var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(prevDate, -1);
        };
        // Builds a structure with info about what the dates/ranges will be for the "next" view.
        DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate) {
            var dateEnv = this.dateEnv;
            var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(nextDate, 1);
        };
        // Builds a structure holding dates/ranges for rendering around the given date.
        // Optional direction param indicates whether the date is being incremented/decremented
        // from its previous value. decremented = -1, incremented = 1 (default).
        DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
            if (forceToValid === void 0) { forceToValid = false; }
            var validRange;
            var minTime = null;
            var maxTime = null;
            var currentInfo;
            var isRangeAllDay;
            var renderRange;
            var activeRange;
            var isValid;
            validRange = this.buildValidRange();
            validRange = this.trimHiddenDays(validRange);
            if (forceToValid) {
                currentDate = constrainMarkerToRange(currentDate, validRange);
            }
            currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
            isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
            renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
            renderRange = this.trimHiddenDays(renderRange);
            activeRange = renderRange;
            if (!this.options.showNonCurrentDates) {
                activeRange = intersectRanges(activeRange, currentInfo.range);
            }
            minTime = createDuration(this.options.minTime);
            maxTime = createDuration(this.options.maxTime);
            activeRange = this.adjustActiveRange(activeRange, minTime, maxTime);
            activeRange = intersectRanges(activeRange, validRange); // might return null
            // it's invalid if the originally requested date is not contained,
            // or if the range is completely outside of the valid range.
            isValid = rangesIntersect(currentInfo.range, validRange);
            return {
                // constraint for where prev/next operations can go and where events can be dragged/resized to.
                // an object with optional start and end properties.
                validRange: validRange,
                // range the view is formally responsible for.
                // for example, a month view might have 1st-31st, excluding padded dates
                currentRange: currentInfo.range,
                // name of largest unit being displayed, like "month" or "week"
                currentRangeUnit: currentInfo.unit,
                isRangeAllDay: isRangeAllDay,
                // dates that display events and accept drag-n-drop
                // will be `null` if no dates accept events
                activeRange: activeRange,
                // date range with a rendered skeleton
                // includes not-active days that need some sort of DOM
                renderRange: renderRange,
                // Duration object that denotes the first visible time of any given day
                minTime: minTime,
                // Duration object that denotes the exclusive visible end time of any given day
                maxTime: maxTime,
                isValid: isValid,
                // how far the current date will move for a prev/next operation
                dateIncrement: this.buildDateIncrement(currentInfo.duration)
                // pass a fallback (might be null) ^
            };
        };
        // Builds an object with optional start/end properties.
        // Indicates the minimum/maximum dates to display.
        // not responsible for trimming hidden days.
        DateProfileGenerator.prototype.buildValidRange = function () {
            return this.getRangeOption('validRange', this.calendar.getNow()) ||
                { start: null, end: null }; // completely open-ended
        };
        // Builds a structure with info about the "current" range, the range that is
        // highlighted as being the current month for example.
        // See build() for a description of `direction`.
        // Guaranteed to have `range` and `unit` properties. `duration` is optional.
        DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
            var _a = this, viewSpec = _a.viewSpec, dateEnv = _a.dateEnv;
            var duration = null;
            var unit = null;
            var range = null;
            var dayCount;
            if (viewSpec.duration) {
                duration = viewSpec.duration;
                unit = viewSpec.durationUnit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            else if ((dayCount = this.options.dayCount)) {
                unit = 'day';
                range = this.buildRangeFromDayCount(date, direction, dayCount);
            }
            else if ((range = this.buildCustomVisibleRange(date))) {
                unit = dateEnv.greatestWholeUnit(range.start, range.end).unit;
            }
            else {
                duration = this.getFallbackDuration();
                unit = greatestDurationDenominator(duration).unit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            return { duration: duration, unit: unit, range: range };
        };
        DateProfileGenerator.prototype.getFallbackDuration = function () {
            return createDuration({ day: 1 });
        };
        // Returns a new activeRange to have time values (un-ambiguate)
        // minTime or maxTime causes the range to expand.
        DateProfileGenerator.prototype.adjustActiveRange = function (range, minTime, maxTime) {
            var dateEnv = this.dateEnv;
            var start = range.start;
            var end = range.end;
            if (this.viewSpec.class.prototype.usesMinMaxTime) {
                // expand active range if minTime is negative (why not when positive?)
                if (asRoughDays(minTime) < 0) {
                    start = startOfDay(start); // necessary?
                    start = dateEnv.add(start, minTime);
                }
                // expand active range if maxTime is beyond one day (why not when positive?)
                if (asRoughDays(maxTime) > 1) {
                    end = startOfDay(end); // necessary?
                    end = addDays(end, -1);
                    end = dateEnv.add(end, maxTime);
                }
            }
            return { start: start, end: end };
        };
        // Builds the "current" range when it is specified as an explicit duration.
        // `unit` is the already-computed greatestDurationDenominator unit of duration.
        DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
            var dateEnv = this.dateEnv;
            var alignment = this.options.dateAlignment;
            var dateIncrementInput;
            var dateIncrementDuration;
            var start;
            var end;
            var res;
            // compute what the alignment should be
            if (!alignment) {
                dateIncrementInput = this.options.dateIncrement;
                if (dateIncrementInput) {
                    dateIncrementDuration = createDuration(dateIncrementInput);
                    // use the smaller of the two units
                    if (asRoughMs(dateIncrementDuration) < asRoughMs(duration)) {
                        alignment = greatestDurationDenominator(dateIncrementDuration, !getWeeksFromInput(dateIncrementInput)).unit;
                    }
                    else {
                        alignment = unit;
                    }
                }
                else {
                    alignment = unit;
                }
            }
            // if the view displays a single day or smaller
            if (asRoughDays(duration) <= 1) {
                if (this.isHiddenDay(start)) {
                    start = this.skipHiddenDays(start, direction);
                    start = startOfDay(start);
                }
            }
            function computeRes() {
                start = dateEnv.startOf(date, alignment);
                end = dateEnv.add(start, duration);
                res = { start: start, end: end };
            }
            computeRes();
            // if range is completely enveloped by hidden days, go past the hidden days
            if (!this.trimHiddenDays(res)) {
                date = this.skipHiddenDays(date, direction);
                computeRes();
            }
            return res;
        };
        // Builds the "current" range when a dayCount is specified.
        DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
            var dateEnv = this.dateEnv;
            var customAlignment = this.options.dateAlignment;
            var runningCount = 0;
            var start = date;
            var end;
            if (customAlignment) {
                start = dateEnv.startOf(start, customAlignment);
            }
            start = startOfDay(start);
            start = this.skipHiddenDays(start, direction);
            end = start;
            do {
                end = addDays(end, 1);
                if (!this.isHiddenDay(end)) {
                    runningCount++;
                }
            } while (runningCount < dayCount);
            return { start: start, end: end };
        };
        // Builds a normalized range object for the "visible" range,
        // which is a way to define the currentRange and activeRange at the same time.
        DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
            var dateEnv = this.dateEnv;
            var visibleRange = this.getRangeOption('visibleRange', dateEnv.toDate(date));
            if (visibleRange && (visibleRange.start == null || visibleRange.end == null)) {
                return null;
            }
            return visibleRange;
        };
        // Computes the range that will represent the element/cells for *rendering*,
        // but which may have voided days/times.
        // not responsible for trimming hidden days.
        DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
            return currentRange;
        };
        // Compute the duration value that should be added/substracted to the current date
        // when a prev/next operation happens.
        DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
            var dateIncrementInput = this.options.dateIncrement;
            var customAlignment;
            if (dateIncrementInput) {
                return createDuration(dateIncrementInput);
            }
            else if ((customAlignment = this.options.dateAlignment)) {
                return createDuration(1, customAlignment);
            }
            else if (fallback) {
                return fallback;
            }
            else {
                return createDuration({ days: 1 });
            }
        };
        // Arguments after name will be forwarded to a hypothetical function value
        // WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
        // Always clone your objects if you fear mutation.
        DateProfileGenerator.prototype.getRangeOption = function (name) {
            var otherArgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                otherArgs[_i - 1] = arguments[_i];
            }
            var val = this.options[name];
            if (typeof val === 'function') {
                val = val.apply(null, otherArgs);
            }
            if (val) {
                val = parseRange(val, this.dateEnv);
            }
            if (val) {
                val = computeVisibleDayRange(val);
            }
            return val;
        };
        /* Hidden Days
        ------------------------------------------------------------------------------------------------------------------*/
        // Initializes internal variables related to calculating hidden days-of-week
        DateProfileGenerator.prototype.initHiddenDays = function () {
            var hiddenDays = this.options.hiddenDays || []; // array of day-of-week indices that are hidden
            var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
            var dayCnt = 0;
            var i;
            if (this.options.weekends === false) {
                hiddenDays.push(0, 6); // 0=sunday, 6=saturday
            }
            for (i = 0; i < 7; i++) {
                if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                    dayCnt++;
                }
            }
            if (!dayCnt) {
                throw new Error('invalid hiddenDays'); // all days were hidden? bad.
            }
            this.isHiddenDayHash = isHiddenDayHash;
        };
        // Remove days from the beginning and end of the range that are computed as hidden.
        // If the whole range is trimmed off, returns null
        DateProfileGenerator.prototype.trimHiddenDays = function (range) {
            var start = range.start;
            var end = range.end;
            if (start) {
                start = this.skipHiddenDays(start);
            }
            if (end) {
                end = this.skipHiddenDays(end, -1, true);
            }
            if (start == null || end == null || start < end) {
                return { start: start, end: end };
            }
            return null;
        };
        // Is the current day hidden?
        // `day` is a day-of-week index (0-6), or a Date (used for UTC)
        DateProfileGenerator.prototype.isHiddenDay = function (day) {
            if (day instanceof Date) {
                day = day.getUTCDay();
            }
            return this.isHiddenDayHash[day];
        };
        // Incrementing the current day until it is no longer a hidden day, returning a copy.
        // DOES NOT CONSIDER validRange!
        // If the initial value of `date` is not a hidden day, don't do anything.
        // Pass `isExclusive` as `true` if you are dealing with an end date.
        // `inc` defaults to `1` (increment one day forward each time)
        DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
            if (inc === void 0) { inc = 1; }
            if (isExclusive === void 0) { isExclusive = false; }
            while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
                date = addDays(date, inc);
            }
            return date;
        };
        return DateProfileGenerator;
    }());
    // TODO: find a way to avoid comparing DateProfiles. it's tedious
    function isDateProfilesEqual(p0, p1) {
        return rangesEqual(p0.activeRange, p1.activeRange) &&
            rangesEqual(p0.validRange, p1.validRange) &&
            durationsEqual(p0.minTime, p1.minTime) &&
            durationsEqual(p0.maxTime, p1.maxTime);
    }

    function reduce (state, action, calendar) {
        var viewType = reduceViewType(state.viewType, action);
        var dateProfile = reduceDateProfile(state.dateProfile, action, state.currentDate, viewType, calendar);
        var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendar);
        var nextState = __assign({}, state, { viewType: viewType,
            dateProfile: dateProfile, currentDate: reduceCurrentDate(state.currentDate, action, dateProfile), eventSources: eventSources, eventStore: reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendar), dateSelection: reduceDateSelection(state.dateSelection, action, calendar), eventSelection: reduceSelectedEvent(state.eventSelection, action), eventDrag: reduceEventDrag(state.eventDrag, action, eventSources, calendar), eventResize: reduceEventResize(state.eventResize, action, eventSources, calendar), eventSourceLoadingLevel: computeLoadingLevel(eventSources), loadingLevel: computeLoadingLevel(eventSources) });
        for (var _i = 0, _a = calendar.pluginSystem.hooks.reducers; _i < _a.length; _i++) {
            var reducerFunc = _a[_i];
            nextState = reducerFunc(nextState, action, calendar);
        }
        // console.log(action.type, nextState)
        return nextState;
    }
    function reduceViewType(currentViewType, action) {
        switch (action.type) {
            case 'SET_VIEW_TYPE':
                return action.viewType;
            default:
                return currentViewType;
        }
    }
    function reduceDateProfile(currentDateProfile, action, currentDate, viewType, calendar) {
        var newDateProfile;
        switch (action.type) {
            case 'PREV':
                newDateProfile = calendar.dateProfileGenerators[viewType].buildPrev(currentDateProfile, currentDate);
                break;
            case 'NEXT':
                newDateProfile = calendar.dateProfileGenerators[viewType].buildNext(currentDateProfile, currentDate);
                break;
            case 'SET_DATE':
                if (!currentDateProfile.activeRange ||
                    !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker)) {
                    newDateProfile = calendar.dateProfileGenerators[viewType].build(action.dateMarker, undefined, true // forceToValid
                    );
                }
                break;
            case 'SET_VIEW_TYPE':
                var generator = calendar.dateProfileGenerators[viewType];
                if (!generator) {
                    throw new Error(viewType ?
                        'The FullCalendar view "' + viewType + '" does not exist. Make sure your plugins are loaded correctly.' :
                        'No available FullCalendar view plugins.');
                }
                newDateProfile = generator.build(action.dateMarker || currentDate, undefined, true // forceToValid
                );
                break;
        }
        if (newDateProfile &&
            newDateProfile.isValid &&
            !(currentDateProfile && isDateProfilesEqual(currentDateProfile, newDateProfile))) {
            return newDateProfile;
        }
        else {
            return currentDateProfile;
        }
    }
    function reduceCurrentDate(currentDate, action, dateProfile) {
        switch (action.type) {
            case 'PREV':
            case 'NEXT':
                if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
                    return dateProfile.currentRange.start;
                }
                else {
                    return currentDate;
                }
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                var newDate = action.dateMarker || currentDate;
                if (dateProfile.activeRange && !rangeContainsMarker(dateProfile.activeRange, newDate)) {
                    return dateProfile.currentRange.start;
                }
                else {
                    return newDate;
                }
            default:
                return currentDate;
        }
    }
    function reduceDateSelection(currentSelection, action, calendar) {
        switch (action.type) {
            case 'SELECT_DATES':
                return action.selection;
            case 'UNSELECT_DATES':
                return null;
            default:
                return currentSelection;
        }
    }
    function reduceSelectedEvent(currentInstanceId, action) {
        switch (action.type) {
            case 'SELECT_EVENT':
                return action.eventInstanceId;
            case 'UNSELECT_EVENT':
                return '';
            default:
                return currentInstanceId;
        }
    }
    function reduceEventDrag(currentDrag, action, sources, calendar) {
        switch (action.type) {
            case 'SET_EVENT_DRAG':
                var newDrag = action.state;
                return {
                    affectedEvents: newDrag.affectedEvents,
                    mutatedEvents: newDrag.mutatedEvents,
                    isEvent: newDrag.isEvent,
                    origSeg: newDrag.origSeg
                };
            case 'UNSET_EVENT_DRAG':
                return null;
            default:
                return currentDrag;
        }
    }
    function reduceEventResize(currentResize, action, sources, calendar) {
        switch (action.type) {
            case 'SET_EVENT_RESIZE':
                var newResize = action.state;
                return {
                    affectedEvents: newResize.affectedEvents,
                    mutatedEvents: newResize.mutatedEvents,
                    isEvent: newResize.isEvent,
                    origSeg: newResize.origSeg
                };
            case 'UNSET_EVENT_RESIZE':
                return null;
            default:
                return currentResize;
        }
    }
    function computeLoadingLevel(eventSources) {
        var cnt = 0;
        for (var sourceId in eventSources) {
            if (eventSources[sourceId].isFetching) {
                cnt++;
            }
        }
        return cnt;
    }

    var STANDARD_PROPS = {
        start: null,
        end: null,
        allDay: Boolean
    };
    function parseDateSpan(raw, dateEnv, defaultDuration) {
        var span = parseOpenDateSpan(raw, dateEnv);
        var range = span.range;
        if (!range.start) {
            return null;
        }
        if (!range.end) {
            if (defaultDuration == null) {
                return null;
            }
            else {
                range.end = dateEnv.add(range.start, defaultDuration);
            }
        }
        return span;
    }
    /*
    TODO: somehow combine with parseRange?
    Will return null if the start/end props were present but parsed invalidly.
    */
    function parseOpenDateSpan(raw, dateEnv) {
        var leftovers = {};
        var standardProps = refineProps(raw, STANDARD_PROPS, {}, leftovers);
        var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
        var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
        var allDay = standardProps.allDay;
        if (allDay == null) {
            allDay = (startMeta && startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
        // use this leftover object as the selection object
        leftovers.range = {
            start: startMeta ? startMeta.marker : null,
            end: endMeta ? endMeta.marker : null
        };
        leftovers.allDay = allDay;
        return leftovers;
    }
    function isDateSpansEqual(span0, span1) {
        return rangesEqual(span0.range, span1.range) &&
            span0.allDay === span1.allDay &&
            isSpanPropsEqual(span0, span1);
    }
    // the NON-DATE-RELATED props
    function isSpanPropsEqual(span0, span1) {
        for (var propName in span1) {
            if (propName !== 'range' && propName !== 'allDay') {
                if (span0[propName] !== span1[propName]) {
                    return false;
                }
            }
        }
        // are there any props that span0 has that span1 DOESN'T have?
        // both have range/allDay, so no need to special-case.
        for (var propName in span0) {
            if (!(propName in span1)) {
                return false;
            }
        }
        return true;
    }
    function buildDateSpanApi(span, dateEnv) {
        return {
            start: dateEnv.toDate(span.range.start),
            end: dateEnv.toDate(span.range.end),
            startStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
            endStr: dateEnv.formatIso(span.range.end, { omitTime: span.allDay }),
            allDay: span.allDay
        };
    }
    function buildDatePointApi(span, dateEnv) {
        return {
            date: dateEnv.toDate(span.range.start),
            dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
            allDay: span.allDay
        };
    }
    function fabricateEventRange(dateSpan, eventUiBases, calendar) {
        var def = parseEventDef({ editable: false }, '', // sourceId
        dateSpan.allDay, true, // hasEnd
        calendar);
        return {
            def: def,
            ui: compileEventUi(def, eventUiBases),
            instance: createEventInstance(def.defId, dateSpan.range),
            range: dateSpan.range,
            isStart: true,
            isEnd: true
        };
    }

    function compileViewDefs(defaultConfigs, overrideConfigs) {
        var hash = {};
        var viewType;
        for (viewType in defaultConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        for (viewType in overrideConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        return hash;
    }
    function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        if (hash[viewType]) {
            return hash[viewType];
        }
        var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        if (viewDef) {
            hash[viewType] = viewDef;
        }
        return viewDef;
    }
    function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        var defaultConfig = defaultConfigs[viewType];
        var overrideConfig = overrideConfigs[viewType];
        var queryProp = function (name) {
            return (defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
                ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null);
        };
        var theClass = queryProp('class');
        var superType = queryProp('superType');
        if (!superType && theClass) {
            superType =
                findViewNameBySubclass(theClass, overrideConfigs) ||
                    findViewNameBySubclass(theClass, defaultConfigs);
        }
        var superDef = superType ? ensureViewDef(superType, hash, defaultConfigs, overrideConfigs) : null;
        if (!theClass && superDef) {
            theClass = superDef.class;
        }
        if (!theClass) {
            return null; // don't throw a warning, might be settings for a single-unit view
        }
        return {
            type: viewType,
            class: theClass,
            defaults: __assign({}, (superDef ? superDef.defaults : {}), (defaultConfig ? defaultConfig.options : {})),
            overrides: __assign({}, (superDef ? superDef.overrides : {}), (overrideConfig ? overrideConfig.options : {}))
        };
    }
    function findViewNameBySubclass(viewSubclass, configs) {
        var superProto = Object.getPrototypeOf(viewSubclass.prototype);
        for (var viewType in configs) {
            var parsed = configs[viewType];
            // need DIRECT subclass, so instanceof won't do it
            if (parsed.class && parsed.class.prototype === superProto) {
                return viewType;
            }
        }
        return '';
    }

    function parseViewConfigs(inputs) {
        return mapHash(inputs, parseViewConfig);
    }
    var VIEW_DEF_PROPS = {
        type: String,
        class: null
    };
    function parseViewConfig(input) {
        if (typeof input === 'function') {
            input = { class: input };
        }
        var options = {};
        var props = refineProps(input, VIEW_DEF_PROPS, {}, options);
        return {
            superType: props.type,
            class: props.class,
            options: options
        };
    }

    function buildViewSpecs(defaultInputs, optionsManager) {
        var defaultConfigs = parseViewConfigs(defaultInputs);
        var overrideConfigs = parseViewConfigs(optionsManager.overrides.views);
        var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
        return mapHash(viewDefs, function (viewDef) {
            return buildViewSpec(viewDef, overrideConfigs, optionsManager);
        });
    }
    function buildViewSpec(viewDef, overrideConfigs, optionsManager) {
        var durationInput = viewDef.overrides.duration ||
            viewDef.defaults.duration ||
            optionsManager.dynamicOverrides.duration ||
            optionsManager.overrides.duration;
        var duration = null;
        var durationUnit = '';
        var singleUnit = '';
        var singleUnitOverrides = {};
        if (durationInput) {
            duration = createDuration(durationInput);
            if (duration) { // valid?
                var denom = greatestDurationDenominator(duration, !getWeeksFromInput(durationInput));
                durationUnit = denom.unit;
                if (denom.value === 1) {
                    singleUnit = durationUnit;
                    singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].options : {};
                }
            }
        }
        var queryButtonText = function (options) {
            var buttonTextMap = options.buttonText || {};
            var buttonTextKey = viewDef.defaults.buttonTextKey;
            if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
                return buttonTextMap[buttonTextKey];
            }
            if (buttonTextMap[viewDef.type] != null) {
                return buttonTextMap[viewDef.type];
            }
            if (buttonTextMap[singleUnit] != null) {
                return buttonTextMap[singleUnit];
            }
        };
        return {
            type: viewDef.type,
            class: viewDef.class,
            duration: duration,
            durationUnit: durationUnit,
            singleUnit: singleUnit,
            options: __assign({}, globalDefaults, viewDef.defaults, optionsManager.dirDefaults, optionsManager.localeDefaults, optionsManager.overrides, singleUnitOverrides, viewDef.overrides, optionsManager.dynamicOverrides),
            buttonTextOverride: queryButtonText(optionsManager.dynamicOverrides) ||
                queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
                viewDef.overrides.buttonText,
            buttonTextDefault: queryButtonText(optionsManager.localeDefaults) ||
                queryButtonText(optionsManager.dirDefaults) ||
                viewDef.defaults.buttonText ||
                queryButtonText(globalDefaults) ||
                viewDef.type // fall back to given view name
        };
    }

    var Toolbar = /** @class */ (function (_super) {
        __extends(Toolbar, _super);
        function Toolbar(context, extraClassName) {
            var _this = _super.call(this, context) || this;
            _this._renderLayout = memoizeRendering(_this.renderLayout, _this.unrenderLayout);
            _this._updateTitle = memoizeRendering(_this.updateTitle, null, [_this._renderLayout]);
            _this._updateActiveButton = memoizeRendering(_this.updateActiveButton, null, [_this._renderLayout]);
            _this._updateToday = memoizeRendering(_this.updateToday, null, [_this._renderLayout]);
            _this._updatePrev = memoizeRendering(_this.updatePrev, null, [_this._renderLayout]);
            _this._updateNext = memoizeRendering(_this.updateNext, null, [_this._renderLayout]);
            _this.el = createElement('div', { className: 'fc-toolbar ' + extraClassName });
            return _this;
        }
        Toolbar.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this._renderLayout.unrender(); // should unrender everything else
            removeElement(this.el);
        };
        Toolbar.prototype.render = function (props) {
            this._renderLayout(props.layout);
            this._updateTitle(props.title);
            this._updateActiveButton(props.activeButton);
            this._updateToday(props.isTodayEnabled);
            this._updatePrev(props.isPrevEnabled);
            this._updateNext(props.isNextEnabled);
        };
        Toolbar.prototype.renderLayout = function (layout) {
            var el = this.el;
            this.viewsWithButtons = [];
            appendToElement(el, this.renderSection('left', layout.left));
            appendToElement(el, this.renderSection('center', layout.center));
            appendToElement(el, this.renderSection('right', layout.right));
        };
        Toolbar.prototype.unrenderLayout = function () {
            this.el.innerHTML = '';
        };
        Toolbar.prototype.renderSection = function (position, buttonStr) {
            var _this = this;
            var _a = this, theme = _a.theme, calendar = _a.calendar;
            var optionsManager = calendar.optionsManager;
            var viewSpecs = calendar.viewSpecs;
            var sectionEl = createElement('div', { className: 'fc-' + position });
            var calendarCustomButtons = optionsManager.computed.customButtons || {};
            var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
            var calendarButtonText = optionsManager.computed.buttonText || {};
            if (buttonStr) {
                buttonStr.split(' ').forEach(function (buttonGroupStr, i) {
                    var groupChildren = [];
                    var isOnlyButtons = true;
                    var groupEl;
                    buttonGroupStr.split(',').forEach(function (buttonName, j) {
                        var customButtonProps;
                        var viewSpec;
                        var buttonClick;
                        var buttonIcon; // only one of these will be set
                        var buttonText; // "
                        var buttonInnerHtml;
                        var buttonClasses;
                        var buttonEl;
                        var buttonAriaAttr;
                        if (buttonName === 'title') {
                            groupChildren.push(htmlToElement('<h2>&nbsp;</h2>')); // we always want it to take up height
                            isOnlyButtons = false;
                        }
                        else {
                            if ((customButtonProps = calendarCustomButtons[buttonName])) {
                                buttonClick = function (ev) {
                                    if (customButtonProps.click) {
                                        customButtonProps.click.call(buttonEl, ev);
                                    }
                                };
                                (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                                    (buttonIcon = theme.getIconClass(buttonName)) ||
                                    (buttonText = customButtonProps.text);
                            }
                            else if ((viewSpec = viewSpecs[buttonName])) {
                                _this.viewsWithButtons.push(buttonName);
                                buttonClick = function () {
                                    calendar.changeView(buttonName);
                                };
                                (buttonText = viewSpec.buttonTextOverride) ||
                                    (buttonIcon = theme.getIconClass(buttonName)) ||
                                    (buttonText = viewSpec.buttonTextDefault);
                            }
                            else if (calendar[buttonName]) { // a calendar method
                                buttonClick = function () {
                                    calendar[buttonName]();
                                };
                                (buttonText = calendarButtonTextOverrides[buttonName]) ||
                                    (buttonIcon = theme.getIconClass(buttonName)) ||
                                    (buttonText = calendarButtonText[buttonName]);
                                //            ^ everything else is considered default
                            }
                            if (buttonClick) {
                                buttonClasses = [
                                    'fc-' + buttonName + '-button',
                                    theme.getClass('button')
                                ];
                                if (buttonText) {
                                    buttonInnerHtml = htmlEscape(buttonText);
                                    buttonAriaAttr = '';
                                }
                                else if (buttonIcon) {
                                    buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
                                    buttonAriaAttr = ' aria-label="' + buttonName + '"';
                                }
                                buttonEl = htmlToElement(// type="button" so that it doesn't submit a form
                                '<button type="button" class="' + buttonClasses.join(' ') + '"' +
                                    buttonAriaAttr +
                                    '>' + buttonInnerHtml + '</button>');
                                buttonEl.addEventListener('click', buttonClick);
                                groupChildren.push(buttonEl);
                            }
                        }
                    });
                    if (groupChildren.length > 1) {
                        groupEl = document.createElement('div');
                        var buttonGroupClassName = theme.getClass('buttonGroup');
                        if (isOnlyButtons && buttonGroupClassName) {
                            groupEl.classList.add(buttonGroupClassName);
                        }
                        appendToElement(groupEl, groupChildren);
                        sectionEl.appendChild(groupEl);
                    }
                    else {
                        appendToElement(sectionEl, groupChildren); // 1 or 0 children
                    }
                });
            }
            return sectionEl;
        };
        Toolbar.prototype.updateToday = function (isTodayEnabled) {
            this.toggleButtonEnabled('today', isTodayEnabled);
        };
        Toolbar.prototype.updatePrev = function (isPrevEnabled) {
            this.toggleButtonEnabled('prev', isPrevEnabled);
        };
        Toolbar.prototype.updateNext = function (isNextEnabled) {
            this.toggleButtonEnabled('next', isNextEnabled);
        };
        Toolbar.prototype.updateTitle = function (text) {
            findElements(this.el, 'h2').forEach(function (titleEl) {
                titleEl.innerText = text;
            });
        };
        Toolbar.prototype.updateActiveButton = function (buttonName) {
            var className = this.theme.getClass('buttonActive');
            findElements(this.el, 'button').forEach(function (buttonEl) {
                if (buttonName && buttonEl.classList.contains('fc-' + buttonName + '-button')) {
                    buttonEl.classList.add(className);
                }
                else {
                    buttonEl.classList.remove(className);
                }
            });
        };
        Toolbar.prototype.toggleButtonEnabled = function (buttonName, bool) {
            findElements(this.el, '.fc-' + buttonName + '-button').forEach(function (buttonEl) {
                buttonEl.disabled = !bool;
            });
        };
        return Toolbar;
    }(Component));

    var CalendarComponent = /** @class */ (function (_super) {
        __extends(CalendarComponent, _super);
        function CalendarComponent(context, el) {
            var _this = _super.call(this, context) || this;
            _this._renderToolbars = memoizeRendering(_this.renderToolbars);
            _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
            _this.el = el;
            prependToElement(el, _this.contentEl = createElement('div', { className: 'fc-view-container' }));
            var calendar = _this.calendar;
            for (var _i = 0, _a = calendar.pluginSystem.hooks.viewContainerModifiers; _i < _a.length; _i++) {
                var modifyViewContainer = _a[_i];
                modifyViewContainer(_this.contentEl, calendar);
            }
            _this.toggleElClassNames(true);
            _this.computeTitle = memoize(computeTitle);
            _this.parseBusinessHours = memoize(function (input) {
                return parseBusinessHours(input, _this.calendar);
            });
            return _this;
        }
        CalendarComponent.prototype.destroy = function () {
            if (this.header) {
                this.header.destroy();
            }
            if (this.footer) {
                this.footer.destroy();
            }
            if (this.view) {
                this.view.destroy();
            }
            removeElement(this.contentEl);
            this.toggleElClassNames(false);
            _super.prototype.destroy.call(this);
        };
        CalendarComponent.prototype.toggleElClassNames = function (bool) {
            var classList = this.el.classList;
            var dirClassName = 'fc-' + this.opt('dir');
            var themeClassName = this.theme.getClass('widget');
            if (bool) {
                classList.add('fc');
                classList.add(dirClassName);
                classList.add(themeClassName);
            }
            else {
                classList.remove('fc');
                classList.remove(dirClassName);
                classList.remove(themeClassName);
            }
        };
        CalendarComponent.prototype.render = function (props) {
            this.freezeHeight();
            var title = this.computeTitle(props.dateProfile, props.viewSpec.options);
            this._renderToolbars(props.viewSpec, props.dateProfile, props.currentDate, props.dateProfileGenerator, title);
            this.renderView(props, title);
            this.updateSize();
            this.thawHeight();
        };
        CalendarComponent.prototype.renderToolbars = function (viewSpec, dateProfile, currentDate, dateProfileGenerator, title) {
            var headerLayout = this.opt('header');
            var footerLayout = this.opt('footer');
            var now = this.calendar.getNow();
            var todayInfo = dateProfileGenerator.build(now);
            var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate);
            var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate);
            var toolbarProps = {
                title: title,
                activeButton: viewSpec.type,
                isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
                isPrevEnabled: prevInfo.isValid,
                isNextEnabled: nextInfo.isValid
            };
            if (headerLayout) {
                if (!this.header) {
                    this.header = new Toolbar(this.context, 'fc-header-toolbar');
                    prependToElement(this.el, this.header.el);
                }
                this.header.receiveProps(__assign({ layout: headerLayout }, toolbarProps));
            }
            else if (this.header) {
                this.header.destroy();
                this.header = null;
            }
            if (footerLayout) {
                if (!this.footer) {
                    this.footer = new Toolbar(this.context, 'fc-footer-toolbar');
                    appendToElement(this.el, this.footer.el);
                }
                this.footer.receiveProps(__assign({ layout: footerLayout }, toolbarProps));
            }
            else if (this.footer) {
                this.footer.destroy();
                this.footer = null;
            }
        };
        CalendarComponent.prototype.renderView = function (props, title) {
            var view = this.view;
            var viewSpec = props.viewSpec, dateProfileGenerator = props.dateProfileGenerator;
            if (!view || view.viewSpec !== viewSpec) {
                if (view) {
                    view.destroy();
                }
                view = this.view = new viewSpec['class']({
                    calendar: this.calendar,
                    view: null,
                    dateEnv: this.dateEnv,
                    theme: this.theme,
                    options: viewSpec.options
                }, viewSpec, dateProfileGenerator, this.contentEl);
            }
            else {
                view.addScroll(view.queryScroll());
            }
            view.title = title; // for the API
            var viewProps = {
                dateProfile: props.dateProfile,
                businessHours: this.parseBusinessHours(viewSpec.options.businessHours),
                eventStore: props.eventStore,
                eventUiBases: props.eventUiBases,
                dateSelection: props.dateSelection,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize
            };
            var transformers = this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers);
            for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
                var transformer = transformers_1[_i];
                __assign(viewProps, transformer.transform(viewProps, viewSpec, props, view));
            }
            view.receiveProps(viewProps);
        };
        // Sizing
        // -----------------------------------------------------------------------------------------------------------------
        CalendarComponent.prototype.updateSize = function (isResize) {
            if (isResize === void 0) { isResize = false; }
            var view = this.view;
            if (isResize) {
                view.addScroll(view.queryScroll());
            }
            if (isResize || this.isHeightAuto == null) {
                this.computeHeightVars();
            }
            view.updateSize(isResize, this.viewHeight, this.isHeightAuto);
            view.updateNowIndicator(); // we need to guarantee this will run after updateSize
            view.popScroll(isResize);
        };
        CalendarComponent.prototype.computeHeightVars = function () {
            var calendar = this.calendar; // yuck. need to handle dynamic options
            var heightInput = calendar.opt('height');
            var contentHeightInput = calendar.opt('contentHeight');
            this.isHeightAuto = heightInput === 'auto' || contentHeightInput === 'auto';
            if (typeof contentHeightInput === 'number') { // exists and not 'auto'
                this.viewHeight = contentHeightInput;
            }
            else if (typeof contentHeightInput === 'function') { // exists and is a function
                this.viewHeight = contentHeightInput();
            }
            else if (typeof heightInput === 'number') { // exists and not 'auto'
                this.viewHeight = heightInput - this.queryToolbarsHeight();
            }
            else if (typeof heightInput === 'function') { // exists and is a function
                this.viewHeight = heightInput() - this.queryToolbarsHeight();
            }
            else if (heightInput === 'parent') { // set to height of parent element
                this.viewHeight = this.el.parentNode.offsetHeight - this.queryToolbarsHeight();
            }
            else {
                this.viewHeight = Math.round(this.contentEl.offsetWidth /
                    Math.max(calendar.opt('aspectRatio'), .5));
            }
        };
        CalendarComponent.prototype.queryToolbarsHeight = function () {
            var height = 0;
            if (this.header) {
                height += computeHeightAndMargins(this.header.el);
            }
            if (this.footer) {
                height += computeHeightAndMargins(this.footer.el);
            }
            return height;
        };
        // Height "Freezing"
        // -----------------------------------------------------------------------------------------------------------------
        CalendarComponent.prototype.freezeHeight = function () {
            applyStyle(this.el, {
                height: this.el.offsetHeight,
                overflow: 'hidden'
            });
        };
        CalendarComponent.prototype.thawHeight = function () {
            applyStyle(this.el, {
                height: '',
                overflow: ''
            });
        };
        return CalendarComponent;
    }(Component));
    // Title and Date Formatting
    // -----------------------------------------------------------------------------------------------------------------
    // Computes what the title at the top of the calendar should be for this view
    function computeTitle(dateProfile, viewOptions) {
        var range;
        // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
        if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
            range = dateProfile.currentRange;
        }
        else { // for day units or smaller, use the actual day range
            range = dateProfile.activeRange;
        }
        return this.dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || computeTitleFormat(dateProfile), viewOptions.titleRangeSeparator), { isEndExclusive: dateProfile.isRangeAllDay });
    }
    // Generates the format string that should be used to generate the title for the current date range.
    // Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
    function computeTitleFormat(dateProfile) {
        var currentRangeUnit = dateProfile.currentRangeUnit;
        if (currentRangeUnit === 'year') {
            return { year: 'numeric' };
        }
        else if (currentRangeUnit === 'month') {
            return { year: 'numeric', month: 'long' }; // like "September 2014"
        }
        else {
            var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
            if (days !== null && days > 1) {
                // multi-day range. shorter, like "Sep 9 - 10 2014"
                return { year: 'numeric', month: 'short', day: 'numeric' };
            }
            else {
                // one day. longer, like "September 9 2014"
                return { year: 'numeric', month: 'long', day: 'numeric' };
            }
        }
    }
    // Plugin
    // -----------------------------------------------------------------------------------------------------------------
    function buildViewPropTransformers(theClasses) {
        return theClasses.map(function (theClass) {
            return new theClass();
        });
    }

    var Interaction = /** @class */ (function () {
        function Interaction(settings) {
            this.component = settings.component;
        }
        Interaction.prototype.destroy = function () {
        };
        return Interaction;
    }());
    function parseInteractionSettings(component, input) {
        return {
            component: component,
            el: input.el,
            useEventCenter: input.useEventCenter != null ? input.useEventCenter : true
        };
    }
    function interactionSettingsToStore(settings) {
        var _a;
        return _a = {},
            _a[settings.component.uid] = settings,
            _a;
    }
    // global state
    var interactionSettingsStore = {};

    /*
    Detects when the user clicks on an event within a DateComponent
    */
    var EventClicking = /** @class */ (function (_super) {
        __extends(EventClicking, _super);
        function EventClicking(settings) {
            var _this = _super.call(this, settings) || this;
            _this.handleSegClick = function (ev, segEl) {
                var component = _this.component;
                var seg = getElSeg(segEl);
                if (seg && // might be the <div> surrounding the more link
                    component.isValidSegDownEl(ev.target)) {
                    // our way to simulate a link click for elements that can't be <a> tags
                    // grab before trigger fired in case trigger trashes DOM thru rerendering
                    var hasUrlContainer = elementClosest(ev.target, '.fc-has-url');
                    var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                    component.publiclyTrigger('eventClick', [
                        {
                            el: segEl,
                            event: new EventApi(component.calendar, seg.eventRange.def, seg.eventRange.instance),
                            jsEvent: ev,
                            view: component.view
                        }
                    ]);
                    if (url && !ev.defaultPrevented) {
                        window.location.href = url;
                    }
                }
            };
            var component = settings.component;
            _this.destroy = listenBySelector(component.el, 'click', component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegClick);
            return _this;
        }
        return EventClicking;
    }(Interaction));

    /*
    Triggers events and adds/removes core classNames when the user's pointer
    enters/leaves event-elements of a component.
    */
    var EventHovering = /** @class */ (function (_super) {
        __extends(EventHovering, _super);
        function EventHovering(settings) {
            var _this = _super.call(this, settings) || this;
            // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
            _this.handleEventElRemove = function (el) {
                if (el === _this.currentSegEl) {
                    _this.handleSegLeave(null, _this.currentSegEl);
                }
            };
            _this.handleSegEnter = function (ev, segEl) {
                if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                    segEl.classList.add('fc-allow-mouse-resize');
                    _this.currentSegEl = segEl;
                    _this.triggerEvent('eventMouseEnter', ev, segEl);
                }
            };
            _this.handleSegLeave = function (ev, segEl) {
                if (_this.currentSegEl) {
                    segEl.classList.remove('fc-allow-mouse-resize');
                    _this.currentSegEl = null;
                    _this.triggerEvent('eventMouseLeave', ev, segEl);
                }
            };
            var component = settings.component;
            _this.removeHoverListeners = listenToHoverBySelector(component.el, component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegEnter, _this.handleSegLeave);
            component.calendar.on('eventElRemove', _this.handleEventElRemove);
            return _this;
        }
        EventHovering.prototype.destroy = function () {
            this.removeHoverListeners();
            this.component.calendar.off('eventElRemove', this.handleEventElRemove);
        };
        EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
            var component = this.component;
            var seg = getElSeg(segEl);
            if (!ev || component.isValidSegDownEl(ev.target)) {
                component.publiclyTrigger(publicEvName, [
                    {
                        el: segEl,
                        event: new EventApi(this.component.calendar, seg.eventRange.def, seg.eventRange.instance),
                        jsEvent: ev,
                        view: component.view
                    }
                ]);
            }
        };
        return EventHovering;
    }(Interaction));

    var StandardTheme = /** @class */ (function (_super) {
        __extends(StandardTheme, _super);
        function StandardTheme() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StandardTheme;
    }(Theme));
    StandardTheme.prototype.classes = {
        widget: 'fc-unthemed',
        widgetHeader: 'fc-widget-header',
        widgetContent: 'fc-widget-content',
        buttonGroup: 'fc-button-group',
        button: 'fc-button fc-button-primary',
        buttonActive: 'fc-button-active',
        popoverHeader: 'fc-widget-header',
        popoverContent: 'fc-widget-content',
        // day grid
        headerRow: 'fc-widget-header',
        dayRow: 'fc-widget-content',
        // list view
        listView: 'fc-widget-content'
    };
    StandardTheme.prototype.baseIconClass = 'fc-icon';
    StandardTheme.prototype.iconClasses = {
        close: 'fc-icon-x',
        prev: 'fc-icon-chevron-left',
        next: 'fc-icon-chevron-right',
        prevYear: 'fc-icon-chevrons-left',
        nextYear: 'fc-icon-chevrons-right'
    };
    StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
    StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
    StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

    var Calendar = /** @class */ (function () {
        function Calendar(el, overrides) {
            var _this = this;
            this.parseRawLocales = memoize(parseRawLocales);
            this.buildLocale = memoize(buildLocale);
            this.buildDateEnv = memoize(buildDateEnv);
            this.buildTheme = memoize(buildTheme);
            this.buildEventUiSingleBase = memoize(this._buildEventUiSingleBase);
            this.buildSelectionConfig = memoize(this._buildSelectionConfig);
            this.buildEventUiBySource = memoizeOutput(buildEventUiBySource, isObjectsSimilar);
            this.buildEventUiBases = memoize(buildEventUiBases);
            this.interactionsStore = {};
            this.actionQueue = [];
            this.isReducing = false;
            // isDisplaying: boolean = false // installed in DOM? accepting renders?
            this.needsRerender = false; // needs a render?
            this.needsFullRerender = false;
            this.isRendering = false; // currently in the executeRender function?
            this.renderingPauseDepth = 0;
            this.buildDelayedRerender = memoize(buildDelayedRerender);
            this.afterSizingTriggers = {};
            this.isViewUpdated = false;
            this.isDatesUpdated = false;
            this.isEventsUpdated = false;
            this.el = el;
            this.optionsManager = new OptionsManager(overrides || {});
            this.pluginSystem = new PluginSystem();
            // only do once. don't do in handleOptions. because can't remove plugins
            this.addPluginInputs(this.optionsManager.computed.plugins || []);
            this.handleOptions(this.optionsManager.computed);
            this.publiclyTrigger('_init'); // for tests
            this.hydrate();
            this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions
                .map(function (calendarInteractionClass) {
                return new calendarInteractionClass(_this);
            });
        }
        Calendar.prototype.addPluginInputs = function (pluginInputs) {
            var pluginDefs = refinePluginDefs(pluginInputs);
            for (var _i = 0, pluginDefs_1 = pluginDefs; _i < pluginDefs_1.length; _i++) {
                var pluginDef = pluginDefs_1[_i];
                this.pluginSystem.add(pluginDef);
            }
        };
        Object.defineProperty(Calendar.prototype, "view", {
            // public API
            get: function () {
                return this.component ? this.component.view : null;
            },
            enumerable: true,
            configurable: true
        });
        // Public API for rendering
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.render = function () {
            if (!this.component) {
                this.renderableEventStore = createEmptyEventStore();
                this.bindHandlers();
                this.executeRender();
            }
            else {
                this.requestRerender(true);
            }
        };
        Calendar.prototype.destroy = function () {
            if (this.component) {
                this.unbindHandlers();
                this.component.destroy(); // don't null-out. in case API needs access
                this.component = null; // umm ???
                for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
                    var interaction = _a[_i];
                    interaction.destroy();
                }
                this.publiclyTrigger('_destroyed');
            }
        };
        // Handlers
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.bindHandlers = function () {
            var _this = this;
            // event delegation for nav links
            this.removeNavLinkListener = listenBySelector(this.el, 'click', 'a[data-goto]', function (ev, anchorEl) {
                var gotoOptions = anchorEl.getAttribute('data-goto');
                gotoOptions = gotoOptions ? JSON.parse(gotoOptions) : {};
                var dateEnv = _this.dateEnv;
                var dateMarker = dateEnv.createMarker(gotoOptions.date);
                var viewType = gotoOptions.type;
                // property like "navLinkDayClick". might be a string or a function
                var customAction = _this.viewOpt('navLink' + capitaliseFirstLetter(viewType) + 'Click');
                if (typeof customAction === 'function') {
                    customAction(dateEnv.toDate(dateMarker), ev);
                }
                else {
                    if (typeof customAction === 'string') {
                        viewType = customAction;
                    }
                    _this.zoomTo(dateMarker, viewType);
                }
            });
            if (this.opt('handleWindowResize')) {
                window.addEventListener('resize', this.windowResizeProxy = debounce(// prevents rapid calls
                this.windowResize.bind(this), this.opt('windowResizeDelay')));
            }
        };
        Calendar.prototype.unbindHandlers = function () {
            this.removeNavLinkListener();
            if (this.windowResizeProxy) {
                window.removeEventListener('resize', this.windowResizeProxy);
                this.windowResizeProxy = null;
            }
        };
        // Dispatcher
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.hydrate = function () {
            var _this = this;
            this.state = this.buildInitialState();
            var rawSources = this.opt('eventSources') || [];
            var singleRawSource = this.opt('events');
            var sources = []; // parsed
            if (singleRawSource) {
                rawSources.unshift(singleRawSource);
            }
            for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
                var rawSource = rawSources_1[_i];
                var source = parseEventSource(rawSource, this);
                if (source) {
                    sources.push(source);
                }
            }
            this.batchRendering(function () {
                _this.dispatch({ type: 'INIT' }); // pass in sources here?
                _this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: sources });
                _this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: _this.opt('defaultView') || _this.pluginSystem.hooks.defaultView
                });
            });
        };
        Calendar.prototype.buildInitialState = function () {
            return {
                viewType: null,
                loadingLevel: 0,
                eventSourceLoadingLevel: 0,
                currentDate: this.getInitialDate(),
                dateProfile: null,
                eventSources: {},
                eventStore: createEmptyEventStore(),
                dateSelection: null,
                eventSelection: '',
                eventDrag: null,
                eventResize: null
            };
        };
        Calendar.prototype.dispatch = function (action) {
            this.actionQueue.push(action);
            if (!this.isReducing) {
                this.isReducing = true;
                var oldState = this.state;
                while (this.actionQueue.length) {
                    this.state = this.reduce(this.state, this.actionQueue.shift(), this);
                }
                var newState = this.state;
                this.isReducing = false;
                if (!oldState.loadingLevel && newState.loadingLevel) {
                    this.publiclyTrigger('loading', [true]);
                }
                else if (oldState.loadingLevel && !newState.loadingLevel) {
                    this.publiclyTrigger('loading', [false]);
                }
                var view = this.component && this.component.view;
                if (oldState.eventStore !== newState.eventStore || this.needsFullRerender) {
                    if (oldState.eventStore) {
                        this.isEventsUpdated = true;
                    }
                }
                if (oldState.dateProfile !== newState.dateProfile || this.needsFullRerender) {
                    if (oldState.dateProfile && view) { // why would view be null!?
                        this.publiclyTrigger('datesDestroy', [
                            {
                                view: view,
                                el: view.el
                            }
                        ]);
                    }
                    this.isDatesUpdated = true;
                }
                if (oldState.viewType !== newState.viewType || this.needsFullRerender) {
                    if (oldState.viewType && view) { // why would view be null!?
                        this.publiclyTrigger('viewSkeletonDestroy', [
                            {
                                view: view,
                                el: view.el
                            }
                        ]);
                    }
                    this.isViewUpdated = true;
                }
                this.requestRerender();
            }
        };
        Calendar.prototype.reduce = function (state, action, calendar) {
            return reduce(state, action, calendar);
        };
        // Render Queue
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.requestRerender = function (needsFull) {
            if (needsFull === void 0) { needsFull = false; }
            this.needsRerender = true;
            this.needsFullRerender = this.needsFullRerender || needsFull;
            this.delayedRerender(); // will call a debounced-version of tryRerender
        };
        Calendar.prototype.tryRerender = function () {
            if (this.component && // must be accepting renders
                this.needsRerender && // indicates that a rerender was requested
                !this.renderingPauseDepth && // not paused
                !this.isRendering // not currently in the render loop
            ) {
                this.executeRender();
            }
        };
        Calendar.prototype.batchRendering = function (func) {
            this.renderingPauseDepth++;
            func();
            this.renderingPauseDepth--;
            if (this.needsRerender) {
                this.requestRerender();
            }
        };
        // Rendering
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.executeRender = function () {
            var needsFullRerender = this.needsFullRerender; // save before clearing
            // clear these BEFORE the render so that new values will accumulate during render
            this.needsRerender = false;
            this.needsFullRerender = false;
            this.isRendering = true;
            this.renderComponent(needsFullRerender);
            this.isRendering = false;
            // received a rerender request while rendering
            if (this.needsRerender) {
                this.delayedRerender();
            }
        };
        /*
        don't call this directly. use executeRender instead
        */
        Calendar.prototype.renderComponent = function (needsFull) {
            var _a = this, state = _a.state, component = _a.component;
            var viewType = state.viewType;
            var viewSpec = this.viewSpecs[viewType];
            var savedScroll = (needsFull && component) ? component.view.queryScroll() : null;
            if (!viewSpec) {
                throw new Error("View type \"" + viewType + "\" is not valid");
            }
            // if event sources are still loading and progressive rendering hasn't been enabled,
            // keep rendering the last fully loaded set of events
            var renderableEventStore = this.renderableEventStore =
                (state.eventSourceLoadingLevel && !this.opt('progressiveEventRendering')) ?
                    this.renderableEventStore :
                    state.eventStore;
            var eventUiSingleBase = this.buildEventUiSingleBase(viewSpec.options);
            var eventUiBySource = this.buildEventUiBySource(state.eventSources);
            var eventUiBases = this.eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
            if (needsFull || !component) {
                if (component) {
                    component.freezeHeight(); // next component will unfreeze it
                    component.destroy();
                }
                component = this.component = new CalendarComponent({
                    calendar: this,
                    view: null,
                    dateEnv: this.dateEnv,
                    theme: this.theme,
                    options: this.optionsManager.computed
                }, this.el);
            }
            component.receiveProps(__assign({}, state, { viewSpec: viewSpec, dateProfile: state.dateProfile, dateProfileGenerator: this.dateProfileGenerators[viewType], eventStore: renderableEventStore, eventUiBases: eventUiBases, dateSelection: state.dateSelection, eventSelection: state.eventSelection, eventDrag: state.eventDrag, eventResize: state.eventResize }));
            if (savedScroll) {
                component.view.applyScroll(savedScroll, false);
            }
            if (this.isViewUpdated) {
                this.isViewUpdated = false;
                this.publiclyTrigger('viewSkeletonRender', [
                    {
                        view: component.view,
                        el: component.view.el
                    }
                ]);
            }
            if (this.isDatesUpdated) {
                this.isDatesUpdated = false;
                this.publiclyTrigger('datesRender', [
                    {
                        view: component.view,
                        el: component.view.el
                    }
                ]);
            }
            if (this.isEventsUpdated) {
                this.isEventsUpdated = false;
            }
            this.releaseAfterSizingTriggers();
        };
        // Options
        // -----------------------------------------------------------------------------------------------------------------
        /*
        Not meant for public API
        */
        Calendar.prototype.resetOptions = function (options) {
            var _this = this;
            var changeHandlers = this.pluginSystem.hooks.optionChangeHandlers;
            var oldOptions = this.optionsManager.overrides;
            var oldNormalOptions = {};
            var normalOptions = {};
            var specialOptions = {};
            for (var name_1 in oldOptions) {
                if (!changeHandlers[name_1]) {
                    oldNormalOptions[name_1] = oldOptions[name_1];
                }
            }
            for (var name_2 in options) {
                if (changeHandlers[name_2]) {
                    specialOptions[name_2] = options[name_2];
                }
                else {
                    normalOptions[name_2] = options[name_2];
                }
            }
            this.batchRendering(function () {
                if (anyKeysRemoved(oldNormalOptions, normalOptions)) {
                    _this.processOptions(options, 'reset');
                }
                else {
                    _this.processOptions(computeChangedProps(oldNormalOptions, normalOptions));
                }
                // handle special options last
                for (var name_3 in specialOptions) {
                    changeHandlers[name_3](specialOptions[name_3], _this);
                }
            });
        };
        /*
        Not meant for public API. Won't give the same precedence that setOption does
        */
        Calendar.prototype.setOptions = function (options) {
            var _this = this;
            var changeHandlers = this.pluginSystem.hooks.optionChangeHandlers;
            var normalOptions = {};
            var specialOptions = {};
            for (var name_4 in options) {
                if (changeHandlers[name_4]) {
                    specialOptions[name_4] = options[name_4];
                }
                else {
                    normalOptions[name_4] = options[name_4];
                }
            }
            this.batchRendering(function () {
                _this.processOptions(normalOptions);
                // handle special options last
                for (var name_5 in specialOptions) {
                    changeHandlers[name_5](specialOptions[name_5], _this);
                }
            });
        };
        Calendar.prototype.processOptions = function (options, mode) {
            var _this = this;
            var oldDateEnv = this.dateEnv; // do this before handleOptions
            var isTimeZoneDirty = false;
            var isSizeDirty = false;
            var anyDifficultOptions = false;
            for (var name_6 in options) {
                if (/^(height|contentHeight|aspectRatio)$/.test(name_6)) {
                    isSizeDirty = true;
                }
                else if (/^(defaultDate|defaultView)$/.test(name_6)) ;
                else {
                    anyDifficultOptions = true;
                    if (name_6 === 'timeZone') {
                        isTimeZoneDirty = true;
                    }
                }
            }
            if (mode === 'reset') {
                anyDifficultOptions = true;
                this.optionsManager.reset(options);
            }
            else if (mode === 'dynamic') {
                this.optionsManager.addDynamic(options); // takes higher precedence
            }
            else {
                this.optionsManager.add(options);
            }
            if (anyDifficultOptions) {
                this.handleOptions(this.optionsManager.computed); // only for "difficult" options
                this.needsFullRerender = true;
                this.batchRendering(function () {
                    if (isTimeZoneDirty) {
                        _this.dispatch({
                            type: 'CHANGE_TIMEZONE',
                            oldDateEnv: oldDateEnv
                        });
                    }
                    /* HACK
                    has the same effect as calling this.requestRerender(true)
                    but recomputes the state's dateProfile
                    */
                    _this.dispatch({
                        type: 'SET_VIEW_TYPE',
                        viewType: _this.state.viewType
                    });
                });
            }
            if (isSizeDirty) {
                this.updateSize();
            }
        };
        Calendar.prototype.setOption = function (name, val) {
            var _a;
            this.processOptions((_a = {}, _a[name] = val, _a), 'dynamic');
        };
        Calendar.prototype.getOption = function (name) {
            return this.optionsManager.computed[name];
        };
        Calendar.prototype.opt = function (name) {
            return this.optionsManager.computed[name];
        };
        Calendar.prototype.viewOpt = function (name) {
            return this.viewOpts()[name];
        };
        Calendar.prototype.viewOpts = function () {
            return this.viewSpecs[this.state.viewType].options;
        };
        /*
        rebuilds things based off of a complete set of refined options
        */
        Calendar.prototype.handleOptions = function (options) {
            var _this = this;
            var pluginHooks = this.pluginSystem.hooks;
            this.defaultAllDayEventDuration = createDuration(options.defaultAllDayEventDuration);
            this.defaultTimedEventDuration = createDuration(options.defaultTimedEventDuration);
            this.delayedRerender = this.buildDelayedRerender(options.rerenderDelay);
            this.theme = this.buildTheme(options);
            var available = this.parseRawLocales(options.locales);
            this.availableRawLocales = available.map;
            var locale = this.buildLocale(options.locale || available.defaultCode, available.map);
            this.dateEnv = this.buildDateEnv(locale, options.timeZone, pluginHooks.namedTimeZonedImpl, options.firstDay, options.weekNumberCalculation, options.weekLabel, pluginHooks.cmdFormatter);
            this.selectionConfig = this.buildSelectionConfig(options); // needs dateEnv. do after :(
            // ineffecient to do every time?
            this.viewSpecs = buildViewSpecs(pluginHooks.views, this.optionsManager);
            // ineffecient to do every time?
            this.dateProfileGenerators = mapHash(this.viewSpecs, function (viewSpec) {
                return new viewSpec.class.prototype.dateProfileGeneratorClass(viewSpec, _this);
            });
        };
        Calendar.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.availableRawLocales);
        };
        Calendar.prototype._buildSelectionConfig = function (rawOpts) {
            return processScopedUiProps('select', rawOpts, this);
        };
        Calendar.prototype._buildEventUiSingleBase = function (rawOpts) {
            if (rawOpts.editable) { // so 'editable' affected events
                rawOpts = __assign({}, rawOpts, { eventEditable: true });
            }
            return processScopedUiProps('event', rawOpts, this);
        };
        // Trigger
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.hasPublicHandlers = function (name) {
            return this.hasHandlers(name) ||
                this.opt(name); // handler specified in options
        };
        Calendar.prototype.publiclyTrigger = function (name, args) {
            var optHandler = this.opt(name);
            this.triggerWith(name, this, args);
            if (optHandler) {
                return optHandler.apply(this, args);
            }
        };
        Calendar.prototype.publiclyTriggerAfterSizing = function (name, args) {
            var afterSizingTriggers = this.afterSizingTriggers;
            (afterSizingTriggers[name] || (afterSizingTriggers[name] = [])).push(args);
        };
        Calendar.prototype.releaseAfterSizingTriggers = function () {
            var afterSizingTriggers = this.afterSizingTriggers;
            for (var name_7 in afterSizingTriggers) {
                for (var _i = 0, _a = afterSizingTriggers[name_7]; _i < _a.length; _i++) {
                    var args = _a[_i];
                    this.publiclyTrigger(name_7, args);
                }
            }
            this.afterSizingTriggers = {};
        };
        // View
        // -----------------------------------------------------------------------------------------------------------------
        // Returns a boolean about whether the view is okay to instantiate at some point
        Calendar.prototype.isValidViewType = function (viewType) {
            return Boolean(this.viewSpecs[viewType]);
        };
        Calendar.prototype.changeView = function (viewType, dateOrRange) {
            var dateMarker = null;
            if (dateOrRange) {
                if (dateOrRange.start && dateOrRange.end) { // a range
                    this.optionsManager.addDynamic({ visibleRange: dateOrRange }); // will not rerender
                    this.handleOptions(this.optionsManager.computed); // ...but yuck
                }
                else { // a date
                    dateMarker = this.dateEnv.createMarker(dateOrRange); // just like gotoDate
                }
            }
            this.unselect();
            this.dispatch({
                type: 'SET_VIEW_TYPE',
                viewType: viewType,
                dateMarker: dateMarker
            });
        };
        // Forces navigation to a view for the given date.
        // `viewType` can be a specific view name or a generic one like "week" or "day".
        // needs to change
        Calendar.prototype.zoomTo = function (dateMarker, viewType) {
            var spec;
            viewType = viewType || 'day'; // day is default zoom
            spec = this.viewSpecs[viewType] ||
                this.getUnitViewSpec(viewType);
            this.unselect();
            if (spec) {
                this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: spec.type,
                    dateMarker: dateMarker
                });
            }
            else {
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: dateMarker
                });
            }
        };
        // Given a duration singular unit, like "week" or "day", finds a matching view spec.
        // Preference is given to views that have corresponding buttons.
        Calendar.prototype.getUnitViewSpec = function (unit) {
            var component = this.component;
            var viewTypes = [];
            var i;
            var spec;
            // put views that have buttons first. there will be duplicates, but oh
            if (component.header) {
                viewTypes.push.apply(viewTypes, component.header.viewsWithButtons);
            }
            if (component.footer) {
                viewTypes.push.apply(viewTypes, component.footer.viewsWithButtons);
            }
            for (var viewType in this.viewSpecs) {
                viewTypes.push(viewType);
            }
            for (i = 0; i < viewTypes.length; i++) {
                spec = this.viewSpecs[viewTypes[i]];
                if (spec) {
                    if (spec.singleUnit === unit) {
                        return spec;
                    }
                }
            }
        };
        // Current Date
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.getInitialDate = function () {
            var defaultDateInput = this.opt('defaultDate');
            // compute the initial ambig-timezone date
            if (defaultDateInput != null) {
                return this.dateEnv.createMarker(defaultDateInput);
            }
            else {
                return this.getNow(); // getNow already returns unzoned
            }
        };
        Calendar.prototype.prev = function () {
            this.unselect();
            this.dispatch({ type: 'PREV' });
        };
        Calendar.prototype.next = function () {
            this.unselect();
            this.dispatch({ type: 'NEXT' });
        };
        Calendar.prototype.prevYear = function () {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
            });
        };
        Calendar.prototype.nextYear = function () {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
            });
        };
        Calendar.prototype.today = function () {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.getNow()
            });
        };
        Calendar.prototype.gotoDate = function (zonedDateInput) {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.createMarker(zonedDateInput)
            });
        };
        Calendar.prototype.incrementDate = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // else, warn about invalid input?
                this.unselect();
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: this.dateEnv.add(this.state.currentDate, delta)
                });
            }
        };
        // for external API
        Calendar.prototype.getDate = function () {
            return this.dateEnv.toDate(this.state.currentDate);
        };
        // Date Formatting Utils
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.formatDate = function (d, formatter) {
            var dateEnv = this.dateEnv;
            return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
        };
        // `settings` is for formatter AND isEndExclusive
        Calendar.prototype.formatRange = function (d0, d1, settings) {
            var dateEnv = this.dateEnv;
            return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings, this.opt('defaultRangeSeparator')), settings);
        };
        Calendar.prototype.formatIso = function (d, omitTime) {
            var dateEnv = this.dateEnv;
            return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
        };
        // Sizing
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.windowResize = function (ev) {
            if (!this.isHandlingWindowResize &&
                this.component && // why?
                ev.target === window // not a jqui resize event
            ) {
                this.isHandlingWindowResize = true;
                this.updateSize();
                this.publiclyTrigger('windowResize', [this.view]);
                this.isHandlingWindowResize = false;
            }
        };
        Calendar.prototype.updateSize = function () {
            if (this.component) { // when?
                this.component.updateSize(true);
            }
        };
        // Component Registration
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.registerInteractiveComponent = function (component, settingsInput) {
            var settings = parseInteractionSettings(component, settingsInput);
            var DEFAULT_INTERACTIONS = [
                EventClicking,
                EventHovering
            ];
            var interactionClasses = DEFAULT_INTERACTIONS.concat(this.pluginSystem.hooks.componentInteractions);
            var interactions = interactionClasses.map(function (interactionClass) {
                return new interactionClass(settings);
            });
            this.interactionsStore[component.uid] = interactions;
            interactionSettingsStore[component.uid] = settings;
        };
        Calendar.prototype.unregisterInteractiveComponent = function (component) {
            for (var _i = 0, _a = this.interactionsStore[component.uid]; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener.destroy();
            }
            delete this.interactionsStore[component.uid];
            delete interactionSettingsStore[component.uid];
        };
        // Date Selection / Event Selection / DayClick
        // -----------------------------------------------------------------------------------------------------------------
        // this public method receives start/end dates in any format, with any timezone
        // NOTE: args were changed from v3
        Calendar.prototype.select = function (dateOrObj, endDate) {
            var selectionInput;
            if (endDate == null) {
                if (dateOrObj.start != null) {
                    selectionInput = dateOrObj;
                }
                else {
                    selectionInput = {
                        start: dateOrObj,
                        end: null
                    };
                }
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: endDate
                };
            }
            var selection = parseDateSpan(selectionInput, this.dateEnv, createDuration({ days: 1 }) // TODO: cache this?
            );
            if (selection) { // throw parse error otherwise?
                this.dispatch({ type: 'SELECT_DATES', selection: selection });
                this.triggerDateSelect(selection);
            }
        };
        // public method
        Calendar.prototype.unselect = function (pev) {
            if (this.state.dateSelection) {
                this.dispatch({ type: 'UNSELECT_DATES' });
                this.triggerDateUnselect(pev);
            }
        };
        Calendar.prototype.triggerDateSelect = function (selection, pev) {
            var arg = this.buildDateSpanApi(selection);
            arg.jsEvent = pev ? pev.origEvent : null;
            arg.view = this.view;
            this.publiclyTrigger('select', [arg]);
        };
        Calendar.prototype.triggerDateUnselect = function (pev) {
            this.publiclyTrigger('unselect', [
                {
                    jsEvent: pev ? pev.origEvent : null,
                    view: this.view
                }
            ]);
        };
        // TODO: receive pev?
        Calendar.prototype.triggerDateClick = function (dateSpan, dayEl, view, ev) {
            var arg = this.buildDatePointApi(dateSpan);
            arg.dayEl = dayEl;
            arg.jsEvent = ev;
            arg.view = view;
            this.publiclyTrigger('dateClick', [arg]);
        };
        Calendar.prototype.buildDatePointApi = function (dateSpan) {
            var props = {};
            for (var _i = 0, _a = this.pluginSystem.hooks.datePointTransforms; _i < _a.length; _i++) {
                var transform = _a[_i];
                __assign(props, transform(dateSpan, this));
            }
            __assign(props, buildDatePointApi(dateSpan, this.dateEnv));
            return props;
        };
        Calendar.prototype.buildDateSpanApi = function (dateSpan) {
            var props = {};
            for (var _i = 0, _a = this.pluginSystem.hooks.dateSpanTransforms; _i < _a.length; _i++) {
                var transform = _a[_i];
                __assign(props, transform(dateSpan, this));
            }
            __assign(props, buildDateSpanApi(dateSpan, this.dateEnv));
            return props;
        };
        // Date Utils
        // -----------------------------------------------------------------------------------------------------------------
        // Returns a DateMarker for the current date, as defined by the client's computer or from the `now` option
        Calendar.prototype.getNow = function () {
            var now = this.opt('now');
            if (typeof now === 'function') {
                now = now();
            }
            if (now == null) {
                return this.dateEnv.createNowMarker();
            }
            return this.dateEnv.createMarker(now);
        };
        // Event-Date Utilities
        // -----------------------------------------------------------------------------------------------------------------
        // Given an event's allDay status and start date, return what its fallback end date should be.
        // TODO: rename to computeDefaultEventEnd
        Calendar.prototype.getDefaultEventEnd = function (allDay, marker) {
            var end = marker;
            if (allDay) {
                end = startOfDay(end);
                end = this.dateEnv.add(end, this.defaultAllDayEventDuration);
            }
            else {
                end = this.dateEnv.add(end, this.defaultTimedEventDuration);
            }
            return end;
        };
        // Public Events API
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.addEvent = function (eventInput, sourceInput) {
            if (eventInput instanceof EventApi) {
                var def = eventInput._def;
                var instance = eventInput._instance;
                // not already present? don't want to add an old snapshot
                if (!this.state.eventStore.defs[def.defId]) {
                    this.dispatch({
                        type: 'ADD_EVENTS',
                        eventStore: eventTupleToStore({ def: def, instance: instance }) // TODO: better util for two args?
                    });
                }
                return eventInput;
            }
            var sourceId;
            if (sourceInput instanceof EventSourceApi) {
                sourceId = sourceInput.internalEventSource.sourceId;
            }
            else if (sourceInput != null) {
                var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
                if (!sourceApi) {
                    console.warn('Could not find an event source with ID "' + sourceInput + '"'); // TODO: test
                    return null;
                }
                else {
                    sourceId = sourceApi.internalEventSource.sourceId;
                }
            }
            var tuple = parseEvent(eventInput, sourceId, this);
            if (tuple) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore(tuple)
                });
                return new EventApi(this, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
            }
            return null;
        };
        // TODO: optimize
        Calendar.prototype.getEventById = function (id) {
            var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
            id = String(id);
            for (var defId in defs) {
                var def = defs[defId];
                if (def.publicId === id) {
                    if (def.recurringDef) {
                        return new EventApi(this, def, null);
                    }
                    else {
                        for (var instanceId in instances) {
                            var instance = instances[instanceId];
                            if (instance.defId === def.defId) {
                                return new EventApi(this, def, instance);
                            }
                        }
                    }
                }
            }
            return null;
        };
        Calendar.prototype.getEvents = function () {
            var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
            var eventApis = [];
            for (var id in instances) {
                var instance = instances[id];
                var def = defs[instance.defId];
                eventApis.push(new EventApi(this, def, instance));
            }
            return eventApis;
        };
        Calendar.prototype.removeAllEvents = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
        };
        Calendar.prototype.rerenderEvents = function () {
            this.dispatch({ type: 'RESET_EVENTS' });
        };
        // Public Event Sources API
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.getEventSources = function () {
            var sourceHash = this.state.eventSources;
            var sourceApis = [];
            for (var internalId in sourceHash) {
                sourceApis.push(new EventSourceApi(this, sourceHash[internalId]));
            }
            return sourceApis;
        };
        Calendar.prototype.getEventSourceById = function (id) {
            var sourceHash = this.state.eventSources;
            id = String(id);
            for (var sourceId in sourceHash) {
                if (sourceHash[sourceId].publicId === id) {
                    return new EventSourceApi(this, sourceHash[sourceId]);
                }
            }
            return null;
        };
        Calendar.prototype.addEventSource = function (sourceInput) {
            if (sourceInput instanceof EventSourceApi) {
                // not already present? don't want to add an old snapshot
                if (!this.state.eventSources[sourceInput.internalEventSource.sourceId]) {
                    this.dispatch({
                        type: 'ADD_EVENT_SOURCES',
                        sources: [sourceInput.internalEventSource]
                    });
                }
                return sourceInput;
            }
            var eventSource = parseEventSource(sourceInput, this);
            if (eventSource) { // TODO: error otherwise?
                this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
                return new EventSourceApi(this, eventSource);
            }
            return null;
        };
        Calendar.prototype.removeAllEventSources = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
        };
        Calendar.prototype.refetchEvents = function () {
            this.dispatch({ type: 'FETCH_EVENT_SOURCES' });
        };
        // Scroll
        // -----------------------------------------------------------------------------------------------------------------
        Calendar.prototype.scrollToTime = function (timeInput) {
            var time = createDuration(timeInput);
            if (time) {
                this.component.view.scrollToTime(time);
            }
        };
        return Calendar;
    }());
    EmitterMixin.mixInto(Calendar);
    // for memoizers
    // -----------------------------------------------------------------------------------------------------------------
    function buildDateEnv(locale, timeZone, namedTimeZoneImpl, firstDay, weekNumberCalculation, weekLabel, cmdFormatter) {
        return new DateEnv({
            calendarSystem: 'gregory',
            timeZone: timeZone,
            namedTimeZoneImpl: namedTimeZoneImpl,
            locale: locale,
            weekNumberCalculation: weekNumberCalculation,
            firstDay: firstDay,
            weekLabel: weekLabel,
            cmdFormatter: cmdFormatter
        });
    }
    function buildTheme(calendarOptions) {
        var themeClass = this.pluginSystem.hooks.themeClasses[calendarOptions.themeSystem] || StandardTheme;
        return new themeClass(calendarOptions);
    }
    function buildDelayedRerender(wait) {
        var func = this.tryRerender.bind(this);
        if (wait != null) {
            func = debounce(func, wait);
        }
        return func;
    }
    function buildEventUiBySource(eventSources) {
        return mapHash(eventSources, function (eventSource) {
            return eventSource.ui;
        });
    }
    function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
        var eventUiBases = { '': eventUiSingleBase };
        for (var defId in eventDefs) {
            var def = eventDefs[defId];
            if (def.sourceId && eventUiBySource[def.sourceId]) {
                eventUiBases[defId] = eventUiBySource[def.sourceId];
            }
        }
        return eventUiBases;
    }

    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View(context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, context, createElement('div', { className: 'fc-view fc-' + viewSpec.type + '-view' }), true // isView (HACK)
            ) || this;
            _this.renderDatesMem = memoizeRendering(_this.renderDatesWrap, _this.unrenderDatesWrap);
            _this.renderBusinessHoursMem = memoizeRendering(_this.renderBusinessHours, _this.unrenderBusinessHours, [_this.renderDatesMem]);
            _this.renderDateSelectionMem = memoizeRendering(_this.renderDateSelectionWrap, _this.unrenderDateSelectionWrap, [_this.renderDatesMem]);
            _this.renderEventsMem = memoizeRendering(_this.renderEvents, _this.unrenderEvents, [_this.renderDatesMem]);
            _this.renderEventSelectionMem = memoizeRendering(_this.renderEventSelectionWrap, _this.unrenderEventSelectionWrap, [_this.renderEventsMem]);
            _this.renderEventDragMem = memoizeRendering(_this.renderEventDragWrap, _this.unrenderEventDragWrap, [_this.renderDatesMem]);
            _this.renderEventResizeMem = memoizeRendering(_this.renderEventResizeWrap, _this.unrenderEventResizeWrap, [_this.renderDatesMem]);
            _this.viewSpec = viewSpec;
            _this.dateProfileGenerator = dateProfileGenerator;
            _this.type = viewSpec.type;
            _this.eventOrderSpecs = parseFieldSpecs(_this.opt('eventOrder'));
            _this.nextDayThreshold = createDuration(_this.opt('nextDayThreshold'));
            parentEl.appendChild(_this.el);
            _this.initialize();
            return _this;
        }
        View.prototype.initialize = function () {
        };
        Object.defineProperty(View.prototype, "activeStart", {
            // Date Setting/Unsetting
            // -----------------------------------------------------------------------------------------------------------------
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.activeRange.start);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "activeEnd", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.activeRange.end);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "currentStart", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.currentRange.start);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "currentEnd", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.currentRange.end);
            },
            enumerable: true,
            configurable: true
        });
        // General Rendering
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.render = function (props) {
            this.renderDatesMem(props.dateProfile);
            this.renderBusinessHoursMem(props.businessHours);
            this.renderDateSelectionMem(props.dateSelection);
            this.renderEventsMem(props.eventStore);
            this.renderEventSelectionMem(props.eventSelection);
            this.renderEventDragMem(props.eventDrag);
            this.renderEventResizeMem(props.eventResize);
        };
        View.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderDatesMem.unrender(); // should unrender everything else
        };
        // Sizing
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.updateSize = function (isResize, viewHeight, isAuto) {
            var calendar = this.calendar;
            if (isResize || calendar.isViewUpdated || calendar.isDatesUpdated || calendar.isEventsUpdated) {
                // sort of the catch-all sizing
                // anything that might cause dimension changes
                this.updateBaseSize(isResize, viewHeight, isAuto);
            }
        };
        View.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        };
        // Date Rendering
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderDatesWrap = function (dateProfile) {
            this.renderDates(dateProfile);
            this.addScroll({
                timeMs: createDuration(this.opt('scrollTime')).milliseconds
            });
            this.startNowIndicator(dateProfile); // shouldn't render yet because updateSize will be called soon
        };
        View.prototype.unrenderDatesWrap = function () {
            this.stopNowIndicator();
            this.unrenderDates();
        };
        View.prototype.renderDates = function (dateProfile) { };
        View.prototype.unrenderDates = function () { };
        // Business Hours
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderBusinessHours = function (businessHours) { };
        View.prototype.unrenderBusinessHours = function () { };
        // Date Selection
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderDateSelectionWrap = function (selection) {
            if (selection) {
                this.renderDateSelection(selection);
            }
        };
        View.prototype.unrenderDateSelectionWrap = function (selection) {
            if (selection) {
                this.unrenderDateSelection(selection);
            }
        };
        View.prototype.renderDateSelection = function (selection) { };
        View.prototype.unrenderDateSelection = function (selection) { };
        // Event Rendering
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderEvents = function (eventStore) { };
        View.prototype.unrenderEvents = function () { };
        // util for subclasses
        View.prototype.sliceEvents = function (eventStore, allDay) {
            var props = this.props;
            return sliceEventStore(eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? this.nextDayThreshold : null).fg;
        };
        // Event Selection
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderEventSelectionWrap = function (instanceId) {
            if (instanceId) {
                this.renderEventSelection(instanceId);
            }
        };
        View.prototype.unrenderEventSelectionWrap = function (instanceId) {
            if (instanceId) {
                this.unrenderEventSelection(instanceId);
            }
        };
        View.prototype.renderEventSelection = function (instanceId) { };
        View.prototype.unrenderEventSelection = function (instanceId) { };
        // Event Drag
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderEventDragWrap = function (state) {
            if (state) {
                this.renderEventDrag(state);
            }
        };
        View.prototype.unrenderEventDragWrap = function (state) {
            if (state) {
                this.unrenderEventDrag(state);
            }
        };
        View.prototype.renderEventDrag = function (state) { };
        View.prototype.unrenderEventDrag = function (state) { };
        // Event Resize
        // -----------------------------------------------------------------------------------------------------------------
        View.prototype.renderEventResizeWrap = function (state) {
            if (state) {
                this.renderEventResize(state);
            }
        };
        View.prototype.unrenderEventResizeWrap = function (state) {
            if (state) {
                this.unrenderEventResize(state);
            }
        };
        View.prototype.renderEventResize = function (state) { };
        View.prototype.unrenderEventResize = function (state) { };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/
        // Immediately render the current time indicator and begins re-rendering it at an interval,
        // which is defined by this.getNowIndicatorUnit().
        // TODO: somehow do this for the current whole day's background too
        View.prototype.startNowIndicator = function (dateProfile) {
            var _this = this;
            var dateEnv = this.dateEnv;
            var unit;
            var update;
            var delay; // ms wait value
            if (this.opt('nowIndicator')) {
                unit = this.getNowIndicatorUnit(dateProfile);
                if (unit) {
                    update = this.updateNowIndicator.bind(this);
                    this.initialNowDate = this.calendar.getNow();
                    this.initialNowQueriedMs = new Date().valueOf();
                    // wait until the beginning of the next interval
                    delay = dateEnv.add(dateEnv.startOf(this.initialNowDate, unit), createDuration(1, unit)).valueOf() - this.initialNowDate.valueOf();
                    // TODO: maybe always use setTimeout, waiting until start of next unit
                    this.nowIndicatorTimeoutID = setTimeout(function () {
                        _this.nowIndicatorTimeoutID = null;
                        update();
                        if (unit === 'second') {
                            delay = 1000; // every second
                        }
                        else {
                            delay = 1000 * 60; // otherwise, every minute
                        }
                        _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
                    }, delay);
                }
                // rendering will be initiated in updateSize
            }
        };
        // rerenders the now indicator, computing the new current time from the amount of time that has passed
        // since the initial getNow call.
        View.prototype.updateNowIndicator = function () {
            if (this.props.dateProfile && // a way to determine if dates were rendered yet
                this.initialNowDate // activated before?
            ) {
                this.unrenderNowIndicator(); // won't unrender if unnecessary
                this.renderNowIndicator(addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs));
                this.isNowIndicatorRendered = true;
            }
        };
        // Immediately unrenders the view's current time indicator and stops any re-rendering timers.
        // Won't cause side effects if indicator isn't rendered.
        View.prototype.stopNowIndicator = function () {
            if (this.isNowIndicatorRendered) {
                if (this.nowIndicatorTimeoutID) {
                    clearTimeout(this.nowIndicatorTimeoutID);
                    this.nowIndicatorTimeoutID = null;
                }
                if (this.nowIndicatorIntervalID) {
                    clearInterval(this.nowIndicatorIntervalID);
                    this.nowIndicatorIntervalID = null;
                }
                this.unrenderNowIndicator();
                this.isNowIndicatorRendered = false;
            }
        };
        View.prototype.getNowIndicatorUnit = function (dateProfile) {
            // subclasses should implement
        };
        // Renders a current time indicator at the given datetime
        View.prototype.renderNowIndicator = function (date) {
            // SUBCLASSES MUST PASS TO CHILDREN!
        };
        // Undoes the rendering actions from renderNowIndicator
        View.prototype.unrenderNowIndicator = function () {
            // SUBCLASSES MUST PASS TO CHILDREN!
        };
        /* Scroller
        ------------------------------------------------------------------------------------------------------------------*/
        View.prototype.addScroll = function (scroll) {
            var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
            __assign(queuedScroll, scroll);
        };
        View.prototype.popScroll = function (isResize) {
            this.applyQueuedScroll(isResize);
            this.queuedScroll = null;
        };
        View.prototype.applyQueuedScroll = function (isResize) {
            this.applyScroll(this.queuedScroll || {}, isResize);
        };
        View.prototype.queryScroll = function () {
            var scroll = {};
            if (this.props.dateProfile) { // dates rendered yet?
                __assign(scroll, this.queryDateScroll());
            }
            return scroll;
        };
        View.prototype.applyScroll = function (scroll, isResize) {
            var timeMs = scroll.timeMs;
            if (timeMs != null) {
                delete scroll.timeMs;
                if (this.props.dateProfile) { // dates rendered yet?
                    __assign(scroll, this.computeDateScroll(timeMs));
                }
            }
            if (this.props.dateProfile) { // dates rendered yet?
                this.applyDateScroll(scroll);
            }
        };
        View.prototype.computeDateScroll = function (timeMs) {
            return {}; // subclasses must implement
        };
        View.prototype.queryDateScroll = function () {
            return {}; // subclasses must implement
        };
        View.prototype.applyDateScroll = function (scroll) {
            // subclasses must implement
        };
        // for API
        View.prototype.scrollToTime = function (time) {
            this.applyScroll({
                timeMs: time.milliseconds
            }, false);
        };
        return View;
    }(DateComponent));
    EmitterMixin.mixInto(View);
    View.prototype.usesMinMaxTime = false;
    View.prototype.dateProfileGeneratorClass = DateProfileGenerator;

    var FgEventRenderer = /** @class */ (function () {
        function FgEventRenderer(context) {
            this.segs = [];
            this.isSizeDirty = false;
            this.context = context;
        }
        FgEventRenderer.prototype.renderSegs = function (segs, mirrorInfo) {
            this.rangeUpdated(); // called too frequently :(
            // render an `.el` on each seg
            // returns a subset of the segs. segs that were actually rendered
            segs = this.renderSegEls(segs, mirrorInfo);
            this.segs = segs;
            this.attachSegs(segs, mirrorInfo);
            this.isSizeDirty = true;
            this.context.view.triggerRenderedSegs(this.segs, Boolean(mirrorInfo));
        };
        FgEventRenderer.prototype.unrender = function (_segs, mirrorInfo) {
            this.context.view.triggerWillRemoveSegs(this.segs, Boolean(mirrorInfo));
            this.detachSegs(this.segs);
            this.segs = [];
        };
        // Updates values that rely on options and also relate to range
        FgEventRenderer.prototype.rangeUpdated = function () {
            var options = this.context.options;
            var displayEventTime;
            var displayEventEnd;
            this.eventTimeFormat = createFormatter(options.eventTimeFormat || this.computeEventTimeFormat(), options.defaultRangeSeparator);
            displayEventTime = options.displayEventTime;
            if (displayEventTime == null) {
                displayEventTime = this.computeDisplayEventTime(); // might be based off of range
            }
            displayEventEnd = options.displayEventEnd;
            if (displayEventEnd == null) {
                displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
            }
            this.displayEventTime = displayEventTime;
            this.displayEventEnd = displayEventEnd;
        };
        // Renders and assigns an `el` property for each foreground event segment.
        // Only returns segments that successfully rendered.
        FgEventRenderer.prototype.renderSegEls = function (segs, mirrorInfo) {
            var html = '';
            var i;
            if (segs.length) { // don't build an empty html string
                // build a large concatenation of event segment HTML
                for (i = 0; i < segs.length; i++) {
                    html += this.renderSegHtml(segs[i], mirrorInfo);
                }
                // Grab individual elements from the combined HTML string. Use each as the default rendering.
                // Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
                htmlToElements(html).forEach(function (el, i) {
                    var seg = segs[i];
                    if (el) {
                        seg.el = el;
                    }
                });
                segs = filterSegsViaEls(this.context.view, segs, Boolean(mirrorInfo));
            }
            return segs;
        };
        // Generic utility for generating the HTML classNames for an event segment's element
        FgEventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable, mirrorInfo) {
            var classes = [
                'fc-event',
                seg.isStart ? 'fc-start' : 'fc-not-start',
                seg.isEnd ? 'fc-end' : 'fc-not-end'
            ].concat(seg.eventRange.ui.classNames);
            if (isDraggable) {
                classes.push('fc-draggable');
            }
            if (isResizable) {
                classes.push('fc-resizable');
            }
            if (mirrorInfo) {
                classes.push('fc-mirror');
                if (mirrorInfo.isDragging) {
                    classes.push('fc-dragging');
                }
                if (mirrorInfo.isResizing) {
                    classes.push('fc-resizing');
                }
            }
            return classes;
        };
        // Compute the text that should be displayed on an event's element.
        // `range` can be the Event object itself, or something range-like, with at least a `start`.
        // If event times are disabled, or the event has no time, will return a blank string.
        // If not specified, formatter will default to the eventTimeFormat setting,
        // and displayEnd will default to the displayEventEnd setting.
        FgEventRenderer.prototype.getTimeText = function (eventRange, formatter, displayEnd) {
            var def = eventRange.def, instance = eventRange.instance;
            return this._getTimeText(instance.range.start, def.hasEnd ? instance.range.end : null, def.allDay, formatter, displayEnd, instance.forcedStartTzo, instance.forcedEndTzo);
        };
        FgEventRenderer.prototype._getTimeText = function (start, end, allDay, formatter, displayEnd, forcedStartTzo, forcedEndTzo) {
            var dateEnv = this.context.dateEnv;
            if (formatter == null) {
                formatter = this.eventTimeFormat;
            }
            if (displayEnd == null) {
                displayEnd = this.displayEventEnd;
            }
            if (this.displayEventTime && !allDay) {
                if (displayEnd && end) {
                    return dateEnv.formatRange(start, end, formatter, {
                        forcedStartTzo: forcedStartTzo,
                        forcedEndTzo: forcedEndTzo
                    });
                }
                else {
                    return dateEnv.format(start, formatter, {
                        forcedTzo: forcedStartTzo
                    });
                }
            }
            return '';
        };
        FgEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true
            };
        };
        FgEventRenderer.prototype.computeDisplayEventTime = function () {
            return true;
        };
        FgEventRenderer.prototype.computeDisplayEventEnd = function () {
            return true;
        };
        // Utility for generating event skin-related CSS properties
        FgEventRenderer.prototype.getSkinCss = function (ui) {
            return {
                'background-color': ui.backgroundColor,
                'border-color': ui.borderColor,
                color: ui.textColor
            };
        };
        FgEventRenderer.prototype.sortEventSegs = function (segs) {
            var specs = this.context.view.eventOrderSpecs;
            var objs = segs.map(buildSegCompareObj);
            objs.sort(function (obj0, obj1) {
                return compareByFieldSpecs(obj0, obj1, specs);
            });
            return objs.map(function (c) {
                return c._seg;
            });
        };
        FgEventRenderer.prototype.computeSizes = function (force) {
            if (force || this.isSizeDirty) {
                this.computeSegSizes(this.segs);
            }
        };
        FgEventRenderer.prototype.assignSizes = function (force) {
            if (force || this.isSizeDirty) {
                this.assignSegSizes(this.segs);
                this.isSizeDirty = false;
            }
        };
        FgEventRenderer.prototype.computeSegSizes = function (segs) {
        };
        FgEventRenderer.prototype.assignSegSizes = function (segs) {
        };
        // Manipulation on rendered segs
        FgEventRenderer.prototype.hideByHash = function (hash) {
            if (hash) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    if (hash[seg.eventRange.instance.instanceId]) {
                        seg.el.style.visibility = 'hidden';
                    }
                }
            }
        };
        FgEventRenderer.prototype.showByHash = function (hash) {
            if (hash) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    if (hash[seg.eventRange.instance.instanceId]) {
                        seg.el.style.visibility = '';
                    }
                }
            }
        };
        FgEventRenderer.prototype.selectByInstanceId = function (instanceId) {
            if (instanceId) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    var eventInstance = seg.eventRange.instance;
                    if (eventInstance && eventInstance.instanceId === instanceId &&
                        seg.el // necessary?
                    ) {
                        seg.el.classList.add('fc-selected');
                    }
                }
            }
        };
        FgEventRenderer.prototype.unselectByInstanceId = function (instanceId) {
            if (instanceId) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    if (seg.el) { // necessary?
                        seg.el.classList.remove('fc-selected');
                    }
                }
            }
        };
        return FgEventRenderer;
    }());
    // returns a object with all primitive props that can be compared
    function buildSegCompareObj(seg) {
        var eventDef = seg.eventRange.def;
        var range = seg.eventRange.instance.range;
        var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
        var end = range.end ? range.end.valueOf() : 0; // "
        return __assign({}, eventDef.extendedProps, eventDef, { id: eventDef.publicId, start: start,
            end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg // for later retrieval
         });
    }

    var FillRenderer = /** @class */ (function () {
        function FillRenderer(context) {
            this.fillSegTag = 'div';
            this.dirtySizeFlags = {};
            this.context = context;
            this.containerElsByType = {};
            this.segsByType = {};
        }
        FillRenderer.prototype.getSegsByType = function (type) {
            return this.segsByType[type] || [];
        };
        FillRenderer.prototype.renderSegs = function (type, segs) {
            var _a;
            var renderedSegs = this.renderSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs
            var containerEls = this.attachSegs(type, renderedSegs);
            if (containerEls) {
                (_a = (this.containerElsByType[type] || (this.containerElsByType[type] = []))).push.apply(_a, containerEls);
            }
            this.segsByType[type] = renderedSegs;
            if (type === 'bgEvent') {
                this.context.view.triggerRenderedSegs(renderedSegs, false); // isMirror=false
            }
            this.dirtySizeFlags[type] = true;
        };
        // Unrenders a specific type of fill that is currently rendered on the grid
        FillRenderer.prototype.unrender = function (type) {
            var segs = this.segsByType[type];
            if (segs) {
                if (type === 'bgEvent') {
                    this.context.view.triggerWillRemoveSegs(segs, false); // isMirror=false
                }
                this.detachSegs(type, segs);
            }
        };
        // Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
        // Only returns segments that successfully rendered.
        FillRenderer.prototype.renderSegEls = function (type, segs) {
            var _this = this;
            var html = '';
            var i;
            if (segs.length) {
                // build a large concatenation of segment HTML
                for (i = 0; i < segs.length; i++) {
                    html += this.renderSegHtml(type, segs[i]);
                }
                // Grab individual elements from the combined HTML string. Use each as the default rendering.
                // Then, compute the 'el' for each segment.
                htmlToElements(html).forEach(function (el, i) {
                    var seg = segs[i];
                    if (el) {
                        seg.el = el;
                    }
                });
                if (type === 'bgEvent') {
                    segs = filterSegsViaEls(this.context.view, segs, false // isMirror. background events can never be mirror elements
                    );
                }
                // correct element type? (would be bad if a non-TD were inserted into a table for example)
                segs = segs.filter(function (seg) {
                    return elementMatches(seg.el, _this.fillSegTag);
                });
            }
            return segs;
        };
        // Builds the HTML needed for one fill segment. Generic enough to work with different types.
        FillRenderer.prototype.renderSegHtml = function (type, seg) {
            var css = null;
            var classNames = [];
            if (type !== 'highlight' && type !== 'businessHours') {
                css = {
                    'background-color': seg.eventRange.ui.backgroundColor
                };
            }
            if (type !== 'highlight') {
                classNames = classNames.concat(seg.eventRange.ui.classNames);
            }
            if (type === 'businessHours') {
                classNames.push('fc-bgevent');
            }
            else {
                classNames.push('fc-' + type.toLowerCase());
            }
            return '<' + this.fillSegTag +
                (classNames.length ? ' class="' + classNames.join(' ') + '"' : '') +
                (css ? ' style="' + cssToStr(css) + '"' : '') +
                '></' + this.fillSegTag + '>';
        };
        FillRenderer.prototype.detachSegs = function (type, segs) {
            var containerEls = this.containerElsByType[type];
            if (containerEls) {
                containerEls.forEach(removeElement);
                delete this.containerElsByType[type];
            }
        };
        FillRenderer.prototype.computeSizes = function (force) {
            for (var type in this.segsByType) {
                if (force || this.dirtySizeFlags[type]) {
                    this.computeSegSizes(this.segsByType[type]);
                }
            }
        };
        FillRenderer.prototype.assignSizes = function (force) {
            for (var type in this.segsByType) {
                if (force || this.dirtySizeFlags[type]) {
                    this.assignSegSizes(this.segsByType[type]);
                }
            }
            this.dirtySizeFlags = {};
        };
        FillRenderer.prototype.computeSegSizes = function (segs) {
        };
        FillRenderer.prototype.assignSegSizes = function (segs) {
        };
        return FillRenderer;
    }());

    var NamedTimeZoneImpl = /** @class */ (function () {
        function NamedTimeZoneImpl(timeZoneName) {
            this.timeZoneName = timeZoneName;
        }
        return NamedTimeZoneImpl;
    }());

    /*
    An abstraction for a dragging interaction originating on an event.
    Does higher-level things than PointerDragger, such as possibly:
    - a "mirror" that moves with the pointer
    - a minimum number of pixels or other criteria for a true drag to begin

    subclasses must emit:
    - pointerdown
    - dragstart
    - dragmove
    - pointerup
    - dragend
    */
    var ElementDragging = /** @class */ (function () {
        function ElementDragging(el) {
            this.emitter = new EmitterMixin();
        }
        ElementDragging.prototype.destroy = function () {
        };
        ElementDragging.prototype.setMirrorIsVisible = function (bool) {
            // optional if subclass doesn't want to support a mirror
        };
        ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
            // optional if subclass doesn't want to support a mirror
        };
        ElementDragging.prototype.setAutoScrollEnabled = function (bool) {
            // optional
        };
        return ElementDragging;
    }());

    function formatDate(dateInput, settings) {
        if (settings === void 0) { settings = {}; }
        var dateEnv = buildDateEnv$1(settings);
        var formatter = createFormatter(settings);
        var dateMeta = dateEnv.createMarkerMeta(dateInput);
        if (!dateMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.format(dateMeta.marker, formatter, {
            forcedTzo: dateMeta.forcedTzo
        });
    }
    function formatRange(startInput, endInput, settings // mixture of env and formatter settings
    ) {
        var dateEnv = buildDateEnv$1(typeof settings === 'object' && settings ? settings : {}); // pass in if non-null object
        var formatter = createFormatter(settings, globalDefaults.defaultRangeSeparator);
        var startMeta = dateEnv.createMarkerMeta(startInput);
        var endMeta = dateEnv.createMarkerMeta(endInput);
        if (!startMeta || !endMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
            forcedStartTzo: startMeta.forcedTzo,
            forcedEndTzo: endMeta.forcedTzo,
            isEndExclusive: settings.isEndExclusive
        });
    }
    // TODO: more DRY and optimized
    function buildDateEnv$1(settings) {
        var locale = buildLocale(settings.locale || 'en', parseRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
        // ensure required settings
        settings = __assign({ timeZone: globalDefaults.timeZone, calendarSystem: 'gregory' }, settings, { locale: locale });
        return new DateEnv(settings);
    }

    var DRAG_META_PROPS = {
        startTime: createDuration,
        duration: createDuration,
        create: Boolean,
        sourceId: String
    };
    var DRAG_META_DEFAULTS = {
        create: true
    };
    function parseDragMeta(raw) {
        var leftoverProps = {};
        var refined = refineProps(raw, DRAG_META_PROPS, DRAG_META_DEFAULTS, leftoverProps);
        refined.leftoverProps = leftoverProps;
        return refined;
    }

    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (!datesRepDistinctDays || dayCnt > 10) {
            return { weekday: 'short' }; // "Sat"
        }
        else if (dayCnt > 1) {
            return { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }; // "Sat 11/12"
        }
        else {
            return { weekday: 'long' }; // "Saturday"
        }
    }
    function renderDateCell(dateMarker, dateProfile, datesRepDistinctDays, colCnt, colHeadFormat, context, colspan, otherAttrs) {
        var view = context.view, dateEnv = context.dateEnv, theme = context.theme, options = context.options;
        var isDateValid = rangeContainsMarker(dateProfile.activeRange, dateMarker); // TODO: called too frequently. cache somehow.
        var classNames = [
            'fc-day-header',
            theme.getClass('widgetHeader')
        ];
        var innerHtml;
        if (typeof options.columnHeaderHtml === 'function') {
            innerHtml = options.columnHeaderHtml(dateEnv.toDate(dateMarker));
        }
        else if (typeof options.columnHeaderText === 'function') {
            innerHtml = htmlEscape(options.columnHeaderText(dateEnv.toDate(dateMarker)));
        }
        else {
            innerHtml = htmlEscape(dateEnv.format(dateMarker, colHeadFormat));
        }
        // if only one row of days, the classNames on the header can represent the specific days beneath
        if (datesRepDistinctDays) {
            classNames = classNames.concat(
            // includes the day-of-week class
            // noThemeHighlight=true (don't highlight the header)
            getDayClasses(dateMarker, dateProfile, context, true));
        }
        else {
            classNames.push('fc-' + DAY_IDS[dateMarker.getUTCDay()]); // only add the day-of-week class
        }
        return '' +
            '<th class="' + classNames.join(' ') + '"' +
            ((isDateValid && datesRepDistinctDays) ?
                ' data-date="' + dateEnv.formatIso(dateMarker, { omitTime: true }) + '"' :
                '') +
            (colspan > 1 ?
                ' colspan="' + colspan + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '>' +
            (isDateValid ?
                // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
                buildGotoAnchorHtml(view, { date: dateMarker, forceOff: !datesRepDistinctDays || colCnt === 1 }, innerHtml) :
                // if not valid, display text, but no link
                innerHtml) +
            '</th>';
    }

    var DayHeader = /** @class */ (function (_super) {
        __extends(DayHeader, _super);
        function DayHeader(context, parentEl) {
            var _this = _super.call(this, context) || this;
            parentEl.innerHTML = ''; // because might be nbsp
            parentEl.appendChild(_this.el = htmlToElement('<div class="fc-row ' + _this.theme.getClass('headerRow') + '">' +
                '<table class="' + _this.theme.getClass('tableGrid') + '">' +
                '<thead></thead>' +
                '</table>' +
                '</div>'));
            _this.thead = _this.el.querySelector('thead');
            return _this;
        }
        DayHeader.prototype.destroy = function () {
            removeElement(this.el);
        };
        DayHeader.prototype.render = function (props) {
            var dates = props.dates, datesRepDistinctDays = props.datesRepDistinctDays;
            var parts = [];
            if (props.renderIntroHtml) {
                parts.push(props.renderIntroHtml());
            }
            var colHeadFormat = createFormatter(this.opt('columnHeaderFormat') ||
                computeFallbackHeaderFormat(datesRepDistinctDays, dates.length));
            for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
                var date = dates_1[_i];
                parts.push(renderDateCell(date, props.dateProfile, datesRepDistinctDays, dates.length, colHeadFormat, this.context));
            }
            if (this.isRtl) {
                parts.reverse();
            }
            this.thead.innerHTML = '<tr>' + parts.join('') + '</tr>';
        };
        return DayHeader;
    }(Component));

    var DaySeries = /** @class */ (function () {
        function DaySeries(range, dateProfileGenerator) {
            var date = range.start;
            var end = range.end;
            var indices = [];
            var dates = [];
            var dayIndex = -1;
            while (date < end) { // loop each day from start to end
                if (dateProfileGenerator.isHiddenDay(date)) {
                    indices.push(dayIndex + 0.5); // mark that it's between indices
                }
                else {
                    dayIndex++;
                    indices.push(dayIndex);
                    dates.push(date);
                }
                date = addDays(date, 1);
            }
            this.dates = dates;
            this.indices = indices;
            this.cnt = dates.length;
        }
        DaySeries.prototype.sliceRange = function (range) {
            var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
            var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
            var clippedFirstIndex = Math.max(0, firstIndex);
            var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
            // deal with in-between indices
            clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
            clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
            if (clippedFirstIndex <= clippedLastIndex) {
                return {
                    firstIndex: clippedFirstIndex,
                    lastIndex: clippedLastIndex,
                    isStart: firstIndex === clippedFirstIndex,
                    isEnd: lastIndex === clippedLastIndex
                };
            }
            else {
                return null;
            }
        };
        // Given a date, returns its chronolocial cell-index from the first cell of the grid.
        // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
        // If before the first offset, returns a negative number.
        // If after the last offset, returns an offset past the last cell offset.
        // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
        DaySeries.prototype.getDateDayIndex = function (date) {
            var indices = this.indices;
            var dayOffset = Math.floor(diffDays(this.dates[0], date));
            if (dayOffset < 0) {
                return indices[0] - 1;
            }
            else if (dayOffset >= indices.length) {
                return indices[indices.length - 1] + 1;
            }
            else {
                return indices[dayOffset];
            }
        };
        return DaySeries;
    }());

    var DayTable = /** @class */ (function () {
        function DayTable(daySeries, breakOnWeeks) {
            var dates = daySeries.dates;
            var daysPerRow;
            var firstDay;
            var rowCnt;
            if (breakOnWeeks) {
                // count columns until the day-of-week repeats
                firstDay = dates[0].getUTCDay();
                for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow++) {
                    if (dates[daysPerRow].getUTCDay() === firstDay) {
                        break;
                    }
                }
                rowCnt = Math.ceil(dates.length / daysPerRow);
            }
            else {
                rowCnt = 1;
                daysPerRow = dates.length;
            }
            this.rowCnt = rowCnt;
            this.colCnt = daysPerRow;
            this.daySeries = daySeries;
            this.cells = this.buildCells();
            this.headerDates = this.buildHeaderDates();
        }
        DayTable.prototype.buildCells = function () {
            var rows = [];
            for (var row = 0; row < this.rowCnt; row++) {
                var cells = [];
                for (var col = 0; col < this.colCnt; col++) {
                    cells.push(this.buildCell(row, col));
                }
                rows.push(cells);
            }
            return rows;
        };
        DayTable.prototype.buildCell = function (row, col) {
            return {
                date: this.daySeries.dates[row * this.colCnt + col]
            };
        };
        DayTable.prototype.buildHeaderDates = function () {
            var dates = [];
            for (var col = 0; col < this.colCnt; col++) {
                dates.push(this.cells[0][col].date);
            }
            return dates;
        };
        DayTable.prototype.sliceRange = function (range) {
            var colCnt = this.colCnt;
            var seriesSeg = this.daySeries.sliceRange(range);
            var segs = [];
            if (seriesSeg) {
                var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
                var index = firstIndex;
                while (index <= lastIndex) {
                    var row = Math.floor(index / colCnt);
                    var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                    segs.push({
                        row: row,
                        firstCol: index % colCnt,
                        lastCol: (nextIndex - 1) % colCnt,
                        isStart: seriesSeg.isStart && index === firstIndex,
                        isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex
                    });
                    index = nextIndex;
                }
            }
            return segs;
        };
        return DayTable;
    }());

    var Slicer = /** @class */ (function () {
        function Slicer() {
            this.sliceBusinessHours = memoize(this._sliceBusinessHours);
            this.sliceDateSelection = memoize(this._sliceDateSpan);
            this.sliceEventStore = memoize(this._sliceEventStore);
            this.sliceEventDrag = memoize(this._sliceInteraction);
            this.sliceEventResize = memoize(this._sliceInteraction);
        }
        Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            var eventUiBases = props.eventUiBases;
            var eventSegs = this.sliceEventStore.apply(this, [props.eventStore, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs));
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(this, [props.dateSelection, eventUiBases, component].concat(extraArgs)),
                businessHourSegs: this.sliceBusinessHours.apply(this, [props.businessHours, dateProfile, nextDayThreshold, component].concat(extraArgs)),
                fgEventSegs: eventSegs.fg,
                bgEventSegs: eventSegs.bg,
                eventDrag: this.sliceEventDrag.apply(this, [props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
                eventResize: this.sliceEventResize.apply(this, [props.eventResize, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
                eventSelection: props.eventSelection
            }; // TODO: give interactionSegs?
        };
        Slicer.prototype.sliceNowDate = function (// does not memoize
        date, component) {
            var extraArgs = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                extraArgs[_i - 2] = arguments[_i];
            }
            return this._sliceDateSpan.apply(this, [{ range: { start: date, end: addMs(date, 1) }, allDay: false },
                {},
                component].concat(extraArgs));
        };
        Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            if (!businessHours) {
                return [];
            }
            return this._sliceEventStore.apply(this, [expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), component.calendar),
                {},
                dateProfile,
                nextDayThreshold,
                component].concat(extraArgs)).bg;
        };
        Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                extraArgs[_i - 5] = arguments[_i];
            }
            if (eventStore) {
                var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
                return {
                    bg: this.sliceEventRanges(rangeRes.bg, component, extraArgs),
                    fg: this.sliceEventRanges(rangeRes.fg, component, extraArgs)
                };
            }
            else {
                return { bg: [], fg: [] };
            }
        };
        Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                extraArgs[_i - 5] = arguments[_i];
            }
            if (!interaction) {
                return null;
            }
            var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                segs: this.sliceEventRanges(rangeRes.fg, component, extraArgs),
                affectedInstances: interaction.affectedEvents.instances,
                isEvent: interaction.isEvent,
                sourceSeg: interaction.origSeg
            };
        };
        Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, component) {
            var extraArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                extraArgs[_i - 3] = arguments[_i];
            }
            if (!dateSpan) {
                return [];
            }
            var eventRange = fabricateEventRange(dateSpan, eventUiBases, component.calendar);
            var segs = this.sliceRange.apply(this, [dateSpan.range].concat(extraArgs));
            for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
                var seg = segs_1[_a];
                seg.component = component;
                seg.eventRange = eventRange;
            }
            return segs;
        };
        /*
        "complete" seg means it has component and eventRange
        */
        Slicer.prototype.sliceEventRanges = function (eventRanges, component, // TODO: kill
        extraArgs) {
            var segs = [];
            for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
                var eventRange = eventRanges_1[_i];
                segs.push.apply(segs, this.sliceEventRange(eventRange, component, extraArgs));
            }
            return segs;
        };
        /*
        "complete" seg means it has component and eventRange
        */
        Slicer.prototype.sliceEventRange = function (eventRange, component, // TODO: kill
        extraArgs) {
            var segs = this.sliceRange.apply(this, [eventRange.range].concat(extraArgs));
            for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                var seg = segs_2[_i];
                seg.component = component;
                seg.eventRange = eventRange;
                seg.isStart = eventRange.isStart && seg.isStart;
                seg.isEnd = eventRange.isEnd && seg.isEnd;
            }
            return segs;
        };
        return Slicer;
    }());
    /*
    for incorporating minTime/maxTime if appropriate
    TODO: should be part of DateProfile!
    TimelineDateProfile already does this btw
    */
    function computeActiveRange(dateProfile, isComponentAllDay) {
        var range = dateProfile.activeRange;
        if (isComponentAllDay) {
            return range;
        }
        return {
            start: addMs(range.start, dateProfile.minTime.milliseconds),
            end: addMs(range.end, dateProfile.maxTime.milliseconds - 864e5) // 864e5 = ms in a day
        };
    }

    // exports
    // --------------------------------------------------------------------------------------------------
    var version = '4.1.0';

    exports.Calendar = Calendar;
    exports.Component = Component;
    exports.DateComponent = DateComponent;
    exports.DateEnv = DateEnv;
    exports.DateProfileGenerator = DateProfileGenerator;
    exports.DayHeader = DayHeader;
    exports.DaySeries = DaySeries;
    exports.DayTable = DayTable;
    exports.ElementDragging = ElementDragging;
    exports.ElementScrollController = ElementScrollController;
    exports.EmitterMixin = EmitterMixin;
    exports.EventApi = EventApi;
    exports.FgEventRenderer = FgEventRenderer;
    exports.FillRenderer = FillRenderer;
    exports.Interaction = Interaction;
    exports.Mixin = Mixin;
    exports.NamedTimeZoneImpl = NamedTimeZoneImpl;
    exports.PositionCache = PositionCache;
    exports.ScrollComponent = ScrollComponent;
    exports.ScrollController = ScrollController;
    exports.Slicer = Slicer;
    exports.Splitter = Splitter;
    exports.Theme = Theme;
    exports.View = View;
    exports.WindowScrollController = WindowScrollController;
    exports.addDays = addDays;
    exports.addDurations = addDurations;
    exports.addMs = addMs;
    exports.addWeeks = addWeeks;
    exports.allowContextMenu = allowContextMenu;
    exports.allowSelection = allowSelection;
    exports.appendToElement = appendToElement;
    exports.applyAll = applyAll;
    exports.applyMutationToEventStore = applyMutationToEventStore;
    exports.applyStyle = applyStyle;
    exports.applyStyleProp = applyStyleProp;
    exports.asRoughMinutes = asRoughMinutes;
    exports.asRoughMs = asRoughMs;
    exports.asRoughSeconds = asRoughSeconds;
    exports.buildGotoAnchorHtml = buildGotoAnchorHtml;
    exports.buildSegCompareObj = buildSegCompareObj;
    exports.capitaliseFirstLetter = capitaliseFirstLetter;
    exports.combineEventUis = combineEventUis;
    exports.compareByFieldSpec = compareByFieldSpec;
    exports.compareByFieldSpecs = compareByFieldSpecs;
    exports.compareNumbers = compareNumbers;
    exports.compensateScroll = compensateScroll;
    exports.computeClippingRect = computeClippingRect;
    exports.computeEdges = computeEdges;
    exports.computeFallbackHeaderFormat = computeFallbackHeaderFormat;
    exports.computeHeightAndMargins = computeHeightAndMargins;
    exports.computeInnerRect = computeInnerRect;
    exports.computeRect = computeRect;
    exports.computeVisibleDayRange = computeVisibleDayRange;
    exports.config = config;
    exports.constrainPoint = constrainPoint;
    exports.createDuration = createDuration;
    exports.createElement = createElement;
    exports.createEmptyEventStore = createEmptyEventStore;
    exports.createEventInstance = createEventInstance;
    exports.createFormatter = createFormatter;
    exports.createPlugin = createPlugin;
    exports.cssToStr = cssToStr;
    exports.debounce = debounce;
    exports.diffDates = diffDates;
    exports.diffDayAndTime = diffDayAndTime;
    exports.diffDays = diffDays;
    exports.diffPoints = diffPoints;
    exports.diffWeeks = diffWeeks;
    exports.diffWholeDays = diffWholeDays;
    exports.diffWholeWeeks = diffWholeWeeks;
    exports.disableCursor = disableCursor;
    exports.distributeHeight = distributeHeight;
    exports.elementClosest = elementClosest;
    exports.elementMatches = elementMatches;
    exports.enableCursor = enableCursor;
    exports.eventTupleToStore = eventTupleToStore;
    exports.filterEventStoreDefs = filterEventStoreDefs;
    exports.filterHash = filterHash;
    exports.findChildren = findChildren;
    exports.findElements = findElements;
    exports.flexibleCompare = flexibleCompare;
    exports.forceClassName = forceClassName;
    exports.formatDate = formatDate;
    exports.formatIsoTimeString = formatIsoTimeString;
    exports.formatRange = formatRange;
    exports.freezeRaw = freezeRaw;
    exports.getAllDayHtml = getAllDayHtml;
    exports.getClippingParents = getClippingParents;
    exports.getDayClasses = getDayClasses;
    exports.getElSeg = getElSeg;
    exports.getRectCenter = getRectCenter;
    exports.getRelevantEvents = getRelevantEvents;
    exports.globalDefaults = globalDefaults;
    exports.greatestDurationDenominator = greatestDurationDenominator;
    exports.hasBgRendering = hasBgRendering;
    exports.htmlEscape = htmlEscape;
    exports.htmlToElement = htmlToElement;
    exports.insertAfterElement = insertAfterElement;
    exports.interactionSettingsStore = interactionSettingsStore;
    exports.interactionSettingsToStore = interactionSettingsToStore;
    exports.intersectRanges = intersectRanges;
    exports.intersectRects = intersectRects;
    exports.isArraysEqual = isArraysEqual;
    exports.isDateSpansEqual = isDateSpansEqual;
    exports.isInt = isInt;
    exports.isInteractionValid = isInteractionValid;
    exports.isMultiDayRange = isMultiDayRange;
    exports.isObjectsSimilar = isObjectsSimilar;
    exports.isPropsValid = isPropsValid;
    exports.isSingleDay = isSingleDay;
    exports.isValidDate = isValidDate;
    exports.isValuesSimilar = isValuesSimilar;
    exports.listenBySelector = listenBySelector;
    exports.mapHash = mapHash;
    exports.matchCellWidths = matchCellWidths;
    exports.memoize = memoize;
    exports.memoizeOutput = memoizeOutput;
    exports.memoizeRendering = memoizeRendering;
    exports.mergeEventStores = mergeEventStores;
    exports.multiplyDuration = multiplyDuration;
    exports.padStart = padStart;
    exports.parseBusinessHours = parseBusinessHours;
    exports.parseDragMeta = parseDragMeta;
    exports.parseEventDef = parseEventDef;
    exports.parseFieldSpecs = parseFieldSpecs;
    exports.parseMarker = parse;
    exports.pointInsideRect = pointInsideRect;
    exports.prependToElement = prependToElement;
    exports.preventContextMenu = preventContextMenu;
    exports.preventDefault = preventDefault;
    exports.preventSelection = preventSelection;
    exports.processScopedUiProps = processScopedUiProps;
    exports.rangeContainsMarker = rangeContainsMarker;
    exports.rangeContainsRange = rangeContainsRange;
    exports.rangesEqual = rangesEqual;
    exports.rangesIntersect = rangesIntersect;
    exports.refineProps = refineProps;
    exports.removeElement = removeElement;
    exports.removeExact = removeExact;
    exports.renderDateCell = renderDateCell;
    exports.requestJson = requestJson;
    exports.sliceEventStore = sliceEventStore;
    exports.startOfDay = startOfDay;
    exports.subtractInnerElHeight = subtractInnerElHeight;
    exports.translateRect = translateRect;
    exports.uncompensateScroll = uncompensateScroll;
    exports.undistributeHeight = undistributeHeight;
    exports.unpromisify = unpromisify;
    exports.version = version;
    exports.whenTransitionDone = whenTransitionDone;
    exports.wholeDivideDurations = wholeDivideDurations;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

/*!
FullCalendar Day Grid Plugin v4.1.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fullcalendar/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@fullcalendar/core'], factory) :
    (global = global || self, factory(global.FullCalendarDayGrid = {}, global.FullCalendar));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var DayGridDateProfileGenerator = /** @class */ (function (_super) {
        __extends(DayGridDateProfileGenerator, _super);
        function DayGridDateProfileGenerator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // Computes the date range that will be rendered.
        DayGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
            var dateEnv = this.dateEnv;
            var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
            var start = renderRange.start;
            var end = renderRange.end;
            var endOfWeek;
            // year and month views should be aligned with weeks. this is already done for week
            if (/^(year|month)$/.test(currentRangeUnit)) {
                start = dateEnv.startOfWeek(start);
                // make end-of-week if not already
                endOfWeek = dateEnv.startOfWeek(end);
                if (endOfWeek.valueOf() !== end.valueOf()) {
                    end = core.addWeeks(endOfWeek, 1);
                }
            }
            // ensure 6 weeks
            if (this.options.monthMode &&
                this.options.fixedWeekCount) {
                var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
                core.diffWeeks(start, end));
                end = core.addWeeks(end, 6 - rowCnt);
            }
            return { start: start, end: end };
        };
        return DayGridDateProfileGenerator;
    }(core.DateProfileGenerator));

    /* A rectangular panel that is absolutely positioned over other content
    ------------------------------------------------------------------------------------------------------------------------
    Options:
      - className (string)
      - content (HTML string, element, or element array)
      - parentEl
      - top
      - left
      - right (the x coord of where the right edge should be. not a "CSS" right)
      - autoHide (boolean)
      - show (callback)
      - hide (callback)
    */
    var Popover = /** @class */ (function () {
        function Popover(options) {
            var _this = this;
            this.isHidden = true;
            this.margin = 10; // the space required between the popover and the edges of the scroll container
            // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
            this.documentMousedown = function (ev) {
                // only hide the popover if the click happened outside the popover
                if (_this.el && !_this.el.contains(ev.target)) {
                    _this.hide();
                }
            };
            this.options = options;
        }
        // Shows the popover on the specified position. Renders it if not already
        Popover.prototype.show = function () {
            if (this.isHidden) {
                if (!this.el) {
                    this.render();
                }
                this.el.style.display = '';
                this.position();
                this.isHidden = false;
                this.trigger('show');
            }
        };
        // Hides the popover, through CSS, but does not remove it from the DOM
        Popover.prototype.hide = function () {
            if (!this.isHidden) {
                this.el.style.display = 'none';
                this.isHidden = true;
                this.trigger('hide');
            }
        };
        // Creates `this.el` and renders content inside of it
        Popover.prototype.render = function () {
            var _this = this;
            var options = this.options;
            var el = this.el = core.createElement('div', {
                className: 'fc-popover ' + (options.className || ''),
                style: {
                    top: '0',
                    left: '0'
                }
            });
            if (typeof options.content === 'function') {
                options.content(el);
            }
            options.parentEl.appendChild(el);
            // when a click happens on anything inside with a 'fc-close' className, hide the popover
            core.listenBySelector(el, 'click', '.fc-close', function (ev) {
                _this.hide();
            });
            if (options.autoHide) {
                document.addEventListener('mousedown', this.documentMousedown);
            }
        };
        // Hides and unregisters any handlers
        Popover.prototype.destroy = function () {
            this.hide();
            if (this.el) {
                core.removeElement(this.el);
                this.el = null;
            }
            document.removeEventListener('mousedown', this.documentMousedown);
        };
        // Positions the popover optimally, using the top/left/right options
        Popover.prototype.position = function () {
            var options = this.options;
            var el = this.el;
            var elDims = el.getBoundingClientRect(); // only used for width,height
            var origin = core.computeRect(el.offsetParent);
            var clippingRect = core.computeClippingRect(options.parentEl);
            var top; // the "position" (not "offset") values for the popover
            var left; //
            // compute top and left
            top = options.top || 0;
            if (options.left !== undefined) {
                left = options.left;
            }
            else if (options.right !== undefined) {
                left = options.right - elDims.width; // derive the left value from the right value
            }
            else {
                left = 0;
            }
            // constrain to the view port. if constrained by two edges, give precedence to top/left
            top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
            top = Math.max(top, clippingRect.top + this.margin);
            left = Math.min(left, clippingRect.right - elDims.width - this.margin);
            left = Math.max(left, clippingRect.left + this.margin);
            core.applyStyle(el, {
                top: top - origin.top,
                left: left - origin.left
            });
        };
        // Triggers a callback. Calls a function in the option hash of the same name.
        // Arguments beyond the first `name` are forwarded on.
        // TODO: better code reuse for this. Repeat code
        // can kill this???
        Popover.prototype.trigger = function (name) {
            if (this.options[name]) {
                this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        };
        return Popover;
    }());

    /* Event-rendering methods for the DayGrid class
    ----------------------------------------------------------------------------------------------------------------------*/
    // "Simple" is bad a name. has nothing to do with SimpleDayGrid
    var SimpleDayGridEventRenderer = /** @class */ (function (_super) {
        __extends(SimpleDayGridEventRenderer, _super);
        function SimpleDayGridEventRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // Builds the HTML to be used for the default element for an individual segment
        SimpleDayGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
            var options = this.context.options;
            var eventRange = seg.eventRange;
            var eventDef = eventRange.def;
            var eventUi = eventRange.ui;
            var allDay = eventDef.allDay;
            var isDraggable = eventUi.startEditable;
            var isResizableFromStart = allDay && seg.isStart && eventUi.durationEditable && options.eventResizableFromStart;
            var isResizableFromEnd = allDay && seg.isEnd && eventUi.durationEditable;
            var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
            var skinCss = core.cssToStr(this.getSkinCss(eventUi));
            var timeHtml = '';
            var timeText;
            var titleHtml;
            classes.unshift('fc-day-grid-event', 'fc-h-event');
            // Only display a timed events time if it is the starting segment
            if (seg.isStart) {
                timeText = this.getTimeText(eventRange);
                if (timeText) {
                    timeHtml = '<span class="fc-time">' + core.htmlEscape(timeText) + '</span>';
                }
            }
            titleHtml =
                '<span class="fc-title">' +
                    (core.htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                    '</span>';
            return '<a class="' + classes.join(' ') + '"' +
                (eventDef.url ?
                    ' href="' + core.htmlEscape(eventDef.url) + '"' :
                    '') +
                (skinCss ?
                    ' style="' + skinCss + '"' :
                    '') +
                '>' +
                '<div class="fc-content">' +
                (options.dir === 'rtl' ?
                    titleHtml + ' ' + timeHtml : // put a natural space in between
                    timeHtml + ' ' + titleHtml //
                ) +
                '</div>' +
                (isResizableFromStart ?
                    '<div class="fc-resizer fc-start-resizer"></div>' :
                    '') +
                (isResizableFromEnd ?
                    '<div class="fc-resizer fc-end-resizer"></div>' :
                    '') +
                '</a>';
        };
        // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
        SimpleDayGridEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'narrow'
            };
        };
        SimpleDayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
            return false; // TODO: somehow consider the originating DayGrid's column count
        };
        return SimpleDayGridEventRenderer;
    }(core.FgEventRenderer));

    /* Event-rendering methods for the DayGrid class
    ----------------------------------------------------------------------------------------------------------------------*/
    var DayGridEventRenderer = /** @class */ (function (_super) {
        __extends(DayGridEventRenderer, _super);
        function DayGridEventRenderer(dayGrid) {
            var _this = _super.call(this, dayGrid.context) || this;
            _this.dayGrid = dayGrid;
            return _this;
        }
        // Renders the given foreground event segments onto the grid
        DayGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
            var rowStructs = this.rowStructs = this.renderSegRows(segs);
            // append to each row's content skeleton
            this.dayGrid.rowEls.forEach(function (rowNode, i) {
                rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
            });
            // removes the "more.." events popover
            if (!mirrorInfo) {
                this.dayGrid.removeSegPopover();
            }
        };
        // Unrenders all currently rendered foreground event segments
        DayGridEventRenderer.prototype.detachSegs = function () {
            var rowStructs = this.rowStructs || [];
            var rowStruct;
            while ((rowStruct = rowStructs.pop())) {
                core.removeElement(rowStruct.tbodyEl);
            }
            this.rowStructs = null;
        };
        // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
        // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
        // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
        DayGridEventRenderer.prototype.renderSegRows = function (segs) {
            var rowStructs = [];
            var segRows;
            var row;
            segRows = this.groupSegRows(segs); // group into nested arrays
            // iterate each row of segment groupings
            for (row = 0; row < segRows.length; row++) {
                rowStructs.push(this.renderSegRow(row, segRows[row]));
            }
            return rowStructs;
        };
        // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
        // the segments. Returns object with a bunch of internal data about how the render was calculated.
        // NOTE: modifies rowSegs
        DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
            var dayGrid = this.dayGrid;
            var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
            var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
            var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
            var tbody = document.createElement('tbody');
            var segMatrix = []; // lookup for which segments are rendered into which level+col cells
            var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
            var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
            var i;
            var levelSegs;
            var col;
            var tr;
            var j;
            var seg;
            var td;
            // populates empty cells from the current column (`col`) to `endCol`
            function emptyCellsUntil(endCol) {
                while (col < endCol) {
                    // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
                    td = (loneCellMatrix[i - 1] || [])[col];
                    if (td) {
                        td.rowSpan = (td.rowSpan || 1) + 1;
                    }
                    else {
                        td = document.createElement('td');
                        tr.appendChild(td);
                    }
                    cellMatrix[i][col] = td;
                    loneCellMatrix[i][col] = td;
                    col++;
                }
            }
            for (i = 0; i < levelCnt; i++) { // iterate through all levels
                levelSegs = segLevels[i];
                col = 0;
                tr = document.createElement('tr');
                segMatrix.push([]);
                cellMatrix.push([]);
                loneCellMatrix.push([]);
                // levelCnt might be 1 even though there are no actual levels. protect against this.
                // this single empty row is useful for styling.
                if (levelSegs) {
                    for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
                        seg = levelSegs[j];
                        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                        emptyCellsUntil(leftCol);
                        // create a container that occupies or more columns. append the event element.
                        td = core.createElement('td', { className: 'fc-event-container' }, seg.el);
                        if (leftCol !== rightCol) {
                            td.colSpan = rightCol - leftCol + 1;
                        }
                        else { // a single-column segment
                            loneCellMatrix[i][col] = td;
                        }
                        while (col <= rightCol) {
                            cellMatrix[i][col] = td;
                            segMatrix[i][col] = seg;
                            col++;
                        }
                        tr.appendChild(td);
                    }
                }
                emptyCellsUntil(colCnt); // finish off the row
                var introHtml = dayGrid.renderProps.renderIntroHtml();
                if (introHtml) {
                    if (dayGrid.isRtl) {
                        core.appendToElement(tr, introHtml);
                    }
                    else {
                        core.prependToElement(tr, introHtml);
                    }
                }
                tbody.appendChild(tr);
            }
            return {
                row: row,
                tbodyEl: tbody,
                cellMatrix: cellMatrix,
                segMatrix: segMatrix,
                segLevels: segLevels,
                segs: rowSegs
            };
        };
        // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
        // NOTE: modifies segs
        DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
            var _a = this.dayGrid, isRtl = _a.isRtl, colCnt = _a.colCnt;
            var levels = [];
            var i;
            var seg;
            var j;
            // Give preference to elements with certain criteria, so they have
            // a chance to be closer to the top.
            segs = this.sortEventSegs(segs);
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
                for (j = 0; j < levels.length; j++) {
                    if (!isDaySegCollision(seg, levels[j])) {
                        break;
                    }
                }
                // `j` now holds the desired subrow index
                seg.level = j;
                seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol; // for sorting only
                seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol // for sorting only
                ;
                (levels[j] || (levels[j] = [])).push(seg);
            }
            // order segments left-to-right. very important if calendar is RTL
            for (j = 0; j < levels.length; j++) {
                levels[j].sort(compareDaySegCols);
            }
            return levels;
        };
        // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
        DayGridEventRenderer.prototype.groupSegRows = function (segs) {
            var segRows = [];
            var i;
            for (i = 0; i < this.dayGrid.rowCnt; i++) {
                segRows.push([]);
            }
            for (i = 0; i < segs.length; i++) {
                segRows[segs[i].row].push(segs[i]);
            }
            return segRows;
        };
        // Computes a default `displayEventEnd` value if one is not expliclty defined
        DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
            return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
        };
        return DayGridEventRenderer;
    }(SimpleDayGridEventRenderer));
    // Computes whether two segments' columns collide. They are assumed to be in the same row.
    function isDaySegCollision(seg, otherSegs) {
        var i;
        var otherSeg;
        for (i = 0; i < otherSegs.length; i++) {
            otherSeg = otherSegs[i];
            if (otherSeg.firstCol <= seg.lastCol &&
                otherSeg.lastCol >= seg.firstCol) {
                return true;
            }
        }
        return false;
    }
    // A cmp function for determining the leftmost event
    function compareDaySegCols(a, b) {
        return a.leftCol - b.leftCol;
    }

    var DayGridMirrorRenderer = /** @class */ (function (_super) {
        __extends(DayGridMirrorRenderer, _super);
        function DayGridMirrorRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
            var sourceSeg = mirrorInfo.sourceSeg;
            var rowStructs = this.rowStructs = this.renderSegRows(segs);
            // inject each new event skeleton into each associated row
            this.dayGrid.rowEls.forEach(function (rowNode, row) {
                var skeletonEl = core.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>'); // will be absolutely positioned
                var skeletonTopEl;
                var skeletonTop;
                // If there is an original segment, match the top position. Otherwise, put it at the row's top level
                if (sourceSeg && sourceSeg.row === row) {
                    skeletonTopEl = sourceSeg.el;
                }
                else {
                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
                    if (!skeletonTopEl) { // when no events
                        skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
                    }
                }
                skeletonTop = skeletonTopEl.getBoundingClientRect().top -
                    rowNode.getBoundingClientRect().top; // the offsetParent origin
                skeletonEl.style.top = skeletonTop + 'px';
                skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
                rowNode.appendChild(skeletonEl);
            });
        };
        return DayGridMirrorRenderer;
    }(DayGridEventRenderer));

    var DayGridFillRenderer = /** @class */ (function (_super) {
        __extends(DayGridFillRenderer, _super);
        function DayGridFillRenderer(dayGrid) {
            var _this = _super.call(this, dayGrid.context) || this;
            _this.fillSegTag = 'td'; // override the default tag name
            _this.dayGrid = dayGrid;
            return _this;
        }
        DayGridFillRenderer.prototype.renderSegs = function (type, segs) {
            // don't render timed background events
            if (type === 'bgEvent') {
                segs = segs.filter(function (seg) {
                    return seg.eventRange.def.allDay;
                });
            }
            _super.prototype.renderSegs.call(this, type, segs);
        };
        DayGridFillRenderer.prototype.attachSegs = function (type, segs) {
            var els = [];
            var i;
            var seg;
            var skeletonEl;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                skeletonEl = this.renderFillRow(type, seg);
                this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
                els.push(skeletonEl);
            }
            return els;
        };
        // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
        DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
            var dayGrid = this.dayGrid;
            var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
            var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
            var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
            var startCol = leftCol;
            var endCol = rightCol + 1;
            var className;
            var skeletonEl;
            var trEl;
            if (type === 'businessHours') {
                className = 'bgevent';
            }
            else {
                className = type.toLowerCase();
            }
            skeletonEl = core.htmlToElement('<div class="fc-' + className + '-skeleton">' +
                '<table><tr></tr></table>' +
                '</div>');
            trEl = skeletonEl.getElementsByTagName('tr')[0];
            if (startCol > 0) {
                core.appendToElement(trEl, 
                // will create (startCol + 1) td's
                new Array(startCol + 1).join('<td></td>'));
            }
            seg.el.colSpan = endCol - startCol;
            trEl.appendChild(seg.el);
            if (endCol < colCnt) {
                core.appendToElement(trEl, 
                // will create (colCnt - endCol) td's
                new Array(colCnt - endCol + 1).join('<td></td>'));
            }
            var introHtml = dayGrid.renderProps.renderIntroHtml();
            if (introHtml) {
                if (dayGrid.isRtl) {
                    core.appendToElement(trEl, introHtml);
                }
                else {
                    core.prependToElement(trEl, introHtml);
                }
            }
            return skeletonEl;
        };
        return DayGridFillRenderer;
    }(core.FillRenderer));

    var DayTile = /** @class */ (function (_super) {
        __extends(DayTile, _super);
        function DayTile(context, el) {
            var _this = _super.call(this, context, el) || this;
            var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
            var renderFrame = _this.renderFrame = core.memoizeRendering(_this._renderFrame);
            _this.renderFgEvents = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
            _this.renderEventSelection = core.memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
            _this.renderEventDrag = core.memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
            _this.renderEventResize = core.memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
            context.calendar.registerInteractiveComponent(_this, {
                el: _this.el,
                useEventCenter: false
            });
            return _this;
        }
        DayTile.prototype.render = function (props) {
            this.renderFrame(props.date);
            this.renderFgEvents(props.fgSegs);
            this.renderEventSelection(props.eventSelection);
            this.renderEventDrag(props.eventDragInstances);
            this.renderEventResize(props.eventResizeInstances);
        };
        DayTile.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderFrame.unrender(); // should unrender everything else
            this.calendar.unregisterInteractiveComponent(this);
        };
        DayTile.prototype._renderFrame = function (date) {
            var _a = this, theme = _a.theme, dateEnv = _a.dateEnv;
            var title = dateEnv.format(date, core.createFormatter(this.opt('dayPopoverFormat')) // TODO: cache
            );
            this.el.innerHTML =
                '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
                    '<span class="fc-title">' +
                    core.htmlEscape(title) +
                    '</span>' +
                    '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
                    '</div>' +
                    '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
                    '<div class="fc-event-container"></div>' +
                    '</div>';
            this.segContainerEl = this.el.querySelector('.fc-event-container');
        };
        DayTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
            var date = this.props.date; // HACK
            if (positionLeft < elWidth && positionTop < elHeight) {
                return {
                    component: this,
                    dateSpan: {
                        allDay: true,
                        range: { start: date, end: core.addDays(date, 1) }
                    },
                    dayEl: this.el,
                    rect: {
                        left: 0,
                        top: 0,
                        right: elWidth,
                        bottom: elHeight
                    },
                    layer: 1
                };
            }
        };
        return DayTile;
    }(core.DateComponent));
    var DayTileEventRenderer = /** @class */ (function (_super) {
        __extends(DayTileEventRenderer, _super);
        function DayTileEventRenderer(dayTile) {
            var _this = _super.call(this, dayTile.context) || this;
            _this.dayTile = dayTile;
            return _this;
        }
        DayTileEventRenderer.prototype.attachSegs = function (segs) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                this.dayTile.segContainerEl.appendChild(seg.el);
            }
        };
        DayTileEventRenderer.prototype.detachSegs = function (segs) {
            for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                var seg = segs_2[_i];
                core.removeElement(seg.el);
            }
        };
        return DayTileEventRenderer;
    }(SimpleDayGridEventRenderer));

    var DayBgRow = /** @class */ (function () {
        function DayBgRow(context) {
            this.context = context;
        }
        DayBgRow.prototype.renderHtml = function (props) {
            var parts = [];
            if (props.renderIntroHtml) {
                parts.push(props.renderIntroHtml());
            }
            for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
            }
            if (!props.cells.length) {
                parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
            }
            if (this.context.options.dir === 'rtl') {
                parts.reverse();
            }
            return '<tr>' + parts.join('') + '</tr>';
        };
        return DayBgRow;
    }());
    function renderCellHtml(date, dateProfile, context, otherAttrs) {
        var dateEnv = context.dateEnv, theme = context.theme;
        var isDateValid = core.rangeContainsMarker(dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
        var classes = core.getDayClasses(date, dateProfile, context);
        classes.unshift('fc-day', theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    }

    var DAY_NUM_FORMAT = core.createFormatter({ day: 'numeric' });
    var WEEK_NUM_FORMAT = core.createFormatter({ week: 'numeric' });
    var DayGrid = /** @class */ (function (_super) {
        __extends(DayGrid, _super);
        function DayGrid(context, el, renderProps) {
            var _this = _super.call(this, context, el) || this;
            _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
            _this.isCellSizesDirty = false;
            var eventRenderer = _this.eventRenderer = new DayGridEventRenderer(_this);
            var fillRenderer = _this.fillRenderer = new DayGridFillRenderer(_this);
            _this.mirrorRenderer = new DayGridMirrorRenderer(_this);
            var renderCells = _this.renderCells = core.memoizeRendering(_this._renderCells, _this._unrenderCells);
            _this.renderBusinessHours = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
            _this.renderDateSelection = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
            _this.renderBgEvents = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
            _this.renderFgEvents = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
            _this.renderEventSelection = core.memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
            _this.renderEventDrag = core.memoizeRendering(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
            _this.renderEventResize = core.memoizeRendering(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
            _this.renderProps = renderProps;
            return _this;
        }
        DayGrid.prototype.render = function (props) {
            var cells = props.cells;
            this.rowCnt = cells.length;
            this.colCnt = cells[0].length;
            this.renderCells(cells, props.isRigid);
            this.renderBusinessHours(props.businessHourSegs);
            this.renderDateSelection(props.dateSelectionSegs);
            this.renderBgEvents(props.bgEventSegs);
            this.renderFgEvents(props.fgEventSegs);
            this.renderEventSelection(props.eventSelection);
            this.renderEventDrag(props.eventDrag);
            this.renderEventResize(props.eventResize);
            if (this.segPopoverTile) {
                this.updateSegPopoverTile();
            }
        };
        DayGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderCells.unrender(); // will unrender everything else
        };
        DayGrid.prototype.getCellRange = function (row, col) {
            var start = this.props.cells[row][col].date;
            var end = core.addDays(start, 1);
            return { start: start, end: end };
        };
        DayGrid.prototype.updateSegPopoverTile = function (date, segs) {
            var ownProps = this.props;
            this.segPopoverTile.receiveProps({
                date: date || this.segPopoverTile.props.date,
                fgSegs: segs || this.segPopoverTile.props.fgSegs,
                eventSelection: ownProps.eventSelection,
                eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
                eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
            });
        };
        /* Date Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype._renderCells = function (cells, isRigid) {
            var _a = this, view = _a.view, dateEnv = _a.dateEnv;
            var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
            var html = '';
            var row;
            var col;
            for (row = 0; row < rowCnt; row++) {
                html += this.renderDayRowHtml(row, isRigid);
            }
            this.el.innerHTML = html;
            this.rowEls = core.findElements(this.el, '.fc-row');
            this.cellEls = core.findElements(this.el, '.fc-day, .fc-disabled-day');
            if (this.isRtl) {
                this.cellEls.reverse();
            }
            this.rowPositions = new core.PositionCache(this.el, this.rowEls, false, true // vertical
            );
            this.colPositions = new core.PositionCache(this.el, this.cellEls.slice(0, colCnt), // only the first row
            true, false // horizontal
            );
            // trigger dayRender with each cell's element
            for (row = 0; row < rowCnt; row++) {
                for (col = 0; col < colCnt; col++) {
                    this.publiclyTrigger('dayRender', [
                        {
                            date: dateEnv.toDate(cells[row][col].date),
                            el: this.getCellEl(row, col),
                            view: view
                        }
                    ]);
                }
            }
            this.isCellSizesDirty = true;
        };
        DayGrid.prototype._unrenderCells = function () {
            this.removeSegPopover();
        };
        // Generates the HTML for a single row, which is a div that wraps a table.
        // `row` is the row number.
        DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
            var theme = this.theme;
            var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
            if (isRigid) {
                classes.push('fc-rigid');
            }
            var bgRow = new DayBgRow(this.context);
            return '' +
                '<div class="' + classes.join(' ') + '">' +
                '<div class="fc-bg">' +
                '<table class="' + theme.getClass('tableGrid') + '">' +
                bgRow.renderHtml({
                    cells: this.props.cells[row],
                    dateProfile: this.props.dateProfile,
                    renderIntroHtml: this.renderProps.renderBgIntroHtml
                }) +
                '</table>' +
                '</div>' +
                '<div class="fc-content-skeleton">' +
                '<table>' +
                (this.getIsNumbersVisible() ?
                    '<thead>' +
                        this.renderNumberTrHtml(row) +
                        '</thead>' :
                    '') +
                '</table>' +
                '</div>' +
                '</div>';
        };
        DayGrid.prototype.getIsNumbersVisible = function () {
            return this.getIsDayNumbersVisible() ||
                this.renderProps.cellWeekNumbersVisible ||
                this.renderProps.colWeekNumbersVisible;
        };
        DayGrid.prototype.getIsDayNumbersVisible = function () {
            return this.rowCnt > 1;
        };
        /* Grid Number Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.renderNumberTrHtml = function (row) {
            var intro = this.renderProps.renderNumberIntroHtml(row, this);
            return '' +
                '<tr>' +
                (this.isRtl ? '' : intro) +
                this.renderNumberCellsHtml(row) +
                (this.isRtl ? intro : '') +
                '</tr>';
        };
        DayGrid.prototype.renderNumberCellsHtml = function (row) {
            var htmls = [];
            var col;
            var date;
            for (col = 0; col < this.colCnt; col++) {
                date = this.props.cells[row][col].date;
                htmls.push(this.renderNumberCellHtml(date));
            }
            if (this.isRtl) {
                htmls.reverse();
            }
            return htmls.join('');
        };
        // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
        // The number row will only exist if either day numbers or week numbers are turned on.
        DayGrid.prototype.renderNumberCellHtml = function (date) {
            var _a = this, view = _a.view, dateEnv = _a.dateEnv;
            var html = '';
            var isDateValid = core.rangeContainsMarker(this.props.dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
            var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
            var classes;
            var weekCalcFirstDow;
            if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
                // no numbers in day cell (week number must be along the side)
                return '<td></td>'; //  will create an empty space above events :(
            }
            classes = core.getDayClasses(date, this.props.dateProfile, this.context);
            classes.unshift('fc-day-top');
            if (this.renderProps.cellWeekNumbersVisible) {
                weekCalcFirstDow = dateEnv.weekDow;
            }
            html += '<td class="' + classes.join(' ') + '"' +
                (isDateValid ?
                    ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                    '') +
                '>';
            if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
                html += core.buildGotoAnchorHtml(view, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT) // inner HTML
                );
            }
            if (isDayNumberVisible) {
                html += core.buildGotoAnchorHtml(view, date, { 'class': 'fc-day-number' }, dateEnv.format(date, DAY_NUM_FORMAT) // inner HTML
                );
            }
            html += '</td>';
            return html;
        };
        /* Sizing
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.updateSize = function (isResize) {
            var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
            if (isResize ||
                this.isCellSizesDirty ||
                this.view.calendar.isEventsUpdated // hack
            ) {
                this.buildPositionCaches();
                this.isCellSizesDirty = false;
            }
            fillRenderer.computeSizes(isResize);
            eventRenderer.computeSizes(isResize);
            mirrorRenderer.computeSizes(isResize);
            fillRenderer.assignSizes(isResize);
            eventRenderer.assignSizes(isResize);
            mirrorRenderer.assignSizes(isResize);
        };
        DayGrid.prototype.buildPositionCaches = function () {
            this.buildColPositions();
            this.buildRowPositions();
        };
        DayGrid.prototype.buildColPositions = function () {
            this.colPositions.build();
        };
        DayGrid.prototype.buildRowPositions = function () {
            this.rowPositions.build();
            this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
        };
        /* Hit System
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.positionToHit = function (leftPosition, topPosition) {
            var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
            var col = colPositions.leftToIndex(leftPosition);
            var row = rowPositions.topToIndex(topPosition);
            if (row != null && col != null) {
                return {
                    row: row,
                    col: col,
                    dateSpan: {
                        range: this.getCellRange(row, col),
                        allDay: true
                    },
                    dayEl: this.getCellEl(row, col),
                    relativeRect: {
                        left: colPositions.lefts[col],
                        right: colPositions.rights[col],
                        top: rowPositions.tops[row],
                        bottom: rowPositions.bottoms[row]
                    }
                };
            }
        };
        /* Cell System
        ------------------------------------------------------------------------------------------------------------------*/
        // FYI: the first column is the leftmost column, regardless of date
        DayGrid.prototype.getCellEl = function (row, col) {
            return this.cellEls[row * this.colCnt + col];
        };
        /* Event Drag Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype._renderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                this.fillRenderer.renderSegs('highlight', state.segs);
            }
        };
        DayGrid.prototype._unrenderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.fillRenderer.unrender('highlight');
            }
        };
        /* Event Resize Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype._renderEventResize = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                this.fillRenderer.renderSegs('highlight', state.segs);
                this.mirrorRenderer.renderSegs(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
            }
        };
        DayGrid.prototype._unrenderEventResize = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.fillRenderer.unrender('highlight');
                this.mirrorRenderer.unrender(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
            }
        };
        /* More+ Link Popover
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.removeSegPopover = function () {
            if (this.segPopover) {
                this.segPopover.hide(); // in handler, will call segPopover's removeElement
            }
        };
        // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
        // `levelLimit` can be false (don't limit), a number, or true (should be computed).
        DayGrid.prototype.limitRows = function (levelLimit) {
            var rowStructs = this.eventRenderer.rowStructs || [];
            var row; // row #
            var rowLevelLimit;
            for (row = 0; row < rowStructs.length; row++) {
                this.unlimitRow(row);
                if (!levelLimit) {
                    rowLevelLimit = false;
                }
                else if (typeof levelLimit === 'number') {
                    rowLevelLimit = levelLimit;
                }
                else {
                    rowLevelLimit = this.computeRowLevelLimit(row);
                }
                if (rowLevelLimit !== false) {
                    this.limitRow(row, rowLevelLimit);
                }
            }
        };
        // Computes the number of levels a row will accomodate without going outside its bounds.
        // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
        // `row` is the row number.
        DayGrid.prototype.computeRowLevelLimit = function (row) {
            var rowEl = this.rowEls[row]; // the containing "fake" row div
            var rowBottom = rowEl.getBoundingClientRect().bottom; // relative to viewport!
            var trEls = core.findChildren(this.eventRenderer.rowStructs[row].tbodyEl);
            var i;
            var trEl;
            // Reveal one level <tr> at a time and stop when we find one out of bounds
            for (i = 0; i < trEls.length; i++) {
                trEl = trEls[i];
                trEl.classList.remove('fc-limited'); // reset to original state (reveal)
                if (trEl.getBoundingClientRect().bottom > rowBottom) {
                    return i;
                }
            }
            return false; // should not limit at all
        };
        // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
        // `row` is the row number.
        // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
        DayGrid.prototype.limitRow = function (row, levelLimit) {
            var _this = this;
            var _a = this, colCnt = _a.colCnt, isRtl = _a.isRtl;
            var rowStruct = this.eventRenderer.rowStructs[row];
            var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
            var col = 0; // col #, left-to-right (not chronologically)
            var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
            var cellMatrix; // a matrix (by level, then column) of all <td> elements in the row
            var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
            var i;
            var seg;
            var segsBelow; // array of segment objects below `seg` in the current `col`
            var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
            var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
            var td;
            var rowSpan;
            var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
            var j;
            var moreTd;
            var moreWrap;
            var moreLink;
            // Iterates through empty level cells and places "more" links inside if need be
            var emptyCellsUntil = function (endCol) {
                while (col < endCol) {
                    segsBelow = _this.getCellSegs(row, col, levelLimit);
                    if (segsBelow.length) {
                        td = cellMatrix[levelLimit - 1][col];
                        moreLink = _this.renderMoreLink(row, col, segsBelow);
                        moreWrap = core.createElement('div', null, moreLink);
                        td.appendChild(moreWrap);
                        moreNodes.push(moreWrap);
                    }
                    col++;
                }
            };
            if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
                levelSegs = rowStruct.segLevels[levelLimit - 1];
                cellMatrix = rowStruct.cellMatrix;
                limitedNodes = core.findChildren(rowStruct.tbodyEl).slice(levelLimit); // get level <tr> elements past the limit
                limitedNodes.forEach(function (node) {
                    node.classList.add('fc-limited'); // hide elements and get a simple DOM-nodes array
                });
                // iterate though segments in the last allowable level
                for (i = 0; i < levelSegs.length; i++) {
                    seg = levelSegs[i];
                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                    emptyCellsUntil(leftCol); // process empty cells before the segment
                    // determine *all* segments below `seg` that occupy the same columns
                    colSegsBelow = [];
                    totalSegsBelow = 0;
                    while (col <= rightCol) {
                        segsBelow = this.getCellSegs(row, col, levelLimit);
                        colSegsBelow.push(segsBelow);
                        totalSegsBelow += segsBelow.length;
                        col++;
                    }
                    if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
                        td = cellMatrix[levelLimit - 1][leftCol]; // the segment's parent cell
                        rowSpan = td.rowSpan || 1;
                        segMoreNodes = [];
                        // make a replacement <td> for each column the segment occupies. will be one for each colspan
                        for (j = 0; j < colSegsBelow.length; j++) {
                            moreTd = core.createElement('td', { className: 'fc-more-cell', rowSpan: rowSpan });
                            segsBelow = colSegsBelow[j];
                            moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                            );
                            moreWrap = core.createElement('div', null, moreLink);
                            moreTd.appendChild(moreWrap);
                            segMoreNodes.push(moreTd);
                            moreNodes.push(moreTd);
                        }
                        td.classList.add('fc-limited');
                        core.insertAfterElement(td, segMoreNodes);
                        limitedNodes.push(td);
                    }
                }
                emptyCellsUntil(this.colCnt); // finish off the level
                rowStruct.moreEls = moreNodes; // for easy undoing later
                rowStruct.limitedEls = limitedNodes; // for easy undoing later
            }
        };
        // Reveals all levels and removes all "more"-related elements for a grid's row.
        // `row` is a row number.
        DayGrid.prototype.unlimitRow = function (row) {
            var rowStruct = this.eventRenderer.rowStructs[row];
            if (rowStruct.moreEls) {
                rowStruct.moreEls.forEach(core.removeElement);
                rowStruct.moreEls = null;
            }
            if (rowStruct.limitedEls) {
                rowStruct.limitedEls.forEach(function (limitedEl) {
                    limitedEl.classList.remove('fc-limited');
                });
                rowStruct.limitedEls = null;
            }
        };
        // Renders an <a> element that represents hidden event element for a cell.
        // Responsible for attaching click handler as well.
        DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
            var _this = this;
            var _a = this, view = _a.view, dateEnv = _a.dateEnv;
            var a = core.createElement('a', { className: 'fc-more' });
            a.innerText = this.getMoreLinkText(hiddenSegs.length);
            a.addEventListener('click', function (ev) {
                var clickOption = _this.opt('eventLimitClick');
                var _col = _this.isRtl ? _this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
                var date = _this.props.cells[row][_col].date;
                var moreEl = ev.currentTarget;
                var dayEl = _this.getCellEl(row, col);
                var allSegs = _this.getCellSegs(row, col);
                // rescope the segments to be within the cell's date
                var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
                var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
                if (typeof clickOption === 'function') {
                    // the returned value can be an atomic option
                    clickOption = _this.publiclyTrigger('eventLimitClick', [
                        {
                            date: dateEnv.toDate(date),
                            allDay: true,
                            dayEl: dayEl,
                            moreEl: moreEl,
                            segs: reslicedAllSegs,
                            hiddenSegs: reslicedHiddenSegs,
                            jsEvent: ev,
                            view: view
                        }
                    ]);
                }
                if (clickOption === 'popover') {
                    _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
                }
                else if (typeof clickOption === 'string') { // a view name
                    view.calendar.zoomTo(date, clickOption);
                }
            });
            return a;
        };
        // Reveals the popover that displays all events within a cell
        DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
            var _this = this;
            var _a = this, calendar = _a.calendar, view = _a.view, theme = _a.theme;
            var _col = this.isRtl ? this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
            var moreWrap = moreLink.parentNode; // the <div> wrapper around the <a>
            var topEl; // the element we want to match the top coordinate of
            var options;
            if (this.rowCnt === 1) {
                topEl = view.el; // will cause the popover to cover any sort of header
            }
            else {
                topEl = this.rowEls[row]; // will align with top of row
            }
            options = {
                className: 'fc-more-popover ' + theme.getClass('popover'),
                parentEl: view.el,
                top: core.computeRect(topEl).top,
                autoHide: true,
                content: function (el) {
                    _this.segPopoverTile = new DayTile(_this.context, el);
                    _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
                },
                hide: function () {
                    _this.segPopoverTile.destroy();
                    _this.segPopoverTile = null;
                    _this.segPopover.destroy();
                    _this.segPopover = null;
                }
            };
            // Determine horizontal coordinate.
            // We use the moreWrap instead of the <td> to avoid border confusion.
            if (this.isRtl) {
                options.right = core.computeRect(moreWrap).right + 1; // +1 to be over cell border
            }
            else {
                options.left = core.computeRect(moreWrap).left - 1; // -1 to be over cell border
            }
            this.segPopover = new Popover(options);
            this.segPopover.show();
            calendar.releaseAfterSizingTriggers(); // hack for eventPositioned
        };
        // Given the events within an array of segment objects, reslice them to be in a single day
        DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
            var dayStart = dayDate;
            var dayEnd = core.addDays(dayStart, 1);
            var dayRange = { start: dayStart, end: dayEnd };
            var newSegs = [];
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                var eventRange = seg.eventRange;
                var origRange = eventRange.range;
                var slicedRange = core.intersectRanges(origRange, dayRange);
                if (slicedRange) {
                    newSegs.push(__assign({}, seg, { eventRange: {
                            def: eventRange.def,
                            ui: __assign({}, eventRange.ui, { durationEditable: false }),
                            instance: eventRange.instance,
                            range: slicedRange
                        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
                }
            }
            return newSegs;
        };
        // Generates the text that should be inside a "more" link, given the number of events it represents
        DayGrid.prototype.getMoreLinkText = function (num) {
            var opt = this.opt('eventLimitText');
            if (typeof opt === 'function') {
                return opt(num);
            }
            else {
                return '+' + num + ' ' + opt;
            }
        };
        // Returns segments within a given cell.
        // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
        DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
            var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
            var level = startLevel || 0;
            var segs = [];
            var seg;
            while (level < segMatrix.length) {
                seg = segMatrix[level][col];
                if (seg) {
                    segs.push(seg);
                }
                level++;
            }
            return segs;
        };
        return DayGrid;
    }(core.DateComponent));

    var WEEK_NUM_FORMAT$1 = core.createFormatter({ week: 'numeric' });
    /* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
    ----------------------------------------------------------------------------------------------------------------------*/
    // It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
    // It is responsible for managing width/height.
    var DayGridView = /** @class */ (function (_super) {
        __extends(DayGridView, _super);
        function DayGridView(context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
            /* Header Rendering
            ------------------------------------------------------------------------------------------------------------------*/
            // Generates the HTML that will go before the day-of week header cells
            _this.renderHeadIntroHtml = function () {
                var theme = _this.theme;
                if (_this.colWeekNumbersVisible) {
                    return '' +
                        '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
                        '<span>' + // needed for matchCellWidths
                        core.htmlEscape(_this.opt('weekLabel')) +
                        '</span>' +
                        '</th>';
                }
                return '';
            };
            /* Day Grid Rendering
            ------------------------------------------------------------------------------------------------------------------*/
            // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
            _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
                var dateEnv = _this.dateEnv;
                var weekStart = dayGrid.props.cells[row][0].date;
                if (_this.colWeekNumbersVisible) {
                    return '' +
                        '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
                        core.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                        _this, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1) // inner HTML
                        ) +
                        '</td>';
                }
                return '';
            };
            // Generates the HTML that goes before the day bg cells for each day-row
            _this.renderDayGridBgIntroHtml = function () {
                var theme = _this.theme;
                if (_this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
                }
                return '';
            };
            // Generates the HTML that goes before every other type of row generated by DayGrid.
            // Affects mirror-skeleton and highlight-skeleton rows.
            _this.renderDayGridIntroHtml = function () {
                if (_this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
                }
                return '';
            };
            _this.el.classList.add('fc-dayGrid-view');
            _this.el.innerHTML = _this.renderSkeletonHtml();
            _this.scroller = new core.ScrollComponent('hidden', // overflow x
            'auto' // overflow y
            );
            var dayGridContainerEl = _this.scroller.el;
            _this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
            dayGridContainerEl.classList.add('fc-day-grid-container');
            var dayGridEl = core.createElement('div', { className: 'fc-day-grid' });
            dayGridContainerEl.appendChild(dayGridEl);
            var cellWeekNumbersVisible;
            if (_this.opt('weekNumbers')) {
                if (_this.opt('weekNumbersWithinDays')) {
                    cellWeekNumbersVisible = true;
                    _this.colWeekNumbersVisible = false;
                }
                else {
                    cellWeekNumbersVisible = false;
                    _this.colWeekNumbersVisible = true;
                }
            }
            else {
                _this.colWeekNumbersVisible = false;
                cellWeekNumbersVisible = false;
            }
            _this.dayGrid = new DayGrid(_this.context, dayGridEl, {
                renderNumberIntroHtml: _this.renderDayGridNumberIntroHtml,
                renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
                renderIntroHtml: _this.renderDayGridIntroHtml,
                colWeekNumbersVisible: _this.colWeekNumbersVisible,
                cellWeekNumbersVisible: cellWeekNumbersVisible
            });
            return _this;
        }
        DayGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.dayGrid.destroy();
            this.scroller.destroy();
        };
        // Builds the HTML skeleton for the view.
        // The day-grid component will render inside of a container defined by this HTML.
        DayGridView.prototype.renderSkeletonHtml = function () {
            var theme = this.theme;
            return '' +
                '<table class="' + theme.getClass('tableGrid') + '">' +
                (this.opt('columnHeader') ?
                    '<thead class="fc-head">' +
                        '<tr>' +
                        '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                        '</tr>' +
                        '</thead>' :
                    '') +
                '<tbody class="fc-body">' +
                '<tr>' +
                '<td class="' + theme.getClass('widgetContent') + '"></td>' +
                '</tr>' +
                '</tbody>' +
                '</table>';
        };
        // Generates an HTML attribute string for setting the width of the week number column, if it is known
        DayGridView.prototype.weekNumberStyleAttr = function () {
            if (this.weekNumberWidth != null) {
                return 'style="width:' + this.weekNumberWidth + 'px"';
            }
            return '';
        };
        // Determines whether each row should have a constant height
        DayGridView.prototype.hasRigidRows = function () {
            var eventLimit = this.opt('eventLimit');
            return eventLimit && typeof eventLimit !== 'number';
        };
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/
        DayGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
            _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
            this.dayGrid.updateSize(isResize);
        };
        // Refreshes the horizontal dimensions of the view
        DayGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
            var dayGrid = this.dayGrid;
            var eventLimit = this.opt('eventLimit');
            var headRowEl = this.header ? this.header.el : null; // HACK
            var scrollerHeight;
            var scrollbarWidths;
            // hack to give the view some height prior to dayGrid's columns being rendered
            // TODO: separate setting height from scroller VS dayGrid.
            if (!dayGrid.rowEls) {
                if (!isAuto) {
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                return;
            }
            if (this.colWeekNumbersVisible) {
                // Make sure all week number cells running down the side have the same width.
                this.weekNumberWidth = core.matchCellWidths(core.findElements(this.el, '.fc-week-number'));
            }
            // reset all heights to be natural
            this.scroller.clear();
            if (headRowEl) {
                core.uncompensateScroll(headRowEl);
            }
            dayGrid.removeSegPopover(); // kill the "more" popover if displayed
            // is the event limit a constant level number?
            if (eventLimit && typeof eventLimit === 'number') {
                dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
            }
            // distribute the height to the rows
            // (viewHeight is a "recommended" value if isAuto)
            scrollerHeight = this.computeScrollerHeight(viewHeight);
            this.setGridHeight(scrollerHeight, isAuto);
            // is the event limit dynamically calculated?
            if (eventLimit && typeof eventLimit !== 'number') {
                dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
            }
            if (!isAuto) { // should we force dimensions of the scroll container?
                this.scroller.setHeight(scrollerHeight);
                scrollbarWidths = this.scroller.getScrollbarWidths();
                if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                    if (headRowEl) {
                        core.compensateScroll(headRowEl, scrollbarWidths);
                    }
                    // doing the scrollbar compensation might have created text overflow which created more height. redo
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                // guarantees the same scrollbar widths
                this.scroller.lockOverflow(scrollbarWidths);
            }
        };
        // given a desired total height of the view, returns what the height of the scroller should be
        DayGridView.prototype.computeScrollerHeight = function (viewHeight) {
            return viewHeight -
                core.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
        };
        // Sets the height of just the DayGrid component in this view
        DayGridView.prototype.setGridHeight = function (height, isAuto) {
            if (this.opt('monthMode')) {
                // if auto, make the height of each row the height that it would be if there were 6 weeks
                if (isAuto) {
                    height *= this.dayGrid.rowCnt / 6;
                }
                core.distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
            }
            else {
                if (isAuto) {
                    core.undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
                }
                else {
                    core.distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
                }
            }
        };
        /* Scroll
        ------------------------------------------------------------------------------------------------------------------*/
        DayGridView.prototype.computeDateScroll = function (timeMs) {
            return { top: 0 };
        };
        DayGridView.prototype.queryDateScroll = function () {
            return { top: this.scroller.getScrollTop() };
        };
        DayGridView.prototype.applyDateScroll = function (scroll) {
            if (scroll.top !== undefined) {
                this.scroller.setScrollTop(scroll.top);
            }
        };
        return DayGridView;
    }(core.View));
    DayGridView.prototype.dateProfileGeneratorClass = DayGridDateProfileGenerator;

    var SimpleDayGrid = /** @class */ (function (_super) {
        __extends(SimpleDayGrid, _super);
        function SimpleDayGrid(context, dayGrid) {
            var _this = _super.call(this, context, dayGrid.el) || this;
            _this.slicer = new DayGridSlicer();
            _this.dayGrid = dayGrid;
            context.calendar.registerInteractiveComponent(_this, { el: _this.dayGrid.el });
            return _this;
        }
        SimpleDayGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.calendar.unregisterInteractiveComponent(this);
        };
        SimpleDayGrid.prototype.render = function (props) {
            var dayGrid = this.dayGrid;
            var dateProfile = props.dateProfile, dayTable = props.dayTable;
            dayGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }));
        };
        SimpleDayGrid.prototype.buildPositionCaches = function () {
            this.dayGrid.buildPositionCaches();
        };
        SimpleDayGrid.prototype.queryHit = function (positionLeft, positionTop) {
            var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
            if (rawHit) {
                return {
                    component: this.dayGrid,
                    dateSpan: rawHit.dateSpan,
                    dayEl: rawHit.dayEl,
                    rect: {
                        left: rawHit.relativeRect.left,
                        right: rawHit.relativeRect.right,
                        top: rawHit.relativeRect.top,
                        bottom: rawHit.relativeRect.bottom
                    },
                    layer: 0
                };
            }
        };
        return SimpleDayGrid;
    }(core.DateComponent));
    var DayGridSlicer = /** @class */ (function (_super) {
        __extends(DayGridSlicer, _super);
        function DayGridSlicer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
            return dayTable.sliceRange(dateRange);
        };
        return DayGridSlicer;
    }(core.Slicer));

    var DayGridView$1 = /** @class */ (function (_super) {
        __extends(DayGridView, _super);
        function DayGridView(_context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, _context, viewSpec, dateProfileGenerator, parentEl) || this;
            _this.buildDayTable = core.memoize(buildDayTable);
            if (_this.opt('columnHeader')) {
                _this.header = new core.DayHeader(_this.context, _this.el.querySelector('.fc-head-container'));
            }
            _this.simpleDayGrid = new SimpleDayGrid(_this.context, _this.dayGrid);
            return _this;
        }
        DayGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.header) {
                this.header.destroy();
            }
            this.simpleDayGrid.destroy();
        };
        DayGridView.prototype.render = function (props) {
            _super.prototype.render.call(this, props);
            var dateProfile = this.props.dateProfile;
            var dayTable = this.dayTable =
                this.buildDayTable(dateProfile, this.dateProfileGenerator);
            if (this.header) {
                this.header.receiveProps({
                    dateProfile: dateProfile,
                    dates: dayTable.headerDates,
                    datesRepDistinctDays: dayTable.rowCnt === 1,
                    renderIntroHtml: this.renderHeadIntroHtml
                });
            }
            this.simpleDayGrid.receiveProps({
                dateProfile: dateProfile,
                dayTable: dayTable,
                businessHours: props.businessHours,
                dateSelection: props.dateSelection,
                eventStore: props.eventStore,
                eventUiBases: props.eventUiBases,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                isRigid: this.hasRigidRows(),
                nextDayThreshold: this.nextDayThreshold
            });
        };
        return DayGridView;
    }(DayGridView));
    function buildDayTable(dateProfile, dateProfileGenerator) {
        var daySeries = new core.DaySeries(dateProfile.renderRange, dateProfileGenerator);
        return new core.DayTable(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
    }

    var main = core.createPlugin({
        defaultView: 'dayGridMonth',
        views: {
            dayGrid: DayGridView$1,
            dayGridDay: {
                type: 'dayGrid',
                duration: { days: 1 }
            },
            dayGridWeek: {
                type: 'dayGrid',
                duration: { weeks: 1 }
            },
            dayGridMonth: {
                type: 'dayGrid',
                duration: { months: 1 },
                monthMode: true,
                fixedWeekCount: true
            }
        }
    });

    exports.AbstractDayGridView = DayGridView;
    exports.DayBgRow = DayBgRow;
    exports.DayGrid = DayGrid;
    exports.DayGridSlicer = DayGridSlicer;
    exports.DayGridView = DayGridView$1;
    exports.SimpleDayGrid = SimpleDayGrid;
    exports.buildBasicDayTable = buildDayTable;
    exports.default = main;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
