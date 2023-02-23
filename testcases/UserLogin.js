import {browser} from "protractor"

describe("Test2", function(){

it("Mouse hover and login", function()
{

    browser.get('https://www.amazon.com');

    browser.sleep(5000);

    browser.manage().window().maximize();
    
    //hoover on "Hello, sign in" section
    
    var helloSignInSection = element(by.xpath("/html/body/div[1]/header/div/div[1]/div[3]/div/a[2]"));

    browser.actions().mouseMove(helloSignInSection).perform();
    
    //click on "Sign in" button

    var singInButton= element(by.xpath("//span[@class='nav-action-inner']"));
    singInButton.click;
    
    //enter valid email or phone number credentials

    var emailOrNumberToSignIn= element(by.xpath("//*[@id='ap_email']"));
    emailOrNumberToSignIn.sendKeys("valid email or phone number");
    
    //click on "Continue" button

    var continueButton= element(by.xpath("//input[@id='continue']"));
    continueButton.click;
    
    //enter valid password

    var  passwordButton= element(by.xpath("//input[@id='ap_password']"));
    passwordButton.sendKeys("valid password");
    
    //click on "Sign in" button

    var signInSubmitButton= element(by.xpath("//input[@id='signInSubmit']"));
    signInSubmitButton.click;

    




});







});

