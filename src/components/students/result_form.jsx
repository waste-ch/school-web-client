import React, { useState } from 'react';
import { Form, Select, Button, message, InputNumber } from 'antd';
import axios from '../../axios-config'

const { Option } = Select;
const examTypes = ['Midterm', 'Final', 'FA1', 'FA2'];

const ResultForm = ({ studentDetails, onSuccess }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Make API call to add result
            await axios.post('/students/results/add', { ...values, studentId: studentDetails.studentId });
            message.success('Result added successfully');
        } catch (error) {
            message.error('Failed to add result');
        } finally {
            onSuccess();
            form.resetFields()

        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        >
            {/*<Form.Item
                name="studentId"
                label="Student"
                rules={[{ required: true, message: 'Please select a student' }]}
            >
                <Select placeholder="Select student">
                    {students.map(student => (
                        <Option key={student.id} value={student.id}>{student.name}</Option>
                    ))}
                </Select>
            </Form.Item>*/}

            <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please select a subject' }]}
            >
                <Select placeholder="Select subject">
                    <Option value="English">English</Option>
                    <Option value="Math">Math</Option>
                    <Option value="Science">Science</Option>
                    <Option value="History">History</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="examType"
                label="Exam Type"
                rules={[{ required: true, message: 'Please select an exam type' }]}
            >
                <Select placeholder="Select exam type">
                    {examTypes.map(type => (
                        <Option key={type} value={type}>{type}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                name="marks"
                label="Marks"
                rules={[{ required: true, message: 'Please enter marks' }]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ResultForm;
