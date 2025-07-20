import styled from "styled-components";
import { Link } from "react-router-dom"
import heart from "../assets/icons/like-velog.svg"
import share from "../assets/icons/share-velog.svg"

const Frame=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #F1F3F5;
    box-sizing: border-box;
    border-radius: 90px;
    width: 64px;
    height: 150px;
    background-color: #F8F9FA;
    padding: 8px;
    position: fixed;
    left: 10%; 
    top: 112px;
    transform: translateX(-100%);

`
const Circle=styled.button`
    border: none;
    width: 46px;
    height: 46px;
    padding: 1px;
    font-weight: bold;
    background-color: #FFFFFF;
    border-radius: 90px;
    border: 1px solid #DEE2E6;;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
        &:hover{
        border: solid #212529;
    }
    
`
const Icon=styled.img`
    width: 24px;
    filter: brightness(0) saturate(100%) 
    invert(45%) sepia(6%) saturate(0%) hue-rotate(180deg);
    &:hover{
        filter: none;
    }
`
const Count=styled.span`
    color:#495057;
    font-weight: bold;
    font-size: 0.75rem;
`
function Postfloat({heartCount}){
  return(
    <Frame>
        <Circle>
            <Icon src={heart}/>
        </Circle>
        <Count>{heartCount}</Count>
        <Circle>
            <Icon src={share}/>
        </Circle>
    </Frame>
  );

}

export default Postfloat;