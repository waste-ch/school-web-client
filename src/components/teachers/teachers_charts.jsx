import React from 'react';
import { Row, Col, Card } from 'antd';
import { Pie } from '@ant-design/plots';



const data = [
    {
        type: 'Male Students',
        value: 1050,
    },
    {
        type: 'Female Students',
        value: 1000,
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


const TeacherCharts = () => {
    return (
        <Row gutter={16}>
            <Col span={16} key={'students'}>
                <Card title="Students">
                    <Pie {...pieConfig} />
                </Card>
            </Col>
        </Row>
    );
};

export default TeacherCharts;
