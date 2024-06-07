import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {AppNavigator} from './src/navigation';
import {useAuthStore} from './src/stores';
import {queryClient} from './src/services';

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator isAuthenticated={isAuthenticated} />
    </QueryClientProvider>
  );
}

export default App;
