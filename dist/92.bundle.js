(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/core/HandleOwner':"./node_modules/arcgis-js-api/core/HandleOwner.js",
	'esri/renderers/support/heatmapUtils':"./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js",
	'esri/views/2d/layers/features/processors/BaseProcessor':"./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js",
	'esri/views/2d/layers/features/processors/HeatmapProcessor':"./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/arcgis-js-api/core/HandleOwner.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/HandleOwner.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ./Accessor */ \"./node_modules/arcgis-js-api/core/Accessor.js\"),__webpack_require__(/*! ./Handles */ \"./node_modules/arcgis-js-api/core/Handles.js\"),__webpack_require__(/*! ./accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,s,n,c){return function(e){function r(){var r=e.call(this)||this;return r.handles=new n,r}return t(r,e),r.prototype.destroy=function(){this.handles.destroy()},o([c.property({readOnly:!0})],r.prototype,\"handles\",void 0),r=o([c.subclass(\"esri.core.HandleOwner\")],r)}(c.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9jb3JlL0hhbmRsZU93bmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvY29yZS9IYW5kbGVPd25lci5qcz9lY2MwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuLi9jb3JlL3RzU3VwcG9ydC9kZWNsYXJlRXh0ZW5kc0hlbHBlclwiLFwiLi4vY29yZS90c1N1cHBvcnQvZGVjb3JhdGVIZWxwZXJcIixcIi4vQWNjZXNzb3JcIixcIi4vSGFuZGxlc1wiLFwiLi9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9yc1wiXSxmdW5jdGlvbihlLHIsdCxvLHMsbixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcigpe3ZhciByPWUuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gci5oYW5kbGVzPW5ldyBuLHJ9cmV0dXJuIHQocixlKSxyLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5oYW5kbGVzLmRlc3Ryb3koKX0sbyhbYy5wcm9wZXJ0eSh7cmVhZE9ubHk6ITB9KV0sci5wcm90b3R5cGUsXCJoYW5kbGVzXCIsdm9pZCAwKSxyPW8oW2Muc3ViY2xhc3MoXCJlc3JpLmNvcmUuSGFuZGxlT3duZXJcIildLHIpfShjLmRlY2xhcmVkKHMpKX0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/core/HandleOwner.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/global */ \"./node_modules/arcgis-js-api/core/global.js\"),__webpack_require__(/*! ../../views/3d/support/mathUtils */ \"./node_modules/arcgis-js-api/views/3d/support/mathUtils.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,a){function n(t,e,r,a){for(var n,o=e.blurRadius,i=e.fieldOffset,l=e.field,c=new Float64Array(r*a),h=u(o),g=Math.round(4.5*o),d=Number.NEGATIVE_INFINITY,m=f(l,i),p=0,y=t;p<y.length;p++)for(var v=y[p],s=v.geometry,b=v.attributes,w=s.x-g,M=s.y-g,I=Math.max(0,w),x=Math.max(0,M),A=Math.min(a,s.y+g),U=Math.min(r,s.x+g),F=+m(b),C=x;C<A;C++)for(var D=h[C-M],N=I;N<U;N++){var E=h[N-w],G=C*r+N;n=c[G]+=D*E*F,n>d&&(d=n)}return{matrix:c.buffer,max:d}}function o(t,e,r,a,n,o){var u=t.getContext(\"2d\");u.clearRect(0,0,e,e);var f=u.getImageData(0,0,e,e);return f.data.set(new Uint8ClampedArray(i(e,r,a,n,o))),u.putImageData(f,0,0),t}function i(t,e,r,n,o){for(var i=new Uint32Array(t*t),u=(\"buffer\"in e?e:new Float64Array(e)),f=(\"buffer\"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),l=f.length/(o-n),c=0;c<u.length;c++){var h=u[c],g=Math.floor((h-n)*l);i[c]=f[a.clamp(g,0,f.length-1)]}return i.buffer}function u(t){for(var e=Math.round(4.5*t),r=t*t,a=new Float64Array(2*e+1),n=0;n<=a.length;n++)a[n]=Math.exp(-Math.pow(n-e,2)/(2*r))/Math.sqrt(2*Math.PI)*(t/2);return a}function f(t,e){return\"function\"==typeof t?t:t?\"string\"==typeof e?function(e){return-1*+e[t]}:function(r){return+r[t]+e}:function(t){return 1}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.generateGradient=function(){if(!(\"document\"in r))return function(t){return null};var t=document.createElement(\"canvas\"),e=t.getContext(\"2d\");return t.height=512,t.width=1,function(r){for(var a=e.createLinearGradient(0,0,0,t.height),n=0,o=r.colorStops;n<o.length;n++){var i=o[n],u=i.ratio,f=i.color;a.addColorStop(u,\"rgba(\"+f[0]+\", \"+f[1]+\", \"+f[2]+\", \"+f[3]+\")\")}return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}}(),e.calculateHeatmapIntensityInfo=n,e.drawHeatmap=o,e.createHeatmapImageData=i,e.createKernel=u,e.createValueFunction=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9yZW5kZXJlcnMvc3VwcG9ydC9oZWF0bWFwVXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9yZW5kZXJlcnMvc3VwcG9ydC9oZWF0bWFwVXRpbHMuanM/NTlmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwiLi4vLi4vY29yZS9nbG9iYWxcIixcIi4uLy4uL3ZpZXdzLzNkL3N1cHBvcnQvbWF0aFV0aWxzXCJdLGZ1bmN0aW9uKHQsZSxyLGEpe2Z1bmN0aW9uIG4odCxlLHIsYSl7Zm9yKHZhciBuLG89ZS5ibHVyUmFkaXVzLGk9ZS5maWVsZE9mZnNldCxsPWUuZmllbGQsYz1uZXcgRmxvYXQ2NEFycmF5KHIqYSksaD11KG8pLGc9TWF0aC5yb3VuZCg0LjUqbyksZD1OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksbT1mKGwsaSkscD0wLHk9dDtwPHkubGVuZ3RoO3ArKylmb3IodmFyIHY9eVtwXSxzPXYuZ2VvbWV0cnksYj12LmF0dHJpYnV0ZXMsdz1zLngtZyxNPXMueS1nLEk9TWF0aC5tYXgoMCx3KSx4PU1hdGgubWF4KDAsTSksQT1NYXRoLm1pbihhLHMueStnKSxVPU1hdGgubWluKHIscy54K2cpLEY9K20oYiksQz14O0M8QTtDKyspZm9yKHZhciBEPWhbQy1NXSxOPUk7TjxVO04rKyl7dmFyIEU9aFtOLXddLEc9QypyK047bj1jW0ddKz1EKkUqRixuPmQmJihkPW4pfXJldHVybnttYXRyaXg6Yy5idWZmZXIsbWF4OmR9fWZ1bmN0aW9uIG8odCxlLHIsYSxuLG8pe3ZhciB1PXQuZ2V0Q29udGV4dChcIjJkXCIpO3UuY2xlYXJSZWN0KDAsMCxlLGUpO3ZhciBmPXUuZ2V0SW1hZ2VEYXRhKDAsMCxlLGUpO3JldHVybiBmLmRhdGEuc2V0KG5ldyBVaW50OENsYW1wZWRBcnJheShpKGUscixhLG4sbykpKSx1LnB1dEltYWdlRGF0YShmLDAsMCksdH1mdW5jdGlvbiBpKHQsZSxyLG4sbyl7Zm9yKHZhciBpPW5ldyBVaW50MzJBcnJheSh0KnQpLHU9KFwiYnVmZmVyXCJpbiBlP2U6bmV3IEZsb2F0NjRBcnJheShlKSksZj0oXCJidWZmZXJcImluIHI/bmV3IFVpbnQzMkFycmF5KHIuYnVmZmVyKTpuZXcgVWludDMyQXJyYXkobmV3IFVpbnQ4QXJyYXkocikuYnVmZmVyKSksbD1mLmxlbmd0aC8oby1uKSxjPTA7Yzx1Lmxlbmd0aDtjKyspe3ZhciBoPXVbY10sZz1NYXRoLmZsb29yKChoLW4pKmwpO2lbY109ZlthLmNsYW1wKGcsMCxmLmxlbmd0aC0xKV19cmV0dXJuIGkuYnVmZmVyfWZ1bmN0aW9uIHUodCl7Zm9yKHZhciBlPU1hdGgucm91bmQoNC41KnQpLHI9dCp0LGE9bmV3IEZsb2F0NjRBcnJheSgyKmUrMSksbj0wO248PWEubGVuZ3RoO24rKylhW25dPU1hdGguZXhwKC1NYXRoLnBvdyhuLWUsMikvKDIqcikpL01hdGguc3FydCgyKk1hdGguUEkpKih0LzIpO3JldHVybiBhfWZ1bmN0aW9uIGYodCxlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6dD9cInN0cmluZ1wiPT10eXBlb2YgZT9mdW5jdGlvbihlKXtyZXR1cm4tMSorZVt0XX06ZnVuY3Rpb24ocil7cmV0dXJuK3JbdF0rZX06ZnVuY3Rpb24odCl7cmV0dXJuIDF9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZ2VuZXJhdGVHcmFkaWVudD1mdW5jdGlvbigpe2lmKCEoXCJkb2N1bWVudFwiaW4gcikpcmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudWxsfTt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGU9dC5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIHQuaGVpZ2h0PTUxMix0LndpZHRoPTEsZnVuY3Rpb24ocil7Zm9yKHZhciBhPWUuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAsdC5oZWlnaHQpLG49MCxvPXIuY29sb3JTdG9wcztuPG8ubGVuZ3RoO24rKyl7dmFyIGk9b1tuXSx1PWkucmF0aW8sZj1pLmNvbG9yO2EuYWRkQ29sb3JTdG9wKHUsXCJyZ2JhKFwiK2ZbMF0rXCIsIFwiK2ZbMV0rXCIsIFwiK2ZbMl0rXCIsIFwiK2ZbM10rXCIpXCIpfXJldHVybiBlLmZpbGxTdHlsZT1hLGUuZmlsbFJlY3QoMCwwLDEsdC5oZWlnaHQpLGUuZ2V0SW1hZ2VEYXRhKDAsMCwxLHQuaGVpZ2h0KS5kYXRhfX0oKSxlLmNhbGN1bGF0ZUhlYXRtYXBJbnRlbnNpdHlJbmZvPW4sZS5kcmF3SGVhdG1hcD1vLGUuY3JlYXRlSGVhdG1hcEltYWdlRGF0YT1pLGUuY3JlYXRlS2VybmVsPXUsZS5jcmVhdGVWYWx1ZUZ1bmN0aW9uPWZ9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../../../core/Accessor */ \"./node_modules/arcgis-js-api/core/Accessor.js\"),__webpack_require__(/*! ../../../../../core/HandleOwner */ \"./node_modules/arcgis-js-api/core/HandleOwner.js\"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../support/Evented */ \"./node_modules/arcgis-js-api/views/2d/support/Evented.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,p,n,i,l){Object.defineProperty(t,\"__esModule\",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on(\"update\",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,\"supportsTileUpdates\",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,\"spatialReference\",{get:function(){var e=this.get(\"tileStore.spatialReference\");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),o([i.property({readOnly:!0})],t.prototype,\"supportsTileUpdates\",null),o([i.property({constructOnly:!0})],t.prototype,\"remoteClient\",void 0),o([i.property({constructOnly:!0})],t.prototype,\"service\",void 0),o([i.property({dependsOn:[\"tileStore.spatialReference\"]})],t.prototype,\"spatialReference\",null),o([i.property({constructOnly:!0})],t.prototype,\"tileStore\",void 0),t=o([i.subclass()],t)}(i.declared(p,n,l.default));t.default=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9sYXllcnMvZmVhdHVyZXMvcHJvY2Vzc29ycy9CYXNlUHJvY2Vzc29yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvMmQvbGF5ZXJzL2ZlYXR1cmVzL3Byb2Nlc3NvcnMvQmFzZVByb2Nlc3Nvci5qcz9lYmM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuLi8uLi8uLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9kZWNsYXJlRXh0ZW5kc0hlbHBlclwiLFwiLi4vLi4vLi4vLi4vLi4vY29yZS90c1N1cHBvcnQvZGVjb3JhdGVIZWxwZXJcIixcIi4uLy4uLy4uLy4uLy4uL2NvcmUvQWNjZXNzb3JcIixcIi4uLy4uLy4uLy4uLy4uL2NvcmUvSGFuZGxlT3duZXJcIixcIi4uLy4uLy4uLy4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnNcIixcIi4uLy4uLy4uL3N1cHBvcnQvRXZlbnRlZFwiXSxmdW5jdGlvbihlLHQscixvLHAsbixpLGwpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4gbnVsbCE9PWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfXJldHVybiByKHQsZSksdC5wcm90b3R5cGUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3RoaXMuaGFuZGxlcy5hZGQoW3RoaXMudGlsZVN0b3JlLm9uKFwidXBkYXRlXCIsdGhpcy5vblRpbGVVcGRhdGUuYmluZCh0aGlzKSldKX0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe30sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwic3VwcG9ydHNUaWxlVXBkYXRlc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJzcGF0aWFsUmVmZXJlbmNlXCIse2dldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZ2V0KFwidGlsZVN0b3JlLnNwYXRpYWxSZWZlcmVuY2VcIik7cmV0dXJuIGUmJmUudG9KU09OKCl8fG51bGx9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksbyhbaS5wcm9wZXJ0eSh7cmVhZE9ubHk6ITB9KV0sdC5wcm90b3R5cGUsXCJzdXBwb3J0c1RpbGVVcGRhdGVzXCIsbnVsbCksbyhbaS5wcm9wZXJ0eSh7Y29uc3RydWN0T25seTohMH0pXSx0LnByb3RvdHlwZSxcInJlbW90ZUNsaWVudFwiLHZvaWQgMCksbyhbaS5wcm9wZXJ0eSh7Y29uc3RydWN0T25seTohMH0pXSx0LnByb3RvdHlwZSxcInNlcnZpY2VcIix2b2lkIDApLG8oW2kucHJvcGVydHkoe2RlcGVuZHNPbjpbXCJ0aWxlU3RvcmUuc3BhdGlhbFJlZmVyZW5jZVwiXX0pXSx0LnByb3RvdHlwZSxcInNwYXRpYWxSZWZlcmVuY2VcIixudWxsKSxvKFtpLnByb3BlcnR5KHtjb25zdHJ1Y3RPbmx5OiEwfSldLHQucHJvdG90eXBlLFwidGlsZVN0b3JlXCIsdm9pZCAwKSx0PW8oW2kuc3ViY2xhc3MoKV0sdCl9KGkuZGVjbGFyZWQocCxuLGwuZGVmYXVsdCkpO3QuZGVmYXVsdD1zfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../../../renderers/support/heatmapUtils */ \"./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js\"),__webpack_require__(/*! ./BaseProcessor */ \"./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,p){Object.defineProperty(r,\"__esModule\",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=\"heatmap\",r.updating=!1,r}return t(r,e),Object.defineProperty(r.prototype,\"queryInfo\",{get:function(){var e=this.configuration,r=e.renderer,t=e.definitionExpression,o=e.outFields,n=e.gdbVersion,i=e.historicMoment;return{definitionExpression:t,orderByFields:null,outFields:o,pixelBuffer:Math.round(4.5*r.blurRadius),returnCentroid:!1,returnGeometry:!0,gdbVersion:n,historicMoment:i}},enumerable:!0,configurable:!0}),r.prototype.onTileData=function(e,r){if(r&&r.addOrUpdate&&r.addOrUpdate.length>0){var t=i.calculateHeatmapIntensityInfo(r.addOrUpdate,this.configuration.renderer,512,512);return this.remoteClient.invoke(\"tileRenderer.onTileData\",{tileKey:e.key.id,intensityInfo:t},[t.matrix])}return this.remoteClient.invoke(\"tileRenderer.onTileData\",{tileKey:e.key.id,intensityInfo:null})},r.prototype.onTileError=function(e,r){return this.remoteClient.invoke(\"tileRenderer.onTileError\",{tileKey:e.id,error:r})},r.prototype.onTileUpdate=function(e){},o([n.property()],r.prototype,\"configuration\",void 0),o([n.property({constructOnly:!0})],r.prototype,\"queryInfo\",null),o([n.property()],r.prototype,\"updating\",void 0),r=o([n.subclass()],r)}(n.declared(p.default));r.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9sYXllcnMvZmVhdHVyZXMvcHJvY2Vzc29ycy9IZWF0bWFwUHJvY2Vzc29yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvMmQvbGF5ZXJzL2ZlYXR1cmVzL3Byb2Nlc3NvcnMvSGVhdG1hcFByb2Nlc3Nvci5qcz85NzBlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuLi8uLi8uLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9kZWNsYXJlRXh0ZW5kc0hlbHBlclwiLFwiLi4vLi4vLi4vLi4vLi4vY29yZS90c1N1cHBvcnQvZGVjb3JhdGVIZWxwZXJcIixcIi4uLy4uLy4uLy4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnNcIixcIi4uLy4uLy4uLy4uLy4uL3JlbmRlcmVycy9zdXBwb3J0L2hlYXRtYXBVdGlsc1wiLFwiLi9CYXNlUHJvY2Vzc29yXCJdLGZ1bmN0aW9uKGUscix0LG8sbixpLHApe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHIoKXt2YXIgcj1udWxsIT09ZSYmZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXM7cmV0dXJuIHIudHlwZT1cImhlYXRtYXBcIixyLnVwZGF0aW5nPSExLHJ9cmV0dXJuIHQocixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoci5wcm90b3R5cGUsXCJxdWVyeUluZm9cIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb25maWd1cmF0aW9uLHI9ZS5yZW5kZXJlcix0PWUuZGVmaW5pdGlvbkV4cHJlc3Npb24sbz1lLm91dEZpZWxkcyxuPWUuZ2RiVmVyc2lvbixpPWUuaGlzdG9yaWNNb21lbnQ7cmV0dXJue2RlZmluaXRpb25FeHByZXNzaW9uOnQsb3JkZXJCeUZpZWxkczpudWxsLG91dEZpZWxkczpvLHBpeGVsQnVmZmVyOk1hdGgucm91bmQoNC41KnIuYmx1clJhZGl1cykscmV0dXJuQ2VudHJvaWQ6ITEscmV0dXJuR2VvbWV0cnk6ITAsZ2RiVmVyc2lvbjpuLGhpc3RvcmljTW9tZW50Oml9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHIucHJvdG90eXBlLm9uVGlsZURhdGE9ZnVuY3Rpb24oZSxyKXtpZihyJiZyLmFkZE9yVXBkYXRlJiZyLmFkZE9yVXBkYXRlLmxlbmd0aD4wKXt2YXIgdD1pLmNhbGN1bGF0ZUhlYXRtYXBJbnRlbnNpdHlJbmZvKHIuYWRkT3JVcGRhdGUsdGhpcy5jb25maWd1cmF0aW9uLnJlbmRlcmVyLDUxMiw1MTIpO3JldHVybiB0aGlzLnJlbW90ZUNsaWVudC5pbnZva2UoXCJ0aWxlUmVuZGVyZXIub25UaWxlRGF0YVwiLHt0aWxlS2V5OmUua2V5LmlkLGludGVuc2l0eUluZm86dH0sW3QubWF0cml4XSl9cmV0dXJuIHRoaXMucmVtb3RlQ2xpZW50Lmludm9rZShcInRpbGVSZW5kZXJlci5vblRpbGVEYXRhXCIse3RpbGVLZXk6ZS5rZXkuaWQsaW50ZW5zaXR5SW5mbzpudWxsfSl9LHIucHJvdG90eXBlLm9uVGlsZUVycm9yPWZ1bmN0aW9uKGUscil7cmV0dXJuIHRoaXMucmVtb3RlQ2xpZW50Lmludm9rZShcInRpbGVSZW5kZXJlci5vblRpbGVFcnJvclwiLHt0aWxlS2V5OmUuaWQsZXJyb3I6cn0pfSxyLnByb3RvdHlwZS5vblRpbGVVcGRhdGU9ZnVuY3Rpb24oZSl7fSxvKFtuLnByb3BlcnR5KCldLHIucHJvdG90eXBlLFwiY29uZmlndXJhdGlvblwiLHZvaWQgMCksbyhbbi5wcm9wZXJ0eSh7Y29uc3RydWN0T25seTohMH0pXSxyLnByb3RvdHlwZSxcInF1ZXJ5SW5mb1wiLG51bGwpLG8oW24ucHJvcGVydHkoKV0sci5wcm90b3R5cGUsXCJ1cGRhdGluZ1wiLHZvaWQgMCkscj1vKFtuLnN1YmNsYXNzKCldLHIpfShuLmRlY2xhcmVkKHAuZGVmYXVsdCkpO3IuZGVmYXVsdD1hfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js\n");

/***/ })

}]);