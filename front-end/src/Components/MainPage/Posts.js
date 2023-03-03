import styled from "styled-components";
import Post from "./Post";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts({ category }) {

    const [ posts, setPosts ] = useState([]);
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    
    useEffect(() => {
        const request = axios.get(`${URL}/category/${category}`);
        request.then(response => {
            setPosts(response.data)
        });
    }, [category]);
    

    function RenderPosts() {
         if(posts === []) {
             return (<></>);
         };

         let postsRender = posts.map(object => 
            <Post 
            key={object.id} 
            id={object.id} 
            title={object.title} 
            budget={object.budget} 
            travelAddress={object.travelAddress} 
            categoryName={object.categoryName}
            photo={object.photo} 
            name={object.name} 
            score={object.score}
            description={object.description}
             />)
         return(postsRender);
    }
    
    return(
        <>
            <PostsDiv>
                <RenderPosts />
            </PostsDiv>
               
        </>
        
    
    )
}


const PostsDiv = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   
  
`
