"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const utils_1 = require("./utils");
function element(selector, index, get) {
    return function (target, propertyKey) {
        let propertyType = Reflect.getMetadata("design:type", target, propertyKey);
        if (!get) {
            get = e => e;
        }
        return utils_1.generateReplacePropertyDecorator((value) => { }, function () {
            if (propertyType.name == "Array") {
                if (index != null) {
                    return [get(this.value.$$(selector)[index])];
                }
                else {
                    return this.value.$$(selector).map(get);
                }
            }
            else {
                if (index != null) {
                    return get(this.value.$$(selector)[index]);
                }
                else {
                    return get(this.value.$(selector));
                }
            }
        })(target, propertyKey);
    };
}
exports.element = element;
//# sourceMappingURL=element.js.map