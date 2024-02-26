import React from 'react';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {configureStore} from '@reduxjs/toolkit';
import customer from './src/Slices/customerSlice';
import user from './src/Slices/userSlice';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    customer: customer,
    user: user,
  }
});
setupListeners(store.dispatch);
const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  );
};

export default App;
