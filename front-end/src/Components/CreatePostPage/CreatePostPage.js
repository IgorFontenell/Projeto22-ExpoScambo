import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import TokenContext from '../../contexts/TokenContext';
import PageContext from '../../contexts/PageContext';

export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [budget, setBudget] = useState('');
    const [travelAddress, setTravelAddress ] = useState('');
    const [arrivalDay, setArrivalDay ] = useState('');
    const [departureDay, setDepartureDay ] = useState('');
    const { token , setToken } = useContext(TokenContext);
    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const URL = 'http://localhost:4900'

    useEffect(() => {
        if(token === '') {
            setPage(`/post/create`);
            navigate(`/login`);
        } 
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const body = { title, description, categoryName, budget, travelAddress, arrivalDay, departureDay };
        try {
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
        await axios.post(`${URL}/posts/create`, body, config)
                   .then(() => {
                       alert("Post criado com sucesso!")
                       navigate(`/`)
                    })
        
        
        } catch (error) {
        alert(`${error} - Deu erro ao criar o post o usuario`);
        }
    }
    
    return (
        <MainStyle>
        
                <h1> Criar Post </h1>
            
            <form>
                <input
                    type="text"
                    maxLength={25}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Titulo"
                    required
                />
                <input
                    type="text"
                    maxLength={230}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição"
                    required
                />
                <input
                    type="text"
                    onChange={e => setBudget(e.target.value)}
                    placeholder="Valor máximo"
                    required
                />
                <input
                    type="text"
                    onChange={e => setTravelAddress(e.target.value)}
                    placeholder="Destino"
                    required
                />
                <input
                    type="text"
                    onChange={e => setArrivalDay(e.target.value)}
                    placeholder="Que dia você chegará lá?"
                    required
                />
                <input
                    type="text"
                    onChange={e => setDepartureDay(e.target.value)}
                    placeholder="Que dia você irá embora?"
                    required
                />
                 <select id='categories' 
                 onChange={e => setCategoryName(e.target.value)}
                 value={categoryName}
                 required
                 >
                    <option value=""> -- Selecione a categoria -- </option>
                    <option value="Roupas">Roupas</option>
                    <option value="Celulares">Celulares</option>
                    <option value="Jogos">Jogos</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                    <option value="Outros">Outros</option>
                </select>

                <button type="submit" onClick={handleSubmit}>Criar Post</button>
            </form>
            <Link to="/">Caso queira voltar ao menu principal!</Link>
         
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
select {
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