import React, { useState } from 'react';
import { Table, Form, Input, InputNumber, Button, Space } from 'antd';


const ExamGradesComponent = () => {
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
        { title: 'Grade Name', dataIndex: 'gradeName', key: 'gradeName' },
        { title: 'Grade Point', dataIndex: 'gradePoint', key: 'gradePoint' },
        { title: 'Percentage From', dataIndex: 'percentageFrom', key: 'percentageFrom' },
        { title: 'Percentage Upto', dataIndex: 'percentageUpto', key: 'percentageUpto' },
        { title: 'Comments', dataIndex: 'comments', key: 'comments' },
    ];

    const sampleData = [
        { key: 1, gradeName: 'A', gradePoint: 4.0, percentageFrom: 90, percentageUpto: 100, comments: 'Excellent' },
        { key: 2, gradeName: 'B', gradePoint: 3.0, percentageFrom: 80, percentageUpto: 89.99, comments: 'Very Good' },
        { key: 3, gradeName: 'C', gradePoint: 2.0, percentageFrom: 70, percentageUpto: 79.99, comments: 'Good' },
        { key: 4, gradeName: 'D', gradePoint: 1.0, percentageFrom: 60, percentageUpto: 69.99, comments: 'Average' },
        { key: 5, gradeName: 'F', gradePoint: 0.0, percentageFrom: 0, percentageUpto: 59.99, comments: 'Fail' },
    ];

    return (
        <div style={{ display: 'flex' }}>
            {/* Left side - Exam Grades Form */}
            <div style={{ width: '50%', marginRight: '20px' }}>
                <h2>Add New Grade</h2>

                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item label="Grade Name" name="gradeName" rules={[{ required: true, message: 'Please enter grade name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Grade Point" name="gradePoint" rules={[{ required: true, message: 'Please enter grade point!' }]}>
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item label="Percentage From" name="percentageFrom" rules={[{ required: true, message: 'Please enter percentage from!' }]}>
                        <InputNumber min={0} max={100} />
                    </Form.Item>
                    <Form.Item label="Percentage Upto" name="percentageUpto" rules={[{ required: true, message: 'Please enter percentage upto!' }]}>
                        <InputNumber min={0} max={100} />
                    </Form.Item>
                    <Form.Item label="Comments" name="comments">
                        <Input.TextArea />
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

            {/* Right side - Exam Grade Lists Table */}
            <div style={{ width: '50%' }}>
                <h2>Exam Grade List</h2>
                <Table dataSource={sampleData} columns={columns} pagination={false} bordered />
            </div>
        </div>
    );
};

export default ExamGradesComponent;
