import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: #141414;
  border-top: 2px solid #300f40;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  a{
    text-decoration: none;
    &:hover{
      transition: 1s;
      color: #381747;
    }
  }
`;