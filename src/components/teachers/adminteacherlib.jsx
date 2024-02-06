import React from 'react';
import { Upload, Button, Input, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Uploadbooks = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Book uploaded successfully!');
  };

  return (
    <Form name="book_upload" onFinish={onFinish}>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="author"
        rules={[{ required: true, message: 'Please input the author!' }]}
      >
        <Input placeholder="Author" />
      </Form.Item>

      <Form.Item
        name="cover"
        valuePropName="fileList"
        getValueFromEvent={e => Array.isArray(e) ? e : e && e.fileList}
        rules={[{ required: true, message: 'Please upload the cover image!' }]}
      >
        <Upload name="cover" listType="picture">
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Uploadbooks;
