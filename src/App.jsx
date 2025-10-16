import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // ✅ Added import
import { Box } from "@mui/material";

import theme from "./theme/theme";

import AuthPage from "./AuthPage";

export const GradientBackground = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: `
          radial-gradient(circle at 20% 20%, #f8bbd0 0%, transparent 40%),
          radial-gradient(circle at 80% 60%, #ce93d8 0%, transparent 40%),
          linear-gradient(135deg, #e1bee7 0%, #ede7f6 100%)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      {children}
    </Box>
  );
};

// Main App component
function App() {
  // Global styles
  const style = `
    html, body, #root {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GradientBackground>
          <AuthPage />
        </GradientBackground>
      </ThemeProvider>
    </>
  );
}

export default App;
