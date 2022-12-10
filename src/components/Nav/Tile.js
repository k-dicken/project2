import { useState } from "react";

export default function Tile(props) {
  //track if the tile is being hovered over, necessary for using the data colors when hovered
  const [hover, setHover] = useState(false);

  return (
    <div
      key={props.vocalsynth.id}
      className="tile"
      style={{
        backgroundColor: hover ? props.vocalsynth.color : "#fff",
      }}
      //set hover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      //show detail modal
      onClick={() => {
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
            fontSize:
              20 / props.vocalsynth.nameOriginal.length < 5
                ? 20 / props.vocalsynth.nameOriginal.length + "vh"
                : 4 + "vh",
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
