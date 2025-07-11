import {test, expect} from "@playwright/test";

/* Assignment: 1 - Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

const firstName = "Duraimurugan";
const lastName = "GK";

test("Login to Salesforce and create Leads", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");

    await page.click("//button[@title='App Launcher']");
    await page.click("(//button[@class='slds-button'])[2]");
    await page.click("//p[text()='Sales']");

    await page.waitForTimeout(5000);

    await page.click("//a[@title='Leads']");
    await page.click("//a[@title='New']");

    await page.locator("//button[@aria-label='Salutation']").click();

    await page.locator("//lightning-base-combobox-item[@data-value='Mr.']").click();

    await page.getByPlaceholder("Last Name").fill(lastName);

    await page.fill("//input[@name='Company']", "Tata 1mg");

    await page.click("//button[@name='SaveEdit']");

    await page.waitForTimeout(2000);

    const verifyLead = await page.locator("//slot[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text']").innerText();
    expect(verifyLead).toContain(lastName);
    console.log(`Lead ${verifyLead} is created`);
    
})

/* Assignment: 3. Create Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

test("Login to Salesforce and create Individuals", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");

    await page.click("//button[@title='App Launcher']");
    await page.click("(//button[@class='slds-button'])[2]");

    await page.click("//p[text()='Individuals']");
    await page.click("(//a[@class='slds-button slds-button_reset'])[14]");
    
    await page.click("(//a[@role='menuitem'])[1]");

    await page.getByPlaceholder("Last Name").fill(lastName);
    await page.click("//button[@title='Save']");

    await page.waitForTimeout(2000);

    const verifyIndividual = await page.locator("//div[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text']").innerText();
    expect(verifyIndividual).toContain(lastName);
    console.log(`Individual ${verifyIndividual} is created`);

})

/* Assignment: 4. Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Individuals tab
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name */

test("Login to Salesforce and edit an Individual", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");

    await page.click("//button[@title='App Launcher']");
    await page.click("(//button[@class='slds-button'])[2]");

    await page.click("//p[text()='Individuals']");
    await page.getByPlaceholder("Search this list...").fill(lastName);
    await page.keyboard.press("Enter");
    await page.click("(//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small'])[1]");
    await page.click("//a[@title='Edit']");

    await page.click("(//a[@role='combobox'])[1]");
    await page.click("//a[@title='Mr.']");
    await page.getByPlaceholder("First Name").fill(firstName);
    await page.click("//button[@title='Save']");

    await page.waitForTimeout(2000);

    const verifyF_Name = await page.locator("(//tr[@class='slds-hint-parent']//a)[1]").innerText();
    expect(verifyF_Name).toContain(firstName);
    console.log(`Individual ${verifyF_Name} was saved`);
    
})