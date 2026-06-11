import Page from './basePage';

class RegisterExistingPage extends Page {

    // Locators
    public get signupLoginBtn() {
        return $('//a[contains(text(),"Signup / Login")]');
    }

    public get nameInput() {
        return $('[data-qa="signup-name"]');
    }

    public get emailInput() {
        return $('[data-qa="signup-email"]');
    }

    public get signupBtn() {
        return $('[data-qa="signup-button"]');
    }

    public get existingEmailError() {
        return $('//div[@class="signup-form"]//p');
    }

    public get homeBtn() {
        return $("//a[text()=' Home']");
    }

    // Methods
    public async clickSignupLogin() {
        await this.signupLoginBtn.waitForClickable();
        await this.signupLoginBtn.click();
    }

    public async enterName(name: string) {
        await this.nameInput.setValue(name);
    }

    public async enterEmail(email: string) {
        await this.emailInput.setValue(email);
    }

    public async clickSignup() {
        await this.signupBtn.click();
    }

    public async verifyExistingEmailError(expectedText: string) {
    await expect(this.existingEmailError).toHaveText(expectedText);
}
        public async clickHome() { 
        await this.homeBtn.click();

        }
            
}

export default new RegisterExistingPage();