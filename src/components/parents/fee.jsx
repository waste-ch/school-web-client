import React, { useState } from 'react';

const FeePage = () => {
  const [feeDue, setFeeDue] = useState();
  const [paidFee, setPaidFee] = useState();

  // Function to calculate total fee
  const calculateTotalFee = () => {
    return feeDue - paidFee;

  };

  return (
    <div>
      <h2>Fee Page</h2>
      <label>
        Fee Due:
        <input
          type="value"
          value={feeDue}
          onChange={(e) => setFeeDue(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Paid Fee:
        <input
          type="value"
          value={paidFee}
          onChange={(e) => setPaidFee(Number(e.target.value))}
        />
      </label>
      <br />
      <p>Total Fee: {feeDue}</p>
      <p>Fee Due: {calculateTotalFee()}</p>
    </div>
  );
};

export default FeePage;
