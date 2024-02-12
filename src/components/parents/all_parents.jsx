import React, { useState } from 'react';
import { Table, Avatar, Button, Drawer } from 'antd';
import ParentForm from './parent_form'; // Assuming ParentForm is a separate component for adding parents

const sampleData = [
    {
        id: 1,
        photo: 'https://example.com/photo1.jpg',
        name: 'John Doe',
        gender: 'Male',
        occupation: 'Teacher',
        address: '123 Main St, Cityville',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
    },
    {
        id: 2,
        photo: 'https://example.com/photo2.jpg',
        name: 'Jane Doe',
        gender: 'Female',
        occupation: 'Engineer',
        address: '456 Oak St, Townsville',
        phone: '987-654-3210',
        email: 'jane.doe@example.com',
    },
    // Add more sample data as needed
];

const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Photo', dataIndex: 'photo', key: 'photo', render: (photo) => <Avatar src={photo} /> },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Occupation', dataIndex: 'occupation', key: 'occupation' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
];

const AllParents = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const showDrawer = () => {
        setIsDrawerVisible(true);
    };

    const closeDrawer = () => {
        setIsDrawerVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer} style={{ marginBottom: 16 }}>
                Add Parent
            </Button>
            <Table dataSource={sampleData} columns={columns} pagination={false} bordered />

            <Drawer
                title="Add Parent"
                width={700}
                onClose={closeDrawer}
                visible={isDrawerVisible}
                destroyOnClose={true}
            >
                <ParentForm onClose={closeDrawer} />
            </Drawer>
        </div>
    );
};

export default AllParents;
