import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/mainpage/main.jsx'
import Booking from './components/booking/booking.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Premium from './components/menu/1.jsx'
import Alaska from './components/menu/2.jsx'
import Izakaya from './components/menu/3.jsx'
import Stir from './components/menu/4.jsx'
import Dimsum from './components/menu/5.jsx'
import Yakiniku from './components/menu/6.jsx'
import Admin from './components/admin/admin.jsx'
import Staff from './components/staff/staff.jsx'
import Menu from './components/staff/menu.jsx'
import Dashboard from './components/admin/dashboard.jsx'
import Profile from './components/profile/App.jsx'
import Balance from './components/profile/Pages/balance.jsx'
import Editpage from './components/profile/Pages/editPage.jsx'
import History from './components/profile/Pages/history.jsx'
export default function App(para) {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/alaska" element={<Alaska />} />
          <Route path="/izakaya" element={<Izakaya />} />
          <Route path="/dimsum" element={<Dimsum />} />
          <Route path="/stir" element={<Stir />} />
          <Route path="/yakiniku" element={<Yakiniku />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/menu" element={<Menu />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/balance" element={<Balance />} />
          <Route path="/profile/editpage" element={<Editpage />} />
          <Route path="/profile/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
) 