import { $ } from '@wdio/globals'
import Page from './basePage'

class AutomationExerciseContactUsPage extends Page {

    public get contactUsLink () {
        return $("//a[text()=' Contact us']")
    }


    public get homePageVisible () {
        return $('//h2[text()="Features Items"]')
    }

    public get homePageLoginFormVisible () {
        return $('//h2[contains(.,"Login") or contains(.,"Signup") or contains(.,"Account")]')
    }


    public get getInTouchHeading () {
        return $("//h2[text()='Get In Touch']")
    }


    public get nameField () {
        return $('//input[@data-qa="name"]')
    }

    public get emailField () {
        return $('//input[@data-qa="email"]')
    }

    public get subjectField () {
        return $('//input[@data-qa="subject"]')
    }

    public get messageField () {
        return $('//textarea[@data-qa="message"]')
    }

    public get uploadFileInput () {
        return $('//input[@type="file"]')
    }


    public get submitButton () {
        return $('//input[@data-qa="submit-button"]')
    }

    public get okButton () {
        return $('//button[normalize-space()="OK" or normalize-space()="Ok" or normalize-space()="Ok "] | //div[contains(@class,"modal") or contains(@class,"sweet-alert")]//button[normalize-space()="OK" or normalize-space()="Ok"]')
    }


    public get successMessage () {
        return $('//div[contains(@class,"status") and contains(.,"submitted successfully")]')
    }


    async waitForHomePage () {
        try {
            await this.homePageVisible.waitForDisplayed({ timeout: 10000 })
        } catch (e) {
            await this.homePageLoginFormVisible.waitForDisplayed({ timeout: 10000 })
        }
    }


    async clickContactUs () {
        await this.contactUsLink.waitForDisplayed()
        await this.contactUsLink.click()
    }

    async waitForGetInTouch () {
        await this.getInTouchHeading.waitForDisplayed()
    }

    async fillContactUsForm (name: string, email: string, subject: string, message: string) {
        await this.nameField.waitForDisplayed()
        await this.nameField.setValue(name)
        await this.emailField.setValue(email)
        await this.subjectField.setValue(subject)
        await this.messageField.setValue(message)
    }

    async uploadFile (absolutePathToFile: string) {
        await this.uploadFileInput.waitForDisplayed()
        await this.uploadFileInput.setValue(absolutePathToFile)
    }


    async submit () {
        await this.submitButton.scrollIntoView()
        await this.submitButton.click()
    }

    async confirmOk() {
    await browser.acceptAlert()

}

    public async waitForSuccessMessage() {
    await this.successMessage.waitForDisplayed({ timeout: 10000})
}
}

export default new AutomationExerciseContactUsPage()

