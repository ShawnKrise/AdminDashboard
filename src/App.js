import { Routes, Route } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="app" >
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />     
          <Routes>
            <Route element={<Layout />}>
              <Route path="/AdminDashboard" element={<Dashboard />} />
              <Route path="AdminDashboard/dashboard" element={<Dashboard />} />
              <Route path="AdminDashboard/team" element={<Team />} />
              <Route path="AdminDashboard/contacts" element={<Contacts />} />
              <Route path="AdminDashboard/invoices" element={<Invoices />} />
              <Route path="AdminDashboard/form" element={<Form />} />
              <Route path="AdminDashboard/calendar" element={<Calendar />} />
              <Route path="AdminDashboard/faq" element={<FAQ />} />
              <Route path="AdminDashboard/bar" element={<Bar />} />
              <Route path="AdminDashboard/pie" element={<Pie />} />
              <Route path="AdminDashboard/line" element={<Line />} />
              <Route path="AdminDashboard/geography" element={<Geography />} />
            </Route>
          </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
    );
}

export default App;
