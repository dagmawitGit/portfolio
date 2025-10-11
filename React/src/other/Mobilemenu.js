import React, { useState } from 'react';
import './Navbar.css';

const sections = [
  {
    title: "shop and learn",
    items: ["Store", "Mc", "iPad","iPhone","Watch","Vision","Airpods","Tv& Home","AirTag","Accessories", "Gift Cards"],
  },
  {
    title: "Apple wallet",
    items: ["Wallet", "Apple Card", "Apple Pay","Apple cash"],
  },
  {
    title: "Account",
    items: ["Manage Your Apple account", "Apple Store Account","iCloud.com"],
  },
  {
    title: "Entertainment",
    items: ["Apple One", "Apple Tv+","Apple Music","Apple Arcade","Apple Fitness+","Apple News+","Apple Podcasts","Apple Books","App Store" ],
  },
  {
    title: "Apple Store",
    items: ["Find a store", "Genuies Bar","Today at Apple","Group Reservations","Apple camp","Apple Store App","Certified Refurbished","Apple Trade In","Financing","Carrier Deals at Apple","Order Status","Shopping Help"],
  },
  {
    title: "For Business",
    items: ["Apple and business", "Shop and business"],
  },
  {
    title: "For Education",
    items: ["Apple and Education", "Shop for K-12","shop for college"],
  },
  {
    title: "For Healthcare",
    items: ["Apple in Healthcare", "Mac in Healthcare","Health on apple Watch","Health Records on iPhone and iPad"],
  },
  {
    title: "For Government",
    items: ["Shop for Government", "Shop for Veterans and Militaries"],
  },
  {
    title: "Apple values",
    items: ["Acccessibility", "Education", "Enviroment","Inclusion and Diversity","Privacy","Racial Equity and justice","Supply Chain Innovation"],
  },
  {
    title: "About Apple",
    items: ["Newsroom", "Apple Leadership","career Opportunites","Inverstors","Ethics & compliance","Events","Contact Apple"],
  },
];

const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="mobile-section">
      {sections.map((section, i) => (
        <div key={i} className="mobile-section-block">
          <button className="section-title" onClick={() => toggle(i)}>
            {section.title}
            <span className="arrow">{openIndex === i ? '^' : '▼'}</span>
          </button>
          <hr></hr>
          {openIndex === i && (
            <ul className="section-items">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
                
              ))}
            </ul>
          )}
        </div>
      ))}
      <p className='p'>More ways to shop:<a className='fakelink'>Find an Apple Store </a> or <a className='fakelink'> other retailer</a> near you.<br></br>Or call <a className='fakelink'>1-800-MY-APPLE</a>(1-800-692-7753).</p>
      <p>United States</p>
      <p>Copyright © 2025 Apple Inc. All rights reserved. <br/><pre>Privacy Policy | Terms of Use | Sales and Refunds | Legal</pre><br/> Site Map</p>
          </div>
  );
};

export default MobileMenu;