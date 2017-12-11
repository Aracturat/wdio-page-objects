/// <reference types="webdriverio" />
import * as WebdriverIO from 'webdriverio';
export declare type PageElement = WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
export declare class PageComponentConfig {
    selector: string;
    index: number;
    timeoutMs: number;
    constructor(selector?: string, index?: number, timeoutMs?: number);
}
export interface PageComponentClass<T extends PageComponent> {
    new (browser: WebdriverIO.Client<void>, config: PageComponentConfig, parent: PageComponent): T;
}
export declare class PageComponent {
    protected browser: WebdriverIO.Client<void>;
    protected config: PageComponentConfig;
    private parent;
    constructor(browser: WebdriverIO.Client<void>, config?: PageComponentConfig, parent?: PageComponent);
    readonly value: PageElement;
    waitUntil(condition: (element: PageElement) => boolean, timeout?: number): void;
}
