import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined, DollarOutlined, BarChartOutlined, PictureOutlined, UserOutlined, ReadOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import FeePage from './fee';
import Results from './results';
import Attendance from './attendence';
import Gallery from './gallery';
import SchoolNews from '../students/schoolnews';
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
        key: 'gallery',
        label: 'Gallery',
        icon: <PictureOutlined />,
    },
    {
        key: 'schoolNews',
        label: 'School News',
        icon: <ReadOutlined />,
    }
];
const ParentDashboard = () => {
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
                    {(selectedTab === 'gallery') && <Gallery />}
                    {(selectedTab === 'schoolNews') && <SchoolNews />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default ParentDashboard;