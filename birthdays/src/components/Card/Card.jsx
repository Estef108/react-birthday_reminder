import React from 'react';
import './Card.scss';
import * as S from '../Styles/Styles';

const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[today.getMonth()];

const Card = (props) => {

  return (
    <>
      {props.profiles.map((profile) => {
        if ((parseInt(profile.day) === today.getDate()) && ((profile.month) === (monthName))) {
          alert("Hoy tienes un cumpleaños");
        }
        return (
          <div key={JSON.stringify(profile)} className='card'>
            <h3 className='personName'>{profile.name}</h3>
            <div className='bday'>{profile.day} {profile.month} {profile.year}</div>
            <div className='photo'>
            <S.Image className='personImg' src={profile.image} alt={profile.name} width="300px" />
            </div>
            <p>{profile.moreInfo}</p>
          </div>
        )
      })}
    </>)
};

export default Card;