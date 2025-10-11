import React,{useState} from "react";
import img from "./apple.png";
import Img from "./search.jpg";
import image from "./bag.png";
import icon from "./menu.jpg";
import './Second.css';
import {Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
function Second(){
    const [open,setOpen]=useState(false);
    const toggleMenu=()=>{
        setOpen(!open);
    };
    return(
        
     <div className="continer-fluid d">
                <li className="app"><img className="first" width={30}   src={img} alt=""></img></li>
                <li className="nav-bar-collapse nav-collapse" >Store</li>
                <li className="nav-bar-collapse nav-collapse">Mac</li>
                <li className="nav-bar-collapse nav-collapse">iPad</li>
                <li className="nav-bar-collapse nav-collapse">iPhone</li>
                <li className="nav-bar-collapse nav-collapse">Watch</li>
                <li className="nav-bar-collapse nav-collapse">AirPods</li>
                <li className="nav-bar-collapse nav-collapse">Tv&Home</li>
                <li className="nav-bar-collapse nav-collapse">Entertainment</li>
                <li className="nav-bar-collapse nav-collapse">Accessaries</li>
                <li className="nav-bar-collapse nav-collapse">Support</li>
                <li>
                    <div className="d-flex right">
                          <li className="s"> <img className="I" src={Img} alt=""></img></li>
                          <li className=""><img  className="I" src={image} alt=""></img></li>
                        <div className="menu-continer">
                            <div className={'hamburger ${open ? "" : " "}'} onClick={toggleMenu}>
                                <p><span><img  className="Toggle" width={40} src={icon} alt=""></img></span></p>
                                
                                {open && (
                                    <div className="menu-list">
                                        <ul className="ulIcon"> 
                                            <li>Store</li>
                                            <li>Mac</li>
                                            <li>iPad</li>
                                            <li>iPhone</li>
                                            <li>Watch</li>
                                            <li>AirPods</li>
                                            <li>Tv&Home </li>
                                            <li>Entertainment</li>
                                            <li>Accessaries</li>
                                            <li>Support</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                   </div>
                </li>   
        </div>
    
);
}

export default Second;
