import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './components/main'
import NoMatch from './components/no-match';
import { useData } from './data_context';
import { getTokenFC } from './firebase';
import { notification } from 'antd';
import Std from './components/parents/student_attendance';
//import MainTeach from './components/teachers/MainTeacher';
import MainTeacher from './components/teachers/main/MainTeacher';
import Event from './components/teachers/main/Events';
import Timetable from './components/teachers/main/timetable';
import Fa1 from './components/teachers/main/allexamresults.jsx/fa1results';
//import AdminDashBoard from './components/dashboard/AdminDashboard';
//import Admin from './components/admin/admin';
import Dash from './components/dashboard/admin1';
import TransportForm from './components/dashboard/transport';
import EarningForm from './components/admin/earning';
import NonTeaching from './components/admin/non_teaching';
import Library from './components/admin/library';

/** components related admin */
import AdminLogin from './components/admin/admin_login'
import AdminDashboard from './components/admin/admin_dashboard'
//components related to students
import StudentLogin from './components/students/student_login';
import StudentDashboard from './components/students/';

//components related to students
import TeacherLogin from './components/teachers/teacher_login';
import TeachersDashboard from './components/teachers';

//components related to students
import ParentLogin from './components/parents/parent_login';
import ParentDashboard from './components/parents';


import './App.css';



const App = () => {

  const { data, setToken } = useData()
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState({ title: '', body: '' });
  const [api, contextHolder] = notification.useNotification();

  // Create a new BroadcastChannel with the same name as in the service worker
  const channel = new BroadcastChannel('firebase-events');

  // Listen for messages from the service worker
  channel.onmessage = (event) => {
    if (event && event.data && event.data.text === 'saveFCMToken') {
      setToken(event.data.token)
    }
    if (event && event.data && event.data.text === 'notification') {
      setShow(true)
      setNotificationData({
        title: event.data.title,
        body: event.data.body,
      })

    }
  };
  useEffect(() => {
    if (show) {
      api.info({
        message: notificationData.title,
        description: notificationData.body,
        placement: 'topRight',
      });
      setShow(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])


  useEffect(() => {
    if (data && !Object.keys(data).length) {
      //    history('/')
    }

    getTokenFC()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className='main-container'>
      {contextHolder}
      <Routes>
        <Route path='/' element={<Main />} />

        {/*admin registration and login routes */}
        {/*<Route path="/admin/register" element={<AdminSingUpForm />} />*/}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/*routes related to students */}
        <Route path='/student/login' element={<StudentLogin />} />
        <Route path='/student/dashboard' element={<StudentDashboard />} />

        {/*routes related to teachers */}
        <Route path='/teachers/login' element={<TeacherLogin />} />
        <Route path='/teachers/dashboard' element={<TeachersDashboard />} />


        {/*routes related to parent */}
        <Route path='/parents/login' element={<ParentLogin />} />
        <Route path='/parents/dashboard' element={<ParentDashboard />} />



        {/*no match component*/}
        <Route path="*" element={<NoMatch />} />
        <Route path='/ParentLogin' element={<ParentLogin />} />
        <Route path='/MainTeacher' element={<MainTeacher />} />
        <Route path='/Event' element={<Event />} />
        <Route path='/Std' element={<Std />} />
        <Route path='/Timetable' element={<Timetable />} />
        <Route path='/Fa1' element={<Fa1 />} />
        <Route path='/Dash' element={<Dash />} />
        <Route path='/Transport' element={<TransportForm />}></Route>
        <Route path='/EarningForm' element={<EarningForm />} />
        <Route path='/NonTeaching' element={<NonTeaching />} />
        <Route path='/Library' element={<Library />} />
      </Routes>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sunshine Valley Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;