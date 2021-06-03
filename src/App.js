import React from "react";
import "./styles/styles.scss";
import Nav from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Registration from "./components/registration/registration.jsx";
import Footer from "./components/footer/footer.jsx";
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForms from "./components/register/register";
>>>>>>> 0d2409a019dc4f5c1bbd5e9e7c1ad251bde51903

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <div className="nav">
            <Nav />
          </div>

          <div>
            <AnimatedSwitch
              atEnter={{ opacity: 0, transition: "20ms ease-in" }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route path="/" exact component={Home} />

              <div>
                <Route path="/about" component={Home} />
                <Route path="/events" component={Home} />
                <Route path="/advisory" component={Home} />
                <Route path="/sponsers" component={Home} />
                <Route path="/team" component={Home} />

                <Route path="/registration" component={RegisterForms} />
                
                <Route path="/quickLinks" component={Home} />
              </div>
            </AnimatedSwitch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
