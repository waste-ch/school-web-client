import React, { useState } from 'react';
import { Table, Checkbox, Button, message, DatePicker, Select } from 'antd';

const { Option } = Select;

const Attend = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', attendance: false },
    { id: 2, name: 'Jane Doe', attendance: false },
    { id: 3, name: 'Alice Smith', attendance: false },
    // Add more student details as needed
  ]);

  const [, setSelectedClass] = useState(null);
  const [, setSelectedAll] = useState(false);

  const handleAttendanceChange = (record, isChecked) => {
    // Update the data array based on the attendance selection
    const updatedData = data.map((item) =>
      item.id === record.id ? { ...item, attendance: isChecked } : item
    );
    setData(updatedData);

    // Check if all attendances are selected
    const allSelected = updatedData.every((item) => item.attendance);
    setSelectedAll(allSelected);
  };

  const handleSaveAttendance = () => {
    // Implement the logic to save attendance (e.g., send to server)
    // Display success message using Ant Design's message component
    message.success('Successfully saved attendance');
  };

  const handleClassChange = (value) => {
    // Handle class change and update the selectedClass state
    setSelectedClass(value);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
      render: (text, record) => (
        <Checkbox checked={text} onChange={(e) => handleAttendanceChange(record, e.target.checked)} />
      ),
    },
  ];

  const rowSelection = {
    onSelect: (record, selected) => {
      // Handle individual row selection
      handleAttendanceChange(record, selected);

      // Update the overall selectedAll state
      const allSelected = data.every((item) => item.attendance);
      setSelectedAll(allSelected);
    },
    onSelectAll: (selected, selectedRows) => {
      // Update all records' attendance based on the select-all checkbox
      const updatedData = data.map((item) => ({ ...item, attendance: selected }));
      setData(updatedData);

      // Update the overall selectedAll state
      setSelectedAll(selected);
    },
    getCheckboxProps: (record) => ({
      // Disable the checkbox if needed
      disabled: record.disabled,
    }),
  };

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
        </div>
        <Button type="primary" onClick={handleSaveAttendance}>
          Save Attendance
        </Button>
      </div>
      <DatePicker style={{ marginBottom: 16 }} />
      <Table dataSource={data} columns={columns} rowKey="id" rowSelection={rowSelection} />
    </div>
  );
};

export default Attend;
