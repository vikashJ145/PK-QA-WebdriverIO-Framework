import demoQAPage from '../pageobjects/demoQAPage';
describe('Signup Test', () => {
    it('should signup', async () => {

            await demoQAPage.open('https://demoqa.com/');
            await demoQAPage.verifyAndClickElementTab();
            await demoQAPage.verifyAndClickTextBoxOption();
            await demoQAPage.enterUserName("Piyush Kushwah");
            await demoQAPage.enterEmail('Piyushkushwah4033@gmail.com');
        
    });
});