import styled from "styled-components";
import axios from 'axios';
import TokenContext from '../../../../contexts/TokenContext';
import { useState, useContext, useCallback } from "react";



export default function SendMessage({ otherUserId, setUpdateMessages, updateMessages }) {
    const [ messageSend, setMessageSend ] = useState('');
    const { token , setToken } = useContext(TokenContext);
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const handleMessage = useCallback(async (e) => {
        e.preventDefault();
        try {
            const messageInfo = { message: messageSend }
            await axios.post(`${URL}/chat/message/${otherUserId}`, messageInfo, config);
            setMessageSend('');
            setUpdateMessages(!updateMessages);
        } catch (error) {
            alert(`${error} - Deu erro ao enviar mensagem`);
        }
      }, [messageSend]);
     
 
    return(
        <SendMessageDiv onSubmit={handleMessage}>
                <input
                    value={messageSend}
                    onChange={e => setMessageSend(e.target.value)}
                    placeholder="Escreva a sua mensagem aqui..."
                />
                <div onClick={handleMessage}>
                    <ion-icon name="send"></ion-icon>
                </div>
        </SendMessageDiv>
        )
}


const SendMessageDiv = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px 5px 5px;
    background-color: #EEEEEF;
    width: 100%;
    height: 60px;
    box-shadow:  0px 0px 2px 0px;
    border-left: none;
    border-bottom-right-radius: 10px;
    input {
        width: 95%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid lightgrey;
        padding-left: 10px;
    }
    > div {
        display: flex;
        width: 5%;
        align-items: center;
        justify-content: center;

        ion-icon {
        font-size: 25px;
        color: grey;
            :hover {
                color: #000000;
                cursor: pointer;
            }
        }
    }
    
    
`

