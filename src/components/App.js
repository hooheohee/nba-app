import React from "react";
import "../styles/App.css";

import TopNavBar from "../components/NavBar";
import Main from "./Main";

const App = () => {
  return (
    <div className="App">
      <TopNavBar />
      <Main />
    </div>
  );
};

export default App;
