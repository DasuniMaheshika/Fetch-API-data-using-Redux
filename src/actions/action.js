export const fetchUsers = () => {
  return (dispatch) => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data));
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
};

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users,
  };
};
