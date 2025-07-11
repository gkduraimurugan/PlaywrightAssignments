import {test, expect} from "@playwright/test";

const userName = "Demosalesmanager"; 
const passWord = "crmsfa";
const fName = "Duraimurugan";
const lName = "GK";
const companyName = "Tata 1mg";
const companyName2 = "Healthcare Solutions";

test("To create a lead", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", userName);
    await page.fill("#password", passWord);
    await page.click(".decorativeSubmit");
    await page.click("//a[contains(text(), 'CRM')]");
    await page.click("//a[text()='Leads']");
    await page.click("//a[text()='Create Lead']");
    await page.fill("#createLeadForm_companyName", companyName);
    await page.fill("#createLeadForm_firstName", fName);
    await page.fill("#createLeadForm_lastName", lName);
    await page.fill("#createLeadForm_personalTitle", "Mr.");
    await page.fill("#createLeadForm_generalProfTitle", "Mr.");
    await page.fill("#createLeadForm_annualRevenue", "700000");
    await page.fill("#createLeadForm_departmentName", "Information Technology - Software");
    await page.fill("#createLeadForm_primaryPhoneNumber", "1234567890");
    await page.click(".smallSubmit");

    console.log("Validating using non-retry assertion");
    const comName1 = await page.innerText("#viewLead_companyName_sp");
    expect.soft(comName1).toMatch(companyName);
    console.log(`Company name: ${comName1}`);

    const f_Name1 = await page.innerText("#viewLead_firstName_sp");
    expect.soft(f_Name1).toMatch(fName);
    console.log(`First name: ${f_Name1}`);

    const l_Name1 = await page.innerText("#viewLead_lastName_sp");
    expect.soft(l_Name1).toMatch(lName);
    console.log(`Last name: ${l_Name1}`);

    const receivedStatus1 = await page.innerText("#viewLead_statusId_sp");
    expect.soft(receivedStatus1).toMatch("Assigned");
    console.log(`Status: ${receivedStatus1}`);

    console.log("Validating using auto-retry assertion");
    const comName2 = await page.innerText("#viewLead_companyName_sp");
    await expect.soft(page.locator("#viewLead_companyName_sp")).toContainText(companyName);
    console.log(`Company name: ${comName2}`);

    const f_Name2 = await page.innerText("#viewLead_firstName_sp");
    expect.soft(page.locator("#viewLead_firstName_sp")).toContainText(fName);
    console.log(`First name: ${f_Name2}`);

    const l_Name2 = await page.innerText("#viewLead_lastName_sp");
    expect.soft(page.locator("#viewLead_lastName_sp")).toContainText(lName);
    console.log(`Last name: ${l_Name2}`);

    const receivedStatus2 = await page.innerText("#viewLead_statusId_sp");
    expect.soft(page.locator("#viewLead_statusId_sp")).toContainText("Assigned");
    console.log(`Status: ${receivedStatus2}`);

    const pageTitle = await page.title();
    expect.soft(pageTitle).toMatch("View Lead");
    console.log("Page Title: "+pageTitle)

})

test("To edit a lead", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", userName);
    await page.fill("#password", passWord);
    await page.click(".decorativeSubmit");
    await page.click("//a[contains(text(), 'CRM')]");
    await page.click("//a[text()='Leads']");
    await page.click("//a[text()='Find Leads']");
    await page.fill("(//input[@name='firstName'])[3]", fName);
    await page.getByRole("button", {name: "Find Leads"}).click();
    await page.click("((//table[@class='x-grid3-row-table'])[1]//a)[3]");
    await page.click("//a[text()='Edit']");
    await page.fill("#updateLeadForm_companyName", companyName2);
    await page.fill("#updateLeadForm_annualRevenue", "1400000");
    await page.fill("#updateLeadForm_departmentName", "QA Engineering");
    await page.fill("//textarea[@name='description']", "I am working as a SDET-II");
    await page.click("(//input[@name='submitButton'])[1]");

    const comName = await page.innerText("#viewLead_companyName_sp");
    expect.soft(comName).toMatch(companyName2);
    console.log(`Company name: ${comName}`);

    const annualRevenue = await page.innerText("#viewLead_annualRevenue_sp");
    expect.soft(annualRevenue).toMatch("$1,400,000.00");
    console.log(`First name: ${annualRevenue}`);

    const department = await page.innerText("#viewLead_departmentName_sp");
    expect.soft(department).toMatch("QA Engineering");
    console.log(`Last name: ${department}`);

    const description = await page.innerText("#viewLead_description_sp");
    expect.soft(description).toEqual("I am working as a SDET-II");
    console.log(`Status: ${description}`);

    const pageTitle = await page.title();
    expect.soft(pageTitle).toMatch("View Lead");
    console.log("Page Title: "+pageTitle)

})

test("To create a new account in Salesforce", async({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username").fill("majay3574@gmail.com");
    await page.getByLabel("Password").fill("Ajaymichael@123");
    await page.click("#Login");
    await page.waitForTimeout(10000);

    const pageTitle = await page.title();
    expect.soft(pageTitle).toContain("Home");
    console.log("Page title: "+pageTitle);

    await page.click(".slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show");
    await page.getByText("View All").click();
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.click("(//a[@class='slds-text-heading_small'])[1]");
    await page.click("[title='Accounts']");
    await page.getByRole("button", {name: "New"}).click();
    await page.fill("[name='Name']", fName);
    await page.click("//button[@name='SaveEdit']");

    const toastMessage = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");

    expect.soft(toastMessage).toContain("created");
    console.log(toastMessage);

})