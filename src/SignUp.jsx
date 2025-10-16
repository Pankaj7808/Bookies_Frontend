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

const SignUp = ({ onToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
