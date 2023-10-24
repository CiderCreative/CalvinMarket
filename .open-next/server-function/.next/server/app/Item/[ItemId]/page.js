(() => {
var exports = {};
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 6682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'Item',
        {
        children: [
        '[ItemId]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3098)), "/Users/blint/GitProj/calvinmarket/app/Item/[ItemId]/page.jsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2899)), "/Users/blint/GitProj/calvinmarket/app/layout.jsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/blint/GitProj/calvinmarket/app/Item/[ItemId]/page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/Item/[ItemId]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/Item/[ItemId]/page",
        pathname: "/Item/[ItemId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 3098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _ItemId_page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./components/Item/ActiveImage.jsx


const ActiveImage = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "ActiveImage"
    });
};
/* harmony default export */ const Item_ActiveImage = ((/* unused pure expression or super */ null && (ActiveImage)));

;// CONCATENATED MODULE: ./components/Item/ChangeImageButton.jsx


const ChangeImageButton = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "ChangeImageButton"
    });
};
/* harmony default export */ const Item_ChangeImageButton = ((/* unused pure expression or super */ null && (ChangeImageButton)));

;// CONCATENATED MODULE: ./components/Item/ExitItem.jsx


const ExitItem = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "ExitItem"
    });
};
/* harmony default export */ const Item_ExitItem = ((/* unused pure expression or super */ null && (ExitItem)));

;// CONCATENATED MODULE: ./components/Item/FavoriteButton.jsx


const FavoriteButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-300 flex items-center px-6 py-3 rounded-lg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "w-4 h-4 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 21 19",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
            })
        })
    });
};
/* harmony default export */ const Item_FavoriteButton = (FavoriteButton);

;// CONCATENATED MODULE: ./components/Item/ImageContainer.jsx


const ImageContainer = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "ImageContainer"
    });
};
/* harmony default export */ const Item_ImageContainer = ((/* unused pure expression or super */ null && (ImageContainer)));

;// CONCATENATED MODULE: ./components/Item/InactiveImage.jsx


const InactiveImage = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "InactiveImage"
    });
};
/* harmony default export */ const Item_InactiveImage = ((/* unused pure expression or super */ null && (InactiveImage)));

;// CONCATENATED MODULE: ./components/Item/ItemCarousel.jsx


const ItemCarousel = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "ItemCarousel"
    });
};
/* harmony default export */ const Item_ItemCarousel = ((/* unused pure expression or super */ null && (ItemCarousel)));

;// CONCATENATED MODULE: ./components/Item/ItemDescription.jsx


const ItemDescription = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-5 text-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "text-xl font-bold",
                children: "Item Details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-2 mt-3 mr-[100px] gap-y-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-bold",
                        children: "Condition"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Like New"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-bold",
                        children: "Color"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Brown"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-bold",
                        children: "Men's Size"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Large"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-4",
                children: "Men’s new Carhartt jacket size L made in USA. Never been worn. Does have EGS electrical group patch on it. You could probably put a different patch over it if you wanted to. Interior zip pocket. Interior Velcro pocket. 2 front pockets. Hooded. Sf/pf home. Dorm pickup from BB."
            })
        ]
    });
};
/* harmony default export */ const Item_ItemDescription = (ItemDescription);

;// CONCATENATED MODULE: ./components/Item/ItemHeader.jsx



const ItemHeader = ()=>{
    const pickupIcon = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-[16px] h-[16px] text-gray-800 dark:text-white",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 18 18",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-2xl font-black",
                children: "Carhartt Jacket Large New"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl font-semibold",
                children: "$45"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm font-normal",
                children: "Listed 5 days ago"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-2 text-lg font-normal mt-3",
                children: [
                    pickupIcon,
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Dorm pickup"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-5 mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Item_MessageButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Item_FavoriteButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Item_MoreOptionsButton, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const Item_ItemHeader = (ItemHeader);

;// CONCATENATED MODULE: ./components/Item/MessageButton.jsx


const MessageButton = ()=>{
    const messageIcon = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-4 h-4 text-gray-800 dark:text-white",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 18",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-300 px-6 py-3 rounded-lg flex items-center space-x-2",
        children: [
            messageIcon,
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Messages"
            })
        ]
    });
};
/* harmony default export */ const Item_MessageButton = (MessageButton);

;// CONCATENATED MODULE: ./components/Item/MoreOptionsButton.jsx


const MoreOptionsButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-300 flex items-center px-6 py-3 rounded-lg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "w-4 h-4 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 16 3",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            })
        })
    });
};
/* harmony default export */ const Item_MoreOptionsButton = (MoreOptionsButton);

;// CONCATENATED MODULE: ./components/Item/QuickMessage.jsx


const QuickMessage = ()=>{
    const messageIcon = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-4 h-4 text-gray-800 dark:text-white",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 18",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed w-full bottom-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    messageIcon,
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-md font-regular",
                        children: "Send the seller a message"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "p-2 w-1/4 mt-1 mb-2 input-clear bg-opposite bg-opacity-10 border-2 border-opposite border-opacity-50 rounded-lg",
                defaultValue: "Hello is this available?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "flex justify-center w-1/4 py-1 bg-yellow text-dark text-sm font-semibold rounded-lg",
                children: "Send"
            })
        ]
    });
};
/* harmony default export */ const Item_QuickMessage = (QuickMessage);

;// CONCATENATED MODULE: ./components/Profile/ActionButtons.jsx


const ActionButtons = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "ActionButtons"
    });
};
/* harmony default export */ const Profile_ActionButtons = ((/* unused pure expression or super */ null && (ActionButtons)));

;// CONCATENATED MODULE: ./components/Profile/CreateListingBox.jsx


const CreateListingBox = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "CreateListingBox"
    });
};
/* harmony default export */ const Profile_CreateListingBox = ((/* unused pure expression or super */ null && (CreateListingBox)));

;// CONCATENATED MODULE: ./components/Profile/EditItem.jsx


const EditItem = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "EditItem"
    });
};
/* harmony default export */ const Profile_EditItem = ((/* unused pure expression or super */ null && (EditItem)));

;// CONCATENATED MODULE: ./components/Profile/StarRating.jsx


const StarRating = ()=>{
    const star = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-5 h-5 text-gray-800 dark:text-white",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 22 20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        })
    });
    const emptyStar = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-5 h-5 text-gray-800 dark:text-white",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 21 20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-start",
        children: [
            star,
            star,
            star,
            star,
            emptyStar,
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs ml-1",
                children: "(5)"
            })
        ]
    });
};
/* harmony default export */ const Profile_StarRating = (StarRating);

;// CONCATENATED MODULE: ./components/Profile/UserInfo.jsx


const UserInfo = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "UserInfo"
    });
};
/* harmony default export */ const Profile_UserInfo = ((/* unused pure expression or super */ null && (UserInfo)));

;// CONCATENATED MODULE: ./components/Profile/UserListingsContainer.jsx


const UserListingsContainer = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "UserListingsContainer"
    });
};
/* harmony default export */ const Profile_UserListingsContainer = ((/* unused pure expression or super */ null && (UserListingsContainer)));

;// CONCATENATED MODULE: ./components/Profile/index.js








;// CONCATENATED MODULE: ./components/Item/SellerInfo.jsx



const SellerInfo = ()=>{
    const user = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-4 h-4 text-gray-800 dark:text-white",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 14 18",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl font-bold",
                children: "Seller Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-5 mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "p-5 bg-gray-300 aspect-square  rounded-full",
                        children: user
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-md font-bold",
                                children: "Diane Sorrento (des3)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Profile_StarRating, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Item_SellerInfo = (SellerInfo);

;// CONCATENATED MODULE: ./components/Item/SidebarMenu.jsx



const SidebarMenu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col fixed right-0 inset-y-0 bg-red-200 w-[400px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Item_ItemHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Item_ItemDescription, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Item_SellerInfo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Item_QuickMessage, {})
        ]
    });
};
/* harmony default export */ const Item_SidebarMenu = (SidebarMenu);

;// CONCATENATED MODULE: ./components/Item/index.js
















;// CONCATENATED MODULE: ./app/Item/[ItemId]/page.jsx



const page = ({ params: { ItemId } })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Item_SidebarMenu, {})
    });
};
/* harmony default export */ const _ItemId_page = (page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,48,1], () => (__webpack_exec__(6682)));
module.exports = __webpack_exports__;

})();