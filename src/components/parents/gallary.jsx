import React, { useState } from 'react';
import { Row, Col, Modal, Image } from 'antd';

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    { src: 'image4.jpg', alt: 'Image 4' },
    { src: 'image5.jpg', alt: 'Image 5' },
  ];

  const showModal = image => {
    setSelectedImage(image);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={4} xl={3}>
            <div
              onClick={() => showModal(image)}
              style={{ cursor: 'pointer' }}
            >
              <Image src={image.src} alt={image.alt} />
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        {selectedImage && (
          <Image src={selectedImage.src} alt={selectedImage.alt} />
        )}
      </Modal>
    </div>
  );
};

export default Gallery;

