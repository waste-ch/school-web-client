import React, { useState } from 'react';
import { Table, Button, Input, Space, Modal, Form } from 'antd';

const { Search } = Input;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }} key="search-dropdown">
        <Search
          placeholder="Search Name"
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onSearch={confirm}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
    filters: [
      { text: '4', value: '4' },
      { text: '5', value: '5' },
    ],
    onFilter: (value, record) => record.class === value,
  },
  {
    title: 'Marks',
    dataIndex: 'marks',
    key: 'marks',
    filters: [
      { text: '32', value: 32 },
      { text: '42', value: 42 },
    ],
    onFilter: (value, record) => record.marks === value,
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
    filters: [
      { text: 'fail', value: 'fail' },
      { text: 'pass', value: 'pass' },
    ],
    onFilter: (value, record) => record.result.includes(value),
  },
 
  {
    title:'Telugu',
    dataIndex:'telugu',
    key:'telugu',
    filters: [
        { text: '60', value: '60' },
        { text: '50', value: '50' },
      ],
      onFilter: (value, record) => record.result.includes(value),
  },
  {
    title:'Hindi',
    dataIndex:'hindi',
    key:'hindi',
    filters: [
        { text: '60', value: '60' },
        { text: '50', value: '50' },
      ],
      onFilter: (value, record) => record.result.includes(value),
  },
  {
    title:'English',
    dataIndex:'english',
    key:'english',
    filters: [
        { text: '60', value: '60' },
        { text: '50', value: '50' },
      ],
      onFilter: (value, record) => record.result.includes(value),
  },
  {
    title:'Maths',
    dataIndex:'maths',
    key:'maths',
    filters: [
        { text: '60', value: '60' },
        { text: '50', value: '50' },
      ],
      onFilter: (value, record) => record.result.includes(value),
  },
  {
    title:'Science',
    dataIndex:'science',
    key:'science',
    filters: [
        { text: '60', value: '60' },
        { text: '50', value: '50' },
      ],
      onFilter: (value, record) => record.result.includes(value),
  },
  {
    title:'Social',
    dataIndex:'social',
    key:'social',
    filters: [
        { text: '60', value: '60' },
        { text: '50', value: '50' },
      ],
      onFilter: (value, record) => record.result.includes(value),
  },
  {
    title:'Analysis',
    dataIndex:'analysis',
    key:'analysis',
  },
];

const data = [
  {
    key: '1',
    id: '101',
    name: 'John Brown',
    marks: 32,
    class: '5',
    result: ['fail'],
    analysis:''
  },
  {
    key: '2',
    id: '102',
    name: 'Jim Green',
    marks: 42,
    class: '4',
    result: ['pass'],
  },
  {
    key: '3',
    id: '103',
    name: 'Joe Black',
    marks: 32,
    class: '4',
    result: ['pass'],
  },
];

const AdminResults = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const handleClearFilters = () => {
    setFilteredInfo({});
  };

  

  const handleAddRow = () => {
    const newRow = {
      key: (data.length + 1).toString(),
      id: 'NEW_ID',
      name: 'New User',
      marks: 0,
      class: 'NEW_CLASS',
      result: ['NEW_RESULT'],
    };

    setEditingRow(newRow);
    setIsModalVisible(true);
  };

  const handleSaveEdit = () => {
    // Implement your save edit logic here
    console.log('Save edit for row:', editingRow);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={handleAddRow}>Add Row</Button>
        <Button onClick={handleClearFilters}>Clear Filters</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={(pagination, filters) => setFilteredInfo(filters)}
        filteredInfo={filteredInfo}
      />

      {/* Modal for edit functionality */}
      <Modal
        title="Edit Row"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleSaveEdit}
      >
        <Form>
          <Form.Item label="Name">
            <Input value={editingRow ? editingRow.name : ''} />
          </Form.Item>
          {/* Add similar Form.Items for other fields */}
        </Form>
      </Modal>
    </div>
  );
};

export default AdminResults;


/*110
const handleEditRow = (record) => {
    setEditingRow(record);
    setIsModalVisible(true);
  };

  62

   {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={() => handleEditRow(record)}>Edit</Button>
      </Space>
    ),
  },
  */