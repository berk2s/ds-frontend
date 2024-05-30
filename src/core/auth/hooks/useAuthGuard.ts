import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/core/auth/contexts/AuthContext";

const useAuthGuard = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context?.user) {
      navigate("/login");
    }
  }, [context?.user, navigate]);
};

export default useAuthGuard;
