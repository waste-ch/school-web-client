// App.js
import React, { useState } from 'react';
import Calendar from './calevent';

const Event = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Teacher's Calendar</h1>
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
    </div>
  );
};

export default Event;
