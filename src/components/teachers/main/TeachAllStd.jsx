import React, { useState } from 'react';

const TeacherAllStd = () => {
  const classes = ['Class 1', 'Class 2', 'Class 3'];
  const examTypes = ['Exam 1', 'Exam 2', 'Exam 3'];

  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [selectedExamType, setSelectedExamType] = useState(examTypes[0]);
  const [studentsData, setStudentsData] = useState([
    { rollNo: 1, name: 'Student 1', telugu: 85, hindi: 90, english: 78 },
    { rollNo: 2, name: 'Student 2', telugu: 75, hindi: 88, english: 92 },
  ]);
  const [newSubjectName, setNewSubjectName] = useState('');

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleExamTypeChange = (event) => {
    setSelectedExamType(event.target.value);
  };

  const handleMarksChange = (rollNo, subject, newMarks) => {
    setStudentsData((prevStudentsData) =>
      prevStudentsData.map((student) =>
        student.rollNo === rollNo ? { ...student, [subject]: newMarks } : student
      )
    );
  };

  const handleAddColumn = () => {
    // Add a new column with a custom name and default values
    if (newSubjectName.trim() !== '') {
      setStudentsData((prevStudentsData) =>
        prevStudentsData.map((student) => ({ ...student, [newSubjectName]: 0 }))
      );
      setNewSubjectName(''); // Clear the input field after adding the column
    }
  };

  const handleAddRow = () => {
    setStudentsData((prevStudentsData) => [
      ...prevStudentsData,
      { rollNo: prevStudentsData.length + 1, name: `Student ${prevStudentsData.length + 1}`, telugu: 0, hindi: 0, english: 0 },
    ]);
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', studentsData);
    // Add logic to save changes (e.g., send data to server)
  };

  return (
    <div>
      <h1>Student Information</h1>
      <div>
        <label>
          Select Class:
          <select value={selectedClass} onChange={handleClassChange}>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Exam Type:
          <select value={selectedExamType} onChange={handleExamTypeChange}>
            {examTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Telugu</th>
            <th>Hindi</th>
            <th>English</th>
            {studentsData.length > 0 &&
              Object.keys(studentsData[0]).map((subject) => (
                // Render columns dynamically based on subjects
                subject !== 'rollNo' && subject !== 'name' && (
                  <th key={subject}>{subject}</th>
                )
              ))}
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  value={student.telugu}
                  onChange={(e) => handleMarksChange(student.rollNo, 'telugu', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.hindi}
                  onChange={(e) => handleMarksChange(student.rollNo, 'hindi', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.english}
                  onChange={(e) => handleMarksChange(student.rollNo, 'english', e.target.value)}
                />
              </td>
              {Object.keys(student).map(
                // Render columns dynamically based on subjects
                (subject) =>
                  subject !== 'rollNo' &&
                  subject !== 'name' && (
                    <td key={`${student.rollNo}-${subject}`}>
                      <input
                        type="number"
                        value={student[subject]}
                        onChange={(e) => handleMarksChange(student.rollNo, subject, e.target.value)}
                      />
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>
          New Subject Name:
          <input
            type="text"
            value={newSubjectName}
            onChange={(e) => setNewSubjectName(e.target.value)}
          />
        </label>
        <button onClick={handleAddColumn}>Add Column</button>
      </div>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default TeacherAllStd;
