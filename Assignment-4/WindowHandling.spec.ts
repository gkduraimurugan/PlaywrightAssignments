import test, { expect } from "@playwright/test";

test('Windows Handling Assignment',async({context,page})=>{

    await page.goto('https://login.salesforce.com/')

    await page.fill("//input[@id='username']",'dilip@testleaf.com')

    await page.fill("//input[@id='password']",'Leaf@123')

    await page.click("//input[@id='Login']")

    const childPromise = context.waitForEvent('page')

    await page.getByTitle(": Mobile Publisher").click()

    const child = await childPromise

    await child.waitForTimeout(1000)

    console.log('Child page Title: '+ await child.title())

    await child.click("//button[text()='Confirm']")

    const Url = child.url()
    const Title = await child.title()

    console.log('The Title of current page is: '+Title)

    console.log('The Url of current page is: '+Url)

    const expectedUrl = 'https://www.salesforce.com/service/cloud/'

    const expectedTitle = 'Service Cloud: AI-powered Customer Service Agent Console | Salesforce US'

    expect(Url).toEqual(expectedUrl)

    expect(Title).toEqual(expectedTitle)
    
    console.log('All assertions passed successfully')
   
})