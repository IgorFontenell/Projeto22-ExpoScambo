import styled from "styled-components";


export default function Post() {
    return(
        <PostDiv>
            <span> Trago apenas roupas </span>
            <span> Valor Máximo: $ 500.00 </span>
            <span> Local: Newyork - NY </span>
            <Profile>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocDGgUY5qj7xJKLi-H7Vnv7oCiM2O55Ez-VxJo5b4Mw&s" alt="Perfil" width="100px"/>
                <div>
                    <span>João Guilherme</span>
                    <div>
                        <span>8.9</span>   
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                      
                </div>
            </Profile>
        </PostDiv>
        
    
    )
}

const PostDiv = styled.div`
    width: 300px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #D9D9D9;
    border-radius: 24px;
    font-family: proxima-nova, sans-serif;
    background-color: #FFFFFF;
    box-shadow: 0 0 3px 0px #D9D9D9;
    margin: 40px;
    transition: width .1s;

     > span:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
        padding-top: 15px;
    }

     > span:nth-child(2) {
        font-size: 16px;
        font-weight: bold;
        padding-top: 5px;
    }

     > span:nth-child(3) {
        font-size: 16px;
        padding-top: 5px;
        
    }
    :hover {
        width: 306px;
        height: 244px;
    }

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
        align-items: center;
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

