import React from "react";
import { Row, Col, Card } from "antd";
import { Column, Pie, Area } from "@ant-design/plots";

const dataBar = [
  { year: "2019", expenses: 12000 },
  { year: "2020", expenses: 15000 },
  { year: "2021", expenses: 18000 },
  { year: "2022", expenses: 20000 },
  // Add more data as needed
];

const data = [
  {
    type: "Male",
    value: 27,
  },
  {
    type: "Female",
    value: 25,
  },
];
const pieConfig = {
  forceFit: true,
  title: {
    visible: true,
    text: "Multi-color pie chart",
  },
  description: {
    visible: true,
    text: "hi",
  },
  radius: 0.8,
  data,
  angleField: "value",
  colorField: "type",
  label: {
    visible: true,
    type: "inner",
  },
};

const dataMountain = [
  { year: "2021", totalCollections: 30000, feesCollections: 15000 },
  { year: "2022", totalCollections: 45000, feesCollections: 20000 },
  // Add more data as needed
];
const config = {
  data: dataMountain,
  xField: "year",
  yField: "totalCollections",
};

const AdminCharts = () => {
  return (
    <Row gutter={16}>
      <Col span={8} key={"earnings"}>
        <Card title="Earnings">
          <Area {...config} />
        </Card>
      </Col>
      <Col span={8} key={"Expenses"}>
        <Card title="Expenses">
          <Column data={dataBar} xField="year" yField="expenses" />
        </Card>
      </Col>
      <Col span={8} key={"Students"}>
        <Card title="Students">
          <Pie {...pieConfig} />
          {/*<Pie className='chart-class' {...pieChartConfig} />*/}
        </Card>
      </Col>
    </Row>
  );
};

export default AdminCharts;
