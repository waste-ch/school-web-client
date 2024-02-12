import React, { useState } from 'react';

const CalendarDay = ({ day, events, addEvent, markEvent, changeEvent }) => {
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddEvent = () => {
    addEvent(day, text, photo);
    setText('');
    setPhoto('');
  }

  return (
    <div>
      <h3>Day {day}</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.text} - {event.photo}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Event text" />
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Event photo" />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default CalendarDay;
