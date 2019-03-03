import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import withRoot from "../withRoot";
import { fetchConversation } from "../apiCall";
import Conversations from "../components/Conversations";
import ActiveConversation from "../components/ActiveConversation";

const styles = theme => ({
  heading: {
    margin: `${theme.spacing.unit * 4}px 0`
  }
});

export class App extends React.Component {
  state = {
    currentuser: {},
    activeConversation: []
  };
  onSelectConversation = async (user, conversationId) => {
    this.setState({ currentUser: user });
    const data = await fetchConversation(conversationId);
    this.setState({ activeConversation: data });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={0}>
        <Conversations setConversation={this.onSelectConversation} />
        <Grid item xs={8}>
          <ActiveConversation conversation={this.state.activeConversation} />
        </Grid>
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
