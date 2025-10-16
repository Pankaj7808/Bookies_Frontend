import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', 
    background: {
      default: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      paper: 'rgba(255, 255, 255, 0.3)', 
    },
    primary: {
      main: '#4a4a4a', 
    },
    secondary: {
      main: '#ffabbfff',  
    },
    text: {
      primary: '#2c2c2c', 
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Inter', sans-serif`, 
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#2c2c2c',
    },
    body1: {
      fontSize: '1rem',
      color: '#555555',
    },
  },
  shape: {
    borderRadius: 4, 
    },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.25)',  // translucent white for glass effect
          backdropFilter: 'blur(15px)',  // heavy blur for frosted glass
          border: '1px solid rgba(255, 255, 255, 0.3)',  // subtle white border
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)', // soft shadow
          borderRadius: '16px',
        },
      },
    },
     MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none', // keep button text as-is
        borderRadius: '12px',
        padding: '10px 24px',
        fontWeight: '600',
        fontSize: '1rem',
        backgroundColor: '#ffabbf', // default pink background
        color: '#fff',
        '&:hover': {
          backgroundColor: '#ff94ad', // slightly darker on hover
        },
      },
    },
  },
},

  
});

export default theme;
