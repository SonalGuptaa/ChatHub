import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
  // Initialize chats as an empty array
  const [chats, setChats] = useState([]);

  // To fetch data from the API using Axios
  const fetchChats = async () => {
    
    const {data} = await axios.get('/api/chat');
          setChats(data);
          console.log(data);
    // try {
    //   const response = await axios.get('/api/chat');
    //   // Assuming the API response contains an array of chats
    //   setChats(response.data); // Update the chats state with the fetched data
    // } catch (error) {
    //   console.error('Error fetching chat data:', error);
    // }
  };
  useEffect(() => {
    // Call the fetchChats function when the component mounts
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.chatName}
        </div>
      ))}
    </div>
  );
};

export default Chatpage;