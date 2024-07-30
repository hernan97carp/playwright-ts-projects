import { Locator, Page } from '@playwright/test';
export class NumberProcessorPage {
  page: Page;
  processorInput: () => Locator;
  processorButton: () => Locator;
  outputMessage: () => Locator;
  mappedNumbers: { [index: number]: string };

  // Instanciar el Page de playwright
  constructor(driver: Page) {
    this.page = driver;
    this.processorInput = () => this.page.locator('#numentry');
    this.processorButton = () => this.page.locator('[type="submit"]');
    this.outputMessage = () => this.page.locator('#message');
    this.mappedNumbers = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero',
    };
  }

  // Add methods
  async enterNumbers(numbers: number[]) {
    console.log('Entering numbers:', numbers.toString());
    await this.processorInput().fill(numbers.toString());
  }

  async processOnServer() {
    console.log('Clicking on process button');
    await this.processorButton().click();
  }

  async getProcessedNumbers() {
    await this.outputMessage().isVisible();
    const text = await this.outputMessage().innerText();
    console.log('Output message:', text);
    return text;
  }

  async setNumbersToNames(numbers: number[]) {
    const convertNumbers = numbers.map((i) => this.mappedNumbers[i]);
    console.log('Converted numbers:', convertNumbers.toString());
    return convertNumbers.toString().replaceAll(',', ', ');
  }
}
