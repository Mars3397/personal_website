import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a6d9f5', // Light sky blue color
      light: '#c4e5fa',
      dark: '#7db9dd',
    },
    secondary: {
      main: '#FF6B6B', // Coral accent
      light: '#FF9E9E',
      dark: '#E05050',
    },
    background: {
      default: '#0F1624', // Dark blue-black
      paper: 'rgba(24, 37, 56, 0.8)', // Semi-transparent navy
    },
    text: {
      primary: '#F7F7F7',
      secondary: '#BCC9D4',
    },
    error: {
      main: '#FF5757',
    },
    warning: {
      main: '#FFC857',
    },
    info: {
      main: '#57C7FF',
    },
    success: {
      main: '#6BF178',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #7db9dd 30%, #c4e5fa 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #6ba9cd 30%, #b4d5ea 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(rgba(24, 37, 56, 0.8), rgba(15, 23, 42, 0.9))',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(24, 37, 56, 0.9))',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme; 