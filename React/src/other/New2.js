
import React, { useEffect, useRef } from 'react';
import img1 from './p1.jpg';
import img2 from './p2.jpg';
import img3 from './p3.jpg';
import img4 from './p4.jpg';
import img5 from './p5.jpg';
import img6 from './p6.jpg';

import "./New2.css";



function New2(){
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
    <div className="slide  slider-container  image-continer" ref={sliderRef}>
        <div className='a   slide-i' ></div>
        <div className='b   slide-i'></div>
        <div className='c   slide-i'></div>
        <div className='d   slide-i'></div>
        <div className='e   slide-i'></div>
        <div className='f   slide-i'></div>

       </div>
  
  );
}

export default New2;
