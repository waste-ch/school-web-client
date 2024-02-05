import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const PTabs = () => {
    return (
        <Tabs defaultActiveKey="1" tabBarGutter={30}>
            <TabPane tab="mykids" key="1">
                <mykids/>
            </TabPane>
        </Tabs>
    );
}
export default PTabs;
