
import {browser} from "protractor"

describe("Test1", function(){
it("validate title", function(){
    browser.get('https://www.amazon.com');
    browser.sleep(5000);
    browser.manage().window().maximize();

    expect(browser.getCurrentUlr()).toBe('https://www.amazon.com');

    expect(browser.getTitle()).toBe('Amazon.com. Spend less. Smile more.');
});


});

