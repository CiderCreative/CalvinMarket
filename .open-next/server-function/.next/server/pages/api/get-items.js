"use strict";
(() => {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 6317:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ 1588:
/***/ ((module) => {

module.exports = require("@aws-sdk/lib-dynamodb");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 462:
/***/ ((module) => {

module.exports = import("sst/node/table");;

/***/ }),

/***/ 5879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7305);
/* harmony import */ var private_next_pages_api_get_items_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9411);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_get_items_jsx__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_get_items_jsx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_get_items_jsx__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_get_items_jsx__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/get-items",
        pathname: "/api/get-items",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_get_items_jsx__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sst_node_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6317);
/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1588);
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sst_node_table__WEBPACK_IMPORTED_MODULE_0__]);
sst_node_table__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const db = _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__.DynamoDBDocumentClient.from(new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__.DynamoDBClient({}));
async function handler(req, res) {
    const { ExpressionAttributeValues, FilterExpression } = toScanCommand(req.body.filter);
    const input = {
        TableName: sst_node_table__WEBPACK_IMPORTED_MODULE_0__.Table.items.tableName,
        ExpressionAttributeNames: {
            "#STATUS": "status"
        },
        ExpressionAttributeValues,
        FilterExpression
    };
    try {
        const scan = new _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__.ScanCommand(input);
        const resp = await db.send(scan);
        res.status(200).json({
            ...resp
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
        console.error("Error:", error);
    }
}
// something like "title = Title OR title = Bible" gets turned into correct Expression Attribute and filter for scan command
function toScanCommand(expression) {
    let ExpressionAttributeValues = {};
    let FilterExpression = "";
    const cutExpression = expression.trim().split(/\s*(=|OR|AND)\s*/);
    cutExpression.forEach((item, index)=>{
        if (cutExpression[index - 1] === "=") {
            let attributeLength = Object.keys(ExpressionAttributeValues).length + 1;
            //take out the item from the expression
            ExpressionAttributeValues = {
                ...ExpressionAttributeValues,
                [`:var${attributeLength}`]: item
            };
            //add the variable for the item back into the filter expression
            FilterExpression += `:var${attributeLength} `;
        } else if (cutExpression[index + 1] === "=") {
            FilterExpression += item.toLowerCase() === "status" ? "#STATUS " : time + " ";
        } else {
            FilterExpression += item + " ";
        }
    });
    return {
        ExpressionAttributeValues,
        FilterExpression
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(5879)));
module.exports = __webpack_exports__;

})();