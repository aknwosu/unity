import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

export const ActiveConversation = props => {
  const { conversation } = props;
  conversation.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  return (
    conversation && conversation.map((message) => {
      return (
        <Message key={`${message.id}`} message={message}/>
      )
    })
  )
  }
ActiveConversation.propTypes = {
  conversation: PropTypes.array.isRequired,
};
export default ActiveConversation;
