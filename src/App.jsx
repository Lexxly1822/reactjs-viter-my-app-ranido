import Home from "./components/pages/website/home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardHome from "./components/pages/developer/home/DashboardHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="*" element={<h1>404 - Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardHome />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
