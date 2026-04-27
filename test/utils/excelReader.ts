import * as XLSX from 'xlsx';
import * as fs from 'fs';

export function getExcelData(filePath: string, sheetName: string): any[] {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Excel file not found at path: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);

    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
      const availableSheets = workbook.SheetNames.join(', ');
      throw new Error(
        `Sheet "${sheetName}" not found. Available sheets: [${availableSheets}]`
      );
    }

    const data = XLSX.utils.sheet_to_json(sheet);

    if (!data || data.length === 0) {
      throw new Error(`Sheet "${sheetName}" is empty.`);
    }

    return data;
  } catch (error: any) {
    console.error('Error reading Excel file:', error.message);
    throw error;
  }
}