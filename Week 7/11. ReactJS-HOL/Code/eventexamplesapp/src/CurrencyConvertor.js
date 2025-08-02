import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const converted = (value / 89.5).toFixed(2); // approx rate
      setEuro(converted);
    } else {
      alert("Enter valid INR amount");
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Convert</button>

      {euro && <p>Converted Amount in Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
