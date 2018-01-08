import { PageComponent, PageElement, byDataBind, byPlaceholder, byText, text } from '../../lib';

export class Page extends PageComponent {

    @byDataBind("value: text")
    public textByDataBind: PageElement;

    @byPlaceholder("input")
    public inputByPlaceholder: PageElement;

    @byText("Inner text")
    public spanByText: PageElement;

    @text(".text")
    public textBySelector: string;

}