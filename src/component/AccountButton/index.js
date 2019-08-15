import React from 'react';
import accountIcon from '../../properties/accountIcon.png';
import './style.css';

export default class AccountButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textInButton: this.props.text,
            iconInButton: this.props.icon,
        }
    }
    
    render(){
        return(
            <div class = "account-button">
            <a href>
                <span class = "inside-text">Account</span>
                <span class = "inside-icon">
                    <img src = {accountIcon} alt = "Account Icon" height = "40" width = "40"/>
                </span>
            </a>
        </div>
        );
    }
}