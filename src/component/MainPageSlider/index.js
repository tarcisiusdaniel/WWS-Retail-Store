import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nikeAdvertisement from '../../properties/nikeAdvertisement.jpg';
import booksAdvertisement from '../../properties/booksAdvertisement.jpg';
import './style.css';

export default class MainPageSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1        
        };
        return(
            <div class = "slider">
                <br/><br/><br/><br/><br/>
                <Slider {...settings}>
                    <div>
                        <img 
                            src = {nikeAdvertisement} 
                            alt = "FlyKnit Advertisement" 
                            class = "responsive-advertisements" />
                    </div>
                    <div>
                        <img 
                            src = {booksAdvertisement}
                            alt = "Books Advertisement"
                            class = "responsive-advertisements" />
                    </div>
                    <div>
                        <h3>Hartanto</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}