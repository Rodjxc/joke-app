import { createContext, useState, type ReactNode } from "react";

// We create the dark mode context with useContext to be able to use it across all our components

interface DarkModeContextProps {
	children: ReactNode;
}

interface DarkModeContextValue {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextValue | undefined>(
	undefined,
);

export const DarkModeProvider: React.FC<DarkModeContextProps> = ({
	children,
}) => {
	const [darkMode, setDarkMode] = useState(false);

	// This function will activate and deactivate the dark mode.
	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	// This context value will provide the current state and the toggle function.
	const contextValue: DarkModeContextValue = {
		darkMode,
		toggleDarkMode,
	};

	// We export/return the provider, passing the contextValue that will trigger the dark mode
	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};
