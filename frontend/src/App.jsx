import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import './App.css';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage'



function App() {
  return (
    <div className="container">
        <Outlet/>
    </div>
  );
}


export default App;
