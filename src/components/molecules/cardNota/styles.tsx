import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 1rem;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);

  min-width: 190px;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
`;

export const Data = styled.data`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const Info = styled.data`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  strong {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const title = styled.h3`
  font-size: 1.35rem;
  text-align: center;
  padding-top: 1rem;
`;

export const date = styled.p`
  font-size: 0.75rem;
  text-align: right;
  color: gray;
`;
