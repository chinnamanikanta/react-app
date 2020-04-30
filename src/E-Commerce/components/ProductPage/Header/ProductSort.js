import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import EachSize from './EachProductSize';


const SelectFilterGroup = styled.div`
display:flex;
width:150px;
margin-left:20px;
flex-wrap:wrap;
`;

@observer
class ProductSortedBy extends React.Component {
    
    render(){
        return (
            <SelectFilterGroup>
            {this.props.selectedFilter.map((eachSize,index)=> 
            <EachSize key={index} eachSize={eachSize}/>
            )}
            </SelectFilterGroup>
            
            )
    }
}
export default ProductSortedBy;