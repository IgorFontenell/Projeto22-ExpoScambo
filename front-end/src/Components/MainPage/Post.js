import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
export default function Post(
    {
    id, 
    title, 
    budget, 
    travelAddress, 
    categoryName,
    photo, 
    name, 
    score,
    description
    }) {
        const navigate = useNavigate();
        

        function navigator() {
            navigate(`/post/${id}`)
        }

    return(
        <PostDiv onClick={navigator}>
            <div className="front face">
                <span> {title} </span>
                <span> Valor Máximo: $ {budget} </span>
                <span> Local: {travelAddress} </span>
                <span> Categoria: {categoryName} </span>
                <Profile>
                    <img src={photo} alt="Perfil" width="100px"/>
                    <div>
                        <span>{name}</span>
                        <div>
                            <span>{score/100}</span>   
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                        
                    </div>
                </Profile>
            </div>
            <div className="back face">
                <span> Descrição</span>
                <span>{description}</span>
            </div>
        </PostDiv>
        
    
    )
}

const PostDiv = styled.div`
    width: 300px;
    height: 260px;
    margin: 40px;
    position: relative;

    .face {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        position: absolute;
        backface-visibility: hidden;
        transition: all .7s;
        transform-style: preserve-3d;
        box-shadow: 0 0 3px 0px #D9D9D9;
        border: 1px solid #D9D9D9;
        border-radius: 24px;
        font-family: proxima-nova, sans-serif;
        background-color: #FFFFFF;
    }
    .front {
        display: flex;
        flex-direction: column;
        align-items: center;

        > span:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
        padding-top: 15px;
        }

        > span:nth-child(2) {
            font-size: 16px;
            padding-top: 5px;
            font-weight: bold;
            }

        > span:nth-child(3) {
            font-size: 16px;
            padding-top: 5px;
            }

        > span:nth-child(4) {
            font-size: 16px;
            padding-top: 5px;
            }
    }
    .back {
        transform: rotateY(180deg);
        justify-content: flex-start;
        padding: 15px;
        span:nth-child(1) {
            font-size: 20px;
            font-weight: bold;
        }
        span:nth-child(2) {
            font-size: 16px;
            font-weight: none;
        }
    }

    :hover .back {
        transform: rotateY(0deg);
      }

    :hover .front {
        transform: rotateY(-180deg);
      }
    /* :hover {
        width: 308px;
        height: 266px;
    } */

`
const Profile = styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-left: 20px;
    
    img {
        width: 100px;
        border-radius: 25%;
    }
    > div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        font-size: 16px;
        font-weight: bold;
        > div {
            display: flex;
            align-items: center;
            span {
                display: inline-block;
                margin-top: 10px;
                font-size: 18px;
            }
        }
    }
    ion-icon {
        margin-left: 5px;
        font-size: 20px;
        padding-top: 5px;
    }
   
`

