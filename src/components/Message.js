import React, { Component } from 'react'
import { fetchUser } from '../apiCall'
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    // width: 100,
  },
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
      <Paper className={classes.paper} spacing={16}>
        {user && (
          <Grid container direction="row">
            <Grid>
              <Avatar alt="Remy Sharp" src={user.avatar_url}  />
            </Grid>
            <Grid>
              <Grid>{user.username}</Grid>
              <Grid>{date.toLocaleString('en-US')}</Grid>
            </Grid>
          </Grid>)}
        <div className="message" key={message.id}>{message.body}</div>
      </Paper>
    )
  }
}
Message.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};
export default withStyles(styles)(Message)