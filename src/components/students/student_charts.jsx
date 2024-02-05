import React from 'react';
import { Row, Col, Card } from 'antd';
import { Pie } from '@ant-design/plots';

const data = [
    {
        type: 'Present',
        value: 50,
    },
    {
        type: 'Absent',
        value: 50,
    },

];
const pieConfig = {
    forceFit: true,
    title: {
        visible: true,
        text: 'Multi-color pie chart',
    },
    description: {
        visible: true,
        text:
            'hi',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
        visible: true,
        type: 'inner',
    },
};


const StudentCharts = () => {
    return (
        <Row gutter={16}>
            <Col span={16} key={'Attendance'}>
                <Card title="Attendance">
                    <Pie {...pieConfig} />
                </Card>
            </Col>
        </Row>
    );
};

export default StudentCharts;
