import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {useAuthStore} from './src/stores/authStore';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/queryClient';

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator isAuthenticated={isAuthenticated} />
    </QueryClientProvider>
  );
}

export default App;
