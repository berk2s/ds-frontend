import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const GuestRoute = () => {
  const context = useContext(AuthContext);

  return !context?.user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default GuestRoute;
