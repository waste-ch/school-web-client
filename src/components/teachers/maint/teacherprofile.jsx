import React from 'react';
import { Card, Avatar, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const TeacherProfilesample = () => {
  const teacher = {
    name: 'Sunita Sharma',
    subject: 'Mathematics',
    address: '456 Nehru Street, Delhi, India',
    phoneNumber: '987-654-3210',
    bio: 'Mathematics teacher at ABC School',
    avatar: <Avatar icon={<UserOutlined />} size={64} />, // Replace with teacher's photo if available
  };

  return (
    <Card style={{ width: 500, marginTop: 16, backgroundColor: '#f0f2f5' }}>
      <Descriptions title="Teacher Profile" bordered column={1}>
        <Descriptions.Item label="Photo">{teacher.avatar}</Descriptions.Item>
        <Descriptions.Item label="Name">{teacher.name}</Descriptions.Item>
        <Descriptions.Item label="Subject">{teacher.subject}</Descriptions.Item>
        <Descriptions.Item label="Address">{teacher.address}</Descriptions.Item>
        <Descriptions.Item label="Phone Number">{teacher.phoneNumber}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default TeacherProfilesample;

