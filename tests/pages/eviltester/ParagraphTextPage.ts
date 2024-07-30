import { Page, Locator } from '@playwright/test';
export class ParagraphTextPage {
  page: Page;
  firstParagraph: () => Locator;
  allElementsP: () => Locator;
  constructor(driver: Page) {
    this.page = driver;
    this.firstParagraph = () => this.page.locator('#para1');
    this.allElementsP = () => this.page.locator('p');
  }
}
