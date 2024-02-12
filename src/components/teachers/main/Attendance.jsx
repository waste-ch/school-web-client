import React, { useState } from 'react';
import { Table, Button, DatePicker, Select, message } from 'antd';

const { Option } = Select;

const studentData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice Smith' },
  // Add more student details as needed
];

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRows, setSelectedRows] = useState(studentData);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
    console.log(selectedClass)

  };

  const handleRowSelectionChange = (_, rowSelected) => {
    setSelectedRows(rowSelected);
    console.log(selectedRows)

  };

  const handleSaveAttendance = () => {
    setSelectedRows([]);

    // Implement the logic to save attendance
    // Display success message using Ant Design's message component
    message.success('Successfully saved attendance');
  };

  const columns = [
    {
      title: 'Admission ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Select
            style={{ width: 120, marginRight: 16 }}
            placeholder="Select Class"
            onChange={handleClassChange}
          >
            <Option value="ClassA">Class A</Option>
            <Option value="ClassB">Class B</Option>
          </Select>
          <DatePicker style={{ marginRight: 16 }} onChange={handleDateChange} />
        </div>
        <Button type="primary" onClick={handleSaveAttendance} >
          Save Attendance
        </Button>
      </div>
      <Table
        dataSource={studentData}
        columns={columns}
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          onChange: handleRowSelectionChange,
        }}
      />
    </div>
  );
};

export default Attendance;
