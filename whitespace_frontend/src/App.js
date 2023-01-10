import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./components/SignUp"
import Signin from "./components/SignIn";
import Footer from "./components/Footer";
import Supervisor from "./components/Supervisor";
import Student from "./components/Student";
import Hero from "./components/Hero"
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <Router>
      <CssBaseline />
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Reviews" component={Reviews} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/supervisor" component={Supervisor} />
        <Route path="/student" component={Student} />
        <Route path="/stranger" component={Hero} />
      </Switch>
      {/* <Footer
      title="Footer"
      // description="Something here to give the footer a purpose!"
    /> */}
    </Router>

  );
}

export default App;
