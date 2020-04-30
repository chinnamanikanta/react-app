import React from 'react';
import {observer} from 'mobx-react';
import cartStore from '../../../Stores/CartStore/CartStore';
@observer
class CartItem extends React.Component {
    
    onRemove=(deletedObject)=>{
        cartStore.onRemoveCartItem(deletedObject);
    }
    render(){
        return (
        
            <div className = "flex justify-between items-stretch">
            <div><img src={this.props.selectedProduct.image} className="w-12 "/></div>
            <div className="flex flex-col ">
            <div>{this.props.selectedProduct.title}</div>
            <div>{this.props.selectedProduct.style}</div>
            <div>quantity : {this.props.selectedProduct.quantity}</div>
            </div>
            <div className="flex flex-col items-end">

            <div>{this.props.selectedProduct.currencyFormat} {this.props.selectedProduct.price}</div>
            <div onClick={()=>this.onRemove(this.props.selectedProduct)}>X</div>
                        </div>
            </div>
            )
        
        
    }
    
}
export default CartItem;