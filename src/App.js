
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navber from './Pages/Shared/Navber';

function App() {
  return (
    <div>
     <Navber/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/' element={<About/>} />
     </Routes>
    </div>
  );
}

export default App;
