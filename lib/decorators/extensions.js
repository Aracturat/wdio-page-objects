"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("./element");
function text(selector, index) {
    return element_1.element(selector, index, e => e.getText());
}
exports.text = text;
function byText(text, index) {
    return element_1.element(`./*/*[text()='${text}']`, index);
}
exports.byText = byText;
function byDataBind(dataBind, index) {
    return element_1.element(`[data-bind*='${dataBind}']`, index);
}
exports.byDataBind = byDataBind;
function byPlaceholder(placeholder, index) {
    return element_1.element(`[placeholder='${placeholder}']`, index);
}
exports.byPlaceholder = byPlaceholder;
//# sourceMappingURL=extensions.js.map