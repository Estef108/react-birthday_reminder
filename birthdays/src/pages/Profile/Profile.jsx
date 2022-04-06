import React, {useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Profile.scss';



const Profile = () => {
    const {user} = useContext(UserContext);


  const { email, name } = user || {};
  return (
    <>
      <div className='profile-info'>
      <h1>Profile</h1>
      <p>Name: </p>
      <p className='user-data'>{name}</p>
      <p>Email: </p>
      <p className='user-data'>{email}</p>
    </div>
    </>
  
  );
};

export default Profile;