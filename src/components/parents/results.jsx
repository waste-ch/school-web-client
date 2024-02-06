import React, { useState } from 'react';
import { Table, Tag, Select } from 'antd';

const { Option } = Select;

const Results = () => {
  const [selectedExamType, setSelectedExamType] = useState('midterm'); // Default to 'midterm'

  const handleExamTypeChange = (value) => {
    setSelectedExamType(value);
  };

  const data = [
    {
      key: '1',
      subject: 'Math',
      score: 85,
    },
    {
      key: '2',
      subject: 'Science',
      score: 92,
    },
    {
      key: '3',
      subject: 'History',
      score: 78,
    },
    {
      key: '4',
      subject: 'English',
      score: 88,
    },
    // Add more data as needed
  ];

  const totalMarks = data.reduce((sum, subject) => sum + subject.score, 0);
  const remarks = totalMarks >= 80 ? 'Excellent' : totalMarks >= 60 ? 'Good' : 'Needs Improvement';

  // Assigning grades based on a common grading scale, you can customize this based on your grading system
  const calculateGrade = (marks) => {
    if (marks >= 90) return 'A+';
    else if (marks >= 80) return 'A';
    else if (marks >= 70) return 'B';
    else if (marks >= 60) return 'C';
    else return 'F';
  };

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      render: (score) => (
        <>
          {score >= 80 ? (
            <Tag color="green">{score}</Tag>
          ) : score >= 60 ? (
            <Tag color="orange">{score}</Tag>
          ) : (
            <Tag color="red">{score}</Tag>
          )}
        </>
      ),
    },
    {
      title: 'Grade',
      dataIndex: 'score',
      key: 'grade',
      render: (score) => <span>{calculateGrade(score)}</span>,
    },
  ];

  return (
    <div>
      <Select
        style={{ width: 120, marginBottom: 16 }}
        value={selectedExamType}
        onChange={handleExamTypeChange}
      >
        <Option value="midterm">Midterm</Option>
        <Option value="final">Final</Option>
        {/* Add more exam types as needed */}
      </Select>

      <Table dataSource={data} columns={columns} />

      <div style={{ marginTop: 20 }}>
        <h3>Overall Performance</h3>
        <p>Total Marks: {totalMarks}</p>
        <p>Grade: {calculateGrade(totalMarks)}</p>
        <p>Remarks: {remarks}</p>
      </div>

      {/* Add additional insights or details based on the selected exam type */}
      {selectedExamType === 'midterm' && (
        <div>
          <h3>Midterm Exam Insights</h3>
          <p>Midterm exams are an important assessment...</p>
          {/* Add more details */}
        </div>
      )}

      {selectedExamType === 'final' && (
        <div>
          <h3>Final Exam Insights</h3>
          <p>Final exams cover the entire course material...</p>
          {/* Add more details */}
        </div>
      )}
    </div>
  );
};

export default Results;
