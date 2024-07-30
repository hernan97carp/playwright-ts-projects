import { Page, Locator } from '@playwright/test';

export class ShoppingCarPage {
  page: Page;

  inputUsername: () => Locator;
  inputPassword: () => Locator;
  loginButton: () => Locator;
  itemsContainer: () => Locator;
  addToCar: () => Locator;
  currentName: () => Locator;
  shoppingCartContainer: () => Locator;
  currentDescription: () => Locator;
  currentPrice: () => Locator;
  checkOut: () => Locator;
  continue: () => Locator;

  constructor(driver: Page) {
    this.page = driver;
    this.inputUsername = () =>
      this.page.getByRole('textbox', { name: 'Username' });
    this.inputPassword = () =>
      this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton = () => this.page.getByRole('button', { name: 'Login' });
    this.itemsContainer = () =>
      this.page.locator('#inventory_container .inventory_item');
    this.addToCar = () =>
      this.page.getByRole('button', { name: 'Add to cart' });
    this.currentName = () =>
      this.page.locator('.cart_item_label .inventory_item_name');
    this.shoppingCartContainer = () =>
      this.page.locator('#shopping_cart_container a');
    this.currentDescription = () =>
      this.page.locator('.cart_item_label .inventory_item_desc');
    this.currentPrice = () =>
      this.page.locator('.cart_item_label .inventory_item_price');
    this.checkOut = () => this.page.getByRole('button', { name: 'Checkout' });
    this.continue = () => this.page.getByRole('button', { name: 'Continue' });
  }

  async loginSUT() {
    await this.inputUsername().fill('standard_user');
    await this.inputPassword().fill('secret_sauce');
    await this.loginButton().click();
  }

  async getRandomItemDetails() {
    const items = await this.itemsContainer().all();
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    const expectedName = await randomItem.locator('.inventory_item_name').innerText();
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();
    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
    await randomItem.getByRole('button', { name: 'Add to cart' }).click();

    console.log('Nombre:', expectedName);
    console.log('Precio:', expectedPrice);
    console.log('Descripción:', expectedDescription);

    console.log('random item is: ', await randomItem.innerText());
    console.log('random item price: ', expectedPrice);
    console.log('random item name: ', expectedName);
    console.log('random item description: ', expectedDescription);

    return { expectedName, expectedPrice, expectedDescription, randomItem };
  }

  async currentResults() {
    const currentName = await this.currentName().innerText();
    const currentDescription = await this.currentDescription().innerText();
    const currentPrice = await this.currentPrice().innerText();
    return { currentName, currentDescription, currentPrice };
  }

  async clickShoppingCart() {
    await this.shoppingCartContainer().click();
  }

  async clickCheckOutButton() {
    await this.checkOut().click();
  }

  async clickContinueButton() {
    await this.continue().click();
  }
}
