import styled from "styled-components";

export default function SideBar() {
    return (
        <SideBarDiv>
            <Profile>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocDGgUY5qj7xJKLi-H7Vnv7oCiM2O55Ez-VxJo5b4Mw&s" alt="profile" width="40"/>
                <span> User name</span>
            </Profile>
            <Section>
                <ion-icon name="home-outline"></ion-icon>
                <span>Main</span>
            </Section>
            <Section>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <span>Chat</span>
            </Section>
            <Section>
                <ion-icon name="person-outline"></ion-icon>
                <span>Perfil</span>
            </Section>
            
        </SideBarDiv>
    )
}

const SideBarDiv = styled.div`
    width: 200px;
    height: 1000px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 14px;
    font-family: proxima-nova, sans-serif;
    border: 1px solid #D9D9D9;
`

const Profile = styled.div`
    background-color: #F9D374;
    height: 45px;
    margin-bottom: 30px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 40px;
        height: 40px;
        border-radius: 6px;
    }

`

const Section = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    height: 45px;
    ion-icon {
        font-size: 24px;
        margin-right: 10px; 
    }

    :hover {
        background-color: #F79B26;
        cursor: pointer;
        }
    

`
