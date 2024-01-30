import React from 'react';
import { Card, Row, Col, Table, Avatar, Typography } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  DollarOutlined,
  SolutionOutlined
} from '@ant-design/icons';
import TeacherCharts from './teachers_charts';
const { Title } = Typography;


const columns = [
  {
    title: 'Roll No',
    dataIndex: 'rollNo',
    key: 'rollNo',
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
    render: (photo) => <Avatar src={photo} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'Section',
    dataIndex: 'section',
    key: 'section',
  },
  {
    title: 'Parents',
    dataIndex: 'parents',
    key: 'parents',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const data = [
  {
    rollNo: '101',
    photo: 'https://example.com/photo1.jpg',
    name: 'John Doe',
    gender: 'Male',
    class: '10A',
    section: 'A',
    parents: 'Mr. and Mrs. Doe',
    address: '123 Main Street, City',
    dob: '2005-05-10',
    phone: '+1234567890',
    email: 'john.doe@example.com',
  },
  {
    rollNo: '102',
    photo: 'https://example.com/photo2.jpg',
    name: 'Jane Smith',
    gender: 'Female',
    class: '11B',
    section: 'B',
    parents: 'Mr. and Mrs. Smith',
    address: '456 Oak Avenue, Town',
    dob: '2004-08-15',
    phone: '+9876543210',
    email: 'jane.smith@example.com',
  },
  {
    rollNo: '103',
    photo: 'https://example.com/photo2.jpg',
    name: 'Jane Smith',
    gender: 'Female',
    class: '11B',
    section: 'B',
    parents: 'Mr. and Mrs. Smith',
    address: '456 Oak Avenue, Town',
    dob: '2004-08-15',
    phone: '+9876543210',
    email: 'jane.smith@example.com',
  }, {
    rollNo: '104',
    photo: 'https://example.com/photo2.jpg',
    name: 'Jane Smith',
    gender: 'Female',
    class: '11B',
    section: 'B',
    parents: 'Mr. and Mrs. Smith',
    address: '456 Oak Avenue, Town',
    dob: '2004-08-15',
    phone: '+9876543210',
    email: 'jane.smith@example.com',
  }, {
    rollNo: '105',
    photo: 'https://example.com/photo2.jpg',
    name: 'Jane Smith',
    gender: 'Female',
    class: '11B',
    section: 'B',
    parents: 'Mr. and Mrs. Smith',
    address: '456 Oak Avenue, Town',
    dob: '2004-08-15',
    phone: '+9876543210',
    email: 'jane.smith@example.com',
  },
];

const cardData = [
  { key: 'totalStudents', title: 'Total Students', value: 2050, icon: <UserOutlined /> },
  { key: 'totalExams', title: 'Total Exams', value: 1000, icon: <CalendarOutlined /> },
  { key: 'graduateStudents', title: 'Graduate Students', value: 550, icon: <SolutionOutlined /> },
  { key: 'totalIncome', title: 'Total Income', value: "$2000000", icon: <DollarOutlined /> },
];

const cardRender = cardData.map((item, index) => (
  <Card style={{ margin: '1%' }} key={index}>
    <Card.Meta
      avatar={<Avatar icon={item.icon} style={{ fontSize: '24px', marginRight: '10px' }} />}
      title={item.title}
      description={item.value}
    />
  </Card>
));

const Teachers = () => {
  return (
    <>
      <Title level={2}>Teachers</Title>

      <Row gutter={16}>
        <Col span={10}>
          <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around', }}>
            {cardRender}
          </div>
        </Col>
        <Col span={14}>
          <TeacherCharts />
        </Col>


        <Col span={24}>
          <Card title="My Students">
            {/* Use Ant Design Table for examination details */}
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Teachers;
