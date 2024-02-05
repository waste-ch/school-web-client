import React, { useState } from 'react';

const Homework = () => {
  const initialSubjects = [
    { id: 1, subject: "Math", homework: "Solve the quadratic equations." },
    { id: 2, subject: "Science", homework: "Write a report on photosynthesis." },
    { id: 3, subject: "History", homework: "Research and summarize an event from World War II." },
  ];

  const [subjects, setSubjects] = useState(initialSubjects);
  const [editingSubjectId, setEditingSubjectId] = useState(null);
  const [newSubject, setNewSubject] = useState({ subject: "", homework: "" });

  const handleEditClick = (id) => {
    setEditingSubjectId(id);
  };

  const handleSaveClick = (id, editedHomework) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, homework: editedHomework } : subject
      )
    );
    setEditingSubjectId(null);
  };

  const handleCancelClick = () => {
    setEditingSubjectId(null);
  };

  const handleInputChange = (e, field) => {
    setNewSubject((prevNewSubject) => ({ ...prevNewSubject, [field]: e.target.value }));
  };

  const handleAddRowClick = () => {
    setSubjects((prevSubjects) => [
      ...prevSubjects,
      { id: prevSubjects.length + 1, ...newSubject },
    ]);
    setNewSubject({ subject: "", homework: "" });
  };

  return (
    <div className="table-container">
      <h1>Student Homework Table</h1>
      <label for="classSelect">Select a class:</label>
    <select id="classSelect" name="classSelect">
    <option value="class1">Class 1</option>
    <option value="class2">Class 2</option>
    <option value="class3">Class 3</option></select>

    <label for="classSelect">Select a Section:</label>
    <select id="classSelect" name="classSelect">
    <option value="class1">A</option>
    <option value="class2">B</option>
    <option value="class3">C</option>
 
</select>

      <label for="dateInput">Select a date:</label>
        <input type="date" id="dateInput" name="dateInput"/>
      <table border="1px"> 
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Homework</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.subject}</td>
              <td>
                {editingSubjectId === subject.id ? (
                  <textarea
                    rows="4"
                    cols="30"
                    value={subject.homework}
                    onChange={(e) => handleSaveClick(subject.id, e.target.value)}
                  />
                ) : (
                  <p>{subject.homework}</p>
                )}
              </td>
              <td>
                {editingSubjectId === subject.id ? (
                  <>
                    <button onClick={() => handleSaveClick(subject.id, subject.homework)}>
                      Save
                    </button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(subject.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{subjects.length + 1}</td>
            <td>
              <input
                type="text"
                value={newSubject.subject}
                onChange={(e) => handleInputChange(e, 'subject')}
              />
            </td>
            <td>
              <input
                type="text"
                value={newSubject.homework}
                onChange={(e) => handleInputChange(e, 'homework')}
              />
            </td>
            <td>
              <button onClick={handleAddRowClick}>Add New Row</button>
            </td>
          </tr>
        </tfoot>
      </table>
      
    </div>
    
  );
};

export default Homework;
