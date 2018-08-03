(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/portal/Bookmark':"./node_modules/arcgis-js-api/portal/Bookmark.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/arcgis-js-api/portal/Bookmark.js":
/*!*******************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/Bookmark.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../Viewpoint */ \"./node_modules/arcgis-js-api/Viewpoint.js\"),__webpack_require__(/*! ../core/JSONSupport */ \"./node_modules/arcgis-js-api/core/JSONSupport.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){return t.createSubclass({declaredClass:\"esri.portal.Bookmark\",properties:{description:{type:String,json:{write:!0}},thumbnailSource:{type:String,json:{write:!0}},title:{type:String,json:{write:!0}},viewpoint:{type:e,json:{write:!0}}}})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9wb3J0YWwvQm9va21hcmsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9wb3J0YWwvQm9va21hcmsuanM/N2VkZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wiLi4vVmlld3BvaW50XCIsXCIuLi9jb3JlL0pTT05TdXBwb3J0XCJdLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQuY3JlYXRlU3ViY2xhc3Moe2RlY2xhcmVkQ2xhc3M6XCJlc3JpLnBvcnRhbC5Cb29rbWFya1wiLHByb3BlcnRpZXM6e2Rlc2NyaXB0aW9uOnt0eXBlOlN0cmluZyxqc29uOnt3cml0ZTohMH19LHRodW1ibmFpbFNvdXJjZTp7dHlwZTpTdHJpbmcsanNvbjp7d3JpdGU6ITB9fSx0aXRsZTp7dHlwZTpTdHJpbmcsanNvbjp7d3JpdGU6ITB9fSx2aWV3cG9pbnQ6e3R5cGU6ZSxqc29uOnt3cml0ZTohMH19fX0pfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/portal/Bookmark.js\n");

/***/ })

}]);