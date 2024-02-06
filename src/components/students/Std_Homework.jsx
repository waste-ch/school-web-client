import React, { useState } from 'react';
import { Table, Space, Button } from 'antd';
//~import 'antd/dist/antd.css';

const StudentHomework = () => {
  const [data] = useState([
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
    // Add more subjects and homework entries as needed
  ]);

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
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleClick(record)}>Edit</Button>
          <Button onClick={() => handleClick(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  // Define the handleClick function
  const handleClick = (record) => {
    // Your logic for handling click events goes here
    console.log('Button clicked!', record);
  };

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default StudentHomework;
