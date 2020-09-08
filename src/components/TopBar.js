import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return (
    <Container>
      <Column>Currency</Column>
      <Column>Rate</Column>
      <Column>Bid</Column>
      <Column>Ask</Column>
      <Column>High</Column>
      <Column>Low</Column>
      <Column>Open</Column>
      <Column>Close</Column>
      <Column>Time</Column>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 10%);
  justify-content: space-around;
  padding: 2.5vh;
  font-size: 1.2rem;
  background-color: #00838f;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
`;
