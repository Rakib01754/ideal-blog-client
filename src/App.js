import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes></Routes>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
}

export default App;
