import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//import TeacherClass from "./teacherclass";
//import TeacherAllStd from "./main/TeachAllStd";
import Timetable from "./main/timetable";
import Results from "./main/mainresults";
import Attendance from "./main/Attendance";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    FormOutlined,

    NotificationOutlined, FileTextOutlined, ReadOutlined, BookOutlined, PictureOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import Event from "./main/Events";
import StudentDetails from "../students/student_details";
//import TeacherPayments from "./teacher_payments";
//import StudentMarks from "./main/stuallmarks";
import Homework from "./main/Homework";
import Library from "./admin_teacher_lib";
import Photoupload from "./main/teachers_gallery";
//import DailyRoutine from "./main/teachers_schedule";
//import SchoolNewsPage from "../admin/school_news";
const { Header, Sider, Content } = Layout;


const menuItems = [
    {
        key: 'timeTable',
        icon: <FormOutlined />,
        label: 'Timetable',
    },
    {
        key: 'events',
        icon: <NotificationOutlined />,
        label: 'Events',
    },
    {
        key: 'attendance',
        icon: <UserOutlined />,
        label: 'Attendance',
    },
    {
        key: 'results',
        icon: <FileTextOutlined />,
        label: 'Results',
    },
    {
        key: 'studentDetails',
        icon: <UserOutlined />,
        label: 'Student Details',
    },
    {
        key: 'homework',
        icon: <ReadOutlined />,
        label: 'Homework',
    },
    {
        key: 'library',
        icon: <BookOutlined />,
        label: 'Library',
    },
    {
        key: 'gallery',
        icon: <PictureOutlined />,
        label: 'Gallery',
    }
];

const TeachersDashboard = () => {
    const history = useNavigate();
    const [selectedTab, setSelectedTab] = useState('timeTable')

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
                    defaultSelectedKeys={['timeTable']}
                >
                    <Menu key="teacherDetails" icon={<UserOutlined />} title="Teacher Details">
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
                    {(selectedTab === 'timeTable') && <Timetable />}
                    {(selectedTab === 'events') && <Event />}
                    {(selectedTab === 'attendance') && <Attendance />}
                    {(selectedTab === 'results') && <Results />}
                    {(selectedTab === 'studentDetails') && <StudentDetails />}
                    {(selectedTab === 'homework') && <Homework />}
                    {(selectedTab === 'library') && <Library />}
                    {(selectedTab === 'gallery') && <Photoupload />}


                    {/*{(selectedTab === 'TeachAllStd') && <TeacherAllStd />}
                    {(selectedTab === 'IndividualResults') && <StudentMarks />}
                    {(selectedTab === 'TeacherProfile') && <TeacherPayments />}
                    {(selectedTab === 'DailyRoutine') && <DailyRoutine />}
                    {(selectedTab === 'SchoolNewsPage') && <SchoolNewsPage />}*/}
                </Content>
            </Layout>
        </Layout>
    );
};
export default TeachersDashboard;