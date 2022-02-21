import styled from "styled-components";
import { Link } from "react-router-dom";

export const Select = styled.select`
    min-width: 50px;
    height: 30px;
    font-size: 1em;
    text-align: center;
`

export const StyledLink = styled(Link)`
    background-color: white;    
    font-size: 1em;
    text-align: center;
    margin: 6px;
    padding: 5px 12px;
    border-radius: 3px;
    color: #082681;
`

export const Input = styled.input`
    width: 65%;
    margin: 8px;
    padding: 7px;
    border-radius: 3px;
`

export const Form = styled.form`
    margin: 30px auto;
    padding: 12px;
    background-color: #f4f1c1;
    border-radius: 5px;
`

export const Button = styled.button`
    margin: 10px;
    padding: 8px 12px;
    background-color: #072171;
    color: white;
    border: 0px;
    border-radius: 3px;
    font-size: 1em;
`

export const Image = styled.img`
width: 80%;
border: 2px solid #f4f1c1;
margin: 4px auto;
`