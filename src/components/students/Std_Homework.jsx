import React, { useState } from 'react';
import { Table, DatePicker } from 'antd';


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
    // Remove the entire "Action" column
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <DatePicker />
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default StudentHomework;
