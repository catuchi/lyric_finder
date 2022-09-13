import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { IndexContext } from "./context";

function App() {
  const [trackList, setTrackList] = useState([
    { track: { track_name: "abc" } },
    { track: { track_name: "123" } },
  ]);
  const [heading, setheading] = useState("Top 10 Tracks");
  return (
    <IndexContext.Provider value={{ trackList, heading }}>
      <BrowserRouter>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </IndexContext.Provider>
  );
}

export default App;
