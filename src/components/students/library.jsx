import React from 'react';
import { Table, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Library = () => {
  const books = [
    { key: '1', title: 'Book 1', author: 'Author 1' },
    { key: '2', title: 'Book 2', author: 'Author 2' },
    // Add more books as needed
  ];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Download',
      dataIndex: 'download',
      render: () => (
        <Button type="primary" icon={<DownloadOutlined />}>
          Download
        </Button>
      ),
    },
  ];

  return (
    <Table dataSource={books} columns={columns} />
  );
};

export default Library;
