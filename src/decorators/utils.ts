
export function generateReplacePropertyDecorator(setter: (value: any) => any, getter: () => any): Function {
    return function (target: any, propertyKey: string): void {
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true
        });
    };
}
