import React, { useEffect, useState } from "react";
import { Router as DefaultRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Placeholder from "./Containers/Placeholder";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Application = () => {
  const getIsSmall = () => {
    const { innerWidth: width } = window;
    return width <= 768;
  };

  const [isSmall, setIsSmall] = useState(getIsSmall());
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(getIsSmall());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DefaultRouter history={history}>
      <NavBar isSmall={isSmall} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/about"
          render={(props) => <Placeholder {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/:type"
          render={(props) => <Placeholder {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/news"
          render={(props) => <Placeholder {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/careers"
          render={(props) => <Placeholder {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/contact"
          render={(props) => <Placeholder {...props} isSmall={isSmall} />}
        />
      </Switch>
      <Footer isSmall={isSmall} />
    </DefaultRouter>
  );
};

export default Application;
