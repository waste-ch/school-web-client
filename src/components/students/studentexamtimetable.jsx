import React from 'react';
import { Table,  } from 'antd';


const Timetable = () => {
  const data = [
    {
      key: '1',
      subject: 'Math',
      date: '2024-02-10',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
    },
    {
      key: '2',
      subject: 'Science',
      date: '2024-02-12',
      startTime: '02:00 PM',
      endTime: '03:30 PM',
    },
    // Add more data as needed
  ];

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
    }
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} style={{ marginTop: 16 }} />
    </div>
  );
};

export default Timetable;
