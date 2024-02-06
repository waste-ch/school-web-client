import React, { useState } from 'react';
import { Card, List, Typography, Button, Input, DatePicker } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Title, Text } = Typography;

const SchoolNewsPage = () => {
  const [newsData, setNewsData] = useState([
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
  ]);

  const handleEdit = (id) => {
    const updatedNewsData = newsData.map(item => {
      if (item.id === id) {
        return { ...item, editing: true };
      }
      return item;
    });
    setNewsData(updatedNewsData);
  };

  const handleSave = (id) => {
    const updatedNewsData = newsData.map(item => {
      if (item.id === id) {
        return { ...item, editing: false };
      }
      return item;
    });
    setNewsData(updatedNewsData);
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedNewsData = newsData.map(item => {
      if (item.id === id) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setNewsData(updatedNewsData);
  };

  const handleDateChange = (date, dateString, id) => {
    const updatedNewsData = newsData.map(item => {
      if (item.id === id) {
        return { ...item, date: moment(dateString, 'MMMM D, YYYY') };
      }
      return item;
    });
    setNewsData(updatedNewsData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>School News</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={newsData}
        renderItem={item => (
          <List.Item>
            <Card
              title={
                item.editing ? (
                  <Input
                    name="title"
                    value={item.title}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                ) : item.title
              }
              extra={
                <>
                  {item.editing ? (
                    <DatePicker
                      style={{ marginRight: 8 }}
                      placeholder="Select date"
                      value={item.date}
                      onChange={(date, dateString) => handleDateChange(date, dateString, item.id)}
                    />
                  ) : (
                    <Text type="secondary">{item.date.format('MMMM D, YYYY')}</Text>
                  )}
                  {item.editing ? (
                    <Button
                      icon={<SaveOutlined />}
                      onClick={() => handleSave(item.id)}
                    />
                  ) : (
                    <Button
                      icon={<EditOutlined />}
                      onClick={() => handleEdit(item.id)}
                    />
                  )}
                </>
              }
            >
              <p>
                {item.editing ? (
                  <Input.TextArea
                    name="content"
                    value={item.content}
                    onChange={(e) => handleInputChange(e, item.id)}
                    rows={4}
                  />
                ) : item.content}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchoolNewsPage;

