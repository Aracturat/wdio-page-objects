import { PageComponent, PageElement, element, child } from '../../index';

export class ListItem extends PageComponent {

    @element(".header")
    public header: PageElement;

    @element(".text")
    public text: PageElement;

}    

export class List extends PageComponent {
    
    @element(".header")
    public header: PageElement;
    
    @child(ListItem, ".item")
    public items: ListItem[];

}
        
export class Page extends PageComponent {

    @child(List, ".list")
    public list: List;

}




