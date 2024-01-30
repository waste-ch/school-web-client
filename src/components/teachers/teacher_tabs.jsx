import React from 'react';
import { Tabs } from 'antd';
import AllTeachersTab from './all_teachers';
import TeacherDetailsTab from './teacher_info';
import TeachersFormTab from './teacher_form';
import TeacherPaymentsTab from './teacher_payments';

const { TabPane } = Tabs;

const TeacherTabs = () => {
    return (
        <Tabs defaultActiveKey="1" tabBarGutter={30}>
            <TabPane tab="All Teachers" key="1">
                <AllTeachersTab />
            </TabPane>
            <TabPane tab="Teacher Details" key="2">
                <TeacherDetailsTab />
            </TabPane>
            <TabPane tab="Add Teacher" key="3">
                <TeachersFormTab />
            </TabPane>
            <TabPane tab="Payments" key="4">
                <TeacherPaymentsTab />
            </TabPane>
        </Tabs>
    );
}

export default TeacherTabs;
