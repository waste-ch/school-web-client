import React, { useState } from 'react';
import { Table, Input, Button, Space, Modal, Form, InputNumber } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Adminresults = () => {
  const [data, setData] = useState([
    { key: '1', name: 'John Doe', age: 25, address: '123 Main St' },
    { key: '2', name: 'Jane Doe', age: 30, address: '456 Oak St' },
    // Add more data as needed
  ]);

  const [filteredData, setFilteredData] = useState(data);
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
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)} />
        </Space>
      ),
    },
  ];

  const handleFilter = (value) => {
    const filtered = data.filter((record) =>
      record.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

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

  //const isEditing = (record) => record.key === editingKey;

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
    <div>
      <Input.Search
        placeholder="Search by name"
        onSearch={handleFilter}
        style={{ marginBottom: 16 }}
      />
      <Table
        dataSource={filteredData}
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
    </div>
  );
};

export default Adminresults;
