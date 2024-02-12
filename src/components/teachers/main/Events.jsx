// App.js
import React, { useState } from 'react';
import CalendarEvents from './calendar_events';

const Event = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Teacher's Calendar</h1>
      <CalendarEvents selectedDate={selectedDate} onDateChange={handleDateChange} />
    </div>
  );
};

export default Event;
