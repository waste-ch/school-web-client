import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import TeacherClass from "./teacherclass";
import TeacherAllStd from "./TeachAllStd";
import Timetable from "./timetable";
import Results from "./mainresults";
import Attend from "./Attend";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  UserOutlined,
  FormOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import Event from "./Events";
import StudentDetails from "../../students/studentdetails";
import TeacherPayments from "../teacher_payments";
import StudentMarks from "./stuallmarks";
import Homework from "./Homework";
import Uploadbooks from "../adminteacherlib";
import Photoupload from "./teachergallary";
import DailyRoutine from "./teacherschedule";
import SchoolNewsPage from "../../admin/adminews";
const { Header, Sider, Content } = Layout;


//const { Menu } = Menu;

const menuItems = [
  {
    key: 'TeachAllStd',
    icon: <SolutionOutlined/>,
    label: 'TeachAllStd',
  },
  {
    key:'Results',
    label:'Deatailed Analysis',
  },
  {
    key:'IndividualResults',
    icon:'🤨',
    label:'IndividualResults',
  },
  {
    key:'Event',
    icon:"📢",
    label:'Events',
  },
  {
    key:'StudentDetails',
    icon:<UserOutlined/>,
    label:'StudentDetails',
  },
  {
    key:'DailyRoutine',
    label:'DailyRoutine',
  },
  {
    key:'Timetable',
    icon:<FormOutlined/>,
    label:'Timetable',
  },
  {
    key:'TeacherProfile',
    icon:<UserOutlined/>,
    label:'TeacherProfile',
  },
  {
    key:'Att',
    icon:<UserOutlined/>,
    label:'Attendence',
  },
  {
    key:'Homework',
    icon:<FormOutlined/>,
    label:'Home Work',
  },
  {
    key:'Uploadbooks',
    label:'Library',
  },
  {
    key:'Photoupload',
    label:'Gallary',
  },
  {
    key:'SchoolNewsPage',
    label:'SchoolNews',
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
            className='logo-class'
            src="https://img.freepik.com/free-vector/education-pen-concept_98292-5144.jpg?w=1480&t=st=1704774064~exp=1704774664~hmac=7e2a59f40e49bc687930287c3e4bea98cd700ee6f1ff3de19020cb2b8b4983f2"
            alt="Description of the image"
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

          {(selectedTab === 'TeachAllStd') && <TeacherAllStd/>}
          {(selectedTab === 'Event') && <Event/>}
          {(selectedTab === 'StudentDetails') && <StudentDetails/>}
          {(selectedTab === 'Timetable') && <Timetable/>}
          {(selectedTab === 'Results') && <Results/>}
          {(selectedTab === 'IndividualResults') && <StudentMarks/>}
          {(selectedTab === 'TeacherProfile') && <TeacherPayments/>}
          {(selectedTab === 'Att') && <Attend/>}
          {(selectedTab === 'Homework') && <Homework/>}
          {(selectedTab === 'Uploadbooks') && <Uploadbooks/>}
          {(selectedTab === 'Photoupload') && <Photoupload/>}
          {(selectedTab === 'DailyRoutine') && <DailyRoutine/>}
          {(selectedTab === 'SchoolNewsPage') && <SchoolNewsPage/>} 


          
          

        </Content>
      </Layout>
    </Layout>
  );
};
export default MainTeacher;