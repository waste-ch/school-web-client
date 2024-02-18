import React from 'react';
import { Form, Button, DatePicker, Input } from 'antd';

const EarningForm = ({ onFinish }) => {
    const [form] = Form.useForm();

    return (
        <Form form={form} name="earningForm" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            {/*<Form.Item label="ID" name="id" initialValue={0}>
                <Input />
            </Form.Item>*/}
            <Form.Item label="Student Name" name="studentName" rules={[{ required: true, message: 'Please enter student name!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Date of Earning" name="earningDate" rules={[{ required: true, message: 'Please select date of earning!' }]}>
                <DatePicker />
            </Form.Item>
            <Form.Item label="Type of Earning" name="earningType" rules={[{ required: true, message: 'Please select type of earning!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Amount Earned" name="amountEarned" rules={[{ required: true, message: 'Please enter the amount earned!' }]}>
                <Input type="number" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add Earning
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EarningForm;
