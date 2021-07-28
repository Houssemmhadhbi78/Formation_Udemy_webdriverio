const loginPage = require('../pageObjects/loginPage')    //Import methodes from class loginPage.js
const shopPage = require('../pageObjects/shopPage')
const fs =require('fs')// Convert from Json file format to String format
let credentials =JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eCredentials =JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application Login',()=>{ // ()=> ananmous function

  credentials.forEach(  ({username,password})  =>{
    it('TestCase: Login Fail Page Title',()=>{
        //webdriverIO code
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        console.log('*****************'+browser.getTitle()+'*****************')

        expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        loginPage.Login(username,password)

        console.log(loginPage.alert.getText()+" :is the text am seeing on the screen")
         //signing-dont check =>  (Check after button turns to Sign In)
        browser.waitUntil(()=> loginPage.signIN.getAttribute('value') === 'Sign In',
                                {setTimeout:4000,timeoutMsg:'Error message did not appear'})

        console.log(loginPage.alert.getText() + " :is the text am seeing on the screen")

        expect(loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        
    })

    e2eCredentials.forEach(  ({products})  =>{ 
    // to Skip execution of this testcas you shoud add X before it
    it('TestCase: Login Success Page Title',()=>{

        // let products =["Blackberry","Nokia Edge"]
        browser.url("/loginpagePractise/")
        
        loginPage.Login(username,password)
        loginPage.signIN.click()
        // Syntaxe of LinkText :--> "*=Checkout"
        shopPage.checkout.waitForExist()
        shopPage.AddProductToCart(products)
        shopPage.checkout.click()
        expect(browser).toHaveTitle("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")
    })
})
})

});