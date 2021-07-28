class ShopPage{ //Name of Class Must begin with Capital letter 

    
     get checkout(){ 
 
        return $(".nav-link.btn.btn-primary")//$("*=Checkout")
     }

     get cards(){

        return $$("div[class$='card h-100']")
     }
     
     AddProductToCart(products){ //This is a reuseable code
       this.cards.filter(item=>products.includes(item.$("div h4 a").getText()))//it returns an array of 2 elements
        .map(productCard=>productCard.$(".card-footer button").click())
     }
}
module.exports = new ShopPage()    //Create an object for class ShopPage