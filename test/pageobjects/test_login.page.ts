import { $ } from '@wdio/globals'
import Page from './page';

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


    async waitForPageLoad() {
    await this.inputUsername.waitForDisplayed({ timeout: 5000 });
    }


    public async userSignUp (username: string, emailAddress: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(emailAddress);
        await this.btnSubmit.click();
    }
}

export default new TestLoginPage();
