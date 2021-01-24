import CardsContainer from "components/CardsContainer/CardsContainer";
import React from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <Form />
      <CardsContainer />
    </div>
  );
}

export default App;
