import React from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const history = useNavigate();


    const menu = (
        <Menu>
            <Menu.Item key="admin" onClick={() => handleLogin('/admin/login')}>
                Admin Login
            </Menu.Item>
            <Menu.Item key="user" onClick={() => handleLogin('/users/login')}>
                Student Login
            </Menu.Item>
            <Menu.Item key="driver" onClick={() => handleLogin('/driver/login')}>
                Teacher Login
            </Menu.Item>
            <Menu.Item key="driver" onClick={() => handleLogin('/driver/login')}>
                Parent Login
            </Menu.Item>
        </Menu>
    );


    const handleLogin = (path) => {
        history(path);
    };

    return (
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
            <span style={{ textDecoration: 'underline', cursor: 'pointer', "marginRight": "30px" }}>Login</span>
        </Dropdown>
    );
};

//const LoginButton = () => {
//    const history = useNavigate();

//    return (
//        <span onClick={() => history('/dashboard')} style={{ textDecoration: 'underline', cursor: 'pointer', "marginRight": "30px" }}>Dashboard</span>
//    );
//};


export default LoginButton;
