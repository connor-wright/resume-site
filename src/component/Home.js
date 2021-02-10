import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const center = {
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
};

const styles = {
  root: {
    flexGrow: 1,
  },
  profileContainer: {
    margin: "10px",
  },
  profile: {
    height: "200px",
    width: "200px",
    border: "solid",
    borderRadius: "50%",
    ...center,
  },
  content: {
    fontSize: "1.2em",
    ...center,
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.profileContainer}>
          <img
            className={classes.profile}
            src={"./profile.jpg"}
            alt="Connor Wright's profile"
          />
        </div>
        <Divider />
        <div className={classes.content}>
          <p>
            Hello and welcome to my website. I am Connor Wright an excited and
            driven software engineer. I hope you enjoy your stay! Please browse
            my other pages to learn more about me.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
