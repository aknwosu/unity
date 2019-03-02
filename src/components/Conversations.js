import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import { fetchUsers, fetchConversations } from "../apiCall";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core//Typography";

const styles = theme => ({
  userInfo: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
  },
  userName: {
    fontSize: 16,
    fontWeight: 600
  }
});
export class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      conversations: []
    };
  }
  componentDidMount() {
    fetchUsers().then(data => this.setState({ users: data }));
    fetchConversations().then(data => this.setState({ conversations: data }));
  }

  renderConversations = () => {
    const { classes, setConversation } = this.props;
    return (
      this.state.conversations &&
      this.state.conversations.map(conversation => {
        const [user] =
          this.state.users &&
          this.state.users.filter(
            user => user.id === conversation.with_user_id
          );
        return (
          <Grid
            container
            direction="row"
            alignItems="center"
            key={conversation.id}
            className={classes.userInfo}
            onClick={() => setConversation(user, conversation.id)}
          >
            <Avatar alt="Remy Sharp" src={user.avatar_url} />
            <Grid container direction="column">
              <Typography className={classes.userName}>
                {user.username}
              </Typography>
              <Typography fontSize={14} fontWeight="fontWeightMedium">
                {user.unread_message_count > 0
                  ? `Unread messages(${user.unread_message_count})`
                  : "All caught up"}
              </Typography>
            </Grid>
          </Grid>
        );
      })
    );
  };
  render() {
    return (
      <div>
        <div>Conversations</div>
        {this.renderConversations()}
      </div>
    );
  }
}

Conversations.propTypes = {
  classes: PropTypes.object.isRequired,
  setConversation: PropTypes.func.isRequired
};

export default withRoot(withStyles(styles)(Conversations));
