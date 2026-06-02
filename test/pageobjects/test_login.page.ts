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


    public get inputName () {
        return $('//input[@data-automation-id="form_first_name"]');
    }

    async waitForPageLoad() {
    await this.inputUsername.waitForDisplayed();
    }


    public get websiteHomeButton () {
        return $('//a[text()="Home"]');
    }

    public get emailField () {
        return $('//input[@data-automation-id="form_email"]');
    }
      
    public get xpathCheatSheetButton () {
        return $('//input[@data-automation-id="subscribe-submit-button"]');
    }

    public async userSignUp (userName: string, emailAddress: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(userName);
        await this.inputPassword.setValue(emailAddress);
        await this.btnSubmit.click();
        await this.afterLoginTextMessage.waitForDisplayed();
    }

    public async clickAndVerifyHomeScreen () {
        await this.websiteHomeButton.click();
       
    }
    
    public async VerifyAndEnterName (name: string) {
        await this.inputName.scrollIntoView();
        await this.inputName.waitForDisplayed();
        await this.inputName.setValue(name);
    }

    public async VerifyAndEnterEmailAddress (email: string) {  
        await this.emailField.waitForDisplayed();
        await this.emailField.setValue(email);
    }

    public async clickSubscribeButton () {
        await this.xpathCheatSheetButton.waitForDisplayed();
        await this.xpathCheatSheetButton.click();
    }

}

export default new TestLoginPage();
