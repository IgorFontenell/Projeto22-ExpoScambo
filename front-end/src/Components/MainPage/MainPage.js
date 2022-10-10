import styled from "styled-components";
import CategoriesBar from "./CategoriesBar";

import TopLogo from "../UsefullComponents/TopLogo"

export default function MainPage() {
    return(
        <>
            <TopLogo />
            <MainPageDiv>
                <Container >
                    <CategoriesBar />
                    <Posts>
                        
                    </Posts>
                </Container>
            </MainPageDiv>
        </>
        
    
    )
}

const MainPageDiv = styled.div`
    width: 100%;
    background-color: #fdf6ee;
    padding-top: 100px;
`

const Container = styled.div`
    width: 100%;
    height: 1000px;
    margin-left: 200px;
    padding-right: 200px;
    background-color: red;
    
`
const Posts = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   
   
  
`
