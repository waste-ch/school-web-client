import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { Column, Pie, Area } from '@ant-design/plots';
import api from '../../axios-config';



const dataBar = [
    { year: '2019', expenses: 12000 },
    { year: '2020', expenses: 15000 },
    { year: '2021', expenses: 18000 },
    { year: '2022', expenses: 20000 },
    // Add more data as needed
];

const data = [
    {
        type: 'Male',
        value: 27,
    },
    {
        type: 'Female',
        value: 25,
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




const AdminCharts = () => {
    const [earnings, setEarnings] = useState([]);

    useEffect(() => {
        fetchEarnings()
    }, [])

    const fetchEarnings = () => {
        return api.get('/earnings/fetch')
            .then((response) => {
                if (response && response.data) {
                    const data = response.data.map(val => ({ year: new Date(val.earningDate).getFullYear(), totalCollections: val.amountEarned }))
                    setEarnings(data || [])
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <Row gutter={16}>
            <Col span={8} key={'earnings'}>
                <Card title="Earnings">
                    <Area
                        data={earnings}
                        xField='year'
                        yField='totalCollections'
                    />
                </Card>
            </Col>
            <Col span={8} key={'Expenses'}>
                <Card title="Expenses">
                    <Column data={dataBar} xField="year" yField="expenses" />
                </Card>
            </Col>
            <Col span={8} key={'Students'}>
                <Card title="Students">
                    <Pie {...pieConfig} />
                    {/*<Pie className='chart-class' {...pieChartConfig} />*/}
                </Card>
            </Col>
        </Row>
    );
};

export default AdminCharts;
