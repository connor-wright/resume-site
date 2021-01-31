import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';

const styles = {
};

class Projects extends Component {
    render() {
        return (
            <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
    }
}


export default withStyles(styles)(Projects);