import { url , loginpagelocators } from "../enum/selectors";
import { Page , expect } from "@playwright/test";

export class loginpage{
    constructor(private page:Page){}
        async navigate(){
            await this.page.goto(url.login);
        }
        
        async login(username:string , password:string ){
            await this.page.fill(loginpagelocators.username , username);
            await this.page.fill(loginpagelocators.password , password);
            await this.page.click(loginpagelocators.login_buton);
        }

        async checkerrormsg(message:string){
            await expect(this.page.locator(loginpagelocators.error_msg)).toHaveText(message);
        }

        async checksuccessfullogin(){
            await expect(this.page.locator('.title')).toHaveText('Products')
        }
}