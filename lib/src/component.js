"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PageComponentConfig {
    constructor(selector = "html", index = null, timeoutMs = 10000) {
        this.selector = selector;
        this.index = index;
        this.timeoutMs = timeoutMs;
    }
}
exports.PageComponentConfig = PageComponentConfig;
class PageComponent {
    constructor(browser, config = new PageComponentConfig(), parent = null) {
        this.browser = browser;
        this.config = config;
        this.parent = parent;
    }
    get value() {
        let ret = undefined;
        if (this.parent) {
            ret = this.parent.value;
        }
        else {
            ret = this.browser;
        }
        if (this.config.index != null) {
            return ret.$$(this.config.selector)[this.config.index];
        }
        else {
            return ret.$(this.config.selector);
        }
    }
    waitUntil(condition, timeout = this.config.timeoutMs) {
        if (this.parent) {
            this.parent.waitUntil(condition, timeout);
        }
        this.browser.waitUntil(() => condition(this.value), timeout);
    }
}
exports.PageComponent = PageComponent;
//# sourceMappingURL=component.js.map