class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboardHeader = page.locator("//h6[text()='Dashboard']");
    }

    async verifyDashboard() {await this.dashboardHeader.isVisible();

    }
}

module.exports = DashboardPage;