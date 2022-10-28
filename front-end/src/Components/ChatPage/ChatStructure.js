import styled from "styled-components";
import TopLogo from "../UsefullComponents/TopLogo"
import SideBar from "../UsefullComponents/SideBar";




export default function ChatStructure() {
    

    return(
        <ChatStructureDiv>
            <TopChat>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV77MHyEsDVji2Rw7gpsNgP0DZEsh1JulOs2bxgpIPEQ&s" alt="Outro usuário profile" />
                    <span>João Guilherme</span>
                </div>
                <ion-icon name="people"></ion-icon>
            </TopChat>
            <AllMessages>
            </AllMessages>
            <SendMessage>

            </SendMessage>
        </ChatStructureDiv>
        
    
    )
}

const ChatStructureDiv = styled.div`
    width: 1200px;
    height: 900px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    
`

const TopChat = styled.div`
    height: 85px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    box-shadow: 0 0 5px 2px #D9D9D9;
    font-family: proxima-nova, sans-serif;
    img {
        width: 53px;
        height: 53px;
        margin-right: 15px;
    }
    span {
        font-size: 18px;
    }
    ion-icon {
        font-size: 45px;
    }
`
const AllMessages = styled.div`
    width: 1200px;
    background-color: #F5F5F5;
    padding-top: 50px;
    height: 715px;
    border: 1px solid #D9D9D9;
    font-family: proxima-nova, sans-serif;
    font-size: 18px;
    padding: 50px 20px 20px 20px;
    > div {
        
        > div {
            border: 1px solid #D9D9D9;
            height: 40px;
            width: 100%;
        }
    }

`
const SendMessage = styled.div`
    
    
`

