import { Page, Locator } from '@playwright/test';

export class AttributesPage {
  private page: Page;
  
  // Locators (private)
  private firstParagraphLocator: Locator;
  private textHasAttrLocator: Locator;
  private textHasDyAttrLocator: Locator;
  private buttonWithTextLocator: Locator;
  private buttonNextIdLocator: Locator;
  private dynamicTextLocator: Locator;
  private allElementsPLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstParagraphLocator = this.page.locator('#para1');
    this.textHasAttrLocator = this.page.locator('[custom-attrib="attrib in source at load"]');
    this.textHasDyAttrLocator = this.page.locator('#jsattributes');
    this.buttonWithTextLocator = this.page.getByRole('button', { name: 'Add Another Attribute' });
    this.buttonNextIdLocator = this.page.locator('[nextid="2"]');
    this.dynamicTextLocator = this.page.locator('.coloured-para-red p');
    this.allElementsPLocator = this.page.locator('p');
  }

  // Public Methods
  public async addAnotherAttribute():Promise<void> {
    await this.buttonWithTextLocator.click();
  }
  public async goTo():Promise<void>{
    await this.page.goto('https://testpages.eviltester.com/styled/attributes-test.html');
  }

  // Public Getters

  public get textHasAttr(): Locator{
    return this.textHasAttrLocator;
  }

  public get textHasDyAttr(): Locator {
    return this.textHasDyAttrLocator;
  }

  public get firstParagraph(): Locator {
    return this.firstParagraphLocator;
  }

  public get dynamicText(): Locator {
    return this.dynamicTextLocator;
  }

  public get allElementsP(): Locator {
    return this.allElementsPLocator;
  }
  public get buttonNextId(): Locator{
    return this.buttonNextIdLocator;
  }


}
