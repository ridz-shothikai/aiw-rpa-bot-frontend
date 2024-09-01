'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function QueryClientProviderWrapper({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}