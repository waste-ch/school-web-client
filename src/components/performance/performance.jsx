import React, { useState } from 'react';
import { Select } from 'antd';
import { Column } from '@ant-design/plots';

import './performance.css';

const { Option } = Select;

// Sample marks data for demonstration
const marksData = {
    Maths: {
        'Class 1': {
            Midterm: {
                Aplus: 10,
                A: 20,
                Bplus: 30,
                B: 40,
            },
            Final: {
                Aplus: 15,
                A: 25,
                Bplus: 35,
                B: 45,
            },
        },
        'Class 2': {
            Midterm: {
                Aplus: 12,
                A: 22,
                Bplus: 32,
                B: 42,
            },
            Final: {
                Aplus: 18,
                A: 28,
                Bplus: 38,
                B: 48,
            },
        },
    },
    Science: {
        'Class 1': {
            Midterm: {
                Aplus: 5,
                A: 10,
                Bplus: 15,
                B: 20,
            },
            Final: {
                Aplus: 8,
                A: 13,
                Bplus: 18,
                B: 23,
            },
        },
        'Class 2': {
            Midterm: {
                Aplus: 7,
                A: 12,
                Bplus: 17,
                B: 22,
            },
            Final: {
                Aplus: 9,
                A: 14,
                Bplus: 19,
                B: 24,
            },
        },
    },
};

const SchoolMarksAnalysis = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedExamType, setSelectedExamType] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    const handleSubjectChange = value => {
        setSelectedSubject(value);
    };

    const handleExamTypeChange = value => {
        setSelectedExamType(value);
    };

    const handleClassChange = value => {
        setSelectedClass(value);
    };

    const getChartData = () => {
        if (!selectedSubject || !selectedClass || !selectedExamType) return [];

        return Object.keys(marksData[selectedSubject][selectedClass][selectedExamType]).map(grade => ({
            grade,
            students: marksData[selectedSubject][selectedClass][selectedExamType][grade],
        }));
    };

    return (
        <>
            <div className="dropdown-option-container">
                <div className="dropdown-option">
                    <label>Select subject: </label>
                    <Select
                        style={{ width: 200, marginBottom: 16 }}
                        value={selectedSubject}
                        onChange={handleSubjectChange}
                        placeholder="Select Subject"
                    >
                        <Option value="Maths">Maths</Option>
                        <Option value="Science">Science</Option>
                    </Select>
                </div>
                <div className="dropdown-option">
                    <label>Select Exam: </label>
                    <Select
                        style={{ width: 200, marginBottom: 16 }}
                        value={selectedExamType}
                        onChange={handleExamTypeChange}
                        placeholder="Select Exam Type"
                    >
                        <Option value="Midterm">Midterm</Option>
                        <Option value="Final">Final</Option>
                    </Select>
                </div>
                <div className="dropdown-option">
                    <label>Select class: </label>
                    <Select
                        style={{ width: 200, marginBottom: 16 }}
                        value={selectedClass}
                        onChange={handleClassChange}
                        placeholder="Select Class"
                    >
                        <Option value="Class 1">Class 1</Option>
                        <Option value="Class 2">Class 2</Option>
                    </Select>
                </div>
            </div>
            <div style={{ height: 400 }}>
                {
                    selectedSubject && selectedExamType && selectedClass &&
                    <Column
                        data={getChartData()}
                        xField="grade"
                        yField="students"
                        label={{
                            position: 'middle',
                            style: {
                                fill: '#000000',
                                fontSize: 14,
                            },
                        }}
                        xAxis={{
                            label: {
                                autoRotate: true,
                                style: {
                                    fill: '#000000',
                                    fontSize: 14,
                                },
                            },
                        }}
                        yAxis={{
                            label: {
                                style: {
                                    fill: '#000000',
                                    fontSize: 14,
                                },
                            },
                        }}
                    />
                }
            </div>
        </>
    );
};

export default SchoolMarksAnalysis;
