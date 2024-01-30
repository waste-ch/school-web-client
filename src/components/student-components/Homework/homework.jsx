import React from "react";
import { Table } from "antd";

const sampleData = [
  {
    id: 1,
    subject: "Maths",
    homework: "write 1 to 10 tables",
  },
  {
    id: 2,
    subject: "Science",
    homework: "Explain science project",
  },
  {
    id: 3,
    subject: "Social",
    homework: "write social project",
  },
  {
    id: 4,
    subject: "Telugu",
    homework: "write  a story",
  },
  {
    id: 5,
    subject: "English",
    homework: "write a  story",
  },
];

const columns = [
  { title: "ID", dataIndex: "id", key: "id" },

  { title: "Subject", dataIndex: "subject", key: "subject" },
  { title: "Homework", dataIndex: "homework", key: "homework" },
];

const Homework = () => {
  return (
    <Table
      dataSource={sampleData}
      columns={columns}
      pagination={false}
      bordered
    />
  );
};

export default Homework;
