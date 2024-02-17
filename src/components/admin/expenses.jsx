import React, { useState } from 'react';
import { Form, Button, Table, Space, Drawer } from 'antd';
import ExpenseForm from './expenses_form'; // Assuming ExpenseForm component is created

const ExpenseChart = () => {
  const [form] = Form.useForm();
  const [earnings, setEarnings] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);

  const onFinish = (values) => {
    setEarnings([...earnings, { key: Date.now(), ...values }]);
    form.resetFields();
  };

  const handleDelete = (record) => {
    const updatedEarnings = earnings.filter((earning) => earning.key !== record.key);
    setEarnings(updatedEarnings);
  };

  const columns = [
    { title: 'BILL NO', dataIndex: 'billNo', key: 'billNo', editable: true },
    { title: 'Expensive Type', dataIndex: 'expenseType', key: 'expenseType', editable: true },
    { title: 'Date of Expense', dataIndex: 'expenseDate', key: 'expenseDate', editable: true },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button type="button" onClick={() => handleDelete(record)}>
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const totalSum = earnings.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16, float: "right" }} onClick={() => setShowDrawer(true)}>Add Expense</Button>
      <Drawer
        title="Add Expense"
        placement="right"
        closable={true}
        onClose={() => setShowDrawer(false)}
        visible={showDrawer}
        width={500}
      >
        <ExpenseForm form={form} onFinish={onFinish} />
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

export default ExpenseChart;
