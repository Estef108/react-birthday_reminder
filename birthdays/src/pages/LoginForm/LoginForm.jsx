import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import * as S from '../../components/Styles/Styles';


const INITIAL_STATE = {
    email: "",
    password: ""
}

const LoginForm = () => {
    const state = useLocation();
    const [data, setData] = useState(INITIAL_STATE);
    const { loginUser, loginError } = useContext(UserContext);

    const submitForm = (e) => {
        e.preventDefault();
        loginUser(data, state ? state.prevRoute : null);
        setData(INITIAL_STATE);
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    return (
        <S.Form onSubmit={submitForm}>
                <label>
                    <p>Email</p>
                    <S.Input type="email" name="email" value={data.email} onChange={handleInput} />
                </label>
                <label>
                    <p>Password</p>
                    <S.Input type="password" name="password" value={data.password} onChange={handleInput} />
                </label>
                <div>
                    <S.Button type="submit">LogIn</S.Button>
                </div>
                <p>
                    {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
                </p>
        </S.Form>
    )
}

export default LoginForm;