import React from 'react';
import './style.css';
import Navbar from '../Navbar';
import AccShopButton from '../AccShopButton';
import accountIcon from '../../properties/accountIcon.png';
import cartIcon from '../../properties/cartIcon.png';

export default class NavHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navbarOptions: ["Today's Deals", "Help", "Browsing History", "Language"]
        }
    }

    render(){
        return (
            <div class = "navheader-rectangle">
                <div class = "retail-logo-container">
                    <span class = "retail-logo">
                        <a href>
                            WWS
                        </a>
                    </span>
                </div>
                <div class = "search-form">
                    <form>
                        <input type = "text" placeholder = "Search the item here" class = "search-input"/>
                        <button type = "submit" class = "submit-search-button">Search</button>
                    </form> 
                </div>
                <Navbar options = {this.state.navbarOptions}/>
                <AccShopButton 
                    class = "account-button" 
                    text = "Account"
                    icon = {<img src = {accountIcon} alt = "Account Icon" height = "40" width = "40"/>} />
                <AccShopButton 
                    class = "shopping-cart-button" 
                    text = "Shopping Cart" 
                    icon = {<img src = {cartIcon} alt = "Shopping Cart Icon" height = "40" width = "40"/>} />
            </div>
        );
    }
}