import Header from "./Header";
import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Minisidebar from "./Minisidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [minibar, setMinibar] = useState("0");
  const [largeMedia, setLargemedia] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(min-width: 840px)");
    setLargemedia(mediaWatcher.matches);
    mediaWatcher.addEventListener("change", (e) => {
      setLargemedia(e.matches);
      if (largeMedia === false) {
        setMinibar("1");
      }
    });
    return () => {
      mediaWatcher.removeEventListener("change", (e) => {
        setLargemedia(e.matches);
      });
    };
  }, []);

  const sidebar = () => {
    if (minibar === "0" && largeMedia === true) {
      setMinibar("1");
    } else if (minibar === "1" && largeMedia === true) {
      setMinibar("0");
    }
  };

  return (
    <div>
      <Router>
        {minibar === "1" ? (
          <div>
            <Minisidebar sidebar={sidebar} />
          </div>
        ) : (
          <div>
            <Sidebar sidebar={sidebar} />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
