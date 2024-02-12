import React, { useState } from 'react';
import { Table, Input, TimePicker,  } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const DailyRoutine = () => {
  const [routineData, ] = useState([
    { key: '1', time: moment('08:00', 'HH:mm'), activity: 'Morning Assembly', subjectName: '' },
    { key: '2', time: moment('08:30', 'HH:mm'), activity: 'First Period', subjectName: 'Mathematics' },
    { key: '3', time: moment('09:30', 'HH:mm'), activity: 'Second Period', subjectName: 'English' },
    { key: '4', time: moment('10:30', 'HH:mm'), activity: 'Third Period', subjectName: 'Science' },
    { key: '5', time: moment('11:30', 'HH:mm'), activity: 'Fourth Period', subjectName: 'Social Studies' },
    // Add more routine items as needed
  ]);

  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      render: (time) => (
        <TimePicker
          value={time}
          format="HH:mm"
          disabled
          style={{ color: 'black' }} // Change the color as needed
        />
      ),
    },
    {
      title: 'Activity',
      dataIndex: 'activity',
      render: (activity) => (
        <Input
          value={activity}
          disabled
          style={{ color: 'black' }} // Change the color as needed
        />
      ),
    },
    {
      title: 'Subject Name',
      dataIndex: 'subjectName',
      render: (subjectName) => (
        <TextArea
          value={subjectName}
          autoSize={{ minRows: 1, maxRows: 3 }}
          disabled
          style={{ color: 'black' }} // Change the color as needed
        />
      ),
    },
  ];

  return (
    <Table dataSource={routineData} columns={columns} pagination={false} />
  );
};

export default DailyRoutine;

