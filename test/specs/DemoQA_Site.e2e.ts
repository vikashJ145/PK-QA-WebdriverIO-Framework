import loginPage from '../pageobjects/login.page';
import demoqaPage from '../pageobjects/demoQAPage';
describe('Signup Test', () => {

    it('should signup', async () => {

            await loginPage.open('https://demoqa.com/');
            await demoqaPage.verifyAndClickElementTab();
            await demoqaPage.verifyAndClickTextBoxOption();
            await demoqaPage.enterUserName("Piyush Kushwah");
            await demoqaPage.enterEmail('Piyushkushwah4033@gmail.com');
        
    });
});