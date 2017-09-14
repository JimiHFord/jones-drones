import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Slideshow extends Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 4000,
      autoplaySpeed: 6000,
      autoplay: true,
      pauseOnHover: false,
      slidesToShow: 1
    };

    return (
      <div style={{overflow: "hidden", height: "100vh"}}>
        <Slider {...settings}>
          <div>
            <img src="/city.jpg" alt="city" />
          </div>
          <div>
            <img src="/road.jpg" alt="road" />
          </div>
          <div>
            <img src="/foggy.jpg" alt="foggy" />
          </div>
          <div>
            <img src="/landscape.jpg" alt="landscape" />
          </div>
        </Slider>
      </div>
    )
  }
}