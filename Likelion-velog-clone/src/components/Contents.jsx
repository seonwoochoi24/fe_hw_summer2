import styled from "styled-components";

const Box=styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 16px auto;
    display: grid;
    justify-content: center;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr); 
    @media (max-width: 1056px) {
        grid-template-columns: repeat(2, 1fr);
    }
     @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
function Contents({children}) {
  return(
  <Box>
    {children}
  </Box>
  );
}

export default Contents;