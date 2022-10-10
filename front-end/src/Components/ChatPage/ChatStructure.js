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
    display: flex;
    flex-direction: column;
    
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
    
    
`
const SendMessage = styled.div`
    
    
`

