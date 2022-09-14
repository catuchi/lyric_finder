import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Lyrics = () => {
  let { id } = useParams();
  id = parseInt(id);
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        // console.log(res.data);
        setLyrics(res.data.message.body.lyrics);
      } catch (error) {
        console.log(error);
      }
    };

    // fetchLyrics();
  }, []);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        // console.log(res.data);
        setTrack(res.data.message.body.track);
      } catch (error) {
        console.log(error);
      }
    };

    // fetchTrack();
  }, []);

  return (
    <div>
      <h1>Lyrics</h1>
    </div>
  );
};

export default Lyrics;
