import React from 'react';
import { Slide } from 'react-slideshow-image';
import home from '../../images/offer/1.jpg';
import home2 from '../../images/offer/4.jpg';
import home3 from '../../images/offer/3.jpg';
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    const slideImages = [
        home,
        home2,
        home3
      ];

    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img src={slideImages[0]} alt="Alternative Text"></img>
          </div>
          <div className="each-slide">
          <img src={slideImages[1]} alt="Alternative Text"></img>
          </div>
          <div className="each-slide">
            <img src={slideImages[2]} alt="Alternative Text"></img>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;
