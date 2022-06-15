"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
/**
 * Shows a loading spinner.
 */
function Loading({ loading = true, size = 12, kind = "background" }) {
    const [showSpinner, setShowSpinner] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const timeout = setTimeout(() => {
            setShowSpinner(true);
        }, 100);
        return () => clearTimeout(timeout);
    });
    return (react_1.default.createElement("div", { role: loading ? "alert" : undefined, "aria-label": loading ? "loading" : undefined, className: (0, classnames_1.default)("ride-ui-kit-loading", kind, { show: loading }), style: { fontSize: Math.round(size * 12) + "rem" } },
        react_1.default.createElement("div", { className: (0, classnames_1.default)("ride-ui-kit-loading-spinner", {
                "loading-spinner-active": showSpinner && loading,
            }) })));
}
exports.default = Loading;
//# sourceMappingURL=index.js.map