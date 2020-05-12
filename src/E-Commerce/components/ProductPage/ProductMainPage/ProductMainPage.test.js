import React from 'react';
import {render} from '@testing-library/react';
import ProductMainPage from './ProductMainPage';


describe("test product main page ",()=> {
    it("should signOut button or not",()=> {
        const {getByRole} = render(
           <ProductMainPage /> 
            
            );
            getByRole('button',{name:'Sign Out'});
            
            
    })
    
    
    
    
})