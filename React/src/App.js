
 import './App.css';
 import tradeIn from "./images/trade.png";
import card from "./images/card.png";
 import i4 from './images/pc.jpg';
import I1 from "./MyFiles/1.jpg";
import I2 from "./MyFiles/2.jpg";
import I3 from "./images/3.jpg";
import I4 from "./images/4.png";
import I5 from "./images/phones.jpg";
import I6 from "./MyFiles/6.jpg";
import watch from "./MyFiles/watch.jpg";
import img1 from "./MyFiles/L1.jpg";
import img2 from "./MyFiles/L2.jpg";
import img3 from "./MyFiles/L3.jpg";
 import apple from './MyFiles/apple.png';
import Second from "./MyFiles/Second";
import Body from "./MyFiles/Body";
import Division2 from "./MyFiles/Division2";
import Division3 from "./MyFiles/Division3";
import "bootstrap/dist/css/bootstrap.min.css";
import Body2  from './MyFiles/Body2';
import Body3 from "./MyFiles/Body3";
import ipad from './MyFiles/ipadair.jpg';
import New from "./other/New";
import New2 from "./other/New2";
import small from "./MyFiles/small.jpg";
import Footer from "./other/Footer";
 import Division from './MyFiles/Division';
import Navbar from "./other/Navbar";


function App() {
  return (
    <div className="continer gap-3 App">
      <header className="App-header">
      <Second></Second>
      <Body title="iPhone" subtitle="Meet 16 iPhone family" button="learn more" button2="shop iPhone" lasttext="Built for Apple Intellgience"></Body>
      <Body2 img1={tradeIn}  subtitle="Get $170-$630 in credit when you" s1="trade in iPhone 12 or higher" button="Get Your Estimate"  ></Body2>
      <Body3  title="MacBook Air" subtitle="Sky blue color." t1="Sky high performance with M4."  button="learn more" button2="buy" last="Built for Apple Intellgience"></Body3>
      <Division   t="SERIES 10" subtitle2="Thinsatnt classic." T1="iPad pro" subtitle="Unbelievably thin. Incredibly powerful" button="learn more" button2="buy" lasttext="Built for Apple Intellgience" image1={I1} image2={I2} ></Division>
      <Division2 T2="MacBook Pro"  subtitle2="A Work of smart" T1="AirPods Pro2" subtitle="Now With a Hearing Aid features." button="learn more" button2="buy"  lasttext="Built for Apple Intellgience"></Division2>
      <Division3 img1={ipad} img2={card}   subtitle2="Get up to 3% Daily Cash back " s2="with every purchase."  subtitle="Get $170-$630 in credit when you" s1="trade in iPhone 12 or higher" button="learn more" button2="Apply now" image1={small} image2={I6} ></Division3>
      <New/>
      <New2/>
      <Footer/>
      <Navbar/>
      
      </header>
    </div>
  );
}

export default App;
