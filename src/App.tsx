import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { RoutesRender } from "routes/Routes";

import "./assets/scss/base.scss";

const App: FC = () => (
  <BrowserRouter>
    <RoutesRender />
  </BrowserRouter>
);
export default App;
