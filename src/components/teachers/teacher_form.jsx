import React from 'react';
import { Form, Input, Select, DatePicker, Upload, Button, message } from 'antd';
import { UploadOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const TeacherAdmissionForm = () => {
    const onFinish = (values) => {
        // You can handle the form submission logic here
        console.log('Form submitted:', values);
        message.success('Student admission details saved successfully!');
    };

    const onReset = () => {
        // You can handle the form reset logic here
        form.resetFields();
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const propsUpload = {
        beforeUpload: () => false, // Prevent file upload, customize according to your needs
    };

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
    };

    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
                gender: 'male', // Set default values if needed
                bloodGroup: 'O+',
                class: '10',
                section: 'A',
            }}
        >
            <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input the first name!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please input the last name!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
                <Select>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Date of Birth" name="dob">
                <DatePicker />
            </Form.Item>

            <Form.Item label="Roll" name="roll">
                <Input />
            </Form.Item>

            <Form.Item label="Blood Group" name="bloodGroup">
                <Input />
            </Form.Item>

            <Form.Item label="Religion" name="religion">
                <Input />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ type: 'email', message: 'Invalid email address!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Class" name="class">
                <Input />
            </Form.Item>

            <Form.Item label="Section" name="section">
                <Input />
            </Form.Item>

            <Form.Item label="Admission ID" name="admissionId">
                <Input />
            </Form.Item>

            <Form.Item label="Phone" name="phone">
                <Input />
            </Form.Item>

            <Form.Item label="Short Bio" name="shortBio">
                <TextArea />
            </Form.Item>

            <Form.Item label="Photo" name="photo" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload {...propsUpload} listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button type="primary" icon={<SaveOutlined />} htmlType="submit">
                    Save
                </Button>
                <Button icon={<UndoOutlined />} onClick={onReset} style={{ marginLeft: 8 }}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TeacherAdmissionForm;
