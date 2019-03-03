import  {fetchUsers, fetchUser, fetchConversations, fetchConversation} from './index';


describe('APICalls', () => {

  it('fetchUsers', async () => {
    const response = await fetchUsers()
    expect(response).toBeInstanceOf(Array)
  });
  
  it('fetchUser', async () => {
    const response = await fetchUser(1)
    expect(response).toBeInstanceOf(Object)
  });
  it('fetchConversations', async () => {
    const response = await fetchConversations()
    expect(response).toBeInstanceOf(Array)
  });
  it('fetchConversation', async () => {
    const response = await fetchConversation(1)
    expect(response).toBeInstanceOf(Object)
  });
});
