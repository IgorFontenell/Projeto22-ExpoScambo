import styled from "styled-components";
import Category from "./Category";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function CategoriesBar({ category, setCategory }) {

    const [ categoriesInTheBar, setCategoriesInTheBar ] = useState([]);
    const URL = 'https://project-22-expo-scambo-back-end.vercel.app'
    
    useEffect(() => {
        const request = axios.get(`${URL}/categories`);
        request.then(response => {
            setCategoriesInTheBar(response.data)
        });
    }, []);

    function RenderCategory() {
         if(categoriesInTheBar === []) {
             return (<></>);
         };

         let categoriesRender = categoriesInTheBar.map(object => 
            <Category 
            key={object.id} 
            id={object.id} 
            name={object.name}
            categoryChoosed={category}
            setCategory={setCategory}
            />)
         return(categoriesRender);
    }

    return (
        <CategoriesDiv>
            <Category name={"Recomendados"} categoryChoosed={category} setCategory={setCategory} />
            <RenderCategory />
        </CategoriesDiv>
    )
}

const CategoriesDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FA8305;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;
    overflow-x: scroll;
    
    
`