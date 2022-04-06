import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from '../../components/Styles/Styles';

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    rePassword: ""
}


const RegisterForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);

    const register = async () => {

        const body = {
            name: data.name,
            email: data.email,
            password: data.password,
        }      

        try {
            const req = await fetch('http://localhost:4000/users', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const res = await req.json();
            console.log(res);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }


    const submitForm = (e) => {
        e.preventDefault();
        if(!data.name || !data.email || !data.password || !data.rePassword){
            setError('Formulario incompleto!');
            return
        }else{
            setError(null);
        }
        console.log(data);

        register();
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };


    return (
        <S.Form onSubmit={submitForm}>
                <label>
                    <p>Name: </p>
                    <S.Input type="text" name="name" value={data.name} onChange={handleChange} />
                </label>
                <label>
                    <p>Email: </p>
                    <S.Input type="email" name="email" value={data.email} onChange={handleChange} />
                </label>
                <label>
                    <p>Password: </p>
                    <S.Input type="password" name="password" value={data.password} onChange={handleChange} />
                </label>
                <label>
                    <p>Repeat password: </p>
                    <S.Input type="password" name="rePassword" value={data.rePassword} onChange={handleChange} />
                </label>
                <div>
                {error && <><p>Formulario incompleto!</p><p>Por favor, rellena todos los campos</p></>}
                    <S.Button type="submit">Register</S.Button>
                </div>
        </S.Form>
    )
}

export default RegisterForm;