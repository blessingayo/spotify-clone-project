import React, { useEffect, useState } from "react";
import "./App.css";

import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("I HAVE A TOKEN", token);
  }, []);
  return (
    <div className="app">
      {token ? <h1>I am Logged in</h1> : <Login />}

      
    
    </div>
  );
}

export default App;
