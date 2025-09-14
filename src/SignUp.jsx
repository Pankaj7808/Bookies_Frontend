import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";

const SignUp = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Lora', serif",
          fontWeight: 600,
          textAlign: 'center',
       
       
        }}
      >
        📖 Bookies.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 490,
          maxWidth: 500,
          width: "100%",
          p: 2,
          mx: "auto",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            maxWidth: 600,
            width: "100%",
            p: 4,
            borderRadius: 6,
            background: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Typography variant="h4" textAlign="center" mb={3}>
            Sign Up
          </Typography>

          <Stack spacing={3}>
            <TextField variant="outlined" label="Name" required fullWidth />
            <TextField variant="outlined" label="Email" required fullWidth />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              required
              fullWidth
            />
          </Stack>

          <Button variant="contained" fullWidth sx={{ mt: 3 }}>
            Sign Up
          </Button>

          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            Already have an account?{" "}
            <Box
              component="span"
              sx={{ fontWeight: 'bold', cursor: "pointer", display: "inline" }}
            >
              Sign In
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
