/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Table, Select, Button, Space, Modal } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ResultForm from './result_form'
import api from '../../axios-config'
import PieChart from './pie_charts'

const { Option } = Select;
const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff3860'];
const examTypes = ['Midterm', 'Final', 'FA1', 'FA2']


const StudentResults = ({ studentDetails }) => {
    const [examType, setExamType] = useState('Midterm');
    const [showAnalysisModal, setShowAnalysisModal] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [prevMarksData, setPrevMarksData] = useState([]);
    const [showResultModal, setShowResultModal] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [marksData, setMarksData] = useState({
        //English: { Midterm: 80, Final: 85, FA1: 50, FA2: 70 },
        //Math: { Midterm: 75, Final: 78, FA1: 50, FA2: 70 },
        //Science: { Midterm: 85, Final: 82, FA1: 50, FA2: 70 },
        //History: { Midterm: 70, Final: 75, FA1: 50, FA2: 70 },
    });

    useEffect(() => {
        if (studentDetails && studentDetails.studentId) {
            fetchStudentResults(studentDetails)
        }
    }, [studentDetails])

    const fetchStudentResults = () => {
        return api.get('/students/results/fetch', { params: studentDetails })
            .then((response) => {
                if (response && response.data) {
                    const results = response.data;
                    const updatedMarksData = { ...marksData };

                    // Map the results to marksData format
                    results.forEach(result => {
                        const { subject, examType, marks } = result;
                        if (updatedMarksData[subject]) {
                            updatedMarksData[subject][examType] = marks;
                        } else {
                            updatedMarksData[subject] = {}
                            updatedMarksData[subject][examType] = marks;
                        }
                    });

                    setMarksData(updatedMarksData);
                }
            })
            .catch((err) => {
                //setLoading(false)
                console.error(err)
            })
    }



    const handleChangeExamType = (value) => {
        setExamType(value);
    };

    const columns = [
        { title: 'Subject', dataIndex: 'subject', key: 'subject' },
        { title: examType, dataIndex: 'marks', key: 'marks' },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => handleAnalysis(record.subject)}>Analysis</Button>
                </Space>
            ),
        },
    ];

    const data = Object.keys(marksData).map(subject => ({
        key: subject,
        subject,
        marks: marksData[subject][examType]
    }));

    const handleAnalysis = (subject) => {
        setSelectedSubject(subject);
        setShowAnalysisModal(true);
    };

    const handleCloseAnalysisModal = () => {
        setShowAnalysisModal(false);
    };

    useEffect(() => {
        // Map through examTypes to generate prevMarksDataGraph
        const prevMarksDataGraph = Object.keys(marksData).map(subject => {
            const prevMarks = {}; // Object to store marks for previous exam types
            examTypes.forEach(exam => {
                if (exam !== examType) { // Exclude the current exam type
                    prevMarks[exam] = marksData[subject][exam]; // Assign marks for previous exam types
                }
            });

            return {
                subject,
                [examType]: marksData[subject][examType],
                ...prevMarks // Spread previous exam marks into the object
            };
        });

        // Set prevMarksDataGraph in state
        setPrevMarksData(prevMarksDataGraph);
    }, [examType, marksData]);


    return (
        <div>

            <Button type="primary" onClick={() => setShowResultModal(true)} style={{ float: 'right', marginBottom: '10px' }}>Add Results</Button> {/* Add button for adding results */}
            <Select defaultValue={examType} onChange={handleChangeExamType}>
                <Option value="Midterm">Midterm</Option>
                <Option value="Final">Final</Option>
                <Option value="FA1">FA1</Option>
                <Option value="FA2">FA2</Option>
            </Select>
            <Table dataSource={data} columns={columns} />

            <Modal
                title={`Analysis for ${selectedSubject}`}
                visible={showAnalysisModal}
                onCancel={handleCloseAnalysisModal}
                footer={null}
            >
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={prevMarksData.filter(item => item.subject === selectedSubject)}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="examType" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />

                        {examTypes.map((examType, index) => (
                            <Line
                                key={index}
                                type="monotone"
                                dataKey={examType}
                                stroke={colors[index % colors.length]} // Choose color dynamically based on index
                            />
                        ))}
                    </LineChart>

                </ResponsiveContainer>
                <PieChart />

            </Modal>



            {/* Modal for adding result */}
            <Modal
                title="Add Result"
                visible={showResultModal}
                onCancel={() => setShowResultModal(false)}
                footer={null}
            >
                {/* Render the result form component */}
                <ResultForm
                    studentDetails={studentDetails}
                    onSuccess={() => {
                        setShowResultModal(false); // Hide the modal on successful submission
                        // You can perform any additional actions upon successful submission
                        fetchStudentResults()
                    }}
                />
            </Modal>
        </div>
    );
};

export default StudentResults;