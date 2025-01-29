import React, { useState } from "react";
import SelectTime from "../select/SelectTime";

const Clock = () => {
  const [time, setTime] = useState();
  const currentTime = new Date();
  console.log(currentTime);
  // const totalTime;

  return (
    <div>
      <div className="clock"></div>
      <div>
        {currentTime.getHours()} : {currentTime.getMinutes()} :{" "}
        {currentTime.getSeconds()}
      </div>
      <SelectTime />
    </div>
  );
};

export default Clock;
