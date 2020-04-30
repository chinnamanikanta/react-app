import React from 'react';
import styled from '@emotion/styled';
import productStore from '../../../Stores/ProductStore/ProductStore';
import {observer} from 'mobx-react';
const EachButton = styled.button`
width:30px;
height:30px;
border-radius:10px;
background-color:lightgray;
color:black;
margin-top:20px;
margin-left:10px;
`;


const SelectFilterGroup = styled.div`
display:flex;
width:200px;
flex-wrap:wrap;
margin-left:50px;
`;
@observer
class EachSize extends React.Component {
    OnSelectedSize=(event)=>{
        
        productStore.onClickSelectedSort(event.target.value);
        
    }
    
    render(){
        
        const {eachSize} =this.props;
        return(
            <SelectFilterGroup>
            <EachButton value = "XS" onClick={this.OnSelectedSize}>XS</EachButton>
            
            <EachButton value = "S"   onClick={this.OnSelectedSize}>S</EachButton>
           <EachButton value = "L"    onClick={this.OnSelectedSize}>L</EachButton>
           <EachButton value = "M"    onClick={this.OnSelectedSize}>M</EachButton>
            <EachButton value = "XL"  onClick={this.OnSelectedSize}>XL</EachButton>
            <EachButton value = "XLL" onClick={this.OnSelectedSize}>XLL</EachButton>
    
            </SelectFilterGroup>
            )
    }
    
}
export default EachSize;