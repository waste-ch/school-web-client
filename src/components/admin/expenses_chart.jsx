import React, { useState } from 'react';
import { Form, Button, Table, DatePicker, Input, Space } from 'antd';

const ExpenceChart = () => {
  const [form] = Form.useForm();
  const [earnings, setEarnings] = useState([]); // State to store the list of earnings

  const onFinish = (values) => {
    // Add the new earning to the list
    setEarnings([...earnings, { key: Date.now(), ...values }]);
    // Reset the form fields
    form.resetFields();
  };

  const handleDelete = (record) => {
    // Remove the selected earning from the list
    const updatedEarnings = earnings.filter((earning) => earning.key !== record.key);
    setEarnings(updatedEarnings);
  };

  const columns = [
    { title: 'BILL NO', dataIndex: 'bill no', key: 'bill no', editable: true },
    { title: 'Expenceive type', dataIndex: 'expenceive type', key: 'expenceive type', editable: true },
    { title: 'Date of expenceive', dataIndex: 'date of expenceive', key: 'date of expenceive', editable: true },
    { title: 'Type of Earning', dataIndex: 'earningType', key: 'earningType', editable: true },
    { title: 'Amount ', dataIndex: 'amount', key: 'amount' },
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
      {/* Calendar */}

      {/* Earning Form */}
      <Form
        form={form}
        name="earningForm"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        {/* BILL NO */}
        <Form.Item label="BILL NO" name="bill no" initialValue={earnings.length}>
          <Input/>
        </Form.Item>

        {/* Expenceive type */}
        <Form.Item label="Expenceive type" name="expenceive type" rules={[{ required: true, message: 'Please enter student name!' }]}>
          <Input />
        </Form.Item>

        {/* Date of expenceive */}
        <Form.Item label="Date of expenceive" name="date of expenceive" rules={[{ required: true, message: 'Please select date of earning!' }]}>
          <DatePicker />
        </Form.Item>

       

        {/* Amount  */}
        <Form.Item label="Amount " name="amount" rules={[{ required: true, message: 'Please enter the amount earned!' }]}>
          <Input type="number" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Earning
          </Button>
        </Form.Item>
      </Form>

      {/* Earning Table */}
      <Table
        dataSource={earnings}
        columns={columns}
        pagination={false}
        style={{ marginTop: '20px' }}
        rowKey={(record) => record.key}
      />

      {/* Total Sum */}
      <div style={{ marginTop: '20px' }}>
        <strong>Total Sum:</strong> ₹{totalSum.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenceChart;
