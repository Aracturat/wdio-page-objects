import "reflect-metadata";
import { generateReplacePropertyDecorator } from "./utils";
import { PageComponent, PageComponentClass } from "../component";

export function child<T extends PageComponent>(type: PageComponentClass<T>, selector: string, index?: number): any {
    return function (target: any, propertyKey: string): any {
        let propertyType = Reflect.getMetadata("design:type", target, propertyKey);

        return generateReplacePropertyDecorator(
            (value) => { },
            function (): any {
                var parent = this;
                var obj: any = undefined;
                if (propertyType.name == 'Array') {
                    const isArrayIndex = (str: any) => (str >>> 0) + '' === str && str < 4294967295;

                    obj = new Proxy(new Array<T>(), {
                        get(target, property: string, receiver) {
                            if (isArrayIndex(property)) {
                                return new type(
                                    parent.browser,
                                    { selector: selector, index: +property, timeoutMs: parent.config.timeoutMs },
                                    parent
                                );
                            } else if (property === "length") {
                                return parent.value.$$(selector).length;
                            } else {
                                return Reflect.get(target, property, receiver);
                            }
                        },
                        has(target, property: string) {
                            if (isArrayIndex(property)) {
                                return true;
                            }
                            return Reflect.has(target, property);
                        }
                    });
                }
                else {
                    obj = new type(
                        parent.browser,
                        { selector: selector, index: null, timeoutMs: parent.config.timeoutMs },
                        parent
                    );
                }

                generateReplacePropertyDecorator((value) => { }, () => obj)(this, propertyKey);
                return obj;
            }
        )(target, propertyKey);
    };
}

