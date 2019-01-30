/// <reference types="webdriverio"/>

export declare type PageElement = WebdriverIO.Element<void>;

export class PageComponentConfig {
    public constructor(
        public selector: string = "html",
        public index: number = null,
        public timeoutMs: number = 10000
    ) { }
}

export interface PageComponentClass<T extends PageComponent> {

    new(browser: WebDriver.Client<void> & WebdriverIO.Browser<void>,
        config: PageComponentConfig,
        parent: PageComponent): T
}

export class PageComponent {

    public constructor(
        protected browser: WebDriver.Client<void> & WebdriverIO.Browser<void>,
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
    
}
