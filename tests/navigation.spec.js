import{test,expect} from '@playwright/test';

test('Navigate to Docs page from homepage', async({page})=>{
//Step 1: Open homepage
await page.goto('https://playwright.dev/');

//Step 2: Click "Docs" link
await page.getByRole('link',{name:'Docs'}).click();

//Step 3: Verify URL contains /docs
await expect(page).toHaveURL(/.*docs*/);

});