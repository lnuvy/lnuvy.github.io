'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { createContext, useState } from 'react';

const ClientRootContext = ({ children }: React.PropsWithChildren) => {
  const { Provider } = createContext(null);

  const [client] = useState(new QueryClient());

  return (
    <Provider value={null}>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default ClientRootContext;
