
export default function appGlobal(n, x, w, d, r, h) {(function(Context, resourcesUrl){Context.store=function(){var t;return{getStore:function(){return t},setStore:function(n){t=n},getState:function(){return t&&t.getState()},mapDispatchToProps:function(n,e){Object.keys(e).forEach(function(r){var o=e[r];Object.defineProperty(n,r,{get:function(){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.dispatch(o.apply(void 0,n))}},configurable:!0,enumerable:!0})})},mapStateToProps:function(n,e){var r=function(r,o){var u=e(t.getState());Object.keys(u).forEach(function(t){n[t]=u[t]})},o=t.subscribe(function(){return r()});return r(),o}}}();
})(x,r);
}