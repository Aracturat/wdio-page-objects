"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const utils_1 = require("./utils");
function child(type, selector, index) {
    return function (target, propertyKey) {
        let propertyType = Reflect.getMetadata("design:type", target, propertyKey);
        return utils_1.generateReplacePropertyDecorator((value) => { }, function () {
            var parent = this;
            var obj = undefined;
            if (propertyType.name == 'Array') {
                const isArrayIndex = (str) => (str >>> 0) + '' === str && str < 4294967295;
                obj = new Proxy(new Array(), {
                    get(target, property, receiver) {
                        if (isArrayIndex(property)) {
                            return new type(parent.browser, { selector: selector, index: +property, timeoutMs: parent.config.timeoutMs }, parent);
                        }
                        else if (property === "length") {
                            return parent.value.$$(selector).length;
                        }
                        else {
                            return Reflect.get(target, property, receiver);
                        }
                    },
                    has(target, property) {
                        if (isArrayIndex(property) || property === "length") {
                            return true;
                        }
                        return Reflect.has(target, property);
                    }
                });
            }
            else {
                obj = new type(parent.browser, { selector: selector, index: null, timeoutMs: parent.config.timeoutMs }, parent);
            }
            utils_1.generateReplacePropertyDecorator((value) => { }, () => obj)(this, propertyKey);
            return obj;
        })(target, propertyKey);
    };
}
exports.child = child;
//# sourceMappingURL=child.js.map