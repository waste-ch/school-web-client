import React, { useState, useEffect } from 'react';
import { Form, Button, Table, Space, Drawer, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ExpenseForm from './expenses_form'; // Assuming ExpenseForm component is created
import api from '../../axios-config';


const ExpenseChart = () => {
  const [form] = Form.useForm();
  const [showDrawer, setShowDrawer] = useState(false);
  const [expensesData, setExpensesData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchExpenses()
  }, [])

  const fetchExpenses = () => {
    setLoading(true)
    return api.get('/expenses/fetch')
      .then((response) => {
        setLoading(false)
        if (response && response.data) {
          const data = response.data
          setExpensesData(data || [])
        }
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }

  const onFinish = async (values) => {
    setLoading(true)
    api.post('/expenses/add', values)
      .then((response) => {
        setLoading(false)
        message.success('Expenses added successfully.');
        form.resetFields();
        setShowDrawer(false);
        fetchExpenses()
      })
      .catch((error) => {
        setLoading(false)
        const errMessage = error && error.response && error.response.data && error.response.data.message
        message.error(errMessage || 'Technical error, please try again later.!!');
      });
  };

  const handleDelete = (record) => {
    api.post('/expenses/delete', record)
      .then((response) => {
        setLoading(false)
        message.success('Expenses deleted successfully.');
        //form.resetFields();
        setShowDrawer(false);
        fetchExpenses()
      })
      .catch((error) => {
        setLoading(false)
        const errMessage = error && error.response && error.response.data && error.response.data.message
        message.error(errMessage || 'Technical error, please try again later.!!');
      });

  };

  const columns = [
    { title: 'BILL NO', dataIndex: 'expensesId', key: 'expensesId', editable: true },
    { title: 'Expensive Type', dataIndex: 'expenseType', key: 'expenseType', editable: true },
    { title: 'Date of Expense', dataIndex: 'expenseDate', key: 'expenseDate', editable: true },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" danger onClick={() => handleDelete(record)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const totalSum = expensesData.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);

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
        loading={loading}
        dataSource={expensesData}
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
