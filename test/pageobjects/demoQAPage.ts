import { $ } from '@wdio/globals'
import Page from './basePage';


class DemoQAPage extends Page {


     public open (url: string) {
    return super.open(url);
}

    public get elementsCard () {
        return $("//h5[text()='Elements']");
    }

    public get textBoxOption () {
        return $("//span[text()='Text Box']");
    }   

    public get userNameField () {
        return $('//input[@id="userName"]');
    }
    public get emailField () {
        return $('//input[@id="userEmail"]');
    }

    public async verifyAndClickElementTab () {
        await this.elementsCard.scrollIntoView();
        await this.elementsCard.waitForDisplayed({ timeout: 5000 });
        await this.elementsCard.click();
    }

    public async verifyAndClickTextBoxOption () {    
        await this.textBoxOption.scrollIntoView();
        await this.textBoxOption.waitForDisplayed({ timeout: 5000 });
        await this.textBoxOption.click();
    }

    public async enterUserName (username: string) {
        await this.userNameField.setValue(username);
    }
    
    public async enterEmail (email: string) {   
         await this.emailField.setValue(email);
     }
}

export default new DemoQAPage();