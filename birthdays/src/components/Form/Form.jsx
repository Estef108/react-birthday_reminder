import React, { useState } from 'react';
import './Form.scss';
import * as S from '../Styles/Styles';

const INITIAL_STATE = {
    name: '',
    day: '',
    month: '',
    year: '',
    image: '',
    moreInfo: '',
};

const days = [];
for (let i = 1; i <= 31; i++) {
    days.push(i);
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const years = [];
let myDate = new Date();
let year = myDate.getFullYear();
for (let i = year; i >= 1930; i--) {
    years.push(i);
}

const Form = (props) => {
    const [state, setState] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();

        const { name, day, month, year } = state;

        if (!name || !day || !month || !year) {
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
        day: state.day,
        month: state.month,
        year: state.year,
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
            // const res = await req.json();
            // console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.Form className="bday-form" onSubmit={submitForm}>
            <p>Name</p>
            <S.Input type="text" name="name" value={state.name} onChange={handleInput} />
            <div className='date'>
                <label>
                    <p>Day</p>
                    <S.Select name="day" value={state.day} onChange={handleInput}>
                        {days.map((value) => {
                            return <option key={value} value={value}>{value}</option>
                        })}
                    </S.Select>
                </label>
                <label>
                    <p>Month</p>
                    <S.Select name="month" value={state.month} onChange={handleInput}>
                        {months.map((value) => {
                            return <option key={value} value={value}>{value}</option>
                        })}
                    </S.Select>
                </label>
                <label>
                    <p>Year</p>
                    <S.Select name="year" value={state.year} onChange={handleInput}>
                        {years.map((value) => {
                            return <option key={value} value={value}>{value}</option>
                        })}
                    </S.Select>
                </label>
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