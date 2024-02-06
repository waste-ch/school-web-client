import React from 'react';
import { Card, List, Typography, Input, } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const FeedbackReceivedPage = () => {
  const feedbacks = [
    { title: 'John Doe', description: 'Great service!' },
    { title: 'Jane Doe', description: 'Very helpful staff.' },
    // Add more feedbacks as needed
  ];

  const onSearch = value => console.log(value); // Implement your search logic here

  return (
    <Card style={{ width: 600, marginTop: 16, backgroundColor: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Feedback Received</Title>
      <Search
        placeholder="Search feedbacks"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        style={{ marginBottom: '20px' }}
      />
      <List
        itemLayout="horizontal"
        dataSource={feedbacks}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
        pagination={{
          pageSize: 10,
        }}
      />
    </Card>
  );
};

export default FeedbackReceivedPage;

