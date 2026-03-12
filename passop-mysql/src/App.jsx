import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";
import Login from "./Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when app loads
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        // Show Login Page
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        // Show Main Application
        <>
          <Navbar />
          <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <Manager />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;