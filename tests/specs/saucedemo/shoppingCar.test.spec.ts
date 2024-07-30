import { test, expect } from '@playwright/test';
import { ShoppingCarPage } from '../../pages/saucedemo/ShoppingCarPage'

test.describe('SauceDemo | Shopping Cart', () => {
  test('TC1: purchase an item', async ({ page }) => {
    const shoppingCarPage = new ShoppingCarPage(page);
    await page.goto('https://www.saucedemo.com/inventory.html');

    await test.step('Get name, price, and description of the selected item', async () => {
      const itemDetails = await shoppingCarPage.getRandomItemDetails();
      await shoppingCarPage.clickShoppingCart();
      const currentResults = await shoppingCarPage.currentResults();
      expect(currentResults.currentName).toEqual(itemDetails.expectedName);
      expect(currentResults.currentDescription).toEqual(
        itemDetails.expectedDescription,
      );
      expect(currentResults.currentPrice).toEqual(itemDetails.expectedPrice);
    });

    await test.step('Click the check out button', async () => {
      await shoppingCarPage.clickCheckOutButton();
    });

    await test.step('Fill in shipping details', async () => {
      await page.getByPlaceholder('First Name').fill('Andres');
      await page.getByPlaceholder('Last Name').fill('Moreno');
      await page.getByPlaceholder('Zip/Postal Code').fill('5538');
      await shoppingCarPage.clickContinueButton();
    });

    await test.step('Complete the purchase', async () => {
      
      await page.getByRole('button', { name: 'Finish' }).click();
      await page.screenshot({
        path: 'screenshots/shoppingCart.png',
        fullPage: true,
      });
    });
  });
});
