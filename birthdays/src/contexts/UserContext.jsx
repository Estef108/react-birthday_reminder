import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext(null);

export const UserProvider = ({children}) => {
  const sessionUser = sessionStorage.getItem('user');
  const navigate = useNavigate();
  const [user, setUser] = useState(sessionUser ? JSON.parse(sessionUser) : null);
  const [loginError, setLoginError] = useState('');

  const loginUser = async (data, prevRoute) => {
    try {
      const req = await fetch('http://localhost:4000/users');
      const res = await req.json();

      const existingUser = res.find(item => item.password === data.password && item.email === data.email);

      if (existingUser) {
        setUser(existingUser);
        sessionStorage.setItem('user', JSON.stringify(existingUser));
        setLoginError('');
        navigate(prevRoute || 'profile');
      } else {
        setUser(false);
        setLoginError('No existe el usuario o la contraseña no es correcta');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const userData = {
    user,
    setUser,
    loginUser,
    loginError,
    setLoginError,
    sessionUser
  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  )
}

