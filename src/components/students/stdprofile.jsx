import React from 'react';
import { Card, Avatar, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const StudentProfile = () => {
  const student = {
    name: 'Ravi Kumar',
    fatherName: 'Suresh Kumar',
    class: '10',
    section: 'A',
    address: '123 Gandhi Street, Hyderabad, Telangana, India',
    bloodGroup: 'O+',
    phoneNumber: '123-456-7890',
    bio: 'Computer Science student at XYZ School',
    avatar: <Avatar icon={<UserOutlined />} size={64} />, // Replace with student's photo if available
  };

  return (
    <Card style={{ width: 500, marginTop: 16, backgroundColor: '#f0f2f5' }}>
      <Descriptions title="Student Profile" bordered column={1}>
        <Descriptions.Item label="Photo">{student.avatar}</Descriptions.Item>
        <Descriptions.Item label="Name">{student.name}</Descriptions.Item>
        <Descriptions.Item label="Father's Name">{student.fatherName}</Descriptions.Item>
        <Descriptions.Item label="Class">{student.class}</Descriptions.Item>
        <Descriptions.Item label="Section">{student.section}</Descriptions.Item>
        <Descriptions.Item label="Address">{student.address}</Descriptions.Item>
        <Descriptions.Item label="Blood Group">{student.bloodGroup}</Descriptions.Item>
        <Descriptions.Item label="Phone Number">{student.phoneNumber}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default StudentProfile;
