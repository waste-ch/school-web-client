import React, { useState } from 'react';
import './timetable.css';

const subjects = ['Math', 'Science', 'English', 'History', 'Art']; // Add your subjects
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; // Add your days

const Timetable = () => {
  const [teachers] = useState([
    ['John', 'Alice', 'Bob', 'Eve', 'Charlie'],
    ['Charlie', 'John', 'Eve', 'Alice', 'Bob'],
    ['Bob', 'Eve', 'John', 'Alice', 'Charlie'],
    ['Alice', 'Bob', 'Charlie', 'John', 'Eve'],
    ['Eve', 'Charlie', 'Alice', 'Bob', 'John'],
  ]);

  const renderTableHeader = () => {
    const headers = ['Date/Month/Year', ...subjects, 'Actions'];
    return headers.map((header, index) => <th key={index}>{header}</th>);
  };
  const renderTableBody = () => {
    return days.map((day, dayIndex) => (
      <tr key={dayIndex}>
        <td>{day}</td>
        <td>{new Date().getDate()}</td>
        <td>{new Date().getMonth() + 1}</td>
        <td>{new Date().getFullYear()}</td>
        {subjects.map((subject, subjectIndex) => (
          <td key={subjectIndex}>
            <div className="subject">{subject}</div>
            <div className="teacher">{teachers[dayIndex][subjectIndex]}</div>
          </td>
        ))}
        <td>
          <button onClick={() => handleEdit(dayIndex)}>Edit</button>
          <button onClick={() => handleRemove(dayIndex)}>Remove</button>
        </td>
      </tr>
    ));
  };

  const handleEdit = (dayIndex) => {
    // Implement your edit functionality here
    console.log('Edit', dayIndex);
  };

  const handleRemove = (dayIndex) => {
    // Implement your remove functionality here
    console.log('Remove', dayIndex);
  };

  const handleAdd = () => {
    // Implement your add functionality here
    console.log('Add');
  };

  return (
    <div>
      <h1>Timetable</h1>
      <button onClick={handleAdd}>Add</button>
      <table className="timetable">
        <thead>
          <tr>
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {renderTableBody()}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
