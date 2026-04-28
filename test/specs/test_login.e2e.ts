import testLoginPage from '../pageobjects/test_login.page';
import { getExcelData } from '../utils/excelReader';
import * as path from 'path';


describe('Login Test (Excel Data)', () => {

    let testData: any[];

    before(() => {
        const filePath = path.join(process.cwd(), 'test', 'testData', 'loginData.xlsx');
        testData = getExcelData(filePath, 'Sheet1');
        console.log('Excel Data:', testData); 
    });

    it('Login using excel data', async () => {

            await testLoginPage.open('https://practicetestautomation.com/practice-test-login/');
            await testLoginPage.waitForPageLoad();
            await testLoginPage.userSignUp('student', 'Password123');
    });
});