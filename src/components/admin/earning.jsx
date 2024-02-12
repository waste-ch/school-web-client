import React, { useState } from 'react';
import { Form, Button, Table, DatePicker, Input, Space } from 'antd';

const EarningForm = () => {
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
    { title: 'ID', dataIndex: 'id', key: 'id', editable: true },
    { title: 'Student Name', dataIndex: 'studentName', key: 'studentName', editable: true },
    { title: 'Date of Earning', dataIndex: 'earningDate', key: 'earningDate', editable: true },
    { title: 'Type of Earning', dataIndex: 'earningType', key: 'earningType', editable: true },
    { title: 'Amount Earned', dataIndex: 'amountEarned', key: 'amountEarned' },
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

  const totalSum = earnings.reduce((acc, curr) => acc + parseFloat(curr.amountEarned || 0), 0);

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
        {/* ID */}
        <Form.Item label="ID" name="id" initialValue={earnings.length}>
          <Input/>
        </Form.Item>

        {/* Student Name */}
        <Form.Item label="Student Name" name="studentName" rules={[{ required: true, message: 'Please enter student name!' }]}>
          <Input />
        </Form.Item>

        {/* Date of Earning */}
        <Form.Item label="Date of Earning" name="earningDate" rules={[{ required: true, message: 'Please select date of earning!' }]}>
          <DatePicker />
        </Form.Item>

        {/* Type of Earning */}
        <Form.Item label="Type of Earning" name="earningType" rules={[{ required: true, message: 'Please select type of earning!' }]}>
          <Input />
        </Form.Item>

        {/* Amount Earned */}
        <Form.Item label="Amount Earned" name="amountEarned" rules={[{ required: true, message: 'Please enter the amount earned!' }]}>
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

export default EarningForm;
