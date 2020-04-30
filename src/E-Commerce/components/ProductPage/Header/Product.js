import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartStore from '../../../Stores/CartStore/CartStore';
import {observer} from 'mobx-react';



const EachDiv = styled.div`
width:180px;
height:350px;
margin-left:20px;
margin-top:10px;
text-align:center;
`;

const UnderScore = styled.span`
color:yellow;

`;

const Button = styled.button`
${tw`bg-black text-white text-center`}
width:170px;
height:40px;

`;

const FreeButton = styled.button`
${tw` text-center bg-black text-white`}
width:80px;
height:20px;
font-size:8px;

`;

const HeaderPart = styled.div`
display:flex;
justify-content:center;

`;


const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center
`;

@observer
class Product extends React.Component {
    notify = () => {
        toast.success("Product Added to yout Cart!", {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.WARNING
      });
 
    }
    onAddToCart=(eachProduct)=>{
        this.notify();
        cartStore.onClickAddToCart(eachProduct);
        
    }
    
    render(){

        const {eachProduct} = this.props;
        return (
            <EachDiv>
            <HeaderPart>
            <img src={eachProduct.image} className="w-24 h-48" />
            {eachProduct.isFreeShipping ? <FreeButton>Free Shipping</FreeButton> : <div></div>}
                        </HeaderPart>
            <Content>
             
            <div>{eachProduct.title}</div>
            <UnderScore>__</UnderScore>
            <div>{eachProduct.currencyFormat} {eachProduct.price}</div>
            <div>or {eachProduct.installments}  X {eachProduct.currencyFormat} {Math.round(eachProduct.price / eachProduct.installments).toFixed(2)}</div>
            <div><Button onClick={()=>this.onAddToCart(eachProduct)}>ADD CART</Button></div>
                <ToastContainer />
            </Content>
            </EachDiv>
        
            )
    }
}
export default Product;