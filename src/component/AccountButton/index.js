import React from 'react';
import accountIcon from '../../properties/accountIcon.png';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './style.css';

class AccountButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textInButton: this.props.text,
            iconInButton: this.props.icon,
            redirectToLogin: false,
            redirectToRegister: false,
        }
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onRegisterClick() {
        this.props.history.push('/register');
    }

    onLoginClick() {
        this.props.history.push('/login');
    }

    render(){
        return(
            <div class = "account-button">
                {/* {console.log(this.props)} */}
                <a href>
                    <span class = "inside-text">Account</span>
                    <span class = "inside-icon">
                        <img src = {accountIcon} alt = "Account Icon" height = "40" width = "40"/>
                    </span>
                </a>
                <div class = "dropdown-content-account-button">
                    <a href onClick = {this.onRegisterClick}>Register</a>
                    <a href onClick = {this.onLoginClick}>Login</a>
                </div>
            </div>
        );
    }
}

export default withRouter(AccountButton);