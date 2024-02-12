import React, { useState } from 'react';
import { Table, Button, Drawer, Modal, Space } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ClassForm from './class_form';
const classData = [
    {
        key: '1',
        className: 'Mathematics',
        section: 'A',
        teacher: 'Mr. Smith',
        time: '9:00 AM - 10:30 AM',
    },
    {
        key: '2',
        className: 'Science',
        section: 'B',
        teacher: 'Ms. Johnson',
        time: '10:45 AM - 12:15 PM',
    },
    // Add more class data as needed
];


const StudentDetails = () => {
    //const [visible, setVisible] = useState(false);
    const [classVisible, setClassVisible] = useState(false);
    //const [editMode, setEditMode] = useState(false);
    const [editRecord, setEditRecord] = useState(null);
    const [data, setData] = useState(classData); // your student data here, same as before

    //const showDrawer = () => setVisible(true);
    const showClassDrawer = () => setClassVisible(true);

    //const onClose = () => {
    //    setVisible(false);
    //    setEditMode(false);
    //    setEditRecord(null);
    //};

    const onClassClose = () => setClassVisible(false);

    const handleEdit = (record) => {
        setEditRecord(record);
        //setEditMode(true);
        setClassVisible(true);
    };

    const handleDelete = (record) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this record?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                const updatedData = data.filter((item) => item.key !== record.key);
                setData(updatedData);
            },
        });
    };

    const columns = [
        {
            title: 'Class Name',
            dataIndex: 'className',
            key: 'className',
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 'section',
        },
        {
            title: 'Teacher',
            dataIndex: 'teacher',
            key: 'teacher',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Button type="link" onClick={() => handleEdit(record)}>
                        <EditOutlined />
                    </Button>
                    <Button type="link" danger onClick={() => handleDelete(record)}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ];

    const handleSaveClass = () => {
        console.log('success')
    }

    return (
        <>
            <Button type="primary" icon={<PlusOutlined />} onClick={showClassDrawer}>
                Add New Class
            </Button>
            <Table columns={columns} dataSource={data} />
            <Drawer
                title="Add New Class"
                width={720}
                onClose={onClassClose}
                visible={classVisible}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <ClassForm initialValues={editRecord} onClose={onClassClose} onSubmit={handleSaveClass} />
            </Drawer>
        </>
    );
};

export default StudentDetails;
