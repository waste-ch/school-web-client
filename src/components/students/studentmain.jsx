import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  //TeamOutlined, FormOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
//import './dashboard.component.css';
import { useNavigate } from 'react-router-dom';
import Event from '../teachers/main/Events';
import StudentAnalysis from '../students/students';
import Timetable from './studentexamtimetable';
import FeePage from '../parents/fee';
import Results from '../parents/results';
import StudentHomework from './Std_Homework';
import Attendence from '../parents/attendence';
import Library from './library';
import Gallery from '../parents/gallary';
import DailyRoutine from './daily_schedule';
import StudentProfile from './stdprofile';
import FeedbackPage from './feedbackform';
import SchoolNews from './schoolnews';
const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const subMenuItems = [
  {
    key: 'StudentAnalysis',
    icon: <SolutionOutlined />,
    label: 'StudentAnalysis',
  },
  {
    key: 'Event',
    icon: <UsergroupAddOutlined />,
    label: 'Event',
  },
  {
    key: 'Timetable',
    label: 'Timetable',
  },
  {
    key: 'Fee',
    label: 'Fee',
  },
  {
    key: 'Results',
    label: 'Results',
  },
  {
    key: 'StudentHomework',
    label: 'StudentHomework',
  },
  {
    key: 'Attendence',
    label: 'Attendence',
  },
  {
    key: 'Library',
    label: 'Library',
  },
  {
    key: 'DailyRotuine',
    label: 'DailyRotuine',
  },
  {
    key: 'Gallery',
    label: 'Gallery',
  },
  {
    key: 'StudentProfile',
    label: 'My Profile',
  },
  {
    key: 'SchoolNews',
    label: 'SchoolNews',
  },
  {
    key: 'FeedbackPage',
    label: 'Feedback form',
  },
]
const StudentApp = () => {
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
          <SubMenu key="dashboard" icon={<UserOutlined />} title="Dashboard">
            {subMenuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} onClick={handleMenuClick}>
                {item.label}
              </Menu.Item>
            ))}
          </SubMenu>
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
          {(selectedTab === 'StudentAnalysis') && <StudentAnalysis />}
          {(selectedTab === 'Event') && <Event />}
          {(selectedTab === 'Timetable') && <Timetable />}
          {(selectedTab === 'Fee') && <FeePage />}
          {(selectedTab === 'Results') && <Results />}
          {(selectedTab === 'StudentHomework') && <StudentHomework />}
          {(selectedTab === 'Attendence') && <Attendence />}
          {(selectedTab === 'Library') && <Library />}
          {(selectedTab === 'Gallery') && <Gallery />}
          {(selectedTab === 'DailyRotuine') && <DailyRoutine />}
          {(selectedTab === 'StudentProfile') && <StudentProfile />}
          {(selectedTab === 'FeedbackPage') && <FeedbackPage />}
          {(selectedTab === 'SchoolNews') && <SchoolNews />}





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