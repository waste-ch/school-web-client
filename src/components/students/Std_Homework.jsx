import React, { useState } from 'react';

const StudentHomework = () => {
  const initialSubjects = [
    { id: 1, subject: "Math", homework: "Solve the quadratic equations." },
    { id: 2, subject: "Science", homework: "Write a report on photosynthesis." },
    { id: 3, subject: "History", homework: "Research and summarize an event from World War II." },
  ];

  const [subjects, setSubjects] = useState(initialSubjects);
  const [editingSubjectId, setEditingSubjectId] = useState(null);
  //const [newSubject, setNewSubject] = useState({ subject: "", homework: "" });

  const handleSaveClick = (id, editedHomework) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, homework: editedHomework } : subject
      )
    );
    setEditingSubjectId(null);
  };



  return (
    <div className="table-container">
      <h1>Student Homework Table</h1>

      <table border="1px"> 
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Homework</th>
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
              
            </tr>
          ))}
        </tbody>
       
      </table>
      
    </div>
    
  );
};

export default StudentHomework;
