!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("smooth-scrollbar")):"function"==typeof define&&define.amd?define(["react","smooth-scrollbar"],t):"object"==typeof exports?exports.Scrollbar=t(require("react"),require("smooth-scrollbar")):e.Scrollbar=t(e.React,e.Scrollbar)}(this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=r(1),s=o(f),p=r(2),b=o(p),d=function(e){function t(e){c(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e));return r.callbacks=[],r}return u(t,e),l(t,[{key:"getChildContext",value:function(){var e=this;return{getScrollbar:function(t){"function"==typeof t&&(e.scrollbar?setTimeout(function(){return t(e.scrollbar)}):e.callbacks.push(t))}}}},{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.speed,o=t.friction;this.scrollbar=b["default"].init(this.refs.container,{speed:r,friction:o}),this.callbacks.forEach(function(t){setTimeout(function(){return t(e.scrollbar)})})}},{key:"componentWillUnmount",value:function(){this.scrollbar.destroy()}},{key:"render",value:function(){var e=this.props,t=e.children,r=n(e,["children"]);return s["default"].createElement("section",a({"data-scrollbar":!0,ref:"container"},r),t)}}]),t}(s["default"].Component);d.propTypes={speed:s["default"].PropTypes.number,fricton:s["default"].PropTypes.number},d.childContextTypes={getScrollbar:s["default"].PropTypes.func},t["default"]=d},function(t,r){t.exports=e},function(e,r){e.exports=t}])});