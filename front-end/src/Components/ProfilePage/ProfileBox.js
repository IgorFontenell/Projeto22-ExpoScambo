import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import PageContext from "../../contexts/PageContext";
import TokenContext from "../../contexts/TokenContext";

export default function ProfileBox({ id, photo, name, score, email }) {
    const { token } = useContext(TokenContext);
    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    

    function goToLogin() {
        setPage(`/profile/${id}`);
        navigate(`/login`);
    }
    
    function RenderLoginBox() {
        if(token !== '') {
            return (<></>);
        } else {
        return(
                <button onClick={goToLogin}>
                    <span>Login!</span>
                </button>
            );
        }
    }

    return(
        <>
            <PostDiv>
                <img src={photo} alt="Perfil" />
                <span> {name} </span>    
                <div>
                    <div>
                        <span> Score: </span><span>{score/100}</span>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    
                </div>
                <div>
                    <span> Email: </span><span>{email}</span>
                </div>
                <RenderLoginBox />
            </PostDiv>

        </>
    
    )
}

const PostDiv = styled.div`
    width: 450px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #D9D9D9;
    border-radius: 24px;
    font-family: proxima-nova, sans-serif;
    background-color: #FFFFFF;
    box-shadow: 0 0 5px 2px #D9D9D9;
    margin: 40px;
    padding-left: 35px;
    padding-bottom: 35px;

     img {
         margin-top: 50px;
         margin-bottom: 15px;
         width: 200px;
         border-radius: 24px;
     }
      > span {
         font-size: 25px;
         font-weight: bold;
     }
      > div {
        font-size: 22px;
        margin-bottom: 7.5px;
        margin-top: 7.5px;
          span:nth-child(1){
            font-weight: bold;
          }
          > div {
              display: flex;
              align-items: center;
              > span {
                display: inline-block;
                margin-left: 10px;
              }
          }
        }
        ion-icon {
            font-size: 20px;
            margin-left: 5px;
        }

        > button {
            margin-top: 50px;
            width: 150px;
            height: 80px;
            background-color: #F79B26;
            color: #FFFFFF;
            font-family: proxima-nova, sans-serif;
            font-size: 25px;
            font-weight: bold;
            border: 1px solid #000000;
            border-radius: 5px;
            animation: shake 1.6s infinite linear;
            :hover {
                cursor: pointer;
                background-color: #FA8305;
                color: #EFF2F4;
            }
            @keyframes shake {
                0% {
                    transform: translate(0, 0);
                }
                8.1% {
                    transform: translate(10px, 0);
                }
                24.4% {
                    transform: translate(-10px, 0);
                }
                41.9% {
                    transform: translate(10px, 0);
                }
        
                50% {
                    transform: translate(0, 0);
                }
        
                100% {
                    transform: translate(0, 0);
                }
            }
        }
`





