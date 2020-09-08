import React from "react";
import TopBar from "./TopBar";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TopBar />
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
