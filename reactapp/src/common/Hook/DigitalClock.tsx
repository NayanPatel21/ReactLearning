import { useState, useEffect } from "react";
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padString(hours)} : ${padString(minutes)} : ${padString(
      seconds
    )} ${meridiem} `;
  }

  function padString(num: number) {
    return (num > 9 ? "" : "0") + num;
  }

  return (
    <>
      <div style={{ fontSize: "2em" }}> {formatTime()} </div>
    </>
  );
};

export default DigitalClock;
