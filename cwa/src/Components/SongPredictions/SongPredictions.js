import React from "react";
import "./SongPredictions.css";
import {ReactComponent as MusicSVG} from '../SVG/music.svg';

const predictions = [
  "song1",
  "song2",
  "song3"
];

const SongPredictions = () => {
  return (
    <React.Fragment>
      <div className="row mt-5">
          <h3 className='mt-2' style={{color:'#333' , width: '100%'}} >
              Recommended Songs
          </h3>
        <div className="song-list-container">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <MusicSVG />
          </svg>
          <div className="song-list">
            <h2>Drivers with similar preferences also listen to:</h2>
            <ul>
              <li>Song 1</li>
              <li>Song 2</li>
              <li>Song 3</li>
              <li>Song 4</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SongPredictions;
