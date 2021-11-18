import React, { useEffect, useState } from "react";
import { Router as DefaultRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import News from "./Containers/News";
import Contact from "./Containers/Contact";
import Error404 from "./Containers/Error404";
import Careers from "./Containers/Careers";
import About from "./Containers/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Residential from "./Containers/Residential";
import Commercial from "./Containers/Commercial";
import Retail from "./Containers/Retail";
import Farmhouse from "./Containers/Farmhouse";
import Warehousing from "./Containers/Warehousing";
import Industrial from "./Containers/Industrial";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Application = () => {
  const getIsSmall = () => {
    const { innerWidth: width } = window;
    return width <= 800;
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
          render={(props) => <About {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/residential"
          render={(props) => <Residential {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/commercial"
          render={(props) => <Commercial {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/retail"
          render={(props) => <Retail {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/luxury_farmhouses"
          render={(props) => <Farmhouse {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/warehousing"
          render={(props) => <Warehousing {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/projects/industrial"
          render={(props) => <Industrial {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/news"
          render={(props) => <News {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/careers"
          render={(props) => <Careers {...props} isSmall={isSmall} />}
        />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} isSmall={isSmall} />}
        />
        <Route
          path="/"
          render={(props) => <Error404 {...props} isSmall={isSmall} />}
        />
      </Switch>
      <Footer isSmall={isSmall} />
    </DefaultRouter>
  );
};

export default Application;
