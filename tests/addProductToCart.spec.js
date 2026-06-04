const {test, expect} = require('@playwright/test');
// const { DashboardPage } = require('../pageObjects/dashboardPage');
// const { LoginPage } = require('../pageObjects/loginPage');
const { POManager } = require('../pageObjects/POManager');

test('@QW@rel Add product to cart', async ({ page }) => {
    // const loginPage = new LoginPage(page);
    // const dashboardPage = new DashboardPage(page);

    const poManager = new POManager(page);

    await poManager.getLoginPage().goToPage();
    await poManager.getLoginPage().validLogin('anshika@gmail.com', 'Iamking@000');
    await poManager.getDashboardPage().addProductToCart("ADIDAS ORIGINAL");

    await poManager.getDashboardPage().goToCart();
    await expect(page.locator("h3:has-text('ADIDAS ORIGINAL')")).toBeVisible();
});