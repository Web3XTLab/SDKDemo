(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{53552:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculator",function(){return n(60988)}])},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=u.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));if((o=a({},o,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;o(n(67294));var u=o(n(14302));function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=u},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,u=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(67294))&&a.__esModule?a:{default:a},i=n(16319);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=n(61688).useSyncExternalStore,d=[],c=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var _=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var n=function(){if(!a){var t=new _(e,u);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=function(){n();var e=o.default.useContext(i.LoadableContext);e&&Array.isArray(u.modules)&&u.modules.forEach((function(t){e(t)}))},u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);u.suspense&&(u.lazy=o.default.lazy(u.loader));var a=null;if(!f){var d=u.webpack?u.webpack():u.modules;d&&c.push((function(e){var t=!0,r=!1,u=void 0;try{for(var a,o=d[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,u=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw u}}}))}var p=u.suspense?function(e,t){return r(),o.default.createElement(u.lazy,l({},e,{ref:t}))}:function(e,t){r();var n=s(a.subscribe,a.getCurrentValue,a.getCurrentValue);return o.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o.default.useMemo((function(){return n.loading||n.error?o.default.createElement(u.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:a.retry}):n.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",o.default.forwardRef(p)}(p,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){h(d).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};h(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var v=y;t.default=v},60988:function(e,t,n){"use strict";n.r(t);var r=n(5152),u=n.n(r);t.default=u()((function(){return Promise.all([n.e(482),n.e(714),n.e(476),n.e(993)]).then(n.bind(n,74402)).then((function(e){return e.Calculator}))}),{loadableGenerated:{webpack:function(){return[74402]}}})},5152:function(e,t,n){e.exports=n(90638)},53250:function(e,t,n){"use strict";var r=n(67294);var u="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useState,o=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),u=r[0].inst,d=r[1];return i((function(){u.value=n,u.getSnapshot=t,s(u)&&d({inst:u})}),[e,n,t]),o((function(){return s(u)&&d({inst:u}),e((function(){s(u)&&d({inst:u})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},61688:function(e,t,n){"use strict";e.exports=n(53250)}},function(e){e.O(0,[774,888,179],(function(){return t=53552,e(e.s=t);var t}));var t=e.O();_N_E=t}]);