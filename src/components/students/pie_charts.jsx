import React from 'react';
import { Pie } from '@ant-design/plots';

const SchoolClassComparison = () => {
    // Sample data for school final marks
    const schoolData = [
        { type: 'A+', value: 25 },
        { type: 'A', value: 30 },
        { type: 'B+', value: 20 },
        { type: 'B', value: 15 },
        { type: 'C', value: 10 },
    ];

    // Sample data for class final marks
    const classData = [
        { type: 'A+', value: 20 },
        { type: 'A', value: 25 },
        { type: 'B+', value: 18 },
        { type: 'B', value: 17 },
        { type: 'C', value: 20 },
    ];
    const pieConfigSchool = {
        forceFit: true,
        title: {
            visible: true,
            text: 'School Final Marks',
        },
        description: {
            visible: true,
            text: 'Overall marks distribution in school.',
        },
        radius: 0.8,
        data: schoolData,
        angleField: 'value',
        colorField: 'type',
        label: {
            visible: true,
            type: 'inner',
        },
    };

    const pieConfigClass = {
        forceFit: true,
        title: {
            visible: true,
            text: 'Class Final Marks',
        },
        description: {
            visible: true,
            text: 'Overall marks distribution in class.',
        },
        radius: 0.8,
        data: classData,
        angleField: 'value',
        colorField: 'type',
        label: {
            visible: true,
            type: 'inner',
        },
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '45%' }}>
                <h2>School Final Marks</h2>
                <Pie {...pieConfigSchool} />
            </div>
            <div style={{ width: '45%' }}>
                <h2>Class Final Marks</h2>
                <Pie {...pieConfigClass} />

            </div>
        </div>
    );
};

export default SchoolClassComparison;
