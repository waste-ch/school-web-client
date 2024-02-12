import React from 'react';
import { Table, Tag, Space, Card } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'Total Fee',
    dataIndex: 'totalFee',
    key: 'totalFee',
  },
  {
    title: 'Due Amount',
    dataIndex: 'dueAmount',
    key: 'dueAmount',
  },
  {
    title: 'Payment Status',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    render: (status) => (
      <Tag color={status === 'Paid' ? 'green' : 'volcano'}>
        {status}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
       <a href="/details">View Details</a>

      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    month: 'January',
    totalFee: '₹500',
    dueAmount: '₹100',
    paymentStatus: 'Paid',
  },
  {
    key: '2',
    month: 'February',
    totalFee: '₹500',
    dueAmount: '₹0',
    paymentStatus: 'Pending',
  },
  // Add more data as needed
];

const feepage = () => {
  return (
    <Card title="Fee Payment Status" style={{ width: '100%' }}>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default feepage;
