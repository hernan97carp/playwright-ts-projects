import { test, expect } from '@playwright/test';
import { AttributesPage } from '../../pages/eviltester/AttributesPage';

test.use({storageState: {cookies:[],origins:[]}})
test.describe('Paragraph Text | basic-web-page-test', () => {


  test('TC1: Verify the attributes of the page Attributes Page', async ({
    page,
  }) => {
    const attPage = new AttributesPage(page);
    await test.step('Go to the page', async () => {
      await page.goto('https://testpages.eviltester.com/styled/attributes-test.html');
    });

    await test.step('Verify the page title', async () => {
      const title = await page.title();
      expect(title).toBe('Test Page For Element Attributes');
    });

    await test.step('Locate element with simple attributes', async () => {
      await expect(attPage.textHasAttr()).toHaveText(
        'This paragraph has attributes',
      );
    });

    await test.step('Locate element with dynamic attribute', async () => {
      await expect(attPage.textHasDyAttr()).toHaveText(
        'This paragraph has dynamic attributes',
      );
    });

    await test.step('Locate Button and verify its attributes', async () => {
      await attPage.buttonAddAnotherAttribute();
      await expect(attPage.buttonNextId()).toBeVisible();
    });

    await test.step('Locate element with DYNAMIC attribute', async () => {
      await expect(attPage.dynamicText()).toHaveText(
        'This paragraph has dynamic attributes',
      );
    });
  });
});
