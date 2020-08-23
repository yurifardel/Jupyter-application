import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #390240 ;
  padding: 20px;
  bottom: 12px;
 
  @media(max-width: 800px){
     overflow: auto;
  }
  
`;

export const Iframe = styled.iframe`
  position: relative;
  right: 10vh;
  bottom: 10vh;
  @media(max-width: 1310px){
    
    position: relative;
    top: 30vh;
    left: 30vh;
    
  }
`;

export const Text = styled.img`
  margin-bottom: 50px;
  position: relative;
  bottom: 40vh;
  left: 15vh;
  @media(max-width: 1310px){
    position: relative;
    top: 0;
    left: 10vh;
    bottom: 10vh;
  }
  
`;
