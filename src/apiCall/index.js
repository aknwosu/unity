
const URL='http://ui-developer-backend.herokuapp.com/api'

export const fetchUsers = async () => {
  const data = await fetch(`${URL}/users`);
  return data.json();
  } 


export const fetchUser = async (userId) => {
  try {
    const data = await fetch(`${URL}/users/${userId}`);
    return data.json();
  } catch (error) {
    return { error };
  }
}


export const fetchConversations = async () => {
  try {
    const data = await fetch(`${URL}/conversations`);
    return data.json()
  } catch (error) {
    return { error };
  }
}

export const fetchConversation = async (id) => {
  try {
    const data = await fetch(`${URL}/conversations/${id}/messages`);
    return data.json()
  } catch (error) {
    return { error };
  }
}
