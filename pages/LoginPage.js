class LoginPage {

    constructor(page) {

        this.page = page;

        this.txtUsername = page.locator("input[name='username']");
        this.txtPassword = page.locator("input[name='password']");
        this.btnLogin = page.locator("button[type='submit']");

    }

    async login(username, password) {

        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();

    }

}

module.exports = LoginPage;
