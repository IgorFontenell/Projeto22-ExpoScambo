import styled from "styled-components";
import {  useNavigate } from 'react-router-dom';



export default function ChatEachBox ({ 
    id,
    photo,
    name,
    timeOfLastMessage,
    lastMessage,
    chatBoxIdChoosed, 
    }) {
    
    const navigate = useNavigate();
    let newFormatLastMessage = lastMessage;
    let isSelected;

    if(lastMessage.length > 23) {
        newFormatLastMessage = `"${lastMessage.slice(0, 24)}......."`;
    }
    
    if(id == chatBoxIdChoosed) {
        isSelected =  true;
    } else isSelected = false;

    
    return(
        <>
                <ChatEachBoxDiv selected={isSelected} onClick={() => navigate(`/chat/${id}`)}>
                    <img src={photo} alt="User Profile" />
                    <div>
                        <div>
                            <span>{name}</span>
                            <span>{newFormatLastMessage}</span>
                        </div>
                        <span>{timeOfLastMessage.slice(6, 11)}</span>
                    </div>
                </ChatEachBoxDiv>
               
        </>
        
    
    )
}



const ChatEachBoxDiv = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: ${props => props.selected === true ? "1px solid #000000" : "none"};
    font-weight: ${props => props.selected === true ? "bold" : "none"};
    background-color: ${props => props.selected === true ? "#F79B26" : "none"};
    img {
        width: 50px;
        height: 50px;
        border-radius: 30%;
    }
    span {
        font-family: proxima-nova, sans-serif;
    }
    > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding: 0px 10px;

        > span:nth-child(2) {
        display: inline-block;
        margin-top: 3px;
        font-size: 14px;
        }
        > div {
            display: flex;
            flex-direction: column;
            font-size: 18px;
            
            > span:nth-child(2) {
            font-size: 12px;
            font-weight:bold;
            }
        }
    }
    :hover {
        ion-icon {
            cursor: pointer;
        }
        background-color: ${props => props.selected === true ? "none" : "rgba(244, 172, 78, 0.5);"};
        font-weight: bold;
    }
    
`

