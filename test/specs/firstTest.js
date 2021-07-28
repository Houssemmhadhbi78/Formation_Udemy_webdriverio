describe('Ecommerce Application Login',()=>{ // ()=> ananmous function

    it('Login Fail Page Title',function(){
        //webdriverIO code
        // Specify this test to only retry up to 2 times
        this.retries(2)
        console.log('run')
        
        browser.url("/loginpagePractise/")
        console.log('*****************'+browser.getTitle()+'*****************')
        
        expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        //webdriverio support only theses locators : Xpath , CSS, LinkText 
        // Syntaxe of CSS :--> tagname[attribute='value'] ->  input[name='username']
        $("input[name='username']").setValue("HoussemMHADHBI")
        browser.pause(2000)
        //Other valid CSS  #id => #username
        //.classname -CSS =>.form-control
        $("#username").setValue("SecondCSS")
        browser.pause(2000)
       // Syntaxe of Xpath :--> //*[@attribute='value'] --> //*[@type='password']
       const password = $("//*[@type='password']")
        password.setValue("learning123")
        $("#signInBtn").click()
        console.log($(".alert-danger").getText()+" :is the text am seeing on the screen")
        //Signing dont check : Check after buutton turns to sign In
        //browser.waitUntil(condition, { timeout:, timeoutMsg:, interval })
        browser.waitUntil(()=> $("#signInBtn").getAttribute('value') === 'Sign In',
                                {setTimeout:4000,timeoutMsg:'Error message did not appear'})

        console.log($(".alert-danger").getText()+" :is the text am seeing on the screen")

        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        
    })
    // to Skip execution of this testcas you shoud add X before it
    xit('Login Success Page Title Smoke',()=>{
        
        browser.url("/loginpagePractise/")
        
        $("input[name='username']").setValue("rahulshettyacademy")
        browser.pause(2000)
        const password = $("//*[@type='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        // Syntaxe of LinkText :--> "*=Checkout"
        const link = $(".nav-link.btn.btn-primary") //$("*=Checkout")
        link.waitForExist()
        expect(browser).toHaveTitle("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")
    })

});