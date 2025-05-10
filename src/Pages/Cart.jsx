
import React, { useContext } from 'react'
import CartItem from '../Components/CartItems/CartItem';
import { ShopContext } from '../Context/ShopContext';

 const Cart = () => {
  const {all_product,cartItems,removeFromCart} =useContext(ShopContext);
  return (
    <div>
      <CartItem/>
    </div>
  )
}
export default  Cart;
