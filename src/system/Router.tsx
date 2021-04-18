import { Switch, Route } from "react-router-dom";

import Home from "components/pages/Home";
import PostEdit from "components/pages/PostEdit";
import About from "components/pages/About";
import Contacts from "components/pages/Contacts";
import Gallery from "components/pages/Gallery";

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
    <Route path="/posts/edit/:postId">
      <PostEdit />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Router;
