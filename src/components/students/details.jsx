import React from 'react';
import { Card, Avatar } from 'antd';


const studentDetails = {
    name: 'Jessia Rose',
    gender: 'Female',
    fatherName: 'Fahim Rahman',
    motherName: 'Jannatul Kazi',
    dateOfBirth: '07.08.2006',
    religion: 'Islam',
    fatherOccupation: 'Graphic Designer',
    email: 'jessiarose@gmail.com',
    admissionDate: '05.01.2019',
    class: '2',
    section: 'A',
    roll: '10005',
    address: 'House #10, Road #6, Australia',
    phone: '+88 9856418',
};

const StudentDetails = (props) => {
    const showExtraDetails = props.showExtra || false
    return (
        <Card title={props.title}>
            {/* Display student photo */}
            <Avatar size={80} src="https://cdn.vectorstock.com/i/1000x1000/42/35/student-icon-cartoon-style-vector-35354235.webp" />
            {/* Display additional student details */}
            <p>Name: {studentDetails.name}</p>
            <p>Gender: {studentDetails.gender}</p>

            <p>Date Of Birth: {studentDetails.dateOfBirth}</p>
            <p>Class: {studentDetails.class}</p>
            <p>Section: {studentDetails.section}</p>
            <p>Roll: {studentDetails.roll}</p>
            {
                showExtraDetails ? <>
                    <p>Father Name: {studentDetails.fatherName}</p>
                    <p>Mother Name: {studentDetails.motherName}</p>
                    <p>Religion: {studentDetails.religion}</p>
                    <p>Father Occupation: {studentDetails.fatherOccupation}</p>
                    <p>E-Mail: {studentDetails.email}</p>
                    <p>Admission Date: {studentDetails.admissionDate}</p>
                    <p>Class: {studentDetails.class}</p>
                    <p>Address: {studentDetails.address}</p>
                    <p>Phone: {studentDetails.phone}</p></> : ''
            }

        </Card>

    );
};

export default StudentDetails;
