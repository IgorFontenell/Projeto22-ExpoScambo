import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
export default function BigPost(
    {
    id, 
    title, 
    budget, 
    travelAddress, 
    categoryName,
    photo, 
    name, 
    score,
    description,
    arrivalDay,
    departureDay,
    userId
    }) {
        const navigate = useNavigate();
        

        function navigator() {
            navigate(`/post/${id}`)
        }

    return(
        <>
            <PostDiv>
                <span> {title} </span>    
                <div>
                    <span> Descrição: </span><span>{description}</span>
                </div>
                <div>
                    <div>
                        <span> Categoria: </span><span>{categoryName} </span>
                    </div>
                    <div>
                        <span> Valor Máximo: </span><span>${budget}</span>
                    </div>
                    <div>
                        <span> Local: </span><span>{travelAddress} </span>
                    </div>
                    <div>
                        <span> Ida: </span><span>{arrivalDay} </span>
                    </div>
                    <div>
                        <span> Volta: </span><span>{departureDay} </span>
                    </div>
                </div>
                
            </PostDiv>

            <Profile>
            <div className="front face">
                <img src={photo} alt="Perfil" />
                <div>
                    <span>{name}</span>
                    <div>
                        <span>{score/100}</span>   
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="back face">
                <div>
                    <span>{name}</span>
                    <div>
                        <ion-icon name="chatbubble-outline" onClick={() => navigate(`/chat/${userId}`)}></ion-icon>  
                        <ion-icon name="person-outline" onClick={() => navigate(`/profile/${userId}`)}></ion-icon>
                    </div>
                </div>
            </div>
            
            </Profile>
        </>
    
    )
}

const PostDiv = styled.div`
    width: 450px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #D9D9D9;
    border-radius: 24px;
    font-family: proxima-nova, sans-serif;
    background-color: #FFFFFF;
    box-shadow: 0 0 5px 2px #D9D9D9;
    margin: 40px;
    transition: padding .1s;
    padding-left: 35px;
    padding-bottom: 35px;

     > span:nth-child(1) {
        font-size: 36px;
        font-weight: bold;
        padding-top: 15px;
    }

    > div:nth-child(2) {
        font-size: 25px;
        padding-top: 5px;
        

        span:nth-child(1) {
            font-weight: bold;
        }
    }
    > div:nth-child(3) {
        > div:nth-child(1) {
        font-size: 22px;
        padding-top: 5px;
        span:nth-child(1) {
            font-weight: bold;
        }
        
    }
    > div:nth-child(2) {
        font-size: 20px;
        padding-top: 5px;
        span:nth-child(1) {
            font-weight: bold;
        }
    }
    > div:nth-child(3) {
        font-size: 20px;
        padding-top: 5px;
        span:nth-child(1) {
            font-weight: bold;
        }
    }
    > div:nth-child(4) {
        font-size: 18px;
        padding-top: 5px;
        span:nth-child(1) {
            font-weight: bold;
        }
    }
    > div:nth-child(5) {
        font-size: 18px;
        padding-top: 5px;
        span:nth-child(1) {
            font-weight: bold;
        }
    }
    }
     
    :hover {
        width: 460px;
        padding-bottom: 40px;
    }

`
const Profile = styled.div`
    width: 300px;
    height: 150px;
    margin-top: 40px;
    position: relative;
    
    img {
        width: 120px;
        height: auto;
        border-radius: 25%;
    }

      .face {
        width: 100%;
        height: 100%;
        padding: 20px;
        border-radius: 24px;
        background-color: #FFFFFF;
        box-shadow: 0 0 5px 2px #D9D9D9;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: absolute;
        backface-visibility: hidden;
        transition: all .5s;
        transform-style: preserve-3d;
        > div {
            > div {
                display: flex;
                align-items: center;
            }
        }
      }

      .back {
        transform: rotateY(180deg);
        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            > span {
                font-size: 25px;
            }
            ion-icon {
                margin-left: 15px;
                font-size: 28px;
                padding-top: 10px;
            }
        }
      }

      :hover .back {
        transform: rotateY(0deg);
      }

      :hover .front {
        transform: rotateY(-180deg);
      }

      span {
        display: inline-block;
        margin-top: 10px;
        margin-left: 15px;
        font-size: 20px;
        font-weight: bold;
        font-family: proxima-nova, sans-serif;
        }

      ion-icon {
        margin-left: 5px;
        font-size: 22px;
        padding-top: 10px;
    }


`


