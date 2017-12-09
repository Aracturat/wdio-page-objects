import { expect } from 'chai';

import { Page } from '../page_elements/page-element.page'

const po = new Page(browser);

describe('PageElement with element decorator', () => {

    before(() => {
        browser.url("/pages/page-element.html");
    });

    it('should return correct element', () => {
        expect(po.header.getText()).to.equal('Header');
    });

    it('should return elements count', () => {
        expect(po.items.length).to.equal(4);
    });

    it('should return correct elements in forEach loop', () => {
        po.items.forEach((e, i) => {
            expect(e.getText()).to.equal(`Item ${i + 1}`);
        });
    });

    it('should return correct elements in for loop', () => {
        for (let i = 0; i < po.items.length; i++) {
            expect(po.items[i].getText()).to.equal(`Item ${i + 1}`);
        }
    });

    it('should return correct element for index selector', () => {
        expect(po.firstItem.getText()).to.equal('Item 1');
    });

    it('should return correct elements array (with one element) for index selector', () => {
        expect(po.firstItemAsArray[0].getText()).to.equal('Item 1');
        expect(po.firstItemAsArray.length).to.equal(1);
    });

    it('should not allow change value of element', () => {
        po.firstItem = null;
        expect(po.firstItem).to.not.equal(null);
    })

    it('should not allow change value of array of elements', () => {
        po.items = null;
        expect(po.items).to.not.equal(null);
    })

    it('should return correct element for get function', () => {
        expect(po.headerParent.getTagName()).to.equal('body');
    });

});
