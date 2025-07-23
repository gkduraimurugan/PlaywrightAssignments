import test, { expect } from "@playwright/test"

// Precondition:
// - Launch Chromium in non-headless mode
// - Use required fixtures
// - Navigate to https://login.salesforce.com/


// Requirements:
// - Enter username
// - Enter password
// - Click Login
// - Click App Launcher icon
// - Click View All
// - Enter Accounts in App Launcher search box
// - Click Accounts
// - Click New
// - Enter Account Name
// - Select Warm from the Rating dropdown
// - Select Prospect from the Type dropdown
// - Select Banking from the Industry dropdown
// - Select Public from the Ownership dropdown
// - Click Save
// - Assert the Account created
// - Upload files
// - Click Done and assert the uploaded file


test('File Upload', async ({ page }) => {

    await page.goto('https://login.salesforce.com/')
    await page.fill('#username', 'dilip@testleaf.com')
    await page.fill('#password', 'Leaf@123')
    await page.click('#Login')
    await page.getByRole("button", { name: "App Launcher" }).click()
    await page.getByRole("button", { name: "View All" }).click()
    await page.fill("//input[@class='slds-input']", 'Accounts')
    await page.click("//mark[text()='Accounts']")
    await page.click("//div[@title='New']")
    await page.fill("//input[@name='Name']", 'Duraimurugan')
    await page.click("(//button[@role='combobox'])[1]")
    await page.click('//lightning-base-combobox-item[@data-value="Warm"]')
    await page.click("(//button[@role='combobox'])[2]")
    await page.click('//lightning-base-combobox-item[@data-value="Prospect"]')
    await page.click("(//button[@role='combobox'])[4]")
    await page.click('//lightning-base-combobox-item[@data-value="Banking"]')
    await page.click("(//button[@role='combobox'])[3]")
    await page.click('//lightning-base-combobox-item[@data-value="Public"]')
    await page.click("//button[@name='SaveEdit']")
    const accTitle = page.locator("//h1//lightning-formatted-text[@slot='primaryField']")
    console.log(accTitle)
    await expect(accTitle).toHaveText('Duraimurugan')
    console.log("Account Created Succesfuly")
    const fileupload = page.waitForEvent('filechooser')
    await page.click("//span[@part='button']")
    const filup = await fileupload
    await filup.setFiles("Utils/Fileupload.docx")
    await page.click("//button/span[text()='Done']")
    const docTitle = page.locator("//span[@title='Fileupload']")
    console.log(docTitle)
    await expect(docTitle).toHaveText('MyUploadedFile')
    console.log("The File has been Uploaded Succesfuly")
})