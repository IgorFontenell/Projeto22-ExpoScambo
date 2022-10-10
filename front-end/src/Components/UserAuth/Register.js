import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf ] = useState('');
    const [photo, setPhoto ] = useState('');
    const navigator = useNavigate();
    const URL = 'http://localhost:4900'

    async function handleSubmit(e) {
        e.preventDefault();
        const body = { name, email, password, confirmPassword, cpf, photo };
        try {
        await axios.post(`${URL}/sign-up`, body);
        
        navigator('/login');
        } catch (error) {
        alert(`${error} - Deu erro ao cadastrar o usuario`);
        }
    }

    return (
        <MainStyle>
        
                <h1> Cadastro </h1>
            
            <form>
                <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    placeholder="Nome"
                    required
                />
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
                <input
                    type="password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirme a senha"
                    required
                />
                <input
                    type="text"
                    onChange={e => setCpf(e.target.value)}
                    placeholder="CPF"
                    required
                />
                <input
                    type="text"
                    onChange={e => setPhoto(e.target.value)}
                    placeholder="Link da foto aqui"
                    required
                />

                <button type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
            <Link to="/login">Já tem uma conta? Entre agora!</Link>
         
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