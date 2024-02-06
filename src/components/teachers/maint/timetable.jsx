import React, { useState } from 'react';
import { Table, Button, Select, Modal, Form, DatePicker, TimePicker, Input, message } from 'antd';
import moment from 'moment';

const { Option } = Select;

const Timetable = () => {
  const [ setSelectedClass] = useState(null);
  const [ setSelectedSection] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const data = [
    {
      key: '1',
      subject: 'Math',
      date: '2024-02-10',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      
    },
    {
      key: '2',
      subject: 'Science',
      date: '2024-02-12',
      startTime: '02:00 PM',
      endTime: '03:30 PM',
      
    },
    // Add more data as needed
  ];

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
     
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      ),
    },
  ];

  const handleEdit = (record) => {
    form.setFieldsValue({
      subject: record.subject,
      date: record.date,
      startTime: moment(record.startTime, 'hh:mm A'),
      endTime: moment(record.endTime, 'hh:mm A'),
    });
    showModal();
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
  };

  const handleSectionChange = (value) => {
    setSelectedSection(value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Implement your logic when OK button is clicked
        console.log('Received values:', values);
        const newData = [...data];
        newData.push({
          key: newData.length + 1,
          ...values,
        });
        setIsModalVisible(false);
        message.success('Exam added successfully!');
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <div>
      <Select
        style={{ width: 120, marginRight: 16 }}
        placeholder="Select Class"
        onChange={handleClassChange}
      >
        <Option value="class1">Class 1</Option>
        <Option value="class2">Class 2</Option>
        {/* Add more classes as needed */}
      </Select>

      <Select
        style={{ width: 120, marginRight: 16 }}
        placeholder="Select Section"
        onChange={handleSectionChange}
      >
        <Option value="sectionA">Section A</Option>
        <Option value="sectionB">Section B</Option>
        {/* Add more sections as needed */}
      </Select>
      <Select
        style={{ width: 120, marginRight: 16 }}
        placeholder="Select exam type"
        onChange={handleClassChange}
      >
        <Option value="fa1">FA1</Option>
        <Option value="fa2">FA2</Option>
        {/* Add more classes as needed */}
      </Select>
      <Button type="primary" onClick={showModal}>
        Add Exam
      </Button>

      <Modal
        title="Add/Edit Exam"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="examForm">
          <Form.Item label="Subject" name="subject" rules={[{ required: true, message: 'Please enter the subject!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select the date!' }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime" rules={[{ required: true, message: 'Please select the start time!' }]}>
            <TimePicker style={{ width: '100%' }} format="hh:mm A" />
          </Form.Item>
          <Form.Item label="End Time" name="endTime" rules={[{ required: true, message: 'Please select the end time!' }]}>
            <TimePicker style={{ width: '100%' }} format="hh:mm A" />
          </Form.Item>
        </Form>
      </Modal>

      <Table dataSource={data} columns={columns} style={{ marginTop: 16 }} />
    </div>
  );
};

export default Timetable;
