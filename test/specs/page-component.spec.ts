import { expect } from 'chai';

import { Page } from '../page_elements/page-component.page'

const po = new Page(browser);

describe('Inner PageComponent with child decorator', () => {

    before(() => {
        browser.url("/pages/page-component.html");
    });

    it('should exist', () => {
        expect(po.list).to.exist;
    });


    it('should return correct inner PageElement', () => {
        expect(po.list.header.getText()).to.equal('Header');
    });

    it('should return items count', () => {
        expect(po.list.items.length).to.equal(3);
    });

    it('should return correct items in forEach loop', () => {
        po.list.items.forEach((e, i) => {
            expect(e.header.getText()).to.equal(`Header ${i + 1}`);
            expect(e.text.getText()).to.equal(`Text ${i + 1}`);
        });
    });

    it('should return correct items in for loop', () => {
        for (let i = 0; i < po.list.items.length; i++) {
            expect(po.list.items[i].header.getText()).to.equal(`Header ${i + 1}`);
            expect(po.list.items[i].text.getText()).to.equal(`Text ${i + 1}`);
        }
    });

});
