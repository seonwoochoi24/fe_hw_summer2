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
const Writer=styled.div`
    color: #212529;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
          text-decoration: underline;
    }
`
const Blacktext=styled.div`
    display: flex;
    align-items: center;
    color: #212529;
    font-size: 14px;
`
const Graytext=styled.div`
    display: flex;
    align-items: center;
    color: #495057;
    font-size: 14px;

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
    cursor: pointer;
`
const Heartbtn=styled.button`
    height: 24px;
    padding: 12px;
    border-radius: 99px;
    background-color: #ffffff;
    border: 1px solid #adb5bd;
    color: #868e96;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    
`
const Heartcount=styled.div`
    color: #868e96;
    font-size: 12px;
    font-weight: 700;
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
            <Writer>{writerName} </Writer>
            <Blacktext>·</Blacktext>
            <Graytext>{year}년 {month}월 {day}일</Graytext>
        </Smallwrapper>
        <Smallwrapper>
            <Followbtn>
                팔로우
            </Followbtn>
            <Heartbtn>
                <Heart src={likeIcon}/>
                <Heartcount>{heartCount}</Heartcount>
            </Heartbtn>
        </Smallwrapper>
    </Wrapper>
);
}
export default Postmenu;