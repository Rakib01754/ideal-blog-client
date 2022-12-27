import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
}

export default App;
