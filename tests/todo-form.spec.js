import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { todoData } from '../data/todoData';

test.describe('Todo App — Add Todo Feature', () => {

  test('should add a new todo when user submits valid input', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo(todoData.singleTodo);

    await expect(todoPage.getLastTodo()).toHaveText(todoData.singleTodo);
  });

  test('should add multiple todos when user submits more than one item', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();

    for (const todo of todoData.multipleTodos) {
      await todoPage.addTodo(todo);
    }

    await expect(todoPage.getLastTodo()).toHaveText(todoData.multipleTodos[1]);
  });

  test('should NOT add todo when input is empty', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo(todoData.emptyTodo);

  const todoItems = page.locator('.todo-list li');
  await expect(todoItems).toHaveCount(0);
  });

  test('should add todo with single character (edge case)', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo(todoData.edgeCaseTodo);

    await expect(todoPage.getLastTodo()).toHaveText(todoData.edgeCaseTodo);

  });

});