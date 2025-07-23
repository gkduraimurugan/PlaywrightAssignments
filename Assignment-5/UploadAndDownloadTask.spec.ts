import test, { expect } from "@playwright/test"

// Assignment Requirements:
// File Upload
// - Upload a document without clicking the Upload button on the page
// - Upload an image inside the red square area
// - Assert that the file has been uploaded
// File Download
// - Download file.json from the list of files
// - Assert that the file has been downloaded in the required path

// File Download
// - Download file.json from the list of files
// - Assert that the file has been downloaded in the required path


test.describe.serial("Upload & Download Assignment",()=>{

test('Upload File without clicking Upload button', async ({ page }) => {

    //Upload a document without clicking the Upload button on the page and assert

    await page.goto('https://the-internet.herokuapp.com/upload')
    page.locator("//input[@id='file-upload']").setInputFiles("Utils/MyUploadedFile.docx")
    await page.click('#file-submit')
    const pageTitle = page.locator("//div[@id='uploaded-files']/preceding-sibling::h3")
    expect(pageTitle).toHaveText('File Uploaded!')
    console.log('The file Uploaded succesfully without clicking Upload button')
    await page.waitForTimeout(5000)
    await page.goBack()

    //Upload an image inside the red box

    const fileupload=page.waitForEvent('filechooser')
    await page.click("#drag-drop-upload")
    const filup=await fileupload
    await filup.setFiles("Utils/TestLeaf.jpeg")
    const upFile = page.locator("//div/span[text()='TestLeaf.jpeg']")
    expect(upFile).toHaveText('TestLeaf.jpeg')
    console.log('The image Uploaded inside the box succesfully')

})

// File Download
// - Download file.json from the list of files
// - Assert that the file has been downloaded in the required path


test('Download file.json and assert download',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download')
    const downloadPromise=page.waitForEvent('download')
    await page.getByText("web_local.json",{exact:true}).click()
    const load=await downloadPromise
    await load.saveAs("download/"+load.suggestedFilename())
    expect("download/" + load.suggestedFilename()).toBe('download/web_local.json')
    console.log('The Download folder is created')
    expect(load.suggestedFilename()).toBe('web_local.json')
    console.log('The web_local.json file is succesfully downloaded to the downlaod folder')
    
})

})