//import React from "react";
import React, { useState } from 'react';

const TeacherClass = () => {
  // Sample data for available classes
  const availableClasses = ['Class A', 'Class B', 'Class C', 'Class D'];
  // State to track the selected class
  const [selectedClass, setSelectedClass] = useState('');

  // Function to handle class selection
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform actions with the selectedClass here
    console.log(`Selected Class: ${selectedClass}`);
  };

  return (
    <div>
      <h2>Select Class</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Choose Class:
          <select value={selectedClass} onChange={handleClassChange}>
            <option value="">Select a class</option>
            {availableClasses.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeacherClass;
