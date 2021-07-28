describe('Windows and Frames Miscellanous',()=>{ // ()=> ananmous function

    xit('Parent and Child windows switch',()=>{

        browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        $("#openwindow").click()
        //To know how many windows are open
        let handles = browser.getWindowHandles()
        // 0th index parent window,1st index child window
        browser.switchToWindow(handles[1])
        console.log("title of child browser is : "+browser.getTitle())
        browser.maximizeWindow()
        browser.closeWindow()
        browser.switchToWindow(handles[0])
        console.log("title of parent browser is : "+browser.getTitle())
        browser.pause(3000)

        console.log("***********Second testCase***************")

        //WebdriverIo Invoke to browser to open a new window and switch to it
        browser.newWindow("https://www.rahulshettyacademy.com/#/index")
        const title = browser.getTitle()
        console.log(title)
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
        $("#name").setValue(title)
        browser.pause(3000) 
        browser.switchWindow(title)
        console.log(browser.getUrl())
        browser.pause(3000)        
    })

    it('Frames switch',()=>{

        browser.url("/AutomationPractice/")
        //To scroll and move to "mousehover" at the end of page Web
        $("#mousehover").scrollIntoView()
        //To find and return all the matching elements with $$
        console.log("number of links in this page : "+ $$("a").length)
        browser.switchToFrame($("[id='courses-iframe']"))
        console.log("The tagname of <Courses> link is : " + $("=Courses").getTagName()) //= is added to get a syntaxe of linkText 
        console.log("number of links inside Frames in this page : "+ $$("a").length)
        browser.switchToFrame(null)
        console.log("number of links in this page : "+ $$("a").length)
    })

})