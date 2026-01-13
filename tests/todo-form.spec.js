import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('Todo App - using POM', () => {

  test('Add single todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Belajar Playwright Day 11');

    const todoItem = await todoPage.getLastTodo();
    await expect(todoItem).toHaveText('Belajar Playwright Day 11');
  });

  test('Add multiple todos', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Todo pertama');
    await todoPage.addTodo('Todo kedua');

    const lastTodo = await todoPage.getLastTodo();
    await expect(lastTodo).toHaveText('Todo kedua');
  });

});