import React from 'react';
import flyknitTrialImage from '../../properties/flyknitTrialImage.jpeg';
import './style.css';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class ItemShower extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemName: this.props.nameOfTheItem,
            itemImage: this.props.imageOfTheItem,
            itemPrice: this.props.priceOfTheItem,
        }
        this.handleItemShowerClick = this.handleItemShowerClick.bind(this);
    }

    handleItemShowerClick(){
        this.props.history.push("/trial/details");
    }

    render(){
        //benerin coordinate placement untuk nama item dan price item
        return(
            <div class = "outer-item-container">
                <Grid container alignItems = "center">
                    <Grid item xs = {4} >
                        <div class = "image-item">
                            <a href onClick = {this.handleItemShowerClick}>
                                <img src={this.state.itemImage} width = '267px' height = '183px' />
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs = {8} >
                        <Grid container>
                            <div class = "initial-placement">
                                <Grid item xs = {12}>
                                    <div class = "font name-item" >
                                        <a href onClick = {this.handleItemShowerClick}>
                                            {this.state.itemName}
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs = {12}>
                                    <div class = "font price-item">${this.state.itemPrice}</div>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(ItemShower);