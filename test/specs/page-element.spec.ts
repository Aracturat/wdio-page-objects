import { expect } from 'chai';

import { Page } from '../page_elements/page-element.page'

const po = new Page(browser);

describe('PageElement with element decorator', () => {

    before(() => {
        browser.url("/pages/page-element.html");
    });

    it('should return header', () => {
        expect(po.header.getText()).to.equal('Header');
    });

    it('should return items count', () => {
        expect(po.items.length).to.equal(4);
    });

    it('should return correct items in forEach loop', () => {
        po.items.forEach((e, i) => {
            expect(e.getText()).to.equal(`Item ${i + 1}`);
        });
    });

    it('should return correct items in for loop', () => {
        for (let i = 0; i < po.items.length; i++) {
            expect(po.items[i].getText()).to.equal(`Item ${i + 1}`);
        }
    });

});
