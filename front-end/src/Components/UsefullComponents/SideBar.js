import styled from "styled-components";
import axios from "axios";
import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenContext from '../../contexts/TokenContext';

export default function SideBar() {
    const { token , setToken } = useContext(TokenContext);
    const { user , setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    
    useEffect(() => {
        if(token !== '') {
            const request = axios.get(`${URL}/user/profile/me`, config);
            request.then(response => {
                setUser({...response.data})
            })
            .catch(error => {
                console.log(error)
            })
        }
        
    }, [token]);
    
    function ProfileRender () {
        if (user !== '') {
            return (
                <Profile>
                    <img src={user.photo} alt="profile" width="40"/>
                    <span>{user.name}</span>
                </Profile>
            )
        } else {
            return (
                <Profile>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV77MHyEsDVji2Rw7gpsNgP0DZEsh1JulOs2bxgpIPEQ&s" alt="profile" width="40"/>
                    <span> User name</span>
                </Profile>
            )
        }
    }
    
    return (
        <SideBarDiv>
            <ProfileRender />
            <Section onClick={() => navigate("/")}>
                <ion-icon name="home"></ion-icon>
                <span>Main</span>
            </Section>
            <Section onClick={() => navigate(`/chat/allChats`)}>
                <ion-icon name="chatbubble"></ion-icon>
                <span>Chat</span>
            </Section>
            <Section onClick={() => navigate(`/profile/${user.id}`)}>
                <ion-icon name="person"></ion-icon>
                <span>Perfil</span>
            </Section>
            <Section onClick={() => navigate("/post/create")}>
                <ion-icon name="add-circle"></ion-icon>
                <span>Create</span>
            </Section>
            
        </SideBarDiv>
    )
}

const SideBarDiv = styled.div`
    width: 80px;
    height: 100vh;
    background-color: #EFF2F4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 14px;
    font-family: proxima-nova, sans-serif;
    border: 1px solid #D9D9D9;
    
    span {
        display: none;
    }
    :hover {
        width: 200px;
        span {
            display: initial;
        }
         > div {
            padding-left: 30px;
            justify-content: flex-start;
         }
         > div:nth-child(1) {
             padding-left: 0px;
             justify-content: space-evenly;
         }
    }
`

const Profile = styled.div`
    background-color: #F9D374;
    height: 45px;
    margin-bottom: 30px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 40px;
        height: 40px;
        border-radius: 6px;
    }

`

const Section = styled.div`
    width: 100%;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    height: 45px;
    justify-content: center;
    color: #5D7285;
    ion-icon {
        font-size: 28px;
        margin-right: 10px;
        display: flex;
        justify-content: flex-start;
        
    }

    :hover {
        background-color: #0C7FDA;
        color: #FFFFFF;
        cursor: pointer;
        }
    

`
