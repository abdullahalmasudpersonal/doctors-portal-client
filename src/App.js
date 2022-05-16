
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navber from './Pages/Shared/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyAppointments from './Pages/Dashbord/MyAppointments';
import MyReview from './Pages/Dashbord/MyReview';
import MyHistory from './Pages/Dashbord/MyHistory';
import Users from './Pages/Dashbord/Users';

function App() {
  return (
    <div className='max-w-7px mx-auto px-12'>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashbord' element={
          <RequireAuth>
            <Dashbord />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments/>}></Route>
          <Route path='review' element={<MyReview/>}></Route>
          <Route path='history' element={<MyHistory/>}></Route>
          <Route path='allusers' element={<Users/>}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
