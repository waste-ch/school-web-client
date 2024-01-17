// ContactUs.js
import React from 'react';
import { Form, Input, Button, Typography, Layout, message } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

const ContactUs = () => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    // Here, you can send the form data to your server or handle it as needed
    // For demonstration purposes, we'll just display a success message
    console.log('Form data to be submitted:', values);

    message.success('Form submitted successfully!');
    form.resetFields();
  };

  return (
    <Layout>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
        <Title level={2}>Contact Us</Title>
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default ContactUs;
