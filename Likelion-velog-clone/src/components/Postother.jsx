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
    @media (min-width: 720px) {
    flex-direction: row-reverse;
    align-items: center;
  

  }

`
const Box=styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    justify-content: space-between;
    background-color: #F8F9FA;
    padding: 0px 16px;
    position: relative;

    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
    @media (min-width: 720px) {
        width: 360px;

  }
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
    position: absolute;
    right:50%;
    top: 30%;
`
const Title=styled.div`
    color: #495057;
    font-size: 12px;
    font-weight: 700; 
    position: absolute;
    right:70px;
    top: 10%;
    display: flex;
    align-items: center;
`
const Titleleft=styled.div`
    color: #495057;
    font-size: 12px;
    font-weight: 700; 
    position: absolute;
    left:70px;
    top: 10%;
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
                    <Titleleft>이전 포스트</Titleleft>
                    <Posttitle>제목</Posttitle>
                </Textwrapper>
            </Box>
        </Wrapper>

    );

}
export default Postother;
