import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const ChatApp  = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:6001');

    // Lắng nghe sự kiện 'MessageSent' từ server
    socket.on('MessageSent', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Lấy danh sách tin nhắn từ API khi component được render lần đầu
    axios.get('http://localhost:8000/api/messages')
      .then((response) => {
        setMessages(response.data);
      });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Gửi tin nhắn lên API
    axios.post('http://localhost:8000/api/messages', { content: newMessage })
      .then((response) => {
        setNewMessage('');
      });
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    );
  };
  
  export default ChatApp;
  