import styled from "styled-components";
import Category from "./Category";

export default function CategoriesBar() {
    return (
        <CategoriesDiv>
            <Category type={"Recomendados"}/>
            <Category type={"Roupas"}/>
            <Category type={"Celulares"}/>
            <Category type={"Jogos"}/>
            <Category type={"Frágeis"}/>
            <Category type={"Outros"}/>
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