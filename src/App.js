// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import * as React from "react";
import LogonPage from "./pages/logon";
import Page2 from './pages/page2';
import LandingPage from './component/LandingPage';






function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route
                    path="/page1"
                    element={<LogonPage />}
                />
                <Route
                    path="/page2"
                    element={<Page2 />}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
