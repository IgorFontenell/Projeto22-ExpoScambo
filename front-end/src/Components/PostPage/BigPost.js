import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { useState ,useContext, useEffect } from "react";

export default function BigPost(
    {
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
        const { user } = useContext(UserContext);
        const [isTheUser, setIsTheUser ] = useState(false);

        useEffect(() => {
             console.log(user, user.name, name);
             if(user.name == name) {
                 setIsTheUser(true);
             }
        }, [user]);
        
        

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

            <Profile isTheUser={isTheUser}>
                <div>
                    <img src={photo} alt="Perfil" />
                    <div>
                        <span>{name}</span>
                        <div>
                            <span>{score/100}</span>   
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div>
                    <ion-icon isTheUser={isTheUser} name="chatbubble-outline" onClick={() => navigate(`/chat/${userId}`)}></ion-icon>  
                    <ion-icon name="person-outline" onClick={() => navigate(`/profile/${userId}`)}></ion-icon>
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
    padding-right: 10px;

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
`
const Profile = styled.div`
    width: 300px;
    height: 150px;
    margin-top: 40px;
    padding: 20px;
    border-radius: 24px;
    background-color: #FFFFFF;
    box-shadow: 0 0 5px 2px #D9D9D9;
    display: flex;
    flex-direction: column;
    transition: .4s linear;
    > div:nth-child(1) {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > div {
            > div {
                display: flex;
                align-items: center;
                ion-icon {
                    padding-bottom: 2px;
                }
            }
        }
    }
    > div:nth-child(2) {
       height: 50px;
       margin-top: 10px;
       width: 100%;
       display: none;

       ion-icon {
        padding-left: 10px;
        margin-right: 15px;
        font-size: 35px;
        padding-top: 10px;
        cursor: pointer;
        } 

         > ion-icon:nth-child(1) {
        display: ${props => props.isTheUser === true ? 'none' : ''};
        } 

    }
    img {
        width: 120px;
        height: auto;
        border-radius: 25%;
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

    :hover {
        height: 200px;
        justify-content: flex-start;
        > div:nth-child(2) {
            display: initial;
        }
    }

`


