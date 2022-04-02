import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Material UI Imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme, CssBaseline } from "@material-ui/core";

// Component Imports
import AppBar from "./components/AppBar";

// Page Imports
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";
import TestPage from "./components/pages/TestPage";
import SettingsPage from "./components/pages/SettingsPage";

// Action Imports
import { setSettings } from "./actions/settings-actions";

// Local Storage Operations
import { getLocalSettings, setLocalSettings } from "./services/settingsOperations";

const App = () => {
  const dispatch = useDispatch()
  const { settings } = useSelector((state) => state)
  const theme = createTheme(settings)

  useEffect(() => {
    let localSettings = getLocalSettings();
    if (localSettings === null || localSettings === undefined)
      setLocalSettings(settings);
    else
      dispatch(setSettings(localSettings));
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/test"} element={<TestPage />} />
          <Route path={"/settings"} element={<SettingsPage />} />
          <Route element={<NoPageFound />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  )
}

export default App;
