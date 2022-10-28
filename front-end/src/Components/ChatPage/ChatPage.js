import styled from "styled-components";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TokenContext from '../../contexts/TokenContext';
import ChatStructure from "./ChatStructure";
import PageContext from "../../contexts/PageContext";


export default function ChatPage() {
    const courierId = useParams();
    const [ messages, setMessages ] = useState([]);
    const { token , setToken } = useContext(TokenContext);
    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const URL = 'http://localhost:4900'
    
    
    
    useEffect(() => {
         if(token === '') {
            setPage(`/chat/${courierId.courierId}`);
            navigate(`/login`);
         }
         const request = axios.get(`${URL}/chat/${courierId.courierId}`);
         request.then(response => {
             setMessages(response.data)
         });
    }, []);
    
    function RenderMessages() {
        if(messages.length === 0) {
            return (<></>);
        } else {
            const messagesRender = messages.map(object => object)
            
        return(messagesRender);
        }

        
   }


    return(
        <>
            <TopLogo />
            <ChatPageDiv>
                <SideBar />
                <Container >
                    <ChatStructure />
                </Container>
            </ChatPageDiv>
        </>
        
    
    )
}

const ChatPageDiv = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    background-color: #FFF5EE;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF5EE;
    min-height: 1000px;
    display: flex;
    justify-content: space-evenly;
    
`

