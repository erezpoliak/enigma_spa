import React from "react";
import TopBar from "./TopBar";
import Feed from "./Feed";
import styled, { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <TopBar />
        <Feed />
      </Grid>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   font-size: 10px;
   color: #424242;
 }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 12vh 88vh;
`;
