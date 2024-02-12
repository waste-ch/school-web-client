import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    SolutionOutlined,
    UsergroupAddOutlined,
    TeamOutlined,
    FormOutlined,
    ClockCircleOutlined,
    FileTextOutlined,
    CalendarOutlined,
    NotificationOutlined,
    BookOutlined,
    MessageOutlined,
    ScheduleOutlined,
    DollarCircleOutlined,
    //BusOutlined,
    ProfileOutlined,
    StarOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import { useNavigate } from 'react-router-dom';

import ExpensesChart from './expenses_chart';
import EarningForm from './earning';
import NonTeaching from './non_teaching';
import AdminFeedback from './admin_feedback';
import SchoolNews from './school_news';
import AdminResults from './admin_results';
import TransportDetails from './transport';


import AllStudents from '../students/student_details';
import AllTeachers from '../teachers/all_teachers';
import AllClasses from '../class/all_classes';
import AllParents from '../parents/all_parents'
import Library from './library'
import Feedback from '../feedbacks'

//import ParentMain from '../parents/student_attendance';

import Events from '../teachers/main/Events';
import Attendance from '../teachers/main/Attendance';
import UploadBooks from '../teachers/admin_teacher_lib';
import PhotoUpload from '../teachers/main/teachers_gallery';
import Timetable from '../teachers/main/timetable';
import DailyRoutine from '../teachers/main/teachers_schedule';

import './admin.css';

const { Header, Sider, Content } = Layout;

const menuItems = [
    /*{
      key: 'dashboard-admin',
      icon: <UserOutlined />,
      label: 'Admin',
    },*/
    {
        key: 'students',
        icon: <SolutionOutlined />,
        label: 'Students',
    },
    {
        key: 'teachers',
        icon: <UserOutlined />,
        label: 'Teachers',
    },
    {
        key: 'timeTable',
        label: 'Time Table',
        icon: <ClockCircleOutlined />
    },
    {
        key: 'results',
        icon: <TeamOutlined />,
        label: 'Results',
    },
    {
        key: 'events',
        label: 'Events',
        icon: <CalendarOutlined />,
    },
    {
        key: 'class',
        label: 'Class',
        icon: <FileTextOutlined />,
    },
    {
        key: 'attendance',
        label: 'Attendance',
        icon: <NotificationOutlined />,
    },
    {
        key: 'transport',
        label: 'Transport',
        icon: <StarOutlined />,
    },
    {
        key: 'parents',
        icon: <UsergroupAddOutlined />,
        label: 'Parents',
    },
    {
        key: 'schoolNews',
        label: 'School News',
        icon: <MessageOutlined />,
    },
    {
        key: 'library',
        label: 'Library',
        icon: <BookOutlined />,
    },
    {
        key: 'feedback',
        label: 'Feedback',
        icon: <StarOutlined />,
    },
    {
        key: 'dailyRoutine',
        label: 'Daily Routine',
        icon: <ScheduleOutlined />,
    },
    {
        key: 'earningForm',
        label: 'Earning Form',
        icon: <DollarCircleOutlined />,
    },
    {
        key: 'expenses',
        icon: <FormOutlined />,
        label: 'Expenses',
    },
    {
        key: 'nonTeaching',
        label: 'Non Teaching',
        icon: <ProfileOutlined />,
    },
    //{
    //    key: 'gallery',
    //    label: 'Gallery',
    //    icon: <UserOutlined />,
    //}
]
const AdminDashboard = () => {
    const history = useNavigate();
    const [selectedTab, setSelectedTab] = useState('students')

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
                    defaultSelectedKeys={['students']}
                    items={menuItems}
                    selectedKeys={[selectedTab]}
                    onClick={handleMenuClick}
                />
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
                    <span className='welcome-text'>Hello Admin, Welcome</span>
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

                    {(selectedTab === 'students') && <AllStudents />}
                    {(selectedTab === 'teachers') && <AllTeachers />}
                    {(selectedTab === 'timeTable') && <Timetable />}
                    {(selectedTab === 'results') && <AdminResults />}
                    {(selectedTab === 'events') && <Events />}
                    {(selectedTab === 'class') && <AllClasses />}
                    {(selectedTab === 'attendance') && <Attendance />}
                    {(selectedTab === 'transport') && <TransportDetails />}
                    {(selectedTab === 'parents') && <AllParents />}
                    {(selectedTab === 'schoolNews') && <SchoolNews />}
                    {(selectedTab === 'library') && <Library />}
                    {(selectedTab === 'feedback') && <Feedback />}
                    {(selectedTab === 'dailyRoutine') && <DailyRoutine />}




                    {(selectedTab === 'expenses') && <ExpensesChart />}
                    {(selectedTab === 'earningForm') && <EarningForm />}
                    {(selectedTab === 'nonTeaching') && <NonTeaching />}
                    {(selectedTab === 'uploadBooks') && <UploadBooks />}
                    {(selectedTab === 'PhotoUpload') && <PhotoUpload />}
                    {(selectedTab === 'AdminFeedback') && <AdminFeedback />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;