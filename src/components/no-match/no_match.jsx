import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../header';

import './no_match.css'

const NoMatch = () => {
    return (
        <div className='no-match-component'>
            <Header />
            <Result
                status="404"
                title="404 - Page Not Found"
                subTitle="The requested page could not be found."
                extra={
                    <Link to="/">
                        <Button type="primary">Go Home</Button>
                    </Link>
                }
                style={{ height: "80vh" }}
            />
        </div>
    );
};

export default NoMatch;
