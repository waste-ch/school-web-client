import React from 'react';
import { Card, Form, Input, Button, Rate, Typography, message } from 'antd';
//import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title } = Typography;

const FeedbackPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Your feedback has been submitted successfully!');
  };

  return (
    <Card style={{ width: 600, marginTop: 16, backgroundColor: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Feedback Form</Title>
      <Form name="feedback_form" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your E-mail!' },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="rating"
          rules={[{ required: true, message: 'Please rate your experience!' }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item
          name="feedback"
          rules={[{ required: true, message: 'Please provide your feedback!' }]}
        >
          <TextArea placeholder="Feedback" autoSize={{ minRows: 3, maxRows: 5 }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FeedbackPage;
