import React, { useState } from 'react';

const EarningForm = () => {
  const [earningInfo, setEarningInfo] = useState({
    date: '',
    studentName: '',
    rollNumber: '',
    totalEarnings: 0,
    additionalEarnings: [],
  });

  const handleAddEarning = () => {
    setEarningInfo((prevInfo) => ({
      ...prevInfo,
      additionalEarnings: [
        ...prevInfo.additionalEarnings,
        { date: '', studentName: '', rollNumber: '', amount: 0 },
      ],
    }));
  };

  const handleEarningChange = (index, field, value) => {
    setEarningInfo((prevInfo) => {
      const updatedEarnings = [...prevInfo.additionalEarnings];
      updatedEarnings[index][field] = value;
      return { ...prevInfo, additionalEarnings: updatedEarnings };
    });
  };

  const handleTotalEarnings = () => {
    const total = earningInfo.additionalEarnings.reduce((acc, earning) => acc + earning.amount, 0);
    setEarningInfo((prevInfo) => ({ ...prevInfo, totalEarnings: total }));
  };

  return (
    <div>
      <h1>Earning Form</h1>
      <form>
        <label>
          Date:
          <input
            type="date"
            value={earningInfo.date}
            onChange={(e) => setEarningInfo({ ...earningInfo, date: e.target.value })}
          />
        </label>
        <br />

        <label>
          Student Name:
          <input
            type="text"
            value={earningInfo.studentName}
            onChange={(e) => setEarningInfo({ ...earningInfo, studentName: e.target.value })}
          />
        </label>
        <br />

        <label>
          Roll Number:
          <input
            type="text"
            value={earningInfo.rollNumber}
            onChange={(e) => setEarningInfo({ ...earningInfo, rollNumber: e.target.value })}
          />
        </label>
        <br />

        <label>Total Earnings: ${earningInfo.totalEarnings.toFixed(2)}</label>
        <br />

        <label>Additional Earnings:</label>
        {earningInfo.additionalEarnings.map((earning, index) => (
          <div key={index}>
            <label>
              Amount:
              <input
                type="number"
                value={earning.amount}
                onChange={(e) => handleEarningChange(index, 'amount', parseFloat(e.target.value))}
              />
            </label>
          </div>
        ))}

        <button type="button" onClick={handleAddEarning}>
          Add Earning
        </button>
        <br />

        <button type="button" onClick={handleTotalEarnings}>
          Calculate Total Earnings
        </button>
      </form>
    </div>
  );
};

export default EarningForm;
