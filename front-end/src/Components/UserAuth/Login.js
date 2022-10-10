import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useState, useContext } from 'react';
import axios from 'axios';
import TokenContext from '../../contexts/TokenContext';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(TokenContext);
    const navigator = useNavigate();
    const URL = 'http://localhost:4900'


    async function handleSubmit(e) {
        e.preventDefault();
        const body = { email, password };
        try {
          const { data } = await axios.post(`${URL}/sign-in`, body);
          setToken(data);
          navigator('/');
        } catch (error) {
            alert(`${error} - Deu erro ao cadastrar o usuario`);
        }
      }

    return (
        <MainStyle>
        <>
        <h1> Login </h1>
       
        <form>
            <input
                type="text"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha"
                required
            />
            <button type="submit" onClick={handleSubmit}> Entrar </button>
        </form>
        <Link to="/register">Não tem uma conta? Cadastre-se agora!</Link>
        </>        
    </MainStyle>
    );
}

const MainStyle = styled.main`
display: flex;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #F79B26;

h1 {
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 32px;
    line-height: 50px;
    margin: -5px 0px 24px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

input{
    width: 30%;
    max-width: 470px;
    height: 58px;
    padding: 18px 15px;
    border-radius: 30px;
    border: none;
    background-color: #FFFFFF;
    color:#000000;
    font-size: 16px;
    margin-bottom: 13px;
}

button {
    background-color: #FF6E4E;
    border: none;
    width: 30%;
    height: 54px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}
button:hover{
    cursor: pointer;
}

a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
}
`;