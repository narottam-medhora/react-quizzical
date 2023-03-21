import styled from "styled-components";

export const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  font-family: "Inter", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlobsContainer = styled.div`
  z-index: -1;

  .upper-blob {
    position: absolute;
    top: 0;
    right: 0;
  }

  .lower-blob {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const StartPageContainer = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 31.25px;
    line-height: 37px;
    text-align: center;
    color: #293264;
    margin-block: 1rem;
  }

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #293264;
    margin-block: 3rem;
  }

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #f5f7fb;
    width: 193px;
    height: 52px;
    background: #4d5b9e;
    border: none;
    border-radius: 15px;
  }
`;

export const QuizPageContainer = styled.div`
  height: 75%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;

  #check-answers {
    width: 30%;
    height: auto;
    align-self: center;

    background: #4d5b9e;
    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    padding: 11px;

    color: #f5f7fb;
  }
`;

export const QuestionContainer = styled.div`
  border-block-end: 2px solid #dbdef0;
  padding-block-end: 15px;

  h1 {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #293264;
  }
`;

export const AnswerContainer = styled.div`
  margin-block-start: 15px;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    border: 1px solid #4d5b9e;
    background: none;
    border-radius: 15px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #293264;
    padding-inline: 15px;
    padding-block: 4px;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
