import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./translations/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n.tsx";
import { QueryClient, QueryClientProvider } from "react-query";


//Basic setup of queryClient. We also wrap our <App> with the i18n and the queryClientProvider to be able to use them in our app
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
  <I18nextProvider i18n={i18n}>
      <App />
  </I18nextProvider>
  </QueryClientProvider>,
);
