import React from 'react';
import flyknitTrialImage from '../../properties/flyknitTrialImage.jpeg';
import './style.css';

export default class ItemShower extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemName: 'FlyKnit OG 2012 No Cap Bitch ass nigga',
            itemImage: 'flyknitTrialImage',
            itemPrice: 240,
        }
    }

    render(){
        return(
            <div class = "outer-item-container">
                {/* <span>{itemImage}</span>
                <span>{itemName}</span>
                <span>{itemPrice}</span> */}
            </div>
        );
    }
}