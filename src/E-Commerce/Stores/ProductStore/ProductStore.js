import {observable,action,computed} from 'mobx';
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS  } from '@ib/api-constants'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import ProductService from '../../Services/ProductServices/ProductService'
import ProductModel from '../models/ProductModel/ProductModel'

class ProductStore {
    @observable productList;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable filteredList;
    @observable selectedFilter;
    @observable isSortBy;
    productService;
    
    constructor(productService){
        this.init();
        this.productService = productService;
    }
    @action 
    init(){
        this.productList = [];
        this.filteredList = [];
        this.getProductListAPIError = null;
        this.getProductListAPIStatus = API_INITIAL;
        this.isSortBy = "SELECT";
        
    }
    
    @computed
    get onSelectedSortBy(){
    
        let filteredProductList = this.productList.filter((eachProduct)=>
        this.filteredList.length === 0 || (this.filteredList.filter((eachSize)=>
        eachProduct.availableSizes.includes(eachSize)
        )).length != 0
        );
        if(this.isSortBy === "ASSENDING"){
    let dupList = filteredProductList.slice(0);
    let newList = dupList.sort((a, b) => a.price - b.price);
   
    filteredProductList = newList;
    
    return filteredProductList;
        }
        else if(this.isSortBy === "DECENDING"){
        let dupList = filteredProductList.slice(0);
        let newList = dupList.sort((a, b) => a.price - b.price).reverse();
        filteredProductList = newList;
        
        return filteredProductList;
            
        }
        else {

        return filteredProductList;
        }
    }
    @action.bound 
    onClickSelectedSort(size){
        if(this.filteredList.includes(size)) {
           this.filteredList = this.filteredList.filter((eachSize)=> eachSize !=size);
            }
            else {
            this.filteredList.push(size);
            }
    }

    @action.bound
    SortByPrice(typeOfSort){
        this.isSortBy = typeOfSort;
        
    }

    
    
     @action.bound
    setProductsApiResponse(productsData){
        productsData.map((eachProduct)=> {
            let dupList = this.productList.slice(0);
            const productModel = new ProductModel(
                eachProduct
            )
            this.productList.push(productModel);
        });
    }
    
    @computed
    get totalDisplayedProductsCount(){
        return this.onSelectedSortBy.length;
    }
    
    
    @action.bound
    setProductsApiError(error){
        this.getProductListAPIError = error;
    }
    @action.bound 
    setProductsApistatus(apiStatus){
        this.getProductListAPIStatus = apiStatus;
        
    }
    @action.bound
    getProductsApi(){
        const productPromise = this.productService.getProductsAPI();
        return bindPromiseWithOnSuccess(productPromise)
        .to(this.setProductsApistatus,this.setProductsApiResponse)
        .catch(this.setProductsApiError);
    }
    @computed
    get products(){
        
       return this.onSelectedSortBy;
       
    }
}


export default ProductStore;