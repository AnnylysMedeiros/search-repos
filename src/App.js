import { useEffect, useState } from 'react';
import api from './services/api';
import style from './App.module.scss';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
 return (
  <div className={style.teste}>
    <Navbar />
    <Outlet />
  </div>

 )
}
export default App;
