import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  width: auto;
  min-width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
`;

export const FormDiv = styled.div`
  height: 300px;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    padding-top: 1rem;
    padding-bottom: 0.4rem;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const access = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 1rem;

  div:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0.4rem;

    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.03);
  }
`;

export const buttonCadastrar = styled.button`
  :disabled {
    color: #383838;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;

  button {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.01);
  }
`;
