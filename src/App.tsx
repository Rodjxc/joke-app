import { DarkModeProvider } from "./contexts/DarkModeContext";
import CustomLayout from "./Components/Layout/Display";
import "./App.css";

//We add the darkMode provider wrapping the app, so it applies to all it's components

function App() {
  return (
      <DarkModeProvider>
        <CustomLayout />
      </DarkModeProvider>
  );
}

export default App;
