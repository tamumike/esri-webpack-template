(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/views/3d/layers/MapImageLayerView3D':"./node_modules/arcgis-js-api/views/3d/layers/MapImageLayerView3D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/arcgis-js-api/views/3d/layers/MapImageLayerView3D.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/MapImageLayerView3D.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../layers/support/ExportImageParameters */ \"./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js\"),__webpack_require__(/*! ./DynamicLayerView3D */ \"./node_modules/arcgis-js-api/views/3d/layers/DynamicLayerView3D.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,s,i,o){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._exportImageParameters=null,r._imageVersion=null,r}return t(r,e),r.prototype.initialize=function(){var e=this;this._exportImageParameters=new i({layer:this.layer}),this._handles.add(this._exportImageParameters.watch(\"version\",function(r){e._imageVersion!==r&&(e._imageVersion=r,e.refetch())}))},r.prototype.destroy=function(){this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)},r.prototype.beforeFetch=function(){this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale),this._imageVersion=this._exportImageParameters.version},r.prototype.getPopupData=function(e){var r=this.view.scale;return this.layer.allSublayers.filter(function(e){var t=0===e.minScale||r<=e.minScale,a=0===e.maxScale||r>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&a}).map(function(r){var t=r.createQuery();return t.geometry=e,t.outFields=r.popupTemplate.requiredFields,r.queryFeatures(t).then(function(e){return e.features})})},a([s.property()],r.prototype,\"layer\",void 0),r=a([s.subclass(\"esri.views.3d.layers.MapImageLayerView3D\")],r)}(s.declared(o))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvTWFwSW1hZ2VMYXllclZpZXczRC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcmNnaXMtanMtYXBpL3ZpZXdzLzNkL2xheWVycy9NYXBJbWFnZUxheWVyVmlldzNELmpzPzQxODMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09QWVJJR0hUIMKpIDIwMTggRXNyaVxuLy9cbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQgdW5kZXIgdGhlIGNvcHlyaWdodCBsYXdzIG9mIHRoZSBVbml0ZWQgU3RhdGVzXG4vLyBhbmQgYXBwbGljYWJsZSBpbnRlcm5hdGlvbmFsIGxhd3MsIHRyZWF0aWVzLCBhbmQgY29udmVudGlvbnMuXG4vL1xuLy8gVGhpcyBtYXRlcmlhbCBpcyBsaWNlbnNlZCBmb3IgdXNlIHVuZGVyIHRoZSBFc3JpIE1hc3RlciBMaWNlbnNlXG4vLyBBZ3JlZW1lbnQgKE1MQSksIGFuZCBpcyBib3VuZCBieSB0aGUgdGVybXMgb2YgdGhhdCBhZ3JlZW1lbnQuXG4vLyBZb3UgbWF5IHJlZGlzdHJpYnV0ZSBhbmQgdXNlIHRoaXMgY29kZSB3aXRob3V0IG1vZGlmaWNhdGlvbixcbi8vIHByb3ZpZGVkIHlvdSBhZGhlcmUgdG8gdGhlIHRlcm1zIG9mIHRoZSBNTEEgYW5kIGluY2x1ZGUgdGhpc1xuLy8gY29weXJpZ2h0IG5vdGljZS5cbi8vXG4vLyBTZWUgdXNlIHJlc3RyaWN0aW9ucyBhdCBodHRwOi8vd3d3LmVzcmkuY29tL2xlZ2FsL3BkZnMvbWxhX2UyMDRfZTMwMC9lbmdsaXNoXG4vL1xuLy8gRm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24sIGNvbnRhY3Q6XG4vLyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4vLyBBdHRuOiBDb250cmFjdHMgYW5kIExlZ2FsIFNlcnZpY2VzIERlcGFydG1lbnRcbi8vIDM4MCBOZXcgWW9yayBTdHJlZXRcbi8vIFJlZGxhbmRzLCBDYWxpZm9ybmlhLCBVU0EgOTIzNzNcbi8vIFVTQVxuLy9cbi8vIGVtYWlsOiBjb250cmFjdHNAZXNyaS5jb21cbi8vXG4vLyBTZWUgaHR0cDovL2pzLmFyY2dpcy5jb20vNC44L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cblxuZGVmaW5lKFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIi4uLy4uLy4uL2NvcmUvdHNTdXBwb3J0L2V4dGVuZHNIZWxwZXJcIixcIi4uLy4uLy4uL2NvcmUvdHNTdXBwb3J0L2RlY29yYXRlSGVscGVyXCIsXCIuLi8uLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzXCIsXCIuLi8uLi8uLi9sYXllcnMvc3VwcG9ydC9FeHBvcnRJbWFnZVBhcmFtZXRlcnNcIixcIi4vRHluYW1pY0xheWVyVmlldzNEXCJdLGZ1bmN0aW9uKGUscix0LGEscyxpLG8pe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiByKCl7dmFyIHI9bnVsbCE9PWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzO3JldHVybiByLl9leHBvcnRJbWFnZVBhcmFtZXRlcnM9bnVsbCxyLl9pbWFnZVZlcnNpb249bnVsbCxyfXJldHVybiB0KHIsZSksci5wcm90b3R5cGUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5fZXhwb3J0SW1hZ2VQYXJhbWV0ZXJzPW5ldyBpKHtsYXllcjp0aGlzLmxheWVyfSksdGhpcy5faGFuZGxlcy5hZGQodGhpcy5fZXhwb3J0SW1hZ2VQYXJhbWV0ZXJzLndhdGNoKFwidmVyc2lvblwiLGZ1bmN0aW9uKHIpe2UuX2ltYWdlVmVyc2lvbiE9PXImJihlLl9pbWFnZVZlcnNpb249cixlLnJlZmV0Y2goKSl9KSl9LHIucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMmJih0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMubGF5ZXI9bnVsbCx0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMuZGVzdHJveSgpLHRoaXMuX2V4cG9ydEltYWdlUGFyYW1ldGVycz1udWxsKX0sci5wcm90b3R5cGUuYmVmb3JlRmV0Y2g9ZnVuY3Rpb24oKXt0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMuc2NhbGUhPT10aGlzLnZpZXcuc2NhbGUmJih0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMuc2NhbGU9dGhpcy52aWV3LnNjYWxlKSx0aGlzLl9pbWFnZVZlcnNpb249dGhpcy5fZXhwb3J0SW1hZ2VQYXJhbWV0ZXJzLnZlcnNpb259LHIucHJvdG90eXBlLmdldFBvcHVwRGF0YT1mdW5jdGlvbihlKXt2YXIgcj10aGlzLnZpZXcuc2NhbGU7cmV0dXJuIHRoaXMubGF5ZXIuYWxsU3VibGF5ZXJzLmZpbHRlcihmdW5jdGlvbihlKXt2YXIgdD0wPT09ZS5taW5TY2FsZXx8cjw9ZS5taW5TY2FsZSxhPTA9PT1lLm1heFNjYWxlfHxyPj1lLm1heFNjYWxlO3JldHVybiBlLnBvcHVwVGVtcGxhdGUmJmUucG9wdXBFbmFibGVkJiZlLnZpc2libGUmJnQmJmF9KS5tYXAoZnVuY3Rpb24ocil7dmFyIHQ9ci5jcmVhdGVRdWVyeSgpO3JldHVybiB0Lmdlb21ldHJ5PWUsdC5vdXRGaWVsZHM9ci5wb3B1cFRlbXBsYXRlLnJlcXVpcmVkRmllbGRzLHIucXVlcnlGZWF0dXJlcyh0KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBlLmZlYXR1cmVzfSl9KX0sYShbcy5wcm9wZXJ0eSgpXSxyLnByb3RvdHlwZSxcImxheWVyXCIsdm9pZCAwKSxyPWEoW3Muc3ViY2xhc3MoXCJlc3JpLnZpZXdzLjNkLmxheWVycy5NYXBJbWFnZUxheWVyVmlldzNEXCIpXSxyKX0ocy5kZWNsYXJlZChvKSl9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/3d/layers/MapImageLayerView3D.js\n");

/***/ })

}]);