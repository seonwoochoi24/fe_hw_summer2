import styled from "styled-components";
import { Link } from "react-router-dom"
import next from "../assets/icons/next-velog.svg"
import before from "../assets/icons/before-velog.svg"

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    margin-top: 48px;
    width: 100%;

`
const Box=styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    height: 64px;
    justify-content: space-between;
    background-color: #F8F9FA;
    padding: 0px 16px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
`
const Textwrapper=styled.div`
   width :458px;
   height: 64px;
   display: flex;
   flex-direction: column;
   gap: 8px;
   align-items: center;
   justify-content: center;
`
const Arrowbtn=styled.img`
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid #20C997;
`
const Posttitle=styled.div`
    color: #495057;
    font-size: 16px;
    font-weight: 700;
   display: flex;
align-items: center;
`
const Title=styled.div`
    color: #495057;
    font-size: 12px;
    font-weight: 700; 
    display: flex;
    align-items: center;
`
function Postother({postId}){
  const prevId = Number(postId) - 1;
  const nextId = Number(postId) + 1;
    return(
        <Wrapper>
            <Box>
                <Textwrapper>
                    <Title>다음 포스트</Title>
                    <Posttitle>제목</Posttitle>
                </Textwrapper>
                <Link to={`/boards/${nextId}`}>
                    <Arrowbtn src={next}/>
                </Link>
            </Box>
            <Box>
                {postId>1&&(
                    <Link to={`/boards/${prevId}`}>
                        <Arrowbtn src={before}/>
                    </Link>
                )}

                <Textwrapper>
                    <Title>이전 포스트</Title>
                    <Posttitle>제목</Posttitle>
                </Textwrapper>
            </Box>
        </Wrapper>

    );

}
export default Postother;
