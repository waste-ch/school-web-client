import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  UserOutlined,
  //FormOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
//import './dashboard.component.css';
import { useNavigate } from 'react-router-dom';
//import StudentDetails from '../students/students'
//import Exam from '../exam'
import './std.css'
import FeePaymentForm from './fee'
import PTabs from './p_tabs'
import Mykids from './mykids'
import Attendence from './attendence';
import Results from './results';
import Separateresults from './separateresults';
import StudentHomework from '../students/Std_Homework';
import Gallery from './gallary';
import Timetable from '../students/studentexamtimetable';
import SchoolNews from '../students/schoolnews';
const { Header, Sider, Content } = Layout;


const { SubMenu } = Menu;

const menuItems = [
  {
    key: 'mykids',
    icon: <SolutionOutlined />,
    label: 'Mykids',
  },
  {
    key: 'Results',
    icon: <UserOutlined />,
    label: 'Results',
  },
  {
    key: 'Separateresults',
    label: 'Separateresults',
  },
  {
    key: 'fee',
    label: 'Fee',
  },
  {
    key: 'attendence',
    label: 'Attendencee',
  },
  {
    key: 'StudentHomework',
    label: 'StudentHomework',
  },
  {
    key: 'SchoolNews',
    label: 'SchoolNews',
  },
  {
    key: 'Gallery',
    label: 'Gallery',
  },
  {
    key: 'Timetable',
    label: 'Timetable',
  },
]
const ParentMain = () => {
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
          <SubMenu key="student details" icon={<UserOutlined />} title="student details">
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

          {(selectedTab === 'fee') && <FeePaymentForm />}
          {(selectedTab === 'ptabs') && <PTabs />}
          {(selectedTab === 'mykids') && <Mykids />}
          {(selectedTab === 'attendence') && <Attendence />}
          {(selectedTab === 'Results') && <Results />}
          {(selectedTab === 'Separateresults') && <Separateresults />}
          {(selectedTab === 'StudentHomework') && <StudentHomework />}
          {(selectedTab === 'Gallery') && <Gallery />}
          {(selectedTab === 'Timetable') && <Timetable />}
          {(selectedTab === 'SchoolNews') && <SchoolNews />}



        </Content>
      </Layout>
    </Layout>
  );
};
export default ParentMain;

