import React, { useState } from 'react';

const TransportForm = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    className: '',
    requiresTransport: false,
    pickupLocation: '',
    dropoffLocation: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the form data, e.g., send it to the server
    console.log('Form submitted:', studentInfo);
  };

  return (
    <div>
      <h1>School Transport Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" name="name" value={studentInfo.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Class Name:
          <input type="text" name="className" value={studentInfo.className} onChange={handleChange} />
        </label>
        <br />
        <label>
          Roll Number:
          <input type="text" name="studentrollno" value={studentInfo.studentrollno} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Driver Name:
          <input type="text" name="Drivername" value={studentInfo.Drivername} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Bus Number:
          <input type="text" name="Busnumber" value={studentInfo.Busnumber} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Requires Transport:
          <input
            type="checkbox"
            name="requiresTransport"
            checked={studentInfo.requiresTransport}
            onChange={handleChange}
          />
        </label>
        <br />
        {studentInfo.requiresTransport && (
          <>
            <label>
              Pickup Location:
              <input
                type="text"
                name="pickupLocation"
                value={studentInfo.pickupLocation}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Drop-off Location:
              <input
                type="text"
                name="dropoffLocation"
                value={studentInfo.dropoffLocation}
                onChange={handleChange}
              />
            </label>
            <br />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransportForm;
