import styled from "styled-components";

export const AppContainer = styled.main`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-block-start: 2rem;

  @media only screen and (min-width: 320px) {
    .upper-blob,
    .lower-blob {
      z-index: -1;
    }

    .upper-blob {
      position: absolute;
      top: 0;
      right: 0;
    }

    .lower-blob {
      position: sticky;
      bottom: 0;
      left: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-block-start: 5rem;

    .lower-blob {
      position: absolute;
    }
  }
`;

export const StartPageContainer = styled.div`
  font-family: "Karla", sans-serif;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #293264;

  h1 {
    font-weight: 700;
    font-style: normal;
    font-size: 32px;
    line-height: 37px;
    color: #293264;
  }

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-block: 3rem;
  }

  button {
    font-family: "Inter", sans-serif;
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
  @media only screen and (min-width: 320px) {
    height: 90%;
    width: 90%;
    margin: 1rem auto;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;

    #check-answers {
      width: 75%;
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
  }

  @media only screen and (min-width: 768px) {
    width: 75%;

    #check-answers {
      width: 30%;
    }
  }
`;

export const QuestionContainer = styled.div`
  @media only screen and (min-width: 320px) {
    border-block-end: 2px solid #dbdef0;
    padding-block-end: 15px;
    margin-block-end: 2rem;

    h1 {
      font-family: "Karla", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #293264;
    }
  }
`;

export const AnswerContainer = styled.div`
  @media only screen and (min-width: 320px) {
    margin-block-start: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

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
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const ResultsContainer = styled.div`
  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  @media only screen and (min-width: 320px) {
    top: 45%;
    left: 40%;
  }

  @media only screen and (min-width: 768px) {
    left: 45%;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    margin-block: 2rem;
  }
`;
