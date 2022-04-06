import React, { useState } from 'react';
import './Form.scss';
import * as S from '../Styles/Styles';

const INITIAL_STATE = {
    name: '',
    date: new Date(),
    image: '',
    moreInfo: '',
};

//Format date of today to set max-date possible in input
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


const Form = (props) => {
    const [state, setState] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();

        const { name, date } = state;

        if (!name || !date) {
            setError('Los campos son obligatorios');
            alert(error);
        } else {
            addPerson(state);
            setState(INITIAL_STATE);
            props.setRefresh(!props.refresh);
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const body = {
        name: state.name,
        date: state.date,
        image: state.image,
        moreInfo: state.moreInfo,
    };

    const addPerson = async (person) => {
        try {
            const req = await fetch('http://localhost:4000/people', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.Form className="bday-form" onSubmit={submitForm}>
            <p>Name</p>
            <S.Input type="text" name="name" value={state.name} onChange={handleInput} />
            <div className='date'>
                <S.Input type="date" name="date" value={state.date} onChange={handleInput} min="1920-01-01" max={today}/>
            </div>
            <label>
                <p>Image</p>
                <S.Input type="text" name="image" value={state.image} onChange={handleInput} />
            </label>

            <div className='image'>
                {state.image ?
                    (<img src={state.image} alt={state.name} width="200px" />)
                    : null}
            </div>
            <label>
                <p>More Info</p>
                <S.Input type="text" name="moreInfo" value={state.moreInfo} onChange={handleInput} />
            </label>

            <div>
                <S.Button type="submit">Save</S.Button>
            </div>
        </S.Form>
    )
}

export default Form;