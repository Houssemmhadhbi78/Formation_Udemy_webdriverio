//Import Chai library for Assertion
const expectChai = require('chai').expect


describe('Ecommerce Application ',()=>{ // ()=> ananmous function

    it('UI Controls sanity',()=>{
        browser.url("/loginpagePractise/")
        
        $("input[name='username']").setValue("rahulshettyacademy")
        browser.pause(2000)
        const password = $("//*[@type='password']")
        password.setValue("learning")

        //*****Testcase for RadioButtons *****

        //Return multiple element (Array) on the page with : $$
        const radioButtons = $$(".customradio") // Storing elements in const radioButtons
        userDropdown = radioButtons[1]// RadioButton of "User" is [1] and for "Admin" is [0]
        userDropdown.$(".radiotextsty").click()  //chain of locators
        const modal = $('.modal-body')
        modal.waitForDisplayed()
        $("#cancelBtn").click()
        console.log(userDropdown.$(".radiotextsty").isSelected())
        //should return " False" that mean radiotextsty is not selected

        userDropdown.$(".radiotextsty").click()  //chain of locators
        modal.waitForDisplayed()
        $("#okayBtn").click()
        radioButtons[0].$(".radiotextsty").click()
        //Step which will tell that pop up is not displayed
        expect(modal).not.toBeDisabled()    //.not => for negation assertion for Mocha 

        //*****Testcase for Static DropDown*****

        const dropDown = $("select.form-control")//must add a tag " select" to ClassName :form-control
        //3 ways to select a value from dropDown
        dropDown.selectByAttribute('value','teach')
        browser.pause(1000)
        dropDown.selectByVisibleText('Consultant')
        browser.pause(1000)
        dropDown.selectByIndex(0)// Will select value='stud'
        browser.pause(1000)
        dropDown.getValue() // Will return value='stud'
        
        //Chai is one library wich supports assertions : comparing string or number
        expectChai(dropDown.getValue()).to.equal("stud")
    })

    it('Dynamic Dropdown Controls Smoke',()=>{
        browser.url("/AutomationPractice/#")

        $("#autocomplete").setValue("ind")
        browser.pause(3000)
        let items = $$("[class$='ui-menu-item'] div")
        // for(var i=0;i<items.length;i++){
        //     console.log(items[i].getText())
        // }
        const desiredLocator = items.filter(item=> item.getText() === "India")
        desiredLocator[0].click()
        browser.pause(3000)
    })

    xit('Checkboxes Identification',()=>{
        
        browser.url("/AutomationPractice/#")
        //Return multiple element (Array) on the page with : $$
        const element = $$("input[type='checkbox']")
        element[1].click()
        browser.pause(3000)
        console.log(element[1].isSelected())    //will return "True"
        console.log(element[2].isSelected())    //will return "False"
        //Take a screenShot
        browser.saveScreenshot("screeshot2307.png")

    })
})