const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('go to store');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('feed dog');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('do homework');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('take shower');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('go to sleep');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'go to sleep' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'take shower' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'do homework' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'feed dog' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'go to store' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('button', { name: 'Clear completed' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();