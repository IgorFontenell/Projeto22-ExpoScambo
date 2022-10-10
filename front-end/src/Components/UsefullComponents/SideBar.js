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
    const URL = 'http://localhost:4900'
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
            <Section onClick={() => navigate("/post/create")}>
                <ion-icon name="add-circle-outline"></ion-icon>
                <span>Create</span>
            </Section>
            <Section onClick={() => navigate("/")}>
                <ion-icon name="home-outline"></ion-icon>
                <span>Main</span>
            </Section>
            <Section onClick={() => navigate("/chat")}>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <span>Chat</span>
            </Section>
            <Section onClick={() => navigate(`/profile/${user.id}`)}>
                <ion-icon name="person-outline"></ion-icon>
                <span>Perfil</span>
            </Section>
            
        </SideBarDiv>
    )
}

const SideBarDiv = styled.div`
    width: 200px;
    height: 800px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 14px;
    font-family: proxima-nova, sans-serif;
    border: 1px solid #D9D9D9;
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
    justify-content: space-around;
    img {
        width: 40px;
        height: 40px;
        border-radius: 6px;
    }

`

const Section = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    height: 45px;
    ion-icon {
        font-size: 24px;
        margin-right: 10px; 
    }

    :hover {
        background-color: #F79B26;
        cursor: pointer;
        }
    

`
