import React from "react";

import ProjectList from "./components/ProjectList/index";
import Layout from "./components/Layout/index";

import GlobalStyles from "./styles/GlobalStyles";

// import dark from "./styles/themes/dark";
// import { ThemeProvider } from "styled-components";
// import * as S from "./styles/styled";

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* <ProjectList />       */}
      <Layout />
    </>
  );
};

export default App;
