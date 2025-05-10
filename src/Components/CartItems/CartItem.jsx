
import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Assests/cart_cross_icon.png'
import all_product from '../Assests/all_product'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = ({ productId, product }) => {
      const { removeFromCart, cartItems} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return(
                <div>
    <div className="cartitems-format cartitems-format-main">
        <img src={e.image} alt='' className='carticon-product-icon' />
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className="cartitems-quantity">{cartItems[e.id]}</button> {/* Fixed here */}
                <p>${e.new_price * cartItems[e.id]}</p>
        <img src={remove_icon} onClick ={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
</div>
           );   }
        })}


    </div>
  )
}

export default CartItem