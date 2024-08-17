import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const previous = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      if (audioRef.current) {
        audioRef.current.play();
      }
      setPlayStatus(true);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      if (audioRef.current) {
        audioRef.current.play();
      }
      setPlayStatus(true);
    }
  };

  const seekSong = (e) => {
    if (audioRef.current) {
      const seekTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
    }
  };

  const playWithId = (input) => {
    let selectedTrack;

    if (typeof input === "number") {
      selectedTrack = songsData.find((song) => song.id === input);
    } else if (typeof input === "object") {
      selectedTrack = input;
    }

    if (selectedTrack) {
      setTrack(selectedTrack);

      if (audioRef.current) {
        audioRef.current.src = selectedTrack.file;
        audioRef.current.play();
        setPlayStatus(true);
      } else {
        console.error("Audio element not found");
      }
    } else {
      console.error("Track not found");
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.file;
      if (playStatus) {
        audioRef.current.play();
      }
    }
  }, [track, playStatus]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        seekBar.current.style.width = `${(currentTime / duration) * 100}%`;
        setTime({
          currentTime: {
            second: Math.floor(currentTime % 60),
            minute: Math.floor(currentTime / 60),
          },
          totalTime: {
            second: Math.floor(duration % 60),
            minute: Math.floor(duration / 60),
          },
        });
      };
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        track,
        playStatus,
        play,
        pause,
        previous,
        next,
        seekSong,
        seekBg,
        seekBar,
        time,
        playWithId,
      }}
    >
      {children}
      <audio ref={audioRef} preload="auto"></audio>
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
