// Categories.jsx
import styled from "styled-components";
import trendIcon from "../assets/icons/trend-velog.png"
import clockIcon from "../assets/icons/clock-velog.png"
import feedIcon from "../assets/icons/feed-velog.png"
import menuIcon from "../assets/icons/menu-velog.svg"
import downIcon from "../assets/icons/down-velog.svg"

const Box=styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    margin: 0 auto;
    height: 72px;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0px;
    box-sizing: border-box;
`
const Btnleft=styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;
    justify-content: space-between;
    align-items: center;
    
`
const Categorybtn=styled.div`
    display: flex;
    flex-direction: row;
    gap:5px;
    align-items: center;
    &:first-child {          
    border-bottom: 2px solid black;}    
    &:nth-child(2){filter: invert(75%) grayscale(150%);
     }
    &:nth-child(3){filter: invert(75%) grayscale(150%);
     }
`
const Icon=styled.img`
    width: 18px;
    height: 18px;
     cursor: pointer;
`
const Btnright=styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;
    justify-content: space-between;
    align-items: center;
`
const Downbtn=styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #495057;
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 84px;
    min-width: 70px;
    max-width: 100px;
    background-color: white;
    border-radius:5px;
    gap:5px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
    cursor: pointer;
              &:hover {
        opacity: 0.75;
  }
`
function Categories() {
  return(
  <Box>
    <Btnleft>
        <Categorybtn >
            <Icon src={trendIcon}/>
            트렌딩
        </Categorybtn>
            <Categorybtn>
            <Icon src={clockIcon}/>
            최신
        </Categorybtn>
            <Categorybtn>
            <Icon src={feedIcon}/>
            피드
        </Categorybtn>
    </Btnleft>
    <Btnright>
        <Downbtn>
            이번 주
            <Icon src={downIcon}/>
        </Downbtn>
        <Icon src={menuIcon}/>
    </Btnright>

  </Box>
  );

}

export default Categories;