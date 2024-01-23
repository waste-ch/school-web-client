import React from 'react';
import { Tabs } from 'antd';
import ExamSchedule from './exam_schedule';
import ExamGrades from './exam_grades';

const { TabPane } = Tabs;

const ParentTabs = () => {
    return (
        <Tabs defaultActiveKey="1" tabBarGutter={30}>
            <TabPane tab="Exam Schedule" key="1">
                <ExamSchedule />
            </TabPane>
            <TabPane tab="Exam Grades" key="2">
                <ExamGrades />
            </TabPane>
        </Tabs>
    );
}

export default ParentTabs;
