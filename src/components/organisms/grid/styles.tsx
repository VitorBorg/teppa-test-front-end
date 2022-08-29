import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 60px;
  min-height: 600px;

  background-color: #111827;
`;

export const ContainerUl = styled.ul`
  display: grid;
  //grid: repeat(1, auto) / auto-flow auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  li {
    list-style-type: none;
  }
`;
