import styled from "styled-components";
import Category from "./Category";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function CategoriesBar({ category, setCategory }) {

    const [ categories, setCategories ] = useState([]);
    
    useEffect(() => {
        const request = axios.get(`http://localhost:4900/categories`);
        request.then(response => {
            setCategories(response.data)
        });
    }, []);
    console.log(categories);

    function RenderCategory() {
         if(categories === []) {
             return (<></>);
         };

         let categoriesRender = categories.map(object => 
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
            <Category name={"Recomendados"} categoryChoosed={category}/>
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