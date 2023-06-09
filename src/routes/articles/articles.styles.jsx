import styled, { keyframes } from 'styled-components';

const mainColor ='#30fffe';
const transColor2 = '#30fffe20';

const move = keyframes`
  0% {
    margin-top: 2000px;
  }
  100% {
    margin-top: 150px;
  }
`;

export const ArticlesContainer = styled.div`
  min-height: calc(100vh - 150px);
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  animation: ${move} 2s linear;
  z-index: 0;

  h2 {
    font-size: 26px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    margin-bottom: 30px;
  }
`;

export const ArticlesSubContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  h3,
  a {
    @media (max-width: 1020px) {
      font-size: 24px !important;
    }
  }
  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ArticleContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 100% !important;
  width: 100%;
  background-color: ${transColor2};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid ${mainColor};
  cursor: pointer;
  @media (max-width: 1020px) {
    width: 90%;
  }

  h3 {
    font-size: 26px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a,
    button {
      margin-left: 10px;
      padding: 5px !important;
      border: none;
      background-color: rgba(0, 255, 0, 0.5);
      cursor: pointer;
      font-size: 14px;
      height: 27px;
    }
    button {
      background-color: red;
    }
  }
  small {
    color: white;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    font-size: 12px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
  }

  a {
    margin-top: 10px;
    color: green;
  }
`;
