import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoute";
import { AuthProvider } from "./providers/AuthProvider";
import { CounterProvider } from "./providers/CounterProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CounterProvider>
          <AppRoutes />
          </CounterProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
