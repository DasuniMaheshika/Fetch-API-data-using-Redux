import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UsersTable from './UserTable';

const App = () => {
  return (
    <Provider store={store}>
      <UsersTable />
    </Provider>
  );
};

export default App;