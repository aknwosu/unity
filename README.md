# React frontend assignment

The goal of this test assignment is to create a simple read-only chat application which fetches and displays data from a REST API. You may use the provided component library - Material UI, use a different one, or even go on without one. Feel free to add other libraries you might find useful. 

Please return the assignment as an archived ZIP or TAR file and include the Git history (the `.git` directory) within the archive.

## Application features

1. Displays a list of all conversations in the left-side panel. Each conversation contains an avatar, username and an indicator informing whether there are any unread messages within that conversation.
2. Whenever a conversation is selected, its contents are be displayed in the right-side panel. Conversation messages are shown in chronological order (newest at the bottom). Timestamp is displayed next to each message.
3. The data is retrieved from the following [REST API](http://ui-developer-backend.herokuapp.com/api). There is no authentication and the API has the following endpoints:
    * GET `/conversations` - get all conversations
    * GET `/conversations/:conversationId/messages` - get all messages in a given conversation
    * GET `/users` - get all users
    * GET `/users/:userId` - get a single user

### Requirements
- The application renders correctly in Chrome
- The code is thoroughly unit tested are the tests are passing. While `jest` and `enzyme` are provided, you can use any other tools
- The layout contains the list of conversations on the left, and contents of a selected conversation on the right. You may follow the design provided below, or come up with one on your own.

### An example of how the application could look like:

![Chat app layout](/docs/app-layout.png?raw=true "Test assignment app layout")

## About the project

This project is based on [Material UI's create-react-app example](https://github.com/mui-org/material-ui/tree/master/examples/create-react-app). More information about the setup and configuration can be found in the [reate-react-app documentation](https://facebook.github.io/create-react-app/docs/getting-started).
