import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ChatPage from '../Pages/ChatPage';
import App from '../App'; 
import Home from '../Pages/Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {path: '/', element: <Home/>},
      { path: '/home', element: <HomePage /> }, 
      { path: '/chat', element: <ChatPage /> }, 
    ],
  },
]);

export default Router;
