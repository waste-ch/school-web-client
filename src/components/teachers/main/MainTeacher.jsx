import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import TeacherClass from "./teacherclass";
import TeacherAllStd from "./TeachAllStd";
import Timetable from "./timetable";
import Results from "./mainresults";
import Attendance from "./Attendance";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  UserOutlined,
  FormOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import Event from "./Events";
import StudentDetails from "../../students/student_details";
import TeacherPayments from "../teacher_payments";
import StudentMarks from "./stuallmarks";
import Homework from "./Homework";
import Uploadbooks from "../admin_teacher_lib";
import Photoupload from "./teachers_gallery";
import DailyRoutine from "./teachers_schedule";
import SchoolNewsPage from "../../admin/school_news";
const { Header, Sider, Content } = Layout;


//const { Menu } = Menu;

const menuItems = [
  {
    key: 'TeachAllStd',
    icon: <SolutionOutlined />,
    label: 'TeachAllStd',
  },
  {
    key: 'Results',
    label: 'Deatailed Analysis',
  },
  {
    key: 'IndividualResults',
    icon: '🤨',
    label: 'IndividualResults',
  },
  {
    key: 'Event',
    icon: "📢",
    label: 'Events',
  },
  {
    key: 'StudentDetails',
    icon: <UserOutlined />,
    label: 'StudentDetails',
  },
  {
    key: 'DailyRoutine',
    label: 'DailyRoutine',
  },
  {
    key: 'Timetable',
    icon: <FormOutlined />,
    label: 'Timetable',
  },
  {
    key: 'TeacherProfile',
    icon: <UserOutlined />,
    label: 'TeacherProfile',
  },
  {
    key: 'Att',
    icon: <UserOutlined />,
    label: 'Attendence',
  },
  {
    key: 'Homework',
    icon: <FormOutlined />,
    label: 'Home Work',
  },
  {
    key: 'Uploadbooks',
    label: 'Library',
  },
  {
    key: 'Photoupload',
    label: 'Gallary',
  },
  {
    key: 'SchoolNewsPage',
    label: 'SchoolNews',
  },
]

const MainTeacher = () => {
  const history = useNavigate();
  const [selectedTab, setSelectedTab] = useState('dashboard-admin')

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (data) => {
    setSelectedTab(data.key)
    console.log(data)
  }

  const handleLogout = () => {
    history('/')
  }
  return (
    <Layout className='dashboard-container'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
          {/*TODO: change with original logo*/}
          <Image
            className={collapsed ? 'collapsed-logo-class' : 'logo-class'}
            src={process.env.PUBLIC_URL + '/school_image.png'}
            alt="school image"
            style={{ width: '100%' }}
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedTab]}
          onClick={handleMenuClick}
          defaultSelectedKeys={['dashboard-admin']}
        >
          <Menu key="student details" icon={<UserOutlined />} title="Student Details">
          </Menu>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className='header-class'
          style={{
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='button-class'
          />
          <span className='welcome-text'>Welcome</span>
          <Button type="primary" className='logout-button' onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content
          className='content-class'
          style={{
            background: colorBgContainer,
          }}
        >

          {(selectedTab === 'TeachAllStd') && <TeacherAllStd />}
          {(selectedTab === 'Event') && <Event />}
          {(selectedTab === 'StudentDetails') && <StudentDetails />}
          {(selectedTab === 'Timetable') && <Timetable />}
          {(selectedTab === 'Results') && <Results />}
          {(selectedTab === 'IndividualResults') && <StudentMarks />}
          {(selectedTab === 'TeacherProfile') && <TeacherPayments />}
          {(selectedTab === 'Att') && <Attendance />}
          {(selectedTab === 'Homework') && <Homework />}
          {(selectedTab === 'Uploadbooks') && <Uploadbooks />}
          {(selectedTab === 'Photoupload') && <Photoupload />}
          {(selectedTab === 'DailyRoutine') && <DailyRoutine />}
          {(selectedTab === 'SchoolNewsPage') && <SchoolNewsPage />}





        </Content>
      </Layout>
    </Layout>
  );
};
export default MainTeacher;