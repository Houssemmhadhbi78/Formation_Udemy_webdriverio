//Import Chai library for Assertion of Integer
const expectChai = require('chai').expect

describe('Ecommerce Application',()=>{ // ()=> ananmous function

    it('End to End Test',()=>{

        let products =["Blackberry","Nokia Edge"]

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        browser.maximizeWindow()
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//*[@type='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        // Syntaxe of LinkText :--> "*=Checkout"
        const link = $("*=Checkout")
        link.waitForExist()
        cards = $$("div[class$='card h-100']")//Parent is "div[class$='card h-100']" & child is "div h4 a"
         // "div h4 a" same thing "//h4/a"
        // cards.filter(item=>item.$("div h4 a").getText() === "Blackberry")
        cards.filter(item=>products.includes(item.$("div h4 a").getText()))//it returns an array of 2 elements
        .map(productCard=>productCard.$(".card-footer button").click())
        // browser.pause(5000)
        link.click()
        productPrices = $$("//tr/td[4]/strong") //This is an Array
        //To get text ( String) for each Array we use getText() : ₹. 50000 with split => ₹ , 50000 
        // Trim() is used to delete space before and after Interger
        //To format these String to integer and Apply sum on all the values
        const sumOfProducts = productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))
        .reduce((acc,price)=> acc + price,0)//1set argument : 0, 2nd argument : 65000
        //1st Iteration : 0 + 65000 = 65000
        //2nd Iteration : 50000 + 65000 = 115000

        console.log("The Sum of Products in the card is : " + sumOfProducts)
        const TotalValue = $("//h3/strong").getText()
        const TotalIntValue = parseInt(TotalValue.split(".")[1].trim())
        expectChai(sumOfProducts).to.equal(TotalIntValue)
        $(".btn-success").click()
        $("#country").setValue("ind")
        $(".lds-ellipsis").waitForExist({reverse:true})// => waitforNotExist : Disapperd
        $("=India").click()
        $("[type$='submit']").click()
        expect($(".alert-success")).toHaveTextContaining("Succes! Thank you! Your order will be delivered in next few weeks :-).")
    })
})