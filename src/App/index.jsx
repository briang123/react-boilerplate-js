import React from "react";
import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";
import GridStyles from "./GridStyles";

// import Toast from './Toast';
//import Routes from './Routes';

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import "./fontStyles.css";

const App = () => (
  <React.Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <GridStyles />
    {/* <Toast /> */}
    {/* <Routes /> */}
    <div id="div1">ReactJS Boilerplate (ReactJS, Webpack, Babel, CSSGrid)</div>
    <div id="div2">div 1</div>
    <div id="div3">div 2</div>
  </React.Fragment>
);

export default App;
