import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Dashboard from './componants/Pages/Dashboard/Dashboard';
import Students from './componants/Pages/Dashboard/Students';
import Teachers from './componants/Pages/Dashboard/Teachers';
import Home from './componants/Pages/Home';
import Login from './componants/Shared/Login';
import Navbar from './componants/Shared/Navbar';
import Signup from './componants/Shared/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        {/* Dashboard Admin */}
        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Students />} ></Route>
          <Route path="teachers" element={<Teachers />} ></Route>
        </Route>

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
