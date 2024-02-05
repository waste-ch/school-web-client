import { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import Main from './components/main'
/** dashboard component */
import DashboardComponent from './components/dashboard';
import './App.css';
import NoMatch from './components/no-match';
import { useData } from './data_context';
import { getTokenFC } from './firebase';
import { notification } from 'antd';
import ParentLogin from './components/parents/ParentLogin';
import TeacherLogin from './components/teachers/teacher_login';
import Std from './components/parents/std_attendence';
//import MainTeach from './components/teachers/MainTeacher';
import MainTeacher from './components/teachers/maint/MainTeacher';
import Event from './components/teachers/maint/Events';
import Timetable from './components/teachers/maint/timetable';
import Fa1 from './components/teachers/maint/allexamresults.jsx/fa1results';
//import AdminDashBoard from './components/dashboard/AdminDashboard';
import StudentTabs from './components/students';
import Dash from './components/dashboard/dashboard.component';
import TransportForm from './components/dashboard/transport';
import EarningForm from './components/admin/earnimg';
import NonTeaching from './components/admin/nonteach';
import Library from './components/admin/library';
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
        <Route path='/' element={<Main/>} />

        {/*dashboard component*/}
        <Route path='/dashboard' element={<DashboardComponent />} />
        {/*no match component*/}
        <Route path="*" element={<NoMatch />} />
        <Route path='/ParentLogin' element= {<ParentLogin/>} />
        <Route path='/TeacherLogin' element= {<TeacherLogin/>} />
        <Route path='/MainTeacher' element= {<MainTeacher/>} />
        <Route path='/Event' element= {<Event/>} />
        <Route path='/Std' element= {<Std/>} />
        <Route path='/Timetable' element= {<Timetable/>} />
        <Route path='/Fa1' element= {<Fa1/>} />
        <Route path='/StudentTabs' element= {<StudentTabs/>} />
        <Route path='/Dash' element= {<Dash/>} />
        <Route path='/Transport' element={<TransportForm/>}></Route>
        <Route path='/EarningForm' element= {<EarningForm/>} />
        <Route path='/NonTeaching' element= {<NonTeaching/>} />
        <Route path='/Library' element= {<Library/>} />


        
        </Routes> 

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sunshine Valley Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;