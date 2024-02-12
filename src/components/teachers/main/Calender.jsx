import React, { useState } from 'react';
import CalendarDay from './CalenderDay';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (day, text, photo) => {
    const newEvent = { day, text, photo };
    setEvents([...events, newEvent]);
  }

  const markEvent = (day) => {
    // Logic to mark events (e.g., change event status to marked)
  }

  const changeEvent = (day, newText, newPhoto) => {
    // Logic to update existing event
    const updatedEvents = events.map(event => (
      event.day === day ? { ...event, text: newText, photo: newPhoto } : event
    ));
    setEvents(updatedEvents);
  }

  return (
    <div>
      <h2>Month View</h2>
      {Array.from({ length: 30 }, (_, index) => (
        <CalendarDay
          key={index}
          day={index + 1}
          events={events.filter(event => event.day === index + 1)}
          addEvent={addEvent}
          markEvent={markEvent}
          changeEvent={changeEvent}
        />
      ))}
    </div>
  );
}

export default Calendar;
