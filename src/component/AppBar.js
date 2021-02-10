import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { default as MaterialUIAppBar } from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@reach/router";
import Box from "@material-ui/core/Box";

const styles = {
  homeButton: {
    border: "solid",
    borderColor: "white",
    padding: "2px",
  },
  spacer: {
    flexGrow: 1,
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    maxWidth: "800px",
  },
};
const homeButtonProps = {
  padding: 0.5,
  border: 2,
  borderRadius: 12,
};

class AppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MaterialUIAppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            <Box
              component={Typography}
              variant="h6"
              color="inherit"
              {...homeButtonProps}
            >
              CW
            </Box>
          </IconButton>
          <IconButton
            component={Link}
            to="about-me"
            color="inherit"
            aria-label="about-me"
          >
            <Typography variant="h6" color="inherit">
              About Me
            </Typography>
          </IconButton>
          <IconButton
            component={Link}
            to="projects"
            color="inherit"
            aria-label="projects"
          >
            <Typography variant="h6" color="inherit">
              Projects
            </Typography>
          </IconButton>
          <IconButton
            component={Link}
            to="more"
            color="inherit"
            aria-label="more"
          >
            <Typography variant="h6" color="inherit">
              More
            </Typography>
          </IconButton>
          <div className={classes.spacer} />
          <IconButton
            href="https://github.com/connor-wright"
            target="_blank"
            color="inherit"
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://github.com/connor-wright/resume-site"
            target="_blank"
            edge="end"
            color="inherit"
            aria-label="source-code"
          >
            <CodeIcon />
          </IconButton>
        </Toolbar>
      </MaterialUIAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
