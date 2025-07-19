// Header.jsx
import React from "react";
import styled from "styled-components";
import logoIcon from "../assets/icons/velog-logo.svg"
import notificationIcon from "../assets/icons/notification-velog.png";
import searchIcon from "../assets/icons/search-velog.png"

const Box=styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1024px;
    flex-direction: row;
    height: 40px;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
`
const Logo=styled.img`
    height: 20px;
`

const Icongroup=styled.div`
    min-width: 172px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Icon=styled.img`
    width: 18px;
    height: 18px;
`
const Loginbtn=styled.button`
    border: none;
    font-size: 16px;
    font-weight: bold;
    background-color: #212129;
    color: white;
    border-radius: 90px;
    width: 80px;
    height: 32px;
`
const Wrapper=styled.div`
    width: 513px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
`
const Name = styled.div`
  font-family: 'Arial', sans-serif;
  font-size: 21px;
  font-weight: bold;
`;

function Header({logoSrc, nameSrc}) {
  return(
  <Box>
    <Wrapper>
        <Logo src={logoSrc||logoIcon}/>
        {nameSrc ? <Name>{nameSrc}</Name>:null} 
    </Wrapper>
    <Icongroup>
     <Icon src={notificationIcon} alt="종 아이콘"/>
     <Icon src={searchIcon} alt="검색 아이콘"/>
     <Loginbtn>로그인</Loginbtn>
    </Icongroup>
  </Box>
  );

}

export default Header;