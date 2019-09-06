import React from 'react';
import flyKnitTrialImage from '../properties/flyknitTrialImage.jpeg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ItemShower from '../component/ItemShower';
import ItemFilterToolBar from '../component/ItemFilterToolBar';
import { IMAGES } from '../importer';

const OuterContainer = styled.div `
    position: absolute;
    left: 35px;
    top: 172px;
    width: 100%;
`

const Divider = styled.div `
    width: 876px;
    height: 2px;
    background: #FDECEC;
    margin: 21px 60px;
`

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

}))

export default class FlyKnitPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            itemAvailableForFlyKnit: [
                {
                    name: 'Flyknit OG',
                    image: IMAGES.FLY_KNIT_TRIAL_IMAGE,
                    price: 240.00,
                    divider: true,
                },
                {
                    name: 'Flyknit Spectrum 6.0',
                    image: IMAGES.FLY_KNIT_TRIAL_IMAGE,
                    price: 340.00,
                    divider: true,
                },
                {
                    name: 'Flyknit x Jordan v1.0',
                    image: IMAGES.FLY_KNIT_TRIAL_IMAGE,
                    price: 540.00,
                    divider: true,
                },
                {
                    name: 'Flyknit D',
                    image: IMAGES.FLY_KNIT_TRIAL_IMAGE,
                    price: 140.00,
                    divider: true,
                },
                {
                    name: 'Flyknit E',
                    image: IMAGES.FLY_KNIT_TRIAL_IMAGE,
                    price: 440.00,
                    divider: true,
                },
                {
                    name: 'Flyknit F',
                    image: IMAGES.FLY_KNIT_TRIAL_IMAGE,
                    price: 40.00,
                    divider: false,
                },
            ],
            filters: ['<$100', '$100-200', '$200-300', '$300-400', '$400-500', '>$500'],
            views: ['Horizontal', 'Vertical']
        }
    }

    render(){
        const {itemAvailableForFlyKnit} = this.state;
        const classes = useStyles;
        return (
            <OuterContainer>
                {
                    itemAvailableForFlyKnit.length === 0 && 
                    <div className = {classes.root}>
                        <h3>This is the page for FlyKnit</h3>
                        <p>
                            Sorry for the inconvenience, the item you are looking is unavailable.
                            <br/>
                            You can search for other items to buy.
                            <br/>
                            However, I am not sure that other items will be ready as well
                        </p>
                    </div> 
                }
                {
                    itemAvailableForFlyKnit.length !== 0 && itemAvailableForFlyKnit.length >= 0 &&
                    <div className = {classes.root}>
                        <Grid container spacing = {3}>
                            <Grid item xs = {3}>
                                <div>
                                    <ItemFilterToolBar 
                                        viewOpt = {this.state.views} 
                                        filterOpt = {this.state.filters} />
                                </div>
                            </Grid>
                            <Grid item xs = {9}>
                                <Grid container alignItems = "center">
                                    {
                                        this.state.itemAvailableForFlyKnit.map((item) => {
                                            return (
                                                <div>
                                                    <Grid item xs = {12} alignItems = "center">
                                                        <ItemShower 
                                                            nameOfTheItem = {item.name}
                                                            imageOfTheItem = {item.image}
                                                            priceOfTheItem = {item.price} />
                                                    </Grid>
                                                    <Divider />
                                                </div>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                }
            </OuterContainer>
        );
    }
}