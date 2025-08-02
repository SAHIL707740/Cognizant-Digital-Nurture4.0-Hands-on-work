import React from 'react';

function UserPage() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>User Page - Book Your Flight</h2>
      <ul>
        <li>IndiGo - Delhi to Mumbai - ₹5,000 <button>Book</button></li>
        <li>Air India - Bengaluru to Chennai - ₹3,500 <button>Book</button></li>
        <li>SpiceJet - Hyderabad to Kolkata - ₹4,200 <button>Book</button></li>
      </ul>
    </div>
  );
}

export default UserPage;
