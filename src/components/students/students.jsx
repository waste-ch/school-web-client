import React from 'react';
import { Card, Row, Col, Table, Avatar, Calendar, Typography } from 'antd';
import {
  ScheduleOutlined,
  CalendarOutlined,
  PercentageOutlined
} from '@ant-design/icons';
import StudentDetails1 from './details';
import StudentCharts from './student_charts';
const { Title } = Typography;


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Exam Name',
    dataIndex: 'examName',
    key: 'examName',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const data = [
  {
    key: '1',
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    grade: 'A',
    percentage: '85%',
    date: '2022-05-15',
  },
  {
    key: '1',
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    grade: 'A',
    percentage: '85%',
    date: '2022-05-15',
  },
  {
    key: '1',
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    grade: 'A',
    percentage: '85%',
    date: '2022-05-15',
  },
  {
    key: '1',
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    grade: 'A',
    percentage: '85%',
    date: '2022-05-15',
  },
  {
    key: '1',
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    grade: 'A',
    percentage: '85%',
    date: '2022-05-15',
  },
  {
    key: '1',
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    grade: 'A',
    percentage: '85%',
    date: '2022-05-15',
  },
  // Add more data as needed
];

const cardData = [
  { key: 'notifications', title: 'Notifications', value: 200, icon: <ScheduleOutlined /> },
  { key: 'events', title: 'Events', value: 20, icon: <CalendarOutlined /> },
  { key: 'attendance', title: 'Attendance', value: 100, icon: <PercentageOutlined /> },
];

const cardRender = cardData.map((item, index) => (
  <Card style={{ margin: '0% 1%' }} key={index}>
    <Card.Meta
      avatar={<Avatar icon={item.icon} style={{ fontSize: '24px', marginRight: '10px' }} />}
      title={item.title}
      description={item.value}
    />
  </Card>
));

const StudentDetails = () => {
  return (
    <>
      <Title level={2}>Students</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Student Details">
            <StudentDetails1 />
          </Card>
        </Col>
        <Col span={12}>
          <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', marginBottom: '20px', maxHeight: "6rem" }}>
            {cardRender}
          </div>
          <Card title="Examination Details">
            {/* Use Ant Design Table for examination details */}
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Student Details">
            <StudentCharts />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Event Calender" >
            <Calendar />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StudentDetails;
