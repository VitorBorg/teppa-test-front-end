import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  width: 30%;
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 1rem;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
`;

export const FormDiv = styled.div`
  height: auto;
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    padding-bottom: 1rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;

  button {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.01);
  }
`;

export const Progress = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const ProgressWhite = styled.div`
  height: 0.7rem;
  width: 47%;

  background-color: rgba(255, 255, 255, 1);
`;

export const ProgressDone = styled.div`
  height: 0.7rem;
  width: 47%;

  background-color: #818cf8;
`;

export const buttonCadastrar = styled.button`
  :disabled {
    color: #383838;
  }
`;
