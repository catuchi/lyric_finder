import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

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

    fetchLyrics();
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

    fetchTrack();
  }, []);

  return track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0 ? (
    <Spinner />
  ) : (
    <>
      <Link to={"/"} className="btn btn-dark btn-sm mb-4">
        Go Back
      </Link>
      <div className="card">
        <h5 className="card-header">
          {track.track_name} by{" "}
          <span className="text-secondary">{track.artist_name}</span>
        </h5>
        <div className="card-body">
          <p className="cart-text">{lyrics.lyrics_body}</p>
        </div>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Album ID</strong>: {track.album_id}
        </li>
        <li className="list-group-item">
          <strong>Song Genre</strong>:{" "}
          {
            track.primary_genres.music_genre_list[0].music_genre
              .music_genre_name
          }
        </li>
        <li className="list-group-item">
          <strong>Explicit Words</strong>: {track.explicit === 0 ? "No" : "Yes"}
        </li>
      </ul>
    </>
  );
  // <div>
  //   <h1>Lyrics</h1>
  // </div>
};

export default Lyrics;
