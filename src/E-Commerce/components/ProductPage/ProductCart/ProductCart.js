import React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";
import tw from 'tailwind.macro';
import {FiShoppingCart} from 'react-icons/fi';
import cartStore from '../../../Stores/CartStore/CartStore';
import CartItem from './CartItem';
import styled from '@emotion/styled';

const CartIcon = styled.div`
background-color:LightSlateGrey;
color:white;
width:70px;
height:70px;
text-align:center;
`;

const ShowCart = styled.div`
min-height:100vh;
width:400px;
background-color:LightSlateGrey;
color:white;
`;


const ShowCartHeader = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const OverallDiv = styled.div`
position:fixed;
top:0;
right:0;
display:flex;
justify-content:flex-end;
`;

const CheckOutButton = styled.div`
display:flex;
justify-content:center;
border:2px solid black;
font-size:20px;
height:40px;
margin-top:20px;

`;
const InnerDiv = styled.div`
height:70vh;
`;
const EmptyContent = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const CartCount = styled.div`
${tw`text-sm text-yellow-600`}
    position:absolute;
    margin-left:20px;
    margin-bottom:-20px;
`;

@observer
class ProductCart extends React.Component {
    
    @observable shouldCartDisplay = false;
    showCart=()=>{
                
    this.shouldCartDisplay = true;
        
        
    }
    hideCart=()=>{
            
    this.shouldCartDisplay = false;
    }
    render(){
        return(
        <OverallDiv>
        {this.shouldCartDisplay === false ? 
            <CartIcon onClick={this.showCart}>
        <FiShoppingCart className="text-5xl"/>
        <CartCount>{cartStore.cartProductList.length}</CartCount>
                    </CartIcon>
             :
            <ShowCart>
            <ShowCartHeader>
            <div className="mr-4" onClick={this.hideCart}>X</div>
            <FiShoppingCart className="text-5xl"/>
            <CartCount>{cartStore.cartProductList.length}</CartCount>
            </ShowCartHeader>
       <InnerDiv>
        {cartStore.cartProductList.length > 0 ? 
        cartStore.cartProductList.map((selectedProduct,index) => 
       <CartItem key ={index} selectedProduct = {selectedProduct}/>
        
        )
        :
        <EmptyContent>
        Add Some more cartLists
        
        </EmptyContent>
        }
</InnerDiv>
        <div className="text-2xl">SubTotal : {cartStore.totalAmount}</div>
        <CheckOutButton>
        <button className="w-24 h-6 ">CheckOut</button>
        </CheckOutButton>
                        
            </ShowCart>
            }
</OverallDiv>
            )
    }
}
export default ProductCart;