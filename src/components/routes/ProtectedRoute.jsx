import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const ProtectedRoute = () => {
  const { userDetails } = useAuthContext();
  return userDetails?.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
