import styled from "styled-components";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import ProfileBox from "./ProfileBox";
import axios from "axios";


export default function ProfilePage() {
    const [ profile, setProfile ] = useState('');
    const userId = useParams();
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    
    
    useEffect(() => {
        if(userId.id !== 'undefined') {
            const request = axios.get(`${URL}/user/${userId.id}`);
            request.then(response => {
            setProfile(response.data)
            });
        } else {
            const anonymus = {
                id: 0,
                name:"User name", 
                photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV77MHyEsDVji2Rw7gpsNgP0DZEsh1JulOs2bxgpIPEQ&s",
                score:0,
                email:"exemplo@gmail.com"
            }
            setProfile(anonymus);
        }
        
    }, [userId]);

    function RenderProfile() {
        if(profile === '') {
            return (<></>);
        } else {
            const profileRender = 
            <ProfileBox 
            id={profile.id}
            name={profile.name}
            photo={profile.photo}
            score={profile.score}
            email={profile.email}
            />
        return(profileRender);
        }
    }

    
    return(
        <>
            <TopLogo />
            <ProfilePageDiv>
                <SideBar />
                <Container >
                    <RenderProfile />
                </Container>
            </ProfilePageDiv>
        </>
        
    
    )
}

const ProfilePageDiv = styled.div`
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

