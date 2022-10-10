import styled from "styled-components";
import CategoriesBar from "./CategoriesBar";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";
import { useState } from "react";
import Posts from "./Posts";

export default function MainPage() {
    const [ category, setCategory ] = useState(["Recomendados"]);



    return(
        <>
            <TopLogo />
            <MainPageDiv>
                <SideBar />
                <Container >
                    <CategoriesBar />
                    <Posts category={category} setCategory={setCategory} />
                </Container>
            </MainPageDiv>
        </>
        
    
    )
}

const MainPageDiv = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF5EE;
    
    
`

