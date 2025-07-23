import test from "@playwright/test"

// Assignment Requirements:
// 1. Navigate to http://leaftaps.com/opentaps/control/main
// 2. Enter the username and password
// 3. Click Login
// 4. Click CRM/SFA
// 5. Click Leads
// 6. Click Create Leads
// 7. Fill all the mandatory fields such as Company name, First name and Last name
// 8. Select Direct Mail from the Source dropdown using label
// 9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
// 10. Get the count and print all the values in the Marketing Campaign dropdown
// 11. Select General Services from the Industry dropdown using index
// 12. Select INR from the Preferred Currency dropdown
// 13. Select India from the Country dropdown
// 14. Select any state from the State dropdown
// 15. Get the count of all states and print the values in the console
// 16. Click Create Lead

test('Create Lead in LeafTaps', async ({ page }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main')
  await page.locator("input[name='USERNAME']").fill('demosalesmanager')
  await page.locator("input[name='PASSWORD']").fill('crmsfa')
  await page.locator(".decorativeSubmit").click()
  await page.waitForSelector("a:has-text('CRM/SFA')")
  await page.getByRole('link', { name: 'CRM/SFA' }).click()
  await page.waitForSelector("a:has-text('Leads')")
  await page.locator("//a[text()='Leads']").click()
  await page.getByRole('link', { name: 'Create Lead' }).click()
  await page.waitForSelector('#createLeadForm_companyName')
  await page.locator('#createLeadForm_companyName').fill('Tata 1mg')
  await page.locator('#createLeadForm_firstName').fill('Duraimurugan')
  await page.locator('#createLeadForm_lastName').fill('Kalyanasundaram')
  await page.locator('select#createLeadForm_dataSourceId').selectOption({ label: 'Direct Mail' })
  await page.selectOption("[id='createLeadForm_marketingCampaignId']",{value:"DEMO_MKTG_CAMP"})
  const dropdownOptions = page.locator('#createLeadForm_marketingCampaignId option')
  const totalOptions = await dropdownOptions.count()
  console.log('Total options in Marketing Campaign dropdown: ' + totalOptions)
  for(let i=0;i<totalOptions;i++){
    console.log(await dropdownOptions.nth(i).innerText())
  }
  await page.selectOption("[id ='createLeadForm_industryEnumId']",{index:6})
  await page.selectOption("[id='createLeadForm_currencyUomId']",{value:"INR"})
  await page.selectOption("[id='createLeadForm_generalCountryGeoId']",{value:"IND"})
  await page.selectOption("[id='createLeadForm_generalStateProvinceGeoId']",{value:"IN-TN"})
  const states = page.locator('#createLeadForm_generalStateProvinceGeoId option')
  const totalStates = await states.count()
  console.log('Total number of states present in dropdown: ' + totalStates)
  for(let i=0;i<totalStates;i++){
    console.log(await states.nth(i).innerText())
  }
  await page.locator(".smallSubmit").click()

})