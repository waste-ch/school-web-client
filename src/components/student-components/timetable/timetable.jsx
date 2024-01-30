import React from "react";
import { Table } from "antd";

const sampleData = [
  {
    id: 1,
    time: "1.00",
    subject: "Maths",

    homework: "write 1 to 10 tables",
  },
  {
    id: 2,
    time: "1.00",
    subject: "Science",
    homework: "Explain science project",
  },
  {
    id: 3,
    time: "1.00",
    subject: "Social",
    homework: "write social project",
  },
  {
    id: 4,
    time: "1.00",
    subject: "Telugu",
    homework: "write  a story",
  },
  {
    id: 5,
    time: "1.00",
    subject: "English",
    homework: "write a  story",
  },
];

const columns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "time", dataIndex: "time", key: "time" },

  { title: "Subject", dataIndex: "subject", key: "subject" },
  { title: "Homework", dataIndex: "homework", key: "homework" },
];

const Timetable = () => {
  return (
    <Table
      dataSource={sampleData}
      columns={columns}
      pagination={false}
      bordered
    />
  );
};

export default Timetable;
