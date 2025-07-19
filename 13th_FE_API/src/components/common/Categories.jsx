import { styled } from "styled-components";

const Box=styled.div`
    width: 80%;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin: 30px auto;
    padding: 15px;
`
const Category = styled.div`
    color: #FFF;
`

function Categories(){
  return (
    <Box>
      <Category>전체</Category>
      <Category>스포츠</Category>
      <Category>연예</Category>
      <Category>경제</Category>
    </Box>
  );
};

export default Categories;
