import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import "./App.css";
import getDesignTokens from "./theme";
import Main from "./Pages/Main";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  document.body.setAttribute("dir", "rtl");

  const theme = useMemo(() => {
    return createTheme({
      direction: "rtl",
      ...getDesignTokens(),
    });
  }, []);

  let plugins = [prefixer];
  plugins.push(rtlPlugin);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
