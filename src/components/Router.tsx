import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";

const Router = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/contacts">
      <Contacts />
    </Route>
    <Route path="/gallery">
      <Gallery />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Router;
