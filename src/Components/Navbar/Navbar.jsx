
import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {

const [menu,setMenu] =useState("shop");
const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPING</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop" ? <hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link> {menu==="mens" ? <hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Womens")}}><Link to='/Womens'style={{textDecoration:'none'}} >Women</Link> {menu==="Womens" ? <hr/>:<></>} </li>
           
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="kids" ? <hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'> <button>Login</button> </Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
