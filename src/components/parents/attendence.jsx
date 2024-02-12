import React, { useState } from 'react';
import { Calendar, Card, Statistic, Row, Col } from 'antd';

function Attendence() {
  const [ setSelectedDate] = useState(null);
  const [attendanceData,] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Your logic for handling date change and updating attendance data goes here
  };

  // Example: Replace with your actual attendance data
  const getDayStatus = (date) => {
    // Replace this logic with your actual data fetching or calculation
    // For demonstration purposes, we'll assume random data
    return Math.random() < 0.7 ? 'present' : 'absent';
  };

  const dateCellRender = (value) => {
    const dayStatus = attendanceData[value.format('YYYY-MM-DD')] || getDayStatus(value);

    return (
      <div style={{ textAlign: 'center' }}>
        {dayStatus === 'present' && <span style={{ color: 'green' }}>●</span>}
        {dayStatus === 'absent' && <span style={{ color: 'red' }}>●</span>}
      </div>
    );
  };

  return (
    <div>
      <Card title="Student Attendance View">
        <Row gutter={16}>
          <Col span={12}>
            <Calendar
              onChange={handleDateChange}
              dateCellRender={dateCellRender}
            />
          </Col>
          <Col span={12}>
            <div style={{ textAlign: 'center' }}>
              <Statistic title="Present Days" value={15} />
              <Statistic title="Absent Days" value={5} />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Attendence;
