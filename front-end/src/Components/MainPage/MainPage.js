import styled from "styled-components";
import CategoriesBar from "./CategoriesBar";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";
import { useState, useContext } from "react";
import Posts from "./Posts";
import UserContext from '../../contexts/UserContext';

export default function MainPage() {
    const [ category, setCategory ] = useState("Recomendados");
    const { user ,setUser } = useContext(UserContext);
    
    
    return(
        <>
            <TopLogo />
            <MainPageDiv>
                <SideBar />
                <Container >
                    <CategoriesBar category={category} setCategory={setCategory} />
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
    background-color: #FFF5EE;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF5EE;
    min-height: 1000px;
    
`

