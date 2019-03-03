import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import { fetchUsers, fetchConversations } from "../apiCalls";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  conversation: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    cursor: "pointer",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: grey[500]
    }
  },
  userName: {
    fontSize: 16,
    fontWeight: 600
  },
  conversationList: {
    padding: 10,
    backgroundColor: grey[200],
    height: "-webkit-fill-available",
    width: 260
  },
  userInfo: {
    marginLeft: 10
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
    const { conversations, users } = this.state;
    return (
      conversations &&
      conversations.map(conversation => {
        const [user] =
          users && users.filter(user => user.id === conversation.with_user_id);
        return (
          <Grid
            key={conversation.id}
            className={classes.conversation}
            onClick={() => setConversation(user, conversation.id)}
          >
            <Grid item>
              <Avatar alt="Remy Sharp" src={user.avatar_url} />
            </Grid>
            <Grid item>
              <div className={classes.userInfo}>
                <Typography className={classes.userName}>
                  {user.username}
                </Typography>
                <Typography fontSize={14} fontWeight="fontWeightMedium">
                  {conversation.unread_message_count > 0
                    ? `Unread messages(${conversation.unread_message_count})`
                    : "All caught up"}
                </Typography>
              </div>
            </Grid>
          </Grid>
        );
      })
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.conversationList}>
        <Typography variant="h6">Conversations</Typography>
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
