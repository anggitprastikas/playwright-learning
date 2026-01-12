import{test,expect} from '@playwright/test';

test('Open Playwright homepage and verify main heading', async ({page})=>{
//step 1: Open Website
await page.goto('https://playwright.dev/')

//step 2: Verify heading is visible
const heading = page.locator('h1');
await expect(heading).toBeVisible();
});