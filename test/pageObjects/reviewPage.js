class ReviewPage{ //Name of Class Must begin with Capital letter 

    
    get productPrices(){ 

       return $$("//tr/td[4]/strong")
    }

    get TotalPrices(){

        return $("//h3/strong")
    }
    sumOfProducts(){

        const sumOfProducts = this.productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))
        .reduce((acc,price)=> acc + price,0)
        return sumOfProducts
    }
    totalFormatedPrice(){
        return parseInt(this.TotalPrices.getText().split(".")[1].trim())
    }
    get CheckOutBtn(){

        return $(".btn-success")
    }

}
module.exports = new ReviewPage()    //Create an object for class ReviewPage