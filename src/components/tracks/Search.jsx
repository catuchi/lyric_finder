import React, { useState, useContext } from "react";
import axios from "axios";
import { IndexContext } from "../../context";

const Search = () => {
  const { trackList, heading, setTrackList, setHeading } =
    useContext(IndexContext);
  const [trackTitle, setTrackTitle] = useState("");

  function onChange(e) {
    setTrackTitle(e.target.value);
  }

  function findTrack(e) {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setTrackList(res.data.message.body.track_list);
        setHeading("Search Results");
        setTrackTitle("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music"></i> Search For A Song
        </h1>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={findTrack}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
              name="trackTitle"
              value={trackTitle}
              onChange={onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Get Track Lyrics
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
