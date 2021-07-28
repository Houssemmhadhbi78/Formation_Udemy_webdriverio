class LoginPage{ //Name of Class Must begin with Capital letter 

   // An other method of declaration: userName = $("#username")
    get userName(){ // userName() is class Object of class loginPage

       return $("#username")
    }
    
    get password(){

        return $("//*[@type='password']")
    }
    
    get alert(){

        return $(".alert-danger")
    }

    get signIN(){

        return $("#signInBtn")
    }

    get textInfo(){

        return $("p")
    }

    Login(userName,password){

        this.userName.setValue(userName)
        this.password.setValue(password)
        this.signIN.click()
    }
}
module.exports = new LoginPage()    //Create an object for class loginPage