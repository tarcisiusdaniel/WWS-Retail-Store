import React from 'react';
import './style.css';

export default class ItemFilterToolBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterOptions: []
        }
    }

    render(){
        return(
            <div class = "outer-filter-item-bar">
                
            </div>
        );
    }
}