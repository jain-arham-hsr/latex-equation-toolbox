(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{681:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(5)),r=n(117),a=n(695),i=c(n(118)),u=n(188),l=function(t){return t&&t.__esModule?t:{default:t}}(n(189));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  .CodeMirror {\n    height: 100% !important;\n  }\n"]);return y=function(){return t},t}n(697),n(698),n(699),n(700);var b=(0,i.createGlobalStyle)(y()),g=i.default.div.withConfig({displayName:"RegularInput__Container",componentId:"sc-8svmh2-0"})(["height:100%;"]),m=(0,i.default)(a.Controlled).withConfig({displayName:"RegularInput__CodeMirrorStyled",componentId:"sc-8svmh2-1"})(["height:100vh;background-color:#222 !important;"]),v=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?d(t):e}(this,f(e).call(this,t))).onInputChange=n.onInputChange.bind(d(d(n))),n.codeMirrorElm=null,n.editor=null,n.oldLatex=t.latex,n.state={mathString:n.calculateMathString(t.latex)},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,o.Component),function(t,e,n){e&&s(t.prototype,e),n&&s(t,n)}(e,[{key:"onInputChange",value:function(t,e,n){console.log("Changed regular input",n),this.setState({mathString:n}),this.updateLatex(n)}},{key:"calculateMathString",value:function(t){return(new l.default).parseLatex(t).toMath()}},{key:"updateLatex",value:function(t){this.oldLatex=this.props.latex;try{var e=(new l.default).parseMath(t).toLatex();this.props.changeLatex(e)}catch(e){console.log("Could not parse to latex:",t)}}},{key:"updateMath",value:function(t){this.oldLatex=this.props.latex;try{var e=(new l.default).parseLatex(t).toMath();this.setState({mathString:e})}catch(e){console.log("Could not parse to math:",t)}}},{key:"render",value:function(){var t=this,e=this.props.darkTheme?"monokai":"base16-light";return this.oldLatex!=this.props.latex&&this.updateMath(this.props.latex),o.createElement(g,null,o.createElement(b,null),o.createElement(m,{options:{theme:e,lineWrapping:!0},ref:function(e){t.codeMirrorElm=e},value:this.state.mathString,onBeforeChange:this.onInputChange,onChange:function(){},editorDidMount:function(e){t.editor=e}}))}}]),e}(),w=(0,r.connect)(function(t){return{latex:t.input.latex,darkTheme:t.settings.darkTheme}},u.actions)(v);e.default=w}}]);
//# sourceMappingURL=comp-regular-input.bundle.js.map