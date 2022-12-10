import "./styles.css";

import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import Modal from "@mui/material/Modal";
import DataStore from "./system/DataStore";

export default function App() {
  //vocalsynth data from json file
  const [vocalSynths, setVocalSynth] = useState(null);

  //detail information
  const [detail, setDetail] = useState(false);
  const [active, setActive] = useState(0);

  //detail's image
  const [image, setImage] = useState(null);

  //song
  const [songID, setSongID] = useState(0);
  const [song, setSong] = useState(null);

  //retrieve data form json file and save it to vocalsynths
  useEffect(() => {
    fetch("data/vs.json")
      .then((result) => result.json())
      .then((data) => {
        setVocalSynth(data);
      });
  }, []);

  //upon active id for detail changing, retrieve the image and song
  useEffect(() => {
    if (vocalSynths) {
      // console.log(
      //   vocalSynths[active].versions,
      //   vocalSynths[active].versions.length - 1
      // );
      detailReset();
    }
  }, [active]);

  //if there is no vocalsynth data, run loading screen
  if (vocalSynths == null) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }

  //retrieve the image for the details page
  function retrieveImage(id) {
    if (vocalSynths[active].versions[id]) {
      setImage(vocalSynths[active].versions[id].image);
    }
  }

  function songIncrease() {
    if (songID === vocalSynths[active].music.length - 1) {
      retrieveSong(0);
    } else {
      retrieveSong(songID + 1);
    }
  }

  function songDecrease() {
    if (songID === 0) {
      retrieveSong(vocalSynths[active].music.length - 1);
    } else {
      retrieveSong(songID - 1);
    }
  }

  function retrieveSong(id) {
    setSongID(id);
    if (vocalSynths[active].music[id]) {
      setSong(vocalSynths[active].music[id]);
    }
  }

  function detailReset() {
    DataStore.retrieveImage(
      vocalSynths[active],
      vocalSynths[active].versions.length - 1
    );
    DataStore.retrieveSong(vocalSynths[active], 0);

    retrieveImage(vocalSynths[active].versions.length - 1);
    retrieveSong(0);
  }

  async function showDetail(id) {
    await setActive(id);
    setDetail(true);
  }

  function closeDetail() {
    detailReset();
    setDetail(false);
  }

  return (
    <div className="App">
      {/* <button
        onClick={() => {
          DataStore.duplicate();
        }}
      >
        test
      </button> */}
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
            songIncrease={songIncrease}
            songDecrease={songDecrease}
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
                setActive(vocalSynths.length - 1);
              } else {
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
                setActive(0);
              } else {
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
