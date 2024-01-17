
import { useState } from 'react'
import { Table, Card, Avatar } from 'antd';
import {
  SolutionOutlined,
  MoneyCollectOutlined,
  UsergroupAddOutlined,
  TeamOutlined
} from '@ant-design/icons';
import AdminCharts from './admin_charts'
const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'Gender',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
  },
  {
    title: 'Complaint',
    dataIndex: 'Complaint',
  },
];

const data = [
  {
    Name: 'John Doe',
    Email: 'john.doe@example.com',
    Gender: 'Male',
    Complaint: 'Issue with delivery',
  },
  {
    Name: 'Jane Smith',
    Email: 'jane.smith@example.com',
    Gender: 'Female',
    Complaint: 'Product quality concern',
  },
  {
    Name: 'Michael Johnson',
    Email: 'michael.johnson@example.com',
    Gender: 'Male',
    Complaint: 'Workers not coming',
  },
  {
    Name: 'Emily Brown',
    Email: 'emily.brown@example.com',
    Gender: 'Female',
    Complaint: 'Garbage not college since one month',
  },
  // Add more records as needed...
];


const cardData = [
  { key: 'students', title: 'Students', value: 200, icon: <SolutionOutlined /> },
  { key: 'teachers', title: 'Teachers', value: 20, icon: <TeamOutlined /> },
  { key: 'parents', title: 'Parents', value: 100, icon: <UsergroupAddOutlined /> },
  { key: 'earnings', title: 'Earnings', value: 100, icon: <MoneyCollectOutlined /> },
];

const cardRender = cardData.map((item, index) => (
  <Card style={{ width: '25%', margin: '0% 1%' }} key={index}>
    <Card.Meta
      avatar={<Avatar icon={item.icon} style={{ fontSize: '24px', marginRight: '10px' }} />}
      title={item.title}
      description={item.value}
    />
  </Card>
));

const Admin
  = () => {
    const [tableParams, setTableParams] = useState({
      pagination: {
        current: 1,
        pageSize: 10,
      },
    });

    const handleTableChange = (pagination, filters, sorter) => {
      setTableParams({
        pagination,
        filters,
        ...sorter,
      });

    };
    return (
      <>
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', marginBottom: '20px', maxHeight: "6rem" }}>
          {cardRender}
        </div>
        <AdminCharts />
        <Table
          columns={columns}
          rowKey={'email'}
          dataSource={data}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </>
    );
  };

export default Admin
  ;