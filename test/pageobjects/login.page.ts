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
     
    public get mrAndMrsTitleDotButton () {
        return $('//input[@id="id_gender1"]');
    }

    public get passwordField () {
        return $('[id="password"]');
    }

    public get daysDropdown () {
        return $('[data-qa="days"]');
    
    }
    public get monthsDropdown () {
        return $('[data-qa="months"]');

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
    await this.inputUsername.waitForDisplayed({ timeout: 50000 });
    }

    public async userSignUp (username: string, emailAddress: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);

        await this.inputEmailAddress.waitForDisplayed();
        await this.inputEmailAddress.setValue(emailAddress);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }

    public async clickMrAndMrsTitleDotButton () {
        await this.mrAndMrsTitleDotButton.waitForDisplayed();  
        await this.mrAndMrsTitleDotButton.waitForClickable();
        await this.mrAndMrsTitleDotButton.scrollIntoView();
        await this.mrAndMrsTitleDotButton.click();
         
    }

    public async enterPassword (password: string) {
        await this.passwordField.waitForDisplayed();
        await this.passwordField.setValue(password);
        
    }

     public async clickDaysDropdown () {
        await this.daysDropdown.waitForDisplayed();
        await this.daysDropdown.waitForClickable();
        await this.daysDropdown.scrollIntoView();
        await this.daysDropdown.click();
    }

    public async clickMonthsDropdown () {
       await this.monthsDropdown.waitForExist();
       await this.monthsDropdown.scrollIntoView();
       await this.monthsDropdown.waitForDisplayed();
       await this.monthsDropdown.waitForClickable({ timeout: 50000 });
       await this.monthsDropdown.click();
    }

    public async selectYear(year: string) {
    await this.yearsDropdown.waitForDisplayed();
    await this.yearsDropdown.waitForClickable();
    await this.yearsDropdown.scrollIntoView();
    await this.yearsDropdown.click();
    await this.yearsDropdown.selectByVisibleText(year);
    }

    public async clickNewsletterCheckbox () {
        await this.yearsDropdown.scrollIntoView();
        await this.newsletterCheckbox.waitForDisplayed();
        await this.yearsDropdown.waitForClickable();
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
        await this.inputLastName.waitForDisplayed({ timeout: 50000 });
        await this.inputLastName.setValue(lastName);  
        
}

    public async selectMonth(month: string) {
        await this.monthsDropdown.waitForDisplayed();
        await this.monthsDropdown.selectByVisibleText(month);
}

    public async selectDay(day: string) {
        await this.daysDropdown.waitForExist();
        await this.daysDropdown.waitForDisplayed();
        await this.daysDropdown.waitForClickable();
        await this.daysDropdown.selectByVisibleText(day);
}
}

export default new LoginPage();
