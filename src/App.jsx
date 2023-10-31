import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import "./App.css";
import Home from "./components/Home";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      {user ? (
        <div className="grid place-items-center mt-10">
          <div className="flex gap-10">
            <Left onLogout={handleLogout} />
            <Center />
            <Right />
          </div>
        </div>
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
