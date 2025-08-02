import React from 'react';

function App() {
  const officeSpaces = [
  {
    name: 'Sky High Towers',
    rent: 45000,
    address: '123 Skyline Avenue, Mumbai',
    image: '/office1.jpg'
  },
  {
    name: 'Ocean View Hub',
    rent: 75000,
    address: '456 Beach Road, Chennai',
    image: '/office2.jpg'
  },
  {
    name: 'TechNest Building',
    rent: 60000,
    address: '789 IT Park, Bengaluru',
    image: '/office3.jpg'
  }
];


  const headingStyle = {
    textAlign: 'center',
    marginTop: '20px'
  };

  return (
    <div>
      <h1 style={headingStyle}>Office Space Rentals</h1>

      {officeSpaces.map((office, index) => (
        <div key={index} style={{ border: '1px solid grey', padding: '15px', margin: '20px' }}>
          <img src={office.image} alt={office.name} style={{ width: '300px', height: '200px' }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
