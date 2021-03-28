import { BrowserRouter } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import Router from "../Router";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="page">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
