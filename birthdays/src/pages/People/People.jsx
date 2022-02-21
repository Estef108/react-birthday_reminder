import React, { useState, useEffect } from 'react';
import './People.scss';
import Form from '../../components/Form/Form';
import Card from '../../components/Card/Card';
import * as S from '../../components/Styles/Styles';



const People = () => {
  const [form, setForm] = useState(false);
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/people');
      const data = await res.json();
      setList(data);
    }
    fetchData();
  }, [refresh])


  const showForm = () => {
    setForm(!form);
  }

  return (
    <div className='form-card container'>
    <div className='form-container'>
      {form ?
        <><Form refresh={refresh} setRefresh={setRefresh}></Form>
        <S.Button className='button' onClick={showForm}>Close form</S.Button></> :
        <S.Button className='button' onClick={showForm}>Add a friend's BDay</S.Button>
      }
      </div>
      <div className='card-container'>
      <Card className='single-card' profiles={list} />
    </div>
    </div>
  )
}

export default People;