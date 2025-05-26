import { createContext, useContext, ReactNode } from 'react';
import { client } from '../../api-query-objects/factory';

type ApiContextType = {
  client: typeof client
};

const DataContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {

  return (
    <DataContext.Provider value={{ client }}>
      {children}
    </DataContext.Provider>
  );
};

export const useApi = (): ApiContextType => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a ApiProvider');
  }

  return context;
};