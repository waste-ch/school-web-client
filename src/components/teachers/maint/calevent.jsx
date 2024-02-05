// Calendar.js
import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import Modal from 'react-modal';
//import './Calendar.css';

const Calendar = ({ selectedDate, onDateChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventText, setEventText] = useState(''); // Add this line to define eventText state

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEventClick = () => {
    openModal();
  };

  const handleAddEvent = () => {
    setEvents([...events, { date: selectedDate, event: eventText }]);
    closeModal();
  };

  return (
    <div>
      <CalendarComponent
        onChange={onDateChange}
        value={selectedDate}
        onClickDay={handleEventClick}
        tileContent={({ date, view }) => {
          const eventForDate = events.find((e) => e.date.toDateString() === date.toDateString());
          return eventForDate && view === 'month' && <p>{eventForDate.event}</p>;
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Event/Attendance Modal"
      >
        <h2>Event/Attendance Management</h2>
        <label>
          Event:
          <input type="text" onChange={(e) => setEventText(e.target.value)} />
        </label>
        <button onClick={handleAddEvent}>Add Event</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Calendar;
