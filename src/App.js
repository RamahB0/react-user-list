import React from "react";
import UserList from "./UserList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>User Directory</h1>
        <p>Users fetched from the JSONPlaceholder API</p>
      </header>
      <UserList />
    </div>
  );
}

export default App;
