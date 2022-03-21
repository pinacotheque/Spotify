import React from "react";
import { useSelector } from "react-redux";

export default function Library() {
  const likedSongs = useSelector((state) => state.likedSongs);
  console.log("likedSongs", likedSongs);

  return (
    <div className="offset-2 pt-5">
      <h3>Liked Songs</h3>
      {likedSongs && likedSongs.map((song) => <li>{song.title} </li>)}
    </div>
  );
}
