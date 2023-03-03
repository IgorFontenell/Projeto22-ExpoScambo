import styled from "styled-components";
import UserContext from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";

export default function ChatMessage({ message, timeOfMessage, writerId, image }) {
    const [ typeMessage, setTypeMessage ] = useState('otherUser');
    const { user , setUser } = useContext(UserContext);
    const navigate = useNavigate();
    

    useEffect(() => {
        if(user.id === writerId) {
            setTypeMessage('ourUser')
        }
    }, []);
    
    
    

    return(
            <MessageDiv typeMessage={typeMessage}>
                <img onClick={() => navigate(`/profile/2`)} src={image} alt="otherUser Profile"/>
                <div>
                    <div>
                        <span>{message}</span>
                    </div>
                    <span>{timeOfMessage.replace(":", "h:").replace("-", " - ")}</span>
                </div>
            </MessageDiv>
    )
}

const MessageDiv = styled.div`
    display: flex;
    justify-content: ${props => props.typeMessage === 'otherUser' ? 'flex-start' : 'flex-end'};
    margin-bottom: 20px;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        display: ${props => props.typeMessage === 'otherUser' ? '' : 'none'};
    }
    > div {
        display: flex;
        flex-direction: column;

        > div {
        display: flex;
        flex-wrap: wrap;
        max-width: 350px;
        border: 1px solid lightgrey;
        border-radius: 15px;
        padding: 15px 10px;
        background-color: ${props => props.typeMessage === 'otherUser' ? '#FFFFFF' : '#46A3F3'};
        > span {
            color: ${props => props.typeMessage === 'otherUser' ? '#000000' : '#FFFFFF'};
            }
        }
        > span {
            display: flex;
            justify-content: ${props => props.typeMessage === 'otherUser' ? 'flex-end' : 'flex-start'};
            font-size: 13px;
        }
    }
    
`


