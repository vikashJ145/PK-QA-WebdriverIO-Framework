import loginPage from '../pageobjects/login.page';
import { getExcelData } from '../utils/excelReader';
import * as path from 'path';

describe('Signup Test (Excel Data)', () => {

    let testData: any[];

    before(() => {
        const filePath = path.join(process.cwd(), 'test', 'testData', 'loginData.xlsx');
        testData = getExcelData(filePath, 'Sheet1');
        console.log('Excel Data:', testData); 
    });

    it('should signup using excel data', async () => {

        for (const data of testData) {

            await loginPage.open('login');
            await loginPage.waitForPageLoad();
            await loginPage.userSignUp(data.Name, data.Email);
            await loginPage.clickMrAndMrsTitleDotButton();
            await loginPage.enterPassword('Test@123');
            await loginPage.clickDaysDropdown();
        }
    });
});