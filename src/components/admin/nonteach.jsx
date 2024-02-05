import React from 'react';
import { Card } from 'antd';

const NonTeaching = () => {
    const nonteachingData = {
        name: 'Steven Johnson',
        gender: 'Male',
        fatherName: 'Steve Jones',
        motherName: 'Naomi Rose',
        religion: 'Hindhu',
        joiningDate: '07.08.2016',
        desegnation: 'English',
        idNo: '10005',
        address: 'House #10, Road #6, Australia',
        phone: '+88 98568888418',
        // You can add a 'photo' field for the nonteaching's photo URL
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/*<div style={{ marginRight: '20px' }}>
                <Avatar size={80} src="https://img.freepik.com/free-vector/education-pen-concept_98292-5144.jpg?w=1480&t=st=1704774064~exp=1704774664~hmac=7e2a59f40e49bc687930287c3e4bea98cd700ee6f1ff3de19020cb2b8b4983f2" alt="nonteaching Photo" />
            </div>*/}
            <Card title={nonteachingData.name} style={{ width: 500 }}>
                <p>{/* Add a short information about the nonteaching */}</p>
                {/*<Divider />*/}
                <div>
                    <p><strong>Gender:</strong> {nonteachingData.gender}</p>
                    <p><strong>Father Name:</strong> {nonteachingData.fatherName}</p>
                    <p><strong>Mother Name:</strong> {nonteachingData.motherName}</p>
                    <p><strong>Religion:</strong> {nonteachingData.religion}</p>
                    <p><strong>Joining Date:</strong> {nonteachingData.joiningDate}</p>
                    <p><strong>E-mail:</strong> {nonteachingData.email}</p>
                    <p><strong>desegnation:</strong> {nonteachingData.desegnation}</p>
                    <p><strong>ID No:</strong> {nonteachingData.idNo}</p>
                    <p><strong>Address:</strong> {nonteachingData.address}</p>
                    <p><strong>Phone:</strong> {nonteachingData.phone}</p>
                </div>
            </Card>
        </div>
    );
};

export default NonTeaching;
