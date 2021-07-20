import React, { useEffect, useState } from "react";

const RenderStopWatch = () => {
  // State
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // UseEffect
  useEffect(() => {
    console.log("First render ", seconds);
    // setInterval is used to increment seconds ever second
    // setState function has a call back function that allows us to update the future of seconds
    if (isRunning) {
      const id = window.setInterval(() => {
        console.log("tick ", seconds);
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      // Clean up function: Isolates the react component from side effects**
      return () => window.clearInterval(id);
    }
  }, [isRunning]);

  return (
    <div className="stopwatch-wrapper">
      <div className="time-circle">
        <div className="time">{seconds}</div>
      </div>
      <div className="buttons">
        {!isRunning ? (
          <button
            className="play-pause"
            onClick={() => {
              setIsRunning(true);
            }}
          >
            <i className="fa fa-play fa-2x" />
            Play
          </button>
        ) : (
          <button
            className="play-pause"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            <i className="fa fa-pause fa-2x" />
            Pause
          </button>
        )}

        <button
          disabled={!isRunning}
          className="reset"
          onClick={() => {
            setSeconds(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RenderStopWatch;
