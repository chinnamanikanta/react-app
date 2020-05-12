import {observable,action,computed} from "mobx";
import CartModel from '../models/CartModel/CartModel';
import productStore from '../ProductStore/ProductStore';


class CartStore {
    id=0;
    @observable cartProductList = [];
    @observable totalAmount = 0;
    @observable price;
    
    @action.bound
    onClickAddToCart(selectedProduct){
        let cost = selectedProduct.price;
        let cartModel = new CartModel(this.id++,selectedProduct)
        let item = this.cartProductList.find((eachProduct)=> eachProduct.ProductId === selectedProduct.id);
        if(item){
            item.increamentQuantity();
            this.totalAmountChanged(cost);
        }
        else {
            this.totalAmountChanged(cost);
            this.cartProductList.push(cartModel);
            
        }
        
        
        
    }
    @action.bound 
    totalAmountChanged(cost){
        this.totalAmount = this.totalAmount + cost;
    }
    @action.bound
    onRemoveCartItem(deletedItem){
        let dupList = this.cartProductList.slice(0);
        let index = dupList.indexOf(deletedItem);
        let cost = deletedItem.price * deletedItem.quantity;
        this.decreaseAmount(cost);
        dupList.splice(index, 1);
        let newDupList = dupList.filter(eachEl => eachEl.ProductId != deletedItem.id)
        this.cartProductList= newDupList;
    }
    @action.bound
    decreaseAmount(cost){
        this.totalAmount = this.totalAmount - cost;
        
        if(this.totalAmount < 0)
        {
            this.totalAmount = Math.max(0,this.totalAmount);
        }
        
    }

}
// const cartStore = new CartStore();
export default CartStore;