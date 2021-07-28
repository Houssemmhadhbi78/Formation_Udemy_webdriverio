class DeliveryPage{ //Name of Class Must begin with Capital letter 

    
    get CountryChoice(){ 

       return $("#country")
    }
    get LoadingAnimation(){

        return $(".lds-ellipsis")
    }
    get SelectedCountry(){
        
        return $("=India")
    }
    get SubmitBtn(){
        
        return $("[type$='submit']")
    }
    get AlertSuccess(){
        
        return $(".alert-success")
    }

}
module.exports = new DeliveryPage()    //Create an object for class ReviewPage