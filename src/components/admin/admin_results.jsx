import React, { useState } from 'react';
import { Table, Input, Button, Space, Modal, Form, InputNumber } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const AdminResults = () => {
  const [data, setData] = useState([
    { key: '1', name: 'John Doe', age: 25, address: '123 Main St' },
    { key: '2', name: 'Jane Doe', age: 30, address: '456 Oak St' },
    // Add more data as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingKey, setEditingKey] = useState('');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'John Doe', value: 'John Doe' },
        { text: 'Jane Doe', value: 'Jane Doe' },
      ],
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record.key)} />
          <Button icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(record.key)} />
        </Space>
      ),
    },
  ];

  const handleEdit = (key) => {
    setEditingKey(key);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    const newData = data.filter((record) => record.key !== key);
    setData(newData);
  };

  const handleSave = (key) => {
    setIsModalVisible(false);
    setEditingKey('');

    // Implement logic to save edited data here
  };

  const showDeleteConfirm = (key) => {
    Modal.confirm({
      title: 'Are you sure delete this record?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(key);
      },
    });
  };

  const editForm = (
    <Form>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Age" name="age">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
    </Form>
  );

  return (
    <>
      Results

      <Table
        dataSource={data}
        columns={columns}
        bordered
        rowKey="key"
        pagination={{ pageSize: 10 }}
      />
      <Modal
        title="Edit Record"
        visible={isModalVisible}
        onOk={() => handleSave(editingKey)}
        onCancel={() => setIsModalVisible(false)}
      >
        {editForm}
      </Modal>
    </>
  );
};

export default AdminResults;
