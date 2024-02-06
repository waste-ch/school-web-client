import React from 'react';
import { Card, List, Typography } from 'antd';

const { Title, Text } = Typography;

const SchoolNews = () => {
  const newsData = [
    {
      title: 'Exciting News!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex nec odio semper volutpat.',
      date: 'February 6, 2024',
    },
    {
      title: 'Important Announcement',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      date: 'February 5, 2024',
    },
    // Add more news items as needed
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>School News</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={newsData}
        renderItem={item => (
          <List.Item>
            <Card title={item.title} extra={<Text type="secondary">{item.date}</Text>}>
              <p>{item.content}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchoolNews;
