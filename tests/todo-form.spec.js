import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { todoData } from '../data/todoData';

test.describe('Todo App — Add Todo Feature', () => {
  let todoPage;

  test.beforeEach(async({page})=> {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });


  test('should add a new todo when user submits valid input', async ({ page }) => {
    await todoPage.addTodo(todoData.singleTodo);
    await expect(todoPage.getLastTodo()).toHaveText(todoData.singleTodo);
  });

  test('should add multiple todos when user submits more than one item', async ({ page }) => {
    for (const todo of todoData.multipleTodos) {
      await todoPage.addTodo(todo);
    }

    await expect(todoPage.getLastTodo()).toHaveText(todoData.multipleTodos[1]);
  });

  test('User cannot add todo when input is empty', async ({ page }) => {
  const todoPage = new TodoPage(page);

    await test.step('Open Todo application', async () => {
    await todoPage.goto();
  });
    await test.step('Submit empty todo input', async () => {
    await todoPage.addTodo('');
  });
    await test.step('Verify no todo is added', async () => {
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(0);
  });

  });

  test('should add todo with single character (edge case)', async ({ page }) => {
    await todoPage.addTodo(todoData.edgeCaseTodo);
    await expect(todoPage.getLastTodo()).toHaveText(todoData.edgeCaseTodo);

  });

});