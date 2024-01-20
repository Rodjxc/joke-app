import { createContext, useContext, useState, ReactNode } from 'react';

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

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const contextValue: DarkModeContextValue = {
    darkMode,
    toggleDarkMode,
  };

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
