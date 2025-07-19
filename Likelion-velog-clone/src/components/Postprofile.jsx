import styled from "styled-components";
import { Link } from "react-router-dom"
import likeIcon from "../assets/icons/like-velog.svg"

const Box=styled.div`
    height: 131px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid #E9ECEF;
`
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    height: 131px;
    gap: 16px;
    font-size: 18px;
    font-weight: bold;
`
const Profileimg=styled.img`
    border-radius: 999px;
    height: 80px;
`
const Followbtn=styled.button`
    height: 24px;
    min-width: 72px;
    width: 80px;
    max-width: 96px;
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
function Postprofile({writerName, writerProfileUrl}){
    return(
        <Box>
            <Wrapper>
                <Profileimg src={writerProfileUrl}/>
                <div>{writerName}</div>
            </Wrapper>
            <Followbtn>팔로우</Followbtn>
        </Box>
    );
}

export default Postprofile;