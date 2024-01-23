import React from 'react';
import { Card } from 'antd';

const TeacherInfo = () => {
    const teacherData = {
        name: 'Steven Johnson',
        gender: 'Male',
        fatherName: 'Steve Jones',
        motherName: 'Naomi Rose',
        religion: 'Islam',
        joiningDate: '07.08.2016',
        email: 'stevenjohnson@gmail.com',
        subject: 'English',
        class: '2',
        section: 'Pink',
        idNo: '10005',
        address: 'House #10, Road #6, Australia',
        phone: '+88 98568888418',
        // You can add a 'photo' field for the teacher's photo URL
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/*<div style={{ marginRight: '20px' }}>
                <Avatar size={80} src="https://img.freepik.com/free-vector/education-pen-concept_98292-5144.jpg?w=1480&t=st=1704774064~exp=1704774664~hmac=7e2a59f40e49bc687930287c3e4bea98cd700ee6f1ff3de19020cb2b8b4983f2" alt="Teacher Photo" />
            </div>*/}
            <Card title={teacherData.name} style={{ width: 500 }}>
                <p>{/* Add a short information about the teacher */}</p>
                {/*<Divider />*/}
                <div>
                    <p><strong>Gender:</strong> {teacherData.gender}</p>
                    <p><strong>Father Name:</strong> {teacherData.fatherName}</p>
                    <p><strong>Mother Name:</strong> {teacherData.motherName}</p>
                    <p><strong>Religion:</strong> {teacherData.religion}</p>
                    <p><strong>Joining Date:</strong> {teacherData.joiningDate}</p>
                    <p><strong>E-mail:</strong> {teacherData.email}</p>
                    <p><strong>Subject:</strong> {teacherData.subject}</p>
                    <p><strong>Class:</strong> {teacherData.class}</p>
                    <p><strong>Section:</strong> {teacherData.section}</p>
                    <p><strong>ID No:</strong> {teacherData.idNo}</p>
                    <p><strong>Address:</strong> {teacherData.address}</p>
                    <p><strong>Phone:</strong> {teacherData.phone}</p>
                </div>
            </Card>
        </div>
    );
};

export default TeacherInfo;
