import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoute";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
