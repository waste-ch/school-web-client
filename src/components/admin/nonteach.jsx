import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

const nonteaching = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can perform further actions like sending data to a server here
  };

  return (
    <Form
      name="admissionForm"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      {/* Name */}
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: 'Please enter your full name!' }]}
      >
        <Input />
      </Form.Item>

      {/* Blood Group*/}
      <Form.Item
        label="Blood Group"
        name="Blood Group"
        rules={[
          { required: true, message: 'Please enter your Blood Group' },
          { type: 'email', message: 'Please enter a Blood Group' },
        ]}
      >
        <Input />
      </Form.Item>
      {/* Gender*/}
      <Form.Item
        label="Gender"
        name="Gender"
        rules={[
          { required: true, message: 'Please enter Gender' },
          { type: 'email', message: 'Please enter a Gender' },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Phone Number */}
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          { required: true, message: 'Please enter your phone number!' },
          { pattern: /^\d{10}$/, message: 'Please enter a valid 10-digit phone number!' },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Date of Birth */}
      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[{ required: true, message: 'Please enter your date of birth!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      {/* Address */}
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please enter your address!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      {/*Desigation */}
      <Form.Item
        label="Desigation "
        name="Desigation "
        rules={[{ required: true, message: 'Please enter your Desigation !' }]}
      >
        <Input.TextArea />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit 
        </Button>
      </Form.Item>
    </Form>
  );
};

export default nonteaching;
