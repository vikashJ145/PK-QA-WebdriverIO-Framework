import { $ } from '@wdio/globals'
import Page from './basePage';

class TestLoginPage extends Page {

    public get inputUsername () {
        return $('[id="username"]');
    }
    
    public get inputPassword () {
        return $('[id="password"]');
    }

    public get btnSubmit () {   
        return $('[id="submit"]');
    }
    public get afterLoginTextMessage () {
        return $('//h1[text()="Logged In Successfully"]');
    }


    async waitForPageLoad() {
    await this.inputUsername.waitForDisplayed();
    }


    public async userSignUp (userName: string, emailAddress: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(userName);
        await this.inputPassword.setValue(emailAddress);
        await this.btnSubmit.click();
        await this.afterLoginTextMessage.waitForDisplayed();
    }
}

export default new TestLoginPage();
