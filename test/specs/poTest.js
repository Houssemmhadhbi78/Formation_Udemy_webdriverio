const loginPage = require('../pageObjects/loginPage')    //Import methodes from class loginPage.js
const shopPage = require('../pageObjects/shopPage')
const reviewPage = require('../pageObjects/reviewPage')
const deliveryPage = require('../pageObjects/deliveryPage')
//Import Chai library for Assertion of Integer
const expectChai = require('chai').expect
const fs =require('fs')// Convert from Json file format to String format

let e2eCredentials =JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application Login',()=>{ // ()=> ananmous function

    e2eCredentials.forEach(  ({products})  =>{ 
    it('TestCase: End to End',()=>{

        // let products =["Blackberry","Nokia Edge"]
        browser.url("/loginpagePractise/")
        
        loginPage.Login("rahulshettyacademy","learning")
        loginPage.signIN.click()
        shopPage.checkout.waitForExist()
        shopPage.AddProductToCart(products)
        shopPage.checkout.click()
        const sumOfProducts = reviewPage.sumOfProducts() // return sumOfProducts from class reviewPage
        console.log(sumOfProducts)
        const TotalIntValue = reviewPage.totalFormatedPrice() // Format the sumOfProducts to a number
        expectChai(sumOfProducts).to.equal(TotalIntValue)

        // $(".btn-success").click()
        // $("#country").setValue("ind")
        // $(".lds-ellipsis").waitForExist({reverse:true})// => waitforNotExist : Disapperd
        // $("=India").click()
        // $("[type$='submit']").click()
        // expect($(".alert-success")).toHaveTextContaining("Success! Thank you! Your order will be delivered in next few weeks :-).")

        //or
        reviewPage.CheckOutBtn.click()
        deliveryPage.CountryChoice.setValue("ind")
        deliveryPage.LoadingAnimation.waitForExist({reverse:true})// => waitforNotExist : Disapperd
        deliveryPage.SelectedCountry.click()
        deliveryPage.SubmitBtn.click()
        expect(deliveryPage.AlertSuccess).toHaveTextContaining("Success! Thank you! Your order will be delivered in next few weeks :-).")
    })
})

});