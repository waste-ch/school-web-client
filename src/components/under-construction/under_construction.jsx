import React from 'react';
import { Result } from 'antd';

const UnderConstructionPage = () => {
    return (
        <Result
            status="warning"
            title="Page Under Construction"
            subTitle="We're working hard to bring you something amazing. Please check back soon!"
            extra={<blockquote>Stay tuned and check back soon for updates.</blockquote>}
        />
    );
};

export default UnderConstructionPage;
