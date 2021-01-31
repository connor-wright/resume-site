import React from "react";
import { withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '10px',
  },
  spacer: {
    flexGrow: 1,
  }
};

class App extends React.Component {
  render() {
    const {classes} = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="about-me">
              <Typography variant="h6" color="inherit">
                About Me
              </Typography>
            </IconButton>
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="projects">
              <Typography variant="h6" color="inherit">
                Projects
              </Typography>
            </IconButton>
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="more">
              <Typography variant="h6" color="inherit">
                More
              </Typography>
            </IconButton>
            <div className={classes.spacer}/>
            <IconButton 
              className={classes.menuButton} 
              href="https://github.com/connor-wright"
              target="_blank"
              edge="start" 
              color="inherit" 
              aria-label="github"
            >
              <GitHubIcon/>
            </IconButton>
            <IconButton 
              className={classes.menuButton} 
              href="https://github.com/connor-wright/resume-site"
              target="_blank"
              edge="start" 
              color="inherit" 
              aria-label="source-code"
            >
              <CodeIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);

