import * as React from "react";
import App from "../component/App";
import "fontsource-roboto";
import ReactDom from "react-dom";

// set body style
document.body.style.margin = "0px";
const IndexPage = () => {
  return ReactDom.render(
    <App />,
    document.getElementById("___gatsby")
  );
};

export default IndexPage;
