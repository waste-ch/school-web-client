import React, { useState } from 'react';
import { Table, Avatar, Button, Drawer } from 'antd';

import StudentAdmissionForm from './admission_form'
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
    {
        title: 'Parents',
        dataIndex: 'parents',
        key: 'parents',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dob',
        key: 'dob',
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
];

const data = [
    {
        rollNo: '101',
        photo: 'https://example.com/photo1.jpg',
        name: 'John Doe',
        gender: 'Male',
        class: '10A',
        section: 'A',
        parents: 'Mr. and Mrs. Doe',
        address: '123 Main Street, City',
        dob: '2005-05-10',
        phone: '+1234567890',
        email: 'john.doe@example.com',
    },
    {
        rollNo: '102',
        photo: 'https://example.com/photo2.jpg',
        name: 'Jane Smith',
        gender: 'Female',
        class: '11B',
        section: 'B',
        parents: 'Mr. and Mrs. Smith',
        address: '456 Oak Avenue, Town',
        dob: '2004-08-15',
        phone: '+9876543210',
        email: 'jane.smith@example.com',
    },
    {
        rollNo: '103',
        photo: 'https://example.com/photo2.jpg',
        name: 'Jane Smith',
        gender: 'Female',
        class: '11B',
        section: 'B',
        parents: 'Mr. and Mrs. Smith',
        address: '456 Oak Avenue, Town',
        dob: '2004-08-15',
        phone: '+9876543210',
        email: 'jane.smith@example.com',
    }, {
        rollNo: '104',
        photo: 'https://example.com/photo2.jpg',
        name: 'Jane Smith',
        gender: 'Female',
        class: '11B',
        section: 'B',
        parents: 'Mr. and Mrs. Smith',
        address: '456 Oak Avenue, Town',
        dob: '2004-08-15',
        phone: '+9876543210',
        email: 'jane.smith@example.com',
    }, {
        rollNo: '105',
        photo: 'https://example.com/photo2.jpg',
        name: 'Jane Smith',
        gender: 'Female',
        class: '11B',
        section: 'B',
        parents: 'Mr. and Mrs. Smith',
        address: '456 Oak Avenue, Town',
        dob: '2004-08-15',
        phone: '+9876543210',
        email: 'jane.smith@example.com',
    },
    {
        rollNo: '106',
        photo: 'https://example.com/photo1.jpg',
        name: 'John mary',
        gender: 'Female',
        class: '10A',
        section: 'A',
        parents: 'Mr. and Mrs. Doe',
        address: '123 Main Street, City',
        dob: '2005-05-10',
        phone: '+1234567890',
        email: 'john.doe@example.com',
    },
];



const StudentDetails = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        //fetchUsers()
        setVisible(false);
    };
    return (
        <>
            Students Details
            <Button type="primary" onClick={showDrawer} style={{ float: 'right', marginBottom: 16 }}>
                Add New Student
            </Button>
            <Table columns={columns} dataSource={data} />

            <Drawer
                width={800}
                onClose={onClose}
                open={visible}
                bodyStyle={{ paddingBottom: 80 }}
                title="Student Registration"
            >
                <StudentAdmissionForm onClose={onClose} isUserRegistration={true} />
            </Drawer>
        </>
    );
};

export default StudentDetails;
