
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navber from './Pages/Shared/Navber';

function App() {
  return (
    <div  className='max-w-7px mx-auto px-12'>
     <Navber/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/appointment' element={<Appointment/>} />
       <Route path='/login' element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
