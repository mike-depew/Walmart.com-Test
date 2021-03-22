const assert = require('assert')

describe('walmart.com homepage', () => {
    it('should have the right title', () => {
        browser.url('https://walmart.com')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Walmart.com | Save Money. Live Better.')
    })
    it('should save a screenshot of the browser view', function () {
        browser.saveScreenshot('./screenshots/screenshot.png');
    });
    it('should detect if an element is clickable', () => {
        const el = $('.ab_b')
        let clickable = el.isClickable();
        console.log(clickable); // outputs: true or false

        // wait for element to be clickable
        browser.waitUntil(() => el.isClickable())
    });
})