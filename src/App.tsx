import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "./global/themes/default";
import { Router } from "./routes/Router";
import { GlobalDefault } from "./global/global";

export default function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalDefault/>
    </ThemeProvider>
  )
}
