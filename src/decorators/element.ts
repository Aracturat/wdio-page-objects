import "reflect-metadata";
import { generateReplacePropertyDecorator } from "./utils";
import { PageElement } from "../component";

export function element(selector: string, index?: number, get?: (element: PageElement) => any): any {
    return function (target: any, propertyKey: string): any {
        let propertyType = Reflect.getMetadata("design:type", target, propertyKey);

        if (!get) {
            get = e => e;
        }

        return generateReplacePropertyDecorator(
            (value) => { },
            function (): any {
                if (propertyType.name == "Array") {
                    if (index != null) {
                        return [get(this.value.$$(selector)[index])];
                    } else {
                        return this.value.$$(selector).map(get);
                    }
                } else {
                    if (index != null) {
                        return get(this.value.$$(selector)[index]);
                    } else {
                        return get(this.value.$(selector));
                    }
                }
            }
        )(target, propertyKey);
    };
}
