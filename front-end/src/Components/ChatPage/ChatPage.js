import styled from "styled-components";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";
import { useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TokenContext from '../../contexts/TokenContext';
import ChatStructure from "./ChatStructure/ChatStructure";
import PageContext from "../../contexts/PageContext";
import AllTheChats from "./AllChatsBoxes/AllTheChats";
import axios from 'axios';
import UserContext from "../../contexts/UserContext";

export default function ChatPage() {
    const { otherUserId } = useParams();
    const { token } = useContext(TokenContext);
    const { user } = useContext(UserContext);
    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    useEffect(async () => {
        if(token === '') {
            setPage(`/chat/${otherUserId}`);
            navigate(`/login`);
            return;
         } else if (otherUserId == user.id || otherUserId === "allChats") {
            const fristId = await gettingTheFristChatId();
            console.log(fristId, "123");
            navigate(`/chat/${fristId}`);
        } 
        
    }, [])

    

    async function gettingTheFristChatId () {

        const request = await axios.get(`${URL}/chat/all`, config);
        
        if(request.data.length === 0) {
            return
        }
        let seekingForTheTrueId = {
            buyerId: request?.data[0].buyerId,
            courierId: request?.data[0].courierId
        };
        
        if(user.id !== seekingForTheTrueId.buyerId){
            return seekingForTheTrueId.buyerId
        } else {
            return seekingForTheTrueId.courierId
        }
    }
    

    useEffect(() => {
         if(token === '') {
            setPage(`/chat/${otherUserId}`);
            navigate(`/login`);
         }
    }, []);
    
    function RenderAllTheChats () {
        if(token === '') {
            return <></>
         } else {
            return <AllTheChats otherUserId={otherUserId} />
         }
    }

    function RenderChatStructure () {
        if(token === '') {
            return <></>
         } else {
            return <ChatStructure otherUserId={otherUserId}/>
         }
    }


    return(
        <>
            <TopLogo />
            <ChatPageDiv>
                <SideBar />
                <Container >
                    <RenderAllTheChats />
                    <RenderChatStructure />
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
    justify-content: center;
    
`

