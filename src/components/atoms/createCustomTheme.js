import { createTheme } from '@mui/material/styles';

// Define a function that creates and returns the theme
const createCustomTheme = () => {
  const theme = createTheme({
    // ... your theme customization here ...
    palette: {
      primary: {
        main: '#b936ee', // Customize your primary color
      },
      secondary: {
        main: '#3bace2', // Customize your secondary color
      },
      error: {
        main: '#a11017',
      },
      warning: {
        main: '#877c17',
      },
      info: {
        main: '#175a87',
      },
      success: {
        main: '#034008',
      },
     
    },
  });

  

  return theme;
};

export default createCustomTheme;
