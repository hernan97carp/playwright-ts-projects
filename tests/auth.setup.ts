import { test as setup, expect} from "@playwright/test";
import { LoginPage } from "./pages/saucedemo/LoginPage";
//import { ShoppingCarPage } from "./tests/pages/saucedemo/ShoppingCarPage";
const dotenv = require('dotenv')
// Cargar variables de entorno desde el archivo .env
dotenv.config();
const authFile = "playwright/.auth/user.json";
const user = process.env.USER!;
const password = process.env.PASSWORD!;
setup("authenticate", async ({ page}) => {
    await page.goto('https://saucedemo.com')
    const login = new LoginPage(page)
    await login.loginWithCredentials(user, password)
    await login.checkSuccessfulLogin()

    await page.context().storageState({path: authFile})
 

});
