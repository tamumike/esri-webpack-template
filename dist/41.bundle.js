(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/layers/mixins/SceneService':"./node_modules/arcgis-js-api/layers/mixins/SceneService.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/SceneService.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n//  copyright\n\n/**\n             * The copyright text as defined by the scene service.\n             *\n             * @memberof module:esri/layers/mixins/SceneService\n             * @name copyright\n             * @type {string}\n             */\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../request */ \"./node_modules/arcgis-js-api/request.js\"),__webpack_require__(/*! ../../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../../core/Logger */ \"./node_modules/arcgis-js-api/core/Logger.js\"),__webpack_require__(/*! ../../core/MultiOriginJSONSupport */ \"./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js\"),__webpack_require__(/*! ../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../core/urlUtils */ \"./node_modules/arcgis-js-api/core/urlUtils.js\"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../geometry/Extent */ \"./node_modules/arcgis-js-api/geometry/Extent.js\"),__webpack_require__(/*! ../../geometry/HeightModelInfo */ \"./node_modules/arcgis-js-api/geometry/HeightModelInfo.js\"),__webpack_require__(/*! ../../geometry/SpatialReference */ \"./node_modules/arcgis-js-api/geometry/SpatialReference.js\"),__webpack_require__(/*! ../Layer */ \"./node_modules/arcgis-js-api/layers/Layer.js\"),__webpack_require__(/*! ./ArcGISService */ \"./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js\"),__webpack_require__(/*! ./OperationalLayer */ \"./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js\"),__webpack_require__(/*! ./PortalLayer */ \"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js\"),__webpack_require__(/*! ../support/arcgisLayerUrl */ \"./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,l,a,p,s,u,d,y,c,h,f,v,m,g){var S=l.getLogger(\"esri.layers.mixins.SceneService\");return function(r){function l(){var e=null!==r&&r.apply(this,arguments)||this;return e.blendMode=null,e.spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.version={major:Number.NaN,minor:Number.NaN,versionString:\"\"},e.copyright=null,e.sublayerTitleMode=\"item-title\",e.title=null,e.layerId=null,e}return t(l,r),l.prototype.readSpatialReference=function(e,r){return this._readSpatialReference(r)},l.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return c.fromJSON(e.spatialReference);var r=e.store,t=r.indexCRS||r.geographicCRS,o=t&&parseInt(t.substring(t.lastIndexOf(\"/\")+1,t.length),10);return null!=o?new c(o):null},l.prototype.readFullExtent=function(e,r){var t=r.store,o=this._readSpatialReference(r);return null==o||null==t||null==t.extent?null:new d({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:o})},l.prototype.readVersion=function(e,r){var t=r.store,o=null!=t.version?t.version.toString():\"\",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(\".\");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},l.prototype.readTitlePortalItem=function(e,r){return\"item-title\"!==this.sublayerTitleMode?void 0:e},l.prototype.readTitleService=function(e,r){var t=this.portalItem&&this.portalItem.title;if(\"item-title\"===this.sublayerTitleMode)return g.titleFromUrlAndName(this.url,r.name);var o=r.name||g.parse(this.url).title;return\"item-title-and-service-name\"===this.sublayerTitleMode&&t&&(o=t+\" - \"+o),g.cleanTitle(o)},l.prototype.readLayerId=function(e,r){return r.id},Object.defineProperty(l.prototype,\"url\",{set:function(e){var r=g.sanitizeUrlWithLayerId(this,e,S);this._set(\"url\",r.url),null!=r.layerId&&this._set(\"layerId\",r.layerId)},enumerable:!0,configurable:!0}),l.prototype.writeUrl=function(e,r){g.writeUrlWithLayerId(this,e,\"layers\",r)},Object.defineProperty(l.prototype,\"parsedUrl\",{get:function(){var e=this._get(\"url\");if(!e)return null;var r=s.urlToObject(e);return null!=this.layerId&&g.match.test(r.path)&&(r.path=r.path+\"/layers/\"+this.layerId),r},enumerable:!0,configurable:!0}),l.prototype.readRootNode=function(e,r){return r.store.rootNode},l.prototype._verifyRootNodeAndUpdateExtent=function(){var e=this;return this._fetchRootNode().then(function(r){return e._updateExtentFromRootNode(r)})},l.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var r=e.mbs[2],t=e.mbs[3];this.fullExtent.zmin=r-t,this.fullExtent.zmax=r+t}},l.prototype._fetchRootNode=function(){if(!this.rootNode)return p.resolve();var e=s.join(this.parsedUrl.path,this.rootNode);return n(e,{query:{f:\"json\"},responseType:\"json\"}).then(function(e){return e.data}).catch(function(r){throw new i(\"sceneservice:root-node-missing\",\"Root node missing.\",{error:r,url:e})})},l.prototype._fetchService=function(){var e,r=this;return e=null==this.layerId&&/SceneServer\\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(e){null!=e&&(r.layerId=e)}):p.resolve(),e.then(function(){return r._fetchServiceLayer()})},l.prototype._fetchFirstLayerId=function(){return n(this.url,{query:{f:\"json\"},callbackParamName:\"callback\",responseType:\"json\"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},l.prototype._fetchServiceLayer=function(){var e=this;return n(this.parsedUrl.path,{query:{f:\"json\"},responseType:\"json\"}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,\"https:\"));var t=r.data;e.read(t,{origin:\"service\",url:e.parsedUrl}),e._validateLayer(t)})},l.prototype._validateLayer=function(e){},l.prototype.createGraphicsController=function(r){var t=this;r.layer=this;var o=p.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(0), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(16), __webpack_require__.e(17), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(29), __webpack_require__.e(31), __webpack_require__.e(37), __webpack_require__.e(100)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../graphics/controllers/I3SOnDemandController */ \"./node_modules/arcgis-js-api/layers/graphics/controllers/I3SOnDemandController.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)}).then(function(e){return new e(r)});return o.then(function(e){t.emit(\"graphics-controller-create\",{graphicsController:e})}),o},o([u.shared({id:{json:{origins:{service:{read:!1},\"portal-item\":{read:!1}}}}})],l.prototype,\"properties\",void 0),o([u.property({type:c})],l.prototype,\"spatialReference\",void 0),o([u.reader(\"spatialReference\",[\"spatialReference\",\"store.indexCRS\",\"store.geographicCRS\"])],l.prototype,\"readSpatialReference\",null),o([u.property({type:d})],l.prototype,\"fullExtent\",void 0),o([u.reader(\"fullExtent\",[\"store.extent\",\"spatialReference\",\"store.indexCRS\",\"store.geographicCRS\"])],l.prototype,\"readFullExtent\",null),o([u.property({readOnly:!0,type:y})],l.prototype,\"heightModelInfo\",void 0),o([u.property({readOnly:!0})],l.prototype,\"version\",void 0),o([u.reader(\"version\",[\"store.version\"])],l.prototype,\"readVersion\",null),o([u.property({type:String,json:{read:{source:\"copyrightText\"}}})],l.prototype,\"copyright\",void 0),o([u.property({type:String})],l.prototype,\"sublayerTitleMode\",void 0),o([u.property({type:String})],l.prototype,\"title\",void 0),o([u.reader(\"portal-item\",\"title\")],l.prototype,\"readTitlePortalItem\",null),o([u.reader(\"service\",\"title\",[\"name\"])],l.prototype,\"readTitleService\",null),o([u.property({type:Number})],l.prototype,\"layerId\",void 0),o([u.reader(\"service\",\"layerId\",[\"id\"])],l.prototype,\"readLayerId\",null),o([u.property()],l.prototype,\"url\",null),o([u.writer(\"url\")],l.prototype,\"writeUrl\",null),o([u.property({dependsOn:[\"layerId\"]})],l.prototype,\"parsedUrl\",null),o([u.property()],l.prototype,\"store\",void 0),o([u.property({type:String})],l.prototype,\"rootNode\",void 0),o([u.reader(\"rootNode\",[\"store.rootNode\"])],l.prototype,\"readRootNode\",null),l=o([u.subclass(\"esri.layers.mixins.SceneService\")],l)}(u.declared(h,f,a,v,m))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9sYXllcnMvbWl4aW5zL1NjZW5lU2VydmljZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcmNnaXMtanMtYXBpL2xheWVycy9taXhpbnMvU2NlbmVTZXJ2aWNlLmpzPzI0ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09QWVJJR0hUIMKpIDIwMTggRXNyaVxuLy9cbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQgdW5kZXIgdGhlIGNvcHlyaWdodCBsYXdzIG9mIHRoZSBVbml0ZWQgU3RhdGVzXG4vLyBhbmQgYXBwbGljYWJsZSBpbnRlcm5hdGlvbmFsIGxhd3MsIHRyZWF0aWVzLCBhbmQgY29udmVudGlvbnMuXG4vL1xuLy8gVGhpcyBtYXRlcmlhbCBpcyBsaWNlbnNlZCBmb3IgdXNlIHVuZGVyIHRoZSBFc3JpIE1hc3RlciBMaWNlbnNlXG4vLyBBZ3JlZW1lbnQgKE1MQSksIGFuZCBpcyBib3VuZCBieSB0aGUgdGVybXMgb2YgdGhhdCBhZ3JlZW1lbnQuXG4vLyBZb3UgbWF5IHJlZGlzdHJpYnV0ZSBhbmQgdXNlIHRoaXMgY29kZSB3aXRob3V0IG1vZGlmaWNhdGlvbixcbi8vIHByb3ZpZGVkIHlvdSBhZGhlcmUgdG8gdGhlIHRlcm1zIG9mIHRoZSBNTEEgYW5kIGluY2x1ZGUgdGhpc1xuLy8gY29weXJpZ2h0IG5vdGljZS5cbi8vXG4vLyBTZWUgdXNlIHJlc3RyaWN0aW9ucyBhdCBodHRwOi8vd3d3LmVzcmkuY29tL2xlZ2FsL3BkZnMvbWxhX2UyMDRfZTMwMC9lbmdsaXNoXG4vL1xuLy8gRm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24sIGNvbnRhY3Q6XG4vLyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4vLyBBdHRuOiBDb250cmFjdHMgYW5kIExlZ2FsIFNlcnZpY2VzIERlcGFydG1lbnRcbi8vIDM4MCBOZXcgWW9yayBTdHJlZXRcbi8vIFJlZGxhbmRzLCBDYWxpZm9ybmlhLCBVU0EgOTIzNzNcbi8vIFVTQVxuLy9cbi8vIGVtYWlsOiBjb250cmFjdHNAZXNyaS5jb21cbi8vXG4vLyBTZWUgaHR0cDovL2pzLmFyY2dpcy5jb20vNC44L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cblxuLy8gIGNvcHlyaWdodFxuXG4vKipcbiAgICAgICAgICAgICAqIFRoZSBjb3B5cmlnaHQgdGV4dCBhcyBkZWZpbmVkIGJ5IHRoZSBzY2VuZSBzZXJ2aWNlLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6ZXNyaS9sYXllcnMvbWl4aW5zL1NjZW5lU2VydmljZVxuICAgICAgICAgICAgICogQG5hbWUgY29weXJpZ2h0XG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgICAgICovXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuLi8uLi9jb3JlL3RzU3VwcG9ydC9kZWNsYXJlRXh0ZW5kc0hlbHBlclwiLFwiLi4vLi4vY29yZS90c1N1cHBvcnQvZGVjb3JhdGVIZWxwZXJcIixcIi4uLy4uL3JlcXVlc3RcIixcIi4uLy4uL2NvcmUvRXJyb3JcIixcIi4uLy4uL2NvcmUvTG9nZ2VyXCIsXCIuLi8uLi9jb3JlL011bHRpT3JpZ2luSlNPTlN1cHBvcnRcIixcIi4uLy4uL2NvcmUvcHJvbWlzZVV0aWxzXCIsXCIuLi8uLi9jb3JlL3VybFV0aWxzXCIsXCIuLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzXCIsXCIuLi8uLi9nZW9tZXRyeS9FeHRlbnRcIixcIi4uLy4uL2dlb21ldHJ5L0hlaWdodE1vZGVsSW5mb1wiLFwiLi4vLi4vZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZVwiLFwiLi4vTGF5ZXJcIixcIi4vQXJjR0lTU2VydmljZVwiLFwiLi9PcGVyYXRpb25hbExheWVyXCIsXCIuL1BvcnRhbExheWVyXCIsXCIuLi9zdXBwb3J0L2FyY2dpc0xheWVyVXJsXCJdLGZ1bmN0aW9uKGUscix0LG8sbixpLGwsYSxwLHMsdSxkLHksYyxoLGYsdixtLGcpe3ZhciBTPWwuZ2V0TG9nZ2VyKFwiZXNyaS5sYXllcnMubWl4aW5zLlNjZW5lU2VydmljZVwiKTtyZXR1cm4gZnVuY3Rpb24ocil7ZnVuY3Rpb24gbCgpe3ZhciBlPW51bGwhPT1yJiZyLmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpcztyZXR1cm4gZS5ibGVuZE1vZGU9bnVsbCxlLnNwYXRpYWxSZWZlcmVuY2U9bnVsbCxlLmZ1bGxFeHRlbnQ9bnVsbCxlLmhlaWdodE1vZGVsSW5mbz1udWxsLGUudmVyc2lvbj17bWFqb3I6TnVtYmVyLk5hTixtaW5vcjpOdW1iZXIuTmFOLHZlcnNpb25TdHJpbmc6XCJcIn0sZS5jb3B5cmlnaHQ9bnVsbCxlLnN1YmxheWVyVGl0bGVNb2RlPVwiaXRlbS10aXRsZVwiLGUudGl0bGU9bnVsbCxlLmxheWVySWQ9bnVsbCxlfXJldHVybiB0KGwsciksbC5wcm90b3R5cGUucmVhZFNwYXRpYWxSZWZlcmVuY2U9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdGhpcy5fcmVhZFNwYXRpYWxSZWZlcmVuY2Uocil9LGwucHJvdG90eXBlLl9yZWFkU3BhdGlhbFJlZmVyZW5jZT1mdW5jdGlvbihlKXtpZihudWxsIT1lLnNwYXRpYWxSZWZlcmVuY2UpcmV0dXJuIGMuZnJvbUpTT04oZS5zcGF0aWFsUmVmZXJlbmNlKTt2YXIgcj1lLnN0b3JlLHQ9ci5pbmRleENSU3x8ci5nZW9ncmFwaGljQ1JTLG89dCYmcGFyc2VJbnQodC5zdWJzdHJpbmcodC5sYXN0SW5kZXhPZihcIi9cIikrMSx0Lmxlbmd0aCksMTApO3JldHVybiBudWxsIT1vP25ldyBjKG8pOm51bGx9LGwucHJvdG90eXBlLnJlYWRGdWxsRXh0ZW50PWZ1bmN0aW9uKGUscil7dmFyIHQ9ci5zdG9yZSxvPXRoaXMuX3JlYWRTcGF0aWFsUmVmZXJlbmNlKHIpO3JldHVybiBudWxsPT1vfHxudWxsPT10fHxudWxsPT10LmV4dGVudD9udWxsOm5ldyBkKHt4bWluOnQuZXh0ZW50WzBdLHltaW46dC5leHRlbnRbMV0seG1heDp0LmV4dGVudFsyXSx5bWF4OnQuZXh0ZW50WzNdLHNwYXRpYWxSZWZlcmVuY2U6b30pfSxsLnByb3RvdHlwZS5yZWFkVmVyc2lvbj1mdW5jdGlvbihlLHIpe3ZhciB0PXIuc3RvcmUsbz1udWxsIT10LnZlcnNpb24/dC52ZXJzaW9uLnRvU3RyaW5nKCk6XCJcIixuPXttYWpvcjpOdW1iZXIuTmFOLG1pbm9yOk51bWJlci5OYU4sdmVyc2lvblN0cmluZzpvfSxpPW8uc3BsaXQoXCIuXCIpO3JldHVybiBpLmxlbmd0aD49MiYmKG4ubWFqb3I9cGFyc2VJbnQoaVswXSwxMCksbi5taW5vcj1wYXJzZUludChpWzFdLDEwKSksbn0sbC5wcm90b3R5cGUucmVhZFRpdGxlUG9ydGFsSXRlbT1mdW5jdGlvbihlLHIpe3JldHVyblwiaXRlbS10aXRsZVwiIT09dGhpcy5zdWJsYXllclRpdGxlTW9kZT92b2lkIDA6ZX0sbC5wcm90b3R5cGUucmVhZFRpdGxlU2VydmljZT1mdW5jdGlvbihlLHIpe3ZhciB0PXRoaXMucG9ydGFsSXRlbSYmdGhpcy5wb3J0YWxJdGVtLnRpdGxlO2lmKFwiaXRlbS10aXRsZVwiPT09dGhpcy5zdWJsYXllclRpdGxlTW9kZSlyZXR1cm4gZy50aXRsZUZyb21VcmxBbmROYW1lKHRoaXMudXJsLHIubmFtZSk7dmFyIG89ci5uYW1lfHxnLnBhcnNlKHRoaXMudXJsKS50aXRsZTtyZXR1cm5cIml0ZW0tdGl0bGUtYW5kLXNlcnZpY2UtbmFtZVwiPT09dGhpcy5zdWJsYXllclRpdGxlTW9kZSYmdCYmKG89dCtcIiAtIFwiK28pLGcuY2xlYW5UaXRsZShvKX0sbC5wcm90b3R5cGUucmVhZExheWVySWQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gci5pZH0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGwucHJvdG90eXBlLFwidXJsXCIse3NldDpmdW5jdGlvbihlKXt2YXIgcj1nLnNhbml0aXplVXJsV2l0aExheWVySWQodGhpcyxlLFMpO3RoaXMuX3NldChcInVybFwiLHIudXJsKSxudWxsIT1yLmxheWVySWQmJnRoaXMuX3NldChcImxheWVySWRcIixyLmxheWVySWQpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGwucHJvdG90eXBlLndyaXRlVXJsPWZ1bmN0aW9uKGUscil7Zy53cml0ZVVybFdpdGhMYXllcklkKHRoaXMsZSxcImxheWVyc1wiLHIpfSxPYmplY3QuZGVmaW5lUHJvcGVydHkobC5wcm90b3R5cGUsXCJwYXJzZWRVcmxcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fZ2V0KFwidXJsXCIpO2lmKCFlKXJldHVybiBudWxsO3ZhciByPXMudXJsVG9PYmplY3QoZSk7cmV0dXJuIG51bGwhPXRoaXMubGF5ZXJJZCYmZy5tYXRjaC50ZXN0KHIucGF0aCkmJihyLnBhdGg9ci5wYXRoK1wiL2xheWVycy9cIit0aGlzLmxheWVySWQpLHJ9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksbC5wcm90b3R5cGUucmVhZFJvb3ROb2RlPWZ1bmN0aW9uKGUscil7cmV0dXJuIHIuc3RvcmUucm9vdE5vZGV9LGwucHJvdG90eXBlLl92ZXJpZnlSb290Tm9kZUFuZFVwZGF0ZUV4dGVudD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMuX2ZldGNoUm9vdE5vZGUoKS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiBlLl91cGRhdGVFeHRlbnRGcm9tUm9vdE5vZGUocil9KX0sbC5wcm90b3R5cGUuX3VwZGF0ZUV4dGVudEZyb21Sb290Tm9kZT1mdW5jdGlvbihlKXtpZihudWxsIT10aGlzLmZ1bGxFeHRlbnQmJiF0aGlzLmZ1bGxFeHRlbnQuaGFzWiYmbnVsbCE9ZSYmQXJyYXkuaXNBcnJheShlLm1icykmJjQ9PT1lLm1icy5sZW5ndGgpe3ZhciByPWUubWJzWzJdLHQ9ZS5tYnNbM107dGhpcy5mdWxsRXh0ZW50LnptaW49ci10LHRoaXMuZnVsbEV4dGVudC56bWF4PXIrdH19LGwucHJvdG90eXBlLl9mZXRjaFJvb3ROb2RlPWZ1bmN0aW9uKCl7aWYoIXRoaXMucm9vdE5vZGUpcmV0dXJuIHAucmVzb2x2ZSgpO3ZhciBlPXMuam9pbih0aGlzLnBhcnNlZFVybC5wYXRoLHRoaXMucm9vdE5vZGUpO3JldHVybiBuKGUse3F1ZXJ5OntmOlwianNvblwifSxyZXNwb25zZVR5cGU6XCJqc29uXCJ9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBlLmRhdGF9KS5jYXRjaChmdW5jdGlvbihyKXt0aHJvdyBuZXcgaShcInNjZW5lc2VydmljZTpyb290LW5vZGUtbWlzc2luZ1wiLFwiUm9vdCBub2RlIG1pc3NpbmcuXCIse2Vycm9yOnIsdXJsOmV9KX0pfSxsLnByb3RvdHlwZS5fZmV0Y2hTZXJ2aWNlPWZ1bmN0aW9uKCl7dmFyIGUscj10aGlzO3JldHVybiBlPW51bGw9PXRoaXMubGF5ZXJJZCYmL1NjZW5lU2VydmVyXFwvKiQvaS50ZXN0KHRoaXMudXJsKT90aGlzLl9mZXRjaEZpcnN0TGF5ZXJJZCgpLnRoZW4oZnVuY3Rpb24oZSl7bnVsbCE9ZSYmKHIubGF5ZXJJZD1lKX0pOnAucmVzb2x2ZSgpLGUudGhlbihmdW5jdGlvbigpe3JldHVybiByLl9mZXRjaFNlcnZpY2VMYXllcigpfSl9LGwucHJvdG90eXBlLl9mZXRjaEZpcnN0TGF5ZXJJZD1mdW5jdGlvbigpe3JldHVybiBuKHRoaXMudXJsLHtxdWVyeTp7ZjpcImpzb25cIn0sY2FsbGJhY2tQYXJhbU5hbWU6XCJjYWxsYmFja1wiLHJlc3BvbnNlVHlwZTpcImpzb25cIn0pLnRoZW4oZnVuY3Rpb24oZSl7aWYoZS5kYXRhJiZBcnJheS5pc0FycmF5KGUuZGF0YS5sYXllcnMpJiZlLmRhdGEubGF5ZXJzLmxlbmd0aD4wKXJldHVybiBlLmRhdGEubGF5ZXJzWzBdLmlkfSl9LGwucHJvdG90eXBlLl9mZXRjaFNlcnZpY2VMYXllcj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIG4odGhpcy5wYXJzZWRVcmwucGF0aCx7cXVlcnk6e2Y6XCJqc29uXCJ9LHJlc3BvbnNlVHlwZTpcImpzb25cIn0pLnRoZW4oZnVuY3Rpb24ocil7ci5zc2wmJihlLnVybD1lLnVybC5yZXBsYWNlKC9eaHR0cDovaSxcImh0dHBzOlwiKSk7dmFyIHQ9ci5kYXRhO2UucmVhZCh0LHtvcmlnaW46XCJzZXJ2aWNlXCIsdXJsOmUucGFyc2VkVXJsfSksZS5fdmFsaWRhdGVMYXllcih0KX0pfSxsLnByb3RvdHlwZS5fdmFsaWRhdGVMYXllcj1mdW5jdGlvbihlKXt9LGwucHJvdG90eXBlLmNyZWF0ZUdyYXBoaWNzQ29udHJvbGxlcj1mdW5jdGlvbihyKXt2YXIgdD10aGlzO3IubGF5ZXI9dGhpczt2YXIgbz1wLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9ncmFwaGljcy9jb250cm9sbGVycy9JM1NPbkRlbWFuZENvbnRyb2xsZXJcIl0scil9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgZShyKX0pO3JldHVybiBvLnRoZW4oZnVuY3Rpb24oZSl7dC5lbWl0KFwiZ3JhcGhpY3MtY29udHJvbGxlci1jcmVhdGVcIix7Z3JhcGhpY3NDb250cm9sbGVyOmV9KX0pLG99LG8oW3Uuc2hhcmVkKHtpZDp7anNvbjp7b3JpZ2luczp7c2VydmljZTp7cmVhZDohMX0sXCJwb3J0YWwtaXRlbVwiOntyZWFkOiExfX19fX0pXSxsLnByb3RvdHlwZSxcInByb3BlcnRpZXNcIix2b2lkIDApLG8oW3UucHJvcGVydHkoe3R5cGU6Y30pXSxsLnByb3RvdHlwZSxcInNwYXRpYWxSZWZlcmVuY2VcIix2b2lkIDApLG8oW3UucmVhZGVyKFwic3BhdGlhbFJlZmVyZW5jZVwiLFtcInNwYXRpYWxSZWZlcmVuY2VcIixcInN0b3JlLmluZGV4Q1JTXCIsXCJzdG9yZS5nZW9ncmFwaGljQ1JTXCJdKV0sbC5wcm90b3R5cGUsXCJyZWFkU3BhdGlhbFJlZmVyZW5jZVwiLG51bGwpLG8oW3UucHJvcGVydHkoe3R5cGU6ZH0pXSxsLnByb3RvdHlwZSxcImZ1bGxFeHRlbnRcIix2b2lkIDApLG8oW3UucmVhZGVyKFwiZnVsbEV4dGVudFwiLFtcInN0b3JlLmV4dGVudFwiLFwic3BhdGlhbFJlZmVyZW5jZVwiLFwic3RvcmUuaW5kZXhDUlNcIixcInN0b3JlLmdlb2dyYXBoaWNDUlNcIl0pXSxsLnByb3RvdHlwZSxcInJlYWRGdWxsRXh0ZW50XCIsbnVsbCksbyhbdS5wcm9wZXJ0eSh7cmVhZE9ubHk6ITAsdHlwZTp5fSldLGwucHJvdG90eXBlLFwiaGVpZ2h0TW9kZWxJbmZvXCIsdm9pZCAwKSxvKFt1LnByb3BlcnR5KHtyZWFkT25seTohMH0pXSxsLnByb3RvdHlwZSxcInZlcnNpb25cIix2b2lkIDApLG8oW3UucmVhZGVyKFwidmVyc2lvblwiLFtcInN0b3JlLnZlcnNpb25cIl0pXSxsLnByb3RvdHlwZSxcInJlYWRWZXJzaW9uXCIsbnVsbCksbyhbdS5wcm9wZXJ0eSh7dHlwZTpTdHJpbmcsanNvbjp7cmVhZDp7c291cmNlOlwiY29weXJpZ2h0VGV4dFwifX19KV0sbC5wcm90b3R5cGUsXCJjb3B5cmlnaHRcIix2b2lkIDApLG8oW3UucHJvcGVydHkoe3R5cGU6U3RyaW5nfSldLGwucHJvdG90eXBlLFwic3VibGF5ZXJUaXRsZU1vZGVcIix2b2lkIDApLG8oW3UucHJvcGVydHkoe3R5cGU6U3RyaW5nfSldLGwucHJvdG90eXBlLFwidGl0bGVcIix2b2lkIDApLG8oW3UucmVhZGVyKFwicG9ydGFsLWl0ZW1cIixcInRpdGxlXCIpXSxsLnByb3RvdHlwZSxcInJlYWRUaXRsZVBvcnRhbEl0ZW1cIixudWxsKSxvKFt1LnJlYWRlcihcInNlcnZpY2VcIixcInRpdGxlXCIsW1wibmFtZVwiXSldLGwucHJvdG90eXBlLFwicmVhZFRpdGxlU2VydmljZVwiLG51bGwpLG8oW3UucHJvcGVydHkoe3R5cGU6TnVtYmVyfSldLGwucHJvdG90eXBlLFwibGF5ZXJJZFwiLHZvaWQgMCksbyhbdS5yZWFkZXIoXCJzZXJ2aWNlXCIsXCJsYXllcklkXCIsW1wiaWRcIl0pXSxsLnByb3RvdHlwZSxcInJlYWRMYXllcklkXCIsbnVsbCksbyhbdS5wcm9wZXJ0eSgpXSxsLnByb3RvdHlwZSxcInVybFwiLG51bGwpLG8oW3Uud3JpdGVyKFwidXJsXCIpXSxsLnByb3RvdHlwZSxcIndyaXRlVXJsXCIsbnVsbCksbyhbdS5wcm9wZXJ0eSh7ZGVwZW5kc09uOltcImxheWVySWRcIl19KV0sbC5wcm90b3R5cGUsXCJwYXJzZWRVcmxcIixudWxsKSxvKFt1LnByb3BlcnR5KCldLGwucHJvdG90eXBlLFwic3RvcmVcIix2b2lkIDApLG8oW3UucHJvcGVydHkoe3R5cGU6U3RyaW5nfSldLGwucHJvdG90eXBlLFwicm9vdE5vZGVcIix2b2lkIDApLG8oW3UucmVhZGVyKFwicm9vdE5vZGVcIixbXCJzdG9yZS5yb290Tm9kZVwiXSldLGwucHJvdG90eXBlLFwicmVhZFJvb3ROb2RlXCIsbnVsbCksbD1vKFt1LnN1YmNsYXNzKFwiZXNyaS5sYXllcnMubWl4aW5zLlNjZW5lU2VydmljZVwiKV0sbCl9KHUuZGVjbGFyZWQoaCxmLGEsdixtKSl9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/layers/mixins/SceneService.js\n");

/***/ })

}]);