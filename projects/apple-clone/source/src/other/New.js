
import React, { useEffect, useRef } from 'react';
import img1 from './f1.jpg';
import img2 from './f2.jpg';
import img3 from './f3.jpg';
import img4 from './f4.jpg';
import img5 from './f5.jpg';
import img6 from './f6.jpg';
import img7 from './f7.jpg';
import img8 from './f8.jpg';
import img9 from './f9.jpg';
import img10 from './f10.jpg';

import "./New.css";



function New(){
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const slider = sliderRef.current;
      if (slider) {
        // If end reached, reset to 0 (loop)
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 210; // move right (image width + margin)
        }
      }
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" slider-container" ref={sliderRef}>
      <div className='one   slide-image'></div>
      <div className='two   slide-image'></div>
      <div className='three slide-image'></div>
      <div className='four  slide-image'></div>
      <div className='five  slide-image'></div>
      <div className='six   slide-image'></div>
      <div className='seven slide-image'></div>
      <div className='eight slide-image'></div>
      <div className='nine  slide-image'></div>
      <div className='ten   slide-image'></div>

    </div>
  );
}

export default New;
