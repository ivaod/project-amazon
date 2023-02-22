import {browser} from "protractor"

describe("Test2", function(){

it("Mouse hover and login", function()
{

    browser.get('https://www.amazon.com');

    browser.sleep(5000);

    browser.manage().window().maximize();
    
    var helloSignInSection = element(by.xpath("/html/body/div[1]/header/div/div[1]/div[3]/div/a[2]"));

    browser.actions().mouseMove(helloSignInSection).perform();

    var singInButton= element(by.xpath("//span[@class='nav-action-inner']"));
    singInButton.click;

    var emailOrNumberToSignIn= element(by.xpath("//*[@id='ap_email']"));
    emailOrNumberToSignIn.sendKeys("valid email or phone number");

    var continueButton= element(by.xpath("//input[@id='continue']"));
    continueButton.click;

    var  passwordButton= element(by.xpath("//input[@id='ap_password']"));
    passwordButton.sendKeys("valid password");

    var signInSubmitButton= element(by.xpath("//input[@id='signInSubmit']"));
    signInSubmitButton.click;

    




});







});

