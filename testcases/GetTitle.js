
import {browser} from "protractor"

describe("Test", function(){
it("Validate title", function(){
    browser.get('https://www.amazon.com');
    browser.sleep(5000);
    browser.manage().window().maximize();

   expect(browser.getTitle()).toBe('Amazon.com. Spend less. Smile more.');
    
});


});

