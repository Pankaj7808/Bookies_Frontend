import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onToggle }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login, loading, logout, error } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {  
    e.preventDefault();
    try {
      const data = await login({
        email: email,
        password: password,
      });
      navigate("/home");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Lora', serif",
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
        }}
      >
        Bookies.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "100%",
            maxWidth: isSmallScreen ? 340 : 700,
            p: 4,
            borderRadius: 6,
          }}
        >
          <Typography variant="h4" textAlign="center" mb={3}>
            Login
          </Typography>

          <Stack spacing={3}>
            <TextField
              variant="outlined"
              label="Email"
              required
              fullWidth
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              required
              fullWidth
              onChange={(e) => setpassword(e.target.value)}
            />
          </Stack>

          <Button variant="contained" fullWidth sx={{ mt: 3 }} type="submit" onClick={handleLogin}>
            {loading ? "Logging in..." : "Login"}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Don't have an account?{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                display: "inline",
              }}
              onClick={onToggle}
            >
              Sign Up
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default Login;
