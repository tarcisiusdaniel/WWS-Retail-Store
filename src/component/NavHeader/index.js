import React from 'react';
import './style.css';
import Navbar from '../Navbar';
import AccountButton from '../AccountButton';
import ShoppingCartButton from '../ShoppingCartButton';
import AutoCompleteSearchBar from '../AutoCompleteSearchBar';

export default class NavHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navbarOptions: ["Browsing History", "Today's Deals", "Help", "Browsing History", "Language", "Sell"]
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
                    <div class = "auto-search-bar">
                        <AutoCompleteSearchBar />
                    </div>
                    {/* <form>
                        < input 
                            type = "text" 
                            placeholder = "Search the item here" 
                            class = "search-input" />
                        < button 
                            type = "submit" 
                            class = "submit-search-button" >
                                Search
                        </button>
                    </form>  */}
                <Navbar options = {this.state.navbarOptions}/>
                <AccountButton/>
                <ShoppingCartButton />
            </div>
        );
    }
}