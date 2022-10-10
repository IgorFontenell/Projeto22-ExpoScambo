import styled from "styled-components";

export default function Category({ name, categoryChoosed, setCategory}) {
    console.log(name, categoryChoosed);


    return (
        <CategoryDiv onClick={() => setCategory(name)} categoryChoosed={categoryChoosed} name={name}>
                <span>{name}</span>
        </CategoryDiv>
    )
}

const CategoryDiv = styled.div`
    border: 1px solid;
    height: 25px;
    display: flex;
    align-items: center;
    padding: 16px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: ${props => props.categoryChoosed === props.name ? '#F79B26' : '#FA8305'};
    
    :hover {
        background-color: #F79B26;
        cursor: pointer;
        }
    span {
        font-family: proxima-nova, sans-serif;
        font-size: 16px;
        color: ${props => props.categoryChoosed === props.name ? '#FFFFFF' : '#000000'};
    }
    
`