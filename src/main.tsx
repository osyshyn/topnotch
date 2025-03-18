import ReactDOM from "react-dom/client";
import App from "./App";
import ReactDOMServer from 'react-dom/server';
import "./styles/index.css";

const html = ReactDOMServer.renderToStaticMarkup(<App />);
console.log(html);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <App />
);
