import test, { expect } from "@playwright/test";

test('Merge Leads Assignment',async({context,page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.fill("//input[@id='username']",'Demosalesmanager')

    await page.fill("//input[@id='password']",'crmsfa')

    await page.click(".decorativeSubmit")

    await page.click("//img[contains(@src,'crm.png')]")
    
    await page.click("//a[text()='Leads']")

    await page.click("//a[text()='Merge Leads']")

    const childPromise1=context.waitForEvent('page')

    await page.click("(//img[@alt='Lookup'])[1]")

    const child1=await childPromise1

    await child1.waitForLoadState()

    await child1.click("(//div[contains(@class,'x-grid3-col-partyId')]//a)[1]")

    const childPromise2=context.waitForEvent('page')

    await page.click("(//img[@alt='Lookup'])[2]")

    const child2=await childPromise2

    await child2.waitForLoadState()

    await child2.click("(//div[contains(@class,'x-grid3-col-partyId')]//a)[2]")

        page.once('dialog',async alert=>{

        const type=alert.type()

        const message=alert.message()

        console.log('Alert Type:',type)

        console.log('Alert Message:',message)

        await alert.accept()

        })

    await page.click("//a[text()='Merge']")

    await page.waitForTimeout(3000)

    const title=await page.title()

    console.log("Page Title after Merge:",title)

    expect(title).toContain('View Lead')

    console.log('Assertion seccusful')
})