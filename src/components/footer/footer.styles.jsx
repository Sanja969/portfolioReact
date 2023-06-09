import styled, {keyframes} from "styled-components";

const shine = keyframes`
  0% {
    color: rgb(0, 255, 0, 0.1)
  }
  100% {
    color: rgb(0, 255, 0, 0.5)
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  top: auto;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  text-align: center;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.326);
  padding-top: 10px;
  a {
    display: block;
    padding: 5px;
    animation: ${shine} 1s;
    margin: 10px;
  }
  h6 {
    padding-bottom: 15px;
    color: white;
  }
  p {
    color: white;
    font-size: 15px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;