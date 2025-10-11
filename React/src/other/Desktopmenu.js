import React from 'react';
import './Navbar.css';

const DesktopMenu = () => {
  return (
 <div className=' main continer'>
  <hr></hr>
      <div className='continer gap-5 d-flex'>
        <div>
            <ul className="menulist continer">
                <b>shop and learn</b>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Vision</li>
                <li>AirPods</li>
                <li>Tv and Home</li>
                <li>AirTag</li>
                <li>Acccessories</li>
                <li>Gift Cards</li>
            </ul>
            <ul className="menulist">
                <b>Apple Wallet</b>
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
            </ul>
        </div>
        <div>
            <ul className="menulist">
              <b>Apple Account</b>
              <li>Manager your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
            <ul className='menulist'>  
              <li><b>Entertainment</b></li>
              <li>Apple One</li>
              <li>Apple Tv+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple PodCasts</li>
              <li>Apple Books</li>
              <li>Apple Stores</li>
            </ul>
        </div>
        <div>
            <ul className="menulist">
               <li><b>Apple Store</b></li>
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservations</li>
              <li>Apple Camp</li>
              <li>Apple Store App</li>
              <li>Certified Referbished</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
              <li>Carrier deals at Apple</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>  
        </div>

        <div>
            <ul className="menulist">
                   <li><b>For Business</b></li>
                   <li>Apple and Business</li>
                   <li>Shop for Business</li>
              </ul>
              <ul className='menulist'>
                  <li><b>For Education</b></li>
                  <li>Apple and Education</li>
                  <li>Shop for K-12</li>
                  <li>Shop for college</li>
              </ul>
              <ul className='menulist'>
                  <li><b>Apple in Healthcare</b></li>
                  <li>Mac in Healthcare</li>
                  <li>Health on Apple Watch</li>
                  <li>Health Records on iphone and iPad</li>
                  <li>Gift Cards</li>
            </ul>
            <ul className='menulist'>
              <li><b>For Government</b></li>
              <li>Shop for Government</li>
              <li>Shop for Veterans and Military</li>    
            </ul>  
        </div>
        <div>
            <ul className='menulist'>
                <li><b>Apple Value</b></li>
                <li>Acccessability</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>racial Equity and Justice</li>
                <li>Supply Chain Innovation</li>
            </ul>
            <ul className='menulist'>
                <li><b>About Apple</b></li>
                <li>NewsRoom</li>
                <li>Apple Leadership</li>
                <li>Carrer Opportunity</li>
                <li>Inversters</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
            </ul>
        </div>
        
   </div>
   <p className='p'>More ways to shop:<a className='fakelink'>Find an Apple Store </a> or <a className='fakelink'> other retailer</a> near you.Or call <a className='fakelink'>1-800-MY-APPLE</a>(1-800-692-7753).</p>
   <hr></hr>
    <pre>Copyright © 2025 Apple Inc. All rights reserved. Privacy Policy | Terms of Use| Sales and Refunds| Legal Site Map                                                      United State</pre>
</div>
  );
};

export default DesktopMenu;