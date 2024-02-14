import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//import api from '../../../axios-config'
import { useNavigate } from 'react-router-dom';

import "./teachers.css"
import Header from '../header';
//import { useData } from '../../../data_context';


const { Title } = Typography;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


const TeacherLogin = () => {
  const [loading, setLoading] = useState(false);
  //const [form] = Form.useForm();
  const history = useNavigate();
  //const { setData, token } = useData()

  const onLogin = async (values) => {
    setLoading(true)
    history('/teachers/dashboard')
    // TODO: commenting for now
    //api.post('/users/teachers/login', { ...values, token })
    //    .then(() => {
    //        setData({
    //            username: values.username
    //        })
    //        setLoading(false)
    //        message.success('Logged in successfully...');
    //        form.resetFields();
    //        history('/teachers/dashboard')
    //    })
    //    .catch((error) => {
    //        setLoading(false);
    //        const errMessage = error && error.response && error.response.data && error.response.data.message
    //        message.error(errMessage || 'Technical Error. Please try again later');
    //    });
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>
        <div className="teacher-login" style={{ width: '500px', margin: '0 auto', background: "white", color: "black" }}>
          <Title level={2}>Teacher Login</Title>
          <Form name="login" onFinish={onLogin}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter your username' }]}
              {...formItemLayout}
            >
              <Input prefix={<UserOutlined />} placeholder="username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
              {...formItemLayout}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item className='button-float'>
              <Button type="primary" htmlType="submit" loading={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>&nbsp;&nbsp;
              {/*<div style={{ marginTop: '16px', textAlign: 'center' }}>
                                New User?&nbsp;&nbsp;  <Link to="/teachers/register">Sign up</Link>
                            </div>*/}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>

  );
};

export default TeacherLogin;
