import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';

const styles = {
};

class Projects extends Component {
    render() {
        return (
            <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
    }
}


export default withStyles(styles)(Projects);