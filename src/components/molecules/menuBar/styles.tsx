import styled from "styled-components";

export const SectionContent = styled.section`
  width: 100%;
  padding: 30px 0px 30px 0px;
`;

export const DivFather = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: purple;
  width: 500px;

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);

  padding: 8px;
  border-radius: 30px;

  div {
    padding: 0px 1rem 0px 0.4rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;
