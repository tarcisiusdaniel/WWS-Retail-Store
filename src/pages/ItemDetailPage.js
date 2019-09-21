import React from 'react';
import styled from 'styled-components';


const OuterContainer = styled.div `
    position: absolute;
    left: 35px;
    top: 172px;
    width: 100%;
`

export default class ItemDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <OuterContainer>
                        <p>
                            Hello, this is the page to show you the detail of the item that you just have selected
                        </p>
                        <p>
                            Unfortunately, the page that you desire is under progress. 
                        </p>
                        <p>
                            We are sorry for the inconvenience.
                        </p>
            </OuterContainer>
        )
    }
}