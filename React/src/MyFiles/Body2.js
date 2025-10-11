import React from "react";
import bgimage from "./Last.jpg";
import f from "./5.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body2.css';

function Body2(props){
    return(
            
    <div className="B2 continer-fluid">
         <div className="pt-5" >
               <img className="d-block  mx-auto" src={props.img1}></img>
            
                <p className="fs-4 sub-head text-black text-center"> {props.subtitle}</p>
                <p className="fs-4 j subhead">{props.s1}</p>
                <joe className="d-flex gap-3  justify-content-center pb-3">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                </joe>
            
            </div>
           
    </div>

);
}
export default Body2;