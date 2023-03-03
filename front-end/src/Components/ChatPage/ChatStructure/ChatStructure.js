import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from "react";
import ChatAllMessages from "./RenderMessages/ChatAllMessages";
import SendMessage from "./SendMessage/SendMessage";


export default function ChatStructure({ otherUserId }) {
    const [ courierInfo, setCourierInfo ] = useState([]);
    const [ updateMessages, setUpdateMessages ] = useState(false);
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
   

    useEffect(() => {
        if(otherUserId !== 'allChats' && otherUserId !== 'undefined') {
            const courierInfoRequest = axios.get(`${URL}/user/${otherUserId}`);
            courierInfoRequest.then(response => {
            setCourierInfo(response.data)
            });
        }
        
   }, [otherUserId]);


    function RenderTopChat() {
        let courierPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV77MHyEsDVji2Rw7gpsNgP0DZEsh1JulOs2bxgpIPEQ&s";
        let courierName = "Anonymous";

        if(courierInfo.length !== 0) {
            courierPhoto = courierInfo.photo;
            courierName = courierInfo.name;
        } 
        return(
            <TopChat>
                <div>
                    <img src={courierPhoto} alt="Outro usuário profile" />
                    <span>{courierName}</span>
                </div>
                <ion-icon name="people"></ion-icon>
            </TopChat>
        );
    }

    function RenderAllChatMessages() {
        if(courierInfo.length === 0) {
            return <ChatAllMessages />
        } else {
            return ( <ChatAllMessages otherUserId={otherUserId} otherUserPhoto={courierInfo.photo} /> )
        }
    }
  

    return(
        <ChatStructureDiv>
            <RenderTopChat />
            <RenderAllChatMessages updateMessages={updateMessages} />
            <SendMessage otherUserId={otherUserId} setUpdateMessages={setUpdateMessages} updateMessages={updateMessages} />
        </ChatStructureDiv>
        
    
    )
}

const ChatStructureDiv = styled.div`
    width: 1000px;
    height: 810px;
    display: flex;
    flex-direction: column;
`

const TopChat = styled.div`
    height: 85px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    border: 1px solid lightgrey;
    border-left: none;
    font-family: proxima-nova, sans-serif;
    z-index: 1;
    margin-top: 15px;
    border-top-right-radius: 15px;
    box-shadow:  0px 0px 2px 0px;
    border-bottom:none;
    
    
    img {
        width: 53px;
        height: 53px;
        margin-right: 15px;
        border-radius: 15px;
    }
    span {
        font-size: 18px;
    }
    ion-icon {
        font-size: 45px;
    }
`



