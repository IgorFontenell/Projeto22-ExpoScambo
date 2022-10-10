import styled from "styled-components";
import CategoriesBar from "./CategoriesBar";
import TopLogo from "../UsefullComponents/TopLogo"
import Post from "./Post";
import SideBar from "../UsefullComponents/SideBar";

export default function MainPage() {
    return(
        <>
            <TopLogo />
            <MainPageDiv>
                <SideBar />
                <Container >
                    <CategoriesBar />
                    <Posts>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </Posts>
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
const Posts = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   
  
`
