# wdio-page-objects

[![Build Status](https://travis-ci.org/Aracturat/wdio-page-objects.svg?branch=master)](https://travis-ci.org/Aracturat/wdio-page-objects) [![Coverage Status](https://coveralls.io/repos/github/Aracturat/wdio-page-objects/badge.svg?branch=master)](https://coveralls.io/github/Aracturat/wdio-page-objects?branch=master) [![npm version](http://img.shields.io/npm/v/wdio-page-objects.svg)](https://npmjs.org/package/wdio-page-objects)


Simple page object library for [WebdriverIO](https://github.com/webdriverio/webdriverio) using Typescript decorators. 

Inspired by [xenon](https://github.com/ten-eleven/xenon) library for [protractor](https://github.com/angular/protractor).

## Installation

```shell
npm install wdio-page-objects
```

## Example
```ts

import { PageComponent, PageElement, element, child, text } from 'wdio-page-objects';


export class Row extends PageComponent {

    @element('.element')
    public rowElement: PageElement;
    
}

export class List extends PageComponent {

    @child(Row, ".row")
    public rows: Row[];
}

export class Filter extends PageComponent {

    @text('.input')
    public input: string;

    @element('.filter')
    public filter: PageElement[]; 
    
}

export class Page extends PageComponent {

    @child(Filter, ".filter")
    public filter: Filter;

    @child(List, ".list")
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

To create embedded PageComponent use @child decorator. 
