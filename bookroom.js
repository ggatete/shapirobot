const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://umich.libcal.com/reserve/shapirorooms');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTitle('8:00am Monday, March 6, 2023 - Shapiro 2nd Floor - Study Room 2128 - Available').click();
  await page.getByRole('combobox', { name: 'Shapiro 2nd Floor - Study Room 2128: 8:00am Monday, March 6, 2023 until...' }).selectOption('2023-03-06 12:00:00');
  await page.getByRole('button', { name: 'Submit Times' }).click();
  await page.getByPlaceholder('Uniqname or Friend ID').fill('ggatete');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Baller23831004@');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.frameLocator('#duo_iframe').getByRole('button', { name: 'Cancel' }).click();
  await page.frameLocator('#duo_iframe').getByLabel('Remember me for 7 days').check();
  await page.frameLocator('#duo_iframe').getByRole('button', { name: 'Send Me a Push' }).click();
  await page.waitForTimeout(10000)
  await page.goto('https://shibboleth.umich.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s1&_eventId_proceed=1');
  await page.goto('https://umich.libcal.com/spaces/auth?returnUrl=%2Freserve%2Fshapirorooms&token=bLI4H8JCdPi8zF3FZu3W8vwswNWCoRF9rzlAODHowBBmv7BXUJ3UlGp8ByVYm4Y');
  await page.getByLabel('Reservation title (will show online and on the door): *').click();
  await page.getByLabel('Reservation title (will show online and on the door): *').fill('sk');
  await page.getByText('General Study').click();
  await page.getByRole('button', { name: 'Submit my Booking' }).click();
  await page.getByRole('link', { name: 'Make Another Booking' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTitle('8:00am Tuesday, March 7, 2023 - Shapiro 2nd Floor - Study Room 2130 - Available').click();
  await page.getByRole('combobox', { name: 'Shapiro 2nd Floor - Study Room 2130: 8:00am Tuesday, March 7, 2023 until...' }).selectOption('2023-03-07 12:00:00');
  await page.getByRole('button', { name: 'Submit Times' }).click();
  await page.getByLabel('Reservation title (will show online and on the door): *').click();
  await page.getByLabel('Reservation title (will show online and on the door): *').fill('sk');
  await page.locator('div').filter({ hasText: 'General Study' }).click();
  await page.getByText('General Study').click();
  await page.getByRole('button', { name: 'Submit my Booking' }).click();
  await page.getByRole('link', { name: 'Make Another Booking' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTitle('8:00am Wednesday, March 8, 2023 - Shapiro 2nd Floor - Study Room 2130 - Available').click();
  await page.getByRole('combobox', { name: 'Shapiro 2nd Floor - Study Room 2130: 8:00am Wednesday, March 8, 2023 until...' }).selectOption('2023-03-08 12:00:00');
  await page.getByRole('button', { name: 'Submit Times' }).click();
  await page.getByLabel('Reservation title (will show online and on the door): *').click();
  await page.getByLabel('Reservation title (will show online and on the door): *').fill('sk');
  await page.getByText('General Study').click();
  await page.getByRole('button', { name: 'Submit my Booking' }).click();
  await page.getByRole('link', { name: 'Make Another Booking' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTitle('8:00am Thursday, March 9, 2023 - Shapiro 2nd Floor - Study Room 2130 - Available').click();
  await page.getByRole('combobox', { name: 'Shapiro 2nd Floor - Study Room 2130: 8:00am Thursday, March 9, 2023 until...' }).selectOption('2023-03-09 12:00:00');
  await page.getByRole('button', { name: 'Submit Times' }).click();
  await page.getByLabel('Reservation title (will show online and on the door): *').click();
  await page.getByLabel('Reservation title (will show online and on the door): *').fill('sk');
  await page.getByText('General Study').click();
  await page.getByRole('button', { name: 'Submit my Booking' }).click();
  await page.getByRole('link', { name: 'Make Another Booking' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTitle('8:00am Friday, March 10, 2023 - Shapiro 2nd Floor - Study Room 2130 - Available').click();
  await page.getByRole('combobox', { name: 'Shapiro 2nd Floor - Study Room 2130: 8:00am Friday, March 10, 2023 until...' }).selectOption('2023-03-10 12:00:00');
  await page.getByRole('button', { name: 'Submit Times' }).click();
  await page.getByLabel('Reservation title (will show online and on the door): *').click();
  await page.getByLabel('Reservation title (will show online and on the door): *').fill('sk');
  await page.getByLabel('General Study').check();
  await page.getByRole('button', { name: 'Submit my Booking' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();