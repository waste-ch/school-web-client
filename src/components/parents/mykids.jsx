// src/mykids.js
import React from 'react';

function mykids() {
  const kidsData = [
    { name: 'Child1', age: 8, hobbies: ['Playing', 'Drawing'],gender:['male'],fname:['fathername'],mname:['mothername']},
    { name: 'Child2', age: 5, hobbies: ['Reading', 'Cycling'],gender:['female'],fname:['fathername'],mname:['mothername']},
    { name: 'Child3', age: 5, hobbies: ['Reading', 'Cycling'],gender:['female'],fname:['fathername'],mname:['mothername']},
    // Add more kids' information as needed
  ];

  return (
    <div>
      <h1>My Kids</h1>
      {kidsData.map((kid, index) => (
        <div key={index}>
        <p2>Class:{kid.class}</p2>
          <h2>{kid.name}</h2>
          <p>Age: {kid.age}</p>
          <p>Hobbies: {kid.hobbies.join(', ')}</p>
          <p>Gender:{kid.gender}</p>
          <p>Father Name:{kid.fname}</p>
          <p>mother Name:{kid.mname}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default mykids;
