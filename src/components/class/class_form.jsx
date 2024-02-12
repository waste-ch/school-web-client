import React from 'react';
import { Form, Input, Button } from 'antd';

const ClassForm = ({ onSubmit, onClose, initialValues }) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            form.resetFields();
            onSubmit(values);
        });
    };

    return (
        <Form form={form} layout="vertical" initialValues={initialValues}>
            <Form.Item name="className" label="Class Name" rules={[{ required: true, message: 'Please enter class name' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="section" label="Section" rules={[{ required: true, message: 'Please enter section' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="teacher" label="Teacher" rules={[{ required: true, message: 'Please enter teacher name' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="time" label="Time" rules={[{ required: true, message: 'Please enter class time' }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button onClick={onClose} style={{ marginLeft: 8 }}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ClassForm;
