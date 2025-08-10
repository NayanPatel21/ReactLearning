import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setisRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setisRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setisRunning(false);
  }

  function formatTime() {
    // let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${minutes} : ${seconds} : ${milliseconds}`;
  }

  return (
    <div>
      <h1>{formatTime()}</h1>
      <br></br>
      <button onClick={start}>Start</button> &nbsp;&nbsp;
      <button onClick={stop}>Stop</button> &nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StopWatch;
