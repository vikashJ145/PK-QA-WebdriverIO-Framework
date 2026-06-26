import contactUsPage from '../pageobjects/automationExerciseContactUs.page'
import * as path from 'path'

describe('AutomationExercise - Contact Us', () => {
    it('should submit contact us form successfully', async () => {
        await contactUsPage.open('http://automationexercise.com')
        await contactUsPage.waitForHomePage()

        await contactUsPage.clickContactUs()
        await contactUsPage.waitForGetInTouch()

        const name = 'Piyush Automation'
        const email = `piyush.${Date.now()}@example.com`
        const subject = 'Test Subject'
        const message = 'This is a test message from WebdriverIO automation.'
        await contactUsPage.fillContactUsForm(name, email, subject, message)

        const uploadFilePath = path.join(
            process.cwd(),
            'test',
            'testData',
            'upload',
            'test-upload.txt'
        )
        await contactUsPage.uploadFile(uploadFilePath)
        await contactUsPage.submit()
        await contactUsPage.confirmOk()
        await contactUsPage.waitForSuccessMessage()
    })
})

