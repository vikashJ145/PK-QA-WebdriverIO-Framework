import { $ } from '@wdio/globals'
import Page from './basePage';

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
     public open (url: string) {
    return super.open(url);
}


    public get mrAndMrsTitleDotButton () {
        return $('[id="id_gender1"]');
    }

    public get passwordField () {
        return $('[id="password"]');
    }
    public get daysDropdown () {
        return $('[data-qa="days"]');
    }
    public get monthsDropdown () {
        return $('[//select[@data-qa="months"]');
    }
    public get yearsDropdown () {
        return $('//select[@data-qa="years"]');
    }
    public get newsletterCheckbox () {
        return $('//input[@id="newsletter"]');
    }
    public get offersCheckbox () {
        return $('//input[@id="optin"]');
    }
    public get inputFirstName () {
        return $('//input[@id="first_name"]');
    }
    public get inputLastName () {
        return $('//input[@id="last_name"]');
    }


    async waitForPageLoad() {
    await this.inputUsername.waitForDisplayed({ timeout: 5000 });
    }


    public async userSignUp (username: string, emailAddress: string) {
        await this.inputUsername.setValue(username);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.btnSubmit.click();
    }

    public async clickMrAndMrsTitleDotButton () {
        await this.mrAndMrsTitleDotButton.click();
    }

    public async enterPassword (password: string) {
        await this.passwordField.setValue(password);
    }

     public async clickDaysDropdown () {
        await this.daysDropdown.click();
    }

    public async clickMonthsDropdown () {
        await this.monthsDropdown.click();
    }

    public async clickYearsDropdown () {
        await this.yearsDropdown.waitForDisplayed();
        await this.yearsDropdown.click();
    }

    public async clickNewsletterCheckbox () {
        await this.newsletterCheckbox.waitForDisplayed();
        await this.newsletterCheckbox.click();
    }
    public async clickOffersCheckbox () {
        await this.offersCheckbox.waitForDisplayed();
        await this.offersCheckbox.click();  
    }
    
    public async enterFirstName (firstName: string) {   
        await this.inputFirstName.waitForDisplayed();
        await this.inputFirstName.setValue(firstName);  
        }

        public async enterLastName (lastName: string) { 
        await this.inputLastName.waitForDisplayed();
        await this.inputLastName.setValue(lastName);  
        }
}

export default new LoginPage();
