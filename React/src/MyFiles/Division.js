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
import "./Division.css";

function Division(props){
    return (
    <div className='d-flex row continer-fluid'>
            <div className='d1 col-lg-6 col-md-12' >
                <h1  style={{color:"white"}}ClassName=""> {props.T1}</h1>
                <p className="fs-4 sub-head text-white text-center"> {props.subtitle}</p>
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
            <div className="d2 col-md-12 col-lg-6" >
                <img  className="d-block mx-auto" src={props.image}></img>
                <p className="fs-4 sub-head text-dark text-center"> {props.subtitle2}</p>
                
                <joe className="d-flex gap-3  justify-content-center">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                    <div>
                        <button className="btn text-primary rounded-pill border border-primary">{props.button2}</button>
                    </div>   
                </joe>
                
            </div>
    </div>
);
}

export default Division;