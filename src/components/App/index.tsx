import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Page from "../Page";

import "./styles.css";

function App() {
  console.log("RENDER APP");

  return (
    <div className="app">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
