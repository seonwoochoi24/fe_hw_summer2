import styled from "styled-components";
import likeIcon from "../assets/icons/like-velog.svg"
import { Link } from "react-router-dom"

const Box=styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
`
const StyledLink=styled(Link)`
  text-decoration: none;
  color: inherit;
`
const Smallbox1=styled.div`
  height: 251.56px;
`
const Smallbox2=styled.div`
  display: flex;
  height: 189px;
  flex-direction: column;
  justify-content: space-between;
`
const Smallbox3=styled.div`
  border-top: 0.1px solid lightgray;
  height: 45px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`
const Wrapper=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Thumbnail=styled.img`
  height:210px;
  width: 100%;
  object-fit: cover;
`
const Title=styled.h5`
  margin: 10px;
`
const Content=styled.div`
  margin: 10px ;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: .875rem;
  line-height: 1.5;
`
const Date=styled.div`
  margin: 10px;
  font-size: 10px;
  color: gray;
`

const Icon=styled.img`
    width: 15px;
    height: 15px;
`
const Profile=styled.img`
  width: 24px;
  height: 24px;
  border-radius: 99px;
  object-fit: fill;
`

function Card({postId, commentCount, content, createdAt, heartCount, title, thumbnailUrl, writerName, writerProfileUrl}) {
  const [year, month, day]=createdAt.split(" ")[0].split("-");
  return(
    <Box>
      <StyledLink to={`/boards/${postId}`}>
        <Smallbox1>
          <Thumbnail src={thumbnailUrl}/>
        </Smallbox1>
        <Smallbox2>
          <div>
          <Title>{title}</Title>
          <Content>{content}</Content>
          </div>
        <Date>{year}년 {month}월 {day}일 · {commentCount}개의 댓글</Date>
        </Smallbox2>
      </StyledLink>
      <Smallbox3>
        <Wrapper>
          <Profile src={writerProfileUrl}/>
          <div>by <b>{writerName}</b></div>
        </Wrapper>
        <Wrapper>
          <Icon src={likeIcon}/>
          {heartCount}
        </Wrapper>
      </Smallbox3>
    </Box>
  );

}

export default Card;