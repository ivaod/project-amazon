import {browser} from "protractor"

describe("Test2", function(){

it("Mouse hover and login", function()
{

    browser.get('https://www.amazon.com');

    browser.sleep(5000);

    browser.manage().window().maximize();
    
    var helloSignInSection = element(by.xpath("/html/body/div[1]/header/div/div[1]/div[3]/div/a[2]"));

    browser.actions().mouseMove(helloSignInSection).perform();

    element(by.xpath("//span[@class='nav-action-inner']")).click;

    element(by.xpath("//*[@id='ap_email']")).sendKeys("valid email or phone number");

    element(by.xpath("//input[@id='continue']")).click();

    element(by.xpath("//input[@id='ap_password']")).sendKeys("valid password");

    element(by.xpath("//input[@id='signInSubmit']")).click();

    




});







});

