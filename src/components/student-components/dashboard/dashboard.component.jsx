import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Image } from "antd";
import "./dashboard.component.css";
import { useNavigate } from "react-router-dom";

import Attendence from "../Attendence/attendence";
import Homework from "../Homework/homework";
import ExamResults from "../examresults/examresults";
import Timetable from "../timetable/timetable";

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "Homework",
    icon: <SolutionOutlined />,
    label: "HomeWork",
  },
  {
    key: "Attendence",
    icon: <UsergroupAddOutlined />,
    label: "Attendence",
  },

  {
    key: "ExamResults",
    icon: <FormOutlined />,
    label: "Exam Results",
  },
  {
    key: "Timetable",
    icon: <FormOutlined />,
    label: "Timetable",
  },
  {
    key: "Gallery",
    icon: <FormOutlined />,
    label: "Gallery",
  },
  {
    key: "Schoolnews",
    icon: <FormOutlined />,
    label: "Schoolnews",
  },
  {
    key: "Eventss",
    icon: <FormOutlined />,
    label: "Events",
  },
];

const StudentDashboard = () => {
  const history = useNavigate();
  const [selectedTab, setSelectedTab] = useState("dashboard-admin");

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (data) => {
    setSelectedTab(data.key);
    console.log(data);
  };

  const handleLogout = () => {
    history("/");
  };

  return (
    <Layout className="dashboard-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          {/*TODO: change with original logo*/}
          <Image
            className="logo-class"
            src="https://img.freepik.com/free-vector/education-pen-concept_98292-5144.jpg?w=1480&t=st=1704774064~exp=1704774664~hmac=7e2a59f40e49bc687930287c3e4bea98cd700ee6f1ff3de19020cb2b8b4983f2"
            alt="Description of the image"
            style={{ width: "100%" }}
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedTab]}
          onClick={handleMenuClick}
          defaultSelectedKeys={["dashboard-admin"]}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="header-class"
          style={{
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="button-class"
          />
          <span className="welcome-text">Welcome</span>
          <Button
            type="primary"
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>
        <Content
          className="content-class"
          style={{
            background: colorBgContainer,
          }}
        >
          {/* <Attendence /> */}
          {selectedTab === "Attendence" && <Attendence />}
          {selectedTab === "Gallery" && ""}
          {selectedTab === "Homework" && <Homework />}
          {selectedTab === "ExamResults" && <ExamResults />}
          {selectedTab === "Timetable" && <Timetable />}

          {/* {selectedTab === "students" && <Students />}
          {selectedTab === "dashboard-parents" && <ParentDetails />}
         
          {selectedTab === "dashboard-teachers" && <TeacherDetails />}
          {selectedTab === "teachers" && <Teachers />}
          
          */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default StudentDashboard;
