import React from 'react';
import { Link } from 'react-router-dom';

function Farmer() {
  return (
    <div>
      <h2>Welcome to Farmer's Page</h2>
      <p>
        Explore the world of Farmer! This page is dedicated to all things Farmer-related. Whether you're a fan, a friend, or just curious, you've landed on the right spot.
      </p>
      <p>
        Farmer invites you to discover interesting stories, adventures, and more. Feel free to navigate through the content and enjoy your time on Farmer's Page.
      </p>
      <p>
        Thanks for visiting and being a part of Farmer's world!
      </p>
      {/* Link to the Contact page */}
     <h1><Link to="/Tradercontacts">Contacts Details </Link></h1>
    </div>
  );
}


export default Farmer;



