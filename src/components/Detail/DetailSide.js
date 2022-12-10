import { useState, useEffect } from "react";
import DataStore from "../../system/DataStore";

export default function DetailSide(props) {
  // const [activeButton, ]
  // const [image, setImage] = useState(DataStore.data.image);

  // useEffect(() => {
  //   DataStore.subscribe(onImageUpdate);
  // }, []);

  // function onImageUpdate() {
  //   console.log("update");
  //   setImage(DataStore.data.image);
  // }

  let buttons = props.data.versions.map((version, index) => (
    <button
      key={index}
      className="side-button"
      style={{
        backgroundColor: props.data.color,
        width: 100 / props.data.versions.length - 3 + "%",
      }}
      onClick={() => {
        // DataStore.retrieveImage(props.data, index);
        props.retrieveImage(index);
      }}
      // onMouseEnter={(e) => e.target.}
      // onMouseLeave={() => setButtonHover(false)}
    >
      {version.version}
    </button>
  ));

  return (
    <div>
      <div className="details-side">
        <div className="side-buttons">{buttons}</div>
        <div className="side-song">
          <iframe
            height="100%"
            width="100%"
            src={props.song.link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="side-audio-player">
          <div className="player-content">
            <button
              onClick={() => {
                props.songIncrease();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
              </svg>
            </button>
            <div className="song-info">
              <p className="song-title">{props.song.title}</p>
              <p className="song-artist">{props.song.artist}</p>
            </div>
            <button
              onClick={() => {
                props.songDecrease();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
              </svg>
            </button>
          </div>
          <p className="play-text" style={{ color: props.data.color }}>
            now playing...
          </p>
        </div>
      </div>
      <div className="details-image">
        <img
          src={require("../../images/" + props.image)}
          alt={props.data.nameTranslation}
        ></img>
      </div>
    </div>
  );
}
