"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
const react_1 = __importDefault(require("react"));
const uuid_1 = require("uuid");
const Toggle_module_scss_1 = __importDefault(require("./Toggle.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
/**
 * A pretty toggle switch
 */
function Toggle({ checked, disabled, onChange, 
// tooltipLabel,
// tooltipPlacement = 'right',
color, label = "", }) {
    // Generate a unique id for matching the input and label
    // NOTE -> REMOVING USE OF USEMEMO FOR ERRORS
    //   const id = useMemo(uuid4, []);
    const id = (0, uuid_1.v4)();
    // const [tippy] = useTippy<HTMLDivElement>(tooltipLabel ?? null, {
    //     placement: tooltipPlacement
    // });
    return (react_1.default.createElement("div", { 
        //   ref={tippy}
        style: {
            "--ride-report-active-toggle-color": color,
            "--ride-report-hover-toggle-color": color,
        } // css variables aren't included in CSSProperties by default
     },
        react_1.default.createElement("input", { className: (0, classnames_1.default)(Toggle_module_scss_1.default.toggle, label && Toggle_module_scss_1.default.label), type: "checkbox", id: id, checked: checked, onChange: (e) => onChange(e.target.checked), disabled: disabled }),
        react_1.default.createElement("label", { htmlFor: id }, label)));
}
exports.Toggle = Toggle;
exports.default = Toggle;
//# sourceMappingURL=Toggle.js.map