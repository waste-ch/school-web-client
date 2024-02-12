import React from 'react';
import { Form, Input, Checkbox, Button, Drawer } from 'antd';

const TransportForm = ({ visible, onClose, onSubmit }) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            form.resetFields();
            onSubmit(values);
        });
    };

    return (
        <Drawer
            title="School Transport Form"
            placement="right"
            onClose={onClose}
            visible={visible}
            width={400}
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item name="name" label="Student Name" rules={[{ required: true, message: 'Please enter student name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="className" label="Class Name" rules={[{ required: true, message: 'Please enter class name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="studentrollno" label="Roll Number" rules={[{ required: true, message: 'Please enter roll number' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="Drivername" label="Driver Name" rules={[{ required: true, message: 'Please enter driver name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="Busnumber" label="Bus Number" rules={[{ required: true, message: 'Please enter bus number' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="requiresTransport" valuePropName="checked" label="Requires Transport">
                    <Checkbox />
                </Form.Item>
                <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.requiresTransport !== currentValues.requiresTransport}>
                    {({ getFieldValue }) => {
                        return getFieldValue('requiresTransport') ? (
                            <>
                                <Form.Item name="pickupLocation" label="Pickup Location" rules={[{ required: true, message: 'Please enter pickup location' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="dropoffLocation" label="Drop-off Location" rules={[{ required: true, message: 'Please enter drop-off location' }]}>
                                    <Input />
                                </Form.Item>
                            </>
                        ) : null;
                    }}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default TransportForm;
