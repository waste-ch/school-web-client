import React, { useState } from 'react';
import { Table, Form, Input, Select, TimePicker, DatePicker, Button, Space } from 'antd';

const { Option } = Select;

const ExamScheduleComponent = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState([]);

    const onFinish = (values) => {
        // Handle form submission, and add the new record to the data array
        const newData = [...data, { key: data.length + 1, ...values }];
        setData(newData);
        form.resetFields();
    };

    const onReset = () => {
        // Handle form reset
        form.resetFields();
    };

    const columns = [
        { title: 'Exam Name', dataIndex: 'examName', key: 'examName' },
        { title: 'Subject', dataIndex: 'subject', key: 'subject' },
        { title: 'Class', dataIndex: 'class', key: 'class' },
        { title: 'Section', dataIndex: 'section', key: 'section' },
        { title: 'Time', dataIndex: 'time', key: 'time' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
    ];

    const sampleData = [
        {
            key: 1,
            examName: 'Midterm Exam',
            subject: 'Mathematics',
            class: '10',
            section: 'A',
            time: '10:00 AM - 11:00 AM',
            date: '2022-02-15',
        },
        {
            key: 2,
            examName: 'Final Exam',
            subject: 'English',
            class: '12',
            section: 'B',
            time: '2:00 PM - 3:30 PM',
            date: '2022-03-20',
        },
        {
            key: 3,
            examName: 'Final Exam',
            subject: 'English',
            class: '12',
            section: 'B',
            time: '2:00 PM - 3:30 PM',
            date: '2022-03-20',
        },
        {
            key: 4,
            examName: 'Final Exam',
            subject: 'English',
            class: '12',
            section: 'B',
            time: '2:00 PM - 3:30 PM',
            date: '2022-03-20',
        },
        {
            key: 5,
            examName: 'Final Exam',
            subject: 'English',
            class: '12',
            section: 'B',
            time: '2:00 PM - 3:30 PM',
            date: '2022-03-20',
        },
        {
            key: 6,
            examName: 'Final Exam',
            subject: 'English',
            class: '12',
            section: 'B',
            time: '2:00 PM - 3:30 PM',
            date: '2022-03-20',
        },
        // Add more sample data as needed
    ];

    return (
        <div style={{ display: 'flex' }}>
            {/* Left side - Exam Schedule Form */}
            <div style={{ width: '50%', marginRight: '20px' }}>
                <h2>Add New Exam</h2>

                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item label="Exam Name" name="examName" rules={[{ required: true, message: 'Please enter exam name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Subject Type" name="subject" rules={[{ required: true, message: 'Please enter subject type!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Select Class" name="class" rules={[{ required: true, message: 'Please select a class!' }]}>
                        <Select>
                            <Option value="10">Class 10</Option>
                            <Option value="12">Class 12</Option>
                            {/* Add more options as needed */}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Select Section" name="section" rules={[{ required: true, message: 'Please select a section!' }]}>
                        <Select>
                            <Option value="A">Section A</Option>
                            <Option value="B">Section B</Option>
                            {/* Add more options as needed */}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Select Time" name="time" rules={[{ required: true, message: 'Please select a time!' }]}>
                        <TimePicker format="h:mm a" />
                    </Form.Item>
                    <Form.Item label="Select Date" name="date" rules={[{ required: true, message: 'Please select a date!' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>

            {/* Right side - All Exam Schedule Table */}
            <div style={{ width: '50%' }}>
                <h2>All Exam Schedule</h2>

                <Table dataSource={sampleData} columns={columns} pagination={false} bordered />
            </div>
        </div>
    );
};

export default ExamScheduleComponent;
