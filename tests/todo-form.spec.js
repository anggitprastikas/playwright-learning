import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

//ini kelas untuk test scenario untuk penggunaan POM 
test.describe('Todo App - using POM', () => {

  //disini test add single todo
  //terdapat async karena ada await
  //penggunaan const karena velue tidak berubah atau tidak akan diganti
  test('Add single todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    //await ini untuk menunggu perintah atau halamannya selesai terlebih dahulu
    await todoPage.goto();
    await todoPage.addTodo('Belajar Playwright Day 11');

    const todoItem = await todoPage.getLastTodo();
    await expect(todoItem).toContainText('Belajar Playwright Day 11');
  });

  test('Add multiple todos', async ({ page }) => {

    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addTodo('Todo pertama');
    await todoPage.addTodo('Todo kedua');


    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(2);


    const lastTodo = await todoPage.getLastTodo();
    await expect(lastTodo).toHaveText('Todo kedua');
  });

  test('Should not add empty todo', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addEmptyTodo();

  const todoItems = page.locator('.todo-list li');
  await expect(todoItems).toHaveCount(0);
  });


});