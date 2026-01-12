import{test,expect} from '@playwright/test';

test('Add new to do item and verify it appears', async({page})=>{
// Step 1: Open TodoMVC app
await page.goto('https://demo.playwright.dev/todomvc');

// Step 2: Fill todo input
const todoInput = page.getByPlaceholder('what needs to be done?');
await todoInput.fill('Belajar Playwright Day 7');

// Step 3: Press Enter to submit
await todoInput.press('Enter');

// Step 4: Verify new todo appears
const todoItem = page.getByText('Belajar Playwright Day 7');
await expect(todoItem).toBeVisible();

});