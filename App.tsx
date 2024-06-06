import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {useAuthStore} from './src/stores/authStore';

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return <AppNavigator isAuthenticated={isAuthenticated} />;
}

export default App;
