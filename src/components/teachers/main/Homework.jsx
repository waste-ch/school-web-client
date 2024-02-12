import React, { useState } from 'react';
import { Table, Space, Button, Select,  } from 'antd';
//import 'antd/dist/antd.css';

const Homework = () => {
  const [data, setData] = useState([
    {
      key: '1',
      subject: 'Math',
      homework: 'Complete exercises 1-5',
    },
    {
      key: '2',
      subject: 'Science',
      homework: 'Read chapter 3 and answer questions',
    },
    {
      key: '3',
      subject: 'English',
      homework: 'Write a short essay on a given topic',
    },
    {
      key: '4',
      subject: 'History',
      homework: 'Study for the upcoming quiz on World War II',
    },
    {
      key: '5',
      subject: 'Physics',
      homework: 'Perform experiments 6 and 7 from the textbook',
    },
    // Add more subjects and homework entries as needed
  ]);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [editingKey, setEditingKey] = useState('');

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Homework',
      dataIndex: 'homework',
      key: 'homework',
      editable: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {editingKey !== record.key ? (
            <Button onClick={() => handleEdit(record.key)}>Edit</Button>
          ) : (
            <Button type="primary" onClick={() => handleSave(record.key)}>Save</Button>
          )}
          <Button onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleAddRow = () => {
    const newData = [
      ...data,
      { key: (data.length + 1).toString(), subject: 'New Subject', homework: 'New Homework' },
    ];
    setData(newData);
  };

  const handleEdit = (key) => {
    setEditingKey(key);
  };

  const handleSave = (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...{ editing: false } });
      setData(newData);
      setEditingKey('');
    } else {
      console.error('Item not found in data array.');
    }
  };

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    setEditingKey(''); // Cancel editing if the deleted row is being edited
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
  };

  const handleSectionChange = (value) => {
    setSelectedSection(value);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleAddRow}>
          Add New Row
        </Button>
        <Select
          placeholder="Select Class"
          value={selectedClass}
          onChange={handleClassChange}
          style={{ marginLeft: 16, width: 120 }}
        >
          <Select.Option value="Class1">Class 1</Select.Option>
          <Select.Option value="Class2">Class 2</Select.Option>
        </Select>
        <Select
          placeholder="Select Section"
          value={selectedSection}
          onChange={handleSectionChange}
          style={{ marginLeft: 16, width: 120 }}
        >
          <Select.Option value="SectionA">Section A</Select.Option>
          <Select.Option value="SectionB">Section B</Select.Option>
        </Select>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        bordered
        rowKey={(record) => record.key}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Homework;
