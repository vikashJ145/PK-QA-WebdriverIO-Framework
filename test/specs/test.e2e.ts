import loginPage from '../pageobjects/login.page';
import LoginPage from '../pageobjects/login.page'
import { getExcelData } from '../utils/excelReader'
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

            await LoginPage.open()
            await browser.pause(2000)

            await LoginPage.userSignUp(data.Name, data.Email);
            await LoginPage.clickTitleDotButton();
            await loginPage.enterPassword('Test@123')
        }
    });
});