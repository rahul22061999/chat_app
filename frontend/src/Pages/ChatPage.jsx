import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]); 


  const fetchChats = async () => {
    try {
      await axios.get('/api/chat')
       .then(response => {
        setChats(response.data)
       })
    } catch (error) {
      console.error('Error fetching chats:', error); 
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      {
        chats.map(chat => <div key={chat.id}>{chat.chatName}</div>)
      }
    </>
  );
};

export default ChatPage;
