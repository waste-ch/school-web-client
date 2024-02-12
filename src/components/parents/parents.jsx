import React from 'react';
import { Card, Row, Col, Table, Avatar, Typography, Tag } from 'antd';
import {
  ScheduleOutlined,
  CalendarOutlined,
  MoneyCollectOutlined
} from '@ant-design/icons';
import KidDetails from '../students/details'
const { Title } = Typography;


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Expense',
    dataIndex: 'expense',
    key: 'expense',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={status === 'Paid' ? 'green' : 'red'}>{status}</Tag>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];
const data = [
  {
    id: 1,
    expense: 'Exam Fees',
    amount: "$100",
    status: 'Paid',
    email: 'john.doe@example.com',
    date: '2022-01-15',
  },
  {
    id: 2,
    expense: 'Books',
    amount: "$50",
    status: 'Due',
    email: 'jane.smith@example.com',
    date: '2022-02-20',
  },
  {
    id: 3,
    expense: 'Semester Fees',
    amount: "$300",
    status: 'Paid',
    email: 'john.doe@example.com',
    date: '2022-03-15',
  },
  {
    id: 4,
    expense: 'Exam Fees',
    amount: "$100",
    status: 'Paid',
    email: 'john.doe@example.com',
    date: '2022-04-15',
  },
  {
    id: 5,
    expense: 'Semester Fees',
    amount: "$300",
    status: 'Paid',
    email: 'john.doe@example.com',
    date: '2022-05-15',
  },
];


const examinationColumns = [
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
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'Roll No',
    dataIndex: 'rollNo',
    key: 'rollNo',
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

const examinationData = [
  {
    id: 1,
    examName: 'Midterm',
    subject: 'Math',
    class: '10A',
    rollNo: '1001',
    grade: 'A',
    percentage: '85%',
    date: '2022-01-15',
  },
  {
    id: 2,
    examName: 'Final',
    subject: 'Science',
    class: '11B',
    rollNo: '1102',
    grade: 'B+',
    percentage: '78%',
    date: '2022-02-20',
  },
  {
    id: 3,
    examName: 'Final',
    subject: 'Science',
    class: '11B',
    rollNo: '1102',
    grade: 'B+',
    percentage: '78%',
    date: '2022-02-20',
  },
  {
    id: 4,
    examName: 'Final',
    subject: 'Science',
    class: '11B',
    rollNo: '1102',
    grade: 'B+',
    percentage: '78%',
    date: '2022-02-20',
  },
  {
    id: 5,
    examName: 'Final',
    subject: 'Science',
    class: '11B',
    rollNo: '1102',
    grade: 'B+',
    percentage: '78%',
    date: '2022-02-20',
  },
];

const cardData = [
  { key: 'dueFees', title: 'Due Fees', value: '$200', icon: <MoneyCollectOutlined /> },
  { key: 'notifications', title: 'Notifications', value: 200, icon: <ScheduleOutlined /> },
  { key: 'result', title: 'Result', value: 20, icon: <CalendarOutlined /> },
  { key: 'expenses', title: 'Expenses', value: "$193000", icon: <MoneyCollectOutlined /> },
];

const cardRender = cardData.map((item, index) => (
  <Card style={{ margin: '0% 1%', width: "25%" }} key={index}>
    <Card.Meta
      avatar={<Avatar icon={item.icon} style={{ fontSize: '24px', marginRight: '10px' }} />}
      title={item.title}
      description={item.value}
    />
  </Card>
));

const Studentalldetails = () => {
  return (
    <>
      <Title level={2}>Parents</Title>
      <Row gutter={16}>
        <Col span={24}>
          <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around', marginBottom: '20px', maxHeight: "6rem" }}>
            {cardRender}
          </div>

        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="My Kids">
            <KidDetails showExtra={false} />
            <KidDetails showExtra={false} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="All Expenses">
            {/* Use Ant Design Table for examination details */}
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <h1>All Exam Results</h1>
          <Table columns={examinationColumns} dataSource={examinationData} />
        </Col>
      </Row>
    </>
  );
};

export default Studentalldetails;
