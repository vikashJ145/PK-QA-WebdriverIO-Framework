import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    public get inputUsername () {
        return $('[data-qa="signup-name"]');
    }

    public get inputEmailAddress () {
        return $('[data-qa="signup-email"]');
    }

    public get btnSubmit () {
        return $('[data-qa="signup-button"]');
    }
     public open () {
        return super.open('login');
    }


    public get titleDotButton () {
        return $('[id="id_gender1"]');
    }

    public get passwordField () {
        return $('[id="password"]');
    }
    public get daysDropdown () {
        return $('[data-qa="days"]');
    }

    async waitForPageLoad() {
    await this.inputUsername.waitForDisplayed({ timeout: 5000 });
    }


    public async userSignUp (username: string, emailAddress: string) {
        await this.inputUsername.setValue(username);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.btnSubmit.click();
    }

    public async clickTitleDotButton () {
        await this.titleDotButton.click();
    }

    public async enterPassword (password: string) {
        await this.passwordField.setValue(password);
    }

     public async clickDaysDropdown () {
        await this.daysDropdown.click();
    }
}

export default new LoginPage();
