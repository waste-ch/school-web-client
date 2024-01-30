import React from 'react';
import { Tabs } from 'antd';
import AllParents from './all_parents';
import ParentFormTab from './parent_form';

const { TabPane } = Tabs;

const ParentTabs = () => {
    return (
        <Tabs defaultActiveKey="1" tabBarGutter={30}>
            <TabPane tab="All Parents" key="1">
                <AllParents />
            </TabPane>
            <TabPane tab="Add Parent" key="3">
                <ParentFormTab />
            </TabPane>
        </Tabs>
    );
}

export default ParentTabs;
