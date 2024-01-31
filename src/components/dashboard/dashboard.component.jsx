import React, { useState } from "react";
import {
  FormOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  SolutionOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, Menu, Popover, theme } from "antd";
import "./dashboard.component.css";
import { useNavigate } from "react-router-dom";

import Admin from "../admin";
import Students from "../students";
import StudentDetails from "../students/students";
import Parents from "../parents";
import ParentDetails from "../parents/parents";
import Teachers from "../teachers";
import TeacherDetails from "../teachers/teachers";
import Exam from "../exam";
import { useAuthContext } from "../../context/auth-context";

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const subMenuItems = [
  {
    key: "dashboard-admin",
    icon: <UserOutlined />,
    label: "Admin",
  },
  {
    key: "dashboard-students",
    icon: <SolutionOutlined />,
    label: "Students",
  },
  {
    key: "dashboard-parents",
    icon: <UsergroupAddOutlined />,
    label: "Parents",
  },
  {
    key: "dashboard-teachers",
    icon: <TeamOutlined />,
    label: "Teachers",
  },
];

const menuItems = [
  {
    key: "students",
    icon: <SolutionOutlined />,
    label: "Students",
  },
  {
    key: "parents",
    icon: <UsergroupAddOutlined />,
    label: "Parents",
  },
  {
    key: "teachers",
    icon: <TeamOutlined />,
    label: "Teachers",
  },
  {
    key: "exam",
    icon: <FormOutlined />,
    label: "Exam",
  },
  {
    key: "Results",
    icon: <FormOutlined />,
    label: "Results",
  },
];

const App = () => {
  const history = useNavigate();
  const { userDetails } = useAuthContext();
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

  const content = (
    <>
      <p>My Profile</p>
      <Button type={"primary"} onClick={handleLogout}>
        Logout
      </Button>
    </>
  );

  return (
    <Layout className="dashboard-container">
      <Sider trigger={null} collapsible collapsed={collapsed} reverseArrow>
        <div className="demo-logo-vertical">
          {/*TODO: change with original logo*/}
          {!collapsed && (
            <Image
              className="logo-class"
              src="https://img.freepik.com/free-vector/education-pen-concept_98292-5144.jpg?w=1480&t=st=1704774064~exp=1704774664~hmac=7e2a59f40e49bc687930287c3e4bea98cd700ee6f1ff3de19020cb2b8b4983f2"
              alt="Description of the image"
              preview={false}
            />
          )}
        </div>
        <Button
          type="primary"
          icon={collapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="button-class"
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedTab]}
          onClick={handleMenuClick}
          defaultSelectedKeys={["dashboard-admin"]}
        >
          <SubMenu key="dashboard" icon={<UserOutlined />} title="Dashboard">
            {subMenuItems.map((item) => (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={handleMenuClick}
              >
                {item.label}
              </Menu.Item>
            ))}
          </SubMenu>
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
          <span className="welcome-text">Welcome, &nbsp;</span>
          <Popover
            placement="bottom"
            title={userDetails?.username || "Guest user"}
            content={content}
          >
            {userDetails?.username || "Guest User"}
          </Popover>
        </Header>
        <Content
          className="content-class"
          style={{
            background: colorBgContainer,
          }}
        >
          {selectedTab === "dashboard-admin" && <Admin />}
          {selectedTab === "dashboard-students" && <StudentDetails />}
          {selectedTab === "students" && <Students />}
          {selectedTab === "dashboard-parents" && <ParentDetails />}
          {selectedTab === "parents" && <Parents />}
          {selectedTab === "dashboard-teachers" && <TeacherDetails />}
          {selectedTab === "teachers" && <Teachers />}
          {selectedTab === "exam" && <Exam />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
