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
import Event from '../teachers/maint/Events';
import AllStudentsTab from './all_students';
import StudentAnalysis from '../students/students';
import Timetable from '../teachers/maint/timetable';
import FeePage from '../parents/fee';
import Results from '../parents/results';
import StudentHomework from './Std_Homework';
const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const subMenuItems = [
  {
    key: 'AllStudentsTab',
    icon: <UserOutlined />,
    label: 'AllStudentsTab',
  },
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
    key:'Timetable',
    label:'Timetable',
  },
  {
    key:'Fee',
    label:'Fee',
  },
  {
    key:'Results',
    label:'Results',
  },
  {
    key:'StudentHomework',
    label:'StudentHomework',
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
          {(selectedTab === 'AllStudentsTab') && <AllStudentsTab/>}
          {(selectedTab === 'StudentAnalysis') && <StudentAnalysis/>}
          {(selectedTab === 'Event') && <Event/>}
          {(selectedTab === 'Timetable') && <Timetable/>}
          {(selectedTab === 'Fee') && <FeePage />}
          {(selectedTab === 'Results') && <Results />}
          {(selectedTab === 'StudentHomework') && <StudentHomework />}



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