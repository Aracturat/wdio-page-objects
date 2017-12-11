import "reflect-metadata";
import { PageComponent, PageComponentClass } from "../component";
export declare function child<T extends PageComponent>(type: PageComponentClass<T>, selector: string, index?: number): any;
