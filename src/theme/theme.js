import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // soft light mode
    background: {
      default: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', // soft warm gradient background
      paper: 'rgba(255, 255, 255, 0.3)', // semi-transparent paper for glass effect
    },
    primary: {
      main: '#4a4a4a', // dark gray for main text
    },
    secondary: {
      main: '#ffabbfff', // soft pink accent for buttons or highlights
    },
    text: {
      primary: '#2c2c2c', // dark text
      secondary: '#555555', // secondary text
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Inter', sans-serif`, // modern fonts
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
    borderRadius: 4, // nice rounded corners
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
