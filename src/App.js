import { useEffect, useState } from "react";
import { fire } from "./firebase_config";
import Home from "./Pages/Home/index";
import Login from "./Component/Login/Login";
import './App.css';

function App() {

  const [user, setUser] = useState("");

  useEffect(() => {
    authListener();
  }, [])

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email)
      } else {
        setUser(null)
      }
    })
  }

  return (
    <div>
      {
        user ?
          <Home />
          :
          <Login />

      }
    </div>
  )
}

export default App;
