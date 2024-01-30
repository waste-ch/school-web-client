
import { useState } from 'react'
import { Table } from 'antd';
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

const App = () => {
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
    <Table
      columns={columns}
      rowKey={'email'}
      dataSource={data}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
    />
  );
};
export default App;