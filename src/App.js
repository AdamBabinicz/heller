import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/Sign-Up/SignUp";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aktywnosc" exact component={Services} />
        <Route path="/zyciorys" exact component={Products} />
        <Route path="/uczony" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
