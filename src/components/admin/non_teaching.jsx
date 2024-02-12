import React, { useState } from 'react';
import { Table, Button, Drawer } from 'antd';
import NonteachingForm from './non_teaching_form'; // Assuming the form component is in the same directory

const columns = [
    {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: 'Blood Group',
        dataIndex: 'bloodGroup',
        key: 'bloodGroup',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
    },
];

const data = [
    {
        key: '1',
        fullName: 'John Doe',
        bloodGroup: 'AB+',
        gender: 'Male',
        phoneNumber: '1234567890',
        dob: '1990-01-01',
        address: '123 Main St',
        designation: 'Admin Assistant',
    },
    {
        key: '2',
        fullName: 'Jane Smith',
        bloodGroup: 'O-',
        gender: 'Female',
        phoneNumber: '9876543210',
        dob: '1985-05-15',
        address: '456 Oak St',
        designation: 'Accountant',
    },
    // Add more entries as needed
];

const NonTeaching = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer} style={{ marginBottom: 16 }}>
                Add Non-Teaching
            </Button>
            <Table columns={columns} dataSource={data} />
            <Drawer
                title="Add Non-Teaching"
                placement="right"
                closable={false}
                onClose={onCloseDrawer}
                visible={drawerVisible}
                width={400}
            >
                <NonteachingForm />
            </Drawer>
        </div>
    );
};

export default NonTeaching;
