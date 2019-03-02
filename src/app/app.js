import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core//Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import { fetchConversation } from "../apiCall";
import Conversations from "../components/Conversations";
import ActiveConversation from '../components/ActiveConversation'

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
  setCurrent = async (user, conversationId) => {
    this.setState({ currentUser: user });
    const data = await fetchConversation(conversationId);
    this.setState({ activeConversation: data });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Conversations
          setConversation={this.setCurrent} // better name for setCurrent
        />
        <ActiveConversation
          conversation={this.state.activeConversation}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
