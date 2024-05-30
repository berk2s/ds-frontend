import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const context = useContext(AuthContext);

  return context?.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
