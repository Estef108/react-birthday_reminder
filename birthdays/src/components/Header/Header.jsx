import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { UserContext } from '../../contexts/UserContext';
import * as S from '../Styles/Styles';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/')
  }
  return (
    <nav className='header'>
      <S.StyledLink to='/' className='link'>Home</S.StyledLink>
      {user ?
      <>
      <S.StyledLink to='people' className='link'>People</S.StyledLink>
      <S.StyledLink to='profile' className='link'>Profile</S.StyledLink>
      <S.Button onClick={logoutUser}>Logout</S.Button>
      </> :
        
      <>
        <S.StyledLink to='register' className='link'>Register</S.StyledLink>
        <S.StyledLink to='login' className='link'>Login</S.StyledLink>
      </>}
      
    </nav>
  )
}

export default Header;