import React, { useState, useEffect } from 'react';
import { Table, Avatar, Button, Drawer, Form, Input, Space, Modal, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

import StudentAdmissionForm from './admission_form'
import StudentAnalysis from './student_analysis'
import api from '../../axios-config';




//const data = [
//    {
//        rollNo: '101',
//        photo: 'https://example.com/photo1.jpg',
//        name: 'John Doe',
//        gender: 'Male',
//        class: '10A',
//        section: 'A',
//        parents: 'Mr. and Mrs. Doe',
//        address: '123 Main Street, City',
//        dob: '2005-05-10',
//        phone: '+1234567890',
//        email: 'john.doe@example.com',
//    },
//    {
//        rollNo: '102',
//        photo: 'https://example.com/photo2.jpg',
//        name: 'Jane Smith',
//        gender: 'Female',
//        class: '11B',
//        section: 'B',
//        parents: 'Mr. and Mrs. Smith',
//        address: '456 Oak Avenue, Town',
//        dob: '2004-08-15',
//        phone: '+9876543210',
//        email: 'jane.smith@example.com',
//    },
//    {
//        rollNo: '103',
//        photo: 'https://example.com/photo2.jpg',
//        name: 'Jane Smith',
//        gender: 'Female',
//        class: '11B',
//        section: 'B',
//        parents: 'Mr. and Mrs. Smith',
//        address: '456 Oak Avenue, Town',
//        dob: '2004-08-15',
//        phone: '+9876543210',
//        email: 'jane.smith@example.com',
//    }, {
//        rollNo: '104',
//        photo: 'https://example.com/photo2.jpg',
//        name: 'Jane Smith',
//        gender: 'Female',
//        class: '11B',
//        section: 'B',
//        parents: 'Mr. and Mrs. Smith',
//        address: '456 Oak Avenue, Town',
//        dob: '2004-08-15',
//        phone: '+9876543210',
//        email: 'jane.smith@example.com',
//    }, {
//        rollNo: '105',
//        photo: 'https://example.com/photo2.jpg',
//        name: 'Jane Smith',
//        gender: 'Female',
//        class: '11B',
//        section: 'B',
//        parents: 'Mr. and Mrs. Smith',
//        address: '456 Oak Avenue, Town',
//        dob: '2004-08-15',
//        phone: '+9876543210',
//        email: 'jane.smith@example.com',
//    },
//    {
//        rollNo: '106',
//        photo: 'https://example.com/photo1.jpg',
//        name: 'John mary',
//        gender: 'Female',
//        class: '10A',
//        section: 'A',
//        parents: 'Mr. and Mrs. Doe',
//        address: '123 Main Street, City',
//        dob: '2005-05-10',
//        phone: '+1234567890',
//        email: 'john.doe@example.com',
//    },
//];

const feeHistoryColumns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Amount Paid',
        dataIndex: 'amountPaid',
        key: 'amountPaid',
        render: (amountPaid) => (
            <span>
                Rs {amountPaid} {/* Or your preferred currency */}
            </span>
        ),
    },
    {
        title: 'Due',
        dataIndex: 'due',
        key: 'due',
        render: (due) => (
            <span>
                Rs {due}
            </span>
        ),
    },
];



const StudentDetails = () => {
    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false);
    const [isFeedDetailsVisible, setFeedDetailsVisible] = useState(false);
    const [isFeesHistoryVisible, setFeesHistoryVisible] = useState(false);
    const [isResultsVisible, setResultsVisible] = useState(false);
    const [feeDetails, setFeesDetails] = useState([])
    const [loading, setLoading] = useState(false);
    const [studentDetails, setStudentDetails] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const [feesHistory, setFeesHistory] = useState([
        {
            key: '1',
            date: '2023-01-15',
            amountPaid: 100,
            due: 0,
        },
        {
            key: '2',
            date: '2023-02-15',
            amountPaid: 150,
            due: 50,
        },
        {
            key: '3',
            date: '2023-03-15',
            amountPaid: 200,
            due: 0,
        },
        // Add more fee history records as needed
    ])

    const handleStudentDelete = (record) => {
        api.post('/students/delete', record)
            .then((response) => {
                setLoading(false)
                message.success('student details deleted successfully.');
                form.resetFields();
                fetchStudentDetails()
            })
            .catch((error) => {
                setLoading(false)
                const errMessage = error && error.response && error.response.data && error.response.data.message
                message.error(errMessage || 'Technical error, please try again later.!!');
            });
    };


    const columns = [
        {
            title: 'Roll No',
            dataIndex: 'rollNo',
            key: 'rollNo',
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            render: (photo) => <Avatar src={photo} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => (
                `${record.firstName} ${record.lastName}`
            ),
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Class',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 'section',
        },
        //{
        //    title: 'Parents', TODO:
        //    dataIndex: 'parents',
        //    key: 'parents',
        //},
        //{
        //    title: 'Address',
        //    dataIndex: 'address',
        //    key: 'address',
        //},
        {
            title: 'Date of Birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            render: (val) => new Date(val).toLocaleDateString()
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => setFeedDetailsVisible(true)}>Add Fees</Button>
                    <Button type='primary' onClick={() => setFeesHistoryVisible(true)}>View Fee History</Button>
                    <Button type='primary' onClick={() => setResultsVisible(true)}>Results</Button>
                    <Button type="link" danger onClick={() => handleStudentDelete(record)}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        fetchStudentDetails()
    }, [])


    const fetchStudentDetails = () => {
        setLoading(true)
        return api.get('/students/fetch')
            .then((response) => {
                setLoading(false)
                if (response && response.data) {
                    const data = response.data
                    setStudentDetails(data || [])
                }
            })
            .catch((err) => {
                setLoading(false)
                console.error(err)
            })
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        //fetchUsers()
        setVisible(false);
    };

    const onFinish = (values) => {
        //onSave(values);
        setFeesDetails({ ...feeDetails, values })
        form.resetFields();
    };

    const onStudentAdd = (values) => {
        setLoading(true)
        api.post('/students/add', values)
            .then((response) => {
                setLoading(false)
                message.success('Earnings added successfully.');
                form.resetFields();
                setVisible(false);
                fetchStudentDetails()
            })
            .catch((error) => {
                setLoading(false)
                const errMessage = error && error.response && error.response.data && error.response.data.message
                message.error(errMessage || 'Technical error, please try again later.!!');
            });
    };

    return (
        <>
            Students Details
            <Button type="primary" onClick={showDrawer} style={{ float: 'right', marginBottom: 16 }}>
                Add New Student
            </Button>
            <Table loading={loading} columns={columns} dataSource={studentDetails} />

            <Drawer
                width={800}
                onClose={onClose}
                open={visible}
                bodyStyle={{ paddingBottom: 80 }}
                title="Student Registration"
            >
                <StudentAdmissionForm
                    onClose={onClose}
                    isUserRegistration={true}
                    form={form}
                    onFinish={onStudentAdd}
                />
            </Drawer>

            <Drawer
                title="Add Fees"
                placement="right"
                onClose={() => setFeedDetailsVisible(false)}
                visible={isFeedDetailsVisible}
            >
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item label="Fee Amount" name="amount">
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={() => setFeedDetailsVisible(false)} type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>

            <Modal
                title="Fee History"
                visible={isFeesHistoryVisible}
                onCancel={() => setFeesHistoryVisible(false)}
                footer={null}
            >
                <Table
                    dataSource={feesHistory}
                    columns={feeHistoryColumns}
                    pagination={false}
                />
            </Modal>
            <Modal
                title="Results"
                visible={isResultsVisible}
                onCancel={() => setResultsVisible(false)}
                footer={null}
                width={1000}
            >
                <StudentAnalysis />
            </Modal>
        </>
    );
};

export default StudentDetails;
