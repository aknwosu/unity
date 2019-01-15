# React frontend assignment

The goal of test assignment is to create a simplistic read-only chat application, that fetches data from a REST API and displays it. Return
the assignment as an archived ZIP or TAR file and please include the Git history (.git -directory) within the archive.

The end result might look like this:

![Chat app layout](/docs/app-layout.png?raw=true "Test assignment app layout")

## Application features

1. Application needs to display a list of all conversations in a side view.
It should display avatar, username and indication of unread messages for each conversation.
2. Application needs to display single conversation when it is selected in the main view.
Conversation messages should be displayed in sorted order (newest on bottom).
Timestamp needs to be displayed next to each message.
3. There is no need to replicate styling from the example above, but application layout should be similar.
5. Data should be retrieved from the following [http://ui-developer-backend.herokuapp.com/api](http://ui-developer-backend.herokuapp.com/api) REST API.
There is no authentication and the API has the following endpoints:
    * GET `/conversations` - get all conversations
    * GET `/users` - get all users
    * GET `/users/:id` - get user with `id`
    * GET `/conversations/:id/messages` - get messages for a conversation with `id`

Feel free to use any additional libraries that you might need to implement this app.
You can use any component library instead of `Material UI` or go with pure React.

When it comes to browser support the only requirement is that app needs to be able to run in Chrome.

Do not forget to add a proper set of tests for your code.
The project has `jest` and `enzyme` setup for tests, but you can change this setup if you prefer other tools.

# About the project

This project is based on Material UI `create-react-app` [example](https://github.com/mui-org/material-ui/tree/master/examples/create-react-app)

More information about setup and configuration can be found in `create-react-app` [documentation](https://facebook.github.io/create-react-app/docs/getting-started).
