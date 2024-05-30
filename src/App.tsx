import { AuthProvider } from "@/core/auth/contexts/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "@/core/auth/components/ProtectedRoute";
import GuestRoute from "@/core/auth/components/GuestRoute";
import queryClient from "@/core/api/reactQueryClient";
import LoginPage from "./features/login/page/LoginPage";
import AuthLayout from "./shared/layouts/AuthLayout";
import MainLayout from "@/shared/layouts/MainLayout";
import DashboardPage from "@/features/dashboard/page/DashboardPage";

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<GuestRoute />}>
              <Route path="/" element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
              </Route>
            </Route>
             <Route path="/" element={<ProtectedRoute />}>
               <Route path="/" element={<MainLayout />}>
                 <Route path="/dashboard" element={<DashboardPage />} />
               </Route>
             </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
