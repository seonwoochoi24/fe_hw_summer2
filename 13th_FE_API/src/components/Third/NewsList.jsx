import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../common/Title";
import Categories from "../common/Categories";
import styled from "styled-components";

const NewsList = () => {

  const Wrapper=styled.div`
    margin: 0 auto;
    width: 80%;
    height: 60px;
    color: white;
    display: flex;
    flex-direction: row;
    gap: 20px;
  `
  const Newsimg=styled.img`
    height: 60px;
    width: 100px;
  `
  const Box=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `
  const [content, setContent]=useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );

     console.log(response.data.articles);
     const newsArray=response.data.articles;
     
     setContent(newsArray);
    //  console.log("제목", newsArray[0].title);
    //  console.log("사진", newsArray[0].urlToImage);


    }catch (error) {
      console.error("에러 내용:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title={"멋사 NEWS"} />
      <Categories/>
      <Box>

      {content.length > 0 ? (
        content.map((post)=>(
          <Wrapper key={post.id}>
            <Newsimg src={post.urlToImage}/>
            <div>{post.title}</div>
          </Wrapper>
        ))
      ) : (
        <Wrapper>
        데이터를 불러오는 중입니다...

        </Wrapper>
    )}
      </Box>

    </>
  );
};

export default NewsList;
