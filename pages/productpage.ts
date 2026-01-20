import { productpagelocators } from "../enum/selectors";
import {Page ,expect} from '@playwright/test';
export class productpage{
    constructor(private page:Page){}

    async pageisvisible(){
        await expect(this.page.locator(productpagelocators.title)).toBeVisible();
    }

    async productscount(){
        await expect(this.page.locator(productpagelocators.inventory)).toHaveCount(6);
    }
}