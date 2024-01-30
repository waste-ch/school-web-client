import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import './main.css'

const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <div className="about-us" >
            <Title level={2}>About Us</Title>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <div className="team-member">
                        <Image
                            src="./pavan.jpeg"
                            alt="Description of the image"
                            style={{ width: '100%' }}
                            preview={false}
                        />
                        <Title level={4}>Pavan Lodi</Title>
                        <Paragraph>Founder</Paragraph>
                        <Paragraph>Civil Engineer (B.Tech)</Paragraph>
                        <Paragraph>Contact: +91 7729024316</Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className="team-member">
                        <Image
                            src="./murali45.jpg"
                            alt="Description of the image"
                            style={{ width: '100%' }}
                            preview={false}
                        />
                        <Title level={4}>Murali Palle</Title>
                        <Paragraph>Co-Founder</Paragraph>
                        <Paragraph>Software Developer</Paragraph>
                        <Paragraph>Contact: +91 8184825942</Paragraph>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
