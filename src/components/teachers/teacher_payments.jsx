import React from 'react';
import { Table, Tag } from 'antd';


const TeacherPayments = () => {
    const data = [
        {
            key: '1',
            roll: '101',
            photo: 'teacher1.jpg',
            name: 'John Doe',
            gender: 'Male',
            class: 'Mathematics',
            subject: 'Algebra',
            amount: '$500',
            status: 'Paid',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
        },
        {
            key: '2',
            roll: '101',
            photo: 'teacher1.jpg',
            name: 'John Doe',
            gender: 'Male',
            class: 'Mathematics',
            subject: 'Algebra',
            amount: '$500',
            status: 'Not-Paid',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
        }, {
            key: '3',
            roll: '101',
            photo: 'teacher1.jpg',
            name: 'John Doe',
            gender: 'Male',
            class: 'Mathematics',
            subject: 'Algebra',
            amount: '$500',
            status: 'Paid',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
        }, {
            key: '4',
            roll: '101',
            photo: 'teacher1.jpg',
            name: 'John Doe',
            gender: 'Male',
            class: 'Mathematics',
            subject: 'Algebra',
            amount: '$500',
            status: 'Paid',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
        },
        {
            key: '5',
            roll: '101',
            photo: 'teacher1.jpg',
            name: 'John Doe',
            gender: 'Male',
            class: 'Mathematics',
            subject: 'Algebra',
            amount: '$500',
            status: 'Not-Paid',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
        },
    ];

    const columns = [
        { title: 'Roll', dataIndex: 'roll', key: 'roll' },
        { title: 'Photo', dataIndex: 'photo', key: 'photo', render: (text) => <img src={text} alt="Teacher" style={{ width: 50, borderRadius: '50%' }} /> },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'Class', dataIndex: 'class', key: 'class' },
        { title: 'Subject', dataIndex: 'subject', key: 'subject' },
        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => <Tag color={status === 'Paid' ? 'green' : 'red'}>{status}</Tag>,
        },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
    ];

    return (
        <Table dataSource={data} columns={columns} pagination={false} bordered title={() => 'All Teachers Payment History'} />
    );
};

export default TeacherPayments;
