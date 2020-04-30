import React from 'react';
import styled from '@emotion/styled';


const Header = styled.div`
display:flex;
justify-content:center;
margin-left:300px;
`;

const ProductCount = styled.div``;
const ProductSort = styled.div`
margin-left:230px;
`;
class PageHeader extends React.Component {
    onSortBy=(event)=> {
        this.props.SortByPrice(event.target.value);
       
        
    }
    
    render(){
        const {countProducts}=this.props
        return (
            <Header>
            <ProductCount>{countProducts} product(s) found</ProductCount>
            <ProductSort>
            <label>Sort Price By:</label>
        <select onChange = {this.onSortBy}>
            <option value="SELECT">Select</option>
            <option value="ASSENDING">Lowest to highest</option>
            <option value="DECENDING">Highest to lowest</option>
        </select>
            </ProductSort>
            </Header>            
            
            )
    }
    
    
}
export default PageHeader;