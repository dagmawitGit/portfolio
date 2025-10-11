 import React from 'react';   
// export function getBackgroundStyle(image){
// return {
//    backgroundImage:"url($(image))",
//    backgroundSize:'cover',
//    backgroundRepeat: 'no-repeat',
//    backgroundPostion: 'center',
//    minHeight:'400px',
//    color: 'black',
//    border: '2px solid blue',
//    width:'3000px'
// };
import "./Division3.css";

function Division3(props){
    return (
    <div className='d-flex  row continer-fluid'>
            <div className="a1  col-lg-6 col-md-12" >
               <img className="d-block  mx-auto" src={props.img1}></img>
            
                <p className="fs-4 sub-head text-black text-center"> {props.subtitle}</p>
                <p className="fs-4 text-center subhead">{props.s1}</p>
                <joe className="d-flex gap-3  justify-content-center pb-3">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                    <div>
                        <button className="btn text-primary rounded-pill border border-primary">{props.button2}</button>
                    </div>   
                </joe> 
            </div>
            <div className="a2 col-lg-6 col-md-12">
                
                <img className='d-block mx-auto' src={props.img2} ></img>
                <p className="fs-4 sub-head text-black text-center"> {props.subtitle2}</p>
            <p className="j text-center fs-4 subhead">{props.s2}</p>
                
                <joe className="d-flex gap-3  justify-content-center">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                    <div>
                        <button className="btn text-primary rounded-pill border border-primary">{props.button2}</button>
                    </div>   
                </joe>
            
                
                <br></br><p className=" fs-5 rainbow-text">{props.lasttext}</p>
            </div>
    </div>
);
}

export default Division3;