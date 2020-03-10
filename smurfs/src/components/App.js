import React, { Component } from "react";
import "./App.css";
import SmurfsList from "./component/SmurfsList";
import SmurfsForm from "./component/SmurfsForm";




class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>SMURFS! </h1>
        <SmurfsList />
        <SmurfsForm />

      </div>
    );
  }
}

export default App;
