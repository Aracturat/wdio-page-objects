import { PageComponent, PageElement, element } from '../../lib';

export class Page extends PageComponent {

    @element(".header")
    public header: PageElement;

    @element(".list .item")
    public items: PageElement[];

}