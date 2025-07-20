import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

import Postmenu from "../components/Postmenu.jsx";
import Postprofile from "../components/Postprofile.jsx";
import Postfloat from "../components/Postfloat.jsx";

import Categories from "../components/Categories.jsx";
import Contents from "../components/Contents.jsx";
import Header from "../components/Header.jsx";

import logoSrc from "../assets/icons/img-logo.svg";
import Postother from "../components/Postother.jsx";

const Page=styled.div`
  background-color: #fff;
  padding: 20px 20px;
  width: 100%;
  min-width: 450px;
  overflow-x: hidden;
  min-height: 100vh; 
  box-sizing: border-box; 
  
`
const Box=styled.div`
  margin: 36px auto;
  max-width: 768px;

`
const Title=styled.div`
  font-size: 48px;
  overflow-wrap: break-word;
  font-weight: bold;
  margin-bottom: 32px;
`
const Thumbnail=styled.img`
  margin-top: 24px;
  width: 100%;
`
const Article=styled.div`
  margin: 16px 0;
  padding: 0px 16px;
`
const PostfloatWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;

  }
`
const { VITE_API_BASE_URL } = import.meta.env;

function PostDetail() {
  const [post, setPost] = useState([]);
  const postId = useParams().id;
  console.log("주소:", postId);

  const fetchData = async () => {
    try {
        const response = await axios.get(`${VITE_API_BASE_URL}/boards/${postId}`); 
            console.log("현재꺼: ", response); 
            setPost(response.data);
  
    } catch (err) {
        alert(err);
        console.log("오류", err); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  console.log("정보:",post.content);

  return(
    <Page>
      <Header logoSrc={logoSrc} nameSrc={post.writerName}/>
      <Box>
        <PostfloatWrapper>
          <Postfloat
          heartCount={post.heartCount}
          />
        </PostfloatWrapper>
        <Title>{post.title}</Title>
        <Postmenu 
          createdAt={post.createdAt}
          writerName={post.writerName}
          heartCount={post.heartCount}
          writerProfileUrl={post.writerProfileUrl}
        />
      <Thumbnail src={post.thumbnailUrl}/>
      <Article>{post.content}</Article>
      <Postprofile
          
          writerName={post.writerName}
          writerProfileUrl={post.writerProfileUrl}
      />
      <Postother
        postId={post.id}
      />
      </Box>
    </Page>
  );

}

export default PostDetail;
