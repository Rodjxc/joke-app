import { DarkModeProvider } from "./contexts/DarkModeContext";
import CustomLayout from "./Components/Layout/Display";
import "./App.css";


function App() {
  return (
      <DarkModeProvider>
        <CustomLayout />
      </DarkModeProvider>
  );
}

export default App;
