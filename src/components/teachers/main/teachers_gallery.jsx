import React, { useState } from 'react';
import { Upload, List, Image, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Photoupload = () => {
  const [fileList, setFileList] = useState([]);

  const handleUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleRemove = file => {
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
  };

  const handlePreview = file => {
    if (file.url) {
      window.open(file.url, '_blank');
    }
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      <Upload
        action="/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={handleUpload}
        onPreview={handlePreview}
        onRemove={handleRemove}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={fileList}
        renderItem={item => (
          <List.Item>
            <Image
              width={100}
              src={item.thumbUrl || item.url}
              alt={item.name}
            />
            <Input placeholder="Write about the image" />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Photoupload;
