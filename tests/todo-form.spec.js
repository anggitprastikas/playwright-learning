import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Add todo using POM', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Belajar Playwright Day 10');

  const todoItem = await todoPage.getLastTodo();
  await expect(todoItem).toHaveText('Belajar Playwright Day 10');
});