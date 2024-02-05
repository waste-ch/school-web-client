import React, { useState } from 'react';

const Attend = () => {
  const initialClasses = ['Class A', 'Class B', 'Class C'];

  const initialStudents = [
    { id: 1, name: 'Student 1', rollNo: 'A101', present: false },
    { id: 2, name: 'Student 2', rollNo: 'A102', present: false },
    // Add more students as needed
  ];

  const [selectedClass, setSelectedClass] = useState(initialClasses[0]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState(initialStudents);
  const [isEditing, setIsEditing] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: '', rollNo: '' });

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    // You may fetch students for the selected class from the server here
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // You may fetch attendance data for the selected date from the server here
  };

  const handleAttendanceChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleEdit = (id) => {
    setIsEditing(id);
  };

  const handleSaveEdit = (id) => {
    setIsEditing(null);
    // Implement logic to save edited data to the server
  };

  const handleEditAll = () => {
    const allEditing = students.every((student) => isEditing !== student.id);
    setIsEditing(allEditing ? students.map((student) => student.id) : null);
  };

  const handleEditNameChange = (e, id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, name: e.target.value } : student
      )
    );
  };

  const handleEditRollNoChange = (e, id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, rollNo: e.target.value } : student
      )
    );
  };

  const handleNewStudentChange = (field, value) => {
    setNewStudent((prevNewStudent) => ({ ...prevNewStudent, [field]: value }));
  };

  const handleAddNewStudent = () => {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        id: prevStudents.length + 1,
        name: newStudent.name,
        rollNo: newStudent.rollNo,
        present: false,
      },
    ]);

    setNewStudent({ name: '', rollNo: '' });
  };

  const saveAttendance = () => {
    // Implement the logic to save the attendance data to the server here
    // console.log(`Attendance saved for ${selectedClass} on ${selectedDate}`);
  };

  return (
    <div>
      <h1>Attendance Management System</h1>
      <div>
        <label>Select Class:</label>
        <select value={selectedClass} onChange={handleClassChange}>
          {initialClasses.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Date:</label>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <button onClick={handleEditAll}>Edit All</button>
      <table border='2px'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                {isEditing === student.id || (Array.isArray(isEditing) && isEditing.includes(student.id)) ? (
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleEditNameChange(e, student.id)}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {isEditing === student.id || (Array.isArray(isEditing) && isEditing.includes(student.id)) ? (
                  <input
                    type="text"
                    value={student.rollNo}
                    onChange={(e) => handleEditRollNoChange(e, student.id)}
                  />
                ) : (
                  student.rollNo
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleAttendanceChange(student.id)}
                />
              </td>
              <td>
                {isEditing === student.id || (Array.isArray(isEditing) && isEditing.includes(student.id)) ? (
                  <button onClick={() => handleSaveEdit(student.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(student.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td>{students.length + 1}</td>
            <td>
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) => handleNewStudentChange('name', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={newStudent.rollNo}
                onChange={(e) => handleNewStudentChange('rollNo', e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleAddNewStudent}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={saveAttendance}>Save Attendance</button>
    </div>
  );
};

export default Attend;
