import styled from "styled-components";
import Post from "./Post";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts({ category, setCategory }) {

    const [ posts, setPosts ] = useState([]);
    
    useEffect(() => {
        const request = axios.get(`http://localhost:4900/category/${category}`);
        request.then(response => {
            setPosts(response.data)
        });
    }, []);
    console.log(posts);

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
            score={object.score} />)
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
