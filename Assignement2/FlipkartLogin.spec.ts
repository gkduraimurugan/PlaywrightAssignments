import { test, expect, chromium, firefox } from "@playwright/test";

test.describe("Red Bus and Flipkart Navigation Tests", () => {
  test("Red Bus in Edge Browser", async () => {
    // Launch Edge browser
    const edgeBrowser = await chromium.launch({ channel: 'msedge' });
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();

    // Navigate to Red Bus
    await edgePage.goto("https://www.redbus.in");

    // Get and print page title and URL
    const redBusTitle = await edgePage.title();
    const redBusUrl = await edgePage.url();
    console.log(`Red Bus Page Title: ${redBusTitle}`);
    console.log(`Red Bus Page URL: ${redBusUrl}`);

    // Close the Edge browser context and browser
    await edgeContext.close();
    await edgeBrowser.close();
  });

  test("Flipkart in Firefox Browser", async () => {
    // Launch Firefox browser
    const firefoxBrowser = await firefox.launch();
    const firefoxContext = await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();

    // Navigate to Flipkart
    await firefoxPage.goto("https://www.flipkart.com");

    // Get and print page title and URL
    const flipkartTitle = await firefoxPage.title();
    const flipkartUrl = await firefoxPage.url();
    console.log(`Flipkart Page Title: ${flipkartTitle}`);
    console.log(`Flipkart Page URL: ${flipkartUrl}`);

    // Close the Firefox browser context and browser
    await firefoxContext.close();
    await firefoxBrowser.close();
  });
});