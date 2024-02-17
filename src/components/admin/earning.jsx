import React, { useState } from 'react';
import { Button, Table, Drawer } from 'antd';
import EarningForm from './earning_form'; // Importing the EarningForm component

const EarningFormWrapper = () => {
  const [earnings, setEarnings] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false); // State to control the visibility of the drawer

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const onFinish = (values) => {
    setEarnings([...earnings, { key: Date.now(), ...values }]);
    onClose(); // Close the drawer after submitting the form
  };

  const handleDelete = (record) => {
    const updatedEarnings = earnings.filter((earning) => earning.key !== record.key);
    setEarnings(updatedEarnings);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', editable: true },
    { title: 'Student Name', dataIndex: 'studentName', key: 'studentName', editable: true },
    { title: 'Date of Earning', dataIndex: 'earningDate', key: 'earningDate', editable: true },
    { title: 'Type of Earning', dataIndex: 'earningType', key: 'earningType', editable: true },
    { title: 'Amount Earned', dataIndex: 'amountEarned', key: 'amountEarned' },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record)}>
          Delete
        </Button>
      ),
    },
  ];

  const totalSum = earnings.reduce((acc, curr) => acc + parseFloat(curr.amountEarned || 0), 0);

  return (
    <div>
      <Button type="primary" onClick={showDrawer} style={{ marginBottom: 16, float: "right" }}>
        Add Earnings
      </Button>
      <Drawer
        title="Add Earnings"
        width={500}
        onClose={onClose}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <EarningForm onFinish={onFinish} />
      </Drawer>
      <Table
        dataSource={earnings}
        columns={columns}
        pagination={false}
        style={{ marginTop: '20px' }}
        rowKey={(record) => record.key}
      />
      <div style={{ marginTop: '20px' }}>
        <strong>Total Sum:</strong> ₹{totalSum.toFixed(2)}
      </div>
    </div>
  );
};

export default EarningFormWrapper;
