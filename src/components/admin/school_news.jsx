import React from 'react';
import { Card, List, Typography, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Title, Text } = Typography;

const newsData = [
  {
    id: 1,
    title: 'Exciting News!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex nec odio semper volutpat.',
    date: moment('February 6, 2024', 'MMMM D, YYYY'),
    editing: false,
  },
  {
    id: 2,
    title: 'Important Announcement',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    date: moment('February 5, 2024', 'MMMM D, YYYY'),
    editing: false,
  },
  // Add more news items as needed
]

const SchoolNewsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>School News</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={newsData}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.title}
              extra={
                <>
                  <Text type="secondary">{item.date.format('MMMM D, YYYY')}</Text>
                  <Button
                    icon={<EditOutlined />}
                    style={{ marginLeft: 8 }}
                  />
                </>
              }
            >
              <p>{item.content}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchoolNewsPage;
