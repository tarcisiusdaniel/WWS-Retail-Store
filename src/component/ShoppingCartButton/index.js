import React from 'react';
import cartIcon from '../../properties/cartIcon.png';
import './style.css';

export default class ShoppingCartButton extends React.Component{
    render(){
        return(
            <div class = "shopping-cart-button">
            <a href>
                <span class = "inside-text">Shopping Cart</span>
                <span class = "inside-icon">
                    <img src = {cartIcon} alt = "Shopping Cart Icon" height = "40" width = "40"/>
                </span>
            </a>
        </div>
        );
    }
}