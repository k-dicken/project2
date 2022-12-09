// import { useState, useEffect } from "react";
import DetailSide from "./DetailSide";
import DetailMain from "./DetailMain";

export default function Detail(props) {
  // console.log(props.data.id, props.data.nameTranslation);
  // useEffect(() => {
  //   console.log("useEffect");
  //   //   // console.log("activeID", props.activeID);
  //   //   // console.log("versions", props.data[props.activeID].versions.length);
  //   //   console.log(
  //   //     "useEffect",
  //   //     props.data[props.activeID].nameTranslation,
  //   //     props.data[props.activeID].versions.length + " versions"
  //   //   );
  //   //   // setActiveVersion(1);
  //   //   setActiveVersion(props.data[props.activeID].versions.length - 1);
  //   setActiveVersion(0);
  // }, [props.activeID]);

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
      />
    </div>
  );
}

// function displayArrayData(arr) {
//   let content = arry;
//   return arr
// }
