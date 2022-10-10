import styled from "styled-components";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Post from "../MainPage/Post";
import BigPost from "./BigPost";


export default function PostPage() {
    const postId = useParams();
    const [ post, setPost ] = useState([]);
    const URL = 'http://localhost:4900'
    
    
    useEffect(() => {
        const request = axios.get(`${URL}/post/${postId.id}`);
        request.then(response => {
            setPost(response.data)
        });
    }, []);
    
    function RenderPosts() {
        if(post.length === 0) {
            return (<></>);
        } else {
            const postsRender = 
            <BigPost 
            key={post.post.id} 
            id={post.post.id} 
            title={post.post.title} 
            budget={post.post.budget} 
            travelAddress={post.post.travelAddress} 
            categoryName={post.post.categoryName}
            photo={post.user.photo} 
            name={post.user.name} 
            score={post.user.score}
            description={post.post.description}
            arrivalDay={post.post.arrivalDay}
            departureDay={post.post.departureDay}
            userId={post.post.userId}
            />
        return(postsRender);
        }

        
   }


    return(
        <>
            <TopLogo />
            <PostPageDiv>
                <SideBar />
                <Container >
                    <RenderPosts />
                </Container>
            </PostPageDiv>
        </>
        
    
    )
}

const PostPageDiv = styled.div`
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
    justify-content: space-evenly;
    
`

