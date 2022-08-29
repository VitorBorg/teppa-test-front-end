import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h1 {
    font-size: 3.75rem;
    line-height: 1;

    span:nth-child(3) {
      color: #818cf8;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75;
  }
`;
