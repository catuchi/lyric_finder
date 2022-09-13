import React, { useContext } from "react";
import { IndexContext } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
  const { trackList, heading } = useContext(IndexContext);

  console.log(trackList);
  return trackList === undefined || trackList.length === 0 ? (
    <Spinner />
  ) : (
    <>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        {trackList.map((item) => (
          <Track key={item.track.track_id} track={item.track} />
        ))}
      </div>
    </>
  );
};

export default Tracks;
