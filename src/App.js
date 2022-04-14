import React from "react";
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import './App.css';
function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Box className="home-bgset">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Box>
      </Router>
    </Box>

  );
}
export default App;
