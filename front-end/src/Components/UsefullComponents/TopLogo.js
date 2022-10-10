import styled from "styled-components";
import Logo from "../../Images/Logo.jpg";
export default function TopLogo() {
    return (
        <TopLogoDiv>
            <img src={Logo} />
        </TopLogoDiv>
    )
}

const TopLogoDiv = styled.div`
    width: 100%;
    background-color: #F79B26;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 4px;
    position: fixed;
    height: 100px;
    img {
        width: 350px;
    }
`