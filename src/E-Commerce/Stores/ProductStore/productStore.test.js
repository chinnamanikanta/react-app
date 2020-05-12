/*global expect*/
/*global jest*/
import {
    API_INITIAL,
    API_SUCCESS,
    API_FETCHING,
    API_FAILED
} from '@ib/api-constants';

import Cookie from 'js-cookie';
import ProductService from '../../Services/ProductServices/ProductService';
import ProductStore from './ProductStore';
import getProductsResponse from '../../fixtures/getProductsResponse.json';


describe("ProductStore Test",()=> {
    let productService;
    let productStore;
    
    beforeEach(()=> {
        productService = new ProductService();
        productStore = new ProductStore(productService);
    });
    
    it("should test initializing productStore",() => {
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBeFalsy();
    });
    
    
    it("should test productList data fetching",()=> {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
    
        
        let mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockLoadingPromise);
        productService.getProductsAPI = mockProductList;
       
        productStore.getProductsApi();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();
    });

        
    it("should test productList success state", async ()=>  {
        
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
    
        let mockSuccessPromise = new Promise(function(resolve,reject){
            resolve([]);
        });
        
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockSuccessPromise);
        productService.getProductsAPI = mockProductList;
        
        await productStore.getProductsApi();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
        
    });
    
    it("should test productList failure state", async()=> {
        
        
        let mockFailurePromise = new Promise(function(resolve,reject){
            reject(new Error("error"));
        });
        
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockFailurePromise);
        productService.getProductsAPI = mockProductList;
        
        productStore = new ProductStore(productService);
        
        await productStore.getProductsApi();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productStore.getProductListAPIError).toBe("error");
    });
    
    it("should test productList", async ()=> {
        const mockProductPromise = Promise.resolve(getProductsResponse);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        productService.getProductsAPI = mockProductList;
        
        await productStore.getProductsApi();
        

        productStore.onClickSelectedSort('S');
        productStore.onClickSelectedSort('XS');
        expect(productStore.products.length).toBe(5);
    
    });
    
    
        it("should test productList", async ()=> {
        const mockProductPromise = Promise.resolve(getProductsResponse);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        productService.getProductsAPI = mockProductList;
        
        await productStore.getProductsApi();
        
        productStore.SortByPrice('ASSENDING')
    
        expect(productStore.products.length).toBe(16);
    
    });
    


    
    
    
    
    
    
    
});


