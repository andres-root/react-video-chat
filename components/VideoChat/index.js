import React, { useCallback, useState } from 'react';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUserNameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  // Send the username and room name to the server get an access token
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const data = await fetch('/video/token/', {
      method: 'POST',
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
    
    setToken(data.token);
  }, [username, roomName]);

  // Eject user from a room and return her to the lobby
  const handleLogout = useCallback((event) => {
    setToken(null);
  });

  return <div></div>;
};

export default VideoChat;