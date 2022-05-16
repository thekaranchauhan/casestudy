import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";
import Recipes from "./components/Recipes";
import VerifyPin from "./components/VerifyEmailAndPin/VerifyPin";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/verify-email"} element={<VerifyPin />} />
          <Route path={"/recipes"} element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
