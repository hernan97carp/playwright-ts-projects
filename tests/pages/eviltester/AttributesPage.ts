import { Page, Locator } from '@playwright/test';
export class AttributesPage {
  page: Page;
  firstParagraph: () => Locator;
  textHasAttr: () => Locator;
  textHasDyAttr: () => Locator;
  buttonWithText: () => Locator;
  buttonNextId: () => Locator;
  dynamicText: () => Locator;
  allElementsP: () => Locator;
  constructor(driver: Page) {
    this.page = driver;
    this.firstParagraph = () => this.page.locator('#para1');
    this.textHasAttr = () =>
      this.page.locator('[custom-attrib="attrib in source at load"]');
    this.textHasDyAttr = () => this.page.locator('#jsattributes');
    this.buttonWithText = () =>
      this.page.getByRole('button', {
        name: 'Add Another Attribute',
      });
    this.buttonNextId = () => this.page.locator('[nextid="2"]');
    this.dynamicText = () => this.page.locator('.coloured-para-red p');
    this.allElementsP = () => this.page.locator('p');
  }

  //methods
  async buttonAddAnotherAttribute() {
    await this.buttonWithText().click();
  }
}
