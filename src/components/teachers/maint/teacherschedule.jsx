import React, { useState } from 'react';
import { Table, Input, TimePicker, Button, Modal, message } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const DailyRoutine = () => {
  const [routineData, setRoutineData] = useState([
    { key: '1', time: moment('08:00', 'HH:mm'), activity: 'Morning Assembly', subjectName: '' },
    { key: '2', time: moment('08:30', 'HH:mm'), activity: 'First Period', subjectName: 'Mathematics' },
    { key: '3', time: moment('09:30', 'HH:mm'), activity: 'Second Period', subjectName: 'English' },
    // Add more routine items as needed
  ]);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ key: '', time: moment(), activity: '', subjectName: '' });

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time });
  };

  const handleSave = () => {
    if (formData.key) {
      const updatedRoutineData = routineData.map(item =>
        item.key === formData.key ? { ...formData } : item
      );
      setRoutineData(updatedRoutineData);
      message.success('Successfully updated routine item!');
    } else {
      const newRoutineItem = { ...formData, key: (routineData.length + 1).toString() };
      setRoutineData([...routineData, newRoutineItem]);
      message.success('Successfully added routine item!');
    }
    setVisible(false);
    setFormData({ key: '', time: moment(), activity: '', subjectName: '' });
  };

  const handleEdit = (record) => {
    setFormData({ ...record });
    setVisible(true);
  };

  const handleDelete = (record) => {
    const updatedRoutineData = routineData.filter(item => item.key !== record.key);
    setRoutineData(updatedRoutineData);
    message.success('Successfully deleted routine item!');
  };

  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      render: (time, record) => (
        <TimePicker
          value={time}
          onChange={handleTimeChange}
          format="HH:mm"
          disabled={record.key === formData.key ? false : true}
        />
      ),
    },
    {
      title: 'Activity',
      dataIndex: 'activity',
      render: (activity, record) => (
        <Input
          value={activity}
          onChange={(e) => handleInputChange(e, 'activity')}
          disabled={record.key === formData.key ? false : true}
        />
      ),
    },
    {
      title: 'Subject Name',
      dataIndex: 'subjectName',
      render: (subjectName, record) => (
        <TextArea
          value={subjectName}
          onChange={(e) => handleInputChange(e, 'subjectName')}
          autoSize={{ minRows: 1, maxRows: 3 }}
          disabled={record.key === formData.key ? false : true}
        />
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="danger" onClick={() => handleDelete(record)} style={{ marginLeft: '8px' }}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} style={{ marginBottom: '16px' }}>Add Routine</Button>
      <Table dataSource={routineData} columns={columns} pagination={false} />
      <Modal
        title={formData.key ? 'Edit Routine' : 'Add Routine'}
        visible={visible}
        onOk={handleSave}
        onCancel={() => setVisible(false)}
      >
        <TimePicker
          value={formData.time}
          onChange={handleTimeChange}
          format="HH:mm"
          style={{ marginBottom: '8px', width: '100%' }}
        />
        <Input
          placeholder="Activity"
          value={formData.activity}
          onChange={(e) => handleInputChange(e, 'activity')}
          style={{ marginBottom: '8px' }}
        />
        <TextArea
          placeholder="Subject Name"
          value={formData.subjectName}
          onChange={(e) => handleInputChange(e, 'subjectName')}
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </Modal>
    </>
  );
};

export default DailyRoutine;
