import React from 'react';
import { Form, Input, Button, message } from 'antd';

const StudentLogin = () => {
  const onFinish = (values) => {
    // Simulating login logic, replace with actual authentication
    if (values.username === 'student' && values.password === 'password') {
      // Successful login
      message.success('Login successful');
    } else {
      // Failed login
      message.error('Invalid username or password');
    }
  };
  return (
    <div style={{ width: 300, margin: 'auto', marginTop: 100 }}>
      <h2>Student Login</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentLogin;
