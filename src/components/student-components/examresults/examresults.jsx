import React from "react";
import { Row, Col, Card } from "antd";
import { Column, Pie, Area } from "@ant-design/plots";

const dataBar = [
  { subject: "Telugu", Marks: 83 },
  { subject: "Hindi", Marks: 91 },
  { subject: "English", Marks: 75 },
  { subject: "Maths", Marks: 98 },
  { subject: "Science", Marks: 88 },
  // { year: "2020", expenses: 15000 },

  // Add more data as needed
];

const data = [
  {
    type: "Grade",
    value: 17,
  },
  {
    type: "Percentage",
    value: 83,
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
  { subject: "FA 1", Marks: 83 },
  { subject: "FA2", Marks: 91 },
  { subject: "pre-final", Marks: 75 },
  { subject: "FA3", Marks: 98 },
  { subject: "FA4", Marks: 88 },
  { subject: "Final", Marks: 88 },

  // Add more data as needed
];
const config = {
  data: dataMountain,
  xField: "subject",
  yField: "Marks",
};

const ExamResults = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={8} key={"subjects"}>
          <Card title="Results">
            <Area {...config} />
          </Card>
        </Col>
        <Col span={8} key={"Marks"}>
          <Card title="Marks">
            <Column data={dataBar} xField="subject" yField="Marks" />
          </Card>
        </Col>
        <Col span={8} key={"Percentage"}>
          <Card title="Percentage">
            <Pie {...pieConfig} />
            {/*<Pie className='chart-class' {...pieChartConfig} />*/}
          </Card>
        </Col>
      </Row>
      <div>
        <div>
          <p>Total marks :580</p>
        </div>
        <div>
          <p>Grade : A+</p>
        </div>
        <div>
          <p>Rank:2</p>
        </div>
      </div>
      <div>
        <p>Remarks: Good</p>
      </div>
    </>
  );
};

export default ExamResults;
