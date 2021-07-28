//Import Chai library for Assertion
const expectChai = require('chai').expect

describe('Functional Testing on Application ',()=>{ // ()=> ananmous function

    xit('Scrolling and Mouse Hover',()=>{

        browser.url("/AutomationPractice/#")

        //To scroll and move to "mousehover" at the end of page Web
        $("#mousehover").scrollIntoView()
        browser.pause(3000)
        $("#mousehover").moveTo()
        browser.pause(3000)
        $("=Top").click// this is a Syntaxe of LinkText
        browser.pause(3000)
    })

    xit('Double click on Button',()=>{

        browser.url("https://only-testing-blog.blogspot.com/")

        $("button[ondblclick='myFunction()']").doubleClick()

        console.log(browser.isAlertOpen())  // Return "True"
        browser.pause(2000)
        //Verify if Alert is Open
        expectChai(browser.isAlertOpen()).to.be.true

        console.log(browser.getAlertText()) // Return "Press 'OK' or 'Cancel' button!"
        browser.pause(3000)
        expectChai(browser.getAlertText()).to.equal("Press 'OK' or 'Cancel' button!")
        browser.acceptAlert()   // Click on OK button
        browser.pause(3000)

    })

    xit('Web Table Sort validation Smoke',()=>{

        browser.url("/seleniumPractise/#/offers")

        //same think with CCS format : tr th:nth-child(1) === //tr/th[1]
        $("//tr/th[1]").click() // Xpath format
        //Apply the sort "Tri" - Step1: retrieve list of veggie names into array A
        //Apply the sort"Tri" - Step2: Sort the array A and Create a new array B
        // Compare array A and array B
        const veggiesLocators = $$("//tr/td[1]") //This Array is collection of locators for Colomn 1
        // "map" used to iterate each veggiesLocators and getText for each veggiesLocators 
        const OriginalveggieNames = veggiesLocators.map(veggie=>veggie.getText()) //This Array is collection of Texts
        console.log(OriginalveggieNames)
        veggies = OriginalveggieNames.slice()// "slice" to create a copy of Array "OriginalveggieNames"
        //!!In javaScript Arrays are pass by reference  
        sortedVeggies = veggies.sort()//Tri de tableau des mots
        console.log(sortedVeggies)
        //Compare le tab. "OriginalveggieNames === veggies" avec le tab."sortedVeggies"
        expectChai(OriginalveggieNames).to.eql(sortedVeggies)

    })

    it('Web Table Filter validation',()=>{

        browser.url("/seleniumPractise/#/offers")

        // $("#search-field").setValue("Brinjal")
        $("#search-field").setValue("Tomato")
        const veggiesLocators = $$("//tr/td[1]")//Select the Colomn N1
        //The size of Array "veggiesLocators" should be equal to 1
        expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})
        console.log(veggiesLocators[0].getText())
        expect(veggiesLocators[0]).toHaveTextContaining("Tomto")
        browser.pause(3000)



    })
})