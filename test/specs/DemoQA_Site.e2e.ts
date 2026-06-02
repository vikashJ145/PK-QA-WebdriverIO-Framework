import { getExcelData } from '../utils/excelReader';
import * as path from 'path';
import loginPage from '../pageobjects/login.page';
import demoqaPage from '../pageobjects/demoQAPage';
describe('Signup Test (Excel Data)', () => {

    let testData: any[];

    before(() => {
        const filePath = path.join(process.cwd(), 'test', 'testData', 'loginData.xlsx');
        testData = getExcelData(filePath, 'Sheet1');
        console.log('Excel Data:', testData); 
    });

    it('should signup using excel data', async () => {

        for (const data of testData) {

            await loginPage.open('https://demoqa.com/');
            await demoqaPage.verifyAndClickElementTab();
            await demoqaPage.verifyAndClickTextBoxOption();
            await demoqaPage.enterUserName(data.username);
            await demoqaPage.enterEmail(data.email);
        
        }
    });
});