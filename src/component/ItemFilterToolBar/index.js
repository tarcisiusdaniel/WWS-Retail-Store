import React from 'react';
import './style.css';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const OptionsDiv = styled.div `
    position: absolute;
    top: 3.5%;
    left: 5.37%;
`
const Divider = styled.div `
    position: relative;
    left: -7.77%;
    width: 281px;
    height: 2px;
    background: #000000;
    margin: 12px 0 26px;
`

export default class ItemFilterToolBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterOptions: this.props.filterOpt,
            viewOptions: this.props.viewOpt
        }
    }

    render(){
        // modify the style.css and the Grid placement to fix the layout and
        // make the filter with checkbox
        return(
            <div class = "outer-filter-item-bar">
                <OptionsDiv>
                <Grid container alignItems = "center">
                    <Grid item xs = {12} alignItems = "center">
                        {
                            this.state.viewOptions.map((viewType) => {
                                return(
                                    <label class = "container">
                                        {viewType}
                                        <input type = "radio" name = "radio" />
                                        <span class = "checkmark"></span>
                                    </label>
                                )                            
                            })
                        }
                    </Grid>
                    <Grid item xs = {12}>
                        <Divider />
                    </Grid>
                    <Grid item xs = {12}>
                        {
                            this.state.filterOptions.map((filterType) => {
                                return(
                                    <label class = "container">
                                        {filterType}
                                        <input type = "checkbox" />
                                        <span class = "checkmark"></span>
                                    </label>
                                )
                            })
                        }
                    </Grid>
                </Grid>
                </OptionsDiv>
            </div>
        );
    }
}