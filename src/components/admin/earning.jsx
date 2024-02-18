import React, { useState, useEffect } from 'react';
import { Button, Table, Drawer, Space, message, Form } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import EarningForm from './earning_form'; // Importing the EarningForm component
import api from '../../axios-config';


const EarningFormWrapper = () => {
  const [form] = Form.useForm();

  const [earnings, setEarnings] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false); // State to control the visibility of the drawer
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEarnings()
  }, [])

  const fetchEarnings = () => {
    setLoading(true)
    return api.get('/earnings/fetch')
      .then((response) => {
        setLoading(false)
        if (response && response.data) {
          const data = response.data
          setEarnings(data || [])
        }
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }


  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const onFinish = (values) => {
    setLoading(true)
    api.post('/earnings/add', values)
      .then((response) => {
        setLoading(false)
        message.success('Earnings added successfully.');
        form.resetFields();
        setDrawerVisible(false);
        fetchEarnings()
      })
      .catch((error) => {
        setLoading(false)
        const errMessage = error && error.response && error.response.data && error.response.data.message
        message.error(errMessage || 'Technical error, please try again later.!!');
      });
  };

  const handleDelete = (record) => {
    api.post('/earnings/delete', record)
      .then((response) => {
        setLoading(false)
        message.success('Earnings deleted successfully.');
        form.resetFields();
        setDrawerVisible(false);
        fetchEarnings()
      })
      .catch((error) => {
        setLoading(false)
        const errMessage = error && error.response && error.response.data && error.response.data.message
        message.error(errMessage || 'Technical error, please try again later.!!');
      });
  };

  const columns = [
    { title: 'ID', dataIndex: 'earningsId', key: 'earningsId', editable: true },
    { title: 'Student Name', dataIndex: 'studentName', key: 'studentName', editable: true },
    { title: 'Date of Earning', dataIndex: 'earningDate', key: 'earningDate', editable: true },
    { title: 'Type of Earning', dataIndex: 'earningType', key: 'earningType', editable: true },
    { title: 'Amount Earned', dataIndex: 'amountEarned', key: 'amountEarned' },
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
        <EarningForm form={form} onFinish={onFinish} />
      </Drawer>
      <Table
        loading={loading}
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
