import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './componants/Pages/Home';
import Login from './componants/Shared/Login';
import Navbar from './componants/Shared/Navbar';
import Signup from './componants/Shared/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      <ToastContainer/>     
    </div>
  );
}

export default App;
