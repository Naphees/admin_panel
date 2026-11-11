
import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router';

// All Pages
import Login from './pages/Login.js';
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import Dashboard from "./pages/Dashboard.js";
import ForgetPassword from "./pages/ForgetPassword.js";
import NotFound from "./pages/NotFound.js"



export default function App() {
  return (
   <BrowserRouter>  {/*  Routes rapper  */}
      <Routes> 
          <Route  path='/' element={<Login/>} /> 
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/profile' element={<Profile/>} / > 
          <Route path='/forget-password' element={<ForgetPassword/>} / >
          <Route path="*" element={<NotFound/>} />
      </Routes>
   
   
   </BrowserRouter>
  )

}
