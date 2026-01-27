import React from "react";
import { useState, useEffect } from "react";

const Clock = ({ timeZone }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <>
      <p>
        {date.toLocaleString("en-GB", {
          timeZone: timeZone,
          dateStyle: "full",
          timeStyle: "full",
        })}
      </p>
      <p>Time Zone: {timeZone}</p>
    </>
  );
};

export default Clock;
