import * as WebdriverIO from 'webdriverio';

export declare type PageElement = WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;

export class PageComponentConfig {
    public constructor(
        public selector: string = "html",
        public index: number = null,
        public timeoutMs: number = 10000
    ) { }
}

export interface PageComponentClass<T extends PageComponent> {

    new(browser: WebdriverIO.Client<void>,
        config: PageComponentConfig,
        parent: PageComponent): T
}

export class PageComponent {

    public constructor(
        protected browser: WebdriverIO.Client<void>,
        protected config: PageComponentConfig = new PageComponentConfig(),
        private parent: PageComponent = null
    ) { }

    public get value(): PageElement {
        let ret = undefined;

        if (this.parent) {
            ret = this.parent.value;
        } else {
            ret = this.browser;
        }

        if (this.config.index != null) {
            return ret.$$(this.config.selector)[this.config.index];
        } else {
            return ret.$(this.config.selector);
        }
    }

    public waitUntil(condition: (element: PageElement) => boolean, timeout: number = this.config.timeoutMs) {
        if (this.parent) {
            this.parent.waitUntil(condition, timeout);
        }

        this.browser.waitUntil(() => condition(this.value), timeout);
    }

}
