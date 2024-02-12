import React, { useState } from 'react';
import { Image, Modal } from 'antd';

import LoginButton from './login_button'
import './main.css'; // You can define your styles in this CSS file
import AboutUs from './abouts_us';

const faqsContent = [
    {
        question: "What are the school's operating hours?",
        answer: "Sunshine Valley Academy operates from Monday to Friday, 8:00 AM to 3:00 PM."
    },
    {
        question: "Is there a uniform policy for students?",
        answer: "Yes, all students are required to wear the official school uniform. Details can be found in the student handbook."
    },
    {
        question: "How can I enroll my child in Sunshine Valley Academy?",
        answer: "To enroll your child, please visit our Admissions page and follow the outlined process. You can also contact our Admissions Office for assistance."
    },
    // Add more FAQ items as needed
];

const MainPage = () => {
    const [visible, setVisible] = useState(false);
    const [aboutUsModalVisible, setAboutUsModalVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
        setAboutUsModalVisible(false);
    };
    const showAboutUsModal = () => {
        setAboutUsModalVisible(true);
    };


    return (
        <div className="home-page">
            <header className="header">
                <div className="logo">
                    <Image
                        className='logo-class'
                        src={process.env.PUBLIC_URL + '/school_image.png'}
                        alt="Description of the image"
                        style={{ width: '100%' }}
                        preview={false}
                    />
                </div>
                <div className="header-right">
                    <LoginButton />
                    <div>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer', marginRight: "4rem" }} onClick={showAboutUsModal}>
                            About Us
                        </span>
                        <Modal
                            open={aboutUsModalVisible}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                <AboutUs />
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer', marginRight: "4rem" }} onClick={showModal}>
                            FAQs
                        </span>
                        <Modal
                            open={visible}
                            onCancel={handleCancel}
                            footer={null}
                            width={800}
                        >
                            <div className="faqs">
                                <h2>Frequently Asked Questions</h2>
                                <ul>
                                    {faqsContent.map((faq, index) => (
                                        <li key={index}>
                                            <strong>{faq.question}</strong>
                                            <p>{faq.answer}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Modal>
                    </div>
                </div>
            </header>
            <div className="content">
                <h1>Welcome to Sunshine Valley Academy</h1>
                <p>Your Gateway to Education Excellence</p>
            </div>
        </div>
    );
};

export default MainPage;
