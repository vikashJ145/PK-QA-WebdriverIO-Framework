# WebDriverIO Automation Framework (TypeScript)

##  Overview

This project is an automation testing framework built using **WebDriverIO + TypeScript**.
It follows a **Page Object Model (POM)** design pattern and supports **data-driven testing using Excel**.

The framework is designed to automate end-to-end (E2E) test cases such as **Signup/Login flows** using test data from external sources.

---

##  Project Structure

```
WEBRIVERIO-FRAMEWORK/
│── node_modules/
│── test/
│   ├── pageobjects/        # Page Object classes (LoginPage, etc.)
│   ├── specs/              # Test specs (test.e2e.ts)
│   ├── testData/           # Excel test data (loginData.xlsx)
│   └── utils/
│       ├── dataGenerator.ts   # Random data generation
│       ├── excelReader.ts     # Excel file reader utility
│
│── package.json
│── tsconfig.json
│── wdio.conf.ts            # WebDriverIO configuration
```

---

##  Features

*  WebDriverIO with TypeScript
*  Page Object Model (POM)
*  Data-driven testing using Excel
*  Reusable utility functions
*  Random test data generation (email)
*  Scalable and maintainable structure

---

##  Prerequisites

Make sure you have the following installed:

* Node.js (>= 16)
* npm or yarn
* VS Code (recommended)

---

##  Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd webdriverio-framework
```

Install dependencies:

```bash
npm install
```

---

##  Running Tests

Run all tests:

```bash
npx wdio run wdio.conf.ts
```

---

##  Data-Driven Testing (Excel)

* Test data is stored in:

  ```
  test/testData/loginData.xlsx
  ```
* Excel is read using:

  ```
  utils/excelReader.ts
  ```
* Data is fetched in test using:

```ts
testData = getExcelData(filePath, 'Sheet1');
```

---

##  Test Flow Example

1. Read test data from Excel
2. Loop through each dataset
3. Open application
4. Perform signup/login
5. Validate results

Example:

```ts
for (const data of testData) {
  await LoginPage.open();
  await LoginPage.userSignUp(data.Name, data.Email);
  await LoginPage.enterPassword('Test@123');
}
```

---

##  Random Data Generator

To avoid duplicate emails, a utility is used:

```ts
export function generateRandomEmail(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `testuser_${timestamp}_${random}@mail.com`;
}
```

---

##  Best Practices Used

* Page Object Model (POM)
* Reusable methods
* Separation of test data
* Async/Await for stability
* Clean folder structure

---

##  Future Enhancements

* Add reporting (Allure/HTML Reports)
* CI/CD integration
* Parallel execution optimization
* Environment-based config

---

##  Author

**Piyush Kushwah**
QA Automation Engineer
