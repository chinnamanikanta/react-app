import {observable,action} from "mobx";

class CartModel {
    CartId;

    ProductId;
    image;
    currencyFormat;
    price;
    @observable quantity;
    title;
    style;
    
    constructor(id,selectedProduct){
        this.CartId = id;
        this.image = selectedProduct.image;
        this.ProductId = selectedProduct.id;
        this.quantity = 1;
        this.currencyFormat = selectedProduct.currencyFormat;
        this.price = selectedProduct.price;
        this.title = selectedProduct.title;
        this.style = selectedProduct.style;
        
    }
    @action.bound
    increamentQuantity(){
        
        this.quantity = this.quantity + 1;
        
    }
    
}
export default CartModel;