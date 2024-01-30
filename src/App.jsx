import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Main from "./components/main";
/** dashboard component */
import DashboardComponent from "./components/dashboard";
import "./App.css";
import NoMatch from "./components/no-match";
import { useData } from "./data_context";
import { getTokenFC } from "./firebase";
import { notification } from "antd";
import StudentDashboard from "./components/student-components/dashboard";

const App = () => {
  const history = useNavigate();
  const { data, setToken } = useData();
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState({
    title: "",
    body: "",
  });
  const [api, contextHolder] = notification.useNotification();

  // Create a new BroadcastChannel with the same name as in the service worker
  const channel = new BroadcastChannel("firebase-events");

  // Listen for messages from the service worker
  channel.onmessage = (event) => {
    if (event && event.data && event.data.text === "saveFCMToken") {
      setToken(event.data.token);
    }
    if (event && event.data && event.data.text === "notification") {
      setShow(true);
      setNotificationData({
        title: event.data.title,
        body: event.data.body,
      });
    }
  };
  useEffect(() => {
    if (show) {
      api.info({
        message: notificationData.title,
        description: notificationData.body,
        placement: "topRight",
      });
      setShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    if (data && !Object.keys(data).length) {
      history("/");
    }

    getTokenFC();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-container">
      {contextHolder}
      <Routes>
        <Route path="/" element={<Main />} />

        {/*dashboard component*/}
        <Route path="/dashboard" element={<DashboardComponent />} />
        {/*no match component*/}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <DashboardComponent />
      <StudentDashboard />
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Sunshine Valley Academy. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
