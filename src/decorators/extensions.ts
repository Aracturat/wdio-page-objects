import { element } from "./element";

export function text(selector: string, index?: number): any {
    return element(selector, index, e => e.getText());
}

export function byText(text: string, index?: number): any {
    return element(`./*/*[text()='${text}']`, index);
}

export function byDataBind(dataBind: string, index?: number): any {
    return element(`[data-bind*='${dataBind}']`, index);
}

export function byPlaceholder(placeholder: string, index?: number): any {
    return element(`[placeholder='${placeholder}']`, index);
}
