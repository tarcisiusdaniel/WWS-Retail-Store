import React from 'react';
import './style.css';

export default class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navbarOptions: this.props.options
        }
    }

    render(){
        return (
            <div class = "navbar-bottom">
                <nav>
                    <ul>
                        {this.state.navbarOptions.map((option, index) => {
                            return (
                                <li key = {index}>
                                    <a href>{option}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}