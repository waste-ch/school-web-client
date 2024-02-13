import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined, DollarOutlined, BarChartOutlined, BookOutlined, ScheduleOutlined, PictureOutlined, UserOutlined, ReadOutlined, MessageOutlined
  //TeamOutlined, FormOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
//import './dashboard.component.css';
import { useNavigate } from 'react-router-dom';
//import Event from '../teachers/main/Events';
//import StudentAnalysis from './students';
//import Timetable from './studentexamtimetable';
import FeePage from '../parents/fee';
import Results from '../parents/results';
import Attendance from '../parents/attendence';
import Library from './library';
import Gallery from '../parents/gallery';
import DailyRoutine from './daily_schedule';
import StudentProfile from './stdprofile';
import FeedbackPage from './feedbackform';
import SchoolNews from './schoolnews';
import HomeWork from '../teachers/main/Homework'
const { Header, Sider, Content } = Layout;


const menuItems = [
  {
    key: 'homeWork',
    label: 'Home Work',
    icon: <HomeOutlined />,
  },
  {
    key: 'fees',
    label: 'Fees',
    icon: <DollarOutlined />,
  },
  {
    key: 'results',
    label: 'Results',
    icon: <BarChartOutlined />,
  },
  {
    key: 'attendance',
    label: 'Attendance',
    icon: <UserOutlined />,
  },
  {
    key: 'library',
    label: 'Library',
    icon: <BookOutlined />,
  },
  {
    key: 'dailyRoutine',
    label: 'Daily Routine',
    icon: <ScheduleOutlined />,
  },
  {
    key: 'gallery',
    label: 'Gallery',
    icon: <PictureOutlined />,
  },
  {
    key: 'studentProfile',
    label: 'My Profile',
    icon: <UserOutlined />,
  },
  {
    key: 'schoolNews',
    label: 'School News',
    icon: <ReadOutlined />,
  },
  {
    key: 'feedback',
    label: 'Feedback',
    icon: <MessageOutlined />,
  },
];
const StudentApp = () => {
  const history = useNavigate();
  const [selectedTab, setSelectedTab] = useState('homeWork')

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
          defaultSelectedKeys={['homeWork']}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} onClick={handleMenuClick}>
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
          {(selectedTab === 'homeWork') && <HomeWork />}
          {(selectedTab === 'fees') && <FeePage />}
          {(selectedTab === 'results') && <Results />}
          {(selectedTab === 'attendance') && <Attendance />}
          {(selectedTab === 'library') && <Library />}
          {(selectedTab === 'dailyRoutine') && <DailyRoutine />}
          {(selectedTab === 'gallery') && <Gallery />}
          {(selectedTab === 'studentProfile') && <StudentProfile />}
          {(selectedTab === 'schoolNews') && <SchoolNews />}
          {(selectedTab === 'feedback') && <FeedbackPage />}



          {/*{(selectedTab === 'StudentAnalysis') && <StudentAnalysis />}
          {(selectedTab === 'Event') && <Event />}
          {(selectedTab === 'Timetable') && <Timetable />}*/}





        </Content>
      </Layout>
    </Layout>
  );
};
export default StudentApp;
/*{menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}*/