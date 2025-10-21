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

const SignUp = ({ onToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [role, setrole] = useState("")
  const{signUp,loading,error} = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async(e)=>{
    e.preventDefault();
    try{
       const data = await signUp({name,email,password,role});
       navigate("/home");
       console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }

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
            maxWidth: isSmallScreen ? 340 : 500,
            p: 4,
            borderRadius: 6,
          }}
        >
          <Typography variant="h4" textAlign="center" mb={3}>
            Sign Up
          </Typography>

          <Stack spacing={3}>
            <TextField variant="outlined" label="Name" required fullWidth  onChange={(e)=>setname(e.target.value)}/>
            <TextField variant="outlined" label="Email" required fullWidth  onChange={(e)=>setemail(e.target.value)}/>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              required
              fullWidth
              onChange={(e)=>setpassword(e.target.value)}
            />
            <TextField variant="outlined" label="Role" required fullWidth   onChange={(e)=>setrole(e.target.value)} />
          </Stack>

          <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={handleSignUp}>
            Sign Up
          </Button>
          {loading && <Typography sx={{ mt: 2, textAlign: "center" }}>Signing Up...</Typography>}
          {error && <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>{error}</Typography>}

          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Already have an account?{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                display: "inline",
              }}
              onClick={onToggle}
            >
              Login
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
