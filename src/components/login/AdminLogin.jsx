import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useAuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { usersDispatchFn } = useAuthContext();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    usersDispatchFn({
      type: "USER_DETAILS",
      payload: { ...values, isAuthenticated: true },
    });
    navigate("/admin");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      style={{
        minWidth: "100vw",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid #000",
        background: "#fff",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export { AdminLogin };
