import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { IndexContext } from "./context";

function App() {
  const [trackList, setTrackList] = useState([]);
  const [heading, setheading] = useState("Top 10 Tracks");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        // console.log(res.data);
        setTrackList(res.data.message.body.track_list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <IndexContext.Provider value={{ trackList, heading }}>
      <BrowserRouter>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lyrics/track/:id" element={<Lyrics />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </IndexContext.Provider>
  );
}

export default App;
