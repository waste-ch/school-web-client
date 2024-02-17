import React from 'react';
import { Form, Button, DatePicker, Input } from 'antd';

const ExpenseForm = ({ form, onFinish }) => {
    return (
        <Form
            form={form}
            name="expenseForm"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            {/* BILL NO */}
            <Form.Item label="BILL NO" name="billNo" rules={[{ required: true, message: 'Please enter bill no!' }]}>
                <Input />
            </Form.Item>

            {/* Expense Type */}
            <Form.Item label="Expense Type" name="expenseType" rules={[{ required: true, message: 'Please enter expense type!' }]}>
                <Input />
            </Form.Item>

            {/* Date of Expense */}
            <Form.Item label="Date of Expense" name="expenseDate" rules={[{ required: true, message: 'Please select date of expense!' }]}>
                <DatePicker />
            </Form.Item>

            {/* Amount */}
            <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please enter the amount!' }]}>
                <Input type="number" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add Expense
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ExpenseForm;
