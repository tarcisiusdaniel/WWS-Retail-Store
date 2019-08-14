import React from 'react';
import './style.css';

export default class AccShopButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textInButton: this.props.text,
            iconInButton: this.props.icon,
            classForButton: this.props.class
        }
    }

    render(){
        return(
            <div class = {this.state.classForButton}>
                <a href>
                    <span class = "inside-text">{this.state.textInButton}</span>
                    <span class = "inside-icon">{this.state.iconInButton}</span>
                </a>
            </div>
        );
    }
}