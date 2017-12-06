# wdio-page-objects

Simple page object library for WebdriverIO using Typescript decorators. 

Inspired by [xenon](https://github.com/ten-eleven/xenon) library for protractor.

## Installation

```shell
npm install wdio-page-objects
```

## Example
```ts

export class Row extends PageComponent {

    @element('.element')
    public rowElement: PageElement;
    
}

export class List extends PageComponent {

    @child(".row", Row)
    public rows: Row[];
}

export class Filter extends PageComponent {

    @text('.input')
    public input: string;

    @selector('.filter')
    public filter: PageElement[]; 
    
}

export class Page extends PageComponent {

    @child(".filter")
    public filter: Filter;

    @child(".list")
    public list: List;
    
}

let po = new Page(browser, { timeoutMs: 10000 });

po.list.element.click();

po.list.rows.forEach((e: Row) => {
    e.rowElement.getText();
});

po.filter.input = "test";

```


## Getting started

There are two different elements:
* PageComponent

It is the main block of page objects.

* PageElement

It is shortcut for WebdriverIO.Client
```ts 
export declare type PageElement = WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
```
