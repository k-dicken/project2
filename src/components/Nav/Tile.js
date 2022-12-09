import { useState } from "react";

export default function Tile(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      key={props.vocalsynth.id}
      className="tile"
      style={{
        backgroundColor: hover ? props.vocalsynth.color : "#fff",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        console.log(
          "tile",
          props.vocalsynth.id,
          props.vocalsynth.nameTranslation
        );
        props.showDetail(props.vocalsynth.id);
      }}
    >
      <div className="tile-text">
        <p
          className="secondary-name"
          style={{
            border: hover ? props.vocalsynth.color : "#fff",
          }}
        >
          {props.vocalsynth.nameTranslation}
        </p>
        <p
          style={{
            color: hover ? "#fff" : props.vocalsynth.color,
            border: hover ? props.vocalsynth.color : "#fff",
          }}
          className="primary-name"
        >
          {props.vocalsynth.nameOriginal}
        </p>
      </div>
      <div className="tile-image">
        <div className="image-space">
          <img
            src={require("../../images/" +
              props.vocalsynth.versions[props.vocalsynth.versions.length - 1]
                .image)}
            alt={props.vocalsynth.nameTranslation}
          ></img>
        </div>
      </div>
      <div
        className="tile-before"
        style={{ backgroundColor: props.vocalsynth.color }}
      ></div>
    </div>
  );
}
