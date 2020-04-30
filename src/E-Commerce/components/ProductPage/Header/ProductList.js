import React from 'react';
import styled from '@emotion/styled';
import Product from './Product.js'
import {observer} from 'mobx-react'

const ProductDiv = styled.div`
display:flex;
flex-wrap:wrap;
width:600px;    
margin-left:350px;
`;
@observer
class ProductList extends React.Component {
    render(){

        const {productList} = this.props;
        
        return (
            <ProductDiv>
            {productList.map((eachProduct,index) =>
            <Product key={index} 
            eachProduct={eachProduct}/>)
            }
            </ProductDiv>
            )
    }
}
export default ProductList;