/*global expect*/
/*global jest*/
import {
    API_INITIAL,
    API_SUCCESS,
    API_FETCHING,
    API_FAILED
} from '@ib/api-constants';
import CartStore from './CartStore.js'
import ProductStore from '../CartStore/CartStore';


describe("CartStore test",()=> {
    
    let cartStore;
beforeEach(()=> {
 cartStore = new CartStore();   
});

it("cartStore test",()=> {
    let onSucces = jest.fn();
    let onFailure = jest.fn();
    
    let mockPromiseCartStore = new Promise((resolve,reject)=> {
       resolve([]); 
    });
    mockPromiseCartStore.cartProductList.length
    
    

})

it("cartStore list test",()=> {
    let onSucces = jest.fn();
    let onFailure = jest.fn();
    
    
    let mockPromiseCartStore = new Promise((resolve,reject)=> {
       resolve([]); 
    });
     
})
    
    
});