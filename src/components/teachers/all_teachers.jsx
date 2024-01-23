import React from 'react';
import { Table, Avatar } from 'antd';



const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
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
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
    },
    {
        title: 'Section',
        dataIndex: 'section',
        key: 'section',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
        id: '1',
        photo: 'https://example.com/photo1.jpg',
        name: 'John Doe',
        gender: 'Male',
        class: '10',
        subject: 'Mathematics',
        section: 'A',
        address: '123 Main St, Cityville',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
    },
    {
        id: '2',
        photo: 'https://example.com/photo2.jpg',
        name: 'Jane Doe',
        gender: 'Female',
        class: '11',
        subject: 'Physics',
        section: 'B',
        address: '456 Oak St, Townsville',
        phone: '987-654-3210',
        email: 'jane.doe@example.com',
    },
    {
        id: '3',
        photo: 'https://example.com/photo3.jpg',
        name: 'Sam Smith',
        gender: 'Male',
        class: '9',
        subject: 'Chemistry',
        section: 'C',
        address: '789 Pine St, Villagetown',
        phone: '555-123-4567',
        email: 'sam.smith@example.com',
    },
    {
        id: '4',
        photo: 'https://example.com/photo4.jpg',
        name: 'Emma Johnson',
        gender: 'Female',
        class: '12',
        subject: 'Biology',
        section: 'D',
        address: '567 Elm St, Hamletville',
        phone: '333-789-0123',
        email: 'emma.johnson@example.com',
    },
    {
        id: '5',
        photo: 'https://example.com/photo5.jpg',
        name: 'Chris Brown',
        gender: 'Male',
        class: '8',
        subject: 'History',
        section: 'E',
        address: '890 Maple St, Countryside',
        phone: '777-234-5678',
        email: 'chris.brown@example.com',
    },
];


const Teachers = () => {
    return (
        <Table columns={columns} dataSource={data} />
    );
};

export default Teachers;
