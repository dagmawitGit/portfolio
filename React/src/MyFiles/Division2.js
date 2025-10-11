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
import "./Division2.css";

function Division2(props){
    return (
    <div className='d-flex row continer-fluid'>
            <div className='d11 col-lg-6 col-md-12' >
                <img src={props.im1} ></img>
               <h1  style={{color:"white"}}ClassName=""> {props.T1}</h1>
                <p className="fs-4 sub-head text-white text-center"> {props.subtitle}</p>
                <joe className="d-flex gap-3  justify-content-center pb-3">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                    <div>
                        <button className="btn text-primary rounded-pill border border-primary">{props.button2}</button>
                    </div>   
                </joe>
                
            </div>
            <div className="d22 col-lg-6 col-md-12 bg-black">
                {/* <img  className="d-block mx-auto" src={props.im2}></img> */}
                <h1  style={{color:"white"}}ClassName=""> {props.T2}</h1>
                <p className="fs-4 sub-head text-white text-center"> {props.subtitle2}</p>
                
                <joe className="d-flex gap-3  justify-content-center">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                    <div>
                        <button className="btn text-primary rounded-pill border border-primary">{props.button2}</button>
                    </div>   
                </joe>
                <img  src={props.im2}></img>
                <br></br><p className=" fs-5 rainbow-text">{props.lasttext}</p>
            </div>
    </div>
);
}

export default Division2;