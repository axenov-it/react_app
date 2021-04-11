import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "../static/Footer";
import Header from "../static/Header";
import Router from "system/Router";

import "./styles.css";

export const ValueContext: any = createContext(null);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <ValueContext.Provider value="vasa">
          <main className="page">
            <Router />
          </main>
        </ValueContext.Provider>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
