import React from 'react';
import styled from '@emotion/styled';
import {withRouter } from 'react-router-dom';
import PageHeader from '../Header/ProductPageHeader';
import ProductList from '../Header/ProductList';
import productStore from '../../../Stores/ProductStore/ProductStore'
import EachSize from '../Header/EachProductSize.js';
import ProductCart from '../ProductCart/ProductCart'
import LoadingWrapperWithFailure from '../../../mkdir/common/LoadingWrapperWithFailure/';
import NoDataView from '../../../mkdir/common/NoDataView';
import {ACCESS_SIGNOUT_TOKEN} from '../../../../Authentication/constants/StorageUtils.js'
import {observer} from 'mobx-react';

const SignOutButtons = styled.button`
    background-color:white;
    color:black;
    width:80px;
    height:40px;
    text-align:center;
    margin:25px;
    border:1px solid black
`;
const ProductPart = styled.div`
display:flex;
`;
const MainHeader = styled.div`
display:flex;
justify-content:space-between;
`;

@observer
class ProductsMainPage extends React.Component {
   componentDidMount(){
       
       productStore.getProductsApi().then(()=>{console.log(productStore.productList)});
       
   }
   onClickSignOut=()=>{
       if(ACCESS_SIGNOUT_TOKEN.length > 0){
           this.props.history.replace({pathname:'/user-login'});
       }
       else {
           this.props.history.push({pathname:'/product-page'});
       }
       
       
       
   }
   rendersUsersList=observer(()=> {
         const {products} = productStore;
         if (products.length === 0){
             <NoDataView/>
         }
         return  <ProductList productList = {products}/>
    })
   
    render(){
        const {products
        ,SortByPrice,
        
        totalDisplayedProductsCount,
            getProductListAPIStatus,
            getProductListAPIError
        } = productStore;
        return(
            <div>
            
            
            
             <MainHeader>
            <SignOutButtons onClick={this.onClickSignOut}>Sign Out</SignOutButtons>
           <ProductCart/>
                       </MainHeader>
                      
                       
           <ProductPart>
            <EachSize/>
            <PageHeader SortByPrice = {SortByPrice} products={products} countProducts={totalDisplayedProductsCount}/>
           </ProductPart>
           
            <LoadingWrapperWithFailure 
            
                apiStatus = {getProductListAPIStatus}
                apiError = {getProductListAPIError}
                onRetryClick = {this.doNetworkCalls}
                renderSuccessUI = {this.rendersUsersList}
                
                
                />
           
           
           
           
           
            </div>
            

            )
    }
}
export default ProductsMainPage;