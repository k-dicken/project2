import Tile from "./Tile";
import BlankTile from "./BlankTile";
import { useState } from "react";

export default function Nav(props) {
  let accentColor = "#45414B";
  let bgColor = "#E0E0E1";
  let blankColor = "#FFFFFF";

  const [highlight, setHighlight] = useState([]);

  // console.log(Math.floor(data.length / 4) + 1);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-column">
          <BlankTile color={accentColor} />
          <BlankTile color={bgColor} />
          <BlankTile color={accentColor} />
          <BlankTile color={blankColor} />
        </div>
        <div className="nav-column">
          <BlankTile color={accentColor} />
          <Tile
            vocalsynth={props.data[0]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={bgColor} />
          <Tile
            vocalsynth={props.data[1]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={accentColor} />
          <BlankTile color={bgColor} />
        </div>
        <div className="nav-column">
          <BlankTile color={bgColor} />
          <Tile
            vocalsynth={props.data[2]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <Tile
            vocalsynth={props.data[3]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <Tile
            vocalsynth={props.data[4]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <Tile
            vocalsynth={props.data[5]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={blankColor} />
        </div>
        <div className="nav-column">
          <BlankTile color={blankColor} />
          <Tile
            vocalsynth={props.data[6]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={accentColor} />
          <BlankTile color={blankColor} />
          <Tile
            vocalsynth={props.data[7]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={bgColor} />
        </div>
        <div className="nav-column">
          <BlankTile color={bgColor} />
          <BlankTile color={bgColor} />
          <Tile
            vocalsynth={props.data[8]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <Tile
            vocalsynth={props.data[9]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={accentColor} />
          <Tile
            vocalsynth={props.data[10]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
        </div>
        <div className="nav-column">
          <BlankTile color={bgColor} />
          <BlankTile color={accentColor} />
          <BlankTile color={bgColor} />
          <Tile
            vocalsynth={props.data[11]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={bgColor} />
          <Tile
            vocalsynth={props.data[12]}
            showDetail={props.showDetail}
            closeDetail={props.closeDetail}
            highlight={true}
          />
          <BlankTile color={blankColor} />
          <BlankTile color={blankColor} />
        </div>
      </div>
    </div>
  );
}
