import styled from "styled-components";
import axios from 'axios';
import TokenContext from '../../../../contexts/TokenContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import ChatMessage from "./ChatMessage";
import BackgroundChat from '../../../../Images/BackgroundChat.jpg';

export default function ChatAllMessages({ otherUserId, otherUserPhoto, updateMessages }) {
    const [ messages, setMessages ] = useState([]);
    const { token , setToken } = useContext(TokenContext);
    const navigate = useNavigate();
    const URL = 'http://localhost:4900'
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    function searchMessages () {
        const request = axios.get(`${URL}/chat/${otherUserId}`, config);
        request.then(response => {
            setMessages(response.data)
        });
    }
    
    useEffect(() => {
        searchMessages();
        setInterval(() => searchMessages(), 5000);
   }, [otherUserId]);

   function RenderMessages() {
    if(messages.length === 0) {
        return (<></>);
    } else {
        const messagesRender = messages.map((object, index) => 
        <ChatMessage
        key={index}
        message={object.message} 
        timeOfMessage={object.timeOfMessage}
        writerId={object.writerId} 
        image={otherUserPhoto}
        /> )

    return(messagesRender);
    }
}

    

    return(
        
           
            <AllMessages img={BackgroundChat}>
                <div> 
                    <ion-icon name="shield-checkmark-outline"></ion-icon> 
                    <span>Lembre-se de que nenhum funcionário irá pedir seus dados do cartão de crédito! Cuidado com golpes e faça a transação em um lugar público e seguro!
                    </span>
                </div>
                <RenderMessages />
            </AllMessages>
        
        
    
    )
}


const AllMessages = styled.div`
    width: 100%;
    background-color: #F5F5F5;
    height: 100%;
    border: 1px solid #D9D9D9;
    font-family: proxima-nova, sans-serif;
    font-size: 18px;
    padding: 0px 20px 20px 20px;
    overflow-y: scroll;
    background-image: url(${props => props.img});
    box-shadow:  0px 0px 2px 0px;
    border-left: none;
    > div:nth-child(1) {
        font-size: 16px;
        padding: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
        background-color: rgba(169, 171, 173, 0.3);
        border-radius: 15px;
        display: flex;
        align-items: flex-start;
        ion-icon {
            font-size: 40px;
            margin-right: 10px;
            color: #000000;
        }
        > span {
            color: grey;
        }
        
    }

`

