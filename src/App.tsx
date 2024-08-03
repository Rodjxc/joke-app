import "./App.css";
import { CustomLayout } from "./Components/Layout/CustomLayout";
import { DarkModeProvider } from "./Context/DarkModeContext";

//We add the darkMode provider wrapping the app, so it applies to all it's components

export function App() {
	return (
		<DarkModeProvider>
			<CustomLayout />
		</DarkModeProvider>
	);
}
