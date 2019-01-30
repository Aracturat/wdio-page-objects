import { PageComponent, PageElement, element } from '../../lib';

export class Page extends PageComponent {

    @element(".header")
    public header: PageElement;

    @element(".list .item")
    public items: PageElement[];

    @element(".list .item", 0)
    public firstItem: PageElement;
    
    @element(".list .item", 0)
    public firstItemAsArray: PageElement[];
    
    @element(".header", null, (e) => e.$('..'))
    public headerParent: PageElement;

}