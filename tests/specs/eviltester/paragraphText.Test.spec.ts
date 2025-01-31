import { test, expect } from '@playwright/test';
import { ParagraphTextPage } from '../../pages/eviltester/ParagraphTextPage';

//* TEST SUITE
test.use({storageState: {cookies:[],origins:[]}})
test.describe('EVIL TESTER | Paragraph Text | Verify locators', () => {
  //* TEST CASES
  test('TC1: Verify Locators of the paragraph Web page ', async ({ page }) => {
    const pgPage = new ParagraphTextPage(page);
    await test.step('Navigate to the page', async () => {
      await pgPage.goTo()
    });

    await test.step('Verify the page title', async () => {
      const title = await page.title();
      expect(title).toBe('Basic Web Page Title');
    });

    await test.step('Locate and verify the first paragraph', async () => {
      await expect(pgPage.firstParagraph).toHaveText('A paragraph of text');
    });

    await test.step('Locate and count all <p> elements', async () => {
      const allElements = pgPage.allElementsP; 
      const allElementsCount = await allElements.count(); 
      expect(allElementsCount).toBe(4);
    });
  });
});
