import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';
import Profile from "../../public/images/profile.jpg";

const styles = {
  root:{
    flexGrow: 1,
    marginTop: "10px"
  },
  profileContainer:{
    
  },
  profile:{
    height: "200px",
    width:  "200px",
    border: "solid",
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  },
  content:{
    
  }
};

class Home extends Component{
  render() {
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <div className={classes.profileContainer}>
          <img className={classes.profile} src={Profile} alt="Connor Wright's profile"/>
        </div>
        <div className={classes.content}>HI</div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);