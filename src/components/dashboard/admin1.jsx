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
import Expenceschart from '../admin/expenses_chart';
//import Admin from '../admin/admin';
import StudentAnalysis from '../students/students';
import ParentMain from '../parents/parents';
import AdminResults from './adminresults';
import Event from '../teachers/main/Events';
import Attend from '../teachers/main/Attendance';
import TransportForm from './transport';
import EarningForm from '../admin/earning';
import NonTeaching from '../admin/non_teaching';
import Uploadbooks from '../teachers/admin_teacher_lib';
import Photoupload from '../teachers/main/teachers_gallery';
import Timetable from '../teachers/main/timetable';
import DailyRoutine from '../teachers/main/teachers_schedule';
import FeedbackReceivedPage from '../admin/admin_feedback';
import SchoolNewsPage from '../admin/school_news';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const subMenuItems = [
  /*{
    key: 'dashboard-admin',
    icon: <UserOutlined />,
    label: 'Admin',
  },*/
  {
    key: 'dashboard-students',
    icon: <SolutionOutlined />,
    label: 'Students',
  },
  {
    key: 'students',
    icon: <UsergroupAddOutlined />,
    label: 'Parents',
  },
  {
    key: 'Timetable',
    label: 'TimeTable',
  },
  {
    key: 'Results',
    icon: <TeamOutlined />,
    label: 'Results',
  },
  {
    key: 'Expences',
    icon: <FormOutlined />,
    label: 'Expences',
  },
  {
    key: 'Event',
    label: 'Event',
  },
  {
    key: 'Attend',
    label: 'Attendece',
  },
  {
    key: 'Transport',
    label: 'Transport',
  },
  {
    key: 'SchoolNewsPage',
    label: 'SchoolNews',
  },
  {
    key: 'EarningForm',
    label: 'EarningForm',
  },
  {
    key: 'NonTeaching',
    label: 'Non Teaching',
  },
  {
    key: 'Hostel',
    label: 'Hostel',
  },
  {
    key: 'Uploadbooks',
    label: '📚Library',
  },
  {
    key: 'Photoupload',
    label: 'Gallary',
  },
  {
    key: 'DailyRoutine',
    label: 'DailyRoutine',
  },
  {
    key: 'FeedbackReceivedPage',
    label: 'Feedback',
  },
]
/*
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
*/
const Dash = () => {
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

          {(selectedTab === 'dashboard-students') && <StudentAnalysis />}
          {(selectedTab === 'students') && <ParentMain />}
          {(selectedTab === 'Results') && <AdminResults />}
          {(selectedTab === 'Expences') && <Expenceschart />}
          {(selectedTab === 'Event') && <Event />}
          {(selectedTab === 'Attend') && <Attend />}
          {(selectedTab === 'Transport') && <TransportForm />}
          {(selectedTab === 'EarningForm') && <EarningForm />}
          {(selectedTab === 'NonTeaching') && <NonTeaching />}
          {(selectedTab === 'Uploadbooks') && <Uploadbooks />}
          {(selectedTab === 'Photoupload') && <Photoupload />}
          {(selectedTab === 'Timetable') && <Timetable />}
          {(selectedTab === 'DailyRoutine') && <DailyRoutine />}
          {(selectedTab === 'SchoolNewsPage') && <SchoolNewsPage />}
          {(selectedTab === 'FeedbackReceivedPage') && <FeedbackReceivedPage />}





        </Content>
      </Layout>
    </Layout>
  );
};
export default Dash;