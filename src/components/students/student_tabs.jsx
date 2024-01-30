import React from 'react';
import { Tabs } from 'antd';
import AllStudentsTab from './all_students';
import StudentDetailsTab from './students';
import AdmissionFormTab from './admission_form';

const { TabPane } = Tabs;

const StudentTabs = () => {
    return (
        <Tabs defaultActiveKey="1" tabBarGutter={30}>
            <TabPane tab="All Students" key="1">
                <AllStudentsTab />
            </TabPane>
            <TabPane tab="Student Details" key="2">
                <StudentDetailsTab />
            </TabPane>
            <TabPane tab="Admission Form" key="3">
                <AdmissionFormTab />
            </TabPane>
        </Tabs>
    );
}

export default StudentTabs;
