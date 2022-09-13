import React, { useContext } from "react";
import { IndexContext } from "../../context";

const Tracks = () => {
  const { trackList } = useContext(IndexContext);

  console.log(trackList);
  return <h1>Tracks</h1>;
};

export default Tracks;
