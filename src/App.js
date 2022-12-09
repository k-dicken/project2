import "./styles.css";

import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import Modal from "@mui/material/Modal";

export default function App() {
  const [vocalSynths, setVocalSynth] = useState(null);

  const [detail, setDetail] = useState(false);
  const [active, setActive] = useState(0);
  const [image, setImage] = useState(0);
  const [song, setSong] = useState(0);
  // const [sortedData, setSortedData] = useState(null);

  useEffect(() => {
    fetch("data/vs.json")
      .then((result) => result.json())
      .then((data) => {
        setVocalSynth(data);
        // setSortedData(
        //   data.sort((a, b) => b.releaseDate.year - a.releaseDate.year)
        // );
      });
    window.scrollTo(0, window.innerHeight * 0.1);
  }, []);

  if (vocalSynths == null) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }

  function retrieveImage(id) {
    if (vocalSynths[active].versions[id]) {
      setImage(vocalSynths[active].versions[id].image);
      console.log(id, vocalSynths[active].versions[id].image);
    }
  }

  function retrieveSong(id) {
    if (vocalSynths[active].music[id]) {
      setSong(vocalSynths[active].music[id]);
      console.log(id, vocalSynths[active].music[id]);
    }
  }

  async function showDetail(id) {
    console.log(active);
    await setActive(id);
    console.log(active);
    setDetail(true);
    await retrieveImage(0);
  }

  function closeDetail() {
    retrieveImage(0);
    setDetail(false);
  }

  return (
    <div className="App">
      <Modal
        open={detail}
        onClose={closeDetail}
        BackdropProps={{
          style: { backgroundColor: "rgba(238, 238, 239, .6)" },
        }}
      >
        <div className="modal">
          <Detail
            data={vocalSynths[active]}
            image={image}
            retrieveImage={retrieveImage}
            song={song}
            retrieveSong={retrieveSong}
            activeID={active}
            setActive={setActive}
            detail={detail}
            closeDetail={closeDetail}
          />
          <svg
            className="details-arrow button-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => {
              if (active === 0) {
                // setActiveVersion(0);
                console.log("left = 0");
                setActive(vocalSynths.length - 1);
              } else {
                // setActiveVersion(0);
                console.log("left regular");
                setActive(active - 1);
              }
            }}
          >
            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>
          <svg
            className="details-arrow button-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => {
              if (active === vocalSynths.length - 1) {
                // setActiveVersion(0);
                console.log("right = length");
                setActive(0);
              } else {
                // console.log(props.activeID - 1);
                // setActiveVersion(0);
                console.log("right regular");
                setActive(active + 1);
              }
            }}
          >
            <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>
        </div>
      </Modal>

      <Nav
        data={vocalSynths}
        showDetail={showDetail}
        closeDetail={closeDetail}
      />
    </div>
  );
}
