import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Transport() {
  return (
    <div>
      <h2>Welcome to the Transporter's Page</h2>
      <p>
        If you're involved in the world of transportation, you've landed on the right page! This space is dedicated to transporters, logistics enthusiasts, and anyone passionate about the movement of goods and people.
      </p>
      <p>
        Explore the latest trends, technologies, and stories from the world of transportation. Whether you're a truck driver, a logistics manager, or simply interested in the industry, there's something here for you.
      </p>
      <p>
        Join us on this journey as we navigate through the exciting realm of transportation. Safe travels!
      </p>
       {/* Link to the Contact page */}
     <h1><Link to="/Portcontact">Go to Registration </Link></h1>
    </div>
  );
}

export default Transport;
