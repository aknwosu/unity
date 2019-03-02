import React from 'react'
import { shallow, mount } from 'enzyme';
import { Conversations } from '../components/Conversations'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const users = [
  {
    "id": "1",
    "username": "John",
    "avatar_url": "http://placekitten.com/g/300/300"
  },
  {
    "id": "2",
    "username": "Amy",
    "avatar_url": "http://placekitten.com/g/301/301"
  },
  {
    "id": "3",
    "username": "Jeremy",
    "avatar_url": "http://placekitten.com/g/302/302"
  }
]
const messages = [
  {
    "id": "3",
    "with_user_id": "1",
    "unread_message_count": 0
  },
  {
    "id": "1",
    "with_user_id": "2",
    "unread_message_count": 1
  },
  {
    "id": "2",
    "with_user_id": "3",
    "unread_message_count": 0
  },
 
]
describe('Conversations', () => {
  const setConversation = jest.fn()

  it('renders without crashing', () => {
    const props = { classes: {} };
    shallow(<Conversations {...props} setConversation={setConversation} />);
  });

  it('renders a user avatar', () => {
    const props = { classes: {} }
    const testM = mount(<Conversations {...props} setConversation={setConversation} />);
    testM.setState({users})
    expect(testM.find(Avatar)).toBeDefined()
  });

  it('renders users', () => {
    const props = { classes: {},  setConversation}
    const testM = mount(<Conversations {...props} setConversation={setConversation}/>);
    testM.setState({users, conversations: messages})
    testM.find(Grid).first().simulate('click');
    testM.setState({conversations: messages})
    expect(setConversation).toHaveBeenCalledWith(users[0], '3');
  });

  it('gets conversations', () => {
    const props = { classes: {},  setConversation}
    const testM = mount(<Conversations {...props} setConversation={setConversation}/>);
    testM.setState({users, conversations: messages})
    expect(testM.find(Typography).last().text()).toBeDefined();
    expect(testM.find(Typography).last().text()).toEqual('All caught up');
  });
});
