import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
export default function ProfileBox({ id, photo, name, score, email }) {

    

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
`





