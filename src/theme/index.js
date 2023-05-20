const getDesignTokens = (mode) => ({
  typography: {
    allVariants: {
      fontFamily: "Cairo",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#e9f2ff",
      background: "#e9f2ff",
      default: "#e9f2ff",
      white: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#fff",
      background: "#e9f2ff",
      default: "#fff",
      contrastText: "#000",
    },
    text: {
      primary: "#000000",
      secondary: "#FCFCFC",
      white: "#fff",
      grey: "#7d7d94",
    },
    background: {
      default: "#fff",
      paper: "#fff",
      main: "#f3f6f9",
      secondary: "#f9f9fa",
    },
  },
});

export default getDesignTokens;
