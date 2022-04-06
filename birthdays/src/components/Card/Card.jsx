import React, {useState, useEffect} from 'react';
import './Card.scss';
import * as S from '../Styles/Styles';
import BasicModal  from '../../components/Modal/Modal'


let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;


const Card = (props) => {
  
  const [isBday, setIsBday] = useState(false);
  
  useEffect( () => {
    const result = props.profiles.find((profile) => {return (((profile.date).slice(5,7) === today.slice(5,7)) && ((profile.date).slice(8,10) === today.slice(8,10)))})
    result ? setIsBday(true) : setIsBday(false);
  },[props.profiles])

  
  return (
    <>
      {isBday ? (<BasicModal title="Atención!!" message="Tienes un cumple hoy!!"/>) : null}
      {props.profiles.map((profile) => {
   
        return (
          <div key={JSON.stringify(profile)} className='card'>
            <h3 className='personName'>{profile.name}</h3>
            <div className='bday'>{profile.date}</div>
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