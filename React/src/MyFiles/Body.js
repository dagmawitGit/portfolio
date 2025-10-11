import React from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';

function Body(props){
    return(
       
    <div className="iphone continer-fluid  row-gap-3">
        <div className="unity-copy-wrapper">
            <div className="big">
                <div className=" d-flex justify-content-center">
                  
                    <img className="app" src={props.img} alt=""></img>
                    <h1 ClassName="fs-4 headline"> {props.title}</h1>
                  
                </div>  
                  <p className="fs-4 sub-head"> {props.subtitle}</p>
                  <p className="fs-4 sub-head">{props.t1}</p>
                  <p>{props.t}</p>
               <div className="d-flex gap-3  justify-content-center">
                    <div>
                       <button className="btn rounded-pill btn-primary">{props.button}</button>
                    </div>
                    <div>
                        <button className="btn text-primary rounded-pill border border-primary">{props.button2}</button>
                    </div>   
                </div>
            
                    <br></br><p className=" fs-5 rainbow-text">{props.lasttext}</p>
                    <div className="pb-md-3">
                       
                        <p className="fs-5 rainbow-text">{props.last}</p>          
                    </div>  
            </div>
             
           
        </div>
        
    </div>

);
}
export default Body;