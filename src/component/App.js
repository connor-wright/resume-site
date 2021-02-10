import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Router } from "@reach/router";
import AppBar from "./AppBar";
// other pages
import Home from "./Home";
import More from "./More";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

const styles = {
  root: {
    flexGrow: 1,
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    maxWidth: "800px",
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar />
        <div className={classes.content}>
          <Router>
            <Home path="/" />
            <AboutMe path="about-me" />
            <Projects path="projects" />
            <More path="more" />
          </Router>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
