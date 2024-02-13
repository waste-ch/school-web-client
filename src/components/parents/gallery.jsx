import React, { useEffect, useState } from 'react';
import { Row, Col, Image } from 'antd';

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  // Function to fetch real image URLs
  useEffect(() => {
    // Example: Fetching images from Unsplash API
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=20&client_id=6LB8E0Jwle4E2h021U542u32kQgtIyy1J-3mG9Bqkfo');
        const data = await response.json();
        const urls = data.map(photo => photo.urls.regular);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <Row gutter={[16, 16]}>
        {imageUrls.map((url, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Image src={url} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
