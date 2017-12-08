import { PageComponent, PageElement, element } from '../../index';

export class Page extends PageComponent {

    @element(".header")
    public header: PageElement;

    @element(".list .item")
    public items: PageElement[];

}