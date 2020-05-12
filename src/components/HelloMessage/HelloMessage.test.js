import React,{component} from 'react';
import {render} from '@testing-library/react';
import {HelloMessage} from '.';
describe("HelloMessage Tests",()=>{
    it("should render given message",()=> {
        const {getByText} = render(<HelloMessage message = "Hello Good evening"/>)
        getByText(/Hello Good evening/i);
        
    })
    
});