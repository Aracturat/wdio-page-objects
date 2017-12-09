import { expect } from 'chai';

import { Page } from '../page_elements/extensions.page';

const po = new Page(browser);

describe('Other selectors (extensions)', () => {

    before(() => {
        browser.url("/pages/extensions.html");
    });

    it('should return correct element for byDataBind selector', () => {
        expect(po.textByDataBind.getText()).to.equal("Text");
    });

    it('should return correct element for byPlaceholder selector', () => {
        expect(po.inputByPlaceholder.getValue()).to.equal("input-value");
    });

    it('should return correct element for byText selector', () => {
        expect(po.spanByText.getTagName()).to.equal("span");
    });

    it('should return correct string for text selector', () => {
        expect(po.textBySelector).to.equal("Inner text");
    });

});
