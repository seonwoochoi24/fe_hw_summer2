import { styled } from "styled-components";

import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Contents from "../components/Contents.jsx";
import Header from "../components/Header.jsx";

import { useState, useEffect } from "react";
import axios from "axios";

const Page=styled.div`
  background-color: #f8f9fa;
  padding: 20px 20px;
  width: 100%;
  min-width: 450px;
  overflow-x: hidden;
  min-height: 100vh; 
  box-sizing: border-box; 
`
const { VITE_API_BASE_URL } = import.meta.env;

function HomePage() {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
    const response = await axios.get(`${VITE_API_BASE_URL}/boards`);
      console.log("출력하겠음: ", response);
      setPosts(response.data);
    } catch (error) {
      console.log("에러~!", error);
    }
  };

useEffect(() => {
  fetchData();
}, []);


  return(
  <Page>
    <Header/>
    <Categories/>
    <Contents>
        {posts.map((data) => (
        <Card
          commentCount={data.commentCount}
          content={data.content}
          createdAt={data.createdAt}
          heartCount={data.heartCount}
          postId={data.id}
          title={data.title}
          thumbnailUrl={data.thumbnailUrl}
          writerName={data.writerName}
          writerProfileUrl={data.writerProfileUrl}
        />
      ))}
    </Contents>
  </Page>
  );

}

export default HomePage;
