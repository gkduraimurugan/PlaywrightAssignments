import {test, expect} from "@playwright/test";

/* Assignment: 2. Edit Lead
http://leaftaps.com/opentaps/control/main
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button
12.Click Edit
13.Change the company name
14.Click Update */

const companyName1 = "Tata 1mg";
const companyName2 = "Healthcare Solutions";
const fName = "Duraimurugan";
const lName = "GK";

test("Login leaftaps and edit leads", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("//input[@id='username']", "DemoCSR2");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();
    await page.locator("//a[contains(text(), 'CRM')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.waitForTimeout(3000);
    await page.getByRole("link", {name: "Create Lead"}).click();
    await page.fill("(//input[@name='companyName'])[2]", companyName1);
    await page.fill("(//input[@name='firstName'])[3]", fName);
    await page.fill("(//input[@name='lastName'])[3]", lName);

    const createLead = page.locator("//input[@name='submitButton']");
    createLead.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    await page.click("//input[@name='submitButton']");
    await page.waitForTimeout(2000);

    const pageTitle = await page.title();
    expect.soft(pageTitle).toContain("View Lead");
    console.log("Lead Created");

    await page.getByRole("link", {name: "Edit"}).click();

    await page.locator("(//input[@name='companyName'])[2]").clear();
    await page.fill("(//input[@name='companyName'])[2]", companyName2);
    await page.click("(//input[@name='submitButton'])[1]");

    const companyValue = await page.innerText("//span[@id='viewLead_companyName_sp']");
    expect.soft(companyValue).toMatch(companyName2);
    console.log("Company name changed successfully");

})