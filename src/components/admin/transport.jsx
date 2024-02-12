import React, { useState } from 'react';
import { Table, Button } from 'antd';
import TransportForm from './transport_form';

const sampleData = [
  {
    name: 'John Doe',
    className: 'Class A',
    studentrollno: '101',
    Drivername: 'Mr. Smith',
    Busnumber: 'BUS-101',
    requiresTransport: true,
    pickupLocation: 'Main Street',
    dropoffLocation: 'Park Avenue',
  },
  {
    name: 'Jane Smith',
    className: 'Class B',
    studentrollno: '102',
    Drivername: 'Ms. Johnson',
    Busnumber: 'BUS-102',
    requiresTransport: false,
    pickupLocation: '',
    dropoffLocation: '',
  },
  // Add more transport details as needed
];
const TransportDetails = () => {
  const [visible, setVisible] = useState(false);
  const [transportData, setTransportData] = useState(sampleData);


  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Class Name',
      dataIndex: 'className',
      key: 'className',
    },
    {
      title: 'Roll Number',
      dataIndex: 'studentrollno',
      key: 'studentrollno',
    },
    {
      title: 'Driver Name',
      dataIndex: 'Drivername',
      key: 'Drivername',
    },
    {
      title: 'Bus Number',
      dataIndex: 'Busnumber',
      key: 'Busnumber',
    },
    {
      title: 'Requires Transport',
      dataIndex: 'requiresTransport',
      key: 'requiresTransport',
      render: (text) => text ? 'Yes' : 'No',
    },
    {
      title: 'Pickup Location',
      dataIndex: 'pickupLocation',
      key: 'pickupLocation',
    },
    {
      title: 'Drop-off Location',
      dataIndex: 'dropoffLocation',
      key: 'dropoffLocation',
    },
  ];

  const handleAddTransport = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  const handleSubmitForm = (values) => {
    setTransportData([...transportData, values]);
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={handleAddTransport} style={{ marginBottom: 16 }}>
        Add Transport
      </Button>
      <Table dataSource={transportData} columns={columns} rowKey={(record, index) => index} />
      <TransportForm visible={visible} onClose={handleCloseDrawer} onSubmit={handleSubmitForm} />
    </div>
  );
};

export default TransportDetails;
