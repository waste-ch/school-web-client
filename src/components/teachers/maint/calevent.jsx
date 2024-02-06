// Calendar.js
import React, { useState } from 'react';
import { Calendar, Modal, Input, Form, Button, TimePicker, Upload, message, } from 'antd';
//import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
//import './Calendar.css'; // Import your custom styles

const Event = () => {
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [form] = Form.useForm();

  const handleDateClick = value => {
    setSelectedDate(value);
    setVisible(true);
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then(values => {
        setEvents(prevEvents => [
          ...prevEvents,
          {
            date: selectedDate.format('YYYY-MM-DD'),
            text: values.eventText,
            time: values.eventTime.format('HH:mm'),
            place: values.eventPlace,
            photo: values.eventPhoto.fileList[0]?.originFileObj,
            about: values.eventAbout,
          },
        ]);
        setVisible(false);
        form.resetFields();
      })
      .catch(errorInfo => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const handleModalCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const dateCellRender = value => {
    const date = value.format('YYYY-MM-DD');
    const event = events.find(event => event.date === date);

    return event ? <div className="event">{event.text}</div> : null;
  };

  // Custom function for photo upload
  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  // Custom function for photo before upload
  const beforeUpload = (file, fileList) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={handleDateClick} />

      <Modal
        title={`Add Event - ${selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}`}
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="eventText"
            label="Event Text"
            rules={[
              {
                required: true,
                message: 'Please enter event text',
              },
            ]}
          >
            <Input placeholder="E.g., Team Meeting" />
          </Form.Item>

          <Form.Item
            name="eventTime"
            label="Event Time"
            rules={[
              {
                required: true,
                message: 'Please select event time',
              },
            ]}
          >
            <TimePicker format="HH:mm" />
          </Form.Item>

          <Form.Item
            name="eventPlace"
            label="Event Place"
            rules={[
              {
                required: true,
                message: 'Please enter event place',
              },
            ]}
          >
            <Input placeholder="E.g., Conference Room 101" />
          </Form.Item>

          <Form.Item
            name="eventPhoto"
            label="Event Photo"
            valuePropName="fileList"
            getValueFromEvent={e => e.fileList}
            rules={[
              {
                required: true,
                message: 'Please upload an event photo',
              },
            ]}
          >
            <Upload
              customRequest={customRequest}
              beforeUpload={beforeUpload}
              maxCount={1}
              listType="picture"
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="eventAbout"
            label="About the Event"
            rules={[
              {
                required: true,
                message: 'Please provide information about the event',
              },
            ]}
          >
            <Input.TextArea placeholder="E.g., This meeting is for discussing project updates." rows={4} />
          </Form.Item>

          <div className="form-actions">
            <Button key="back" onClick={handleModalCancel}>
              Cancel
            </Button>
            <Button key="submit" type="primary" onClick={handleModalOk}>
              Save Event
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Event;
