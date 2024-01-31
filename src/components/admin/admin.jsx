import { Avatar, Calendar, Card, Typography } from "antd";
import {
  MoneyCollectOutlined,
  SolutionOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import AdminCharts from "./admin_charts";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const cardData = [
  {
    key: "students",
    title: "Students",
    route: "/student",
    value: 200,
    icon: <SolutionOutlined />,
  },
  {
    key: "teachers",
    title: "Teachers",
    route: "/teachers",
    value: 20,
    icon: <TeamOutlined />,
  },
  {
    key: "parents",
    title: "Parents",
    route: "/parents",
    value: 100,
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "earnings",
    title: "Earnings",
    route: "/earnings",
    value: 100,
    icon: <MoneyCollectOutlined />,
  },
];

const CardRender = ({ item }) => {
  const { key, icon, title, value, route } = item;
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      onClick={() => {
        navigate(route);
      }}
      style={{
        width: "25%",
        margin: "0% 1%",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      key={key}
    >
      <Card.Meta
        avatar={
          <Avatar
            icon={icon}
            size={50}
            style={{ fontSize: "24px", marginRight: "10px" }}
          />
        }
        title={title}
        description={value}
      />
    </Card>
  );
};

const Admin = () => {
  return (
    <>
      <Title level={2}>Admin</Title>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          maxHeight: "6rem",
        }}
      >
        {cardData.map((item) => (
          <CardRender item={item} />
        ))}
      </div>
      <AdminCharts />
      <Card title="Event Calender" style={{ width: "40%" }}>
        <Calendar />
      </Card>
      {/*<Table
          columns={columns}
          rowKey={'email'}
          dataSource={data}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />*/}
    </>
  );
};

export default Admin;
