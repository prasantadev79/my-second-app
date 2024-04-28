import React from "react";
import "./App.css";
import Employee from "./Employee";
import {UserProvider} from "./UserContext"
import Tabledemo from "./Tabledemo";
// import SizeDemo from "./SizeDemo";


class App extends React.Component {

  render() {
    return (
      <div className="pl-3">
        <h2>1. Welcome to App Component...</h2>
        <UserProvider value="$2,000">
        <Employee></Employee>
        </UserProvider>
        <Tabledemo/>
     
        
      </div>
    );
  }
}

export default App;
