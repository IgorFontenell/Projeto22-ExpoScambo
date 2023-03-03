import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import TokenContext from '../../../contexts/TokenContext';
import UserContext from "../../../contexts/UserContext";
import ChatEachBox from "./ChatEachBox";

export default function AllTheChats({ otherUserId }) {
    const [ chatBoxIdChoosed, setChatBoxIdChoosed ] = useState(otherUserId);
    const [ users, setUsers ] = useState([]);
    const { token } = useContext(TokenContext);
    const { user } = useContext(UserContext);
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
    useEffect(async () => {
        const usersInfo = await gettingUsersInformations();
        if(usersInfo === undefined) {
            return
        }
        setUsers(usersInfo);
    }, [otherUserId]);


    async function gettingUsersInformations() {
        const chatsRequest = await axios.get(`${URL}/chat/all`, config);
        const infoWhoITalkedTo = gettingTheUsersId(chatsRequest.data);
        if(infoWhoITalkedTo === undefined) {
            return undefined;
        }
        let usersInfo = [];
        let counter = 0;
        
        for(let id of infoWhoITalkedTo) {
            const users = await axios.get(`${URL}/user/${id}`);
            usersInfo.push(
                {
                ...users.data, 
                timeOfMessage: chatsRequest.data[counter].timeOfMessage, 
                lastMessage: chatsRequest.data[counter].lastMessage
                });
            counter++;
        }
        return usersInfo;
    }

    function gettingTheUsersId(usersObjects) {
        let idWhoITalkedTo = [];
        if(usersObjects.length === 0) {
            return undefined;
        }
        usersObjects.map(object => {
            if(object.courierId === user.id) {
                idWhoITalkedTo.push(object.buyerId)
            } else {
                idWhoITalkedTo.push(object.courierId)
            }
        })
        return idWhoITalkedTo;
    }
    
    function RenderEachBox() {
        if(users.length === 0) {
            return <></>
        } else {
            const chatBoxes = users.map((object, index) => 
            <ChatEachBox
                key={index}
                id={object.id} 
                photo={object.photo} 
                name={object.name}
                timeOfLastMessage={object.timeOfMessage}
                lastMessage={object.lastMessage}
                chatBoxIdChoosed={chatBoxIdChoosed}
                setChatBoxIdChoosed={setChatBoxIdChoosed}
                />)
            return chatBoxes
        }
    }

    return(
        <>
            <ChatBoxes>
                <div>
                    <span>Recentes</span>
                    <ion-icon name="search" onClick={() => alert("Função buscar ainda não implementada!")}></ion-icon>
                </div>
                <RenderEachBox />
            </ChatBoxes>
        </>
        
    
    )
}

const ChatBoxes = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: rgb(247, 247, 247);
    margin-top: 15px;
    border: 1px solid lightgrey;
    height: 795px;
    overflow-y: scroll;
    border-right: none;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-right: 0.5px solid #E4DBD4;
    box-shadow:  -0.5px -0.5px 2px 0px;
    
    > div:nth-child(1) {
        display: flex;
        align-items: center;
        height: 40px;
        width: 100%;
        justify-content: space-between;
        padding: 0px 15px;
        margin-top: 5px;
        span {
            font-size: 17px;
            font-weight: bold;
        }
        ion-icon {
            font-size: 20px;
        }
    }
`

