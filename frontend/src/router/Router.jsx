import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ChatPage from '../Pages/ChatPage'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, 
  },
  {
    path: '/chat',
    element: <ChatPage />, 
  },
]);

export default  Router