import React, { createContext, ReactNode, useContext, useState } from "react";

//Initial Values
const initialValues = {
  isConnected: false,
  setIsConnected: () => {},
  isLoading: false,
  setIsLoading: () => {},
  address: "",
  setAddress: () => {},
};

//Initial Value Types
type initialValueTypes = {
  isConnected: boolean;
  setIsConnected: (newState: boolean) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  address: string;
  setAddress: (newState: string) => void;
};

const AppContext = createContext<initialValueTypes>(initialValues);

type AppContextProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: AppContextProps) => {
  const [isConnected, setIsConnected] = useState(initialValues.isConnected);
  const [isLoading, setIsLoading] = useState(initialValues.isLoading);
  const [address, setAddress] = useState(initialValues.address);

  return (
    <AppContext.Provider
      value={{
        isConnected,
        setIsConnected,
        isLoading,
        setIsLoading,
        address,
        setAddress,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export function useContextComponent(): initialValueTypes {
  const context = useContext(AppContext);
  return context;
}
