import React from 'react';
import flyKnitTrialImage from '../properties/flyknitTrialImage.jpeg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ItemShower from '../component/ItemShower';
import ItemFilterToolBar from '../component/ItemFilterToolBar';

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
    margin: 17px 60px;
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
                    name: 'FlyKnit OG',
                    image: flyKnitTrialImage,
                    price: 240
                }
            ]
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
                            Sorry for the inconvenience, this page is under progress of development.
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
                                    <ItemFilterToolBar />
                                </div>
                            </Grid>
                            <Grid item xs = {9}>
                                <Grid container spacing = {1}>
                                    <Grid item xs = {12}>
                                        <ItemShower />
                                    </Grid>
                                    <Divider />
                                    <Grid item xs = {12}>
                                        <ItemShower />
                                    </Grid>
                                    <Divider />
                                    <Grid item xs = {12}>
                                        <ItemShower />
                                    </Grid>
                                    <Divider />
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                }
            </OuterContainer>
        );
    }
}