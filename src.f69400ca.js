(function () {var Q=function(){},b={},c=[],v=[];function a(e,t){var r,o,n,$,a=v;for($=arguments.length;$-->2;)c.push(arguments[$]);for(t&&null!=t.children&&(c.length||c.push(t.children),delete t.children);c.length;)if((o=c.pop())&&void 0!==o.pop)for($=o.length;$--;)c.push(o[$]);else"boolean"==typeof o&&(o=null),(n="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(n=!1)),n&&r?a[a.length-1]+=o:a===v?a=[o]:a.push(o),r=n;var m=new Q;return m.nodeName=e,m.children=a,m.attributes=null==t?void 0:t,m.key=null==t?void 0:t.key,void 0!==b.vnode&&b.vnode(m),m}function g(e,t){for(var r in t)e[r]=t[r];return e}var da="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function r(e,t){return a(e.nodeName,g(g({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var W=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,H=[];function M(e){!e._dirty&&(e._dirty=!0)&&1==H.push(e)&&(b.debounceRendering||da)(o)}function o(){var e,t=H;for(H=[];e=t.pop();)e._dirty&&w(e)}function aa(e,t,r){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&A(e,t.nodeName):r||e._componentConstructor===t.nodeName}function A(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function E(e){var t=g({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function U(e,t){var r=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return r.normalizedNodeName=e,r}function x(e){var t=e.parentNode;t&&t.removeChild(e)}function C(e,t,r,o,n){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)r&&r(null),o&&o(e);else if("class"!==t||n){if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof r||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof r)for(var $ in r)$ in o||(e.style[$]="");for(var $ in o)e.style[$]="number"==typeof o[$]&&!1===W.test($)?o[$]+"px":o[$]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?r||e.addEventListener(t,F,a):e.removeEventListener(t,F,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!n&&t in e){try{e[t]=null==o?"":o}catch(i){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var m=n&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?m?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(m?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}}else e.className=o||""}function F(e){return this._listeners[e.type](b.event&&b.event(e)||e)}var G=[],B=0,k=!1,I=!1;function J(){for(var e;e=G.pop();)b.afterMount&&b.afterMount(e),e.componentDidMount&&e.componentDidMount()}function L(e,t,r,o,n,$){B++||(k=null!=n&&void 0!==n.ownerSVGElement,I=null!=e&&!("__preactattr_"in e));var a=y(e,t,r,o,$);return n&&a.parentNode!==n&&n.appendChild(a),--B||(I=!1,$||J()),a}function y(e,t,r,o,n){var $=e,a=k;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||n)?e.nodeValue!=t&&(e.nodeValue=t):($=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild($,e),j(e,!0))),$.__preactattr_=!0,$;var m=t.nodeName;if("function"==typeof m)return X(e,t,r,o);if(k="svg"===m||"foreignObject"!==m&&k,m=String(m),(!e||!A(e,m))&&($=U(m,k),e)){for(;e.firstChild;)$.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild($,e),j(e,!0)}var i=$.firstChild,p=$.__preactattr_,s=t.children;if(null==p){p=$.__preactattr_={};for(var l=$.attributes,v=l.length;v--;)p[l[v].name]=l[v].value}return!I&&s&&1===s.length&&"string"==typeof s[0]&&null!=i&&void 0!==i.splitText&&null==i.nextSibling?i.nodeValue!=s[0]&&(i.nodeValue=s[0]):(s&&s.length||null!=i)&&V($,s,r,o,I||null!=p.dangerouslySetInnerHTML),ca($,t.attributes,p),k=a,$}function V(e,t,r,o,n){var $,a,m,i,p,s=e.childNodes,l=[],v={},d=0,c=0,u=s.length,A=0,O=t?t.length:0;if(0!==u)for(var K=0;K<u;K++){var f=s[K],_=f.__preactattr_;null!=(h=O&&_?f._component?f._component.__key:_.key:null)?(d++,v[h]=f):(_||(void 0!==f.splitText?!n||f.nodeValue.trim():n))&&(l[A++]=f)}if(0!==O)for(K=0;K<O;K++){var h;if(p=null,null!=(h=(i=t[K]).key))d&&void 0!==v[h]&&(p=v[h],v[h]=void 0,d--);else if(c<A)for($=c;$<A;$++)if(void 0!==l[$]&&aa(a=l[$],i,n)){p=a,l[$]=void 0,$===A-1&&A--,$===c&&c++;break}p=y(p,i,r,o),m=s[K],p&&p!==e&&p!==m&&(null==m?e.appendChild(p):p===m.nextSibling?x(m):e.insertBefore(p,m))}if(d)for(var K in v)void 0!==v[K]&&j(v[K],!1);for(;c<=A;)void 0!==(p=l[A--])&&j(p,!1)}function j(e,t){var r=e._component;r?z(r):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||x(e),u(e))}function u(e){for(e=e.lastChild;e;){var t=e.previousSibling;j(e,!0),e=t}}function ca(e,t,r){var o;for(o in r)t&&null!=t[o]||null==r[o]||C(e,o,r[o],r[o]=void 0,k);for(o in t)"children"===o||"innerHTML"===o||o in r&&t[o]===("value"===o||"checked"===o?e[o]:r[o])||C(e,o,r[o],r[o]=t[o],k)}var i=[];function D(e,t,r){var o,n=i.length;for(e.prototype&&e.prototype.render?(o=new e(t,r),l.call(o,t,r)):((o=new l(t,r)).constructor=e,o.render=ga);n--;)if(i[n].constructor===e)return o.nextBase=i[n].nextBase,i.splice(n,1),o;return o}function ga(e,t,r){return this.constructor(e,r)}function q(e,t,r,o,n){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||n?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==r&&(1!==r&&!1===b.syncComponentUpdates&&e.base?M(e):w(e,1,n)),e.__ref&&e.__ref(e))}function w(e,t,r,o){if(!e._disable){var n,$,a,m=e.props,i=e.state,p=e.context,s=e.prevProps||m,l=e.prevState||i,v=e.prevContext||p,d=e.base,c=e.nextBase,u=d||c,A=e._component,O=!1,K=v;if(e.constructor.getDerivedStateFromProps&&(i=g(g({},i),e.constructor.getDerivedStateFromProps(m,i)),e.state=i),d&&(e.props=s,e.state=l,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(m,i,p)?O=!0:e.componentWillUpdate&&e.componentWillUpdate(m,i,p),e.props=m,e.state=i,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!O){n=e.render(m,i,p),e.getChildContext&&(p=g(g({},p),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(K=e.getSnapshotBeforeUpdate(s,l));var f,_,h=n&&n.nodeName;if("function"==typeof h){var x=E(n);($=A)&&$.constructor===h&&x.key==$.__key?q($,x,1,p,!1):(f=$,e._component=$=D(h,x,p),$.nextBase=$.nextBase||c,$._parentComponent=e,q($,x,0,p,!1),w($,1,r,!0)),_=$.base}else a=u,(f=A)&&(a=e._component=null),(u||1===t)&&(a&&(a._component=null),_=L(a,n,p,r||!d,u&&u.parentNode,!0));if(u&&_!==u&&$!==A){var C=u.parentNode;C&&_!==C&&(C.replaceChild(_,u),f||(u._component=null,j(u,!1)))}if(f&&z(f),e.base=_,_&&!o){for(var N=e,y=e;y=y._parentComponent;)(N=y).base=_;_._component=N,_._componentConstructor=N.constructor}}for(!d||r?G.unshift(e):O||(e.componentDidUpdate&&e.componentDidUpdate(s,l,K),b.afterUpdate&&b.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);B||o||J()}}function X(e,t,r,o){for(var n=e&&e._component,$=n,a=e,m=n&&e._componentConstructor===t.nodeName,i=m,p=E(t);n&&!i&&(n=n._parentComponent);)i=n.constructor===t.nodeName;return n&&i&&(!o||n._component)?(q(n,p,3,r,o),e=n.base):($&&!m&&(z($),e=a=null),n=D(t.nodeName,p,r),e&&!n.nextBase&&(n.nextBase=e,a=null),q(n,p,1,r,o),e=n.base,a&&e!==a&&(a._component=null,j(a,!1))),e}function z(e){b.beforeUnmount&&b.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?z(r):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,x(t),i.push(e),u(t)),e.__ref&&e.__ref(null)}function l(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function n(e,t,r){return L(r,e,{},!1,t,!1)}g(l.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=g(g({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),M(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),w(this,2)},render:function(){}});var ea={h:a,createElement:a,cloneElement:r,Component:l,render:n,rerender:o,options:b};ea,b,o,n,l,r,a,a;var e={},R="/Users/zouloux/Documents/local/_lab/prehook-proof-of-concept/src/HookedComponent.tsx";var S;function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){return S}function p(t,n){var o="Component";if(null!=n){var e=n.split("/");o=e[e.length-1].split(".")[0]}function r(n,e){var r=this,u=[];this.displayName=o,this.toString=function(){return"<"+o+" ... />"},this.componentDidMount=function(){return u.forEach(function(t){return t.mount&&t.mount()})},this.componentDidUpdate=function(){return u.forEach(function(t){return t.update&&t.update()})},this.componentWillUnmount=function(){return u.forEach(function(t){return t.unmount&&t.unmount()})},this.shouldComponentUpdate=function(t){return Y(r.props,t)};return this.addEffect=function(t){return u.push(t)},S=this,this.render=t.call(this,function t(o){return null!=o?function(){return t()[o]}:r.props||n},e),S=null,this.render.apply(this)}return Object.defineProperty(r,"name",{value:o}),r}function h(t){var n=m();return function(o){return null==o?t:(t=o,new Promise(function(t){return n.forceUpdate(t)}))}}function d(t,n){var o=m(),e=T(t),r=Array.isArray(t);if("object"!==e||r){var u,c=t;null==n&&"function"===e&&(n=t,c=null);var f=function(){return u&&u()},$=function(){return u=n()||null};if("boolean"===e&&!t||r&&0==t.length)o.addEffect({mount:$,unmount:f});else{var i=function(){return c.map(function(t){return t()})},p=!!c,a=p&&i();o.addEffect({mount:$,unmount:f,update:function(){if(p){var t=i(),n=t.filter(function(t,n){return t!=a[n]});if(a=t,0==n.length)return}f(),$()}})}}else o.addEffect(t)}function Y(r,t){for(var f in r)if(!(f in t))return!0;for(var f in t)if(r[f]!==t[f])return!0;return!1}m,p,h,d;function Z(o){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function s(){var o=[],t=!1;return m().addEffect({unmount:function(){o=null}}),function(e){if(o){var n=Z(e);return"string"===n||"number"===n?(t=!0,function(t){if(o){if(null==t)return delete o[e],void o.length--;o.length++,o[e]=t}}):null==e?t?o:o[0]:void(o[0]=e)}}}s;var _=e&&e.__awaiter||function(e,o,t,r){return new(t||(t=Promise))(function(n,$){function i(e){try{f(r.next(e))}catch(o){$(o)}}function l(e){try{f(r.throw(e))}catch(o){$(o)}}function f(e){e.done?n(e.value):new t(function(o){o(e.value)}).then(i,l)}f((r=r.apply(e,o||[])).next())})},ba=e&&e.__generator||function(e,o){var t,r,n,$,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return $={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&($[Symbol.iterator]=function(){return this}),$;function l($){return function(l){return function($){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(n=2&$[0]?r.return:$[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,$[1])).done)return n;switch(r=0,n&&($=[2&$[0],n.value]),$[0]){case 0:case 1:n=$;break;case 4:return i.label++,{value:$[1],done:!1};case 5:i.label++,r=$[1],$=[0];continue;case 7:$=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===$[0]||2===$[0])){i=0;continue}if(3===$[0]&&(!n||$[1]>n[0]&&$[1]<n[3])){i.label=$[1];break}if(6===$[0]&&i.label<n[1]){i.label=n[1],n=$;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push($);break}n[2]&&i.ops.pop(),i.trys.pop();continue;}$=o.call(e,i)}catch(l){$=[6,l],r=0}finally{t=n=0}if(5&$[0])throw $[1];return{value:$[0]?$[1]:void 0,done:!0}}([$,l])}}},N=function(e){return void 0===e&&(e=10),Array.from({length:Math.random()*e})},O=p(function(e){var o=this;console.log("Factory phase ...",this);var t=h({superProp:e().defaultSuperProp||0});function r(e){return _(this,void 0,void 0,function(){return ba(this,function(e){return t({superProp:t().superProp+1}).then(),[2]})})}d([t],function(){console.log("Click state update",t())});var n=h(5);function $(e){n(n()-1)}d([n],function(){console.log("Other update",n())}),d(!1,function(){function e(){console.log("Subscribe effect // Window size changed",window.innerWidth)}return console.log("Subscribe effect // Start listening to resize events."),window.addEventListener("resize",e),function(){console.log("Subscribe effect // Stop listening to resize events."),window.removeEventListener("resize",e)}}),d(function(){return console.log("Every render effect // Mount and update"),function(){return console.log("Every render effect // Unmount")}}),d({mount:function(){console.log("Lifecycle effect // Mount")},update:function(){console.log("Lifecycle effect // Update")},unmount:function(){console.log("Lifecycle effect // Unmount")}});var i=s();d([e("color")],function(){console.log("Color props updated to",e().color),console.log("Ref to color div :",i())});var l=h(N()),f=s();function c(){l(N())}return d([l],function(){console.log("List item refs :",f())}),function(){return console.log("Render phase ..."),a("div",{class:o.displayName},a("h2",null,"Hooked Component"),a("p",null,"Color from props :"),a("div",{class:"HookedComponent_color",style:{background:e().color},children:e().color,key:e().color,ref:i}),a("hr",null),a("h3",null,"Click state"),a("p",null,"Value : ",t().superProp),a("button",{onClick:r},"Click me"),a("hr",null),a("h3",null,"Other state"),a("p",null,"Value : ",n()),a("button",{onClick:$},"Click me"),a("hr",null),a("h3",null,"List refs"),a("p",null,"This part shows how we can multi-ref DOM elements (or components)."),a("button",{onClick:c},"Update number of items"),a("ul",null,l().map(function(e,o){return a("li",{ref:f(o)},"Item n\xB0",o)})),a("hr",null),a("h4",null,e().children),a("hr",null),a("h3",null,"Callback"),a("p",null,"This will remove this component from the DOM by calling a prop callback.",a("br",null),"This is meant to test detach effects."),a("button",{onClick:e().onDetach},"Detach this component"))}},R);e.HookedComponent=O;var P=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},fa=p(function(o){var n=h(!0),r=h(P()),$=Math.floor(100*Math.random());return function(){return a("div",{class:"App"},a("h1",null,"Hello Prehook \uD83D\uDE80"),n()?a("div",null,a("h3",null,"Props with hooked components"),a("p",null,"This example will show update cycle when updating props of an hooked component."),a("button",{onClick:function(o){return r(P())}},"Change color on HookedComponent"),a(O,{defaultSuperProp:$,color:r(),onDetach:function(){return n(!1)}},a("div",null,"Child from App"))):a("button",{onClick:function(o){return n(!0)},children:"Re-attach a new instance of HookedComponent"}))}});var f,K,$,ha,ia,ja;var t=document.getElementById("app");n(a(fa,null),t,t.lastChild);})();