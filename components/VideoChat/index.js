import React, { useCallback, useState } from 'react';

import Lobby from '../Lobby';


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

    const data = await fetch('/api/token/', {
      method: 'POST',
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
    console.log('data');
    console.log(data);
    setToken(data.token);
  }, [username, roomName]);

  // Eject user from a room and return her to the lobby
  const handleLogout = useCallback((event) => {
    setToken(null);
  });

  // Render the Lobby unless we have a token
  let render;

  if (token) {
    render = (
      <div>
        <p>Username: {username}</p>
        <p>Room: {roomName}</p>
        <p>Token: {token}</p>
      </div>
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUserNameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return render;
};

export default VideoChat;