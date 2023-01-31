import { render } from "react-dom";

import { App } from "./App";
import { MoviesProvider } from "./hooks/MoviesContext";

render(
  <>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </>,
  document.getElementById("root")
);
