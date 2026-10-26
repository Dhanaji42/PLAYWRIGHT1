const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: '.',

    timeout: 30000,

    use: {

        headless: false,
        viewport: null,
        launchOptions: {
        args: ['--start-maximized']
        },

        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'

    },

    reporter: [
        [
            'html',
            {
                outputFolder: 'reports',
                open: 'never'
            }
        ],
        ['list']
    ],

    projects: [

        {
            name: 'Chrome',
            use: {
                browserName: 'chromium'
            }
        },

        {
            name: 'Firefox',
            use: {
                browserName: 'firefox'
            }
        }

    ]

});