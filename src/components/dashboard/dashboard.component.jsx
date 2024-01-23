import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  TeamOutlined, FormOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import './dashboard.component.css';
import { useNavigate } from 'react-router-dom';

import Admin from '../admin'
import Students from '../students'
import Parents from '../parents'
import Teachers from '../teachers'
import Exam from '../exam'

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const subMenuItems = [
  {
    key: 'dashboard-admin',
    icon: <UserOutlined />,
    label: 'Admin',
  },
  {
    key: 'dashboard-students',
    icon: <SolutionOutlined />,
    label: 'Students',
  },
  {
    key: 'dashboard-parents',
    icon: <UsergroupAddOutlined />,
    label: 'Parents',
  },
  {
    key: 'dashboard-teachers',
    icon: <TeamOutlined />,
    label: 'Teachers',
  },
]

const menuItems = [
  {
    key: 'students',
    icon: <SolutionOutlined />,
    label: 'Students',
  },
  {
    key: 'parents',
    icon: <UsergroupAddOutlined />,
    label: 'Parents',
  },
  {
    key: 'teachers',
    icon: <TeamOutlined />,
    label: 'Teachers',
  },
  {
    key: 'exam',
    icon: <FormOutlined />,
    label: 'Exam',
  },
]

const App = () => {
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
          {(selectedTab === 'dashboard-admin' || selectedTab === 'admin') && <Admin />}
          {(selectedTab === 'dashboard-students' || selectedTab === 'students') && <Students />}
          {(selectedTab === 'dashboard-parents' || selectedTab === 'parents') && <Parents />}
          {(selectedTab === 'dashboard-teachers' || selectedTab === 'teachers') && <Teachers />}
          {(selectedTab === 'exam') && <Exam />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

