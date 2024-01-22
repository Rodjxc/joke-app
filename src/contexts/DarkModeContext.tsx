import { createContext, useContext, useState, ReactNode } from 'react';

//we create the dark mode with use context to be able to use it across all our components

interface DarkModeContextProps {
  children: ReactNode;
}

interface DarkModeContextValue {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextValue | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeContextProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // This const will activate and deactivate the dark mode. 
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  //This const will trigger both of the above
  const contextValue: DarkModeContextValue = {
    darkMode,
    toggleDarkMode,
  };

  //and we export/return the provider, passing the function contextValue that will trigger the dark mode
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextValue => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
