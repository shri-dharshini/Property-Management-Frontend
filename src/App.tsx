
import Signup from './pages/Signup';
import LogIn from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Owner from './pages/Owner';
import axios from 'axios';
export default function App(){
  
  axios.defaults.headers.common['Authorization'] = "Bearer " +localStorage.getItem('token')
  return(
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup/>}/>
  	  <Route path="/login" element={<LogIn/>}/>
  	  <Route path="/owner" element={<Owner/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  )
}