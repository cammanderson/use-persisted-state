var e,t=require("react"),n=(e=require("@use-it/event-listener"))&&"object"==typeof e&&"default"in e?e.default:e,r={},u=function(e,t,n){return r[e]||(r[e]={callbacks:[],value:n}),r[e].callbacks.push(t),{deregister:function(){var n=r[e].callbacks,u=n.indexOf(t);u>-1&&n.splice(u,1)},emit:function(n){r[e].value!==n&&(r[e].value=n,r[e].callbacks.forEach(function(e){t!==e&&e(n)}))}}};module.exports=function(e,r){if(void 0===r&&(r=global.localStorage),r){var c=function(e){return{get:function(t,n){var r=e.getItem(t);return null===r?"function"==typeof n?n():n:JSON.parse(r)},set:function(t,n){e.setItem(t,JSON.stringify(n))}}}(r);return function(r){return function(e,r,c){var i=c.get,a=c.set,f=t.useRef(null),o=t.useState(function(){return i(r,e)}),l=o[0],s=o[1];return n("storage",function(e){var t=e.key,n=JSON.parse(e.newValue);t===r&&l!==n&&s(n)}),t.useEffect(function(){return f.current=u(r,s,e),function(){f.current.deregister()}},[]),t.useEffect(function(){a(r,l),f.current.emit(l)},[l]),[l,s]}(r,e,c)}}return t.useState};
