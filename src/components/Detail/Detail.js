// import { useState, useEffect } from "react";
import DetailSide from "./DetailSide";
import DetailMain from "./DetailMain";

export default function Detail(props) {
  if (props.activeID == null) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="modal">
    <div className="details">
      <DetailMain data={props.data} closeDetail={props.closeDetail} />
      <DetailSide
        data={props.data}
        image={props.image}
        retrieveImage={props.retrieveImage}
        song={props.song}
        songIncrease={props.songIncrease}
        songDecrease={props.songDecrease}
      />
    </div>
  );
}
