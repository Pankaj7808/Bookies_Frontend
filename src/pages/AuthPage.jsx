import { useState } from "react";
import Login from "../Components/auth/Login";
import SignUp from "../Components/auth/SignUp";
import { Box } from "@mui/material";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuth = () => setIsLogin((prev) => !prev);

  return (
    <Box>
      {isLogin ? <Login onToggle={toggleAuth} /> : <SignUp onToggle={toggleAuth} />}
    </Box>
  );
};

export default AuthPage;
