import styled from "styled-components";
import { Link } from "react-router-dom"
import likeIcon from "../assets/icons/like-velog.svg"

const Wrapper=styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    max-width: 768px;
`
const Smallwrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
`
const Blacktext=styled.div`
    color: black;
    font-weight: 400;
`
const Graytext=styled.span`
    color: #495057;
`
const Followbtn=styled.button`
    height: 24px;
    width: 80px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 99px;
    background-color: #ffffff;
    border: 1px solid #12b886;
    color: #12b886;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
const Heartbtn=styled.button`
    height: 24px;
    border-radius: 99px;
    background-color: #ffffff;
    border: 1px solid #adb5bd;
    color: #868e96;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-left: 4px;
    
`
const Heart=styled.img`
    width: 12px; 
    filter: brightness(0) saturate(100%) 
    invert(45%) sepia(6%) saturate(0%) hue-rotate(180deg);

`
function Postmenu({createdAt, heartCount, writerName, writerProfileUrl}) {
    let year, month, day;
    if (createdAt) {
    [year, month, day] = createdAt.split("-");
    }
  return(
    <Wrapper>
        <Smallwrapper>
            <Blacktext>{writerName} </Blacktext>
            <Blacktext>·</Blacktext>
            <Graytext>{year}년 {month}월 {day}일</Graytext>
        </Smallwrapper>
        <Smallwrapper>
            <Followbtn>
                팔로우
            </Followbtn>
            <Heartbtn>
                <Heart src={likeIcon}/>
                {heartCount}
            </Heartbtn>
        </Smallwrapper>
    </Wrapper>
);
}
export default Postmenu;