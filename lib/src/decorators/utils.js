"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateReplacePropertyDecorator(setter, getter) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true
        });
    };
}
exports.generateReplacePropertyDecorator = generateReplacePropertyDecorator;
//# sourceMappingURL=utils.js.map