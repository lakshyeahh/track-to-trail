// src/components/QueryProvider.js
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface QueryProviderProps {
    children: ReactNode; // Explicitly type the children prop
  }

export default function QueryProvider({ children }: QueryProviderProps) {
  // Ensure a stable query client instance across renders
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
