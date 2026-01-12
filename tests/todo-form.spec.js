import{test,expect} from '@playwright/test';

test('Add new to do item and verify it appears', async({page})=>{
// Step 1: Open TodoMVC app
await page.goto('https://demo.playwright.dev/todomvc');

// Step 2: Fill todo input
const todoInput = page.getByPlaceholder('What needs to be done?');
await todoInput.fill('Belajar Playwright itu menyenangkan');

// Step 3: Press Enter to submit
await todoInput.press('Enter');

// Step 4: Verify new todo appears
const todoItem = page.locator('.todo-list li').last();
await expect(todoItem).toHaveText('Belajar Playwright itu menyenangkan');

});