import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import { Typography } from "@material-ui/core";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  helperText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  }
});

export const ActiveConversation = props => {
  const { conversation, classes } = props;
  conversation.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  return (
    <div>
      {conversation.length ? (
        conversation.map(message => {
          return <Message key={`${message.id}`} message={message} />;
        })
      ) : (
        <Typography variant="h6" className={classes.helperText}>
          Select a conversation on the left to open it
        </Typography>
      )}
    </div>
  );
};
ActiveConversation.propTypes = {
  conversation: PropTypes.array.isRequired
};
export default withRoot(withStyles(styles)(ActiveConversation));
