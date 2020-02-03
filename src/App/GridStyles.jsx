import { createGlobalStyle } from "styled-components";

//import { color, font, mixin } from "shared/utils/styles";

export default createGlobalStyle`
#root {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  width: 100vw;
  height: 100vh;
  font-size: 35px;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
}
#root > div {
  border: 5px solid #666;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
}
#div1 {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  background-color: coral;
}
#div2 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: aquamarine;
}
#div3 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: goldenrod;
}
`;
