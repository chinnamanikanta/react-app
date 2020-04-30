import {observable} from 'mobx';
class ProductModel {
    @observable availableSizes=[];
    @observable currencyFormat="";
    @observable currencyId = "";
    @observable description = "";
    @observable id="";
    @observable installments = "";
    @observable isFreeShipping = false;
    @observable price = null;
    @observable sku = null;
    @observable style = "";
    @observable title = "";
    @observable image = "";
    constructor(eachProduct){
        this.availableSizes = eachProduct.availableSizes;
        this.currencyFormat = eachProduct.currencyFormat;
        this.currencyId = eachProduct.currencyId;
        this.description = eachProduct.description;
        this.id = eachProduct.id;
        this.installments =eachProduct.installments;
        this.isFreeShipping =eachProduct.isFreeShipping;
        this.price = eachProduct.price;
        this.sku = eachProduct.sku;
        this.style = eachProduct.style;
        this.title = eachProduct.title;
        this.image = eachProduct.image;
    }
    
}
export default ProductModel;