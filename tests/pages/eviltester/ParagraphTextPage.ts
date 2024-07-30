import { Page, Locator } from '@playwright/test';

export class ParagraphTextPage {
  private page: Page;
  private readonly firstParagraphLocator: Locator;
  private readonly allElementsPLocator: Locator;

  constructor(driver: Page) {
    this.page = driver;
    this.firstParagraphLocator = this.page.locator('#para1');
    this.allElementsPLocator = this.page.locator('p');
  }

// Methods
public async goTo():Promise<void>{
  await this.page.goto('https://testpages.eviltester.com/styled/basic-web-page-test.html');
}

  // Getter para firstParagraph
  public get firstParagraph(): Locator {
    return this.firstParagraphLocator;
  }

  // Getter para allElementsP
  public get allElementsP(): Locator {
    return this.allElementsPLocator;
  }


}