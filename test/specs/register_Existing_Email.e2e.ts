import Page from '../pageobjects/basePage';
import registerExistingPage from '../pageobjects/register_Existing.page.e2e';
import { getExcelData } from '../utils/excelReader';
import * as path from 'path';

describe('Signup Test (Excel Data)', () => {

    let testData: any[];
    const basePage = new Page();

    before(() => {
        const filePath = path.join(
            process.cwd(),
            'test',
            'testData',
            'loginData.xlsx'
        );

        testData = getExcelData(filePath, 'Sheet1');
        console.log('Excel Data:', testData);
    });

    it('should signup using excel data', async () => {
            await basePage.open('http://automationexercise.com');
            await registerExistingPage.clickSignupLogin();
            await registerExistingPage.enterName(testData[1].name);
            await registerExistingPage.enterEmail(testData[1].email);
            await registerExistingPage.clickSignup();
            await registerExistingPage.verifyExistingEmailError('Email Address already exist!');
    });
});