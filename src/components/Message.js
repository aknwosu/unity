import React, { Component } from 'react'
import { fetchUser } from '../apiCall'
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  },
  conversationInfo: {
    marginBottom: 15
  },
  messageDate: {
    color: grey[500]
  }
})
export class Message extends Component {
  constructor(props) {
    super(props)
    this.getUser(props.message.from_user_id)
    this.state = {
      user: {}
    }
  }
  getUser = async (userId) => {
    const user = await fetchUser(userId);
    this.setState({user})
  }
  render() {
    const { user } = this.state
    const { message, classes } = this.props
    const date = new Date(message.created_at)

    return(
      <div className={classes.wrapper}>
        {user && (
          <Grid container direction="row" spacing={16} className={classes.conversationInfo}>
            <Grid item>
              <Avatar alt={user.username} src={user.avatar_url}  />
            </Grid>
            <Grid item>
              <Typography>{user.username}</Typography>
              <div className={classes.messageDate}>{date.toLocaleString('en-US')}</div>
            </Grid>
          </Grid>)}
        <Typography className="message" key={message.id}>{message.body}</Typography>
      </div>
    )
  }
}
Message.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};
export default withStyles(styles)(Message)