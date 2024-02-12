import React, { useState } from 'react';
import { Table, Button, Select, Modal, Form, DatePicker, TimePicker, message } from 'antd';
import moment from 'moment';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const Timetable = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [deleteRecord, setDeleteRecord] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDelete = (record) => {
    setDeleteRecord(record);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    // Delete logic here
    console.log("Deleting record:", deleteRecord);
    // Close the modal
    setDeleteModalVisible(false);
    message.success('Exam deleted successfully!');

  };

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
        <div>
          <Button type="link" onClick={() => handleEdit(record)}>
            <EditOutlined />
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record)}>
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  const classes = [
    { value: 'lkg', label: 'LKG' },
    { value: 'ukg', label: 'UKG' },
    { value: 'class1', label: 'Class 1' },
    { value: 'class2', label: 'Class 2' },
    { value: 'class3', label: 'Class 3' },
    { value: 'class4', label: 'Class 4' },
    { value: 'class5', label: 'Class 5' },
    { value: 'class6', label: 'Class 6' },
    { value: 'class7', label: 'Class 7' },
    { value: 'class8', label: 'Class 8' },
    { value: 'class9', label: 'Class 9' },
    { value: 'class10', label: 'Class 10' }
  ];
  const sections = [
    { value: 'sectionA', label: 'Section A' },
    { value: 'sectionB', label: 'Section B' }
  ];
  const examOptions = [
    { value: 'fa1', label: 'FA 1' },
    { value: 'fa2', label: 'FA 2' },
  ];

  const subjectOptions = [
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English' },
    { value: 'history', label: 'History' },
    { value: 'geography', label: 'Geography' },
    { value: 'biology', label: 'Biology' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'physics', label: 'Physics' },
    { value: 'computerScience', label: 'Computer Science' },
    { value: 'literature', label: 'Literature' },
    // Add more subject options as needed
  ];

  const handleEdit = (record) => {
    form.setFieldsValue({
      subject: record.subject,
      date: moment(record.date), // Assuming 'record.date' is already in a valid format
      startTime: moment(record.startTime, 'HH:mm'), // Use 'HH:mm' for 24-hour format
      endTime: moment(record.endTime, 'HH:mm'), // Use 'HH:mm' for 24-hour format
    });
    showModal();
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
    console.log(selectedClass)
  };

  const handleSectionChange = (value) => {
    setSelectedSection(value);
    console.log(selectedSection)
  };
  const handleExamChange = (value) => {
    setSelectedExam(value);
    console.log(selectedExam)
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
      {/*class options*/}
      <Select
        style={{ width: 120, marginRight: 16 }}
        placeholder="Select Class"
        onChange={handleClassChange}
      >
        {classes.map((cls) => (
          <Option key={cls.value} value={cls.value}>
            {cls.label}
          </Option>
        ))}
      </Select>
      {/*section options*/}
      <Select
        style={{ width: 120, marginRight: 16 }}
        placeholder="Select Section"
        onChange={handleSectionChange}
      >
        {sections.map((section) => (
          <Option key={section.value} value={section.value}>
            {section.label}
          </Option>
        ))}
      </Select>
      {/*exam options*/}
      <Select
        style={{ width: 120, marginRight: 16 }}
        placeholder="Select exam type"
        onChange={handleExamChange}
      >
        {examOptions.map((eachExam) => (
          <Option key={eachExam.value} value={eachExam.value}>
            {eachExam.label}
          </Option>
        ))}
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
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: 'Please select the subject!' }]}
          >
            <Select style={{ width: '50%' }} placeholder="Select a subject">
              {subjectOptions.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select the date!' }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime" rules={[{ required: true, message: 'Please select the start time!' }]}>
            <TimePicker format="hh:mm A" />
          </Form.Item>
          <Form.Item label="End Time" name="endTime" rules={[{ required: true, message: 'Please select the end time!' }]}>
            <TimePicker format="hh:mm A" />
          </Form.Item>
        </Form>
      </Modal>

      <Table dataSource={data} columns={columns} style={{ marginTop: 16 }} />

      <Modal
        title="Delete Record"
        visible={deleteModalVisible}
        onOk={confirmDelete}
        onCancel={() => setDeleteModalVisible(false)}
      >
        Are you sure you want to delete this record?
      </Modal>
    </div>
  );
};

export default Timetable;
