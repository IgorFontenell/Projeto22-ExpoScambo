import styled from "styled-components";

export default function Category({ type }) {
    return (
        <CategoryDiv>
                <span>{type}</span>
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

    :hover {
        background-color: #F79B26;
        cursor: pointer;
        }
    
`