import React from 'react';
import MainPageSlider from '../component/MainPageSlider';
import NavHeader from '../component/NavHeader';

export default class MainPage extends React.Component{
    render(){
        return(
            <div>
                <NavHeader/>
                <div>
                    <MainPageSlider />
                </div>
            </div>

        )
    }
}